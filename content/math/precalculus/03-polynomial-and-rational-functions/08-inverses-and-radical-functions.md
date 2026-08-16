---
title: Inverses and Radical Functions
description: >-
  Finding the inverse of a polynomial function by interchanging inputs and
  outputs, and restricting the domain of a function that is not one-to-one —
  including radical and rational functions — so that a valid inverse exists —
  adapted from OpenStax Precalculus 2e, Section 3.8.
source_section: "3.8"
weight: 8
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the inverse of a polynomial function
- Restrict the domain to find the inverse of a polynomial function
{{< /callout >}}

Park rangers and other trail managers may construct rock piles, stacks, or
other arrangements, usually called cairns, to mark trails or other
landmarks. (Rangers and environmental scientists discourage hikers from
doing the same, in order to avoid confusion and preserve the habitats of
plants and animals.) A cairn in the form of a mound of gravel is in the
shape of a cone with the height equal to twice the radius.

The volume is found using a formula from elementary geometry.

$$
\begin{array}{lrcl}
& V &=& \tfrac{1}{3}\pi r^2h \\[4pt]
& &=& \tfrac{1}{3}\pi r^2(2r) \\[4pt]
& &=& \tfrac{2}{3}\pi r^3
\end{array}
$$

We have written the volume $V$ in terms of the radius $r$. However, in some
cases, we may start out with the volume and want to find the radius. For
example: a customer purchases 100 cubic feet of gravel to construct a
cone-shaped mound with a height twice the radius. What are the radius and
height of the new cone? To answer this question, we use the formula

$$r=\sqrt[3]{\tfrac{3V}{2\pi}}$$

This function is the inverse of the formula for $V$ in terms of $r$.

In this section, we will explore the inverses of polynomial and rational
functions and, in particular, the radical functions we encounter in the
process.

## Finding the inverse of a polynomial function

Two functions $f$ and $g$ are inverse functions if for every coordinate
pair in $f$, $(a,b)$, there exists a corresponding coordinate pair in the
**inverse function**, $g$, $(b,a)$. In other words, the coordinate pairs of
the inverse functions have the input and output interchanged.

For a function to have an inverse, it must be **one-to-one**.

For example, suppose the Sustainability Club builds a water runoff
collector in the shape of a parabolic trough, shown below. We can use the
information in the figure to find the surface area of the water in the
trough as a function of the depth of the water.

<div class="ap-figure" data-spec='{"type":"figure","ariaLabel":"A schematic diagram of a parabolic trough. The front cross section is the parabola y = x squared over 2, spanning 12 inches across the top rim from (-6, 18) to (6, 18) down to a vertex at the bottom, with an 18-inch height leader at the left. The same curve, offset up and to the right, represents the far end of the trough 3 feet away, with the top rims and bottom ridge connected by straight edges.","unit":11.5,"segments":[{"from":[-6,18],"to":[-5,12.5]},{"from":[-5,12.5],"to":[-4,8]},{"from":[-4,8],"to":[-3,4.5]},{"from":[-3,4.5],"to":[-2,2]},{"from":[-2,2],"to":[-1,0.5]},{"from":[-1,0.5],"to":[0,0]},{"from":[0,0],"to":[1,0.5]},{"from":[1,0.5],"to":[2,2]},{"from":[2,2],"to":[3,4.5]},{"from":[3,4.5],"to":[4,8]},{"from":[4,8],"to":[5,12.5]},{"from":[5,12.5],"to":[6,18]},{"from":[4,24],"to":[5,18.5]},{"from":[5,18.5],"to":[6,14]},{"from":[6,14],"to":[7,10.5]},{"from":[7,10.5],"to":[8,8]},{"from":[8,8],"to":[9,6.5]},{"from":[9,6.5],"to":[10,6]},{"from":[10,6],"to":[11,6.5]},{"from":[11,6.5],"to":[12,8]},{"from":[12,8],"to":[13,10.5]},{"from":[13,10.5],"to":[14,14]},{"from":[14,14],"to":[15,18.5]},{"from":[15,18.5],"to":[16,24]},{"from":[-6,18],"to":[4,24]},{"from":[6,18],"to":[16,24],"label":"3 ft","labelSide":"right"},{"from":[0,0],"to":[10,6],"dashed":true},{"from":[-6,20],"to":[6,20],"arrow":"both","label":"12 in","labelSide":"left"},{"from":[-7.5,0],"to":[-7.5,18],"arrow":"both","label":"18 in","labelSide":"left"}]}'>
<svg role="img" aria-label="A schematic diagram of a parabolic trough. The front cross section is the parabola y = x squared over 2, spanning 12 inches across the top rim from (-6, 18) to (6, 18) down to a vertex at the bottom, with an 18-inch height leader at the left. The same curve, offset up and to the right, represents the far end of the trough 3 feet away, with the top rims and bottom ridge connected by straight edges." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342 348" width="342" height="348" font-family="Helvetica, Arial, sans-serif">
  <line x1="53.3" y1="105" x2="64.8" y2="168.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="64.8" y1="168.3" x2="76.3" y2="220" stroke="currentColor" stroke-width="1.5"/>
  <line x1="76.3" y1="220" x2="87.8" y2="260.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="87.8" y1="260.3" x2="99.3" y2="289" stroke="currentColor" stroke-width="1.5"/>
  <line x1="99.3" y1="289" x2="110.8" y2="306.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="110.8" y1="306.3" x2="122.3" y2="312" stroke="currentColor" stroke-width="1.5"/>
  <line x1="122.3" y1="312" x2="133.8" y2="306.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="133.8" y1="306.3" x2="145.3" y2="289" stroke="currentColor" stroke-width="1.5"/>
  <line x1="145.3" y1="289" x2="156.8" y2="260.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156.8" y1="260.3" x2="168.3" y2="220" stroke="currentColor" stroke-width="1.5"/>
  <line x1="168.3" y1="220" x2="179.8" y2="168.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="179.8" y1="168.3" x2="191.3" y2="105" stroke="currentColor" stroke-width="1.5"/>
  <line x1="168.3" y1="36" x2="179.8" y2="99.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="179.8" y1="99.3" x2="191.3" y2="151" stroke="currentColor" stroke-width="1.5"/>
  <line x1="191.3" y1="151" x2="202.8" y2="191.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="202.8" y1="191.3" x2="214.3" y2="220" stroke="currentColor" stroke-width="1.5"/>
  <line x1="214.3" y1="220" x2="225.8" y2="237.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="225.8" y1="237.3" x2="237.3" y2="243" stroke="currentColor" stroke-width="1.5"/>
  <line x1="237.3" y1="243" x2="248.8" y2="237.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="248.8" y1="237.3" x2="260.3" y2="220" stroke="currentColor" stroke-width="1.5"/>
  <line x1="260.3" y1="220" x2="271.8" y2="191.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="271.8" y1="191.3" x2="283.3" y2="151" stroke="currentColor" stroke-width="1.5"/>
  <line x1="283.3" y1="151" x2="294.8" y2="99.3" stroke="currentColor" stroke-width="1.5"/>
  <line x1="294.8" y1="99.3" x2="306.3" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="53.3" y1="105" x2="168.3" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="191.3" y1="105" x2="306.3" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="254.9" y="90.8" text-anchor="start" font-size="13" fill="currentColor">3 ft</text>
  <line x1="122.3" y1="312" x2="237.3" y2="243" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="59.3" y1="82" x2="185.3" y2="82" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="191.3,82 183.3,86 183.3,78" fill="currentColor"/>
  <polygon points="53.3,82 61.3,78 61.3,86" fill="currentColor"/>
  <text x="122.3" y="68" text-anchor="middle" font-size="13" fill="currentColor">12 in</text>
  <line x1="36" y1="306" x2="36" y2="111" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="36,105 40,113 32,113" fill="currentColor"/>
  <polygon points="36,312 32,304 40,304" fill="currentColor"/>
  <text x="24" y="212.5" text-anchor="end" font-size="13" fill="currentColor">18 in</text>
</svg>
</div>

Because it will be helpful to have an equation for the parabolic
cross-sectional shape, we will impose a coordinate system at the cross
section, with $x$ measured horizontally and $y$ measured vertically, with
the origin at the vertex of the parabola. See the graph below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of y equals one-half x squared, an upward parabola with vertex at the origin, from x = -8 to x = 8 and y = 0 to y = 20, arrows at both ends.","xMin":-8,"xMax":8,"yMin":-2,"yMax":20,"unit":19,"xGridStep":2,"yGridStep":2,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":0.5}]}'>
<svg role="img" aria-label="The graph of y equals one-half x squared, an upward parabola with vertex at the origin, from x = -8 to x = 8 and y = 0 to y = 20, arrows at both ends." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 470" width="356" height="470" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="444" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="64" y1="444" x2="64" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="102" y1="444" x2="102" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="140" y1="444" x2="140" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="216" y1="444" x2="216" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="444" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="292" y1="444" x2="292" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="330" y1="444" x2="330" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="444" x2="330" y2="444" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="368" x2="330" y2="368" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="330" x2="330" y2="330" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="292" x2="330" y2="292" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="254" x2="330" y2="254" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="330" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="178" x2="330" y2="178" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="140" x2="330" y2="140" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="102" x2="330" y2="102" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="64" x2="330" y2="64" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="330" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="406" x2="332" y2="406" stroke="currentColor" stroke-width="1"/>
  <line x1="178" y1="24" x2="178" y2="446" stroke="currentColor" stroke-width="1"/>
  <polygon points="342,406 332,411 332,401" fill="currentColor"/>
  <polygon points="178,14 183,24 173,24" fill="currentColor"/>
  <polygon points="14,406 24,401 24,411" fill="currentColor"/>
  <polygon points="178,456 173,446 183,446" fill="currentColor"/>
  <text x="340" y="398" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="186" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="403" x2="26" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="421" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="64" y1="403" x2="64" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="421" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="102" y1="403" x2="102" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="102" y="421" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="140" y1="403" x2="140" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="421" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="216" y1="403" x2="216" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="216" y="421" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="254" y1="403" x2="254" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="254" y="421" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="292" y1="403" x2="292" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="292" y="421" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="330" y1="403" x2="330" y2="409" stroke="currentColor" stroke-width="1"/>
  <text x="330" y="421" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="175" y1="444" x2="181" y2="444" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="448" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="175" y1="368" x2="181" y2="368" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="372" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="175" y1="330" x2="181" y2="330" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="334" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="175" y1="292" x2="181" y2="292" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="296" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="175" y1="254" x2="181" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="258" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="175" y1="216" x2="181" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="220" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="175" y1="178" x2="181" y2="178" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="182" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="175" y1="140" x2="181" y2="140" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="144" font-size="11" fill="currentColor" text-anchor="end">14</text>
  <line x1="175" y1="102" x2="181" y2="102" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="106" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="175" y1="64" x2="181" y2="64" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="68" font-size="11" fill="currentColor" text-anchor="end">18</text>
  <line x1="175" y1="26" x2="181" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="172" y="30" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <polyline points="59.3,35 59.5,36.5 59.8,38 60,39.6 60.3,41.1 60.5,42.7 60.8,44.2 61,45.8 61.3,47.3 61.5,48.8 61.8,50.4 62,51.9 62.3,53.4 62.5,54.9 62.8,56.5 63,58 63.3,59.5 63.5,61 63.8,62.5 64,64 64.3,65.5 64.5,67 64.7,68.5 65,70 65.3,71.5 65.5,72.9 65.8,74.4 66,75.9 66.3,77.4 66.5,78.8 66.8,80.3 67,81.8 67.2,83.2 67.5,84.7 67.8,86.1 68,87.6 68.3,89 68.5,90.5 68.8,91.9 69,93.3 69.3,94.8 69.5,96.2 69.8,97.6 70,99.1 70.3,100.5 70.5,101.9 70.7,103.3 71,104.7 71.3,106.1 71.5,107.5 71.8,108.9 72,110.3 72.3,111.7 72.5,113.1 72.8,114.5 73,115.9 73.3,117.2 73.5,118.6 73.8,120 74,121.4 74.2,122.7 74.5,124.1 74.8,125.5 75,126.8 75.3,128.2 75.5,129.5 75.8,130.9 76,132.2 76.3,133.6 76.5,134.9 76.7,136.2 77,137.6 77.3,138.9 77.5,140.2 77.8,141.5 78,142.8 78.3,144.2 78.5,145.5 78.8,146.8 79,148.1 79.3,149.4 79.5,150.7 79.8,152 80,153.3 80.2,154.6 80.5,155.8 80.8,157.1 81,158.4 81.3,159.7 81.5,160.9 81.8,162.2 82,163.5 82.3,164.7 82.5,166 82.8,167.2 83,168.5 83.3,169.7 83.5,171 83.7,172.2 84,173.5 84.3,174.7 84.5,175.9 84.8,177.2 85,178.4 85.3,179.6 85.5,180.8 85.8,182.1 86,183.3 86.2,184.5 86.5,185.7 86.8,186.9 87,188.1 87.3,189.3 87.5,190.5 87.8,191.7 88,192.8 88.3,194 88.5,195.2 88.8,196.4 89,197.6 89.3,198.7 89.5,199.9 89.7,201.1 90,202.2 90.3,203.4 90.5,204.5 90.8,205.7 91,206.8 91.3,208 91.5,209.1 91.8,210.2 92,211.4 92.3,212.5 92.5,213.6 92.8,214.7 93,215.9 93.2,217 93.5,218.1 93.8,219.2 94,220.3 94.3,221.4 94.5,222.5 94.8,223.6 95,224.7 95.3,225.8 95.5,226.9 95.7,228 96,229.1 96.3,230.1 96.5,231.2 96.8,232.3 97,233.3 97.3,234.4 97.5,235.5 97.8,236.5 98,237.6 98.3,238.6 98.5,239.7 98.8,240.7 99,241.8 99.2,242.8 99.5,243.8 99.8,244.9 100,245.9 100.3,246.9 100.5,247.9 100.8,249 101,250 101.3,251 101.5,252 101.8,253 102,254 102.3,255 102.5,256 102.8,257 103,258 103.3,259 103.5,259.9 103.8,260.9 104,261.9 104.3,262.9 104.5,263.8 104.8,264.8 105,265.8 105.3,266.7 105.5,267.7 105.8,268.6 106,269.6 106.3,270.5 106.5,271.5 106.8,272.4 107,273.3 107.3,274.3 107.5,275.2 107.8,276.1 108,277.1 108.2,278 108.5,278.9 108.8,279.8 109,280.7 109.3,281.6 109.5,282.5 109.8,283.4 110,284.3 110.3,285.2 110.5,286.1 110.8,287 111,287.9 111.3,288.7 111.5,289.6 111.8,290.5 112,291.4 112.3,292.2 112.5,293.1 112.8,294 113,294.8 113.3,295.7 113.5,296.5 113.8,297.4 114,298.2 114.3,299.1 114.5,299.9 114.8,300.7 115,301.6 115.3,302.4 115.5,303.2 115.8,304 116,304.8 116.3,305.7 116.5,306.5 116.8,307.3 117,308.1 117.3,308.9 117.5,309.7 117.8,310.5 118,311.3 118.3,312.1 118.5,312.8 118.8,313.6 119,314.4 119.3,315.2 119.5,315.9 119.8,316.7 120,317.5 120.3,318.2 120.5,319 120.8,319.7 121,320.5 121.3,321.2 121.5,322 121.8,322.7 122,323.5 122.3,324.2 122.5,324.9 122.8,325.7 123,326.4 123.3,327.1 123.5,327.8 123.8,328.6 124,329.3 124.3,330 124.5,330.7 124.8,331.4 125,332.1 125.3,332.8 125.5,333.5 125.8,334.2 126,334.8 126.3,335.5 126.5,336.2 126.8,336.9 127,337.6 127.3,338.2 127.5,338.9 127.8,339.6 128,340.2 128.3,340.9 128.5,341.5 128.8,342.2 129,342.8 129.3,343.5 129.5,344.1 129.8,344.7 130,345.4 130.3,346 130.5,346.6 130.8,347.2 131,347.9 131.3,348.5 131.5,349.1 131.8,349.7 132,350.3 132.3,350.9 132.5,351.5 132.8,352.1 133,352.7 133.3,353.3 133.5,353.9 133.8,354.5 134,355.1 134.3,355.6 134.5,356.2 134.8,356.8 135,357.3 135.3,357.9 135.5,358.5 135.8,359 136,359.6 136.3,360.1 136.5,360.7 136.8,361.2 137,361.8 137.3,362.3 137.5,362.8 137.8,363.4 138,363.9 138.3,364.4 138.5,364.9 138.8,365.5 139,366 139.3,366.5 139.5,367 139.8,367.5 140,368 140.3,368.5 140.5,369 140.8,369.5 141,370 141.3,370.5 141.5,370.9 141.8,371.4 142,371.9 142.3,372.4 142.5,372.8 142.8,373.3 143,373.8 143.3,374.2 143.5,374.7 143.8,375.1 144,375.6 144.3,376 144.5,376.5 144.8,376.9 145,377.3 145.3,377.8 145.5,378.2 145.8,378.6 146,379.1 146.3,379.5 146.5,379.9 146.8,380.3 147,380.7 147.3,381.1 147.5,381.5 147.8,381.9 148,382.3 148.3,382.7 148.5,383.1 148.8,383.5 149,383.9 149.3,384.2 149.5,384.6 149.8,385 150,385.4 150.3,385.7 150.5,386.1 150.8,386.5 151,386.8 151.3,387.2 151.5,387.5 151.8,387.9 152,388.2 152.3,388.6 152.5,388.9 152.8,389.2 153,389.6 153.3,389.9 153.5,390.2 153.8,390.5 154,390.8 154.3,391.2 154.5,391.5 154.8,391.8 155,392.1 155.3,392.4 155.5,392.7 155.8,393 156,393.3 156.3,393.6 156.5,393.8 156.8,394.1 157,394.4 157.3,394.7 157.5,394.9 157.8,395.2 158,395.5 158.3,395.7 158.5,396 158.8,396.2 159,396.5 159.3,396.7 159.5,397 159.8,397.2 160,397.5 160.3,397.7 160.5,397.9 160.8,398.2 161,398.4 161.3,398.6 161.5,398.8 161.8,399.1 162,399.3 162.3,399.5 162.5,399.7 162.8,399.9 163,400.1 163.3,400.3 163.5,400.5 163.8,400.7 164,400.8 164.3,401 164.5,401.2 164.8,401.4 165,401.6 165.3,401.7 165.5,401.9 165.8,402.1 166,402.2 166.3,402.4 166.5,402.5 166.8,402.7 167,402.8 167.3,403 167.5,403.1 167.8,403.2 168,403.4 168.3,403.5 168.5,403.6 168.8,403.7 169,403.9 169.3,404 169.5,404.1 169.8,404.2 170,404.3 170.3,404.4 170.5,404.5 170.8,404.6 171,404.7 171.3,404.8 171.5,404.9 171.8,405 172,405.1 172.3,405.1 172.5,405.2 172.8,405.3 173,405.3 173.3,405.4 173.5,405.5 173.8,405.5 174,405.6 174.3,405.6 174.5,405.7 174.8,405.7 175,405.8 175.3,405.8 175.5,405.8 175.8,405.9 176,405.9 176.3,405.9 176.5,405.9 176.8,406 177,406 177.3,406 177.5,406 177.8,406 178,406 178.3,406 178.5,406 178.8,406 179,406 179.3,406 179.5,405.9 179.8,405.9 180,405.9 180.3,405.9 180.5,405.8 180.8,405.8 181,405.8 181.3,405.7 181.5,405.7 181.8,405.6 182,405.6 182.3,405.5 182.5,405.5 182.8,405.4 183,405.3 183.3,405.3 183.5,405.2 183.8,405.1 184,405.1 184.3,405 184.5,404.9 184.8,404.8 185,404.7 185.3,404.6 185.5,404.5 185.7,404.4 186,404.3 186.3,404.2 186.5,404.1 186.8,404 187,403.9 187.3,403.7 187.5,403.6 187.8,403.5 188,403.4 188.3,403.2 188.5,403.1 188.8,403 189,402.8 189.3,402.7 189.5,402.5 189.8,402.4 190,402.2 190.3,402.1 190.5,401.9 190.8,401.7 191,401.6 191.3,401.4 191.5,401.2 191.8,401 192,400.8 192.3,400.7 192.5,400.5 192.8,400.3 193,400.1 193.3,399.9 193.5,399.7 193.8,399.5 194,399.3 194.3,399.1 194.5,398.8 194.8,398.6 195,398.4 195.3,398.2 195.5,397.9 195.8,397.7 196,397.5 196.3,397.2 196.5,397 196.8,396.7 197,396.5 197.3,396.2 197.5,396 197.8,395.7 198,395.5 198.3,395.2 198.5,394.9 198.8,394.7 199,394.4 199.3,394.1 199.5,393.8 199.8,393.6 200,393.3 200.3,393 200.5,392.7 200.8,392.4 201,392.1 201.3,391.8 201.5,391.5 201.8,391.2 202,390.8 202.3,390.5 202.5,390.2 202.8,389.9 203,389.6 203.3,389.2 203.5,388.9 203.8,388.6 204,388.2 204.3,387.9 204.5,387.5 204.8,387.2 205,386.8 205.3,386.5 205.5,386.1 205.8,385.7 206,385.4 206.3,385 206.5,384.6 206.8,384.2 207,383.9 207.3,383.5 207.5,383.1 207.8,382.7 208,382.3 208.3,381.9 208.5,381.5 208.8,381.1 209,380.7 209.3,380.3 209.5,379.9 209.8,379.5 210,379.1 210.3,378.6 210.5,378.2 210.8,377.8 211,377.3 211.3,376.9 211.5,376.5 211.8,376 212,375.6 212.3,375.1 212.5,374.7 212.8,374.2 213,373.8 213.3,373.3 213.5,372.8 213.8,372.4 214,371.9 214.3,371.4 214.5,370.9 214.8,370.5 215,370 215.3,369.5 215.5,369 215.8,368.5 216,368 216.3,367.5 216.5,367 216.8,366.5 217,366 217.3,365.5 217.5,364.9 217.8,364.4 218,363.9 218.3,363.4 218.5,362.8 218.8,362.3 219,361.8 219.3,361.2 219.5,360.7 219.8,360.1 220,359.6 220.3,359 220.5,358.5 220.8,357.9 221,357.3 221.3,356.8 221.5,356.2 221.8,355.6 222,355.1 222.3,354.5 222.5,353.9 222.8,353.3 223,352.7 223.3,352.1 223.5,351.5 223.8,350.9 224,350.3 224.3,349.7 224.5,349.1 224.8,348.5 225,347.9 225.3,347.2 225.5,346.6 225.8,346 226,345.4 226.3,344.7 226.5,344.1 226.8,343.5 227,342.8 227.3,342.2 227.5,341.5 227.8,340.9 228,340.2 228.3,339.6 228.5,338.9 228.8,338.2 229,337.6 229.3,336.9 229.5,336.2 229.8,335.5 230,334.8 230.3,334.2 230.5,333.5 230.8,332.8 231,332.1 231.3,331.4 231.5,330.7 231.8,330 232,329.3 232.3,328.6 232.5,327.8 232.8,327.1 233,326.4 233.3,325.7 233.5,324.9 233.8,324.2 234,323.5 234.3,322.7 234.5,322 234.8,321.2 235,320.5 235.3,319.7 235.5,319 235.8,318.2 236,317.5 236.3,316.7 236.5,315.9 236.8,315.2 237,314.4 237.3,313.6 237.5,312.8 237.8,312.1 238,311.3 238.3,310.5 238.5,309.7 238.8,308.9 239,308.1 239.3,307.3 239.5,306.5 239.8,305.7 240,304.8 240.3,304 240.5,303.2 240.8,302.4 241,301.6 241.3,300.7 241.5,299.9 241.8,299.1 242,298.2 242.3,297.4 242.5,296.5 242.8,295.7 243,294.8 243.3,294 243.5,293.1 243.8,292.2 244,291.4 244.3,290.5 244.5,289.6 244.8,288.7 245,287.9 245.3,287 245.5,286.1 245.8,285.2 246,284.3 246.3,283.4 246.5,282.5 246.8,281.6 247,280.7 247.3,279.8 247.5,278.9 247.8,278 248,277.1 248.3,276.1 248.5,275.2 248.8,274.3 249,273.3 249.3,272.4 249.5,271.5 249.8,270.5 250,269.6 250.3,268.6 250.5,267.7 250.8,266.7 251,265.8 251.3,264.8 251.5,263.8 251.8,262.9 252,261.9 252.3,260.9 252.5,259.9 252.8,259 253,258 253.3,257 253.5,256 253.8,255 254,254 254.3,253 254.5,252 254.8,251 255,250 255.3,249 255.5,247.9 255.8,246.9 256,245.9 256.3,244.9 256.5,243.8 256.8,242.8 257,241.8 257.3,240.7 257.5,239.7 257.8,238.6 258,237.6 258.3,236.5 258.5,235.5 258.8,234.4 259,233.3 259.3,232.3 259.5,231.2 259.8,230.1 260,229.1 260.3,228 260.5,226.9 260.8,225.8 261,224.7 261.3,223.6 261.5,222.5 261.8,221.4 262,220.3 262.3,219.2 262.5,218.1 262.8,217 263,215.9 263.3,214.7 263.5,213.6 263.8,212.5 264,211.4 264.3,210.2 264.5,209.1 264.8,208 265,206.8 265.3,205.7 265.5,204.5 265.8,203.4 266,202.2 266.3,201.1 266.5,199.9 266.8,198.7 267,197.6 267.3,196.4 267.5,195.2 267.8,194 268,192.8 268.3,191.7 268.5,190.5 268.8,189.3 269,188.1 269.3,186.9 269.5,185.7 269.8,184.5 270,183.3 270.3,182.1 270.5,180.8 270.8,179.6 271,178.4 271.3,177.2 271.5,175.9 271.8,174.7 272,173.5 272.3,172.2 272.5,171 272.8,169.7 273,168.5 273.3,167.2 273.5,166 273.8,164.7 274,163.5 274.3,162.2 274.5,160.9 274.8,159.7 275,158.4 275.3,157.1 275.5,155.8 275.8,154.6 276,153.3 276.3,152 276.5,150.7 276.8,149.4 277,148.1 277.3,146.8 277.5,145.5 277.8,144.2 278,142.8 278.3,141.5 278.5,140.2 278.8,138.9 279,137.6 279.3,136.2 279.5,134.9 279.8,133.6 280,132.2 280.3,130.9 280.5,129.5 280.8,128.2 281,126.8 281.3,125.5 281.5,124.1 281.8,122.7 282,121.4 282.3,120 282.5,118.6 282.8,117.2 283,115.9 283.3,114.5 283.5,113.1 283.8,111.7 284,110.3 284.3,108.9 284.5,107.5 284.8,106.1 285,104.7 285.3,103.3 285.5,101.9 285.8,100.5 286,99.1 286.3,97.6 286.5,96.2 286.8,94.8 287,93.3 287.3,91.9 287.5,90.5 287.8,89 288,87.6 288.3,86.1 288.5,84.7 288.8,83.2 289,81.8 289.3,80.3 289.5,78.8 289.8,77.4 290,75.9 290.3,74.4 290.5,72.9 290.8,71.5 291,70 291.3,68.5 291.5,67 291.8,65.5 292,64 292.3,62.5 292.5,61 292.8,59.5 293,58 293.3,56.5 293.5,54.9 293.8,53.4 294,51.9 294.3,50.4 294.5,48.8 294.8,47.3 295,45.8 295.3,44.2 295.5,42.7 295.8,41.1 296,39.6 296.3,38 296.5,36.5 296.7,35" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="58,27.1 64.5,36.1 54.6,37.7" fill="currentColor"/>
  <polygon points="298,27.1 301.4,37.7 291.5,36.1" fill="currentColor"/>
