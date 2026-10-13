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
{"ariaLabel":"A broken-line graph of temperature in degrees Fahrenheit against hours since midnight, from hour 0 to hour 24, starting at a dot at 100 degrees at hour 0. It drops to a low of about 95.5 degrees at hour 1, rises slowly to about 98 degrees at hour 6.5, then more steeply through 105 degrees at hour 10 and 116 degrees at hour 14 to a peak of 118 degrees at hour 16, falls to about 106 degrees at hour 19, and ends at a dot at 100 degrees at hour 24, with no breaks, holes, or jumps anywhere along it.","xMin":0,"xMax":24,"yMin":90,"yMax":120,"unit":14,"yUnit":8,"tickLabels":true,"xTickStep":4,"yTickStep":5,"xLabel":"Hours Since Midnight","yLabel":"Temperature","polylines":[{"through":[[0,100],[1,95.5],[6.5,98.25],[10,105],[14,116],[16,118],[19,106],[24,100]]}],"points":[{"at":[0,100]},{"at":[24,100]}]}
{{< /apfigure >}}

When we analyze this graph, we notice a specific characteristic. There are no breaks in the graph. We could trace the graph without picking up our pencil. This single observation tells us a great deal about the function. In this section, we will investigate functions with and without breaks.

### Determining Whether a Function Is Continuous at a Number

Let's consider a specific example of temperature in terms of date and location, such as June 27, 2013, in Phoenix, AZ. The graph above indicates that, at 2 a.m., the temperature was $96^\circ\text{F}$. By 2 p.m. the temperature had risen to $116^\circ\text{F}$, and by 4 p.m. it was $118^\circ\text{F}$. Sometime between 2 a.m. and 4 p.m., the temperature outside must have been exactly $110.5^\circ\text{F}$. In fact, any temperature between $96^\circ\text{F}$ and $118^\circ\text{F}$ occurred at some point that day. This means all real numbers in the output between $96^\circ\text{F}$ and $118^\circ\text{F}$ are generated at some point by the function according to the intermediate value theorem.

Look again at the temperature graph. There are no breaks in the function's graph for this 24-hour period. At no point did the temperature cease to exist, nor was there a point at which the temperature jumped instantaneously by several degrees. A function that has no holes or breaks in its graph is known as a **continuous function**. Temperature as a function of time is an example of a continuous function.

If temperature represents a continuous function, what kind of function would not be continuous? Consider an example of dollars expressed as a function of hours of parking. Let's create the function $D$, where $D(x)$ is the output representing cost in dollars for parking $x$ number of hours. See the figure below.

Suppose a parking garage charges \$4.00 per hour or fraction of an hour, with a \$25 per day maximum charge. Park for two hours and five minutes and the charge is \$12. Park an additional hour and the charge is \$16. We can never be charged \$13, \$14, or \$15. There are real numbers between 12 and 16 that the function never outputs. There are breaks in the function's graph for this 24-hour period, points at which the price of parking jumps instantaneously by several dollars.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A stepwise function giving the parking charge in dollars as a function of hours parked. The charge is $4 for more than 0 hours up to and including 1 hour, $8 for more than 1 up to and including 2 hours, and so on, rising $4 each hour, through $24 for more than 5 up to and including 6 hours; for every time longer than 6 hours, through 24 hours, it is a flat $25. Each step has an open dot at its left end and a filled dot at its right end.","xMin":0,"xMax":24,"yMin":0,"yMax":28,"unit":14,"yUnit":14,"tickLabels":true,"xTickStep":4,"yTickStep":4,"xLabel":"Hours Parked","yLabel":"Dollars","segments":[{"from":[0,4],"to":[1,4]},{"from":[1,8],"to":[2,8]},{"from":[2,12],"to":[3,12]},{"from":[3,16],"to":[4,16]},{"from":[4,20],"to":[5,20]},{"from":[5,24],"to":[6,24]},{"from":[6,25],"to":[24,25]}],"points":[{"at":[0,4],"open":true},{"at":[1,4]},{"at":[1,8],"open":true},{"at":[2,8]},{"at":[2,12],"open":true},{"at":[3,12]},{"at":[3,16],"open":true},{"at":[4,16]},{"at":[4,20],"open":true},{"at":[5,20]},{"at":[5,24],"open":true},{"at":[6,24]},{"at":[6,25],"open":true},{"at":[24,25]}]}
{{< /apfigure >}}

A function that remains level for an interval and then jumps instantaneously to a higher value is called a **stepwise function**. This function is an example.

A function that has any hole or break in its graph is known as a **discontinuous function**. A stepwise function, such as parking-garage charges as a function of hours parked, is an example of a discontinuous function.

So how can we decide if a function is continuous at a particular number? We can check three different conditions. Let's use the function $y=f(x)$ represented below as an example.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An increasing curve on the window from x = -2 to 6, y = -1 to 7, with an open circle on the curve where x equals a.","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"arrows":true}],"points":[{"at":[2,3],"open":true}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
{{< /apfigure >}}

