---
title: Modeling with Trigonometric Functions
description: >-
  Determining the amplitude and period from a sinusoidal formula, finding a
  formula that fits a table of values, and modeling periodic and
  harmonic-motion phenomena — daily temperatures, a clock hand, tides, blood
  pressure, and damped springs — with sine and cosine functions — adapted
  from OpenStax Precalculus 2e, Section 7.6.
source_section: "7.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine the amplitude and period of sinusoidal functions
- Model equations and graph sinusoidal functions
- Model periodic behavior
- Model harmonic motion functions
{{< /callout >}}

Suppose we charted the average daily temperatures in New York City over the course of one year. We would expect to find the lowest temperatures in January and February and highest in July and August. This familiar cycle repeats year after year, and if we were to extend the graph over multiple years, it would resemble a periodic function.

Many other natural phenomena are also periodic. For example, the phases of the moon have a period of approximately 28 days, and birds know to fly south at about the same time each year.

So how can we model an equation to reflect periodic behavior? First, we must collect and record data. We then find a function that resembles an observed pattern. Finally, we make the necessary alterations to the function to get a model that is dependable. In this section, we will take a deeper look at specific types of periodic behavior and model equations to fit data.

## Determining the Amplitude and Period of a Sinusoidal Function

Any motion that repeats itself in a fixed time period is considered **periodic motion** and can be modeled by a **sinusoidal function**. The **amplitude** of a sinusoidal function is the distance from the midline to the maximum value, or from the midline to the minimum value. The **midline** is the average value. Sinusoidal functions oscillate above and below the midline, are periodic, and repeat values in set cycles. Recall that the period of the sine function and the cosine function is $2\pi$. In other words, for any value of $x$,

$$\sin(x\pm2\pi k)=\sin x\quad\text{and}\quad\cos(x\pm2\pi k)=\cos x\quad\text{where }k\text{ is an integer}$$

{{< callout type="info" >}}
  **Standard Form of Sinusoidal Equations.** The general forms of a sinusoidal equation are given as

  $$y=A\sin(Bt-C)+D\quad\text{or}\quad y=A\cos(Bt-C)+D$$

  where $\text{amplitude}=|A|$, $B$ is related to period such that the $\text{period}=\tfrac{2\pi}{B}$, $C$ is the phase shift such that $\tfrac{C}{B}$ denotes the horizontal shift, and $D$ represents the vertical shift from the graph's parent graph.

  Note that the models are sometimes written as $y=a\sin(\omega t\pm C)+D$ or $y=a\cos(\omega t\pm C)+D$, and period is given as $\tfrac{2\pi}{\omega}$.

  The difference between the sine and the cosine graphs is that the sine graph begins with the average value of the function and the cosine graph begins with the maximum or minimum value of the function.
{{< /callout >}}

**Example.** Show the transformation of the graph of $y=\sin x$ into the graph of $y=2\sin\left(4x-\tfrac{\pi}{2}\right)+2$.

**Solution.** Consider the series of graphs below and the way each change to the equation changes the image.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The basic graph of y = sin x, one full period from x = -2pi to x = 2pi, oscillating between -1 and 1.","xMin":-8.2,"xMax":8.2,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":"y","yTickStep":1,"unit":30,"curves":[{"kind":"sine"}],"texts":[{"at":[-6.283185307179586,-4.3],"text":"−2π","anchor":"middle"},{"at":[-3.141592653589793,-4.3],"text":"−π","anchor":"middle"},{"at":[3.141592653589793,-4.3],"text":"π","anchor":"middle"},{"at":[6.283185307179586,-4.3],"text":"2π","anchor":"middle"}],"yLabel":"y = sin x"}
{{< /apfigure >}}

*(a) The basic graph of $y=\sin x$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2sin x, the amplitude doubled from 1 to 2.","xMin":-8.2,"xMax":8.2,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":"y","yTickStep":1,"unit":30,"curves":[{"kind":"sine","a":2}],"texts":[{"at":[-6.283185307179586,-4.3],"text":"−2π","anchor":"middle"},{"at":[-3.141592653589793,-4.3],"text":"−π","anchor":"middle"},{"at":[3.141592653589793,-4.3],"text":"π","anchor":"middle"},{"at":[6.283185307179586,-4.3],"text":"2π","anchor":"middle"}],"yLabel":"y = 2sin x"}
{{< /apfigure >}}

*(b) Changing the amplitude from $1$ to $2$ generates the graph of $y=2\sin x$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2sin(4x), the period quartered so the wave completes four cycles in the same window that y = 2sin x completed one.","xMin":-8.2,"xMax":8.2,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":"y","yTickStep":1,"unit":30,"curves":[{"kind":"sine","a":2,"b":4}],"texts":[{"at":[-6.283185307179586,-4.3],"text":"−2π","anchor":"middle"},{"at":[-3.141592653589793,-4.3],"text":"−π","anchor":"middle"},{"at":[3.141592653589793,-4.3],"text":"π","anchor":"middle"},{"at":[6.283185307179586,-4.3],"text":"2π","anchor":"middle"}],"yLabel":"y = 2sin(4x)"}
{{< /apfigure >}}

*(c) The period of the sine function changes with the value of $B$, such that $\text{period}=\tfrac{2\pi}{B}$. Here we have $B=4$, which translates to a period of $\tfrac{\pi}{2}$. The graph completes one full cycle in $\tfrac{\pi}{2}$ units.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2sin(4x - pi/2), the same compressed wave shifted to the right.","xMin":-8.2,"xMax":8.2,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":"y","yTickStep":1,"unit":30,"curves":[{"kind":"sine","a":2,"b":4,"h":0.39269908169872414}],"texts":[{"at":[-6.283185307179586,-4.3],"text":"−2π","anchor":"middle"},{"at":[-3.141592653589793,-4.3],"text":"−π","anchor":"middle"},{"at":[3.141592653589793,-4.3],"text":"π","anchor":"middle"},{"at":[6.283185307179586,-4.3],"text":"2π","anchor":"middle"}],"yLabel":"y = 2sin(4x−π/2)"}
{{< /apfigure >}}

*(d) The graph displays a horizontal shift equal to $\tfrac{C}{B}$, or $\tfrac{\tfrac{\pi}{2}}{4}=\tfrac{\pi}{8}$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2sin(4x - pi/2) + 2, the same wave shifted up 2 units so it oscillates between 0 and 4.","xMin":-8.2,"xMax":8.2,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":"y","yTickStep":1,"unit":30,"curves":[{"kind":"sine","a":2,"b":4,"h":0.39269908169872414,"k":2}],"texts":[{"at":[-6.283185307179586,-4.3],"text":"−2π","anchor":"middle"},{"at":[-3.141592653589793,-4.3],"text":"−π","anchor":"middle"},{"at":[3.141592653589793,-4.3],"text":"π","anchor":"middle"},{"at":[6.283185307179586,-4.3],"text":"2π","anchor":"middle"}],"yLabel":"y = 2sin(4x−π/2)+2"}
{{< /apfigure >}}

*(e) Finally, the graph is shifted vertically by the value of $D$. In this case, the graph is shifted up by $2$ units.*

**Example.** Find the amplitude and period of the following functions and graph one cycle.

ⓐ $y=2\sin\left(\tfrac14 x\right)$  ⓑ $y=-3\sin\left(2x+\tfrac{\pi}{2}\right)$  ⓒ $y=\cos x+3$

**Solution.** ⓐ $y=2\sin\left(\tfrac14 x\right)$ involves sine, so we use the form $y=A\sin(Bt+C)+D$.

We know that $|A|$ is the amplitude, so the amplitude is $2$. Period is $\tfrac{2\pi}{B}$, so the period is

$$
\begin{array}{lrcl}
& \tfrac{2\pi}{B} &=& \tfrac{2\pi}{\tfrac14} \\[4pt]
& &=& 8\pi
\end{array}
$$

See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2sin(x/4) from 0 to 8pi, one full cycle, with the amplitude 2 marked at the peak near x = 2pi and the period 8pi marked by a dashed bracket along the bottom.","xMin":-1,"xMax":29,"yMin":-6.4,"yMax":3.3,"grid":false,"tickLabels":"y","yTickStep":2,"unit":30,"curves":[{"kind":"sine","a":2,"b":0.25}],"segments":[{"from":[6.283185307179586,0],"to":[6.283185307179586,2],"arrows":true},{"from":[0,-3],"to":[25.132741228718345,-3],"dashed":true,"arrows":true}],"texts":[{"at":[6.283185307179586,2.6],"text":"Amplitude = 2","anchor":"middle"},{"at":[12.566370614359172,-4.0],"text":"Period = 8π","anchor":"middle"},{"at":[3.141592653589793,-6.0],"text":"π","anchor":"middle"},{"at":[6.283185307179586,-6.0],"text":"2π","anchor":"middle"},{"at":[9.42477796076938,-6.0],"text":"3π","anchor":"middle"},{"at":[12.566370614359172,-6.0],"text":"4π","anchor":"middle"},{"at":[15.707963267948966,-6.0],"text":"5π","anchor":"middle"},{"at":[18.84955592153876,-6.0],"text":"6π","anchor":"middle"},{"at":[21.991148575128552,-6.0],"text":"7π","anchor":"middle"},{"at":[25.132741228718345,-6.0],"text":"8π","anchor":"middle"}]}
{{< /apfigure >}}

ⓑ $y=-3\sin\left(2x+\tfrac{\pi}{2}\right)$ involves sine, so we use the form $y=A\sin(Bt-C)+D$.

Amplitude is $|A|$, so the amplitude is $|-3|=3$. Since $A$ is negative, the graph is reflected over the $x$-axis. Period is $\tfrac{2\pi}{B}$, so the period is

$$\tfrac{2\pi}{B}=\tfrac{2\pi}{2}=\pi$$

The graph is shifted to the left by $\tfrac{C}{B}=\tfrac{\tfrac{\pi}{2}}{2}=\tfrac{\pi}{4}$ units. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = -3sin(2x + pi/2) from -pi/4 to 3pi/2, one cycle, amplitude 3, reflected and shifted left by pi/4.","xMin":-1.4,"xMax":5.2,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":"y","yTickStep":1,"unit":60,"curves":[{"kind":"sine","a":-3,"b":2,"h":-0.7853981633974483}],"texts":[{"at":[-0.7853981633974483,-3.35],"text":"−π/4","anchor":"middle"},{"at":[0.7853981633974483,-3.35],"text":"π/4","anchor":"middle"},{"at":[1.5707963267948966,-3.35],"text":"π/2","anchor":"middle"},{"at":[4.71238898038469,-3.35],"text":"3π/2","anchor":"middle"}]}
{{< /apfigure >}}

ⓒ $y=\cos x+3$ involves cosine, so we use the form $y=A\cos(Bt\pm C)+D$. Amplitude is $|A|$, so the amplitude is $1$. The period is $2\pi$. See below. This is the standard cosine function shifted up three units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = cos x + 3 from -pi/2 to 5pi/2, the standard cosine wave shifted up 3 units so it oscillates between 2 and 4, with a dashed midline at y = 3.","xMin":-2,"xMax":8.4,"yMin":0,"yMax":5.4,"grid":false,"tickLabels":"y","yTickStep":1,"unit":45,"curves":[{"kind":"cosine","k":3}],"lines":[{"y":3,"dashed":true,"arrows":false}],"texts":[{"at":[-1.5707963267948966,-0.3],"text":"−π/2","anchor":"middle"},{"at":[1.5707963267948966,-0.3],"text":"π/2","anchor":"middle"},{"at":[3.141592653589793,-0.3],"text":"π","anchor":"middle"},{"at":[4.71238898038469,-0.3],"text":"3π/2","anchor":"middle"},{"at":[6.283185307179586,-0.3],"text":"2π","anchor":"middle"},{"at":[7.853981633974483,-0.3],"text":"5π/2","anchor":"middle"}]}
{{< /apfigure >}}

{{< fillin
  question="What are the amplitude and period of the function $y=3\cos(3\pi x)$? Give the amplitude, then the period, separated by a comma."
  answer="3,\tfrac{2}{3}"
  answerDisplay="amplitude $3$, period $\tfrac{2}{3}$"
  hint="Compare to $y=A\cos(Bt)$: the amplitude is $|A|$ and the period is $\tfrac{2\pi}{|B|}$."
>}}

## Finding Equations and Graphing Sinusoidal Functions

One method of graphing sinusoidal functions is to find five key points. These points will correspond to intervals of equal length representing $\tfrac14$ of the period. The key points will indicate the location of maximum and minimum values. If there is no vertical shift, they will also indicate $x$-intercepts. For example, suppose we want to graph the function $y=\cos\theta$. We know that the period is $2\pi$, so we find the interval between key points as follows.

$$\tfrac{2\pi}{4}=\tfrac{\pi}{2}$$

Starting with $\theta=0$, we calculate the first $y$-value, add the length of the interval $\tfrac{\pi}{2}$ to $0$, and calculate the second $y$-value. We then add $\tfrac{\pi}{2}$ repeatedly until the five key points are determined. The last value should equal the first value, as the calculations cover one full period. Making a table similar to the one below, we can see these key points clearly on the graph shown after it.

| $\theta$ | $0$ | $\tfrac{\pi}{2}$ | $\pi$ | $\tfrac{3\pi}{2}$ | $2\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $y=\cos\theta$ | $1$ | $0$ | $-1$ | $0$ | $1$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = cos(theta) from -pi/2 to 5pi/2, marked at its five key points (0,1), (pi/2,0), (pi,-1), (3pi/2,0), and (2pi,1).","xMin":-2,"xMax":8.4,"yMin":-1.7,"yMax":1.7,"grid":false,"tickLabels":"y","yTickStep":1,"unit":45,"curves":[{"kind":"cosine"}],"points":[{"at":[0,1]},{"at":[1.5707963267948966,0]},{"at":[3.141592653589793,-1]},{"at":[4.71238898038469,0]},{"at":[6.283185307179586,1]}],"texts":[{"at":[-1.5707963267948966,-1.4],"text":"−π/2","anchor":"middle"},{"at":[1.5707963267948966,-1.4],"text":"π/2","anchor":"middle"},{"at":[3.141592653589793,-1.4],"text":"π","anchor":"middle"},{"at":[4.71238898038469,-1.4],"text":"3π/2","anchor":"middle"},{"at":[6.283185307179586,-1.4],"text":"2π","anchor":"middle"},{"at":[7.853981633974483,-1.4],"text":"5π/2","anchor":"middle"}]}
{{< /apfigure >}}

**Example.** Graph the function $y=-4\cos(\pi x)$ using amplitude, period, and key points.

**Solution.** The amplitude is $|-4|=4$. The period is $\tfrac{2\pi}{\omega}=\tfrac{2\pi}{\pi}=2$. (Recall that we sometimes refer to $B$ as $\omega$.) One cycle of the graph can be drawn over the interval $[0,2]$. To find the key points, we divide the period by $4$. Make a table similar to the one below, starting with $x=0$ and then adding $\tfrac12$ successively to $x$ and calculate $y$. See the graph after it.

| $x$ | $0$ | $\tfrac12$ | $1$ | $\tfrac32$ | $2$ |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $y=-4\cos(\pi x)$ | $-4$ | $0$ | $4$ | $0$ | $-4$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = -4cos(pi x) from -0.5 to 4.3, labeled with its key points (0,-4), (1/2,0), (1,4), (1 1/2,0), and (2,-4).","xMin":-0.5,"xMax":4.3,"yMin":-4.9,"yMax":4.9,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":2,"unit":75,"curves":[{"kind":"cosine","a":-4,"b":3.141592653589793}],"points":[{"at":[0,-4]},{"at":[0.5,0],"label":"(1/2, 0)"},{"at":[1,4],"label":"(1, 4)"},{"at":[1.5,0],"label":"(1 1/2, 0)"},{"at":[2,-4],"label":"(2, -4)"}],"texts":[{"at":[3,4],"text":"y = -4cos(πx)","anchor":"middle"}]}
{{< /apfigure >}}

{{< fillin
  question="For $y=3\sin(3x)$, at what $x$-value (for $x>0$) does the function first reach its maximum?"
  answer="\pi/6"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{6}$"
  hint="The sine function reaches its maximum when its argument is $\tfrac{\pi}{2}$; solve $3x=\tfrac{\pi}{2}$."
>}}

## Modeling Periodic Behavior

We will now apply these ideas to problems involving periodic behavior.

**Example.** The average monthly temperatures for a small town in Oregon are given in the table below. Find a sinusoidal function of the form $y=A\sin(Bt-C)+D$ that fits the data (round to the nearest tenth) and sketch the graph.

| Month | Temperature, $^{\circ}\text{F}$ |
| :--- | ---: |
| January | $42.5$ |
| February | $44.5$ |
| March | $48.5$ |
| April | $52.5$ |
| May | $58$ |
| June | $63$ |
| July | $68.5$ |
| August | $69$ |
| September | $64.5$ |
| October | $55.5$ |
| November | $46.5$ |
| December | $43.5$ |

**Solution.** Recall that amplitude is found using the formula

$$A=\tfrac{\text{largest value}-\text{smallest value}}{2}$$

Thus, the amplitude is

$$
\begin{array}{lrcl}
& |A| &=& \tfrac{69-42.5}{2} \\[4pt]
& &=& 13.25
\end{array}
$$

The data covers a period of $12$ months, so $\tfrac{2\pi}{B}=12$ which gives $B=\tfrac{2\pi}{12}=\tfrac{\pi}{6}$.

The vertical shift is found using the following equation.

$$D=\tfrac{\text{highest value}+\text{lowest value}}{2}$$

Thus, the vertical shift is

$$
\begin{array}{lrcl}
& D &=& \tfrac{69+42.5}{2} \\[4pt]
& &=& 55.8
\end{array}
$$

So far, we have the equation $y=13.3\sin\left(\tfrac{\pi}{6}x-C\right)+55.8$.

To find the horizontal shift, we input the $x$ and $y$ values for the first month and solve for $C$.

$$
\begin{array}{lrcl}
& 42.5 &=& 13.3\sin\left(\tfrac{\pi}{6}(1)-C\right)+55.8 \\[4pt]
& -13.3 &=& 13.3\sin\left(\tfrac{\pi}{6}-C\right) \\[4pt]
& -1 &=& \sin\left(\tfrac{\pi}{6}-C\right)\qquad\left(\sin\theta=-1\to\theta=-\tfrac{\pi}{2}\right) \\[4pt]
& \tfrac{\pi}{6}-C &=& -\tfrac{\pi}{2} \\[4pt]
& C &=& \tfrac{\pi}{6}+\tfrac{\pi}{2} \\[4pt]
& &=& \tfrac{2\pi}{3}
\end{array}
$$

We have the equation $y=13.3\sin\left(\tfrac{\pi}{6}x-\tfrac{2\pi}{3}\right)+55.8$. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the fitted temperature model over one year, months 1 through 12, oscillating around the dashed average line y = 55.8 with amplitude 13.3, passing near the two plotted data points for January (1, 42.5) and December (12, 43.5).","xMin":-0.5,"xMax":12.5,"yMin":0,"yMax":85,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":10,"unit":30,"xLabel":"Months","yLabel":"Temperatures","curves":[{"kind":"sine","a":13.3,"b":0.5235987755982988,"h":4,"k":55.8}],"lines":[{"y":55.8,"dashed":true,"arrows":false,"label":"Average"}],"segments":[{"from":[7,55.8],"to":[7,69.1],"arrows":true}],"texts":[{"at":[7,72],"text":"Amplitude = 13.3","anchor":"middle"}],"points":[{"at":[1,42.5]},{"at":[12,43.5]}]}
{{< /apfigure >}}

**Example.** The hour hand of the large clock on the wall in Union Station measures $24$ inches in length. At noon, the tip of the hour hand is $30$ inches from the ceiling. At 3 PM, the tip is $54$ inches from the ceiling, and at 6 PM, $78$ inches. At 9 PM, it is again $54$ inches from the ceiling, and at midnight, the tip of the hour hand returns to its original position $30$ inches from the ceiling. Let $y$ equal the distance from the tip of the hour hand to the ceiling $x$ hours after noon. Find the equation that models the motion of the clock and sketch the graph.

**Solution.** Begin by making a table of values as shown below.

| $x$ | $y$ | Points to plot |
| :--- | ---: | :---: |
| Noon | $30$ in | $(0,30)$ |
| 3 PM | $54$ in | $(3,54)$ |
| 6 PM | $78$ in | $(6,78)$ |
| 9 PM | $54$ in | $(9,54)$ |
| Midnight | $30$ in | $(12,30)$ |

To model an equation, we first need to find the amplitude.

$$
\begin{array}{lrcl}
& |A| &=& \left|\tfrac{78-30}{2}\right| \\[4pt]
& &=& 24
\end{array}
$$

The clock's cycle repeats every $12$ hours. Thus,

$$
\begin{array}{lrcl}
& B &=& \tfrac{2\pi}{12} \\[4pt]
& &=& \tfrac{\pi}{6}
\end{array}
$$

The vertical shift is

$$
\begin{array}{lrcl}
& D &=& \tfrac{78+30}{2} \\[4pt]
& &=& 54
\end{array}
$$

There is no horizontal shift, so $C=0$. Since the function begins with the minimum value of $y$ when $x=0$ (as opposed to the maximum value), we will use the cosine function with the negative value for $A$. In the form $y=A\cos(Bx\pm C)+D$, the equation is

$$y=-24\cos\left(\tfrac{\pi}{6}x\right)+54$$

See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = -24cos(pi/6 x) + 54 from x = 0 to 12, with the dashed midline y = 54 and the five key points (0,30), (3,54), (6,78), (9,54), and (12,30) labeled.","xMin":-0.5,"xMax":12.5,"yMin":0,"yMax":100,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":10,"unit":30,"curves":[{"kind":"cosine","a":-24,"b":0.5235987755982988,"k":54}],"lines":[{"y":54,"dashed":true,"arrows":false,"label":"Midline, y = 54"}],"points":[{"at":[0,30],"label":"(0, 30)"},{"at":[3,54],"label":"(3, 54)"},{"at":[6,78],"label":"(6, 78)"},{"at":[9,54],"label":"(9, 54)"},{"at":[12,30],"label":"(12, 30)"}]}
{{< /apfigure >}}

**Example.** The height of the tide in a small beach town is measured along a seawall. Water levels oscillate between $7$ feet at low tide and $15$ feet at high tide. On a particular day, low tide occurred at 6 AM and high tide occurred at noon. Approximately every $12$ hours, the cycle repeats. Find an equation to model the water levels.

**Solution.** As the water level varies from $7$ ft to $15$ ft, we can calculate the amplitude as

$$
\begin{array}{lrcl}
& |A| &=& \left|\tfrac{15-7}{2}\right| \\[4pt]
& &=& 4
\end{array}
$$

The cycle repeats every $12$ hours; therefore, $B$ is

$$\tfrac{2\pi}{12}=\tfrac{\pi}{6}$$

There is a vertical translation of $\tfrac{15+7}{2}=11$. Since the value of the function is at a maximum at $t=0$, we will use the cosine function, with the positive value for $A$.

$$y=4\cos\left(\tfrac{\pi}{6}t\right)+11$$

See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 4cos(pi/6 t) + 11 from t = 0 to 12, with the dashed midline y = 11 and the key points (0,15), (6,7), and (12,15) labeled.","xMin":-0.5,"xMax":12.5,"yMin":0,"yMax":16,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":2,"unit":50,"xLabel":"Time","yLabel":"Water Level (feet)","curves":[{"kind":"cosine","a":4,"b":0.5235987755982988,"k":11}],"lines":[{"y":11,"dashed":true,"arrows":false,"label":"Midline, y = 11"}],"points":[{"at":[0,15],"label":"(0, 15)"},{"at":[6,7],"label":"(6, 7)"},{"at":[12,15],"label":"(12, 15)"}]}
{{< /apfigure >}}

{{< fillin
  question="The daily temperature in the month of March in a certain city varies from a low of $24^\circ\text{F}$ to a high of $40^\circ\text{F}$. Letting $t=0$ correspond to noon and taking the daily high to occur at 6 PM, write a sinusoidal function $y=A\sin(Bt)+D$, with $B>0$ and $t$ in hours, in $^\circ\text{F}$, that models the daily temperature."
  answer="8\sin(\tfrac{\pi}{12}t)+32"
  answerDisplay="$y=8\sin\left(\tfrac{\pi}{12}t\right)+32$"
  hint="The amplitude is half the range between the low and high, the midline $D$ is their average, and the period is $24$ hours since the temperature cycle is daily."
>}}

**Example.** The average person's blood pressure is modeled by the function $f(t)=20\sin(160\pi t)+100$, where $f(t)$ represents the blood pressure at time $t$, measured in minutes. Interpret the function in terms of period and frequency. Sketch the graph and find the blood pressure reading.

**Solution.** The period is given by

$$
\begin{array}{lrcl}
& \tfrac{2\pi}{\omega} &=& \tfrac{2\pi}{160\pi} \\[4pt]
& &=& \tfrac{1}{80}
\end{array}
$$

In a blood pressure function, frequency represents the number of heart beats per minute. Frequency is the reciprocal of period and is given by

$$
\begin{array}{lrcl}
& \tfrac{\omega}{2\pi} &=& \tfrac{160\pi}{2\pi} \\[4pt]
& &=& 80
\end{array}
$$

See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(t) = 20sin(160 pi t) + 100, an oscillation between 80 and 120 completing eight cycles over t = 0 to 0.1 minutes.","xMin":-0.005,"xMax":0.115,"yMin":60,"yMax":125,"grid":false,"tickLabels":"y","yTickStep":20,"xUnit":6000,"yUnit":5,"xLabel":"t","yLabel":"f(t)","curves":[{"kind":"sine","a":20,"b":502.6548245743669,"k":100}],"texts":[{"at":[0.025,64],"text":"1/40","anchor":"middle"},{"at":[0.05,64],"text":"1/20","anchor":"middle"},{"at":[0.075,64],"text":"3/40","anchor":"middle"},{"at":[0.1,64],"text":"1/10","anchor":"middle"}]}
{{< /apfigure >}}

**Analysis.** Blood pressure of $\tfrac{120}{80}$ is considered to be normal. The top number is the maximum or systolic reading, which measures the pressure in the arteries when the heart contracts. The bottom number is the minimum or diastolic reading, which measures the pressure in the arteries as the heart relaxes between beats, refilling with blood. Thus, normal blood pressure can be modeled by a periodic function with a maximum of $120$ and a minimum of $80$.

## Modeling Harmonic Motion Functions

Harmonic motion is a form of periodic motion, but there are factors to consider that differentiate the two types. While general periodic motion applications cycle through their periods with no outside interference, harmonic motion requires a restoring force. Examples of harmonic motion include springs, gravitational force, and magnetic force.