</svg>
</div>

From this we find an equation for the parabolic shape. We placed the
origin at the vertex of the parabola, so we know the equation will have
form $y(x)=ax^2$. Our equation will need to pass through the point
$(6,18)$, from which we can solve for the stretch factor $a$.

$$
\begin{array}{lrcl}
& 18 &=& a\cdot6^2 \\[4pt]
& a &=& \tfrac{18}{36} \\[4pt]
& &=& \tfrac{1}{2}
\end{array}
$$

Our parabolic cross section has the equation

$$y(x)=\tfrac{1}{2}x^2$$

We are interested in the surface area of the water, so we must determine
the width at the top of the water as a function of the water depth. For
any depth $y$ the width will be given by $2x$, so we need to solve the
equation above for $x$ and find the inverse function. However, notice that
the original function is not one-to-one, and indeed, given any output
there are two inputs that produce the same output, one positive and one
negative.

To find an inverse, we can restrict our original function to a limited
domain on which it is one-to-one. In this case, it makes sense to restrict
ourselves to positive $x$ values. On this domain, we can find an inverse
by solving for the input variable:

$$
\begin{array}{lrcl}
& y &=& \tfrac{1}{2}x^2 \\[4pt]
& 2y &=& x^2 \\[4pt]
& x &=& \pm\sqrt{2y} \\[4pt]
\therefore & y &=& \pm\sqrt{2x}
\end{array}
$$

This is not a function as written. Since we are limiting ourselves to
positive $x$ values in the original function, we can eliminate the
negative solution, which gives us the inverse function we're looking for.

$$y=\sqrt{2x}$$

Because $x$ is the distance from the center of the parabola to either
side, the entire width of the water at the top will be $2x$. The trough is
3 feet (36 inches) long, so the surface area will then be:

$$
\begin{array}{lrcl}
\text{Area} &=& l\cdot w \\[4pt]
&=& 36\cdot2x \\[4pt]
&=& 72x \\[4pt]
&=& 72\sqrt{2y}
\end{array}
$$

This example illustrates two important points:

- When finding the inverse of a quadratic, we have to limit ourselves to a
  domain on which the function is one-to-one.
- The inverse of a quadratic function is a square root function. Both are
  toolkit functions and different types of power functions.

Functions involving roots are often called **radical functions**. While it
is not possible to find an inverse of most polynomial functions, some
basic polynomials do have inverses. Such functions are called
**invertible functions**, and we use the notation $f^{-1}(x)$.

Warning: $f^{-1}(x)$ is not the same as the reciprocal of the function
$f(x)$. This use of "$-1$" is reserved to denote inverse functions. To
denote the reciprocal of a function $f(x)$, we would need to write
$(f(x))^{-1}=\tfrac{1}{f(x)}$.

An important relationship between inverse functions is that they "undo"
each other. If $f^{-1}$ is the inverse of a function $f$, then $f$ is the
inverse of the function $f^{-1}$. In other words, whatever the function
$f$ does to $x$, $f^{-1}$ undoes it — and vice versa. More formally, we
write

$$f^{-1}(f(x))=x,\ \text{for all }x\text{ in the domain of }f$$

and

$$f(f^{-1}(x))=x,\ \text{for all }x\text{ in the domain of }f^{-1}$$

{{< callout type="info" >}}
  **Verifying two functions are inverses of one another.** Two functions,
  $f$ and $g$, are inverses of one another if for all $x$ in the domain of
  $f$ and $g$.

  $$g(f(x))=f(g(x))=x$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a polynomial function, find the inverse of the
  function by restricting the domain in such a way that the new function
  is one-to-one.

  1. Replace $f(x)$ with $y$.
  2. Interchange $x$ and $y$.
  3. Solve for $y$, and rename the function $f^{-1}(x)$.
{{< /callout >}}

**Example.** Show that $f(x)=\tfrac{1}{x+1}$ and $f^{-1}(x)=\tfrac{1}{x}-1$
are inverses, for $x\ne0,-1$.

**Solution.** We must show that $f^{-1}(f(x))=x$ and $f(f^{-1}(x))=x$.

$$
\begin{array}{lrcl}
f^{-1}(f(x)) &=& f^{-1}\left(\tfrac{1}{x+1}\right) \\[4pt]
&=& \cfrac{1}{\tfrac{1}{x+1}}-1 \\[4pt]
&=& (x+1)-1 \\[4pt]
&=& x
\end{array}
$$

$$
\begin{array}{lrcl}
f(f^{-1}(x)) &=& f\left(\tfrac{1}{x}-1\right) \\[4pt]
&=& \cfrac{1}{\left(\tfrac{1}{x}-1\right)+1} \\[4pt]
&=& \cfrac{1}{\tfrac{1}{x}} \\[4pt]
&=& x
\end{array}
$$

Therefore, $f(x)=\tfrac{1}{x+1}$ and $f^{-1}(x)=\tfrac{1}{x}-1$ are
inverses.

{{< fillin
  question="To begin verifying that $f(x)=\tfrac{x+5}{3}$ and $f^{-1}(x)=3x-5$ are inverses, evaluate $f(1)$."
  answer="2"
  answerDisplay="$f(1)=\tfrac{1+5}{3}=2$"
  hint="Substitute $x=1$ into $f(x)=\tfrac{x+5}{3}$."
>}}

{{< fillin
  question="Now evaluate $f^{-1}$ at that result."
  answer="1"
  answerDisplay="$f^{-1}(2)=3(2)-5=1$, so $f^{-1}(f(1))=1$, confirming the two functions are inverses."
  hint="Substitute the value you just found into $f^{-1}(x)=3x-5$."
>}}

**Example.** Find the inverse of the function $f(x)=5x^3+1$.

**Solution.** This is a transformation of the basic cubic toolkit
function, and based on our knowledge of that function, we know it is
one-to-one. Solving for the inverse by solving for $x$.

$$
\begin{array}{lrcl}
& y &=& 5x^3+1 \\[4pt]
& x &=& 5y^3+1 \\[4pt]
& x-1 &=& 5y^3 \\[4pt]
& \tfrac{x-1}{5} &=& y^3 \\[4pt]
f^{-1}(x) &=& \sqrt[3]{\tfrac{x-1}{5}}
\end{array}
$$

**Analysis.** Look at the graph of $f$ and $f^{-1}$ below. Notice that the
two graphs are symmetrical about the line $y=x$. This is always the case
when graphing a function and its inverse function.

