---
title: Graphs of the Sine and Cosine Functions
description: >-
  Graphing the parent sine and cosine curves from a table of values, defining
  periodic functions, amplitude, midline, and phase shift, and building
  $y=A\sin(Bx-C)+D$ and its cosine analogue through staged transformations —
  adapted from OpenStax Precalculus 2e, Section 6.1.
source_section: "6.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph variations of $y=\sin(x)$ and $y=\cos(x)$
- Use phase shifts of sine and cosine curves
{{< /callout >}}

White light, such as the light from the sun, is not actually white at all. Instead, it is a composition of all the colors of the rainbow in the form of waves. The individual colors can be seen only when white light passes through an optical prism that separates the waves according to their wavelengths to form a rainbow.

Light waves can be represented graphically by the sine function. In the chapter on [Trigonometric Functions](../../05-trigonometric-functions/), we examined trigonometric functions such as the sine function. In this section, we will interpret and create graphs of sine and cosine functions.

## Graphing Sine and Cosine Functions

Recall that the sine and cosine functions relate real number values to the $x$- and $y$-coordinates of a point on the unit circle. So what do they look like on a graph on a coordinate plane? Let's start with the **sine function**. We can create a table of values and use them to sketch a graph. The table below lists some of the values for the sine function on a unit circle.

| $x$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\tfrac{3\pi}{4}$ | $\tfrac{5\pi}{6}$ | $\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $\sin(x)$ | $0$ | $\tfrac12$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt3}{2}$ | $1$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac12$ | $0$ |

Plotting the points from the table and continuing along the $x$-axis gives the shape of the sine function, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = sin(x) from 0 to 2π, marked with the table's nine points from x = 0 to x = π, rising from (0,0) to a maximum of 1 at x = π/2, back to 0 at x = π, continuing to a minimum of −1 at x = 3π/2, and returning to 0 at x = 2π; the curve continues past 2π.","xMin":-0.4,"xMax":6.8,"yMin":-1.9,"yMax":1.8,"grid":false,"tickLabels":false,"unit":45,"curves":[{"kind":"sine"}],"points":[{"at":[0,0]},{"at":[0.5236,0.5]},{"at":[0.7854,0.70711]},{"at":[1.0472,0.86603]},{"at":[1.5708,1]},{"at":[2.0944,0.86603]},{"at":[2.3562,0.70711]},{"at":[2.6180,0.5]},{"at":[3.1416,0]}],"texts":[{"at":[0.7854,-1.35],"text":"π/4"},{"at":[1.5708,-1.35],"text":"π/2"},{"at":[2.3562,-1.35],"text":"3π/4"},{"at":[3.1416,-1.35],"text":"π"},{"at":[3.9270,-1.35],"text":"5π/4"},{"at":[4.7124,-1.35],"text":"3π/2"},{"at":[5.4978,-1.35],"text":"7π/4"},{"at":[6.2832,-1.35],"text":"2π"},{"at":[3.4,1.4],"text":"y = sin(x)"}]}
{{< /apfigure >}}

Notice how the sine values are positive between $0$ and $\pi$, which correspond to the values of the sine function in quadrants I and II on the unit circle, and the sine values are negative between $\pi$ and $2\pi$, which correspond to the values of the sine function in quadrants III and IV on the unit circle, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A unit circle at left with radius segments drawn to the points at 0°, 30°, 45°, 60°, and 90°, each connected by a dashed horizontal guide line to the matching point on the y = sin(x) curve at right, illustrating that the sine value equals the circle point's height.","xMin":-3,"xMax":2,"yMin":-1.6,"yMax":1.9,"grid":false,"tickLabels":false,"unit":65,"curves":[{"kind":"sine","from":0,"to":1.8}],"circles":[{"at":[-1.8,0],"r":1}],"segments":[{"from":[-1.8,0],"to":[-0.8,0]},{"from":[-1.8,0],"to":[-0.9401,0.5]},{"from":[-1.8,0],"to":[-1.0929,0.70711]},{"from":[-1.8,0],"to":[-1.3,0.86603]},{"from":[-1.8,0],"to":[-1.8,1]},{"from":[-0.8,0],"to":[0,0],"dashed":true},{"from":[-0.9401,0.5],"to":[0.5236,0.5],"dashed":true},{"from":[-1.0929,0.70711],"to":[0.7854,0.70711],"dashed":true},{"from":[-1.3,0.86603],"to":[1.0472,0.86603],"dashed":true},{"from":[-1.8,1],"to":[1.5708,1],"dashed":true}],"points":[{"at":[-0.8,0]},{"at":[-0.9401,0.5]},{"at":[-1.0929,0.70711]},{"at":[-1.3,0.86603]},{"at":[-1.8,1]},{"at":[0,0]},{"at":[0.5236,0.5]},{"at":[0.7854,0.70711]},{"at":[1.0472,0.86603]},{"at":[1.5708,1]}]}
{{< /apfigure >}}

Now let's take a similar look at the **cosine function**. Again, we can create a table of values and use them to sketch a graph. The table below lists some of the values for the cosine function on a unit circle.

| $x$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\tfrac{3\pi}{4}$ | $\tfrac{5\pi}{6}$ | $\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $\cos(x)$ | $1$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac12$ | $0$ | $-\tfrac12$ | $-\tfrac{\sqrt2}{2}$ | $-\tfrac{\sqrt3}{2}$ | $-1$ |

As with the sine function, we can plot points to create a graph of the cosine function, as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = cos(x) from 0 to 2π, marked with the table's nine points from x = 0 to x = π, falling from (0,1) to a minimum of −1 at x = π, then rising back to 1 at x = 2π; the curve continues past 2π.","xMin":-0.4,"xMax":6.8,"yMin":-1.6,"yMax":1.8,"grid":false,"tickLabels":false,"unit":45,"curves":[{"kind":"cosine"}],"points":[{"at":[0,1]},{"at":[0.5236,0.86603]},{"at":[0.7854,0.70711]},{"at":[1.0472,0.5]},{"at":[1.5708,0]},{"at":[2.0944,-0.5]},{"at":[2.3562,-0.70711]},{"at":[2.6180,-0.86603]},{"at":[3.1416,-1]}],"texts":[{"at":[0.7854,-1.5],"text":"π/4"},{"at":[1.5708,-1.5],"text":"π/2"},{"at":[2.3562,-1.5],"text":"3π/4"},{"at":[3.1416,-1.5],"text":"π"},{"at":[3.9270,-1.5],"text":"5π/4"},{"at":[4.7124,-1.5],"text":"3π/2"},{"at":[5.4978,-1.5],"text":"7π/4"},{"at":[6.2832,-1.5],"text":"2π"},{"at":[3.4,1.4],"text":"y = cos(x)"}]}
{{< /apfigure >}}

Because we can evaluate the sine and cosine of any real number, both of these functions are defined for all real numbers. By thinking of the sine and cosine values as coordinates of points on a unit circle, it becomes clear that the range of both functions must be the interval $[-1,1]$.

