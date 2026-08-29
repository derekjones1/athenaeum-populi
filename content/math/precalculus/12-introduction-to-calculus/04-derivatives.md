---
title: Derivatives
description: >-
  Defining the derivative as the limit of a difference quotient, computing
  derivatives of polynomial, rational, and root functions, interpreting the
  derivative as an instantaneous rate of change or velocity, finding tangent
  lines, and recognizing where a function's derivative fails to exist —
  adapted from OpenStax Precalculus 2e, Section 12.4.
source_section: "12.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the derivative of a function
- Find instantaneous rates of change
- Find an equation of the tangent line to the graph of a function at a point
- Find the instantaneous velocity of a particle
{{< /callout >}}

Device and media usage changes at different rates for different groups of people. Communication and technology companies, marketers, educators, and their advocates maintain a close watch on trends and preferences. According to data from the Pew Research Center, Millennial ownership of smartphones only increased by one percent from 2018 to 2019 (from 92% to 93%). But for people over 74 years old, the number jumped from 30% to 40% in the same period.

Other device ownership and usage trends may go in different directions by generation. From 2018 to 2019, Millennial tablet computer ownership dropped from 64% to 52%. But during the same period, the Baby Boom generation's tablet computer ownership stayed exactly even with 52% reporting ownership. And the 74-and-older group's tablet ownership increased from 25% to 33%.

What do these scenarios have in common? The functions representing them have changed over time. In this section, we will consider methods of computing such changes over time.

### Finding the Average Rate of Change of a Function

The functions describing the examples above involve a change over time. Change divided by time is one example of a rate. The rates of change in the previous examples are each different. In other words, some changed faster than others. If we were to graph the functions, we could compare the rates by determining the slopes of the graphs.

A **tangent line** to a curve is a line that intersects the curve at only a single point but does not cross it there. (The tangent line may intersect the curve at another point away from the point of interest.) If we zoom in on a curve at that point, the curve appears linear, and the **slope of the curve** at that point is close to the slope of the tangent line at that point.

The graph below represents the function $f(x)=x^3-4x$. We can see the slope at various points along the curve.

- slope at $x=-2$ is $8$
- slope at $x=-1$ is $-1$
- slope at $x=2$ is $8$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x cubed minus 4x, with tangent lines drawn at x = -2, x = -1, and x = 2, each labeled with its slope.","xMin":-3.2,"xMax":3.2,"yMin":-6,"yMax":6,"unit":26,"cubics":[{"a":1,"c":-4}],"lines":[{"through":[[-2,0],[-1,8]],"arrows":false,"label":"m = 8"},{"through":[[-1,3],[0,2]],"arrows":false,"label":"m = -1"},{"through":[[2,0],[3,8]],"arrows":false,"label":"m = 8"}],"points":[{"at":[-2,0]},{"at":[-1,3]},{"at":[2,0]}]}

{{< /apfigure >}}

Let's imagine a point on the curve of function $f$ at $x=a$, as shown below. The coordinates of the point are $(a,f(a))$. Connect this point with a second point on the curve a little to the right of $x=a$, with an $x$-value increased by some small real number $h$. The coordinates of this second point are $(a+h,f(a+h))$ for some positive value $h$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve rising through point (a, f(a)) and a second point (a+h, f(a+h)) further along the curve, connected by a secant line; a dashed horizontal segment marks h between the two x-values and a dashed vertical segment marks the change in the function value.","xMin":-1,"xMax":5.6,"yMin":-1,"yMax":6,"unit":45,"quadratics":[{"a":0.5}],"points":[{"at":[1,0.5],"label":"(a, f(a))"},{"at":[3,4.5],"label":"(a+h, f(a+h))"}],"segments":[{"from":[1.05,0.25],"to":[3,0.25],"dashed":true,"label":"h"},{"from":[3.3,0.5],"to":[3.3,4.5],"dashed":true,"label":"f(a+h) - f(a)","labelSide":"e"}],"lines":[{"through":[[1,0.5],[3,4.5]],"arrows":"end"}]}

{{< /apfigure >}}

We can calculate the slope of the line connecting the two points $(a,f(a))$ and $(a+h,f(a+h))$, called a **secant line**, by applying the slope formula,

$$\text{slope}=\tfrac{\text{change in }y}{\text{change in }x}$$

We use the notation $m_{sec}$ to represent the slope of the secant line connecting two points.

$$
\begin{array}{l}
m_{sec}=\tfrac{f(a+h)-f(a)}{(a+h)-(a)} \\[4pt]
\phantom{m_{sec}}=\tfrac{f(a+h)-f(a)}{a+h-a}
\end{array}
$$

The slope $m_{sec}$ equals the **average rate of change** between two points $(a,f(a))$ and $(a+h,f(a+h))$.

$$m_{sec}=\tfrac{f(a+h)-f(a)}{h}$$

{{< callout type="info" >}}
  **The Average Rate of Change between Two Points on a Curve.** The average rate of change (AROC) between two points $(a,f(a))$ and $(a+h,f(a+h))$ on the curve of $f$ is the slope of the line connecting the two points and is given by

  $$\text{AROC}=\tfrac{f(a+h)-f(a)}{h}$$
{{< /callout >}}

**Example.** Find the average rate of change connecting the points $(2,-6)$ and $(-1,5)$.

**Solution.** We know the average rate of change connecting two points may be given by $\text{AROC}=\tfrac{f(a+h)-f(a)}{h}$.

If one point is $(2,-6)$, or $(2,f(2))$, then $f(2)=-6$.

The value $h$ is the displacement from $2$ to $-1$, which equals $-1-2=-3$.

For the other point, $f(a+h)$ is the $y$-coordinate at $a+h$, which is $2+(-3)$ or $-1$, so $f(a+h)=f(-1)=5$.

$$
\begin{array}{l}
\text{AROC}=\tfrac{f(a+h)-f(a)}{h} \\[4pt]
\phantom{\text{AROC}}=\tfrac{5-(-6)}{-3} \\[4pt]
\phantom{\text{AROC}}=\tfrac{11}{-3} \\[4pt]
\phantom{\text{AROC}}=-\tfrac{11}{3}
\end{array}
$$

{{< fillin
  question="Find the average rate of change connecting the points $(-5,1.5)$ and $(-2.5,9)$."
  answer="3"
  answerForm="decimal"
  answerDisplay="$3$"
  hint="Use $\text{AROC}=\tfrac{f(a+h)-f(a)}{h}$ with $a=-5$ and $h=(-2.5)-(-5)$."
>}}

### Understanding the Instantaneous Rate of Change

Now that we can find the average rate of change, suppose we make $h$ smaller and smaller. Then $a+h$ will approach $a$ as $h$ gets smaller, getting closer and closer to $0$. Likewise, the second point $(a+h,f(a+h))$ will approach the first point, $(a,f(a))$. As a consequence, the connecting line between the two points, called the secant line, will get closer and closer to being a tangent to the function at $x=a$, and the slope of the secant line will get closer and closer to the slope of the tangent at $x=a$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve rising through point P at (a, f(a)); two secant lines connect P to nearby points Q1 and Q2 on the curve, and a tangent line at P is drawn alongside them.","xMin":-1,"xMax":5,"yMin":-1,"yMax":7,"unit":40,"quadratics":[{"a":0.5}],"points":[{"at":[1,0.5],"label":"P"},{"at":[2,2],"label":"Q1"},{"at":[3.5,6.125],"label":"Q2"}],"lines":[{"through":[[1,0.5],[2,1.5]],"arrows":true,"label":"Tangent line at x = a"},{"through":[[1,0.5],[2,2]],"arrows":false,"label":"Secant line P to Q1"},{"through":[[1,0.5],[3.5,6.125]],"arrows":false,"label":"Secant line P to Q2"}]}