Also, since the method involved interchanging $x$ and $y$, notice
corresponding points. If $(a,b)$ is on the graph of $f$, then $(b,a)$ is on
the graph of $f^{-1}$. Since $(0,1)$ is on the graph of $f$, then $(1,0)$
is on the graph of $f^{-1}$. Similarly, since $(1,6)$ is on the graph of
$f$, then $(6,1)$ is on the graph of $f^{-1}$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 5x cubed plus 1 in blue, rising steeply through (0, 1) and (1, 6), and its inverse f inverse of x equals the cube root of the quantity x minus 1, divided by 5, in red, passing through (1, 0) and (6, 1). A dashed line marks y = x, showing the two curves are mirror images across it.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":24,"xGridStep":2,"yGridStep":2,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"cubics":[{"a":5,"d":1}],"curves":[{"kind":"cbrt","a":0.5848035476425733,"h":1,"k":0}],"points":[{"at":[0,1],"label":"(0, 1)","labelSide":"nw"},{"at":[1,6],"label":"(1, 6)","labelSide":"n"},{"at":[1,0],"label":"(1, 0)","labelSide":"s"},{"at":[6,1],"label":"(6, 1)","labelSide":"ne"}],"texts":[{"at":[-4.6,5.6],"text":"y = x","anchor":"start"},{"at":[0.5,4.4],"text":"f(x)","anchor":"start"},{"at":[3.2,1.7],"text":"f^{-1}(x)","anchor":"start"}]}'>
<svg role="img" aria-label="The graph of f of x equals 5x cubed plus 1 in blue, rising steeply through (0, 1) and (1, 6), and its inverse f inverse of x equals the cube root of the quantity x minus 1, divided by 5, in red, passing through (1, 0) and (6, 1). A dashed line marks y = x, showing the two curves are mirror images across it." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" width="340" height="340" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="314" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="314" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="314" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="314" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="314" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="314" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="314" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="314" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="314" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="314" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="314" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="316" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="24" x2="170" y2="316" stroke="currentColor" stroke-width="1"/>
  <polygon points="326,170 316,175 316,165" fill="currentColor"/>
  <polygon points="170,14 175,24 165,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="170,326 165,316 175,316" fill="currentColor"/>
  <text x="324" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="178" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="167" x2="26" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="185" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="74" y1="167" x2="74" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="185" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="122" y1="167" x2="122" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="185" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="218" y1="167" x2="218" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="185" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="167" x2="266" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="185" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="314" y1="167" x2="314" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="185" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="167" y1="314" x2="173" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="318" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="167" y1="266" x2="173" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="167" y1="218" x2="173" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="167" y1="122" x2="173" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="167" y1="74" x2="173" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="78" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="167" y1="26" x2="173" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="27.1" y1="312.9" x2="312.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="320,20 316.5,30.6 309.4,23.5" fill="currentColor"/>
  <polygon points="20,320 23.5,309.4 30.6,316.5" fill="currentColor"/>
  <polyline points="143.7,304.2 143.8,303 144,298.6 144.3,294.2 144.5,289.9 144.8,285.7 145,281.6 145.3,277.6 145.5,273.7 145.8,269.8 146,266 146.3,262.3 146.5,258.7 146.8,255.1 147,251.6 147.3,248.2 147.5,244.9 147.8,241.6 148,238.4 148.3,235.3 148.5,232.3 148.8,229.3 149,226.4 149.3,223.6 149.5,220.8 149.8,218.1 150,215.4 150.3,212.9 150.5,210.4 150.8,207.9 151,205.5 151.3,203.2 151.5,201 151.8,198.8 152,196.6 152.3,194.5 152.5,192.5 152.8,190.6 153,188.6 153.3,186.8 153.5,185 153.8,183.2 154,181.6 154.3,179.9 154.5,178.3 154.8,176.8 155,175.3 155.3,173.9 155.5,172.5 155.8,171.1 156,169.8 156.3,168.6 156.5,167.4 156.8,166.2 157,165.1 157.3,164 157.5,163 157.8,162 158,161 158.3,160.1 158.5,159.2 158.8,158.4 159,157.6 159.3,156.8 159.5,156 159.8,155.3 160,154.7 160.3,154 160.5,153.4 160.8,152.9 161,152.3 161.3,151.8 161.5,151.3 161.8,150.9 162,150.4 162.3,150 162.5,149.7 162.8,149.3 163,149 163.3,148.7 163.5,148.4 163.8,148.1 164,147.9 164.3,147.7 164.5,147.4 164.8,147.3 165,147.1 165.3,146.9 165.5,146.8 165.8,146.7 166,146.6 166.3,146.5 166.5,146.4 166.8,146.3 167,146.2 167.3,146.2 167.5,146.1 167.8,146.1 168,146.1 168.3,146 168.5,146 168.8,146 169,146 169.3,146 169.5,146 169.8,146 170,146 170.3,146 170.5,146 170.8,146 171,146 171.3,146 171.5,146 171.8,146 172,145.9 172.3,145.9 172.5,145.9 172.8,145.8 173,145.8 173.3,145.7 173.5,145.6 173.8,145.5 174,145.4 174.3,145.3 174.5,145.2 174.8,145.1 175,144.9 175.3,144.7 175.5,144.6 175.8,144.3 176,144.1 176.3,143.9 176.5,143.6 176.8,143.3 177,143 177.3,142.7 177.5,142.3 177.8,142 178,141.6 178.3,141.1 178.5,140.7 178.8,140.2 179,139.7 179.3,139.1 179.5,138.6 179.8,138 180,137.3 180.3,136.7 180.5,136 180.8,135.2 181,134.4 181.3,133.6 181.5,132.8 181.8,131.9 182,131 182.3,130 182.5,129 182.8,128 183,126.9 183.3,125.8 183.5,124.6 183.8,123.4 184,122.2 184.3,120.9 184.5,119.5 184.8,118.1 185,116.7 185.3,115.2 185.5,113.7 185.8,112.1 186,110.4 186.3,108.8 186.5,107 186.8,105.2 187,103.4 187.3,101.4 187.5,99.5 187.8,97.5 188,95.4 188.3,93.2 188.5,91 188.8,88.8 189,86.5 189.3,84.1 189.5,81.6 189.8,79.1 190,76.6 190.3,73.9 190.5,71.2 190.8,68.4 191,65.6 191.3,62.7 191.5,59.7 191.8,56.7 192,53.6 192.3,50.4 192.5,47.1 192.8,43.8 193,40.4 193.3,36.9 193.5,34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="143.3,312.2 138.8,301.9 148.8,302.4" fill="currentColor"/>
  <polygon points="194,26 198.3,36.3 188.3,35.6" fill="currentColor"/>
  <polyline points="36.7,196.3 36.7,196.3 39.3,196.1 41.9,196 44.5,195.8 47,195.7 49.5,195.5 52,195.4 54.4,195.2 56.8,195.1 59.2,194.9 61.5,194.8 63.9,194.7 66.2,194.5 68.4,194.4 70.7,194.2 72.9,194.1 75.1,193.9 77.3,193.8 79.4,193.6 81.5,193.5 83.6,193.3 85.7,193.2 87.7,193 89.7,192.9 91.7,192.8 93.7,192.6 95.6,192.5 97.5,192.3 99.4,192.2 101.2,192 103.1,191.9 104.9,191.7 106.7,191.6 108.4,191.4 110.2,191.3 111.9,191.1 113.6,191 115.2,190.9 116.9,190.7 118.5,190.6 120.1,190.4 121.7,190.3 123.2,190.1 124.8,190 126.3,189.8 127.7,189.7 129.2,189.5 130.7,189.4 132.1,189.3 133.5,189.1 134.9,189 136.2,188.8 137.5,188.7 138.9,188.5 140.2,188.4 141.4,188.2 142.7,188.1 143.9,187.9 145.1,187.8 146.3,187.6 147.5,187.5 148.7,187.4 149.8,187.2 150.9,187.1 152,186.9 153.1,186.8 154.1,186.6 155.2,186.5 156.2,186.3 157.2,186.2 158.2,186 159.2,185.9 160.1,185.7 161.1,185.6 162,185.5 162.9,185.3 163.8,185.2 164.6,185 165.5,184.9 166.3,184.7 167.1,184.6 167.9,184.4 168.7,184.3 169.5,184.1 170.2,184 171,183.8 171.7,183.7 172.4,183.6 173.1,183.4 173.8,183.3 174.4,183.1 175.1,183 175.7,182.8 176.3,182.7 176.9,182.5 177.5,182.4 178.1,182.2 178.7,182.1 179.2,181.9 179.7,181.8 180.3,181.7 180.8,181.5 181.3,181.4 181.8,181.2 182.2,181.1 182.7,180.9 183.1,180.8 183.6,180.6 184,180.5 184.4,180.3 184.8,180.2 185.2,180 185.6,179.9 185.9,179.8 186.3,179.6 186.6,179.5 187,179.3 187.3,179.2 187.6,179 187.9,178.9 188.2,178.7 188.5,178.6 188.8,178.4 189.1,178.3 189.3,178.1 189.6,178 189.8,177.9 190,177.7 190.2,177.6 190.5,177.4 190.7,177.3 190.9,177.1 191.1,177 191.2,176.8 191.4,176.7 191.6,176.5 191.7,176.4 191.9,176.2 192,176.1 192.2,176 192.3,175.8 192.4,175.7 192.5,175.5 192.7,175.4 192.8,175.2 192.9,175.1 193,174.9 193,174.8 193.1,174.6 193.2,174.5 193.3,174.3 193.4,174.2 193.4,174.1 193.5,173.9 193.5,173.8 193.6,173.6 193.6,173.5 193.7,173.3 193.7,173.2 193.8,173 193.8,172.9 193.8,172.7 193.8,172.6 193.9,172.4 193.9,172.3 193.9,172.2 193.9,172 193.9,171.9 194,171.7 194,171.6 194,171.4 194,171.3 194,171.1 194,171 194,170.8 194,170.7 194,170.5 194,170.4 194,170.3 194,170.1 194,170 194,169.8 194,169.7 194,169.5 194,169.4 194,169.2 194,169.1 194,168.9 194,168.8 194,168.6 194,168.5 194,168.4 194,168.2 194.1,168.1 194.1,167.9 194.1,167.8 194.1,167.6 194.1,167.5 194.2,167.3 194.2,167.2 194.2,167 194.3,166.9 194.3,166.7 194.3,166.6 194.4,166.5 194.4,166.3 194.5,166.2 194.5,166 194.6,165.9 194.7,165.7 194.7,165.6 194.8,165.4 194.9,165.3 195,165.1 195.1,165 195.2,164.8 195.3,164.7 195.4,164.6 195.5,164.4 195.6,164.3 195.8,164.1 195.9,164 196,163.8 196.2,163.7 196.3,163.5 196.5,163.4 196.7,163.2 196.9,163.1 197,162.9 197.2,162.8 197.4,162.7 197.6,162.5 197.9,162.4 198.1,162.2 198.3,162.1 198.6,161.9 198.8,161.8 199.1,161.6 199.4,161.5 199.6,161.3 199.9,161.2 200.2,161 200.5,160.9 200.9,160.8 201.2,160.6 201.5,160.5 201.9,160.3 202.2,160.2 202.6,160 203,159.9 203.4,159.7 203.8,159.6 204.2,159.4 204.6,159.3 205.1,159.2 205.5,159 206,158.9 206.5,158.7 207,158.6 207.5,158.4 208,158.3 208.5,158.1 209.1,158 209.6,157.8 210.2,157.7 210.8,157.5 211.4,157.4 212,157.3 212.6,157.1 213.3,157 213.9,156.8 214.6,156.7 215.3,156.5 216,156.4 216.7,156.2 217.4,156.1 218.1,155.9 218.9,155.8 219.7,155.6 220.5,155.5 221.3,155.4 222.1,155.2 223,155.1 223.8,154.9 224.7,154.8 225.6,154.6 226.5,154.5 227.4,154.3 228.4,154.2 229.3,154 230.3,153.9 231.3,153.7 232.3,153.6 233.3,153.5 234.4,153.3 235.5,153.2 236.5,153 237.7,152.9 238.8,152.7 239.9,152.6 241.1,152.4 242.3,152.3 243.5,152.1 244.7,152 245.9,151.8 247.2,151.7 248.5,151.6 249.8,151.4 251.1,151.3 252.5,151.1 253.8,151 255.2,150.8 256.6,150.7 258.1,150.5 259.5,150.4 261,150.2 262.5,150.1 264,149.9 265.6,149.8 267.1,149.7 268.7,149.5 270.3,149.4 272,149.2 273.6,149.1 275.3,148.9 277,148.8 278.7,148.6 280.5,148.5 282.2,148.3 284,148.2 285.9,148 287.7,147.9 289.6,147.8 291.5,147.6 293.4,147.5 295.3,147.3 297.3,147.2 299.3,147 301.3,146.9 303.4,146.7 303.8,146.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="28.7,196.7 38.4,191.2 39,201.1" fill="currentColor"/>
  <polygon points="311.8,146.1 302.2,151.8 301.5,141.8" fill="currentColor"/>
  <circle cx="170" cy="146" r="4" fill="currentColor"/>
  <circle cx="194" cy="26" r="4" fill="currentColor"/>
  <circle cx="194" cy="170" r="4" fill="currentColor"/>
  <circle cx="314" cy="146" r="4" fill="currentColor"/>
  <text x="158.8" y="134.8" font-size="13" fill="currentColor" text-anchor="end">(0, 1)</text>
  <text x="205.2" y="46.2" font-size="13" fill="currentColor" text-anchor="start">(1, 6)</text>
  <text x="205.2" y="190.2" font-size="13" fill="currentColor" text-anchor="start">(1, 0)</text>
  <text x="314" y="132" font-size="13" fill="currentColor" text-anchor="middle">(6, 1)</text>
  <text x="59.6" y="35.6" font-size="13" fill="currentColor" text-anchor="start">y = x</text>
  <text x="182" y="64.4" font-size="13" fill="currentColor" text-anchor="start">f(x)</text>
  <text x="246.8" y="129.2" font-size="13" fill="currentColor" text-anchor="start">f^{−1}(x)</text>
</svg>
</div>

{{< fillin
  question="Find the inverse function of $f(x)=\sqrt[3]{x+4}$."
  answer="x^3-4"
  answerDisplay="$f^{-1}(x)=x^3-4$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ by cubing both sides."
>}}

## Restricting the domain to find the inverse of a polynomial function

So far, we have been able to find the inverse functions of **cubic
functions** without having to restrict their domains. However, as we know,
not all cubic polynomials are one-to-one. Some functions that are not
one-to-one may have their domain restricted so that they are one-to-one,
but only over that domain. The function over the restricted domain would
then have an **inverse function**. Since quadratic functions are not
one-to-one, we must restrict their domain in order to find their inverses.

{{< callout type="info" >}}
  **Restricting the domain.** If a function is not one-to-one, it cannot
  have an inverse. If we restrict the domain of the function so that it
  becomes one-to-one, thus creating a new function, this new function will
  have an inverse.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a polynomial function, restrict the domain of a
  function that is not one-to-one and then find the inverse.

  1. Restrict the domain by determining a domain on which the original
     function is one-to-one.
  2. Replace $f(x)$ with $y$.
  3. Interchange $x$ and $y$.
  4. Solve for $y$, and rename the function or pair of function
     $f^{-1}(x)$.
  5. Revise the formula for $f^{-1}(x)$ by ensuring that the outputs of
     the inverse function correspond to the restricted domain of the
     original function.
{{< /callout >}}

**Example.** Find the inverse function of $f$:

ⓐ $f(x)=(x-4)^2,\ x\ge4$

ⓑ $f(x)=(x-4)^2,\ x\le4$

