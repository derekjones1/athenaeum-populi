---
title: Linear Functions
description: >-
  Representing a linear function in words, function notation, tables, and
  graphs; deciding whether a linear function is increasing, decreasing, or
  constant; calculating and interpreting slope; the point-slope form of a
  line; and modeling real-world problems — adapted from OpenStax Precalculus
  2e, Section 2.1.
source_section: "2.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Represent a linear function
- Determine whether a linear function is increasing, decreasing, or constant
- Calculate and interpret slope
- Write the point-slope form of an equation
- Write and interpret a linear function
{{< /callout >}}

Just as with the growth of a bamboo plant, there are many situations that
involve constant change over time. Consider, for example, the first
commercial maglev train in the world, the Shanghai MagLev Train. It carries
passengers comfortably for a 30-kilometer trip from the airport to the subway
station in only eight minutes.

Suppose a maglev train were to travel a long distance, and that the train
maintains a constant speed of 83 meters per second for a period of time once
it is 250 meters from the station. How can we analyze the train's distance
from the station as a function of time? In this section, we will investigate
a kind of function that is useful for this purpose, and use it to investigate
real-world situations such as the train's distance from the station at a
given point in time.

## Representing linear functions

The function describing the train's motion is a **linear function**, which is
defined as a function with a constant rate of change, that is, a polynomial
of degree 1. There are several ways to represent a linear function, including
word form, function notation, tabular form, and graphical form. We will
describe the train's motion as a function using each method.

### Representing a linear function in word form

Let's begin by describing the linear function in words. For the train problem
we just considered, the following word sentence may be used to describe the
function relationship.

- *The train's distance from the station is a function of the time during
  which the train moves at a constant speed plus its original distance from
  the station when it began moving at constant speed.*

The speed is the rate of change. Recall that a rate of change is a measure of
how quickly the dependent variable changes with respect to the independent
variable. The rate of change for this example is constant, which means that
it is the same for each input value. As the time (input) increases by 1
second, the corresponding distance (output) increases by 83 meters. The train
began moving at this constant speed at a distance of 250 meters from the
station.

### Representing a linear function in function notation

Another approach to representing linear functions is by using function
notation. One example of function notation is an equation written in the form
known as the **slope-intercept form** of a line, where $x$ is the input
value, $m$ is the rate of change, and $b$ is the initial value of the
dependent variable.

$$
\begin{array}{lrcl}
\text{Equation form} & y &=& mx+b \\[4pt]
\text{Function notation} & f(x) &=& mx+b
\end{array}
$$

In the example of the train, we might use the notation $D(t)$ in which the
total distance $D$ is a function of the time $t$. The rate, $m$, is 83 meters
per second. The initial value of the dependent variable $b$ is the original
distance from the station, 250 meters. We can write a generalized equation to
represent the motion of the train.

$$D(t)=83t+250$$

### Representing a linear function in tabular form

A third method of representing a linear function is through the use of a
table. The relationship between the distance from the station and the time is
represented in the table below. From the table, we can see that the distance
changes by 83 meters for every 1 second increase in time.

| $t$ (seconds) | 0 | 1 | 2 | 3 |
| :--- | ---: | ---: | ---: | ---: |
| $D(t)$ (meters) | 250 | 333 | 416 | 499 |

{{< callout type="info" >}}
  **Q&A.** *Can the input in the previous example be any real number?*

  No. The input represents time, so while nonnegative rational and irrational
  numbers are possible, negative real numbers are not possible for this
  example. The input consists of non-negative real numbers.
{{< /callout >}}

### Representing a linear function in graphical form

Another way to represent linear functions is visually, using a graph. We can
use the function relationship from above, $D(t)=83t+250$, to draw a graph,
represented below. Notice the graph is a line. When we plot a linear
function, the graph is always a line.

The rate of change, which is constant, determines the slant, or **slope** of
the line. The point at which the input value is zero is the vertical
intercept, or **$y$-intercept**, of the line. We can see from the graph that
the $y$-intercept in the train example we just saw is $(0,250)$ and
represents the distance of the train from the station when it began moving at
a constant speed.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of D of t equals 83t plus 250. A ray starts at the vertical intercept (0, 250) and rises to the right, reaching about 500 meters at 3 seconds. The horizontal axis is time in seconds, labelled 1 through 5, and the vertical axis is distance in meters, labelled 100 through 500.","xMin":0,"xMax":5,"yMin":0,"yMax":550,"xUnit":40,"yUnit":0.4,"grid":false,"xGridStep":1,"yGridStep":50,"xTickStep":1,"yTickStep":100,"tickLabels":true,"xLabel":"Time (s)","yLabel":"Distance (m)","segments":[{"from":[0,250],"to":[3.3,523.9],"arrows":"end"}]}'>
<svg role="img" aria-label="The graph of D of t equals 83t plus 250. A ray starts at the vertical intercept (0, 250) and rises to the right, reaching about 500 meters at 3 seconds. The horizontal axis is time in seconds, labelled 1 through 5, and the vertical axis is distance in meters, labelled 100 through 500." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 272" width="252" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="228" y2="246" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="246" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,246 228,251 228,241" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="236" y="238" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">Time (s)</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">Distance (m)</text>
  <line x1="66" y1="243" x2="66" y2="249" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="261" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="106" y1="243" x2="106" y2="249" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="261" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="146" y1="243" x2="146" y2="249" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="261" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="186" y1="243" x2="186" y2="249" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="261" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="226" y1="243" x2="226" y2="249" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="261" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="23" y1="206" x2="29" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="210" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="23" y1="166" x2="29" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="170" font-size="11" fill="currentColor" text-anchor="end">200</text>
  <line x1="23" y1="126" x2="29" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="130" font-size="11" fill="currentColor" text-anchor="end">300</text>
  <line x1="23" y1="86" x2="29" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="90" font-size="11" fill="currentColor" text-anchor="end">400</text>
  <line x1="23" y1="46" x2="29" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="50" font-size="11" fill="currentColor" text-anchor="end">500</text>
  <line x1="26" y1="146" x2="150.3" y2="42.8" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="158,36.4 153.5,46.7 147.1,39" fill="currentColor"/>
</svg>
</div>

Notice that the graph of the train example is restricted, but this is not
always the case. Consider the graph of the line $f(x)=2x+1$. Ask yourself
what numbers can be input to the function, that is, what is the domain of the
function? The domain is comprised of all real numbers because any number may
be doubled, and then have one added to the product.

{{< callout type="info" >}}
  **Linear function.** A **linear function** is a function whose graph is a
  line. Linear functions can be written in the slope-intercept form of a line

  $$f(x)=mx+b$$

  where $b$ is the initial or starting value of the function (when input,
  $x=0$), and $m$ is the constant rate of change, or **slope** of the
  function. The **$y$-intercept** is at $(0,b)$.
{{< /callout >}}

**Example.** The pressure, $P$, in pounds per square inch (PSI) on a scuba
diver depends upon her depth below the water surface, $d$, in feet. This
relationship may be modeled by the equation $P(d)=0.434d+14.696$. Restate
this function in words.

**Solution.** To restate the function in words, we need to describe each part
of the equation. The pressure as a function of depth equals four hundred
thirty-four thousandths times depth plus fourteen and six hundred ninety-six
thousandths.

