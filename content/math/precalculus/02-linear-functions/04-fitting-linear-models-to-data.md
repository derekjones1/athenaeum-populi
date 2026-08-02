---
title: Fitting Linear Models to Data
description: >-
  Drawing and interpreting scatter plots; finding a line of best fit by eye
  and by least squares regression; interpolation, extrapolation, and model
  breakdown; the correlation coefficient; and predicting with a regression
  line — adapted from OpenStax Precalculus 2e, Section 2.4.
source_section: "2.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Draw and interpret scatter plots
- Find the line of best fit
- Distinguish between linear and nonlinear relations
- Use a linear model to make predictions
{{< /callout >}}

A professor is attempting to identify trends among final exam scores. His
class has a mixture of students, so he wonders if there is any relationship
between age and final exam scores. One way for him to analyze the scores is
by creating a diagram that relates the age of each student to the exam score
received. In this section, we will examine one such diagram known as a
scatter plot.

## Drawing and interpreting scatter plots

A **scatter plot** is a graph of plotted points that may show a relationship
between two sets of data. If the relationship is from a **linear model**, or
a model that is nearly linear, the professor can draw conclusions using his
knowledge of linear functions. The graph below is a sample scatter plot of
age and final exam score variables.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot titled Final Exam Score versus Age. Age runs from 0 to 50 along the horizontal axis and final exam score from 0 to 100 along the vertical axis. Fourteen points lie between ages 18 and 46 with scores between 60 and 90, showing no rising or falling trend.","xMin":0,"xMax":50,"yMin":0,"yMax":100,"xUnit":5.4,"yUnit":2.2,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Final Exam Score vs. Age","xLabel":"Age","yLabel":"Score","points":[{"at":[18,84]},{"at":[20,79]},{"at":[21,84]},{"at":[22,67]},{"at":[28,81]},{"at":[30,90]},{"at":[31,66]},{"at":[33,63]},{"at":[35,64]},{"at":[39.5,60]},{"at":[40,77]},{"at":[41.5,82]},{"at":[43,78]},{"at":[45.5,77]}]}'>
<svg role="img" aria-label="A scatter plot titled Final Exam Score versus Age. Age runs from 0 to 50 along the horizontal axis and final exam score from 0 to 100 along the vertical axis. Fourteen points lie between ages 18 and 46 with scores between 60 and 90, showing no rising or falling trend." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 294" width="322" height="294" font-family="Helvetica, Arial, sans-serif">
  <line x1="80" y1="268" x2="80" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="268" x2="134" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="268" x2="188" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="268" x2="242" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="268" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="296" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="296" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="296" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="296" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="296" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="296" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="296" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="296" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="296" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="161" y="14" font-size="13" fill="currentColor" text-anchor="middle">Final Exam Score vs. Age</text>
  <line x1="26" y1="268" x2="298" y2="268" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="46" x2="26" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="308,268 298,273 298,263" fill="currentColor"/>
  <polygon points="26,36 31,46 21,46" fill="currentColor"/>
  <text x="306" y="260" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">Age</text>
  <text x="34" y="46" font-size="13" fill="currentColor" font-style="italic">Score</text>
  <line x1="80" y1="265" x2="80" y2="271" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="283" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="134" y1="265" x2="134" y2="271" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="283" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="188" y1="265" x2="188" y2="271" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="283" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="242" y1="265" x2="242" y2="271" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="283" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="296" y1="265" x2="296" y2="271" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="283" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="23" y1="246" x2="29" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="250" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="224" x2="29" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="228" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="202" x2="29" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="206" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="180" x2="29" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="184" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="158" x2="29" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="162" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="136" x2="29" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="140" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="23" y1="114" x2="29" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="118" font-size="11" fill="currentColor" text-anchor="end">70</text>
  <line x1="23" y1="92" x2="29" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="96" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="23" y1="70" x2="29" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="74" font-size="11" fill="currentColor" text-anchor="end">90</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <circle cx="123.2" cy="83.2" r="4" fill="currentColor"/>
  <circle cx="134" cy="94.2" r="4" fill="currentColor"/>
  <circle cx="139.4" cy="83.2" r="4" fill="currentColor"/>
  <circle cx="144.8" cy="120.6" r="4" fill="currentColor"/>
  <circle cx="177.2" cy="89.8" r="4" fill="currentColor"/>
  <circle cx="188" cy="70" r="4" fill="currentColor"/>
  <circle cx="193.4" cy="122.8" r="4" fill="currentColor"/>
  <circle cx="204.2" cy="129.4" r="4" fill="currentColor"/>
  <circle cx="215" cy="127.2" r="4" fill="currentColor"/>
  <circle cx="239.3" cy="136" r="4" fill="currentColor"/>
  <circle cx="242" cy="98.6" r="4" fill="currentColor"/>
  <circle cx="250.1" cy="87.6" r="4" fill="currentColor"/>
  <circle cx="258.2" cy="96.4" r="4" fill="currentColor"/>
  <circle cx="271.7" cy="98.6" r="4" fill="currentColor"/>
</svg>
</div>

Notice this scatter plot does **not** indicate a **linear relationship**. The
points do not appear to follow a trend. In other words, there does not appear
to be a relationship between the age of the student and the score on the
final exam.

**Example.** The table below shows the number of cricket chirps in 15
seconds, for several different air temperatures, in degrees Fahrenheit. Plot
this data, and determine whether the data appears to be linearly related.

| **Chirps** | 44 | 35 | 20.4 | 33 | 31 | 35 | 18.5 | 37 | 26 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **Temperature** | 80.5 | 70.5 | 57 | 66 | 68 | 72 | 52 | 73.5 | 53 |