**Solution.** The original function $f(x)=(x-4)^2$ is not one-to-one, but
the function is restricted to a domain of $x\ge4$ or $x\le4$ on which it
is one-to-one. See the graphs below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The right half of an upward parabola with vertex at (4, 0), the graph of f of x equals the quantity x minus 4, squared, restricted to x greater than or equal to 4. The curve rises to the right from the vertex, with no arrowhead at the vertex since the domain begins there.","xMin":-10,"xMax":10,"yMin":-2,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"from":4,"arrows":"end"}]}'>
<svg role="img" aria-label="The right half of an upward parabola with vertex at (4, 0), the graph of f of x equals the quantity x minus 4, squared, restricted to x greater than or equal to 4. The curve rises to the right from the vertex, with no arrowhead at the vertex since the domain begins there." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 244" width="372" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="42" y1="218" x2="42" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="58" y1="218" x2="58" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="90" y1="218" x2="90" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="218" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="218" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="218" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="154" y1="218" x2="154" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="218" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="218" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="218" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="218" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="282" y1="218" x2="282" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="298" y1="218" x2="298" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="218" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="330" y1="218" x2="330" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="218" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="346" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="346" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="346" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="346" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="346" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="346" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="346" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="346" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="346" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42" x2="346" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,230 181,220 191,220" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="58" y1="183" x2="58" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="58" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="90" y1="183" x2="90" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="122" y1="183" x2="122" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="154" y1="183" x2="154" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="154" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="218" y1="183" x2="218" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="250" y1="183" x2="250" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="282" y1="183" x2="282" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="282" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="314" y1="183" x2="314" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="183" y1="218" x2="189" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="154" x2="189" y2="154" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="158" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="122" x2="189" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="126" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="90" x2="189" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="94" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="58" x2="189" y2="58" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="62" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <polyline points="250,186 250.3,186 250.5,186 250.8,186 251,185.9 251.3,185.9 251.5,185.9 251.8,185.8 252,185.8 252.3,185.7 252.5,185.6 252.8,185.5 253,185.4 253.3,185.3 253.5,185.2 253.8,185.1 254,185 254.3,184.9 254.5,184.7 254.8,184.6 255,184.4 255.3,184.3 255.5,184.1 255.8,183.9 256,183.8 256.3,183.6 256.5,183.4 256.8,183.2 257,182.9 257.3,182.7 257.5,182.5 257.8,182.2 258,182 258.3,181.7 258.5,181.5 258.8,181.2 259,180.9 259.3,180.7 259.5,180.4 259.8,180.1 260,179.8 260.3,179.4 260.5,179.1 260.8,178.8 261,178.4 261.3,178.1 261.5,177.7 261.8,177.4 262,177 262.3,176.6 262.5,176.2 262.8,175.8 263,175.4 263.3,175 263.5,174.6 263.8,174.2 264,173.8 264.3,173.3 264.5,172.9 264.8,172.4 265,171.9 265.3,171.5 265.5,171 265.8,170.5 266,170 266.3,169.5 266.5,169 266.8,168.5 267,167.9 267.3,167.4 267.5,166.9 267.8,166.3 268,165.8 268.3,165.2 268.5,164.6 268.8,164 269,163.4 269.3,162.8 269.5,162.2 269.8,161.6 270,161 270.3,160.4 270.5,159.7 270.8,159.1 271,158.4 271.3,157.8 271.5,157.1 271.8,156.4 272,155.8 272.3,155.1 272.5,154.4 272.8,153.7 273,152.9 273.3,152.2 273.5,151.5 273.8,150.7 274,150 274.3,149.2 274.5,148.5 274.8,147.7 275,146.9 275.3,146.2 275.5,145.4 275.8,144.6 276,143.8 276.3,142.9 276.5,142.1 276.8,141.3 277,140.4 277.3,139.6 277.5,138.7 277.8,137.9 278,137 278.3,136.1 278.5,135.2 278.8,134.3 279,133.4 279.3,132.5 279.5,131.6 279.8,130.7 280,129.8 280.3,128.8 280.5,127.9 280.8,126.9 281,125.9 281.3,125 281.5,124 281.8,123 282,122 282.3,121 282.5,120 282.8,119 283,117.9 283.3,116.9 283.5,115.9 283.8,114.8 284,113.8 284.3,112.7 284.5,111.6 284.8,110.5 285,109.4 285.3,108.3 285.5,107.2 285.8,106.1 286,105 286.3,103.9 286.5,102.7 286.8,101.6 287,100.4 287.3,99.3 287.5,98.1 287.8,96.9 288,95.8 288.3,94.6 288.5,93.4 288.8,92.2 289,90.9 289.3,89.7 289.5,88.5 289.8,87.2 290,86 290.3,84.7 290.5,83.5 290.8,82.2 291,80.9 291.3,79.7 291.5,78.4 291.8,77.1 292,75.8 292.3,74.4 292.5,73.1 292.8,71.8 293,70.4 293.3,69.1 293.5,67.7 293.8,66.4 294,65 294.3,63.6 294.5,62.2 294.8,60.8 295,59.4 295.3,58 295.5,56.6 295.8,55.2 296,53.8 296.3,52.3 296.5,50.9 296.8,49.4 297,47.9 297.3,46.5 297.5,45 297.8,43.5 298,42 298.3,40.5 298.5,39 298.8,37.5 299,35.9 299.2,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="300.5,26.6 303.9,37.3 294,35.7" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The left half of an upward parabola with vertex at (4, 0), the graph of f of x equals the quantity x minus 4, squared, restricted to x less than or equal to 4. The curve descends toward the vertex from the upper left, with no arrowhead at the vertex since the domain ends there.","xMin":-10,"xMax":10,"yMin":-2,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"to":4,"arrows":"start"}]}'>
<svg role="img" aria-label="The left half of an upward parabola with vertex at (4, 0), the graph of f of x equals the quantity x minus 4, squared, restricted to x less than or equal to 4. The curve descends toward the vertex from the upper left, with no arrowhead at the vertex since the domain ends there." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 244" width="372" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="42" y1="218" x2="42" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="58" y1="218" x2="58" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="90" y1="218" x2="90" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="218" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="218" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="218" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="154" y1="218" x2="154" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="218" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="218" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="218" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="218" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="282" y1="218" x2="282" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="298" y1="218" x2="298" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="218" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="330" y1="218" x2="330" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="218" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="346" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="346" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="346" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="346" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="346" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="346" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="346" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="346" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="346" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42" x2="346" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,230 181,220 191,220" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="58" y1="183" x2="58" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="58" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="90" y1="183" x2="90" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="122" y1="183" x2="122" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="154" y1="183" x2="154" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="154" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="218" y1="183" x2="218" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="250" y1="183" x2="250" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="282" y1="183" x2="282" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="282" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="314" y1="183" x2="314" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="183" y1="218" x2="189" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="154" x2="189" y2="154" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="158" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="122" x2="189" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="126" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="90" x2="189" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="94" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="58" x2="189" y2="58" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="62" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <polyline points="200.8,34.5 201,35.9 201.3,37.5 201.5,39 201.8,40.5 202,42 202.3,43.5 202.5,45 202.8,46.5 203,47.9 203.3,49.4 203.5,50.9 203.8,52.3 204,53.8 204.3,55.2 204.5,56.6 204.8,58 205,59.4 205.3,60.8 205.5,62.2 205.8,63.6 206,65 206.3,66.4 206.5,67.7 206.8,69.1 207,70.4 207.3,71.8 207.5,73.1 207.8,74.4 208,75.8 208.3,77.1 208.5,78.4 208.8,79.7 209,80.9 209.3,82.2 209.5,83.5 209.8,84.7 210,86 210.3,87.2 210.5,88.5 210.8,89.7 211,90.9 211.3,92.2 211.5,93.4 211.8,94.6 212,95.8 212.3,96.9 212.5,98.1 212.8,99.3 213,100.4 213.3,101.6 213.5,102.7 213.8,103.9 214,105 214.3,106.1 214.5,107.2 214.8,108.3 215,109.4 215.3,110.5 215.5,111.6 215.8,112.7 216,113.8 216.3,114.8 216.5,115.9 216.8,116.9 217,117.9 217.3,119 217.5,120 217.8,121 218,122 218.3,123 218.5,124 218.8,125 219,125.9 219.3,126.9 219.5,127.9 219.8,128.8 220,129.8 220.3,130.7 220.5,131.6 220.8,132.5 221,133.4 221.3,134.3 221.5,135.2 221.8,136.1 222,137 222.3,137.9 222.5,138.7 222.8,139.6 223,140.4 223.3,141.3 223.5,142.1 223.8,142.9 224,143.8 224.3,144.6 224.5,145.4 224.8,146.2 225,146.9 225.3,147.7 225.5,148.5 225.8,149.2 226,150 226.3,150.7 226.5,151.5 226.8,152.2 227,152.9 227.3,153.7 227.5,154.4 227.8,155.1 228,155.8 228.3,156.4 228.5,157.1 228.8,157.8 229,158.4 229.3,159.1 229.5,159.7 229.8,160.4 230,161 230.3,161.6 230.5,162.2 230.8,162.8 231,163.4 231.3,164 231.5,164.6 231.8,165.2 232,165.8 232.3,166.3 232.5,166.9 232.8,167.4 233,167.9 233.3,168.5 233.5,169 233.8,169.5 234,170 234.3,170.5 234.5,171 234.8,171.5 235,171.9 235.3,172.4 235.5,172.9 235.8,173.3 236,173.8 236.3,174.2 236.5,174.6 236.8,175 237,175.4 237.3,175.8 237.5,176.2 237.8,176.6 238,177 238.3,177.4 238.5,177.7 238.8,178.1 239,178.4 239.3,178.8 239.5,179.1 239.8,179.4 240,179.8 240.3,180.1 240.5,180.4 240.8,180.7 241,180.9 241.3,181.2 241.5,181.5 241.8,181.7 242,182 242.3,182.2 242.5,182.5 242.8,182.7 243,182.9 243.3,183.2 243.5,183.4 243.8,183.6 244,183.8 244.3,183.9 244.5,184.1 244.8,184.3 245,184.4 245.3,184.6 245.5,184.7 245.8,184.9 246,185 246.3,185.1 246.5,185.2 246.8,185.3 247,185.4 247.3,185.5 247.5,185.6 247.8,185.7 248,185.8 248.3,185.8 248.5,185.9 248.8,185.9 249,185.9 249.3,186 249.5,186 249.8,186 250,186" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="199.5,26.6 206,35.7 196.1,37.3" fill="currentColor"/>
</svg>
</div>

To find the inverse, start by replacing $f(x)$ with the simple variable
$y$.

$$
\begin{array}{lrcll}
& y &=& (x-4)^2 & \text{Interchange }x\text{ and }y. \\[4pt]
& x &=& (y-4)^2 & \text{Take the square root.} \\[4pt]
& \pm\sqrt{x} &=& y-4 & \text{Add 4 to both sides.} \\[4pt]
& 4\pm\sqrt{x} &=& y &
\end{array}
$$

This is not a function as written. We need to examine the restrictions on
the domain of the original function to determine the inverse. Since we
reversed the roles of $x$ and $y$ for the original $f(x)$, we looked at
the domain: the values $x$ could assume. When we reversed the roles of $x$
and $y$, this gave us the values $y$ could assume. For this function,
$x\ge4$, so for the inverse, we should have $y\ge4$, which is what our
inverse function gives.

ⓐ The domain of the original function was restricted to $x\ge4$, so the
outputs of the inverse need to be the same, $f(x)\ge4$, and we must use
the $+$ case:

$$f^{-1}(x)=4+\sqrt{x}$$

ⓑ The domain of the original function was restricted to $x\le4$, so the
outputs of the inverse need to be the same, $f(x)\le4$, and we must use
the $-$ case:

$$f^{-1}(x)=4-\sqrt{x}$$

**Analysis.** On the graphs below, we see the original function graphed on
the same set of axes as its inverse function. Notice that together the
graphs show symmetry about the line $y=x$. The coordinate pair $(4,0)$ is
on the graph of $f$ and the coordinate pair $(0,4)$ is on the graph of
$f^{-1}$. For any coordinate pair, if $(a,b)$ is on the graph of $f$, then
$(b,a)$ is on the graph of $f^{-1}$. Finally, observe that the graph of
$f$ intersects the graph of $f^{-1}$ on the line $y=x$. Points of
intersection for the graphs of $f$ and $f^{-1}$ will always lie on the
line $y=x$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The curve labelled f, the right half of an upward parabola with vertex at (4, 0) restricted to x greater than or equal to 4, together with its inverse, the curve labelled f inverse, equal to 4 plus the square root of x, rising from (0, 4). A dashed line marks y = x. The two curves are mirror images across it, and the points (4, 0) and (0, 4) are marked.","xMin":-10,"xMax":10,"yMin":-2,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"from":4,"arrows":"end"}],"curves":[{"kind":"sqrt","a":1,"h":0,"k":4}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"points":[{"at":[4,0],"label":"(4, 0)","labelSide":"s"},{"at":[0,4],"label":"(0, 4)","labelSide":"w"}],"texts":[{"at":[5,9.3],"text":"f(x)","anchor":"start"},{"at":[8.3,6.6],"text":"f^{-1}(x)","anchor":"start"}]}'>
<svg role="img" aria-label="The curve labelled f, the right half of an upward parabola with vertex at (4, 0) restricted to x greater than or equal to 4, together with its inverse, the curve labelled f inverse, equal to 4 plus the square root of x, rising from (0, 4). A dashed line marks y = x. The two curves are mirror images across it, and the points (4, 0) and (0, 4) are marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 244" width="372" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="42" y1="218" x2="42" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="58" y1="218" x2="58" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="90" y1="218" x2="90" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="218" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="218" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="218" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="154" y1="218" x2="154" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="218" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="218" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="218" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="218" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="282" y1="218" x2="282" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="298" y1="218" x2="298" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="218" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="330" y1="218" x2="330" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="218" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="346" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="346" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="346" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="346" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="346" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="346" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="346" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="346" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="346" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42" x2="346" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,230 181,220 191,220" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="58" y1="183" x2="58" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="58" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="90" y1="183" x2="90" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="122" y1="183" x2="122" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="154" y1="183" x2="154" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="154" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="218" y1="183" x2="218" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="250" y1="183" x2="250" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="282" y1="183" x2="282" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="282" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="314" y1="183" x2="314" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="183" y1="218" x2="189" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="154" x2="189" y2="154" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="158" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="122" x2="189" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="126" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="90" x2="189" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="94" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="58" x2="189" y2="58" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="62" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="155.1" y1="216.9" x2="344.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,20 348.5,30.6 341.4,23.5" fill="currentColor"/>
  <polygon points="148,224 151.5,213.4 158.6,220.5" fill="currentColor"/>
  <polyline points="250,186 250.3,186 250.5,186 250.8,186 251,185.9 251.3,185.9 251.5,185.9 251.8,185.8 252,185.8 252.3,185.7 252.5,185.6 252.8,185.5 253,185.4 253.3,185.3 253.5,185.2 253.8,185.1 254,185 254.3,184.9 254.5,184.7 254.8,184.6 255,184.4 255.3,184.3 255.5,184.1 255.8,183.9 256,183.8 256.3,183.6 256.5,183.4 256.8,183.2 257,182.9 257.3,182.7 257.5,182.5 257.8,182.2 258,182 258.3,181.7 258.5,181.5 258.8,181.2 259,180.9 259.3,180.7 259.5,180.4 259.8,180.1 260,179.8 260.3,179.4 260.5,179.1 260.8,178.8 261,178.4 261.3,178.1 261.5,177.7 261.8,177.4 262,177 262.3,176.6 262.5,176.2 262.8,175.8 263,175.4 263.3,175 263.5,174.6 263.8,174.2 264,173.8 264.3,173.3 264.5,172.9 264.8,172.4 265,171.9 265.3,171.5 265.5,171 265.8,170.5 266,170 266.3,169.5 266.5,169 266.8,168.5 267,167.9 267.3,167.4 267.5,166.9 267.8,166.3 268,165.8 268.3,165.2 268.5,164.6 268.8,164 269,163.4 269.3,162.8 269.5,162.2 269.8,161.6 270,161 270.3,160.4 270.5,159.7 270.8,159.1 271,158.4 271.3,157.8 271.5,157.1 271.8,156.4 272,155.8 272.3,155.1 272.5,154.4 272.8,153.7 273,152.9 273.3,152.2 273.5,151.5 273.8,150.7 274,150 274.3,149.2 274.5,148.5 274.8,147.7 275,146.9 275.3,146.2 275.5,145.4 275.8,144.6 276,143.8 276.3,142.9 276.5,142.1 276.8,141.3 277,140.4 277.3,139.6 277.5,138.7 277.8,137.9 278,137 278.3,136.1 278.5,135.2 278.8,134.3 279,133.4 279.3,132.5 279.5,131.6 279.8,130.7 280,129.8 280.3,128.8 280.5,127.9 280.8,126.9 281,125.9 281.3,125 281.5,124 281.8,123 282,122 282.3,121 282.5,120 282.8,119 283,117.9 283.3,116.9 283.5,115.9 283.8,114.8 284,113.8 284.3,112.7 284.5,111.6 284.8,110.5 285,109.4 285.3,108.3 285.5,107.2 285.8,106.1 286,105 286.3,103.9 286.5,102.7 286.8,101.6 287,100.4 287.3,99.3 287.5,98.1 287.8,96.9 288,95.8 288.3,94.6 288.5,93.4 288.8,92.2 289,90.9 289.3,89.7 289.5,88.5 289.8,87.2 290,86 290.3,84.7 290.5,83.5 290.8,82.2 291,80.9 291.3,79.7 291.5,78.4 291.8,77.1 292,75.8 292.3,74.4 292.5,73.1 292.8,71.8 293,70.4 293.3,69.1 293.5,67.7 293.8,66.4 294,65 294.3,63.6 294.5,62.2 294.8,60.8 295,59.4 295.3,58 295.5,56.6 295.8,55.2 296,53.8 296.3,52.3 296.5,50.9 296.8,49.4 297,47.9 297.3,46.5 297.5,45 297.8,43.5 298,42 298.3,40.5 298.5,39 298.8,37.5 299,35.9 299.2,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="300.5,26.6 303.9,37.3 294,35.7" fill="currentColor"/>
  <polyline points="186,122 186,121.8 186,121.6 186,121.4 186,121.2 186.1,120.9 186.1,120.7 186.1,120.5 186.2,120.3 186.2,120.1 186.3,119.9 186.3,119.7 186.4,119.5 186.5,119.3 186.5,119 186.6,118.8 186.7,118.6 186.8,118.4 186.9,118.2 187,118 187.1,117.8 187.2,117.6 187.3,117.4 187.5,117.2 187.6,116.9 187.7,116.7 187.9,116.5 188,116.3 188.2,116.1 188.3,115.9 188.5,115.7 188.7,115.5 188.8,115.3 189,115 189.2,114.8 189.4,114.6 189.6,114.4 189.8,114.2 190,114 190.2,113.8 190.4,113.6 190.7,113.4 190.9,113.1 191.1,112.9 191.4,112.7 191.6,112.5 191.9,112.3 192.1,112.1 192.4,111.9 192.7,111.7 192.9,111.5 193.2,111.2 193.5,111 193.8,110.8 194.1,110.6 194.4,110.4 194.7,110.2 195,110 195.3,109.8 195.7,109.6 196,109.4 196.3,109.1 196.7,108.9 197,108.7 197.4,108.5 197.7,108.3 198.1,108.1 198.5,107.9 198.8,107.7 199.2,107.5 199.6,107.2 200,107 200.4,106.8 200.8,106.6 201.2,106.4 201.6,106.2 202,106 202.5,105.8 202.9,105.6 203.3,105.3 203.8,105.1 204.2,104.9 204.7,104.7 205.1,104.5 205.6,104.3 206.1,104.1 206.5,103.9 207,103.7 207.5,103.4 208,103.2 208.5,103 209,102.8 209.5,102.6 210,102.4 210.5,102.2 211.1,102 211.6,101.8 212.1,101.6 212.7,101.3 213.2,101.1 213.8,100.9 214.3,100.7 214.9,100.5 215.5,100.3 216,100.1 216.6,99.9 217.2,99.7 217.8,99.4 218.4,99.2 219,99 219.6,98.8 220.2,98.6 220.8,98.4 221.5,98.2 222.1,98 222.7,97.8 223.4,97.5 224,97.3 224.7,97.1 225.3,96.9 226,96.7 226.7,96.5 227.3,96.3 228,96.1 228.7,95.9 229.4,95.6 230.1,95.4 230.8,95.2 231.5,95 232.2,94.8 232.9,94.6 233.7,94.4 234.4,94.2 235.1,94 235.9,93.8 236.6,93.5 237.4,93.3 238.1,93.1 238.9,92.9 239.7,92.7 240.4,92.5 241.2,92.3 242,92.1 242.8,91.9 243.6,91.6 244.4,91.4 245.2,91.2 246,91 246.8,90.8 247.7,90.6 248.5,90.4 249.3,90.2 250.2,90 251,89.7 251.9,89.5 252.7,89.3 253.6,89.1 254.5,88.9 255.3,88.7 256.2,88.5 257.1,88.3 258,88.1 258.9,87.8 259.8,87.6 260.7,87.4 261.6,87.2 262.5,87 263.5,86.8 264.4,86.6 265.3,86.4 266.3,86.2 267.2,86 268.2,85.7 269.1,85.5 270.1,85.3 271.1,85.1 272,84.9 273,84.7 274,84.5 275,84.3 276,84.1 277,83.8 278,83.6 279,83.4 280,83.2 281.1,83 282.1,82.8 283.1,82.6 284.2,82.4 285.2,82.2 286.3,81.9 287.3,81.7 288.4,81.5 289.5,81.3 290.5,81.1 291.6,80.9 292.7,80.7 293.8,80.5 294.9,80.3 296,80 297.1,79.8 298.2,79.6 299.3,79.4 300.5,79.2 301.6,79 302.7,78.8 303.9,78.6 305,78.4 306.2,78.1 307.3,77.9 308.5,77.7 309.7,77.5 310.8,77.3 312,77.1 313.2,76.9 314.4,76.7 315.6,76.5 316.8,76.3 318,76 319.2,75.8 320.4,75.6 321.7,75.4 322.9,75.2 324.1,75 325.4,74.8 326.6,74.6 327.9,74.4 329.1,74.1 330.4,73.9 331.7,73.7 332.9,73.5 334.2,73.3 335.5,73.1 336.8,72.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="344.7,71.6 335.6,78.1 334,68.3" fill="currentColor"/>
  <circle cx="250" cy="186" r="4" fill="currentColor"/>
  <circle cx="186" cy="122" r="4" fill="currentColor"/>
  <text x="250" y="209" font-size="13" fill="currentColor" text-anchor="middle">(4, 0)</text>
  <text x="172" y="126" font-size="13" fill="currentColor" text-anchor="end">(0, 4)</text>
  <text x="266" y="37.2" font-size="13" fill="currentColor" text-anchor="start">f(x)</text>
  <text x="318.8" y="80.4" font-size="13" fill="currentColor" text-anchor="start">f^{−1}(x)</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The curve labelled f, the left half of an upward parabola with vertex at (4, 0) restricted to x less than or equal to 4, together with its inverse, the curve labelled f inverse, equal to 4 minus the square root of x, descending from (0, 4). A dashed line marks y = x. The two curves are mirror images across it, and the points (4, 0) and (0, 4) are marked.","xMin":-10,"xMax":10,"yMin":-2,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"to":4,"arrows":"start"}],"curves":[{"kind":"sqrt","a":-1,"h":0,"k":4}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"points":[{"at":[4,0],"label":"(4, 0)","labelSide":"s"},{"at":[0,4],"label":"(0, 4)","labelSide":"n"}],"texts":[{"at":[-6,9.3],"text":"f(x)","anchor":"start"},{"at":[6.3,-1.4],"text":"f^{-1}(x)","anchor":"start"}]}'>