**Analysis.** The initial value, 14.696, is the pressure in PSI on the diver
at a depth of 0 feet, which is the surface of the water. The rate of change,
or slope, is 0.434 PSI per foot. This tells us that the pressure on the diver
increases 0.434 PSI for each foot her depth increases.

## Determining whether a linear function is increasing, decreasing, or constant

The linear functions we used in the two previous examples increased over
time, but not every linear function does. A linear function may be
increasing, decreasing, or constant. For an **increasing function**, as with
the train example, the output values increase as the input values increase.
The graph of an increasing function has a positive slope. A line with a
positive slope slants upward from left to right as in **(a)**. For a
**decreasing function**, the slope is negative. The output values decrease as
the input values increase. A line with a negative slope slants downward from
left to right as in **(b)**. If the function is constant, the output values
are the same for all input values so the slope is zero. A line with a slope
of zero is horizontal as in **(c)**.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel (a): an increasing function. The line labelled f slants upward from left to right, ending in an arrow at the upper right.","xMin":0,"xMax":7,"yMin":0,"yMax":7,"unit":26,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"f(x)","segments":[{"from":[0.1,0.2],"to":[6.4,6.6],"arrows":"end","label":"f"}]}'>
<svg role="img" aria-label="Panel (a): an increasing function. The line labelled f slants upward from left to right, ending in an arrow at the upper right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="210" y2="208" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,208 210,213 210,203" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="218" y="200" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="28.6" y1="202.8" x2="185.4" y2="43.5" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="192.4,36.4 188.9,47 181.8,40" fill="currentColor"/>
  <text x="96.5" y="123.6" font-size="13" fill="currentColor" text-anchor="end">f</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel (b): a decreasing function. The line labelled f slants downward from left to right, ending in an arrow at the lower right.","xMin":0,"xMax":7,"yMin":0,"yMax":7,"unit":26,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"f(x)","segments":[{"from":[0.1,6.6],"to":[6.2,0.3],"arrows":"end","label":"f"}]}'>
<svg role="img" aria-label="Panel (b): a decreasing function. The line labelled f slants downward from left to right, ending in an arrow at the lower right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="210" y2="208" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,208 210,213 210,203" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="218" y="200" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="28.6" y1="36.4" x2="180.2" y2="193" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="187.2,200.2 176.7,196.5 183.8,189.5" fill="currentColor"/>
  <text x="93.9" y="122.3" font-size="13" fill="currentColor" text-anchor="end">f</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Panel (c): a constant function. The horizontal line labelled f runs to the right at a fixed height, ending in an arrow.","xMin":0,"xMax":7,"yMin":0,"yMax":7,"unit":26,"grid":false,"tickLabels":false,"xLabel":"x","yLabel":"f(x)","segments":[{"from":[0.1,4],"to":[6.6,4],"arrows":"end","label":"f"}]}'>
<svg role="img" aria-label="Panel (c): a constant function. The horizontal line labelled f runs to the right at a fixed height, ending in an arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="210" y2="208" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,208 210,213 210,203" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="218" y="200" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="28.6" y1="104" x2="187.6" y2="104" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="197.6,104 187.6,109 187.6,99" fill="currentColor"/>
  <text x="113.1" y="127" font-size="13" fill="currentColor" text-anchor="middle">f</text>
</svg>
</div>

{{< callout type="info" >}}
  **Increasing and decreasing functions.** The slope determines if the
  function is an **increasing linear function**, a **decreasing linear
  function**, or a constant function.

  - $f(x)=mx+b\ \text{is an increasing function if}\ m>0$.
  - $f(x)=mx+b\ \text{is a decreasing function if}\ m<0$.
  - $f(x)=mx+b\ \text{is a constant function if}\ m=0$.
{{< /callout >}}

**Example.** Studies from the early 2010s indicated that teens sent about 60
texts a day, while more recent data indicates much higher messaging rates
among all users, particularly considering the various apps with which people
can communicate. For each of the following scenarios, find the linear
function that describes the relationship between the input value and the
output value. Then, determine whether the graph of the function is
increasing, decreasing, or constant.

1. The total number of texts a teen sends is considered a function of time in
   days. The input is the number of days, and output is the total number of
   texts sent.
2. A person has a limit of 500 texts per month in their data plan. The input
   is the number of days, and output is the total number of texts remaining
   for the month.
3. A person has an unlimited number of texts in their data plan for a cost of
   \$50 per month. The input is the number of days, and output is the total
   cost of texting each month.

**Solution.** Analyze each function.

1. The function can be represented as $f(x)=60x$ where $x$ is the number of
   days. The slope, 60, is positive so the function is increasing. This makes
   sense because the total number of texts increases with each day.
2. The function can be represented as $f(x)=500-60x$ where $x$ is the number
   of days. In this case, the slope is negative so the function is
   decreasing. This makes sense because the number of texts remaining
   decreases each day and this function represents the number of texts
   remaining in the data plan after $x$ days.
3. The cost function can be represented as $f(x)=50$ because the number of
   days does not affect the total cost. The slope is 0 so the function is
   constant.

## Calculating and interpreting slope

In the examples we have seen so far, we have had the slope provided for us.
However, we often need to calculate the **slope** given input and output
values. Given two values for the input, $x_1$ and $x_2$, and two
corresponding values for the output, $y_1$ and $y_2$ — which can be
represented by a set of points, $(x_1,y_1)$ and $(x_2,y_2)$ — we can
calculate the slope $m$, as follows

$$m=\tfrac{\text{change in output (rise)}}{\text{change in input (run)}}=\tfrac{\Delta y}{\Delta x}=\tfrac{y_2-y_1}{x_2-x_1}$$

where $\Delta y$ is the vertical displacement and $\Delta x$ is the
horizontal displacement. Note in function notation two corresponding values
for the output $y_1$ and $y_2$ for the function $f$, $y_1=f(x_1)$ and
$y_2=f(x_2)$, so we could equivalently write

$$m=\tfrac{f(x_2)-f(x_1)}{x_2-x_1}$$

