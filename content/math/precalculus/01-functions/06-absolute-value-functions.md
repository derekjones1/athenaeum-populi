---
title: Absolute Value Functions
description: >-
  Absolute value as distance, graphing absolute value functions and their
  transformations, and solving absolute value equations and inequalities both
  algebraically and graphically — adapted from OpenStax Precalculus 2e,
  Section 1.6.
source_section: "1.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph an absolute value function
- Solve an absolute value equation
- Solve an absolute value inequality
{{< /callout >}}

Until the 1920s, the so-called spiral nebulae were believed to be clouds of
dust and gas in our own galaxy, some tens of thousands of light years away.
Then, astronomer Edwin Hubble proved that these objects are galaxies in their
own right, at distances of millions of light years. Today, astronomers can
detect galaxies that are billions of light years away. Distances in the
universe can be measured in all directions. As such, it is useful to consider
distance as an absolute value function. In this section, we will investigate
**absolute value functions**.

## Understanding absolute value

Recall that in its basic form $f(x)=\lvert x\rvert$, the absolute value
function, is one of our toolkit functions. The **absolute value** function is
commonly thought of as providing the distance the number is from zero on a
number line. Algebraically, for whatever the input value is, the output is the
value without regard to sign.

{{< callout type="info" >}}
  **Absolute value function.** The absolute value function can be defined as a
  piecewise function

  $$
  f(x)=\lvert x\rvert=\begin{cases}
  x & \text{if }\ x\ge 0 \\[4pt]
  -x & \text{if }\ x<0
  \end{cases}
  $$
{{< /callout >}}

**Example.** Describe all values $x$ within or including a distance of 4 from
the number 5.

**Solution.** We want the distance between $x$ and 5 to be less than or equal
to 4. We can draw a number line, such as the one below, to represent the
condition to be satisfied: four units in each direction from 5.

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from 0 to 10. Solid dots sit at 1, 5, and 9, and heavy stretches run from 1 to 5 and from 5 to 9 — four units each way from 5.","min":0,"max":10,"title":"4 units each way from 5","intervals":[{"from":1,"to":5},{"from":5,"to":9}]}'>
<svg role="img" aria-label="A number line from 0 to 10. Solid dots sit at 1, 5, and 9, and heavy stretches run from 1 to 5 and from 5 to 9 — four units each way from 5." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="54.4" y1="45" x2="160" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="160" y1="45" x2="265.6" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="54.4" y1="39" x2="54.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="80.8" y1="39" x2="80.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="80.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="107.2" y1="39" x2="107.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="107.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="133.6" y1="39" x2="133.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="133.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="186.4" y1="39" x2="186.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="186.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="212.8" y1="39" x2="212.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="212.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <line x1="239.2" y1="39" x2="239.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">8</text>
  <line x1="265.6" y1="39" x2="265.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">9</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <circle cx="54.4" cy="45" r="5" fill="currentColor"/>
  <circle cx="160" cy="45" r="5" fill="currentColor"/>
  <circle cx="160" cy="45" r="5" fill="currentColor"/>
  <circle cx="265.6" cy="45" r="5" fill="currentColor"/>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">4 units each way from 5</text>
</svg>
</div>

The distance from $x$ to 5 can be represented using the absolute value as
$\lvert x-5\rvert$. We want the values of $x$ that satisfy the condition
$\lvert x-5\rvert\le 4$.

Note that

$$
\begin{array}{lrcl}
& -4 &\le& x-5 \\[4pt]
& 1 &\le& x
\end{array}
\qquad
\begin{array}{lrcl}
& x-5 &\le& 4 \\[4pt]
& x &\le& 9
\end{array}
$$

So $\lvert x-5\rvert\le 4$ is equivalent to $1\le x\le 9$. However,
mathematicians generally prefer absolute value notation.

{{< multiplechoice
  question="Describe all values $x$ within a distance of 3 from the number 2."
  answer="$\lvert x-2\rvert\le 3$"
  hint="The distance between $x$ and 2 is $\lvert x-2\rvert$; \"within 3\" bounds that distance."
>}}
$\lvert x-3\rvert\le 2$
$\lvert x-2\rvert\ge 3$
$\lvert x-2\rvert\le 3$
$\lvert x+2\rvert\le 3$
{{< /multiplechoice >}}

**Example.** Electrical parts, such as resistors and capacitors, come with
specified values of their operating parameters: resistance, capacitance, etc.
However, due to imprecision in manufacturing, the actual values of these
parameters vary somewhat from piece to piece, even when they are supposed to
be the same. The best that manufacturers can do is to try to guarantee that
the variations will stay within a specified range, often $\pm 1\%$,
$\pm 5\%$, or $\pm 10\%$.

Suppose we have a resistor rated at 680 ohms, $\pm 5\%$. Use the absolute
value function to express the range of possible values of the actual
resistance.

**Solution.** 5% of 680 ohms is 34 ohms. The absolute value of the difference
between the actual and nominal resistance should not exceed the stated
variability, so, with the resistance $R$ in ohms,

$$\lvert R-680\rvert\le 34$$

{{< multiplechoice
  question="Students who score within 20 points of 80 will pass a test. Write this as a distance from 80 using absolute value notation, with $p$ for the passing score."
  answer="$\lvert p-80\rvert\le 20$"
  hint="Subtract the reference value inside the bars, and bound the result by the allowed spread."
>}}
$\lvert p-80\rvert\le 20$
$\lvert p-80\rvert\ge 20$
$\lvert p-20\rvert\le 80$
$\lvert p+80\rvert\le 20$
{{< /multiplechoice >}}

## Graphing an absolute value function

