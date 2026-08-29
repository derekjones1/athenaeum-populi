---
title: Continuity
description: >-
  Determining whether a function is continuous at a number, classifying jump
  and removable discontinuities, finding the input values where a piecewise
  function is discontinuous, and determining whether a function is
  continuous — adapted from OpenStax Precalculus 2e, Section 12.3.
source_section: "12.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine whether a function is continuous at a number
- Determine the numbers for which a function is discontinuous
- Determine whether a function is continuous
{{< /callout >}}

Arizona is known for its dry heat. On a particular day, the temperature might rise as high as $118^\circ\text{F}$ and drop down only to a brisk $95^\circ\text{F}$. The figure below shows the function $T$, where the output of $T(x)$ is the temperature in Fahrenheit degrees and the input $x$ is the time of day, using a 24-hour clock on a particular summer day.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve giving temperature in degrees Fahrenheit as a function of the hour of the day, from hour 0 to hour 24. The curve dips to a low near hour 2, rises steadily to a high near hour 16, then falls back down through hour 24, with no breaks, holes, or jumps anywhere along it.","xMin":0,"xMax":24,"yMin":90,"yMax":120,"unit":14,"yUnit":8,"tickLabels":true,"xTickStep":4,"yTickStep":5,"xLabel":"Hours Since Midnight","yLabel":"Temperature","curves":[{"kind":"sine","a":11,"b":0.224399,"h":9,"k":107,"arrows":false}]}
{{< /apfigure >}}

When we analyze this graph, we notice a specific characteristic. There are no breaks in the graph. We could trace the graph without picking up our pencil. This single observation tells us a great deal about the function. In this section, we will investigate functions with and without breaks.

### Determining Whether a Function Is Continuous at a Number

Let's consider a specific example of temperature in terms of date and location, such as June 27, 2013, in Phoenix, AZ. The graph above indicates that, at 2 a.m., the temperature was $96^\circ\text{F}$. By 2 p.m. the temperature had risen to $116^\circ\text{F}$, and by 4 p.m. it was $118^\circ\text{F}$. Sometime between 2 a.m. and 4 p.m., the temperature outside must have been exactly $110.5^\circ\text{F}$. In fact, any temperature between $96^\circ\text{F}$ and $118^\circ\text{F}$ occurred at some point that day. This means all real numbers in the output between $96^\circ\text{F}$ and $118^\circ\text{F}$ are generated at some point by the function according to the intermediate value theorem.

Look again at the temperature graph. There are no breaks in the function's graph for this 24-hour period. At no point did the temperature cease to exist, nor was there a point at which the temperature jumped instantaneously by several degrees. A function that has no holes or breaks in its graph is known as a **continuous function**. Temperature as a function of time is an example of a continuous function.

If temperature represents a continuous function, what kind of function would not be continuous? Consider an example of dollars expressed as a function of hours of parking. Let's create the function $D$, where $D(x)$ is the output representing cost in dollars for parking $x$ number of hours. See the figure below.

Suppose a parking garage charges \$4.00 per hour or fraction of an hour, with a \$25 per day maximum charge. Park for two hours and five minutes and the charge is \$12. Park an additional hour and the charge is \$16. We can never be charged \$13, \$14, or \$15. There are real numbers between 12 and 16 that the function never outputs. There are breaks in the function's graph for this 24-hour period, points at which the price of parking jumps instantaneously by several dollars.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A stepwise function giving the parking charge in dollars as a function of hours parked. The charge is $4 from 0 up to but not including 1 hour, $8 from 1 up to 2 hours, $12 from 2 up to 3 hours, $16 from 3 up to 4 hours, $20 from 4 up to 5 hours, and a flat $24 from 5 hours through 24 hours, with a filled dot at the start of each step and an open dot at its end.","xMin":0,"xMax":24,"yMin":0,"yMax":28,"unit":14,"yUnit":10,"tickLabels":true,"xTickStep":4,"yTickStep":4,"xLabel":"Hours Parked","yLabel":"Dollars","segments":[{"from":[0,4],"to":[1,4]},{"from":[1,8],"to":[2,8]},{"from":[2,12],"to":[3,12]},{"from":[3,16],"to":[4,16]},{"from":[4,20],"to":[5,20]},{"from":[5,24],"to":[24,24]}],"points":[{"at":[0,4]},{"at":[1,4],"open":true},{"at":[1,8]},{"at":[2,8],"open":true},{"at":[2,12]},{"at":[3,12],"open":true},{"at":[3,16]},{"at":[4,16],"open":true},{"at":[4,20]},{"at":[5,20],"open":true},{"at":[5,24]},{"at":[24,24]}]}
{{< /apfigure >}}

A function that remains level for an interval and then jumps instantaneously to a higher value is called a **stepwise function**. This function is an example.

A function that has any hole or break in its graph is known as a **discontinuous function**. A stepwise function, such as parking-garage charges as a function of hours parked, is an example of a discontinuous function.

So how can we decide if a function is continuous at a particular number? We can check three different conditions. Let's use the function $y=f(x)$ represented below as an example.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An increasing curve on the window from x = -2 to 6, y = -3 to 6, with an open circle at the point where x equals a.","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"arrows":true}],"points":[{"at":[2,1.5],"open":true}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

