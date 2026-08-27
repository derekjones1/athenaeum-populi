---
title: Graphs of the Other Trigonometric Functions
description: >-
  Sketching the graphs of tangent, secant, cosecant, and cotangent from their
  reciprocal identities, and building every stretch, compression, phase
  shift, and vertical shift of $y=A\tan(Bx-C)+D$ and its three companions —
  adapted from OpenStax Precalculus 2e, Section 6.2.
source_section: "6.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Analyze the graph of $y=\tan x$
- Graph variations of $y=\tan x$
- Analyze the graphs of $y=\sec x$ and $y=\csc x$
- Graph variations of $y=\sec x$ and $y=\csc x$
- Analyze the graph of $y=\cot x$
- Graph variations of $y=\cot x$
{{< /callout >}}

We know the tangent function can be used to find distances, such as the height of a building, mountain, or flagpole. But what if we want to measure repeated occurrences of distance? Imagine, for example, a fire truck parked next to a warehouse. The rotating light from the truck would travel across the wall of the warehouse in regular intervals. If the input is time, the output would be the distance the beam of light travels. The beam of light would repeat the distance at regular intervals. The tangent function can be used to approximate this distance. Asymptotes would be needed to illustrate the repeated cycles when the beam runs parallel to the wall because, seemingly, the beam of light could appear to extend forever. The graph of the tangent function would clearly illustrate the repeated intervals. In this section, we will explore the graphs of the tangent and other trigonometric functions.

## Analyzing the Graph of $y=\tan x$

We will begin with the graph of the **tangent** function, plotting points as we did for the sine and cosine functions. Recall that

$$\tan x=\tfrac{\sin x}{\cos x}$$

The **period** of the tangent function is $\pi$ because the graph repeats itself on intervals of $k\pi$ where $k$ is a constant. If we graph the tangent function on $-\tfrac{\pi}{2}$ to $\tfrac{\pi}{2}$, we can see the behavior of the graph on one complete cycle. If we look at any larger interval, we will see that the characteristics of the graph repeat.

We can determine whether tangent is an odd or even function by using the definition of tangent.

$$
\begin{array}{lrcl}
\text{Definition of tangent.} & \tan(-x) &=& \tfrac{\sin(-x)}{\cos(-x)} \\[4pt]
\text{Sine is an odd function, cosine is even.} & &=& \tfrac{-\sin x}{\cos x} \\[4pt]
\text{The quotient of an odd and an even function is odd.} & &=& -\tfrac{\sin x}{\cos x} \\[4pt]
\text{Definition of tangent.} & &=& -\tan x
\end{array}
$$

Therefore, tangent is an odd function. We can further analyze the graphical behavior of the tangent function by looking at values for some of the special angles, as listed below.

| $x$ | $-\tfrac{\pi}{2}$ | $-\tfrac{\pi}{3}$ | $-\tfrac{\pi}{4}$ | $-\tfrac{\pi}{6}$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $\tan(x)$ | undefined | $-\sqrt3$ | $-1$ | $-\tfrac{\sqrt3}{3}$ | $0$ | $\tfrac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | undefined |

These points will help us draw our graph, but we need to determine how the graph behaves where it is undefined. If we look more closely at values when $\tfrac{\pi}{3}<x<\tfrac{\pi}{2}$, we can use a table to look for a trend. Because $\tfrac{\pi}{3}\approx1.05$ and $\tfrac{\pi}{2}\approx1.57$, we will evaluate $x$ at radian measures $1.05<x<1.57$ as shown below.

| $x$ | $1.3$ | $1.5$ | $1.55$ | $1.56$ |
| :--- | :---: | :---: | :---: | :---: |
| $\tan x$ | $3.6$ | $14.1$ | $48.1$ | $92.6$ |

As $x$ approaches $\tfrac{\pi}{2}$, the outputs of the function get larger and larger. Because $y=\tan x$ is an odd function, we see the corresponding table of negative values below.

| $x$ | $-1.3$ | $-1.5$ | $-1.55$ | $-1.56$ |
| :--- | :---: | :---: | :---: | :---: |
| $\tan x$ | $-3.6$ | $-14.1$ | $-48.1$ | $-92.6$ |

We can see that, as $x$ approaches $-\tfrac{\pi}{2}$, the outputs get smaller and smaller. Remember that there are some values of $x$ for which $\cos x=0$. For example, $\cos\left(\tfrac{\pi}{2}\right)=0$ and $\cos\left(\tfrac{3\pi}{2}\right)=0$. At these values, the **tangent function** is undefined, so the graph of $y=\tan x$ has discontinuities at $x=\tfrac{\pi}{2}$ and $\tfrac{3\pi}{2}$. At these values, the graph of the tangent has vertical asymptotes. The figure below represents the graph of $y=\tan x$. The tangent is positive from $0$ to $\tfrac{\pi}{2}$ and from $\pi$ to $\tfrac{3\pi}{2}$, corresponding to quadrants I and III of the unit circle.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals tangent of x over one period, passing through the points (-pi/4, -1), (0, 0), and (pi/4, 1), with dashed vertical asymptotes at x = -pi/2 and x = pi/2.","xMin":-3.6,"xMax":3.6,"yMin":-4.3,"yMax":4.3,"grid":false,"tickLabels":false,"unit":42,"curves":[{"kind":"tangent","from":-1.54,"to":1.54}],"lines":[{"x":1.5707963267948966,"dashed":true,"arrows":false},{"x":-1.5707963267948966,"dashed":true,"arrows":false}],"points":[{"at":[-0.7853981633974483,-1]},{"at":[0,0]},{"at":[0.7853981633974483,1]}],"texts":[{"at":[3.1416,-0.5],"text":"π"},{"at":[-3.1416,-0.5],"text":"−π"},{"at":[1.5708,-0.5],"text":"π/2"},{"at":[-1.5708,-0.5],"text":"−π/2"},{"at":[1.9,3.6],"text":"y = tan(x)"}]}
{{< /apfigure >}}

## Graphing Variations of $y=\tan x$

As with the sine and cosine functions, the **tangent** function can be described by a general equation.

$$y=A\tan(Bx)$$

We can identify horizontal and vertical stretches and compressions using values of $A$ and $B$. The horizontal stretch can typically be determined from the period of the graph. With tangent graphs, it is often necessary to determine a vertical stretch using a point on the graph.

Because there are no maximum or minimum values of a tangent function, the term **amplitude** cannot be interpreted as it is for the sine and cosine functions. Instead, we will use the phrase **stretching/compressing factor** when referring to the constant $A$.

{{< callout type="info" >}}
  **Features of the graph of $y=A\tan(Bx)$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $P=\tfrac{\pi}{\lvert B\rvert}$.
  - The domain is all real numbers $x$, where $x\ne\tfrac{\pi}{2\lvert B\rvert}+\tfrac{\pi}{\lvert B\rvert}k$ such that $k$ is an integer.
  - The range is $(-\infty,\infty)$.
  - The asymptotes occur at $x=\tfrac{\pi}{2\lvert B\rvert}+\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - $y=A\tan(Bx)$ is an odd function.
{{< /callout >}}

### Graphing One Period of a Stretched or Compressed Tangent Function