In both graphs, the shape of the graph repeats after $2\pi$, which means the functions are periodic with a period of $2\pi$. A **periodic function** is a function for which a specific **horizontal shift**, $P$, results in a function equal to the original function: $f(x+P)=f(x)$ for all values of $x$ in the domain of $f$. When this occurs, we call the smallest such horizontal shift with $P>0$ the **period** of the function. The figure below shows several periods of the sine and cosine functions.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a). The graph of y = sin(x) from −2π to 3π, with a bracket marking one period spanning 0 to 2π.","xMin":-6.9,"xMax":10.6,"yMin":-1.7,"yMax":2.6,"grid":false,"tickLabels":false,"unit":26,"curves":[{"kind":"sine"}],"segments":[{"from":[0,2.15],"to":[6.2832,2.15],"arrows":true,"label":"1 period"}],"texts":[{"at":[-6.2832,-1.35],"text":"−2π"},{"at":[-3.1416,-1.35],"text":"−π"},{"at":[3.1416,-1.35],"text":"π"},{"at":[6.2832,-1.35],"text":"2π"},{"at":[9.4248,-1.35],"text":"3π"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b). The graph of y = cos(x) from −2π to 3π, with a bracket marking one period spanning 0 to 2π.","xMin":-6.9,"xMax":10.6,"yMin":-1.7,"yMax":2.6,"grid":false,"tickLabels":false,"unit":26,"curves":[{"kind":"cosine"}],"segments":[{"from":[0,2.15],"to":[6.2832,2.15],"arrows":true,"label":"1 period"}],"texts":[{"at":[-6.2832,-1.35],"text":"−2π"},{"at":[-3.1416,-1.35],"text":"−π"},{"at":[3.1416,-1.35],"text":"π"},{"at":[6.2832,-1.35],"text":"2π"},{"at":[9.4248,-1.35],"text":"3π"}]}
{{< /apfigure >}}

Looking again at the sine and cosine functions on a domain centered at the $y$-axis helps reveal symmetries. As we can see below, the **sine function** is symmetric about the origin. Recall from The Other Trigonometric Functions that we determined from the unit circle that the sine function is an odd function because $\sin(-x)=-\sin x$. Now we can clearly see this property from the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = sin(x) from −2π to 2π, symmetric about the origin: rotating the curve 180° about the origin leaves it unchanged.","xMin":-6.9,"xMax":6.9,"yMin":-1.7,"yMax":1.5,"grid":false,"tickLabels":false,"unit":34,"curves":[{"kind":"sine"}],"texts":[{"at":[-6.2832,-1.3],"text":"−2π"},{"at":[-4.7124,-1.3],"text":"−3π/2"},{"at":[-3.1416,-1.3],"text":"−π"},{"at":[-1.5708,-1.3],"text":"−π/2"},{"at":[1.5708,-1.3],"text":"π/2"},{"at":[3.1416,-1.3],"text":"π"},{"at":[4.7124,-1.3],"text":"3π/2"},{"at":[6.2832,-1.3],"text":"2π"}]}
{{< /apfigure >}}

The figure below shows that the cosine function is symmetric about the $y$-axis. Again, we determined that the cosine function is an even function. Now we can see from the graph that $\cos(-x)=\cos x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = cos(x) from −2π to 2π, symmetric about the y-axis: reflecting the curve across the y-axis leaves it unchanged.","xMin":-6.9,"xMax":6.9,"yMin":-1.7,"yMax":1.5,"grid":false,"tickLabels":false,"unit":34,"curves":[{"kind":"cosine"}],"texts":[{"at":[-6.2832,-1.3],"text":"−2π"},{"at":[-4.7124,-1.3],"text":"−3π/2"},{"at":[-3.1416,-1.3],"text":"−π"},{"at":[-1.5708,-1.3],"text":"−π/2"},{"at":[1.5708,-1.3],"text":"π/2"},{"at":[3.1416,-1.3],"text":"π"},{"at":[4.7124,-1.3],"text":"3π/2"},{"at":[6.2832,-1.3],"text":"2π"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Characteristics of Sine and Cosine Functions.** The sine and cosine functions have several distinct characteristics:

  - They are periodic functions with a period of $2\pi$.
  - The domain of each function is $(-\infty,\infty)$ and the range is $[-1,1]$.
  - The graph of $y=\sin x$ is symmetric about the origin, because it is an odd function.
  - The graph of $y=\cos x$ is symmetric about the $y$-axis, because it is an even function.
{{< /callout >}}

## Investigating Sinusoidal Functions

As we can see, sine and cosine functions have a regular period and range. If we watch ocean waves or ripples on a pond, we will see that they resemble the sine or cosine functions. However, they are not necessarily identical. Some are taller or longer than others. A function that has the same general shape as a sine or cosine function is known as a **sinusoidal function**. The general forms of sinusoidal functions are

$$y=A\sin(Bx-C)+D\qquad\text{and}\qquad y=A\cos(Bx-C)+D$$

## Determining the Period of Sinusoidal Functions

Looking at the forms of sinusoidal functions, we can see that they are transformations of the sine and cosine functions. We can use what we know about transformations to determine the period.

In the general formula, $B$ is related to the period by $P=\tfrac{2\pi}{|B|}$. If $|B|>1$, then the period is less than $2\pi$ and the function undergoes a horizontal compression, whereas if $|B|<1$, then the period is greater than $2\pi$ and the function undergoes a horizontal stretch. For example, $f(x)=\sin(x)$, $B=1$, so the period is $2\pi$, which we knew. If $f(x)=\sin(2x)$, then $B=2$, so the period is $\pi$ and the graph is compressed. If $f(x)=\sin\left(\tfrac{x}{2}\right)$, then $B=\tfrac12$, so the period is $4\pi$ and the graph is stretched. The figure below shows how the period is indirectly related to $|B|$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three sine curves on 0 to about 4π: f(x) = sin(2x), the most compressed with period π; f(x) = sin(x), with period 2π; and f(x) = sin(x/2), the most stretched with period 4π.","xMin":-0.3,"xMax":13.6,"yMin":-1.7,"yMax":1.6,"grid":false,"tickLabels":false,"unit":24,"curves":[{"kind":"sine","b":2},{"kind":"sine","b":0.5},{"kind":"sine"}],"texts":[{"at":[0.3,1.3],"text":"f(x) = sin(2x)","anchor":"start"},{"at":[8.7,1.3],"text":"f(x) = sin(x/2)","anchor":"start"},{"at":[6.8,-1.35],"text":"f(x) = sin(x)","anchor":"start"},{"at":[1.5708,-1.35],"text":"π/2"},{"at":[3.1416,-1.35],"text":"π"},{"at":[4.7124,-1.35],"text":"3π/2"},{"at":[12.566,-1.35],"text":"4π"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Period of Sinusoidal Functions.** If we let $C=0$ and $D=0$ in the general form equations of the sine and cosine functions, we obtain the forms

  $$y=A\sin(Bx)\qquad y=A\cos(Bx)$$

  The period is $\tfrac{2\pi}{|B|}$.
{{< /callout >}}

**Example.** Determine the period of the function $f(x)=\sin\left(\tfrac{\pi}{6}x\right)$.

**Solution.** Let's begin by comparing the equation to the general form $y=A\sin(Bx)$.

In the given equation, $B=\tfrac{\pi}{6}$, so the period will be

$$
\begin{array}{lrcl}
& P &=& \tfrac{2\pi}{|B|} \\[4pt]
& &=& \tfrac{2\pi}{\tfrac{\pi}{6}} \\[4pt]
& &=& 2\pi\cdot\tfrac{6}{\pi} \\[4pt]
& &=& 12
\end{array}
$$

{{< fillin
  question="Determine the period of the function $g(x)=\cos\left(\tfrac{x}{3}\right)$."
  answer="6\pi"
  answerForm="radians"
  answerDisplay="$6\pi$"
  hint="Compare to $y=A\cos(Bx)$ and compute $P=\tfrac{2\pi}{|B|}$."
>}}

## Determining Amplitude