**Condition 1** According to Condition 1, the function $f(a)$ defined at $x=a$ must exist. In other words, there is a $y$-coordinate at $x=a$ as in the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same increasing curve, still with an open circle at x = a, plus a separate filled point directly below the hole, labeled f(a).","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"arrows":true}],"points":[{"at":[2,1.5],"open":true},{"at":[2,0],"label":"f(a)"}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

**Condition 2** According to Condition 2, at $x=a$ the limit, written $\lim_{x\to a}f(x)$, must exist. This means that at $x=a$ the left-hand limit must equal the right-hand limit. Notice as the graph of $f$ in the figures above approaches $x=a$ from the left and right, the same $y$-coordinate is approached. Therefore, Condition 2 is satisfied. However, there could still be a hole in the graph at $x=a$.

**Condition 3** According to Condition 3, the corresponding $y$ coordinate at $x=a$ fills in the hole in the graph of $f$. This is written $\lim_{x\to a}f(x)=f(a)$.

Satisfying all three conditions means that the function is continuous. All three conditions are satisfied for the function represented below, so the function is continuous at $x=a$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same increasing curve with a single filled point sitting on the curve itself at x = a, labeled f(a), with no hole anywhere.","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"arrows":true}],"points":[{"at":[2,1.5],"label":"f(a)","labelSide":"w"}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

The next several figures provide several examples of graphs of functions that are not continuous at $x=a$ and the condition or conditions that fail.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The increasing curve with an open circle at x = a and no filled point anywhere on the vertical line through a.","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"arrows":true}],"points":[{"at":[2,1.5],"open":true}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

*Condition 2 is satisfied. Conditions 1 and 3 both fail.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The increasing curve with an open circle at x = a and a separate filled point directly below it, labeled f(a).","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"arrows":true}],"points":[{"at":[2,1.5],"open":true},{"at":[2,0],"label":"f(a)"}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

*Conditions 1 and 2 are both satisfied. Condition 3 fails.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise increasing graph: one branch rises from the lower left to a filled point at x = a, and a second branch begins lower, at an open circle directly below that filled point, then continues rising to the upper right.","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"to":2,"arrows":"start"},{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":0.5,"from":2,"arrows":"end"}],"points":[{"at":[2,1.5]},{"at":[2,0.5],"open":true}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

*Condition 1 is satisfied. Conditions 2 and 3 fail.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise increasing graph like the previous one, but with no filled point anywhere: one branch rises from the lower left to an open circle at x = a, and a second branch begins lower, at a separate open circle directly below it, then continues rising to the upper right.","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"to":2,"arrows":"start"},{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":0.5,"from":2,"arrows":"end"}],"points":[{"at":[2,1.5],"open":true},{"at":[2,0.5],"open":true}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

*Conditions 1, 2, and 3 all fail.*

{{< callout type="info" >}}
  **Definition of Continuity.** A function $f(x)$ is **continuous** at $x=a$ provided all three of the following conditions hold true:

  - Condition 1: $f(a)$ exists.
  - Condition 2: $\lim_{x\to a}f(x)$ exists at $x=a$.
  - Condition 3: $\lim_{x\to a}f(x)=f(a)$.

  If a function $f(x)$ is not continuous at $x=a$, the function is **discontinuous** at $x=a$.
{{< /callout >}}

### Identifying a Jump Discontinuity

Discontinuity can occur in different ways. We saw in the previous section that a function could have a **left-hand limit** and a **right-hand limit** even if they are not equal. If the left- and right-hand limits exist but are different, the graph "jumps" at $x=a$. The function is said to have a jump discontinuity.

As an example, look at the graph of the function $y=f(x)$ below. Notice as $x$ approaches $a$ how the output approaches different values from the left and from the right.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise increasing graph: one branch rises from the lower left to a filled point at x = a, and a second branch begins lower, at an open circle directly below that filled point, then continues rising to the upper right.","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"to":2,"arrows":"start"},{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":0.5,"from":2,"arrows":"end"}],"points":[{"at":[2,1.5]},{"at":[2,0.5],"open":true}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Jump Discontinuity.** A function $f(x)$ has a **jump discontinuity** at $x=a$ if the left- and right-hand limits both exist but are not equal: $\lim_{x\to a^-}f(x)\ne\lim_{x\to a^+}f(x)$.
{{< /callout >}}

### Identifying Removable Discontinuity

Some functions have a discontinuity, but it is possible to redefine the function at that point to make it continuous. This type of function is said to have a removable discontinuity. Let's look at the function $y=f(x)$ represented by the graph below. The function has a limit. However, there is a hole at $x=a$. The hole can be filled by extending the domain to include the input $x=a$ and defining the corresponding output of the function at that value as the limit of the function at $x=a$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The increasing curve with an open circle at x = a and no filled point anywhere on the vertical line through a.","xMin":-2,"xMax":6,"yMin":-3,"yMax":6,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":1.5,"arrows":true}],"points":[{"at":[2,1.5],"open":true}],"texts":[{"at":[2,-3.4],"text":"a"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Removable Discontinuity.** A function $f(x)$ has a **removable discontinuity** at $x=a$ if the limit, $\lim_{x\to a}f(x)$, exists, but either

  - $f(a)$ does not exist, **or**
  - $f(a)$, the value of the function at $x=a$, does not equal the limit, $f(a)\ne\lim_{x\to a}f(x)$.
{{< /callout >}}

**Example.** Identify all discontinuities for the following functions as either a jump or a removable discontinuity.

a. $f(x)=\tfrac{x^2-2x-15}{x-5}$
b. $g(x)=\begin{cases}x+1,&x<2\\-x,&x\ge2\end{cases}$

**Solution.**

a. Notice that the function is defined everywhere except at $x=5$.

   Thus, $f(5)$ does not exist, Condition 2 is not satisfied. Since Condition 1 is satisfied, the limit as $x$ approaches 5 is 8, and Condition 2 is not satisfied. This means there is a removable discontinuity at $x=5$.

b. Condition 2 is satisfied because $g(2)=-2$.

   Notice that the function is a piecewise function, and for each piece, the function is defined everywhere on its domain. Let's examine Condition 1 by determining the left- and right-hand limits as $x$ approaches 2.

   Left-hand limit: $\lim_{x\to2^-}(x+1)=2+1=3$. The left-hand limit exists.

   Right-hand limit: $\lim_{x\to2^+}(-x)=-2$. The right-hand limit exists. But

   $$\lim\limits_{x\to2^-}f(x)\ne\lim\limits_{x\to2^+}f(x).$$

   So, $\lim_{x\to2}f(x)$ does not exist, and Condition 2 fails: There is no removable discontinuity. However, since both left- and right-hand limits exist but are not equal, the conditions are satisfied for a jump discontinuity at $x=2$.

{{< multiplechoice
  question="Identify the discontinuity of $f(x)=\tfrac{x^2-6x}{x-6}$ at $x=6$."
  mode="text"
  answer="Removable discontinuity"
  hint="Check whether $f(6)$ exists, then factor the numerator and check whether the limit as $x\to6$ exists."
>}}
Removable discontinuity
Jump discontinuity
The function is continuous at $x=6$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the discontinuity of $g(x)=\begin{cases}\sqrt{x},&0\le x<4\\2x,&x\ge4\end{cases}$ at $x=4$."
  mode="text"
  answer="Jump discontinuity"
  hint="Compare the left-hand limit $\lim_{x\to4^-}\sqrt{x}$ with the right-hand limit $\lim_{x\to4^+}2x$."
>}}
The function is continuous at $x=4$
Jump discontinuity
Removable discontinuity
{{< /multiplechoice >}}

### Recognizing Continuous and Discontinuous Real-Number Functions

Many of the functions we have encountered in earlier chapters are continuous everywhere. They never have a hole in them, and they never jump from one value to the next. For all of these functions, the limit of $f(x)$ as $x$ approaches $a$ is the same as the value of $f(x)$ when $x=a$. So $\lim_{x\to a}f(x)=f(a)$. There are some functions that are continuous everywhere and some that are only continuous where they are defined on their domain because they are not defined for all real numbers.

{{< callout type="info" >}}
  **Examples of Continuous Functions.** The following functions are continuous everywhere:

  | Polynomial functions | Ex: $f(x)=x^4-9x^2$ |
  | :--- | :--- |
  | Exponential functions | Ex: $f(x)=4^{x+2}-5$ |
  | Sine functions | Ex: $f(x)=\sin(2x)-4$ |
  | Cosine functions | Ex: $f(x)=-\cos\left(x+\tfrac{\pi}{3}\right)$ |

  The following functions are continuous everywhere they are defined on their domain:

  | Logarithmic functions | Ex: $f(x)=2\ln(x)$, $x>0$ |
  | :--- | :--- |
  | Tangent functions | Ex: $f(x)=\tan(x)+2$, $x\ne\tfrac{\pi}{2}+k\pi$, $k$ is an integer |
  | Rational functions | Ex: $f(x)=\tfrac{x^2-25}{x-7}$, $x\ne7$ |
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a function $f(x)$, determine if the function is continuous at $x=a$.

  1. Check Condition 1: $f(a)$ exists.
  2. Check Condition 2: $\lim_{x\to a}f(x)$ exists at $x=a$.
  3. Check Condition 3: $\lim_{x\to a}f(x)=f(a)$.
  4. If all three conditions are satisfied, the function is continuous at $x=a$. If any one of the conditions is not satisfied, the function is not continuous at $x=a$.
{{< /callout >}}