The most significant feature of the absolute value graph is the corner point
at which the graph changes direction. This point is shown at the **origin**
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of y equals the absolute value of x: a V with its corner point at the origin, one arm rising to the left and one to the right.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-5,5],[0,0],[5,5]],"arrows":true}],"texts":[{"at":[1.6,5.2],"text":"y = |x|","anchor":"start"}]}'>
<svg role="img" aria-label="The graph of y equals the absolute value of x: a V with its corner point at the origin, one arm rising to the left and one to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 316" width="316" height="316" font-family="Helvetica, Arial, sans-serif">
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
  <polyline points="53.7,53.7 158,158 262.3,53.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="48,48 58.6,51.5 51.5,58.6" fill="currentColor"/>
  <polygon points="268,48 264.5,58.6 257.4,51.5" fill="currentColor"/>
  <text x="193.2" y="43.6" font-size="13" fill="currentColor" text-anchor="start">y = |x|</text>
</svg>
</div>

The next graph shows $y=2\lvert x-3\rvert+4$ drawn solid, with the toolkit
function $y=\lvert x\rvert$ dashed for comparison. The graph of
$y=\lvert x\rvert$ has been shifted right 3 units, vertically stretched by a
factor of 2, and shifted up 4 units. This means that the corner point is
located at $(3,4)$ for this transformed function.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Two V shapes on one grid. Drawn dashed, y = |x| has its corner at the origin. Drawn solid, y = 2|x − 3| + 4 has steeper arms and its corner marked at (3, 4).","xMin":-6,"xMax":7,"yMin":-1,"yMax":12,"xUnit":22,"yUnit":17,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polylines":[{"through":[[-6,6],[0,0],[6,6]],"dashed":true,"arrows":true},{"through":[[-0.5,11],[3,4],[6.5,11]],"arrows":true}],"points":[{"at":[3,4],"label":"(3, 4)","labelSide":"se"}],"texts":[{"at":[-5.6,7.4],"text":"y = |x|","anchor":"start"},{"at":[0.6,11.6],"text":"y = 2|x − 3| + 4","anchor":"start"}]}'>
<svg role="img" aria-label="Two V shapes on one grid. Drawn dashed, y = |x| has its corner at the origin. Drawn solid, y = 2|x − 3| + 4 has steeper arms and its corner marked at (3, 4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 273" width="338" height="273" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="247" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="247" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="247" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="247" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="247" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="247" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="247" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="247" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="247" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="247" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="247" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="247" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="312" y1="247" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="247" x2="312" y2="247" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="213" x2="312" y2="213" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="196" x2="312" y2="196" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="179" x2="312" y2="179" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="162" x2="312" y2="162" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="145" x2="312" y2="145" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="128" x2="312" y2="128" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="111" x2="312" y2="111" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="94" x2="312" y2="94" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="77" x2="312" y2="77" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="60" x2="312" y2="60" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="43" x2="312" y2="43" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="230" x2="314" y2="230" stroke="currentColor" stroke-width="1"/>
  <line x1="158" y1="24" x2="158" y2="249" stroke="currentColor" stroke-width="1"/>
  <polygon points="324,230 314,235 314,225" fill="currentColor"/>
  <polygon points="158,14 163,24 153,24" fill="currentColor"/>
  <polygon points="14,230 24,225 24,235" fill="currentColor"/>
  <polygon points="158,259 153,249 163,249" fill="currentColor"/>
  <text x="322" y="222" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="166" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="227" x2="26" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="245" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="48" y1="227" x2="48" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="245" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="70" y1="227" x2="70" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="245" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="92" y1="227" x2="92" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="245" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="114" y1="227" x2="114" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="245" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="136" y1="227" x2="136" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="245" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="180" y1="227" x2="180" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="245" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="202" y1="227" x2="202" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="245" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="224" y1="227" x2="224" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="245" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="246" y1="227" x2="246" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="245" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="268" y1="227" x2="268" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="268" y="245" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="290" y1="227" x2="290" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="245" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="312" y1="227" x2="312" y2="233" stroke="currentColor" stroke-width="1"/>
  <text x="312" y="245" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="155" y1="196" x2="161" y2="196" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="200" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="155" y1="162" x2="161" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="166" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="155" y1="128" x2="161" y2="128" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="132" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="155" y1="94" x2="161" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="98" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="155" y1="60" x2="161" y2="60" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="64" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="155" y1="26" x2="161" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="152" y="30" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <polyline points="32.3,132.9 158,230 283.7,132.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="26,128 37,130.2 30.9,138.1" fill="currentColor"/>
  <polygon points="290,128 285.1,138.1 279,130.2" fill="currentColor"/>
  <polyline points="151.3,49.7 224,162 296.7,49.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="147,43 156.6,48.7 148.2,54.1" fill="currentColor"/>
  <polygon points="301,43 299.8,54.1 291.4,48.7" fill="currentColor"/>
  <circle cx="224" cy="162" r="4" fill="currentColor"/>
  <text x="210" y="166" font-size="13" fill="currentColor" text-anchor="end">(3, 4)</text>
  <text x="34.8" y="104.2" font-size="13" fill="currentColor" text-anchor="start">y = |x|</text>
  <text x="171.2" y="32.8" font-size="13" fill="currentColor" text-anchor="start">y = 2|x − 3| + 4</text>
</svg>
</div>

**Example.** Write an equation for the function graphed below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of an absolute value function: a V with its corner point at (3, −2), crossing the horizontal axis at 2 and 4 and reaching a height of 4 at x = 0.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"polylines":[{"through":[[-0.5,5],[3,-2],[4.5,1]],"arrows":true}]}'>
<svg role="img" aria-label="The graph of an absolute value function: a V with its corner point at (3, −2), crossing the horizontal axis at 2 and 4 and reaching a height of 4 at x = 0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="268" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,170 268,175 268,165" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="167" x2="26" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="185" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="167" x2="50" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="185" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="167" x2="74" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="185" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="167" x2="98" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="185" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="167" x2="122" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="185" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="167" x2="170" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="185" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="167" x2="194" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="185" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="167" x2="218" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="185" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="167" x2="242" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="185" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="167" x2="266" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="185" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="137.6,57.2 218,218 250.4,153.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="134,50 142.9,56.7 134,61.2" fill="currentColor"/>
  <polygon points="254,146 254,157.2 245.1,152.7" fill="currentColor"/>
</svg>
</div>