### Simple Harmonic Motion

A type of motion described as **simple harmonic motion** involves a restoring force but assumes that the motion will continue forever. Imagine a weighted object hanging on a spring. When that object is not disturbed, we say that the object is at rest, or in equilibrium. If the object is pulled down and then released, the force of the spring pulls the object back toward equilibrium and harmonic motion begins. The restoring force is directly proportional to the displacement of the object from its equilibrium point. When $t=0$, $d=0$.

{{< callout type="info" >}}
  **Simple Harmonic Motion.** We see that simple harmonic motion equations are given in terms of displacement:

  $$d=a\cos(\omega t)\quad\text{or}\quad d=a\sin(\omega t)$$

  where $|a|$ is the amplitude, $\tfrac{2\pi}{\omega}$ is the period, and $\tfrac{\omega}{2\pi}$ is the frequency, or the number of cycles per unit of time.
{{< /callout >}}

**Example.** For the given functions,

1. Find the maximum displacement of an object.
2. Find the period or the time required for one vibration.
3. Find the frequency.
4. Sketch the graph.

ⓐ $y=5\sin(3t)$  ⓑ $y=6\cos(\pi t)$  ⓒ $y=5\cos\left(\tfrac{\pi}{2}t\right)$

**Solution.** ⓐ $y=5\sin(3t)$

1. The maximum displacement is equal to the amplitude, $|a|$, which is $5$.
2. The period is $\tfrac{2\pi}{\omega}=\tfrac{2\pi}{3}$.
3. The frequency is given as $\tfrac{\omega}{2\pi}=\tfrac{3}{2\pi}$.
4. See the graph below. The graph indicates the five key points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 5sin(3t) from t = -0.2 to 2.3, one full cycle with the five key points marked.","xMin":-0.2,"xMax":2.3,"yMin":-5.5,"yMax":5.5,"grid":false,"tickLabels":"y","yTickStep":1,"unit":150,"xLabel":"t","yLabel":"y","curves":[{"kind":"sine","a":5,"b":3}],"points":[{"at":[0,0]},{"at":[0.5235987755982988,5]},{"at":[1.0471975511965976,0]},{"at":[1.5707963267948966,-5]},{"at":[2.0943951023931953,0]}],"texts":[{"at":[0.5235987755982988,-5.9],"text":"π/6","anchor":"middle"},{"at":[1.0471975511965976,-5.9],"text":"π/3","anchor":"middle"},{"at":[1.5707963267948966,-5.9],"text":"π/2","anchor":"middle"},{"at":[2.0943951023931953,-5.9],"text":"2π/3","anchor":"middle"}]}
{{< /apfigure >}}

ⓑ $y=6\cos(\pi t)$

1. The maximum displacement is $6$.
2. The period is $\tfrac{2\pi}{\omega}=\tfrac{2\pi}{\pi}=2$.
3. The frequency is $\tfrac{\omega}{2\pi}=\tfrac{\pi}{2\pi}=\tfrac12$.
4. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 6cos(pi t) from t = -0.2 to 4.2, completing two full cycles between -6 and 6.","xMin":-0.2,"xMax":4.2,"yMin":-6.5,"yMax":6.5,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":2,"unit":90,"xLabel":"t","yLabel":"y","curves":[{"kind":"cosine","a":6,"b":3.141592653589793}]}
{{< /apfigure >}}

ⓒ $y=5\cos\left(\tfrac{\pi}{2}t\right)$

1. The maximum displacement is $5$.
2. The period is $\tfrac{2\pi}{\omega}=\tfrac{2\pi}{\tfrac{\pi}{2}}=4$.
3. The frequency is $\tfrac14$.
4. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 5cos(pi/2 t) from t = -0.2 to 4.2, one full cycle between -5 and 5.","xMin":-0.2,"xMax":4.2,"yMin":-5.5,"yMax":5.5,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":2,"unit":90,"xLabel":"t","yLabel":"y","curves":[{"kind":"cosine","a":5,"b":1.5707963267948966}]}
{{< /apfigure >}}

### Damped Harmonic Motion

In reality, a pendulum does not swing back and forth forever, nor does an object on a spring bounce up and down forever. Eventually, the pendulum stops swinging and the object stops bouncing and both return to equilibrium. Periodic motion in which an energy-dissipating force, or damping factor, acts is known as **damped harmonic motion**. Friction is typically the damping factor.

In physics, various formulas are used to account for the damping factor on the moving object. Some of these are calculus-based formulas that involve derivatives. For our purposes, we will use formulas for basic damped harmonic motion models.

{{< callout type="info" >}}
  **Damped Harmonic Motion.** In damped harmonic motion, the displacement of an oscillating object from its rest position at time $t$ is given as

  $$f(t)=ae^{-ct}\sin(\omega t)\quad\text{or}\quad f(t)=ae^{-ct}\cos(\omega t)$$

  where $c$ is a damping factor, $|a|$ is the initial displacement and $\tfrac{2\pi}{\omega}$ is the period.
{{< /callout >}}

**Example.** Model the equations that fit the two scenarios and use a graphing utility to graph the functions: Two mass-spring systems exhibit damped harmonic motion at a frequency of $0.5$ cycles per second. Both have an initial displacement of $10$ cm. The first has a damping factor of $0.5$ and the second has a damping factor of $0.1$.

**Solution.** At time $t=0$, the displacement is the maximum of $10$ cm, which calls for the cosine function. The cosine function will apply to both models.

We are given the frequency $f=\tfrac{\omega}{2\pi}$ of $0.5$ cycles per second. Thus,

$$
\begin{array}{lrcl}
& \tfrac{\omega}{2\pi} &=& 0.5 \\[4pt]
& \omega &=& (0.5)2\pi \\[4pt]
& &=& \pi
\end{array}
$$

The first spring system has a damping factor of $c=0.5$. Following the general model for damped harmonic motion, we have

$$f(t)=10e^{-0.5t}\cos(\pi t)$$

models the motion of the first spring system. The graph below models the motion of the first spring system.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The damped harmonic motion curve f(t) = 10e^(-0.5t)cos(pi t), oscillating with rapidly decreasing amplitude from an initial displacement of 10 as t increases from about -0.7 to 15.","xMin":-15,"xMax":15,"yMin":-8,"yMax":12,"grid":false,"tickLabels":true,"xTickStep":5,"yTickStep":4,"unit":30,"xLabel":"t","yLabel":"f(t)","polylines":[{"through":[[-0.66,-6.7],[-0.6,-4.17],[-0.54,-1.64],[-0.48,0.8],[-0.42,3.07],[-0.36,5.1],[-0.3,6.83],[-0.24,8.22],[-0.18,9.24],[-0.12,9.87],[-0.06,10.12],[0,10],[0.06,9.53],[0.12,8.76],[0.18,7.72],[0.24,6.47],[0.3,5.06],[0.36,3.56],[0.42,2.02],[0.48,0.49],[0.54,-0.96],[0.6,-2.29],[0.66,-3.46],[0.72,-4.45],[0.78,-5.22],[0.84,-5.76],[0.9,-6.06],[0.96,-6.14],[1.02,-5.99],[1.08,-5.64],[1.14,-5.12],[1.2,-4.44],[1.26,-3.65],[1.32,-2.77],[1.38,-1.85],[1.44,-0.91],[1.5,0],[1.56,0.86],[1.62,1.64],[1.68,2.31],[1.74,2.87],[1.8,3.29],[1.86,3.57],[1.92,3.71],[1.98,3.71],[2.04,3.58],[2.1,3.33],[2.16,2.98],[2.22,2.54],[2.28,2.04],[2.34,1.5],[2.4,0.93],[2.46,0.37],[2.52,-0.18],[2.58,-0.68],[2.64,-1.14],[2.7,-1.52],[2.76,-1.83],[2.82,-2.06],[2.88,-2.2],[2.94,-2.26],[3,-2.23],[3.06,-2.13],[3.12,-1.95],[3.18,-1.72],[3.24,-1.44],[3.3,-1.13],[3.36,-0.79],[3.42,-0.45],[3.48,-0.11],[3.54,0.21],[3.6,0.51],[3.66,0.77],[3.72,0.99],[3.78,1.16],[3.84,1.28],[3.9,1.35],[3.96,1.37],[4.02,1.34],[4.08,1.26],[4.14,1.14],[4.2,0.99],[4.26,0.81],[4.32,0.62],[4.38,0.41],[4.44,0.2],[4.5,0],[4.56,-0.19],[4.62,-0.37],[4.68,-0.52],[4.74,-0.64],[4.8,-0.73],[4.86,-0.8],[4.92,-0.83],[4.98,-0.83],[5.04,-0.8],[5.1,-0.74],[5.16,-0.66],[5.22,-0.57],[5.28,-0.45],[5.34,-0.33],[5.4,-0.21],[5.46,-0.08],[5.52,0.04],[5.58,0.15],[5.64,0.25],[5.7,0.34],[5.76,0.41],[5.82,0.46],[5.88,0.49],[5.94,0.5],[6,0.5],[6.06,0.47],[6.12,0.44],[6.18,0.38],[6.24,0.32],[6.3,0.25],[6.36,0.18],[6.42,0.1],[6.48,0.02],[6.54,-0.05],[6.6,-0.11],[6.66,-0.17],[6.72,-0.22],[6.78,-0.26],[6.84,-0.29],[6.9,-0.3],[6.96,-0.31],[7.02,-0.3],[7.08,-0.28],[7.14,-0.25],[7.2,-0.22],[7.26,-0.18],[7.32,-0.14],[7.38,-0.09],[7.44,-0.05],[7.5,0],[7.56,0.04],[7.62,0.08],[7.68,0.12],[7.74,0.14],[7.8,0.16],[7.86,0.18],[7.92,0.18],[7.98,0.18],[8.04,0.18],[8.1,0.17],[8.16,0.15],[8.22,0.13],[8.28,0.1],[8.34,0.07],[8.4,0.05],[8.46,0.02],[8.52,-0.01],[8.58,-0.03],[8.64,-0.06],[8.7,-0.08],[8.76,-0.09],[8.82,-0.1],[8.88,-0.11],[8.94,-0.11],[9,-0.11],[9.06,-0.11],[9.12,-0.1],[9.18,-0.09],[9.24,-0.07],[9.3,-0.06],[9.36,-0.04],[9.42,-0.02],[9.48,-0.01],[9.54,0.01],[9.6,0.03],[9.66,0.04],[9.72,0.05],[9.78,0.06],[9.84,0.06],[9.9,0.07],[9.96,0.07],[10.02,0.07],[10.08,0.06],[10.14,0.06],[10.2,0.05],[10.26,0.04],[10.32,0.03],[10.38,0.02],[10.44,0.01],[10.5,0],[10.56,-0.01],[10.62,-0.02],[10.68,-0.03],[10.74,-0.03],[10.8,-0.04],[10.86,-0.04],[10.92,-0.04],[10.98,-0.04],[11.04,-0.04],[11.1,-0.04],[11.16,-0.03],[11.22,-0.03],[11.28,-0.02],[11.34,-0.02],[11.4,-0.01],[11.46,0],[11.52,0],[11.58,0.01],[11.64,0.01],[11.7,0.02],[11.76,0.02],[11.82,0.02],[11.88,0.02],[11.94,0.03],[12,0.02],[12.06,0.02],[12.12,0.02],[12.18,0.02],[12.24,0.02],[12.3,0.01],[12.36,0.01],[12.42,0],[12.48,0],[12.54,0],[12.6,-0.01],[12.66,-0.01],[12.72,-0.01],[12.78,-0.01],[12.84,-0.01],[12.9,-0.02],[12.96,-0.02],[13.02,-0.01],[13.08,-0.01],[13.14,-0.01],[13.2,-0.01],[13.26,-0.01],[13.32,-0.01],[13.38,0],[13.44,0],[13.5,0],[13.56,0],[13.62,0],[13.68,0.01],[13.74,0.01],[13.8,0.01],[13.86,0.01],[13.92,0.01],[13.98,0.01],[14.04,0.01],[14.1,0.01],[14.16,0.01],[14.22,0.01],[14.28,0.01],[14.34,0],[14.4,0],[14.46,0],[14.52,0],[14.58,0],[14.64,0],[14.7,0],[14.76,0],[14.82,-0.01],[14.88,-0.01],[14.94,-0.01],[15,-0.01]]}]}
{{< /apfigure >}}

The second spring system has a damping factor of $c=0.1$ and can be modeled as

$$f(t)=10e^{-0.1t}\cos(\pi t)$$

The graph below models the motion of the second spring system.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The damped harmonic motion curve f(t) = 10e^(-0.1t)cos(pi t), oscillating with slowly decreasing amplitude from an initial displacement of 10 as t increases from about -2 to 12.","xMin":-12,"xMax":12,"yMin":-12,"yMax":12,"grid":false,"tickLabels":true,"xTickStep":4,"yTickStep":4,"unit":35,"xLabel":"t","yLabel":"f(t)","polylines":[{"through":[[-1.92,11.74],[-1.87,11.1],[-1.82,10.21],[-1.78,9.11],[-1.73,7.8],[-1.68,6.34],[-1.63,4.74],[-1.58,3.06],[-1.54,1.32],[-1.49,-0.44],[-1.44,-2.16],[-1.39,-3.83],[-1.34,-5.38],[-1.3,-6.81],[-1.25,-8.06],[-1.2,-9.12],[-1.15,-9.97],[-1.1,-10.58],[-1.06,-10.94],[-1.01,-11.06],[-0.96,-10.92],[-0.91,-10.54],[-0.86,-9.92],[-0.82,-9.09],[-0.77,-8.05],[-0.72,-6.85],[-0.67,-5.5],[-0.62,-4.04],[-0.58,-2.51],[-0.53,-0.93],[-0.48,0.66],[-0.43,2.21],[-0.38,3.7],[-0.34,5.1],[-0.29,6.36],[-0.24,7.47],[-0.19,8.39],[-0.14,9.12],[-0.1,9.64],[-0.05,9.93],[0,10],[0.05,9.84],[0.1,9.46],[0.14,8.87],[0.19,8.08],[0.24,7.12],[0.29,6],[0.34,4.76],[0.38,3.43],[0.43,2.03],[0.48,0.6],[0.53,-0.83],[0.58,-2.23],[0.62,-3.57],[0.67,-4.81],[0.72,-5.93],[0.77,-6.91],[0.82,-7.72],[0.86,-8.35],[0.91,-8.78],[0.96,-9.01],[1.01,-9.04],[1.06,-8.86],[1.1,-8.48],[1.15,-7.91],[1.2,-7.18],[1.25,-6.28],[1.3,-5.25],[1.34,-4.12],[1.39,-2.9],[1.44,-1.62],[1.49,-0.32],[1.54,0.97],[1.58,2.23],[1.63,3.42],[1.68,4.53],[1.73,5.52],[1.78,6.38],[1.82,7.09],[1.87,7.63],[1.92,7.99],[1.97,8.17],[2.02,8.16],[2.06,7.97],[2.11,7.6],[2.16,7.06],[2.21,6.37],[2.26,5.54],[2.3,4.59],[2.35,3.54],[2.4,2.43],[2.45,1.27],[2.5,0.1],[2.54,-1.07],[2.59,-2.2],[2.64,-3.27],[2.69,-4.26],[2.74,-5.14],[2.78,-5.89],[2.83,-6.51],[2.88,-6.97],[2.93,-7.27],[2.98,-7.4],[3.02,-7.37],[3.07,-7.17],[3.12,-6.81],[3.17,-6.29],[3.22,-5.64],[3.26,-4.87],[3.31,-4],[3.36,-3.04],[3.41,-2.03],[3.46,-0.98],[3.5,0.09],[3.55,1.14],[3.6,2.16],[3.65,3.11],[3.7,3.99],[3.74,4.77],[3.79,5.43],[3.84,5.97],[3.89,6.36],[3.94,6.61],[3.98,6.71],[4.03,6.65],[4.08,6.44],[4.13,6.09],[4.18,5.6],[4.22,5],[4.27,4.28],[4.32,3.48],[4.37,2.6],[4.42,1.68],[4.46,0.72],[4.51,-0.24],[4.56,-1.19],[4.61,-2.1],[4.66,-2.95],[4.7,-3.74],[4.75,-4.42],[4.8,-5.01],[4.85,-5.47],[4.9,-5.8],[4.94,-6.01],[4.99,-6.07],[5.04,-5.99],[5.09,-5.78],[5.14,-5.45],[5.18,-4.99],[5.23,-4.42],[5.28,-3.76],[5.33,-3.02],[5.38,-2.22],[5.42,-1.37],[5.47,-0.51],[5.52,0.36],[5.57,1.21],[5.62,2.03],[5.66,2.8],[5.71,3.49],[5.76,4.1],[5.81,4.61],[5.86,5.01],[5.9,5.29],[5.95,5.45],[6,5.49],[6.05,5.4],[6.1,5.19],[6.14,4.87],[6.19,4.43],[6.24,3.91],[6.29,3.29],[6.34,2.61],[6.38,1.88],[6.43,1.11],[6.48,0.33],[6.53,-0.46],[6.58,-1.23],[6.62,-1.96],[6.67,-2.64],[6.72,-3.26],[6.77,-3.79],[6.82,-4.24],[6.86,-4.58],[6.91,-4.82],[6.96,-4.95],[7.01,-4.96],[7.06,-4.86],[7.1,-4.65],[7.15,-4.34],[7.2,-3.94],[7.25,-3.45],[7.3,-2.88],[7.34,-2.26],[7.39,-1.59],[7.44,-0.89],[7.49,-0.18],[7.54,0.53],[7.58,1.22],[7.63,1.88],[7.68,2.49],[7.73,3.03],[7.78,3.5],[7.82,3.89],[7.87,4.19],[7.92,4.39],[7.97,4.48],[8.02,4.48],[8.06,4.37],[8.11,4.17],[8.16,3.88],[8.21,3.49],[8.26,3.04],[8.3,2.52],[8.35,1.95],[8.4,1.33],[8.45,0.7],[8.5,0.05],[8.54,-0.59],[8.59,-1.21],[8.64,-1.79],[8.69,-2.34],[8.74,-2.82],[8.78,-3.23],[8.83,-3.57],[8.88,-3.83],[8.93,-3.99],[8.98,-4.06],[9.02,-4.04],[9.07,-3.93],[9.12,-3.74],[9.17,-3.45],[9.22,-3.1],[9.26,-2.67],[9.31,-2.19],[9.36,-1.67],[9.41,-1.11],[9.46,-0.54],[9.5,0.05],[9.55,0.63],[9.6,1.18],[9.65,1.71],[9.7,2.19],[9.74,2.62],[9.79,2.98],[9.84,3.28],[9.89,3.49],[9.94,3.63],[9.98,3.68],[10.03,3.65],[10.08,3.53],[10.13,3.34],[10.18,3.08],[10.22,2.74],[10.27,2.35],[10.32,1.91],[10.37,1.43],[10.42,0.92],[10.46,0.4],[10.51,-0.13],[10.56,-0.65],[10.61,-1.15],[10.66,-1.62],[10.7,-2.05],[10.75,-2.43],[10.8,-2.75],[10.85,-3],[10.9,-3.19],[10.94,-3.3],[10.99,-3.33],[11.04,-3.29],[11.09,-3.17],[11.14,-2.99],[11.18,-2.74],[11.23,-2.43],[11.28,-2.06],[11.33,-1.66],[11.38,-1.22],[11.42,-0.75],[11.47,-0.28],[11.52,0.2],[11.57,0.67],[11.62,1.12],[11.66,1.53],[11.71,1.92],[11.76,2.25],[11.81,2.53],[11.86,2.75],[11.9,2.9],[11.95,2.99],[12,3.01]]}]}
{{< /apfigure >}}

**Analysis.** Notice the differing effects of the damping constant. The local maximum and minimum values of the function with the damping factor $c=0.5$ decreases much more rapidly than that of the function with $c=0.1$.

{{< fillin
  question="The equation $f(t)=5e^{-6t}\cos(4t)$ represents damped harmonic motion. Using the model $f(t)=ae^{-ct}\cos(\omega t)$, find $a$, $c$, and the frequency $\tfrac{\omega}{2\pi}$, in that order, separated by commas."
  answer="5,6,\tfrac{2}{\pi}"
  answerDisplay="$a=5$, $c=6$, frequency $=\tfrac{2}{\pi}$"
  hint="Match the equation term by term against $f(t)=ae^{-ct}\cos(\omega t)$: read off $a$ and $c$ directly, then compute $\tfrac{\omega}{2\pi}$."
>}}

**Example.** Find and graph a function of the form $y=ae^{-ct}\cos(\omega t)$ that models the information given.

ⓐ $a=20$, $c=0.05$, $p=4$  ⓑ $a=2$, $c=1.5$, $f=3$

**Solution.** Substitute the given values into the model. Recall that period is $\tfrac{2\pi}{\omega}$ and frequency is $\tfrac{\omega}{2\pi}$.