**Example.** Determine whether the function $f(x)=\begin{cases}4x,&x\le3\\8+x,&x>3\end{cases}$ is continuous at

a. $x=3$
b. $x=\tfrac{8}{3}$

**Solution.** To determine if the function $f$ is continuous at $x=a$, we will determine if the three conditions of continuity are satisfied at $x=a$.

a. Condition 1: Does $f(a)$ exist?

   $$f(3)=4(3)=12\ \Rightarrow\ \text{Condition 1 is satisfied.}$$

   Condition 2: Does $\lim_{x\to3}f(x)$ exist?

   To the left of $x=3$, $f(x)=4x$; to the right of $x=3$, $f(x)=8+x$. We need to evaluate the left- and right-hand limits as $x$ approaches 1.

   Left-hand limit: $\lim_{x\to3^-}f(x)=\lim_{x\to3^-}4(3)=12$

   Right-hand limit: $\lim_{x\to3^+}f(x)=\lim_{x\to3^+}(8+x)=8+3=11$

   Because $\lim_{x\to3^-}f(x)\ne\lim_{x\to3^+}f(x)$, $\lim_{x\to3}f(x)$ does not exist.

   $$\Rightarrow\ \text{Condition 2 fails.}$$

   There is no need to proceed further. Condition 2 fails at $x=3$. If any of the conditions of continuity are not satisfied at $x=3$, the function $f(x)$ is not continuous at $x=3$.

b. $x=\tfrac{8}{3}$

   Condition 1: Does $f\left(\tfrac{8}{3}\right)$ exist?

   $$f\left(\tfrac{8}{3}\right)=4\left(\tfrac{8}{3}\right)=\tfrac{32}{3}\ \Rightarrow\ \text{Condition 1 is satisfied.}$$

   Condition 2: Does $\lim_{x\to\frac83}f(x)$ exist?

   To the left of $x=\tfrac{8}{3}$, $f(x)=4x$; to the right of $x=\tfrac{8}{3}$, $f(x)=8+x$. We need to evaluate the left- and right-hand limits as $x$ approaches $\tfrac{8}{3}$.

   Left-hand limit: $\lim_{x\to\frac83^-}f(x)=\lim_{x\to\frac83^-}4\left(\tfrac{8}{3}\right)=\tfrac{32}{3}$

   Right-hand limit: $\lim_{x\to\frac83^+}f(x)=\lim_{x\to\frac83^+}(8+x)=8+\tfrac{8}{3}=\tfrac{32}{3}$

   Because $\lim_{x\to\frac83}f(x)$ exists,

   $$\Rightarrow\ \text{Condition 2 is satisfied.}$$

   Condition 3: Is $f\left(\tfrac{8}{3}\right)=\lim_{x\to\frac83}f(x)$?

   $$f\left(\tfrac{32}{3}\right)=\tfrac{32}{3}=\lim\limits_{x\to\frac83}f(x)\ \Rightarrow\ \text{Condition 3 is satisfied.}$$

   Because all three conditions of continuity are satisfied at $x=\tfrac{8}{3}$, the function $f(x)$ is continuous at $x=\tfrac{8}{3}$.

{{< multiplechoice
  question="Determine whether $f(x)=\begin{cases}\tfrac{1}{x},&x\le2\\9x-11.5,&x>2\end{cases}$ is continuous at $x=2$."
  mode="text"
  answer="Not continuous: Condition 2 fails, because the left-hand and right-hand limits are not equal."
  hint="$f(2)$ exists, so check whether $\lim_{x\to2^-}f(x)$ and $\lim_{x\to2^+}f(x)$ agree."
>}}
Not continuous: Condition 2 fails, because the left-hand and right-hand limits are not equal.
The function is continuous at $x=2$.
Not continuous: Condition 1 fails, because $f(2)$ does not exist.
{{< /multiplechoice >}}

{{< fillin
  question="For the function in the previous question, find the left-hand limit $\lim_{x\to2^-}f(x)$, as a fraction."
  answer="\tfrac{1}{2}"
  answerForm="fraction"
  answerDisplay="$\tfrac{1}{2}$"
  hint="On $x\le2$, $f(x)=\tfrac{1}{x}$, and this piece is itself continuous, so the left-hand limit equals $f(2)$."
>}}

{{< fillin
  question="For the same function, find the right-hand limit $\lim_{x\to2^+}f(x)$, rounded to one decimal place."
  answer="6.5"
  answerForm="decimal"
  answerDisplay="$6.5$"
  hint="On $x>2$, $f(x)=9x-11.5$; substitute values of $x$ approaching $2$ from above, or simply evaluate the formula at $x=2$."
>}}

**Example.** Determine whether the function $f(x)=\tfrac{x^2-25}{x-5}$ is continuous at $x=5$.

**Solution.** To determine if the function $f$ is continuous at $x=5$, we will determine if the three conditions of continuity are satisfied at $x=5$.

Condition 1:

$$f(5)\ \text{does not exist.}\ \Rightarrow\ \text{Condition 1 fails.}$$

There is no need to proceed further. Condition 2 fails at $x=5$. If any of the conditions of continuity are not satisfied at $x=5$, the function $f$ is not continuous at $x=5$.

**Analysis.** See the figure below. Notice that for Condition 2 we have

$$
\begin{array}{lrcl}
& \lim\limits_{x\to5}\tfrac{x^2-25}{x-5} &=& \lim\limits_{x\to3}\tfrac{(x-5)(x+5)}{x-5} \\[4pt]
& &=& \lim\limits_{x\to5}(x+5) \\[4pt]
& &=& 5+5=10 \\[4pt]
& &\Rightarrow& \text{Condition 2 is satisfied.}
\end{array}
$$

At $x=5$, there exists a removable discontinuity. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line of slope 1 through the point (0, 5), drawn with an open circle at the point (5, 10) where the function is undefined.","xMin":0,"xMax":8,"yMin":0,"yMax":13,"unit":28,"tickLabels":true,"lines":[{"slope":1,"intercept":5}],"points":[{"at":[5,10],"open":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Determine whether $f(x)=\tfrac{9-x^2}{x^2-3x}$ is continuous at $x=3$. If not, state the type of discontinuity."
  mode="text"
  answer="Not continuous: removable discontinuity at $x=3$."
  hint="$f(3)$ is undefined (the denominator is $0$), but the numerator also factors so that a common factor cancels — check whether the limit still exists."
>}}
The function is continuous at $x=3$.
Not continuous: removable discontinuity at $x=3$.
Not continuous: jump discontinuity at $x=3$.
{{< /multiplechoice >}}