Returning to the general formula for a sinusoidal function, we have analyzed how the variable $B$ relates to the period. Now let's turn to the variable $A$ so we can analyze how it is related to the **amplitude**, or greatest distance from rest. $A$ represents the vertical stretch factor, and its absolute value $|A|$ is the amplitude. The local maxima will be a distance $|A|$ above the horizontal **midline** of the graph, which is the line $y=D$; because $D=0$ in this case, the midline is the $x$-axis. The local minima will be the same distance below the midline. If $|A|>1$, the function is stretched. For example, the amplitude of $f(x)=4\sin x$ is twice the amplitude of $f(x)=2\sin x$. If $|A|<1$, the function is compressed. The figure below compares several sine functions with different amplitudes.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Four sine curves of increasing amplitude over roughly −6π to 3.5π: sin(x) with amplitude 1, 2sin(x) with amplitude 2, 3sin(x) with amplitude 3, and 4sin(x) with amplitude 4.","xMin":-19.3,"xMax":23,"yMin":-5.4,"yMax":5.1,"grid":false,"tickLabels":false,"unit":13,"curves":[{"kind":"sine","to":11.5},{"kind":"sine","a":2,"to":11.5},{"kind":"sine","a":3,"to":11.5},{"kind":"sine","a":4,"to":11.5}],"texts":[{"at":[13.0,4.6],"text":"f(x) = 4sin(x)","anchor":"start"},{"at":[13.0,3.0],"text":"f(x) = 3sin(x)","anchor":"start"},{"at":[13.0,1.4],"text":"f(x) = 2sin(x)","anchor":"start"},{"at":[13.0,-1.1],"text":"f(x) = 1sin(x)","anchor":"start"},{"at":[-18.85,-4.95],"text":"−6π"},{"at":[-12.566,-4.95],"text":"−4π"},{"at":[-6.2832,-4.95],"text":"−2π"},{"at":[6.2832,-4.95],"text":"2π"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Amplitude of Sinusoidal Functions.** If we let $C=0$ and $D=0$ in the general form equations of the sine and cosine functions, we obtain the forms

  $$y=A\sin(Bx)\qquad y=A\cos(Bx)$$

  The **amplitude** is $|A|$, which is the vertical height from the midline. In addition, $|A|=\text{amplitude}=\tfrac12\lvert\text{maximum}-\text{minimum}\rvert$.
{{< /callout >}}

**Example.** What is the amplitude of the sinusoidal function $f(x)=-4\sin(x)$? Is the function stretched or compressed vertically?

**Solution.** Let's begin by comparing the function to the simplified form $y=A\sin(Bx)$.

In the given function, $A=-4$, so the amplitude is $|A|=|-4|=4$. The function is stretched.

**Analysis.** The negative value of $A$ results in a reflection across the $x$-axis of the sine function, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = −4sin(x) from −2π to 2π, amplitude 4, with local minima at (−3π/2, −4) and (π/2, −4) and local maxima at (−π/2, 4) and (3π/2, 4).","xMin":-6.9,"xMax":6.9,"yMin":-4.9,"yMax":4.6,"grid":false,"tickLabels":false,"unit":34,"curves":[{"kind":"sine","a":-4}],"texts":[{"at":[-6.2832,-4.75],"text":"−2π"},{"at":[-3.1416,-4.75],"text":"−π"},{"at":[3.1416,-4.75],"text":"π"},{"at":[6.2832,-4.75],"text":"2π"}]}
{{< /apfigure >}}

{{< fillin
  question="What is the amplitude of the sinusoidal function $f(x)=\tfrac12\sin(x)$, entered as a decimal? Is the function stretched or compressed vertically?"
  answer="0.5"
  answerForm="decimal"
  answerDisplay="$0.5$"
  hint="The amplitude is $|A|$; compare $|A|$ against $1$ to decide stretched or compressed."
>}}

{{< multiplechoice
  question="Is the sinusoidal function $f(x)=\tfrac12\sin(x)$ stretched or compressed vertically, compared to $y=\sin(x)$?"
  answer="compressed"
  hint="A factor with $|A|<1$ shrinks the graph toward the midline."
>}}
stretched
compressed
{{< /multiplechoice >}}

## Analyzing Graphs of Variations of y = sin x and y = cos x

Now that we understand how $A$ and $B$ relate to the general form equation for the sine and cosine functions, we will explore the variables $C$ and $D$. Recall the general form:

$$
\begin{array}{l}
y=A\sin(Bx-C)+D\quad\text{and}\quad y=A\cos(Bx-C)+D \\[4pt]
\text{or} \\[4pt]
y=A\sin\left(B\left(x-\tfrac{C}{B}\right)\right)+D\quad\text{and}\quad y=A\cos\left(B\left(x-\tfrac{C}{B}\right)\right)+D
\end{array}
$$

The value $\tfrac{C}{B}$ for a sinusoidal function is called the **phase shift**, or the horizontal displacement of the basic sine or cosine function. If $C>0$, the graph shifts to the right. If $C<0$, the graph shifts to the left. The greater the value of $|C|$, the more the graph is shifted. The figure below shows that the graph of $f(x)=\sin(x-\pi)$ shifts to the right by $\pi$ units, which is more than we see in the graph of $f(x)=\sin\left(x-\tfrac{\pi}{4}\right)$, which shifts to the right by $\tfrac{\pi}{4}$ units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three sine curves over −π to 3π: f(x) = sin(x); f(x) = sin(x − π/4), shifted right by π/4; and f(x) = sin(x − π), shifted right by π.","xMin":-3.6,"xMax":10.6,"yMin":-2.5,"yMax":2.2,"grid":false,"tickLabels":false,"unit":22,"curves":[{"kind":"sine"},{"kind":"sine","h":0.7854},{"kind":"sine","h":3.1416}],"texts":[{"at":[-3.1416,-1.35],"text":"−π"},{"at":[-1.5708,-1.35],"text":"−π/2"},{"at":[1.5708,-1.35],"text":"π/2"},{"at":[3.1416,-1.35],"text":"π"},{"at":[4.7124,-1.35],"text":"3π/2"},{"at":[6.2832,-1.35],"text":"2π"},{"at":[7.854,-1.35],"text":"5π/2"},{"at":[9.4248,-1.35],"text":"3π"},{"at":[-3.4,1.9],"text":"f(x) = sin(x)","anchor":"start"},{"at":[3.6,1.9],"text":"f(x) = sin(x−π/4)","anchor":"start"},{"at":[6.9,-2.15],"text":"f(x) = sin(x−π)","anchor":"start"}]}
{{< /apfigure >}}

While $C$ relates to the horizontal shift, $D$ indicates the vertical shift from the midline in the general formula for a sinusoidal function, as in the figure below. The function $y=\cos(x)+D$ has its midline at $y=D$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A generic sinusoid y = A sin(x) + D, oscillating symmetrically above and below a dashed horizontal midline y = D, which sits a distance D above the x-axis.","xMin":-0.3,"xMax":9.6,"yMin":-0.6,"yMax":2.6,"grid":false,"tickLabels":false,"unit":30,"curves":[{"kind":"sine","k":1}],"lines":[{"y":1,"dashed":true,"arrows":false,"label":"y = D"}],"segments":[{"from":[-0.15,0],"to":[-0.15,1],"arrows":true}],"texts":[{"at":[-0.55,0.5],"text":"D"},{"at":[5.3,1.32],"text":"Midline"},{"at":[3.1416,-0.4],"text":"π"},{"at":[6.2832,-0.4],"text":"2π"},{"at":[9.4248,-0.4],"text":"3π"}]}
{{< /apfigure >}}

Any value of $D$ other than zero shifts the graph up or down. The figure below compares $f(x)=\sin(x)$ with $f(x)=\sin(x)+2$, which is shifted $2$ units up on a graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two sine curves over −π to 3π: f(x) = sin(x), oscillating between −1 and 1, and f(x) = sin(x) + 2, the same curve shifted up 2 units, oscillating between 1 and 3.","xMin":-3.6,"xMax":10.6,"yMin":-2.3,"yMax":4.0,"grid":false,"tickLabels":false,"unit":22,"curves":[{"kind":"sine"},{"kind":"sine","k":2}],"texts":[{"at":[-3.1416,-1.35],"text":"−π"},{"at":[-1.5708,-1.35],"text":"−π/2"},{"at":[1.5708,-1.35],"text":"π/2"},{"at":[3.1416,-1.35],"text":"π"},{"at":[4.7124,-1.35],"text":"3π/2"},{"at":[6.2832,-1.35],"text":"2π"},{"at":[7.854,-1.35],"text":"5π/2"},{"at":[9.4248,-1.35],"text":"3π"},{"at":[-3.4,3.7],"text":"y = sin(x) + 2","anchor":"start"},{"at":[6.4,-2.1],"text":"y = sin(x)","anchor":"start"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Variations of Sine and Cosine Functions.** Given an equation in the form $f(x)=A\sin(Bx-C)+D$ or $f(x)=A\cos(Bx-C)+D$, $\tfrac{C}{B}$ is the **phase shift** and $D$ is the **vertical shift**.
{{< /callout >}}