**Solution.** Plotting this data, as depicted below, suggests that there may
be a trend. We can see from the trend in the data that the number of chirps
increases as the temperature increases. The trend appears to be roughly
linear, though certainly not perfectly so.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot titled Cricket Chirps versus Temperature. Chirps in 15 seconds run from 0 to 50 along the horizontal axis and temperature from 0 to 90 degrees Fahrenheit along the vertical axis. The nine plotted points rise from left to right in a roughly straight band.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"chirps","yLabel":"°F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}]}'>
<svg role="img" aria-label="A scatter plot titled Cricket Chirps versus Temperature. Chirps in 15 seconds run from 0 to 50 along the horizontal axis and temperature from 0 to 90 degrees Fahrenheit along the vertical axis. The nine plotted points rise from left to right in a roughly straight band." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 290" width="322" height="290" font-family="Helvetica, Arial, sans-serif">
  <line x1="80" y1="264" x2="80" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="264" x2="134" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="264" x2="188" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="264" x2="242" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="264" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="240" x2="296" y2="240" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="296" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="192" x2="296" y2="192" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="168" x2="296" y2="168" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="144" x2="296" y2="144" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="120" x2="296" y2="120" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="96" x2="296" y2="96" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="72" x2="296" y2="72" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="161" y="14" font-size="13" fill="currentColor" text-anchor="middle">Cricket Chirps vs. Temperature</text>
  <line x1="26" y1="264" x2="298" y2="264" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="46" x2="26" y2="264" stroke="currentColor" stroke-width="1"/>
  <polygon points="308,264 298,269 298,259" fill="currentColor"/>
  <polygon points="26,36 31,46 21,46" fill="currentColor"/>
  <text x="306" y="256" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">chirps</text>
  <text x="34" y="46" font-size="13" fill="currentColor" font-style="italic">°F</text>
  <line x1="80" y1="261" x2="80" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="279" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="134" y1="261" x2="134" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="279" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="188" y1="261" x2="188" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="279" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="242" y1="261" x2="242" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="279" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="296" y1="261" x2="296" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="279" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="23" y1="240" x2="29" y2="240" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="244" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="216" x2="29" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="220" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="192" x2="29" y2="192" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="196" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="168" x2="29" y2="168" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="172" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="144" x2="29" y2="144" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="148" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="120" x2="29" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="124" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="23" y1="96" x2="29" y2="96" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="100" font-size="11" fill="currentColor" text-anchor="end">70</text>
  <line x1="23" y1="72" x2="29" y2="72" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="76" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">90</text>
  <circle cx="263.6" cy="70.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="94.8" r="4" fill="currentColor"/>
  <circle cx="136.2" cy="127.2" r="4" fill="currentColor"/>
  <circle cx="204.2" cy="105.6" r="4" fill="currentColor"/>
  <circle cx="193.4" cy="100.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="91.2" r="4" fill="currentColor"/>
  <circle cx="125.9" cy="139.2" r="4" fill="currentColor"/>
  <circle cx="225.8" cy="87.6" r="4" fill="currentColor"/>
  <circle cx="166.4" cy="136.8" r="4" fill="currentColor"/>
</svg>
</div>

## Finding the line of best fit

Once we recognize a need for a linear function to model that data, the
natural follow-up question is "what is that linear function?" One way to
approximate our linear function is to sketch the line that seems to best fit
the data. Then we can extend the line until we can verify the $y$-intercept.
We can approximate the slope of the line by extending it until we can
estimate the $\tfrac{\text{rise}}{\text{run}}$.

**Example.** Find a linear function that fits the cricket-chirp data in the
table above by "eyeballing" a line that seems to fit.

**Solution.** On a graph, we could try sketching a line.

Using the starting and ending points of our hand drawn line, points
$(0,30)$ and $(50,90)$, this graph has a slope of

$$m=\tfrac{60}{50}=1.2$$

and a $y$-intercept at 30. This gives an equation of

$$T(c)=1.2c+30$$

where $c$ is the number of chirps in 15 seconds, and $T(c)$ is the
temperature in degrees Fahrenheit. The resulting equation is represented
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The cricket-chirp scatter plot with the hand-drawn line of best fit T of c equals 1.2c plus 30 drawn through it, rising from (0, 30) at the left edge to (50, 90) at the right edge.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}],"lines":[{"slope":1.2,"intercept":30,"arrows":false}]}'>
<svg role="img" aria-label="The cricket-chirp scatter plot with the hand-drawn line of best fit T of c equals 1.2c plus 30 drawn through it, rising from (0, 30) at the left edge to (50, 90) at the right edge." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 290" width="322" height="290" font-family="Helvetica, Arial, sans-serif">
  <line x1="80" y1="264" x2="80" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="264" x2="134" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="264" x2="188" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="264" x2="242" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="264" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="240" x2="296" y2="240" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="296" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="192" x2="296" y2="192" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="168" x2="296" y2="168" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="144" x2="296" y2="144" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="120" x2="296" y2="120" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="96" x2="296" y2="96" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="72" x2="296" y2="72" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="161" y="14" font-size="13" fill="currentColor" text-anchor="middle">Cricket Chirps vs. Temperature</text>
  <line x1="26" y1="264" x2="298" y2="264" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="46" x2="26" y2="264" stroke="currentColor" stroke-width="1"/>
  <polygon points="308,264 298,269 298,259" fill="currentColor"/>
  <polygon points="26,36 31,46 21,46" fill="currentColor"/>
  <text x="306" y="256" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">c, chirps</text>
  <text x="34" y="46" font-size="13" fill="currentColor" font-style="italic">T(c), °F</text>
  <line x1="80" y1="261" x2="80" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="279" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="134" y1="261" x2="134" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="279" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="188" y1="261" x2="188" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="279" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="242" y1="261" x2="242" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="279" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="296" y1="261" x2="296" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="279" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="23" y1="240" x2="29" y2="240" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="244" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="216" x2="29" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="220" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="192" x2="29" y2="192" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="196" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="168" x2="29" y2="168" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="172" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="144" x2="29" y2="144" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="148" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="120" x2="29" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="124" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="23" y1="96" x2="29" y2="96" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="100" font-size="11" fill="currentColor" text-anchor="end">70</text>
  <line x1="23" y1="72" x2="29" y2="72" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="76" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">90</text>
  <line x1="20" y1="195.2" x2="302" y2="44.8" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="263.6" cy="70.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="94.8" r="4" fill="currentColor"/>
  <circle cx="136.2" cy="127.2" r="4" fill="currentColor"/>
  <circle cx="204.2" cy="105.6" r="4" fill="currentColor"/>
  <circle cx="193.4" cy="100.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="91.2" r="4" fill="currentColor"/>
  <circle cx="125.9" cy="139.2" r="4" fill="currentColor"/>
  <circle cx="225.8" cy="87.6" r="4" fill="currentColor"/>
  <circle cx="166.4" cy="136.8" r="4" fill="currentColor"/>
</svg>
</div>

*Analysis.* This linear equation can then be used to approximate answers to
various questions we might ask about the trend.

## Recognizing interpolation or extrapolation

While the data for most examples does not fall perfectly on the line, the
equation is our best guess as to how the relationship will behave outside of
the values for which we have data. We use a process known as
**interpolation** when we predict a value inside the domain and range of the
data. The process of **extrapolation** is used when we predict a value
outside the domain and range of the data.