**Condition 1** According to Condition 1, the function $f(a)$ defined at $x=a$ must exist. In other words, there is a $y$-coordinate at $x=a$ as in the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same increasing curve, still with an open circle at x = a, plus a separate filled point directly below the hole, labeled f(a).","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"arrows":true}],"points":[{"at":[2,3],"open":true},{"at":[2,1],"label":"f(a)"}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
{{< /apfigure >}}

**Condition 2** According to Condition 2, at $x=a$ the limit, written $\lim_{x\to a}f(x)$, must exist. This means that at $x=a$ the left-hand limit must equal the right-hand limit. Notice as the graph of $f$ in the figures above approaches $x=a$ from the left and right, the same $y$-coordinate is approached. Therefore, Condition 2 is satisfied. However, there could still be a hole in the graph at $x=a$.

**Condition 3** According to Condition 3, the corresponding $y$ coordinate at $x=a$ fills in the hole in the graph of $f$. This is written $\lim_{x\to a}f(x)=f(a)$.

Satisfying all three conditions means that the function is continuous. All three conditions are satisfied for the function represented below, so the function is continuous at $x=a$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same increasing curve with a single filled point sitting on the curve itself at x = a, labeled f(a), with no hole anywhere.","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"arrows":true}],"points":[{"at":[2,3],"label":"f(a)","labelSide":"w"}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
{{< /apfigure >}}

The next several figures provide several examples of graphs of functions that are not continuous at $x=a$ and the condition or conditions that fail.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The increasing curve with an open circle at x = a and no filled point anywhere on the vertical line through a.","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"arrows":true}],"points":[{"at":[2,3],"open":true}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
{{< /apfigure >}}

*Condition 2 is satisfied. Conditions 1 and 3 both fail.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The increasing curve with an open circle at x = a and a separate filled point directly below it, labeled f(a).","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"arrows":true}],"points":[{"at":[2,3],"open":true},{"at":[2,1],"label":"f(a)"}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
{{< /apfigure >}}

*Conditions 1 and 2 are both satisfied. Condition 3 fails.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise increasing graph: one branch rises from the lower left to a filled point at x = a, and a second branch begins lower, at an open circle directly below that filled point, then continues rising to the upper right.","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"to":2,"arrows":"start"},{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":2,"from":2,"arrows":"end"}],"points":[{"at":[2,3]},{"at":[2,2],"open":true}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
{{< /apfigure >}}

*Condition 1 is satisfied. Conditions 2 and 3 fail.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise increasing graph like the previous one, but with no filled point anywhere: one branch rises from the lower left to an open circle at x = a, and a second branch begins lower, at a separate open circle directly below it, then continues rising to the upper right.","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"to":2,"arrows":"start"},{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":2,"from":2,"arrows":"end"}],"points":[{"at":[2,3],"open":true},{"at":[2,2],"open":true}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
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
{"ariaLabel":"A piecewise increasing graph: one branch rises from the lower left to a filled point at x = a, and a second branch begins lower, at an open circle directly below that filled point, then continues rising to the upper right.","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"to":2,"arrows":"start"},{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":2,"from":2,"arrows":"end"}],"points":[{"at":[2,3]},{"at":[2,2],"open":true}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Jump Discontinuity.** A function $f(x)$ has a **jump discontinuity** at $x=a$ if the left- and right-hand limits both exist but are not equal: $\lim_{x\to a^-}f(x)\ne\lim_{x\to a^+}f(x)$.
{{< /callout >}}

### Identifying Removable Discontinuity

Some functions have a discontinuity, but it is possible to redefine the function at that point to make it continuous. This type of function is said to have a removable discontinuity. Let's look at the function $y=f(x)$ represented by the graph below. The function has a limit. However, there is a hole at $x=a$. The hole can be filled by extending the domain to include the input $x=a$ and defining the corresponding output of the function at that value as the limit of the function at $x=a$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The increasing curve with an open circle at x = a and no filled point anywhere on the vertical line through a.","xMin":-2,"xMax":6,"yMin":-1,"yMax":7,"unit":26,"curves":[{"kind":"arctangent","a":3,"b":0.6,"h":2,"k":3,"arrows":true}],"points":[{"at":[2,3],"open":true}],"texts":[{"at":[2,-0.45],"text":"a","anchor":"middle","italic":true}]}
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

   Thus, $f(5)$ does not exist, so Condition 1 is not satisfied. Condition 2 is satisfied, since the limit as $x$ approaches 5 is 8. This means there is a removable discontinuity at $x=5$.

b. Condition 1 is satisfied because $g(2)=-2$.

   Notice that the function is a piecewise function, and for each piece, the function is defined everywhere on its domain. Let's examine Condition 2 by determining the left- and right-hand limits as $x$ approaches 2.

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

   To the left of $x=3$, $f(x)=4x$; to the right of $x=3$, $f(x)=8+x$. We need to evaluate the left- and right-hand limits as $x$ approaches 3.

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

   $$f\left(\tfrac{8}{3}\right)=\tfrac{32}{3}=\lim\limits_{x\to\frac83}f(x)\ \Rightarrow\ \text{Condition 3 is satisfied.}$$

   Because all three conditions of continuity are satisfied at $x=\tfrac{8}{3}$, the function $f(x)$ is continuous at $x=\tfrac{8}{3}$.

{{< multiplechoice
  question="Determine whether $f(x)=\begin{cases}\tfrac{1}{x},&x\le2\\9x-11.5,&x>2\end{cases}$ is continuous at $x=2$."
  mode="text"
  answer="Not continuous: Condition 2 fails, because the left-hand and right-hand limits are not equal."
  hint="Check the conditions in order: evaluate $f(2)$ from the piece that includes $x=2$, then compare the left-hand and right-hand limits at $x=2$."
>}}
Not continuous: Condition 2 fails, because the left-hand and right-hand limits are not equal.
The function is continuous at $x=2$.
Not continuous: Condition 1 fails, because $f(2)$ does not exist.
{{< /multiplechoice >}}

{{< fillin
  question="For the function in the previous question, find the left-hand limit of $f(x)$ as $x$ approaches $2$. Enter it as a fraction in lowest terms."
  answer="\frac{1}{2}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Use the piece that defines $f$ to the left of $x=2$; it is continuous there, so substitute $x=2$ into it."
>}}

{{< fillin
  question="For the same function, find the right-hand limit of $f(x)$ as $x$ approaches $2$. Enter it as a decimal."
  answer="6.5"
  answerForm="decimal"
  answerDisplay="$6.5$"
  hint="Use the piece that defines $f$ to the right of $x=2$; it is a polynomial, so substitute $x=2$ into it."
>}}

**Example.** Determine whether the function $f(x)=\tfrac{x^2-25}{x-5}$ is continuous at $x=5$.

**Solution.** To determine if the function $f$ is continuous at $x=5$, we will determine if the three conditions of continuity are satisfied at $x=5$.

Condition 1:

$$f(5)\ \text{does not exist.}\ \Rightarrow\ \text{Condition 1 fails.}$$

There is no need to proceed further. Condition 1 fails at $x=5$. If any of the conditions of continuity are not satisfied at $x=5$, the function $f$ is not continuous at $x=5$.

**Analysis.** See the figure below. Notice that for Condition 2 we have

$$
\begin{array}{lrcl}
& \lim\limits_{x\to5}\tfrac{x^2-25}{x-5} &=& \lim\limits_{x\to5}\tfrac{(x-5)(x+5)}{x-5} \\[4pt]
& &=& \lim\limits_{x\to5}(x+5) \\[4pt]
& &=& 5+5=10 \\[4pt]
& &\Rightarrow& \text{Condition 2 is satisfied.}
\end{array}
$$

At $x=5$, there exists a removable discontinuity. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line of slope 1 through the point (0, 5), drawn with an open circle at the point (5, 10) where the function is undefined.","xMin":0,"xMax":8,"yMin":0,"yMax":13,"unit":28,"tickLabels":true,"lines":[{"slope":1,"intercept":5}],"points":[{"at":[5,10],"open":true}],"yTickOffset":8}
{{< /apfigure >}}

{{< multiplechoice
  question="Determine whether $f(x)=\tfrac{9-x^2}{x^2-3x}$ is continuous at $x=3$. If not, state the type of discontinuity."
  mode="text"
  answer="Not continuous: removable discontinuity at $x=3$."
  hint="Check whether $f(3)$ is defined, then factor the numerator and the denominator and check whether $\lim_{x\to3}f(x)$ exists."
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

**Solution.** The piecewise function is defined by three functions, which are all polynomial functions, $f(x)=x+1$ on $x<2$, $f(x)=3$ on $2\le x<4$, and $f(x)=x^2-11$ on $x\ge4$. Polynomial functions are continuous everywhere. Any discontinuities would be at the boundary points, $x=2$ and $x=4$.

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
  hint="Evaluate $f$ at that point, then compare the two one-sided limits there with each other and with the function value."
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

**Analysis.** See the figure below. There exists a removable discontinuity at $x=0$; $\lim_{x\to0}f(x)=0$, thus the limit exists and is finite, but $f(0)$ does not exist.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise graph: the sine curve for x less than 0, meeting a rapidly rising cubic curve for x greater than 0, with an open circle at the origin where the function is undefined.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":26,"tickLabels":true,"curves":[{"kind":"sine","a":1,"b":1,"h":0,"k":0,"to":0,"arrows":"start","from":-5.5}],"cubics":[{"a":1,"from":0,"arrows":"end"}],"points":[{"at":[0,0],"open":true}],"xTickStep":2}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Media.** Access these online resources for additional instruction and practice with continuity.

  - Continuity at a Point
  - Continuity at a Point: Concept Check
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
  question="For $f(x)=\tfrac{x^2-16}{x+4}$, determine why the function is discontinuous at $a=-4$. State which condition fails."
  mode="text"
  answer="Condition 1 fails: $f(-4)$ is not defined, though $\lim_{x\to-4}f(x)$ exists."
  hint="Substitute $x=-4$ to test Condition 1, then factor the numerator to test whether $\lim_{x\to-4}f(x)$ exists."
>}}
Condition 2 fails: the one-sided limits at $x=-4$ are not equal, so $\lim_{x\to-4}f(x)$ does not exist.
Condition 1 fails: $f(-4)$ is not defined, though $\lim_{x\to-4}f(x)$ exists.
Condition 3 fails: $f(-4)$ is defined but does not equal $\lim_{x\to-4}f(x)$.
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $f(x)=\begin{cases}3+x,&x<1\\x,&x=1\\x^2,&x>1\end{cases}$, determine why the function is discontinuous at $a=1$. State which condition fails."
  mode="text"
  answer="Condition 2 fails: the one-sided limits at $x=1$ are not equal, so $\lim_{x\to1}f(x)$ does not exist."
  hint="Evaluate $f(1)$ from the middle piece, then compare $\lim_{x\to1^-}(3+x)$ with $\lim_{x\to1^+}x^2$."
>}}
Condition 1 fails: $f(1)$ is not defined.
Condition 3 fails: $\lim_{x\to1}f(x)$ exists but does not equal $f(1)$.
Condition 2 fails: the one-sided limits at $x=1$ are not equal, so $\lim_{x\to1}f(x)$ does not exist.
{{< /multiplechoice >}}