{{< /apfigure >}}

Because we are looking for the slope of the tangent at $x=a$, we can think of the measure of the slope of the curve of a function $f$ at a given point as the rate of change at a particular instant. We call this slope the **instantaneous rate of change**, or the **derivative** of the function at $x=a$. Both can be found by finding the limit of the slope of a line connecting the point at $x=a$ with a second point infinitesimally close along the curve. For a function $f$, both the instantaneous rate of change of the function and the derivative of the function at $x=a$ are written as $f'(a)$, and we can define them as a **two-sided limit** that has the same value whether approached from the left or the right.

$$f'(a)=\lim\limits_{h\to0}\tfrac{f(a+h)-f(a)}{h}$$

The expression by which the limit is found is known as the **difference quotient**.

{{< callout type="info" >}}
  **Definition of Instantaneous Rate of Change and Derivative.** The derivative, or instantaneous rate of change, of a function $f$ at $x=a$, is given by

  $$f'(a)=\lim\limits_{h\to0}\tfrac{f(a+h)-f(a)}{h}$$

  The expression $\tfrac{f(a+h)-f(a)}{h}$ is called the difference quotient.

  We use the difference quotient to evaluate the limit of the rate of change of the function as $h$ approaches $0$.
{{< /callout >}}

### Derivatives: Interpretations and Notation

The **derivative** of a function can be interpreted in different ways. It can be observed as the behavior of a graph of the function or calculated as a numerical rate of change of the function.

- The derivative of a function $f(x)$ at a point $x=a$ is the slope of the tangent line to the curve $f(x)$ at $x=a$. The derivative of $f(x)$ at $x=a$ is written $f'(a)$.
- The derivative $f'(a)$ measures how the curve changes at the point $(a,f(a))$.
- The derivative $f'(a)$ may be thought of as the instantaneous rate of change of the function $f(x)$ at $x=a$.
- If a function measures distance as a function of time, then the derivative measures the instantaneous **velocity** at time $t=a$.

{{< callout type="info" >}}
  **Notations for the Derivative.** The equation of the derivative of a function $f(x)$ is written as $y'=f'(x)$, where $y=f(x)$. The notation $f'(x)$ is read as "$f$ prime of $x$." Alternate notations for the derivative include the following:

  $$f'(x)=y'=\tfrac{dy}{dx}=\tfrac{df}{dx}=\tfrac{d}{dx}f(x)=Df(x)$$

  The expression $f'(x)$ is now a function of $x$; this function gives the slope of the curve $y=f(x)$ at any value of $x$. The derivative of a function $f(x)$ at a point $x=a$ is denoted $f'(a)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How To: Given a function $f$, find the derivative by applying the definition of the derivative.**

  1. Calculate $f(a+h)$.
  2. Calculate $f(a)$.
  3. Substitute and simplify $\tfrac{f(a+h)-f(a)}{h}$.
  4. Evaluate the limit if it exists: $f'(a)=\lim_{h\to0}\tfrac{f(a+h)-f(a)}{h}$.
{{< /callout >}}

**Example.** Find the derivative of the function $f(x)=x^2-3x+5$ at $x=a$.

**Solution.** We have $f'(a)=\lim_{h\to0}\tfrac{f(a+h)-f(a)}{h}$.

Substitute $f(a+h)=(a+h)^2-3(a+h)+5$ and $f(a)=a^2-3a+5$.