The graph below compares the two processes for the cricket-chirp data
addressed in the previous example. We can see that interpolation would occur
if we used our model to predict temperature when the values for chirps are
between 18.5 and 44. Extrapolation would occur if we used our model to
predict temperature when the values for chirps are less than 18.5 or greater
than 44.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The cricket-chirp scatter plot and its line of best fit, with a dashed rectangle enclosing the data from 18.5 to 44 chirps and 52 to 80.5 degrees. The inside of the rectangle is labelled Interpolation and the region outside it is labelled Extrapolation.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}],"lines":[{"slope":1.2,"intercept":30,"arrows":false}],"polylines":[{"through":[[18.5,52],[44,52],[44,80.5],[18.5,80.5],[18.5,52]],"dashed":true}],"texts":[{"at":[9,70],"text":"Extrapolation","anchor":"middle"},{"at":[31,57],"text":"Interpolation","anchor":"middle"}]}'>
<svg role="img" aria-label="The cricket-chirp scatter plot and its line of best fit, with a dashed rectangle enclosing the data from 18.5 to 44 chirps and 52 to 80.5 degrees. The inside of the rectangle is labelled Interpolation and the region outside it is labelled Extrapolation." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 290" width="322" height="290" font-family="Helvetica, Arial, sans-serif">
  <line x1="80" y1="264" x2="80" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="264" x2="134" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="264" x2="188" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="264" x2="242" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="264" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="240" x2="296" y2="240" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="296" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="192" x2="296" y2="192" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="168" x2="296" y2="168" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="144" x2="296" y2="144" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="120" x2="296" y2="120" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="96" x2="296" y2="96" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="72" x2="296" y2="72" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="161" y="14" font-size="13" fill="currentColor" text-anchor="middle">Cricket Chirps vs. Temperature</text>
  <line x1="26" y1="264" x2="298" y2="264" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="46" x2="26" y2="264" stroke="currentColor" stroke-width="1"/>
  <polygon points="308,264 298,269 298,259" fill="currentColor"/>
  <polygon points="26,36 31,46 21,46" fill="currentColor"/>
  <text x="306" y="256" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">c, chirps</text>
  <text x="34" y="46" font-size="13" fill="currentColor" font-style="italic">T(c), °F</text>
  <line x1="80" y1="261" x2="80" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="279" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="134" y1="261" x2="134" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="279" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="188" y1="261" x2="188" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="279" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="242" y1="261" x2="242" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="279" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="296" y1="261" x2="296" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="279" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="23" y1="240" x2="29" y2="240" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="244" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="216" x2="29" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="220" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="192" x2="29" y2="192" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="196" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="168" x2="29" y2="168" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="172" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="144" x2="29" y2="144" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="148" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="120" x2="29" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="124" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="23" y1="96" x2="29" y2="96" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="100" font-size="11" fill="currentColor" text-anchor="end">70</text>
  <line x1="23" y1="72" x2="29" y2="72" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="76" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">90</text>
  <line x1="20" y1="195.2" x2="302" y2="44.8" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="125.9,139.2 263.6,139.2 263.6,70.8 125.9,70.8 125.9,139.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <circle cx="263.6" cy="70.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="94.8" r="4" fill="currentColor"/>
  <circle cx="136.2" cy="127.2" r="4" fill="currentColor"/>
  <circle cx="204.2" cy="105.6" r="4" fill="currentColor"/>
  <circle cx="193.4" cy="100.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="91.2" r="4" fill="currentColor"/>
  <circle cx="125.9" cy="139.2" r="4" fill="currentColor"/>
  <circle cx="225.8" cy="87.6" r="4" fill="currentColor"/>
  <circle cx="166.4" cy="136.8" r="4" fill="currentColor"/>
  <text x="74.6" y="96" font-size="13" fill="currentColor" text-anchor="middle">Extrapolation</text>
  <text x="193.4" y="127.2" font-size="13" fill="currentColor" text-anchor="middle">Interpolation</text>
</svg>
</div>

*Interpolation occurs within the domain and range of the provided data
whereas extrapolation occurs outside.*

There is a difference between making predictions inside the domain and range
of values for which we have data and outside that domain and range.
Predicting a value outside of the domain and range has its limitations. When
our model no longer applies after a certain point, it is sometimes called
**model breakdown**. For example, predicting a cost function for a period of
two years may involve examining the data where the input is the time in years
and the output is the cost. But if we try to extrapolate a cost when $x=50$,
that is in 50 years, the model would not apply because we could not account
for factors fifty years in the future.

{{< callout type="info" >}}
  **Interpolation and extrapolation.** Different methods of making
  predictions are used to analyze data.

  - The method of **interpolation** involves predicting a value inside the
    domain and/or range of the data.
  - The method of **extrapolation** involves predicting a value outside the
    domain and/or range of the data.
  - **Model breakdown** occurs at the point when the model no longer applies.
{{< /callout >}}

**Example.** Use the cricket data from the table above to answer the
following questions.

- Would predicting the temperature when crickets are chirping 30 times in 15
  seconds be interpolation or extrapolation? Make the prediction, and discuss
  whether it is reasonable.
- Would predicting the number of chirps crickets will make at 40 degrees be
  interpolation or extrapolation? Make the prediction, and discuss whether it
  is reasonable.

**Solution.** The number of chirps in the data provided varied from 18.5 to
44. A prediction at 30 chirps per 15 seconds is inside the domain of our
data, so would be interpolation. Using our model:

$$
\begin{array}{lrcl}
& T(30) &=& 30+1.2(30) \\[4pt]
& &=& 66\ \text{degrees}
\end{array}
$$

Based on the data we have, this value seems reasonable.

The temperature values varied from 52 to 80.5. Predicting the number of
chirps at 40 degrees is extrapolation because 40 is outside the range of our
data. Using our model:

$$
\begin{array}{lrcl}
& 40 &=& 30+1.2c \\[4pt]
& 10 &=& 1.2c \\[4pt]
& c &\approx& 8.33
\end{array}
$$

We can compare the regions of interpolation and extrapolation using the graph
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The cricket-chirp scatter plot and its line of best fit, with the same dashed interpolation rectangle. Two predictions are marked on the line with dashed crosshairs: (30, 66) inside the rectangle and (8.33, 40) outside it to the left.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]},{"at":[30,66]},{"at":[8.33,40]}],"lines":[{"slope":1.2,"intercept":30,"arrows":false}],"polylines":[{"through":[[18.5,52],[44,52],[44,80.5],[18.5,80.5],[18.5,52]],"dashed":true}],"guides":[[30,66],[8.33,40]],"texts":[{"at":[20,74],"text":"Interpolation"},{"at":[11.5,30],"text":"Extrapolation"}]}'>
<svg role="img" aria-label="The cricket-chirp scatter plot and its line of best fit, with the same dashed interpolation rectangle. Two predictions are marked on the line with dashed crosshairs: (30, 66) inside the rectangle and (8.33, 40) outside it to the left." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 290" width="322" height="290" font-family="Helvetica, Arial, sans-serif">
  <line x1="80" y1="264" x2="80" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="264" x2="134" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="264" x2="188" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="264" x2="242" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="264" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="240" x2="296" y2="240" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="216" x2="296" y2="216" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="192" x2="296" y2="192" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="168" x2="296" y2="168" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="144" x2="296" y2="144" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="120" x2="296" y2="120" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="96" x2="296" y2="96" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="72" x2="296" y2="72" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="161" y="14" font-size="13" fill="currentColor" text-anchor="middle">Cricket Chirps vs. Temperature</text>
  <line x1="26" y1="264" x2="298" y2="264" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="46" x2="26" y2="264" stroke="currentColor" stroke-width="1"/>
  <polygon points="308,264 298,269 298,259" fill="currentColor"/>
  <polygon points="26,36 31,46 21,46" fill="currentColor"/>
  <text x="306" y="256" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">c, chirps</text>
  <text x="34" y="46" font-size="13" fill="currentColor" font-style="italic">T(c), °F</text>
  <line x1="80" y1="261" x2="80" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="279" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="134" y1="261" x2="134" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="279" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="188" y1="261" x2="188" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="279" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="242" y1="261" x2="242" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="279" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="296" y1="261" x2="296" y2="267" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="279" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="23" y1="240" x2="29" y2="240" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="244" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="216" x2="29" y2="216" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="220" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="192" x2="29" y2="192" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="196" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="168" x2="29" y2="168" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="172" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="144" x2="29" y2="144" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="148" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="120" x2="29" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="124" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="23" y1="96" x2="29" y2="96" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="100" font-size="11" fill="currentColor" text-anchor="end">70</text>
  <line x1="23" y1="72" x2="29" y2="72" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="76" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">90</text>
  <line x1="188" y1="264" x2="188" y2="105.6" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="26" y1="105.6" x2="188" y2="105.6" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="71" y1="264" x2="71" y2="168" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="26" y1="168" x2="71" y2="168" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="20" y1="195.2" x2="302" y2="44.8" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="125.9,139.2 263.6,139.2 263.6,70.8 125.9,70.8 125.9,139.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <circle cx="263.6" cy="70.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="94.8" r="4" fill="currentColor"/>
  <circle cx="136.2" cy="127.2" r="4" fill="currentColor"/>
  <circle cx="204.2" cy="105.6" r="4" fill="currentColor"/>
  <circle cx="193.4" cy="100.8" r="4" fill="currentColor"/>
  <circle cx="215" cy="91.2" r="4" fill="currentColor"/>
  <circle cx="125.9" cy="139.2" r="4" fill="currentColor"/>
  <circle cx="225.8" cy="87.6" r="4" fill="currentColor"/>
  <circle cx="166.4" cy="136.8" r="4" fill="currentColor"/>
  <circle cx="188" cy="105.6" r="4" fill="currentColor"/>
  <circle cx="71" cy="168" r="4" fill="currentColor"/>
  <text x="134" y="86.4" font-size="13" fill="currentColor">Interpolation</text>
  <text x="88.1" y="192" font-size="13" fill="currentColor">Extrapolation</text>