We can use what we know about the properties of the **tangent function** to quickly sketch a graph of any stretched and/or compressed tangent function of the form $f(x)=A\tan(Bx)$. We focus on a single **period** of the function including the origin, because the periodic property enables us to extend the graph to the rest of the function's domain if we wish. Our limited domain is then the interval $\left(-\tfrac{P}{2},\tfrac{P}{2}\right)$ and the graph has vertical asymptotes at $\pm\tfrac{P}{2}$ where $P=\tfrac{\pi}{B}$. On $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$, the graph will come up from the left asymptote at $x=-\tfrac{\pi}{2}$, cross through the origin, and continue to increase as it approaches the right asymptote at $x=\tfrac{\pi}{2}$. To make the function approach the asymptotes at the correct rate, we also need to set the vertical scale by actually evaluating the function for at least one point that the graph will pass through. For example, we can use

$$f\left(\tfrac{P}{4}\right)=A\tan\left(B\tfrac{P}{4}\right)=A\tan\left(B\tfrac{\pi}{4B}\right)=A$$

because $\tan\left(\tfrac{\pi}{4}\right)=1$.

{{< callout type="info" >}}
  **How to:** given the function $f(x)=A\tan(Bx)$, graph one period.

  1. Identify the stretching factor, $\lvert A\rvert$.
  2. Identify $B$ and determine the period, $P=\tfrac{\pi}{\lvert B\rvert}$.
  3. Draw vertical asymptotes at $x=-\tfrac{P}{2}$ and $x=\tfrac{P}{2}$.
  4. For $AB>0$, the graph approaches the left asymptote at negative output values and the right asymptote at positive output values (reverse for $AB<0$).
  5. Plot reference points at $\left(\tfrac{P}{4},A\right)$, $(0,0)$, and $\left(-\tfrac{P}{4},-A\right)$, and draw the graph through these points.
{{< /callout >}}

**Example.** Sketch a graph of one period of the function $y=0.5\tan\left(\tfrac{\pi}{2}x\right)$.

**Solution.** First, we identify $A$ and $B$. Because $A=0.5$ and $B=\tfrac{\pi}{2}$, we can find the **stretching/compressing factor** and period. The period is $\tfrac{\pi}{\tfrac{\pi}{2}}=2$, so the asymptotes are at $x=\pm1$. At a quarter period from the origin, we have

$$
\begin{array}{lrcl}
& f(0.5) &=& 0.5\tan\left(\tfrac{0.5\pi}{2}\right) \\[4pt]
& &=& 0.5\tan\left(\tfrac{\pi}{4}\right) \\[4pt]
& &=& 0.5
\end{array}
$$

This means the curve must pass through the points $(0.5,0.5)$, $(0,0)$, and $(-0.5,-0.5)$. The only inflection point is at the origin. The figure below shows the graph of one period of the function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 0.5 tangent of pi over 2 x, one period, passing through the points (-0.5, -0.5), (0, 0), and (0.5, 0.5), with dashed vertical asymptotes at x = -1 and x = 1.","xMin":-2,"xMax":2,"yMin":-1.8,"yMax":1.8,"grid":false,"tickLabels":true,"xTickStep":0.5,"yTickStep":0.5,"unit":110,"curves":[{"kind":"tangent","a":0.5,"b":1.5707963267948966,"from":-0.98,"to":0.98}],"lines":[{"x":1,"dashed":true,"arrows":false},{"x":-1,"dashed":true,"arrows":false}],"points":[{"at":[-0.5,-0.5]},{"at":[0,0]},{"at":[0.5,0.5]}]}
{{< /apfigure >}}

{{< fillin
  question="Sketch a graph of $f(x)=3\tan\left(\tfrac{\pi}{6}x\right)$. What is the period of this function?"
  answer="6"
  answerDisplay="$6$"
  hint="The period of $A\tan(Bx)$ is $\tfrac{\pi}{\lvert B\rvert}$."
>}}

{{< fillin
  question="For that same function, $f(x)=3\tan\left(\tfrac{\pi}{6}x\right)$, what is the smallest positive vertical asymptote?"
  answer="3"
  answerDisplay="$3$"
  hint="One period covers the asymptote-to-asymptote span; the first positive asymptote is half a period from the origin."
>}}

### Graphing One Period of a Shifted Tangent Function

Now that we can graph a **tangent function** that is stretched or compressed, we will add a vertical and/or horizontal (or phase) shift. In this case, we add $C$ and $D$ to the general form of the tangent function.

$$f(x)=A\tan(Bx-C)+D$$

The graph of a transformed tangent function is different from the basic tangent function $\tan x$ in several ways:

{{< callout type="info" >}}
  **Features of the graph of $y=A\tan(Bx-C)+D$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $\tfrac{\pi}{\lvert B\rvert}$.
  - The domain is $x\ne\tfrac{C}{B}+\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an integer.
  - The range is $(-\infty,\infty)$.
  - The vertical asymptotes occur at $x=\tfrac{C}{B}+\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an odd integer.
  - There is no amplitude.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the function $y=A\tan(Bx-C)+D$, sketch the graph of one period.

  1. Express the function given in the form $y=A\tan(Bx-C)+D$.
  2. Identify the **stretching/compressing factor**, $\lvert A\rvert$.
  3. Identify $B$ and determine the period, $P=\tfrac{\pi}{\lvert B\rvert}$.
  4. Identify $C$ and determine the phase shift, $\tfrac{C}{B}$.
  5. Draw the graph of $y=A\tan(Bx)$ shifted to the right by $\tfrac{C}{B}$ and up by $D$.
  6. Sketch the vertical asymptotes, which occur at $x=\tfrac{C}{B}+\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an odd integer.
  7. Plot any three reference points and draw the graph through these points.
{{< /callout >}}

**Example.** Graph one period of the function $y=-2\tan(\pi x+\pi)-1$.

**Solution.** **Step 1.** The function is already written in the form $y=A\tan(Bx-C)+D$.

**Step 2.** $A=-2$, so the stretching factor is $\lvert A\rvert=2$.

**Step 3.** $B=\pi$, so the period is $P=\tfrac{\pi}{\lvert B\rvert}=\tfrac{\pi}{\pi}=1$.

**Step 4.** $C=-\pi$, so the phase shift is $\tfrac{C}{B}=\tfrac{-\pi}{\pi}=-1$.

**Steps 5–7.** The asymptotes are at $x=-\tfrac{3}{2}$ and $x=-\tfrac{1}{2}$ and the three recommended reference points are $(-1.25,1)$, $(-1,-1)$, and $(-0.75,-3)$. The graph is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals negative 2 tangent of pi x plus pi, minus 1, one period, passing through the points (-1.25, 1), (-1, -1), and (-0.75, -3), with dashed vertical asymptotes at x = -1.5 and x = -0.5.","xMin":-2,"xMax":0.5,"yMin":-10.5,"yMax":10.5,"grid":false,"tickLabels":true,"xTickStep":0.5,"yTickStep":5,"unit":75,"curves":[{"kind":"tangent","a":-2,"b":3.141592653589793,"h":-1,"k":-1,"from":-1.495,"to":-0.505}],"lines":[{"x":-1.5,"dashed":true,"arrows":false},{"x":-0.5,"dashed":true,"arrows":false}],"points":[{"at":[-1.25,1]},{"at":[-1,-1]},{"at":[-0.75,-3]}]}
{{< /apfigure >}}

**Analysis.** Note that this is a decreasing function because $A<0$.