The graph below indicates how the slope of the line between the points,
$(x_1,y_1)$ and $(x_2,y_2)$, is calculated. Recall that the slope measures
steepness. The greater the absolute value of the slope, the steeper the line
is.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The line y = 3x + 2 with the points (1, 5) and (2, 8) marked and labelled (x sub 1, y sub 1) and (x sub 2, y sub 2). A vertical double arrow from (1, 5) to (1, 8) measures y sub 2 minus y sub 1, and a horizontal double arrow from (1, 8) to (2, 8) measures x sub 2 minus x sub 1.","xMin":-3,"xMax":4,"yMin":-1,"yMax":10,"unit":24,"tickLabels":true,"lines":[{"slope":3,"intercept":2}],"segments":[{"from":[1,5],"to":[1,8],"arrows":true},{"from":[1,8],"to":[2,8],"arrows":true},{"from":[-1,7.1],"to":[0.85,6.6],"arrows":"end"},{"from":[-1,9.1],"to":[1.35,8.35],"arrows":"end"}],"points":[{"at":[1,5],"label":"(x₁, y₁)","labelSide":"se"},{"at":[2,8],"label":"(x₂, y₂)","labelSide":"se"}],"texts":[{"at":[-2.95,7.1],"text":"y₂ − y₁","anchor":"start"},{"at":[-2.95,9.1],"text":"x₂ − x₁","anchor":"start"}]}'>
<svg role="img" aria-label="The line y = 3x + 2 with the points (1, 5) and (2, 8) marked and labelled (x sub 1, y sub 1) and (x sub 2, y sub 2). A vertical double arrow from (1, 5) to (1, 8) measures y sub 2 minus y sub 1, and a horizontal double arrow from (1, 8) to (2, 8) measures x sub 2 minus x sub 1." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 316" width="220" height="316" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="290" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="290" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="290" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="290" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="290" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="290" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="290" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="194" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="194" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="194" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="194" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="194" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="194" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="194" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="194" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="194" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="194" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="266" x2="196" y2="266" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="292" stroke="currentColor" stroke-width="1"/>
  <polygon points="206,266 196,271 196,261" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,266 24,261 24,271" fill="currentColor"/>
  <polygon points="98,302 93,292 103,292" fill="currentColor"/>
  <text x="204" y="258" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="263" x2="26" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="281" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="50" y1="263" x2="50" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="281" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="74" y1="263" x2="74" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="281" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="122" y1="263" x2="122" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="281" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="263" x2="146" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="281" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="263" x2="170" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="281" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="194" y1="263" x2="194" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="281" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="290" x2="101" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="294" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="95" y1="242" x2="101" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="246" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="95" y1="218" x2="101" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="222" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="194" x2="101" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="198" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="95" y1="146" x2="101" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="150" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="95" y1="122" x2="101" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="126" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="95" y1="98" x2="101" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="102" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="95" y1="74" x2="101" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="78" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="95" y1="50" x2="101" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="54" font-size="11" fill="currentColor" text-anchor="end">9</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="75.2" y1="286.5" x2="160.8" y2="29.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="164,20 165.6,31.1 156.1,27.9" fill="currentColor"/>
  <polygon points="72,296 70.4,284.9 79.9,288.1" fill="currentColor"/>
  <line x1="122" y1="136" x2="122" y2="84" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="122,74 127,84 117,84" fill="currentColor"/>
  <polygon points="122,146 117,136 127,136" fill="currentColor"/>
  <line x1="132" y1="74" x2="136" y2="74" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="146,74 136,79 136,69" fill="currentColor"/>
  <polygon points="122,74 132,69 132,79" fill="currentColor"/>
  <line x1="74" y1="95.6" x2="108.7" y2="105" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="118.4,107.6 107.4,109.8 110.1,100.2" fill="currentColor"/>
  <line x1="74" y1="47.6" x2="120.9" y2="62.6" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="130.4,65.6 119.4,67.3 122.4,57.8" fill="currentColor"/>
  <circle cx="122" cy="146" r="4" fill="currentColor"/>
  <circle cx="146" cy="74" r="4" fill="currentColor"/>
  <text x="133.2" y="166.2" font-size="13" fill="currentColor" text-anchor="start">(x₁, y₁)</text>
  <text x="157.2" y="94.2" font-size="13" fill="currentColor" text-anchor="start">(x₂, y₂)</text>
  <text x="27.2" y="95.6" font-size="13" fill="currentColor" text-anchor="start">y₂ − y₁</text>
  <text x="27.2" y="47.6" font-size="13" fill="currentColor" text-anchor="start">x₂ − x₁</text>
</svg>
</div>

The slope of a function is calculated by the change in $y$ divided by the
change in $x$. It does not matter which coordinate is used as the
$(x_2,y_2)$ and which is the $(x_1,y_1)$, as long as each calculation is
started with the elements from the same coordinate pair.

{{< callout type="info" >}}
  **Q&A.** *Are the units for slope always
  $\tfrac{\text{units for the output}}{\text{units for the input}}$?*

  Yes. Think of the units as the change of output value for each unit of
  change in input value. An example of slope could be miles per hour or
  dollars per day. Notice the units appear as a ratio of units for the output
  per units for the input.
{{< /callout >}}

{{< callout type="info" >}}
  **Calculate slope.** The slope, or rate of change, of a function $m$ can be
  calculated according to the following:

  $$m=\tfrac{\text{change in output (rise)}}{\text{change in input (run)}}=\tfrac{\Delta y}{\Delta x}=\tfrac{y_2-y_1}{x_2-x_1}$$

  where $x_1$ and $x_2$ are input values, $y_1$ and $y_2$ are output values.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given two points from a linear function, calculate and
  interpret the slope.

  1. Determine the units for output and input values.
  2. Calculate the change of output values and change of input values.
  3. Interpret the slope as the change in output values per unit of the input
     value.
{{< /callout >}}

**Example.** If $f(x)$ is a linear function, and $(3,-2)$ and $(8,1)$ are
points on the line, find the slope. Is this function increasing or
decreasing?

**Solution.** The coordinate pairs are $(3,-2)$ and $(8,1)$. To find the rate
of change, we divide the change in output by the change in input.

$$m=\tfrac{\text{change in output}}{\text{change in input}}=\tfrac{1-(-2)}{8-3}=\tfrac{3}{5}$$

We could also write the slope as $m=0.6$. The function is increasing because
$m>0$.

**Analysis.** As noted earlier, the order in which we write the points does
not matter when we compute the slope of the line as long as the first output
value, or $y$-coordinate, used corresponds with the first input value, or
$x$-coordinate, used.

{{< fillin
  question="If $f(x)$ is a linear function, and $(2,3)$ and $(0,4)$ are points on the line, find the slope."
  answer="-\frac{1}{2}"
  answerDisplay="$m=\tfrac{4-3}{0-2}=\tfrac{1}{-2}=-\tfrac{1}{2}$"
  hint="Divide the change in output by the change in input, keeping each point's two coordinates together."
>}}

{{< multiplechoice
  question="Is that same function increasing or decreasing?"
  answer="Decreasing, because $m<0$"
  hint="Check the sign of the slope you just computed."
>}}
There is not enough information to tell
Decreasing, because $m<0$
Increasing, because $m>0$
Constant, because $m=0$
{{< /multiplechoice >}}

**Example.** The population of a city increased from 23,400 to 27,800 between
2008 and 2012. Find the change of population per year if we assume the change
was constant from 2008 to 2012.

**Solution.** The rate of change relates the change in population to the
change in time. The population increased by
$27{,}800-23{,}400=4{,}400$ people over the four-year time interval. To find
the rate of change, divide the change in the number of people by the number
of years.

$$\tfrac{4{,}400\ \text{people}}{4\ \text{years}}=1{,}100\ \tfrac{\text{people}}{\text{year}}$$

So the population increased by 1,100 people per year.

**Analysis.** Because we are told that the population increased, we would
expect the slope to be positive. This positive slope we calculated is
therefore reasonable.

{{< fillin
  question="The population of a small town increased from 1,442 to 1,868 between 2009 and 2012. Find the change of population per year, in people per year, if we assume the change was constant from 2009 to 2012."
  answer="142"
  answerDisplay="$m=\tfrac{1{,}868-1{,}442}{2012-2009}=\tfrac{426}{3}=142$ people per year"
  hint="Divide the change in population by the number of years between the two counts."
>}}

## Writing the point-slope form of a linear equation

Up until now, we have been using the slope-intercept form of a linear
equation to describe linear functions. Here, we will learn another way to
write a linear function, the **point-slope form**.

$$y-y_1=m(x-x_1)$$

The point-slope form is derived from the slope formula.