ⓐ $y=20e^{-0.05t}\cos\left(\tfrac{\pi}{2}t\right)$. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 20e^(-0.05t)cos(pi/2 t), decreasing-amplitude oscillation between about -24 and 24, over t from -24 to 24.","xMin":-24,"xMax":24,"yMin":-30,"yMax":30,"grid":false,"tickLabels":true,"xTickStep":8,"yTickStep":10,"unit":18,"xLabel":"t","yLabel":"y","polylines":[{"through":[[-9.74,-29.81],[-9.67,-28.14],[-9.6,-26.15],[-9.53,-23.87],[-9.46,-21.34],[-9.39,-18.57],[-9.33,-15.61],[-9.26,-12.49],[-9.19,-9.24],[-9.12,-5.91],[-9.05,-2.54],[-8.98,0.84],[-8.91,4.19],[-8.85,7.47],[-8.78,10.64],[-8.71,13.66],[-8.64,16.51],[-8.57,19.14],[-8.5,21.54],[-8.43,23.67],[-8.37,25.51],[-8.3,27.04],[-8.23,28.26],[-8.16,29.13],[-8.09,29.66],[-8.02,29.85],[-7.95,29.69],[-7.89,29.19],[-7.82,28.35],[-7.75,27.2],[-7.68,25.73],[-7.61,23.98],[-7.54,21.96],[-7.47,19.7],[-7.41,17.23],[-7.34,14.58],[-7.27,11.78],[-7.2,8.86],[-7.13,5.86],[-7.06,2.81],[-6.99,-0.25],[-6.93,-3.29],[-6.86,-6.27],[-6.79,-9.16],[-6.72,-11.92],[-6.65,-14.52],[-6.58,-16.94],[-6.51,-19.14],[-6.45,-21.11],[-6.38,-22.82],[-6.31,-24.26],[-6.24,-25.4],[-6.17,-26.25],[-6.1,-26.78],[-6.03,-27],[-5.97,-26.91],[-5.9,-26.51],[-5.83,-25.8],[-5.76,-24.8],[-5.69,-23.52],[-5.62,-21.98],[-5.55,-20.19],[-5.49,-18.18],[-5.42,-15.98],[-5.35,-13.6],[-5.28,-11.09],[-5.21,-8.46],[-5.14,-5.76],[-5.07,-3],[-5.01,-0.23],[-4.94,2.52],[-4.87,5.23],[-4.8,7.86],[-4.73,10.38],[-4.66,12.76],[-4.59,14.97],[-4.53,17],[-4.46,18.82],[-4.39,20.41],[-4.32,21.75],[-4.25,22.83],[-4.18,23.64],[-4.11,24.17],[-4.05,24.42],[-3.98,24.38],[-3.91,24.07],[-3.84,23.47],[-3.77,22.61],[-3.7,21.49],[-3.63,20.14],[-3.57,18.55],[-3.5,16.77],[-3.43,14.8],[-3.36,12.68],[-3.29,10.42],[-3.22,8.06],[-3.15,5.62],[-3.09,3.13],[-3.02,0.63],[-2.95,-1.87],[-2.88,-4.33],[-2.81,-6.72],[-2.74,-9.02],[-2.67,-11.19],[-2.61,-13.23],[-2.54,-15.09],[-2.47,-16.77],[-2.4,-18.24],[-2.33,-19.5],[-2.26,-20.51],[-2.19,-21.29],[-2.13,-21.81],[-2.06,-22.08],[-1.99,-22.09],[-1.92,-21.84],[-1.85,-21.35],[-1.78,-20.61],[-1.71,-19.63],[-1.65,-18.44],[-1.58,-17.04],[-1.51,-15.45],[-1.44,-13.7],[-1.37,-11.8],[-1.3,-9.78],[-1.23,-7.65],[-1.17,-5.46],[-1.1,-3.21],[-1.03,-0.94],[-0.96,1.32],[-0.89,3.55],[-0.82,5.72],[-0.75,7.82],[-0.69,9.81],[-0.62,11.67],[-0.55,13.39],[-0.48,14.93],[-0.41,16.3],[-0.34,17.47],[-0.27,18.42],[-0.21,19.16],[-0.14,19.67],[-0.07,19.95],[0,20],[0.07,19.82],[0.14,19.4],[0.21,18.77],[0.27,17.92],[0.34,16.88],[0.41,15.64],[0.48,14.23],[0.55,12.67],[0.62,10.97],[0.69,9.16],[0.75,7.25],[0.82,5.27],[0.89,3.25],[0.96,1.2],[1.03,-0.85],[1.1,-2.88],[1.17,-4.86],[1.23,-6.76],[1.3,-8.58],[1.37,-10.29],[1.44,-11.86],[1.51,-13.29],[1.58,-14.55],[1.65,-15.64],[1.71,-16.54],[1.78,-17.24],[1.85,-17.74],[1.92,-18.03],[1.99,-18.1],[2.06,-17.97],[2.13,-17.63],[2.19,-17.09],[2.26,-16.36],[2.33,-15.44],[2.4,-14.35],[2.47,-13.1],[2.54,-11.71],[2.61,-10.19],[2.67,-8.57],[2.74,-6.85],[2.81,-5.07],[2.88,-3.25],[2.95,-1.39],[3.02,0.46],[3.09,2.3],[3.15,4.1],[3.22,5.84],[3.29,7.5],[3.36,9.06],[3.43,10.51],[3.5,11.82],[3.57,12.99],[3.63,14],[3.7,14.84],[3.77,15.51],[3.84,15.99],[3.91,16.28],[3.98,16.38],[4.05,16.3],[4.11,16.02],[4.18,15.56],[4.25,14.93],[4.32,14.12],[4.39,13.16],[4.46,12.05],[4.53,10.81],[4.59,9.46],[4.66,8],[4.73,6.46],[4.8,4.86],[4.87,3.21],[4.94,1.54],[5.01,-0.14],[5.07,-1.81],[5.14,-3.44],[5.21,-5.02],[5.28,-6.54],[5.35,-7.97],[5.42,-9.3],[5.49,-10.51],[5.55,-11.59],[5.62,-12.53],[5.69,-13.31],[5.76,-13.94],[5.83,-14.41],[5.9,-14.7],[5.97,-14.82],[6.03,-14.77],[6.1,-14.55],[6.17,-14.16],[6.24,-13.61],[6.31,-12.91],[6.38,-12.06],[6.45,-11.08],[6.51,-9.98],[6.58,-8.77],[6.65,-7.47],[6.72,-6.09],[6.79,-4.64],[6.86,-3.16],[6.93,-1.65],[6.99,-0.13],[7.06,1.38],[7.13,2.87],[7.2,4.31],[7.27,5.69],[7.34,7],[7.41,8.22],[7.47,9.33],[7.54,10.33],[7.61,11.2],[7.68,11.94],[7.75,12.53],[7.82,12.98],[7.89,13.27],[7.95,13.4],[8.02,13.38],[8.09,13.21],[8.16,12.88],[8.23,12.41],[8.3,11.8],[8.37,11.05],[8.43,10.18],[8.5,9.2],[8.57,8.12],[8.64,6.96],[8.71,5.72],[8.78,4.42],[8.85,3.08],[8.91,1.72],[8.98,0.34],[9.05,-1.03],[9.12,-2.38],[9.19,-3.69],[9.26,-4.95],[9.33,-6.14],[9.39,-7.26],[9.46,-8.28],[9.53,-9.2],[9.6,-10.01],[9.67,-10.7],[9.74,-11.26],[9.81,-11.68],[9.87,-11.97],[9.94,-12.12],[10.01,-12.12],[10.08,-11.99],[10.15,-11.71],[10.22,-11.31],[10.29,-10.77],[10.35,-10.12],[10.42,-9.35],[10.49,-8.48],[10.56,-7.52],[10.63,-6.48],[10.7,-5.37],[10.77,-4.2],[10.83,-2.99],[10.9,-1.76],[10.97,-0.52],[11.04,0.72],[11.11,1.95],[11.18,3.14],[11.25,4.29],[11.31,5.38],[11.38,6.4],[11.45,7.35],[11.52,8.2],[11.59,8.94],[11.66,9.59],[11.73,10.11],[11.79,10.52],[11.86,10.8],[11.93,10.95],[12,10.98],[12.07,10.88],[12.14,10.65],[12.21,10.3],[12.27,9.84],[12.34,9.26],[12.41,8.58],[12.48,7.81],[12.55,6.95],[12.62,6.02],[12.69,5.03],[12.75,3.98],[12.82,2.89],[12.89,1.78],[12.96,0.66],[13.03,-0.47],[13.1,-1.58],[13.17,-2.67],[13.23,-3.71],[13.3,-4.71],[13.37,-5.65],[13.44,-6.51],[13.51,-7.29],[13.58,-7.99],[13.65,-8.58],[13.71,-9.08],[13.78,-9.46],[13.85,-9.73],[13.92,-9.89],[13.99,-9.94],[14.06,-9.86],[14.13,-9.68],[14.19,-9.38],[14.26,-8.98],[14.33,-8.47],[14.4,-7.88],[14.47,-7.19],[14.54,-6.43],[14.61,-5.59],[14.67,-4.7],[14.74,-3.76],[14.81,-2.78],[14.88,-1.78],[14.95,-0.76],[15.02,0.25],[15.09,1.26],[15.15,2.25],[15.22,3.2],[15.29,4.11],[15.36,4.97],[15.43,5.77],[15.5,6.49],[15.57,7.13],[15.63,7.68],[15.7,8.15],[15.77,8.51],[15.84,8.77],[15.91,8.93],[15.98,8.99],[16.05,8.94],[16.11,8.79],[16.18,8.54],[16.25,8.19],[16.32,7.75],[16.39,7.22],[16.46,6.61],[16.53,5.93],[16.59,5.19],[16.66,4.39],[16.73,3.55],[16.8,2.67],[16.87,1.76],[16.94,0.85],[17.01,-0.08],[17.07,-0.99],[17.14,-1.89],[17.21,-2.76],[17.28,-3.59],[17.35,-4.37],[17.42,-5.1],[17.49,-5.77],[17.55,-6.36],[17.62,-6.87],[17.69,-7.31],[17.76,-7.65],[17.83,-7.91],[17.9,-8.07],[17.97,-8.13],[18.03,-8.11],[18.1,-7.98],[18.17,-7.77],[18.24,-7.47],[18.31,-7.08],[18.38,-6.62],[18.45,-6.08],[18.51,-5.48],[18.58,-4.81],[18.65,-4.1],[18.72,-3.34],[18.79,-2.55],[18.86,-1.73],[18.93,-0.9],[18.99,-0.07],[19.06,0.76],[19.13,1.58],[19.2,2.37],[19.27,3.12],[19.34,3.84],[19.41,4.51],[19.47,5.12],[19.54,5.67],[19.61,6.15],[19.68,6.55],[19.75,6.88],[19.82,7.12],[19.89,7.28],[19.95,7.36],[20.02,7.34],[20.09,7.25],[20.16,7.07],[20.23,6.81],[20.3,6.47],[20.37,6.06],[20.43,5.59],[20.5,5.05],[20.57,4.46],[20.64,3.82],[20.71,3.14],[20.78,2.43],[20.85,1.69],[20.91,0.94],[20.98,0.19],[21.05,-0.56],[21.12,-1.3],[21.19,-2.02],[21.26,-2.72],[21.33,-3.37],[21.39,-3.98],[21.46,-4.55],[21.53,-5.05],[21.6,-5.49],[21.67,-5.87],[21.74,-6.18],[21.81,-6.41],[21.87,-6.57],[21.94,-6.65],[22.01,-6.65],[22.08,-6.58],[22.15,-6.43],[22.22,-6.21],[22.29,-5.91],[22.35,-5.55],[22.42,-5.13],[22.49,-4.65],[22.56,-4.13],[22.63,-3.55],[22.7,-2.94],[22.77,-2.31],[22.83,-1.64],[22.9,-0.97],[22.97,-0.28],[23.04,0.4],[23.11,1.07],[23.18,1.72],[23.25,2.35],[23.31,2.95],[23.38,3.52],[23.45,4.03],[23.52,4.5],[23.59,4.91],[23.66,5.26],[23.73,5.55],[23.79,5.77],[23.86,5.93],[23.93,6.01],[24,6.02]]}]}
{{< /apfigure >}}

ⓑ $y=2e^{-1.5t}\cos(6\pi t)$. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2e^(-1.5t)cos(6 pi t), a sharp spike near t = 0 that decays to almost nothing within about a second.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":true,"xTickStep":2,"yTickStep":2,"unit":80,"xLabel":"t","yLabel":"y","polylines":[{"through":[[-0.79,-4.67],[-0.77,-2.11],[-0.74,0.69],[-0.72,3.16],[-0.7,4.83],[-0.67,5.45],[-0.65,4.96],[-0.62,3.54],[-0.6,1.52],[-0.58,-0.65],[-0.55,-2.55],[-0.53,-3.81],[-0.5,-4.25],[-0.48,-3.82],[-0.46,-2.68],[-0.43,-1.09],[-0.41,0.6],[-0.38,2.05],[-0.36,3.01],[-0.34,3.31],[-0.31,2.94],[-0.29,2.02],[-0.26,0.78],[-0.24,-0.54],[-0.22,-1.65],[-0.19,-2.37],[-0.17,-2.57],[-0.14,-2.26],[-0.12,-1.53],[-0.1,-0.55],[-0.07,0.47],[-0.05,1.33],[-0.02,1.86],[0,2],[0.02,1.74],[0.05,1.15],[0.07,0.38],[0.1,-0.41],[0.12,-1.06],[0.14,-1.47],[0.17,-1.55],[0.19,-1.33],[0.22,-0.86],[0.24,-0.26],[0.26,0.35],[0.29,0.85],[0.31,1.15],[0.34,1.21],[0.36,1.02],[0.38,0.65],[0.41,0.18],[0.43,-0.3],[0.46,-0.68],[0.48,-0.91],[0.5,-0.94],[0.53,-0.78],[0.55,-0.49],[0.58,-0.12],[0.6,0.25],[0.62,0.54],[0.65,0.71],[0.67,0.73],[0.7,0.6],[0.72,0.36],[0.74,0.07],[0.77,-0.21],[0.79,-0.43],[0.82,-0.56],[0.84,-0.56],[0.86,-0.46],[0.89,-0.27],[0.91,-0.04],[0.94,0.18],[0.96,0.35],[0.98,0.44],[1.01,0.44],[1.03,0.35],[1.06,0.2],[1.08,0.02],[1.1,-0.15],[1.13,-0.27],[1.15,-0.34],[1.18,-0.34],[1.2,-0.27],[1.22,-0.15],[1.25,-0.01],[1.27,0.12],[1.3,0.22],[1.32,0.27],[1.34,0.26],[1.37,0.2],[1.39,0.11],[1.42,0],[1.44,-0.1],[1.46,-0.17],[1.49,-0.21],[1.51,-0.2],[1.54,-0.16],[1.56,-0.08],[1.58,0],[1.61,0.08],[1.63,0.14],[1.66,0.16],[1.68,0.16],[1.7,0.12],[1.73,0.06],[1.75,-0.01],[1.78,-0.07],[1.8,-0.11],[1.82,-0.13],[1.85,-0.12],[1.87,-0.09],[1.9,-0.04],[1.92,0.01],[1.94,0.05],[1.97,0.09],[1.99,0.1],[2.02,0.09],[2.04,0.07],[2.06,0.03],[2.09,-0.01],[2.11,-0.04],[2.14,-0.07],[2.16,-0.08],[2.18,-0.07],[2.21,-0.05],[2.23,-0.02],[2.26,0.01],[2.28,0.04],[2.3,0.05],[2.33,0.06],[2.35,0.06],[2.38,0.04],[2.4,0.02],[2.42,-0.01],[2.45,-0.03],[2.47,-0.04],[2.5,-0.05],[2.52,-0.04],[2.54,-0.03],[2.57,-0.01],[2.59,0.01],[2.62,0.02],[2.64,0.03],[2.66,0.04],[2.69,0.03],[2.71,0.02],[2.74,0.01],[2.76,-0.01],[2.78,-0.02],[2.81,-0.03],[2.83,-0.03],[2.86,-0.03],[2.88,-0.02],[2.9,-0.01],[2.93,0.01],[2.95,0.01],[2.98,0.02],[3,0.02],[3.02,0.02],[3.05,0.01],[3.07,0],[3.1,0],[3.12,-0.01],[3.14,-0.02],[3.17,-0.02],[3.19,-0.01],[3.22,-0.01],[3.24,0],[3.26,0],[3.29,0.01],[3.31,0.01],[3.34,0.01],[3.36,0.01],[3.38,0.01],[3.41,0],[3.43,0],[3.46,-0.01],[3.48,-0.01],[3.5,-0.01],[3.53,-0.01],[3.55,-0.01],[3.58,0],[3.6,0],[3.62,0.01],[3.65,0.01],[3.67,0.01],[3.7,0.01],[3.72,0],[3.74,0],[3.77,0],[3.79,0],[3.82,-0.01],[3.84,-0.01],[3.86,-0.01],[3.89,0],[3.91,0],[3.94,0],[3.96,0],[3.98,0],[4.01,0],[4.03,0],[4.06,0],[4.08,0],[4.1,0],[4.13,0],[4.15,0],[4.18,0],[4.2,0],[4.22,0],[4.25,0],[4.27,0],[4.3,0],[4.32,0],[4.34,0],[4.37,0],[4.39,0],[4.42,0],[4.44,0],[4.46,0],[4.49,0],[4.51,0],[4.54,0],[4.56,0],[4.58,0],[4.61,0],[4.63,0],[4.66,0],[4.68,0],[4.7,0],[4.73,0],[4.75,0],[4.78,0],[4.8,0],[4.82,0],[4.85,0],[4.87,0],[4.9,0],[4.92,0],[4.94,0],[4.97,0],[4.99,0],[5.02,0],[5.04,0],[5.06,0],[5.09,0],[5.11,0],[5.14,0],[5.16,0],[5.18,0],[5.21,0],[5.23,0],[5.26,0],[5.28,0],[5.3,0],[5.33,0],[5.35,0],[5.38,0],[5.4,0],[5.42,0],[5.45,0],[5.47,0],[5.5,0],[5.52,0],[5.54,0],[5.57,0],[5.59,0],[5.62,0],[5.64,0],[5.66,0],[5.69,0],[5.71,0],[5.74,0],[5.76,0],[5.78,0],[5.81,0],[5.83,0],[5.86,0],[5.88,0],[5.9,0],[5.93,0],[5.95,0],[5.98,0],[6,0]]}]}
{{< /apfigure >}}

**Example.** Find and graph a function of the form $y=ae^{-ct}\sin(\omega t)$ that models the information given.

ⓐ $a=7$, $c=10$, $p=\tfrac{\pi}{6}$  ⓑ $a=0.3$, $c=0.2$, $f=20$

**Solution.** Calculate the value of $\omega$ and substitute the known values into the model.

ⓐ As period is $\tfrac{2\pi}{\omega}$, we have

$$
\begin{array}{lrcl}
& \tfrac{\pi}{6} &=& \tfrac{2\pi}{\omega} \\[4pt]
& \omega\pi &=& 6(2\pi) \\[4pt]
& \omega &=& 12
\end{array}
$$

The damping factor is given as $10$ and the amplitude is $7$. Thus, the model is $y=7e^{-10t}\sin(12t)$. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 7e^(-10t)sin(12t), a brief sharp spike right at t = 0 that flattens out almost immediately.","xMin":-1,"xMax":4,"yMin":-2,"yMax":4,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":1,"unit":150,"xLabel":"t","yLabel":"y","polylines":[{"through":[[-0.01,-0.93],[0,0],[0.01,0.76],[0.02,1.36],[0.03,1.83],[0.04,2.17],[0.05,2.4],[0.06,2.53],[0.07,2.59],[0.08,2.58],[0.09,2.51],[0.1,2.4],[0.11,2.26],[0.12,2.09],[0.13,1.91],[0.14,1.72],[0.15,1.52],[0.16,1.33],[0.17,1.14],[0.18,0.96],[0.19,0.79],[0.2,0.64],[0.21,0.5],[0.22,0.37],[0.23,0.26],[0.24,0.16],[0.25,0.08],[0.26,0.01],[0.27,-0.05],[0.28,-0.09],[0.29,-0.13],[0.3,-0.15],[0.31,-0.17],[0.32,-0.18],[0.33,-0.19],[0.34,-0.19],[0.35,-0.18],[0.36,-0.18],[0.37,-0.17],[0.38,-0.15],[0.39,-0.14],[0.4,-0.13],[0.41,-0.11],[0.42,-0.1],[0.43,-0.09],[0.44,-0.07],[0.45,-0.06],[0.46,-0.05],[0.47,-0.04],[0.48,-0.03],[0.49,-0.02],[0.5,-0.01],[0.51,-0.01],[0.52,0],[0.53,0],[0.54,0.01],[0.55,0.01],[0.56,0.01],[0.57,0.01],[0.58,0.01],[0.59,0.01],[0.6,0.01],[0.61,0.01],[0.62,0.01],[0.63,0.01],[0.64,0.01],[0.65,0.01],[0.66,0.01],[0.67,0.01],[0.68,0.01],[0.69,0.01],[0.7,0.01],[0.71,0],[0.72,0],[0.73,0],[0.74,0],[0.75,0],[0.76,0],[0.77,0],[0.78,0],[0.79,0],[0.8,0],[0.81,0],[0.82,0],[0.83,0],[0.84,0],[0.85,0],[0.86,0],[0.87,0],[0.88,0],[0.89,0],[0.9,0],[0.91,0],[0.92,0],[0.93,0],[0.94,0],[0.95,0],[0.96,0],[0.97,0],[0.98,0],[0.99,0],[1,0],[1.01,0],[1.02,0],[1.03,0],[1.04,0],[1.05,0],[1.06,0],[1.07,0],[1.08,0],[1.09,0],[1.1,0],[1.11,0],[1.12,0],[1.13,0],[1.14,0],[1.15,0],[1.16,0],[1.17,0],[1.18,0],[1.19,0],[1.2,0],[1.21,0],[1.22,0],[1.23,0],[1.24,0],[1.25,0],[1.26,0],[1.27,0],[1.28,0],[1.29,0],[1.3,0],[1.31,0],[1.32,0],[1.33,0],[1.34,0],[1.35,0],[1.36,0],[1.37,0],[1.38,0],[1.39,0],[1.4,0],[1.41,0],[1.42,0],[1.43,0],[1.44,0],[1.45,0],[1.46,0],[1.47,0],[1.48,0],[1.49,0],[1.5,0],[1.51,0],[1.52,0],[1.53,0],[1.54,0],[1.55,0],[1.56,0],[1.57,0],[1.58,0],[1.59,0],[1.6,0],[1.61,0],[1.62,0],[1.63,0],[1.64,0],[1.65,0],[1.66,0],[1.67,0],[1.68,0],[1.69,0],[1.7,0],[1.71,0],[1.72,0],[1.73,0],[1.74,0],[1.75,0],[1.76,0],[1.77,0],[1.78,0],[1.79,0],[1.8,0],[1.81,0],[1.82,0],[1.83,0],[1.84,0],[1.85,0],[1.86,0],[1.87,0],[1.88,0],[1.89,0],[1.9,0],[1.91,0],[1.92,0],[1.93,0],[1.94,0],[1.95,0],[1.96,0],[1.97,0],[1.98,0],[1.99,0],[2,0],[2.01,0],[2.02,0],[2.03,0],[2.04,0],[2.05,0],[2.06,0],[2.07,0],[2.08,0],[2.09,0],[2.1,0],[2.11,0],[2.12,0],[2.13,0],[2.14,0],[2.15,0],[2.16,0],[2.17,0],[2.18,0],[2.19,0],[2.2,0],[2.21,0],[2.22,0],[2.23,0],[2.24,0],[2.25,0],[2.26,0],[2.27,0],[2.28,0],[2.29,0],[2.3,0],[2.31,0],[2.32,0],[2.33,0],[2.34,0],[2.35,0],[2.36,0],[2.37,0],[2.38,0],[2.39,0],[2.4,0],[2.41,0],[2.42,0],[2.43,0],[2.44,0],[2.45,0],[2.46,0],[2.47,0],[2.48,0],[2.49,0],[2.5,0],[2.51,0],[2.52,0],[2.53,0],[2.54,0],[2.55,0],[2.56,0],[2.57,0],[2.58,0],[2.59,0],[2.6,0],[2.61,0],[2.62,0],[2.63,0],[2.64,0],[2.65,0],[2.66,0],[2.67,0],[2.68,0],[2.69,0],[2.7,0],[2.71,0],[2.72,0],[2.73,0],[2.74,0],[2.75,0],[2.76,0],[2.77,0],[2.78,0],[2.79,0],[2.8,0],[2.81,0],[2.82,0],[2.83,0],[2.84,0],[2.85,0],[2.86,0],[2.87,0],[2.88,0],[2.89,0],[2.9,0],[2.91,0],[2.92,0],[2.93,0],[2.94,0],[2.95,0],[2.96,0],[2.97,0],[2.98,0],[2.99,0],[3,0],[3.01,0],[3.02,0],[3.03,0],[3.04,0],[3.05,0],[3.06,0],[3.07,0],[3.08,0],[3.09,0],[3.1,0],[3.11,0],[3.12,0],[3.13,0],[3.14,0],[3.15,0],[3.16,0],[3.17,0],[3.18,0],[3.19,0],[3.2,0],[3.21,0],[3.22,0],[3.23,0],[3.24,0],[3.25,0],[3.26,0],[3.27,0],[3.28,0],[3.29,0],[3.3,0],[3.31,0],[3.32,0],[3.33,0],[3.34,0],[3.35,0],[3.36,0],[3.37,0],[3.38,0],[3.39,0],[3.4,0],[3.41,0],[3.42,0],[3.43,0],[3.44,0],[3.45,0],[3.46,0],[3.47,0],[3.48,0],[3.49,0],[3.5,0],[3.51,0],[3.52,0],[3.53,0],[3.54,0],[3.55,0],[3.56,0],[3.57,0],[3.58,0],[3.59,0],[3.6,0],[3.61,0],[3.62,0],[3.63,0],[3.64,0],[3.65,0],[3.66,0],[3.67,0],[3.68,0],[3.69,0],[3.7,0],[3.71,0],[3.72,0],[3.73,0],[3.74,0],[3.75,0],[3.76,0],[3.77,0],[3.78,0],[3.79,0],[3.8,0],[3.81,0],[3.82,0],[3.83,0],[3.84,0],[3.85,0],[3.86,0],[3.87,0],[3.88,0],[3.89,0],[3.9,0],[3.91,0],[3.92,0],[3.93,0],[3.94,0],[3.95,0],[3.96,0],[3.97,0],[3.98,0],[3.99,0],[4,0]]}]}
{{< /apfigure >}}

ⓑ As frequency is $\tfrac{\omega}{2\pi}$, we have

$$
\begin{array}{lrcl}
& 20 &=& \tfrac{\omega}{2\pi} \\[4pt]
& \omega &=& 40\pi
\end{array}
$$

The damping factor is given as $0.2$ and the amplitude is $0.3$. The model is $y=0.3e^{-0.2t}\sin(40\pi t)$. Because the oscillations at this frequency are so tightly packed, the curve reads at ordinary scale as the two bounding envelope curves $y=\pm0.3e^{-0.2t}$ closing in on the axis, a rapid decay within the first couple of seconds; the source's own printed figure additionally shows a magnified inset of a short window revealing the individual sinusoidal cycles hidden inside that envelope.

**Analysis.** A comparison of the last two examples illustrates how we choose between the sine or cosine functions to model sinusoidal criteria. We see that the cosine function is at the maximum displacement when $t=0$, and the sine function is at the equilibrium point when $t=0$. For example, consider the equation $y=20e^{-0.05t}\cos\left(\tfrac{\pi}{2}t\right)$ from the previous example. We can see from the graph that when $t=0$, $y=20$, which is the initial amplitude. Check this by setting $t=0$ in the cosine equation:

$$
\begin{array}{lrcl}
& y &=& 20e^{-0.05(0)}\cos\left(\tfrac{\pi}{2}(0)\right) \\[4pt]
& &=& 20(1)(1) \\[4pt]
& &=& 20
\end{array}
$$

Using the sine function yields

$$
\begin{array}{lrcl}
& y &=& 20e^{-0.05(0)}\sin\left(\tfrac{\pi}{2}(0)\right) \\[4pt]
& &=& 20(1)(0) \\[4pt]
& &=& 0
\end{array}
$$

Thus, cosine is the correct function.

{{< fillin
  question="Write the equation for damped harmonic motion given $a=10$, $c=0.5$, and $p=2$."
  answer="10e^{-0.5t}\cos(\pi t)"
  answerDisplay="$y=10e^{-0.5t}\cos(\pi t)$"
  hint="Use $f(t)=ae^{-ct}\cos(\omega t)$ with $\omega=\tfrac{2\pi}{p}$."
>}}

**Example.** A spring measuring $10$ inches in natural length is compressed by $5$ inches and released. It oscillates once every $3$ seconds, and its amplitude decreases by $30\%$ every second. Find an equation that models the position of the spring $t$ seconds after being released.

**Solution.** The amplitude begins at $5$ in. and decreases $30\%$ each second. Because the spring is initially compressed, we will write $A$ as a negative value. We can write the amplitude portion of the function as

$$A(t)=5(1-0.30)^{t}$$

We put $(1-0.30)^{t}$ in the form $e^{ct}$ as follows:

$$
\begin{array}{lrcl}
& 0.7 &=& e^{c} \\[4pt]
& c &=& \ln 0.7 \\[4pt]
& &=& -0.357
\end{array}
$$

Now let's address the period. The spring cycles through its positions every $3$ seconds; this is the period, and we can use the formula to find $\omega$.

$$
\begin{array}{lrcl}
& 3 &=& \tfrac{2\pi}{\omega} \\[4pt]
& \omega &=& \tfrac{2\pi}{3}
\end{array}
$$

The natural length of $10$ inches is the midline. We will use the cosine function, since the spring starts out at its maximum displacement. This portion of the equation is represented as

$$y=\cos\left(\tfrac{2\pi}{3}t\right)+10$$

Finally, we put both functions together. Our model for the position of the spring at $t$ seconds is given as

$$y=-5e^{-0.357t}\cos\left(\tfrac{2\pi}{3}t\right)+10$$