<svg role="img" aria-label="The curve labelled f, the left half of an upward parabola with vertex at (4, 0) restricted to x less than or equal to 4, together with its inverse, the curve labelled f inverse, equal to 4 minus the square root of x, descending from (0, 4). A dashed line marks y = x. The two curves are mirror images across it, and the points (4, 0) and (0, 4) are marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 244" width="372" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="42" y1="218" x2="42" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="58" y1="218" x2="58" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="90" y1="218" x2="90" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="218" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="218" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="138" y1="218" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="154" y1="218" x2="154" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="218" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="218" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="218" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="218" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="282" y1="218" x2="282" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="298" y1="218" x2="298" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="218" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="330" y1="218" x2="330" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="218" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="346" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="346" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="346" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="346" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="346" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="346" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="346" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="346" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="346" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42" x2="346" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,230 181,220 191,220" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="58" y1="183" x2="58" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="58" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="90" y1="183" x2="90" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="90" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="122" y1="183" x2="122" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="154" y1="183" x2="154" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="154" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="218" y1="183" x2="218" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="250" y1="183" x2="250" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="282" y1="183" x2="282" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="282" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="314" y1="183" x2="314" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="183" y1="218" x2="189" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="154" x2="189" y2="154" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="158" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="122" x2="189" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="126" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="90" x2="189" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="94" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="58" x2="189" y2="58" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="62" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="155.1" y1="216.9" x2="344.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,20 348.5,30.6 341.4,23.5" fill="currentColor"/>
  <polygon points="148,224 151.5,213.4 158.6,220.5" fill="currentColor"/>
  <polyline points="200.8,34.5 201,35.9 201.3,37.5 201.5,39 201.8,40.5 202,42 202.3,43.5 202.5,45 202.8,46.5 203,47.9 203.3,49.4 203.5,50.9 203.8,52.3 204,53.8 204.3,55.2 204.5,56.6 204.8,58 205,59.4 205.3,60.8 205.5,62.2 205.8,63.6 206,65 206.3,66.4 206.5,67.7 206.8,69.1 207,70.4 207.3,71.8 207.5,73.1 207.8,74.4 208,75.8 208.3,77.1 208.5,78.4 208.8,79.7 209,80.9 209.3,82.2 209.5,83.5 209.8,84.7 210,86 210.3,87.2 210.5,88.5 210.8,89.7 211,90.9 211.3,92.2 211.5,93.4 211.8,94.6 212,95.8 212.3,96.9 212.5,98.1 212.8,99.3 213,100.4 213.3,101.6 213.5,102.7 213.8,103.9 214,105 214.3,106.1 214.5,107.2 214.8,108.3 215,109.4 215.3,110.5 215.5,111.6 215.8,112.7 216,113.8 216.3,114.8 216.5,115.9 216.8,116.9 217,117.9 217.3,119 217.5,120 217.8,121 218,122 218.3,123 218.5,124 218.8,125 219,125.9 219.3,126.9 219.5,127.9 219.8,128.8 220,129.8 220.3,130.7 220.5,131.6 220.8,132.5 221,133.4 221.3,134.3 221.5,135.2 221.8,136.1 222,137 222.3,137.9 222.5,138.7 222.8,139.6 223,140.4 223.3,141.3 223.5,142.1 223.8,142.9 224,143.8 224.3,144.6 224.5,145.4 224.8,146.2 225,146.9 225.3,147.7 225.5,148.5 225.8,149.2 226,150 226.3,150.7 226.5,151.5 226.8,152.2 227,152.9 227.3,153.7 227.5,154.4 227.8,155.1 228,155.8 228.3,156.4 228.5,157.1 228.8,157.8 229,158.4 229.3,159.1 229.5,159.7 229.8,160.4 230,161 230.3,161.6 230.5,162.2 230.8,162.8 231,163.4 231.3,164 231.5,164.6 231.8,165.2 232,165.8 232.3,166.3 232.5,166.9 232.8,167.4 233,167.9 233.3,168.5 233.5,169 233.8,169.5 234,170 234.3,170.5 234.5,171 234.8,171.5 235,171.9 235.3,172.4 235.5,172.9 235.8,173.3 236,173.8 236.3,174.2 236.5,174.6 236.8,175 237,175.4 237.3,175.8 237.5,176.2 237.8,176.6 238,177 238.3,177.4 238.5,177.7 238.8,178.1 239,178.4 239.3,178.8 239.5,179.1 239.8,179.4 240,179.8 240.3,180.1 240.5,180.4 240.8,180.7 241,180.9 241.3,181.2 241.5,181.5 241.8,181.7 242,182 242.3,182.2 242.5,182.5 242.8,182.7 243,182.9 243.3,183.2 243.5,183.4 243.8,183.6 244,183.8 244.3,183.9 244.5,184.1 244.8,184.3 245,184.4 245.3,184.6 245.5,184.7 245.8,184.9 246,185 246.3,185.1 246.5,185.2 246.8,185.3 247,185.4 247.3,185.5 247.5,185.6 247.8,185.7 248,185.8 248.3,185.8 248.5,185.9 248.8,185.9 249,185.9 249.3,186 249.5,186 249.8,186 250,186" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="199.5,26.6 206,35.7 196.1,37.3" fill="currentColor"/>
  <polyline points="186,122 186,122.2 186,122.4 186,122.6 186,122.8 186.1,123.1 186.1,123.3 186.1,123.5 186.2,123.7 186.2,123.9 186.3,124.1 186.3,124.3 186.4,124.5 186.5,124.7 186.5,125 186.6,125.2 186.7,125.4 186.8,125.6 186.9,125.8 187,126 187.1,126.2 187.2,126.4 187.3,126.6 187.5,126.8 187.6,127.1 187.7,127.3 187.9,127.5 188,127.7 188.2,127.9 188.3,128.1 188.5,128.3 188.7,128.5 188.8,128.7 189,129 189.2,129.2 189.4,129.4 189.6,129.6 189.8,129.8 190,130 190.2,130.2 190.4,130.4 190.7,130.6 190.9,130.9 191.1,131.1 191.4,131.3 191.6,131.5 191.9,131.7 192.1,131.9 192.4,132.1 192.7,132.3 192.9,132.5 193.2,132.8 193.5,133 193.8,133.2 194.1,133.4 194.4,133.6 194.7,133.8 195,134 195.3,134.2 195.7,134.4 196,134.6 196.3,134.9 196.7,135.1 197,135.3 197.4,135.5 197.7,135.7 198.1,135.9 198.5,136.1 198.8,136.3 199.2,136.5 199.6,136.8 200,137 200.4,137.2 200.8,137.4 201.2,137.6 201.6,137.8 202,138 202.5,138.2 202.9,138.4 203.3,138.7 203.8,138.9 204.2,139.1 204.7,139.3 205.1,139.5 205.6,139.7 206.1,139.9 206.5,140.1 207,140.3 207.5,140.6 208,140.8 208.5,141 209,141.2 209.5,141.4 210,141.6 210.5,141.8 211.1,142 211.6,142.2 212.1,142.4 212.7,142.7 213.2,142.9 213.8,143.1 214.3,143.3 214.9,143.5 215.5,143.7 216,143.9 216.6,144.1 217.2,144.3 217.8,144.6 218.4,144.8 219,145 219.6,145.2 220.2,145.4 220.8,145.6 221.5,145.8 222.1,146 222.7,146.2 223.4,146.5 224,146.7 224.7,146.9 225.3,147.1 226,147.3 226.7,147.5 227.3,147.7 228,147.9 228.7,148.1 229.4,148.4 230.1,148.6 230.8,148.8 231.5,149 232.2,149.2 232.9,149.4 233.7,149.6 234.4,149.8 235.1,150 235.9,150.2 236.6,150.5 237.4,150.7 238.1,150.9 238.9,151.1 239.7,151.3 240.4,151.5 241.2,151.7 242,151.9 242.8,152.1 243.6,152.4 244.4,152.6 245.2,152.8 246,153 246.8,153.2 247.7,153.4 248.5,153.6 249.3,153.8 250.2,154 251,154.3 251.9,154.5 252.7,154.7 253.6,154.9 254.5,155.1 255.3,155.3 256.2,155.5 257.1,155.7 258,155.9 258.9,156.2 259.8,156.4 260.7,156.6 261.6,156.8 262.5,157 263.5,157.2 264.4,157.4 265.3,157.6 266.3,157.8 267.2,158 268.2,158.3 269.1,158.5 270.1,158.7 271.1,158.9 272,159.1 273,159.3 274,159.5 275,159.7 276,159.9 277,160.2 278,160.4 279,160.6 280,160.8 281.1,161 282.1,161.2 283.1,161.4 284.2,161.6 285.2,161.8 286.3,162.1 287.3,162.3 288.4,162.5 289.5,162.7 290.5,162.9 291.6,163.1 292.7,163.3 293.8,163.5 294.9,163.7 296,164 297.1,164.2 298.2,164.4 299.3,164.6 300.5,164.8 301.6,165 302.7,165.2 303.9,165.4 305,165.6 306.2,165.9 307.3,166.1 308.5,166.3 309.7,166.5 310.8,166.7 312,166.9 313.2,167.1 314.4,167.3 315.6,167.5 316.8,167.7 318,168 319.2,168.2 320.4,168.4 321.7,168.6 322.9,168.8 324.1,169 325.4,169.2 326.6,169.4 327.9,169.6 329.1,169.9 330.4,170.1 331.7,170.3 332.9,170.5 334.2,170.7 335.5,170.9 336.8,171.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="344.7,172.4 334,175.7 335.6,165.9" fill="currentColor"/>
  <circle cx="250" cy="186" r="4" fill="currentColor"/>
  <circle cx="186" cy="122" r="4" fill="currentColor"/>
  <text x="250" y="209" font-size="13" fill="currentColor" text-anchor="middle">(4, 0)</text>
  <text x="174.8" y="142.2" font-size="13" fill="currentColor" text-anchor="end">(0, 4)</text>
  <text x="90" y="37.2" font-size="13" fill="currentColor" text-anchor="start">f(x)</text>
  <text x="286.8" y="208.4" font-size="13" fill="currentColor" text-anchor="start">f^{−1}(x)</text>
</svg>
</div>

**Example.** Restrict the domain and then find the inverse of

$$f(x)=(x-2)^2-3.$$

**Solution.** We can see this is a parabola with vertex at $(2,-3)$ that
opens upward. Because the graph will be decreasing on one side of the
vertex and increasing on the other side, we can restrict this function to
a domain on which it will be one-to-one by limiting the domain to $x\ge2$.

To find the inverse, we will use the vertex form of the quadratic. We
start by replacing $f(x)$ with a simple variable, $y$, then solve for $x$.

$$
\begin{array}{lrcll}
& y &=& (x-2)^2-3 & \text{Interchange }x\text{ and }y. \\[4pt]
& x &=& (y-2)^2-3 & \text{Add 3 to both sides.} \\[4pt]
& x+3 &=& (y-2)^2 & \text{Take the square root.} \\[4pt]
& \pm\sqrt{x+3} &=& y-2 & \text{Add 2 to both sides.} \\[4pt]
& 2\pm\sqrt{x+3} &=& y & \text{Rename the function.} \\[4pt]
f^{-1}(x) &=& 2\pm\sqrt{x+3} &
\end{array}
$$

Now we need to determine which case to use. Because we restricted our
original function to a domain of $x\ge2$, the outputs of the inverse
should be the same, telling us to utilize the $+$ case

$$f^{-1}(x)=2+\sqrt{x+3}$$

If the quadratic had not been given in vertex form, rewriting it into
vertex form would be the first step. This way we may easily observe the
coordinates of the vertex to help us restrict the domain.

**Analysis.** Notice that we arbitrarily decided to restrict the domain on
$x\ge2$. We could just have easily opted to restrict the domain on
$x\le2$, in which case $f^{-1}(x)=2-\sqrt{x+3}$. Observe the original
function graphed on the same set of axes as its inverse function below.
Notice that both graphs show symmetry about the line $y=x$. The coordinate
pair $(2,-3)$ is on the graph of $f$ and the coordinate pair $(-3,2)$ is
on the graph of $f^{-1}$. Observe from the graph of both functions on the
same set of axes that

$$\text{domain of }f=\text{range of }f^{-1}=[2,\infty)$$

and

$$\text{domain of }f^{-1}=\text{range of }f=[-3,\infty)$$

