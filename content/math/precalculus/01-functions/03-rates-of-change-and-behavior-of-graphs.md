---
title: Rates of Change and Behavior of Graphs
description: >-
  Average rate of change from tables, graphs, and formulas; increasing and
  decreasing intervals; local and absolute maxima and minima; and the
  behavior of the toolkit functions — adapted from OpenStax Precalculus 2e,
  Section 1.3.
source_section: "1.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find the average rate
  of change of a function, use a graph to determine where a function is
  increasing, decreasing, or constant, use a graph to locate local maxima and
  local minima, and use a graph to locate the absolute maximum and absolute
  minimum.
{{< /callout >}}

Gasoline costs have experienced some wild fluctuations over the last several
decades. The table below lists the average cost, in dollars, of a gallon of
gasoline for the years 2005–2012. The cost of gasoline can be considered as a
function of year.

| $y$ | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $C(y)$ | 2.31 | 2.62 | 2.84 | 3.30 | 2.41 | 2.84 | 3.58 | 3.68 |

If we were interested only in how the gasoline prices changed between 2005
and 2012, we could compute that the cost per gallon had increased from \$2.31
to \$3.68, an increase of \$1.37. While this is interesting, it might be more
useful to look at how much the price changed *per year*. In this section, we
will investigate changes such as these.

## Finding the average rate of change of a function

The price change per year is a **rate of change** because it describes how an
output quantity changes relative to the change in the input quantity. We can
see that the price of gasoline in the table did not change by the same amount
each year, so the rate of change was not constant. If we use only the
beginning and ending data, we would be finding the **average rate of change**
over the specified period of time. To find the average rate of change, we
divide the change in the output value by the change in the input value.

$$
\begin{array}{lrcl}
& \text{Average rate of change} &=& \tfrac{\text{Change in output}}{\text{Change in input}} \\[4pt]
& &=& \tfrac{\Delta y}{\Delta x} \\[4pt]
& &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{f(x_2)-f(x_1)}{x_2-x_1}
\end{array}
$$

The Greek letter $\Delta$ (delta) signifies the change in a quantity; we read
the ratio as "delta-$y$ over delta-$x$" or "the change in $y$ divided by the
change in $x$." Occasionally we write $\Delta f$ instead of $\Delta y$, which
still represents the change in the function's output value resulting from a
change to its input value. It does not mean we are changing the function into
some other function.

In our example, the gasoline price increased by \$1.37 from 2005 to 2012.
Over 7 years, the average rate of change was

$$\frac{\Delta y}{\Delta x}=\frac{1.37}{7\ \text{years}}\approx 0.196\ \text{dollars per year}$$

On average, the price of gas increased by about 19.6¢ each year.

Other examples of rates of change include:

- A population of rats increasing by 40 rats per week
- A car traveling 68 miles per hour (distance traveled changes by 68 miles
  each hour as time passes)
- A car driving 27 miles per gallon (distance traveled changes by 27 miles
  for each gallon)
- The current through an electrical circuit increasing by 0.125 amperes for
  every volt of increased voltage
- The amount of money in a college account decreasing by \$4,000 per quarter

{{< callout type="info" >}}
  **Rate of change.** A rate of change describes how an output quantity
  changes relative to the change in the input quantity. The units on a rate
  of change are "output units per input units."

  The average rate of change between two input values is the total change of
  the function values (output values) divided by the change in the input
  values.

  $$\frac{\Delta y}{\Delta x}=\frac{f(x_2)-f(x_1)}{x_2-x_1}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the value of a function at different points, calculate
  the average rate of change of a function for the interval between two
  values $x_1$ and $x_2$.

  1. Calculate the difference $y_2-y_1=\Delta y$.
  2. Calculate the difference $x_2-x_1=\Delta x$.
  3. Find the ratio $\tfrac{\Delta y}{\Delta x}$.
{{< /callout >}}

**Example.** Using the gasoline data above, find the average rate of change
of the price of gasoline between 2007 and 2009.

**Solution.** In 2007, the price of gasoline was \$2.84. In 2009, the cost
was \$2.41. The average rate of change is

$$
\begin{array}{lrcl}
& \tfrac{\Delta y}{\Delta x} &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{2.41-2.84}{2009-2007} \\[4pt]
& &=& \tfrac{-0.43}{2\ \text{years}} \\[4pt]
& &=& -0.22\ \text{per year}
\end{array}
$$

Note that a decrease is expressed by a negative change or "negative
increase." A rate of change is negative when the output decreases as the
input increases or when the output increases as the input decreases.

{{< fillin
  question="Using the gasoline data above, find the average rate of change between 2005 and 2010, in dollars per year."
  answer="0.106"
  answerDisplay="$\tfrac{2.84-2.31}{5\ \text{years}}=\tfrac{0.53}{5\ \text{years}}=0.106$ dollars per year"
  hint="Divide the change in cost by the 5-year change in time."
>}}

**Example.** Given the function $g(t)$ graphed below, find the average rate
of change on the interval $[-1,2]$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of g of t, an upward-opening parabola with its vertex near (1.5, 0.9). It passes through (−1, 4) and (2, 1).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"t","yLabel":"g(t)","quadratics":[{"a":0.5,"b":-1.5,"c":2}]}'>
<svg role="img" aria-label="The graph of g of t, an upward-opening parabola with its vertex near (1.5, 0.9). It passes through (−1, 4) and (2, 1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252" width="252" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="126" y1="24" x2="126" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,126 228,131 228,121" fill="currentColor"/>
  <polygon points="126,14 131,24 121,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="126,238 121,228 131,228" fill="currentColor"/>
  <text x="236" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="134" y="24" font-size="13" fill="currentColor" font-style="italic">g(t)</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="226" y1="123" x2="226" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="141" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="123" y1="226" x2="129" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="123" y1="206" x2="129" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="123" y1="186" x2="129" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="123" y1="166" x2="129" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="123" y1="146" x2="129" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="123" y1="106" x2="129" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="123" y1="86" x2="129" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="123" y1="66" x2="129" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="123" y1="46" x2="129" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="123" y1="26" x2="129" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="101.4,34.1 101.5,34.2 101.8,34.9 102,35.6 102.3,36.3 102.5,36.9 102.8,37.6 103,38.3 103.3,38.9 103.5,39.6 103.8,40.2 104,40.9 104.3,41.5 104.5,42.2 104.8,42.8 105,43.5 105.3,44.1 105.5,44.7 105.8,45.4 106,46 106.3,46.6 106.5,47.2 106.8,47.9 107,48.5 107.3,49.1 107.5,49.7 107.8,50.3 108,50.9 108.3,51.5 108.5,52.1 108.8,52.7 109,53.3 109.3,53.9 109.5,54.4 109.8,55 110,55.6 110.3,56.2 110.5,56.7 110.8,57.3 111,57.9 111.3,58.4 111.5,59 111.8,59.5 112,60.1 112.3,60.6 112.5,61.2 112.8,61.7 113,62.3 113.3,62.8 113.5,63.3 113.8,63.9 114,64.4 114.3,64.9 114.5,65.4 114.8,66 115,66.5 115.3,67 115.5,67.5 115.8,68 116,68.5 116.3,69 116.5,69.5 116.8,70 117,70.5 117.3,71 117.5,71.4 117.8,71.9 118,72.4 118.3,72.9 118.5,73.3 118.8,73.8 119,74.3 119.3,74.7 119.5,75.2 119.8,75.6 120,76.1 120.3,76.5 120.5,77 120.8,77.4 121,77.9 121.3,78.3 121.5,78.7 121.8,79.2 122,79.6 122.3,80 122.5,80.4 122.8,80.9 123,81.3 123.3,81.7 123.5,82.1 123.8,82.5 124,82.9 124.3,83.3 124.5,83.7 124.8,84.1 125,84.5 125.3,84.9 125.5,85.2 125.8,85.6 126,86 126.3,86.4 126.5,86.7 126.8,87.1 127,87.5 127.3,87.8 127.5,88.2 127.8,88.5 128,88.9 128.3,89.2 128.5,89.6 128.8,89.9 129,90.3 129.3,90.6 129.5,90.9 129.8,91.3 130,91.6 130.3,91.9 130.5,92.2 130.8,92.6 131,92.9 131.3,93.2 131.5,93.5 131.8,93.8 132,94.1 132.3,94.4 132.5,94.7 132.8,95 133,95.3 133.3,95.6 133.5,95.8 133.8,96.1 134,96.4 134.3,96.7 134.5,96.9 134.8,97.2 135,97.5 135.3,97.7 135.5,98 135.8,98.2 136,98.5 136.3,98.7 136.5,99 136.8,99.2 137,99.5 137.3,99.7 137.5,99.9 137.8,100.2 138,100.4 138.3,100.6 138.5,100.8 138.8,101.1 139,101.3 139.3,101.5 139.5,101.7 139.8,101.9 140,102.1 140.3,102.3 140.5,102.5 140.8,102.7 141,102.9 141.3,103.1 141.5,103.2 141.8,103.4 142,103.6 142.3,103.8 142.5,103.9 142.8,104.1 143,104.3 143.3,104.4 143.5,104.6 143.8,104.7 144,104.9 144.3,105 144.5,105.2 144.8,105.3 145,105.5 145.3,105.6 145.5,105.7 145.8,105.9 146,106 146.3,106.1 146.5,106.2 146.8,106.4 147,106.5 147.3,106.6 147.5,106.7 147.8,106.8 148,106.9 148.3,107 148.5,107.1 148.8,107.2 149,107.3 149.3,107.4 149.5,107.4 149.8,107.5 150,107.6 150.3,107.7 150.5,107.7 150.8,107.8 151,107.9 151.3,107.9 151.5,108 151.8,108 152,108.1 152.3,108.1 152.5,108.2 152.8,108.2 153,108.3 153.3,108.3 153.5,108.3 153.8,108.4 154,108.4 154.3,108.4 154.5,108.4 154.8,108.5 155,108.5 155.3,108.5 155.5,108.5 155.8,108.5 156,108.5 156.3,108.5 156.5,108.5 156.8,108.5 157,108.5 157.3,108.5 157.5,108.4 157.8,108.4 158,108.4 158.3,108.4 158.5,108.3 158.8,108.3 159,108.3 159.3,108.2 159.5,108.2 159.8,108.1 160,108.1 160.3,108 160.5,108 160.8,107.9 161,107.9 161.3,107.8 161.5,107.7 161.8,107.7 162,107.6 162.3,107.5 162.5,107.4 162.8,107.4 163,107.3 163.3,107.2 163.5,107.1 163.8,107 164,106.9 164.3,106.8 164.5,106.7 164.8,106.6 165,106.5 165.3,106.4 165.5,106.2 165.8,106.1 166,106 166.3,105.9 166.5,105.7 166.8,105.6 167,105.5 167.3,105.3 167.5,105.2 167.8,105 168,104.9 168.3,104.7 168.5,104.6 168.8,104.4 169,104.3 169.3,104.1 169.5,103.9 169.8,103.8 170,103.6 170.3,103.4 170.5,103.2 170.8,103.1 171,102.9 171.3,102.7 171.5,102.5 171.8,102.3 172,102.1 172.3,101.9 172.5,101.7 172.8,101.5 173,101.3 173.3,101.1 173.5,100.8 173.8,100.6 174,100.4 174.3,100.2 174.5,99.9 174.8,99.7 175,99.5 175.3,99.2 175.5,99 175.8,98.7 176,98.5 176.3,98.2 176.5,98 176.8,97.7 177,97.5 177.3,97.2 177.5,96.9 177.8,96.7 178,96.4 178.3,96.1 178.5,95.8 178.8,95.6 179,95.3 179.3,95 179.5,94.7 179.8,94.4 180,94.1 180.3,93.8 180.5,93.5 180.8,93.2 181,92.9 181.3,92.6 181.5,92.2 181.8,91.9 182,91.6 182.3,91.3 182.5,90.9 182.8,90.6 183,90.3 183.3,89.9 183.5,89.6 183.8,89.2 184,88.9 184.3,88.5 184.5,88.2 184.8,87.8 185,87.5 185.3,87.1 185.5,86.7 185.8,86.4 186,86 186.3,85.6 186.5,85.2 186.8,84.9 187,84.5 187.3,84.1 187.5,83.7 187.8,83.3 188,82.9 188.3,82.5 188.5,82.1 188.8,81.7 189,81.3 189.3,80.9 189.5,80.4 189.8,80 190,79.6 190.3,79.2 190.5,78.7 190.8,78.3 191,77.9 191.3,77.4 191.5,77 191.8,76.5 192,76.1 192.3,75.6 192.5,75.2 192.8,74.7 193,74.3 193.3,73.8 193.5,73.3 193.8,72.9 194,72.4 194.3,71.9 194.5,71.4 194.8,71 195,70.5 195.3,70 195.5,69.5 195.8,69 196,68.5 196.3,68 196.5,67.5 196.8,67 197,66.5 197.3,66 197.5,65.4 197.8,64.9 198,64.4 198.3,63.9 198.5,63.3 198.8,62.8 199,62.3 199.3,61.7 199.5,61.2 199.8,60.6 200,60.1 200.3,59.5 200.5,59 200.8,58.4 201,57.9 201.3,57.3 201.5,56.7 201.8,56.2 202,55.6 202.3,55 202.5,54.4 202.8,53.9 203,53.3 203.3,52.7 203.5,52.1 203.8,51.5 204,50.9 204.3,50.3 204.5,49.7 204.8,49.1 205,48.5 205.3,47.9 205.5,47.2 205.8,46.6 206,46 206.3,45.4 206.5,44.7 206.8,44.1 207,43.5 207.3,42.8 207.5,42.2 207.8,41.5 208,40.9 208.3,40.2 208.5,39.6 208.8,38.9 209,38.3 209.3,37.6 209.5,36.9 209.8,36.3 210,35.6 210.3,34.9 210.5,34.2 210.6,34.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="98.8,26.6 106.8,34.3 97.4,37.7" fill="currentColor"/>
  <polygon points="213.3,26.6 214.6,37.7 205.2,34.3" fill="currentColor"/>
</svg>
</div>

**Solution.** At $t=-1$, the graph shows $g(-1)=4$. At $t=2$, the graph shows
$g(2)=1$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same parabola with the points (−1, 4) and (2, 1) marked and joined by a straight line. A horizontal dashed segment from (−1, 1) to (2, 1) is labelled delta t = 3, and a vertical dashed segment from (−1, 1) to (−1, 4) is labelled delta g(t) = −3.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"t","yLabel":"g(t)","quadratics":[{"a":0.5,"b":-1.5,"c":2}],"segments":[{"from":[-1,4],"to":[2,1]},{"from":[-1,1],"to":[2,1],"dashed":true},{"from":[-1,1],"to":[-1,4],"dashed":true}],"points":[{"at":[-1,4]},{"at":[2,1]}],"texts":[{"at":[-1,4],"text":"(−1, 4)","anchor":"end","dx":-8,"dy":-4},{"at":[2,1],"text":"(2, 1)","dx":9,"dy":4},{"at":[0.5,1],"text":"Δt = 3","anchor":"middle","dy":16},{"at":[-1.15,2.5],"text":"Δg(t) = −3","anchor":"end"}]}'>
<svg role="img" aria-label="The same parabola with the points (−1, 4) and (2, 1) marked and joined by a straight line. A horizontal dashed segment from (−1, 1) to (2, 1) is labelled delta t = 3, and a vertical dashed segment from (−1, 1) to (−1, 4) is labelled delta g(t) = −3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252" width="252" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="126" y1="24" x2="126" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,126 228,131 228,121" fill="currentColor"/>
  <polygon points="126,14 131,24 121,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="126,238 121,228 131,228" fill="currentColor"/>
  <text x="236" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="134" y="24" font-size="13" fill="currentColor" font-style="italic">g(t)</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="226" y1="123" x2="226" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="141" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="123" y1="226" x2="129" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="123" y1="206" x2="129" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="123" y1="186" x2="129" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="123" y1="166" x2="129" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="123" y1="146" x2="129" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="123" y1="106" x2="129" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="123" y1="86" x2="129" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="123" y1="66" x2="129" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="123" y1="46" x2="129" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="123" y1="26" x2="129" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="101.4,34.1 101.5,34.2 101.8,34.9 102,35.6 102.3,36.3 102.5,36.9 102.8,37.6 103,38.3 103.3,38.9 103.5,39.6 103.8,40.2 104,40.9 104.3,41.5 104.5,42.2 104.8,42.8 105,43.5 105.3,44.1 105.5,44.7 105.8,45.4 106,46 106.3,46.6 106.5,47.2 106.8,47.9 107,48.5 107.3,49.1 107.5,49.7 107.8,50.3 108,50.9 108.3,51.5 108.5,52.1 108.8,52.7 109,53.3 109.3,53.9 109.5,54.4 109.8,55 110,55.6 110.3,56.2 110.5,56.7 110.8,57.3 111,57.9 111.3,58.4 111.5,59 111.8,59.5 112,60.1 112.3,60.6 112.5,61.2 112.8,61.7 113,62.3 113.3,62.8 113.5,63.3 113.8,63.9 114,64.4 114.3,64.9 114.5,65.4 114.8,66 115,66.5 115.3,67 115.5,67.5 115.8,68 116,68.5 116.3,69 116.5,69.5 116.8,70 117,70.5 117.3,71 117.5,71.4 117.8,71.9 118,72.4 118.3,72.9 118.5,73.3 118.8,73.8 119,74.3 119.3,74.7 119.5,75.2 119.8,75.6 120,76.1 120.3,76.5 120.5,77 120.8,77.4 121,77.9 121.3,78.3 121.5,78.7 121.8,79.2 122,79.6 122.3,80 122.5,80.4 122.8,80.9 123,81.3 123.3,81.7 123.5,82.1 123.8,82.5 124,82.9 124.3,83.3 124.5,83.7 124.8,84.1 125,84.5 125.3,84.9 125.5,85.2 125.8,85.6 126,86 126.3,86.4 126.5,86.7 126.8,87.1 127,87.5 127.3,87.8 127.5,88.2 127.8,88.5 128,88.9 128.3,89.2 128.5,89.6 128.8,89.9 129,90.3 129.3,90.6 129.5,90.9 129.8,91.3 130,91.6 130.3,91.9 130.5,92.2 130.8,92.6 131,92.9 131.3,93.2 131.5,93.5 131.8,93.8 132,94.1 132.3,94.4 132.5,94.7 132.8,95 133,95.3 133.3,95.6 133.5,95.8 133.8,96.1 134,96.4 134.3,96.7 134.5,96.9 134.8,97.2 135,97.5 135.3,97.7 135.5,98 135.8,98.2 136,98.5 136.3,98.7 136.5,99 136.8,99.2 137,99.5 137.3,99.7 137.5,99.9 137.8,100.2 138,100.4 138.3,100.6 138.5,100.8 138.8,101.1 139,101.3 139.3,101.5 139.5,101.7 139.8,101.9 140,102.1 140.3,102.3 140.5,102.5 140.8,102.7 141,102.9 141.3,103.1 141.5,103.2 141.8,103.4 142,103.6 142.3,103.8 142.5,103.9 142.8,104.1 143,104.3 143.3,104.4 143.5,104.6 143.8,104.7 144,104.9 144.3,105 144.5,105.2 144.8,105.3 145,105.5 145.3,105.6 145.5,105.7 145.8,105.9 146,106 146.3,106.1 146.5,106.2 146.8,106.4 147,106.5 147.3,106.6 147.5,106.7 147.8,106.8 148,106.9 148.3,107 148.5,107.1 148.8,107.2 149,107.3 149.3,107.4 149.5,107.4 149.8,107.5 150,107.6 150.3,107.7 150.5,107.7 150.8,107.8 151,107.9 151.3,107.9 151.5,108 151.8,108 152,108.1 152.3,108.1 152.5,108.2 152.8,108.2 153,108.3 153.3,108.3 153.5,108.3 153.8,108.4 154,108.4 154.3,108.4 154.5,108.4 154.8,108.5 155,108.5 155.3,108.5 155.5,108.5 155.8,108.5 156,108.5 156.3,108.5 156.5,108.5 156.8,108.5 157,108.5 157.3,108.5 157.5,108.4 157.8,108.4 158,108.4 158.3,108.4 158.5,108.3 158.8,108.3 159,108.3 159.3,108.2 159.5,108.2 159.8,108.1 160,108.1 160.3,108 160.5,108 160.8,107.9 161,107.9 161.3,107.8 161.5,107.7 161.8,107.7 162,107.6 162.3,107.5 162.5,107.4 162.8,107.4 163,107.3 163.3,107.2 163.5,107.1 163.8,107 164,106.9 164.3,106.8 164.5,106.7 164.8,106.6 165,106.5 165.3,106.4 165.5,106.2 165.8,106.1 166,106 166.3,105.9 166.5,105.7 166.8,105.6 167,105.5 167.3,105.3 167.5,105.2 167.8,105 168,104.9 168.3,104.7 168.5,104.6 168.8,104.4 169,104.3 169.3,104.1 169.5,103.9 169.8,103.8 170,103.6 170.3,103.4 170.5,103.2 170.8,103.1 171,102.9 171.3,102.7 171.5,102.5 171.8,102.3 172,102.1 172.3,101.9 172.5,101.7 172.8,101.5 173,101.3 173.3,101.1 173.5,100.8 173.8,100.6 174,100.4 174.3,100.2 174.5,99.9 174.8,99.7 175,99.5 175.3,99.2 175.5,99 175.8,98.7 176,98.5 176.3,98.2 176.5,98 176.8,97.7 177,97.5 177.3,97.2 177.5,96.9 177.8,96.7 178,96.4 178.3,96.1 178.5,95.8 178.8,95.6 179,95.3 179.3,95 179.5,94.7 179.8,94.4 180,94.1 180.3,93.8 180.5,93.5 180.8,93.2 181,92.9 181.3,92.6 181.5,92.2 181.8,91.9 182,91.6 182.3,91.3 182.5,90.9 182.8,90.6 183,90.3 183.3,89.9 183.5,89.6 183.8,89.2 184,88.9 184.3,88.5 184.5,88.2 184.8,87.8 185,87.5 185.3,87.1 185.5,86.7 185.8,86.4 186,86 186.3,85.6 186.5,85.2 186.8,84.9 187,84.5 187.3,84.1 187.5,83.7 187.8,83.3 188,82.9 188.3,82.5 188.5,82.1 188.8,81.7 189,81.3 189.3,80.9 189.5,80.4 189.8,80 190,79.6 190.3,79.2 190.5,78.7 190.8,78.3 191,77.9 191.3,77.4 191.5,77 191.8,76.5 192,76.1 192.3,75.6 192.5,75.2 192.8,74.7 193,74.3 193.3,73.8 193.5,73.3 193.8,72.9 194,72.4 194.3,71.9 194.5,71.4 194.8,71 195,70.5 195.3,70 195.5,69.5 195.8,69 196,68.5 196.3,68 196.5,67.5 196.8,67 197,66.5 197.3,66 197.5,65.4 197.8,64.9 198,64.4 198.3,63.9 198.5,63.3 198.8,62.8 199,62.3 199.3,61.7 199.5,61.2 199.8,60.6 200,60.1 200.3,59.5 200.5,59 200.8,58.4 201,57.9 201.3,57.3 201.5,56.7 201.8,56.2 202,55.6 202.3,55 202.5,54.4 202.8,53.9 203,53.3 203.3,52.7 203.5,52.1 203.8,51.5 204,50.9 204.3,50.3 204.5,49.7 204.8,49.1 205,48.5 205.3,47.9 205.5,47.2 205.8,46.6 206,46 206.3,45.4 206.5,44.7 206.8,44.1 207,43.5 207.3,42.8 207.5,42.2 207.8,41.5 208,40.9 208.3,40.2 208.5,39.6 208.8,38.9 209,38.3 209.3,37.6 209.5,36.9 209.8,36.3 210,35.6 210.3,34.9 210.5,34.2 210.6,34.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="98.8,26.6 106.8,34.3 97.4,37.7" fill="currentColor"/>
  <polygon points="213.3,26.6 214.6,37.7 205.2,34.3" fill="currentColor"/>
  <line x1="106" y1="46" x2="166" y2="106" stroke="currentColor" stroke-width="1.4"/>
  <line x1="106" y1="106" x2="166" y2="106" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="106" y1="106" x2="106" y2="46" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <circle cx="106" cy="46" r="4" fill="currentColor"/>
  <circle cx="166" cy="106" r="4" fill="currentColor"/>
  <text x="98" y="42" font-size="13" fill="currentColor" text-anchor="end">(−1, 4)</text>
  <text x="175" y="110" font-size="13" fill="currentColor">(2, 1)</text>
  <text x="136" y="122" font-size="13" fill="currentColor" text-anchor="middle">Δt = 3</text>
  <text x="103" y="76" font-size="13" fill="currentColor" text-anchor="end">Δg(t) = −3</text>