{{< multiplechoice
  question="How would the graph in the example above look different if we made $A=2$ instead of $-2$?"
  answer="It would be reflected across the line $y=-1$, becoming an increasing function"
  hint="Flipping the sign of $A$ reflects the curve about its own midline, $y=D$."
>}}
It would be reflected across the line $y=-1$, becoming an increasing function
It would be reflected across the $x$-axis, becoming an increasing function
It would be shifted up $1$ unit, remaining a decreasing function
It would be stretched vertically, remaining a decreasing function
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **How to:** given the graph of a tangent function, identify horizontal and vertical stretches.

  1. Find the period $P$ from the spacing between successive vertical asymptotes or $x$-intercepts.
  2. Write $f(x)=A\tan\left(\tfrac{\pi}{P}x\right)$.
  3. Determine a convenient point $(x,f(x))$ on the given graph and use it to determine $A$.
{{< /callout >}}

**Example.** Find a formula for the function graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a stretched tangent function, with vertical asymptotes at x = -4 and x = 4, passing through the marked point (2, 2).","xMin":-8,"xMax":8,"yMin":-6.5,"yMax":6.5,"grid":false,"tickLabels":true,"xTickStep":2,"unit":45,"curves":[{"kind":"tangent","a":2,"b":0.39269908169872414}],"lines":[{"x":4,"dashed":true,"arrows":false},{"x":-4,"dashed":true,"arrows":false}],"points":[{"at":[2,2],"label":"(2, 2)"}]}
{{< /apfigure >}}

**Solution.** The graph has the shape of a tangent function.

**Step 1.** One cycle extends from $-4$ to $4$, so the period is $P=8$. Since $P=\tfrac{\pi}{\lvert B\rvert}$, we have $B=\tfrac{\pi}{P}=\tfrac{\pi}{8}$.

**Step 2.** The equation must have the form $f(x)=A\tan\left(\tfrac{\pi}{8}x\right)$.

**Step 3.** To find the vertical stretch $A$, we can use the point $(2,2)$.

$$2=A\tan\left(\tfrac{\pi}{8}\cdot2\right)=A\tan\left(\tfrac{\pi}{4}\right)$$

Because $\tan\left(\tfrac{\pi}{4}\right)=1$, $A=2$.

This function would have a formula $f(x)=2\tan\left(\tfrac{\pi}{8}x\right)$.

{{< fillin
  question="Find a formula for the function graphed below."
  answer="4\tan(2x)"
  answerDisplay="$f(x)=4\tan(2x)$"
  hint="Read the period from the asymptote spacing to find $B=\pi/P$, then use the marked point to find $A$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a modified tangent function over several periods, with dashed vertical asymptotes at x = negative 3 pi over 4, negative pi over 4, pi over 4, and 3 pi over 4, passing through the marked point (pi over 8, 4).","xMin":-3.6,"xMax":3.6,"yMin":-10,"yMax":10,"grid":false,"tickLabels":false,"unit":55,"curves":[{"kind":"tangent","a":4,"b":2}],"lines":[{"x":0.7853981633974483,"dashed":true,"arrows":false},{"x":-0.7853981633974483,"dashed":true,"arrows":false},{"x":2.356194490192345,"dashed":true,"arrows":false},{"x":-2.356194490192345,"dashed":true,"arrows":false}],"points":[{"at":[0.39269908169872414,4],"label":"(π/8, 4)"}],"texts":[{"at":[0.7854,-0.9],"text":"π/4"},{"at":[-0.7854,-0.9],"text":"−π/4"},{"at":[2.3562,-0.9],"text":"3π/4"},{"at":[-2.3562,-0.9],"text":"−3π/4"}]}
{{< /apfigure >}}

## Analyzing the Graphs of $y=\sec x$ and $y=\csc x$

The **secant** was defined by the **reciprocal identity** $\sec x=\tfrac{1}{\cos x}$. Notice that the function is undefined when the cosine is $0$, leading to vertical asymptotes at $\tfrac{\pi}{2}$, $\tfrac{3\pi}{2}$, etc. Because the cosine is never more than $1$ in absolute value, the secant, being the reciprocal, will never be less than $1$ in absolute value.

We can graph $y=\sec x$ by observing the graph of the cosine function because these two functions are reciprocals of one another. See the figure below. The graph of the cosine is shown as a dashed wave so we can see the relationship. Where the graph of the cosine function decreases, the graph of the **secant function** increases. Where the graph of the cosine function increases, the graph of the secant function decreases. When the cosine function is zero, the secant is undefined.

The secant graph has vertical asymptotes at each value of $x$ where the cosine graph crosses the $x$-axis; we show these in the graph below with dashed vertical lines, but will not show all the asymptotes explicitly on all later graphs involving the secant and cosecant.

Note that, because cosine is an even function, secant is also an even function. That is, $\sec(-x)=\sec x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals secant x with the guide graph of y equals cosine x drawn dashed, and dashed vertical asymptotes at odd multiples of pi over two.","xMin":-6.5,"xMax":6.5,"yMin":-4,"yMax":4,"grid":false,"tickLabels":false,"unit":36,"curves":[{"kind":"secant"},{"kind":"cosine","dashed":true}],"lines":[{"x":1.5707963267948966,"dashed":true,"arrows":false},{"x":-1.5707963267948966,"dashed":true,"arrows":false},{"x":4.71238898038469,"dashed":true,"arrows":false},{"x":-4.71238898038469,"dashed":true,"arrows":false}],"texts":[{"at":[2.4,2.6],"text":"y = sec(x)"},{"at":[-4.1,2.6],"text":"y = cos(x)"}]}
{{< /apfigure >}}

As we did for the tangent function, we will again refer to the constant $\lvert A\rvert$ as the stretching factor, not the amplitude.

{{< callout type="info" >}}
  **Features of the graph of $y=A\sec(Bx)$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $\tfrac{2\pi}{\lvert B\rvert}$.
  - The domain is $x\ne\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an odd integer.
  - The range is $(-\infty,-\lvert A\rvert]\cup[\lvert A\rvert,\infty)$.
  - The vertical asymptotes occur at $x=\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an odd integer.
  - There is no amplitude.
  - $y=A\sec(Bx)$ is an even function because cosine is an even function.
{{< /callout >}}

Similar to the secant, the **cosecant** is defined by the reciprocal identity $\csc x=\tfrac{1}{\sin x}$. Notice that the function is undefined when the sine is $0$, leading to a vertical asymptote in the graph at $0$, $\pi$, etc. Since the sine is never more than $1$ in absolute value, the cosecant, being the reciprocal, will never be less than $1$ in absolute value.

We can graph $y=\csc x$ by observing the graph of the sine function because these two functions are reciprocals of one another. See the figure below. The graph of sine is shown as a dashed wave so we can see the relationship. Where the graph of the sine function decreases, the graph of the **cosecant function** increases. Where the graph of the sine function increases, the graph of the cosecant function decreases.

The cosecant graph has vertical asymptotes at each value of $x$ where the sine graph crosses the $x$-axis; we show these in the graph below with dashed vertical lines.

Note that, since sine is an odd function, the cosecant function is also an odd function. That is, $\csc(-x)=-\csc x$.

The graph of cosecant, which is shown below, is similar to the graph of secant.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals cosecant x with the guide graph of y equals sine x drawn dashed, and dashed vertical asymptotes at multiples of pi.","xMin":-6.5,"xMax":6.5,"yMin":-4,"yMax":4,"grid":false,"tickLabels":false,"unit":36,"curves":[{"kind":"cosecant"},{"kind":"sine","dashed":true}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":3.14159265,"dashed":true,"arrows":false},{"x":-3.14159265,"dashed":true,"arrows":false},{"x":6.2831853,"dashed":true,"arrows":false},{"x":-6.2831853,"dashed":true,"arrows":false}],"texts":[{"at":[4.6,2.6],"text":"y = csc(x)"},{"at":[-2.0,2.6],"text":"y = sin(x)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Features of the graph of $y=A\csc(Bx)$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $\tfrac{2\pi}{\lvert B\rvert}$.
  - The domain is $x\ne\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - The range is $(-\infty,-\lvert A\rvert]\cup[\lvert A\rvert,\infty)$.
  - The asymptotes occur at $x=\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - $y=A\csc(Bx)$ is an odd function because sine is an odd function.
{{< /callout >}}

## Graphing Variations of $y=\sec x$ and $y=\csc x$

For shifted, compressed, and/or stretched versions of the secant and cosecant functions, we can follow similar methods to those we used for tangent and cotangent. That is, we locate the vertical asymptotes and also evaluate the functions for a few points (specifically the local extrema). If we want to graph only a single period, we can choose the interval for the period in more than one way. The procedure for secant is very similar, because the cofunction identity means that the secant graph is the same as the cosecant graph shifted half a period to the left. Vertical and phase shifts may be applied to the **cosecant function** in the same way as for the secant and other functions. The equations become the following.

$$y=A\sec(Bx-C)+D$$

$$y=A\csc(Bx-C)+D$$

{{< callout type="info" >}}
  **Features of the graph of $y=A\sec(Bx-C)+D$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $\tfrac{2\pi}{\lvert B\rvert}$.
  - The domain is $x\ne\tfrac{C}{B}+\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an odd integer.
  - The range is $(-\infty,-\lvert A\rvert+D]\cup[\lvert A\rvert+D,\infty)$.
  - The vertical asymptotes occur at $x=\tfrac{C}{B}+\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an odd integer.
  - There is no amplitude.
  - $y=A\sec(Bx-C)+D$ is an even function because cosine is an even function.
{{< /callout >}}

{{< callout type="info" >}}
  **Features of the graph of $y=A\csc(Bx-C)+D$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $\tfrac{2\pi}{\lvert B\rvert}$.
  - The domain is $x\ne\tfrac{C}{B}+\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - The range is $(-\infty,-\lvert A\rvert+D]\cup[\lvert A\rvert+D,\infty)$.
  - The vertical asymptotes occur at $x=\tfrac{C}{B}+\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - There is no amplitude.
  - $y=A\csc(Bx-C)+D$ is an odd function because sine is an odd function.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function of the form $y=A\sec(Bx)$, graph one period.

  1. Express the function given in the form $y=A\sec(Bx)$.
  2. Identify the stretching/compressing factor, $\lvert A\rvert$.
  3. Identify $B$ and determine the period, $P=\tfrac{2\pi}{\lvert B\rvert}$.
  4. Sketch the graph of $y=A\cos(Bx)$.
  5. Use the reciprocal relationship between $y=\cos x$ and $y=\sec x$ to draw the graph of $y=A\sec(Bx)$.
  6. Sketch the asymptotes.
  7. Plot any two reference points and draw the graph through these points.
{{< /callout >}}

**Example.** Graph one period of $f(x)=2.5\sec(0.4x)$.

**Solution.** **Step 1.** The given function is already written in the general form, $y=A\sec(Bx)$.

**Step 2.** $A=2.5$ so the stretching factor is $2.5$.

**Step 3.** $B=0.4$ so $P=\tfrac{2\pi}{0.4}=5\pi$. The period is $5\pi$ units.

**Step 4.** Sketch the graph of the function $g(x)=2.5\cos(0.4x)$.

**Step 5.** Use the reciprocal relationship of the cosine and secant functions to draw the cosecant function.

**Steps 6–7.** Sketch two asymptotes at $x=1.25\pi$ and $x=3.75\pi$. We can use two reference points, the local minimum at $(0,2.5)$ and the local maximum at $(2.5\pi,-2.5)$. The figure below shows the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 2.5 secant of 0.4 x over one period, a local minimum at (0, 2.5) and a local maximum at (2.5 pi, -2.5), with dashed vertical asymptotes at x = 1.25 pi and x = 3.75 pi.","xMin":-1.5,"xMax":13.5,"yMin":-7,"yMax":9,"grid":false,"tickLabels":false,"unit":24,"curves":[{"kind":"secant","a":2.5,"b":0.4}],"lines":[{"x":3.9269908169872414,"dashed":true,"arrows":false},{"x":11.780972450961724,"dashed":true,"arrows":false}],"points":[{"at":[0,2.5]},{"at":[7.853981633974483,-2.5]}],"texts":[{"at":[3.927,-1.1],"text":"1.25π"},{"at":[11.781,-1.1],"text":"3.75π"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph one period of $f(x)=-2.5\sec(0.4x)$. What is the value of $f(0)$?"
  answer="-2.5"
  answerDisplay="$-2.5$"
  hint="This is a vertical reflection of the preceding graph because $A$ is negative, so its local minimum at $x=0$ becomes a local maximum."
>}}