Finally, observe that the graph of $f$ intersects the graph of $f^{-1}$
along the line $y=x$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The curve labelled f, the right half of an upward parabola with vertex at (2, -3) restricted to x greater than or equal to 2, together with its inverse, the curve labelled f inverse, equal to 2 plus the square root of the quantity x plus 3, rising from (-3, 2). A dashed line marks y = x. The two curves are mirror images across it, and the points (2, -3) and (-3, 2) are marked.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":15,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":1,"from":2,"arrows":"end"}],"curves":[{"kind":"sqrt","a":1,"h":-3,"k":2}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"points":[{"at":[2,-3],"label":"(2, -3)","labelSide":"se"},{"at":[-3,2],"label":"(-3, 2)","labelSide":"nw"}],"texts":[{"at":[5,9.3],"text":"f(x)","anchor":"start"},{"at":[-9.3,4.6],"text":"f^{-1}(x)","anchor":"start"}]}'>
<svg role="img" aria-label="The curve labelled f, the right half of an upward parabola with vertex at (2, -3) restricted to x greater than or equal to 2, together with its inverse, the curve labelled f inverse, equal to 2 plus the square root of the quantity x plus 3, rising from (-3, 2). A dashed line marks y = x. The two curves are mirror images across it, and the points (2, -3) and (-3, 2) are marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352" width="352" height="352" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="326" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="41" y1="326" x2="41" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="326" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="71" y1="326" x2="71" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="326" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="101" y1="326" x2="101" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="326" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="131" y1="326" x2="131" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="326" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="161" y1="326" x2="161" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="191" y1="326" x2="191" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="326" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="221" y1="326" x2="221" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="326" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="251" y1="326" x2="251" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="326" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="281" y1="326" x2="281" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="326" x2="296" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="311" y1="326" x2="311" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="326" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="326" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="311" x2="326" y2="311" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="296" x2="326" y2="296" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="281" x2="326" y2="281" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="326" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="251" x2="326" y2="251" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="326" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="221" x2="326" y2="221" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="326" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="191" x2="326" y2="191" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="161" x2="326" y2="161" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="326" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="131" x2="326" y2="131" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="326" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="101" x2="326" y2="101" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="326" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="71" x2="326" y2="71" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="326" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="41" x2="326" y2="41" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="176" x2="328" y2="176" stroke="currentColor" stroke-width="1"/>
  <line x1="176" y1="24" x2="176" y2="328" stroke="currentColor" stroke-width="1"/>
  <polygon points="338,176 328,181 328,171" fill="currentColor"/>
  <polygon points="176,14 181,24 171,24" fill="currentColor"/>
  <polygon points="14,176 24,171 24,181" fill="currentColor"/>
  <polygon points="176,338 171,328 181,328" fill="currentColor"/>
  <text x="336" y="168" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="184" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="173" x2="26" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="191" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="56" y1="173" x2="56" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="191" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="86" y1="173" x2="86" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="191" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="116" y1="173" x2="116" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="191" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="173" x2="146" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="191" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="206" y1="173" x2="206" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="191" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="236" y1="173" x2="236" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="191" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="173" x2="266" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="191" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="296" y1="173" x2="296" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="191" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="326" y1="173" x2="326" y2="179" stroke="currentColor" stroke-width="1"/>
  <text x="326" y="191" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="173" y1="326" x2="179" y2="326" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="330" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="173" y1="296" x2="179" y2="296" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="300" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="173" y1="266" x2="179" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="173" y1="236" x2="179" y2="236" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="240" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="173" y1="206" x2="179" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="210" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="173" y1="146" x2="179" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="173" y1="116" x2="179" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="120" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="173" y1="86" x2="179" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="90" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="173" y1="56" x2="179" y2="56" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="60" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="173" y1="26" x2="179" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="27.1" y1="324.9" x2="324.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="332,20 328.5,30.6 321.4,23.5" fill="currentColor"/>
  <polygon points="20,332 23.5,321.4 30.6,328.5" fill="currentColor"/>
  <polyline points="206,221 206.3,221 206.5,221 206.8,221 207,220.9 207.3,220.9 207.5,220.8 207.8,220.8 208,220.7 208.3,220.7 208.5,220.6 208.8,220.5 209,220.4 209.3,220.3 209.5,220.2 209.8,220.1 210,219.9 210.3,219.8 210.5,219.7 210.8,219.5 211,219.3 211.3,219.2 211.5,219 211.8,218.8 212,218.6 212.3,218.4 212.5,218.2 212.8,218 213,217.7 213.3,217.5 213.5,217.3 213.8,217 214,216.7 214.3,216.5 214.5,216.2 214.8,215.9 215,215.6 215.3,215.3 215.5,215 215.8,214.7 216,214.3 216.3,214 216.5,213.7 216.8,213.3 217,212.9 217.3,212.6 217.5,212.2 217.8,211.8 218,211.4 218.3,211 218.5,210.6 218.8,210.2 219,209.7 219.3,209.3 219.5,208.8 219.8,208.4 220,207.9 220.3,207.5 220.5,207 220.8,206.5 221,206 221.3,205.5 221.5,205 221.8,204.5 222,203.9 222.3,203.4 222.5,202.8 222.8,202.3 223,201.7 223.3,201.2 223.5,200.6 223.8,200 224,199.4 224.3,198.8 224.5,198.2 224.8,197.6 225,196.9 225.3,196.3 225.5,195.7 225.8,195 226,194.3 226.3,193.7 226.5,193 226.8,192.3 227,191.6 227.3,190.9 227.5,190.2 227.8,189.5 228,188.7 228.3,188 228.5,187.3 228.8,186.5 229,185.7 229.3,185 229.5,184.2 229.8,183.4 230,182.6 230.3,181.8 230.5,181 230.8,180.2 231,179.3 231.3,178.5 231.5,177.6 231.8,176.8 232,175.9 232.3,175.1 232.5,174.2 232.8,173.3 233,172.4 233.3,171.5 233.5,170.6 233.8,169.7 234,168.7 234.3,167.8 234.5,166.9 234.8,165.9 235,164.9 235.3,164 235.5,163 235.8,162 236,161 236.3,160 236.5,159 236.8,158 237,156.9 237.3,155.9 237.5,154.8 237.8,153.8 238,152.7 238.3,151.7 238.5,150.6 238.8,149.5 239,148.4 239.3,147.3 239.5,146.2 239.8,145.1 240,143.9 240.3,142.8 240.5,141.7 240.8,140.5 241,139.3 241.3,138.2 241.5,137 241.8,135.8 242,134.6 242.3,133.4 242.5,132.2 242.8,131 243,129.7 243.3,128.5 243.5,127.3 243.8,126 244,124.7 244.3,123.5 244.5,122.2 244.8,120.9 245,119.6 245.3,118.3 245.5,117 245.8,115.7 246,114.3 246.3,113 246.5,111.6 246.8,110.3 247,108.9 247.3,107.6 247.5,106.2 247.8,104.8 248,103.4 248.3,102 248.5,100.6 248.8,99.2 249,97.7 249.3,96.3 249.5,94.8 249.8,93.4 250,91.9 250.3,90.5 250.5,89 250.8,87.5 251,86 251.3,84.5 251.5,83 251.8,81.5 252,79.9 252.3,78.4 252.5,76.9 252.8,75.3 253,73.7 253.3,72.2 253.5,70.6 253.8,69 254,67.4 254.3,65.8 254.5,64.2 254.8,62.6 255,60.9 255.3,59.3 255.5,57.6 255.8,56 256,54.3 256.3,52.7 256.5,51 256.8,49.3 257,47.6 257.3,45.9 257.5,44.2 257.8,42.5 258,40.7 258.3,39 258.5,37.3 258.8,35.5 258.9,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="260,26.6 263.6,37.2 253.7,35.8" fill="currentColor"/>
  <polyline points="131,146 131,145.8 131,145.5 131,145.3 131.1,145.1 131.1,144.9 131.1,144.6 131.2,144.4 131.2,144.2 131.3,144 131.3,143.7 131.4,143.5 131.5,143.3 131.6,143.1 131.7,142.8 131.8,142.6 131.9,142.4 132,142.2 132.1,141.9 132.2,141.7 132.4,141.5 132.5,141.3 132.6,141 132.8,140.8 132.9,140.6 133.1,140.4 133.3,140.1 133.5,139.9 133.7,139.7 133.8,139.5 134,139.2 134.3,139 134.5,138.8 134.7,138.6 134.9,138.3 135.1,138.1 135.4,137.9 135.6,137.7 135.9,137.4 136.1,137.2 136.4,137 136.7,136.8 137,136.5 137.3,136.3 137.6,136.1 137.9,135.9 138.2,135.6 138.5,135.4 138.8,135.2 139.1,135 139.5,134.7 139.8,134.5 140.2,134.3 140.5,134.1 140.9,133.8 141.2,133.6 141.6,133.4 142,133.2 142.4,132.9 142.8,132.7 143.2,132.5 143.6,132.3 144,132 144.4,131.8 144.9,131.6 145.3,131.4 145.7,131.1 146.2,130.9 146.7,130.7 147.1,130.5 147.6,130.2 148.1,130 148.6,129.8 149,129.5 149.5,129.3 150,129.1 150.6,128.9 151.1,128.6 151.6,128.4 152.1,128.2 152.7,128 153.2,127.7 153.8,127.5 154.3,127.3 154.9,127.1 155.5,126.8 156,126.6 156.6,126.4 157.2,126.2 157.8,125.9 158.4,125.7 159,125.5 159.7,125.3 160.3,125 160.9,124.8 161.6,124.6 162.2,124.4 162.9,124.1 163.5,123.9 164.2,123.7 164.9,123.5 165.5,123.2 166.2,123 166.9,122.8 167.6,122.6 168.3,122.3 169,122.1 169.8,121.9 170.5,121.7 171.2,121.4 172,121.2 172.7,121 173.5,120.8 174.2,120.5 175,120.3 175.8,120.1 176.6,119.9 177.3,119.6 178.1,119.4 178.9,119.2 179.8,119 180.6,118.7 181.4,118.5 182.2,118.3 183.1,118.1 183.9,117.8 184.7,117.6 185.6,117.4 186.5,117.2 187.3,116.9 188.2,116.7 189.1,116.5 190,116.3 190.9,116 191.8,115.8 192.7,115.6 193.6,115.4 194.5,115.1 195.5,114.9 196.4,114.7 197.4,114.5 198.3,114.2 199.3,114 200.2,113.8 201.2,113.6 202.2,113.3 203.2,113.1 204.2,112.9 205.2,112.6 206.2,112.4 207.2,112.2 208.2,112 209.2,111.7 210.2,111.5 211.3,111.3 212.3,111.1 213.4,110.8 214.4,110.6 215.5,110.4 216.6,110.2 217.7,109.9 218.8,109.7 219.8,109.5 220.9,109.3 222.1,109 223.2,108.8 224.3,108.6 225.4,108.4 226.5,108.1 227.7,107.9 228.8,107.7 230,107.5 231.2,107.2 232.3,107 233.5,106.8 234.7,106.6 235.9,106.3 237.1,106.1 238.3,105.9 239.5,105.7 240.7,105.4 241.9,105.2 243.1,105 244.4,104.8 245.6,104.5 246.9,104.3 248.1,104.1 249.4,103.9 250.7,103.6 251.9,103.4 253.2,103.2 254.5,103 255.8,102.7 257.1,102.5 258.4,102.3 259.7,102.1 261.1,101.8 262.4,101.6 263.7,101.4 265.1,101.2 266.4,100.9 267.8,100.7 269.1,100.5 270.5,100.3 271.9,100 273.3,99.8 274.7,99.6 276.1,99.4 277.5,99.1 278.9,98.9 280.3,98.7 281.7,98.5 283.2,98.2 284.6,98 286,97.8 287.5,97.6 288.9,97.3 290.4,97.1 291.9,96.9 293.4,96.6 294.9,96.4 296.3,96.2 297.8,96 299.4,95.7 300.9,95.5 302.4,95.3 303.9,95.1 305.4,94.8 307,94.6 308.5,94.4 310.1,94.2 311.6,93.9 313.2,93.7 314.8,93.5 316.4,93.3 318,93 318.1,93" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="326,91.9 316.8,98.3 315.4,88.4" fill="currentColor"/>
  <circle cx="206" cy="221" r="4" fill="currentColor"/>
  <circle cx="131" cy="146" r="4" fill="currentColor"/>
  <text x="217.2" y="241.2" font-size="13" fill="currentColor" text-anchor="start">(2, −3)</text>
  <text x="119.8" y="134.8" font-size="13" fill="currentColor" text-anchor="end">(−3, 2)</text>
  <text x="251" y="36.5" font-size="13" fill="currentColor" text-anchor="start">f(x)</text>
  <text x="36.5" y="107" font-size="13" fill="currentColor" text-anchor="start">f^{−1}(x)</text>
</svg>
</div>

{{< fillin
  question="Find the inverse of the function $f(x)=x^2+1$, on the domain $x\ge0$."
  answer="\sqrt{x-1}"
  answerDisplay="$f^{-1}(x)=\sqrt{x-1}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ — the domain $x\ge0$ tells you which sign to keep."
>}}

## Solving applications of radical functions

Notice that the functions from previous examples were all polynomials, and
their inverses were radical functions. If we want to find the **inverse of
a radical function**, we will need to restrict the domain of the answer
because the range of the original function is limited.

{{< callout type="info" >}}
  **How to:** given a radical function, find the inverse.

  1. Determine the range of the original function.
  2. Replace $f(x)$ with $y$, then solve for $x$.
  3. If necessary, restrict the domain of the inverse function to the
     range of the original function.
{{< /callout >}}

**Example.** Restrict the domain and then find the inverse of the
function $f(x)=\sqrt{x-4}$.

**Solution.** Note that the original function has range $f(x)\ge0$.
Replace $f(x)$ with $y$, then solve for $x$.

$$
\begin{array}{lrcl}
y &=& \sqrt{x-4} & \text{Replace }f(x)\text{ with }y. \\[4pt]
x &=& \sqrt{y-4} & \text{Interchange }x\text{ and }y. \\[4pt]
x^2 &=& y-4 & \text{Square each side.} \\[4pt]
x^2+4 &=& y & \text{Add 4.} \\[4pt]
f^{-1}(x) &=& x^2+4 & \text{Rename the function }f^{-1}(x).
\end{array}
$$

Recall that the domain of this function must be limited to the range of
the original function.

$$f^{-1}(x)=x^2+4,\ x\ge0$$

**Analysis.** Notice below that the inverse is a reflection of the
original function over the line $y=x$. Because the original function has
only positive outputs, the inverse function has only positive inputs.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The curve labelled f, the square root of the quantity x minus 4, restricted to x greater than or equal to 4, together with its inverse, the curve labelled f inverse, equal to x squared plus 4, restricted to x greater than or equal to 0. Neither curve has an arrowhead at its starting endpoint, since each domain begins there. A dashed line marks y = x, and the two curves are mirror images across it.","xMin":-2,"xMax":14,"yMin":-2,"yMax":14,"unit":22,"xTickStep":2,"yTickStep":2,"tickLabels":true,"curves":[{"kind":"sqrt","a":1,"h":4,"k":0}],"quadratics":[{"a":1,"c":4,"from":0,"arrows":"end"}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"texts":[{"at":[9,3.6],"text":"f(x)","anchor":"start"},{"at":[2.6,10.6],"text":"f^{-1}(x)","anchor":"start"}]}'>
<svg role="img" aria-label="The curve labelled f, the square root of the quantity x minus 4, restricted to x greater than or equal to 4, together with its inverse, the curve labelled f inverse, equal to x squared plus 4, restricted to x greater than or equal to 0. Neither curve has an arrowhead at its starting endpoint, since each domain begins there. A dashed line marks y = x, and the two curves are mirror images across it." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404 404" width="404" height="404" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="378" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="378" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="378" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="378" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="378" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="378" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="378" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="378" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="378" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="378" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="378" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="378" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="312" y1="378" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="334" y1="378" x2="334" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="356" y1="378" x2="356" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="378" y1="378" x2="378" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="378" x2="378" y2="378" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="356" x2="378" y2="356" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="312" x2="378" y2="312" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="378" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="378" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="378" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="378" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="378" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="378" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="378" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="378" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="378" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="378" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="378" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="378" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="378" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="334" x2="380" y2="334" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="380" stroke="currentColor" stroke-width="1"/>
  <polygon points="390,334 380,339 380,329" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,334 24,329 24,339" fill="currentColor"/>
  <polygon points="70,390 65,380 75,380" fill="currentColor"/>
  <text x="388" y="326" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="331" x2="26" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="349" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="331" x2="114" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="349" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="158" y1="331" x2="158" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="349" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="202" y1="331" x2="202" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="349" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="246" y1="331" x2="246" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="349" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="290" y1="331" x2="290" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="349" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="334" y1="331" x2="334" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="334" y="349" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="378" y1="331" x2="378" y2="337" stroke="currentColor" stroke-width="1"/>
  <text x="378" y="349" font-size="11" fill="currentColor" text-anchor="middle">14</text>
  <line x1="67" y1="378" x2="73" y2="378" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="382" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="67" y1="290" x2="73" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="294" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="67" y1="246" x2="73" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="250" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="67" y1="202" x2="73" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="206" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="67" y1="158" x2="73" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="162" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="67" y1="114" x2="73" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="118" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="74" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">14</text>
  <line x1="27.1" y1="376.9" x2="376.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="384,20 380.5,30.6 373.4,23.5" fill="currentColor"/>
  <polygon points="20,384 23.5,373.4 30.6,380.5" fill="currentColor"/>
  <polyline points="70,246 70.3,246 70.5,246 70.8,246 71,246 71.3,245.9 71.5,245.9 71.8,245.9 72,245.8 72.3,245.8 72.5,245.7 72.8,245.7 73,245.6 73.3,245.5 73.5,245.4 73.8,245.4 74,245.3 74.3,245.2 74.5,245.1 74.8,245 75,244.9 75.3,244.7 75.5,244.6 75.8,244.5 76,244.4 76.3,244.2 76.5,244.1 76.8,243.9 77,243.8 77.3,243.6 77.5,243.4 77.8,243.3 78,243.1 78.3,242.9 78.5,242.7 78.8,242.5 79,242.3 79.3,242.1 79.5,241.9 79.8,241.7 80,241.5 80.3,241.2 80.5,241 80.8,240.7 81,240.5 81.3,240.2 81.5,240 81.8,239.7 82,239.5 82.3,239.2 82.5,238.9 82.8,238.6 83,238.3 83.3,238 83.5,237.7 83.8,237.4 84,237.1 84.3,236.8 84.5,236.4 84.8,236.1 85,235.8 85.3,235.4 85.5,235.1 85.8,234.7 86,234.4 86.3,234 86.5,233.6 86.8,233.2 87,232.9 87.3,232.5 87.5,232.1 87.8,231.7 88,231.3 88.3,230.9 88.5,230.4 88.8,230 89,229.6 89.3,229.2 89.5,228.7 89.8,228.3 90,227.8 90.3,227.4 90.5,226.9 90.8,226.4 91,226 91.3,225.5 91.5,225 91.8,224.5 92,224 92.3,223.5 92.5,223 92.8,222.5 93,222 93.3,221.4 93.5,220.9 93.8,220.4 94,219.8 94.3,219.3 94.5,218.7 94.8,218.2 95,217.6 95.3,217 95.5,216.4 95.8,215.9 96,215.3 96.3,214.7 96.5,214.1 96.8,213.5 97,212.9 97.3,212.2 97.5,211.6 97.8,211 98,210.4 98.3,209.7 98.5,209.1 98.8,208.4 99,207.8 99.3,207.1 99.5,206.4 99.8,205.8 100,205.1 100.3,204.4 100.5,203.7 100.8,203 101,202.3 101.3,201.6 101.5,200.9 101.8,200.2 102,199.5 102.3,198.7 102.5,198 102.8,197.2 103,196.5 103.3,195.7 103.5,195 103.8,194.2 104,193.5 104.3,192.7 104.5,191.9 104.8,191.1 105,190.3 105.3,189.5 105.5,188.7 105.8,187.9 106,187.1 106.3,186.3 106.5,185.4 106.8,184.6 107,183.8 107.3,182.9 107.5,182.1 107.8,181.2 108,180.4 108.3,179.5 108.5,178.6 108.8,177.7 109,176.9 109.3,176 109.5,175.1 109.8,174.2 110,173.3 110.3,172.4 110.5,171.4 110.8,170.5 111,169.6 111.3,168.7 111.5,167.7 111.8,166.8 112,165.8 112.3,164.9 112.5,163.9 112.8,162.9 113,162 113.3,161 113.5,160 113.8,159 114,158 114.3,157 114.5,156 114.8,155 115,154 115.3,152.9 115.5,151.9 115.8,150.9 116,149.8 116.3,148.8 116.5,147.7 116.8,146.7 117,145.6 117.3,144.5 117.5,143.4 117.8,142.4 118,141.3 118.3,140.2 118.5,139.1 118.8,138 119,136.9 119.3,135.7 119.5,134.6 119.8,133.5 120,132.4 120.3,131.2 120.5,130.1 120.8,128.9 121,127.8 121.3,126.6 121.5,125.4 121.8,124.3 122,123.1 122.3,121.9 122.5,120.7 122.8,119.5 123,118.3 123.3,117.1 123.5,115.9 123.8,114.7 124,113.5 124.3,112.2 124.5,111 124.8,109.7 125,108.5 125.3,107.2 125.5,106 125.8,104.7 126,103.5 126.3,102.2 126.5,100.9 126.8,99.6 127,98.3 127.3,97 127.5,95.7 127.8,94.4 128,93.1 128.3,91.8 128.5,90.4 128.8,89.1 129,87.8 129.3,86.4 129.5,85.1 129.8,83.7 130,82.4 130.3,81 130.5,79.6 130.8,78.2 131,76.9 131.3,75.5 131.5,74.1 131.8,72.7 132,71.3 132.3,69.9 132.5,68.4 132.8,67 133,65.6 133.3,64.2 133.5,62.7 133.8,61.3 134,59.8 134.3,58.4 134.5,56.9 134.8,55.4 135,54 135.3,52.5 135.5,51 135.8,49.5 136,48 136.3,46.5 136.5,45 136.8,43.5 137,42 137.3,40.4 137.5,38.9 137.8,37.4 138,35.8 138.2,34.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="139.5,26.4 142.9,37.1 133,35.5" fill="currentColor"/>
  <polyline points="158,334 158,333.8 158,333.5 158,333.3 158,333 158.1,332.8 158.1,332.5 158.1,332.3 158.2,332 158.2,331.8 158.3,331.5 158.3,331.3 158.4,331 158.5,330.8 158.6,330.5 158.6,330.3 158.7,330 158.8,329.8 158.9,329.5 159,329.3 159.1,329 159.2,328.8 159.4,328.5 159.5,328.3 159.6,328 159.8,327.8 159.9,327.5 160.1,327.3 160.2,327 160.4,326.8 160.5,326.5 160.7,326.3 160.9,326 161.1,325.8 161.3,325.5 161.5,325.3 161.7,325 161.9,324.8 162.1,324.5 162.3,324.3 162.5,324 162.8,323.8 163,323.5 163.2,323.3 163.5,323 163.7,322.8 164,322.5 164.2,322.3 164.5,322 164.8,321.8 165.1,321.5 165.4,321.3 165.6,321 165.9,320.8 166.2,320.5 166.5,320.3 166.9,320 167.2,319.8 167.5,319.5 167.8,319.3 168.2,319 168.5,318.8 168.9,318.5 169.2,318.3 169.6,318 169.9,317.8 170.3,317.5 170.7,317.3 171.1,317 171.5,316.8 171.8,316.5 172.2,316.3 172.7,316 173.1,315.8 173.5,315.5 173.9,315.3 174.3,315 174.8,314.8 175.2,314.6 175.6,314.3 176.1,314.1 176.5,313.8 177,313.6 177.5,313.3 177.9,313.1 178.4,312.8 178.9,312.6 179.4,312.3 179.9,312.1 180.4,311.8 180.9,311.6 181.4,311.3 181.9,311.1 182.4,310.8 183,310.6 183.5,310.3 184,310.1 184.6,309.8 185.1,309.6 185.7,309.3 186.3,309.1 186.8,308.8 187.4,308.6 188,308.3 188.6,308.1 189.2,307.8 189.8,307.6 190.4,307.3 191,307.1 191.6,306.8 192.2,306.6 192.8,306.3 193.5,306.1 194.1,305.8 194.7,305.6 195.4,305.3 196,305.1 196.7,304.8 197.4,304.6 198,304.3 198.7,304.1 199.4,303.8 200.1,303.6 200.8,303.3 201.5,303.1 202.2,302.8 202.9,302.6 203.6,302.3 204.3,302.1 205,301.8 205.8,301.6 206.5,301.3 207.2,301.1 208,300.8 208.7,300.6 209.5,300.3 210.3,300.1 211,299.8 211.8,299.6 212.6,299.3 213.4,299.1 214.2,298.8 215,298.6 215.8,298.3 216.6,298.1 217.4,297.8 218.2,297.6 219.1,297.3 219.9,297.1 220.7,296.8 221.6,296.6 222.4,296.3 223.3,296.1 224.2,295.8 225,295.6 225.9,295.3 226.8,295.1 227.7,294.9 228.6,294.6 229.5,294.4 230.4,294.1 231.3,293.9 232.2,293.6 233.1,293.4 234,293.1 234.9,292.9 235.9,292.6 236.8,292.4 237.8,292.1 238.7,291.9 239.7,291.6 240.6,291.4 241.6,291.1 242.6,290.9 243.6,290.6 244.6,290.4 245.5,290.1 246.5,289.9 247.5,289.6 248.6,289.4 249.6,289.1 250.6,288.9 251.6,288.6 252.6,288.4 253.7,288.1 254.7,287.9 255.8,287.6 256.8,287.4 257.9,287.1 259,286.9 260,286.6 261.1,286.4 262.2,286.1 263.3,285.9 264.4,285.6 265.5,285.4 266.6,285.1 267.7,284.9 268.8,284.6 269.9,284.4 271.1,284.1 272.2,283.9 273.3,283.6 274.5,283.4 275.6,283.1 276.8,282.9 277.9,282.6 279.1,282.4 280.3,282.1 281.5,281.9 282.6,281.6 283.8,281.4 285,281.1 286.2,280.9 287.4,280.6 288.6,280.4 289.9,280.1 291.1,279.9 292.3,279.6 293.6,279.4 294.8,279.1 296,278.9 297.3,278.6 298.5,278.4 299.8,278.1 301.1,277.9 302.4,277.6 303.6,277.4 304.9,277.1 306.2,276.9 307.5,276.6 308.8,276.4 310.1,276.1 311.4,275.9 312.8,275.7 314.1,275.4 315.4,275.2 316.7,274.9 318.1,274.7 319.4,274.4 320.8,274.2 322.2,273.9 323.5,273.7 324.9,273.4 326.3,273.2 327.6,272.9 329,272.7 330.4,272.4 331.8,272.2 333.2,271.9 334.6,271.7 336.1,271.4 337.5,271.2 338.9,270.9 340.3,270.7 341.8,270.4 343.2,270.2 344.7,269.9 346.1,269.7 347.6,269.4 349.1,269.2 350.5,268.9 352,268.7 353.5,268.4 355,268.2 356.5,267.9 358,267.7 359.5,267.4 361,267.2 362.5,266.9 364,266.7 365.6,266.4 367.1,266.2 368.5,265.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="376.4,264.7 367.3,271.2 365.8,261.3" fill="currentColor"/>
  <text x="268" y="254.8" font-size="13" fill="currentColor" text-anchor="start">f(x)</text>
  <text x="127.2" y="100.8" font-size="13" fill="currentColor" text-anchor="start">f^{−1}(x)</text>