</svg>
</div>

The horizontal change $\Delta t=3$ and the vertical change
$\Delta g(t)=-3$ are shown by the dashed segments. The output changes by $-3$
while the input changes by 3, giving an average rate of change of

$$\frac{1-4}{2-(-1)}=\frac{-3}{3}=-1$$

Note that the order we choose is very important. If, for example, we use
$\tfrac{y_2-y_1}{x_1-x_2}$, we will not get the correct answer. Decide which
point will be 1 and which point will be 2, and keep the coordinates fixed as
$(x_1,y_1)$ and $(x_2,y_2)$.

**Example.** After picking up a friend who lives 10 miles away, Anna records
her distance from home over time. The values are shown below. Find her
average speed over the first 6 hours.

| $t$ (hours) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $D(t)$ (miles) | 10 | 55 | 90 | 153 | 214 | 240 | 292 | 300 |

**Solution.** Here, the average speed is the average rate of change. She
traveled 282 miles in 6 hours, for an average speed of

$$
\begin{array}{lrcl}
& \tfrac{292-10}{6-0} &=& \tfrac{282}{6} \\[4pt]
& &=& 47
\end{array}
$$

The average speed is 47 miles per hour.

Because the speed is not constant, the average speed depends on the interval
chosen. For the interval $[2,3]$, the average speed is 63 miles per hour.

**Example.** Compute the average rate of change of $f(x)=x^2-\tfrac{1}{x}$ on
the interval $[2,4]$.

**Solution.** We can start by computing the function values at each
**endpoint** of the interval.

$$
\begin{array}{lrcl}
& f(2) &=& 2^2-\tfrac{1}{2} \\[4pt]
& &=& 4-\tfrac{1}{2} \\[4pt]
& &=& \tfrac{7}{2}
\end{array}
\qquad
\begin{array}{lrcl}
& f(4) &=& 4^2-\tfrac{1}{4} \\[4pt]
& &=& 16-\tfrac{1}{4} \\[4pt]
& &=& \tfrac{63}{4}
\end{array}
$$

Now we compute the average rate of change.

$$
\begin{array}{lrcl}
\text{Average rate of change} & &=& \tfrac{f(4)-f(2)}{4-2} \\[4pt]
& &=& \tfrac{\tfrac{63}{4}-\tfrac{7}{2}}{4-2} \\[4pt]
& &=& \tfrac{\tfrac{49}{4}}{2} \\[4pt]
& &=& \tfrac{49}{8}
\end{array}
$$

{{< fillin
  question="Find the average rate of change of $f(x)=x-2\sqrt{x}$ on the interval $[1,9]$."
  answer="\frac{1}{2}"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Evaluate $f$ at both endpoints first; $\sqrt{9}=3$."
>}}

**Example.** The **electrostatic force** $F$, measured in newtons, between
two charged particles can be related to the distance between the particles
$d$, in centimeters, by the formula $F(d)=\tfrac{2}{d^2}$. Find the average
rate of change of force if the distance between the particles is increased
from 2 cm to 6 cm.

**Solution.** We are computing the average rate of change of
$F(d)=\tfrac{2}{d^2}$ on the interval $[2,6]$.

$$
\begin{array}{lrcl}
\text{Average rate of change} & &=& \tfrac{F(6)-F(2)}{6-2} \\[4pt]
\text{Simplify.} & &=& \tfrac{\tfrac{2}{6^2}-\tfrac{2}{2^2}}{6-2} \\[4pt]
& &=& \tfrac{\tfrac{2}{36}-\tfrac{2}{4}}{4} \\[4pt]
\text{Combine numerator terms.} & &=& \tfrac{-\tfrac{16}{36}}{4} \\[4pt]
\text{Simplify.} & &=& -\tfrac{1}{9}
\end{array}
$$

The average rate of change is $-\tfrac{1}{9}$ newton per centimeter.

**Example.** Find the average rate of change of $g(t)=t^2+3t+1$ on the
interval $[0,a]$. The answer will be an expression involving $a$.

**Solution.** We use the average rate of change formula.

$$
\begin{array}{lrcl}
\text{Evaluate.} & \text{Average rate of change} &=& \tfrac{g(a)-g(0)}{a-0} \\[4pt]
\text{Simplify.} & &=& \tfrac{(a^2+3a+1)-(0^2+3(0)+1)}{a-0} \\[4pt]
\text{Simplify and factor.} & &=& \tfrac{a^2+3a+1-1}{a} \\[4pt]
\text{Divide by the common factor }a. & &=& \tfrac{a(a+3)}{a} \\[4pt]
& &=& a+3
\end{array}
$$

This result tells us the average rate of change in terms of $a$ between $t=0$
and any other point $t=a$. For example, on the interval $[0,5]$, the average
rate of change would be $5+3=8$.

{{< fillin
  question="Find the average rate of change of $f(x)=x^2+2x-8$ on the interval $[5,a]$."
  answer="a+7"
  answerDisplay="$a+7$"
  hint="Form $\tfrac{f(a)-f(5)}{a-5}$, then factor the numerator so the common factor $a-5$ divides out."
>}}

## Using a graph to determine where a function is increasing, decreasing, or constant

As part of exploring how functions change, we can identify intervals over
which the function is changing in specific ways. We say that a function is
increasing on an interval if the function values increase as the input values
increase within that interval. Similarly, a function is decreasing on an
interval if the function values decrease as the input values increase over
that interval. The average rate of change of an increasing function is
positive, and the average rate of change of a decreasing function is
negative. The graph below shows examples of increasing and decreasing
intervals on a function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals x cubed minus 12x. It rises steeply from the lower left, reaches a high point at (−2, 16), falls through the origin to a low point at (2, −16), then rises steeply to the upper right. The two rising stretches are labelled Increasing and the falling stretch is labelled Decreasing.","xMin":-5,"xMax":5,"yMin":-20,"yMax":20,"xUnit":26,"yUnit":7,"xGridStep":1,"yGridStep":4,"tickLabels":true,"xTickStep":1,"yTickStep":4,"cubics":[{"a":1,"b":0,"c":-12,"d":0}],"texts":[{"at":[-3.2,18],"text":"Increasing","anchor":"middle"},{"at":[1.9,9],"text":"Decreasing","anchor":"middle"},{"at":[3,-18],"text":"Increasing","anchor":"middle"}]}'>
<svg role="img" aria-label="The graph of f of x equals x cubed minus 12x. It rises steeply from the lower left, reaches a high point at (−2, 16), falls through the origin to a low point at (2, −16), then rises steeply to the upper right. The two rising stretches are labelled Increasing and the falling stretch is labelled Decreasing." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 332" width="312" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="306" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="306" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="306" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="306" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="306" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="306" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="306" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="306" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="306" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="286" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="286" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="286" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="222" x2="286" y2="222" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="286" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="286" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="286" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="82" x2="286" y2="82" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="54" x2="286" y2="54" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="166" x2="288" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="156" y1="24" x2="156" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,166 288,171 288,161" fill="currentColor"/>
  <polygon points="156,14 161,24 151,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="156,318 151,308 161,308" fill="currentColor"/>
  <text x="296" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="164" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="163" x2="26" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="181" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="52" y1="163" x2="52" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="181" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="78" y1="163" x2="78" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="181" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="104" y1="163" x2="104" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="181" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="130" y1="163" x2="130" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="181" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="182" y1="163" x2="182" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="181" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="208" y1="163" x2="208" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="181" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="234" y1="163" x2="234" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="181" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="260" y1="163" x2="260" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="181" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="286" y1="163" x2="286" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="181" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="153" y1="306" x2="159" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="310" font-size="11" fill="currentColor" text-anchor="end">−20</text>
  <line x1="153" y1="278" x2="159" y2="278" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="282" font-size="11" fill="currentColor" text-anchor="end">−16</text>
  <line x1="153" y1="250" x2="159" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="254" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="153" y1="222" x2="159" y2="222" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="226" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="153" y1="194" x2="159" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="198" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="153" y1="138" x2="159" y2="138" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="142" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="153" y1="110" x2="159" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="114" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="153" y1="82" x2="159" y2="82" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="86" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="153" y1="54" x2="159" y2="54" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="58" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="153" y1="26" x2="159" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="30" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <polyline points="50,297.6 50.3,295.3 50.5,292.8 50.8,290.3 51,287.8 51.2,285.3 51.5,282.9 51.7,280.4 52,278 52.3,275.6 52.5,273.2 52.8,270.8 53,268.4 53.3,266.1 53.5,263.7 53.8,261.4 54,259.1 54.3,256.8 54.5,254.5 54.8,252.3 55,250 55.3,247.8 55.5,245.6 55.8,243.4 56,241.2 56.3,239 56.5,236.9 56.8,234.7 57,232.6 57.3,230.5 57.5,228.4 57.8,226.3 58,224.2 58.3,222.2 58.5,220.1 58.8,218.1 59,216.1 59.3,214.1 59.5,212.1 59.8,210.2 60,208.2 60.3,206.3 60.5,204.3 60.8,202.4 61,200.5 61.3,198.7 61.5,196.8 61.8,194.9 62,193.1 62.3,191.3 62.5,189.5 62.8,187.7 63,185.9 63.3,184.1 63.5,182.4 63.8,180.6 64,178.9 64.3,177.2 64.5,175.5 64.8,173.8 65,172.1 65.3,170.5 65.5,168.8 65.8,167.2 66,165.6 66.3,164 66.5,162.4 66.8,160.8 67,159.2 67.3,157.7 67.5,156.1 67.8,154.6 68,153.1 68.3,151.6 68.5,150.1 68.8,148.6 69,147.2 69.3,145.7 69.5,144.3 69.8,142.9 70,141.5 70.3,140.1 70.5,138.7 70.8,137.3 71,136 71.3,134.6 71.5,133.3 71.8,132 72,130.7 72.3,129.4 72.5,128.1 72.8,126.8 73,125.6 73.3,124.3 73.5,123.1 73.8,121.9 74,120.7 74.3,119.5 74.5,118.3 74.8,117.1 75,116 75.3,114.8 75.5,113.7 75.8,112.6 76,111.5 76.3,110.4 76.5,109.3 76.8,108.2 77,107.1 77.3,106.1 77.5,105 77.8,104 78,103 78.3,102 78.5,101 78.8,100 79,99.1 79.3,98.1 79.5,97.2 79.8,96.2 80,95.3 80.3,94.4 80.5,93.5 80.8,92.6 81,91.7 81.3,90.8 81.5,90 81.8,89.1 82,88.3 82.3,87.5 82.5,86.7 82.8,85.9 83,85.1 83.3,84.3 83.5,83.5 83.8,82.8 84,82 84.3,81.3 84.5,80.6 84.8,79.9 85,79.2 85.3,78.5 85.5,77.8 85.8,77.1 86,76.5 86.3,75.8 86.5,75.2 86.8,74.5 87,73.9 87.3,73.3 87.5,72.7 87.8,72.1 88,71.5 88.3,71 88.5,70.4 88.8,69.9 89,69.3 89.3,68.8 89.5,68.3 89.8,67.8 90,67.3 90.3,66.8 90.5,66.3 90.8,65.8 91,65.4 91.3,64.9 91.5,64.5 91.8,64.1 92,63.6 92.3,63.2 92.5,62.8 92.8,62.4 93,62 93.3,61.7 93.5,61.3 93.8,61 94,60.6 94.3,60.3 94.5,59.9 94.8,59.6 95,59.3 95.3,59 95.5,58.7 95.8,58.5 96,58.2 96.3,57.9 96.5,57.7 96.8,57.4 97,57.2 97.3,57 97.5,56.7 97.8,56.5 98,56.3 98.3,56.1 98.5,55.9 98.8,55.8 99,55.6 99.3,55.4 99.5,55.3 99.8,55.2 100,55 100.3,54.9 100.5,54.8 100.8,54.7 101,54.6 101.3,54.5 101.5,54.4 101.8,54.3 102,54.3 102.3,54.2 102.5,54.1 102.8,54.1 103,54.1 103.3,54 103.5,54 103.8,54 104,54 104.3,54 104.5,54 104.8,54 105,54.1 105.3,54.1 105.5,54.1 105.8,54.2 106,54.2 106.3,54.3 106.5,54.4 106.8,54.5 107,54.5 107.3,54.6 107.5,54.7 107.8,54.9 108,55 108.3,55.1 108.5,55.2 108.8,55.4 109,55.5 109.3,55.7 109.5,55.8 109.8,56 110,56.2 110.3,56.3 110.5,56.5 110.8,56.7 111,56.9 111.3,57.1 111.5,57.3 111.8,57.5 112,57.8 112.3,58 112.5,58.2 112.8,58.5 113,58.7 113.3,59 113.5,59.3 113.8,59.5 114,59.8 114.3,60.1 114.5,60.4 114.8,60.7 115,61 115.3,61.3 115.5,61.6 115.8,61.9 116,62.3 116.3,62.6 116.5,62.9 116.8,63.3 117,63.6 117.3,64 117.5,64.3 117.8,64.7 118,65.1 118.3,65.5 118.5,65.8 118.8,66.2 119,66.6 119.3,67 119.5,67.4 119.8,67.9 120,68.3 120.3,68.7 120.5,69.1 120.8,69.6 121,70 121.3,70.4 121.5,70.9 121.8,71.3 122,71.8 122.3,72.3 122.5,72.7 122.8,73.2 123,73.7 123.3,74.2 123.5,74.7 123.8,75.2 124,75.7 124.3,76.2 124.5,76.7 124.8,77.2 125,77.7 125.3,78.2 125.5,78.8 125.8,79.3 126,79.8 126.3,80.4 126.5,80.9 126.8,81.5 127,82 127.3,82.6 127.5,83.1 127.8,83.7 128,84.3 128.3,84.9 128.5,85.4 128.8,86 129,86.6 129.3,87.2 129.5,87.8 129.8,88.4 130,89 130.3,89.6 130.5,90.2 130.8,90.8 131,91.5 131.3,92.1 131.5,92.7 131.8,93.3 132,94 132.3,94.6 132.5,95.2 132.8,95.9 133,96.5 133.3,97.2 133.5,97.8 133.8,98.5 134,99.2 134.3,99.8 134.5,100.5 134.8,101.2 135,101.8 135.3,102.5 135.5,103.2 135.8,103.9 136,104.6 136.3,105.3 136.5,106 136.8,106.6 137,107.3 137.3,108 137.5,108.8 137.8,109.5 138,110.2 138.3,110.9 138.5,111.6 138.8,112.3 139,113 139.3,113.8 139.5,114.5 139.8,115.2 140,115.9 140.3,116.7 140.5,117.4 140.8,118.1 141,118.9 141.3,119.6 141.5,120.4 141.8,121.1 142,121.9 142.3,122.6 142.5,123.4 142.8,124.1 143,124.9 143.3,125.6 143.5,126.4 143.8,127.2 144,127.9 144.3,128.7 144.5,129.5 144.8,130.2 145,131 145.3,131.8 145.5,132.5 145.8,133.3 146,134.1 146.3,134.9 146.5,135.6 146.8,136.4 147,137.2 147.3,138 147.5,138.8 147.8,139.6 148,140.4 148.3,141.1 148.5,141.9 148.8,142.7 149,143.5 149.3,144.3 149.5,145.1 149.8,145.9 150,146.7 150.3,147.5 150.5,148.3 150.8,149.1 151,149.9 151.3,150.7 151.5,151.5 151.8,152.3 152,153.1 152.3,153.9 152.5,154.7 152.8,155.5 153,156.3 153.3,157.1 153.5,157.9 153.8,158.7 154,159.5 154.3,160.3 154.5,161.2 154.8,162 155,162.8 155.3,163.6 155.5,164.4 155.8,165.2 156,166 156.3,166.8 156.5,167.6 156.8,168.4 157,169.2 157.3,170 157.5,170.8 157.8,171.7 158,172.5 158.3,173.3 158.5,174.1 158.8,174.9 159,175.7 159.3,176.5 159.5,177.3 159.8,178.1 160,178.9 160.3,179.7 160.5,180.5 160.8,181.3 161,182.1 161.3,182.9 161.5,183.7 161.8,184.5 162,185.3 162.3,186.1 162.5,186.9 162.8,187.7 163,188.5 163.3,189.3 163.5,190.1 163.8,190.9 164,191.6 164.3,192.4 164.5,193.2 164.8,194 165,194.8 165.3,195.6 165.5,196.4 165.8,197.1 166,197.9 166.3,198.7 166.5,199.5 166.8,200.2 167,201 167.3,201.8 167.5,202.5 167.8,203.3 168,204.1 168.3,204.8 168.5,205.6 168.8,206.4 169,207.1 169.3,207.9 169.5,208.6 169.8,209.4 170,210.1 170.3,210.9 170.5,211.6 170.8,212.4 171,213.1 171.3,213.9 171.5,214.6 171.8,215.3 172,216.1 172.3,216.8 172.5,217.5 172.8,218.2 173,219 173.3,219.7 173.5,220.4 173.8,221.1 174,221.8 174.3,222.5 174.5,223.2 174.8,224 175,224.7 175.3,225.4 175.5,226 175.8,226.7 176,227.4 176.3,228.1 176.5,228.8 176.8,229.5 177,230.2 177.3,230.8 177.5,231.5 177.8,232.2 178,232.8 178.3,233.5 178.5,234.2 178.8,234.8 179,235.5 179.3,236.1 179.5,236.8 179.8,237.4 180,238 180.3,238.7 180.5,239.3 180.8,239.9 181,240.5 181.3,241.2 181.5,241.8 181.8,242.4 182,243 182.3,243.6 182.5,244.2 182.8,244.8 183,245.4 183.3,246 183.5,246.6 183.8,247.1 184,247.7 184.3,248.3 184.5,248.9 184.8,249.4 185,250 185.3,250.5 185.5,251.1 185.8,251.6 186,252.2 186.3,252.7 186.5,253.2 186.8,253.8 187,254.3 187.3,254.8 187.5,255.3 187.8,255.8 188,256.3 188.3,256.8 188.5,257.3 188.8,257.8 189,258.3 189.3,258.8 189.5,259.3 189.8,259.7 190,260.2 190.3,260.7 190.5,261.1 190.8,261.6 191,262 191.3,262.4 191.5,262.9 191.8,263.3 192,263.7 192.3,264.1 192.5,264.6 192.8,265 193,265.4 193.3,265.8 193.5,266.2 193.8,266.5 194,266.9 194.3,267.3 194.5,267.7 194.8,268 195,268.4 195.3,268.7 195.5,269.1 195.8,269.4 196,269.7 196.3,270.1 196.5,270.4 196.8,270.7 197,271 197.3,271.3 197.5,271.6 197.8,271.9 198,272.2 198.3,272.5 198.5,272.7 198.8,273 199,273.3 199.3,273.5 199.5,273.8 199.8,274 200,274.2 200.3,274.5 200.5,274.7 200.8,274.9 201,275.1 201.3,275.3 201.5,275.5 201.8,275.7 202,275.8 202.3,276 202.5,276.2 202.8,276.3 203,276.5 203.3,276.6 203.5,276.8 203.8,276.9 204,277 204.3,277.1 204.5,277.3 204.8,277.4 205,277.5 205.3,277.5 205.5,277.6 205.8,277.7 206,277.8 206.3,277.8 206.5,277.9 206.8,277.9 207,277.9 207.3,278 207.5,278 207.8,278 208,278 208.3,278 208.5,278 208.8,278 209,277.9 209.3,277.9 209.5,277.9 209.8,277.8 210,277.7 210.3,277.7 210.5,277.6 210.8,277.5 211,277.4 211.3,277.3 211.5,277.2 211.8,277.1 212,277 212.3,276.8 212.5,276.7 212.8,276.6 213,276.4 213.3,276.2 213.5,276.1 213.8,275.9 214,275.7 214.3,275.5 214.5,275.3 214.8,275 215,274.8 215.3,274.6 215.5,274.3 215.8,274.1 216,273.8 216.3,273.5 216.5,273.3 216.8,273 217,272.7 217.3,272.4 217.5,272.1 217.8,271.7 218,271.4 218.3,271 218.5,270.7 218.8,270.3 219,270 219.3,269.6 219.5,269.2 219.8,268.8 220,268.4 220.3,267.9 220.5,267.5 220.8,267.1 221,266.6 221.3,266.2 221.5,265.7 221.8,265.2 222,264.7 222.3,264.2 222.5,263.7 222.8,263.2 223,262.7 223.3,262.1 223.5,261.6 223.8,261 224,260.5 224.3,259.9 224.5,259.3 224.8,258.7 225,258.1 225.3,257.5 225.5,256.8 225.8,256.2 226,255.5 226.3,254.9 226.5,254.2 226.8,253.5 227,252.8 227.3,252.1 227.5,251.4 227.8,250.7 228,250 228.3,249.2 228.5,248.5 228.8,247.7 229,246.9 229.3,246.1 229.5,245.3 229.8,244.5 230,243.7 230.3,242.9 230.5,242 230.8,241.2 231,240.3 231.3,239.4 231.5,238.5 231.8,237.6 232,236.7 232.3,235.8 232.5,234.8 232.8,233.9 233,232.9 233.3,232 233.5,231 233.8,230 234,229 234.3,228 234.5,227 234.8,225.9 235,224.9 235.3,223.8 235.5,222.7 235.8,221.6 236,220.5 236.3,219.4 236.5,218.3 236.7,217.2 237,216 237.3,214.9 237.5,213.7 237.8,212.5 238,211.3 238.3,210.1 238.5,208.9 238.8,207.7 239,206.4 239.3,205.2 239.5,203.9 239.8,202.6 240,201.3 240.3,200 240.5,198.7 240.8,197.4 241,196 241.3,194.7 241.5,193.3 241.8,191.9 242,190.5 242.3,189.1 242.5,187.7 242.8,186.3 243,184.8 243.2,183.4 243.5,181.9 243.8,180.4 244,178.9 244.3,177.4 244.5,175.9 244.8,174.3 245,172.8 245.3,171.2 245.5,169.6 245.8,168 246,166.4 246.3,164.8 246.5,163.2 246.8,161.5 247,159.9 247.3,158.2 247.5,156.5 247.8,154.8 248,153.1 248.3,151.4 248.5,149.6 248.8,147.9 249,146.1 249.3,144.3 249.5,142.5 249.7,140.7 250,138.9 250.3,137.1 250.5,135.2 250.8,133.3 251,131.5 251.3,129.6 251.5,127.7 251.8,125.7 252,123.8 252.3,121.8 252.5,119.9 252.8,117.9 253,115.9 253.3,113.9 253.5,111.9 253.8,109.8 254,107.8 254.3,105.7 254.5,103.6 254.8,101.5 255,99.4 255.3,97.3 255.5,95.1 255.8,93 256,90.8 256.3,88.6 256.5,86.4 256.8,84.2 257,82 257.3,79.7 257.5,77.5 257.8,75.2 258,72.9 258.3,70.6 258.5,68.3 258.8,65.9 259,63.6 259.3,61.2 259.5,58.8 259.8,56.4 260,54 260.3,51.6 260.5,49.1 260.8,46.7 261,44.2 261.3,41.7 261.5,39.2 261.8,36.7 262,34.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="49.3,305.6 45.2,295.2 55.2,296.1" fill="currentColor"/>
  <polygon points="262.8,26.4 266.8,36.8 256.8,35.9" fill="currentColor"/>
  <text x="72.8" y="40" font-size="13" fill="currentColor" text-anchor="middle">Increasing</text>
  <text x="205.4" y="103" font-size="13" fill="currentColor" text-anchor="middle">Decreasing</text>
  <text x="234" y="292" font-size="13" fill="currentColor" text-anchor="middle">Increasing</text>