$$
\begin{array}{lrcl}
\text{assuming }x\ne x_1 & m &=& \tfrac{y-y_1}{x-x_1} \\[4pt]
\text{Multiply both sides by }(x-x_1). & m(x-x_1) &=& \tfrac{y-y_1}{x-x_1}(x-x_1) \\[4pt]
\text{Simplify.} & m(x-x_1) &=& y-y_1 \\[4pt]
\text{Rearrange.} & y-y_1 &=& m(x-x_1)
\end{array}
$$

Keep in mind that the slope-intercept form and the point-slope form can be
used to describe the same function. We can move from one form to another
using basic algebra. For example, suppose we are given an equation in
point-slope form, $y-4=-\tfrac{1}{2}(x-6)$. We can convert it to the
slope-intercept form as shown.

$$
\begin{array}{lrcl}
& y-4 &=& -\tfrac{1}{2}(x-6) \\[4pt]
\text{Distribute the }-\tfrac{1}{2}. & y-4 &=& -\tfrac{1}{2}x+3 \\[4pt]
\text{Add 4 to each side}. & y &=& -\tfrac{1}{2}x+7
\end{array}
$$

Therefore, the same line can be described in slope-intercept form as
$y=-\tfrac{1}{2}x+7$.

{{< callout type="info" >}}
  **Point-slope form of a linear equation.** The **point-slope form** of a
  linear equation takes the form

  $$y-y_1=m(x-x_1)$$

  where $m$ is the slope, $x_1$ and $y_1$ are the $x$- and $y$-coordinates of
  a specific point through which the line passes.
{{< /callout >}}

### Writing the equation of a line using a point and the slope

The point-slope form is particularly useful if we know one point and the
slope of a line. Suppose, for example, we are told that a line has a slope of
2 and passes through the point $(4,1)$. We know that $m=2$ and that $x_1=4$
and $y_1=1$. We can substitute these values into the general point-slope
equation.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
& y-1 &=& 2(x-4)
\end{array}
$$

If we wanted to then rewrite the equation in slope-intercept form, we apply
algebraic techniques.

$$
\begin{array}{lrcl}
& y-1 &=& 2(x-4) \\[4pt]
\text{Distribute the }2. & y-1 &=& 2x-8 \\[4pt]
\text{Add 1 to each side}. & y &=& 2x-7
\end{array}
$$

Both equations, $y-1=2(x-4)$ and $y=2x-7$, describe the same line, graphed
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The line y = 2x − 7 on a grid from −8 to 8 on both axes, with the points (0, −7), (3.5, 0), and (4, 1) marked.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":13,"grid":false,"tickStep":2,"tickLabels":true,"lines":[{"slope":2,"intercept":-7}],"points":[{"at":[0,-7]},{"at":[3.5,0]},{"at":[4,1]}]}'>
<svg role="img" aria-label="The line y = 2x − 7 on a grid from −8 to 8 on both axes, with the points (0, −7), (3.5, 0), and (4, 1) marked." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="156" y1="127" x2="156" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="127" y1="234" x2="133" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="238" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="127" y1="208" x2="133" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="212" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="127" y1="182" x2="133" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="186" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="125" y1="231.1" x2="226" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="230.5,20 230.5,31.2 221.6,26.7" fill="currentColor"/>
  <polygon points="120.5,240 120.5,228.8 129.4,233.3" fill="currentColor"/>
  <circle cx="130" cy="221" r="4" fill="currentColor"/>
  <circle cx="175.5" cy="130" r="4" fill="currentColor"/>
  <circle cx="182" cy="117" r="4" fill="currentColor"/>
</svg>
</div>

**Example.** Write the point-slope form of an equation of a line with a slope
of 3 that passes through the point $(6,-1)$. Then rewrite it in the
slope-intercept form.

**Solution.** Let's figure out what we know from the given information. The
slope is 3, so $m=3$. We also know one point, so we know $x_1=6$ and
$y_1=-1$. Now we can substitute these values into the general point-slope
equation.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
\text{Substitute known values}. & y-(-1) &=& 3(x-6) \\[4pt]
\text{Distribute }-1\text{ to find point-slope form}. & y+1 &=& 3(x-6)
\end{array}
$$

Then we use algebra to find the slope-intercept form.

$$
\begin{array}{lrcl}
& y+1 &=& 3(x-6) \\[4pt]
\text{Distribute 3}. & y+1 &=& 3x-18 \\[4pt]
\text{Simplify to slope-intercept form}. & y &=& 3x-19
\end{array}
$$

{{< fillin
  question="Write the point-slope form of an equation of a line with a slope of $-2$ that passes through the point $(-2,2)$."
  answer="y-2=-2(x+2)"
  answerForm="point-slope-form"
  answerDisplay="$y-2=-2(x+2)$"
  hint="Substitute $m$, $x_1$, and $y_1$ into $y-y_1=m(x-x_1)$, and watch the sign of $x_1$."
>}}

{{< fillin
  question="Now rewrite that same line in slope-intercept form."
  answer="y=-2x-2"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-2x-2$"
  hint="Distribute the $-2$, then add 2 to each side."
>}}

### Writing the equation of a line using two points

The point-slope form of an equation is also useful if we know any two points
through which a line passes. Suppose, for example, we know that a line passes
through the points $(0,1)$ and $(3,2)$. We can use the coordinates of the two
points to find the slope.

$$
\begin{array}{lrcl}
& m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{2-1}{3-0} \\[4pt]
& &=& \tfrac{1}{3}
\end{array}
$$

Now we can use the slope we found and the coordinates of one of the points to
find the equation for the line. Let us use $(0,1)$ for our point.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
& y-1 &=& \tfrac{1}{3}(x-0)
\end{array}
$$

As before, we can use algebra to rewrite the equation in the slope-intercept
form.

$$
\begin{array}{lrcl}
& y-1 &=& \tfrac{1}{3}(x-0) \\[4pt]
\text{Distribute the }\tfrac{1}{3}. & y-1 &=& \tfrac{1}{3}x \\[4pt]
\text{Add 1 to each side}. & y &=& \tfrac{1}{3}x+1
\end{array}
$$

Both equations describe the line shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The line y = one-third x + 1 on a grid from −4 to 4 on both axes, with the points (−3, 0) and (0, 1) marked and labelled.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":true,"lines":[{"slope":0.3333333333333333,"intercept":1}],"points":[{"at":[-3,0]},{"at":[0,1]}],"texts":[{"at":[-3.9,0.45],"text":"(−3, 0)","anchor":"start"},{"at":[0.2,1],"text":"(0, 1)","anchor":"start","dy":14}]}'>
<svg role="img" aria-label="The line y = one-third x + 1 on a grid from −4 to 4 on both axes, with the points (−3, 0) and (0, 1) marked and labelled." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 244" width="244" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="122" x2="220" y2="122" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,122 220,127 220,117" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,122 24,117 24,127" fill="currentColor"/>
  <polygon points="122,230 117,220 127,220" fill="currentColor"/>
  <text x="228" y="114" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="119" x2="26" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="137" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="119" x2="50" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="137" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="119" x2="74" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="137" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="119" x2="98" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="137" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="119" x2="146" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="137" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="119" x2="170" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="137" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="119" x2="194" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="137" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="218" y1="119" x2="218" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="137" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="119" y1="218" x2="125" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="222" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="146" x2="125" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="74" x2="125" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="78" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="29.5" y1="128.8" x2="214.5" y2="67.2" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="224,64 216.1,71.9 212.9,62.4" fill="currentColor"/>
  <polygon points="20,132 27.9,124.1 31.1,133.6" fill="currentColor"/>
  <circle cx="50" cy="122" r="4" fill="currentColor"/>
  <circle cx="122" cy="98" r="4" fill="currentColor"/>
  <text x="28.4" y="111.2" font-size="13" fill="currentColor" text-anchor="start">(−3, 0)</text>
  <text x="126.8" y="112" font-size="13" fill="currentColor" text-anchor="start">(0, 1)</text>