</svg>
</div>

{{< fillin
  question="Restrict the domain and then find the inverse of the function $f(x)=\sqrt{2x+3}$."
  answer="\frac{x^2-3}{2}"
  answerDisplay="$f^{-1}(x)=\tfrac{x^2-3}{2},\ x\ge0$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then square both sides and solve for $y$."
>}}

Radical functions are common in physical models, as we saw in the section
opener. We now have enough tools to be able to solve the problem posed at
the start of the section.

**Example.** Park rangers construct a mound of gravel in the shape of a
cone with the height equal to twice the radius. The volume of the cone in
terms of the radius is given by

$$V=\tfrac{2}{3}\pi r^3$$

Find the inverse of the function $V=\tfrac{2}{3}\pi r^3$ that determines
the volume $V$ of a cone and is a function of the radius $r$. Then use the
inverse function to calculate the radius of such a mound of gravel
measuring 100 cubic feet. Use $\pi=3.14$.

**Solution.** Start with the given function for $V$. Notice that the
meaningful domain for the function is $r\ge0$ since negative radii would
not make sense in this context. Also note the range of the function
(hence, the domain of the inverse function) is $V\ge0$. Solve for $r$ in
terms of $V$, using the method outlined previously.

$$
\begin{array}{lrcll}
& V &=& \tfrac{2}{3}\pi r^3 & \\[4pt]
& r^3 &=& \tfrac{3V}{2\pi} & \text{Solve for }r^3. \\[4pt]
& r &=& \sqrt[3]{\tfrac{3V}{2\pi}} & \text{Solve for }r.
\end{array}
$$

This is the result stated in the section opener. Now evaluate this for
$V=100$ and $\pi=3.14$.

$$
\begin{array}{lrcl}
r &=& \sqrt[3]{\tfrac{3V}{2\pi}} \\[4pt]
&=& \sqrt[3]{\tfrac{3\cdot100}{2\cdot3.14}} \\[4pt]
&\approx& \sqrt[3]{47.7707} \\[4pt]
&\approx& 3.63
\end{array}
$$

Therefore, the radius is about 3.63 ft.

## Determining the domain of a radical function composed with other functions

When radical functions are composed with other functions, determining
domain can become more complicated.

**Example.** Find the domain of the function
$f(x)=\sqrt{\tfrac{(x+2)(x-3)}{(x-1)}}$.

**Solution.** Because a square root is only defined when the quantity
under the radical is non-negative, we need to determine where
$\tfrac{(x+2)(x-3)}{(x-1)}\ge0$. The output of a rational function can
change signs (change from positive to negative or vice versa) at
$x$-intercepts and at vertical asymptotes. For this equation, the graph
could change signs at $x=-2$, $1$, and $3$.

To determine the intervals on which the rational expression is positive,
we could test some values in the expression or sketch a graph. While both
approaches work equally well, for this example we will use a graph, shown
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the rational expression (x plus 2)(x minus 3) over (x minus 1), with x-intercepts at (-2, 0) and (3, 0) and a vertical asymptote at x = 1, dashed. The curve dips below the x-axis between -2 and 1, and again is negative approaching the asymptote from the right before crossing at x = 3. The outputs are non-negative — the curve is on or above the x-axis — on the intervals from -2 up to 1 and from 3 onward, each marked Outputs are non-negative.","xMin":-7,"xMax":7,"yMin":-10,"yMax":10,"unit":17,"xTickStep":2,"yTickStep":2,"tickLabels":true,"rationals":[{"num":[-6,-1,1],"den":[-1,1]}],"lines":[{"x":1,"dashed":true,"arrows":false}],"points":[{"at":[-2,0],"label":"(−2, 0)","labelSide":"s"},{"at":[3,0],"label":"(3, 0)","labelSide":"s"}],"texts":[{"at":[0.3,9.3],"text":"x = 1","anchor":"start"},{"at":[-6.8,6.6],"text":"Outputs are","anchor":"start"},{"at":[-6.8,5.4],"text":"non-negative","anchor":"start"},{"at":[2.2,7.6],"text":"Outputs are","anchor":"start"},{"at":[2.2,6.4],"text":"non-negative","anchor":"start"}],"segments":[{"from":[-4.6,5.4],"to":[-2.3,1.5],"arrows":"end"},{"from":[3.6,6.4],"to":[3.1,1.5],"arrows":"end"}]}'>
<svg role="img" aria-label="The graph of the rational expression (x plus 2)(x minus 3) over (x minus 1), with x-intercepts at (-2, 0) and (3, 0) and a vertical asymptote at x = 1, dashed. The curve dips below the x-axis between -2 and 1, and again is negative approaching the asymptote from the right before crossing at x = 3. The outputs are non-negative — the curve is on or above the x-axis — on the intervals from -2 up to 1 and from 3 onward, each marked Outputs are non-negative." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 392" width="290" height="392" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="366" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="43" y1="366" x2="43" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="60" y1="366" x2="60" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="77" y1="366" x2="77" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="366" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="111" y1="366" x2="111" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="366" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="366" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="179" y1="366" x2="179" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="366" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="213" y1="366" x2="213" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="366" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="247" y1="366" x2="247" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="366" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="366" x2="264" y2="366" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="349" x2="264" y2="349" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="332" x2="264" y2="332" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="315" x2="264" y2="315" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="298" x2="264" y2="298" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="281" x2="264" y2="281" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="264" x2="264" y2="264" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="247" x2="264" y2="247" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="264" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="213" x2="264" y2="213" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="179" x2="264" y2="179" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="264" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="145" x2="264" y2="145" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="264" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="111" x2="264" y2="111" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="264" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="77" x2="264" y2="77" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="264" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="43" x2="264" y2="43" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="196" x2="266" y2="196" stroke="currentColor" stroke-width="1"/>
  <line x1="145" y1="24" x2="145" y2="368" stroke="currentColor" stroke-width="1"/>
  <polygon points="276,196 266,201 266,191" fill="currentColor"/>
  <polygon points="145,14 150,24 140,24" fill="currentColor"/>
  <polygon points="14,196 24,191 24,201" fill="currentColor"/>
  <polygon points="145,378 140,368 150,368" fill="currentColor"/>
  <text x="274" y="188" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="153" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="43" y1="193" x2="43" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="43" y="211" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="77" y1="193" x2="77" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="77" y="211" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="111" y1="193" x2="111" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="211" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="179" y1="193" x2="179" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="179" y="211" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="213" y1="193" x2="213" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="213" y="211" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="247" y1="193" x2="247" y2="199" stroke="currentColor" stroke-width="1"/>
  <text x="247" y="211" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="142" y1="366" x2="148" y2="366" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="370" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="142" y1="332" x2="148" y2="332" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="336" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="142" y1="298" x2="148" y2="298" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="302" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="142" y1="264" x2="148" y2="264" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="268" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="142" y1="230" x2="148" y2="230" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="234" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="142" y1="162" x2="148" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="166" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="142" y1="128" x2="148" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="132" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="142" y1="94" x2="148" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="98" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="142" y1="60" x2="148" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="64" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="142" y1="26" x2="148" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="139" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="162" y1="372" x2="162" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="31.4,296.3 31.5,296.2 31.8,295.9 32,295.7 32.3,295.4 32.5,295.1 32.8,294.8 33,294.6 33.3,294.3 33.5,294 33.8,293.7 34,293.5 34.3,293.2 34.5,292.9 34.8,292.6 35,292.3 35.3,292.1 35.5,291.8 35.8,291.5 36,291.2 36.3,291 36.5,290.7 36.8,290.4 37,290.1 37.3,289.9 37.5,289.6 37.8,289.3 38,289 38.3,288.7 38.5,288.5 38.8,288.2 39,287.9 39.3,287.6 39.5,287.3 39.8,287.1 40,286.8 40.3,286.5 40.5,286.2 40.8,285.9 41,285.7 41.3,285.4 41.5,285.1 41.8,284.8 42,284.6 42.3,284.3 42.5,284 42.8,283.7 43,283.4 43.3,283.1 43.5,282.9 43.8,282.6 44,282.3 44.3,282 44.5,281.7 44.8,281.5 45,281.2 45.3,280.9 45.5,280.6 45.8,280.3 46,280.1 46.3,279.8 46.5,279.5 46.8,279.2 47,278.9 47.3,278.6 47.5,278.4 47.8,278.1 48,277.8 48.3,277.5 48.5,277.2 48.8,276.9 49,276.7 49.3,276.4 49.5,276.1 49.7,275.8 50,275.5 50.3,275.2 50.5,274.9 50.8,274.7 51,274.4 51.3,274.1 51.5,273.8 51.8,273.5 52,273.2 52.3,273 52.5,272.7 52.8,272.4 53,272.1 53.3,271.8 53.5,271.5 53.8,271.2 54,270.9 54.3,270.7 54.5,270.4 54.8,270.1 55,269.8 55.3,269.5 55.5,269.2 55.8,268.9 56,268.6 56.3,268.4 56.5,268.1 56.8,267.8 57,267.5 57.3,267.2 57.5,266.9 57.8,266.6 58,266.3 58.2,266 58.5,265.7 58.8,265.5 59,265.2 59.3,264.9 59.5,264.6 59.8,264.3 60,264 60.3,263.7 60.5,263.4 60.8,263.1 61,262.8 61.3,262.5 61.5,262.2 61.8,262 62,261.7 62.3,261.4 62.5,261.1 62.8,260.8 63,260.5 63.3,260.2 63.5,259.9 63.8,259.6 64,259.3 64.3,259 64.5,258.7 64.8,258.4 65,258.1 65.3,257.8 65.5,257.5 65.8,257.2 66,256.9 66.3,256.6 66.5,256.3 66.7,256 67,255.7 67.2,255.4 67.5,255.2 67.8,254.9 68,254.6 68.3,254.3 68.5,254 68.8,253.7 69,253.4 69.3,253.1 69.5,252.8 69.8,252.5 70,252.2 70.3,251.9 70.5,251.5 70.8,251.2 71,250.9 71.3,250.6 71.5,250.3 71.8,250 72,249.7 72.3,249.4 72.5,249.1 72.8,248.8 73,248.5 73.3,248.2 73.5,247.9 73.8,247.6 74,247.3 74.3,247 74.5,246.7 74.8,246.4 75,246.1 75.2,245.8 75.5,245.5 75.7,245.1 76,244.8 76.3,244.5 76.5,244.2 76.8,243.9 77,243.6 77.3,243.3 77.5,243 77.8,242.7 78,242.4 78.3,242 78.5,241.7 78.8,241.4 79,241.1 79.3,240.8 79.5,240.5 79.8,240.2 80,239.9 80.3,239.5 80.5,239.2 80.8,238.9 81,238.6 81.3,238.3 81.5,238 81.8,237.6 82,237.3 82.3,237 82.5,236.7 82.8,236.4 83,236.1 83.3,235.7 83.5,235.4 83.8,235.1 84,234.8 84.3,234.4 84.5,234.1 84.8,233.8 85,233.5 85.3,233.2 85.5,232.8 85.8,232.5 86,232.2 86.3,231.9 86.5,231.5 86.8,231.2 87,230.9 87.3,230.6 87.5,230.2 87.8,229.9 88,229.6 88.3,229.2 88.5,228.9 88.8,228.6 89,228.2 89.3,227.9 89.5,227.6 89.8,227.3 90,226.9 90.3,226.6 90.5,226.2 90.8,225.9 91,225.6 91.3,225.2 91.5,224.9 91.8,224.6 92,224.2 92.3,223.9 92.5,223.6 92.8,223.2 93,222.9 93.3,222.5 93.5,222.2 93.8,221.8 94,221.5 94.3,221.2 94.5,220.8 94.8,220.5 95,220.1 95.3,219.8 95.5,219.4 95.8,219.1 96,218.7 96.3,218.4 96.5,218 96.8,217.7 97,217.3 97.3,217 97.5,216.6 97.8,216.3 98,215.9 98.3,215.6 98.5,215.2 98.8,214.8 99,214.5 99.3,214.1 99.5,213.8 99.8,213.4 100,213 100.3,212.7 100.5,212.3 100.8,211.9 101,211.6 101.3,211.2 101.5,210.8 101.8,210.5 102,210.1 102.3,209.7 102.5,209.4 102.8,209 103,208.6 103.3,208.2 103.5,207.9 103.8,207.5 104,207.1 104.3,206.7 104.5,206.3 104.8,206 105,205.6 105.3,205.2 105.5,204.8 105.8,204.4 106,204 106.3,203.6 106.5,203.3 106.8,202.9 107,202.5 107.3,202.1 107.5,201.7 107.8,201.3 108,200.9 108.3,200.5 108.5,200.1 108.8,199.7 109,199.3 109.3,198.9 109.5,198.5 109.8,198.1 110,197.7 110.3,197.2 110.5,196.8 110.8,196.4 111,196 111.3,195.6 111.5,195.2 111.8,194.7 112,194.3 112.3,193.9 112.5,193.5 112.8,193 113,192.6 113.3,192.2 113.5,191.7 113.8,191.3 114,190.9 114.3,190.4 114.5,190 114.8,189.6 115,189.1 115.3,188.7 115.5,188.2 115.8,187.8 116,187.3 116.3,186.8 116.5,186.4 116.8,185.9 117,185.5 117.3,185 117.5,184.5 117.8,184.1 118,183.6 118.3,183.1 118.5,182.6 118.8,182.2 119,181.7 119.3,181.2 119.5,180.7 119.8,180.2 120,179.7 120.3,179.2 120.5,178.7 120.8,178.2 121,177.7 121.3,177.2 121.5,176.7 121.8,176.2 122,175.6 122.3,175.1 122.5,174.6 122.8,174.1 123,173.5 123.3,173 123.5,172.5 123.8,171.9 124,171.4 124.3,170.8 124.5,170.3 124.8,169.7 125,169.1 125.3,168.6 125.5,168 125.8,167.4 126,166.8 126.3,166.2 126.5,165.7 126.8,165.1 127,164.5 127.3,163.9 127.5,163.2 127.8,162.6 128,162 128.3,161.4 128.5,160.7 128.8,160.1 129,159.5 129.3,158.8 129.5,158.1 129.8,157.5 130,156.8 130.3,156.1 130.5,155.5 130.8,154.8 131,154.1 131.3,153.4 131.5,152.6 131.8,151.9 132,151.2 132.3,150.5 132.5,149.7 132.8,149 133,148.2 133.3,147.4 133.5,146.7 133.8,145.9 134,145.1 134.3,144.3 134.5,143.4 134.8,142.6 135,141.8 135.3,140.9 135.5,140.1 135.8,139.2 136,138.3 136.3,137.4 136.5,136.5 136.8,135.6 137,134.6 137.3,133.7 137.5,132.7 137.8,131.7 138,130.8 138.3,129.7 138.5,128.7 138.8,127.7 139,126.6 139.3,125.5 139.5,124.4 139.8,123.3 140,122.2 140.3,121 140.5,119.8 140.8,118.7 141,117.4 141.3,116.2 141.5,114.9 141.8,113.6 142,112.3 142.3,111 142.5,109.6 142.8,108.2 143,106.7 143.3,105.3 143.5,103.8 143.8,102.2 144,100.7 144.3,99.1 144.5,97.4 144.8,95.7 145,94 145.3,92.2 145.5,90.4 145.8,88.5 146,86.6 146.3,84.7 146.5,82.6 146.8,80.5 147,78.4 147.3,76.2 147.5,73.9 147.8,71.6 148,69.1 148.3,66.6 148.5,64.1 148.8,61.4 149,58.6 149.3,55.8 149.5,52.8 149.8,49.7 150,46.5 150.3,43.2 150.5,39.7 150.7,36.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,302.3 29,291.5 36.4,298.2" fill="currentColor"/>
  <polygon points="151.3,28.4 155.6,38.8 145.6,38.1" fill="currentColor"/>
  <polyline points="171.4,354.7 171.5,352 171.8,347.1 172,342.4 172.3,337.9 172.5,333.6 172.8,329.6 173,325.6 173.3,321.9 173.5,318.3 173.8,314.8 174,311.5 174.3,308.3 174.5,305.2 174.8,302.3 175,299.4 175.3,296.6 175.5,293.9 175.8,291.4 176,288.9 176.3,286.4 176.5,284.1 176.8,281.8 177,279.6 177.3,277.5 177.5,275.4 177.8,273.3 178,271.4 178.3,269.5 178.5,267.6 178.8,265.8 179,264 179.3,262.3 179.5,260.6 179.8,258.9 180,257.3 180.3,255.8 180.5,254.2 180.8,252.7 181,251.3 181.3,249.8 181.5,248.4 181.8,247 182,245.7 182.3,244.4 182.5,243.1 182.8,241.8 183,240.6 183.3,239.3 183.5,238.2 183.8,237 184,235.8 184.3,234.7 184.5,233.6 184.8,232.5 185,231.4 185.3,230.3 185.5,229.3 185.8,228.3 186,227.2 186.3,226.3 186.5,225.3 186.8,224.3 187,223.4 187.3,222.4 187.5,221.5 187.8,220.6 188,219.7 188.3,218.8 188.5,217.9 188.8,217.1 189,216.2 189.3,215.4 189.5,214.6 189.8,213.7 190,212.9 190.3,212.1 190.5,211.3 190.8,210.6 191,209.8 191.3,209 191.5,208.3 191.8,207.5 192,206.8 192.3,206.1 192.5,205.4 192.8,204.6 193,203.9 193.3,203.2 193.5,202.5 193.8,201.9 194,201.2 194.3,200.5 194.5,199.9 194.8,199.2 195,198.5 195.3,197.9 195.5,197.3 195.8,196.6 196,196 196.3,195.4 196.5,194.8 196.8,194.1 197,193.5 197.3,192.9 197.5,192.3 197.8,191.8 198,191.2 198.3,190.6 198.5,190 198.8,189.4 199,188.9 199.3,188.3 199.5,187.7 199.8,187.2 200,186.6 200.3,186.1 200.5,185.5 200.8,185 201,184.5 201.3,183.9 201.5,183.4 201.8,182.9 202,182.3 202.3,181.8 202.5,181.3 202.8,180.8 203,180.3 203.3,179.8 203.5,179.3 203.8,178.8 204,178.3 204.3,177.8 204.5,177.3 204.8,176.8 205,176.3 205.3,175.8 205.5,175.4 205.8,174.9 206,174.4 206.3,173.9 206.5,173.5 206.8,173 207,172.5 207.3,172.1 207.5,171.6 207.8,171.2 208,170.7 208.3,170.2 208.5,169.8 208.8,169.3 209,168.9 209.3,168.4 209.5,168 209.8,167.6 210,167.1 210.3,166.7 210.5,166.3 210.8,165.8 211,165.4 211.3,165 211.5,164.5 211.8,164.1 212,163.7 212.3,163.3 212.5,162.8 212.8,162.4 213,162 213.3,161.6 213.5,161.2 213.8,160.8 214,160.3 214.3,159.9 214.5,159.5 214.8,159.1 215,158.7 215.3,158.3 215.5,157.9 215.8,157.5 216,157.1 216.3,156.7 216.5,156.3 216.8,155.9 217,155.5 217.3,155.1 217.5,154.7 217.8,154.4 218,154 218.3,153.6 218.5,153.2 218.8,152.8 219,152.4 219.3,152 219.5,151.7 219.8,151.3 220,150.9 220.3,150.5 220.5,150.1 220.8,149.8 221,149.4 221.3,149 221.5,148.6 221.8,148.3 222,147.9 222.3,147.5 222.5,147.2 222.8,146.8 223,146.4 223.3,146.1 223.5,145.7 223.8,145.3 224,145 224.3,144.6 224.5,144.2 224.8,143.9 225,143.5 225.3,143.2 225.5,142.8 225.8,142.4 226,142.1 226.3,141.7 226.5,141.4 226.8,141 227,140.7 227.3,140.3 227.5,140 227.8,139.6 228,139.3 228.3,138.9 228.5,138.6 228.8,138.2 229,137.9 229.3,137.5 229.5,137.2 229.8,136.8 230,136.5 230.3,136.2 230.5,135.8 230.8,135.5 231,135.1 231.3,134.8 231.5,134.4 231.8,134.1 232,133.8 232.3,133.4 232.5,133.1 232.8,132.8 233,132.4 233.3,132.1 233.5,131.8 233.8,131.4 234,131.1 234.3,130.8 234.5,130.4 234.8,130.1 235,129.8 235.3,129.4 235.5,129.1 235.8,128.8 236,128.4 236.3,128.1 236.5,127.8 236.8,127.4 237,127.1 237.3,126.8 237.5,126.5 237.8,126.1 238,125.8 238.3,125.5 238.5,125.2 238.8,124.8 239,124.5 239.3,124.2 239.5,123.9 239.8,123.6 240,123.2 240.3,122.9 240.5,122.6 240.8,122.3 241,121.9 241.3,121.6 241.5,121.3 241.8,121 242,120.7 242.3,120.4 242.5,120 242.8,119.7 243,119.4 243.3,119.1 243.5,118.8 243.8,118.5 244,118.1 244.3,117.8 244.5,117.5 244.8,117.2 245,116.9 245.3,116.6 245.5,116.3 245.8,116 246,115.6 246.3,115.3 246.5,115 246.8,114.7 247,114.4 247.3,114.1 247.5,113.8 247.8,113.5 248,113.2 248.3,112.9 248.5,112.5 248.8,112.2 249,111.9 249.3,111.6 249.5,111.3 249.8,111 250,110.7 250.3,110.4 250.5,110.1 250.8,109.8 251,109.5 251.3,109.2 251.5,108.9 251.8,108.6 252,108.3 252.3,108 252.5,107.7 252.8,107.4 253,107.1 253.3,106.8 253.5,106.5 253.8,106.1 254,105.8 254.3,105.5 254.5,105.2 254.8,104.9 255,104.6 255.3,104.3 255.5,104 255.8,103.7 256,103.4 256.3,103.1 256.5,102.8 256.8,102.6 257,102.3 257.3,102 257.5,101.7 257.8,101.4 258,101.1 258.3,100.8 258.5,100.5 258.8,100.2 258.8,100.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="171,362.7 166.5,352.4 176.5,352.9" fill="currentColor"/>
  <polygon points="264,94 261.3,104.9 253.7,98.4" fill="currentColor"/>
  <line x1="66.8" y1="104.2" x2="100.8" y2="161.9" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="105.9,170.5 96.5,164.4 105.1,159.3" fill="currentColor"/>
  <line x1="206.2" y1="87.2" x2="198.7" y2="160.6" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="197.7,170.5 193.7,160 203.7,161.1" fill="currentColor"/>
  <circle cx="111" cy="196" r="4" fill="currentColor"/>
  <circle cx="196" cy="196" r="4" fill="currentColor"/>
  <text x="111" y="219" font-size="13" fill="currentColor" text-anchor="middle">(−2, 0)</text>
  <text x="196" y="219" font-size="13" fill="currentColor" text-anchor="middle">(3, 0)</text>
  <text x="150.1" y="37.9" font-size="13" fill="currentColor" text-anchor="start">x = 1</text>
  <text x="29.4" y="83.8" font-size="13" fill="currentColor" text-anchor="start">Outputs are</text>
  <text x="29.4" y="104.2" font-size="13" fill="currentColor" text-anchor="start">non−negative</text>
  <text x="182.4" y="66.8" font-size="13" fill="currentColor" text-anchor="start">Outputs are</text>
  <text x="182.4" y="87.2" font-size="13" fill="currentColor" text-anchor="start">non−negative</text>