**Solution.** The basic absolute value function changes direction at the
origin, so this graph has been shifted to the right 3 units and down 2 units
from the basic toolkit function, putting its corner at $(3,-2)$.

We also notice that the graph appears vertically stretched, because the width
of the final graph on a horizontal line is not equal to 2 times the vertical
distance from the corner to this line, as it would be for an unstretched
absolute value function. Instead, the width is equal to 1 times the vertical
distance, as shown below, where the unstretched shape through the same corner
is dashed.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same V with its corner at (3, −2), drawn solid, together with the unstretched absolute value shape through the same corner, drawn dashed. Four units above the corner the dashed V is 8 units wide, a ratio of 2 to 1, while the solid V is only 4 units wide, a ratio of 1 to 1.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"polylines":[{"through":[[-0.5,5],[3,-2],[4.5,1]],"arrows":true},{"through":[[-4,5],[3,-2],[5,0]],"dashed":true,"arrows":true}],"points":[{"at":[3,-2],"label":"(3, −2)","labelSide":"se"}],"texts":[{"at":[-4.2,5.4],"text":"Ratio 2/1","anchor":"start"},{"at":[3.6,2.6],"text":"Ratio 1/1","anchor":"start"}]}'>
<svg role="img" aria-label="The same V with its corner at (3, −2), drawn solid, together with the unstretched absolute value shape through the same corner, drawn dashed. Four units above the corner the dashed V is 8 units wide, a ratio of 2 to 1, while the solid V is only 4 units wide, a ratio of 1 to 1." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="268" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,170 268,175 268,165" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="167" x2="26" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="185" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="167" x2="50" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="185" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="167" x2="74" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="185" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="167" x2="98" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="185" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="167" x2="122" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="185" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="167" x2="170" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="185" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="167" x2="194" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="185" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="167" x2="218" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="185" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="167" x2="242" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="185" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="167" x2="266" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="185" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="137.6,57.2 218,218 250.4,153.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="134,50 142.9,56.7 134,61.2" fill="currentColor"/>
  <polygon points="254,146 254,157.2 245.1,152.7" fill="currentColor"/>
  <polyline points="55.7,55.7 218,218 260.3,175.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="6 5"/>
  <polygon points="50,50 60.6,53.5 53.5,60.6" fill="currentColor"/>
  <polygon points="266,170 262.5,180.6 255.4,173.5" fill="currentColor"/>
  <circle cx="218" cy="218" r="4" fill="currentColor"/>
  <text x="229.2" y="238.2" font-size="13" fill="currentColor" text-anchor="start">(3, −2)</text>
  <text x="45.2" y="40.4" font-size="13" fill="currentColor" text-anchor="start">Ratio 2/1</text>
  <text x="232.4" y="107.6" font-size="13" fill="currentColor" text-anchor="start">Ratio 1/1</text>
</svg>
</div>

From this information we can write the equation

$$
\begin{array}{lrcl}
\text{treating the stretch as a vertical stretch, or} & f(x) &=& 2\lvert x-3\rvert-2, \\[4pt]
\text{treating the stretch as a horizontal compression.} & f(x) &=& \lvert 2(x-3)\rvert-2,
\end{array}
$$

Note that these equations are algebraically equivalent—the stretch for an
absolute value function can be written interchangeably as a vertical or
horizontal stretch or compression. Note also that if the vertical stretch
factor is negative, there is also a reflection about the $x$-axis.

{{< callout type="info" >}}
  **Q&A.** *If we couldn't observe the stretch of the function from the
  graphs, could we algebraically determine it?*

  Yes. If we are unable to determine the stretch based on the width of the
  graph, we can solve for the stretch factor by putting in a known pair of
  values for $x$ and $f(x)$.

  $$f(x)=a\lvert x-3\rvert-2$$

  Now substituting in the point $(1,2)$,

  $$
  \begin{array}{lrcl}
  & 2 &=& a\lvert 1-3\rvert-2 \\[4pt]
  & 4 &=& 2a \\[4pt]
  & a &=& 2
  \end{array}
  $$
{{< /callout >}}

{{< fillin
  question="Write the equation for the absolute value function that is horizontally shifted left 2 units, is vertically reflected, and vertically shifted up 3 units."
  answer="-|x+2|+3"
  answerDisplay="$f(x)=-\lvert x+2\rvert+3$"
  hint="Left 2 is an inside $+2$; the reflection is a minus sign outside; up 3 is a $+3$ outside."
>}}

{{< callout type="info" >}}
  **Q&A.** *Do the graphs of absolute value functions always intersect the
  vertical axis? The horizontal axis?*

  Yes, they always intersect the vertical axis. The graph of an absolute value
  function will intersect the vertical axis when the input is zero.

  No, they do not always intersect the horizontal axis. The graph may or may
  not intersect the horizontal axis, depending on how the graph has been
  shifted and reflected. It is possible for the absolute value function to
  intersect the horizontal axis at zero, one, or two points, as the three
  graphs below show.
{{< /callout >}}

(a) The absolute value function does not intersect the horizontal axis.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(a) A V with its corner at (0, 2), entirely above the horizontal axis, so the graph never meets it.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-4,6],[0,2],[4,6]],"arrows":true}]}'>
<svg role="img" aria-label="(a) A V with its corner at (0, 2), entirely above the horizontal axis, so the graph never meets it." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 316" width="316" height="316" font-family="Helvetica, Arial, sans-serif">
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
  <polyline points="75.7,31.7 158,114 240.3,31.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="70,26 80.6,29.5 73.5,36.6" fill="currentColor"/>
  <polygon points="246,26 242.5,36.6 235.4,29.5" fill="currentColor"/>
</svg>
</div>

(b) The absolute value function intersects the horizontal axis at one point.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(b) A V with its corner exactly on the horizontal axis at (2, 0), so the graph meets the axis at one point.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-4,6],[2,0],[6,4]],"arrows":true}]}'>
<svg role="img" aria-label="(b) A V with its corner exactly on the horizontal axis at (2, 0), so the graph meets the axis at one point." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 316" width="316" height="316" font-family="Helvetica, Arial, sans-serif">
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
  <polyline points="75.7,31.7 202,158 284.3,75.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="70,26 80.6,29.5 73.5,36.6" fill="currentColor"/>
  <polygon points="290,70 286.5,80.6 279.4,73.5" fill="currentColor"/>