</svg>
</div>

*Analysis.* Our model predicts the crickets would chirp 8.33 times in 15
seconds. While this might be possible, we have no reason to believe our model
is valid outside the domain and range. In fact, generally crickets stop
chirping altogether below around 50 degrees.

{{< fillin
  question="According to the cricket data in the table above, what temperature, in degrees Fahrenheit, can we predict it is if we counted 20 chirps in 15 seconds?"
  answer="54"
  answerDisplay="$T(20)=1.2(20)+30=54$ degrees Fahrenheit"
  hint="Substitute $c=20$ into the eyeballed model $T(c)=1.2c+30$."
>}}

## Finding the line of best fit using a graphing utility

While eyeballing a line works reasonably well, there are statistical
techniques for fitting a line to data that minimize the differences between
the line and data values. (Technically, the method minimizes the sum of the
squared differences in the vertical direction between the line and the data
values.) One such technique is called **least squares regression** and can be
computed by many graphing calculators, spreadsheet software, statistical
software, and many web-based calculators. Least squares regression is one
means to determine the line that best fits the data, and here we will refer
to this method as linear regression.

{{< callout type="info" >}}
  **How to:** given data of input and corresponding outputs from a linear
  function, find the best fit line using linear regression.

  1. Enter the input in List 1 (**L1**).
  2. Enter the output in List 2 (**L2**).
  3. On a graphing utility, select Linear Regression (**LinReg**).
{{< /callout >}}

**Example.** Find the least squares regression line using the cricket-chirp
data in the table above.

**Solution.** Enter the input (chirps) in List 1 (L1), and enter the output
(temperature) in List 2 (L2).

| **L1** | 44 | 35 | 20.4 | 33 | 31 | 35 | 18.5 | 37 | 26 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **L2** | 80.5 | 70.5 | 57 | 66 | 68 | 72 | 52 | 73.5 | 53 |

On a graphing utility, select Linear Regression (LinReg). Using the cricket
chirp data from earlier, with technology we obtain the equation:

$$T(c)=30.281+1.143c$$

*Analysis.* Notice that this line is quite similar to the equation we
"eyeballed" but should fit the data better. Notice also that using this
equation would change our prediction for the temperature when hearing 30
chirps in 15 seconds from 66 degrees to:

$$
\begin{array}{lrcl}
& T(30) &=& 30.281+1.143(30) \\[4pt]
& &=& 64.571 \\[4pt]
& &\approx& 64.6\ \text{degrees}
\end{array}
$$

The graph of the scatter plot with the least squares regression line is shown
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The cricket-chirp scatter plot with the least squares regression line T of c equals 30.281 plus 1.143c drawn through it, rising from about (0, 30.3) to about (50, 87.4). Temperature is shown from 30 to 90 degrees Fahrenheit.","xMin":0,"xMax":50,"yMin":30,"yMax":90,"xUnit":5.4,"yUnit":3.2,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Number of Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}],"lines":[{"slope":1.143,"intercept":30.281,"arrows":false}]}'>
<svg role="img" aria-label="The cricket-chirp scatter plot with the least squares regression line T of c equals 30.281 plus 1.143c drawn through it, rising from about (0, 30.3) to about (50, 87.4). Temperature is shown from 30 to 90 degrees Fahrenheit." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 266" width="322" height="266" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="240" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="240" x2="80" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="240" x2="134" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="240" x2="188" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="240" x2="242" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="240" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="240" x2="296" y2="240" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="296" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="296" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="144" x2="296" y2="144" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="112" x2="296" y2="112" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="296" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="296" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="161" y="14" font-size="13" fill="currentColor" text-anchor="middle">Number of Cricket Chirps vs. Temperature</text>
  <line x1="26" y1="240" x2="298" y2="240" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="46" x2="26" y2="240" stroke="currentColor" stroke-width="1"/>
  <polygon points="308,240 298,245 298,235" fill="currentColor"/>
  <polygon points="26,36 31,46 21,46" fill="currentColor"/>
  <text x="306" y="232" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">c, chirps</text>
  <text x="34" y="46" font-size="13" fill="currentColor" font-style="italic">T(c), °F</text>
  <line x1="26" y1="237" x2="26" y2="243" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="255" font-size="11" fill="currentColor" text-anchor="middle">0</text>
  <line x1="80" y1="237" x2="80" y2="243" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="255" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="134" y1="237" x2="134" y2="243" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="255" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="188" y1="237" x2="188" y2="243" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="255" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="242" y1="237" x2="242" y2="243" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="255" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="296" y1="237" x2="296" y2="243" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="255" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="23" y1="240" x2="29" y2="240" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="244" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="208" x2="29" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="212" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="176" x2="29" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="180" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="144" x2="29" y2="144" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="148" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="23" y1="112" x2="29" y2="112" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="116" font-size="11" fill="currentColor" text-anchor="end">70</text>
  <line x1="23" y1="80" x2="29" y2="80" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="84" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">90</text>
  <line x1="20" y1="243.2" x2="302" y2="52.2" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="263.6" cy="78.4" r="4" fill="currentColor"/>
  <circle cx="215" cy="110.4" r="4" fill="currentColor"/>
  <circle cx="136.2" cy="153.6" r="4" fill="currentColor"/>
  <circle cx="204.2" cy="124.8" r="4" fill="currentColor"/>
  <circle cx="193.4" cy="118.4" r="4" fill="currentColor"/>
  <circle cx="215" cy="105.6" r="4" fill="currentColor"/>
  <circle cx="125.9" cy="169.6" r="4" fill="currentColor"/>
  <circle cx="225.8" cy="100.8" r="4" fill="currentColor"/>
  <circle cx="166.4" cy="166.4" r="4" fill="currentColor"/>