**Example.** Determine the direction and magnitude of the phase shift for $f(x)=\sin\left(x+\tfrac{\pi}{6}\right)-2$.

**Solution.** Let's begin by comparing the equation to the general form $y=A\sin(Bx-C)+D$.

In the given equation, notice that $B=1$ and $C=-\tfrac{\pi}{6}$. So the phase shift is

$$
\begin{array}{lrcl}
& \tfrac{C}{B} &=& \tfrac{-\tfrac{\pi}{6}}{1} \\[4pt]
& &=& -\tfrac{\pi}{6}
\end{array}
$$

or $\tfrac{\pi}{6}$ units to the left.

**Analysis.** We must pay attention to the sign in the equation for the general form of a sinusoidal function. The equation shows a minus sign before $C$. Therefore $f(x)=\sin\left(x+\tfrac{\pi}{6}\right)-2$ can be rewritten as $f(x)=\sin\left(x-\left(-\tfrac{\pi}{6}\right)\right)-2$. If the value of $C$ is negative, the shift is to the left.

{{< fillin
  question="Determine the phase shift for $f(x)=3\cos\left(x-\tfrac{\pi}{2}\right)$ as a signed value (positive = right, negative = left)."
  answer="\pi/2"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{2}$"
  hint="Compare to $y=A\cos(Bx-C)+D$ and compute $\tfrac{C}{B}$."
>}}

**Example.** Determine the direction and magnitude of the vertical shift for $f(x)=\cos(x)-3$.

**Solution.** Let's begin by comparing the equation to the general form $y=A\cos(Bx-C)+D$.

In the given equation, $D=-3$ so the shift is $3$ units downward.

{{< fillin
  question="What is the midline of $f(x)=3\sin(x)+2$?"
  answer="y=2"
  answerDisplay="$y=2$"
  hint="The midline is $y=D$; read $D$ directly from the equation."
>}}

{{< callout type="info" >}}
  **How to:** given a sinusoidal function in the form $f(x)=A\sin(Bx-C)+D$, identify the midline, amplitude, period, and phase shift.

  1. Determine the amplitude as $|A|$.
  2. Determine the period as $P=\tfrac{2\pi}{|B|}$.
  3. Determine the phase shift as $\tfrac{C}{B}$.
  4. Determine the midline as $y=D$.
{{< /callout >}}

**Example.** Determine the midline, amplitude, period, and phase shift of the function $y=3\sin(2x)+1$.

**Solution.** Let's begin by comparing the equation to the general form $y=A\sin(Bx-C)+D$.

$A=3$, so the amplitude is $|A|=3$.

Next, $B=2$, so the period is $P=\tfrac{2\pi}{|B|}=\tfrac{2\pi}{2}=\pi$.

There is no added constant inside the parentheses, so $C=0$ and the phase shift is $\tfrac{C}{B}=\tfrac{0}{2}=0$.

Finally, $D=1$, so the midline is $y=1$.

**Analysis.** Inspecting the graph, we can determine that the period is $\pi$, the midline is $y=1$, and the amplitude is $3$, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 3sin(2x) + 1 over one period, with the amplitude 3 marked from the midline to the peak, the midline y = 1 marked with a dashed line, and the period π marked below.","xMin":-0.5,"xMax":3.5,"yMin":-3.0,"yMax":4.8,"grid":false,"tickLabels":false,"unit":80,"curves":[{"kind":"sine","a":3,"b":2,"k":1}],"lines":[{"y":1,"dashed":true,"arrows":false}],"segments":[{"from":[-0.3,1],"to":[-0.3,4],"arrows":true,"label":"Amplitude = 3"},{"from":[0,-2.3],"to":[3.1416,-2.3],"arrows":true,"label":"Period = π"}],"texts":[{"at":[1.5708,-2.85],"text":"π/2"},{"at":[3.1416,-2.85],"text":"π"},{"at":[2.55,1.35],"text":"Midline"}]}
{{< /apfigure >}}

For the amplitude, period, and phase shift of $y=\tfrac12\cos\left(\tfrac{x}{3}-\tfrac{\pi}{3}\right)$ (its midline is $y=0$):

{{< fillin
  question="What is the amplitude of $y=\tfrac12\cos\left(\tfrac{x}{3}-\tfrac{\pi}{3}\right)$, entered as a decimal?"
  answer="0.5"
  answerForm="decimal"
  answerDisplay="$0.5$"
  hint="The amplitude is $|A|$."
>}}

{{< fillin
  question="What is the period of $y=\tfrac12\cos\left(\tfrac{x}{3}-\tfrac{\pi}{3}\right)$?"
  answer="6\pi"
  answerForm="radians"
  answerDisplay="$6\pi$"
  hint="Compute $P=\tfrac{2\pi}{|B|}$ with $B=\tfrac13$."
>}}

{{< fillin
  question="Determine the phase shift for $y=\tfrac12\cos\left(\tfrac{x}{3}-\tfrac{\pi}{3}\right)$ as a signed value (positive = right, negative = left)."
  answer="\pi"
  answerForm="radians"
  answerDisplay="$\pi$"
  hint="Compute $\tfrac{C}{B}$ with $C=\tfrac{\pi}{3}$ and $B=\tfrac13$."
>}}

**Example.** Determine the formula for the cosine function in the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A periodic curve oscillating between a maximum of 1 and a minimum of 0, completing four full cycles across the interval from −4π to 4π, with tick marks at −4π, −2π, 2π, and 4π.","xMin":-14.2,"xMax":14.2,"yMin":-0.8,"yMax":1.3,"grid":false,"tickLabels":false,"unit":11,"curves":[{"kind":"cosine","a":-0.5,"k":0.5}],"texts":[{"at":[-12.566,-0.65],"text":"−4π"},{"at":[-6.2832,-0.65],"text":"−2π"},{"at":[6.2832,-0.65],"text":"2π"},{"at":[12.566,-0.65],"text":"4π"}],"yLabel":"g(x)"}
{{< /apfigure >}}

**Solution.** To determine the equation, we need to identify each value in the general form of a sinusoidal function.

$$y=A\sin(Bx-C)+D\qquad y=A\cos(Bx-C)+D$$

The graph could represent either a sine or a cosine function that is shifted and/or reflected. When $x=0$, the graph has an extreme point, $(0,0)$. Since the cosine function has an extreme point for $x=0$, let us write our equation in terms of a cosine function.

Let's start with the midline. We can see that the graph rises and falls an equal distance above and below $y=0.5$. This value, which is the midline, is $D$ in the equation, so $D=0.5$.

The greatest distance above and below the midline is the amplitude. The maxima are $0.5$ units above the midline and the minima are $0.5$ units below the midline. So $|A|=0.5$. Another way we could have determined the amplitude is by recognizing that the difference between the height of local maxima and minima is $1$, so $|A|=\tfrac12=0.5$. Also, the graph is reflected about the $x$-axis so that $A=-0.5$.

The graph is not horizontally stretched or compressed, so $B=1$; and the graph is not shifted horizontally, so $C=0$.

Putting this all together,