</svg>
</div>

**Example.** Write the point-slope form of an equation of a line that passes
through the points $(5,1)$ and $(8,7)$. Then rewrite it in the
slope-intercept form.

**Solution.** Let's begin by finding the slope.

$$
\begin{array}{lrcl}
& m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{7-1}{8-5} \\[4pt]
& &=& \tfrac{6}{3} \\[4pt]
& &=& 2
\end{array}
$$

So $m=2$. Next, we substitute the slope and the coordinates for one of the
points into the general point-slope equation. We can choose either point, but
we will use $(5,1)$.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
& y-1 &=& 2(x-5)
\end{array}
$$

The point-slope equation of the line is $y-1=2(x-5)$. To rewrite the equation
in slope-intercept form, we use algebra.

$$
\begin{array}{lrcl}
& y-1 &=& 2(x-5) \\[4pt]
& y-1 &=& 2x-10 \\[4pt]
& y &=& 2x-9
\end{array}
$$

The slope-intercept equation of the line is $y=2x-9$.

{{< fillin
  question="Write the point-slope form of an equation of a line that passes through the points $(-1,3)$ and $(0,0)$, using $(0,0)$ as $(x_1,y_1)$."
  answer="y-0=-3(x-0)"
  answerForm="point-slope-form"
  answerDisplay="$y-0=-3(x-0)$"
  hint="Find the slope first, then substitute it and the point $(0,0)$ into $y-y_1=m(x-x_1)$."
>}}

{{< fillin
  question="Now rewrite that same line in slope-intercept form."
  answer="y=-3x"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-3x$"
  hint="Both $y_1$ and $x_1$ are 0, so the point-slope form collapses in one step."
>}}

## Writing and interpreting an equation for a linear function

Now that we have written equations for linear functions in both the
slope-intercept form and the point-slope form, we can choose which method to
use based on the information we are given. That information may be provided
in the form of a graph, a point and a slope, two points, and so on. Look at
the graph of the function $f$ below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f, a line falling from left to right, on a grid with x from −2 to 8 and y from −1 to 8. The points (0, 7) and (4, 4) are marked and labelled.","xMin":-2,"xMax":8,"yMin":-1,"yMax":8,"unit":22,"tickLabels":true,"lines":[{"slope":-0.75,"intercept":7,"label":"f","labelAt":0.72}],"points":[{"at":[0,7],"label":"(0, 7)","labelSide":"e"},{"at":[4,4],"label":"(4, 4)","labelSide":"ne"}]}'>
<svg role="img" aria-label="The graph of f, a line falling from left to right, on a grid with x from −2 to 8 and y from −1 to 8. The points (0, 7) and (4, 4) are marked and labelled." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 250" width="272" height="250" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="224" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="224" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="224" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="224" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="224" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="224" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="224" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="224" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="224" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="224" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="246" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="246" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="202" x2="248" y2="202" stroke="currentColor" stroke-width="1"/>
  <line x1="70" y1="24" x2="70" y2="226" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,202 248,207 248,197" fill="currentColor"/>
  <polygon points="70,14 75,24 65,24" fill="currentColor"/>
  <polygon points="14,202 24,197 24,207" fill="currentColor"/>
  <polygon points="70,236 65,226 75,226" fill="currentColor"/>
  <text x="256" y="194" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="78" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="199" x2="26" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="217" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="48" y1="199" x2="48" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="217" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="92" y1="199" x2="92" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="217" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="114" y1="199" x2="114" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="217" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="136" y1="199" x2="136" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="217" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="158" y1="199" x2="158" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="217" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="180" y1="199" x2="180" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="217" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="202" y1="199" x2="202" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="217" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="224" y1="199" x2="224" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="217" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="246" y1="199" x2="246" y2="205" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="217" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="67" y1="224" x2="73" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="228" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="67" y1="180" x2="73" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="184" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="67" y1="158" x2="73" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="162" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="67" y1="136" x2="73" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="140" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="67" y1="114" x2="73" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="118" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="67" y1="92" x2="73" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="96" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="74" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="67" y1="48" x2="73" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="52" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="67" y1="26" x2="73" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="64" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="40.7" y1="26" x2="244" y2="178.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="252,184.5 241,182.5 247,174.5" fill="currentColor"/>
  <polygon points="32.7,20 43.7,22 37.7,30" fill="currentColor"/>
  <circle cx="70" cy="48" r="4" fill="currentColor"/>
  <circle cx="158" cy="114" r="4" fill="currentColor"/>
  <text x="84" y="52" font-size="13" fill="currentColor" text-anchor="start">(0, 7)</text>
  <text x="169.2" y="102.8" font-size="13" fill="currentColor" text-anchor="start">(4, 4)</text>
  <text x="181" y="155.2" font-size="13" fill="currentColor" text-anchor="end">f</text>
</svg>
</div>

We are not given the slope of the line, but we can choose any two points on
the line to find the slope. Let's choose $(0,7)$ and $(4,4)$. We can use
these points to calculate the slope.

$$
\begin{array}{lrcl}
& m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{4-7}{4-0} \\[4pt]
& &=& -\tfrac{3}{4}
\end{array}
$$

Now we can substitute the slope and the coordinates of one of the points into
the point-slope form.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
& y-4 &=& -\tfrac{3}{4}(x-4)
\end{array}
$$

If we want to rewrite the equation in the slope-intercept form, we would find

$$
\begin{array}{lrcl}
& y-4 &=& -\tfrac{3}{4}(x-4) \\[4pt]
& y-4 &=& -\tfrac{3}{4}x+3 \\[4pt]
& y &=& -\tfrac{3}{4}x+7
\end{array}
$$

If we wanted to find the slope-intercept form without first writing the
point-slope form, we could have recognized that the line crosses the $y$-axis
when the output value is 7. Therefore, $b=7$. We now have the initial value
$b$ and the slope $m$ so we can substitute $m$ and $b$ into the
slope-intercept form of a line.

$$
\begin{array}{lrcl}
& f(x) &=& mx+b \\[4pt]
\text{Substitute }m=-\tfrac{3}{4}\text{ and }b=7. & f(x) &=& -\tfrac{3}{4}x+7
\end{array}
$$

So the function is $f(x)=-\tfrac{3}{4}x+7$, and the linear equation would be
$y=-\tfrac{3}{4}x+7$.

{{< callout type="info" >}}
  **How to:** given the graph of a linear function, write an equation to
  represent the function.

  1. Identify two points on the line.
  2. Use the two points to calculate the slope.
  3. Determine where the line crosses the $y$-axis to identify the
     $y$-intercept by visual inspection.
  4. Substitute the slope and $y$-intercept into the slope-intercept form of
     a line equation.
{{< /callout >}}