</svg>
</div>

(c) The absolute value function intersects the horizontal axis at two points.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"(c) An upside-down V with its peak at (1, 3), crossing the horizontal axis at −2 and at 4, so the graph meets the axis at two points.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-3,-1],[1,3],[5.5,-1.5]],"arrows":true}]}'>
<svg role="img" aria-label="(c) An upside-down V with its peak at (1, 3), crossing the horizontal axis at −2 and at 4, so the graph meets the axis at two points." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 316" width="316" height="316" font-family="Helvetica, Arial, sans-serif">
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
  <polyline points="97.7,174.3 180,92 273.3,185.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="92,180 95.5,169.4 102.6,176.5" fill="currentColor"/>
  <polygon points="279,191 268.4,187.5 275.5,180.4" fill="currentColor"/>
</svg>
</div>

## Solving an absolute value equation

Now that we can graph an absolute value function, we will learn how to solve
an absolute value equation. To solve an equation such as
$8=\lvert 2x-6\rvert$, we notice that the absolute value will be equal to 8 if
the quantity inside the absolute value is 8 or $-8$. This leads to two
different equations we can solve independently.

$$
\begin{array}{lrcl}
& 2x-6 &=& 8 \\[4pt]
& 2x &=& 14 \\[4pt]
& x &=& 7
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& 2x-6 &=& -8 \\[4pt]
& 2x &=& -2 \\[4pt]
& x &=& -1
\end{array}
$$

Knowing how to solve problems involving **absolute value functions** is
useful. For example, we may need to identify numbers or points on a line that
are at a specified distance from a given reference point.

An **absolute value equation** is an equation in which the unknown variable
appears in absolute value bars. For example,

$$
\begin{array}{lrcl}
& \lvert x\rvert &=& 4, \\[4pt]
& \lvert 2x-1\rvert &=& 3, \\[4pt]
& \lvert 5x+2\rvert-4 &=& 9
\end{array}
$$

{{< callout type="info" >}}
  **Solutions to absolute value equations.** For real numbers $A$ and $B$, an
  equation of the form $\lvert A\rvert=B$, with $B\ge 0$, will have solutions
  when $A=B$ or $A=-B$. If $B<0$, the equation $\lvert A\rvert=B$ has no
  solution.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the formula for an absolute value function, find the
  horizontal intercepts of its graph.

  1. Isolate the absolute value term.
  2. Use $\lvert A\rvert=B$ to write $A=B$ or $-A=B$, assuming $B>0$.
  3. Solve for $x$.
{{< /callout >}}

**Example.** For the function $f(x)=\lvert 4x+1\rvert-7$, find the values of
$x$ such that $f(x)=0$.

**Solution.**

| Step | Reason |
| :--- | :--- |
| $0=\lvert 4x+1\rvert-7$ | Substitute 0 for $f(x)$. |
| $7=\lvert 4x+1\rvert$ | Isolate the absolute value on one side of the equation. |
| $7=4x+1$ or $-7=4x+1$ | Break into two separate equations and solve. |
| $6=4x$ or $-8=4x$ | |
| $x=\tfrac{6}{4}=1.5$ or $x=\tfrac{-8}{4}=-2$ | |

The function outputs 0 when $x=1.5$ or $x=-2$, as the graph below confirms.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the absolute value of 4x plus 1, minus 7: a steep V with its corner at (−0.25, −7), crossing the horizontal axis at −2 and at 1.5.","xMin":-4,"xMax":4,"yMin":-8,"yMax":6,"xUnit":30,"yUnit":16,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polylines":[{"through":[[-3.5,6],[-0.25,-7],[3,6]],"arrows":true}],"points":[{"at":[-2,0]},{"at":[1.5,0]}]}'>
<svg role="img" aria-label="The graph of f of x equals the absolute value of 4x plus 1, minus 7: a steep V with its corner at (−0.25, −7), crossing the horizontal axis at −2 and at 1.5." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 276" width="292" height="276" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="250" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="250" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="250" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="250" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="250" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="250" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="250" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="250" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="250" x2="266" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="266" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="266" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="154" x2="266" y2="154" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="138" x2="266" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="90" x2="266" y2="90" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="58" x2="266" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="42" x2="266" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="122" x2="268" y2="122" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="252" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,122 268,127 268,117" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,122 24,117 24,127" fill="currentColor"/>
  <polygon points="146,262 141,252 151,252" fill="currentColor"/>
  <text x="276" y="114" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="119" x2="26" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="137" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="56" y1="119" x2="56" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="137" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="86" y1="119" x2="86" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="137" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="116" y1="119" x2="116" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="137" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="176" y1="119" x2="176" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="137" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="206" y1="119" x2="206" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="137" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="236" y1="119" x2="236" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="137" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="266" y1="119" x2="266" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="137" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="143" y1="250" x2="149" y2="250" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="254" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="154" x2="149" y2="154" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="158" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="90" x2="149" y2="90" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="94" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="58" x2="149" y2="58" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="62" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="44.4,33.2 138.5,234 232.6,33.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="41,26 49.8,32.9 40.7,37.2" fill="currentColor"/>
  <polygon points="236,26 236.3,37.2 227.2,32.9" fill="currentColor"/>
  <circle cx="86" cy="122" r="4" fill="currentColor"/>
  <circle cx="191" cy="122" r="4" fill="currentColor"/>
</svg>
</div>

{{< fillin
  question="For the function $f(x)=\lvert 2x-1\rvert-3$, find the values of $x$ such that $f(x)=0$. Enter both solutions, separated by a comma."
  answer="-1,2"
  answerMode="unordered"
  answerDisplay="$x=-1$ or $x=2$"
  hint="Isolate the absolute value, then set the inside equal to $3$ and to $-3$."
>}}