$$g(x)=-0.5\cos(x)+0.5$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A periodic curve oscillating between a maximum of 3 and a minimum of 1, completing four full cycles across the interval from −4π to 4π, with the y-axis labelled at 1, 2, and 3 and the x-axis labelled at −4π, −2π, 2π, and 4π.","xMin":-14.2,"xMax":14.2,"yMin":-0.9,"yMax":3.4,"grid":false,"tickLabels":false,"unit":14,"curves":[{"kind":"sine","k":2}],"texts":[{"at":[-12.566,-0.72],"text":"−4π"},{"at":[-6.2832,-0.72],"text":"−2π"},{"at":[6.2832,-0.72],"text":"2π"},{"at":[12.3,-0.72],"text":"4π"},{"at":[-1,1],"text":"1","anchor":"end","fontSize":11},{"at":[-1,2],"text":"2","anchor":"end","fontSize":11},{"at":[-1,3],"text":"3","anchor":"end","fontSize":11}],"yLabel":"f(x)"}
{{< /apfigure >}}

{{< fillin
  question="Determine the formula for the sine function shown above."
  answer="\sin(x)+2"
  answerDisplay="$f(x)=\sin(x)+2$"
  hint="Read the midline from the graph's range, then the amplitude is the distance from midline to peak."
>}}

**Example.** Determine the equation for the sinusoidal function in the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A periodic curve oscillating between a maximum of 1 and a minimum of −5, reaching a maximum at x = 1 and x = 7, and a minimum at x = −2 and x = 4.","xMin":-5.3,"xMax":7.3,"yMin":-5.5,"yMax":1.5,"grid":false,"tickLabels":true,"unit":42,"curves":[{"kind":"cosine","a":3,"b":1.0471975511965976,"h":1,"k":-2}]}
{{< /apfigure >}}

**Solution.** With the highest value at $1$ and the lowest value at $-5$, the midline will be halfway between at $-2$. So $D=-2$.

The distance from the midline to the highest or lowest value gives an amplitude of $|A|=3$.

The period of the graph is $6$, which can be measured from the peak at $x=1$ to the next peak at $x=7$, or from the distance between the lowest points. Therefore, $P=\tfrac{2\pi}{|B|}=6$. Using the positive value for $B$, we find that

$$B=\tfrac{2\pi}{P}=\tfrac{2\pi}{6}=\tfrac{\pi}{3}$$

So far, our equation is either $y=3\sin\left(\tfrac{\pi}{3}x-C\right)-2$ or $y=3\cos\left(\tfrac{\pi}{3}x-C\right)-2$. For the shape and shift, we have more than one option. We could write this as any one of the following:

- a cosine shifted to the right
- a negative cosine shifted to the left
- a sine shifted to the left
- a negative sine shifted to the right

Choosing to use the cosine function, we observe that the peak, which would normally be at $x=0$, is at $x=1$, and given the horizontal compression factor of $\tfrac{\pi}{3}$, we get $C=1\cdot\tfrac{\pi}{3}=\tfrac{\pi}{3}$.

While any of these would be correct, the cosine shifts are easier to work with than the sine shifts in this case because they involve integer values. So our function becomes

$$y=3\cos\left(\tfrac{\pi}{3}x-\tfrac{\pi}{3}\right)-2\qquad\text{or}\qquad y=-3\cos\left(\tfrac{\pi}{3}x+\tfrac{2\pi}{3}\right)-2$$

Again, these functions are equivalent, so both yield the same graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A periodic curve oscillating between a maximum of 8 and a minimum of 0, reaching a maximum at x = −6.5 and x = 3.5, and a minimum at x = −1.5 and x = 8.5.","xMin":-9.3,"xMax":11.3,"yMin":-0.5,"yMax":8.5,"grid":false,"tickLabels":true,"unit":32,"curves":[{"kind":"sine","a":4,"b":0.6283185307179586,"h":1,"k":4}]}
{{< /apfigure >}}

{{< fillin
  question="Write a formula for the function graphed above."
  answer="4\sin(\tfrac{\pi}{5}x-\tfrac{\pi}{5})+4"
  answerDisplay="$y=4\sin\left(\tfrac{\pi}{5}x-\tfrac{\pi}{5}\right)+4$"
  hint="Find the midline and amplitude from the maximum and minimum, then find the period from one full cycle to locate $B$, and finally the horizontal shift of the first peak to locate $C$."
>}}

## Graphing Variations of y = sin x and y = cos x

Throughout this section, we have learned about types of variations of sine and cosine functions and used that information to write equations from graphs. Now we can use the same information to create graphs from equations.

Instead of focusing on the general form equations

$$y=A\sin(Bx-C)+D\qquad\text{and}\qquad y=A\cos(Bx-C)+D,$$

we will let $C=0$ and $D=0$ and work with a simplified form of the equations in the following examples.

{{< callout type="info" >}}
  **How to:** given the function $y=A\sin(Bx)$, sketch its graph.

  1. Identify the amplitude, $|A|$.
  2. Identify the period, $P=\tfrac{2\pi}{|B|}$.
  3. Start at the origin, with the function increasing to the right if $A$ is positive or decreasing if $A$ is negative.
  4. At $x=\tfrac{\pi}{2|B|}$ there is a local maximum for $A>0$ or a minimum for $A<0$, with $y=A$.
  5. The curve returns to the $x$-axis at $x=\tfrac{\pi}{|B|}$.
  6. There is a local minimum for $A>0$ (maximum for $A<0$) at $x=\tfrac{3\pi}{2|B|}$ with $y=-A$.
  7. The curve returns again to the $x$-axis at $x=\tfrac{2\pi}{|B|}$.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=-2\sin\left(\tfrac{\pi x}{2}\right)$.

**Solution.** Let's begin by comparing the equation to the form $y=A\sin(Bx)$.

**Step 1.** We can see from the equation that $A=-2$, so the amplitude is $2$.

$$|A|=2$$

**Step 2.** The equation shows that $B=\tfrac{\pi}{2}$, so the period is

$$
\begin{array}{lrcl}
& P &=& \tfrac{2\pi}{\tfrac{\pi}{2}} \\[4pt]
& &=& 2\pi\cdot\tfrac{2}{\pi} \\[4pt]
& &=& 4
\end{array}
$$

**Step 3.** Because $A$ is negative, the graph descends as we move to the right of the origin.

**Steps 4–7.** The $x$-intercepts are at the beginning of one period, $x=0$, the horizontal midpoints are at $x=2$ and at the end of one period at $x=4$.

The quarter points include the minimum at $x=1$ and the maximum at $x=3$. A local minimum will occur $2$ units below the midline, at $x=1$, and a local maximum will occur at $2$ units above the midline, at $x=3$. The figure below shows the graph of the function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = f(x) = −2sin(πx/2) on a labeled grid from −2 to 6, with a minimum of −2 at x = 1, a zero at x = 2, and a maximum of 2 at x = 3.","xMin":-2.3,"xMax":6.3,"yMin":-3.3,"yMax":3.3,"grid":true,"tickLabels":true,"unit":42,"curves":[{"kind":"sine","a":-2,"b":1.5707963267948966}],"points":[{"at":[0,0]},{"at":[1,-2]},{"at":[2,0]},{"at":[3,2]},{"at":[4,0]}],"texts":[{"at":[0.3,2.7],"text":"y = f(x) = −2sin(πx/2)","anchor":"start"}]}
{{< /apfigure >}}

For the graph of $g(x)=-0.8\cos(2x)$, whose midline is $y=0$ and phase shift is $0$:

{{< fillin
  question="What is the amplitude of $g(x)=-0.8\cos(2x)$, entered as a decimal?"
  answer="0.8"
  answerForm="decimal"
  answerDisplay="$0.8$"
  hint="The amplitude is $|A|$."
>}}

{{< fillin
  question="What is the period of $g(x)=-0.8\cos(2x)$?"
  answer="\pi"
  answerForm="radians"
  answerDisplay="$\pi$"
  hint="Compute $P=\tfrac{2\pi}{|B|}$ with $B=2$."
>}}