**Example.** Write an equation for a linear function given the graph of $f$
shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the linear function f, a steep line rising from left to right on a grid from −10 to 10 on both axes with gridlines every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":11,"gridStep":2,"tickStep":2,"tickLabels":true,"lines":[{"slope":3,"intercept":2,"label":"f","labelAt":0.86}]}'>
<svg role="img" aria-label="The graph of the linear function f, a steep line rising from left to right on a grid from −10 to 10 on both axes with gridlines every 2 units." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
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
  <text x="256" y="128" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="133" x2="26" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="151" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="48" y1="133" x2="48" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="151" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="70" y1="133" x2="70" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="151" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="92" y1="133" x2="92" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="151" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="114" y1="133" x2="114" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="151" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="158" y1="133" x2="158" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="151" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="180" y1="133" x2="180" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="151" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="202" y1="133" x2="202" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="151" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="224" y1="133" x2="224" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="151" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="246" y1="133" x2="246" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="151" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="133" y1="180" x2="139" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="184" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="93.2" y1="242.5" x2="164.2" y2="29.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="167.3,20 168.9,31.1 159.4,27.9" fill="currentColor"/>
  <polygon points="90,252 88.4,240.9 97.9,244.1" fill="currentColor"/>
  <text x="171.7" y="61.5" font-size="13" fill="currentColor" text-anchor="start">f</text>
</svg>
</div>

**Solution.** Identify two points on the line, such as $(0,2)$ and $(-2,-4)$.
Use the points to calculate the slope.

$$
\begin{array}{lrcl}
& m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{-4-2}{-2-0} \\[4pt]
& &=& \tfrac{-6}{-2} \\[4pt]
& &=& 3
\end{array}
$$

Substitute the slope and the coordinates of one of the points into the
point-slope form.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
& y-(-4) &=& 3(x-(-2)) \\[4pt]
& y+4 &=& 3(x+2)
\end{array}
$$

We can use algebra to rewrite the equation in the slope-intercept form.

$$
\begin{array}{lrcl}
& y+4 &=& 3(x+2) \\[4pt]
& y+4 &=& 3x+6 \\[4pt]
& y &=& 3x+2
\end{array}
$$

**Analysis.** This makes sense because we can see from the graph below that
the line crosses the $y$-axis at the point $(0,2)$, which is the
$y$-intercept, so $b=2$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same steep line on a grid from −10 to 10 on both axes, with the points (0, 2) and (−2, −4) marked and labelled.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":11,"gridStep":2,"tickStep":2,"tickLabels":true,"lines":[{"slope":3,"intercept":2}],"points":[{"at":[0,2],"label":"(0, 2)","labelSide":"e"},{"at":[-2,-4],"label":"(−2, −4)","labelSide":"w"}]}'>
<svg role="img" aria-label="The same steep line on a grid from −10 to 10 on both axes, with the points (0, 2) and (−2, −4) marked and labelled." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
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
  <text x="256" y="128" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="133" x2="26" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="151" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="48" y1="133" x2="48" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="151" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="70" y1="133" x2="70" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="151" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="92" y1="133" x2="92" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="151" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="114" y1="133" x2="114" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="151" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="158" y1="133" x2="158" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="151" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="180" y1="133" x2="180" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="151" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="202" y1="133" x2="202" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="151" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="224" y1="133" x2="224" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="151" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="246" y1="133" x2="246" y2="139" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="151" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="133" y1="180" x2="139" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="184" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="93.2" y1="242.5" x2="164.2" y2="29.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="167.3,20 168.9,31.1 159.4,27.9" fill="currentColor"/>
  <polygon points="90,252 88.4,240.9 97.9,244.1" fill="currentColor"/>
  <circle cx="136" cy="114" r="4" fill="currentColor"/>
  <circle cx="114" cy="180" r="4" fill="currentColor"/>
  <text x="150" y="118" font-size="13" fill="currentColor" text-anchor="start">(0, 2)</text>
  <text x="100" y="184" font-size="13" fill="currentColor" text-anchor="end">(−2, −4)</text>
</svg>
</div>

**Example.** Suppose Ben starts a company in which he incurs a fixed cost of
\$1,250 per month for the overhead, which includes his office rent. His
production costs are \$37.50 per item. Write a linear function $C$ where
$C(x)$ is the cost for $x$ items produced in a given month.

**Solution.** The fixed cost is present every month, \$1,250. The costs that
can vary include the cost to produce each item, which is \$37.50 for Ben. The
variable cost, called the marginal cost, is represented by $37.5$. The cost
Ben incurs is the sum of these two costs, represented by
$C(x)=1{,}250+37.5x$.

**Analysis.** If Ben produces 100 items in a month, his monthly cost is
represented by

$$
\begin{array}{lrcl}
& C(100) &=& 1{,}250+37.5(100) \\[4pt]
& &=& 5{,}000
\end{array}
$$

So his monthly cost would be \$5,000.

**Example.** If $f$ is a linear function, with $f(3)=-2$ and $f(8)=1$, find
an equation for the function in slope-intercept form.

**Solution.** We can write the given points using coordinates.

$$
\begin{array}{lrcl}
& f(3)=-2 &\to& (3,-2) \\[4pt]
& f(8)=1 &\to& (8,1)
\end{array}
$$

We can then use the points to calculate the slope.

$$
\begin{array}{lrcl}
& m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[4pt]
& &=& \tfrac{1-(-2)}{8-3} \\[4pt]
& &=& \tfrac{3}{5}
\end{array}
$$

Substitute the slope and the coordinates of one of the points into the
point-slope form.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
& y-(-2) &=& \tfrac{3}{5}(x-3)
\end{array}
$$

We can use algebra to rewrite the equation in the slope-intercept form.

$$
\begin{array}{lrcl}
& y+2 &=& \tfrac{3}{5}(x-3) \\[4pt]
& y+2 &=& \tfrac{3}{5}x-\tfrac{9}{5} \\[4pt]
& y &=& \tfrac{3}{5}x-\tfrac{19}{5}
\end{array}
$$

{{< fillin
  question="If $f(x)$ is a linear function, with $f(2)=-11$ and $f(4)=-25$, find an equation for the function in slope-intercept form."
  answer="y=-7x+3"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-7x+3$"
  hint="Turn the two function values into points, find the slope, then use point-slope form and solve for $y$."
>}}

## Modeling real-world problems with linear functions

In the real world, problems are not always explicitly stated in terms of a
function or represented with a graph. Fortunately, we can analyze the problem
by first representing it as a linear function and then interpreting the
components of the function. As long as we know, or can figure out, the
initial value and the rate of change of a linear function, we can solve many
different kinds of real-world problems.

{{< callout type="info" >}}
  **How to:** given a linear function $f$ and the initial value and rate of
  change, evaluate $f(c)$.

  1. Determine the initial value and the rate of change (slope).
  2. Substitute the values into $f(x)=mx+b$.
  3. Evaluate the function at $x=c$.
{{< /callout >}}

**Example.** Marcus currently has 200 songs in his music collection. Every
month, he adds 15 new songs. Write a formula for the number of songs, $N$, in
his collection as a function of time, $t$, the number of months. How many
songs will he own in a year?

**Solution.** The initial value for this function is 200 because he currently
owns 200 songs, so $N(0)=200$, which means that $b=200$.