$$
\begin{array}{ll}
f'(a)=\lim\limits_{h\to0}\tfrac{(a+h)(a+h)-3(a+h)+5-(a^2-3a+5)}{h} & \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{a^2+2ah+h^2-3a-3h+5-a^2+3a-5}{h} & \text{Remove parentheses.} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{2ah+h^2-3h}{h} & \text{Simplify.} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{h(2a+h-3)}{h} & \text{Factor out an }h. \\[4pt]
\phantom{f'(a)}=2a+0-3 & \text{Evaluate the limit.} \\[4pt]
\phantom{f'(a)}=2a-3 &
\end{array}
$$

{{< fillin
  question="Find the derivative of the function $f(x)=3x^2+7x$ at $x=a$."
  answer="6a+7"
  answerForm="polynomial"
  answerDisplay="$f'(a)=6a+7$"
  hint="Substitute $f(a+h)=3(a+h)^2+7(a+h)$ and $f(a)=3a^2+7a$ into the difference quotient, then simplify and let $h\to0$."
>}}

### Finding Derivatives of Rational Functions

To find the derivative of a rational function, we will sometimes simplify the expression using algebraic techniques we have already learned.

**Example.** Find the derivative of the function $f(x)=\tfrac{3+x}{2-x}$ at $x=a$.

**Solution.**

$$
\begin{array}{ll}
f'(a)=\lim\limits_{h\to0}\tfrac{f(a+h)-f(a)}{h} & \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{\tfrac{3+(a+h)}{2-(a+h)}-\tfrac{3+a}{2-a}}{h} & \text{Substitute }f(a+h)\text{ and }f(a) \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{(2-(a+h))(2-a)\left[\tfrac{3+(a+h)}{2-(a+h)}-\tfrac{3+a}{2-a}\right]}{(2-(a+h))(2-a)(h)} & \text{Multiply numerator and denominator by }(2-(a+h))(2-a) \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{6-3a+2a-a^2+2h-ah-6+3a+3h-2a+a^2+ah}{(2-(a+h))(2-a)(h)} & \text{Multiply and distribute} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{5h}{(2-(a+h))(2-a)(h)} & \text{Combine like terms} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{5}{(2-(a+h))(2-a)} & \text{Cancel like factors} \\[4pt]
\phantom{f'(a)}=\tfrac{5}{(2-(a+0))(2-a)}=\tfrac{5}{(2-a)(2-a)}=\tfrac{5}{(2-a)^2} & \text{Evaluate the limit}
\end{array}
$$

{{< fillin
  question="Find the derivative of the function $f(x)=\tfrac{10x+11}{5x+4}$ at $x=a$."
  answer="\frac{-15}{(5a+4)^{2}}"
  answerForm="reduced-fraction"
  answerDisplay="$f'(a)=\tfrac{-15}{(5a+4)^2}$"
  hint="Combine the fractions in the difference quotient over one denominator, then cancel the common factor of $h$."
>}}

### Finding Derivatives of Functions with Roots

To find derivatives of functions with roots, we use the methods we have learned to find limits of functions with roots, including multiplying by a conjugate.

**Example.** Find the derivative of the function $f(x)=4\sqrt{x}$ at $x=36$.

**Solution.** We have

$$
\begin{array}{ll}
f'(a)=\lim\limits_{h\to0}\tfrac{f(a+h)-f(a)}{h} & \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{4\sqrt{a+h}-4\sqrt{a}}{h} & \text{Substitute }f(a+h)\text{ and }f(a)
\end{array}
$$

Multiply the numerator and denominator by the conjugate: $\tfrac{4\sqrt{a+h}+4\sqrt{a}}{4\sqrt{a+h}+4\sqrt{a}}$.

$$
\begin{array}{ll}
f'(a)=\lim\limits_{h\to0}\left(\tfrac{4\sqrt{a+h}-4\sqrt{a}}{h}\right)\cdot\left(\tfrac{4\sqrt{a+h}+4\sqrt{a}}{4\sqrt{a+h}+4\sqrt{a}}\right) & \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\left(\tfrac{16(a+h)-16a}{h\cdot4(\sqrt{a+h}+\sqrt{a})}\right) & \text{Multiply.} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\left(\tfrac{16a+16h-16a}{h\cdot4(\sqrt{a+h}+\sqrt{a})}\right) & \text{Distribute and combine like terms.} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\left(\tfrac{16h}{h(4\sqrt{a+h}+4\sqrt{a})}\right) & \text{Simplify.} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\left(\tfrac{16}{4\sqrt{a+h}+4\sqrt{a}}\right) & \text{Evaluate the limit by letting }h=0. \\[4pt]
\phantom{f'(a)}=\tfrac{16}{8\sqrt{a}}=\tfrac{2}{\sqrt{a}} & \\[4pt]
f'(36)=\tfrac{2}{\sqrt{36}} & \text{Evaluate the derivative at }x=36. \\[4pt]
\phantom{f'(36)}=\tfrac{2}{6} & \\[4pt]
\phantom{f'(36)}=\tfrac{1}{3} &
\end{array}
$$

{{< fillin
  question="Find the derivative of the function $f(x)=9\sqrt{x}$ at $x=9$. Enter the answer as a fraction."
  answer="\frac{3}{2}"
  answerForm="fraction"
  answerDisplay="$\tfrac{3}{2}$"
  hint="Multiply the difference quotient by the conjugate $\tfrac{9\sqrt{a+h}+9\sqrt{a}}{9\sqrt{a+h}+9\sqrt{a}}$ before letting $h\to0$."
>}}

### Finding Instantaneous Rates of Change

Many applications of the derivative involve determining the rate of change at a given instant of a function with the independent variable time — which is why the term **instantaneous** is used. Consider the height of a ball tossed upward with an initial velocity of $64$ feet per second, given by $s(t)=-16t^2+64t+6$, where $t$ is measured in seconds and $s(t)$ is measured in feet. We know the path is that of a parabola. The derivative will tell us how the height is changing at any given point in time. The height of the ball is shown below as a function of time. In physics, we call this the "$s$-$t$ graph."

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola of height versus time, with vertex at (2, 70) and two points marked at (1, 55) and (3, 55).","xMin":-1,"xMax":6,"yMin":-5,"yMax":78,"unit":38,"yUnit":4.6,"xLabel":"t","yLabel":"s(t)","tickLabels":true,"xTickStep":1,"yTickStep":10,"quadratics":[{"a":-16,"b":64,"c":6}],"points":[{"at":[1,55]},{"at":[3,55]}]}

{{< /apfigure >}}

**Example.** Using the function above, $s(t)=-16t^2+64t+6$, what is the instantaneous velocity of the ball at $1$ second and $3$ seconds into its flight?

**Solution.** The velocity at $t=1$ and $t=3$ is the instantaneous rate of change of distance per time, or velocity. Notice that the initial height is $6$ feet. To find the instantaneous velocity, we find the derivative and evaluate it at $t=1$ and $t=3$:

$$
\begin{array}{ll}
s'(t)=\lim\limits_{h\to0}\tfrac{s(t+h)-s(t)}{h} & \\[4pt]
\phantom{s'(t)}=\lim\limits_{h\to0}\tfrac{-16(t+h)^2+64(t+h)+6-(-16t^2+64t+6)}{h} & \text{Substitute }s(t+h)\text{ and }s(t). \\[4pt]
\phantom{s'(t)}=\lim\limits_{h\to0}\tfrac{-16t^2-32ht-h^2+64t+64h+6+16t^2-64t-6}{h} & \text{Distribute.} \\[4pt]
\phantom{s'(t)}=\lim\limits_{h\to0}\tfrac{-32ht-h^2+64h}{h} & \text{Simplify.} \\[4pt]
\phantom{s'(t)}=\lim\limits_{h\to0}\tfrac{h(-32t-h+64)}{h} & \text{Factor the numerator.} \\[4pt]
\phantom{s'(t)}=\lim\limits_{h\to0}-32t-h+64 & \text{Cancel out the common factor }h. \\[4pt]
s'(t)=-32t+64 & \text{Evaluate the limit by letting }h=0.
\end{array}
$$

For any value of $t$, $s'(t)$ tells us the velocity at that value of $t$.

Evaluate $t=1$ and $t=3$.

$$
\begin{array}{l}
s'(1)=-32(1)+64=32 \\[4pt]
s'(3)=-32(3)+64=-32
\end{array}
$$

The velocity of the ball after $1$ second is $32$ feet per second, as it is on the way up.

The velocity of the ball after $3$ seconds is $-32$ feet per second, as it is on the way down.

{{< fillin
  question="The position of the ball is given by $s(t)=-16t^2+64t+6$. What is its velocity $2$ seconds into flight? Enter the number only."
  answer="0"
  answerForm="decimal"
  answerDisplay="$0$ ft/s"
  hint="Find $s'(t)$ and evaluate it at $t=2$."
>}}

### Using Graphs to Find Instantaneous Rates of Change

We can estimate an instantaneous rate of change at $x=a$ by observing the slope of the curve of the function $f(x)$ at $x=a$. We do this by drawing a line tangent to the function at $x=a$ and finding its slope.

{{< callout type="info" >}}
  **How To: Given a graph of a function $f(x)$, find the instantaneous rate of change of the function at $x=a$.**

  1. Locate $x=a$ on the graph of the function $f(x)$.
  2. Draw a tangent line, a line that goes through $x=a$ at $a$ and at no other point in that section of the curve. Extend the line far enough to calculate its slope as $\tfrac{\text{change in }y}{\text{change in }x}$.
{{< /callout >}}

**Example.** From the graph of the function $y=f(x)$ presented below, estimate each of the following: $f(0)$, $f(2)$, $f'(0)$, $f'(2)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = f(x), a curve with a local high point at (0, 1) and passing through (2, 1) on its way up.","xMin":-2.2,"xMax":3.2,"yMin":-5,"yMax":6,"unit":38,"cubics":[{"a":1,"b":-2,"d":1}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[2,1],"label":"(2, 1)"}]}

{{< /apfigure >}}

**Solution.** To find the functional value, $f(a)$, find the $y$-coordinate at $x=a$.

To find the derivative at $x=a$, $f'(a)$, draw a tangent line at $x=a$, and estimate the slope of that tangent line. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same curve with a horizontal tangent line drawn at (0, 1), labeled m = 0, and a steeper tangent line drawn at (2, 1), labeled m = 4.","xMin":-2.2,"xMax":3.2,"yMin":-5,"yMax":6,"unit":38,"cubics":[{"a":1,"b":-2,"d":1}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[2,1],"label":"(2, 1)"}],"lines":[{"y":1,"arrows":false,"label":"m = 0"},{"through":[[2,1],[3,5]],"arrows":true,"label":"m = 4"}]}

{{< /apfigure >}}

- $f(0)$ is the $y$-coordinate at $x=0$. The point has coordinates $(0,1)$, thus $f(0)=1$.
- $f(2)$ is the $y$-coordinate at $x=2$. The point has coordinates $(2,1)$, thus $f(2)=1$.
- $f'(0)$ is found by estimating the slope of the tangent line to the curve at $x=0$. The tangent line to the curve at $x=0$ appears horizontal. Horizontal lines have a slope of $0$, thus $f'(0)=0$.
- $f'(2)$ is found by estimating the slope of the tangent line to the curve at $x=2$. Observe the path of the tangent line to the curve at $x=2$. As the $x$ value moves one unit to the right, the $y$ value moves up four units to another point on the line. Thus, the slope is $4$, so $f'(2)=4$.

{{< fillin
  question="Using the graph of the function $f(x)=x^3-3x$ shown below, estimate $f(1)$."
  answer="-2"
  answerForm="decimal"
  answerDisplay="$-2$"
  hint="Read the $y$-coordinate at $x=1$ from the graph."
>}}

{{< fillin
  question="Using the same graph of $f(x)=x^3-3x$, estimate $f'(0)$."
  answer="-3"
  answerForm="decimal"
  answerDisplay="$-3$"
  hint="Estimate the slope of the tangent line to the curve at $x=0$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x cubed minus 3x, viewed on the window from -4 to 4 on the x-axis and -5 to 7 on the y-axis.","xMin":-4,"xMax":4,"yMin":-5,"yMax":7,"unit":36,"cubics":[{"a":1,"c":-3}]}

{{< /apfigure >}}

### Using Instantaneous Rates of Change to Solve Real-World Problems

Another way to interpret an instantaneous rate of change at $x=a$ is to observe the function in a real-world context. The unit for the derivative of a function $f(x)$ is $\tfrac{\text{output units}}{\text{input unit}}$. Such a unit shows by how many units the output changes for each one-unit change of input. The instantaneous rate of change at a given instant shows the same thing: the units of change of output per one-unit change of input.

One example of an instantaneous rate of change is a marginal cost. For example, suppose the production cost for a company to produce $x$ items is given by $C(x)$, in thousands of dollars. The derivative function tells us how the cost is changing for any value of $x$ in the domain of the function. In other words, $C'(x)$ is interpreted as a **marginal cost**, the additional cost in thousands of dollars of producing one more item when $x$ items have been produced. For example, $C'(11)$ is the approximate additional cost in thousands of dollars of producing the 12th item after 11 items have been produced. $C'(11)=2.50$ means that when 11 items have been produced, producing the 12th item would increase the total cost by approximately \$2,500.00.

**Example.** The cost in dollars of producing $x$ laptop computers is $f(x)=x^2-100x$. At the point where 200 computers have been produced, what is the approximate cost of producing the 201st unit?

**Solution.** If $f(x)=x^2-100x$ describes the cost of producing $x$ computers, $f'(x)$ will describe the marginal cost. We need to find the derivative. For purposes of calculating the derivative, we can use the following functions:

$$
\begin{array}{l}
f(x+h)=(x+h)^2-100(x+h) \\[4pt]
f(x)=x^2-100x
\end{array}
$$

$$
\begin{array}{ll}
f'(x)=\lim\limits_{h\to0}\tfrac{f(x+h)-f(x)}{h} & \text{Formula for a derivative} \\[4pt]
\phantom{f'(x)}=\lim\limits_{h\to0}\tfrac{(x+h)^2-100(x+h)-(x^2-100x)}{h} & \text{Substitute }f(x+h)\text{ and }f(x). \\[4pt]
\phantom{f'(x)}=\lim\limits_{h\to0}\tfrac{x^2+2xh+h^2-100x-100h-x^2+100x}{h} & \text{Multiply polynomials, distribute.} \\[4pt]
\phantom{f'(x)}=\lim\limits_{h\to0}\tfrac{2xh+h^2-100h}{h} & \text{Collect like terms.} \\[4pt]
\phantom{f'(x)}=\lim\limits_{h\to0}\tfrac{h(2x+h-100)}{h} & \text{Factor and cancel like terms.} \\[4pt]
\phantom{f'(x)}=\lim\limits_{h\to0}2x+h-100 & \text{Simplify.} \\[4pt]
\phantom{f'(x)}=2x-100 & \text{Evaluate when }h=0. \\[4pt]
f'(x)=2x-100 & \text{Formula for marginal cost} \\[4pt]
f'(200)=2(200)-100=300 & \text{Evaluate for 200 units.}
\end{array}
$$

The marginal cost of producing the 201st unit will be approximately \$300.

**Example.** A car leaves an intersection. The distance it travels in miles is given by the function $f(t)$, where $t$ represents hours. Explain the following notations: $f(0)=0$; $f'(1)=60$; $f(1)=70$; $f(2.5)=150$.

**Solution.** First we need to evaluate the function $f(t)$ and the derivative of the function $f'(t)$, and distinguish between the two. When we evaluate the function $f(t)$, we are finding the distance the car has traveled in $t$ hours. When we evaluate the derivative $f'(t)$, we are finding the speed of the car after $t$ hours.

- $f(0)=0$ means that in zero hours, the car has traveled zero miles.
- $f'(1)=60$ means that one hour into the trip, the car is traveling 60 miles per hour.
- $f(1)=70$ means that one hour into the trip, the car has traveled 70 miles. At some point during the first hour, then, the car must have been traveling faster than it was at the 1-hour mark.
- $f(2.5)=150$ means that two hours and thirty minutes into the trip, the car has traveled 150 miles.

{{< multiplechoice
  question="A runner runs along a straight east-west road. The function $f(t)$ gives how many feet eastward of her starting point she is after $t$ seconds. What does $f(10)=150$ mean?"
  answer="After 10 seconds, she has traveled 150 feet east."
  hint="$f(t)$ gives a position, not a rate."
>}}
After 150 seconds, she has traveled 10 feet east.
Her speed after 10 seconds is 150 feet per second.
After 10 seconds, she has traveled 150 feet east.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For the same runner, what does $f'(20)=-10$ mean?"
  answer="After 20 seconds, she is moving westward at a rate of 10 ft/sec."
  hint="$f'(t)$ gives a rate, and a negative rate here means moving west."
>}}
After 20 seconds, she has traveled 10 feet west of her starting point.
After 20 seconds, she is moving westward at a rate of 10 ft/sec.
After 10 seconds, she is moving westward at a rate of 20 ft/sec.
{{< /multiplechoice >}}

### Finding Points Where a Function's Derivative Does Not Exist

To understand where a function's derivative does not exist, we need to recall what normally happens when a function $f(x)$ has a derivative at $x=a$. Suppose we use a graphing utility to zoom in on $x=a$. If the function $f(x)$ is **differentiable**, that is, if it is a function that can be differentiated, then the closer one zooms in, the more closely the graph approaches a straight line. This characteristic is called **linearity**.

Look at the graph below. The closer we zoom in on the point, the more linear the curve appears.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola, with a small box marking a point on its right branch where the curve will be zoomed in.","xMin":-6,"xMax":6,"yMin":-2,"yMax":5,"unit":32,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.3,"c":4}],"segments":[{"from":[1.85,2.55],"to":[2.15,2.55]},{"from":[2.15,2.55],"to":[2.15,3.05]},{"from":[2.15,3.05],"to":[1.85,3.05]},{"from":[1.85,3.05],"to":[1.85,2.55]}]}

{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An extreme close-up on the boxed point, magnified ten times: at this zoom level the curve appears as a straight line falling to the right, with a dot marking the point.","xMin":-1,"xMax":1,"yMin":-1.3,"yMax":1.3,"unit":90,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.03,"b":-1.2,"c":0,"arrows":false}],"points":[{"at":[0,0]}]}

{{< /apfigure >}}

We might presume the same thing would happen with any continuous function, but that is not so. The function $f(x)=\lvert x\rvert$, for example, is continuous at $x=0$, but not differentiable at $x=0$. As we zoom in close to $0$ in the figure below, the graph does not approach a straight line. No matter how close we zoom in, the graph maintains its sharp corner.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = the absolute value of x, with x-axis from -0.1 to 0.1 and y-axis from -0.1 to 0.1; the graph still shows a sharp corner at the origin.","xMin":-0.1,"xMax":0.1,"yMin":-0.1,"yMax":0.1,"unit":1800,"tickLabels":true,"xTickStep":0.1,"yTickStep":0.1,"segments":[{"from":[-0.1,0.1],"to":[0,0],"arrows":"start"},{"from":[0,0],"to":[0.1,0.1],"arrows":"end"}]}

{{< /apfigure >}}

We zoom in closer by narrowing the range to produce the graph below, and continue to observe the same shape. This graph does not appear linear at $x=0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = the absolute value of x, with x-axis from -0.001 to 0.001 and y-axis from -0.001 to 0.001; the graph still shows the same sharp corner at the origin, unchanged by the closer zoom.","xMin":-0.001,"xMax":0.001,"yMin":-0.001,"yMax":0.001,"unit":180000,"tickLabels":true,"xTickStep":0.001,"yTickStep":0.001,"segments":[{"from":[-0.001,0.001],"to":[0,0],"arrows":"start"},{"from":[0,0],"to":[0.001,0.001],"arrows":"end"}]}

{{< /apfigure >}}

What are the characteristics of a graph that is not differentiable at a point? Here are some examples in which function $f(x)$ is not differentiable at $x=a$.

We see the graph of

$$f(x)=\begin{cases} x^2, & x\le2 \\ 8-x, & x>2 \end{cases}$$

below. Notice that, as $x$ approaches $2$ from the left, the left-hand limit may be observed to be $4$, while as $x$ approaches $2$ from the right, the right-hand limit may be observed to be $6$. We see that it has a discontinuity at $x=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the piecewise function x squared for x less than or equal to 2, and 8 minus x for x greater than 2; the parabola rises from the left to a filled point at (2, 4), and a separate line begins at an open point at (2, 6) and falls to the right.","xMin":-3,"xMax":5,"yMin":-4,"yMax":8,"unit":34,"tickLabels":true,"quadratics":[{"a":1,"from":-3,"to":2,"arrows":"start"}],"segments":[{"from":[2,6],"to":[5,3],"arrows":"end"}],"points":[{"at":[2,4]},{"at":[2,6],"open":true}]}

{{< /apfigure >}}

We see the graph of $f(x)=\lvert x\rvert$ below. We see that the graph has a corner point at $x=0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = the absolute value of x, with a sharp corner point at the origin.","xMin":-3,"xMax":3,"yMin":-2,"yMax":3,"unit":48,"tickLabels":true,"segments":[{"from":[-3,3],"to":[0,0],"arrows":"start"},{"from":[0,0],"to":[3,3],"arrows":"end"}]}

{{< /apfigure >}}

We see that the graph of $f(x)=x^{\tfrac{2}{3}}$ below has a cusp at $x=0$. A cusp has a unique feature. Moving away from the cusp, both the left-hand and right-hand limits approach either infinity or negative infinity. Notice the tangent lines as $x$ approaches $0$ from both the left and the right appear to get increasingly steeper, but one has a negative slope, the other has a positive slope.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x to the two-thirds power, with a cusp point at the origin where both branches rise steeply.","xMin":-3,"xMax":3,"yMin":-2,"yMax":3,"unit":48,"tickLabels":true,"polylines":[{"through":[[-3,2.08],[-2.85,2.01],[-2.7,1.939],[-2.55,1.866],[-2.4,1.793],[-2.25,1.717],[-2.1,1.64],[-1.95,1.561],[-1.8,1.48],[-1.65,1.396],[-1.5,1.31],[-1.35,1.221],[-1.2,1.129],[-1.05,1.033],[-0.9,0.932],[-0.75,0.825],[-0.6,0.711],[-0.45,0.587],[-0.3,0.448],[-0.15,0.282],[0,0],[0.15,0.282],[0.3,0.448],[0.45,0.587],[0.6,0.711],[0.75,0.825],[0.9,0.932],[1.05,1.033],[1.2,1.129],[1.35,1.221],[1.5,1.31],[1.65,1.396],[1.8,1.48],[1.95,1.561],[2.1,1.64],[2.25,1.717],[2.4,1.793],[2.55,1.866],[2.7,1.939],[2.85,2.01],[3,2.08]],"arrows":true}]}

{{< /apfigure >}}

We see that the graph of $f(x)=x^{\tfrac{1}{3}}$ below has a vertical tangent at $x=0$. Recall that vertical tangents are vertical lines, so where a vertical tangent exists, the slope of the line is undefined. This is why the derivative, which measures the slope, does not exist there.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x to the one-third power, with a vertical tangent at the origin shown as a dashed vertical line.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":48,"tickLabels":true,"curves":[{"kind":"cbrt"}],"lines":[{"x":0,"dashed":true,"arrows":true}]}

{{< /apfigure >}}

{{< callout type="info" >}}
  **Differentiability.** A function $f(x)$ is differentiable at $x=a$ if the derivative exists at $x=a$, which means that $f'(a)$ exists.

  There are four cases for which a function $f(x)$ is not differentiable at a point $x=a$.

  1. When there is a discontinuity at $x=a$.
  2. When there is a corner point at $x=a$.
  3. When there is a cusp at $x=a$.
  4. Any other time when there is a vertical tangent at $x=a$.
{{< /callout >}}

**Example.** Using the graph below, determine where the function is (a) continuous, (b) discontinuous, (c) differentiable, (d) not differentiable. At the points where the graph is discontinuous or not differentiable, state why.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise-linear graph with an open circle at (-2, -1), a flat segment to a corner at (-1, -1), a rising segment through the origin to a filled point at (1, 1), an open circle at (1, 2), a segment up to a peak at (2, 3), then a segment falling steeply off the bottom right.","xMin":-5,"xMax":5,"yMin":-6,"yMax":6,"unit":38,"tickLabels":true,"segments":[{"from":[-4.5,-6],"to":[-2,-1],"arrows":"start"},{"from":[-2,-1],"to":[-1,-1]},{"from":[-1,-1],"to":[1,1]},{"from":[1,2],"to":[2,3]},{"from":[2,3],"to":[4.67,-5],"arrows":"end"}],"points":[{"at":[-2,-1],"open":true},{"at":[-1,-1]},{"at":[1,1]},{"at":[1,2],"open":true},{"at":[2,3]}],"texts":[{"at":[3.3,-2.3],"text":"f"}]}

{{< /apfigure >}}

**Solution.** The graph of $f(x)$ is continuous on $(-\infty,-2)\cup(-2,1)\cup(1,\infty)$. The graph of $f(x)$ has a removable discontinuity at $x=-2$ and a jump discontinuity at $x=1$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same piecewise graph, with the x-axis marked off into the three intervals where the function is continuous: from negative infinity to -2, from -2 to 1, and from 1 to infinity.","xMin":-5,"xMax":5,"yMin":-8,"yMax":6,"unit":34,"tickLabels":true,"segments":[{"from":[-4.5,-6],"to":[-2,-1],"arrows":"start"},{"from":[-2,-1],"to":[-1,-1]},{"from":[-1,-1],"to":[1,1]},{"from":[1,2],"to":[2,3]},{"from":[2,3],"to":[4.67,-5],"arrows":"end"},{"from":[-5,-6.8],"to":[-2.15,-6.8],"arrows":"start"},{"from":[-1.85,-6.8],"to":[0.85,-6.8],"arrows":false},{"from":[1.15,-6.8],"to":[5,-6.8],"arrows":"end"}],"points":[{"at":[-2,-1],"open":true},{"at":[-1,-1]},{"at":[1,1]},{"at":[1,2],"open":true},{"at":[2,3]}],"texts":[{"at":[3.3,-2.3],"text":"f"},{"at":[-3.5,-7.6],"text":"(-∞, -2)"},{"at":[-1.5,-7.6],"text":"(-2, 1)"},{"at":[3,-7.6],"text":"(1, ∞)"}]}

{{< /apfigure >}}

The graph of $f$ is differentiable on $(-\infty,-2)\cup(-2,-1)\cup(-1,1)\cup(1,2)\cup(2,\infty)$. The graph of $f(x)$ is not differentiable at $x=-2$ because it is a point of discontinuity, at $x=-1$ because of a sharp corner, at $x=1$ because it is a point of discontinuity, and at $x=2$ because of a sharp corner. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same piecewise graph labeled with sharp corners at (-1, -1) and (2, 3), discontinuities at (-2, -1) and (1, 1), and the x-axis marked off into the five intervals where the function is differentiable.","xMin":-5,"xMax":5,"yMin":-9,"yMax":6,"unit":34,"tickLabels":true,"segments":[{"from":[-4.5,-6],"to":[-2,-1],"arrows":"start"},{"from":[-2,-1],"to":[-1,-1]},{"from":[-1,-1],"to":[1,1]},{"from":[1,2],"to":[2,3]},{"from":[2,3],"to":[4.67,-5],"arrows":"end"},{"from":[-5,-7.6],"to":[-2.15,-7.6],"arrows":"start"},{"from":[-1.85,-7.6],"to":[-1.15,-7.6],"arrows":false},{"from":[-0.85,-7.6],"to":[0.85,-7.6],"arrows":false},{"from":[1.15,-7.6],"to":[1.85,-7.6],"arrows":false},{"from":[2.15,-7.6],"to":[5,-7.6],"arrows":"end"}],"points":[{"at":[-2,-1],"open":true},{"at":[-1,-1]},{"at":[1,1]},{"at":[1,2],"open":true},{"at":[2,3]}],"texts":[{"at":[3.3,-2.3],"text":"f"},{"at":[-4.9,5.7],"text":"Discontinuity at (-2, -1)","anchor":"start"},{"at":[-1.7,0.6],"text":"Sharp corner","anchor":"end"},{"at":[2.6,4.3],"text":"Sharp corner","anchor":"start"},{"at":[-4.9,5],"text":"Discontinuity at (1, 1)","anchor":"start"},{"at":[-3.3,-8.7],"text":"(-∞,-2)"},{"at":[-1.5,-8.7],"text":"(-2,-1)"},{"at":[0,-8.7],"text":"(-1,1)"},{"at":[1.5,-8.7],"text":"(1,2)"},{"at":[3.5,-8.7],"text":"(2,∞)"}]}

{{< /apfigure >}}

{{< fillin
  question="Using the graph of $y=f(x)$ shown below, state the interval(s) on which $f$ is continuous."
  answer="(-\infty,1)\cup(1,3)\cup(3,\infty)"
  answerDisplay="$(-\infty,1)\cup(1,3)\cup(3,\infty)$"
  hint="The graph breaks only where the open circles sit, at $x=1$ and $x=3$."
>}}

{{< fillin
  question="Using the same graph, state the $x$-value(s) at which $f$ is not differentiable. Separate multiple values with a comma."
  answer="1,3"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$1$ and $3$"
  hint="A function fails to be differentiable at any point of discontinuity."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph with three pieces: a line falling from a filled point at (1, 8) toward the lower left with an arrow, a curve from an open point near (1, 0.7) down to an open point near (3, -2.8), and a curve rising from a filled point at (3, 2) toward the upper right with an arrow.","xMin":-5,"xMax":5,"yMin":-4,"yMax":8,"unit":36,"tickLabels":true,"segments":[{"from":[1,8],"to":[-3,4],"arrows":"end"}],"quadratics":[{"a":-0.15,"b":-1.15,"c":2,"from":1,"to":3,"arrows":false},{"a":1.2,"b":-7.2,"c":12.8,"from":3,"to":4.6,"arrows":"end"}],"points":[{"at":[1,8]},{"at":[1,0.7],"open":true},{"at":[3,-2.8],"open":true},{"at":[3,2]}],"texts":[{"at":[0.15,4.3],"text":"y = f(x)"}]}

{{< /apfigure >}}

### Finding an Equation of a Line Tangent to the Graph of a Function

The equation of a tangent line to a curve of the function $f(x)$ at $x=a$ is derived from the point-slope form of a line, $y=m(x-x_1)+y_1$. The slope of the line is the slope of the curve at $x=a$ and is therefore equal to $f'(a)$, the derivative of $f(x)$ at $x=a$. The coordinate pair of the point on the line at $x=a$ is $(a,f(a))$.

If we substitute into the point-slope form, with $m=f'(a)$, $x_1=a$, and $y_1=f(a)$, the equation of the tangent line is

$$y=f'(a)(x-a)+f(a)$$

{{< callout type="info" >}}
  **The Equation of a Line Tangent to a Curve of the Function $f$.** The equation of a line tangent to the curve of a function $f$ at a point $x=a$ is

  $$y=f'(a)(x-a)+f(a)$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To: Given a function $f$, find the equation of a line tangent to the function at $x=a$.**

  1. Find the derivative of $f(x)$ at $x=a$ using $f'(a)=\lim_{h\to0}\tfrac{f(a+h)-f(a)}{h}$.
  2. Evaluate the function at $x=a$. This is $f(a)$.
  3. Substitute $(a,f(a))$ and $f'(a)$ into $y=f'(a)(x-a)+f(a)$.
  4. Write the equation of the tangent line in the form $y=mx+b$.
{{< /callout >}}

**Example.** Find the equation of a line tangent to the curve $f(x)=x^2-4x$ at $x=3$.

**Solution.** Using $f'(a)=\lim_{h\to0}\tfrac{f(a+h)-f(a)}{h}$, substitute $f(a+h)=(a+h)^2-4(a+h)$ and $f(a)=a^2-4a$.

$$
\begin{array}{ll}
f'(a)=\lim\limits_{h\to0}\tfrac{(a+h)(a+h)-4(a+h)-(a^2-4a)}{h} & \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{a^2+2ah+h^2-4a-4h-a^2+4a}{h} & \text{Remove parentheses and combine like terms.} \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{2ah+h^2-4h}{h} & \\[4pt]
\phantom{f'(a)}=\lim\limits_{h\to0}\tfrac{h(2a+h-4)}{h} & \text{Factor out }h. \\[4pt]
f'(a)=2a-4 & \text{Evaluate the limit.} \\[4pt]
f'(3)=2(3)-4=2 &
\end{array}
$$

Equation of tangent line at $x=3$:

$$
\begin{array}{l}
y=f'(a)(x-a)+f(a) \\[4pt]
y=f'(3)(x-3)+f(3) \\[4pt]
y=2(x-3)+(-3) \\[4pt]
y=2x-9
\end{array}
$$

**Analysis.** We can use a graphing utility to graph the function and the tangent line. In so doing, we can observe the point of tangency at $x=3$ as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x squared minus 4x, an upward parabola, with the tangent line y = 2x - 9 drawn touching the curve at the point (3, -3).","xMin":-1,"xMax":7,"yMin":-5,"yMax":4,"unit":52,"tickLabels":true,"quadratics":[{"a":1,"b":-4}],"lines":[{"through":[[3,-3],[4,-1]],"arrows":true,"label":"y = 2x - 9"}],"points":[{"at":[3,-3]}],"texts":[{"at":[0.6,3.5],"text":"f(x) = x² - 4x"}]}

{{< /apfigure >}}

{{< fillin
  question="Find the equation of a tangent line to the curve of the function $f(x)=5x^2-x+4$ at $x=2$. Write the equation in slope-intercept form."
  answer="19x-16"
  answerForm="slope-intercept-form"
  answerDisplay="$y=19x-16$"
  hint="Find $f'(2)$ and $f(2)$, then substitute into $y=f'(a)(x-a)+f(a)$."
>}}

### Finding the Instantaneous Speed of a Particle

If a function measures position versus time, the derivative measures displacement versus time, or the speed of the object. A change in speed or direction relative to a change in time is known as **velocity**. The velocity at a given instant is known as **instantaneous velocity**.

In trying to find the speed or velocity of an object at a given instant, we seem to encounter a contradiction. We normally define speed as the distance traveled divided by the elapsed time. But in an instant, no distance is traveled, and no time elapses. How will we divide zero by zero? The use of a derivative solves this problem. A derivative allows us to say that even while the object's velocity is constantly changing, it has a certain velocity at a given instant. That means that if the object traveled at that exact velocity for a unit of time, it would travel the specified distance.

{{< callout type="info" >}}
  **Instantaneous Velocity.** Let the function $s(t)$ represent the position of an object at time $t$. The instantaneous velocity or velocity of the object at time $t=a$ is given by

  $$s'(a)=\lim\limits_{h\to0}\tfrac{s(a+h)-s(a)}{h}$$
{{< /callout >}}

**Example.** A ball is tossed upward from a height of $200$ feet with an initial velocity of $36$ ft/sec. If the height of the ball in feet after $t$ seconds is given by $s(t)=-16t^2+36t+200$, find the instantaneous velocity of the ball at $t=2$.

**Solution.** First, we must find the derivative $s'(t)$. Then we evaluate the derivative at $t=2$, using $s(a+h)=-16(a+h)^2+36(a+h)+200$ and $s(a)=-16a^2+36a+200$.

$$
\begin{array}{l}
s'(a)=\lim\limits_{h\to0}\tfrac{s(a+h)-s(a)}{h} \\[4pt]
\phantom{s'(a)}=\lim\limits_{h\to0}\tfrac{-16(a+h)^2+36(a+h)+200-(-16a^2+36a+200)}{h} \\[4pt]
\phantom{s'(a)}=\lim\limits_{h\to0}\tfrac{-16(a^2+2ah+h^2)+36(a+h)+200-(-16a^2+36a+200)}{h} \\[4pt]
\phantom{s'(a)}=\lim\limits_{h\to0}\tfrac{-16a^2-32ah-16h^2+36a+36h+200+16a^2-36a-200}{h} \\[4pt]
\phantom{s'(a)}=\lim\limits_{h\to0}\tfrac{-32ah-16h^2+36h}{h} \\[4pt]
\phantom{s'(a)}=\lim\limits_{h\to0}\tfrac{h(-32a-16h+36)}{h} \\[4pt]
\phantom{s'(a)}=\lim\limits_{h\to0}(-32a-16h+36) \\[4pt]
\phantom{s'(a)}=-32a-16\cdot0+36 \\[4pt]
s'(a)=-32a+36 \\[4pt]
s'(2)=-32(2)+36 \\[4pt]
\phantom{s'(2)}=-28
\end{array}
$$

**Analysis.** This result means that at time $t=2$ seconds, the ball is dropping at a rate of $28$ ft/sec.

{{< fillin
  question="A fireworks rocket is shot upward out of a pit $12$ ft below the ground at a velocity of $60$ ft/sec. Its height in feet after $t$ seconds is given by $s=-16t^2+60t-12$. What is its instantaneous velocity after $4$ seconds? Enter the number only."
  answer="-68"
  answerForm="decimal"
  answerDisplay="$-68$ ft/s"
  hint="Find $s'(t)$ and evaluate it at $t=4$."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and
practice with derivatives.
{{< /callout >}}

## Key equations

| average rate of change | $\text{AROC}=\tfrac{f(a+h)-f(a)}{h}$ |
| :--- | :--- |
| derivative of a function | $f'(a)=\lim_{h\to0}\tfrac{f(a+h)-f(a)}{h}$ |

## Key concepts

- The slope of the secant line connecting two points is the average rate of change of the function between those points.
- The derivative, or instantaneous rate of change, is a measure of the slope of the curve of a function at a given point, or the slope of the line tangent to the curve at that point.
- The difference quotient is the quotient in the formula for the instantaneous rate of change: $\tfrac{f(a+h)-f(a)}{h}$.
- Instantaneous rates of change can be used to find solutions to many real-world problems.
- The instantaneous rate of change can be found by observing the slope of a function at a point on a graph by drawing a line tangent to the function at that point.
- Instantaneous rates of change can be interpreted to describe real-world situations.
- Some functions are not differentiable at a point or points.
- The point-slope form of a line can be used to find the equation of a line tangent to the curve of a function.
- Velocity is a change in position relative to time. Instantaneous velocity describes the velocity of an object at a given instant. Average velocity describes the velocity maintained over an interval of time.
- Using the derivative makes it possible to calculate instantaneous velocity even though there is no elapsed time.

## Practice

### Find the derivative of a function

{{< fillin
  question="Use the definition of the derivative, $\lim_{h\to0}\tfrac{f(x+h)-f(x)}{h}$, to find the derivative of $f(x)=-2x+1$."
  answer="-2"
  answerForm="polynomial"
  answerDisplay="$f'(x)=-2$"
  hint="Substitute $f(x+h)=-2(x+h)+1$ and $f(x)=-2x+1$ into the difference quotient, then simplify."
>}}

{{< fillin
  question="Use the definition of the derivative to find the derivative of $f(x)=2x^2+x-3$."
  answer="4x+1"
  answerForm="polynomial"
  answerDisplay="$f'(x)=4x+1$"
  hint="Expand $f(x+h)-f(x)$, divide by $h$, then let $h\to0$."
>}}

{{< fillin
  question="Use the definition of the derivative to find the derivative of $f(x)=\tfrac{5-2x}{3+2x}$."
  answer="\frac{-16}{(3+2x)^{2}}"
  answerForm="reduced-fraction"
  answerDisplay="$f'(x)=\tfrac{-16}{(3+2x)^2}$"
  hint="Combine the two fractions in the difference quotient over a common denominator before canceling the $h$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise graph: a horizontal ray at y = -1 ending in an open circle at (-2, -1), a rising segment from an open circle at (-2, -4) to a filled point at (0, 0), a flat segment from an open circle at (0, 1) to a filled point at (2, 1), then a segment falling steeply to the lower right with an arrow.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":42,"tickLabels":true,"segments":[{"from":[-5,-1],"to":[-2,-1],"arrows":"start"},{"from":[-2,-4],"to":[0,0]},{"from":[0,1],"to":[2,1]},{"from":[2,1],"to":[4.33,-5],"arrows":"end"}],"points":[{"at":[-2,-1],"open":true},{"at":[-2,-4],"open":true},{"at":[0,0]},{"at":[0,1],"open":true},{"at":[2,1]}],"texts":[{"at":[3.3,-2],"text":"f(x)"}]}

{{< /apfigure >}}

{{< fillin
  question="The graph of a function $f$ is shown above. At which $x$-value(s) is $f$ discontinuous? Separate multiple values with a comma."
  answer="-2,0"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-2$ and $x=0$"
  hint="Look for the open circles that leave a jump in the graph."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A zigzag graph with open circles at (-4, 0) and (5, -2), corners at (-2, 2), (0, 0), (1, 1), (3, -2), and (4, 0), and a separate curve starting at an open circle at (5, 3) and rising to the upper right with an arrow.","xMin":-5,"xMax":6,"yMin":-4,"yMax":5,"unit":44,"tickLabels":true,"segments":[{"from":[-4,0],"to":[-2,2]},{"from":[-2,2],"to":[0,0]},{"from":[0,0],"to":[1,1]},{"from":[1,1],"to":[3,-2]},{"from":[3,-2],"to":[4,0]},{"from":[4,0],"to":[5,-2]}],"quadratics":[{"a":2,"b":-20,"c":53,"from":5,"to":5.6,"arrows":"end"}],"points":[{"at":[-4,0],"open":true},{"at":[-2,2]},{"at":[0,0]},{"at":[1,1]},{"at":[3,-2]},{"at":[4,0]},{"at":[5,-2],"open":true},{"at":[5,3],"open":true}],"texts":[{"at":[3.5,-3],"text":"f(x)"}]}

{{< /apfigure >}}

{{< fillin
  question="The graph of a function $f$ is shown above. At what $x$-value is $f$ discontinuous?"
  answer="5"
  answerForm="decimal"
  answerDisplay="$x=5$"
  hint="Find the single open circle that starts a new, disconnected piece of the graph."
>}}

### Find instantaneous rates of change

{{< fillin
  question="Find the average rate of change between the points $(4,-3)$ and $(-2,-1)$. Enter the answer as a fraction."
  answer="-\frac{1}{3}"
  answerForm="fraction"
  answerDisplay="$-\tfrac{1}{3}$"
  hint="Divide the change in $y$ by the change in $x$."
>}}

{{< multiplechoice
  question="Find the average rate of change between the points $(7,-2)$ and $(7,10)$."
  answer="undefined"
  hint="The two points share the same $x$-coordinate."
>}}
undefined
$0$
$6$
$12$
{{< /multiplechoice >}}

{{< multiplechoice
  question="The volume $f(t)$ of a tank of gasoline, in gallons, is a function of $t$ minutes after noon. Explain what $f'(30)=-20$ means."
  answer="At 12:30 p.m., the tank is losing 20 gallons per minute."
  hint="$f'$ measures a rate, in gallons per minute, not an amount."
>}}
At 12:30 p.m., the tank holds 20 gallons.
Thirty minutes after noon, the tank has lost a total of 20 gallons.
At 12:30 p.m., the tank is losing 20 gallons per minute.
{{< /multiplechoice >}}

{{< fillin
  question="The volume $V$ of a sphere with respect to its radius $r$ is given by $V=\tfrac{4}{3}\pi r^3$. Find the instantaneous rate of change of $V$ when $r=3$ cm. Give the exact answer in terms of $\pi$."
  answer="36\pi"
  answerForm="exact"
  answerDisplay="$36\pi\text{ cm}^3\text{ per cm}$"
  hint="Find $\tfrac{dV}{dr}$ and evaluate it at $r=3$."
>}}

### Find an equation of the tangent line to the graph of a function at a point

{{< fillin
  question="Find the equation of the tangent line to the curve $f(x)=x^3+1$ at $x=2$. Write the equation in slope-intercept form."
  answer="12x-15"
  answerForm="slope-intercept-form"
  answerDisplay="$y=12x-15$"
  hint="Find $f'(2)$ and $f(2)$, then substitute into $y=f'(a)(x-a)+f(a)$."
>}}

{{< fillin
  question="Find $k$ such that the line $y=4x-9$ is tangent to the graph of $f(x)=x^2-kx$. Enter both values of $k$, separated by a comma."
  answer="-10,2"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$k=-10$ or $k=2$"
  hint="Set $f'(x)=2x-k$ equal to the line's slope $4$, and set $f(x)$ equal to the line's output at that $x$, then solve the two equations together."
>}}

### Find the instantaneous velocity of a particle

{{< multiplechoice
  question="A car traveled 110 miles during the time period from 2:00 p.m. to 4:00 p.m. At exactly 2:30 p.m., the speed of the car registered exactly 62 miles per hour. What is another name for the speed of the car at 2:30 p.m., and why does it differ from the average velocity?"
  answer="It is the instantaneous velocity; it differs because average velocity gives the velocity over an interval, while instantaneous velocity is the velocity at one instant."
  hint="Average velocity uses total distance over total time; a single instant does not."
>}}
It is the average velocity; it differs because instantaneous velocity is always higher than average velocity.
It is the instantaneous velocity; it differs because average velocity gives the velocity over an interval, while instantaneous velocity is the velocity at one instant.
It is the marginal velocity; it is identical to the average velocity for any car.
{{< /multiplechoice >}}

{{< multiplechoice
  question="The height, $s$, of a projectile after $t$ seconds is given by $s(t)=-16t^2+80t$. Explain what $s(2)=96$ means."
  answer="The height of the projectile after 2 seconds is 96 feet."
  hint="$s(t)$ gives a height, not a rate."
>}}
The projectile's velocity after 2 seconds is 96 feet per second.
The projectile reaches its maximum height of 96 feet after 2 seconds.
The height of the projectile after 2 seconds is 96 feet.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For the same projectile, $s(t)=-16t^2+80t$, explain what $s(0)=0$ and $s(5)=0$ together mean."
  answer="The projectile starts on the ground, and falls back to earth again after 5 seconds."
  hint="Both statements describe the height $s(t)$, not the velocity $s'(t)$."
>}}
The projectile starts on the ground, and falls back to earth again after 5 seconds.
The projectile takes off at $t=5$ seconds and lands at $t=0$ seconds.
The projectile's velocity is zero at $t=0$ and at $t=5$ seconds.
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 12.4: Derivatives](https://openstax.org/books/precalculus-2e/pages/12-4-derivatives) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all 22 instructional figures as accessible spec-first SVGs, each independently checked against the rendered PDF (true pages 1221–1242). The generic secant/tangent-construction figures (the curve through $(a,f(a))$ and $(a+h,f(a+h))$, and the tangent-vs-two-secants figure) are unnamed in the source, so both are fitted to the same representative parabola $f(x)=0.5x^2$ with explicit sample points, disclosed here since the source states them symbolically. The zoom-sequence figure illustrating linearity at a differentiable point (originally one image combining a wide view and an inset) is split into two sequential figures — a wide view with a marked zoom box, then a close-up at that box's window — since the engine has no inset-with-callout-arrow primitive; the boxed function is a representative downward parabola, not a source-named one. $f(x)=x^3-2x^2+1$ (Example 6's graph) was fitted by solving for the cubic's four coefficients from the two turning points and slopes the source prints, then confirmed against every printed solution value the figure feeds (all matched exactly); the source's Graphical-section turning-point figure (printed exercises 35–44) is not recreated here, since none of its items is used. The two "For the following exercises, consider the graph of the function $f$" items whose `<problem>` is empty in the pinned CNXML (the source poses the question through a printed figure the transcription tool cannot extract) were reconstructed as exact piecewise-linear graphs from the rendered PDF art, corner and jump coordinates read directly off the page, and both are used above as fill-ins; Example 9's three-stage piecewise graph and the Try It graph that follows it were likewise reconstructed from the printed art, since their CNXML alt text gives no coordinates asking for the $x$-value(s) of discontinuity — the only ask their non-differentiability solutions can source independently. Every "explain the notation/function in words" item is a multiple choice whose correct option is the source's own printed sentence, since a fill-in cannot grade a categorical explanation. Fourteen selected end-of-section exercises were adapted, one apiece, into fourteen interactive Practice components across the section's four objective groups, every one independently re-derived (including by running the arithmetic in Node) rather than read off the source key; the Algebraic set's derivative-by-definition items keep only the derivative itself as the graded response, since the definition the exercise names is process, not answer. Kept the "Media" callout's introductory sentence but omitted its two external video links, matching house precedent elsewhere in this book.</small>