The graph below refers to the next two questions. Each square represents one unit.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph on a grid where each square is one unit. One curved piece enters from the upper left with an arrow and ends at an open circle at (-3, -2). Separately, a filled point at (-3, 1) begins a second curve that rises to a local peak, falls through an open circle at (2, -1), rises again to a peak at an open circle at (4, 2), then falls and exits toward the lower right with an arrow. A separate filled point sits alone at (4, -3).","xMin":-5,"xMax":6,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":0.45,"b":1.85,"c":-0.5,"from":-5.6,"to":-3,"arrows":"start"},{"a":-0.4,"b":-0.8,"c":2.2,"from":-3,"to":2,"arrows":false}],"cubics":[{"a":-0.75,"b":6.75,"c":-18,"d":14,"from":2,"to":5.2,"arrows":"end"}],"points":[{"at":[-3,-2],"open":true},{"at":[-3,1]},{"at":[2,-1],"open":true},{"at":[4,2],"open":true},{"at":[4,-3]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which of the three conditions of continuity are satisfied at $x=-3$, and which are not?"
  mode="text"
  answer="Condition 1, but not 2 or 3."
  hint="Check for a filled point on the vertical line $x=-3$, then compare the heights the graph approaches from the left and from the right of $x=-3$."
>}}
Conditions 1, 2, and 3 are all satisfied.
Conditions 1 and 2, but not 3.
Condition 1, but not 2 or 3.
Condition 2, but not 1 or 3.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which of the three conditions of continuity are satisfied at $x=4$, and which are not?"
  mode="text"
  answer="Conditions 1 and 2, but not 3."
  hint="Check for a filled point on the vertical line $x=4$, compare the heights the graph approaches from each side of $x=4$, then compare that height with the filled point's."
>}}
Condition 1, but not 2 or 3.
Conditions 1 and 2, but not 3.
Conditions 1, 2, and 3 are all satisfied.
Condition 2, but not 1 or 3.
{{< /multiplechoice >}}

{{< fillin
  question="Find $\lim_{x\to1}f(x)$ for $f(x)=\begin{cases}x^2+4,&x\ne1\\2,&x=1\end{cases}$."
  answer="5"
  answerForm="decimal"
  answerDisplay="$5$"
  hint="Near $x=1$, but not at it, $f$ is given by the $x\ne1$ piece, which is a polynomial; substitute $x=1$ into that piece."
>}}

{{< multiplechoice
  question="Is $f(x)=\begin{cases}x^2+4,&x\ne1\\2,&x=1\end{cases}$ continuous at $x=1$?"
  mode="text"
  answer="No: $\lim_{x\to1}f(x)$ exists but does not equal $f(1)$."
  hint="Compare the limit as $x$ approaches $1$ with the value $f(1)$ that the $x=1$ piece assigns."
>}}
Yes: $\lim_{x\to1}f(x)=f(1)$.
No: $\lim_{x\to1}f(x)$ exists but does not equal $f(1)$.
No: the one-sided limits at $x=1$ are not equal.
{{< /multiplechoice >}}