</svg>
</div>

{{< callout type="info" >}}
  **Q&A.** *Will there ever be a case where two different lines will serve as
  the best fit for the data?*

  No. There is only one best fit line.
{{< /callout >}}

## Distinguishing between linear and non-linear models

As we saw above with the cricket-chirp model, some data exhibit strong linear
trends, but other data, like the final exam scores plotted by age, are
clearly nonlinear. Most calculators and computer software can also provide us
with the **correlation coefficient**, which is a measure of how closely the
line fits the data. Many graphing calculators require the user to turn a
"diagnostic on" selection to find the correlation coefficient, which
mathematicians label as $r$. The correlation coefficient provides an easy way
to get an idea of how close to a line the data falls.

We should compute the correlation coefficient only for data that follows a
linear pattern or to determine the degree to which a data set is linear. If
the data exhibits a nonlinear pattern, the correlation coefficient for a
linear regression is meaningless. To get a sense for the relationship between
the value of $r$ and the graph of the data, the plots below show data sets
with their correlation coefficients. Remember, for all plots, the horizontal
axis shows the input and the vertical axis shows the output.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of sixteen points lying exactly on a rising straight line, labelled r = 1.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 1.0","points":[{"at":[1,1.8]},{"at":[1.5,2.2]},{"at":[2,2.6]},{"at":[2.5,3]},{"at":[3,3.4]},{"at":[3.5,3.8]},{"at":[4,4.2]},{"at":[4.5,4.6]},{"at":[5,5]},{"at":[5.5,5.4]},{"at":[6,5.8]},{"at":[6.5,6.2]},{"at":[7,6.6]},{"at":[7.5,7]},{"at":[8,7.4]},{"at":[8.5,7.8]}]}'>
<svg role="img" aria-label="A scatter plot of sixteen points lying exactly on a rising straight line, labelled r = 1.0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = 1.0</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="31" cy="146.6" r="4" fill="currentColor"/>
  <circle cx="37.5" cy="141.4" r="4" fill="currentColor"/>
  <circle cx="44" cy="136.2" r="4" fill="currentColor"/>
  <circle cx="50.5" cy="131" r="4" fill="currentColor"/>
  <circle cx="57" cy="125.8" r="4" fill="currentColor"/>
  <circle cx="63.5" cy="120.6" r="4" fill="currentColor"/>
  <circle cx="70" cy="115.4" r="4" fill="currentColor"/>
  <circle cx="76.5" cy="110.2" r="4" fill="currentColor"/>
  <circle cx="83" cy="105" r="4" fill="currentColor"/>
  <circle cx="89.5" cy="99.8" r="4" fill="currentColor"/>
  <circle cx="96" cy="94.6" r="4" fill="currentColor"/>
  <circle cx="102.5" cy="89.4" r="4" fill="currentColor"/>
  <circle cx="109" cy="84.2" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="79" r="4" fill="currentColor"/>
  <circle cx="122" cy="73.8" r="4" fill="currentColor"/>
  <circle cx="128.5" cy="68.6" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of sixteen points scattered narrowly about a rising trend, labelled r = 0.8.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.8","points":[{"at":[1.5,3.4]},{"at":[2.4,2]},{"at":[3.3,4.9]},{"at":[4.3,4]},{"at":[5.2,6.6]},{"at":[6.1,4]},{"at":[7.1,6.9]},{"at":[8,5.9]},{"at":[8.9,8.8]},{"at":[1.9,1.5]},{"at":[3.8,4.6]},{"at":[5.7,7.1]},{"at":[7.5,5.9]},{"at":[2.9,4.6]},{"at":[4.7,3.4]},{"at":[6.6,6.4]}]}'>
<svg role="img" aria-label="A scatter plot of sixteen points scattered narrowly about a rising trend, labelled r = 0.8." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = 0.8</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="37.5" cy="125.8" r="4" fill="currentColor"/>
  <circle cx="49.2" cy="144" r="4" fill="currentColor"/>
  <circle cx="60.9" cy="106.3" r="4" fill="currentColor"/>
  <circle cx="73.9" cy="118" r="4" fill="currentColor"/>
  <circle cx="85.6" cy="84.2" r="4" fill="currentColor"/>
  <circle cx="97.3" cy="118" r="4" fill="currentColor"/>
  <circle cx="110.3" cy="80.3" r="4" fill="currentColor"/>
  <circle cx="122" cy="93.3" r="4" fill="currentColor"/>
  <circle cx="133.7" cy="55.6" r="4" fill="currentColor"/>
  <circle cx="42.7" cy="150.5" r="4" fill="currentColor"/>
  <circle cx="67.4" cy="110.2" r="4" fill="currentColor"/>
  <circle cx="92.1" cy="77.7" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="93.3" r="4" fill="currentColor"/>
  <circle cx="55.7" cy="110.2" r="4" fill="currentColor"/>
  <circle cx="79.1" cy="125.8" r="4" fill="currentColor"/>
  <circle cx="103.8" cy="86.8" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of sixteen points scattered widely about a faint rising trend, labelled r = 0.4.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.4","points":[{"at":[1.5,5]},{"at":[2.4,2.3]},{"at":[3.3,6.1]},{"at":[4.3,4]},{"at":[5.2,7.3]},{"at":[6.1,2.6]},{"at":[7.1,6.4]},{"at":[8,4.2]},{"at":[8.9,8]},{"at":[1.9,1.8]},{"at":[3.8,5.3]},{"at":[5.7,7.8]},{"at":[7.5,4.6]},{"at":[2.9,5.9]},{"at":[4.7,2.7]},{"at":[6.6,5.9]}]}'>
<svg role="img" aria-label="A scatter plot of sixteen points scattered widely about a faint rising trend, labelled r = 0.4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = 0.4</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="37.5" cy="105" r="4" fill="currentColor"/>
  <circle cx="49.2" cy="140.1" r="4" fill="currentColor"/>
  <circle cx="60.9" cy="90.7" r="4" fill="currentColor"/>
  <circle cx="73.9" cy="118" r="4" fill="currentColor"/>
  <circle cx="85.6" cy="75.1" r="4" fill="currentColor"/>
  <circle cx="97.3" cy="136.2" r="4" fill="currentColor"/>
  <circle cx="110.3" cy="86.8" r="4" fill="currentColor"/>
  <circle cx="122" cy="115.4" r="4" fill="currentColor"/>
  <circle cx="133.7" cy="66" r="4" fill="currentColor"/>
  <circle cx="42.7" cy="146.6" r="4" fill="currentColor"/>
  <circle cx="67.4" cy="101.1" r="4" fill="currentColor"/>
  <circle cx="92.1" cy="68.6" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="110.2" r="4" fill="currentColor"/>
  <circle cx="55.7" cy="93.3" r="4" fill="currentColor"/>
  <circle cx="79.1" cy="134.9" r="4" fill="currentColor"/>
  <circle cx="103.8" cy="93.3" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of sixteen points spread over the grid with no rising or falling trend, labelled r = 0.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.0","points":[{"at":[1.5,6.3]},{"at":[2.4,3]},{"at":[3.3,6.8]},{"at":[4.3,4.2]},{"at":[5.2,7.4]},{"at":[6.1,2]},{"at":[7.1,5.8]},{"at":[8,3]},{"at":[8.9,6.8]},{"at":[1.9,2.6]},{"at":[3.8,5.8]},{"at":[5.7,7.8]},{"at":[7.5,3.6]},{"at":[2.9,6.8]},{"at":[4.7,2.6]},{"at":[6.6,5.4]}]}'>