</svg>
</div>

The function $f(x)=x^3-12x$ is increasing on $(-\infty,-2)\cup(2,\infty)$ and
is decreasing on $(-2,2)$.

While some functions are increasing (or decreasing) over their entire domain,
many others are not. A value of the input where a function changes from
increasing to decreasing (as we go from left to right, that is, as the input
variable increases) is the location of a **local maximum**. The function
value at that point is the local maximum. If a function has more than one, we
say it has local maxima. Similarly, a value of the input where a function
changes from decreasing to increasing as the input variable increases is the
location of a **local minimum**. The function value at that point is the
local minimum. The plural form is "local minima." Together, local maxima and
minima are called **local extrema**, or local extreme values, of the
function. (The singular form is "extremum.") Often, the term *local* is
replaced by the term *relative*. In this text, we will use the term *local*.

Clearly, a function is neither increasing nor decreasing on an interval where
it is constant. A function is also neither increasing nor decreasing at
extrema. Note that we have to speak of *local* extrema, because any given
local extremum as defined here is not necessarily the highest maximum or
lowest minimum in the function's entire domain.

For the function whose graph is shown below, the local maximum is 16, and it
occurs at $x=-2$. The local minimum is $-16$ and it occurs at $x=2$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals x cubed minus 12x with its local extrema marked: a solid point at (−2, 16), the local maximum, and a solid point at (2, −16), the local minimum.","xMin":-5,"xMax":5,"yMin":-20,"yMax":20,"xUnit":26,"yUnit":7,"xGridStep":1,"yGridStep":4,"tickLabels":true,"xTickStep":1,"yTickStep":4,"cubics":[{"a":1,"b":0,"c":-12,"d":0}],"points":[{"at":[-2,16],"label":"(−2, 16)","labelSide":"nw"},{"at":[2,-16],"label":"(2, −16)","labelSide":"se"}]}'>
<svg role="img" aria-label="The graph of f of x equals x cubed minus 12x with its local extrema marked: a solid point at (−2, 16), the local maximum, and a solid point at (2, −16), the local minimum." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 332" width="312" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="306" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="306" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="306" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="306" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="306" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="306" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="306" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="306" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="306" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="286" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="286" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="286" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="222" x2="286" y2="222" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="286" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="286" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="286" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="82" x2="286" y2="82" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="54" x2="286" y2="54" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="166" x2="288" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="156" y1="24" x2="156" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,166 288,171 288,161" fill="currentColor"/>
  <polygon points="156,14 161,24 151,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="156,318 151,308 161,308" fill="currentColor"/>
  <text x="296" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="164" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="163" x2="26" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="181" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="52" y1="163" x2="52" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="181" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="78" y1="163" x2="78" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="181" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="104" y1="163" x2="104" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="181" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="130" y1="163" x2="130" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="181" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="182" y1="163" x2="182" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="181" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="208" y1="163" x2="208" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="181" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="234" y1="163" x2="234" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="181" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="260" y1="163" x2="260" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="181" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="286" y1="163" x2="286" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="181" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="153" y1="306" x2="159" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="310" font-size="11" fill="currentColor" text-anchor="end">−20</text>
  <line x1="153" y1="278" x2="159" y2="278" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="282" font-size="11" fill="currentColor" text-anchor="end">−16</text>
  <line x1="153" y1="250" x2="159" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="254" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="153" y1="222" x2="159" y2="222" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="226" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="153" y1="194" x2="159" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="198" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="153" y1="138" x2="159" y2="138" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="142" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="153" y1="110" x2="159" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="114" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="153" y1="82" x2="159" y2="82" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="86" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="153" y1="54" x2="159" y2="54" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="58" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="153" y1="26" x2="159" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="30" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <polyline points="50,297.6 50.3,295.3 50.5,292.8 50.8,290.3 51,287.8 51.2,285.3 51.5,282.9 51.7,280.4 52,278 52.3,275.6 52.5,273.2 52.8,270.8 53,268.4 53.3,266.1 53.5,263.7 53.8,261.4 54,259.1 54.3,256.8 54.5,254.5 54.8,252.3 55,250 55.3,247.8 55.5,245.6 55.8,243.4 56,241.2 56.3,239 56.5,236.9 56.8,234.7 57,232.6 57.3,230.5 57.5,228.4 57.8,226.3 58,224.2 58.3,222.2 58.5,220.1 58.8,218.1 59,216.1 59.3,214.1 59.5,212.1 59.8,210.2 60,208.2 60.3,206.3 60.5,204.3 60.8,202.4 61,200.5 61.3,198.7 61.5,196.8 61.8,194.9 62,193.1 62.3,191.3 62.5,189.5 62.8,187.7 63,185.9 63.3,184.1 63.5,182.4 63.8,180.6 64,178.9 64.3,177.2 64.5,175.5 64.8,173.8 65,172.1 65.3,170.5 65.5,168.8 65.8,167.2 66,165.6 66.3,164 66.5,162.4 66.8,160.8 67,159.2 67.3,157.7 67.5,156.1 67.8,154.6 68,153.1 68.3,151.6 68.5,150.1 68.8,148.6 69,147.2 69.3,145.7 69.5,144.3 69.8,142.9 70,141.5 70.3,140.1 70.5,138.7 70.8,137.3 71,136 71.3,134.6 71.5,133.3 71.8,132 72,130.7 72.3,129.4 72.5,128.1 72.8,126.8 73,125.6 73.3,124.3 73.5,123.1 73.8,121.9 74,120.7 74.3,119.5 74.5,118.3 74.8,117.1 75,116 75.3,114.8 75.5,113.7 75.8,112.6 76,111.5 76.3,110.4 76.5,109.3 76.8,108.2 77,107.1 77.3,106.1 77.5,105 77.8,104 78,103 78.3,102 78.5,101 78.8,100 79,99.1 79.3,98.1 79.5,97.2 79.8,96.2 80,95.3 80.3,94.4 80.5,93.5 80.8,92.6 81,91.7 81.3,90.8 81.5,90 81.8,89.1 82,88.3 82.3,87.5 82.5,86.7 82.8,85.9 83,85.1 83.3,84.3 83.5,83.5 83.8,82.8 84,82 84.3,81.3 84.5,80.6 84.8,79.9 85,79.2 85.3,78.5 85.5,77.8 85.8,77.1 86,76.5 86.3,75.8 86.5,75.2 86.8,74.5 87,73.9 87.3,73.3 87.5,72.7 87.8,72.1 88,71.5 88.3,71 88.5,70.4 88.8,69.9 89,69.3 89.3,68.8 89.5,68.3 89.8,67.8 90,67.3 90.3,66.8 90.5,66.3 90.8,65.8 91,65.4 91.3,64.9 91.5,64.5 91.8,64.1 92,63.6 92.3,63.2 92.5,62.8 92.8,62.4 93,62 93.3,61.7 93.5,61.3 93.8,61 94,60.6 94.3,60.3 94.5,59.9 94.8,59.6 95,59.3 95.3,59 95.5,58.7 95.8,58.5 96,58.2 96.3,57.9 96.5,57.7 96.8,57.4 97,57.2 97.3,57 97.5,56.7 97.8,56.5 98,56.3 98.3,56.1 98.5,55.9 98.8,55.8 99,55.6 99.3,55.4 99.5,55.3 99.8,55.2 100,55 100.3,54.9 100.5,54.8 100.8,54.7 101,54.6 101.3,54.5 101.5,54.4 101.8,54.3 102,54.3 102.3,54.2 102.5,54.1 102.8,54.1 103,54.1 103.3,54 103.5,54 103.8,54 104,54 104.3,54 104.5,54 104.8,54 105,54.1 105.3,54.1 105.5,54.1 105.8,54.2 106,54.2 106.3,54.3 106.5,54.4 106.8,54.5 107,54.5 107.3,54.6 107.5,54.7 107.8,54.9 108,55 108.3,55.1 108.5,55.2 108.8,55.4 109,55.5 109.3,55.7 109.5,55.8 109.8,56 110,56.2 110.3,56.3 110.5,56.5 110.8,56.7 111,56.9 111.3,57.1 111.5,57.3 111.8,57.5 112,57.8 112.3,58 112.5,58.2 112.8,58.5 113,58.7 113.3,59 113.5,59.3 113.8,59.5 114,59.8 114.3,60.1 114.5,60.4 114.8,60.7 115,61 115.3,61.3 115.5,61.6 115.8,61.9 116,62.3 116.3,62.6 116.5,62.9 116.8,63.3 117,63.6 117.3,64 117.5,64.3 117.8,64.7 118,65.1 118.3,65.5 118.5,65.8 118.8,66.2 119,66.6 119.3,67 119.5,67.4 119.8,67.9 120,68.3 120.3,68.7 120.5,69.1 120.8,69.6 121,70 121.3,70.4 121.5,70.9 121.8,71.3 122,71.8 122.3,72.3 122.5,72.7 122.8,73.2 123,73.7 123.3,74.2 123.5,74.7 123.8,75.2 124,75.7 124.3,76.2 124.5,76.7 124.8,77.2 125,77.7 125.3,78.2 125.5,78.8 125.8,79.3 126,79.8 126.3,80.4 126.5,80.9 126.8,81.5 127,82 127.3,82.6 127.5,83.1 127.8,83.7 128,84.3 128.3,84.9 128.5,85.4 128.8,86 129,86.6 129.3,87.2 129.5,87.8 129.8,88.4 130,89 130.3,89.6 130.5,90.2 130.8,90.8 131,91.5 131.3,92.1 131.5,92.7 131.8,93.3 132,94 132.3,94.6 132.5,95.2 132.8,95.9 133,96.5 133.3,97.2 133.5,97.8 133.8,98.5 134,99.2 134.3,99.8 134.5,100.5 134.8,101.2 135,101.8 135.3,102.5 135.5,103.2 135.8,103.9 136,104.6 136.3,105.3 136.5,106 136.8,106.6 137,107.3 137.3,108 137.5,108.8 137.8,109.5 138,110.2 138.3,110.9 138.5,111.6 138.8,112.3 139,113 139.3,113.8 139.5,114.5 139.8,115.2 140,115.9 140.3,116.7 140.5,117.4 140.8,118.1 141,118.9 141.3,119.6 141.5,120.4 141.8,121.1 142,121.9 142.3,122.6 142.5,123.4 142.8,124.1 143,124.9 143.3,125.6 143.5,126.4 143.8,127.2 144,127.9 144.3,128.7 144.5,129.5 144.8,130.2 145,131 145.3,131.8 145.5,132.5 145.8,133.3 146,134.1 146.3,134.9 146.5,135.6 146.8,136.4 147,137.2 147.3,138 147.5,138.8 147.8,139.6 148,140.4 148.3,141.1 148.5,141.9 148.8,142.7 149,143.5 149.3,144.3 149.5,145.1 149.8,145.9 150,146.7 150.3,147.5 150.5,148.3 150.8,149.1 151,149.9 151.3,150.7 151.5,151.5 151.8,152.3 152,153.1 152.3,153.9 152.5,154.7 152.8,155.5 153,156.3 153.3,157.1 153.5,157.9 153.8,158.7 154,159.5 154.3,160.3 154.5,161.2 154.8,162 155,162.8 155.3,163.6 155.5,164.4 155.8,165.2 156,166 156.3,166.8 156.5,167.6 156.8,168.4 157,169.2 157.3,170 157.5,170.8 157.8,171.7 158,172.5 158.3,173.3 158.5,174.1 158.8,174.9 159,175.7 159.3,176.5 159.5,177.3 159.8,178.1 160,178.9 160.3,179.7 160.5,180.5 160.8,181.3 161,182.1 161.3,182.9 161.5,183.7 161.8,184.5 162,185.3 162.3,186.1 162.5,186.9 162.8,187.7 163,188.5 163.3,189.3 163.5,190.1 163.8,190.9 164,191.6 164.3,192.4 164.5,193.2 164.8,194 165,194.8 165.3,195.6 165.5,196.4 165.8,197.1 166,197.9 166.3,198.7 166.5,199.5 166.8,200.2 167,201 167.3,201.8 167.5,202.5 167.8,203.3 168,204.1 168.3,204.8 168.5,205.6 168.8,206.4 169,207.1 169.3,207.9 169.5,208.6 169.8,209.4 170,210.1 170.3,210.9 170.5,211.6 170.8,212.4 171,213.1 171.3,213.9 171.5,214.6 171.8,215.3 172,216.1 172.3,216.8 172.5,217.5 172.8,218.2 173,219 173.3,219.7 173.5,220.4 173.8,221.1 174,221.8 174.3,222.5 174.5,223.2 174.8,224 175,224.7 175.3,225.4 175.5,226 175.8,226.7 176,227.4 176.3,228.1 176.5,228.8 176.8,229.5 177,230.2 177.3,230.8 177.5,231.5 177.8,232.2 178,232.8 178.3,233.5 178.5,234.2 178.8,234.8 179,235.5 179.3,236.1 179.5,236.8 179.8,237.4 180,238 180.3,238.7 180.5,239.3 180.8,239.9 181,240.5 181.3,241.2 181.5,241.8 181.8,242.4 182,243 182.3,243.6 182.5,244.2 182.8,244.8 183,245.4 183.3,246 183.5,246.6 183.8,247.1 184,247.7 184.3,248.3 184.5,248.9 184.8,249.4 185,250 185.3,250.5 185.5,251.1 185.8,251.6 186,252.2 186.3,252.7 186.5,253.2 186.8,253.8 187,254.3 187.3,254.8 187.5,255.3 187.8,255.8 188,256.3 188.3,256.8 188.5,257.3 188.8,257.8 189,258.3 189.3,258.8 189.5,259.3 189.8,259.7 190,260.2 190.3,260.7 190.5,261.1 190.8,261.6 191,262 191.3,262.4 191.5,262.9 191.8,263.3 192,263.7 192.3,264.1 192.5,264.6 192.8,265 193,265.4 193.3,265.8 193.5,266.2 193.8,266.5 194,266.9 194.3,267.3 194.5,267.7 194.8,268 195,268.4 195.3,268.7 195.5,269.1 195.8,269.4 196,269.7 196.3,270.1 196.5,270.4 196.8,270.7 197,271 197.3,271.3 197.5,271.6 197.8,271.9 198,272.2 198.3,272.5 198.5,272.7 198.8,273 199,273.3 199.3,273.5 199.5,273.8 199.8,274 200,274.2 200.3,274.5 200.5,274.7 200.8,274.9 201,275.1 201.3,275.3 201.5,275.5 201.8,275.7 202,275.8 202.3,276 202.5,276.2 202.8,276.3 203,276.5 203.3,276.6 203.5,276.8 203.8,276.9 204,277 204.3,277.1 204.5,277.3 204.8,277.4 205,277.5 205.3,277.5 205.5,277.6 205.8,277.7 206,277.8 206.3,277.8 206.5,277.9 206.8,277.9 207,277.9 207.3,278 207.5,278 207.8,278 208,278 208.3,278 208.5,278 208.8,278 209,277.9 209.3,277.9 209.5,277.9 209.8,277.8 210,277.7 210.3,277.7 210.5,277.6 210.8,277.5 211,277.4 211.3,277.3 211.5,277.2 211.8,277.1 212,277 212.3,276.8 212.5,276.7 212.8,276.6 213,276.4 213.3,276.2 213.5,276.1 213.8,275.9 214,275.7 214.3,275.5 214.5,275.3 214.8,275 215,274.8 215.3,274.6 215.5,274.3 215.8,274.1 216,273.8 216.3,273.5 216.5,273.3 216.8,273 217,272.7 217.3,272.4 217.5,272.1 217.8,271.7 218,271.4 218.3,271 218.5,270.7 218.8,270.3 219,270 219.3,269.6 219.5,269.2 219.8,268.8 220,268.4 220.3,267.9 220.5,267.5 220.8,267.1 221,266.6 221.3,266.2 221.5,265.7 221.8,265.2 222,264.7 222.3,264.2 222.5,263.7 222.8,263.2 223,262.7 223.3,262.1 223.5,261.6 223.8,261 224,260.5 224.3,259.9 224.5,259.3 224.8,258.7 225,258.1 225.3,257.5 225.5,256.8 225.8,256.2 226,255.5 226.3,254.9 226.5,254.2 226.8,253.5 227,252.8 227.3,252.1 227.5,251.4 227.8,250.7 228,250 228.3,249.2 228.5,248.5 228.8,247.7 229,246.9 229.3,246.1 229.5,245.3 229.8,244.5 230,243.7 230.3,242.9 230.5,242 230.8,241.2 231,240.3 231.3,239.4 231.5,238.5 231.8,237.6 232,236.7 232.3,235.8 232.5,234.8 232.8,233.9 233,232.9 233.3,232 233.5,231 233.8,230 234,229 234.3,228 234.5,227 234.8,225.9 235,224.9 235.3,223.8 235.5,222.7 235.8,221.6 236,220.5 236.3,219.4 236.5,218.3 236.7,217.2 237,216 237.3,214.9 237.5,213.7 237.8,212.5 238,211.3 238.3,210.1 238.5,208.9 238.8,207.7 239,206.4 239.3,205.2 239.5,203.9 239.8,202.6 240,201.3 240.3,200 240.5,198.7 240.8,197.4 241,196 241.3,194.7 241.5,193.3 241.8,191.9 242,190.5 242.3,189.1 242.5,187.7 242.8,186.3 243,184.8 243.2,183.4 243.5,181.9 243.8,180.4 244,178.9 244.3,177.4 244.5,175.9 244.8,174.3 245,172.8 245.3,171.2 245.5,169.6 245.8,168 246,166.4 246.3,164.8 246.5,163.2 246.8,161.5 247,159.9 247.3,158.2 247.5,156.5 247.8,154.8 248,153.1 248.3,151.4 248.5,149.6 248.8,147.9 249,146.1 249.3,144.3 249.5,142.5 249.7,140.7 250,138.9 250.3,137.1 250.5,135.2 250.8,133.3 251,131.5 251.3,129.6 251.5,127.7 251.8,125.7 252,123.8 252.3,121.8 252.5,119.9 252.8,117.9 253,115.9 253.3,113.9 253.5,111.9 253.8,109.8 254,107.8 254.3,105.7 254.5,103.6 254.8,101.5 255,99.4 255.3,97.3 255.5,95.1 255.8,93 256,90.8 256.3,88.6 256.5,86.4 256.8,84.2 257,82 257.3,79.7 257.5,77.5 257.8,75.2 258,72.9 258.3,70.6 258.5,68.3 258.8,65.9 259,63.6 259.3,61.2 259.5,58.8 259.8,56.4 260,54 260.3,51.6 260.5,49.1 260.8,46.7 261,44.2 261.3,41.7 261.5,39.2 261.8,36.7 262,34.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="49.3,305.6 45.2,295.2 55.2,296.1" fill="currentColor"/>
  <polygon points="262.8,26.4 266.8,36.8 256.8,35.9" fill="currentColor"/>
  <circle cx="104" cy="54" r="4" fill="currentColor"/>
  <circle cx="208" cy="278" r="4" fill="currentColor"/>
  <text x="92.8" y="42.8" font-size="13" fill="currentColor" text-anchor="end">(−2, 16)</text>
  <text x="219.2" y="298.2" font-size="13" fill="currentColor" text-anchor="start">(2, −16)</text>