### Determining the Input Values for Which a Function Is Discontinuous

Now that we can identify continuous functions, jump discontinuities, and removable discontinuities, we will look at more complex functions to find discontinuities. Here, we will analyze a piecewise function to determine if any real numbers exist where the function is not continuous. A **piecewise function** may have discontinuities at the boundary points of the function as well as within the functions that make it up.

To determine the real numbers for which a piecewise function composed of polynomial functions is not continuous, recall that **polynomial** functions themselves are continuous on the set of real numbers. Any discontinuity would be at the boundary points. So we need to explore the three conditions of continuity at the boundary points of the piecewise function.

{{< callout type="info" >}}
  **How To:** given a piecewise function, determine whether it is continuous at the boundary points.

  1. For each boundary point $a$ of the piecewise function, determine the left- and right-hand limits as $x$ approaches $a$, as well as the function value at $a$.
  2. Check each condition for each value to determine if all three conditions are satisfied.
  3. Determine whether each value satisfies condition 1: $f(a)$ exists.
  4. Determine whether each value satisfies condition 2: $\lim_{x\to a}f(x)$ exists.
  5. Determine whether each value satisfies condition 3: $\lim_{x\to a}f(x)=f(a)$.
  6. If all three conditions are satisfied, the function is continuous at $x=a$. If any one of the conditions fails, the function is not continuous at $x=a$.
{{< /callout >}}

**Example.** Determine whether the function $f$ is discontinuous for any real numbers.

$$f(x)=\begin{cases}x+1,&x<2\\3,&2\le x<4\\x^2-11,&x\ge4\end{cases}$$

**Solution.** The piecewise function is defined by three functions, which are all polynomial functions, $f(x)=x+1$ on $x<2$, $f(x)=3$ on $2\le x<4$, and $f(x)=x^2-5$ on $x\ge4$. Polynomial functions are continuous everywhere. Any discontinuities would be at the boundary points, $x=2$ and $x=4$.

At $x=2$, let us check the three conditions of continuity.

Condition 1:

$$f(2)=3\ \Rightarrow\ \text{Condition 1 is satisfied.}$$

Condition 2: Because a different function defines the output left and right of $x=2$, does $\lim_{x\to2^-}f(x)=\lim_{x\to2^+}f(x)$?

- Left-hand limit: $\lim_{x\to2^-}f(x)=\lim_{x\to2^-}(x+1)=2+1=3$
- Right-hand limit: $\lim_{x\to2^+}f(x)=\lim_{x\to2^+}3=3$

Because $3=3$, $\lim_{x\to2^-}f(x)=\lim_{x\to2^+}f(x)$

$$\Rightarrow\ \text{Condition 2 is satisfied.}$$

Condition 3:

$$\lim\limits_{x\to2}f(x)=3=f(2)\ \Rightarrow\ \text{Condition 3 is satisfied.}$$

Because all three conditions are satisfied at $x=2$, the function $f(x)$ is continuous at $x=2$.

At $x=4$, let us check the three conditions of continuity.

Condition 2: Because a different function defines the output left and right of $x=4$, does $\lim_{x\to4^-}f(x)=\lim_{x\to4^+}f(x)$?

- Left-hand limit: $\lim_{x\to4^-}f(x)=\lim_{x\to4^-}3=3$
- Right-hand limit: $\lim_{x\to4^+}f(x)=\lim_{x\to4^+}(x^2-11)=4^2-11=5$

Because $3\ne5$, $\lim_{x\to4^-}f(x)\ne\lim_{x\to4^+}f(x)$, so $\lim_{x\to4}f(x)$ does not exist.

$$\Rightarrow\ \text{Condition 2 fails.}$$

Because one of the three conditions does not hold at $x=4$, the function $f(x)$ is discontinuous at $x=4$.

**Analysis.** See the figure below. At $x=4$, there exists a jump discontinuity. Notice that the function is continuous at $x=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise graph. A rising line enters from the lower left and ends at a filled point at (2, 3); a flat segment continues from (2, 3) to an open circle at (4, 3); a separate branch starts at a filled point at (4, 5) and curves upward steeply toward the upper right.","xMin":-3,"xMax":6,"yMin":-2,"yMax":10,"unit":30,"tickLabels":true,"segments":[{"from":[-2,-1],"to":[2,3],"arrows":"start"},{"from":[2,3],"to":[4,3]}],"points":[{"at":[2,3]},{"at":[4,3],"open":true},{"at":[4,5]}],"quadratics":[{"a":1,"c":-11,"from":4,"arrows":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="At what $x$-value is the function $f(x)=\begin{cases}\tfrac{\pi x}{4},&x<2\\\tfrac{\pi}{x},&2\le x\le6\\2\pi x,&x>6\end{cases}$ discontinuous? Enter the $x$-value only."
  answer="6"
  answerForm="decimal"
  answerDisplay="$x=6$"
  hint="Check both boundary points, $x=2$ and $x=6$: compare the one-sided limits with the function value at each."
>}}

{{< multiplechoice
  question="At the $x$-value found above, which condition of continuity fails?"
  mode="text"
  answer="Condition 2: the left- and right-hand limits both exist, but are not equal."
  hint="The piecewise function is defined at that boundary point, so Condition 1 holds; compare the two one-sided limits there."
>}}
Condition 1: the function value does not exist at that point.
Condition 3: the limit exists but does not equal the function value.
Condition 2: the left- and right-hand limits both exist, but are not equal.
{{< /multiplechoice >}}

### Determining Whether a Function Is Continuous

To determine whether a **piecewise function** is continuous or discontinuous, in addition to checking the boundary points, we must also check whether each of the functions that make up the piecewise function is continuous.

{{< callout type="info" >}}
  **How To:** given a piecewise function, determine whether it is continuous.

  1. Determine whether each component function of the piecewise function is continuous. If there are discontinuities, do they occur within the domain where that component function is applied?
  2. For each boundary point $x=a$ of the piecewise function, determine if each of the three conditions hold.
{{< /callout >}}

**Example.** Determine whether the function below is continuous. If it is not, state the location and type of each discontinuity.

$$f(x)=\begin{cases}\sin(x),&x<0\\x^3,&x>0\end{cases}$$

**Solution.** The two functions composing this piecewise function are $f(x)=\sin(x)$ on $x<0$ and $f(x)=x^3$ on $x>0$. The sine function and all polynomial functions are continuous everywhere. Any discontinuities would be at the boundary point, $x=0$.

At $x=0$, let us check the three conditions of continuity.

Condition 1:

$$f(0)\ \text{does not exist.}\ \Rightarrow\ \text{Condition 1 fails.}$$

Because all three conditions are not satisfied at $x=0$, the function $f(x)$ is discontinuous at $x=0$.