<svg role="img" aria-label="A scatter plot of sixteen points spread over the grid with no rising or falling trend, labelled r = 0.0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = 0.0</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="37.5" cy="88.1" r="4" fill="currentColor"/>
  <circle cx="49.2" cy="131" r="4" fill="currentColor"/>
  <circle cx="60.9" cy="81.6" r="4" fill="currentColor"/>
  <circle cx="73.9" cy="115.4" r="4" fill="currentColor"/>
  <circle cx="85.6" cy="73.8" r="4" fill="currentColor"/>
  <circle cx="97.3" cy="144" r="4" fill="currentColor"/>
  <circle cx="110.3" cy="94.6" r="4" fill="currentColor"/>
  <circle cx="122" cy="131" r="4" fill="currentColor"/>
  <circle cx="133.7" cy="81.6" r="4" fill="currentColor"/>
  <circle cx="42.7" cy="136.2" r="4" fill="currentColor"/>
  <circle cx="67.4" cy="94.6" r="4" fill="currentColor"/>
  <circle cx="92.1" cy="68.6" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="123.2" r="4" fill="currentColor"/>
  <circle cx="55.7" cy="81.6" r="4" fill="currentColor"/>
  <circle cx="79.1" cy="136.2" r="4" fill="currentColor"/>
  <circle cx="103.8" cy="99.8" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of sixteen points scattered widely about a faint falling trend, labelled r = −0.4.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = −0.4","points":[{"at":[1.5,7.4]},{"at":[2.4,4]},{"at":[3.3,7.2]},{"at":[4.3,4.5]},{"at":[5.2,7.2]},{"at":[6.1,1.8]},{"at":[7.1,5]},{"at":[8,2.1]},{"at":[8.9,5.3]},{"at":[1.9,3.9]},{"at":[3.8,6.1]},{"at":[5.7,7.3]},{"at":[7.5,2.9]},{"at":[2.9,7.4]},{"at":[4.7,2.9]},{"at":[6.6,4.8]}]}'>
<svg role="img" aria-label="A scatter plot of sixteen points scattered widely about a faint falling trend, labelled r = −0.4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = −0.4</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="37.5" cy="73.8" r="4" fill="currentColor"/>
  <circle cx="49.2" cy="118" r="4" fill="currentColor"/>
  <circle cx="60.9" cy="76.4" r="4" fill="currentColor"/>
  <circle cx="73.9" cy="111.5" r="4" fill="currentColor"/>
  <circle cx="85.6" cy="76.4" r="4" fill="currentColor"/>
  <circle cx="97.3" cy="146.6" r="4" fill="currentColor"/>
  <circle cx="110.3" cy="105" r="4" fill="currentColor"/>
  <circle cx="122" cy="142.7" r="4" fill="currentColor"/>
  <circle cx="133.7" cy="101.1" r="4" fill="currentColor"/>
  <circle cx="42.7" cy="119.3" r="4" fill="currentColor"/>
  <circle cx="67.4" cy="90.7" r="4" fill="currentColor"/>
  <circle cx="92.1" cy="75.1" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="132.3" r="4" fill="currentColor"/>
  <circle cx="55.7" cy="73.8" r="4" fill="currentColor"/>
  <circle cx="79.1" cy="132.3" r="4" fill="currentColor"/>
  <circle cx="103.8" cy="107.6" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of sixteen points scattered narrowly about a falling trend, labelled r = −0.8.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = −0.8","points":[{"at":[1.5,8.2]},{"at":[2.4,5.6]},{"at":[3.3,7.2]},{"at":[4.3,5]},{"at":[5.2,6.3]},{"at":[6.1,2.4]},{"at":[7.1,4]},{"at":[8,1.7]},{"at":[8.9,3.4]},{"at":[1.9,5.7]},{"at":[3.8,6.3]},{"at":[5.7,6.2]},{"at":[7.5,2.4]},{"at":[2.9,7.6]},{"at":[4.7,3.8]},{"at":[6.6,4.1]}]}'>
<svg role="img" aria-label="A scatter plot of sixteen points scattered narrowly about a falling trend, labelled r = −0.8." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = −0.8</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="37.5" cy="63.4" r="4" fill="currentColor"/>
  <circle cx="49.2" cy="97.2" r="4" fill="currentColor"/>
  <circle cx="60.9" cy="76.4" r="4" fill="currentColor"/>
  <circle cx="73.9" cy="105" r="4" fill="currentColor"/>
  <circle cx="85.6" cy="88.1" r="4" fill="currentColor"/>
  <circle cx="97.3" cy="138.8" r="4" fill="currentColor"/>
  <circle cx="110.3" cy="118" r="4" fill="currentColor"/>
  <circle cx="122" cy="147.9" r="4" fill="currentColor"/>
  <circle cx="133.7" cy="125.8" r="4" fill="currentColor"/>
  <circle cx="42.7" cy="95.9" r="4" fill="currentColor"/>
  <circle cx="67.4" cy="88.1" r="4" fill="currentColor"/>
  <circle cx="92.1" cy="89.4" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="138.8" r="4" fill="currentColor"/>
  <circle cx="55.7" cy="71.2" r="4" fill="currentColor"/>
  <circle cx="79.1" cy="120.6" r="4" fill="currentColor"/>
  <circle cx="103.8" cy="116.7" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of sixteen points lying exactly on a falling straight line, labelled r = −1.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = −1.0","points":[{"at":[1,8.2]},{"at":[1.5,7.8]},{"at":[2,7.4]},{"at":[2.5,7]},{"at":[3,6.6]},{"at":[3.5,6.2]},{"at":[4,5.8]},{"at":[4.5,5.4]},{"at":[5,5]},{"at":[5.5,4.6]},{"at":[6,4.2]},{"at":[6.5,3.8]},{"at":[7,3.4]},{"at":[7.5,3]},{"at":[8,2.6]},{"at":[8.5,2.2]}]}'>