</svg>
</div>

To locate the local maxima and minima from a graph, we need to observe the
graph to determine where the graph attains its highest and lowest points,
respectively, within an open interval. Like the summit of a roller coaster,
the graph of a function is higher at a local maximum than at nearby points on
both sides. The graph will also be lower at a local minimum than at
neighboring points. The graph below illustrates these ideas for a local
maximum.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A downward-opening curve rising from a on the left to a peak at b and falling to c on the right. The peak is marked Local maximum, the height of the peak is marked f(b) on the vertical axis, the rising stretch is labelled Increasing function and the falling stretch Decreasing function.","xMin":0,"xMax":8,"yMin":0,"yMax":6,"xUnit":34,"yUnit":30,"grid":false,"quadratics":[{"a":-0.45,"b":3.6,"c":-2.2,"from":0.7,"to":7.3,"arrows":false}],"guides":[[4,5]],"points":[{"at":[4,5]}],"texts":[{"at":[1,-0.15],"text":"a","anchor":"middle","dy":16,"italic":true},{"at":[4,-0.15],"text":"b","anchor":"middle","dy":16,"italic":true},{"at":[7,-0.15],"text":"c","anchor":"middle","dy":16,"italic":true},{"at":[0,5],"text":"f(b)","anchor":"end","dx":-6,"dy":4,"italic":true},{"at":[4.3,5.6],"text":"Local maximum","dx":6},{"at":[2.4,1.9],"text":"Increasing","anchor":"middle"},{"at":[2.4,1.4],"text":"function","anchor":"middle"},{"at":[5.6,1.9],"text":"Decreasing","anchor":"middle"},{"at":[5.6,1.4],"text":"function","anchor":"middle"}]}'>
<svg role="img" aria-label="A downward-opening curve rising from a on the left to a peak at b and falling to c on the right. The peak is marked Local maximum, the height of the peak is marked f(b) on the vertical axis, the rising stretch is labelled Increasing function and the falling stretch Decreasing function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 232" width="324" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="300" y2="206" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="206" stroke="currentColor" stroke-width="1"/>
  <polygon points="310,206 300,211 300,201" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="308" y="198" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="162" y1="206" x2="162" y2="56" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="26" y1="56" x2="162" y2="56" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <polyline points="49.8,203 50,202.4 50.3,201.7 50.5,201.1 50.8,200.4 51,199.8 51.3,199.1 51.5,198.5 51.8,197.8 52,197.2 52.3,196.5 52.5,195.9 52.8,195.3 53,194.6 53.3,194 53.5,193.4 53.8,192.7 54,192.1 54.3,191.5 54.5,190.8 54.8,190.2 55,189.6 55.3,189 55.5,188.3 55.8,187.7 56,187.1 56.3,186.5 56.5,185.9 56.8,185.3 57,184.6 57.3,184 57.5,183.4 57.8,182.8 58,182.2 58.3,181.6 58.5,181 58.8,180.4 59,179.8 59.3,179.2 59.5,178.6 59.8,178 60,177.4 60.3,176.8 60.5,176.2 60.8,175.6 61,175 61.3,174.4 61.5,173.8 61.8,173.3 62,172.7 62.3,172.1 62.5,171.5 62.8,170.9 63,170.4 63.3,169.8 63.5,169.2 63.8,168.6 64,168.1 64.3,167.5 64.5,166.9 64.8,166.3 65,165.8 65.3,165.2 65.5,164.7 65.8,164.1 66,163.5 66.3,163 66.5,162.4 66.8,161.9 67,161.3 67.3,160.7 67.5,160.2 67.8,159.6 68,159.1 68.3,158.5 68.5,158 68.8,157.5 69,156.9 69.3,156.4 69.5,155.8 69.8,155.3 70,154.8 70.3,154.2 70.5,153.7 70.8,153.2 71,152.6 71.3,152.1 71.5,151.6 71.8,151 72,150.5 72.3,150 72.5,149.5 72.8,148.9 73,148.4 73.3,147.9 73.5,147.4 73.8,146.9 74,146.4 74.3,145.8 74.5,145.3 74.8,144.8 75,144.3 75.3,143.8 75.5,143.3 75.8,142.8 76,142.3 76.3,141.8 76.5,141.3 76.8,140.8 77,140.3 77.3,139.8 77.5,139.3 77.8,138.8 78,138.3 78.3,137.8 78.5,137.4 78.8,136.9 79,136.4 79.3,135.9 79.5,135.4 79.8,134.9 80,134.5 80.3,134 80.5,133.5 80.8,133 81,132.6 81.3,132.1 81.5,131.6 81.8,131.1 82,130.7 82.3,130.2 82.5,129.7 82.8,129.3 83,128.8 83.3,128.4 83.5,127.9 83.8,127.4 84,127 84.3,126.5 84.5,126.1 84.8,125.6 85,125.2 85.3,124.7 85.5,124.3 85.8,123.8 86,123.4 86.3,123 86.5,122.5 86.8,122.1 87,121.6 87.3,121.2 87.5,120.8 87.8,120.3 88,119.9 88.3,119.5 88.5,119 88.8,118.6 89,118.2 89.3,117.8 89.5,117.3 89.8,116.9 90,116.5 90.3,116.1 90.5,115.6 90.8,115.2 91,114.8 91.3,114.4 91.5,114 91.8,113.6 92,113.2 92.3,112.8 92.5,112.4 92.8,112 93,111.6 93.3,111.1 93.5,110.7 93.8,110.3 94,110 94.3,109.6 94.5,109.2 94.8,108.8 95,108.4 95.3,108 95.5,107.6 95.8,107.2 96,106.8 96.3,106.4 96.5,106.1 96.8,105.7 97,105.3 97.3,104.9 97.5,104.5 97.8,104.2 98,103.8 98.3,103.4 98.5,103 98.8,102.7 99,102.3 99.3,101.9 99.5,101.6 99.8,101.2 100,100.9 100.3,100.5 100.5,100.1 100.8,99.8 101,99.4 101.3,99.1 101.5,98.7 101.8,98.4 102,98 102.3,97.7 102.5,97.3 102.8,97 103,96.6 103.3,96.3 103.5,95.9 103.8,95.6 104,95.3 104.3,94.9 104.5,94.6 104.8,94.2 105,93.9 105.3,93.6 105.5,93.2 105.8,92.9 106,92.6 106.3,92.3 106.5,91.9 106.8,91.6 107,91.3 107.3,91 107.5,90.7 107.8,90.3 108,90 108.3,89.7 108.5,89.4 108.8,89.1 109,88.8 109.3,88.5 109.5,88.2 109.8,87.9 110,87.5 110.3,87.2 110.5,86.9 110.8,86.6 111,86.3 111.3,86.1 111.5,85.8 111.8,85.5 112,85.2 112.3,84.9 112.5,84.6 112.8,84.3 113,84 113.3,83.7 113.5,83.4 113.8,83.2 114,82.9 114.3,82.6 114.5,82.3 114.8,82 115,81.8 115.3,81.5 115.5,81.2 115.8,81 116,80.7 116.3,80.4 116.5,80.2 116.8,79.9 117,79.6 117.3,79.4 117.5,79.1 117.8,78.8 118,78.6 118.3,78.3 118.5,78.1 118.8,77.8 119,77.6 119.3,77.3 119.5,77.1 119.8,76.8 120,76.6 120.3,76.3 120.5,76.1 120.8,75.9 121,75.6 121.3,75.4 121.5,75.1 121.8,74.9 122,74.7 122.3,74.4 122.5,74.2 122.8,74 123,73.7 123.3,73.5 123.5,73.3 123.8,73.1 124,72.8 124.3,72.6 124.5,72.4 124.8,72.2 125,72 125.3,71.8 125.5,71.5 125.8,71.3 126,71.1 126.3,70.9 126.5,70.7 126.8,70.5 127,70.3 127.3,70.1 127.5,69.9 127.8,69.7 128,69.5 128.3,69.3 128.5,69.1 128.8,68.9 129,68.7 129.3,68.5 129.5,68.3 129.8,68.1 130,67.9 130.3,67.8 130.5,67.6 130.8,67.4 131,67.2 131.3,67 131.5,66.9 131.8,66.7 132,66.5 132.3,66.3 132.5,66.2 132.8,66 133,65.8 133.3,65.6 133.5,65.5 133.8,65.3 134,65.1 134.3,65 134.5,64.8 134.8,64.7 135,64.5 135.3,64.3 135.5,64.2 135.8,64 136,63.9 136.3,63.7 136.5,63.6 136.8,63.4 137,63.3 137.3,63.1 137.5,63 137.8,62.9 138,62.7 138.3,62.6 138.5,62.4 138.8,62.3 139,62.2 139.3,62 139.5,61.9 139.8,61.8 140,61.6 140.3,61.5 140.5,61.4 140.8,61.3 141,61.1 141.3,61 141.5,60.9 141.8,60.8 142,60.7 142.3,60.6 142.5,60.4 142.8,60.3 143,60.2 143.3,60.1 143.5,60 143.8,59.9 144,59.8 144.3,59.7 144.5,59.6 144.8,59.5 145,59.4 145.3,59.3 145.5,59.2 145.8,59.1 146,59 146.3,58.9 146.5,58.8 146.8,58.7 147,58.6 147.3,58.5 147.5,58.5 147.8,58.4 148,58.3 148.3,58.2 148.5,58.1 148.8,58 149,58 149.3,57.9 149.5,57.8 149.8,57.8 150,57.7 150.3,57.6 150.5,57.5 150.8,57.5 151,57.4 151.3,57.3 151.5,57.3 151.8,57.2 152,57.2 152.3,57.1 152.5,57.1 152.8,57 153,56.9 153.3,56.9 153.5,56.8 153.8,56.8 154,56.7 154.3,56.7 154.5,56.7 154.8,56.6 155,56.6 155.3,56.5 155.5,56.5 155.8,56.5 156,56.4 156.3,56.4 156.5,56.4 156.8,56.3 157,56.3 157.3,56.3 157.5,56.2 157.8,56.2 158,56.2 158.3,56.2 158.5,56.1 158.8,56.1 159,56.1 159.3,56.1 159.5,56.1 159.8,56.1 160,56 160.3,56 160.5,56 160.8,56 161,56 161.3,56 161.5,56 161.8,56 162,56 162.2,56 162.5,56 162.7,56 163,56 163.2,56 163.5,56 163.7,56 164,56 164.2,56.1 164.5,56.1 164.7,56.1 165,56.1 165.2,56.1 165.5,56.1 165.7,56.2 166,56.2 166.2,56.2 166.5,56.2 166.7,56.3 167,56.3 167.2,56.3 167.5,56.4 167.7,56.4 168,56.4 168.2,56.5 168.5,56.5 168.7,56.5 169,56.6 169.2,56.6 169.5,56.7 169.7,56.7 170,56.7 170.2,56.8 170.5,56.8 170.7,56.9 171,56.9 171.2,57 171.5,57.1 171.7,57.1 172,57.2 172.2,57.2 172.5,57.3 172.7,57.3 173,57.4 173.2,57.5 173.5,57.5 173.7,57.6 174,57.7 174.2,57.8 174.5,57.8 174.7,57.9 175,58 175.2,58 175.5,58.1 175.7,58.2 176,58.3 176.2,58.4 176.5,58.5 176.7,58.5 177,58.6 177.2,58.7 177.5,58.8 177.7,58.9 178,59 178.2,59.1 178.5,59.2 178.7,59.3 179,59.4 179.2,59.5 179.5,59.6 179.7,59.7 180,59.8 180.2,59.9 180.5,60 180.7,60.1 181,60.2 181.2,60.3 181.5,60.4 181.7,60.6 182,60.7 182.2,60.8 182.5,60.9 182.7,61 183,61.1 183.2,61.3 183.5,61.4 183.7,61.5 184,61.6 184.2,61.8 184.5,61.9 184.7,62 185,62.2 185.2,62.3 185.5,62.4 185.7,62.6 186,62.7 186.2,62.9 186.5,63 186.7,63.1 187,63.3 187.2,63.4 187.5,63.6 187.7,63.7 188,63.9 188.2,64 188.5,64.2 188.7,64.3 189,64.5 189.2,64.7 189.5,64.8 189.7,65 190,65.1 190.2,65.3 190.5,65.5 190.7,65.6 191,65.8 191.2,66 191.5,66.2 191.7,66.3 192,66.5 192.2,66.7 192.5,66.9 192.7,67 193,67.2 193.2,67.4 193.5,67.6 193.7,67.8 194,67.9 194.2,68.1 194.5,68.3 194.7,68.5 195,68.7 195.2,68.9 195.5,69.1 195.7,69.3 196,69.5 196.2,69.7 196.5,69.9 196.7,70.1 197,70.3 197.2,70.5 197.5,70.7 197.7,70.9 198,71.1 198.2,71.3 198.5,71.5 198.7,71.8 199,72 199.2,72.2 199.5,72.4 199.7,72.6 200,72.8 200.2,73.1 200.5,73.3 200.7,73.5 201,73.7 201.2,74 201.5,74.2 201.7,74.4 202,74.7 202.2,74.9 202.5,75.1 202.7,75.4 203,75.6 203.2,75.9 203.5,76.1 203.7,76.3 204,76.6 204.2,76.8 204.5,77.1 204.7,77.3 205,77.6 205.2,77.8 205.5,78.1 205.7,78.3 206,78.6 206.2,78.8 206.5,79.1 206.7,79.4 207,79.6 207.2,79.9 207.5,80.2 207.7,80.4 208,80.7 208.2,81 208.5,81.2 208.7,81.5 209,81.8 209.2,82 209.5,82.3 209.7,82.6 210,82.9 210.2,83.2 210.5,83.4 210.7,83.7 211,84 211.2,84.3 211.5,84.6 211.7,84.9 212,85.2 212.2,85.5 212.5,85.8 212.7,86.1 213,86.3 213.2,86.6 213.5,86.9 213.7,87.2 214,87.5 214.2,87.9 214.5,88.2 214.7,88.5 215,88.8 215.2,89.1 215.5,89.4 215.7,89.7 216,90 216.2,90.3 216.5,90.7 216.7,91 217,91.3 217.2,91.6 217.5,91.9 217.7,92.3 218,92.6 218.2,92.9 218.5,93.2 218.7,93.6 219,93.9 219.2,94.2 219.5,94.6 219.7,94.9 220,95.3 220.2,95.6 220.5,95.9 220.7,96.3 221,96.6 221.2,97 221.5,97.3 221.7,97.7 222,98 222.2,98.4 222.5,98.7 222.7,99.1 223,99.4 223.2,99.8 223.5,100.1 223.7,100.5 224,100.9 224.2,101.2 224.5,101.6 224.7,101.9 225,102.3 225.2,102.7 225.5,103 225.7,103.4 226,103.8 226.2,104.2 226.5,104.5 226.7,104.9 227,105.3 227.2,105.7 227.5,106.1 227.7,106.4 228,106.8 228.2,107.2 228.5,107.6 228.7,108 229,108.4 229.2,108.8 229.5,109.2 229.7,109.6 230,110 230.2,110.3 230.5,110.7 230.7,111.1 231,111.6 231.2,112 231.5,112.4 231.7,112.8 232,113.2 232.2,113.6 232.5,114 232.7,114.4 233,114.8 233.2,115.2 233.5,115.6 233.7,116.1 234,116.5 234.2,116.9 234.5,117.3 234.7,117.8 235,118.2 235.2,118.6 235.5,119 235.7,119.5 236,119.9 236.2,120.3 236.5,120.8 236.7,121.2 237,121.6 237.2,122.1 237.5,122.5 237.7,123 238,123.4 238.2,123.8 238.5,124.3 238.7,124.7 239,125.2 239.2,125.6 239.5,126.1 239.7,126.5 240,127 240.2,127.4 240.5,127.9 240.7,128.4 241,128.8 241.2,129.3 241.5,129.7 241.7,130.2 242,130.7 242.2,131.1 242.5,131.6 242.7,132.1 243,132.6 243.2,133 243.5,133.5 243.7,134 244,134.5 244.2,134.9 244.5,135.4 244.7,135.9 245,136.4 245.2,136.9 245.5,137.4 245.7,137.8 246,138.3 246.2,138.8 246.5,139.3 246.7,139.8 247,140.3 247.2,140.8 247.5,141.3 247.7,141.8 248,142.3 248.2,142.8 248.5,143.3 248.7,143.8 249,144.3 249.2,144.8 249.5,145.3 249.7,145.8 250,146.4 250.2,146.9 250.5,147.4 250.7,147.9 251,148.4 251.2,148.9 251.5,149.5 251.7,150 252,150.5 252.2,151 252.5,151.6 252.7,152.1 253,152.6 253.2,153.2 253.5,153.7 253.7,154.2 254,154.8 254.2,155.3 254.5,155.8 254.7,156.4 255,156.9 255.2,157.5 255.5,158 255.7,158.5 256,159.1 256.2,159.6 256.5,160.2 256.7,160.7 257,161.3 257.2,161.9 257.5,162.4 257.7,163 258,163.5 258.2,164.1 258.5,164.7 258.7,165.2 259,165.8 259.2,166.3 259.5,166.9 259.7,167.5 260,168.1 260.2,168.6 260.5,169.2 260.7,169.8 261,170.4 261.2,170.9 261.5,171.5 261.7,172.1 262,172.7 262.2,173.3 262.5,173.8 262.7,174.4 263,175 263.2,175.6 263.5,176.2 263.7,176.8 264,177.4 264.2,178 264.5,178.6 264.7,179.2 265,179.8 265.2,180.4 265.5,181 265.7,181.6 266,182.2 266.2,182.8 266.5,183.4 266.7,184 267,184.6 267.2,185.3 267.5,185.9 267.7,186.5 268,187.1 268.2,187.7 268.5,188.3 268.7,189 269,189.6 269.2,190.2 269.5,190.8 269.7,191.5 270,192.1 270.2,192.7 270.5,193.4 270.7,194 271,194.6 271.2,195.3 271.5,195.9 271.7,196.5 272,197.2 272.2,197.8 272.5,198.5 272.7,199.1 273,199.8 273.2,200.4 273.5,201.1 273.7,201.7 274,202.4 274.2,203" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="162" cy="56" r="4" fill="currentColor"/>
  <text x="60" y="226.5" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">a</text>
  <text x="162" y="226.5" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">b</text>
  <text x="264" y="226.5" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">c</text>
  <text x="20" y="60" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">f(b)</text>
  <text x="178.2" y="38" font-size="13" fill="currentColor">Local maximum</text>
  <text x="107.6" y="149" font-size="13" fill="currentColor" text-anchor="middle">Increasing</text>
  <text x="107.6" y="164" font-size="13" fill="currentColor" text-anchor="middle">function</text>
  <text x="216.4" y="149" font-size="13" fill="currentColor" text-anchor="middle">Decreasing</text>
  <text x="216.4" y="164" font-size="13" fill="currentColor" text-anchor="middle">function</text>