{{< callout type="info" >}}
  **How to:** given a sinusoidal function with a phase shift and a vertical shift, sketch its graph.

  1. Express the function in the general form $y=A\sin(Bx-C)+D$ or $y=A\cos(Bx-C)+D$.
  2. Identify the amplitude, $|A|$.
  3. Identify the period, $P=\tfrac{2\pi}{|B|}$.
  4. Identify the phase shift, $\tfrac{C}{B}$.
  5. Draw the graph of $f(x)=A\sin(Bx)$ shifted to the right or left by $\tfrac{C}{B}$ and up or down by $D$.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=3\sin\left(\tfrac{\pi}{4}x-\tfrac{\pi}{4}\right)$.

**Solution.** **Step 1.** The function is already written in general form: $f(x)=3\sin\left(\tfrac{\pi}{4}x-\tfrac{\pi}{4}\right)$. This graph will have the shape of a sine function, starting at the midline and increasing to the right.

**Step 2.** $|A|=|3|=3$. The amplitude is $3$.

**Step 3.** Since $|B|=\left|\tfrac{\pi}{4}\right|=\tfrac{\pi}{4}$, we determine the period as follows.

$$P=\tfrac{2\pi}{|B|}=\tfrac{2\pi}{\tfrac{\pi}{4}}=2\pi\cdot\tfrac{4}{\pi}=8$$

The period is $8$.

**Step 4.** Since $C=\tfrac{\pi}{4}$, the phase shift is

$$\tfrac{C}{B}=\tfrac{\tfrac{\pi}{4}}{\tfrac{\pi}{4}}=1.$$

The phase shift is $1$ unit.

**Step 5.** The figure below shows the graph of the function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontally compressed, vertically stretched, and horizontally shifted sinusoid: the graph of f(x) = 3sin(πx/4 − π/4) on a labeled grid from −2 to 10, amplitude 3, starting at the midline near x = 1 and increasing.","xMin":-2.3,"xMax":10.3,"yMin":-4.3,"yMax":4.3,"grid":false,"tickLabels":true,"unit":32,"curves":[{"kind":"sine","a":3,"b":0.7853981633974483,"h":1}]}
{{< /apfigure >}}

For $g(x)=-2\cos\left(\tfrac{\pi}{3}x+\tfrac{\pi}{6}\right)$, whose midline is $y=0$:

{{< fillin
  question="What is the amplitude of $g(x)=-2\cos\left(\tfrac{\pi}{3}x+\tfrac{\pi}{6}\right)$?"
  answer="2"
  answerDisplay="$2$"
  hint="The amplitude is $|A|$; note the printed coefficient here is $-2$, so its absolute value is the amplitude."
>}}

{{< fillin
  question="What is the period of $g(x)=-2\cos\left(\tfrac{\pi}{3}x+\tfrac{\pi}{6}\right)$?"
  answer="6"
  answerDisplay="$6$"
  hint="Compute $P=\tfrac{2\pi}{|B|}$ with $B=\tfrac{\pi}{3}$."
>}}

{{< fillin
  question="Determine the phase shift for $g(x)=-2\cos\left(\tfrac{\pi}{3}x+\tfrac{\pi}{6}\right)$ as a signed value (positive = right, negative = left)."
  answer="-0.5"
  answerForm="decimal"
  answerDisplay="$-\tfrac12$"
  hint="Rewrite $+\tfrac{\pi}{6}$ as $-\left(-\tfrac{\pi}{6}\right)$ so $C=-\tfrac{\pi}{6}$, then compute $\tfrac{C}{B}$."
>}}

**Example.** Given $y=-2\cos\left(\tfrac{\pi}{2}x+\pi\right)+3$, determine the amplitude, period, phase shift, and vertical shift. Then graph the function.

**Solution.** Begin by comparing the equation to the general form and use the steps outlined above.

$$y=A\cos(Bx-C)+D$$

**Step 1.** The function is already written in general form.

**Step 2.** Since $A=-2$, the amplitude is $|A|=2$.

**Step 3.** $|B|=\tfrac{\pi}{2}$, so the period is $P=\tfrac{2\pi}{|B|}=\tfrac{2\pi}{\tfrac{\pi}{2}}=2\pi\cdot\tfrac{2}{\pi}=4$. The period is $4$.

**Step 4.** $C=-\pi$, so we calculate the phase shift as $\tfrac{C}{B}=\tfrac{-\pi}{\tfrac{\pi}{2}}=-\pi\cdot\tfrac{2}{\pi}=-2$. The phase shift is $-2$.

**Step 5.** $D=3$, so the midline is $y=3$, and the vertical shift is up $3$.

Since $A$ is negative, the graph of the cosine function has been reflected about the $x$-axis.

The figure below shows one cycle of the graph of the function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"One cycle of y = −2cos(πx/2 + π) + 3 on a labeled grid from −1 to 9, with amplitude 2 marked from the midline to a peak at x = 0, the midline y = 3 marked with a dashed line, and the period 4 marked between two troughs.","xMin":-1.3,"xMax":9.3,"yMin":-1.6,"yMax":7.6,"grid":false,"tickLabels":true,"unit":42,"curves":[{"kind":"cosine","a":-2,"b":1.5707963267948966,"h":-2,"k":3}],"lines":[{"y":3,"dashed":true,"arrows":false,"label":"Midline"}],"segments":[{"from":[4,3],"to":[4,5],"arrows":true},{"from":[2,-1.0],"to":[6,-1.0],"arrows":true}],"texts":[{"at":[4,5.9],"text":"Amplitude = 2"},{"at":[4,-1.35],"text":"Period = 4"}]}
{{< /apfigure >}}

## Using Transformations of Sine and Cosine Functions

We can use the transformations of sine and cosine functions in numerous applications. As mentioned at the beginning of the chapter, **circular motion** can be modeled using either the sine or cosine function.

**Example.** A point rotates around a circle of radius $3$ centered at the origin. Sketch a graph of the $y$-coordinate of the point as a function of the angle of rotation.

**Solution.** Recall that, for a point on a circle of radius $r$, the $y$-coordinate of the point is $y=r\sin(x)$, so in this case, we get the equation $y(x)=3\sin(x)$. The constant $3$ causes a vertical stretch of the $y$-values of the function by a factor of $3$, which we can see in the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 3sin(x) from −π/2 to 4π, amplitude 3, period 2π, oscillating between −3 and 3.","xMin":-2,"xMax":13.7,"yMin":-4.6,"yMax":4.3,"grid":false,"tickLabels":false,"unit":22,"curves":[{"kind":"sine","a":3}],"texts":[{"at":[-1.5708,-3.75],"text":"−π/2"},{"at":[1.5708,-3.75],"text":"π/2"},{"at":[3.1416,-3.75],"text":"π"},{"at":[4.7124,-3.75],"text":"3π/2"},{"at":[6.2832,-3.75],"text":"2π"},{"at":[7.854,-3.75],"text":"5π/2"},{"at":[9.4248,-3.75],"text":"3π"},{"at":[11.0,-3.75],"text":"7π/2"},{"at":[12.566,-3.75],"text":"4π"}]}
{{< /apfigure >}}

**Analysis.** Notice that the period of the function is still $2\pi$; as we travel around the circle, we return to the point $(3,0)$ for $x=2\pi,4\pi,6\pi,\dots$ Because the outputs of the graph will now oscillate between $-3$ and $3$, the amplitude of the sine wave is $3$.

{{< fillin
  question="What is the range of $f(x)=7\cos(x)$? Write your answer in interval notation."
  answer="[-7,7]"
  answerDisplay="$[-7,7]$"
  hint="The outputs oscillate a distance $|A|$ above and below the midline $y=0$."
>}}

**Example.** A circle with radius $3$ ft is mounted with its center $4$ ft off the ground. The point closest to the ground is labeled $P$, as shown below. Sketch a graph of the height above the ground of the point $P$ as the circle is rotated; then find a function that gives the height in terms of the angle of rotation.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A circle of radius 3 feet, its center mounted 4 feet above a horizontal ground line, with the point on the circle closest to the ground labeled P.","circles":[{"at":[0,4],"r":3,"radius":{"angle":50,"label":"3 ft"}}],"segments":[{"from":[-5,0],"to":[5,0]},{"from":[-4.3,0],"to":[-4.3,4],"label":"4 ft","labelSide":"left"}],"points":[{"at":[0,1],"label":"P"}]}
{{< /apfigure >}}