<svg role="img" aria-label="A scatter plot of sixteen points lying exactly on a falling straight line, labelled r = −1.0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = −1.0</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="31" cy="63.4" r="4" fill="currentColor"/>
  <circle cx="37.5" cy="68.6" r="4" fill="currentColor"/>
  <circle cx="44" cy="73.8" r="4" fill="currentColor"/>
  <circle cx="50.5" cy="79" r="4" fill="currentColor"/>
  <circle cx="57" cy="84.2" r="4" fill="currentColor"/>
  <circle cx="63.5" cy="89.4" r="4" fill="currentColor"/>
  <circle cx="70" cy="94.6" r="4" fill="currentColor"/>
  <circle cx="76.5" cy="99.8" r="4" fill="currentColor"/>
  <circle cx="83" cy="105" r="4" fill="currentColor"/>
  <circle cx="89.5" cy="110.2" r="4" fill="currentColor"/>
  <circle cx="96" cy="115.4" r="4" fill="currentColor"/>
  <circle cx="102.5" cy="120.6" r="4" fill="currentColor"/>
  <circle cx="109" cy="125.8" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="131" r="4" fill="currentColor"/>
  <circle cx="122" cy="136.2" r="4" fill="currentColor"/>
  <circle cx="128.5" cy="141.4" r="4" fill="currentColor"/>
</svg>
</div>

A correlation coefficient near 0 does not mean the two variables are
unrelated — it means they are not *linearly* related. The points below lie on
a perfectly definite curve, yet their correlation coefficient is exactly 0.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot of seventeen points forming a symmetric arch that rises to a peak in the middle and falls again, labelled r = 0.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.0","points":[{"at":[1,3.52]},{"at":[1.5,4.87]},{"at":[2,5.13]},{"at":[2.5,6.65]},{"at":[3,6.68]},{"at":[3.5,7.62]},{"at":[4,7.42]},{"at":[4.5,8.28]},{"at":[5,8]},{"at":[5.5,8.28]},{"at":[6,7.42]},{"at":[6.5,7.62]},{"at":[7,6.68]},{"at":[7.5,6.65]},{"at":[8,5.13]},{"at":[8.5,4.87]},{"at":[9,3.52]}]}'>
<svg role="img" aria-label="A scatter plot of seventeen points forming a symmetric arch that rises to a peak in the middle and falls again, labelled r = 0.0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 188" width="166" height="188" font-family="Helvetica, Arial, sans-serif">
  <text x="83" y="14" font-size="13" fill="currentColor" text-anchor="middle">r = 0.0</text>
  <line x1="18" y1="170" x2="150" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="18" y1="38" x2="18" y2="170" stroke="currentColor" stroke-width="1"/>
  <polygon points="160,170 150,175 150,165" fill="currentColor"/>
  <polygon points="18,28 23,38 13,38" fill="currentColor"/>
  <text x="158" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="26" y="38" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="31" cy="124.2" r="4" fill="currentColor"/>
  <circle cx="37.5" cy="106.7" r="4" fill="currentColor"/>
  <circle cx="44" cy="103.3" r="4" fill="currentColor"/>
  <circle cx="50.5" cy="83.5" r="4" fill="currentColor"/>
  <circle cx="57" cy="83.2" r="4" fill="currentColor"/>
  <circle cx="63.5" cy="70.9" r="4" fill="currentColor"/>
  <circle cx="70" cy="73.5" r="4" fill="currentColor"/>
  <circle cx="76.5" cy="62.4" r="4" fill="currentColor"/>
  <circle cx="83" cy="66" r="4" fill="currentColor"/>
  <circle cx="89.5" cy="62.4" r="4" fill="currentColor"/>
  <circle cx="96" cy="73.5" r="4" fill="currentColor"/>
  <circle cx="102.5" cy="70.9" r="4" fill="currentColor"/>
  <circle cx="109" cy="83.2" r="4" fill="currentColor"/>
  <circle cx="115.5" cy="83.5" r="4" fill="currentColor"/>
  <circle cx="122" cy="103.3" r="4" fill="currentColor"/>
  <circle cx="128.5" cy="106.7" r="4" fill="currentColor"/>
  <circle cx="135" cy="124.2" r="4" fill="currentColor"/>
</svg>
</div>

{{< callout type="info" >}}
  **Correlation coefficient.** The **correlation coefficient** is a value,
  $r$, between $-1$ and 1.

  - $r>0$ suggests a positive (increasing) relationship
  - $r<0$ suggests a negative (decreasing) relationship
  - The closer the value is to 0, the more scattered the data.
  - The closer the value is to 1 or $-1$, the less scattered the data is.
{{< /callout >}}

**Example.** Calculate the correlation coefficient for the cricket-chirp data
in the table above.

**Solution.** Because the data appear to follow a linear pattern, we can use
technology to calculate $r$. Enter the inputs and corresponding outputs and
select the Linear Regression. The calculator will also provide you with the
correlation coefficient, $r=0.9509$. This value is very close to 1, which
suggests a strong increasing linear relationship.

Note: for some calculators, the Diagnostics must be turned "on" in order to
get the correlation coefficient when linear regression is performed:
[2nd]>[0]>[alpha][$x^{-1}$], then scroll to **DIAGNOSTICSON**.

## Predicting with a regression line

Once we determine that a set of data is linear using the correlation
coefficient, we can use the regression line to make predictions. As we
learned above, a regression line is a line that is closest to the data in the
scatter plot, which means that only one such line is a best fit for the data.

**Example.** Gasoline consumption in the United States has been steadily
increasing. Consumption data from 1994 to 2004 is shown in the table below.
Determine whether the trend is linear, and if so, find a model for the data.
Use the model to predict the consumption in 2008.

| **Year** | '94 | '95 | '96 | '97 | '98 | '99 | '00 | '01 | '02 | '03 | '04 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **Consumption (billions of gallons)** | 113 | 116 | 118 | 119 | 123 | 125 | 126 | 128 | 131 | 133 | 136 |