</svg>
</div>

These observations lead us to a formal definition of local extrema.

{{< callout type="info" >}}
  **Local minima and local maxima.**

  A function $f$ is an **increasing function** on an open interval if
  $f(b)>f(a)$ for every two input values $a$ and $b$ in the interval where
  $b>a$.

  A function $f$ is a **decreasing function** on an open interval if
  $f(b)<f(a)$ for every two input values $a$ and $b$ in the interval where
  $b>a$.

  A function $f$ has a local maximum at a point $b$ in an open interval
  $(a,c)$ if $f(b)\ge f(x)$ for every point $x$ ($x$ does not equal $b$) in
  the interval.

  $f$ has a local minimum at a point $b$ in $(a,c)$ if $f(b)\le f(x)$ for
  every point $x$ ($x$ does not equal $b$) in the interval.
{{< /callout >}}

**Example.** Given the function $p(t)$ graphed below, identify the intervals
on which the function appears to be increasing.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of p of t. It falls steeply from the top left to a low point at t = 1, rises to a high point at t = 3, dips to a second low point at t = 4, then rises steeply off the top of the grid.","xMin":-1,"xMax":6,"yMin":-2,"yMax":4,"xUnit":34,"yUnit":34,"tickLabels":true,"xLabel":"t","yLabel":"p","polynomials":[{"coeffs":[2.06987,-6.81124,5.39223,-1.51361,0.1419]}]}'>
<svg role="img" aria-label="The graph of p of t. It falls steeply from the top left to a low point at t = 1, rises to a high point at t = 3, dips to a second low point at t = 4, then rises steeply off the top of the grid." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 256" width="290" height="256" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="230" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="94" y1="230" x2="94" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="230" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="230" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="230" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="230" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="264" y1="230" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="264" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="196" x2="264" y2="196" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="264" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="264" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="264" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="264" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="162" x2="266" y2="162" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="24" x2="60" y2="232" stroke="currentColor" stroke-width="1"/>
  <polygon points="276,162 266,167 266,157" fill="currentColor"/>
  <polygon points="60,14 65,24 55,24" fill="currentColor"/>
  <polygon points="14,162 24,157 24,167" fill="currentColor"/>
  <polygon points="60,242 55,232 65,232" fill="currentColor"/>
  <text x="274" y="154" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="68" y="24" font-size="13" fill="currentColor" font-style="italic">p</text>
  <line x1="26" y1="159" x2="26" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="177" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="94" y1="159" x2="94" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="94" y="177" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="128" y1="159" x2="128" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="177" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="162" y1="159" x2="162" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="177" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="196" y1="159" x2="196" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="177" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="230" y1="159" x2="230" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="177" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="264" y1="159" x2="264" y2="165" stroke="currentColor" stroke-width="1"/>
  <text x="264" y="177" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="57" y1="230" x2="63" y2="230" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="234" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="57" y1="196" x2="63" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="200" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="57" y1="128" x2="63" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="132" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="57" y1="94" x2="63" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="98" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="57" y1="60" x2="63" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="64" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="57" y1="26" x2="63" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="54" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="52.8,34.3 53,35.7 53.3,38 53.5,40.3 53.8,42.5 54,44.8 54.3,47 54.5,49.1 54.8,51.3 55,53.4 55.3,55.6 55.5,57.6 55.8,59.7 56,61.8 56.3,63.8 56.5,65.8 56.8,67.8 57,69.7 57.3,71.7 57.5,73.6 57.8,75.5 58,77.4 58.3,79.2 58.5,81 58.8,82.9 59,84.7 59.3,86.4 59.5,88.2 59.8,89.9 60,91.6 60.3,93.3 60.5,95 60.8,96.6 61,98.3 61.3,99.9 61.5,101.5 61.8,103.1 62,104.6 62.3,106.2 62.5,107.7 62.8,109.2 63,110.7 63.3,112.1 63.5,113.6 63.8,115 64,116.4 64.3,117.8 64.5,119.2 64.8,120.5 65,121.9 65.3,123.2 65.5,124.5 65.8,125.8 66,127.1 66.3,128.3 66.5,129.5 66.8,130.8 67,132 67.3,133.2 67.5,134.3 67.8,135.5 68,136.6 68.3,137.7 68.5,138.8 68.8,139.9 69,141 69.3,142.1 69.5,143.1 69.8,144.1 70,145.2 70.3,146.1 70.5,147.1 70.8,148.1 71,149 71.3,150 71.5,150.9 71.8,151.8 72,152.7 72.3,153.6 72.5,154.5 72.8,155.3 73,156.1 73.3,157 73.5,157.8 73.8,158.6 74,159.4 74.3,160.1 74.5,160.9 74.8,161.6 75,162.3 75.3,163.1 75.5,163.8 75.8,164.5 76,165.1 76.3,165.8 76.5,166.4 76.8,167.1 77,167.7 77.3,168.3 77.5,168.9 77.8,169.5 78,170.1 78.3,170.7 78.5,171.2 78.8,171.8 79,172.3 79.3,172.8 79.5,173.3 79.8,173.8 80,174.3 80.3,174.8 80.5,175.2 80.8,175.7 81,176.1 81.3,176.6 81.5,177 81.8,177.4 82,177.8 82.3,178.2 82.5,178.6 82.8,178.9 83,179.3 83.3,179.7 83.5,180 83.8,180.3 84,180.6 84.3,181 84.5,181.3 84.8,181.5 85,181.8 85.3,182.1 85.5,182.4 85.8,182.6 86,182.9 86.3,183.1 86.5,183.3 86.8,183.6 87,183.8 87.3,184 87.5,184.2 87.8,184.3 88,184.5 88.3,184.7 88.5,184.9 88.8,185 89,185.2 89.3,185.3 89.5,185.4 89.8,185.5 90,185.7 90.3,185.8 90.5,185.9 90.8,186 91,186 91.3,186.1 91.5,186.2 91.8,186.2 92,186.3 92.3,186.4 92.5,186.4 92.8,186.4 93,186.5 93.3,186.5 93.5,186.5 93.8,186.5 94,186.5 94.3,186.5 94.5,186.5 94.8,186.5 95,186.5 95.3,186.4 95.5,186.4 95.8,186.4 96,186.3 96.3,186.3 96.5,186.2 96.8,186.1 97,186.1 97.3,186 97.5,185.9 97.8,185.8 98,185.8 98.3,185.7 98.5,185.6 98.8,185.5 99,185.4 99.3,185.2 99.5,185.1 99.8,185 100,184.9 100.3,184.7 100.5,184.6 100.8,184.5 101,184.3 101.3,184.2 101.5,184 101.8,183.9 102,183.7 102.3,183.5 102.5,183.4 102.8,183.2 103,183 103.3,182.8 103.5,182.7 103.8,182.5 104,182.3 104.3,182.1 104.5,181.9 104.8,181.7 105,181.5 105.3,181.3 105.5,181.1 105.8,180.9 106,180.6 106.3,180.4 106.5,180.2 106.8,180 107,179.7 107.3,179.5 107.5,179.3 107.8,179 108,178.8 108.3,178.6 108.5,178.3 108.8,178.1 109,177.8 109.3,177.6 109.5,177.3 109.8,177.1 110,176.8 110.3,176.5 110.5,176.3 110.8,176 111,175.8 111.3,175.5 111.5,175.2 111.8,174.9 112,174.7 112.3,174.4 112.5,174.1 112.8,173.9 113,173.6 113.3,173.3 113.5,173 113.8,172.7 114,172.4 114.3,172.2 114.5,171.9 114.8,171.6 115,171.3 115.3,171 115.5,170.7 115.8,170.4 116,170.1 116.3,169.8 116.5,169.6 116.8,169.3 117,169 117.3,168.7 117.5,168.4 117.8,168.1 118,167.8 118.3,167.5 118.5,167.2 118.8,166.9 119,166.6 119.3,166.3 119.5,166 119.8,165.7 120,165.4 120.3,165.1 120.5,164.8 120.8,164.5 121,164.2 121.3,163.9 121.5,163.6 121.8,163.3 122,163 122.3,162.7 122.5,162.4 122.8,162.1 123,161.8 123.3,161.5 123.5,161.2 123.8,160.9 124,160.6 124.3,160.3 124.5,160 124.8,159.7 125,159.4 125.3,159.1 125.5,158.8 125.8,158.5 126,158.3 126.3,158 126.5,157.7 126.8,157.4 127,157.1 127.3,156.8 127.5,156.5 127.8,156.2 128,156 128.3,155.7 128.5,155.4 128.8,155.1 129,154.8 129.3,154.5 129.5,154.3 129.8,154 130,153.7 130.3,153.4 130.5,153.2 130.8,152.9 131,152.6 131.3,152.4 131.5,152.1 131.8,151.8 132,151.6 132.3,151.3 132.5,151 132.8,150.8 133,150.5 133.3,150.3 133.5,150 133.8,149.8 134,149.5 134.3,149.3 134.5,149 134.8,148.8 135,148.5 135.3,148.3 135.5,148 135.8,147.8 136,147.6 136.3,147.3 136.5,147.1 136.8,146.9 137,146.6 137.3,146.4 137.5,146.2 137.8,146 138,145.7 138.3,145.5 138.5,145.3 138.8,145.1 139,144.9 139.3,144.6 139.5,144.4 139.8,144.2 140,144 140.3,143.8 140.5,143.6 140.8,143.4 141,143.2 141.3,143 141.5,142.8 141.8,142.6 142,142.5 142.3,142.3 142.5,142.1 142.8,141.9 143,141.7 143.3,141.5 143.5,141.4 143.8,141.2 144,141 144.3,140.9 144.5,140.7 144.8,140.5 145,140.4 145.3,140.2 145.5,140.1 145.8,139.9 146,139.8 146.3,139.6 146.5,139.5 146.8,139.3 147,139.2 147.3,139 147.5,138.9 147.8,138.8 148,138.6 148.3,138.5 148.5,138.4 148.8,138.2 149,138.1 149.3,138 149.5,137.9 149.8,137.8 150,137.7 150.3,137.6 150.5,137.4 150.8,137.3 151,137.2 151.3,137.1 151.5,137 151.8,136.9 152,136.8 152.3,136.8 152.5,136.7 152.8,136.6 153,136.5 153.3,136.4 153.5,136.3 153.8,136.3 154,136.2 154.3,136.1 154.5,136 154.8,136 155,135.9 155.3,135.9 155.5,135.8 155.8,135.7 156,135.7 156.3,135.6 156.5,135.6 156.8,135.5 157,135.5 157.3,135.4 157.5,135.4 157.8,135.4 158,135.3 158.3,135.3 158.5,135.3 158.8,135.2 159,135.2 159.3,135.2 159.5,135.2 159.8,135.1 160,135.1 160.3,135.1 160.5,135.1 160.8,135.1 161,135.1 161.3,135.1 161.5,135.1 161.8,135.1 162,135 162.3,135.1 162.5,135.1 162.8,135.1 163,135.1 163.3,135.1 163.5,135.1 163.8,135.1 164,135.1 164.3,135.1 164.5,135.2 164.8,135.2 165,135.2 165.3,135.2 165.5,135.2 165.8,135.3 166,135.3 166.3,135.3 166.5,135.4 166.8,135.4 167,135.4 167.3,135.5 167.5,135.5 167.8,135.6 168,135.6 168.3,135.7 168.5,135.7 168.8,135.8 169,135.8 169.3,135.9 169.5,135.9 169.8,136 170,136 170.3,136.1 170.5,136.1 170.8,136.2 171,136.3 171.3,136.3 171.5,136.4 171.8,136.5 172,136.5 172.3,136.6 172.5,136.7 172.8,136.7 173,136.8 173.3,136.9 173.5,136.9 173.8,137 174,137.1 174.3,137.2 174.5,137.3 174.8,137.3 175,137.4 175.3,137.5 175.5,137.6 175.8,137.7 176,137.7 176.3,137.8 176.5,137.9 176.8,138 177,138.1 177.3,138.2 177.5,138.2 177.8,138.3 178,138.4 178.3,138.5 178.5,138.6 178.8,138.7 179,138.8 179.3,138.9 179.5,138.9 179.8,139 180,139.1 180.3,139.2 180.5,139.3 180.8,139.4 181,139.5 181.3,139.6 181.5,139.7 181.8,139.8 182,139.8 182.3,139.9 182.5,140 182.8,140.1 183,140.2 183.3,140.3 183.5,140.4 183.8,140.5 184,140.5 184.3,140.6 184.5,140.7 184.8,140.8 185,140.9 185.3,141 185.5,141 185.8,141.1 186,141.2 186.3,141.3 186.5,141.4 186.8,141.4 187,141.5 187.3,141.6 187.5,141.7 187.8,141.7 188,141.8 188.3,141.9 188.5,142 188.8,142 189,142.1 189.3,142.1 189.5,142.2 189.8,142.3 190,142.3 190.3,142.4 190.5,142.4 190.8,142.5 191,142.5 191.3,142.6 191.5,142.6 191.8,142.7 192,142.7 192.3,142.8 192.5,142.8 192.8,142.9 193,142.9 193.3,142.9 193.5,143 193.8,143 194,143 194.3,143 194.5,143 194.8,143.1 195,143.1 195.3,143.1 195.5,143.1 195.8,143.1 196,143.1 196.3,143.1 196.5,143.1 196.8,143.1 197,143.1 197.3,143.1 197.5,143 197.8,143 198,143 198.3,143 198.5,142.9 198.8,142.9 199,142.9 199.3,142.8 199.5,142.8 199.8,142.7 200,142.7 200.3,142.6 200.5,142.5 200.8,142.5 201,142.4 201.3,142.3 201.5,142.2 201.8,142.1 202,142.1 202.3,142 202.5,141.9 202.8,141.7 203,141.6 203.3,141.5 203.5,141.4 203.8,141.3 204,141.1 204.3,141 204.5,140.9 204.8,140.7 205,140.6 205.3,140.4 205.5,140.2 205.8,140.1 206,139.9 206.3,139.7 206.5,139.5 206.8,139.3 207,139.1 207.3,138.9 207.5,138.7 207.8,138.5 208,138.3 208.3,138.1 208.5,137.8 208.8,137.6 209,137.3 209.3,137.1 209.5,136.8 209.8,136.5 210,136.3 210.3,136 210.5,135.7 210.8,135.4 211,135.1 211.3,134.8 211.5,134.4 211.8,134.1 212,133.8 212.3,133.4 212.5,133.1 212.8,132.7 213,132.3 213.3,132 213.5,131.6 213.8,131.2 214,130.8 214.3,130.4 214.5,130 214.8,129.5 215,129.1 215.3,128.7 215.5,128.2 215.8,127.7 216,127.3 216.3,126.8 216.5,126.3 216.8,125.8 217,125.3 217.3,124.8 217.5,124.3 217.8,123.7 218,123.2 218.3,122.6 218.5,122 218.8,121.5 219,120.9 219.3,120.3 219.5,119.7 219.8,119.1 220,118.4 220.3,117.8 220.5,117.1 220.8,116.5 221,115.8 221.3,115.1 221.5,114.4 221.8,113.7 222,113 222.3,112.3 222.5,111.6 222.8,110.8 223,110 223.3,109.3 223.5,108.5 223.8,107.7 224,106.9 224.3,106.1 224.5,105.2 224.8,104.4 225,103.5 225.3,102.7 225.5,101.8 225.8,100.9 226,100 226.3,99 226.5,98.1 226.8,97.2 227,96.2 227.3,95.2 227.5,94.2 227.8,93.2 228,92.2 228.3,91.2 228.5,90.2 228.8,89.1 229,88 229.3,86.9 229.5,85.8 229.8,84.7 230,83.6 230.3,82.5 230.5,81.3 230.8,80.1 231,78.9 231.3,77.7 231.5,76.5 231.8,75.3 232,74 232.3,72.8 232.5,71.5 232.8,70.2 233,68.9 233.3,67.6 233.5,66.2 233.8,64.9 234,63.5 234.3,62.1 234.5,60.7 234.8,59.3 235,57.8 235.3,56.4 235.5,54.9 235.8,53.4 236,51.9 236.3,50.4 236.5,48.8 236.8,47.3 237,45.7 237.3,44.1 237.5,42.5 237.8,40.9 238,39.2 238.3,37.5 238.5,35.8 238.6,35.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="52,26.3 58,35.7 48.1,36.8" fill="currentColor"/>
  <polygon points="239.8,27.1 243.3,37.7 233.4,36.3" fill="currentColor"/>
</svg>
</div>

**Solution.** We see that the function is not constant on any interval. The
function is increasing where it slants upward as we move to the right and
decreasing where it slants downward as we move to the right. The function
appears to be increasing from $t=1$ to $t=3$ and from $t=4$ on.

In **interval notation**, we would say the function appears to be increasing
on the interval $(1,3)$ and the interval $(4,\infty)$.

Notice in this example that we used open intervals (intervals that do not
include the endpoints), because the function is neither increasing nor
decreasing at $t=1$, $t=3$, and $t=4$. These points are the local extrema
(two minima and a maximum).

**Example.** Graph the function $f(x)=\tfrac{2}{x}+\tfrac{x}{3}$. Then use
the graph to estimate the local extrema of the function and to determine the
intervals on which the function is increasing.