{{< callout type="info" >}}
  **Q&A.** *Should we always expect two answers when solving
  $\lvert A\rvert=B$?*

  No. We may find one, two, or even no answers. For example, there is no
  solution to $2+\lvert 3x-5\rvert=1$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an absolute value equation, solve it.

  1. Isolate the absolute value term.
  2. Use $\lvert A\rvert=B$ to write $A=B$ or $A=-B$.
  3. Solve for $x$.
{{< /callout >}}

**Example.** Solve $1=4\lvert x-2\rvert+2$.

**Solution.** Isolating the absolute value on one side of the equation gives
the following.

$$
\begin{array}{lrcl}
& 1 &=& 4\lvert x-2\rvert+2 \\[4pt]
& -1 &=& 4\lvert x-2\rvert \\[4pt]
& -\tfrac{1}{4} &=& \lvert x-2\rvert
\end{array}
$$

The absolute value always returns a nonnegative value, so it is impossible for
the absolute value to equal a negative value. At this point, we notice that
this equation has no solutions.

{{< callout type="info" >}}
  **Q&A.** *If $f(x)=1$ and $g(x)=4\lvert x-2\rvert+2$ were graphed on the
  same set of axes, would the graphs intersect?*

  No. The graphs of $f$ and $g$ would not intersect, as shown below. This
  confirms, graphically, that the equation $1=4\lvert x-2\rvert+2$ has no
  solution.
{{< /callout >}}

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of g of x equals 4 times the absolute value of x minus 2, plus 2, a steep V with its corner at (2, 2), together with the horizontal line f of x equals 1. The V never dips to the line, so the two graphs do not intersect.","xMin":-1,"xMax":5,"yMin":-1,"yMax":12,"xUnit":40,"yUnit":18,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polylines":[{"through":[[-0.4,11.6],[2,2],[4.4,11.6]],"arrows":true}],"lines":[{"y":1,"label":"f(x) = 1","labelAt":0.72,"labelSide":"left","arrows":false}],"texts":[{"at":[2.7,8],"text":"g(x)","anchor":"end"}]}'>
<svg role="img" aria-label="The graph of g of x equals 4 times the absolute value of x minus 2, plus 2, a steep V with its corner at (2, 2), together with the horizontal line f of x equals 1. The V never dips to the line, so the two graphs do not intersect." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 286" width="292" height="286" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="260" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="260" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="260" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="260" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="260" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="260" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="260" x2="266" y2="260" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="266" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="266" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="266" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="266" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="266" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="266" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="266" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="266" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="242" x2="268" y2="242" stroke="currentColor" stroke-width="1"/>
  <line x1="66" y1="24" x2="66" y2="262" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,242 268,247 268,237" fill="currentColor"/>
  <polygon points="66,14 71,24 61,24" fill="currentColor"/>
  <polygon points="14,242 24,237 24,247" fill="currentColor"/>
  <polygon points="66,272 61,262 71,262" fill="currentColor"/>
  <text x="276" y="234" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="74" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="239" x2="26" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="257" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="106" y1="239" x2="106" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="257" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="239" x2="146" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="257" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="239" x2="186" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="257" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="239" x2="226" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="257" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="239" x2="266" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="257" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="63" y1="206" x2="69" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="210" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="63" y1="170" x2="69" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="63" y1="134" x2="69" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="138" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="63" y1="98" x2="69" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="102" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="63" y1="62" x2="69" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="66" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="63" y1="26" x2="69" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="60" y="30" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="20" y1="224" x2="272" y2="224" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="53.9,40.2 146,206 238.1,40.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="50,33.2 59.2,39.5 50.5,44.4" fill="currentColor"/>
  <polygon points="242,33.2 241.5,44.4 232.8,39.5" fill="currentColor"/>
  <text x="201.4" y="212" font-size="13" fill="currentColor" text-anchor="middle">f(x) = 1</text>
  <text x="174" y="98" font-size="13" fill="currentColor" text-anchor="end">g(x)</text>
</svg>
</div>

{{< fillin
  question="The graph of $f(x)=-\lvert x+2\rvert+3$ crosses the vertical axis at $(0,b)$. Find $b$."
  answer="1"
  hint="Evaluate the function at $x=0$."
>}}

{{< fillin
  question="Where does the graph of $f(x)=-\lvert x+2\rvert+3$ cross the horizontal axis? Enter both $x$-values, separated by a comma."
  answer="-5,1"
  answerMode="unordered"
  answerDisplay="$(-5,0)$ and $(1,0)$"
  hint="Set the function equal to zero and isolate the absolute value first."
>}}

## Solving an absolute value inequality

Absolute value equations may not always involve equalities. Instead, we may
need to solve an equation within a range of values. We would use an absolute
value inequality to solve such an equation. An **absolute value inequality**
is an equation of the form

$$\lvert A\rvert<B,\quad \lvert A\rvert\le B,\quad \lvert A\rvert>B,\quad\text{or}\quad \lvert A\rvert\ge B,$$

where an expression $A$ (and possibly but not usually $B$) depends on a
variable $x$. Solving the inequality means finding the set of all $x$ that
satisfy the inequality. Usually this set will be an interval or the union of
two intervals.

There are two basic approaches to solving absolute value inequalities:
graphical and algebraic. The advantage of the graphical approach is we can
read the solution by interpreting the graphs of two functions. The advantage
of the algebraic approach is it yields solutions that may be difficult to read
from the graph.

For example, we know that all numbers within 200 units of 0 may be expressed
as

$$\lvert x\rvert<200\quad\text{or}\quad -200<x<200$$

Suppose we want to know all possible returns on an investment if we could earn
some amount of money within \$200 of \$600. We can solve algebraically for the
set of values $x$ such that the distance between $x$ and 600 is less than 200.
We represent the distance between $x$ and 600 as $\lvert x-600\rvert$.