### Determine the numbers for which a function is discontinuous

{{< fillin
  question="Determine the $x$-value(s) for which $f(x)=\tfrac{|x-2|}{x^2-2x}$ is discontinuous. Enter the value(s), separated by a comma if there is more than one."
  answer="0,2"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=0$ and $x=2$"
  hint="The numerator is defined for every $x$; find every input that makes the denominator zero."
>}}

{{< fillin
  question="Determine the $x$-value(s) for which $f(x)=2x+\tfrac{5}{x}$ is discontinuous."
  answer="0"
  answerForm="decimal"
  answerDisplay="$x=0$"
  hint="The polynomial term $2x$ is continuous everywhere; find where the remaining term is undefined."
>}}

{{< fillin
  question="The graph below shows a function. At what $x$-coordinates is the function discontinuous? Enter the values, separated by commas."
  answer="-1,1,2"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-1$, $x=1$, and $x=2$"
  hint="Look for every hole, every jump, and every vertical asymptote in the graph."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph on the window x from -4 to 4, y from -4 to 4, with a dashed vertical line at x = 2. One curve enters from the lower left with an arrow and rises to an open circle at (-1, 0). A separate curve begins at a filled point at (-1, 2), falls through an open circle at (1, 0), and plunges downward ever more steeply as it nears the dashed line, leaving the bottom of the window with an arrow.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":28,"tickLabels":true,"lines":[{"x":2,"dashed":true,"arrows":false}],"quadratics":[{"a":0.0111,"b":0.3056,"c":0.2944,"from":-3.7,"to":-1,"arrows":"start"}],"points":[{"at":[-1,0],"open":true},{"at":[-1,2]},{"at":[1,0],"open":true}],"rationals":[{"num":[-3.1142,3.3858,0.1142,-0.3858],"den":[-2,1],"from":-1,"to":1.99,"arrows":"end"}]}
{{< /apfigure >}}

### Determine whether a function is continuous

{{< fillin
  question="State the interval on which $f(x)=x^3-2x-15$ is continuous. Enter it in interval notation."
  answer="(-\infty,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,\infty)$"
  hint="This is a polynomial function — where are polynomial functions continuous?"
>}}

{{< fillin
  question="State the interval on which $f(x)=\sqrt{x-4}$ is continuous. Enter it in interval notation."
  answer="[4,\infty)"
  answerForm="decimal"
  answerDisplay="$[4,\infty)$"
  hint="A square root is defined only where its radicand is nonnegative; find where $x-4\ge0$."
>}}

{{< fillin
  question="The function $f(x)=\sin\left(\tfrac{12\pi}{x}\right)$, graphed below, is continuous everywhere it is defined. State its domain in interval notation; this is also where the function is continuous."
  answer="(-\infty,0)\cup(0,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,0)\cup(0,\infty)$"
  hint="Find where the argument $\tfrac{12\pi}{x}$ is undefined; every other real number is in the domain."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of sine of 12 pi over x on the window x = -11 to 11, y = -1 to 1, oscillating between -1 and 1 faster and faster as x approaches 0 from either side, and settling into a slower wave as x moves away from 0 in both directions.","xMin":-11,"xMax":11,"yMin":-1.3,"yMax":1.3,"unit":16,"yUnit":60,"tickLabels":true,"xTickStep":5,"yTickStep":1,"polylines":[{"through":[[-11,0.282],[-10.92,0.306],[-10.84,0.33],[-10.76,0.354],[-10.68,0.379],[-10.6,0.403],[-10.52,0.428],[-10.44,0.452],[-10.36,0.477],[-10.28,0.502],[-10.2,0.526],[-10.12,0.551],[-10.04,0.576],[-9.96,0.6],[-9.88,0.624],[-9.8,0.648],[-9.72,0.672],[-9.64,0.695],[-9.56,0.719],[-9.48,0.741],[-9.4,0.764],[-9.32,0.785],[-9.24,0.807],[-9.16,0.827],[-9.08,0.847],[-9,0.866],[-8.92,0.884],[-8.84,0.901],[-8.76,0.918],[-8.68,0.933],[-8.6,0.946],[-8.52,0.959],[-8.44,0.97],[-8.36,0.979],[-8.28,0.987],[-8.2,0.993],[-8.12,0.998],[-8.04,1],[-7.96,1],[-7.88,0.997],[-7.8,0.993],[-7.72,0.985],[-7.64,0.975],[-7.56,0.963],[-7.48,0.947],[-7.4,0.928],[-7.32,0.906],[-7.24,0.88],[-7.16,0.851],[-7.08,0.818],[-7,0.782],[-6.92,0.742],[-6.84,0.697],[-6.76,0.649],[-6.68,0.597],[-6.6,0.541],[-6.52,0.48],[-6.44,0.416],[-6.36,0.348],[-6.28,0.276],[-6.2,0.201],[-6.12,0.123],[-6.04,0.042],[-5.96,-0.042],[-5.88,-0.128],[-5.8,-0.215],[-5.72,-0.303],[-5.64,-0.39],[-5.56,-0.477],[-5.48,-0.562],[-5.4,-0.643],[-5.32,-0.72],[-5.24,-0.79],[-5.16,-0.854],[-5.08,-0.908],[-5,-0.951],[-4.92,-0.982],[-4.84,-0.998],[-4.76,-0.998],[-4.68,-0.98],[-4.6,-0.942],[-4.52,-0.884],[-4.44,-0.804],[-4.36,-0.702],[-4.28,-0.578],[-4.2,-0.434],[-4.12,-0.271],[-4.04,-0.093],[-3.96,0.095],[-3.88,0.287],[-3.8,0.476],[-3.72,0.651],[-3.64,0.803],[-3.56,0.919],[-3.48,0.987],[-3.4,0.996],[-3.32,0.936],[-3.2435,0.809],[-3.1704,0.625],[-3.1006,0.397],[-3.0338,0.14],[-2.9699,-0.127],[-2.9087,-0.384],[-2.8499,-0.615],[-2.7935,-0.801],[-2.7393,-0.931],[-2.6872,-0.994],[-2.6371,-0.987],[-2.5888,-0.911],[-2.5422,-0.77],[-2.4973,-0.575],[-2.454,-0.339],[-2.4122,-0.079],[-2.3718,0.186],[-2.3327,0.438],[-2.295,0.659],[-2.2584,0.833],[-2.223,0.949],[-2.1886,0.999],[-2.1554,0.978],[-2.1231,0.888],[-2.0918,0.736],[-2.0614,0.533],[-2.0319,0.292],[-2.0032,0.031],[-1.9754,-0.233],[-1.9483,-0.48],[-1.9219,-0.693],[-1.8963,-0.858],[-1.8713,-0.963],[-1.847,-1],[-1.8233,-0.967],[-1.8002,-0.867],[-1.7777,-0.706],[-1.7558,-0.496],[-1.7343,-0.252],[-1.7135,0.011],[-1.6931,0.272],[-1.6732,0.515],[-1.6537,0.721],[-1.6347,0.877],[-1.6162,0.972],[-1.598,1],[-1.5803,0.957],[-1.563,0.848],[-1.546,0.68],[-1.5294,0.464],[-1.5132,0.217],[-1.4973,-0.046],[-1.4817,-0.306],[-1.4664,-0.544],[-1.4515,-0.744],[-1.4369,-0.893],[-1.4225,-0.98],[-1.4085,-0.998],[-1.3947,-0.947],[-1.3812,-0.83],[-1.3679,-0.656],[-1.355,-0.436],[-1.3422,-0.186],[-1.3297,0.077],[-1.3174,0.335],[-1.3054,0.569],[-1.2935,0.764],[-1.2819,0.906],[-1.2705,0.985],[-1.2593,0.996],[-1.2483,0.937],[-1.2375,0.814],[-1.2268,0.634],[-1.2164,0.41],[-1.2061,0.158],[-1.196,-0.105],[-1.1861,-0.361],[-1.1763,-0.592],[-1.1667,-0.782],[-1.1572,-0.917],[-1.1479,-0.989],[-1.1388,-0.993],[-1.1298,-0.928],[-1.1209,-0.799],[-1.1122,-0.614],[-1.1036,-0.387],[-1.0951,-0.133],[-1.0868,0.13],[-1.0786,0.384],[-1.0705,0.612],[-1.0626,0.797],[-1.0547,0.927],[-1.047,0.993],[-1.0394,0.99],[-1.0319,0.919],[-1.0245,0.784],[-1.0172,0.595],[-1.01,0.365],[-1.0029,0.11],[-0.9959,-0.153],[-0.9891,-0.405],[-0.9823,-0.629],[-0.9756,-0.81],[-0.969,-0.935],[-0.9624,-0.995],[-0.956,-0.987],[-0.9497,-0.91],[-0.9434,-0.77],[-0.9372,-0.578],[-0.9311,-0.345],[-0.9251,-0.089],[-0.9192,0.174],[-0.9133,0.424],[-0.9075,0.645],[-0.9018,0.822],[-0.8961,0.942],[-0.8905,0.997],[-0.885,0.983],[-0.8796,0.901],[-0.8742,0.758],[-0.8689,0.562],[-0.8637,0.327],[-0.8585,0.069],[-0.8534,-0.193],[-0.8483,-0.442],[-0.8433,-0.66],[-0.8384,-0.833],[-0.8335,-0.948],[-0.8287,-0.998],[-0.8239,-0.979],[-0.8192,-0.893],[-0.8145,-0.745],[-0.8099,-0.546],[-0.8054,-0.309],[-0.8009,-0.051],[-0.7964,0.21],[-0.792,0.458],[-0.7877,0.673],[-0.7833,0.842],[-0.7791,0.954],[-0.7749,0.999],[-0.7707,0.976],[-0.7666,0.885],[-0.7625,0.734],[-0.7585,0.532],[-0.7545,0.293],[-0.7505,0.034],[-0.7466,-0.227],[-0.7427,-0.473],[-0.7389,-0.686],[-0.7351,-0.851],[-0.7314,-0.958],[-0.7276,-1],[-0.724,-0.972],[-0.7203,-0.877],[-0.7167,-0.723],[-0.7132,-0.518],[-0.7096,-0.278],[-0.7061,-0.018],[-0.7027,0.242],[-0.6992,0.486],[-0.6958,0.697],[-0.6925,0.859],[-0.6891,0.963],[-0.6858,1],[-0.6826,0.968],[-0.6793,0.87],[-0.6761,0.712],[-0.673,0.505],[-0.6698,0.263],[-0.6667,0.003],[-0.6636,-0.257],[-0.6606,-0.499],[-0.6575,-0.708],[-0.6545,-0.867],[-0.6516,-0.967],[-0.6486,-1],[-0.6457,-0.965],[-0.6428,-0.863],[-0.6399,-0.702],[-0.6371,-0.492],[-0.6343,-0.249],[-0.6315,0.011],[-0.6287,0.271],[-0.6259,0.512],[-0.6232,0.717],[-0.6205,0.874],[-0.6179,0.97],[-0.6152,1],[-0.6126,0.961],[-0.61,0.856],[-0.6074,0.692],[-0.6048,0.48],[-0.6023,0.236],[-0.5998,-0.025],[-0.5973,-0.284],[-0.5948,-0.523],[-0.5923,-0.727],[-0.5899,-0.88],[-0.5875,-0.973],[-0.5851,-1],[-0.5827,-0.957],[-0.5803,-0.849],[-0.578,-0.682],[-0.5757,-0.469],[-0.5734,-0.223],[-0.5711,0.038],[-0.5688,0.296],[-0.5666,0.534],[-0.5644,0.735],[-0.5622,0.886],[-0.56,0.976],[-0.5578,0.999],[-0.5556,0.953],[-0.5535,0.842],[-0.5513,0.673],[-0.5492,0.458],[-0.5471,0.211],[-0.5451,-0.05],[-0.543,-0.308],[-0.541,-0.544],[-0.5389,-0.743],[-0.5369,-0.892],[-0.5349,-0.979],[-0.5329,-0.998],[-0.5309,-0.95],[-0.529,-0.836],[-0.527,-0.664],[-0.5251,-0.448],[-0.5232,-0.2],[-0.5213,0.061],[-0.5194,0.319],[-0.5175,0.554],[-0.5157,0.751],[-0.5138,0.897],[-0.512,0.981],[-0.5102,0.998],[-0.5084,0.946],[-0.5066,0.83],[-0.5048,0.656],[-0.503,0.437],[-0.5013,0.189],[-0.4995,-0.073],[-0.4978,-0.329],[-0.4961,-0.563],[-0.4944,-0.758],[-0.4927,-0.902],[-0.491,-0.983],[-0.4893,-0.997],[-0.4876,-0.942],[-0.486,-0.823],[-0.4843,-0.648],[-0.4827,-0.428],[-0.4811,-0.178],[-0.4795,0.083],[-0.4779,0.339],[-0.4763,0.572],[-0.4747,0.765],[-0.4732,0.906],[-0.4716,0.985],[-0.4701,0.996],[-0.4685,0.939],[-0.467,0.817],[-0.4655,0.64],[-0.464,0.418],[-0.4625,0.168],[-0.461,-0.094],[-0.4595,-0.349],[-0.4581,-0.58],[-0.4566,-0.772],[-0.4552,-0.91],[-0.4537,-0.987],[-0.4523,-0.995],[-0.4509,-0.935],[-0.4495,-0.812],[-0.4481,-0.632],[-0.4467,-0.409],[-0.4453,-0.158],[-0.4439,0.103],[-0.4425,0.358],[-0.4412,0.588],[-0.4398,0.778],[-0.4385,0.914],[-0.4371,0.988],[-0.4358,0.994],[-0.4345,0.932],[-0.4332,0.806],[-0.4319,0.625],[-0.4306,0.4],[-0.4293,0.149],[-0.428,-0.113],[-0.4267,-0.367],[-0.4255,-0.596],[-0.4242,-0.784],[-0.423,-0.918],[-0.4217,-0.99],[-0.4205,-0.993],[-0.4193,-0.929],[-0.4181,-0.8],[-0.4168,-0.617],[-0.4156,-0.392],[-0.4144,-0.14],[-0.4132,0.122],[-0.4121,0.375],[-0.4109,0.603],[-0.4097,0.79],[-0.4085,0.922],[-0.4074,0.991],[-0.4062,0.992],[-0.4051,0.925],[-0.4039,0.795],[-0.4028,0.61],[-0.4017,0.384],[-0.4006,0.131],[-0.3994,-0.131],[-0.3983,-0.384],[-0.3972,-0.61],[-0.3961,-0.795],[-0.395,-0.925],[-0.394,-0.992],[-0.3929,-0.991],[-0.3918,-0.922],[-0.3907,-0.79],[-0.3897,-0.603],[-0.3886,-0.376],[-0.3876,-0.122],[-0.3865,0.139],[-0.3855,0.392],[-0.3845,0.617],[-0.3834,0.8],[-0.3824,0.928],[-0.3814,0.993],[-0.3804,0.99],[-0.3794,0.918],[-0.3784,0.784],[-0.3774,0.597],[-0.3764,0.368],[-0.3754,0.114],[-0.3744,-0.148],[-0.3735,-0.399],[-0.3725,-0.623],[-0.3715,-0.805],[-0.3706,-0.931],[-0.3696,-0.994],[-0.3687,-0.988],[-0.3677,-0.915],[-0.3668,-0.779],[-0.3659,-0.59],[-0.3649,-0.36],[-0.364,-0.106],[-0.3631,0.156],[-0.3622,0.407],[-0.3613,0.63],[-0.3604,0.81],[-0.3595,0.934],[-0.3586,0.995],[-0.3577,0.987],[-0.3568,0.912],[-0.3559,0.774],[-0.355,0.584],[-0.3541,0.353],[-0.3533,0.098],[-0.3524,-0.163],[-0.3515,-0.414],[-0.3507,-0.636],[-0.35,-0.782]],"arrows":"start"},{"through":[[0.35,0.782],[0.3509,0.594],[0.3517,0.367],[0.3526,0.114],[0.3534,-0.147],[0.3543,-0.397],[0.3552,-0.62],[0.356,-0.802],[0.3569,-0.929],[0.3578,-0.993],[0.3587,-0.99],[0.3596,-0.919],[0.3605,-0.787],[0.3614,-0.601],[0.3623,-0.374],[0.3632,-0.122],[0.3641,0.139],[0.365,0.39],[0.366,0.614],[0.3669,0.797],[0.3678,0.926],[0.3688,0.992],[0.3697,0.991],[0.3707,0.922],[0.3716,0.792],[0.3726,0.607],[0.3735,0.381],[0.3745,0.13],[0.3755,-0.131],[0.3765,-0.382],[0.3775,-0.608],[0.3784,-0.792],[0.3794,-0.923],[0.3804,-0.991],[0.3814,-0.992],[0.3825,-0.926],[0.3835,-0.796],[0.3845,-0.613],[0.3855,-0.389],[0.3865,-0.138],[0.3876,0.123],[0.3886,0.375],[0.3897,0.601],[0.3907,0.787],[0.3918,0.92],[0.3929,0.99],[0.3939,0.993],[0.395,0.929],[0.3961,0.802],[0.3972,0.62],[0.3983,0.397],[0.3994,0.146],[0.4005,-0.114],[0.4016,-0.367],[0.4027,-0.594],[0.4038,-0.782],[0.405,-0.916],[0.4061,-0.989],[0.4073,-0.994],[0.4084,-0.932],[0.4096,-0.807],[0.4107,-0.627],[0.4119,-0.405],[0.4131,-0.155],[0.4143,0.105],[0.4155,0.358],[0.4167,0.587],[0.4179,0.776],[0.4191,0.913],[0.4203,0.987],[0.4215,0.995],[0.4228,0.935],[0.424,0.812],[0.4253,0.634],[0.4265,0.413],[0.4278,0.164],[0.429,-0.096],[0.4303,-0.35],[0.4316,-0.58],[0.4329,-0.77],[0.4342,-0.909],[0.4355,-0.986],[0.4368,-0.996],[0.4382,-0.938],[0.4395,-0.818],[0.4408,-0.641],[0.4422,-0.422],[0.4435,-0.173],[0.4449,0.087],[0.4463,0.341],[0.4477,0.572],[0.449,0.764],[0.4504,0.905],[0.4519,0.984],[0.4533,0.997],[0.4547,0.942],[0.4561,0.823],[0.4576,0.649],[0.459,0.43],[0.4605,0.183],[0.462,-0.077],[0.4635,-0.332],[0.4649,-0.564],[0.4664,-0.758],[0.468,-0.9],[0.4695,-0.982],[0.471,-0.997],[0.4726,-0.945],[0.4741,-0.829],[0.4757,-0.656],[0.4772,-0.44],[0.4788,-0.193],[0.4804,0.067],[0.482,0.322],[0.4836,0.555],[0.4852,0.751],[0.4869,0.896],[0.4885,0.98],[0.4902,0.998],[0.4919,0.948],[0.4935,0.835],[0.4952,0.664],[0.4969,0.449],[0.4986,0.203],[0.5004,-0.056],[0.5021,-0.312],[0.5039,-0.546],[0.5056,-0.744],[0.5074,-0.891],[0.5092,-0.978],[0.511,-0.999],[0.5128,-0.952],[0.5146,-0.841],[0.5165,-0.672],[0.5183,-0.459],[0.5202,-0.214],[0.5221,0.045],[0.524,0.301],[0.5259,0.537],[0.5278,0.736],[0.5297,0.886],[0.5317,0.976],[0.5336,0.999],[0.5356,0.955],[0.5376,0.847],[0.5396,0.681],[0.5416,0.469],[0.5437,0.225],[0.5457,-0.033],[0.5478,-0.29],[0.5499,-0.527],[0.552,-0.728],[0.5541,-0.88],[0.5562,-0.973],[0.5584,-1],[0.5605,-0.959],[0.5627,-0.853],[0.5649,-0.69],[0.5671,-0.48],[0.5694,-0.237],[0.5716,0.021],[0.5739,0.278],[0.5762,0.517],[0.5785,0.72],[0.5808,0.875],[0.5831,0.97],[0.5855,1],[0.5879,0.962],[0.5903,0.859],[0.5927,0.699],[0.5951,0.491],[0.5976,0.249],[0.6001,-0.009],[0.6026,-0.266],[0.6051,-0.506],[0.6076,-0.711],[0.6102,-0.868],[0.6128,-0.967],[0.6154,-1],[0.618,-0.966],[0.6207,-0.866],[0.6234,-0.708],[0.6261,-0.502],[0.6288,-0.262],[0.6315,-0.005],[0.6343,0.253],[0.6371,0.494],[0.6399,0.701],[0.6428,0.861],[0.6456,0.963],[0.6485,1],[0.6514,0.969],[0.6544,0.873],[0.6574,0.718],[0.6604,0.514],[0.6634,0.276],[0.6664,0.019],[0.6695,-0.24],[0.6726,-0.482],[0.6758,-0.691],[0.679,-0.854],[0.6822,-0.959],[0.6854,-1],[0.6887,-0.973],[0.6919,-0.88],[0.6953,-0.728],[0.6986,-0.527],[0.702,-0.29],[0.7054,-0.034],[0.7089,0.225],[0.7124,0.468],[0.7159,0.68],[0.7195,0.846],[0.7231,0.955],[0.7267,0.999],[0.7304,0.976],[0.7341,0.887],[0.7378,0.738],[0.7416,0.54],[0.7454,0.305],[0.7493,0.049],[0.7532,-0.21],[0.7571,-0.454],[0.7611,-0.668],[0.7651,-0.837],[0.7692,-0.95],[0.7733,-0.998],[0.7774,-0.979],[0.7816,-0.895],[0.7859,-0.749],[0.7902,-0.554],[0.7945,-0.321],[0.7989,-0.066],[0.8033,0.193],[0.8078,0.439],[0.8123,0.656],[0.8169,0.828],[0.8215,0.944],[0.8262,0.997],[0.831,0.983],[0.8358,0.902],[0.8406,0.761],[0.8455,0.568],[0.8505,0.337],[0.8555,0.084],[0.8606,-0.175],[0.8657,-0.423],[0.8709,-0.642],[0.8762,-0.817],[0.8815,-0.938],[0.8869,-0.996],[0.8924,-0.986],[0.8979,-0.91],[0.9035,-0.773],[0.9092,-0.584],[0.9149,-0.355],[0.9208,-0.103],[0.9266,0.156],[0.9326,0.405],[0.9386,0.627],[0.9448,0.806],[0.951,0.931],[0.9572,0.994],[0.9636,0.989],[0.9701,0.918],[0.9766,0.786],[0.9832,0.6],[0.9899,0.374],[0.9967,0.123],[1.0036,-0.136],[1.0106,-0.386],[1.0177,-0.61],[1.0249,-0.793],[1.0322,-0.923],[1.0396,-0.991],[1.0471,-0.992],[1.0547,-0.927],[1.0624,-0.799],[1.0703,-0.618],[1.0782,-0.395],[1.0863,-0.146],[1.0945,0.113],[1.1028,0.365],[1.1113,0.592],[1.1198,0.779],[1.1286,0.914],[1.1374,0.988],[1.1464,0.995],[1.1555,0.935],[1.1648,0.813],[1.1742,0.637],[1.1838,0.417],[1.1935,0.17],[1.2034,-0.089],[1.2135,-0.341],[1.2237,-0.571],[1.2341,-0.763],[1.2447,-0.903],[1.2554,-0.983],[1.2664,-0.997],[1.2775,-0.944],[1.2888,-0.828],[1.3004,-0.657],[1.3121,-0.442],[1.3241,-0.197],[1.3362,0.062],[1.3486,0.315],[1.3613,0.548],[1.3741,0.744],[1.3873,0.891],[1.4006,0.978],[1.4142,0.999],[1.4281,0.954],[1.4423,0.844],[1.4567,0.679],[1.4715,0.468],[1.4865,0.226],[1.5019,-0.031],[1.5175,-0.286],[1.5335,-0.522],[1.5498,-0.723],[1.5665,-0.876],[1.5836,-0.97],[1.601,-1],[1.6188,-0.963],[1.637,-0.862],[1.6556,-0.703],[1.6746,-0.498],[1.6941,-0.259],[1.714,-0.003],[1.7344,0.253],[1.7553,0.492],[1.7767,0.698],[1.7986,0.858],[1.8211,0.961],[1.8441,1],[1.8678,0.972],[1.892,0.88],[1.9168,0.73],[1.9424,0.531],[1.9686,0.297],[1.9955,0.043],[2.0231,-0.214],[2.0515,-0.456],[2.0808,-0.668],[2.1108,-0.836],[2.1418,-0.948],[2.1736,-0.998],[2.2064,-0.981],[2.2403,-0.9],[2.2751,-0.759],[2.311,-0.568],[2.3481,-0.34],[2.3864,-0.089],[2.426,0.167],[2.4668,0.413],[2.5091,0.631],[2.5528,0.808],[2.5981,0.931],[2.645,0.993],[2.6935,0.99],[2.7439,0.922],[2.7962,0.793],[2.8505,0.612],[2.9069,0.392],[2.9656,0.145],[3.0267,-0.111],[3.0903,-0.359],[3.1566,-0.584],[3.2258,-0.771],[3.2981,-0.907],[3.3736,-0.984],[3.4527,-0.997],[3.5327,-0.948],[3.6127,-0.847],[3.6927,-0.706],[3.7727,-0.538],[3.8527,-0.353],[3.9327,-0.161],[4.0127,0.03],[4.0927,0.212],[4.1727,0.38],[4.2527,0.531],[4.3327,0.662],[4.4127,0.772],[4.4927,0.859],[4.5727,0.925],[4.6527,0.969],[4.7327,0.994],[4.8127,1],[4.8927,0.989],[4.9727,0.963],[5.0527,0.924],[5.1327,0.873],[5.2127,0.813],[5.2927,0.744],[5.3727,0.67],[5.4527,0.59],[5.5327,0.506],[5.6127,0.42],[5.6927,0.333],[5.7727,0.245],[5.8527,0.158],[5.9327,0.071],[6.0127,-0.013],[6.0927,-0.095],[6.1727,-0.175],[6.2527,-0.251],[6.3327,-0.324],[6.4127,-0.393],[6.4927,-0.459],[6.5727,-0.521],[6.6527,-0.578],[6.7327,-0.632],[6.8127,-0.681],[6.8927,-0.727],[6.9727,-0.768],[7.0527,-0.806],[7.1327,-0.84],[7.2127,-0.871],[7.2927,-0.897],[7.3727,-0.921],[7.4527,-0.941],[7.5327,-0.958],[7.6127,-0.971],[7.6927,-0.982],[7.7727,-0.991],[7.8527,-0.996],[7.9327,-0.999],[8.0127,-1],[8.0927,-0.999],[8.1727,-0.995],[8.2527,-0.99],[8.3327,-0.982],[8.4127,-0.973],[8.4927,-0.963],[8.5727,-0.951],[8.6527,-0.937],[8.7327,-0.923],[8.8127,-0.907],[8.8927,-0.89],[8.9727,-0.872],[9.0527,-0.854],[9.1327,-0.834],[9.2127,-0.814],[9.2927,-0.793],[9.3727,-0.771],[9.4527,-0.749],[9.5327,-0.726],[9.6127,-0.703],[9.6927,-0.68],[9.7727,-0.656],[9.8527,-0.632],[9.9327,-0.608],[10.0127,-0.584],[10.0927,-0.559],[10.1727,-0.535],[10.2527,-0.51],[10.3327,-0.486],[10.4127,-0.461],[10.4927,-0.436],[10.5727,-0.412],[10.6527,-0.387],[10.7327,-0.363],[10.8127,-0.338],[10.8927,-0.314],[10.9727,-0.29],[11,-0.282]],"arrows":"end"}],"yTickOffset":180}
{{< /apfigure >}}

---

<small>This section is adapted from [Precalculus 2e, Section 12.3: Continuity](https://openstax.org/books/precalculus-2e/pages/12-3-continuity) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: the temperature graph (Figure 1) redraws the source's broken line through its plotted values, which match the text's $96^\circ\text{F}$ at 2 a.m., $116^\circ\text{F}$ at 2 p.m., and $118^\circ\text{F}$ at 4 p.m.; the parking-garage graph (Figure 2) is drawn from the text's own rule — \$4 per hour or fraction of an hour, each step open at its left end and closed at its right, so two hours and five minutes cost \$12 as the text says, with the \$25 daily maximum reached from the seventh hour — where the source figure holds a flat \$24 from hour 5 and closes each step at its left end; the y-axis's printed break mark between 0 and 80 is omitted and the window instead starts at 90, since including the dead zone would make the graph too small to read. The nine generic "condition" figures (illustrating Conditions 1–3, the jump-discontinuity example, and the removable-discontinuity example) reuse one fitted arctangent curve, $3+3\arctan(0.6(x-2))$ (and, for the three jump-shaped figures, the same curve shifted down by $1$ on its right branch), since the source draws an unnamed generic increasing curve at each spot; the figure accompanying Example 3 is the exact line $y=x+5$ with a hole at $(5,10)$, matching the source's own worked function. The worked examples correct slips in the source's solutions: Example 1 numbers its conditions as the definition does (Condition 1 fails and Condition 2 holds in part a; Condition 1 holds and the one-sided limits test Condition 2 in part b); Example 2 says "as $x$ approaches 3" and evaluates $f\left(\tfrac{8}{3}\right)$, not $f\left(\tfrac{32}{3}\right)$; Example 3 says Condition 1, not Condition 2, fails at $x=5$, and its Analysis takes the limit as $x\to5$, not $x\to3$; Example 4 restates the third branch as $x^2-11$, not $x^2-5$; and Example 5's Analysis says $f(0)$, not $f(a)$, does not exist. Every retained Try It became a real `fillin` or `multiplechoice` component; the Try It on the piecewise function built from $\tfrac{1}{x}$ and $9x-11.5$ is split into one multiple choice (which condition fails) plus two fill-ins (the two one-sided limits, one as a fraction and one as a decimal), since no single response field can hold both, and the Try It on the piecewise function built from $\tfrac{\pi x}{4}$, $\tfrac{\pi}{x}$, and $2\pi x$ is followed by an author-written multiple choice asking which condition fails there. Every categorical judgment ("is it continuous," "which condition fails," "jump or removable") is authored as `multiplechoice` with the source's own vocabulary as options. The two graph-reading exercises for $x=-3$ and $x=4$ share one recreated static figure placed once above them. The exercise pairing "at what $x$-coordinates is the function discontinuous / what condition of continuity is violated" is combined into a single fill-in asking for the discontinuous $x$-coordinates, since only the second exercise carries a printed solution and that solution's own text names every discontinuity, including one where the figure's dashed vertical line marks a vertical asymptote; its recreated figure fits a quadratic and a rational curve through the plotted points to match the source's hand-drawn curves. The exercise asking for the domain of $f(x)=\sin\left(\tfrac{12\pi}{x}\right)$ is graphed on $-11\le x\le11$ rather than the source's $-10\le x\le10$, and the drawing stops just short of $x=0$, where the oscillation is too fast to draw. The "construct a function with removable discontinuities at $x=-7$ and $x=1$" exercise is not used: its answer, $\tfrac{x^3+6x^2-7x}{(x+7)(x-1)}$, grades equal to the bare expression $x$, which has no discontinuities at all. Eleven selected end-of-section exercises were adapted into twelve interactive Practice components (the exercise that asks for $\lim_{x\to1}f(x)$ and whether $f$ is continuous at $x=1$ is split into a fill-in and a multiple choice), every one independently re-derived rather than read off the source key.</small>