**Solution.** Sketching the height, we note that it will start $1$ ft above the ground, then increase up to $7$ ft above the ground, and continue to oscillate $3$ ft above and below the center value of $4$ ft, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of h(x) = −3cos(x) + 4 from 0 to 4π, oscillating between 1 and 7, with a dashed midline at y = 4.","xMin":-0.3,"xMax":13.7,"yMin":-0.6,"yMax":7.5,"grid":false,"tickLabels":"y","yTickStep":0.5,"unit":22,"curves":[{"kind":"cosine","a":-3,"k":4}],"lines":[{"y":4,"dashed":true,"arrows":false}],"texts":[{"at":[1.5708,-0.35],"text":"π/2"},{"at":[3.1416,-0.35],"text":"π"},{"at":[4.7124,-0.35],"text":"3π/2"},{"at":[6.2832,-0.35],"text":"2π"},{"at":[7.854,-0.35],"text":"5π/2"},{"at":[9.4248,-0.35],"text":"3π"},{"at":[11.0,-0.35],"text":"7π/2"},{"at":[12.566,-0.35],"text":"4π"}],"yLabel":"h(x)"}
{{< /apfigure >}}

Although we could use a transformation of either the sine or cosine function, we start by looking for characteristics that would make one function easier to use than the other. Let's use a cosine function because it starts at the highest or lowest value, while a sine function starts at the middle value. A standard cosine starts at the highest value, and this graph starts at the lowest value, so we need to incorporate a vertical reflection.

Second, we see that the graph oscillates $3$ above and below the center, while a basic cosine has an amplitude of $1$, so this graph has been vertically stretched by $3$, as in the last example.

Finally, to move the center of the circle up to a height of $4$, the graph has been vertically shifted up by $4$. Putting these transformations together, we find that

$$y=-3\cos(x)+4$$