The number of songs increases by 15 songs per month, so the rate of change is
15 songs per month. Therefore we know that $m=15$. We can substitute the
initial value and the rate of change into the slope-intercept form of a line.

$$
\begin{array}{lrcl}
& f(x) &=& mx+b \\[4pt]
\text{Substitute }m=15\text{ and }b=200. & N(t) &=& 15t+200
\end{array}
$$

We can write the formula $N(t)=15t+200$.

With this formula, we can then predict how many songs Marcus will have in 1
year (12 months). In other words, we can evaluate the function at $t=12$.

$$
\begin{array}{lrcl}
& N(12) &=& 15(12)+200 \\[4pt]
& &=& 180+200 \\[4pt]
& &=& 380
\end{array}
$$

Marcus will have 380 songs in 12 months.

**Analysis.** Notice that $N$ is an increasing linear function. As the input
(the number of months) increases, the output (number of songs) increases as
well.

**Example.** Working as an insurance salesperson, Ilya earns a base salary
plus a commission on each new policy. Therefore, Ilya's weekly income, $I$,
depends on the number of new policies, $n$, he sells during the week. Last
week he sold 3 new policies, and earned \$760 for the week. The week before,
he sold 5 new policies and earned \$920. Find an equation for $I(n)$, and
interpret the meaning of the components of the equation.

**Solution.** The given information gives us two input-output pairs:
$(3,760)$ and $(5,920)$. We start by finding the rate of change.

$$
\begin{array}{lrcl}
& m &=& \tfrac{920-760}{5-3} \\[4pt]
& &=& \tfrac{160\ \text{dollars}}{2\ \text{policies}} \\[4pt]
& &=& 80\ \text{dollars per policy}
\end{array}
$$

Keeping track of units can help us interpret this quantity. Income increased
by \$160 when the number of policies increased by 2, so the rate of change is
\$80 per policy. Therefore, Ilya earns a commission of \$80 for each policy
sold during the week.

We can then solve for the initial value.

$$
\begin{array}{lrcl}
& I(n) &=& 80n+b \\[4pt]
\text{when }n=3,\ I(3)=760 & 760 &=& 80(3)+b \\[4pt]
& 760-80(3) &=& b \\[4pt]
& 520 &=& b
\end{array}
$$

The value of $b$ is the starting value for the function and represents Ilya's
income when $n=0$, or when no new policies are sold. We can interpret this as
Ilya's base salary for the week, which does not depend upon the number of
policies sold.

We can now write the final equation.

$$I(n)=80n+520$$

Our final interpretation is that Ilya's base salary is \$520 per week and he
earns an additional \$80 commission for each policy sold.

**Example.** The table below relates the number of rats in a population to
time, in weeks. Use the table to write a linear equation.

| $w$, number of weeks | 0 | 2 | 4 | 6 |
| :--- | ---: | ---: | ---: | ---: |
| $P(w)$, number of rats | 1,000 | 1,080 | 1,160 | 1,240 |

**Solution.** We can see from the table that the initial value for the number
of rats is 1,000, so $b=1{,}000$.

Rather than solving for $m$, we can tell from looking at the table that the
population increases by 80 for every 2 weeks that pass. This means that the
rate of change is 80 rats per 2 weeks, which can be simplified to 40 rats per
week.

$$P(w)=40w+1{,}000$$

If we did not notice the rate of change from the table we could still solve
for the slope using any two points from the table. For example, using
$(2,1{,}080)$ and $(6,1{,}240)$

$$
\begin{array}{lrcl}
& m &=& \tfrac{1{,}240-1{,}080}{6-2} \\[4pt]
& &=& \tfrac{160}{4} \\[4pt]
& &=& 40
\end{array}
$$

{{< callout type="info" >}}
  **Q&A.** *Is the initial value always provided in a table of values like
  the one above?*

  No. Sometimes the initial value is provided in a table of values, but
  sometimes it is not. If you see an input of 0, then the initial value would
  be the corresponding output. If the initial value is not provided because
  there is no value of input on the table equal to 0, find the slope,
  substitute one coordinate pair and the slope into $f(x)=mx+b$, and solve
  for $b$.
{{< /callout >}}

A new plant food was introduced to a young tree to test its effect on the
height of the tree. The table below shows the height of the tree, in feet,
$x$ months since the measurements began.

| $x$ | 0 | 2 | 4 | 8 | 12 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $H(x)$ | 12.5 | 13.5 | 14.5 | 16.5 | 18.5 |

{{< fillin
  question="Using the table above, write a linear function $H(x)$, where $x$ is the number of months since the start of the experiment. Enter the rule for $H(x)$."
  answer="0.5x+12.5"
  answerDisplay="$H(x)=0.5x+12.5$"
  hint="The height rises 1 foot every 2 months, and the initial height is the output at $x=0$."
>}}

## Key equations

| slope-intercept form of a line | $f(x)=mx+b$ |
| :--- | :--- |
| slope | $m=\tfrac{\text{change in output (rise)}}{\text{change in input (run)}}=\tfrac{\Delta y}{\Delta x}=\tfrac{y_2-y_1}{x_2-x_1}$ |
| point-slope form of a line | $y-y_1=m(x-x_1)$ |

## Key concepts

- The ordered pairs given by a linear function represent points on a line.
- Linear functions can be represented in words, function notation, tabular
  form, and graphical form.
- The rate of change of a linear function is also known as the slope.
- An equation in the slope-intercept form of a line includes the slope and
  the initial value of the function.
- The initial value, or $y$-intercept, is the output value when the input of
  a linear function is zero. It is the $y$-value of the point at which the
  line crosses the $y$-axis.
- An increasing linear function results in a graph that slants upward from
  left to right and has a positive slope.
- A decreasing linear function results in a graph that slants downward from
  left to right and has a negative slope.
- A constant linear function results in a graph that is a horizontal line.
- Analyzing the slope within the context of a problem indicates whether a
  linear function is increasing, decreasing, or constant.
- The slope of a linear function can be calculated by dividing the difference
  between $y$-values by the difference in corresponding $x$-values of any two
  points on the line.
- The slope and initial value can be determined given a graph or any two
  points on the line.
- One type of function notation is the slope-intercept form of an equation.
- The point-slope form is useful for finding a linear equation when given the
  slope of a line and one point.
- The point-slope form is also convenient for finding a linear equation when
  given two points through which a line passes.
- The equation for a linear function can be written if the slope $m$ and
  initial value $b$ are known.
- A linear function can be used to solve real-world problems.
- A linear function can be written from tabular form.

## Key terms

**linear function** — a function with a constant rate of change that is a
polynomial of degree 1, and whose graph is a straight line.
**slope-intercept form** — the equation for a line that represents a linear
function in the form $f(x)=mx+b$. **slope** — the ratio of the change in
output values to the change in input values; a measure of the steepness of a
line. **$y$-intercept** — the value of a function when the input value is
zero; also known as initial value. **increasing linear function** — a
function with a positive slope: if $f(x)=mx+b$, then $m>0$. **decreasing
linear function** — a function with a negative slope: if $f(x)=mx+b$, then
$m<0$. **point-slope form** — the equation for a line that represents a
linear function of the form $y-y_1=m(x-x_1)$.

## Practice

### Represent a linear function