**Solution.** Using technology, we find that the graph of the function looks
like the one below. It appears there is a low point, or local minimum,
between $x=2$ and $x=3$, and a mirror-image high point, or local maximum,
somewhere between $x=-3$ and $x=-2$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 2 over x plus x over 3. The right branch falls from the top toward a low point near (2.4, 1.6) and then rises slowly; the left branch is its mirror image, rising to a high point near (−2.4, −1.6) and then falling steeply toward the vertical axis.","xMin":-5,"xMax":5,"yMin":-4,"yMax":4,"xUnit":26,"yUnit":26,"tickLabels":true,"yLabel":"f(x)","rationals":[{"num":[6,0,1],"den":[0,3]}]}'>
<svg role="img" aria-label="The graph of f of x equals 2 over x plus x over 3. The right branch falls from the top toward a low point near (2.4, 1.6) and then rises slowly; the left branch is its mirror image, rising to a high point near (−2.4, −1.6) and then falling steeply toward the vertical axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 260" width="312" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="234" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="234" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="234" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="234" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="286" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="286" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="286" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="286" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="286" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="286" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="286" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="130" x2="288" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="156" y1="24" x2="156" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,130 288,135 288,125" fill="currentColor"/>
  <polygon points="156,14 161,24 151,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="156,246 151,236 161,236" fill="currentColor"/>
  <text x="296" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="164" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="130" y1="127" x2="130" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="145" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="260" y1="127" x2="260" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="286" y1="127" x2="286" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="145" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="153" y1="234" x2="159" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="238" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="153" y1="208" x2="159" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="212" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="153" y1="182" x2="159" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="186" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="153" y1="156" x2="159" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="160" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="153" y1="104" x2="159" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="108" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="153" y1="78" x2="159" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="82" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="153" y1="52" x2="159" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="56" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="153" y1="26" x2="159" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="33.8,181.8 34,181.7 34.3,181.7 34.5,181.6 34.8,181.6 35,181.5 35.3,181.4 35.5,181.4 35.8,181.3 36,181.3 36.3,181.2 36.5,181.1 36.8,181.1 37,181 37.3,181 37.5,180.9 37.8,180.9 38,180.8 38.2,180.7 38.5,180.7 38.7,180.6 39,180.6 39.3,180.5 39.5,180.4 39.8,180.4 40,180.3 40.3,180.3 40.5,180.2 40.8,180.1 41,180.1 41.3,180 41.5,180 41.8,179.9 42,179.9 42.3,179.8 42.5,179.7 42.8,179.7 43,179.6 43.3,179.6 43.5,179.5 43.8,179.5 44,179.4 44.3,179.3 44.5,179.3 44.7,179.2 45,179.2 45.2,179.1 45.5,179.1 45.8,179 46,179 46.3,178.9 46.5,178.8 46.8,178.8 47,178.7 47.3,178.7 47.5,178.6 47.8,178.6 48,178.5 48.3,178.5 48.5,178.4 48.8,178.4 49,178.3 49.3,178.2 49.5,178.2 49.8,178.1 50,178.1 50.3,178 50.5,178 50.8,177.9 51,177.9 51.2,177.8 51.5,177.8 51.7,177.7 52,177.7 52.3,177.6 52.5,177.6 52.8,177.5 53,177.5 53.3,177.4 53.5,177.4 53.8,177.3 54,177.3 54.3,177.2 54.5,177.2 54.8,177.1 55,177.1 55.3,177 55.5,177 55.8,176.9 56,176.9 56.3,176.8 56.5,176.8 56.8,176.7 57,176.7 57.3,176.6 57.5,176.6 57.8,176.5 58,176.5 58.3,176.4 58.5,176.4 58.8,176.3 59,176.3 59.3,176.2 59.5,176.2 59.8,176.1 60,176.1 60.3,176 60.5,176 60.8,175.9 61,175.9 61.3,175.9 61.5,175.8 61.8,175.8 62,175.7 62.3,175.7 62.5,175.6 62.8,175.6 63,175.5 63.3,175.5 63.5,175.4 63.8,175.4 64,175.4 64.3,175.3 64.5,175.3 64.8,175.2 65,175.2 65.3,175.1 65.5,175.1 65.8,175.1 66,175 66.3,175 66.5,174.9 66.8,174.9 67,174.9 67.3,174.8 67.5,174.8 67.8,174.7 68,174.7 68.3,174.7 68.5,174.6 68.8,174.6 69,174.5 69.3,174.5 69.5,174.5 69.8,174.4 70,174.4 70.3,174.4 70.5,174.3 70.8,174.3 71,174.2 71.3,174.2 71.5,174.2 71.8,174.1 72,174.1 72.3,174.1 72.5,174 72.8,174 73,174 73.3,173.9 73.5,173.9 73.8,173.9 74,173.8 74.3,173.8 74.5,173.8 74.8,173.7 75,173.7 75.3,173.7 75.5,173.6 75.8,173.6 76,173.6 76.3,173.5 76.5,173.5 76.8,173.5 77,173.4 77.3,173.4 77.5,173.4 77.8,173.4 78,173.3 78.3,173.3 78.5,173.3 78.8,173.3 79,173.2 79.3,173.2 79.5,173.2 79.8,173.1 80,173.1 80.3,173.1 80.5,173.1 80.8,173.1 81,173 81.3,173 81.5,173 81.8,173 82,172.9 82.3,172.9 82.5,172.9 82.8,172.9 83,172.9 83.3,172.8 83.5,172.8 83.8,172.8 84,172.8 84.3,172.8 84.5,172.7 84.8,172.7 85,172.7 85.3,172.7 85.5,172.7 85.8,172.7 86,172.6 86.3,172.6 86.5,172.6 86.8,172.6 87,172.6 87.3,172.6 87.5,172.6 87.8,172.6 88,172.5 88.3,172.5 88.5,172.5 88.8,172.5 89,172.5 89.3,172.5 89.5,172.5 89.8,172.5 90,172.5 90.3,172.5 90.5,172.5 90.8,172.5 91,172.5 91.3,172.5 91.5,172.5 91.8,172.5 92,172.5 92.3,172.5 92.5,172.5 92.8,172.5 93,172.5 93.3,172.5 93.5,172.5 93.8,172.5 94,172.5 94.3,172.5 94.5,172.5 94.8,172.5 95,172.5 95.3,172.5 95.5,172.5 95.8,172.5 96,172.5 96.3,172.5 96.5,172.6 96.8,172.6 97,172.6 97.3,172.6 97.5,172.6 97.8,172.6 98,172.6 98.3,172.7 98.5,172.7 98.8,172.7 99,172.7 99.3,172.7 99.5,172.8 99.8,172.8 100,172.8 100.3,172.8 100.5,172.9 100.8,172.9 101,172.9 101.3,172.9 101.5,173 101.8,173 102,173 102.3,173.1 102.5,173.1 102.8,173.1 103,173.2 103.3,173.2 103.5,173.3 103.8,173.3 104,173.3 104.3,173.4 104.5,173.4 104.8,173.5 105,173.5 105.3,173.6 105.5,173.6 105.8,173.7 106,173.7 106.3,173.8 106.5,173.8 106.8,173.9 107,173.9 107.3,174 107.5,174 107.8,174.1 108,174.2 108.3,174.2 108.5,174.3 108.8,174.4 109,174.4 109.3,174.5 109.5,174.6 109.8,174.6 110,174.7 110.3,174.8 110.5,174.9 110.8,175 111,175 111.3,175.1 111.5,175.2 111.8,175.3 112,175.4 112.3,175.5 112.5,175.6 112.8,175.7 113,175.8 113.3,175.9 113.5,176 113.8,176.1 114,176.2 114.3,176.3 114.5,176.4 114.8,176.5 115,176.6 115.3,176.8 115.5,176.9 115.8,177 116,177.1 116.3,177.3 116.5,177.4 116.8,177.5 117,177.7 117.3,177.8 117.5,178 117.8,178.1 118,178.2 118.3,178.4 118.5,178.6 118.8,178.7 119,178.9 119.3,179 119.5,179.2 119.8,179.4 120,179.6 120.3,179.7 120.5,179.9 120.8,180.1 121,180.3 121.3,180.5 121.5,180.7 121.8,180.9 122,181.1 122.3,181.3 122.5,181.5 122.8,181.7 123,182 123.3,182.2 123.5,182.4 123.8,182.7 124,182.9 124.3,183.2 124.5,183.4 124.8,183.7 125,183.9 125.3,184.2 125.5,184.5 125.8,184.8 126,185.1 126.3,185.4 126.5,185.7 126.8,186 127,186.3 127.3,186.6 127.5,186.9 127.8,187.3 128,187.6 128.3,188 128.5,188.3 128.8,188.7 129,189.1 129.3,189.5 129.5,189.9 129.8,190.3 130,190.7 130.3,191.1 130.5,191.5 130.8,192 131,192.4 131.3,192.9 131.5,193.4 131.8,193.8 132,194.3 132.3,194.8 132.5,195.4 132.8,195.9 133,196.4 133.3,197 133.5,197.6 133.8,198.2 134,198.8 134.3,199.4 134.5,200.1 134.8,200.7 135,201.4 135.3,202.1 135.5,202.8 135.8,203.5 136,204.3 136.3,205 136.5,205.8 136.8,206.7 137,207.5 137.3,208.4 137.5,209.2 137.8,210.2 138,211.1 138.3,212.1 138.5,213.1 138.8,214.1 139,215.2 139.3,216.3 139.5,217.4 139.8,218.6 140,219.8 140.3,221.1 140.5,222.4 140.8,223.7 141,225" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,183.7 34.5,176.5 36.9,186.2" fill="currentColor"/>
  <polygon points="142.3,232.9 135.7,223.8 145.6,222.2" fill="currentColor"/>
  <polyline points="171,35 171.3,36.3 171.5,37.6 171.8,38.9 172,40.2 172.3,41.4 172.5,42.6 172.8,43.7 173,44.8 173.3,45.9 173.5,46.9 173.8,47.9 174,48.9 174.3,49.8 174.5,50.8 174.8,51.6 175,52.5 175.3,53.3 175.5,54.2 175.8,55 176,55.7 176.3,56.5 176.5,57.2 176.8,57.9 177,58.6 177.3,59.3 177.5,59.9 177.8,60.6 178,61.2 178.3,61.8 178.5,62.4 178.8,63 179,63.6 179.3,64.1 179.5,64.6 179.8,65.2 180,65.7 180.3,66.2 180.5,66.6 180.8,67.1 181,67.6 181.3,68 181.5,68.5 181.8,68.9 182,69.3 182.3,69.7 182.5,70.1 182.8,70.5 183,70.9 183.3,71.3 183.5,71.7 183.8,72 184,72.4 184.3,72.7 184.5,73.1 184.8,73.4 185,73.7 185.3,74 185.5,74.3 185.8,74.6 186,74.9 186.3,75.2 186.5,75.5 186.8,75.8 187,76.1 187.3,76.3 187.5,76.6 187.8,76.8 188,77.1 188.3,77.3 188.5,77.6 188.8,77.8 189,78 189.3,78.3 189.5,78.5 189.8,78.7 190,78.9 190.3,79.1 190.5,79.3 190.8,79.5 191,79.7 191.3,79.9 191.5,80.1 191.8,80.3 192,80.4 192.3,80.6 192.5,80.8 192.8,81 193,81.1 193.3,81.3 193.5,81.4 193.8,81.6 194,81.8 194.3,81.9 194.5,82 194.8,82.2 195,82.3 195.3,82.5 195.5,82.6 195.8,82.7 196,82.9 196.3,83 196.5,83.1 196.8,83.2 197,83.4 197.3,83.5 197.5,83.6 197.8,83.7 198,83.8 198.3,83.9 198.5,84 198.8,84.1 199,84.2 199.3,84.3 199.5,84.4 199.8,84.5 200,84.6 200.3,84.7 200.5,84.8 200.8,84.9 201,85 201.3,85 201.5,85.1 201.8,85.2 202,85.3 202.3,85.4 202.5,85.4 202.8,85.5 203,85.6 203.3,85.6 203.5,85.7 203.8,85.8 204,85.8 204.3,85.9 204.5,86 204.8,86 205,86.1 205.3,86.1 205.5,86.2 205.8,86.2 206,86.3 206.3,86.3 206.5,86.4 206.8,86.4 207,86.5 207.3,86.5 207.5,86.6 207.8,86.6 208,86.7 208.3,86.7 208.5,86.7 208.8,86.8 209,86.8 209.3,86.9 209.5,86.9 209.8,86.9 210,87 210.3,87 210.5,87 210.8,87.1 211,87.1 211.3,87.1 211.5,87.1 211.8,87.2 212,87.2 212.3,87.2 212.5,87.2 212.8,87.3 213,87.3 213.3,87.3 213.5,87.3 213.8,87.3 214,87.4 214.3,87.4 214.5,87.4 214.8,87.4 215,87.4 215.3,87.4 215.5,87.4 215.8,87.5 216,87.5 216.3,87.5 216.5,87.5 216.8,87.5 217,87.5 217.3,87.5 217.5,87.5 217.8,87.5 218,87.5 218.3,87.5 218.5,87.5 218.8,87.5 219,87.5 219.3,87.5 219.5,87.5 219.8,87.5 220,87.5 220.3,87.5 220.5,87.5 220.8,87.5 221,87.5 221.3,87.5 221.5,87.5 221.8,87.5 222,87.5 222.3,87.5 222.5,87.5 222.8,87.5 223,87.5 223.3,87.5 223.5,87.5 223.8,87.5 224,87.5 224.3,87.4 224.5,87.4 224.8,87.4 225,87.4 225.3,87.4 225.5,87.4 225.8,87.4 226,87.4 226.3,87.3 226.5,87.3 226.8,87.3 227,87.3 227.3,87.3 227.5,87.3 227.8,87.2 228,87.2 228.3,87.2 228.5,87.2 228.8,87.2 229,87.1 229.3,87.1 229.5,87.1 229.8,87.1 230,87.1 230.3,87 230.5,87 230.8,87 231,87 231.3,86.9 231.5,86.9 231.8,86.9 232,86.9 232.3,86.9 232.5,86.8 232.8,86.8 233,86.8 233.3,86.7 233.5,86.7 233.8,86.7 234,86.7 234.3,86.6 234.5,86.6 234.8,86.6 235,86.6 235.3,86.5 235.5,86.5 235.8,86.5 236,86.4 236.3,86.4 236.5,86.4 236.7,86.3 237,86.3 237.3,86.3 237.5,86.2 237.8,86.2 238,86.2 238.3,86.1 238.5,86.1 238.8,86.1 239,86 239.3,86 239.5,86 239.8,85.9 240,85.9 240.3,85.9 240.5,85.8 240.8,85.8 241,85.8 241.3,85.7 241.5,85.7 241.8,85.6 242,85.6 242.3,85.6 242.5,85.5 242.8,85.5 243,85.5 243.2,85.4 243.5,85.4 243.8,85.3 244,85.3 244.3,85.3 244.5,85.2 244.8,85.2 245,85.1 245.3,85.1 245.5,85.1 245.8,85 246,85 246.3,84.9 246.5,84.9 246.8,84.9 247,84.8 247.3,84.8 247.5,84.7 247.8,84.7 248,84.6 248.3,84.6 248.5,84.6 248.8,84.5 249,84.5 249.3,84.4 249.5,84.4 249.7,84.3 250,84.3 250.3,84.2 250.5,84.2 250.8,84.1 251,84.1 251.3,84.1 251.5,84 251.8,84 252,83.9 252.3,83.9 252.5,83.8 252.8,83.8 253,83.7 253.3,83.7 253.5,83.6 253.8,83.6 254,83.5 254.3,83.5 254.5,83.4 254.8,83.4 255,83.3 255.3,83.3 255.5,83.2 255.8,83.2 256,83.1 256.3,83.1 256.5,83 256.8,83 257,82.9 257.3,82.9 257.5,82.8 257.8,82.8 258,82.7 258.3,82.7 258.5,82.6 258.8,82.6 259,82.5 259.3,82.5 259.5,82.4 259.8,82.4 260,82.3 260.3,82.3 260.5,82.2 260.8,82.2 261,82.1 261.3,82.1 261.5,82 261.8,82 262,81.9 262.3,81.9 262.5,81.8 262.8,81.8 263,81.7 263.3,81.6 263.5,81.6 263.8,81.5 264,81.5 264.3,81.4 264.5,81.4 264.8,81.3 265,81.3 265.3,81.2 265.5,81.2 265.8,81.1 266,81 266.3,81 266.5,80.9 266.8,80.9 267,80.8 267.3,80.8 267.5,80.7 267.8,80.7 268,80.6 268.3,80.5 268.5,80.5 268.8,80.4 269,80.4 269.3,80.3 269.5,80.3 269.8,80.2 270,80.1 270.3,80.1 270.5,80 270.8,80 271,79.9 271.3,79.9 271.5,79.8 271.8,79.7 272,79.7 272.3,79.6 272.5,79.6 272.8,79.5 273,79.4 273.3,79.4 273.5,79.3 273.8,79.3 274,79.2 274.3,79.1 274.5,79.1 274.8,79 275,79 275.3,78.9 275.5,78.9 275.8,78.8 276,78.7 276.3,78.7 276.5,78.6 276.8,78.6 277,78.5 277.3,78.4 277.5,78.4 277.8,78.3 278,78.3 278.2,78.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="169.8,27.1 176.3,36.2 166.4,37.8" fill="currentColor"/>
  <polygon points="286,76.3 277.5,83.5 275.1,73.8" fill="currentColor"/>
</svg>
</div>

Most graphing calculators and graphing utilities can estimate the location of
maxima and minima. Based on such estimates, the function is increasing on the
interval $(-\infty,-2.449)$ and $(2.449,\infty)$. Notice that, while we
expect the extrema to be symmetric, two different technologies agree only up
to four decimals due to the differing approximation algorithms used by each.
(The exact location of the extrema is at $\pm\sqrt{6}$, but determining this
requires calculus.)

{{< fillin
  question="Graph $f(x)=x^3-6x^2-15x+20$. The local maximum occurs at $x=-1$; what is the local maximum value?"
  answer="28"
  hint="Evaluate the function at $x=-1$."
>}}

{{< multiplechoice
  question="For that same function $f(x)=x^3-6x^2-15x+20$, on which intervals is it increasing?"
  answer="$(-\infty,-1)\cup(5,\infty)$"
  hint="The graph turns at the two local extrema, $x=-1$ and $x=5$; it climbs outside them."
>}}
$(-\infty,-1)\cup(5,\infty)$
$(-1,5)$
$(-\infty,-1)$
$(5,\infty)$
{{< /multiplechoice >}}