{{< callout type="info" >}}
  **Q&A.** Do the vertical shift and stretch/compression affect the secant's range?

  Yes. The range of $f(x)=A\sec(Bx-C)+D$ is $(-\infty,-\lvert A\rvert+D]\cup[\lvert A\rvert+D,\infty)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function of the form $f(x)=A\sec(Bx-C)+D$, graph one period.

  1. Express the function given in the form $y=A\sec(Bx-C)+D$.
  2. Identify the stretching/compressing factor, $\lvert A\rvert$.
  3. Identify $B$ and determine the period, $\tfrac{2\pi}{\lvert B\rvert}$.
  4. Identify $C$ and determine the phase shift, $\tfrac{C}{B}$.
  5. Draw the graph of $y=A\sec(Bx)$, but shift it to the right by $\tfrac{C}{B}$ and up by $D$.
  6. Sketch the vertical asymptotes, which occur at $x=\tfrac{C}{B}+\tfrac{\pi}{2\lvert B\rvert}k$, where $k$ is an odd integer.
{{< /callout >}}

**Example.** Graph one period of $y=4\sec\left(\tfrac{\pi}{3}x-\tfrac{\pi}{2}\right)+1$.

**Solution.** **Step 1.** Express the function given in the form $y=4\sec\left(\tfrac{\pi}{3}x-\tfrac{\pi}{2}\right)+1$.

**Step 2.** The stretching/compressing factor is $\lvert A\rvert=4$.

**Step 3.** The period is

$$
\begin{array}{lrcl}
& \tfrac{2\pi}{\lvert B\rvert} &=& \tfrac{2\pi}{\tfrac{\pi}{3}} \\[4pt]
& &=& \tfrac{2\pi}{1}\cdot\tfrac{3}{\pi} \\[4pt]
& &=& 6
\end{array}
$$

**Step 4.** The phase shift is

$$
\begin{array}{lrcl}
& \tfrac{C}{B} &=& \tfrac{\tfrac{\pi}{2}}{\tfrac{\pi}{3}} \\[4pt]
& &=& \tfrac{\pi}{2}\cdot\tfrac{3}{\pi} \\[4pt]
& &=& 1.5
\end{array}
$$

**Step 5.** Draw the graph of $y=A\sec(Bx)$, but shift it to the right by $\tfrac{C}{B}=1.5$ and up by $D=1$.