See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = -5e^(-0.357t)cos(2pi/3 t) + 10 from t = -4 to 24, starting with high-amplitude waves that quickly settle to nearly the horizontal line y = 10.","xMin":-4,"xMax":24,"yMin":-4,"yMax":24,"grid":false,"tickLabels":true,"xTickStep":4,"yTickStep":4,"unit":35,"xLabel":"t","yLabel":"y","polylines":[{"through":[[-2.92,-3.98],[-2.88,-3.54],[-2.84,-3.01],[-2.8,-2.41],[-2.76,-1.74],[-2.72,-1],[-2.68,-0.2],[-2.64,0.65],[-2.6,1.54],[-2.56,2.46],[-2.52,3.41],[-2.48,4.39],[-2.44,5.37],[-2.4,6.36],[-2.36,7.35],[-2.32,8.33],[-2.28,9.29],[-2.24,10.23],[-2.2,11.15],[-2.16,12.03],[-2.12,12.87],[-2.08,13.66],[-2.04,14.41],[-2,15.11],[-1.96,15.74],[-1.92,16.33],[-1.88,16.84],[-1.84,17.3],[-1.8,17.69],[-1.76,18.02],[-1.72,18.28],[-1.68,18.47],[-1.64,18.6],[-1.6,18.66],[-1.56,18.66],[-1.52,18.6],[-1.48,18.47],[-1.44,18.29],[-1.4,18.06],[-1.36,17.78],[-1.32,17.45],[-1.28,17.07],[-1.24,16.66],[-1.2,16.21],[-1.16,15.73],[-1.12,15.22],[-1.08,14.69],[-1.04,14.14],[-1,13.57],[-0.96,13],[-0.92,12.42],[-0.88,11.84],[-0.84,11.26],[-0.8,10.7],[-0.76,10.14],[-0.72,9.59],[-0.68,9.07],[-0.64,8.57],[-0.6,8.09],[-0.56,7.63],[-0.52,7.21],[-0.48,6.82],[-0.44,6.46],[-0.4,6.14],[-0.36,5.86],[-0.32,5.61],[-0.28,5.4],[-0.24,5.23],[-0.2,5.09],[-0.16,5],[-0.12,4.95],[-0.08,4.93],[-0.04,4.95],[0,5],[0.04,5.09],[0.08,5.21],[0.12,5.36],[0.16,5.54],[0.2,5.75],[0.24,5.98],[0.28,6.23],[0.32,6.5],[0.36,6.79],[0.4,7.1],[0.44,7.42],[0.48,7.74],[0.52,8.08],[0.56,8.41],[0.6,8.75],[0.64,9.09],[0.68,9.43],[0.72,9.76],[0.76,10.08],[0.8,10.39],[0.84,10.69],[0.88,10.98],[0.92,11.25],[0.96,11.51],[1,11.75],[1.04,11.97],[1.08,12.17],[1.12,12.35],[1.16,12.5],[1.2,12.64],[1.24,12.75],[1.28,12.84],[1.32,12.9],[1.36,12.95],[1.4,12.97],[1.44,12.97],[1.48,12.95],[1.52,12.9],[1.56,12.84],[1.6,12.76],[1.64,12.67],[1.68,12.55],[1.72,12.42],[1.76,12.28],[1.8,12.13],[1.84,11.96],[1.88,11.79],[1.92,11.61],[1.96,11.42],[2,11.22],[2.04,11.03],[2.08,10.83],[2.12,10.63],[2.16,10.43],[2.2,10.24],[2.24,10.05],[2.28,9.86],[2.32,9.68],[2.36,9.51],[2.4,9.34],[2.44,9.19],[2.48,9.04],[2.52,8.91],[2.56,8.79],[2.6,8.68],[2.64,8.58],[2.68,8.49],[2.72,8.42],[2.76,8.36],[2.8,8.32],[2.84,8.29],[2.88,8.27],[2.92,8.26],[2.96,8.27],[3,8.29],[3.04,8.32],[3.08,8.36],[3.12,8.41],[3.16,8.47],[3.2,8.54],[3.24,8.62],[3.28,8.71],[3.32,8.8],[3.36,8.9],[3.4,9.01],[3.44,9.11],[3.48,9.23],[3.52,9.34],[3.56,9.46],[3.6,9.57],[3.64,9.69],[3.68,9.8],[3.72,9.92],[3.76,10.03],[3.8,10.13],[3.84,10.24],[3.88,10.34],[3.92,10.43],[3.96,10.52],[4,10.6],[4.04,10.67],[4.08,10.74],[4.12,10.8],[4.16,10.86],[4.2,10.9],[4.24,10.94],[4.28,10.97],[4.32,10.99],[4.36,11.01],[4.4,11.02],[4.44,11.02],[4.48,11.01],[4.52,10.99],[4.56,10.97],[4.6,10.95],[4.64,10.91],[4.68,10.87],[4.72,10.83],[4.76,10.78],[4.8,10.73],[4.84,10.67],[4.88,10.61],[4.92,10.55],[4.96,10.49],[5,10.42],[5.04,10.35],[5.08,10.28],[5.12,10.22],[5.16,10.15],[5.2,10.08],[5.24,10.02],[5.28,9.95],[5.32,9.89],[5.36,9.83],[5.4,9.78],[5.44,9.72],[5.48,9.67],[5.52,9.63],[5.56,9.58],[5.6,9.55],[5.64,9.51],[5.68,9.48],[5.72,9.46],[5.76,9.44],[5.8,9.42],[5.84,9.41],[5.88,9.41],[5.92,9.4],[5.96,9.41],[6,9.41],[6.04,9.42],[6.08,9.44],[6.12,9.46],[6.16,9.48],[6.2,9.5],[6.24,9.53],[6.28,9.56],[6.32,9.59],[6.36,9.62],[6.4,9.66],[6.44,9.7],[6.48,9.73],[6.52,9.77],[6.56,9.81],[6.6,9.85],[6.64,9.89],[6.68,9.93],[6.72,9.97],[6.76,10.01],[6.8,10.05],[6.84,10.08],[6.88,10.12],[6.92,10.15],[6.96,10.18],[7,10.21],[7.04,10.23],[7.08,10.25],[7.12,10.28],[7.16,10.29],[7.2,10.31],[7.24,10.32],[7.28,10.33],[7.32,10.34],[7.36,10.35],[7.4,10.35],[7.44,10.35],[7.48,10.35],[7.52,10.34],[7.56,10.33],[7.6,10.32],[7.64,10.31],[7.68,10.3],[7.72,10.28],[7.76,10.27],[7.8,10.25],[7.84,10.23],[7.88,10.21],[7.92,10.19],[7.96,10.17],[8,10.14],[8.04,10.12],[8.08,10.1],[8.12,10.07],[8.16,10.05],[8.2,10.03],[8.24,10.01],[8.28,9.98],[8.32,9.96],[8.36,9.94],[8.4,9.92],[8.44,9.9],[8.48,9.89],[8.52,9.87],[8.56,9.86],[8.6,9.84],[8.64,9.83],[8.68,9.82],[8.72,9.81],[8.76,9.81],[8.8,9.8],[8.84,9.8],[8.88,9.8],[8.92,9.8],[8.96,9.8],[9,9.8],[9.04,9.8],[9.08,9.81],[9.12,9.81],[9.16,9.82],[9.2,9.83],[9.24,9.84],[9.28,9.85],[9.32,9.86],[9.36,9.87],[9.4,9.88],[9.44,9.9],[9.48,9.91],[9.52,9.92],[9.56,9.94],[9.6,9.95],[9.64,9.96],[9.68,9.98],[9.72,9.99],[9.76,10],[9.8,10.02],[9.84,10.03],[9.88,10.04],[9.92,10.05],[9.96,10.06],[10,10.07],[10.04,10.08],[10.08,10.09],[10.12,10.09],[10.16,10.1],[10.2,10.11],[10.24,10.11],[10.28,10.11],[10.32,10.12],[10.36,10.12],[10.4,10.12],[10.44,10.12],[10.48,10.12],[10.52,10.12],[10.56,10.11],[10.6,10.11],[10.64,10.11],[10.68,10.1],[10.72,10.1],[10.76,10.09],[10.8,10.09],[10.84,10.08],[10.88,10.07],[10.92,10.06],[10.96,10.06],[11,10.05],[11.04,10.04],[11.08,10.03],[11.12,10.03],[11.16,10.02],[11.2,10.01],[11.24,10],[11.28,9.99],[11.32,9.99],[11.36,9.98],[11.4,9.97],[11.44,9.97],[11.48,9.96],[11.52,9.96],[11.56,9.95],[11.6,9.95],[11.64,9.94],[11.68,9.94],[11.72,9.94],[11.76,9.93],[11.8,9.93],[11.84,9.93],[11.88,9.93],[11.92,9.93],[11.96,9.93],[12,9.93],[12.04,9.93],[12.08,9.93],[12.12,9.94],[12.16,9.94],[12.2,9.94],[12.24,9.94],[12.28,9.95],[12.32,9.95],[12.36,9.96],[12.4,9.96],[12.44,9.96],[12.48,9.97],[12.52,9.97],[12.56,9.98],[12.6,9.98],[12.64,9.99],[12.68,9.99],[12.72,10],[12.76,10],[12.8,10.01],[12.84,10.01],[12.88,10.01],[12.92,10.02],[12.96,10.02],[13,10.02],[13.04,10.03],[13.08,10.03],[13.12,10.03],[13.16,10.03],[13.2,10.04],[13.24,10.04],[13.28,10.04],[13.32,10.04],[13.36,10.04],[13.4,10.04],[13.44,10.04],[13.48,10.04],[13.52,10.04],[13.56,10.04],[13.6,10.04],[13.64,10.04],[13.68,10.04],[13.72,10.03],[13.76,10.03],[13.8,10.03],[13.84,10.03],[13.88,10.02],[13.92,10.02],[13.96,10.02],[14,10.02],[14.04,10.01],[14.08,10.01],[14.12,10.01],[14.16,10.01],[14.2,10],[14.24,10],[14.28,10],[14.32,10],[14.36,9.99],[14.4,9.99],[14.44,9.99],[14.48,9.99],[14.52,9.98],[14.56,9.98],[14.6,9.98],[14.64,9.98],[14.68,9.98],[14.72,9.98],[14.76,9.98],[14.8,9.98],[14.84,9.98],[14.88,9.98],[14.92,9.98],[14.96,9.98],[15,9.98],[15.04,9.98],[15.08,9.98],[15.12,9.98],[15.16,9.98],[15.2,9.98],[15.24,9.98],[15.28,9.98],[15.32,9.98],[15.36,9.98],[15.4,9.99],[15.44,9.99],[15.48,9.99],[15.52,9.99],[15.56,9.99],[15.6,9.99],[15.64,10],[15.68,10],[15.72,10],[15.76,10],[15.8,10],[15.84,10],[15.88,10],[15.92,10.01],[15.96,10.01],[16,10.01],[16.04,10.01],[16.08,10.01],[16.12,10.01],[16.16,10.01],[16.2,10.01],[16.24,10.01],[16.28,10.01],[16.32,10.01],[16.36,10.01],[16.4,10.01],[16.44,10.01],[16.48,10.01],[16.52,10.01],[16.56,10.01],[16.6,10.01],[16.64,10.01],[16.68,10.01],[16.72,10.01],[16.76,10.01],[16.8,10.01],[16.84,10.01],[16.88,10.01],[16.92,10.01],[16.96,10.01],[17,10.01],[17.04,10],[17.08,10],[17.12,10],[17.16,10],[17.2,10],[17.24,10],[17.28,10],[17.32,10],[17.36,10],[17.4,10],[17.44,10],[17.48,10],[17.52,9.99],[17.56,9.99],[17.6,9.99],[17.64,9.99],[17.68,9.99],[17.72,9.99],[17.76,9.99],[17.8,9.99],[17.84,9.99],[17.88,9.99],[17.92,9.99],[17.96,9.99],[18,9.99],[18.04,9.99],[18.08,9.99],[18.12,9.99],[18.16,9.99],[18.2,9.99],[18.24,9.99],[18.28,9.99],[18.32,9.99],[18.36,9.99],[18.4,10],[18.44,10],[18.48,10],[18.52,10],[18.56,10],[18.6,10],[18.64,10],[18.68,10],[18.72,10],[18.76,10],[18.8,10],[18.84,10],[18.88,10],[18.92,10],[18.96,10],[19,10],[19.04,10],[19.08,10],[19.12,10],[19.16,10],[19.2,10],[19.24,10],[19.28,10],[19.32,10],[19.36,10],[19.4,10],[19.44,10],[19.48,10],[19.52,10],[19.56,10],[19.6,10],[19.64,10],[19.68,10],[19.72,10],[19.76,10],[19.8,10],[19.84,10],[19.88,10],[19.92,10],[19.96,10],[20,10],[20.04,10],[20.08,10],[20.12,10],[20.16,10],[20.2,10],[20.24,10],[20.28,10],[20.32,10],[20.36,10],[20.4,10],[20.44,10],[20.48,10],[20.52,10],[20.56,10],[20.6,10],[20.64,10],[20.68,10],[20.72,10],[20.76,10],[20.8,10],[20.84,10],[20.88,10],[20.92,10],[20.96,10],[21,10],[21.04,10],[21.08,10],[21.12,10],[21.16,10],[21.2,10],[21.24,10],[21.28,10],[21.32,10],[21.36,10],[21.4,10],[21.44,10],[21.48,10],[21.52,10],[21.56,10],[21.6,10],[21.64,10],[21.68,10],[21.72,10],[21.76,10],[21.8,10],[21.84,10],[21.88,10],[21.92,10],[21.96,10],[22,10],[22.04,10],[22.08,10],[22.12,10],[22.16,10],[22.2,10],[22.24,10],[22.28,10],[22.32,10],[22.36,10],[22.4,10],[22.44,10],[22.48,10],[22.52,10],[22.56,10],[22.6,10],[22.64,10],[22.68,10],[22.72,10],[22.76,10],[22.8,10],[22.84,10],[22.88,10],[22.92,10],[22.96,10],[23,10],[23.04,10],[23.08,10],[23.12,10],[23.16,10],[23.2,10],[23.24,10],[23.28,10],[23.32,10],[23.36,10],[23.4,10],[23.44,10],[23.48,10],[23.52,10],[23.56,10],[23.6,10],[23.64,10],[23.68,10],[23.72,10],[23.76,10],[23.8,10],[23.84,10],[23.88,10],[23.92,10],[23.96,10],[24,10]]}]}
{{< /apfigure >}}

{{< fillin
  question="A mass suspended from a spring is raised $5$ cm above its resting position and released at time $t=0$. Assuming no damping, it is observed that the mass first returns to its highest position after $\tfrac13$ second. Find a function to model this motion relative to its initial resting position."
  answer="5\cos(6\pi t)"
  answerDisplay="$y=5\cos(6\pi t)$"
  hint="No damping means a constant amplitude, and the mass starts at its maximum, so use cosine with period $\tfrac13$ second."
>}}

**Example.** A guitar string is plucked and vibrates in damped harmonic motion. The string is pulled and displaced $2$ cm from its resting position. After $3$ seconds, the displacement of the string measures $1$ cm. Find the damping constant.

**Solution.** The displacement factor represents the amplitude and is determined by the coefficient $ae^{-ct}$ in the model for damped harmonic motion. The damping constant is included in the term $e^{-ct}$. It is known that after $3$ seconds, the local maximum measures one-half of its original value. Therefore, we have the equation

$$ae^{-c(t+3)}=\tfrac12 ae^{-ct}$$

Use algebra and the laws of exponents to solve for $c$.

$$
\begin{array}{lrcl}
\text{Divide out }a. & e^{-ct}\cdot e^{-3c} &=& \tfrac12 e^{-ct} \\[4pt]
\text{Divide out }e^{-ct}. & e^{-3c} &=& \tfrac12 \\[4pt]
\text{Take reciprocals.} & e^{3c} &=& 2
\end{array}
$$

Then use the laws of logarithms.

$$
\begin{array}{lrcl}
& e^{3c} &=& 2 \\[4pt]
& 3c &=& \ln(2) \\[4pt]
& c &=& \tfrac{\ln(2)}{3}
\end{array}
$$

The damping constant is $\tfrac{\ln(2)}{3}$.

### Bounding Curves in Harmonic Motion

Harmonic motion graphs may be enclosed by bounding curves. When a function has a varying amplitude, such that the amplitude rises and falls multiple times within a period, we can determine the bounding curves from part of the function.

**Example.** Graph the function $f(x)=\cos(2\pi x)\cos(16\pi x)$.