{{< fillin
  question="A weight is attached to a spring that is then hung from a board, as shown below. As the spring oscillates up and down, the position $y$ of the weight relative to the board ranges from $-1$ in. (at time $x=0$) to $-7$ in. (at time $x=\pi$) below the board. Assuming $y$ is given as a sinusoidal function of $x$, find a cosine function that gives the position $y$ in terms of $x$."
  answer="3\cos(x)-4"
  answerDisplay="$y=3\cos(x)-4$"
  hint="The midline is halfway between $-1$ and $-7$; the amplitude is the distance from the midline to either extreme, and $y$ starts at its highest value at $x=0$."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A weight hanging below a board on a spring, with the distance y measured from the board down to the weight.","polygons":[{"points":[[-2,4],[2,4],[2,4.5],[-2,4.5]]}],"segments":[{"from":[0,4],"to":[0,1.3],"label":"y","labelSide":"right"}],"circles":[{"at":[0,1],"r":0.3}]}
{{< /apfigure >}}

**Example.** The London Eye is a huge Ferris wheel with a diameter of $135$ meters ($443$ feet). It completes one rotation every $30$ minutes. Riders board from a platform $2$ meters above the ground. Express a rider's height above ground as a function of time in minutes.

**Solution.** With a diameter of $135$ m, the wheel has a radius of $67.5$ m. The height will oscillate with amplitude $67.5$ m above and below the center.

Passengers board $2$ m above ground level, so the center of the wheel must be located $67.5+2=69.5$ m above ground level. The midline of the oscillation will be at $69.5$ m.

The wheel takes $30$ minutes to complete $1$ revolution, so the height will oscillate with a period of $30$ minutes.

Lastly, because the rider boards at the lowest point, the height will start at the smallest value and increase, following the shape of a vertically reflected cosine curve.

- Amplitude: $67.5$, so $A=67.5$
- Midline: $69.5$, so $D=69.5$
- Period: $30$, so $B=\tfrac{2\pi}{30}=\tfrac{\pi}{15}$
- Shape: $-\cos(t)$

An equation for the rider's height would be

$$y=-67.5\cos\left(\tfrac{\pi}{15}t\right)+69.5$$

where $t$ is in minutes and $y$ is measured in meters.

## Key equations

| Sinusoidal functions | $f(x)=A\sin(Bx-C)+D$ |
| :--- | :--- |
|  | $f(x)=A\cos(Bx-C)+D$ |

## Key concepts

- Periodic functions repeat after a given value. The smallest such value is the period. The basic sine and cosine functions have a period of $2\pi$.
- The function $\sin x$ is odd, so its graph is symmetric about the origin. The function $\cos x$ is even, so its graph is symmetric about the $y$-axis.
- The graph of a sinusoidal function has the same general shape as a sine or cosine function.
- In the general formula for a sinusoidal function, the period is $P=\tfrac{2\pi}{|B|}$.
- In the general formula for a sinusoidal function, $|A|$ represents amplitude. If $|A|>1$, the function is stretched, whereas if $|A|<1$, the function is compressed.
- The value $\tfrac{C}{B}$ in the general formula for a sinusoidal function indicates the phase shift.
- The value $D$ in the general formula for a sinusoidal function indicates the vertical shift from the midline.
- Combinations of variations of sinusoidal functions can be detected from an equation.
- The equation for a sinusoidal function can be determined from a graph.
- A function can be graphed by identifying its amplitude and period.
- A function can also be graphed by identifying its amplitude, period, phase shift, and horizontal shift.
- Sinusoidal functions can be used to solve real-world problems.

## Practice

### Graph variations of $y=\sin(x)$ and $y=\cos(x)$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A periodic curve on a grid with y-axis ticks from −6 to 1: a maximum of −1 at x = −3, a minimum of −5 at x = −1, a maximum of −1 at x = 1, and a minimum of −5 at x = 3.","xMin":-5.3,"xMax":5.3,"yMin":-6.3,"yMax":1.3,"grid":true,"tickLabels":true,"unit":38,"curves":[{"kind":"sine","a":2,"b":1.5707963267948966,"k":-3}],"yLabel":"f(x)"}
{{< /apfigure >}}

{{< fillin
  question="A sinusoidal curve is shown above. What is its amplitude?"
  answer="2"
  answerDisplay="$2$"
  hint="The amplitude is half the distance between the maximum and minimum $y$-values."
>}}

{{< fillin
  question="What is the period of the same curve?"
  answer="4"
  answerDisplay="$4$"
  hint="The period is the horizontal distance between two consecutive maxima."
>}}

{{< fillin
  question="What is the midline of the same curve?"
  answer="y=-3"
  answerDisplay="$y=-3$"
  hint="The midline sits halfway between the maximum and minimum $y$-values."
>}}

{{< fillin
  question="Write an equation involving the sine function for the same curve."
  answer="2\sin(\tfrac{\pi}{2}x)-3"
  answerDisplay="$f(x)=2\sin\left(\tfrac{\pi}{2}x\right)-3$"
  hint="Use the amplitude, period, and midline you already found; the curve crosses its midline rising at $x=0$."
>}}

{{< fillin
  question="What is the range of $f(x)=\tfrac23\cos x$? Write your answer in interval notation."
  answer="[-2/3,2/3]"
  answerDisplay="$\left[-\tfrac23,\tfrac23\right]$"
  hint="The outputs oscillate a distance $|A|$ above and below the midline $y=0$."
>}}

{{< fillin
  question="What is the period of $f(x)=\tfrac23\cos x$?"
  answer="2\pi"
  answerForm="radians"
  answerDisplay="$2\pi$"
  hint="No coefficient of $x$ is written, so $B=1$ and $P=\tfrac{2\pi}{|B|}$."
>}}

{{< multiplechoice
  question="Which graph shows two periods of $f(x)=\cos(2x)$?"
  mode="graph"
  answerIndex="0"
  hint="Two periods of a function with period $\pi$ span an interval of length $2\pi$; a cosine curve starts at its maximum."
>}}
{"ariaLabel":"A cosine-shaped curve completing two full oscillations between −1 and 1 over the interval from 0 to 2π, starting at a maximum.","xMin":-0.3,"xMax":7.3,"yMin":-1.7,"yMax":1.4,"tickLabels":false,"curves":[{"kind":"cosine","b":2}],"texts":[{"at":[0,-1.35],"text":"0"},{"at":[3.1416,-1.35],"text":"π"},{"at":[6.2832,-1.35],"text":"2π"}]}
===OPT===
{"ariaLabel":"A cosine-shaped curve completing one full oscillation between −1 and 1 over the interval from 0 to 2π, starting at a maximum.","xMin":-0.3,"xMax":7.3,"yMin":-1.7,"yMax":1.4,"tickLabels":false,"curves":[{"kind":"cosine"}],"texts":[{"at":[0,-1.35],"text":"0"},{"at":[3.1416,-1.35],"text":"π"},{"at":[6.2832,-1.35],"text":"2π"}]}
===OPT===
{"ariaLabel":"A sine-shaped curve completing two full oscillations between −1 and 1 over the interval from 0 to 2π, starting at zero and rising.","xMin":-0.3,"xMax":7.3,"yMin":-1.7,"yMax":1.4,"tickLabels":false,"curves":[{"kind":"sine","b":2}],"texts":[{"at":[0,-1.35],"text":"0"},{"at":[3.1416,-1.35],"text":"π"},{"at":[6.2832,-1.35],"text":"2π"}]}
===OPT===
{"ariaLabel":"A cosine-shaped curve completing two full oscillations between −1 and 1 over the interval from 0 to 2π, starting at a minimum.","xMin":-0.3,"xMax":7.3,"yMin":-1.7,"yMax":1.4,"tickLabels":false,"curves":[{"kind":"cosine","a":-1,"b":2}],"texts":[{"at":[0,-1.35],"text":"0"},{"at":[3.1416,-1.35],"text":"π"},{"at":[6.2832,-1.35],"text":"2π"}]}
{{< /multiplechoice >}}

### Use phase shifts of sine and cosine curves

{{< fillin
  question="Determine the phase shift for $y=3\sin(8(x+4))+5$ as a signed value (positive = right, negative = left)."
  answer="-4"
  answerDisplay="$-4$"
  hint="Rewrite $8(x+4)$ as $8x-(-32)$ so $B=8$, $C=-32$, then compute $\tfrac{C}{B}$."
>}}

{{< fillin
  question="What is the midline of $y=3\sin(8(x+4))+5$?"
  answer="y=5"
  answerDisplay="$y=5$"
  hint="The midline is $y=D$; read $D$ directly from the equation."
>}}

{{< fillin
  question="Determine the phase shift for $f(t)=-\cos\left(t+\tfrac{\pi}{3}\right)+1$ as a signed value (positive = right, negative = left)."
  answer="-\pi/3"
  answerForm="radians"
  answerDisplay="$-\tfrac{\pi}{3}$"
  hint="Rewrite $t+\tfrac{\pi}{3}$ as $t-\left(-\tfrac{\pi}{3}\right)$ so $B=1$, $C=-\tfrac{\pi}{3}$, then compute $\tfrac{C}{B}$."
>}}

{{< fillin
  question="What is the midline of $f(t)=-\cos\left(t+\tfrac{\pi}{3}\right)+1$?"
  answer="y=1"
  answerDisplay="$y=1$"
  hint="The midline is $y=D$; read $D$ directly from the equation."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 6.1: Graphs of the Sine and Cosine Functions](https://openstax.org/books/precalculus-2e/pages/6-1-graphs-of-the-sine-and-cosine-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the opening rainbow-prism credit photograph (Figure 1), which carries no mathematics. Recreated every instructional graph as an accessible spec-first SVG built from its exact equation, using the new `sine`/`cosine` curve kinds: the plotted $\sin(x)$ and $\cos(x)$ parent curves with their table points; the compound unit-circle/sine-curve correspondence figure, redrawn as radius segments and dashed guide lines within one shared coordinate system rather than the source's two-panel raster image; the period comparison of $\sin(x)$ and $\cos(x)$ with a bracketed "1 period" span; the odd- and even-symmetry sine and cosine graphs; the $\sin(2x)/\sin(x/2)/\sin(x)$ period-compression comparison; the four-curve amplitude comparison $\sin x,2\sin x,3\sin x,4\sin x$; the reflected $-4\sin(x)$; the three-curve phase-shift comparison; the generic $y=A\sin(x)+D$ midline diagram; the vertical-shift comparison $\sin(x)$ vs. $\sin(x)+2$; the annotated $3\sin(2x)+1$ (amplitude/midline/period marked); the two "determine the equation from the graph" figures (the reflected-cosine and the shifted-cosine); the annotated grid-plotted $-2\sin(\pi x/2)$; the annotated $3\sin(\pi x/4-\pi/4)$; the annotated $-2\cos(\pi x/2+\pi)+3$ (amplitude/midline/period marked); the $3\sin(x)$ circular-motion curve; and the $-3\cos(x)+4$ Ferris-wheel-style height curve. The circle-mounted-on-a-stand illustration (radius $3$ ft, center $4$ ft up, point $P$) and the weight-on-a-spring illustration were recreated as simplified `kind="figure"` schematics (a labeled circle over a ground line; a labeled board, measurement segment, and weight) rather than literal photographic-style renderings, since the engine has no spring-coil primitive and none of the illustration's geometry is graded. The Practice block's "determine the amplitude, period, midline, and an equation" graph-reading exercise, and both "determine the formula" in-page figures, kept their own bare, unlabeled curves (no amplitude/midline arrows and no printed equation, since those are exactly what each item asks the learner to find); every such figure's accessible description states only the same raw coordinates and axis marks a sighted reader would read off the image, never the derived amplitude/period/midline/equation vocabulary that would answer the accompanying question. Converted every "Try It" into interactive components with instant feedback. Two amplitude Try Its whose printed coefficient ($\tfrac12$, $7$) is literally the requested value were restated to avoid a pure retype: the first asks for the amplitude as a decimal ($0.5$, distinct from the printed $\tfrac12$ span) alongside a separate stretched-or-compressed multiple choice, and the second asks for the range $[-7,7]$ instead of the amplitude directly. Every phase-shift answer is requested "as a signed value (positive = right, negative = left)," combining the source's separate direction-and-magnitude answer into one graded quantity, and every midline answer is requested as the equation $y=D$. Two Try Its that ask for all four of the midline, amplitude, period, and phase shift (Try It 5, Try It 9) keep only the three non-trivial values interactive, since each has a midline of $y=0$; Try It 8 keeps only its amplitude and period interactive, since its midline and phase shift are both $0$ — each dropped value is stated in the surrounding prose instead, to keep the in-page practice set at the 2–3 question cap. "Sketch a graph" instructions are not graded as drawn curves in this chapter (their key points fall on multiples of $\pi$, off the `graphplot` snap lattice); each retained sketch Try It instead asks for the derived numeric or symbolic features shown in its worked How-To, per the corpus's established response-mode adaptation for trigonometric graphing. Added one graph-mode recognition multiple choice (which graph shows two periods of $f(x)=\cos(2x)$?), the section's one graphing-recognition item per corpus convention, with distractors varying the period, the sine/cosine phase, and the reflection. Adapted seven selected end-of-section exercises — one two-full-periods period/range item (the printed amplitude $\tfrac23$ is asked for as a range instead, the same retype-avoidance adaptation used on Try It 10), one graph-reading amplitude/period/midline/equation item, one graph-recognition source item, and two phase-shift/vertical-translation items — into eleven interactive components across a closing Practice block, one group per objective.</small>