**Step 6.** Sketch the vertical asymptotes, which occur at $x=0$, $x=3$, and $x=6$. There is a local minimum at $(1.5,5)$ and a local maximum at $(4.5,-3)$. The figure below shows the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 4 secant of pi over 3 x minus pi over 2, plus 1, over one period, a local minimum at (1.5, 5) and a local maximum at (4.5, -3), with dashed vertical asymptotes at x = 0, x = 3, and x = 6.","xMin":-1.5,"xMax":7.5,"yMin":-8,"yMax":10,"grid":false,"tickLabels":true,"xTickStep":1,"unit":48,"curves":[{"kind":"secant","a":4,"b":1.0471975511965976,"h":1.5,"k":1}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":3,"dashed":true,"arrows":false},{"x":6,"dashed":true,"arrows":false}],"points":[{"at":[1.5,5]},{"at":[4.5,-3]}]}
{{< /apfigure >}}

{{< fillin
  question="Graph one period of $f(x)=-6\sec(4x+2)-8$. What is the vertical asymptote of this function nearest to $x=0$?"
  answer="\pi/8-1/2"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{8}-\tfrac12$"
  hint="Solve $4x+2=\tfrac{\pi}{2}+k\pi$ for $x$, then pick the integer $k$ that lands closest to $0$."
>}}

{{< callout type="info" >}}
  **Q&A.** The domain of $\csc x$ was given to be all $x$ such that $x\ne k\pi$ for any integer $k$. Would the domain of $y=A\csc(Bx-C)+D$ be $x\ne\tfrac{C+k\pi}{B}$?

  Yes. The excluded points of the domain follow the vertical asymptotes. Their locations show the horizontal shift and compression or expansion implied by the transformation to the original function's input.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a function of the form $y=A\csc(Bx)$, graph one period.

  1. Express the function given in the form $y=A\csc(Bx)$.
  2. Identify the stretching/compressing factor, $\lvert A\rvert$.
  3. Identify $B$ and determine the period, $P=\tfrac{2\pi}{\lvert B\rvert}$.
  4. Draw the graph of $y=A\sin(Bx)$.
  5. Use the reciprocal relationship between $y=\sin x$ and $y=\csc x$ to draw the graph of $y=A\csc(Bx)$.
  6. Sketch the asymptotes.
  7. Plot any two reference points and draw the graph through these points.
{{< /callout >}}

**Example.** Graph one period of $f(x)=-3\csc(4x)$.

**Solution.** **Step 1.** The given function is already written in the general form, $y=A\csc(Bx)$.

**Step 2.** $\lvert A\rvert=\lvert-3\rvert=3$, so the stretching factor is $3$.

**Step 3.** $B=4$, so $P=\tfrac{2\pi}{4}=\tfrac{\pi}{2}$. The period is $\tfrac{\pi}{2}$ units.

**Step 4.** Sketch the graph of the function $g(x)=-3\sin(4x)$.

**Step 5.** Use the reciprocal relationship of the sine and cosecant functions to draw the **cosecant function**.

**Steps 6–7.** Sketch three asymptotes at $x=0$, $x=\tfrac{\pi}{4}$, and $x=\tfrac{\pi}{2}$. We can use two reference points, the local maximum at $\left(\tfrac{\pi}{8},-3\right)$ and the local minimum at $\left(\tfrac{3\pi}{8},3\right)$. The figure below shows the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals negative 3 cosecant of 4 x, over one period, a local maximum at (pi over 8, -3) and a local minimum at (3 pi over 8, 3), with dashed vertical asymptotes at x = 0, x = pi over 4, and x = pi over 2.","xMin":-0.3,"xMax":1.9,"yMin":-16,"yMax":16,"grid":false,"tickLabels":false,"unit":90,"curves":[{"kind":"cosecant","a":-3,"b":4}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":0.7853981633974483,"dashed":true,"arrows":false},{"x":1.5707963267948966,"dashed":true,"arrows":false}],"points":[{"at":[0.39269908169872414,-3]},{"at":[1.1780972450961724,3]}],"texts":[{"at":[0.785,-1.4],"text":"π/4"},{"at":[1.571,-1.4],"text":"π/2"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph one period of $f(x)=0.5\csc(2x)$. What is the period of this function?"
  answer="\pi"
  answerForm="radians"
  answerDisplay="$\pi$"
  hint="The period of $A\csc(Bx)$ is $\tfrac{2\pi}{\lvert B\rvert}$."
>}}

{{< fillin
  question="For that same function, $f(x)=0.5\csc(2x)$, what is the smallest positive vertical asymptote?"
  answer="\pi/2"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{2}$"
  hint="The asymptotes of $A\csc(Bx)$ occur at $x=\tfrac{\pi}{\lvert B\rvert}k$; the smallest positive one is half the period."
>}}

{{< callout type="info" >}}
  **How to:** given a function of the form $f(x)=A\csc(Bx-C)+D$, graph one period.

  1. Express the function given in the form $y=A\csc(Bx-C)+D$.
  2. Identify the stretching/compressing factor, $\lvert A\rvert$.
  3. Identify $B$ and determine the period, $\tfrac{2\pi}{\lvert B\rvert}$.
  4. Identify $C$ and determine the phase shift, $\tfrac{C}{B}$.
  5. Draw the graph of $y=A\csc(Bx)$ but shift it to the right by $\tfrac{C}{B}$ and up by $D$.
  6. Sketch the vertical asymptotes, which occur at $x=\tfrac{C}{B}+\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
{{< /callout >}}

**Example.** Sketch a graph of $y=2\csc\left(\tfrac{\pi}{2}x\right)+1$. What are the domain and range of this function?

**Solution.** **Step 1.** Express the function given in the form $y=2\csc\left(\tfrac{\pi}{2}x\right)+1$.

**Step 2.** Identify the stretching/compressing factor, $\lvert A\rvert=2$.

**Step 3.** The period is $\tfrac{2\pi}{\lvert B\rvert}=\tfrac{2\pi}{\tfrac{\pi}{2}}=\tfrac{2\pi}{1}\cdot\tfrac{2}{\pi}=4$.

**Step 4.** The phase shift is $\tfrac{0}{\tfrac{\pi}{2}}=0$.

**Step 5.** Draw the graph of $y=A\csc(Bx)$ but shift it up $D=1$.

**Step 6.** Sketch the vertical asymptotes, which occur at $x=0$, $x=2$, $x=4$.

The graph for this function is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 2 cosecant of pi over 2 x, plus 1, with the guide graph of y equals 2 sine of pi over 2 x, plus 1, drawn dashed, over one period, local extrema marked by dots, and dashed vertical asymptotes at x = 0, x = 2, and x = 4.","xMin":-4.5,"xMax":4.5,"yMin":-4,"yMax":7,"grid":false,"tickLabels":true,"xTickStep":1,"unit":42,"curves":[{"kind":"cosecant","a":2,"b":1.5707963267948966,"k":1},{"kind":"sine","a":2,"b":1.5707963267948966,"k":1,"dashed":true}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":2,"dashed":true,"arrows":false},{"x":4,"dashed":true,"arrows":false},{"x":-2,"dashed":true,"arrows":false},{"x":-4,"dashed":true,"arrows":false}],"points":[{"at":[1,3]},{"at":[3,-1]},{"at":[-1,-1]},{"at":[-3,3]}]}
{{< /apfigure >}}

**Analysis.** The vertical asymptotes shown on the graph mark off one period of the function, and the local extrema in this interval are shown by dots. Notice how the graph of the transformed cosecant relates to the graph of $f(x)=2\sin\left(\tfrac{\pi}{2}x\right)+1$, shown as the dashed wave.