**Solution.** The graph produced by this function will be shown in two parts. The first graph will be the exact function $f(x)$, shown below, and the second graph is the exact function $f(x)$ plus a bounding function, shown after it. The graphs look quite different.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = cos(2 pi x)cos(16 pi x) from x = -2.1 to 2.1, a sinusoidal function whose amplitude visibly rises and falls in a repeating pattern.","xMin":-2.1,"xMax":2.1,"yMin":-1.3,"yMax":1.3,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":1,"unit":90,"xLabel":"x","yLabel":"f(x)","polylines":[{"through":[[-2.1,0.25],[-2.098,0.177],[-2.096,0.1],[-2.094,0.022],[-2.092,-0.058],[-2.09,-0.139],[-2.089,-0.22],[-2.087,-0.299],[-2.085,-0.378],[-2.083,-0.453],[-2.081,-0.525],[-2.079,-0.594],[-2.077,-0.657],[-2.075,-0.716],[-2.073,-0.768],[-2.071,-0.813],[-2.069,-0.851],[-2.068,-0.882],[-2.066,-0.905],[-2.064,-0.919],[-2.062,-0.925],[-2.06,-0.922],[-2.058,-0.911],[-2.056,-0.89],[-2.054,-0.861],[-2.052,-0.824],[-2.05,-0.779],[-2.048,-0.726],[-2.047,-0.666],[-2.045,-0.599],[-2.043,-0.526],[-2.041,-0.447],[-2.039,-0.364],[-2.037,-0.277],[-2.035,-0.187],[-2.033,-0.095],[-2.031,-0.001],[-2.029,0.093],[-2.027,0.187],[-2.026,0.279],[-2.024,0.369],[-2.022,0.456],[-2.02,0.539],[-2.018,0.618],[-2.016,0.69],[-2.014,0.757],[-2.012,0.816],[-2.01,0.868],[-2.008,0.912],[-2.006,0.947],[-2.005,0.974],[-2.003,0.991],[-2.001,0.999],[-1.999,0.998],[-1.997,0.988],[-1.995,0.968],[-1.993,0.939],[-1.991,0.902],[-1.989,0.856],[-1.987,0.802],[-1.985,0.741],[-1.984,0.673],[-1.982,0.599],[-1.98,0.52],[-1.978,0.436],[-1.976,0.348],[-1.974,0.257],[-1.972,0.165],[-1.97,0.071],[-1.968,-0.024],[-1.966,-0.117],[-1.964,-0.209],[-1.963,-0.298],[-1.961,-0.385],[-1.959,-0.467],[-1.957,-0.544],[-1.955,-0.615],[-1.953,-0.681],[-1.951,-0.739],[-1.949,-0.79],[-1.947,-0.834],[-1.945,-0.869],[-1.943,-0.896],[-1.942,-0.914],[-1.94,-0.924],[-1.938,-0.924],[-1.936,-0.916],[-1.934,-0.9],[-1.932,-0.876],[-1.93,-0.843],[-1.928,-0.803],[-1.926,-0.756],[-1.924,-0.702],[-1.922,-0.643],[-1.921,-0.578],[-1.919,-0.509],[-1.917,-0.435],[-1.915,-0.359],[-1.913,-0.281],[-1.911,-0.2],[-1.909,-0.12],[-1.907,-0.039],[-1.905,0.041],[-1.903,0.119],[-1.901,0.194],[-1.9,0.267],[-1.898,0.336],[-1.896,0.4],[-1.894,0.46],[-1.892,0.514],[-1.89,0.562],[-1.888,0.604],[-1.886,0.639],[-1.884,0.667],[-1.882,0.689],[-1.88,0.704],[-1.879,0.711],[-1.877,0.712],[-1.875,0.706],[-1.873,0.693],[-1.871,0.674],[-1.869,0.649],[-1.867,0.619],[-1.865,0.583],[-1.863,0.543],[-1.861,0.499],[-1.859,0.451],[-1.858,0.4],[-1.856,0.347],[-1.854,0.292],[-1.852,0.236],[-1.85,0.179],[-1.848,0.122],[-1.846,0.067],[-1.844,0.012],[-1.842,-0.041],[-1.84,-0.091],[-1.838,-0.139],[-1.837,-0.183],[-1.835,-0.224],[-1.833,-0.261],[-1.831,-0.294],[-1.829,-0.323],[-1.827,-0.347],[-1.825,-0.366],[-1.823,-0.381],[-1.821,-0.392],[-1.819,-0.397],[-1.817,-0.399],[-1.816,-0.396],[-1.814,-0.389],[-1.812,-0.378],[-1.81,-0.364],[-1.808,-0.346],[-1.806,-0.326],[-1.804,-0.304],[-1.802,-0.28],[-1.8,-0.254],[-1.798,-0.227],[-1.796,-0.199],[-1.795,-0.171],[-1.793,-0.143],[-1.791,-0.116],[-1.789,-0.09],[-1.787,-0.064],[-1.785,-0.041],[-1.783,-0.019],[-1.781,0.001],[-1.779,0.018],[-1.777,0.033],[-1.775,0.046],[-1.774,0.056],[-1.772,0.063],[-1.77,0.068],[-1.768,0.07],[-1.766,0.07],[-1.764,0.067],[-1.762,0.062],[-1.76,0.056],[-1.758,0.048],[-1.756,0.038],[-1.754,0.027],[-1.753,0.016],[-1.751,0.004],[-1.749,-0.008],[-1.747,-0.02],[-1.745,-0.031],[-1.743,-0.041],[-1.741,-0.05],[-1.739,-0.058],[-1.737,-0.064],[-1.735,-0.068],[-1.733,-0.07],[-1.732,-0.069],[-1.73,-0.066],[-1.728,-0.061],[-1.726,-0.053],[-1.724,-0.042],[-1.722,-0.028],[-1.72,-0.013],[-1.718,0.006],[-1.716,0.026],[-1.714,0.049],[-1.712,0.073],[-1.711,0.098],[-1.709,0.125],[-1.707,0.153],[-1.705,0.18],[-1.703,0.208],[-1.701,0.236],[-1.699,0.263],[-1.697,0.288],[-1.695,0.312],[-1.693,0.333],[-1.691,0.353],[-1.69,0.369],[-1.688,0.382],[-1.686,0.391],[-1.684,0.397],[-1.682,0.399],[-1.68,0.396],[-1.678,0.389],[-1.676,0.377],[-1.674,0.36],[-1.672,0.339],[-1.67,0.314],[-1.669,0.284],[-1.667,0.249],[-1.665,0.211],[-1.663,0.169],[-1.661,0.123],[-1.659,0.075],[-1.657,0.023],[-1.655,-0.03],[-1.653,-0.085],[-1.651,-0.141],[-1.649,-0.198],[-1.648,-0.254],[-1.646,-0.31],[-1.644,-0.365],[-1.642,-0.417],[-1.64,-0.467],[-1.638,-0.514],[-1.636,-0.557],[-1.634,-0.596],[-1.632,-0.63],[-1.63,-0.658],[-1.628,-0.681],[-1.627,-0.698],[-1.625,-0.709],[-1.623,-0.712],[-1.621,-0.709],[-1.619,-0.7],[-1.617,-0.683],[-1.615,-0.659],[-1.613,-0.628],[-1.611,-0.59],[-1.609,-0.546],[-1.607,-0.496],[-1.606,-0.44],[-1.604,-0.379],[-1.602,-0.313],[-1.6,-0.243],[-1.598,-0.169],[-1.596,-0.093],[-1.594,-0.014],[-1.592,0.066],[-1.59,0.147],[-1.588,0.227],[-1.586,0.307],[-1.585,0.385],[-1.583,0.46],[-1.581,0.532],[-1.579,0.6],[-1.577,0.663],[-1.575,0.721],[-1.573,0.772],[-1.571,0.817],[-1.569,0.855],[-1.567,0.885],[-1.565,0.907],[-1.564,0.92],[-1.562,0.925],[-1.56,0.921],[-1.558,0.909],[-1.556,0.888],[-1.554,0.858],[-1.552,0.82],[-1.55,0.774],[-1.548,0.721],[-1.546,0.66],[-1.544,0.592],[-1.543,0.519],[-1.541,0.44],[-1.539,0.356],[-1.537,0.269],[-1.535,0.179],[-1.533,0.086],[-1.531,-0.008],[-1.529,-0.102],[-1.527,-0.196],[-1.525,-0.288],[-1.523,-0.378],[-1.522,-0.464],[-1.52,-0.547],[-1.518,-0.625],[-1.516,-0.697],[-1.514,-0.762],[-1.512,-0.821],[-1.51,-0.872],[-1.508,-0.915],[-1.506,-0.95],[-1.504,-0.976],[-1.502,-0.992],[-1.501,-1],[-1.499,-0.998],[-1.497,-0.986],[-1.495,-0.966],[-1.493,-0.936],[-1.491,-0.898],[-1.489,-0.851],[-1.487,-0.797],[-1.485,-0.735],[-1.483,-0.667],[-1.481,-0.592],[-1.48,-0.512],[-1.478,-0.428],[-1.476,-0.34],[-1.474,-0.249],[-1.472,-0.156],[-1.47,-0.062],[-1.468,0.032],[-1.466,0.126],[-1.464,0.218],[-1.462,0.307],[-1.46,0.393],[-1.459,0.474],[-1.457,0.551],[-1.455,0.622],[-1.453,0.687],[-1.451,0.744],[-1.449,0.795],[-1.447,0.838],[-1.445,0.872],[-1.443,0.898],[-1.441,0.915],[-1.439,0.924],[-1.438,0.924],[-1.436,0.915],[-1.434,0.898],[-1.432,0.873],[-1.43,0.84],[-1.428,0.799],[-1.426,0.751],[-1.424,0.697],[-1.422,0.637],[-1.42,0.572],[-1.418,0.502],[-1.417,0.428],[-1.415,0.352],[-1.413,0.273],[-1.411,0.193],[-1.409,0.112],[-1.407,0.031],[-1.405,-0.048],[-1.403,-0.126],[-1.401,-0.201],[-1.399,-0.274],[-1.397,-0.342],[-1.396,-0.406],[-1.394,-0.465],[-1.392,-0.518],[-1.39,-0.566],[-1.388,-0.607],[-1.386,-0.642],[-1.384,-0.67],[-1.382,-0.691],[-1.38,-0.705],[-1.378,-0.712],[-1.376,-0.712],[-1.375,-0.705],[-1.373,-0.692],[-1.371,-0.672],[-1.369,-0.647],[-1.367,-0.616],[-1.365,-0.58],[-1.363,-0.539],[-1.361,-0.494],[-1.359,-0.446],[-1.357,-0.395],[-1.355,-0.341],[-1.354,-0.286],[-1.352,-0.23],[-1.35,-0.174],[-1.348,-0.117],[-1.346,-0.061],[-1.344,-0.007],[-1.342,0.046],[-1.34,0.096],[-1.338,0.143],[-1.336,0.187],[-1.334,0.228],[-1.333,0.265],[-1.331,0.297],[-1.329,0.325],[-1.327,0.349],[-1.325,0.368],[-1.323,0.383],[-1.321,0.392],[-1.319,0.398],[-1.317,0.398],[-1.315,0.395],[-1.313,0.388],[-1.312,0.377],[-1.31,0.362],[-1.308,0.345],[-1.306,0.324],[-1.304,0.302],[-1.302,0.277],[-1.3,0.251],[-1.298,0.224],[-1.296,0.196],[-1.294,0.169],[-1.292,0.141],[-1.291,0.114],[-1.289,0.087],[-1.287,0.062],[-1.285,0.039],[-1.283,0.017],[-1.281,-0.002],[-1.279,-0.02],[-1.277,-0.035],[-1.275,-0.047],[-1.273,-0.056],[-1.271,-0.064],[-1.27,-0.068],[-1.268,-0.07],[-1.266,-0.069],[-1.264,-0.067],[-1.262,-0.062],[-1.26,-0.055],[-1.258,-0.047],[-1.256,-0.037],[-1.254,-0.026],[-1.252,-0.015],[-1.25,-0.003],[-1.249,0.009],[-1.247,0.021],[-1.245,0.032],[-1.243,0.042],[-1.241,0.051],[-1.239,0.059],[-1.237,0.065],[-1.235,0.068],[-1.233,0.07],[-1.231,0.069],[-1.229,0.066],[-1.228,0.06],[-1.226,0.052],[-1.224,0.041],[-1.222,0.027],[-1.22,0.011],[-1.218,-0.008],[-1.216,-0.028],[-1.214,-0.051],[-1.212,-0.075],[-1.21,-0.101],[-1.208,-0.128],[-1.207,-0.155],[-1.205,-0.183],[-1.203,-0.211],[-1.201,-0.238],[-1.199,-0.265],[-1.197,-0.29],[-1.195,-0.314],[-1.193,-0.335],[-1.191,-0.354],[-1.189,-0.37],[-1.187,-0.383],[-1.186,-0.392],[-1.184,-0.397],[-1.182,-0.399],[-1.18,-0.395],[-1.178,-0.388],[-1.176,-0.376],[-1.174,-0.359],[-1.172,-0.337],[-1.17,-0.311],[-1.168,-0.281],[-1.166,-0.246],[-1.165,-0.207],[-1.163,-0.165],[-1.161,-0.119],[-1.159,-0.07],[-1.157,-0.018],[-1.155,0.035],[-1.153,0.09],[-1.151,0.147],[-1.149,0.203],[-1.147,0.26],[-1.145,0.315],[-1.144,0.37],[-1.142,0.422],[-1.14,0.472],[-1.138,0.518],[-1.136,0.561],[-1.134,0.599],[-1.132,0.632],[-1.13,0.661],[-1.128,0.683],[-1.126,0.699],[-1.124,0.709],[-1.123,0.712],[-1.121,0.709],[-1.119,0.698],[-1.117,0.681],[-1.115,0.656],[-1.113,0.625],[-1.111,0.586],[-1.109,0.542],[-1.107,0.491],[-1.105,0.435],[-1.103,0.373],[-1.102,0.307],[-1.1,0.236],[-1.098,0.162],[-1.096,0.086],[-1.094,0.007],[-1.092,-0.074],[-1.09,-0.154],[-1.088,-0.235],[-1.086,-0.314],[-1.084,-0.392],[-1.082,-0.467],[-1.081,-0.539],[-1.079,-0.606],[-1.077,-0.669],[-1.075,-0.726],[-1.073,-0.777],[-1.071,-0.821],[-1.069,-0.858],[-1.067,-0.887],[-1.065,-0.908],[-1.063,-0.921],[-1.061,-0.925],[-1.06,-0.921],[-1.058,-0.907],[-1.056,-0.885],[-1.054,-0.855],[-1.052,-0.816],[-1.05,-0.769],[-1.048,-0.715],[-1.046,-0.654],[-1.044,-0.585],[-1.042,-0.511],[-1.04,-0.432],[-1.039,-0.348],[-1.037,-0.26],[-1.035,-0.17],[-1.033,-0.077],[-1.031,0.017],[-1.029,0.111],[-1.027,0.205],[-1.025,0.297],[-1.023,0.386],[-1.021,0.472],[-1.019,0.555],[-1.018,0.632],[-1.016,0.703],[-1.014,0.768],[-1.012,0.826],[-1.01,0.877],[-1.008,0.919],[-1.006,0.953],[-1.004,0.978],[-1.002,0.993],[-1,1],[-0.998,0.997],[-0.997,0.985],[-0.995,0.963],[-0.993,0.933],[-0.991,0.894],[-0.989,0.847],[-0.987,0.791],[-0.985,0.729],[-0.983,0.66],[-0.981,0.585],[-0.979,0.504],[-0.977,0.419],[-0.976,0.331],[-0.974,0.24],[-0.972,0.147],[-0.97,0.053],[-0.968,-0.041],[-0.966,-0.135],[-0.964,-0.226],[-0.962,-0.315],[-0.96,-0.401],[-0.958,-0.482],[-0.956,-0.558],[-0.955,-0.628],[-0.953,-0.692],[-0.951,-0.75],[-0.949,-0.799],[-0.947,-0.841],[-0.945,-0.875],[-0.943,-0.9],[-0.941,-0.917],[-0.939,-0.924],[-0.937,-0.924],[-0.935,-0.914],[-0.934,-0.896],[-0.932,-0.87],[-0.93,-0.836],[-0.928,-0.795],[-0.926,-0.746],[-0.924,-0.691],[-0.922,-0.631],[-0.92,-0.565],[-0.918,-0.495],[-0.916,-0.421],[-0.914,-0.344],[-0.913,-0.265],[-0.911,-0.185],[-0.909,-0.104],[-0.907,-0.024],[-0.905,0.056],[-0.903,0.133],[-0.901,0.208],[-0.899,0.28],[-0.897,0.348],[-0.895,0.412],[-0.893,0.47],[-0.892,0.523],[-0.89,0.57],[-0.888,0.611],[-0.886,0.645],[-0.884,0.672],[-0.882,0.692],[-0.88,0.706],[-0.878,0.712],[-0.876,0.711],[-0.874,0.704],[-0.872,0.69],[-0.871,0.67],[-0.869,0.644],[-0.867,0.612],[-0.865,0.576],[-0.863,0.535],[-0.861,0.49],[-0.859,0.441],[-0.857,0.39],[-0.855,0.336],[-0.853,0.281],[-0.851,0.225],[-0.85,0.168],[-0.848,0.112],[-0.846,0.056],[-0.844,0.002],[-0.842,-0.05],[-0.84,-0.1],[-0.838,-0.148],[-0.836,-0.191],[-0.834,-0.232],[-0.832,-0.268],[-0.83,-0.3],[-0.829,-0.328],[-0.827,-0.351],[-0.825,-0.37],[-0.823,-0.384],[-0.821,-0.393],[-0.819,-0.398],[-0.817,-0.398],[-0.815,-0.395],[-0.813,-0.387],[-0.811,-0.375],[-0.809,-0.361],[-0.808,-0.343],[-0.806,-0.322],[-0.804,-0.3],[-0.802,-0.275],[-0.8,-0.249],[-0.798,-0.222],[-0.796,-0.194],[-0.794,-0.166],[-0.792,-0.138],[-0.79,-0.111],[-0.788,-0.085],[-0.787,-0.06],[-0.785,-0.037],[-0.783,-0.015],[-0.781,0.004],[-0.779,0.021],[-0.777,0.036],[-0.775,0.048],[-0.773,0.057],[-0.771,0.064],[-0.769,0.068],[-0.767,0.07],[-0.766,0.069],[-0.764,0.066],[-0.762,0.061],[-0.76,0.054],[-0.758,0.046],[-0.756,0.036],[-0.754,0.025],[-0.752,0.014],[-0.75,0.002],[-0.748,-0.01],[-0.746,-0.022],[-0.745,-0.033],[-0.743,-0.043],[-0.741,-0.052],[-0.739,-0.059],[-0.737,-0.065],[-0.735,-0.069],[-0.733,-0.07],[-0.731,-0.069],[-0.729,-0.066],[-0.727,-0.059],[-0.725,-0.051],[-0.724,-0.039],[-0.722,-0.026],[-0.72,-0.009],[-0.718,0.009],[-0.716,0.03],[-0.714,0.053],[-0.712,0.078],[-0.71,0.103],[-0.708,0.13],[-0.706,0.158],[-0.704,0.186],[-0.703,0.214],[-0.701,0.241],[-0.699,0.268],[-0.697,0.293],[-0.695,0.316],[-0.693,0.337],[-0.691,0.356],[-0.689,0.372],[-0.687,0.384],[-0.685,0.393],[-0.683,0.398],[-0.682,0.398],[-0.68,0.395],[-0.678,0.387],[-0.676,0.374],[-0.674,0.357],[-0.672,0.335],[-0.67,0.308],[-0.668,0.278],[-0.666,0.242],[-0.664,0.203],[-0.662,0.16],[-0.661,0.114],[-0.659,0.065],[-0.657,0.013],[-0.655,-0.04],[-0.653,-0.096],[-0.651,-0.152],[-0.649,-0.209],[-0.647,-0.265],[-0.645,-0.321],[-0.643,-0.375],[-0.641,-0.427],[-0.64,-0.476],[-0.638,-0.522],[-0.636,-0.565],[-0.634,-0.602],[-0.632,-0.635],[-0.63,-0.663],[-0.628,-0.685],[-0.626,-0.701],[-0.624,-0.71],[-0.622,-0.712],[-0.62,-0.708],[-0.619,-0.697],[-0.617,-0.679],[-0.615,-0.653],[-0.613,-0.621],[-0.611,-0.582],[-0.609,-0.537],[-0.607,-0.486],[-0.605,-0.429],[-0.603,-0.367],[-0.601,-0.3],[-0.599,-0.229],[-0.598,-0.155],[-0.596,-0.078],[-0.594,0.001],[-0.592,0.081],[-0.59,0.162],[-0.588,0.243],[-0.586,0.322],[-0.584,0.399],[-0.582,0.474],[-0.58,0.545],[-0.578,0.613],[-0.577,0.675],[-0.575,0.731],[-0.573,0.781],[-0.571,0.825],[-0.569,0.861],[-0.567,0.889],[-0.565,0.91],[-0.563,0.922],[-0.561,0.925],[-0.559,0.92],[-0.557,0.906],[-0.556,0.883],[-0.554,0.852],[-0.552,0.812],[-0.55,0.765],[-0.548,0.709],[-0.546,0.647],[-0.544,0.579],[-0.542,0.504],[-0.54,0.424],[-0.538,0.34],[-0.536,0.252],[-0.535,0.161],[-0.533,0.068],[-0.531,-0.026],[-0.529,-0.12],[-0.527,-0.213],[-0.525,-0.305],[-0.523,-0.395],[-0.521,-0.48],[-0.519,-0.562],[-0.517,-0.639],[-0.515,-0.71],[-0.514,-0.774],[-0.512,-0.832],[-0.51,-0.881],[-0.508,-0.923],[-0.506,-0.956],[-0.504,-0.98],[-0.502,-0.994],[-0.5,-1],[-0.498,-0.996],[-0.496,-0.983],[-0.494,-0.961],[-0.493,-0.93],[-0.491,-0.89],[-0.489,-0.842],[-0.487,-0.786],[-0.485,-0.723],[-0.483,-0.653],[-0.481,-0.577],[-0.479,-0.496],[-0.477,-0.411],[-0.475,-0.322],[-0.473,-0.231],[-0.472,-0.138],[-0.47,-0.044],[-0.468,0.05],[-0.466,0.143],[-0.464,0.235],[-0.462,0.323],[-0.46,0.408],[-0.458,0.489],[-0.456,0.565],[-0.454,0.635],[-0.452,0.698],[-0.451,0.755],[-0.449,0.804],[-0.447,0.845],[-0.445,0.878],[-0.443,0.902],[-0.441,0.918],[-0.439,0.925],[-0.437,0.923],[-0.435,0.913],[-0.433,0.894],[-0.431,0.867],[-0.43,0.832],[-0.428,0.79],[-0.426,0.741],[-0.424,0.686],[-0.422,0.625],[-0.42,0.559],[-0.418,0.488],[-0.416,0.414],[-0.414,0.337],[-0.412,0.258],[-0.41,0.177],[-0.409,0.097],[-0.407,0.016],[-0.405,-0.063],[-0.403,-0.141],[-0.401,-0.215],[-0.399,-0.287],[-0.397,-0.355],[-0.395,-0.418],[-0.393,-0.476],[-0.391,-0.528],[-0.389,-0.574],[-0.388,-0.614],[-0.386,-0.648],[-0.384,-0.674],[-0.382,-0.694],[-0.38,-0.707],[-0.378,-0.712],[-0.376,-0.711],[-0.374,-0.703],[-0.372,-0.688],[-0.37,-0.668],[-0.368,-0.641],[-0.367,-0.609],[-0.365,-0.572],[-0.363,-0.531],[-0.361,-0.485],[-0.359,-0.436],[-0.357,-0.385],[-0.355,-0.331],[-0.353,-0.276],[-0.351,-0.219],[-0.349,-0.163],[-0.347,-0.106],[-0.346,-0.051],[-0.344,0.003],[-0.342,0.055],[-0.34,0.105],[-0.338,0.152],[-0.336,0.195],[-0.334,0.235],[-0.332,0.271],[-0.33,0.303],[-0.328,0.33],[-0.326,0.353],[-0.325,0.371],[-0.323,0.385],[-0.321,0.394],[-0.319,0.398],[-0.317,0.398],[-0.315,0.394],[-0.313,0.386],[-0.311,0.374],[-0.309,0.359],[-0.307,0.341],[-0.305,0.32],[-0.304,0.297],[-0.302,0.272],[-0.3,0.246],[-0.298,0.219],[-0.296,0.191],[-0.294,0.163],[-0.292,0.135],[-0.29,0.108],[-0.288,0.082],[-0.286,0.058],[-0.284,0.034],[-0.283,0.013],[-0.281,-0.006],[-0.279,-0.023],[-0.277,-0.037],[-0.275,-0.049],[-0.273,-0.058],[-0.271,-0.065],[-0.269,-0.069],[-0.267,-0.07],[-0.265,-0.069],[-0.263,-0.066],[-0.262,-0.061],[-0.26,-0.054],[-0.258,-0.045],[-0.256,-0.035],[-0.254,-0.024],[-0.252,-0.013],[-0.25,-0.001],[-0.248,0.011],[-0.246,0.023],[-0.244,0.034],[-0.242,0.044],[-0.241,0.053],[-0.239,0.06],[-0.237,0.065],[-0.235,0.069],[-0.233,0.07],[-0.231,0.069],[-0.229,0.065],[-0.227,0.059],[-0.225,0.05],[-0.223,0.038],[-0.221,0.024],[-0.22,0.008],[-0.218,-0.011],[-0.216,-0.032],[-0.214,-0.055],[-0.212,-0.08],[-0.21,-0.106],[-0.208,-0.133],[-0.206,-0.161],[-0.204,-0.188],[-0.202,-0.216],[-0.2,-0.244],[-0.199,-0.27],[-0.197,-0.295],[-0.195,-0.318],[-0.193,-0.339],[-0.191,-0.357],[-0.189,-0.373],[-0.187,-0.385],[-0.185,-0.393],[-0.183,-0.398],[-0.181,-0.398],[-0.179,-0.394],[-0.178,-0.386],[-0.176,-0.373],[-0.174,-0.355],[-0.172,-0.333],[-0.17,-0.306],[-0.168,-0.274],[-0.166,-0.239],[-0.164,-0.199],[-0.162,-0.156],[-0.16,-0.11],[-0.158,-0.06],[-0.157,-0.008],[-0.155,0.046],[-0.153,0.101],[-0.151,0.157],[-0.149,0.214],[-0.147,0.27],[-0.145,0.326],[-0.143,0.38],[-0.141,0.432],[-0.139,0.481],[-0.137,0.526],[-0.136,0.568],[-0.134,0.606],[-0.132,0.638],[-0.13,0.665],[-0.128,0.687],[-0.126,0.702],[-0.124,0.71],[-0.122,0.712],[-0.12,0.707],[-0.118,0.695],[-0.116,0.676],[-0.115,0.651],[-0.113,0.618],[-0.111,0.578],[-0.109,0.533],[-0.107,0.481],[-0.105,0.423],[-0.103,0.361],[-0.101,0.294],[-0.099,0.222],[-0.097,0.148],[-0.095,0.071],[-0.094,-0.009],[-0.092,-0.089],[-0.09,-0.17],[-0.088,-0.25],[-0.086,-0.329],[-0.084,-0.407],[-0.082,-0.481],[-0.08,-0.552],[-0.078,-0.619],[-0.076,-0.68],[-0.074,-0.736],[-0.073,-0.786],[-0.071,-0.829],[-0.069,-0.864],[-0.067,-0.892],[-0.065,-0.911],[-0.063,-0.922],[-0.061,-0.925],[-0.059,-0.919],[-0.057,-0.904],[-0.055,-0.88],[-0.053,-0.848],[-0.052,-0.808],[-0.05,-0.76],[-0.048,-0.704],[-0.046,-0.641],[-0.044,-0.572],[-0.042,-0.497],[-0.04,-0.416],[-0.038,-0.332],[-0.036,-0.243],[-0.034,-0.152],[-0.032,-0.059],[-0.031,0.035],[-0.029,0.129],[-0.027,0.222],[-0.025,0.314],[-0.023,0.403],[-0.021,0.488],[-0.019,0.57],[-0.017,0.646],[-0.015,0.716],[-0.013,0.78],[-0.011,0.837],[-0.01,0.885],[-0.008,0.926],[-0.006,0.958],[-0.004,0.981],[-0.002,0.995],[0,1],[0.002,0.995],[0.004,0.981],[0.006,0.958],[0.008,0.926],[0.01,0.885],[0.011,0.837],[0.013,0.78],[0.015,0.716],[0.017,0.646],[0.019,0.57],[0.021,0.488],[0.023,0.403],[0.025,0.314],[0.027,0.222],[0.029,0.129],[0.031,0.035],[0.032,-0.059],[0.034,-0.152],[0.036,-0.243],[0.038,-0.332],[0.04,-0.416],[0.042,-0.497],[0.044,-0.572],[0.046,-0.641],[0.048,-0.704],[0.05,-0.76],[0.052,-0.808],[0.053,-0.848],[0.055,-0.88],[0.057,-0.904],[0.059,-0.919],[0.061,-0.925],[0.063,-0.922],[0.065,-0.911],[0.067,-0.892],[0.069,-0.864],[0.071,-0.829],[0.073,-0.786],[0.074,-0.736],[0.076,-0.68],[0.078,-0.619],[0.08,-0.552],[0.082,-0.481],[0.084,-0.407],[0.086,-0.329],[0.088,-0.25],[0.09,-0.17],[0.092,-0.089],[0.094,-0.009],[0.095,0.071],[0.097,0.148],[0.099,0.222],[0.101,0.294],[0.103,0.361],[0.105,0.423],[0.107,0.481],[0.109,0.533],[0.111,0.578],[0.113,0.618],[0.115,0.651],[0.116,0.676],[0.118,0.695],[0.12,0.707],[0.122,0.712],[0.124,0.71],[0.126,0.702],[0.128,0.687],[0.13,0.665],[0.132,0.638],[0.134,0.606],[0.136,0.568],[0.137,0.526],[0.139,0.481],[0.141,0.432],[0.143,0.38],[0.145,0.326],[0.147,0.27],[0.149,0.214],[0.151,0.157],[0.153,0.101],[0.155,0.046],[0.157,-0.008],[0.158,-0.06],[0.16,-0.11],[0.162,-0.156],[0.164,-0.199],[0.166,-0.239],[0.168,-0.274],[0.17,-0.306],[0.172,-0.333],[0.174,-0.355],[0.176,-0.373],[0.178,-0.386],[0.179,-0.394],[0.181,-0.398],[0.183,-0.398],[0.185,-0.393],[0.187,-0.385],[0.189,-0.373],[0.191,-0.357],[0.193,-0.339],[0.195,-0.318],[0.197,-0.295],[0.199,-0.27],[0.2,-0.244],[0.202,-0.216],[0.204,-0.188],[0.206,-0.161],[0.208,-0.133],[0.21,-0.106],[0.212,-0.08],[0.214,-0.055],[0.216,-0.032],[0.218,-0.011],[0.22,0.008],[0.221,0.024],[0.223,0.038],[0.225,0.05],[0.227,0.059],[0.229,0.065],[0.231,0.069],[0.233,0.07],[0.235,0.069],[0.237,0.065],[0.239,0.06],[0.241,0.053],[0.242,0.044],[0.244,0.034],[0.246,0.023],[0.248,0.011],[0.25,-0.001],[0.252,-0.013],[0.254,-0.024],[0.256,-0.035],[0.258,-0.045],[0.26,-0.054],[0.262,-0.061],[0.263,-0.066],[0.265,-0.069],[0.267,-0.07],[0.269,-0.069],[0.271,-0.065],[0.273,-0.058],[0.275,-0.049],[0.277,-0.037],[0.279,-0.023],[0.281,-0.006],[0.283,0.013],[0.284,0.034],[0.286,0.058],[0.288,0.082],[0.29,0.108],[0.292,0.135],[0.294,0.163],[0.296,0.191],[0.298,0.219],[0.3,0.246],[0.302,0.272],[0.304,0.297],[0.305,0.32],[0.307,0.341],[0.309,0.359],[0.311,0.374],[0.313,0.386],[0.315,0.394],[0.317,0.398],[0.319,0.398],[0.321,0.394],[0.323,0.385],[0.325,0.371],[0.326,0.353],[0.328,0.33],[0.33,0.303],[0.332,0.271],[0.334,0.235],[0.336,0.195],[0.338,0.152],[0.34,0.105],[0.342,0.055],[0.344,0.003],[0.346,-0.051],[0.347,-0.106],[0.349,-0.163],[0.351,-0.219],[0.353,-0.276],[0.355,-0.331],[0.357,-0.385],[0.359,-0.436],[0.361,-0.485],[0.363,-0.531],[0.365,-0.572],[0.367,-0.609],[0.368,-0.641],[0.37,-0.668],[0.372,-0.688],[0.374,-0.703],[0.376,-0.711],[0.378,-0.712],[0.38,-0.707],[0.382,-0.694],[0.384,-0.674],[0.386,-0.648],[0.388,-0.614],[0.389,-0.574],[0.391,-0.528],[0.393,-0.476],[0.395,-0.418],[0.397,-0.355],[0.399,-0.287],[0.401,-0.215],[0.403,-0.141],[0.405,-0.063],[0.407,0.016],[0.409,0.097],[0.41,0.177],[0.412,0.258],[0.414,0.337],[0.416,0.414],[0.418,0.488],[0.42,0.559],[0.422,0.625],[0.424,0.686],[0.426,0.741],[0.428,0.79],[0.43,0.832],[0.431,0.867],[0.433,0.894],[0.435,0.913],[0.437,0.923],[0.439,0.925],[0.441,0.918],[0.443,0.902],[0.445,0.878],[0.447,0.845],[0.449,0.804],[0.451,0.755],[0.452,0.698],[0.454,0.635],[0.456,0.565],[0.458,0.489],[0.46,0.408],[0.462,0.323],[0.464,0.235],[0.466,0.143],[0.468,0.05],[0.47,-0.044],[0.472,-0.138],[0.473,-0.231],[0.475,-0.322],[0.477,-0.411],[0.479,-0.496],[0.481,-0.577],[0.483,-0.653],[0.485,-0.723],[0.487,-0.786],[0.489,-0.842],[0.491,-0.89],[0.493,-0.93],[0.494,-0.961],[0.496,-0.983],[0.498,-0.996],[0.5,-1],[0.502,-0.994],[0.504,-0.98],[0.506,-0.956],[0.508,-0.923],[0.51,-0.881],[0.512,-0.832],[0.514,-0.774],[0.515,-0.71],[0.517,-0.639],[0.519,-0.562],[0.521,-0.48],[0.523,-0.395],[0.525,-0.305],[0.527,-0.213],[0.529,-0.12],[0.531,-0.026],[0.533,0.068],[0.535,0.161],[0.536,0.252],[0.538,0.34],[0.54,0.424],[0.542,0.504],[0.544,0.579],[0.546,0.647],[0.548,0.709],[0.55,0.765],[0.552,0.812],[0.554,0.852],[0.556,0.883],[0.557,0.906],[0.559,0.92],[0.561,0.925],[0.563,0.922],[0.565,0.91],[0.567,0.889],[0.569,0.861],[0.571,0.825],[0.573,0.781],[0.575,0.731],[0.577,0.675],[0.578,0.613],[0.58,0.545],[0.582,0.474],[0.584,0.399],[0.586,0.322],[0.588,0.243],[0.59,0.162],[0.592,0.081],[0.594,0.001],[0.596,-0.078],[0.598,-0.155],[0.599,-0.229],[0.601,-0.3],[0.603,-0.367],[0.605,-0.429],[0.607,-0.486],[0.609,-0.537],[0.611,-0.582],[0.613,-0.621],[0.615,-0.653],[0.617,-0.679],[0.619,-0.697],[0.62,-0.708],[0.622,-0.712],[0.624,-0.71],[0.626,-0.701],[0.628,-0.685],[0.63,-0.663],[0.632,-0.635],[0.634,-0.602],[0.636,-0.565],[0.638,-0.522],[0.64,-0.476],[0.641,-0.427],[0.643,-0.375],[0.645,-0.321],[0.647,-0.265],[0.649,-0.209],[0.651,-0.152],[0.653,-0.096],[0.655,-0.04],[0.657,0.013],[0.659,0.065],[0.661,0.114],[0.662,0.16],[0.664,0.203],[0.666,0.242],[0.668,0.278],[0.67,0.308],[0.672,0.335],[0.674,0.357],[0.676,0.374],[0.678,0.387],[0.68,0.395],[0.682,0.398],[0.683,0.398],[0.685,0.393],[0.687,0.384],[0.689,0.372],[0.691,0.356],[0.693,0.337],[0.695,0.316],[0.697,0.293],[0.699,0.268],[0.701,0.241],[0.703,0.214],[0.704,0.186],[0.706,0.158],[0.708,0.13],[0.71,0.103],[0.712,0.078],[0.714,0.053],[0.716,0.03],[0.718,0.009],[0.72,-0.009],[0.722,-0.026],[0.724,-0.039],[0.725,-0.051],[0.727,-0.059],[0.729,-0.066],[0.731,-0.069],[0.733,-0.07],[0.735,-0.069],[0.737,-0.065],[0.739,-0.059],[0.741,-0.052],[0.743,-0.043],[0.745,-0.033],[0.746,-0.022],[0.748,-0.01],[0.75,0.002],[0.752,0.014],[0.754,0.025],[0.756,0.036],[0.758,0.046],[0.76,0.054],[0.762,0.061],[0.764,0.066],[0.766,0.069],[0.767,0.07],[0.769,0.068],[0.771,0.064],[0.773,0.057],[0.775,0.048],[0.777,0.036],[0.779,0.021],[0.781,0.004],[0.783,-0.015],[0.785,-0.037],[0.787,-0.06],[0.788,-0.085],[0.79,-0.111],[0.792,-0.138],[0.794,-0.166],[0.796,-0.194],[0.798,-0.222],[0.8,-0.249],[0.802,-0.275],[0.804,-0.3],[0.806,-0.322],[0.808,-0.343],[0.809,-0.361],[0.811,-0.375],[0.813,-0.387],[0.815,-0.395],[0.817,-0.398],[0.819,-0.398],[0.821,-0.393],[0.823,-0.384],[0.825,-0.37],[0.827,-0.351],[0.829,-0.328],[0.83,-0.3],[0.832,-0.268],[0.834,-0.232],[0.836,-0.191],[0.838,-0.148],[0.84,-0.1],[0.842,-0.05],[0.844,0.002],[0.846,0.056],[0.848,0.112],[0.85,0.168],[0.851,0.225],[0.853,0.281],[0.855,0.336],[0.857,0.39],[0.859,0.441],[0.861,0.49],[0.863,0.535],[0.865,0.576],[0.867,0.612],[0.869,0.644],[0.871,0.67],[0.872,0.69],[0.874,0.704],[0.876,0.711],[0.878,0.712],[0.88,0.706],[0.882,0.692],[0.884,0.672],[0.886,0.645],[0.888,0.611],[0.89,0.57],[0.892,0.523],[0.893,0.47],[0.895,0.412],[0.897,0.348],[0.899,0.28],[0.901,0.208],[0.903,0.133],[0.905,0.056],[0.907,-0.024],[0.909,-0.104],[0.911,-0.185],[0.913,-0.265],[0.914,-0.344],[0.916,-0.421],[0.918,-0.495],[0.92,-0.565],[0.922,-0.631],[0.924,-0.691],[0.926,-0.746],[0.928,-0.795],[0.93,-0.836],[0.932,-0.87],[0.934,-0.896],[0.935,-0.914],[0.937,-0.924],[0.939,-0.924],[0.941,-0.917],[0.943,-0.9],[0.945,-0.875],[0.947,-0.841],[0.949,-0.799],[0.951,-0.75],[0.953,-0.692],[0.955,-0.628],[0.956,-0.558],[0.958,-0.482],[0.96,-0.401],[0.962,-0.315],[0.964,-0.226],[0.966,-0.135],[0.968,-0.041],[0.97,0.053],[0.972,0.147],[0.974,0.24],[0.976,0.331],[0.977,0.419],[0.979,0.504],[0.981,0.585],[0.983,0.66],[0.985,0.729],[0.987,0.791],[0.989,0.847],[0.991,0.894],[0.993,0.933],[0.995,0.963],[0.997,0.985],[0.998,0.997],[1,1],[1.002,0.993],[1.004,0.978],[1.006,0.953],[1.008,0.919],[1.01,0.877],[1.012,0.826],[1.014,0.768],[1.016,0.703],[1.018,0.632],[1.019,0.555],[1.021,0.472],[1.023,0.386],[1.025,0.297],[1.027,0.205],[1.029,0.111],[1.031,0.017],[1.033,-0.077],[1.035,-0.17],[1.037,-0.26],[1.039,-0.348],[1.04,-0.432],[1.042,-0.511],[1.044,-0.585],[1.046,-0.654],[1.048,-0.715],[1.05,-0.769],[1.052,-0.816],[1.054,-0.855],[1.056,-0.885],[1.058,-0.907],[1.06,-0.921],[1.061,-0.925],[1.063,-0.921],[1.065,-0.908],[1.067,-0.887],[1.069,-0.858],[1.071,-0.821],[1.073,-0.777],[1.075,-0.726],[1.077,-0.669],[1.079,-0.606],[1.081,-0.539],[1.082,-0.467],[1.084,-0.392],[1.086,-0.314],[1.088,-0.235],[1.09,-0.154],[1.092,-0.074],[1.094,0.007],[1.096,0.086],[1.098,0.162],[1.1,0.236],[1.102,0.307],[1.103,0.373],[1.105,0.435],[1.107,0.491],[1.109,0.542],[1.111,0.586],[1.113,0.625],[1.115,0.656],[1.117,0.681],[1.119,0.698],[1.121,0.709],[1.123,0.712],[1.124,0.709],[1.126,0.699],[1.128,0.683],[1.13,0.661],[1.132,0.632],[1.134,0.599],[1.136,0.561],[1.138,0.518],[1.14,0.472],[1.142,0.422],[1.144,0.37],[1.145,0.315],[1.147,0.26],[1.149,0.203],[1.151,0.147],[1.153,0.09],[1.155,0.035],[1.157,-0.018],[1.159,-0.07],[1.161,-0.119],[1.163,-0.165],[1.165,-0.207],[1.166,-0.246],[1.168,-0.281],[1.17,-0.311],[1.172,-0.337],[1.174,-0.359],[1.176,-0.376],[1.178,-0.388],[1.18,-0.395],[1.182,-0.399],[1.184,-0.397],[1.186,-0.392],[1.187,-0.383],[1.189,-0.37],[1.191,-0.354],[1.193,-0.335],[1.195,-0.314],[1.197,-0.29],[1.199,-0.265],[1.201,-0.238],[1.203,-0.211],[1.205,-0.183],[1.207,-0.155],[1.208,-0.128],[1.21,-0.101],[1.212,-0.075],[1.214,-0.051],[1.216,-0.028],[1.218,-0.008],[1.22,0.011],[1.222,0.027],[1.224,0.041],[1.226,0.052],[1.228,0.06],[1.229,0.066],[1.231,0.069],[1.233,0.07],[1.235,0.068],[1.237,0.065],[1.239,0.059],[1.241,0.051],[1.243,0.042],[1.245,0.032],[1.247,0.021],[1.249,0.009],[1.25,-0.003],[1.252,-0.015],[1.254,-0.026],[1.256,-0.037],[1.258,-0.047],[1.26,-0.055],[1.262,-0.062],[1.264,-0.067],[1.266,-0.069],[1.268,-0.07],[1.27,-0.068],[1.271,-0.064],[1.273,-0.056],[1.275,-0.047],[1.277,-0.035],[1.279,-0.02],[1.281,-0.002],[1.283,0.017],[1.285,0.039],[1.287,0.062],[1.289,0.087],[1.291,0.114],[1.292,0.141],[1.294,0.169],[1.296,0.196],[1.298,0.224],[1.3,0.251],[1.302,0.277],[1.304,0.302],[1.306,0.324],[1.308,0.345],[1.31,0.362],[1.312,0.377],[1.313,0.388],[1.315,0.395],[1.317,0.398],[1.319,0.398],[1.321,0.392],[1.323,0.383],[1.325,0.368],[1.327,0.349],[1.329,0.325],[1.331,0.297],[1.333,0.265],[1.334,0.228],[1.336,0.187],[1.338,0.143],[1.34,0.096],[1.342,0.046],[1.344,-0.007],[1.346,-0.061],[1.348,-0.117],[1.35,-0.174],[1.352,-0.23],[1.354,-0.286],[1.355,-0.341],[1.357,-0.395],[1.359,-0.446],[1.361,-0.494],[1.363,-0.539],[1.365,-0.58],[1.367,-0.616],[1.369,-0.647],[1.371,-0.672],[1.373,-0.692],[1.375,-0.705],[1.376,-0.712],[1.378,-0.712],[1.38,-0.705],[1.382,-0.691],[1.384,-0.67],[1.386,-0.642],[1.388,-0.607],[1.39,-0.566],[1.392,-0.518],[1.394,-0.465],[1.396,-0.406],[1.397,-0.342],[1.399,-0.274],[1.401,-0.201],[1.403,-0.126],[1.405,-0.048],[1.407,0.031],[1.409,0.112],[1.411,0.193],[1.413,0.273],[1.415,0.352],[1.417,0.428],[1.418,0.502],[1.42,0.572],[1.422,0.637],[1.424,0.697],[1.426,0.751],[1.428,0.799],[1.43,0.84],[1.432,0.873],[1.434,0.898],[1.436,0.915],[1.438,0.924],[1.439,0.924],[1.441,0.915],[1.443,0.898],[1.445,0.872],[1.447,0.838],[1.449,0.795],[1.451,0.744],[1.453,0.687],[1.455,0.622],[1.457,0.551],[1.459,0.474],[1.46,0.393],[1.462,0.307],[1.464,0.218],[1.466,0.126],[1.468,0.032],[1.47,-0.062],[1.472,-0.156],[1.474,-0.249],[1.476,-0.34],[1.478,-0.428],[1.48,-0.512],[1.481,-0.592],[1.483,-0.667],[1.485,-0.735],[1.487,-0.797],[1.489,-0.851],[1.491,-0.898],[1.493,-0.936],[1.495,-0.966],[1.497,-0.986],[1.499,-0.998],[1.501,-1],[1.502,-0.992],[1.504,-0.976],[1.506,-0.95],[1.508,-0.915],[1.51,-0.872],[1.512,-0.821],[1.514,-0.762],[1.516,-0.697],[1.518,-0.625],[1.52,-0.547],[1.522,-0.464],[1.523,-0.378],[1.525,-0.288],[1.527,-0.196],[1.529,-0.102],[1.531,-0.008],[1.533,0.086],[1.535,0.179],[1.537,0.269],[1.539,0.356],[1.541,0.44],[1.543,0.519],[1.544,0.592],[1.546,0.66],[1.548,0.721],[1.55,0.774],[1.552,0.82],[1.554,0.858],[1.556,0.888],[1.558,0.909],[1.56,0.921],[1.562,0.925],[1.564,0.92],[1.565,0.907],[1.567,0.885],[1.569,0.855],[1.571,0.817],[1.573,0.772],[1.575,0.721],[1.577,0.663],[1.579,0.6],[1.581,0.532],[1.583,0.46],[1.585,0.385],[1.586,0.307],[1.588,0.227],[1.59,0.147],[1.592,0.066],[1.594,-0.014],[1.596,-0.093],[1.598,-0.169],[1.6,-0.243],[1.602,-0.313],[1.604,-0.379],[1.606,-0.44],[1.607,-0.496],[1.609,-0.546],[1.611,-0.59],[1.613,-0.628],[1.615,-0.659],[1.617,-0.683],[1.619,-0.7],[1.621,-0.709],[1.623,-0.712],[1.625,-0.709],[1.627,-0.698],[1.628,-0.681],[1.63,-0.658],[1.632,-0.63],[1.634,-0.596],[1.636,-0.557],[1.638,-0.514],[1.64,-0.467],[1.642,-0.417],[1.644,-0.365],[1.646,-0.31],[1.648,-0.254],[1.649,-0.198],[1.651,-0.141],[1.653,-0.085],[1.655,-0.03],[1.657,0.023],[1.659,0.075],[1.661,0.123],[1.663,0.169],[1.665,0.211],[1.667,0.249],[1.669,0.284],[1.67,0.314],[1.672,0.339],[1.674,0.36],[1.676,0.377],[1.678,0.389],[1.68,0.396],[1.682,0.399],[1.684,0.397],[1.686,0.391],[1.688,0.382],[1.69,0.369],[1.691,0.353],[1.693,0.333],[1.695,0.312],[1.697,0.288],[1.699,0.263],[1.701,0.236],[1.703,0.208],[1.705,0.18],[1.707,0.153],[1.709,0.125],[1.711,0.098],[1.712,0.073],[1.714,0.049],[1.716,0.026],[1.718,0.006],[1.72,-0.013],[1.722,-0.028],[1.724,-0.042],[1.726,-0.053],[1.728,-0.061],[1.73,-0.066],[1.732,-0.069],[1.733,-0.07],[1.735,-0.068],[1.737,-0.064],[1.739,-0.058],[1.741,-0.05],[1.743,-0.041],[1.745,-0.031],[1.747,-0.02],[1.749,-0.008],[1.751,0.004],[1.753,0.016],[1.754,0.027],[1.756,0.038],[1.758,0.048],[1.76,0.056],[1.762,0.062],[1.764,0.067],[1.766,0.07],[1.768,0.07],[1.77,0.068],[1.772,0.063],[1.774,0.056],[1.775,0.046],[1.777,0.033],[1.779,0.018],[1.781,0.001],[1.783,-0.019],[1.785,-0.041],[1.787,-0.064],[1.789,-0.09],[1.791,-0.116],[1.793,-0.143],[1.795,-0.171],[1.796,-0.199],[1.798,-0.227],[1.8,-0.254],[1.802,-0.28],[1.804,-0.304],[1.806,-0.326],[1.808,-0.346],[1.81,-0.364],[1.812,-0.378],[1.814,-0.389],[1.816,-0.396],[1.817,-0.399],[1.819,-0.397],[1.821,-0.392],[1.823,-0.381],[1.825,-0.366],[1.827,-0.347],[1.829,-0.323],[1.831,-0.294],[1.833,-0.261],[1.835,-0.224],[1.837,-0.183],[1.838,-0.139],[1.84,-0.091],[1.842,-0.041],[1.844,0.012],[1.846,0.067],[1.848,0.122],[1.85,0.179],[1.852,0.236],[1.854,0.292],[1.856,0.347],[1.858,0.4],[1.859,0.451],[1.861,0.499],[1.863,0.543],[1.865,0.583],[1.867,0.619],[1.869,0.649],[1.871,0.674],[1.873,0.693],[1.875,0.706],[1.877,0.712],[1.879,0.711],[1.88,0.704],[1.882,0.689],[1.884,0.667],[1.886,0.639],[1.888,0.604],[1.89,0.562],[1.892,0.514],[1.894,0.46],[1.896,0.4],[1.898,0.336],[1.9,0.267],[1.901,0.194],[1.903,0.119],[1.905,0.041],[1.907,-0.039],[1.909,-0.12],[1.911,-0.2],[1.913,-0.281],[1.915,-0.359],[1.917,-0.435],[1.919,-0.509],[1.921,-0.578],[1.922,-0.643],[1.924,-0.702],[1.926,-0.756],[1.928,-0.803],[1.93,-0.843],[1.932,-0.876],[1.934,-0.9],[1.936,-0.916],[1.938,-0.924],[1.94,-0.924],[1.942,-0.914],[1.943,-0.896],[1.945,-0.869],[1.947,-0.834],[1.949,-0.79],[1.951,-0.739],[1.953,-0.681],[1.955,-0.615],[1.957,-0.544],[1.959,-0.467],[1.961,-0.385],[1.963,-0.298],[1.964,-0.209],[1.966,-0.117],[1.968,-0.024],[1.97,0.071],[1.972,0.165],[1.974,0.257],[1.976,0.348],[1.978,0.436],[1.98,0.52],[1.982,0.599],[1.984,0.673],[1.985,0.741],[1.987,0.802],[1.989,0.856],[1.991,0.902],[1.993,0.939],[1.995,0.968],[1.997,0.988],[1.999,0.998],[2.001,0.999],[2.003,0.991],[2.005,0.974],[2.006,0.947],[2.008,0.912],[2.01,0.868],[2.012,0.816],[2.014,0.757],[2.016,0.69],[2.018,0.618],[2.02,0.539],[2.022,0.456],[2.024,0.369],[2.026,0.279],[2.027,0.187],[2.029,0.093],[2.031,-0.001],[2.033,-0.095],[2.035,-0.187],[2.037,-0.277],[2.039,-0.364],[2.041,-0.447],[2.043,-0.526],[2.045,-0.599],[2.047,-0.666],[2.048,-0.726],[2.05,-0.779],[2.052,-0.824],[2.054,-0.861],[2.056,-0.89],[2.058,-0.911],[2.06,-0.922],[2.062,-0.925],[2.064,-0.919],[2.066,-0.905],[2.068,-0.882],[2.069,-0.851],[2.071,-0.813],[2.073,-0.768],[2.075,-0.716],[2.077,-0.657],[2.079,-0.594],[2.081,-0.525],[2.083,-0.453],[2.085,-0.378],[2.087,-0.299],[2.089,-0.22],[2.09,-0.139],[2.092,-0.058],[2.094,0.022],[2.096,0.1],[2.098,0.177],[2.1,0.25]]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same graph of f(x) = cos(2 pi x)cos(16 pi x) with the two bounding curves y = cos(2 pi x) and y = -cos(2 pi x) overlaid, tracing out the rising and falling high and low points.","xMin":-2.1,"xMax":2.1,"yMin":-2.3,"yMax":2.3,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":1,"unit":90,"xLabel":"x","yLabel":"y","polylines":[{"through":[[-2.1,0.25],[-2.098,0.177],[-2.096,0.1],[-2.094,0.022],[-2.092,-0.058],[-2.09,-0.139],[-2.089,-0.22],[-2.087,-0.299],[-2.085,-0.378],[-2.083,-0.453],[-2.081,-0.525],[-2.079,-0.594],[-2.077,-0.657],[-2.075,-0.716],[-2.073,-0.768],[-2.071,-0.813],[-2.069,-0.851],[-2.068,-0.882],[-2.066,-0.905],[-2.064,-0.919],[-2.062,-0.925],[-2.06,-0.922],[-2.058,-0.911],[-2.056,-0.89],[-2.054,-0.861],[-2.052,-0.824],[-2.05,-0.779],[-2.048,-0.726],[-2.047,-0.666],[-2.045,-0.599],[-2.043,-0.526],[-2.041,-0.447],[-2.039,-0.364],[-2.037,-0.277],[-2.035,-0.187],[-2.033,-0.095],[-2.031,-0.001],[-2.029,0.093],[-2.027,0.187],[-2.026,0.279],[-2.024,0.369],[-2.022,0.456],[-2.02,0.539],[-2.018,0.618],[-2.016,0.69],[-2.014,0.757],[-2.012,0.816],[-2.01,0.868],[-2.008,0.912],[-2.006,0.947],[-2.005,0.974],[-2.003,0.991],[-2.001,0.999],[-1.999,0.998],[-1.997,0.988],[-1.995,0.968],[-1.993,0.939],[-1.991,0.902],[-1.989,0.856],[-1.987,0.802],[-1.985,0.741],[-1.984,0.673],[-1.982,0.599],[-1.98,0.52],[-1.978,0.436],[-1.976,0.348],[-1.974,0.257],[-1.972,0.165],[-1.97,0.071],[-1.968,-0.024],[-1.966,-0.117],[-1.964,-0.209],[-1.963,-0.298],[-1.961,-0.385],[-1.959,-0.467],[-1.957,-0.544],[-1.955,-0.615],[-1.953,-0.681],[-1.951,-0.739],[-1.949,-0.79],[-1.947,-0.834],[-1.945,-0.869],[-1.943,-0.896],[-1.942,-0.914],[-1.94,-0.924],[-1.938,-0.924],[-1.936,-0.916],[-1.934,-0.9],[-1.932,-0.876],[-1.93,-0.843],[-1.928,-0.803],[-1.926,-0.756],[-1.924,-0.702],[-1.922,-0.643],[-1.921,-0.578],[-1.919,-0.509],[-1.917,-0.435],[-1.915,-0.359],[-1.913,-0.281],[-1.911,-0.2],[-1.909,-0.12],[-1.907,-0.039],[-1.905,0.041],[-1.903,0.119],[-1.901,0.194],[-1.9,0.267],[-1.898,0.336],[-1.896,0.4],[-1.894,0.46],[-1.892,0.514],[-1.89,0.562],[-1.888,0.604],[-1.886,0.639],[-1.884,0.667],[-1.882,0.689],[-1.88,0.704],[-1.879,0.711],[-1.877,0.712],[-1.875,0.706],[-1.873,0.693],[-1.871,0.674],[-1.869,0.649],[-1.867,0.619],[-1.865,0.583],[-1.863,0.543],[-1.861,0.499],[-1.859,0.451],[-1.858,0.4],[-1.856,0.347],[-1.854,0.292],[-1.852,0.236],[-1.85,0.179],[-1.848,0.122],[-1.846,0.067],[-1.844,0.012],[-1.842,-0.041],[-1.84,-0.091],[-1.838,-0.139],[-1.837,-0.183],[-1.835,-0.224],[-1.833,-0.261],[-1.831,-0.294],[-1.829,-0.323],[-1.827,-0.347],[-1.825,-0.366],[-1.823,-0.381],[-1.821,-0.392],[-1.819,-0.397],[-1.817,-0.399],[-1.816,-0.396],[-1.814,-0.389],[-1.812,-0.378],[-1.81,-0.364],[-1.808,-0.346],[-1.806,-0.326],[-1.804,-0.304],[-1.802,-0.28],[-1.8,-0.254],[-1.798,-0.227],[-1.796,-0.199],[-1.795,-0.171],[-1.793,-0.143],[-1.791,-0.116],[-1.789,-0.09],[-1.787,-0.064],[-1.785,-0.041],[-1.783,-0.019],[-1.781,0.001],[-1.779,0.018],[-1.777,0.033],[-1.775,0.046],[-1.774,0.056],[-1.772,0.063],[-1.77,0.068],[-1.768,0.07],[-1.766,0.07],[-1.764,0.067],[-1.762,0.062],[-1.76,0.056],[-1.758,0.048],[-1.756,0.038],[-1.754,0.027],[-1.753,0.016],[-1.751,0.004],[-1.749,-0.008],[-1.747,-0.02],[-1.745,-0.031],[-1.743,-0.041],[-1.741,-0.05],[-1.739,-0.058],[-1.737,-0.064],[-1.735,-0.068],[-1.733,-0.07],[-1.732,-0.069],[-1.73,-0.066],[-1.728,-0.061],[-1.726,-0.053],[-1.724,-0.042],[-1.722,-0.028],[-1.72,-0.013],[-1.718,0.006],[-1.716,0.026],[-1.714,0.049],[-1.712,0.073],[-1.711,0.098],[-1.709,0.125],[-1.707,0.153],[-1.705,0.18],[-1.703,0.208],[-1.701,0.236],[-1.699,0.263],[-1.697,0.288],[-1.695,0.312],[-1.693,0.333],[-1.691,0.353],[-1.69,0.369],[-1.688,0.382],[-1.686,0.391],[-1.684,0.397],[-1.682,0.399],[-1.68,0.396],[-1.678,0.389],[-1.676,0.377],[-1.674,0.36],[-1.672,0.339],[-1.67,0.314],[-1.669,0.284],[-1.667,0.249],[-1.665,0.211],[-1.663,0.169],[-1.661,0.123],[-1.659,0.075],[-1.657,0.023],[-1.655,-0.03],[-1.653,-0.085],[-1.651,-0.141],[-1.649,-0.198],[-1.648,-0.254],[-1.646,-0.31],[-1.644,-0.365],[-1.642,-0.417],[-1.64,-0.467],[-1.638,-0.514],[-1.636,-0.557],[-1.634,-0.596],[-1.632,-0.63],[-1.63,-0.658],[-1.628,-0.681],[-1.627,-0.698],[-1.625,-0.709],[-1.623,-0.712],[-1.621,-0.709],[-1.619,-0.7],[-1.617,-0.683],[-1.615,-0.659],[-1.613,-0.628],[-1.611,-0.59],[-1.609,-0.546],[-1.607,-0.496],[-1.606,-0.44],[-1.604,-0.379],[-1.602,-0.313],[-1.6,-0.243],[-1.598,-0.169],[-1.596,-0.093],[-1.594,-0.014],[-1.592,0.066],[-1.59,0.147],[-1.588,0.227],[-1.586,0.307],[-1.585,0.385],[-1.583,0.46],[-1.581,0.532],[-1.579,0.6],[-1.577,0.663],[-1.575,0.721],[-1.573,0.772],[-1.571,0.817],[-1.569,0.855],[-1.567,0.885],[-1.565,0.907],[-1.564,0.92],[-1.562,0.925],[-1.56,0.921],[-1.558,0.909],[-1.556,0.888],[-1.554,0.858],[-1.552,0.82],[-1.55,0.774],[-1.548,0.721],[-1.546,0.66],[-1.544,0.592],[-1.543,0.519],[-1.541,0.44],[-1.539,0.356],[-1.537,0.269],[-1.535,0.179],[-1.533,0.086],[-1.531,-0.008],[-1.529,-0.102],[-1.527,-0.196],[-1.525,-0.288],[-1.523,-0.378],[-1.522,-0.464],[-1.52,-0.547],[-1.518,-0.625],[-1.516,-0.697],[-1.514,-0.762],[-1.512,-0.821],[-1.51,-0.872],[-1.508,-0.915],[-1.506,-0.95],[-1.504,-0.976],[-1.502,-0.992],[-1.501,-1],[-1.499,-0.998],[-1.497,-0.986],[-1.495,-0.966],[-1.493,-0.936],[-1.491,-0.898],[-1.489,-0.851],[-1.487,-0.797],[-1.485,-0.735],[-1.483,-0.667],[-1.481,-0.592],[-1.48,-0.512],[-1.478,-0.428],[-1.476,-0.34],[-1.474,-0.249],[-1.472,-0.156],[-1.47,-0.062],[-1.468,0.032],[-1.466,0.126],[-1.464,0.218],[-1.462,0.307],[-1.46,0.393],[-1.459,0.474],[-1.457,0.551],[-1.455,0.622],[-1.453,0.687],[-1.451,0.744],[-1.449,0.795],[-1.447,0.838],[-1.445,0.872],[-1.443,0.898],[-1.441,0.915],[-1.439,0.924],[-1.438,0.924],[-1.436,0.915],[-1.434,0.898],[-1.432,0.873],[-1.43,0.84],[-1.428,0.799],[-1.426,0.751],[-1.424,0.697],[-1.422,0.637],[-1.42,0.572],[-1.418,0.502],[-1.417,0.428],[-1.415,0.352],[-1.413,0.273],[-1.411,0.193],[-1.409,0.112],[-1.407,0.031],[-1.405,-0.048],[-1.403,-0.126],[-1.401,-0.201],[-1.399,-0.274],[-1.397,-0.342],[-1.396,-0.406],[-1.394,-0.465],[-1.392,-0.518],[-1.39,-0.566],[-1.388,-0.607],[-1.386,-0.642],[-1.384,-0.67],[-1.382,-0.691],[-1.38,-0.705],[-1.378,-0.712],[-1.376,-0.712],[-1.375,-0.705],[-1.373,-0.692],[-1.371,-0.672],[-1.369,-0.647],[-1.367,-0.616],[-1.365,-0.58],[-1.363,-0.539],[-1.361,-0.494],[-1.359,-0.446],[-1.357,-0.395],[-1.355,-0.341],[-1.354,-0.286],[-1.352,-0.23],[-1.35,-0.174],[-1.348,-0.117],[-1.346,-0.061],[-1.344,-0.007],[-1.342,0.046],[-1.34,0.096],[-1.338,0.143],[-1.336,0.187],[-1.334,0.228],[-1.333,0.265],[-1.331,0.297],[-1.329,0.325],[-1.327,0.349],[-1.325,0.368],[-1.323,0.383],[-1.321,0.392],[-1.319,0.398],[-1.317,0.398],[-1.315,0.395],[-1.313,0.388],[-1.312,0.377],[-1.31,0.362],[-1.308,0.345],[-1.306,0.324],[-1.304,0.302],[-1.302,0.277],[-1.3,0.251],[-1.298,0.224],[-1.296,0.196],[-1.294,0.169],[-1.292,0.141],[-1.291,0.114],[-1.289,0.087],[-1.287,0.062],[-1.285,0.039],[-1.283,0.017],[-1.281,-0.002],[-1.279,-0.02],[-1.277,-0.035],[-1.275,-0.047],[-1.273,-0.056],[-1.271,-0.064],[-1.27,-0.068],[-1.268,-0.07],[-1.266,-0.069],[-1.264,-0.067],[-1.262,-0.062],[-1.26,-0.055],[-1.258,-0.047],[-1.256,-0.037],[-1.254,-0.026],[-1.252,-0.015],[-1.25,-0.003],[-1.249,0.009],[-1.247,0.021],[-1.245,0.032],[-1.243,0.042],[-1.241,0.051],[-1.239,0.059],[-1.237,0.065],[-1.235,0.068],[-1.233,0.07],[-1.231,0.069],[-1.229,0.066],[-1.228,0.06],[-1.226,0.052],[-1.224,0.041],[-1.222,0.027],[-1.22,0.011],[-1.218,-0.008],[-1.216,-0.028],[-1.214,-0.051],[-1.212,-0.075],[-1.21,-0.101],[-1.208,-0.128],[-1.207,-0.155],[-1.205,-0.183],[-1.203,-0.211],[-1.201,-0.238],[-1.199,-0.265],[-1.197,-0.29],[-1.195,-0.314],[-1.193,-0.335],[-1.191,-0.354],[-1.189,-0.37],[-1.187,-0.383],[-1.186,-0.392],[-1.184,-0.397],[-1.182,-0.399],[-1.18,-0.395],[-1.178,-0.388],[-1.176,-0.376],[-1.174,-0.359],[-1.172,-0.337],[-1.17,-0.311],[-1.168,-0.281],[-1.166,-0.246],[-1.165,-0.207],[-1.163,-0.165],[-1.161,-0.119],[-1.159,-0.07],[-1.157,-0.018],[-1.155,0.035],[-1.153,0.09],[-1.151,0.147],[-1.149,0.203],[-1.147,0.26],[-1.145,0.315],[-1.144,0.37],[-1.142,0.422],[-1.14,0.472],[-1.138,0.518],[-1.136,0.561],[-1.134,0.599],[-1.132,0.632],[-1.13,0.661],[-1.128,0.683],[-1.126,0.699],[-1.124,0.709],[-1.123,0.712],[-1.121,0.709],[-1.119,0.698],[-1.117,0.681],[-1.115,0.656],[-1.113,0.625],[-1.111,0.586],[-1.109,0.542],[-1.107,0.491],[-1.105,0.435],[-1.103,0.373],[-1.102,0.307],[-1.1,0.236],[-1.098,0.162],[-1.096,0.086],[-1.094,0.007],[-1.092,-0.074],[-1.09,-0.154],[-1.088,-0.235],[-1.086,-0.314],[-1.084,-0.392],[-1.082,-0.467],[-1.081,-0.539],[-1.079,-0.606],[-1.077,-0.669],[-1.075,-0.726],[-1.073,-0.777],[-1.071,-0.821],[-1.069,-0.858],[-1.067,-0.887],[-1.065,-0.908],[-1.063,-0.921],[-1.061,-0.925],[-1.06,-0.921],[-1.058,-0.907],[-1.056,-0.885],[-1.054,-0.855],[-1.052,-0.816],[-1.05,-0.769],[-1.048,-0.715],[-1.046,-0.654],[-1.044,-0.585],[-1.042,-0.511],[-1.04,-0.432],[-1.039,-0.348],[-1.037,-0.26],[-1.035,-0.17],[-1.033,-0.077],[-1.031,0.017],[-1.029,0.111],[-1.027,0.205],[-1.025,0.297],[-1.023,0.386],[-1.021,0.472],[-1.019,0.555],[-1.018,0.632],[-1.016,0.703],[-1.014,0.768],[-1.012,0.826],[-1.01,0.877],[-1.008,0.919],[-1.006,0.953],[-1.004,0.978],[-1.002,0.993],[-1,1],[-0.998,0.997],[-0.997,0.985],[-0.995,0.963],[-0.993,0.933],[-0.991,0.894],[-0.989,0.847],[-0.987,0.791],[-0.985,0.729],[-0.983,0.66],[-0.981,0.585],[-0.979,0.504],[-0.977,0.419],[-0.976,0.331],[-0.974,0.24],[-0.972,0.147],[-0.97,0.053],[-0.968,-0.041],[-0.966,-0.135],[-0.964,-0.226],[-0.962,-0.315],[-0.96,-0.401],[-0.958,-0.482],[-0.956,-0.558],[-0.955,-0.628],[-0.953,-0.692],[-0.951,-0.75],[-0.949,-0.799],[-0.947,-0.841],[-0.945,-0.875],[-0.943,-0.9],[-0.941,-0.917],[-0.939,-0.924],[-0.937,-0.924],[-0.935,-0.914],[-0.934,-0.896],[-0.932,-0.87],[-0.93,-0.836],[-0.928,-0.795],[-0.926,-0.746],[-0.924,-0.691],[-0.922,-0.631],[-0.92,-0.565],[-0.918,-0.495],[-0.916,-0.421],[-0.914,-0.344],[-0.913,-0.265],[-0.911,-0.185],[-0.909,-0.104],[-0.907,-0.024],[-0.905,0.056],[-0.903,0.133],[-0.901,0.208],[-0.899,0.28],[-0.897,0.348],[-0.895,0.412],[-0.893,0.47],[-0.892,0.523],[-0.89,0.57],[-0.888,0.611],[-0.886,0.645],[-0.884,0.672],[-0.882,0.692],[-0.88,0.706],[-0.878,0.712],[-0.876,0.711],[-0.874,0.704],[-0.872,0.69],[-0.871,0.67],[-0.869,0.644],[-0.867,0.612],[-0.865,0.576],[-0.863,0.535],[-0.861,0.49],[-0.859,0.441],[-0.857,0.39],[-0.855,0.336],[-0.853,0.281],[-0.851,0.225],[-0.85,0.168],[-0.848,0.112],[-0.846,0.056],[-0.844,0.002],[-0.842,-0.05],[-0.84,-0.1],[-0.838,-0.148],[-0.836,-0.191],[-0.834,-0.232],[-0.832,-0.268],[-0.83,-0.3],[-0.829,-0.328],[-0.827,-0.351],[-0.825,-0.37],[-0.823,-0.384],[-0.821,-0.393],[-0.819,-0.398],[-0.817,-0.398],[-0.815,-0.395],[-0.813,-0.387],[-0.811,-0.375],[-0.809,-0.361],[-0.808,-0.343],[-0.806,-0.322],[-0.804,-0.3],[-0.802,-0.275],[-0.8,-0.249],[-0.798,-0.222],[-0.796,-0.194],[-0.794,-0.166],[-0.792,-0.138],[-0.79,-0.111],[-0.788,-0.085],[-0.787,-0.06],[-0.785,-0.037],[-0.783,-0.015],[-0.781,0.004],[-0.779,0.021],[-0.777,0.036],[-0.775,0.048],[-0.773,0.057],[-0.771,0.064],[-0.769,0.068],[-0.767,0.07],[-0.766,0.069],[-0.764,0.066],[-0.762,0.061],[-0.76,0.054],[-0.758,0.046],[-0.756,0.036],[-0.754,0.025],[-0.752,0.014],[-0.75,0.002],[-0.748,-0.01],[-0.746,-0.022],[-0.745,-0.033],[-0.743,-0.043],[-0.741,-0.052],[-0.739,-0.059],[-0.737,-0.065],[-0.735,-0.069],[-0.733,-0.07],[-0.731,-0.069],[-0.729,-0.066],[-0.727,-0.059],[-0.725,-0.051],[-0.724,-0.039],[-0.722,-0.026],[-0.72,-0.009],[-0.718,0.009],[-0.716,0.03],[-0.714,0.053],[-0.712,0.078],[-0.71,0.103],[-0.708,0.13],[-0.706,0.158],[-0.704,0.186],[-0.703,0.214],[-0.701,0.241],[-0.699,0.268],[-0.697,0.293],[-0.695,0.316],[-0.693,0.337],[-0.691,0.356],[-0.689,0.372],[-0.687,0.384],[-0.685,0.393],[-0.683,0.398],[-0.682,0.398],[-0.68,0.395],[-0.678,0.387],[-0.676,0.374],[-0.674,0.357],[-0.672,0.335],[-0.67,0.308],[-0.668,0.278],[-0.666,0.242],[-0.664,0.203],[-0.662,0.16],[-0.661,0.114],[-0.659,0.065],[-0.657,0.013],[-0.655,-0.04],[-0.653,-0.096],[-0.651,-0.152],[-0.649,-0.209],[-0.647,-0.265],[-0.645,-0.321],[-0.643,-0.375],[-0.641,-0.427],[-0.64,-0.476],[-0.638,-0.522],[-0.636,-0.565],[-0.634,-0.602],[-0.632,-0.635],[-0.63,-0.663],[-0.628,-0.685],[-0.626,-0.701],[-0.624,-0.71],[-0.622,-0.712],[-0.62,-0.708],[-0.619,-0.697],[-0.617,-0.679],[-0.615,-0.653],[-0.613,-0.621],[-0.611,-0.582],[-0.609,-0.537],[-0.607,-0.486],[-0.605,-0.429],[-0.603,-0.367],[-0.601,-0.3],[-0.599,-0.229],[-0.598,-0.155],[-0.596,-0.078],[-0.594,0.001],[-0.592,0.081],[-0.59,0.162],[-0.588,0.243],[-0.586,0.322],[-0.584,0.399],[-0.582,0.474],[-0.58,0.545],[-0.578,0.613],[-0.577,0.675],[-0.575,0.731],[-0.573,0.781],[-0.571,0.825],[-0.569,0.861],[-0.567,0.889],[-0.565,0.91],[-0.563,0.922],[-0.561,0.925],[-0.559,0.92],[-0.557,0.906],[-0.556,0.883],[-0.554,0.852],[-0.552,0.812],[-0.55,0.765],[-0.548,0.709],[-0.546,0.647],[-0.544,0.579],[-0.542,0.504],[-0.54,0.424],[-0.538,0.34],[-0.536,0.252],[-0.535,0.161],[-0.533,0.068],[-0.531,-0.026],[-0.529,-0.12],[-0.527,-0.213],[-0.525,-0.305],[-0.523,-0.395],[-0.521,-0.48],[-0.519,-0.562],[-0.517,-0.639],[-0.515,-0.71],[-0.514,-0.774],[-0.512,-0.832],[-0.51,-0.881],[-0.508,-0.923],[-0.506,-0.956],[-0.504,-0.98],[-0.502,-0.994],[-0.5,-1],[-0.498,-0.996],[-0.496,-0.983],[-0.494,-0.961],[-0.493,-0.93],[-0.491,-0.89],[-0.489,-0.842],[-0.487,-0.786],[-0.485,-0.723],[-0.483,-0.653],[-0.481,-0.577],[-0.479,-0.496],[-0.477,-0.411],[-0.475,-0.322],[-0.473,-0.231],[-0.472,-0.138],[-0.47,-0.044],[-0.468,0.05],[-0.466,0.143],[-0.464,0.235],[-0.462,0.323],[-0.46,0.408],[-0.458,0.489],[-0.456,0.565],[-0.454,0.635],[-0.452,0.698],[-0.451,0.755],[-0.449,0.804],[-0.447,0.845],[-0.445,0.878],[-0.443,0.902],[-0.441,0.918],[-0.439,0.925],[-0.437,0.923],[-0.435,0.913],[-0.433,0.894],[-0.431,0.867],[-0.43,0.832],[-0.428,0.79],[-0.426,0.741],[-0.424,0.686],[-0.422,0.625],[-0.42,0.559],[-0.418,0.488],[-0.416,0.414],[-0.414,0.337],[-0.412,0.258],[-0.41,0.177],[-0.409,0.097],[-0.407,0.016],[-0.405,-0.063],[-0.403,-0.141],[-0.401,-0.215],[-0.399,-0.287],[-0.397,-0.355],[-0.395,-0.418],[-0.393,-0.476],[-0.391,-0.528],[-0.389,-0.574],[-0.388,-0.614],[-0.386,-0.648],[-0.384,-0.674],[-0.382,-0.694],[-0.38,-0.707],[-0.378,-0.712],[-0.376,-0.711],[-0.374,-0.703],[-0.372,-0.688],[-0.37,-0.668],[-0.368,-0.641],[-0.367,-0.609],[-0.365,-0.572],[-0.363,-0.531],[-0.361,-0.485],[-0.359,-0.436],[-0.357,-0.385],[-0.355,-0.331],[-0.353,-0.276],[-0.351,-0.219],[-0.349,-0.163],[-0.347,-0.106],[-0.346,-0.051],[-0.344,0.003],[-0.342,0.055],[-0.34,0.105],[-0.338,0.152],[-0.336,0.195],[-0.334,0.235],[-0.332,0.271],[-0.33,0.303],[-0.328,0.33],[-0.326,0.353],[-0.325,0.371],[-0.323,0.385],[-0.321,0.394],[-0.319,0.398],[-0.317,0.398],[-0.315,0.394],[-0.313,0.386],[-0.311,0.374],[-0.309,0.359],[-0.307,0.341],[-0.305,0.32],[-0.304,0.297],[-0.302,0.272],[-0.3,0.246],[-0.298,0.219],[-0.296,0.191],[-0.294,0.163],[-0.292,0.135],[-0.29,0.108],[-0.288,0.082],[-0.286,0.058],[-0.284,0.034],[-0.283,0.013],[-0.281,-0.006],[-0.279,-0.023],[-0.277,-0.037],[-0.275,-0.049],[-0.273,-0.058],[-0.271,-0.065],[-0.269,-0.069],[-0.267,-0.07],[-0.265,-0.069],[-0.263,-0.066],[-0.262,-0.061],[-0.26,-0.054],[-0.258,-0.045],[-0.256,-0.035],[-0.254,-0.024],[-0.252,-0.013],[-0.25,-0.001],[-0.248,0.011],[-0.246,0.023],[-0.244,0.034],[-0.242,0.044],[-0.241,0.053],[-0.239,0.06],[-0.237,0.065],[-0.235,0.069],[-0.233,0.07],[-0.231,0.069],[-0.229,0.065],[-0.227,0.059],[-0.225,0.05],[-0.223,0.038],[-0.221,0.024],[-0.22,0.008],[-0.218,-0.011],[-0.216,-0.032],[-0.214,-0.055],[-0.212,-0.08],[-0.21,-0.106],[-0.208,-0.133],[-0.206,-0.161],[-0.204,-0.188],[-0.202,-0.216],[-0.2,-0.244],[-0.199,-0.27],[-0.197,-0.295],[-0.195,-0.318],[-0.193,-0.339],[-0.191,-0.357],[-0.189,-0.373],[-0.187,-0.385],[-0.185,-0.393],[-0.183,-0.398],[-0.181,-0.398],[-0.179,-0.394],[-0.178,-0.386],[-0.176,-0.373],[-0.174,-0.355],[-0.172,-0.333],[-0.17,-0.306],[-0.168,-0.274],[-0.166,-0.239],[-0.164,-0.199],[-0.162,-0.156],[-0.16,-0.11],[-0.158,-0.06],[-0.157,-0.008],[-0.155,0.046],[-0.153,0.101],[-0.151,0.157],[-0.149,0.214],[-0.147,0.27],[-0.145,0.326],[-0.143,0.38],[-0.141,0.432],[-0.139,0.481],[-0.137,0.526],[-0.136,0.568],[-0.134,0.606],[-0.132,0.638],[-0.13,0.665],[-0.128,0.687],[-0.126,0.702],[-0.124,0.71],[-0.122,0.712],[-0.12,0.707],[-0.118,0.695],[-0.116,0.676],[-0.115,0.651],[-0.113,0.618],[-0.111,0.578],[-0.109,0.533],[-0.107,0.481],[-0.105,0.423],[-0.103,0.361],[-0.101,0.294],[-0.099,0.222],[-0.097,0.148],[-0.095,0.071],[-0.094,-0.009],[-0.092,-0.089],[-0.09,-0.17],[-0.088,-0.25],[-0.086,-0.329],[-0.084,-0.407],[-0.082,-0.481],[-0.08,-0.552],[-0.078,-0.619],[-0.076,-0.68],[-0.074,-0.736],[-0.073,-0.786],[-0.071,-0.829],[-0.069,-0.864],[-0.067,-0.892],[-0.065,-0.911],[-0.063,-0.922],[-0.061,-0.925],[-0.059,-0.919],[-0.057,-0.904],[-0.055,-0.88],[-0.053,-0.848],[-0.052,-0.808],[-0.05,-0.76],[-0.048,-0.704],[-0.046,-0.641],[-0.044,-0.572],[-0.042,-0.497],[-0.04,-0.416],[-0.038,-0.332],[-0.036,-0.243],[-0.034,-0.152],[-0.032,-0.059],[-0.031,0.035],[-0.029,0.129],[-0.027,0.222],[-0.025,0.314],[-0.023,0.403],[-0.021,0.488],[-0.019,0.57],[-0.017,0.646],[-0.015,0.716],[-0.013,0.78],[-0.011,0.837],[-0.01,0.885],[-0.008,0.926],[-0.006,0.958],[-0.004,0.981],[-0.002,0.995],[0,1],[0.002,0.995],[0.004,0.981],[0.006,0.958],[0.008,0.926],[0.01,0.885],[0.011,0.837],[0.013,0.78],[0.015,0.716],[0.017,0.646],[0.019,0.57],[0.021,0.488],[0.023,0.403],[0.025,0.314],[0.027,0.222],[0.029,0.129],[0.031,0.035],[0.032,-0.059],[0.034,-0.152],[0.036,-0.243],[0.038,-0.332],[0.04,-0.416],[0.042,-0.497],[0.044,-0.572],[0.046,-0.641],[0.048,-0.704],[0.05,-0.76],[0.052,-0.808],[0.053,-0.848],[0.055,-0.88],[0.057,-0.904],[0.059,-0.919],[0.061,-0.925],[0.063,-0.922],[0.065,-0.911],[0.067,-0.892],[0.069,-0.864],[0.071,-0.829],[0.073,-0.786],[0.074,-0.736],[0.076,-0.68],[0.078,-0.619],[0.08,-0.552],[0.082,-0.481],[0.084,-0.407],[0.086,-0.329],[0.088,-0.25],[0.09,-0.17],[0.092,-0.089],[0.094,-0.009],[0.095,0.071],[0.097,0.148],[0.099,0.222],[0.101,0.294],[0.103,0.361],[0.105,0.423],[0.107,0.481],[0.109,0.533],[0.111,0.578],[0.113,0.618],[0.115,0.651],[0.116,0.676],[0.118,0.695],[0.12,0.707],[0.122,0.712],[0.124,0.71],[0.126,0.702],[0.128,0.687],[0.13,0.665],[0.132,0.638],[0.134,0.606],[0.136,0.568],[0.137,0.526],[0.139,0.481],[0.141,0.432],[0.143,0.38],[0.145,0.326],[0.147,0.27],[0.149,0.214],[0.151,0.157],[0.153,0.101],[0.155,0.046],[0.157,-0.008],[0.158,-0.06],[0.16,-0.11],[0.162,-0.156],[0.164,-0.199],[0.166,-0.239],[0.168,-0.274],[0.17,-0.306],[0.172,-0.333],[0.174,-0.355],[0.176,-0.373],[0.178,-0.386],[0.179,-0.394],[0.181,-0.398],[0.183,-0.398],[0.185,-0.393],[0.187,-0.385],[0.189,-0.373],[0.191,-0.357],[0.193,-0.339],[0.195,-0.318],[0.197,-0.295],[0.199,-0.27],[0.2,-0.244],[0.202,-0.216],[0.204,-0.188],[0.206,-0.161],[0.208,-0.133],[0.21,-0.106],[0.212,-0.08],[0.214,-0.055],[0.216,-0.032],[0.218,-0.011],[0.22,0.008],[0.221,0.024],[0.223,0.038],[0.225,0.05],[0.227,0.059],[0.229,0.065],[0.231,0.069],[0.233,0.07],[0.235,0.069],[0.237,0.065],[0.239,0.06],[0.241,0.053],[0.242,0.044],[0.244,0.034],[0.246,0.023],[0.248,0.011],[0.25,-0.001],[0.252,-0.013],[0.254,-0.024],[0.256,-0.035],[0.258,-0.045],[0.26,-0.054],[0.262,-0.061],[0.263,-0.066],[0.265,-0.069],[0.267,-0.07],[0.269,-0.069],[0.271,-0.065],[0.273,-0.058],[0.275,-0.049],[0.277,-0.037],[0.279,-0.023],[0.281,-0.006],[0.283,0.013],[0.284,0.034],[0.286,0.058],[0.288,0.082],[0.29,0.108],[0.292,0.135],[0.294,0.163],[0.296,0.191],[0.298,0.219],[0.3,0.246],[0.302,0.272],[0.304,0.297],[0.305,0.32],[0.307,0.341],[0.309,0.359],[0.311,0.374],[0.313,0.386],[0.315,0.394],[0.317,0.398],[0.319,0.398],[0.321,0.394],[0.323,0.385],[0.325,0.371],[0.326,0.353],[0.328,0.33],[0.33,0.303],[0.332,0.271],[0.334,0.235],[0.336,0.195],[0.338,0.152],[0.34,0.105],[0.342,0.055],[0.344,0.003],[0.346,-0.051],[0.347,-0.106],[0.349,-0.163],[0.351,-0.219],[0.353,-0.276],[0.355,-0.331],[0.357,-0.385],[0.359,-0.436],[0.361,-0.485],[0.363,-0.531],[0.365,-0.572],[0.367,-0.609],[0.368,-0.641],[0.37,-0.668],[0.372,-0.688],[0.374,-0.703],[0.376,-0.711],[0.378,-0.712],[0.38,-0.707],[0.382,-0.694],[0.384,-0.674],[0.386,-0.648],[0.388,-0.614],[0.389,-0.574],[0.391,-0.528],[0.393,-0.476],[0.395,-0.418],[0.397,-0.355],[0.399,-0.287],[0.401,-0.215],[0.403,-0.141],[0.405,-0.063],[0.407,0.016],[0.409,0.097],[0.41,0.177],[0.412,0.258],[0.414,0.337],[0.416,0.414],[0.418,0.488],[0.42,0.559],[0.422,0.625],[0.424,0.686],[0.426,0.741],[0.428,0.79],[0.43,0.832],[0.431,0.867],[0.433,0.894],[0.435,0.913],[0.437,0.923],[0.439,0.925],[0.441,0.918],[0.443,0.902],[0.445,0.878],[0.447,0.845],[0.449,0.804],[0.451,0.755],[0.452,0.698],[0.454,0.635],[0.456,0.565],[0.458,0.489],[0.46,0.408],[0.462,0.323],[0.464,0.235],[0.466,0.143],[0.468,0.05],[0.47,-0.044],[0.472,-0.138],[0.473,-0.231],[0.475,-0.322],[0.477,-0.411],[0.479,-0.496],[0.481,-0.577],[0.483,-0.653],[0.485,-0.723],[0.487,-0.786],[0.489,-0.842],[0.491,-0.89],[0.493,-0.93],[0.494,-0.961],[0.496,-0.983],[0.498,-0.996],[0.5,-1],[0.502,-0.994],[0.504,-0.98],[0.506,-0.956],[0.508,-0.923],[0.51,-0.881],[0.512,-0.832],[0.514,-0.774],[0.515,-0.71],[0.517,-0.639],[0.519,-0.562],[0.521,-0.48],[0.523,-0.395],[0.525,-0.305],[0.527,-0.213],[0.529,-0.12],[0.531,-0.026],[0.533,0.068],[0.535,0.161],[0.536,0.252],[0.538,0.34],[0.54,0.424],[0.542,0.504],[0.544,0.579],[0.546,0.647],[0.548,0.709],[0.55,0.765],[0.552,0.812],[0.554,0.852],[0.556,0.883],[0.557,0.906],[0.559,0.92],[0.561,0.925],[0.563,0.922],[0.565,0.91],[0.567,0.889],[0.569,0.861],[0.571,0.825],[0.573,0.781],[0.575,0.731],[0.577,0.675],[0.578,0.613],[0.58,0.545],[0.582,0.474],[0.584,0.399],[0.586,0.322],[0.588,0.243],[0.59,0.162],[0.592,0.081],[0.594,0.001],[0.596,-0.078],[0.598,-0.155],[0.599,-0.229],[0.601,-0.3],[0.603,-0.367],[0.605,-0.429],[0.607,-0.486],[0.609,-0.537],[0.611,-0.582],[0.613,-0.621],[0.615,-0.653],[0.617,-0.679],[0.619,-0.697],[0.62,-0.708],[0.622,-0.712],[0.624,-0.71],[0.626,-0.701],[0.628,-0.685],[0.63,-0.663],[0.632,-0.635],[0.634,-0.602],[0.636,-0.565],[0.638,-0.522],[0.64,-0.476],[0.641,-0.427],[0.643,-0.375],[0.645,-0.321],[0.647,-0.265],[0.649,-0.209],[0.651,-0.152],[0.653,-0.096],[0.655,-0.04],[0.657,0.013],[0.659,0.065],[0.661,0.114],[0.662,0.16],[0.664,0.203],[0.666,0.242],[0.668,0.278],[0.67,0.308],[0.672,0.335],[0.674,0.357],[0.676,0.374],[0.678,0.387],[0.68,0.395],[0.682,0.398],[0.683,0.398],[0.685,0.393],[0.687,0.384],[0.689,0.372],[0.691,0.356],[0.693,0.337],[0.695,0.316],[0.697,0.293],[0.699,0.268],[0.701,0.241],[0.703,0.214],[0.704,0.186],[0.706,0.158],[0.708,0.13],[0.71,0.103],[0.712,0.078],[0.714,0.053],[0.716,0.03],[0.718,0.009],[0.72,-0.009],[0.722,-0.026],[0.724,-0.039],[0.725,-0.051],[0.727,-0.059],[0.729,-0.066],[0.731,-0.069],[0.733,-0.07],[0.735,-0.069],[0.737,-0.065],[0.739,-0.059],[0.741,-0.052],[0.743,-0.043],[0.745,-0.033],[0.746,-0.022],[0.748,-0.01],[0.75,0.002],[0.752,0.014],[0.754,0.025],[0.756,0.036],[0.758,0.046],[0.76,0.054],[0.762,0.061],[0.764,0.066],[0.766,0.069],[0.767,0.07],[0.769,0.068],[0.771,0.064],[0.773,0.057],[0.775,0.048],[0.777,0.036],[0.779,0.021],[0.781,0.004],[0.783,-0.015],[0.785,-0.037],[0.787,-0.06],[0.788,-0.085],[0.79,-0.111],[0.792,-0.138],[0.794,-0.166],[0.796,-0.194],[0.798,-0.222],[0.8,-0.249],[0.802,-0.275],[0.804,-0.3],[0.806,-0.322],[0.808,-0.343],[0.809,-0.361],[0.811,-0.375],[0.813,-0.387],[0.815,-0.395],[0.817,-0.398],[0.819,-0.398],[0.821,-0.393],[0.823,-0.384],[0.825,-0.37],[0.827,-0.351],[0.829,-0.328],[0.83,-0.3],[0.832,-0.268],[0.834,-0.232],[0.836,-0.191],[0.838,-0.148],[0.84,-0.1],[0.842,-0.05],[0.844,0.002],[0.846,0.056],[0.848,0.112],[0.85,0.168],[0.851,0.225],[0.853,0.281],[0.855,0.336],[0.857,0.39],[0.859,0.441],[0.861,0.49],[0.863,0.535],[0.865,0.576],[0.867,0.612],[0.869,0.644],[0.871,0.67],[0.872,0.69],[0.874,0.704],[0.876,0.711],[0.878,0.712],[0.88,0.706],[0.882,0.692],[0.884,0.672],[0.886,0.645],[0.888,0.611],[0.89,0.57],[0.892,0.523],[0.893,0.47],[0.895,0.412],[0.897,0.348],[0.899,0.28],[0.901,0.208],[0.903,0.133],[0.905,0.056],[0.907,-0.024],[0.909,-0.104],[0.911,-0.185],[0.913,-0.265],[0.914,-0.344],[0.916,-0.421],[0.918,-0.495],[0.92,-0.565],[0.922,-0.631],[0.924,-0.691],[0.926,-0.746],[0.928,-0.795],[0.93,-0.836],[0.932,-0.87],[0.934,-0.896],[0.935,-0.914],[0.937,-0.924],[0.939,-0.924],[0.941,-0.917],[0.943,-0.9],[0.945,-0.875],[0.947,-0.841],[0.949,-0.799],[0.951,-0.75],[0.953,-0.692],[0.955,-0.628],[0.956,-0.558],[0.958,-0.482],[0.96,-0.401],[0.962,-0.315],[0.964,-0.226],[0.966,-0.135],[0.968,-0.041],[0.97,0.053],[0.972,0.147],[0.974,0.24],[0.976,0.331],[0.977,0.419],[0.979,0.504],[0.981,0.585],[0.983,0.66],[0.985,0.729],[0.987,0.791],[0.989,0.847],[0.991,0.894],[0.993,0.933],[0.995,0.963],[0.997,0.985],[0.998,0.997],[1,1],[1.002,0.993],[1.004,0.978],[1.006,0.953],[1.008,0.919],[1.01,0.877],[1.012,0.826],[1.014,0.768],[1.016,0.703],[1.018,0.632],[1.019,0.555],[1.021,0.472],[1.023,0.386],[1.025,0.297],[1.027,0.205],[1.029,0.111],[1.031,0.017],[1.033,-0.077],[1.035,-0.17],[1.037,-0.26],[1.039,-0.348],[1.04,-0.432],[1.042,-0.511],[1.044,-0.585],[1.046,-0.654],[1.048,-0.715],[1.05,-0.769],[1.052,-0.816],[1.054,-0.855],[1.056,-0.885],[1.058,-0.907],[1.06,-0.921],[1.061,-0.925],[1.063,-0.921],[1.065,-0.908],[1.067,-0.887],[1.069,-0.858],[1.071,-0.821],[1.073,-0.777],[1.075,-0.726],[1.077,-0.669],[1.079,-0.606],[1.081,-0.539],[1.082,-0.467],[1.084,-0.392],[1.086,-0.314],[1.088,-0.235],[1.09,-0.154],[1.092,-0.074],[1.094,0.007],[1.096,0.086],[1.098,0.162],[1.1,0.236],[1.102,0.307],[1.103,0.373],[1.105,0.435],[1.107,0.491],[1.109,0.542],[1.111,0.586],[1.113,0.625],[1.115,0.656],[1.117,0.681],[1.119,0.698],[1.121,0.709],[1.123,0.712],[1.124,0.709],[1.126,0.699],[1.128,0.683],[1.13,0.661],[1.132,0.632],[1.134,0.599],[1.136,0.561],[1.138,0.518],[1.14,0.472],[1.142,0.422],[1.144,0.37],[1.145,0.315],[1.147,0.26],[1.149,0.203],[1.151,0.147],[1.153,0.09],[1.155,0.035],[1.157,-0.018],[1.159,-0.07],[1.161,-0.119],[1.163,-0.165],[1.165,-0.207],[1.166,-0.246],[1.168,-0.281],[1.17,-0.311],[1.172,-0.337],[1.174,-0.359],[1.176,-0.376],[1.178,-0.388],[1.18,-0.395],[1.182,-0.399],[1.184,-0.397],[1.186,-0.392],[1.187,-0.383],[1.189,-0.37],[1.191,-0.354],[1.193,-0.335],[1.195,-0.314],[1.197,-0.29],[1.199,-0.265],[1.201,-0.238],[1.203,-0.211],[1.205,-0.183],[1.207,-0.155],[1.208,-0.128],[1.21,-0.101],[1.212,-0.075],[1.214,-0.051],[1.216,-0.028],[1.218,-0.008],[1.22,0.011],[1.222,0.027],[1.224,0.041],[1.226,0.052],[1.228,0.06],[1.229,0.066],[1.231,0.069],[1.233,0.07],[1.235,0.068],[1.237,0.065],[1.239,0.059],[1.241,0.051],[1.243,0.042],[1.245,0.032],[1.247,0.021],[1.249,0.009],[1.25,-0.003],[1.252,-0.015],[1.254,-0.026],[1.256,-0.037],[1.258,-0.047],[1.26,-0.055],[1.262,-0.062],[1.264,-0.067],[1.266,-0.069],[1.268,-0.07],[1.27,-0.068],[1.271,-0.064],[1.273,-0.056],[1.275,-0.047],[1.277,-0.035],[1.279,-0.02],[1.281,-0.002],[1.283,0.017],[1.285,0.039],[1.287,0.062],[1.289,0.087],[1.291,0.114],[1.292,0.141],[1.294,0.169],[1.296,0.196],[1.298,0.224],[1.3,0.251],[1.302,0.277],[1.304,0.302],[1.306,0.324],[1.308,0.345],[1.31,0.362],[1.312,0.377],[1.313,0.388],[1.315,0.395],[1.317,0.398],[1.319,0.398],[1.321,0.392],[1.323,0.383],[1.325,0.368],[1.327,0.349],[1.329,0.325],[1.331,0.297],[1.333,0.265],[1.334,0.228],[1.336,0.187],[1.338,0.143],[1.34,0.096],[1.342,0.046],[1.344,-0.007],[1.346,-0.061],[1.348,-0.117],[1.35,-0.174],[1.352,-0.23],[1.354,-0.286],[1.355,-0.341],[1.357,-0.395],[1.359,-0.446],[1.361,-0.494],[1.363,-0.539],[1.365,-0.58],[1.367,-0.616],[1.369,-0.647],[1.371,-0.672],[1.373,-0.692],[1.375,-0.705],[1.376,-0.712],[1.378,-0.712],[1.38,-0.705],[1.382,-0.691],[1.384,-0.67],[1.386,-0.642],[1.388,-0.607],[1.39,-0.566],[1.392,-0.518],[1.394,-0.465],[1.396,-0.406],[1.397,-0.342],[1.399,-0.274],[1.401,-0.201],[1.403,-0.126],[1.405,-0.048],[1.407,0.031],[1.409,0.112],[1.411,0.193],[1.413,0.273],[1.415,0.352],[1.417,0.428],[1.418,0.502],[1.42,0.572],[1.422,0.637],[1.424,0.697],[1.426,0.751],[1.428,0.799],[1.43,0.84],[1.432,0.873],[1.434,0.898],[1.436,0.915],[1.438,0.924],[1.439,0.924],[1.441,0.915],[1.443,0.898],[1.445,0.872],[1.447,0.838],[1.449,0.795],[1.451,0.744],[1.453,0.687],[1.455,0.622],[1.457,0.551],[1.459,0.474],[1.46,0.393],[1.462,0.307],[1.464,0.218],[1.466,0.126],[1.468,0.032],[1.47,-0.062],[1.472,-0.156],[1.474,-0.249],[1.476,-0.34],[1.478,-0.428],[1.48,-0.512],[1.481,-0.592],[1.483,-0.667],[1.485,-0.735],[1.487,-0.797],[1.489,-0.851],[1.491,-0.898],[1.493,-0.936],[1.495,-0.966],[1.497,-0.986],[1.499,-0.998],[1.501,-1],[1.502,-0.992],[1.504,-0.976],[1.506,-0.95],[1.508,-0.915],[1.51,-0.872],[1.512,-0.821],[1.514,-0.762],[1.516,-0.697],[1.518,-0.625],[1.52,-0.547],[1.522,-0.464],[1.523,-0.378],[1.525,-0.288],[1.527,-0.196],[1.529,-0.102],[1.531,-0.008],[1.533,0.086],[1.535,0.179],[1.537,0.269],[1.539,0.356],[1.541,0.44],[1.543,0.519],[1.544,0.592],[1.546,0.66],[1.548,0.721],[1.55,0.774],[1.552,0.82],[1.554,0.858],[1.556,0.888],[1.558,0.909],[1.56,0.921],[1.562,0.925],[1.564,0.92],[1.565,0.907],[1.567,0.885],[1.569,0.855],[1.571,0.817],[1.573,0.772],[1.575,0.721],[1.577,0.663],[1.579,0.6],[1.581,0.532],[1.583,0.46],[1.585,0.385],[1.586,0.307],[1.588,0.227],[1.59,0.147],[1.592,0.066],[1.594,-0.014],[1.596,-0.093],[1.598,-0.169],[1.6,-0.243],[1.602,-0.313],[1.604,-0.379],[1.606,-0.44],[1.607,-0.496],[1.609,-0.546],[1.611,-0.59],[1.613,-0.628],[1.615,-0.659],[1.617,-0.683],[1.619,-0.7],[1.621,-0.709],[1.623,-0.712],[1.625,-0.709],[1.627,-0.698],[1.628,-0.681],[1.63,-0.658],[1.632,-0.63],[1.634,-0.596],[1.636,-0.557],[1.638,-0.514],[1.64,-0.467],[1.642,-0.417],[1.644,-0.365],[1.646,-0.31],[1.648,-0.254],[1.649,-0.198],[1.651,-0.141],[1.653,-0.085],[1.655,-0.03],[1.657,0.023],[1.659,0.075],[1.661,0.123],[1.663,0.169],[1.665,0.211],[1.667,0.249],[1.669,0.284],[1.67,0.314],[1.672,0.339],[1.674,0.36],[1.676,0.377],[1.678,0.389],[1.68,0.396],[1.682,0.399],[1.684,0.397],[1.686,0.391],[1.688,0.382],[1.69,0.369],[1.691,0.353],[1.693,0.333],[1.695,0.312],[1.697,0.288],[1.699,0.263],[1.701,0.236],[1.703,0.208],[1.705,0.18],[1.707,0.153],[1.709,0.125],[1.711,0.098],[1.712,0.073],[1.714,0.049],[1.716,0.026],[1.718,0.006],[1.72,-0.013],[1.722,-0.028],[1.724,-0.042],[1.726,-0.053],[1.728,-0.061],[1.73,-0.066],[1.732,-0.069],[1.733,-0.07],[1.735,-0.068],[1.737,-0.064],[1.739,-0.058],[1.741,-0.05],[1.743,-0.041],[1.745,-0.031],[1.747,-0.02],[1.749,-0.008],[1.751,0.004],[1.753,0.016],[1.754,0.027],[1.756,0.038],[1.758,0.048],[1.76,0.056],[1.762,0.062],[1.764,0.067],[1.766,0.07],[1.768,0.07],[1.77,0.068],[1.772,0.063],[1.774,0.056],[1.775,0.046],[1.777,0.033],[1.779,0.018],[1.781,0.001],[1.783,-0.019],[1.785,-0.041],[1.787,-0.064],[1.789,-0.09],[1.791,-0.116],[1.793,-0.143],[1.795,-0.171],[1.796,-0.199],[1.798,-0.227],[1.8,-0.254],[1.802,-0.28],[1.804,-0.304],[1.806,-0.326],[1.808,-0.346],[1.81,-0.364],[1.812,-0.378],[1.814,-0.389],[1.816,-0.396],[1.817,-0.399],[1.819,-0.397],[1.821,-0.392],[1.823,-0.381],[1.825,-0.366],[1.827,-0.347],[1.829,-0.323],[1.831,-0.294],[1.833,-0.261],[1.835,-0.224],[1.837,-0.183],[1.838,-0.139],[1.84,-0.091],[1.842,-0.041],[1.844,0.012],[1.846,0.067],[1.848,0.122],[1.85,0.179],[1.852,0.236],[1.854,0.292],[1.856,0.347],[1.858,0.4],[1.859,0.451],[1.861,0.499],[1.863,0.543],[1.865,0.583],[1.867,0.619],[1.869,0.649],[1.871,0.674],[1.873,0.693],[1.875,0.706],[1.877,0.712],[1.879,0.711],[1.88,0.704],[1.882,0.689],[1.884,0.667],[1.886,0.639],[1.888,0.604],[1.89,0.562],[1.892,0.514],[1.894,0.46],[1.896,0.4],[1.898,0.336],[1.9,0.267],[1.901,0.194],[1.903,0.119],[1.905,0.041],[1.907,-0.039],[1.909,-0.12],[1.911,-0.2],[1.913,-0.281],[1.915,-0.359],[1.917,-0.435],[1.919,-0.509],[1.921,-0.578],[1.922,-0.643],[1.924,-0.702],[1.926,-0.756],[1.928,-0.803],[1.93,-0.843],[1.932,-0.876],[1.934,-0.9],[1.936,-0.916],[1.938,-0.924],[1.94,-0.924],[1.942,-0.914],[1.943,-0.896],[1.945,-0.869],[1.947,-0.834],[1.949,-0.79],[1.951,-0.739],[1.953,-0.681],[1.955,-0.615],[1.957,-0.544],[1.959,-0.467],[1.961,-0.385],[1.963,-0.298],[1.964,-0.209],[1.966,-0.117],[1.968,-0.024],[1.97,0.071],[1.972,0.165],[1.974,0.257],[1.976,0.348],[1.978,0.436],[1.98,0.52],[1.982,0.599],[1.984,0.673],[1.985,0.741],[1.987,0.802],[1.989,0.856],[1.991,0.902],[1.993,0.939],[1.995,0.968],[1.997,0.988],[1.999,0.998],[2.001,0.999],[2.003,0.991],[2.005,0.974],[2.006,0.947],[2.008,0.912],[2.01,0.868],[2.012,0.816],[2.014,0.757],[2.016,0.69],[2.018,0.618],[2.02,0.539],[2.022,0.456],[2.024,0.369],[2.026,0.279],[2.027,0.187],[2.029,0.093],[2.031,-0.001],[2.033,-0.095],[2.035,-0.187],[2.037,-0.277],[2.039,-0.364],[2.041,-0.447],[2.043,-0.526],[2.045,-0.599],[2.047,-0.666],[2.048,-0.726],[2.05,-0.779],[2.052,-0.824],[2.054,-0.861],[2.056,-0.89],[2.058,-0.911],[2.06,-0.922],[2.062,-0.925],[2.064,-0.919],[2.066,-0.905],[2.068,-0.882],[2.069,-0.851],[2.071,-0.813],[2.073,-0.768],[2.075,-0.716],[2.077,-0.657],[2.079,-0.594],[2.081,-0.525],[2.083,-0.453],[2.085,-0.378],[2.087,-0.299],[2.089,-0.22],[2.09,-0.139],[2.092,-0.058],[2.094,0.022],[2.096,0.1],[2.098,0.177],[2.1,0.25]]}],"curves":[{"kind":"cosine","b":6.283185307179586},{"kind":"cosine","a":-1,"b":6.283185307179586}]}
{{< /apfigure >}}

**Analysis.** The curves $y=\cos(2\pi x)$ and $y=-\cos(2\pi x)$ are bounding curves: they bound the function from above and below, tracing out the high and low points. The harmonic motion graph sits inside the bounding curves. This is an example of a function whose amplitude not only decreases with time, but actually increases and decreases multiple times within a period.

## Key equations

| standard form of sinusoidal equation | $y=A\sin(Bt-C)+D$ or $y=A\cos(Bt-C)+D$ |
| :--- | :--- |
| simple harmonic motion | $d=a\cos(\omega t)$ or $d=a\sin(\omega t)$ |
| damped harmonic motion | $f(t)=ae^{-ct}\sin(\omega t)$ or $f(t)=ae^{-ct}\cos(\omega t)$ |

## Key concepts

- Sinusoidal functions are represented by the sine and cosine graphs. In standard form, we can find the amplitude, period, and horizontal and vertical shifts.
- Use key points to graph a sinusoidal function. The five key points include the minimum and maximum values and the midline values.
- Periodic functions can model events that reoccur in set cycles, like the phases of the moon, the hands on a clock, and the seasons in a year.
- Harmonic motion functions are modeled from given data. Similar to periodic motion applications, harmonic motion requires a restoring force. Examples include gravitational force and spring motion activated by weight.
- Damped harmonic motion is a form of periodic behavior affected by a damping factor. Energy dissipating factors, like friction, cause the displacement of the object to shrink.
- Bounding curves delineate the graph of harmonic motion with variable maximum and minimum values.

## Key terms

**amplitude** — the distance from the midline to the maximum or minimum value of a sinusoidal function. **damped harmonic motion** — a form of harmonic motion affected by a damping factor that dissipates energy, causing the local maximum and minimum values of the displacement to shrink toward the equilibrium value. **frequency** — the reciprocal of the period, $\tfrac{\omega}{2\pi}$, giving the number of cycles per unit of time. **harmonic motion** — a kind of periodic motion attributable to a restoring force such as spring tension or gravity. **midline** — the average value of a sinusoidal function, the vertical shift from the parent graph. **periodic motion** — motion that repeats itself in a fixed time period. **simple harmonic motion** — a periodic motion, given as $d=a\cos(\omega t)$ or $d=a\sin(\omega t)$, that involves a restoring force but assumes the motion will continue forever.

## Practice

### Determine the amplitude and period of sinusoidal functions

{{< fillin
  question="The displacement $h(t)$, in centimeters, of a mass suspended by a spring is modeled by the function $h(t)=8\sin(6\pi t)$, where $t$ is measured in seconds. Find the amplitude (in cm) and the period (in seconds) of this displacement, in that order, separated by a comma."
  answer="8,\tfrac{1}{3}"
  answerDisplay="amplitude $8$ cm, period $\tfrac13$ s"
  hint="Compare to $h(t)=A\sin(Bt)$: the amplitude is $|A|$ and the period is $\tfrac{2\pi}{|B|}$."
>}}

{{< fillin
  question="The displacement $h(t)$, in centimeters, of a mass suspended by a spring is modeled by the function $h(t)=4\cos\left(\tfrac{\pi}{2}t\right)$, where $t$ is measured in seconds. Find the amplitude (in cm) and the period (in seconds) of this displacement, in that order, separated by a comma."
  answer="4,4"
  answerDisplay="amplitude $4$ cm, period $4$ s"
  hint="Compare to $h(t)=A\cos(Bt)$: the amplitude is $|A|$ and the period is $\tfrac{2\pi}{|B|}$."
>}}

### Model equations and graph sinusoidal functions

Find a possible formula for the trigonometric function represented by the table below.

| $x$ | $0$ | $3$ | $6$ | $9$ | $12$ | $15$ | $18$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $y$ | $-4$ | $-1$ | $2$ | $-1$ | $-4$ | $-1$ | $2$ |

{{< fillin
  question="Find a possible formula $y=f(x)$ for the trigonometric function represented by the table above."
  answer="-3\cos(\tfrac{\pi}{6}x)-1"
  answerDisplay="$y=-3\cos\left(\tfrac{\pi}{6}x\right)-1$"
  hint="The amplitude is half the range, the midline is the average of the extreme values, and the period is the $x$-distance between repeats of the same value."
>}}

Find a possible formula for the trigonometric function represented by the table below.

| $x$ | $0$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{2}$ | $\tfrac{3\pi}{4}$ | $\pi$ | $\tfrac{5\pi}{4}$ | $\tfrac{3\pi}{2}$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $y$ | $2$ | $7$ | $2$ | $-3$ | $2$ | $7$ | $2$ |

{{< fillin
  question="Find a possible formula $y=f(x)$ for the trigonometric function represented by the table above."
  answer="5\sin(2x)+2"
  answerDisplay="$y=5\sin(2x)+2$"
  hint="The function equals its midline at $x=0$ and is increasing there, which points to a sine model; then find the amplitude, midline, and period from the extreme values and their spacing."
>}}

### Model periodic behavior

{{< fillin
  question="Outside temperatures over the course of a day can be modeled as a sinusoidal function. Suppose the high temperature of $105^\circ\text{F}$ occurs at 5 PM and the average temperature for the day is $85^\circ\text{F}$. Find the temperature, to the nearest degree (in $^\circ\text{F}$), at 9 AM."
  answer="75"
  answerDisplay="$75^\circ\text{F}$"
  hint="Build $T(t)=20\cos\left(\tfrac{\pi}{12}(t-17)\right)+85$ with $t$ in hours after midnight, since the amplitude is the high minus the average and the maximum occurs at 5 PM ($t=17$); then evaluate at $t=9$."
>}}

{{< fillin
  question="Outside temperatures over the course of a day can be modeled as a sinusoidal function. Suppose the temperature varies between $47^\circ\text{F}$ and $63^\circ\text{F}$ during the day and the average daily temperature first occurs at 10 AM. How many hours after midnight does the temperature first reach $51^\circ\text{F}$?"
  answer="8"
  answerDisplay="$8$ hours after midnight (8 AM)"
  hint="Build $T(t)=8\sin\left(\tfrac{\pi}{12}(t-10)\right)+55$ with $t$ in hours after midnight, since the function crosses its midline, increasing, at $t=10$; then solve $T(t)=51$ for the smallest $t>0$."
>}}

### Model harmonic motion functions

{{< fillin
  question="A spring attached to the ceiling is pulled $10$ cm down from equilibrium and released. The amplitude decreases by $15\%$ each second. The spring oscillates $18$ times each second. Find a function $D(t)$ that models the distance, in cm, the end of the spring is from equilibrium $t$ seconds after being released."
  answer="10(0.85)^{t}\cos(36\pi t)"
  answerDisplay="$D(t)=10(0.85)^{t}\cos(36\pi t)$"
  hint="The decay factor per second is $1-0.15$, and oscillating $18$ times each second gives $\omega=2\pi(18)$."
>}}

{{< fillin
  question="A spring attached to the ceiling is pulled $17$ cm down from equilibrium and released. After $3$ seconds, the amplitude has decreased to $13$ cm. The spring oscillates $14$ times each second. Find a function $D(t)$ that models the distance, in cm, the end of the spring is from equilibrium $t$ seconds after being released. Round the decay base to four decimal places."
  answer="17(0.9145)^{t}\cos(28\pi t)"
  answerDisplay="$D(t)=17(0.9145)^{t}\cos(28\pi t)$"
  hint="Solve $17r^3=13$ for the per-second decay factor $r$, and use $\omega=2\pi(14)$ for the oscillation rate."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 7.6: Modeling with Trigonometric Functions](https://openstax.org/books/precalculus-2e/pages/7-6-modeling-with-trigonometric-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photograph of a clock face (Figure 1); recreated all twenty-five instructional figures as accessible spec-first SVGs built from exact coordinates rather than pasted images — the five-panel transformation sequence of Example 1 (simplified its dense every-$\tfrac{\pi}{2}$ axis labels to every-$\pi$, since the shape and endpoints carry the instructional content, the same simplification the section 6.3 page already applies to a comparable overlay figure); the amplitude/period graphs of Example 2; the key-point table graphs of the "Finding Equations" discussion and Example 3; the temperature, clock, and tide models of Examples 4–6 (each recreated with its labeled data points and dashed midline, omitting the source's additional dashed guide-line grid connecting every point to both axes as a non-mathematical layout device); the blood pressure graph of Example 7; the three key-point graphs of Example 8; the six damped-harmonic-motion graphs of Examples 9–11, each drawn as a `polylines` trace sampled at high resolution directly from its exact printed formula (recorded here for verification: $10e^{-0.5t}\cos(\pi t)$; $10e^{-0.1t}\cos(\pi t)$; $20e^{-0.05t}\cos\left(\tfrac{\pi}{2}t\right)$; $2e^{-1.5t}\cos(6\pi t)$; $7e^{-10t}\sin(12t)$; $0.3e^{-0.2t}\sin(40\pi t)$) — the sixth (Example 11b's $0.3e^{-0.2t}\sin(40\pi t)$, source Figure 20) is omitted entirely and described in the adjoining prose instead, since at that frequency the un-magnified curve is visually indistinguishable from its envelope and `apfigure` has no primitive for the magnified callout-box inset the source relies on; the spring-oscillation graph of Example 12, similarly a `polylines` trace of $-5e^{-0.357t}\cos\left(\tfrac{2\pi}{3}t\right)+10$; and the two oscillating-cosine graphs of Example 14 ($f(x)=\cos(2\pi x)\cos(16\pi x)$, plus its two cosine bounding curves), the first a `polylines` trace and the second the same trace with the two exact `cosine`-kind bounding curves overlaid. Omitted the "Access these online resources" media link. The March-temperature Try It adds "taking the daily high to occur at 6 PM" and "$B>0$, $t$ in hours" to its question: the source states only the low and the high, which leaves the sign of $A$ (equivalently, whether the high falls at 6 AM or 6 PM) undetermined while its own key assumes $+8$, and the engine grades one keyed function strictly, so the constraint the key already assumes is stated rather than letting an equally valid $-8\sin\left(\tfrac{\pi}{12}t\right)+32$ be marked wrong. Every retained Try It became a real `fillin` component: the two-value "amplitude and period" Try It after Example 2 and the "find $a$, $c$, and the frequency" Try It after Example 9 are each graded as a named-order comma-separated list, since the source itself asks for multiple values from one item; the key-points Try It after Example 3 (originally "graph $y=3\sin(3x)$ using its five key points") was recast asking for the $x$-value of the curve's first maximum, the one key point a fill-in can grade without handing back the whole answer table. The source's own printed solution to the damped-harmonic-motion Try It after Example 9 — "initial displacement $=6$, damping constant $=-6$" for $f(t)=5e^{-6t}\cos(4t)$ — contradicts the module's own model $f(t)=ae^{-ct}\cos(\omega t)$, under which the printed equation reads $a=5$ (not $6$) and, by the sign convention the module uses everywhere else it solves for $c$, $c=6$ (not $-6$); the question here was reworded to name the model explicitly and key the mathematically correct values $a=5$, $c=6$, frequency $\tfrac{2}{\pi}$ (frequency was already correct as printed) rather than ship an answer that would mark a correct learner wrong. Adapted eight selected end-of-section exercises — two amplitude/period reads, two table-to-formula fits, two periodic-behavior word problems, and two damped-spring word problems — into eight interactive fill-ins in a closing Practice block, one pair per objective.</small>