**Analysis.** See the figure below. There exists a removable discontinuity at $x=0$; $\lim_{x\to0}f(x)=0$, thus the limit exists and is finite, but $f(a)$ does not exist.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise graph: the sine curve for x less than 0, meeting a rapidly rising cubic curve for x greater than 0, with an open circle at the origin where the function is undefined.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":26,"tickLabels":true,"curves":[{"kind":"sine","a":1,"b":1,"h":0,"k":0,"to":0,"arrows":"start"}],"cubics":[{"a":1,"from":0,"arrows":"end"}],"points":[{"at":[0,0],"open":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Media.** Access these online resources for additional instruction and practice with continuity.
{{< /callout >}}

## Key concepts

- A continuous function can be represented by a graph without holes or breaks.
- A function whose graph has holes is a discontinuous function.
- A function is continuous at a particular number if three conditions are met: Condition 1, $f(a)$ exists; Condition 2, $\lim_{x\to a}f(x)$ exists at $x=a$; and Condition 3, $\lim_{x\to a}f(x)=f(a)$.
- A function has a jump discontinuity if the left- and right-hand limits are different, causing the graph to "jump."
- A function has a removable discontinuity if it can be redefined at its discontinuous point to make it continuous.
- Some functions, such as polynomial functions, are continuous everywhere. Other functions, such as logarithmic functions, are continuous on their domain.
- For a piecewise function to be continuous, each piece must be continuous on its part of the domain, and the function as a whole must be continuous at the boundaries.

## Practice

### Determine whether a function is continuous at a number

{{< multiplechoice
  question="For $f(x)=\tfrac{x^2-16}{x+4}$, why is the function discontinuous at $a=-4$? State which condition fails."
  mode="text"
  answer="Removable discontinuity: $f(-4)$ is not defined, but $\lim_{x\to-4}f(x)$ exists."
  hint="Factor the numerator, cancel the common factor with the denominator, and check whether the resulting limit exists even though $f(-4)$ itself is undefined."
>}}
Jump discontinuity: the left- and right-hand limits exist but are not equal.
Removable discontinuity: $f(-4)$ is not defined, but $\lim_{x\to-4}f(x)$ exists.
The function is continuous at $a=-4$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $f(x)=\begin{cases}3+x,&x<1\\x,&x=1\\x^2,&x>1\end{cases}$, why is the function discontinuous at $a=1$? State which condition fails."
  mode="text"
  answer="Jump discontinuity: $f(1)=1$ exists, but the left-hand limit is $4$ and the right-hand limit is $1$."
  hint="Evaluate $f(1)$ from the middle piece, then compare $\lim_{x\to1^-}(3+x)$ with $\lim_{x\to1^+}x^2$."
>}}
The function is continuous at $a=1$.
Removable discontinuity: $\lim_{x\to1}f(x)$ exists but does not equal $f(1)$.
Jump discontinuity: $f(1)=1$ exists, but the left-hand limit is $4$ and the right-hand limit is $1$.
{{< /multiplechoice >}}

The graph below refers to the next two questions. Each square represents one unit.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph on a grid where each square is one unit. One curved piece enters from the upper left with an arrow and ends at an open circle at (-3, -2). Separately, a filled point at (-3, 1) begins a second curve that rises to a local peak, falls through an open circle at (2, -1), rises again through an open circle at (4, 2), and exits toward the lower right with an arrow. A third, isolated filled point sits alone at (4, -3).","xMin":-5,"xMax":6,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":0.45,"b":1.85,"c":-0.5,"from":-5.6,"to":-3,"arrows":"start"},{"a":-0.4,"b":-0.8,"c":2.2,"from":-3,"to":2}],"cubics":[{"a":-0.542,"b":5.085,"c":-13.838,"d":10.670,"from":2,"to":5.6,"arrows":"end"}],"points":[{"at":[-3,-2],"open":true},{"at":[-3,1]},{"at":[2,-1],"open":true},{"at":[4,2],"open":true},{"at":[4,-3]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which of the three conditions of continuity are satisfied at $x=-3$, and which are not?"
  mode="text"
  answer="1, but not 2 or 3."
  hint="Look for a filled point at $x=-3$ (Condition 1) and compare its height with any open circle on the curve there (Conditions 2 and 3)."
>}}
All three conditions are satisfied.
Conditions 1 and 2, but not 3.
1, but not 2 or 3.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which of the three conditions of continuity are satisfied at $x=4$, and which are not?"
  mode="text"
  answer="Conditions 1 and 2, but not 3."
  hint="A filled point at $x=4$ gives Condition 1; check whether the curve is unbroken through $x=4$ for Condition 2, then compare the filled point's height with the curve's height there for Condition 3."
>}}
1, but not 2 or 3.
Conditions 1 and 2, but not 3.
All three conditions are satisfied.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Find $\lim_{x\to1}f(x)$ and determine whether $f(x)=\begin{cases}x^2+4,&x\ne1\\2,&x=1\end{cases}$ is continuous at $x=1$."
  mode="text"
  answer="Removable discontinuity: $\lim_{x\to1}f(x)=5$, but $f(1)=2$."
  hint="Evaluate the limit using the $x\ne1$ branch, then compare it with the function's actual value at $x=1$."
>}}
The function is continuous at $x=1$, since $\lim_{x\to1}f(x)=f(1)$.
Jump discontinuity: the left- and right-hand limits at $x=1$ are not equal.
Removable discontinuity: $\lim_{x\to1}f(x)=5$, but $f(1)=2$.
{{< /multiplechoice >}}

### Determine the numbers for which a function is discontinuous

{{< fillin
  question="Determine the $x$-value(s) for which $f(x)=\tfrac{|x-2|}{x^2-2x}$ is discontinuous. Enter the value(s), separated by a comma if there is more than one."
  answer="0,2"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=0$ and $x=2$"
  hint="The numerator is defined everywhere; find where the denominator $x^2-2x=x(x-2)$ equals zero."
>}}

{{< fillin
  question="Determine the $x$-value(s) for which $f(x)=2x+\tfrac{5}{x}$ is discontinuous."
  answer="0"
  answerForm="decimal"
  answerDisplay="$x=0$"
  hint="The polynomial term $2x$ is continuous everywhere; find where the remaining term is undefined."
>}}