$$
\begin{array}{lrcl}
& \lvert x-600\rvert &<& 200 \\[4pt]
& -200<x-600 &<& 200 \\[4pt]
& -200+600<x-600+600 &<& 200+600 \\[4pt]
& 400<x &<& 800
\end{array}
$$

This means our returns would be between \$400 and \$800.

Sometimes an absolute value inequality problem will be presented to us in
terms of a shifted and/or stretched or compressed absolute value function,
where we must determine for which values of the input the function's output
will be negative or positive.

{{< callout type="info" >}}
  **How to:** given an absolute value inequality of the form
  $\lvert x-A\rvert\le B$ for real numbers $A$ and $B$ where $B$ is positive,
  solve the absolute value inequality algebraically.

  1. Find boundary points by solving $\lvert x-A\rvert=B$.
  2. Test intervals created by the boundary points to determine where
     $\lvert x-A\rvert\le B$.
  3. Write the interval or union of intervals satisfying the inequality in
     interval, inequality, or set-builder notation.
{{< /callout >}}

**Example.** Solve $\lvert x-5\rvert<4$.

**Solution.** With both approaches, we will need to know first where the
corresponding equality is true. In this case we first will find where
$\lvert x-5\rvert=4$. We do this because the absolute value is a function with
no breaks, so the only way the function values can switch from being less than
4 to being greater than 4 is by passing through where the values equal 4.
Solve $\lvert x-5\rvert=4$.

$$
\begin{array}{lrcl}
& x-5 &=& 4 \\[4pt]
& x &=& 9
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& x-5 &=& -4 \\[4pt]
& x &=& 1
\end{array}
$$

After determining that the absolute value is equal to 4 at $x=1$ and $x=9$, we
know the graph can change only from being less than 4 to greater than 4 at
these values. This divides the number line up into three intervals:

$$x<1,\quad 1<x<9,\quad\text{and}\quad x>9.$$

To determine when the function is less than 4, we could choose a value in each
interval and see if the output is less than or greater than 4.

| Interval | Test $x$ | $\lvert x-5\rvert$ | Less than or greater than 4? |
| :--- | ---: | :--- | :--- |
| $x<1$ | 0 | $\lvert 0-5\rvert=5$ | Greater than |
| $1<x<9$ | 6 | $\lvert 6-5\rvert=1$ | Less than |
| $x>9$ | 11 | $\lvert 11-5\rvert=6$ | Greater than |

Because $1<x<9$ is the only interval in which the output at the test value is
less than 4, we can conclude that the solution to $\lvert x-5\rvert<4$ is
$1<x<9$, or $(1,9)$.

To use a graph, we can sketch the function $f(x)=\lvert x-5\rvert$. To help us
see where the outputs are 4, the line $g(x)=4$ could also be sketched.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the absolute value of x minus 5, a V with its corner at (5, 0), together with the horizontal line g of x equals 4. The two meet at x = 1 and x = 9, and the V lies below the line between them.","xMin":-1,"xMax":12,"yMin":-1,"yMax":8,"xUnit":26,"yUnit":26,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polylines":[{"through":[[-0.5,5.5],[5,0],[12,7]],"arrows":true}],"lines":[{"y":4,"label":"g(x) = 4","labelAt":0.45,"labelSide":"right","arrows":false}],"points":[{"at":[1,4]},{"at":[9,4]}]}'>
<svg role="img" aria-label="The graph of f of x equals the absolute value of x minus 5, a V with its corner at (5, 0), together with the horizontal line g of x equals 4. The two meet at x = 1 and x = 9, and the V lies below the line between them." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 286" width="390" height="286" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="260" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="260" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="260" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="260" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="260" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="260" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="260" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="260" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="260" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="260" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="312" y1="260" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="338" y1="260" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="364" y1="260" x2="364" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="260" x2="364" y2="260" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="364" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="364" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="364" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="364" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="364" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="364" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="364" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="364" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="234" x2="366" y2="234" stroke="currentColor" stroke-width="1"/>
  <line x1="52" y1="24" x2="52" y2="262" stroke="currentColor" stroke-width="1"/>
  <polygon points="376,234 366,239 366,229" fill="currentColor"/>
  <polygon points="52,14 57,24 47,24" fill="currentColor"/>
  <polygon points="14,234 24,229 24,239" fill="currentColor"/>
  <polygon points="52,272 47,262 57,262" fill="currentColor"/>
  <text x="374" y="226" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="60" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="231" x2="26" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="249" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="78" y1="231" x2="78" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="249" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="104" y1="231" x2="104" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="249" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="130" y1="231" x2="130" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="249" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="156" y1="231" x2="156" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="249" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="182" y1="231" x2="182" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="249" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="208" y1="231" x2="208" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="249" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="234" y1="231" x2="234" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="249" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="260" y1="231" x2="260" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="249" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="286" y1="231" x2="286" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="249" font-size="11" fill="currentColor" text-anchor="middle">9</text>
  <line x1="312" y1="231" x2="312" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="312" y="249" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="338" y1="231" x2="338" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="338" y="249" font-size="11" fill="currentColor" text-anchor="middle">11</text>
  <line x1="364" y1="231" x2="364" y2="237" stroke="currentColor" stroke-width="1"/>
  <text x="364" y="249" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="49" y1="260" x2="55" y2="260" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="264" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="49" y1="208" x2="55" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="212" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="49" y1="182" x2="55" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="186" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="49" y1="156" x2="55" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="160" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="49" y1="130" x2="55" y2="130" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="134" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="49" y1="104" x2="55" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="108" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="49" y1="78" x2="55" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="82" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="49" y1="52" x2="55" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="56" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="49" y1="26" x2="55" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="20" y1="130" x2="370" y2="130" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="44.7,96.7 182,234 358.3,57.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="39,91 49.6,94.5 42.5,101.6" fill="currentColor"/>
  <polygon points="364,52 360.5,62.6 353.4,55.5" fill="currentColor"/>
  <circle cx="78" cy="130" r="4" fill="currentColor"/>
  <circle cx="286" cy="130" r="4" fill="currentColor"/>
  <text x="177.5" y="150" font-size="13" fill="currentColor" text-anchor="middle">g(x) = 4</text>