**Example.** For the function $f$ whose graph is shown below, find all local
maxima and minima.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 3x minus x cubed. It falls from the top left to a low point at (−1, −2), rises to a high point at (1, 2), then falls steeply off the bottom of the grid.","xMin":-3,"xMax":3,"yMin":-8,"yMax":8,"xUnit":40,"yUnit":16,"xGridStep":1,"yGridStep":2,"tickLabels":true,"xTickStep":1,"yTickStep":2,"cubics":[{"a":-1,"b":0,"c":3,"d":0}],"texts":[{"at":[2.1,-6],"text":"f","italic":true}]}'>
<svg role="img" aria-label="The graph of f of x equals 3x minus x cubed. It falls from the top left to a low point at (−1, −2), rises to a high point at (1, 2), then falls steeply off the bottom of the grid." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 308" width="292" height="308" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="282" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="282" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="282" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="282" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="282" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="282" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="282" x2="266" y2="282" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="266" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="266" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="266" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="154" x2="268" y2="154" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="284" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,154 268,159 268,149" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,154 24,149 24,159" fill="currentColor"/>
  <polygon points="146,294 141,284 151,284" fill="currentColor"/>
  <text x="276" y="146" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="151" x2="26" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="169" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="66" y1="151" x2="66" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="169" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="106" y1="151" x2="106" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="169" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="186" y1="151" x2="186" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="169" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="226" y1="151" x2="226" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="169" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="151" x2="266" y2="157" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="169" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="143" y1="282" x2="149" y2="282" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="286" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="143" y1="250" x2="149" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="254" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="90" x2="149" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="94" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="58" x2="149" y2="58" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="62" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <polyline points="47.8,35 48,36.3 48.3,37.8 48.5,39.3 48.8,40.8 49,42.2 49.3,43.7 49.5,45.1 49.8,46.6 50,48 50.3,49.4 50.5,50.9 50.8,52.3 51,53.7 51.3,55 51.5,56.4 51.8,57.8 52,59.2 52.3,60.5 52.5,61.8 52.8,63.2 53,64.5 53.3,65.8 53.5,67.1 53.8,68.4 54,69.7 54.3,71 54.5,72.3 54.8,73.6 55,74.8 55.3,76.1 55.5,77.3 55.8,78.5 56,79.8 56.3,81 56.5,82.2 56.8,83.4 57,84.6 57.3,85.7 57.5,86.9 57.8,88.1 58,89.2 58.3,90.4 58.5,91.5 58.8,92.7 59,93.8 59.3,94.9 59.5,96 59.8,97.1 60,98.2 60.3,99.3 60.5,100.3 60.8,101.4 61,102.5 61.3,103.5 61.5,104.6 61.8,105.6 62,106.6 62.3,107.6 62.5,108.7 62.8,109.7 63,110.7 63.3,111.6 63.5,112.6 63.8,113.6 64,114.6 64.3,115.5 64.5,116.5 64.8,117.4 65,118.3 65.3,119.3 65.5,120.2 65.8,121.1 66,122 66.3,122.9 66.5,123.8 66.8,124.7 67,125.5 67.3,126.4 67.5,127.3 67.8,128.1 68,129 68.3,129.8 68.5,130.6 68.8,131.5 69,132.3 69.3,133.1 69.5,133.9 69.8,134.7 70,135.5 70.3,136.2 70.5,137 70.8,137.8 71,138.5 71.3,139.3 71.5,140 71.8,140.8 72,141.5 72.3,142.2 72.5,142.9 72.8,143.6 73,144.3 73.3,145 73.5,145.7 73.8,146.4 74,147.1 74.3,147.8 74.5,148.4 74.8,149.1 75,149.7 75.3,150.4 75.5,151 75.8,151.6 76,152.3 76.3,152.9 76.5,153.5 76.8,154.1 77,154.7 77.3,155.3 77.5,155.8 77.8,156.4 78,157 78.3,157.6 78.5,158.1 78.8,158.7 79,159.2 79.3,159.7 79.5,160.3 79.8,160.8 80,161.3 80.3,161.8 80.5,162.3 80.8,162.8 81,163.3 81.3,163.8 81.5,164.3 81.8,164.8 82,165.3 82.3,165.7 82.5,166.2 82.8,166.6 83,167.1 83.3,167.5 83.5,168 83.8,168.4 84,168.8 84.3,169.2 84.5,169.6 84.8,170.1 85,170.5 85.3,170.8 85.5,171.2 85.8,171.6 86,172 86.3,172.4 86.5,172.7 86.8,173.1 87,173.5 87.3,173.8 87.5,174.1 87.8,174.5 88,174.8 88.3,175.2 88.5,175.5 88.8,175.8 89,176.1 89.3,176.4 89.5,176.7 89.8,177 90,177.3 90.3,177.6 90.5,177.9 90.8,178.1 91,178.4 91.3,178.7 91.5,178.9 91.8,179.2 92,179.4 92.3,179.7 92.5,179.9 92.8,180.2 93,180.4 93.3,180.6 93.5,180.8 93.8,181 94,181.2 94.3,181.5 94.5,181.7 94.8,181.8 95,182 95.3,182.2 95.5,182.4 95.8,182.6 96,182.8 96.3,182.9 96.5,183.1 96.8,183.2 97,183.4 97.3,183.5 97.5,183.7 97.8,183.8 98,184 98.3,184.1 98.5,184.2 98.8,184.3 99,184.4 99.3,184.6 99.5,184.7 99.8,184.8 100,184.9 100.3,185 100.5,185.1 100.8,185.1 101,185.2 101.3,185.3 101.5,185.4 101.8,185.4 102,185.5 102.3,185.6 102.5,185.6 102.8,185.7 103,185.7 103.3,185.8 103.5,185.8 103.8,185.8 104,185.9 104.3,185.9 104.5,185.9 104.8,186 105,186 105.3,186 105.5,186 105.8,186 106,186 106.3,186 106.5,186 106.8,186 107,186 107.3,186 107.5,185.9 107.8,185.9 108,185.9 108.3,185.9 108.5,185.8 108.8,185.8 109,185.7 109.3,185.7 109.5,185.6 109.8,185.6 110,185.5 110.3,185.5 110.5,185.4 110.8,185.3 111,185.3 111.3,185.2 111.5,185.1 111.8,185.1 112,185 112.3,184.9 112.5,184.8 112.8,184.7 113,184.6 113.3,184.5 113.5,184.4 113.8,184.3 114,184.2 114.3,184.1 114.5,184 114.8,183.9 115,183.8 115.3,183.6 115.5,183.5 115.8,183.4 116,183.3 116.3,183.1 116.5,183 116.8,182.8 117,182.7 117.3,182.6 117.5,182.4 117.8,182.3 118,182.1 118.3,182 118.5,181.8 118.8,181.6 119,181.5 119.3,181.3 119.5,181.1 119.8,181 120,180.8 120.3,180.6 120.5,180.5 120.8,180.3 121,180.1 121.3,179.9 121.5,179.7 121.8,179.5 122,179.3 122.3,179.2 122.5,179 122.8,178.8 123,178.6 123.3,178.4 123.5,178.2 123.8,177.9 124,177.7 124.3,177.5 124.5,177.3 124.8,177.1 125,176.9 125.3,176.7 125.5,176.4 125.8,176.2 126,176 126.3,175.8 126.5,175.5 126.8,175.3 127,175.1 127.3,174.9 127.5,174.6 127.8,174.4 128,174.1 128.3,173.9 128.5,173.7 128.8,173.4 129,173.2 129.3,172.9 129.5,172.7 129.8,172.4 130,172.2 130.3,171.9 130.5,171.7 130.8,171.4 131,171.2 131.3,170.9 131.5,170.6 131.8,170.4 132,170.1 132.3,169.9 132.5,169.6 132.8,169.3 133,169.1 133.3,168.8 133.5,168.5 133.8,168.2 134,168 134.3,167.7 134.5,167.4 134.8,167.1 135,166.9 135.3,166.6 135.5,166.3 135.8,166 136,165.8 136.3,165.5 136.5,165.2 136.8,164.9 137,164.6 137.3,164.3 137.5,164 137.8,163.8 138,163.5 138.3,163.2 138.5,162.9 138.8,162.6 139,162.3 139.3,162 139.5,161.7 139.8,161.4 140,161.1 140.3,160.9 140.5,160.6 140.8,160.3 141,160 141.3,159.7 141.5,159.4 141.8,159.1 142,158.8 142.3,158.5 142.5,158.2 142.8,157.9 143,157.6 143.3,157.3 143.5,157 143.8,156.7 144,156.4 144.3,156.1 144.5,155.8 144.8,155.5 145,155.2 145.3,154.9 145.5,154.6 145.8,154.3 146,154 146.3,153.7 146.5,153.4 146.8,153.1 147,152.8 147.3,152.5 147.5,152.2 147.8,151.9 148,151.6 148.3,151.3 148.5,151 148.8,150.7 149,150.4 149.3,150.1 149.5,149.8 149.8,149.5 150,149.2 150.3,148.9 150.5,148.6 150.8,148.3 151,148 151.3,147.7 151.5,147.4 151.8,147.1 152,146.9 152.3,146.6 152.5,146.3 152.8,146 153,145.7 153.3,145.4 153.5,145.1 153.8,144.8 154,144.5 154.3,144.2 154.5,144 154.8,143.7 155,143.4 155.3,143.1 155.5,142.8 155.8,142.5 156,142.3 156.3,142 156.5,141.7 156.8,141.4 157,141.1 157.3,140.9 157.5,140.6 157.8,140.3 158,140 158.3,139.8 158.5,139.5 158.8,139.2 159,138.9 159.3,138.7 159.5,138.4 159.8,138.1 160,137.9 160.3,137.6 160.5,137.4 160.8,137.1 161,136.8 161.3,136.6 161.5,136.3 161.8,136.1 162,135.8 162.3,135.6 162.5,135.3 162.8,135.1 163,134.8 163.3,134.6 163.5,134.3 163.8,134.1 164,133.9 164.3,133.6 164.5,133.4 164.8,133.1 165,132.9 165.3,132.7 165.5,132.5 165.8,132.2 166,132 166.3,131.8 166.5,131.6 166.8,131.3 167,131.1 167.3,130.9 167.5,130.7 167.8,130.5 168,130.3 168.3,130.1 168.5,129.8 168.8,129.6 169,129.4 169.3,129.2 169.5,129 169.8,128.8 170,128.7 170.3,128.5 170.5,128.3 170.8,128.1 171,127.9 171.3,127.7 171.5,127.5 171.8,127.4 172,127.2 172.3,127 172.5,126.9 172.8,126.7 173,126.5 173.3,126.4 173.5,126.2 173.8,126 174,125.9 174.3,125.7 174.5,125.6 174.8,125.4 175,125.3 175.3,125.2 175.5,125 175.8,124.9 176,124.8 176.3,124.6 176.5,124.5 176.8,124.4 177,124.2 177.3,124.1 177.5,124 177.8,123.9 178,123.8 178.3,123.7 178.5,123.6 178.8,123.5 179,123.4 179.3,123.3 179.5,123.2 179.8,123.1 180,123 180.3,122.9 180.5,122.9 180.8,122.8 181,122.7 181.3,122.7 181.5,122.6 181.8,122.5 182,122.5 182.3,122.4 182.5,122.4 182.8,122.3 183,122.3 183.3,122.2 183.5,122.2 183.8,122.1 184,122.1 184.3,122.1 184.5,122.1 184.8,122 185,122 185.3,122 185.5,122 185.8,122 186,122 186.3,122 186.5,122 186.8,122 187,122 187.3,122 187.5,122.1 187.8,122.1 188,122.1 188.3,122.2 188.5,122.2 188.8,122.2 189,122.3 189.3,122.3 189.5,122.4 189.8,122.4 190,122.5 190.3,122.6 190.5,122.6 190.8,122.7 191,122.8 191.3,122.9 191.5,122.9 191.8,123 192,123.1 192.3,123.2 192.5,123.3 192.8,123.4 193,123.6 193.3,123.7 193.5,123.8 193.8,123.9 194,124 194.3,124.2 194.5,124.3 194.8,124.5 195,124.6 195.3,124.8 195.5,124.9 195.8,125.1 196,125.3 196.3,125.4 196.5,125.6 196.8,125.8 197,126 197.3,126.2 197.5,126.3 197.8,126.5 198,126.8 198.3,127 198.5,127.2 198.8,127.4 199,127.6 199.3,127.8 199.5,128.1 199.8,128.3 200,128.6 200.3,128.8 200.5,129.1 200.8,129.3 201,129.6 201.3,129.9 201.5,130.1 201.8,130.4 202,130.7 202.3,131 202.5,131.3 202.8,131.6 203,131.9 203.3,132.2 203.5,132.5 203.8,132.8 204,133.2 204.3,133.5 204.5,133.9 204.8,134.2 205,134.5 205.3,134.9 205.5,135.3 205.8,135.6 206,136 206.3,136.4 206.5,136.8 206.8,137.2 207,137.5 207.3,137.9 207.5,138.4 207.8,138.8 208,139.2 208.3,139.6 208.5,140 208.8,140.5 209,140.9 209.3,141.4 209.5,141.8 209.8,142.3 210,142.7 210.3,143.2 210.5,143.7 210.8,144.2 211,144.7 211.3,145.2 211.5,145.7 211.8,146.2 212,146.7 212.3,147.2 212.5,147.7 212.8,148.3 213,148.8 213.3,149.3 213.5,149.9 213.8,150.4 214,151 214.3,151.6 214.5,152.2 214.8,152.7 215,153.3 215.3,153.9 215.5,154.5 215.8,155.1 216,155.8 216.3,156.4 216.5,157 216.8,157.6 217,158.3 217.3,158.9 217.5,159.6 217.8,160.2 218,160.9 218.3,161.6 218.5,162.3 218.8,163 219,163.7 219.3,164.4 219.5,165.1 219.8,165.8 220,166.5 220.3,167.2 220.5,168 220.8,168.7 221,169.5 221.3,170.2 221.5,171 221.8,171.8 222,172.5 222.3,173.3 222.5,174.1 222.8,174.9 223,175.7 223.3,176.5 223.5,177.4 223.8,178.2 224,179 224.3,179.9 224.5,180.7 224.8,181.6 225,182.5 225.3,183.3 225.5,184.2 225.8,185.1 226,186 226.3,186.9 226.5,187.8 226.8,188.7 227,189.7 227.3,190.6 227.5,191.5 227.8,192.5 228,193.4 228.3,194.4 228.5,195.4 228.8,196.4 229,197.3 229.3,198.3 229.5,199.3 229.8,200.4 230,201.4 230.3,202.4 230.5,203.4 230.8,204.5 231,205.5 231.3,206.6 231.5,207.7 231.8,208.7 232,209.8 232.3,210.9 232.5,212 232.8,213.1 233,214.2 233.3,215.3 233.5,216.5 233.8,217.6 234,218.8 234.3,219.9 234.5,221.1 234.8,222.3 235,223.4 235.3,224.6 235.5,225.8 235.8,227 236,228.3 236.3,229.5 236.5,230.7 236.8,231.9 237,233.2 237.3,234.4 237.5,235.7 237.8,237 238,238.3 238.3,239.6 238.5,240.9 238.8,242.2 239,243.5 239.3,244.8 239.5,246.2 239.8,247.5 240,248.8 240.3,250.2 240.5,251.6 240.8,253 241,254.3 241.3,255.7 241.5,257.1 241.8,258.6 242,260 242.3,261.4 242.5,262.9 242.8,264.3 243,265.8 243.3,267.2 243.5,268.7 243.8,270.2 244,271.7 244.2,273" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="46.5,27.1 53,36.2 43.2,37.8" fill="currentColor"/>
  <polygon points="245.5,280.9 239,271.8 248.8,270.2" fill="currentColor"/>
  <text x="230" y="250" font-size="13" fill="currentColor" font-style="italic">f</text>
</svg>
</div>

**Solution.** Observe the graph of $f$. The graph attains a local maximum at
$x=1$ because it is the highest point in an open interval around $x=1$. The
local maximum is the $y$-coordinate at $x=1$, which is $2$.

The graph attains a local minimum at $x=-1$ because it is the lowest point in
an open interval around $x=-1$. The local minimum is the $y$-coordinate at
$x=-1$, which is $-2$.

## Analyzing the toolkit functions for increasing or decreasing intervals

We will now return to our toolkit functions and discuss their graphical
behavior. Their graphs appear in the toolkit library in *Domain and Range*.

| Function | Increasing/decreasing |
| :--- | :--- |
| Constant function, $f(x)=c$ | Neither increasing nor decreasing |
| Identity function, $f(x)=x$ | Increasing |
| Quadratic function, $f(x)=x^2$ | Increasing on $(0,\infty)$; decreasing on $(-\infty,0)$; minimum at $x=0$ |
| Cubic function, $f(x)=x^3$ | Increasing |
| Reciprocal, $f(x)=\tfrac{1}{x}$ | Decreasing on $(-\infty,0)\cup(0,\infty)$ |
| Reciprocal squared, $f(x)=\tfrac{1}{x^2}$ | Increasing on $(-\infty,0)$; decreasing on $(0,\infty)$ |
| Cube root, $f(x)=\sqrt[3]{x}$ | Increasing |
| Square root, $f(x)=\sqrt{x}$ | Increasing on $(0,\infty)$ |
| Absolute value, $f(x)=\lvert x\rvert$ | Increasing on $(0,\infty)$; decreasing on $(-\infty,0)$ |

## Using a graph to locate the absolute maximum and absolute minimum

There is a difference between locating the highest and lowest points on a
graph in a region around an open interval (locally) and locating the highest
and lowest points on the graph for the entire domain. The $y$-coordinates
(output) at the highest and lowest points are called the **absolute maximum**
and **absolute minimum**, respectively.

To locate absolute maxima and minima from a graph, we need to observe the
graph to determine where the graph attains its highest and lowest points on
the domain of the function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals x squared minus 2 on the closed interval from −1 to 2. A solid point at (−1, −1) begins the curve, its absolute minimum is the solid point (0, −2), and its absolute maximum is the solid point (2, 2).","xMin":-2,"xMax":3,"yMin":-3,"yMax":3,"unit":34,"tickLabels":true,"quadratics":[{"a":1,"b":0,"c":-2,"from":-1,"to":2,"arrows":false}],"points":[{"at":[-1,-1]},{"at":[0,-2]},{"at":[2,2]}],"texts":[{"at":[1.1,1.5],"text":"f","italic":true}]}'>
<svg role="img" aria-label="The graph of f of x equals x squared minus 2 on the closed interval from −1 to 2. A solid point at (−1, −1) begins the curve, its absolute minimum is the solid point (0, −2), and its absolute maximum is the solid point (2, 2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 256" width="222" height="256" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="230" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="60" y1="230" x2="60" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="128" y1="230" x2="128" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="162" y1="230" x2="162" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="230" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="196" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="196" x2="196" y2="196" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="196" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="196" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="196" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="196" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="128" x2="198" y2="128" stroke="currentColor" stroke-width="1"/>
  <line x1="94" y1="24" x2="94" y2="232" stroke="currentColor" stroke-width="1"/>
  <polygon points="208,128 198,133 198,123" fill="currentColor"/>
  <polygon points="94,14 99,24 89,24" fill="currentColor"/>
  <polygon points="14,128 24,123 24,133" fill="currentColor"/>
  <polygon points="94,242 89,232 99,232" fill="currentColor"/>
  <text x="206" y="120" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="102" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="125" x2="26" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="143" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="60" y1="125" x2="60" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="143" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="128" y1="125" x2="128" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="143" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="162" y1="125" x2="162" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="162" y="143" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="196" y1="125" x2="196" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="143" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="91" y1="230" x2="97" y2="230" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="234" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="91" y1="196" x2="97" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="200" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="91" y1="162" x2="97" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="166" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="91" y1="94" x2="97" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="98" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="91" y1="60" x2="97" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="64" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="91" y1="26" x2="97" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="30" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <polyline points="60,162 60.3,162.5 60.5,163 60.8,163.5 61,164 61.3,164.5 61.5,164.9 61.8,165.4 62,165.9 62.3,166.4 62.5,166.8 62.8,167.3 63,167.7 63.3,168.2 63.5,168.6 63.8,169.1 64,169.5 64.3,170 64.5,170.4 64.8,170.8 65,171.3 65.3,171.7 65.5,172.1 65.8,172.5 66,172.9 66.3,173.4 66.5,173.8 66.8,174.2 67,174.6 67.3,175 67.5,175.3 67.8,175.7 68,176.1 68.3,176.5 68.5,176.9 68.8,177.2 69,177.6 69.3,178 69.5,178.3 69.8,178.7 70,179.1 70.3,179.4 70.5,179.8 70.8,180.1 71,180.4 71.3,180.8 71.5,181.1 71.8,181.4 72,181.8 72.3,182.1 72.5,182.4 72.8,182.7 73,183 73.3,183.3 73.5,183.6 73.8,183.9 74,184.2 74.3,184.5 74.5,184.8 74.8,185.1 75,185.4 75.3,185.7 75.5,185.9 75.8,186.2 76,186.5 76.3,186.7 76.5,187 76.8,187.2 77,187.5 77.3,187.7 77.5,188 77.8,188.2 78,188.5 78.3,188.7 78.5,188.9 78.8,189.2 79,189.4 79.3,189.6 79.5,189.8 79.8,190 80,190.2 80.3,190.4 80.5,190.6 80.8,190.8 81,191 81.3,191.2 81.5,191.4 81.8,191.6 82,191.8 82.3,191.9 82.5,192.1 82.8,192.3 83,192.4 83.3,192.6 83.5,192.8 83.8,192.9 84,193.1 84.3,193.2 84.5,193.3 84.8,193.5 85,193.6 85.3,193.7 85.5,193.9 85.8,194 86,194.1 86.3,194.2 86.5,194.3 86.8,194.5 87,194.6 87.3,194.7 87.5,194.8 87.8,194.9 88,194.9 88.3,195 88.5,195.1 88.8,195.2 89,195.3 89.3,195.3 89.5,195.4 89.8,195.5 90,195.5 90.3,195.6 90.5,195.6 90.8,195.7 91,195.7 91.3,195.8 91.5,195.8 91.8,195.9 92,195.9 92.3,195.9 92.5,195.9 92.8,196 93,196 93.3,196 93.5,196 93.8,196 94,196 94.3,196 94.5,196 94.8,196 95,196 95.3,196 95.5,195.9 95.8,195.9 96,195.9 96.3,195.9 96.5,195.8 96.8,195.8 97,195.7 97.3,195.7 97.5,195.6 97.8,195.6 98,195.5 98.3,195.5 98.5,195.4 98.8,195.3 99,195.3 99.3,195.2 99.5,195.1 99.8,195 100,194.9 100.3,194.9 100.5,194.8 100.8,194.7 101,194.6 101.3,194.5 101.5,194.3 101.8,194.2 102,194.1 102.3,194 102.5,193.9 102.8,193.7 103,193.6 103.3,193.5 103.5,193.3 103.8,193.2 104,193.1 104.3,192.9 104.5,192.8 104.8,192.6 105,192.4 105.3,192.3 105.5,192.1 105.8,191.9 106,191.8 106.3,191.6 106.5,191.4 106.8,191.2 107,191 107.3,190.8 107.5,190.6 107.8,190.4 108,190.2 108.3,190 108.5,189.8 108.8,189.6 109,189.4 109.3,189.2 109.5,188.9 109.8,188.7 110,188.5 110.3,188.2 110.5,188 110.8,187.7 111,187.5 111.3,187.2 111.5,187 111.8,186.7 112,186.5 112.3,186.2 112.5,185.9 112.8,185.7 113,185.4 113.3,185.1 113.5,184.8 113.8,184.5 114,184.2 114.3,183.9 114.5,183.6 114.8,183.3 115,183 115.3,182.7 115.5,182.4 115.8,182.1 116,181.8 116.3,181.4 116.5,181.1 116.8,180.8 117,180.4 117.3,180.1 117.5,179.8 117.8,179.4 118,179.1 118.3,178.7 118.5,178.3 118.8,178 119,177.6 119.3,177.2 119.5,176.9 119.8,176.5 120,176.1 120.3,175.7 120.5,175.3 120.8,175 121,174.6 121.3,174.2 121.5,173.8 121.8,173.4 122,172.9 122.3,172.5 122.5,172.1 122.8,171.7 123,171.3 123.3,170.8 123.5,170.4 123.8,170 124,169.5 124.3,169.1 124.5,168.6 124.8,168.2 125,167.7 125.3,167.3 125.5,166.8 125.8,166.4 126,165.9 126.3,165.4 126.5,164.9 126.8,164.5 127,164 127.3,163.5 127.5,163 127.8,162.5 128,162 128.3,161.5 128.5,161 128.8,160.5 129,160 129.3,159.5 129.5,158.9 129.8,158.4 130,157.9 130.3,157.4 130.5,156.8 130.8,156.3 131,155.7 131.3,155.2 131.5,154.6 131.8,154.1 132,153.5 132.3,153 132.5,152.4 132.8,151.8 133,151.3 133.3,150.7 133.5,150.1 133.8,149.5 134,148.9 134.3,148.4 134.5,147.8 134.8,147.2 135,146.6 135.3,146 135.5,145.3 135.8,144.7 136,144.1 136.3,143.5 136.5,142.9 136.8,142.2 137,141.6 137.3,141 137.5,140.3 137.8,139.7 138,139.1 138.3,138.4 138.5,137.8 138.8,137.1 139,136.4 139.3,135.8 139.5,135.1 139.8,134.4 140,133.8 140.3,133.1 140.5,132.4 140.8,131.7 141,131 141.3,130.3 141.5,129.6 141.8,128.9 142,128.2 142.3,127.5 142.5,126.8 142.8,126.1 143,125.4 143.3,124.7 143.5,123.9 143.8,123.2 144,122.5 144.3,121.7 144.5,121 144.8,120.2 145,119.5 145.3,118.7 145.5,118 145.8,117.2 146,116.5 146.3,115.7 146.5,114.9 146.8,114.2 147,113.4 147.3,112.6 147.5,111.8 147.8,111 148,110.2 148.3,109.4 148.5,108.6 148.8,107.8 149,107 149.3,106.2 149.5,105.4 149.8,104.6 150,103.8 150.3,102.9 150.5,102.1 150.8,101.3 151,100.4 151.3,99.6 151.5,98.8 151.8,97.9 152,97.1 152.3,96.2 152.5,95.3 152.8,94.5 153,93.6 153.3,92.7 153.5,91.9 153.8,91 154,90.1 154.3,89.2 154.5,88.3 154.8,87.5 155,86.6 155.3,85.7 155.5,84.8 155.8,83.9 156,82.9 156.3,82 156.5,81.1 156.8,80.2 157,79.3 157.3,78.3 157.5,77.4 157.8,76.5 158,75.5 158.3,74.6 158.5,73.6 158.8,72.7 159,71.7 159.3,70.8 159.5,69.8 159.8,68.9 160,67.9 160.3,66.9 160.5,65.9 160.8,65 161,64 161.3,63 161.5,62 161.8,61 162,60" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="60" cy="162" r="4" fill="currentColor"/>
  <circle cx="94" cy="196" r="4" fill="currentColor"/>
  <circle cx="162" cy="60" r="4" fill="currentColor"/>
  <text x="131.4" y="77" font-size="13" fill="currentColor" font-style="italic">f</text>