{{< multiplechoice
  question="Can $y=\tfrac{1}{4}x+6$ be written as a linear function?"
  answer="Yes"
  hint="A linear function has $x$ appearing only to the first power, with no other operations on it."
>}}
Yes
No
{{< /multiplechoice >}}

{{< multiplechoice
  question="Can $y=3x^2-2$ be written as a linear function?"
  answer="No"
  hint="Look at the power of $x$: a linear function never raises the input above the first power."
>}}
Yes
No
{{< /multiplechoice >}}

{{< fillin
  question="A boat is 100 miles from a marina, sailing directly toward it at 10 miles per hour. Write an equation for the distance $d(t)$ of the boat from the marina after $t$ hours. Enter the rule for $d(t)$."
  answer="100-10t"
  answerDisplay="$d(t)=100-10t$"
  hint="The distance starts at 100 miles and decreases by 10 miles for every hour that passes."
>}}

### Determine whether a linear function is increasing, decreasing, or constant

{{< multiplechoice
  question="Is $f(x)=4x+3$ increasing, decreasing, or constant?"
  answer="Increasing, because $m>0$"
  hint="Check the sign of the coefficient of $x$."
>}}
Decreasing, because $m<0$
Increasing, because $m>0$
There is not enough information to tell
Constant, because $m=0$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $a(x)=5-2x$ increasing, decreasing, or constant?"
  answer="Decreasing, because $m<0$"
  hint="Rewrite the function as $a(x)=-2x+5$ and check the sign of its slope."
>}}
Increasing, because $m>0$
Constant, because $m=0$
There is not enough information to tell
Decreasing, because $m<0$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $j(x)=\tfrac{1}{2}x-3$ increasing, decreasing, or constant?"
  answer="Increasing, because $m>0$"
  hint="Check the sign of the coefficient of $x$."
>}}
Decreasing, because $m<0$
There is not enough information to tell
Constant, because $m=0$
Increasing, because $m>0$
{{< /multiplechoice >}}

### Calculate and interpret slope

{{< fillin
  question="Find the slope of the line through $(2,4)$ and $(4,10)$."
  answer="3"
  answerDisplay="$m=\tfrac{10-4}{4-2}=3$"
  hint="Divide the change in output by the change in input."
>}}

{{< fillin
  question="Find the slope of the line through $(-1,4)$ and $(5,2)$."
  answer="-\frac{1}{3}"
  answerDisplay="$m=\tfrac{2-4}{5-(-1)}=-\tfrac{1}{3}$"
  hint="Divide the change in output by the change in input, keeping each point's coordinates together."
>}}

{{< fillin
  question="Jessica is walking home from a friend's house. After 2 minutes she is 1.4 miles from home. Twelve minutes after leaving, she is 0.9 miles from home. What is her rate, in miles per hour?"
  answer="3"
  answerDisplay="3 miles per hour"
  hint="Find the slope between the two (time, distance) points in miles per minute, then convert to miles per hour."
>}}

### Write the point-slope form of an equation

{{< fillin
  question="Write the point-slope form of an equation of a line that passes through the points $(1,5)$ and $(4,11)$, using $(1,5)$ as $(x_1,y_1)$."
  answer="y-5=2(x-1)"
  answerForm="point-slope-form"
  answerDisplay="$y-5=2(x-1)$"
  hint="Find the slope first, then substitute $m$ and the point $(1,5)$ into $y-y_1=m(x-x_1)$."
>}}

{{< fillin
  question="If $f(x)$ is a linear function, with $f(-1)=4$ and $f(5)=1$, write the point-slope form of the equation using the point where $x=-1$."
  answer="y-4=-\frac{1}{2}(x+1)"
  answerForm="point-slope-form"
  answerDisplay="$y-4=-\tfrac{1}{2}(x+1)$"
  hint="Turn the two function values into points, find the slope, then substitute the point where $x=-1$ into $y-y_1=m(x-x_1)$."
>}}

### Write and interpret a linear function

{{< fillin
  question="A gym membership with two personal training sessions costs \$125, while a gym membership with five personal training sessions costs \$260. What is the cost per session, in dollars?"
  answer="45"
  answerDisplay="\$45 per session"
  hint="Treat the number of sessions as the input and the total cost as the output, then find the slope."
>}}

{{< fillin
  question="A phone company charges according to $C(n)=24+0.1n$, where $n$ is the number of minutes talked and $C(n)$ is the monthly charge in dollars. What is the rate of change, in dollars per minute?"
  answer="0.1"
  answerDisplay="$0.1$ dollars per minute"
  hint="The rate of change is the coefficient of $n$."
>}}

{{< fillin
  question="Using that same phone plan, $C(n)=24+0.1n$, what is the initial value, in dollars?"
  answer="24"
  answerDisplay="\$24"
  hint="The initial value is the constant term, the charge when $n=0$."
>}}

{{< fillin
  question="A city's population in 1960 was 287,500. In 1989 the population was 275,900. Find the rate of change of the population, in people per year."
  answer="-400"
  answerDisplay="$-400$ people per year"
  hint="Divide the change in population by the number of years between 1960 and 1989."
>}}

{{< multiplechoice
  question="Average annual income for the years 1990 through 1999 is given by $I(x)=1054x+23{,}286$, where $x$ is the number of years after 1990. Which statement correctly interprets the slope in context?"
  answer="Each year in the decade of the 1990s, average annual income increased by \$1,054."
  hint="The slope is the change in income for each one-year increase in $x$."
>}}
In the ten-year period from 1990–1999, average annual income increased by a total of \$1,054.
As of 1990, average annual income was \$23,286.
Each year in the decade of the 1990s, average annual income increased by \$1,054.
Average annual income rose to a level of \$23,286 by the end of 1999.
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 2.1: Linear Functions](https://openstax.org/books/precalculus-2e/pages/2-1-linear-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from its exact equation, matching the source's window, marked points, and labels — the train ray $D(t)=83t+250$, the three generic increasing/decreasing/constant lines, $y=3x+2$ for the slope diagram and again for the two "write an equation from the graph" figures, $y=2x-7$, $y=\tfrac{1}{3}x+1$, and $y=-\tfrac{3}{4}x+7$; presented the source's three tabular figures (the train, the rat population, and the plant-food experiment) as Markdown tables; replaced the two annotated artwork panels that draw arrows from the numbers into $f(x)=mx+b$ with the equivalent KaTeX substitution step; omitted the decorative maglev-train and scuba-diver photographs, which carry no mathematics, and reworded the two sentences that pointed at them; wrote the two money-valued slope steps in the insurance-commission example as $\tfrac{160\ \text{dollars}}{2\ \text{policies}}=80\ \text{dollars per policy}$, because an escaped dollar sign cannot appear inside a math run in this build; omitted the media link; converted the practice problems ("Try Its") into interactive exercises with instant feedback, splitting each multipart item into one component per response and using multiple choice for the increasing-or-decreasing judgement, which cannot be graded as free-response math; and adapted 15 selected end-of-section exercises — two is-it-linear judgements, a distance-from-a-marina word problem, three increasing/decreasing judgements, two slope-between-two-points computations, a walking-speed word problem, two point-slope-form derivations rewritten from the source's slope-intercept answers, a training-session cost rate, a phone-plan rate-and-initial-value item split into two prompts, a city-population rate of change, and a slope-interpretation multiple choice — into 16 interactive components in a closing Practice block, one group per objective.</small>