</svg>
</div>

We can see the following:

- The output values of the absolute value are equal to 4 at $x=1$ and $x=9$.
- The graph of $f$ is below the graph of $g$ on $1<x<9$. This means the output
  values of $f(x)$ are less than the output values of $g(x)$.
- The absolute value is less than or equal to 4 between these two points, when
  $1<x<9$. In interval notation, this would be the interval $(1,9)$.

For absolute value inequalities,

$$
\begin{array}{lrcl}
& \lvert x-A\rvert &<& C, \\[4pt]
& -C<x-A &<& C,
\end{array}
\qquad
\begin{array}{lrcl}
& \lvert x-A\rvert &>& C, \\[4pt]
& x-A<-C\ \text{ or }\ x-A &>& C.
\end{array}
$$

The $<$ or $>$ symbol may be replaced by $\le$ or $\ge$.

So, for this example, we could use this alternative approach.

$$
\begin{array}{lrcl}
& \lvert x-5\rvert &<& 4 \\[4pt]
\text{Rewrite by removing the absolute value bars.} & -4<x-5 &<& 4 \\[4pt]
\text{Isolate the }x. & -4+5<x-5+5 &<& 4+5 \\[4pt]
& 1<x &<& 9
\end{array}
$$

{{< multiplechoice
  question="Solve $\lvert x+2\rvert\le 6$."
  answer="$-8\le x\le 4$"
  hint="Rewrite without the bars as $-6\le x+2\le 6$, then isolate $x$."
>}}
$-6\le x\le 6$
$x\le -8$ or $x\ge 4$
$-4\le x\le 8$
$-8\le x\le 4$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **How to:** given an absolute value function, solve for the set of inputs
  where the output is positive (or negative).

  1. Set the function equal to zero, and solve for the boundary points of the
     solution set.
  2. Use test points or a graph to determine where the function's output is
     positive or negative.
{{< /callout >}}

**Example.** Given the function
$f(x)=-\tfrac{1}{2}\lvert 4x-5\rvert+3$, determine the $x$-values for which
the function values are negative.

**Solution.** We are trying to determine where $f(x)<0$, which is when
$-\tfrac{1}{2}\lvert 4x-5\rvert+3<0$. We begin by isolating the absolute
value.

$$
\begin{array}{lrcl}
\text{Multiply both sides by }-2,\text{ and reverse the inequality.} & -\tfrac{1}{2}\lvert 4x-5\rvert &<& -3 \\[4pt]
& \lvert 4x-5\rvert &>& 6
\end{array}
$$

Next we solve for the equality $\lvert 4x-5\rvert=6$.

$$
\begin{array}{lrcl}
& 4x-5 &=& 6 \\[4pt]
& 4x &=& 11 \\[4pt]
& x &=& \tfrac{11}{4}
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& 4x-5 &=& -6 \\[4pt]
& 4x &=& -1 \\[4pt]
& x &=& -\tfrac{1}{4}
\end{array}
$$

Now, we can examine the graph of $f$ to observe where the output is negative.
We will observe where the branches are below the $x$-axis. Notice that it is
not even important exactly what the graph looks like, as long as we know that
it crosses the horizontal axis at $x=-\tfrac{1}{4}$ and $x=\tfrac{11}{4}$ and
that the graph has been reflected vertically.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals negative one half times the absolute value of 4x minus 5, plus 3: an upside-down V with its peak at (1.25, 3), crossing the horizontal axis at −0.25 and at 2.75. The branches fall below the axis to the left of −0.25 and to the right of 2.75.","xMin":-3,"xMax":5,"yMin":-5,"yMax":5,"xUnit":30,"yUnit":24,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polylines":[{"through":[[-2.5,-4.5],[1.25,3],[3.75,-2]],"arrows":true}],"points":[{"at":[-0.25,0]},{"at":[2.75,0]}]}'>
<svg role="img" aria-label="The graph of f of x equals negative one half times the absolute value of 4x minus 5, plus 3: an upside-down V with its peak at (1.25, 3), crossing the horizontal axis at −0.25 and at 2.75. The branches fall below the axis to the left of −0.25 and to the right of 2.75." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="266" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="266" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="266" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="116" y1="24" x2="116" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="116,14 121,24 111,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="116,278 111,268 121,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="124" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="56" y1="143" x2="56" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="176" y1="143" x2="176" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="236" y1="143" x2="236" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="113" y1="266" x2="119" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="113" y1="242" x2="119" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="113" y1="218" x2="119" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="113" y1="194" x2="119" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="113" y1="170" x2="119" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="113" y1="122" x2="119" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="113" y1="98" x2="119" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="113" y1="74" x2="119" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="113" y1="50" x2="119" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="113" y1="26" x2="119" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="110" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="45.2,247.2 153.5,74 224.3,187.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="41,254 42.1,242.9 50.5,248.2" fill="currentColor"/>
  <polygon points="228.5,194 219,188.2 227.4,182.9" fill="currentColor"/>
  <circle cx="108.5" cy="146" r="4" fill="currentColor"/>
  <circle cx="198.5" cy="146" r="4" fill="currentColor"/>
</svg>
</div>

We observe that the graph of the function is below the $x$-axis left of
$x=-\tfrac{1}{4}$ and right of $x=\tfrac{11}{4}$. This means the function
values are negative to the left of the first horizontal intercept at
$x=-\tfrac{1}{4}$, and negative to the right of the second intercept at
$x=\tfrac{11}{4}$. This gives us the solution to the inequality.

$$x<-\tfrac{1}{4}\quad\text{or}\quad x>\tfrac{11}{4}$$

In interval notation, this would be $(-\infty,-0.25)\cup(2.75,\infty)$.

{{< multiplechoice
  question="Solve $-2\lvert k-4\rvert\le -6$."
  answer="$(-\infty,1]\cup[7,\infty)$"
  hint="Divide by $-2$ and reverse the inequality, then read $\lvert k-4\rvert\ge 3$ as two separate conditions."
>}}
$(-\infty,-1]\cup[7,\infty)$
$[1,7]$
$(-\infty,3]\cup[5,\infty)$
$(-\infty,1]\cup[7,\infty)$
{{< /multiplechoice >}}