{{< fillin
  question="Given the graph of $f(x)=2\cos\left(\tfrac{\pi}{2}x\right)+1$ shown below, sketch the graph of $g(x)=2\sec\left(\tfrac{\pi}{2}x\right)+1$ on the same axes. What is the smallest positive vertical asymptote of $g$?"
  answer="1"
  answerDisplay="$1$"
  hint="$g$ is undefined exactly where its cosine factor is zero; find the smallest positive $x$ with $\cos\left(\tfrac{\pi}{2}x\right)=0$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) equals 2 cosine of pi over 2 x, plus 1, over two periods.","xMin":-4.5,"xMax":4.5,"yMin":-4,"yMax":4,"grid":true,"tickLabels":true,"xTickStep":1,"yTickStep":1,"unit":42,"curves":[{"kind":"cosine","a":2,"b":1.5707963267948966,"k":1}]}
{{< /apfigure >}}

## Analyzing the Graph of $y=\cot x$

The last trigonometric function we need to explore is **cotangent**. The cotangent is defined by the **reciprocal identity** $\cot x=\tfrac{1}{\tan x}$. Notice that the function is undefined when the tangent function is $0$, leading to a vertical asymptote in the graph at $0$, $\pi$, etc. Since the output of the tangent function is all real numbers, the output of the **cotangent function** is also all real numbers.

We can graph $y=\cot x$ by observing the graph of the tangent function because these two functions are reciprocals of one another. See the figure below. Where the graph of the tangent function decreases, the graph of the cotangent function increases. Where the graph of the tangent function increases, the graph of the cotangent function decreases.

The cotangent graph has vertical asymptotes at each value of $x$ where $\tan x=0$; we show these in the graph below with dashed lines. Since the cotangent is the reciprocal of the tangent, $\cot x$ has vertical asymptotes at all values of $x$ where $\tan x=0$, and $\cot x=0$ at all values of $x$ where $\tan x$ has its vertical asymptotes.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals cotangent of x over several periods, with dashed vertical asymptotes at multiples of pi.","xMin":-6.9,"xMax":6.9,"yMin":-8,"yMax":9,"grid":false,"tickLabels":false,"unit":36,"curves":[{"kind":"cotangent"}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":3.14159265,"dashed":true,"arrows":false},{"x":-3.14159265,"dashed":true,"arrows":false},{"x":6.2831853,"dashed":true,"arrows":false},{"x":-6.2831853,"dashed":true,"arrows":false}],"texts":[{"at":[4.6,8.5],"text":"f(x) = cot(x)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Features of the graph of $y=A\cot(Bx)$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $P=\tfrac{\pi}{\lvert B\rvert}$.
  - The domain is $x\ne\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - The range is $(-\infty,\infty)$.
  - The asymptotes occur at $x=\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - $y=A\cot(Bx)$ is an odd function.
{{< /callout >}}

## Graphing Variations of $y=\cot x$

We can transform the graph of the cotangent in much the same way as we did for the tangent. The equation becomes the following.

$$y=A\cot(Bx-C)+D$$

{{< callout type="info" >}}
  **Features of the graph of $y=A\cot(Bx-C)+D$.**

  - The stretching factor is $\lvert A\rvert$.
  - The period is $\tfrac{\pi}{\lvert B\rvert}$.
  - The domain is $x\ne\tfrac{C}{B}+\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - The range is $(-\infty,\infty)$.
  - The vertical asymptotes occur at $x=\tfrac{C}{B}+\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  - There is no amplitude.
  - $y=A\cot(Bx)$ is an odd function because it is the quotient of even and odd functions (cosine and sine, respectively).
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a modified cotangent function of the form $f(x)=A\cot(Bx)$, graph one period.

  1. Express the function in the form $f(x)=A\cot(Bx)$.
  2. Identify the stretching factor, $\lvert A\rvert$.
  3. Identify the period, $P=\tfrac{\pi}{\lvert B\rvert}$.
  4. Draw the graph of $y=A\tan(Bx)$.
  5. Plot any two reference points.
  6. Use the reciprocal relationship between tangent and cotangent to draw the graph of $y=A\cot(Bx)$.
  7. Sketch the asymptotes.
{{< /callout >}}

**Example.** Determine the stretching factor, period, and phase shift of $y=3\cot(4x)$, and then sketch a graph.

**Solution.** **Step 1.** Expressing the function in the form $f(x)=A\cot(Bx)$ gives $f(x)=3\cot(4x)$.

**Step 2.** The stretching factor is $\lvert A\rvert=3$.

**Step 3.** The period is $P=\tfrac{\pi}{4}$.

**Step 4.** Sketch the graph of $y=3\tan(4x)$.

**Step 5.** Plot two reference points. Two such points are $\left(\tfrac{\pi}{16},3\right)$ and $\left(\tfrac{3\pi}{16},-3\right)$.

**Step 6.** Use the reciprocal relationship to draw $y=3\cot(4x)$.

**Step 7.** Sketch the asymptotes, $x=0$, $x=\tfrac{\pi}{4}$.

The graph below shows $y=3\tan(4x)$ and $y=3\cot(4x)$ together.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of y equals 3 tangent of 4x and y equals 3 cotangent of 4x together over one period, with dashed vertical asymptotes at x = negative pi over 4, negative pi over 8, pi over 8, and pi over 4.","xMin":-1.05,"xMax":1.05,"yMin":-8,"yMax":8,"grid":false,"tickLabels":false,"unit":100,"curves":[{"kind":"tangent","a":3,"b":4},{"kind":"cotangent","a":3,"b":4}],"lines":[{"x":0.39269908169872414,"dashed":true,"arrows":false},{"x":-0.39269908169872414,"dashed":true,"arrows":false},{"x":0.7853981633974483,"dashed":true,"arrows":false},{"x":-0.7853981633974483,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How to:** given a modified cotangent function of the form $f(x)=A\cot(Bx-C)+D$, graph one period.

  1. Express the function in the form $f(x)=A\cot(Bx-C)+D$.
  2. Identify the stretching factor, $\lvert A\rvert$.
  3. Identify the period, $P=\tfrac{\pi}{\lvert B\rvert}$.
  4. Identify the phase shift, $\tfrac{C}{B}$.
  5. Draw the graph of $y=A\tan(Bx)$ shifted to the right by $\tfrac{C}{B}$ and up by $D$.
  6. Sketch the asymptotes $x=\tfrac{C}{B}+\tfrac{\pi}{\lvert B\rvert}k$, where $k$ is an integer.
  7. Plot any three reference points and draw the graph through these points.
{{< /callout >}}

**Example.** Sketch a graph of one period of the function $f(x)=4\cot\left(\tfrac{\pi}{8}x-\tfrac{\pi}{2}\right)-2$.

**Solution.** **Step 1.** The function is already written in the general form $f(x)=A\cot(Bx-C)+D$.

**Step 2.** $A=4$, so the stretching factor is $4$.

**Step 3.** $B=\tfrac{\pi}{8}$, so the period is $P=\tfrac{\pi}{\lvert B\rvert}=\tfrac{\pi}{\tfrac{\pi}{8}}=8$.

**Step 4.** $C=\tfrac{\pi}{2}$, so the phase shift is $\tfrac{C}{B}=\tfrac{\tfrac{\pi}{2}}{\tfrac{\pi}{8}}=4$.

**Step 5.** We draw $f(x)=4\tan\left(\tfrac{\pi}{8}x-\tfrac{\pi}{2}\right)-2$.

**Steps 6–7.** Three points we can use to guide the graph are $(6,2)$, $(8,-2)$, and $(10,-6)$. We use the reciprocal relationship of tangent and cotangent to draw $f(x)=4\cot\left(\tfrac{\pi}{8}x-\tfrac{\pi}{2}\right)-2$.

**Step 8.** The vertical asymptotes are $x=4$ and $x=12$.

The graph is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 4 cotangent of pi over 8 x, minus pi over 2, minus 2, over one period, passing through the points (6, 2), (8, -2), and (10, -6), with dashed vertical asymptotes at x = 4 and x = 12.","xMin":2,"xMax":14,"yMin":-42,"yMax":42,"grid":false,"tickLabels":true,"xTickStep":2,"yTickStep":10,"unit":30,"curves":[{"kind":"cotangent","a":4,"b":0.39269908169872414,"h":4,"k":-2}],"lines":[{"x":4,"dashed":true,"arrows":false},{"x":12,"dashed":true,"arrows":false}],"points":[{"at":[6,2]},{"at":[8,-2]},{"at":[10,-6]}]}
{{< /apfigure >}}

### Using the Graphs of Trigonometric Functions to Solve Real-World Problems

Many real-world scenarios represent periodic functions and may be modeled by trigonometric functions. As an example, let's return to the scenario from the section opener. Have you ever observed the beam formed by the rotating light on a fire truck and wondered about the movement of the light beam itself across the wall? The periodic behavior of the distance the light shines as a function of time is obvious, but how do we determine the distance? We can use the **tangent function**.

**Example.** Suppose the function $y=5\tan\left(\tfrac{\pi}{4}t\right)$ marks the distance in the movement of a light beam from the top of a police car across a wall where $t$ is the time in seconds and $y$ is the distance in feet from a point on the wall directly across from the police car.

**a.** Find and interpret the stretching factor and period. **b.** Graph on the interval $[0,5]$. **c.** Evaluate $f(1)$ and discuss the function's value at that input.

**Solution.** **a.** We know from the general form of $y=A\tan(Bt)$ that $\lvert A\rvert$ is the stretching factor and $\tfrac{\pi}{B}$ is the period.

The vertical stretch factor of $5$ means that the beam will have moved $5$ feet in the one-quarter period before or after the half-period mark. This corresponds to the $y$-value of the standard tangent function being $1$ at one-quarter of the period away from the center of the period, multiplied by the stretching factor of $5$.

The period is $\tfrac{\pi}{\tfrac{\pi}{4}}=\tfrac{\pi}{1}\cdot\tfrac{4}{\pi}=4$. This means that every $4$ seconds, the beam of light sweeps the wall. The distance from the spot across from the police car grows larger as the police car approaches.

**b.** To graph the function, we draw an asymptote at $t=2$ and use the stretching factor and period. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 5 tangent of pi over 4 t, on the interval from 0 to 5, with a dashed vertical asymptote at t = 2.","xMin":-0.3,"xMax":5.3,"yMin":-21,"yMax":21,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":5,"unit":60,"curves":[{"kind":"tangent","a":5,"b":0.7853981633974483,"from":0,"to":5}],"lines":[{"x":2,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

**c.** $f(1)=5\tan\left(\tfrac{\pi}{4}(1)\right)=5(1)=5$; after $1$ second, the beam has moved $5$ ft from the spot across from the police car.

## Key equations

| Shifted, compressed, and/or stretched tangent function | $y=A\tan(Bx-C)+D$ |
| :--- | :--- |
| Shifted, compressed, and/or stretched secant function | $y=A\sec(Bx-C)+D$ |
| Shifted, compressed, and/or stretched cosecant function | $y=A\csc(Bx-C)+D$ |
| Shifted, compressed, and/or stretched cotangent function | $y=A\cot(Bx-C)+D$ |

## Key concepts

- The tangent function has period $\pi$.
- $f(x)=A\tan(Bx-C)+D$ is a tangent with vertical and/or horizontal stretch/compression and shift.
- The secant and cosecant are both periodic functions with a period of $2\pi$. $f(x)=A\sec(Bx-C)+D$ gives a shifted, compressed, and/or stretched secant function graph.
- $f(x)=A\csc(Bx-C)+D$ gives a shifted, compressed, and/or stretched cosecant function graph.
- The cotangent function has period $\pi$ and vertical asymptotes at $0,\pm\pi,\pm2\pi,\dots$
- The range of cotangent is $(-\infty,\infty)$, and the function is decreasing at each point in its range.
- The cotangent is zero at $\pm\tfrac{\pi}{2},\pm\tfrac{3\pi}{2},\dots$
- $f(x)=A\cot(Bx-C)+D$ is a cotangent with vertical and/or horizontal stretch/compression and shift.
- Real-world scenarios can be solved using graphs of trigonometric functions.

## Practice

### Analyze the graph of $y=\tan x$

{{< fillin
  question="If $\tan x=-1.5$, find $\tan(-x)$."
  answer="1.5"
  answerDisplay="$1.5$"
  hint="Tangent is an odd function: $\tan(-x)=-\tan x$."
>}}

{{< multiplechoice
  question="The identity $\tan(x+\pi)=\tan x$ holds for every real number $x$. What does this identity establish about the graph of $y=\tan x$?"
  answer="Its period is $\pi$"
  hint="A function's period is the smallest positive shift that maps its graph back onto itself."
>}}
Its period is $\pi$
Its amplitude is $\pi$
Its $y$-intercept is $\pi$
Its domain excludes $\pi$
{{< /multiplechoice >}}

### Graph variations of $y=\tan x$

{{< fillin
  question="What is the period of $f(x)=2\tan(4x-32)$?"
  answer="\pi/4"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{4}$"
  hint="The period of $A\tan(Bx-C)$ is $\tfrac{\pi}{\lvert B\rvert}$; here $B=4$."
>}}

{{< fillin
  question="A tangent curve has stretching factor $A=1$, period $\tfrac{\pi}{3}$, and phase shift $(h,k)=\left(\tfrac{\pi}{4},2\right)$. Write its equation in the form $y=A\tan(B(x-h))+k$."
  answer="\tan(3(x-\pi/4))+2"
  answerDisplay="$y=\tan\left(3\left(x-\tfrac{\pi}{4}\right)\right)+2$"
  hint="Since $P=\tfrac{\pi}{3}$ and $P=\tfrac{\pi}{\lvert B\rvert}$, solve for $B$ first; the shift $(h,k)$ then plugs straight into the general form."
>}}

### Analyze the graphs of $y=\sec x$ and $y=\csc x$

{{< fillin
  question="If $\csc x=-5$, find $\csc(-x)$."
  answer="5"
  answerDisplay="$5$"
  hint="Cosecant is an odd function: $\csc(-x)=-\csc x$."
>}}

{{< fillin
  question="What is the period of $y=\csc x$?"
  answer="2\pi"
  answerForm="radians"
  answerDisplay="$2\pi$"
  hint="Cosecant shares its period with sine."
>}}

### Graph variations of $y=\sec x$ and $y=\csc x$

{{< fillin
  question="What is the period of $m(x)=6\csc\left(\tfrac{\pi}{3}x+\pi\right)$?"
  answer="6"
  answerDisplay="$6$"
  hint="The period of $A\csc(Bx-C)$ is $\tfrac{2\pi}{\lvert B\rvert}$; here $B=\tfrac{\pi}{3}$."
>}}

{{< fillin
  question="What is the smallest positive vertical asymptote of $f(x)=4\sec(3x)$?"
  answer="\pi/6"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{6}$"
  hint="The asymptotes of $A\sec(Bx)$ occur at $x=\tfrac{\pi}{2\lvert B\rvert}k$ for odd $k$; the smallest positive one has $k=1$."
>}}

### Analyze the graph of $y=\cot x$

{{< multiplechoice
  question="Which graph shows $f(x)=\cot x$?"
  mode="graph"
  answerIndex="2"
  hint="Cotangent is decreasing through every period, crossing the $x$-axis midway between consecutive asymptotes."
>}}
{"ariaLabel":"Graph I: a repeating curve rising from lower left to upper right through the origin, with dashed vertical asymptotes at x = negative pi over 2 and x = pi over 2.","xMin":-2.4,"xMax":2.4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":false,"unit":60,"curves":[{"kind":"tangent"}],"lines":[{"x":1.5707963267948966,"dashed":true,"arrows":false},{"x":-1.5707963267948966,"dashed":true,"arrows":false}]}
===OPT===
{"ariaLabel":"Graph II: U-shaped and dome-shaped branches opening away from the x-axis, with a dashed vertical asymptote at x = pi.","xMin":-6.5,"xMax":6.5,"yMin":-4,"yMax":4,"grid":false,"tickLabels":false,"unit":36,"curves":[{"kind":"cosecant"}],"lines":[{"x":3.14159265,"dashed":true,"arrows":false}]}
===OPT===
{"ariaLabel":"Graph III: repeating decreasing branches crossing the x-axis, with dashed vertical asymptotes at x = 0 and x = pi.","xMin":-1,"xMax":6.5,"yMin":-4,"yMax":4,"grid":false,"tickLabels":false,"unit":60,"curves":[{"kind":"cotangent"}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":3.14159265,"dashed":true,"arrows":false}]}
===OPT===
{"ariaLabel":"Graph IV: U-shaped and dome-shaped branches opening away from the x-axis, with a dashed vertical asymptote at x = pi over 2.","xMin":-3.5,"xMax":3.5,"yMin":-4,"yMax":4,"grid":false,"tickLabels":false,"unit":66,"curves":[{"kind":"secant"}],"lines":[{"x":1.5707963267948966,"dashed":true,"arrows":false}]}
{{< /multiplechoice >}}

{{< multiplechoice
  question="Rewrite $\cot(-x)\cos(-x)+\sin(-x)$ so that every argument is positive."
  answer="$-\cot x\cos x-\sin x$"
  hint="Cotangent and sine are odd; cosine is even. Apply each parity rule, then simplify the signs."
>}}
$-\cot x\cos x-\sin x$
$\cot x\cos x+\sin x$
$-\cot x\cos x+\sin x$
$\cot x\cos x-\sin x$
{{< /multiplechoice >}}

### Graph variations of $y=\cot x$

A graphing calculator exercise asks for two periods of $f(x)=\lvert\cot x\rvert$, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals the absolute value of cotangent x, folded above the x-axis, over one period from 0 to pi, with vertical asymptotes at x = 0 and x = pi.","xMin":-0.3,"xMax":3.45,"yMin":-1,"yMax":6,"grid":false,"tickLabels":false,"unit":100,"curves":[{"kind":"cotangent","a":1,"from":0.06,"to":1.5707963267948966,"arrows":"start"},{"kind":"cotangent","a":-1,"from":1.5707963267948966,"to":3.08,"arrows":"end"}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":3.14159265,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

{{< fillin
  question="What is the range of $f(x)=\lvert\cot x\rvert$? Write your answer in interval notation."
  answer="[0,\infty)"
  answerDisplay="$[0,\infty)$"
  hint="Taking an absolute value folds every negative output up to positive; cotangent itself already reaches every real value."
>}}

{{< fillin
  question="What is the vertical asymptote of that same function, $f(x)=\lvert\cot x\rvert$, closest to (but greater than) $x=0$?"
  answer="\pi"
  answerForm="radians"
  answerDisplay="$\pi$"
  hint="An absolute value does not remove where the inside function is undefined."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 6.2: Graphs of the Other Trigonometric Functions](https://openstax.org/books/precalculus-2e/pages/6-2-graphs-of-the-other-trigonometric-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all seventeen instructional figures as accessible spec-first SVGs built from the exact equation each one draws — the one-period tangent graph with its three reference points and two dashed asymptotes; the compressed-tangent Example 1 graph; the shifted-tangent Example 2 graph; the stretched-tangent Example 3 graph and its Try It companion (with the graph's own marked reference point recreated so the exercise stays derivable from the figure alone, as the worked example's own point is); the secant-with-dashed-cosine-guide overview and its Features callout; the cosecant-with-dashed-sine-guide overview; the secant Examples 4 and 5 with their local extrema and dashed asymptotes; the given-cosine Try It figure of Example 7 together with the transformed-cosecant graph and its dashed sine guide; the cosecant Example 6 graph; the cotangent overview graph; the paired tangent/cotangent Example 8 graph; the shifted-cotangent Example 9 graph; and the real-world tangent graph of Example 10. Omitted Example 10's separate annotated-formula panel (arrows pointing to the letters $A$ and $B$ inside the printed equation), which carries no mathematics beyond what the equation itself already states, and omitted the "Access these online resources" media links. Converted every retained "Try It" into an interactive component: because this section's curves have vertical asymptotes at multiples of $\pi$ — off the `graphplot` snap lattice — no Try It or Practice item was authored as a drawn `graphplot`; instead, each "sketch/graph" Try It keeps its instruction and adds a `fillin` on one of the curve's own features (period, an asymptote in a stated window, or a function value), matching the section's own graphplot-ledger disposition for this class of prompt. The one Try It with no printed or derivable numeric answer in the CNXML (Graph one period of $f(x)=-6\sec(4x+2)-8$, whose key is only an approximately-labelled image) was kept and given an independently exact asymptote answer, $\tfrac{\pi}{8}-\tfrac12$, solved directly from $4x+2=\tfrac{\pi}{2}+k\pi$ rather than read off the approximate figure. The rewrite-with-positive-argument Try It (originally a fill-in candidate) is authored as a `multiplechoice`: retyping the printed subject, $\cot(-x)\cos(-x)+\sin(-x)$, is value-equal to the simplified answer and grades `correct` against it with no available `answerForm` to block that retype, so the component was changed to keep the exercise honestly gradable. One recognition `multiplechoice` (`mode="graph"`) is authored for the whole section, matching the corpus's one-per-section convention for a page with no `graphplot`: it recreates the source's own four-graph matching figure (Graphs I–IV) as spec options, with option `ariaLabel`s describing only what is drawn. Adapted eleven selected end-of-section exercises — two evaluate-the-transformed-function items (tangent, cosecant, using their odd-function property), one conceptual period fact recast as multiple choice to avoid a retype hazard (the source's own printed identity contains the numeral answer), two period/asymptote extraction items each for the tangent and secant/cosecant families, the source's own sec/csc/cot graph-matching exercise (recast as the section's graph-recognition multiple choice), the cot-parity rewrite exercise (recast as multiple choice for the same retype-hazard reason described above), and the Technology section's $f(x)=\lvert\cot x\rvert$ graphing-calculator exercise, whose only printed answer content is its alt text ("Range is $0$ to $\infty$") — split into two fill-ins (range and nearest positive asymptote) since no other end-of-section cotangent-*variation* exercise in this module carries a printed or derivable answer, into a closing Practice block, one group per objective.</small>