The scatter plot of the data, including the least squares regression line, is
shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A scatter plot titled Gas Consumption versus Year. Years after 1994 run from 0 to 14 along the horizontal axis and consumption from 100 to 150 billion gallons along the vertical axis. Eleven points rise steadily from (0, 113) to (10, 136), and the least squares regression line C of t equals 113.318 plus 2.209t is drawn through them and continues to (14, 144.244).","xMin":0,"xMax":14,"yMin":100,"yMax":150,"xUnit":18,"yUnit":4,"xGridStep":1,"yGridStep":10,"tickLabels":true,"xTickStep":1,"yTickStep":10,"caption":"Gas Consumption vs. Year","xLabel":"t","yLabel":"C(t)","points":[{"at":[0,113]},{"at":[1,116]},{"at":[2,118]},{"at":[3,119]},{"at":[4,123]},{"at":[5,125]},{"at":[6,126]},{"at":[7,128]},{"at":[8,131]},{"at":[9,133]},{"at":[10,136]}],"lines":[{"slope":2.209,"intercept":113.318,"arrows":false}]}'>
<svg role="img" aria-label="A scatter plot titled Gas Consumption versus Year. Years after 1994 run from 0 to 14 along the horizontal axis and consumption from 100 to 150 billion gallons along the vertical axis. Eleven points rise steadily from (0, 113) to (10, 136), and the least squares regression line C of t equals 113.318 plus 2.209t is drawn through them and continues to (14, 144.244)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 274" width="304" height="274" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="248" x2="26" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="248" x2="44" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="248" x2="62" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="248" x2="80" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="248" x2="98" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="248" x2="116" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="248" x2="134" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="248" x2="152" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="248" x2="170" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="248" x2="188" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="248" x2="206" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="248" x2="224" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="248" x2="242" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="248" x2="260" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="248" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="248" x2="278" y2="248" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="278" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="168" x2="278" y2="168" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="278" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="88" x2="278" y2="88" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="278" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <text x="152" y="14" font-size="13" fill="currentColor" text-anchor="middle">Gas Consumption vs. Year</text>
  <line x1="26" y1="248" x2="280" y2="248" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="46" x2="26" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="290,248 280,253 280,243" fill="currentColor"/>
  <polygon points="26,36 31,46 21,46" fill="currentColor"/>
  <text x="288" y="240" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="34" y="46" font-size="13" fill="currentColor" font-style="italic">C(t)</text>
  <line x1="26" y1="245" x2="26" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="263" font-size="11" fill="currentColor" text-anchor="middle">0</text>
  <line x1="44" y1="245" x2="44" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="263" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="62" y1="245" x2="62" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="263" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="80" y1="245" x2="80" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="263" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="98" y1="245" x2="98" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="263" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="116" y1="245" x2="116" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="263" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="134" y1="245" x2="134" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="263" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="152" y1="245" x2="152" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="263" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="170" y1="245" x2="170" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="263" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="188" y1="245" x2="188" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="263" font-size="11" fill="currentColor" text-anchor="middle">9</text>
  <line x1="206" y1="245" x2="206" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="263" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="224" y1="245" x2="224" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="263" font-size="11" fill="currentColor" text-anchor="middle">11</text>
  <line x1="242" y1="245" x2="242" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="263" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="260" y1="245" x2="260" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="263" font-size="11" fill="currentColor" text-anchor="middle">13</text>
  <line x1="278" y1="245" x2="278" y2="251" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="263" font-size="11" fill="currentColor" text-anchor="middle">14</text>
  <line x1="23" y1="248" x2="29" y2="248" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="252" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="23" y1="208" x2="29" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="212" font-size="11" fill="currentColor" text-anchor="end">110</text>
  <line x1="23" y1="168" x2="29" y2="168" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="172" font-size="11" fill="currentColor" text-anchor="end">120</text>
  <line x1="23" y1="128" x2="29" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="132" font-size="11" fill="currentColor" text-anchor="end">130</text>
  <line x1="23" y1="88" x2="29" y2="88" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="92" font-size="11" fill="currentColor" text-anchor="end">140</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">150</text>
  <line x1="20" y1="197.7" x2="284" y2="68.1" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="26" cy="196" r="4" fill="currentColor"/>
  <circle cx="44" cy="184" r="4" fill="currentColor"/>
  <circle cx="62" cy="176" r="4" fill="currentColor"/>
  <circle cx="80" cy="172" r="4" fill="currentColor"/>
  <circle cx="98" cy="156" r="4" fill="currentColor"/>
  <circle cx="116" cy="148" r="4" fill="currentColor"/>
  <circle cx="134" cy="144" r="4" fill="currentColor"/>
  <circle cx="152" cy="136" r="4" fill="currentColor"/>
  <circle cx="170" cy="124" r="4" fill="currentColor"/>
  <circle cx="188" cy="116" r="4" fill="currentColor"/>
  <circle cx="206" cy="104" r="4" fill="currentColor"/>
</svg>
</div>

**Solution.** We can introduce new input variable, $t$, representing years
since 1994.

The least squares regression equation is:

$$C(t)=113.318+2.209t$$

Using technology, the correlation coefficient was calculated to be 0.9965,
suggesting a very strong increasing linear trend.

Using this to predict consumption in 2008 $(t=14)$,

$$
\begin{array}{lrcl}
& C(14) &=& 113.318+2.209(14) \\[4pt]
& &=& 144.244
\end{array}
$$

The model predicts 144.244 billion gallons of gasoline consumption in 2008.

{{< fillin
  question="Use the model $C(t)=113.318+2.209t$ created above to predict the gas consumption in 2011, in billions of gallons."
  answer="150.871"
  answerDisplay="$C(17)=113.318+2.209(17)=150.871$ billion gallons"
  hint="2011 is 17 years after 1994, so evaluate the model at $t=17$."
>}}

{{< multiplechoice
  question="Is that 2011 prediction an interpolation or an extrapolation?"
  answer="Extrapolation"
  hint="Compare 2011 with the span of years the data actually covers."
>}}
Extrapolation
Interpolation
{{< /multiplechoice >}}

## Key concepts

- Scatter plots show the relationship between two sets of data.
- Scatter plots may represent linear or non-linear models.
- The line of best fit may be estimated or calculated, using a calculator or
  statistical software.
- Interpolation can be used to predict values inside the domain and range of
  the data, whereas extrapolation can be used to predict values outside the
  domain and range of the data.
- The correlation coefficient, $r$, indicates the degree of linear
  relationship between data.
- A regression line best fits the data.
- The least squares regression line is found by minimizing the squares of the
  distances of points from a line passing through the data and may be used to
  make predictions regarding either of the variables.

## Key terms

**correlation coefficient** — a value, $r$, between $-1$ and 1 that indicates
the degree of linear correlation of variables, or how closely a regression
line fits a data set. **extrapolation** — predicting a value outside the
domain and range of the data. **interpolation** — predicting a value inside
the domain and range of the data. **least squares regression** — a
statistical technique for fitting a line to data in a way that minimizes the
differences between the line and data values. **model breakdown** — when a
model no longer applies after a certain point.

---

<small>This section is adapted from [Precalculus 2e, Section 2.4: Fitting Linear Models to Data](https://openstax.org/books/precalculus-2e/pages/2-4-fitting-linear-models-to-data) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every scatter plot and fitted line as an accessible inline SVG plotted from the source's own numbers — the cricket-chirp, interpolation, and gasoline figures use the exact table values together with the stated equations $T(c)=1.2c+30$, $T(c)=30.281+1.143c$, and $C(t)=113.318+2.209t$, each of which was recomputed from the data and matched to the source's three-decimal rounding; the opening "Final Exam Score vs. Age" scatter has no published data table, so its fourteen points were measured off the source figure; replaced the source's twenty-one-panel Wikimedia correlation composite (credit: "DenisBoigelot") with eight panels built from explicit point sets whose correlation coefficients were computed exactly, covering the same values $r=1.0,\ 0.8,\ 0.4,\ 0.0,\ -0.4,\ -0.8,\ -1.0$ plus one nonlinear arch with $r=0$, and added the one sentence needed to introduce that arch; drew the interpolation region as a dashed rectangle and marked the two predictions with dashed crosshairs, because the source's red and blue highlighting cannot be carried by a single-colour accessible SVG; drew the vertical axes over their full range instead of reproducing the source's compressed axis breaks; presented the three data tables as Markdown tables; omitted the media links and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is the word "interpolation" or "extrapolation", which cannot be graded as free-response math.</small>