## Key concepts

- The absolute value function is commonly used to measure distances between
  points.
- Applied problems, such as ranges of possible values, can also be solved
  using the absolute value function.
- The graph of the absolute value function resembles a letter V. It has a
  corner point at which the graph changes direction.
- In an absolute value equation, an unknown variable is the input of an
  absolute value function.
- If the absolute value of an expression is set equal to a positive number,
  expect two solutions for the unknown variable.
- An absolute value equation may have one solution, two solutions, or no
  solutions.
- An absolute value inequality is similar to an absolute value equation but
  takes the form $\lvert A\rvert<B$, $\lvert A\rvert\le B$,
  $\lvert A\rvert>B$, or $\lvert A\rvert\ge B$. It can be solved by
  determining the boundaries of the solution set and then testing which
  segments are in the set.
- Absolute value inequalities can also be solved graphically.

## Key terms

**absolute value equation** — an equation of the form $\lvert A\rvert=B$, with
$B\ge 0$; it will have solutions when $A=B$ or $A=-B$. **absolute value
inequality** — a relationship in the form $\lvert A\rvert<B$,
$\lvert A\rvert\le B$, $\lvert A\rvert>B$, or $\lvert A\rvert\ge B$.

## Practice

### Graph an absolute value function

{{< fillin
  question="Find the $y$-intercept and both $x$-intercepts of $f(x)=2\lvert x+1\rvert-10$. Enter the $y$-intercept first, then the $x$-intercepts in increasing order of $x$, separated by commas."
  answer="(0,-8),(-6,0),(4,0)"
  hint="Evaluate $f(0)$ for the $y$-intercept; set $f(x)=0$ and split $\lvert x+1\rvert=5$ into two linear equations for the $x$-intercepts."
>}}

{{< multiplechoice
  question="Use a graphing utility to graph $f(x)=10\lvert x-2\rvert$ on the viewing window $[0,4]$. What is the corresponding range?"
  answer="$[0,20]$"
  hint="Evaluate $f$ at the window's endpoints and at the corner $x=2$ to find the least and greatest outputs."
>}}
$[0,20]$
$[-20,20]$
$[0,10]$
$[0,40]$
{{< /multiplechoice >}}

### Solve an absolute value equation

{{< fillin
  question="Solve $\lvert 6-x\rvert=5$. Enter both solutions, separated by a comma."
  answer="1,11"
  answerMode="unordered"
  answerDisplay="$x=1$ or $x=11$"
  hint="Split into $6-x=5$ and $6-x=-5$, then solve each for $x$."
>}}

{{< fillin
  question="Solve $\lvert 4x-2\rvert=11$. Enter both solutions, separated by a comma."
  answer="-\tfrac{9}{4},\tfrac{13}{4}"
  answerMode="unordered"
  answerDisplay="$x=-\tfrac{9}{4}$ or $x=\tfrac{13}{4}$"
  hint="Split into $4x-2=11$ and $4x-2=-11$, then solve each for $x$."
>}}

{{< multiplechoice
  question="Solve $\lvert 3x-2\rvert=-7$."
  answer="No solution"
  hint="The absolute value of an expression can never equal a negative number."
>}}
$x=3$
$x=3$ or $x=-\tfrac{5}{3}$
No solution
$x=-\tfrac{5}{3}$
{{< /multiplechoice >}}

### Solve an absolute value inequality

{{< multiplechoice
  question="Solve $\lvert 3x-4\rvert\le 8$."
  answer="$-\tfrac{4}{3}\le x\le 4$"
  hint="Rewrite without the bars as $-8\le 3x-4\le 8$, then isolate $x$."
>}}
$-\tfrac{4}{3}\le x\le 4$
$-\tfrac{4}{3}< x< 4$
$x\le -\tfrac{4}{3}$ or $x\ge 4$
$-4\le x\le \tfrac{4}{3}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $\lvert 3x-5\rvert\ge 13$."
  answer="$(-\infty,-\tfrac{8}{3}]\cup[6,\infty)$"
  hint="Split into $3x-5\le -13$ or $3x-5\ge 13$, then isolate $x$ in each."
>}}
$[-\tfrac{8}{3},6]$
$(-\infty,-\tfrac{8}{3})\cup(6,\infty)$
$(-\infty,-\tfrac{8}{3}]\cup[6,\infty)$
$(-\infty,-6]\cup[\tfrac{8}{3},\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $\left\lvert -2x-\tfrac{2}{3}(x+1)\right\rvert+3>-1$."
  answer="$(-\infty,\infty)$"
  hint="Isolate the absolute value to get $\left\lvert -2x-\tfrac{2}{3}(x+1)\right\rvert>-4$ — an absolute value is never negative, so this holds for every $x$ without expanding the expression inside."
>}}
$x=-4$
$(-\infty,\infty)$
$(-\infty,-4)\cup(4,\infty)$
No solution
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.6: Absolute Value Functions](https://openstax.org/books/precalculus-2e/pages/1-6-absolute-value-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph and number line as an accessible inline SVG generated from an explicit formula or point list, drawing the comparison curve dashed where the source distinguishes it by colour; condensed the source's multi-colour construction diagrams for $f(x)=2\lvert x-3\rvert-2$ — one showing the shift and one the width ratio — into a single annotated figure, because monochrome renderings of four overlapping annotated V shapes are unreadable, and likewise showed the four-stage transformation of $y=2\lvert x-3\rvert+4$ as the toolkit V against the finished V, with the intermediate stages described in the prose; presented the solution steps and the interval test as Markdown tables; omitted the opening Andromeda Galaxy photograph and the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is an inequality or an interval, which cannot be graded as free-response math; and adapted selected end-of-section exercises into the closing Practice block, again using multiple choice for interval- and inequality-valued answers for the same reason.</small>