</svg>
</div>

This function has two $x$-intercepts, both of which exhibit linear
behavior near the $x$-intercepts. There is one vertical asymptote,
corresponding to a linear factor; this behavior is similar to the basic
reciprocal toolkit function, and there is no horizontal asymptote because
the degree of the numerator is larger than the degree of the denominator.
There is a $y$-intercept at $(0,\sqrt6)$.

From the $y$-intercept and $x$-intercept at $x=-2$, we can sketch the left
side of the graph. From the behavior at the asymptote, we can sketch the
right side of the graph.

From the graph, we can now tell on which intervals the outputs will be
non-negative, so that we can be sure that the original function $f(x)$
will be defined. $f(x)$ has domain $-2\le x<1$ or $x\ge3$, or in interval
notation, $[-2,1)\cup[3,\infty)$.

## Finding inverses of rational functions

As with finding inverses of quadratic functions, it is sometimes desirable
to find the **inverse of a rational function**, particularly of rational
functions that are the ratio of linear functions, such as in concentration
applications.

**Example.** The function $C=\tfrac{20+0.4n}{100+n}$ represents the
concentration $C$ of an acid solution after $n$ mL of 40% solution has
been added to 100 mL of a 20% solution. First, find the inverse of the
function; that is, find an expression for $n$ in terms of $C$. Then use
your result to determine how much of the 40% solution should be added so
that the final mixture is a 35% solution.

**Solution.** We first want the inverse of the function. We will solve
for $n$ in terms of $C$.

$$
\begin{array}{lrcl}
& C &=& \tfrac{20+0.4n}{100+n} \\[4pt]
& C(100+n) &=& 20+0.4n \\[4pt]
& 100C+Cn &=& 20+0.4n \\[4pt]
& 100C-20 &=& 0.4n-Cn \\[4pt]
& 100C-20 &=& (0.4-C)n \\[4pt]
& n &=& \tfrac{100C-20}{0.4-C}
\end{array}
$$

Now evaluate this function for $C=0.35$ (35%).

$$
\begin{array}{lrcl}
n &=& \tfrac{100(0.35)-20}{0.4-0.35} \\[4pt]
&=& \tfrac{15}{0.05} \\[4pt]
&=& 300
\end{array}
$$

We can conclude that 300 mL of the 40% solution should be added.

{{< fillin
  question="Find the inverse of the function $f(x)=\tfrac{x+3}{x-2}$."
  answer="\frac{2x+3}{x-1}"
  answerDisplay="$f^{-1}(x)=\tfrac{2x+3}{x-1}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then clear the fraction and collect all terms with $y$ on one side."
>}}

## Key concepts

- The inverse of a quadratic function is a square root function.
- If $f^{-1}$ is the inverse of a function $f$, then $f$ is the inverse of
  the function $f^{-1}$.
- While it is not possible to find an inverse of most polynomial
  functions, some basic polynomials are invertible.
- To find the inverse of certain functions, we must restrict the function
  to a domain on which it will be one-to-one.
- When finding the inverse of a radical function, we need a restriction on
  the domain of the answer.
- Inverse and radical functions can be used to solve application problems.

## Practice

### Find the inverse of a polynomial function

{{< fillin
  question="Find the inverse of the function $f(x)=x^3+5$."
  answer="\sqrt[3]{x-5}"
  answerDisplay="$f^{-1}(x)=\sqrt[3]{x-5}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ by taking a cube root."
>}}

{{< fillin
  question="Find the inverse of the function $f(x)=\tfrac{3x+4}{5-4x}$."
  answer="\frac{5x-4}{4x+3}"
  answerDisplay="$f^{-1}(x)=\tfrac{5x-4}{4x+3}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, clear the fraction, then collect the terms with $y$ on one side."
>}}

{{< fillin
  question="The volume, $V$, of a sphere in terms of its radius, $r$, is given by $V(r)=\tfrac{4}{3}\pi r^3$. Express $r$ as a function of $V$."
  answer="\sqrt[3]{\frac{3V}{4\pi}}"
  answerDisplay="$r(V)=\sqrt[3]{\tfrac{3V}{4\pi}}$"
  hint="Solve $V=\tfrac{4}{3}\pi r^3$ for $r$ by isolating $r^3$ and taking a cube root."
>}}

{{< fillin
  question="Using that same inverse, find the radius of a sphere with a volume of 200 cubic feet, rounded to the nearest hundredth."
  answer="3.63"
  answerDisplay="$3.63$ feet"
  hint="Substitute $V=200$ into $r(V)=\sqrt[3]{\tfrac{3V}{4\pi}}$."
>}}

### Restrict the domain to find the inverse of a polynomial function

{{< fillin
  question="Find the inverse of the function $f(x)=(x+1)^2-3$ on the domain $x\ge-1$."
  answer="\sqrt{x+3}-1"
  answerDisplay="$f^{-1}(x)=\sqrt{x+3}-1$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ — the domain $x\ge-1$ tells you which sign to keep."
>}}

{{< fillin
  question="Find the inverse of the function $f(x)=3x^2+5$ on the domain $x\le0$."
  answer="-\sqrt{\frac{x-5}{3}}"
  answerDisplay="$f^{-1}(x)=-\sqrt{\tfrac{x-5}{3}}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ — the domain $x\le0$ tells you which sign to keep."
>}}

{{< fillin
  question="The volume of a right circular cone, $V$, in terms of its radius, $r$, and a fixed height of 12 inches, is given by $V=4\pi r^2$. Restricting to the physically meaningful domain $r\ge0$, express $r$ as a function of $V$."
  answer="\sqrt{\frac{V}{4\pi}}"
  answerDisplay="$r(V)=\sqrt{\tfrac{V}{4\pi}}$"
  hint="Solve $V=4\pi r^2$ for $r$, keeping only the non-negative root since $r\ge0$."
>}}

{{< fillin
  question="Using that same inverse, find the radius of a cone with volume 50 cubic inches, rounded to the nearest hundredth."
  answer="1.99"
  answerDisplay="$1.99$ inches"
  hint="Substitute $V=50$ into $r(V)=\sqrt{\tfrac{V}{4\pi}}$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.8: Inverses
and Radical Functions](https://openstax.org/books/precalculus-2e/pages/3-8-inverses-and-radical-functions)
by Jay Abramson and OpenStax, © OpenStax, licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
Access the original for free at
[openstax.org](https://openstax.org/details/books/precalculus-2e).
Changes: recreated every figure as an accessible inline SVG generated from
its exact equation — the parabolic-trough setup diagram as a labelled
schematic drawn from its own cross-sectional formula $y=\tfrac{1}{2}x^2$,
the standalone parabola $y=\tfrac{1}{2}x^2$, the cubic $f(x)=5x^3+1$ with
its cube-root inverse and the line $y=x$, the two half-parabola panels for
$f(x)=(x-4)^2$ restricted to $x\ge4$ and $x\le4$, the matching two panels
pairing each half with its square-root inverse, the quadratic
$f(x)=(x-2)^2-3$ restricted to $x\ge2$ with its inverse
$f^{-1}(x)=2+\sqrt{x+3}$, the radical $f(x)=\sqrt{x-4}$ with its
quadratic inverse, and the rational sign-analysis graph of
$\tfrac{(x+2)(x-3)}{(x-1)}$; omitted the decorative gravel-cone photograph,
which carries no mathematics; converted the five "Try It" checks into
interactive fill-in components, including rephrasing the two
verify-that-two-functions-are-inverses checks (Example 1's Try It) as a
numerical composition check, $f^{-1}(f(1))$, since a free-response box
cannot grade a written proof; and adapted six selected end-of-section
exercises — a cubic-function inverse and a rational-function inverse, two
quadratic inverses on a source-given restricted domain, and two real-world
cone/sphere volume-inverse problems, each split into a formula-then-evaluate
pair of prompts since it already asks for both a general inverse and a
numerical evaluation — into eight interactive components in a closing
Practice block, one group per objective.</small>