{{< fillin
  question="The graph below shows a function on the window $x=-4$ to $4$, with a dashed vertical reference line at $x=2$. At what $x$-coordinates is the function discontinuous? Enter the values, separated by commas."
  answer="-1,1,2"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-1$, $x=1$, and $x=2$"
  hint="Look for every hole or break on the curve, including where the dashed reference line suggests a vertical asymptote just past the edge of the drawn curve."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph on the window x from -4 to 4, y from -4 to 4, with a dashed vertical reference line at x = 2. One curve enters from the left with an arrow and ends at an open circle at (-1, 0). A separate curve begins at a filled point at (-1, 2), dips down through an open circle at (1, 0), and continues steeply downward toward an arrow near the dashed line.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":28,"tickLabels":true,"lines":[{"x":2,"dashed":true}],"quadratics":[{"a":0.0111,"b":0.3056,"c":0.2944,"from":-4.3,"to":-1,"arrows":"start"},{"a":-1,"b":-1,"c":2,"from":-1,"to":2.3,"arrows":"end"}],"points":[{"at":[-1,0],"open":true},{"at":[-1,2]},{"at":[1,0],"open":true}]}
{{< /apfigure >}}

### Determine whether a function is continuous

{{< fillin
  question="State the interval on which $f(x)=x^3-2x-15$ is continuous."
  answer="(-\infty,\infty)"
  answerDisplay="$(-\infty,\infty)$"
  hint="This is a polynomial function — where are polynomial functions continuous?"
>}}

{{< fillin
  question="State the interval on which $f(x)=\sqrt{x-4}$ is continuous."
  answer="[4,\infty)"
  answerDisplay="$[4,\infty)$"
  hint="A square root is defined only where its radicand is nonnegative; find where $x-4\ge0$."
>}}

{{< fillin
  question="The function $f(x)=\sin\left(\tfrac{12\pi}{x}\right)$, graphed below, is continuous everywhere it is defined. State its domain (and therefore the interval(s) on which it is continuous)."
  answer="(-\infty,0)\cup(0,\infty)"
  answerDisplay="$(-\infty,0)\cup(0,\infty)$"
  hint="The argument $\tfrac{12\pi}{x}$ is undefined at exactly one $x$-value; every other real number is in the domain."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of sine of 12 pi over x, oscillating rapidly near x = 0 and settling into a slower wave as x moves away from 0 in both directions, on the window x = -11 to 11, y = -1 to 1, with x = 0 excluded from the domain.","xMin":-11,"xMax":11,"yMin":-1.3,"yMax":1.3,"unit":16,"tickLabels":true,"xTickStep":5,"yTickStep":1,"polylines":[{"through":[[-11,0.282],[-10.045,0.574],[-9.242,0.806],[-8.559,0.953],[-7.969,1],[-7.455,0.941],[-7.004,0.784],[-6.604,0.544],[-6.247,0.246],[-5.927,-0.077],[-5.638,-0.392],[-5.376,-0.666],[-5.138,-0.87],[-4.919,-0.982],[-4.718,-0.991],[-4.534,-0.895],[-4.363,-0.706],[-4.204,-0.442],[-4.057,-0.131],[-3.919,0.193],[-3.791,0.497],[-3.67,0.749],[-3.558,0.922],[-3.451,0.997],[-3.351,0.968],[-3.257,0.837],[-3.168,0.618],[-3.083,0.334],[-3.003,0.014],[-2.927,-0.307],[-2.855,-0.595],[-2.786,-0.821],[-2.721,-0.961],[-2.658,-0.999],[-2.599,-0.932],[-2.542,-0.767],[-2.487,-0.522],[-2.435,-0.221],[-2.384,0.103],[-2.336,0.416],[-2.29,0.685],[-2.246,0.882],[-2.203,0.987],[-2.162,0.987],[-2.122,0.883],[-2.084,0.687],[-2.047,0.418],[-2.011,0.105],[-1.977,-0.219],[-1.944,-0.519],[-1.912,-0.766],[-1.88,-0.931],[-1.85,-0.999],[-1.821,-0.961],[-1.793,-0.823],[-1.766,-0.597],[-1.739,-0.309],[-1.713,0.012],[-1.688,0.331],[-1.664,0.616],[-1.64,0.836],[-1.618,0.968],[-1.595,0.998],[-1.574,0.923],[-1.552,0.75],[-1.532,0.499],[-1.512,0.196],[-1.492,-0.129],[-1.473,-0.439],[-1.455,-0.704],[-1.437,-0.894],[-1.419,-0.99],[-1.402,-0.982],[-1.385,-0.871],[-1.369,-0.668],[-1.353,-0.394],[-1.337,-0.079],[-1.322,0.244],[-1.307,0.541],[-1.292,0.782],[-1.278,0.94],[-1.264,1],[-1.25,0.954],[-1.237,0.808],[-1.224,0.576],[-1.211,0.284],[-1.199,-0.038],[-1.186,-0.356],[-1.174,-0.636],[-1.162,-0.85],[-1.151,-0.974],[-1.14,-0.995],[-1.128,-0.912],[-1.118,-0.733],[-1.107,-0.477],[-1.096,-0.17],[-1.086,0.154],[-1.076,0.463],[-1.066,0.722],[-1.056,0.906],[-1.047,0.994],[-1.037,0.977],[-1.028,0.858],[-1.019,0.648],[-1.01,0.37],[-1.001,0.054],[-0.993,-0.269],[-0.984,-0.563],[-0.976,-0.798],[-0.968,-0.949],[-0.96,-1],[-0.952,-0.946],[-0.944,-0.792],[-0.937,-0.555],[-0.929,-0.259],[-0.922,0.064],[-0.914,0.38],[-0.907,0.656],[-0.9,0.863],[-0.893,0.979],[-0.886,0.993],[-0.88,0.901],[-0.873,0.715],[-0.866,0.454],[-0.86,0.144],[-0.854,-0.18],[-0.847,-0.486],[-0.841,-0.74],[-0.835,-0.916],[-0.829,-0.996],[-0.823,-0.971],[-0.817,-0.844],[-0.812,-0.628],[-0.806,-0.346],[-0.8,-0.028],[-0.795,0.294],[-0.79,0.584],[-0.784,0.813],[-0.779,0.957],[-0.774,1],[-0.769,0.937],[-0.763,0.776],[-0.758,0.533],[-0.754,0.234],[-0.749,-0.09],[-0.744,-0.404],[-0.739,-0.675],[-0.734,-0.876],[-0.73,-0.984],[-0.725,-0.989],[-0.721,-0.89],[-0.716,-0.697],[-0.712,-0.43],[-0.707,-0.119],[-0.703,0.206],[-0.699,0.508],[-0.695,0.757],[-0.691,0.926],[-0.686,0.998],[-0.682,0.965],[-0.678,0.83],[-0.674,0.608],[-0.671,0.322],[-0.667,0.002],[-0.663,-0.319],[-0.659,-0.605],[-0.655,-0.828],[-0.652,-0.964],[-0.648,-0.998],[-0.644,-0.928],[-0.641,-0.759],[-0.637,-0.511],[-0.634,-0.209],[-0.63,0.116],[-0.627,0.427],[-0.624,0.694],[-0.62,0.888],[-0.617,0.989],[-0.614,0.985],[-0.61,0.877],[-0.607,0.678],[-0.604,0.407],[-0.601,0.093],[-0.598,-0.231],[-0.595,-0.53],[-0.592,-0.774],[-0.589,-0.936],[-0.586,-0.999],[-0.583,-0.958],[-0.58,-0.815],[-0.577,-0.587],[-0.574,-0.297],[-0.571,0.024],[-0.568,0.343],[-0.566,0.626],[-0.563,0.843],[-0.56,0.971],[-0.557,0.997],[-0.555,0.918],[-0.552,0.742],[-0.55,0.488],[-0.547,0.183],[-0.544,-0.141],[-0.542,-0.451],[-0.539,-0.713],[-0.537,-0.9],[-0.534,-0.992],[-0.532,-0.98],[-0.529,-0.865],[-0.527,-0.658],[-0.525,-0.383],[-0.522,-0.067],[-0.52,0.256],[-0.518,0.552],[-0.515,0.79],[-0.513,0.945],[-0.511,1],[-0.508,0.95],[-0.506,0.8],[-0.504,0.566],[-0.502,0.272],[-0.5,-0.05],[-0.498,-0.368],[-0.495,-0.646],[-0.493,-0.856],[-0.491,-0.977],[-0.489,-0.994],[-0.487,-0.907],[-0.485,-0.724],[-0.483,-0.465],[-0.481,-0.157],[-0.479,0.167],[-0.477,0.474],[-0.475,0.731],[-0.473,0.911],[-0.471,0.995],[-0.469,0.974],[-0.467,0.851],[-0.465,0.639],[-0.464,0.359],[-0.462,0.041],[-0.46,-0.281],[-0.458,-0.574],[-0.456,-0.806],[-0.455,-0.953],[-0.453,-1],[-0.451,-0.942],[-0.449,-0.784],[-0.447,-0.544],[-0.446,-0.247],[-0.444,0.076],[-0.442,0.392],[-0.441,0.666],[-0.439,0.869],[-0.437,0.982],[-0.436,0.991],[-0.434,0.896],[-0.432,0.706],[-0.431,0.442],[-0.429,0.132],[-0.428,-0.193],[-0.426,-0.497],[-0.424,-0.748],[-0.423,-0.921],[-0.421,-0.997],[-0.42,-0.968],[-0.418,-0.837],[-0.417,-0.618],[-0.415,-0.334],[-0.414,-0.015],[-0.412,0.306],[-0.411,0.595],[-0.409,0.821],[-0.408,0.96],[-0.407,0.999],[-0.405,0.932],[-0.404,0.768],[-0.402,0.522],[-0.401,0.222],[-0.4,-0.102],[-0.398,-0.415],[-0.397,-0.685],[-0.395,-0.882],[-0.394,-0.986],[-0.393,-0.987],[-0.391,-0.884],[-0.39,-0.687],[-0.389,-0.419],[-0.388,-0.106],[-0.386,0.218],[-0.385,0.519],[-0.384,0.765],[-0.382,0.931],[-0.381,0.999],[-0.38,0.961],[-0.379,0.823],[-0.377,0.598],[-0.376,0.31],[-0.375,-0.011],[-0.374,-0.331],[-0.373,-0.615],[-0.371,-0.835],[-0.37,-0.967],[-0.369,-0.998],[-0.368,-0.923],[-0.367,-0.751],[-0.365,-0.5],[-0.364,-0.196],[-0.363,0.128],[-0.362,0.439],[-0.361,0.703],[-0.36,0.894],[-0.359,0.99],[-0.358,0.983],[-0.356,0.871],[-0.355,0.668],[-0.354,0.395],[-0.353,0.08],[-0.352,-0.243],[-0.351,-0.541],[-0.35,-0.782]],"arrows":"start"},{"through":[[0.35,0.782],[0.351,0.541],[0.352,0.243],[0.353,-0.08],[0.354,-0.395],[0.355,-0.668],[0.356,-0.871],[0.358,-0.983],[0.359,-0.99],[0.36,-0.894],[0.361,-0.703],[0.362,-0.439],[0.363,-0.128],[0.364,0.196],[0.365,0.5],[0.367,0.751],[0.368,0.923],[0.369,0.998],[0.37,0.967],[0.371,0.835],[0.373,0.615],[0.374,0.331],[0.375,0.011],[0.376,-0.31],[0.377,-0.598],[0.379,-0.823],[0.38,-0.961],[0.381,-0.999],[0.382,-0.931],[0.384,-0.765],[0.385,-0.519],[0.386,-0.218],[0.388,0.106],[0.389,0.419],[0.39,0.687],[0.391,0.884],[0.393,0.987],[0.394,0.986],[0.395,0.882],[0.397,0.685],[0.398,0.415],[0.4,0.102],[0.401,-0.222],[0.402,-0.522],[0.404,-0.768],[0.405,-0.932],[0.407,-0.999],[0.408,-0.96],[0.409,-0.821],[0.411,-0.595],[0.412,-0.306],[0.414,0.015],[0.415,0.334],[0.417,0.618],[0.418,0.837],[0.42,0.968],[0.421,0.997],[0.423,0.921],[0.424,0.748],[0.426,0.497],[0.428,0.193],[0.429,-0.132],[0.431,-0.442],[0.432,-0.706],[0.434,-0.896],[0.436,-0.991],[0.437,-0.982],[0.439,-0.869],[0.441,-0.666],[0.442,-0.392],[0.444,-0.076],[0.446,0.247],[0.447,0.544],[0.449,0.784],[0.451,0.942],[0.453,1],[0.455,0.953],[0.456,0.806],[0.458,0.574],[0.46,0.281],[0.462,-0.041],[0.464,-0.359],[0.465,-0.639],[0.467,-0.851],[0.469,-0.974],[0.471,-0.995],[0.473,-0.911],[0.475,-0.731],[0.477,-0.474],[0.479,-0.167],[0.481,0.157],[0.483,0.465],[0.485,0.724],[0.487,0.907],[0.489,0.994],[0.491,0.977],[0.493,0.856],[0.495,0.646],[0.498,0.368],[0.5,0.05],[0.502,-0.272],[0.504,-0.566],[0.506,-0.8],[0.508,-0.95],[0.511,-1],[0.513,-0.945],[0.515,-0.79],[0.518,-0.552],[0.52,-0.256],[0.522,0.067],[0.525,0.383],[0.527,0.658],[0.529,0.865],[0.532,0.98],[0.534,0.992],[0.537,0.9],[0.539,0.713],[0.542,0.451],[0.544,0.141],[0.547,-0.183],[0.55,-0.488],[0.552,-0.742],[0.555,-0.918],[0.557,-0.997],[0.56,-0.971],[0.563,-0.843],[0.566,-0.626],[0.568,-0.343],[0.571,-0.024],[0.574,0.297],[0.577,0.587],[0.58,0.815],[0.583,0.958],[0.586,0.999],[0.589,0.936],[0.592,0.774],[0.595,0.53],[0.598,0.231],[0.601,-0.093],[0.604,-0.407],[0.607,-0.678],[0.61,-0.877],[0.614,-0.985],[0.617,-0.989],[0.62,-0.888],[0.624,-0.694],[0.627,-0.427],[0.63,-0.116],[0.634,0.209],[0.637,0.511],[0.641,0.759],[0.644,0.928],[0.648,0.998],[0.652,0.964],[0.655,0.828],[0.659,0.605],[0.663,0.319],[0.667,-0.002],[0.671,-0.322],[0.674,-0.608],[0.678,-0.83],[0.682,-0.965],[0.686,-0.998],[0.691,-0.926],[0.695,-0.757],[0.699,-0.508],[0.703,-0.206],[0.707,0.119],[0.712,0.43],[0.716,0.697],[0.721,0.89],[0.725,0.989],[0.73,0.984],[0.734,0.876],[0.739,0.675],[0.744,0.404],[0.749,0.09],[0.754,-0.234],[0.758,-0.533],[0.763,-0.776],[0.769,-0.937],[0.774,-1],[0.779,-0.957],[0.784,-0.813],[0.79,-0.584],[0.795,-0.294],[0.8,0.028],[0.806,0.346],[0.812,0.628],[0.817,0.844],[0.823,0.971],[0.829,0.996],[0.835,0.916],[0.841,0.74],[0.847,0.486],[0.854,0.18],[0.86,-0.144],[0.866,-0.454],[0.873,-0.715],[0.88,-0.901],[0.886,-0.993],[0.893,-0.979],[0.9,-0.863],[0.907,-0.656],[0.914,-0.38],[0.922,-0.064],[0.929,0.259],[0.937,0.555],[0.944,0.792],[0.952,0.946],[0.96,1],[0.968,0.949],[0.976,0.798],[0.984,0.563],[0.993,0.269],[1.001,-0.054],[1.01,-0.37],[1.019,-0.648],[1.028,-0.858],[1.037,-0.977],[1.047,-0.994],[1.056,-0.906],[1.066,-0.722],[1.076,-0.463],[1.086,-0.154],[1.096,0.17],[1.107,0.477],[1.118,0.733],[1.128,0.912],[1.14,0.995],[1.151,0.974],[1.162,0.85],[1.174,0.636],[1.186,0.356],[1.199,0.038],[1.211,-0.284],[1.224,-0.576],[1.237,-0.808],[1.25,-0.954],[1.264,-1],[1.278,-0.94],[1.292,-0.782],[1.307,-0.541],[1.322,-0.244],[1.337,0.079],[1.353,0.394],[1.369,0.668],[1.385,0.871],[1.402,0.982],[1.419,0.99],[1.437,0.894],[1.455,0.704],[1.473,0.439],[1.492,0.129],[1.512,-0.196],[1.532,-0.499],[1.552,-0.75],[1.574,-0.923],[1.595,-0.998],[1.618,-0.968],[1.64,-0.836],[1.664,-0.616],[1.688,-0.331],[1.713,-0.012],[1.739,0.309],[1.766,0.597],[1.793,0.823],[1.821,0.961],[1.85,0.999],[1.88,0.931],[1.912,0.766],[1.944,0.519],[1.977,0.219],[2.011,-0.105],[2.047,-0.418],[2.084,-0.687],[2.122,-0.883],[2.162,-0.987],[2.203,-0.987],[2.246,-0.882],[2.29,-0.685],[2.336,-0.416],[2.384,-0.103],[2.435,0.221],[2.487,0.522],[2.542,0.767],[2.599,0.932],[2.658,0.999],[2.721,0.961],[2.786,0.821],[2.855,0.595],[2.927,0.307],[3.003,-0.014],[3.083,-0.334],[3.168,-0.618],[3.257,-0.837],[3.351,-0.968],[3.451,-0.997],[3.558,-0.922],[3.67,-0.749],[3.791,-0.497],[3.919,-0.193],[4.057,0.131],[4.204,0.442],[4.363,0.706],[4.534,0.895],[4.718,0.991],[4.919,0.982],[5.138,0.87],[5.376,0.666],[5.638,0.392],[5.927,0.077],[6.247,-0.246],[6.604,-0.544],[7.004,-0.784],[7.455,-0.941],[7.969,-1],[8.559,-0.953],[9.242,-0.806],[10.045,-0.574],[11,-0.282]],"arrows":"end"}]}
{{< /apfigure >}}

---

<small>This section is adapted from [Precalculus 2e, Section 12.3: Continuity](https://openstax.org/books/precalculus-2e/pages/12-3-continuity) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: the temperature curve (Figure 1) is a fitted sinusoid, $107+11\sin\left(\tfrac{\pi}{14}(x-9)\right)$, chosen to pass through the printed low near $(2,96)$ and high near $(16,118)$, since the source draws an unnamed "generic" curve; the y-axis's printed break mark between 0 and 80 is omitted and the window instead starts at 90, since including the dead zone would make the curve too small to read. The nine generic "condition" figures (illustrating Conditions 1–3, the jump-discontinuity example, and the removable-discontinuity example) reuse one fitted arctangent curve, $1.5+3\arctan(0.6(x-2))$ (and, for the two jump figures, the same curve shifted down by $1$ on its right branch), since the source draws an unnamed generic increasing curve at each spot; the figure accompanying Example 3 is the exact line $y=x+5$ with a hole at $(5,10)$, matching the source's own worked function. Every retained Try It became a real `fillin` or `multiplechoice` component; the Try It following the piecewise-continuity Try It (the one whose left-hand limit is $\tfrac12$ and right-hand limit is $6.5$) is split into one multiple choice (which condition fails) plus two fill-ins (the two one-sided limits, one as a fraction and one as a decimal), since no single response field can hold both. Sums with `\tfrac{d}{dx}`-style retype hazards do not arise in this section, but every categorical judgment ("is it continuous," "which condition fails," "jump or removable") is authored as `multiplechoice` with the source's own vocabulary as options, since the engine cannot grade a categorical judgment as a number; the two graph-reading exercises whose official answer key states x-coordinates and condition verdicts read directly off a printed figure ("each square represents one square unit") are authored as two text `multiplechoice` questions (for $x=-3$ and $x=4$) sharing one recreated static figure placed once above them, rather than a graph-recognition multiple choice, since the source's own point is reading a single fixed picture, not distinguishing it from plausible alternates. The exercise pairing "at what $x$-coordinates is the function discontinuous / what condition of continuity is violated" (module m49454, fs-id1165135693895 and fs-id1165135693911) is combined into a single fill-in asking for the discontinuous $x$-coordinates, since only the second exercise carries a printed solution and that solution's own text supplies all three $x$-values ($-1$, $1$, and $2$, the third read off the dashed vertical reference line at $x=2$ that both the source figure and this page's recreation draw); the recreated figure fits two quadratics through the plotted points to match the source's hand-drawn curve. The "construct a function with removable discontinuities at $x=-7$ and $x=1$" exercise (fs-id1165135699340) and the exercises tied to the "which conditions fail at the sin(12π/x) discontinuity" / "solve for $x$" questions and the two remaining Figure companion questions (fs-id1165135699308, fs-id1165135699462, fs-id1165135699778, module m49454) are not used: the construct-a-function exercise's own answer, $\tfrac{x^3+6x^2-7x}{(x+7)(x-1)}$, is value-equal to the bare expression $x$ once the compute engine cancels the common factors, so a learner (or a trivial "x") who supplies no removable discontinuities at all grades correct — confirmed against the real grader — and no `answerForm` token rules out that shape; the three remaining companion exercises (fs-id1165135699308, fs-id1165135699462, fs-id1165135699778, numbered 46, 48, and 50 in the printed book) carry no printed solution in the Answer Key (OpenStax answers odd-numbered exercises in this range, and all three are even), so per the source-fidelity rule they are not authored, and their figures (CNXML `_204`, `_205`, `_206`) are not recreated. Eleven selected end-of-section exercises were adapted into interactive Practice components, one or more groups per objective, every one independently re-derived — including running the piecewise boundary limits and the domain checks — rather than read off the source key.</small>