</svg>
</div>

For this function, the absolute maximum is $f(2)=2$ and the absolute minimum
is $f(0)=-2$.

Not every function has an absolute maximum or minimum value. The toolkit
function $f(x)=x^3$ is one such function.

{{< callout type="info" >}}
  **Absolute maxima and minima.**

  The **absolute maximum** of $f$ at $x=c$ is $f(c)$ where $f(c)\ge f(x)$ for
  all $x$ in the domain of $f$.

  The **absolute minimum** of $f$ at $x=d$ is $f(d)$ where $f(d)\le f(x)$ for
  all $x$ in the domain of $f$.
{{< /callout >}}

**Example.** For the function $f$ shown below, find all absolute maxima and
minima.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f on a closed domain. It begins at a solid point near (−2.4, 13), rises to a high point of 16 at x = −2, falls to a dip near the origin, rises to a second high point of 16 at x = 2, then falls steeply to a solid point at (3, −10).","xMin":-4,"xMax":4,"yMin":-16,"yMax":20,"xUnit":30,"yUnit":6.5,"xGridStep":1,"yGridStep":4,"tickLabels":true,"xTickStep":1,"yTickStep":4,"polynomials":[{"coeffs":[-0.64,0,8.32,0,-1.04],"from":-2.4,"to":3,"arrows":false}],"points":[{"at":[-2.4,12.94]},{"at":[3,-10]}],"texts":[{"at":[2.3,6],"text":"f","italic":true}]}'>
<svg role="img" aria-label="The graph of f on a closed domain. It begins at a solid point near (−2.4, 13), rises to a high point of 16 at x = −2, falls to a dip near the origin, rises to a second high point of 16 at x = 2, then falls steeply to a solid point at (3, −10)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 286" width="292" height="286" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="260" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="260" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="260" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="260" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="260" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="260" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="260" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="260" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="260" x2="266" y2="260" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="266" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="266" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="266" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="266" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="266" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="266" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="266" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="156" x2="268" y2="156" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="262" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,156 268,161 268,151" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,156 24,151 24,161" fill="currentColor"/>
  <polygon points="146,272 141,262 151,262" fill="currentColor"/>
  <text x="276" y="148" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="153" x2="26" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="171" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="56" y1="153" x2="56" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="171" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="86" y1="153" x2="86" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="171" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="116" y1="153" x2="116" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="171" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="176" y1="153" x2="176" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="171" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="206" y1="153" x2="206" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="171" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="236" y1="153" x2="236" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="171" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="266" y1="153" x2="266" y2="159" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="171" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="143" y1="260" x2="149" y2="260" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="264" font-size="11" fill="currentColor" text-anchor="end">−16</text>
  <line x1="143" y1="234" x2="149" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="238" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="143" y1="208" x2="149" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="212" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="143" y1="182" x2="149" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="186" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="130" x2="149" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="134" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="104" x2="149" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="108" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="143" y1="78" x2="149" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="82" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="143" y1="52" x2="149" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="56" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <polyline points="74,72.9 74.3,72 74.5,71.1 74.8,70.2 75,69.3 75.3,68.5 75.5,67.7 75.8,66.9 76,66.1 76.3,65.4 76.5,64.6 76.8,63.9 77,63.2 77.3,62.6 77.5,62 77.8,61.3 78,60.8 78.3,60.2 78.5,59.6 78.8,59.1 79,58.6 79.3,58.1 79.5,57.6 79.8,57.2 80,56.8 80.3,56.4 80.5,56 80.8,55.6 81,55.3 81.3,54.9 81.5,54.6 81.8,54.3 82,54.1 82.3,53.8 82.5,53.6 82.8,53.3 83,53.1 83.3,53 83.5,52.8 83.8,52.6 84,52.5 84.3,52.4 84.5,52.3 84.8,52.2 85,52.1 85.3,52.1 85.5,52 85.8,52 86,52 86.3,52 86.5,52 86.8,52.1 87,52.1 87.3,52.2 87.5,52.3 87.8,52.4 88,52.5 88.3,52.6 88.5,52.7 88.8,52.9 89,53 89.3,53.2 89.5,53.4 89.8,53.6 90,53.8 90.3,54 90.5,54.3 90.8,54.5 91,54.8 91.3,55 91.5,55.3 91.8,55.6 92,55.9 92.3,56.2 92.5,56.5 92.8,56.9 93,57.2 93.3,57.6 93.5,57.9 93.8,58.3 94,58.7 94.3,59.1 94.5,59.5 94.8,59.9 95,60.3 95.3,60.8 95.5,61.2 95.8,61.6 96,62.1 96.3,62.6 96.5,63 96.8,63.5 97,64 97.3,64.5 97.5,65 97.8,65.5 98,66 98.3,66.5 98.5,67.1 98.8,67.6 99,68.1 99.3,68.7 99.5,69.3 99.8,69.8 100,70.4 100.3,71 100.5,71.5 100.8,72.1 101,72.7 101.3,73.3 101.5,73.9 101.8,74.5 102,75.1 102.3,75.7 102.5,76.3 102.8,77 103,77.6 103.3,78.2 103.5,78.9 103.8,79.5 104,80.1 104.3,80.8 104.5,81.4 104.8,82.1 105,82.7 105.3,83.4 105.5,84.1 105.8,84.7 106,85.4 106.3,86.1 106.5,86.7 106.8,87.4 107,88.1 107.3,88.7 107.5,89.4 107.8,90.1 108,90.8 108.3,91.5 108.5,92.2 108.8,92.9 109,93.5 109.3,94.2 109.5,94.9 109.8,95.6 110,96.3 110.3,97 110.5,97.7 110.8,98.4 111,99.1 111.3,99.8 111.5,100.5 111.8,101.2 112,101.8 112.3,102.5 112.5,103.2 112.8,103.9 113,104.6 113.3,105.3 113.5,106 113.8,106.7 114,107.4 114.3,108.1 114.5,108.8 114.8,109.4 115,110.1 115.3,110.8 115.5,111.5 115.8,112.2 116,112.8 116.3,113.5 116.5,114.2 116.8,114.9 117,115.5 117.3,116.2 117.5,116.9 117.8,117.5 118,118.2 118.3,118.8 118.5,119.5 118.8,120.1 119,120.8 119.3,121.4 119.5,122.1 119.8,122.7 120,123.4 120.3,124 120.5,124.6 120.8,125.2 121,125.9 121.3,126.5 121.5,127.1 121.8,127.7 122,128.3 122.3,128.9 122.5,129.5 122.8,130.1 123,130.7 123.3,131.3 123.5,131.9 123.8,132.5 124,133 124.3,133.6 124.5,134.2 124.8,134.7 125,135.3 125.3,135.8 125.5,136.4 125.8,136.9 126,137.5 126.3,138 126.5,138.5 126.8,139 127,139.6 127.3,140.1 127.5,140.6 127.8,141.1 128,141.6 128.3,142.1 128.5,142.5 128.8,143 129,143.5 129.3,144 129.5,144.4 129.8,144.9 130,145.3 130.3,145.8 130.5,146.2 130.8,146.6 131,147.1 131.3,147.5 131.5,147.9 131.8,148.3 132,148.7 132.3,149.1 132.5,149.5 132.8,149.9 133,150.2 133.3,150.6 133.5,151 133.8,151.3 134,151.7 134.3,152 134.5,152.4 134.8,152.7 135,153 135.3,153.3 135.5,153.6 135.8,153.9 136,154.2 136.3,154.5 136.5,154.8 136.8,155.1 137,155.3 137.3,155.6 137.5,155.9 137.8,156.1 138,156.3 138.3,156.6 138.5,156.8 138.8,157 139,157.2 139.3,157.4 139.5,157.6 139.8,157.8 140,158 140.3,158.2 140.5,158.3 140.8,158.5 141,158.7 141.3,158.8 141.5,158.9 141.8,159.1 142,159.2 142.3,159.3 142.5,159.4 142.8,159.5 143,159.6 143.3,159.7 143.5,159.8 143.8,159.9 144,159.9 144.3,160 144.5,160 144.8,160.1 145,160.1 145.3,160.1 145.5,160.1 145.8,160.2 146,160.2 146.3,160.2 146.5,160.1 146.8,160.1 147,160.1 147.3,160.1 147.5,160 147.8,160 148,159.9 148.3,159.9 148.5,159.8 148.8,159.7 149,159.6 149.3,159.5 149.5,159.4 149.8,159.3 150,159.2 150.3,159.1 150.5,158.9 150.8,158.8 151,158.7 151.3,158.5 151.5,158.3 151.8,158.2 152,158 152.3,157.8 152.5,157.6 152.8,157.4 153,157.2 153.3,157 153.5,156.8 153.8,156.6 154,156.3 154.3,156.1 154.5,155.9 154.8,155.6 155,155.3 155.3,155.1 155.5,154.8 155.8,154.5 156,154.2 156.3,153.9 156.5,153.6 156.8,153.3 157,153 157.3,152.7 157.5,152.4 157.8,152 158,151.7 158.3,151.3 158.5,151 158.8,150.6 159,150.2 159.3,149.9 159.5,149.5 159.8,149.1 160,148.7 160.3,148.3 160.5,147.9 160.8,147.5 161,147.1 161.3,146.6 161.5,146.2 161.8,145.8 162,145.3 162.3,144.9 162.5,144.4 162.8,144 163,143.5 163.3,143 163.5,142.5 163.8,142.1 164,141.6 164.3,141.1 164.5,140.6 164.8,140.1 165,139.6 165.3,139 165.5,138.5 165.8,138 166,137.5 166.3,136.9 166.5,136.4 166.8,135.8 167,135.3 167.3,134.7 167.5,134.2 167.8,133.6 168,133 168.3,132.5 168.5,131.9 168.8,131.3 169,130.7 169.3,130.1 169.5,129.5 169.8,128.9 170,128.3 170.3,127.7 170.5,127.1 170.8,126.5 171,125.9 171.3,125.2 171.5,124.6 171.8,124 172,123.4 172.3,122.7 172.5,122.1 172.8,121.4 173,120.8 173.3,120.1 173.5,119.5 173.8,118.8 174,118.2 174.3,117.5 174.5,116.9 174.8,116.2 175,115.5 175.3,114.9 175.5,114.2 175.8,113.5 176,112.8 176.3,112.2 176.5,111.5 176.8,110.8 177,110.1 177.3,109.4 177.5,108.8 177.8,108.1 178,107.4 178.3,106.7 178.5,106 178.8,105.3 179,104.6 179.3,103.9 179.5,103.2 179.8,102.5 180,101.8 180.3,101.2 180.5,100.5 180.8,99.8 181,99.1 181.3,98.4 181.5,97.7 181.8,97 182,96.3 182.3,95.6 182.5,94.9 182.8,94.2 183,93.5 183.3,92.9 183.5,92.2 183.8,91.5 184,90.8 184.3,90.1 184.5,89.4 184.8,88.7 185,88.1 185.3,87.4 185.5,86.7 185.8,86.1 186,85.4 186.3,84.7 186.5,84.1 186.8,83.4 187,82.7 187.3,82.1 187.5,81.4 187.8,80.8 188,80.1 188.3,79.5 188.5,78.9 188.8,78.2 189,77.6 189.3,77 189.5,76.3 189.8,75.7 190,75.1 190.3,74.5 190.5,73.9 190.8,73.3 191,72.7 191.3,72.1 191.5,71.5 191.8,71 192,70.4 192.3,69.8 192.5,69.3 192.8,68.7 193,68.1 193.3,67.6 193.5,67.1 193.8,66.5 194,66 194.3,65.5 194.5,65 194.8,64.5 195,64 195.3,63.5 195.5,63 195.8,62.6 196,62.1 196.3,61.6 196.5,61.2 196.8,60.8 197,60.3 197.3,59.9 197.5,59.5 197.8,59.1 198,58.7 198.3,58.3 198.5,57.9 198.8,57.6 199,57.2 199.3,56.9 199.5,56.5 199.8,56.2 200,55.9 200.3,55.6 200.5,55.3 200.8,55 201,54.8 201.3,54.5 201.5,54.3 201.8,54 202,53.8 202.3,53.6 202.5,53.4 202.8,53.2 203,53 203.3,52.9 203.5,52.7 203.8,52.6 204,52.5 204.3,52.4 204.5,52.3 204.8,52.2 205,52.1 205.3,52.1 205.5,52 205.8,52 206,52 206.3,52 206.5,52 206.8,52.1 207,52.1 207.3,52.2 207.5,52.3 207.8,52.4 208,52.5 208.3,52.6 208.5,52.8 208.8,53 209,53.1 209.3,53.3 209.5,53.6 209.8,53.8 210,54.1 210.3,54.3 210.5,54.6 210.8,54.9 211,55.3 211.3,55.6 211.5,56 211.8,56.4 212,56.8 212.3,57.2 212.5,57.6 212.8,58.1 213,58.6 213.3,59.1 213.5,59.6 213.8,60.2 214,60.8 214.3,61.3 214.5,62 214.8,62.6 215,63.2 215.3,63.9 215.5,64.6 215.8,65.4 216,66.1 216.3,66.9 216.5,67.7 216.8,68.5 217,69.3 217.3,70.2 217.5,71.1 217.8,72 218,72.9 218.3,73.9 218.5,74.9 218.8,75.9 219,76.9 219.3,78 219.5,79.1 219.8,80.2 220,81.4 220.3,82.5 220.5,83.7 220.8,85 221,86.2 221.3,87.5 221.5,88.8 221.8,90.2 222,91.5 222.3,92.9 222.5,94.3 222.8,95.8 223,97.3 223.3,98.8 223.5,100.3 223.8,101.9 224,103.5 224.3,105.1 224.5,106.8 224.8,108.5 225,110.2 225.3,112 225.5,113.8 225.8,115.6 226,117.4 226.3,119.3 226.5,121.2 226.8,123.2 227,125.2 227.3,127.2 227.5,129.2 227.8,131.3 228,133.4 228.3,135.6 228.5,137.8 228.8,140 229,142.3 229.3,144.6 229.5,146.9 229.8,149.3 230,151.7 230.3,154.1 230.5,156.6 230.8,159.1 231,161.7 231.3,164.3 231.5,166.9 231.8,169.6 232,172.3 232.3,175 232.5,177.8 232.8,180.6 233,183.5 233.3,186.4 233.5,189.3 233.8,192.3 234,195.3 234.3,198.4 234.5,201.5 234.8,204.6 235,207.8 235.3,211.1 235.5,214.3 235.8,217.6 236,221" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="74" cy="71.9" r="4" fill="currentColor"/>
  <circle cx="236" cy="221" r="4" fill="currentColor"/>
  <text x="215" y="117" font-size="13" fill="currentColor" font-style="italic">f</text>
</svg>
</div>

**Solution.** Observe the graph of $f$. The graph attains an absolute maximum
in two locations, $x=-2$ and $x=2$, because at these locations, the graph
attains its highest point on the domain of the function. The absolute maximum
is the $y$-coordinate at $x=-2$ and $x=2$, which is $16$.

The graph attains an absolute minimum at $x=3$, because it is the lowest
point on the domain of the function's graph. The absolute minimum is the
$y$-coordinate at $x=3$, which is $-10$.

## Key equations

| Average rate of change | $\tfrac{\Delta y}{\Delta x}=\tfrac{f(x_2)-f(x_1)}{x_2-x_1}$ |
| :--- | :--- |

## Key concepts

- A rate of change relates a change in an output quantity to a change in an
  input quantity. The average rate of change is determined using only the
  beginning and ending data.
- Identifying points that mark the interval on a graph can be used to find
  the average rate of change.
- Comparing pairs of input and output values in a table can also be used to
  find the average rate of change.
- An average rate of change can also be computed by determining the function
  values at the endpoints of an interval described by a formula.
- The average rate of change can sometimes be determined as an expression.
- A function is increasing where its rate of change is positive and
  decreasing where its rate of change is negative.
- A local maximum is where a function changes from increasing to decreasing
  and has an output value larger (more positive or less negative) than output
  values at neighboring input values.
- A local minimum is where the function changes from decreasing to increasing
  (as the input increases) and has an output value smaller (more negative or
  less positive) than output values at neighboring input values.
- Minima and maxima are also called extrema.
- We can find local extrema from a graph.
- The highest and lowest points on a graph indicate the maxima and minima.

## Key terms

**rate of change** — the change of an output quantity relative to the change
of the input quantity. **average rate of change** — the difference in the
output values of a function found for two values of the input divided by the
difference between the inputs. **increasing function** — a function is
increasing in some open interval if $f(b)>f(a)$ for any two input values $a$
and $b$ in the given interval where $b>a$. **decreasing function** — a
function is decreasing in some open interval if $f(b)<f(a)$ for any two input
values $a$ and $b$ in the given interval where $b>a$. **local maximum** — a
value of the input where a function changes from increasing to decreasing as
the input value increases. **local minimum** — a value of the input where a
function changes from decreasing to increasing as the input value increases.
**local extrema** — collectively, all of a function's local maxima and
minima. **absolute maximum** — the greatest value of a function over an
interval. **absolute minimum** — the lowest value of a function over an
interval.

---

<small>This section is adapted from [Precalculus 2e, Section 1.3: Rates of Change and Behavior of Graphs](https://openstax.org/books/precalculus-2e/pages/1-3-rates-of-change-and-behavior-of-graphs) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from an explicit formula — the source's unlabelled illustrative curves were fitted first, so $g(t)=\tfrac{1}{2}t^{2}-\tfrac{3}{2}t+2$, $p(t)$ is the quartic whose extrema fall exactly at $t=1,3,4$, and the closed-domain example is $-1.04x^{4}+8.32x^{2}-0.64$; presented the gasoline and distance tables and the three toolkit increasing/decreasing tables as Markdown tables, referring to the toolkit graphs published in Section 1.2 rather than repeating them; omitted the pair of graphing-calculator screen images, keeping the estimates they illustrate in the prose; omitted the media links and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is interval notation, which cannot be graded as free-response math.</small>
