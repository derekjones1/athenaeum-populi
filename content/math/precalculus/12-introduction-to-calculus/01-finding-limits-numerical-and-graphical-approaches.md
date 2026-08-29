---
title: "Finding Limits: Numerical and Graphical Approaches"
description: >-
  Understanding limit notation, estimating a limit from a graph, and
  estimating a limit from a table of values — adapted from OpenStax
  Precalculus 2e, Section 12.1.
source_section: "12.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Understand limit notation
- Find a limit using a graph
- Find a limit using a table
{{< /callout >}}

Intuitively, we know what a **limit** is. A car can go only so fast and no faster. A trash can might hold $33$ gallons and no more. It is natural for measured amounts to have limits. What, for instance, is the limit to the height of a woman? The tallest woman on record was Jinlian Zeng from China, who was 8 ft 1 in. Is this the limit of the height to which women can grow? Perhaps not, but there is likely a limit that we might describe in inches if we were able to determine what it was.

To put it mathematically, the function whose input is a woman and whose output is a measured height in inches has a limit. In this section, we will examine numerical and graphical approaches to identifying limits.

### Understanding Limit Notation

We have seen how a **sequence** can have a limit, a value that the sequence of terms moves toward as the number of terms increases. For example, the terms of the sequence

$$1,\tfrac{1}{2},\tfrac{1}{4},\tfrac{1}{8},\ldots$$

get closer and closer to $0$. A sequence is one type of function, but functions that are not sequences can also have limits. We can describe the behavior of the function as the input values get close to a specific value. If the limit of a function $f(x)=L\text{,}$ then as the input $x$ gets closer and closer to $a,$ the output $y$-coordinate gets closer and closer to $L.$ We say that the output "approaches" $L.$

The graph below provides a visual representation of the mathematical concept of limit. As the input value $x$ approaches $a,$ the output value $f(x)$ approaches $L.$

{{< apfigure kind="graph" >}}
{"ariaLabel":"An increasing S-shaped curve labeled f, with arrows showing it continues down to the lower left and up to the upper right. A dashed horizontal line at height L runs from the y-axis to an open circle on the curve, marking the point where the input is a and the output approaches L.","xMin":-2,"xMax":4,"yMin":-2,"yMax":6,"grid":false,"tickLabels":false,"cubics":[{"a":0.12,"b":-0.36,"c":0.36,"d":1.88,"arrows":true}],"lines":[{"y":2,"dashed":true,"label":"y = L"}],"points":[{"at":[1,2],"open":true,"label":"(a, L)"}],"texts":[{"at":[3.5,5.1],"text":"f"}]}
{{< /apfigure >}}

We write the equation of a limit as

$$\lim\limits_{x\to a}f(x)=L.$$

This notation indicates that as $x$ approaches $a$ both from the left of $x=a$ and the right of $x=a,$ the output value approaches $L.$

Consider the function

$$f(x)=\tfrac{x^2-6x-7}{x-7}.$$

We can factor the function as shown.

$$
\begin{array}{ll}
f(x)=\tfrac{(x-7)(x+1)}{x-7} & \text{Cancel like factors in numerator and denominator.} \\[4pt]
f(x)=x+1,\ x\ne7 & \text{Simplify.}
\end{array}
$$

Notice that $x$ cannot be $7,$ or we would be dividing by $0,$ so $7$ is not in the domain of the original function. In order to avoid changing the function when we simplify, we set the same condition, $x\ne7,$ for the simplified function. We can represent the function graphically as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line of slope 1 through (0, 1), drawn with an open circle at (7, 8) where the function is undefined.","xMin":-2,"xMax":10,"yMin":-2,"yMax":10,"unit":24,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":1,"intercept":1,"label":"f(x) = (x\u00b2\u22126x\u22127)/(x\u22127)"}],"points":[{"at":[7,8],"open":true}]}
{{< /apfigure >}}

What happens at $x=7$ is completely different from what happens at points close to $x=7$ on either side. The notation

$$\lim\limits_{x\to7}f(x)=8$$

indicates that as the input $x$ approaches $7$ from either the left or the right, the output approaches $8.$ The output can get as close to $8$ as we like if the input is sufficiently near $7.$

What happens at $x=7?$ When $x=7,$ there is no corresponding output. We write this as

$$f(7)\text{ does not exist.}$$

This notation indicates that $7$ is not in the domain of the function. We had already indicated this when we wrote the function as

$$f(x)=x+1,\ x\ne7.$$

Notice that the limit of a function can exist even when $f(x)$ is not defined at $x=a.$ Much of our subsequent work will be determining limits of functions as $x$ nears $a,$ even though the output at $x=a$ does not exist.

{{< callout type="info" >}}
  **The Limit of a Function.** A quantity $L$ is the **limit** of a function $f(x)$ as $x$ approaches $a$ if, as the input values of $x$ approach $a$ (but do not equal $a$), the corresponding output values of $f(x)$ get closer to $L.$ Note that the value of the limit is not affected by the output value of $f(x)$ at $a.$ Both $a$ and $L$ must be real numbers. We write it as

  $$\lim\limits_{x\to a}f(x)=L$$
{{< /callout >}}

**Example.** For the following limit, define $a,$ $f(x),$ and $L.$

$$\lim\limits_{x\to2}(3x+5)=11$$

**Solution.** First, we recognize the notation of a limit. If the limit exists, as $x$ approaches $a,$ we write

$$\lim\limits_{x\to a}f(x)=L.$$

We are given

$$\lim\limits_{x\to2}(3x+5)=11.$$

This means that $a=2,$ $f(x)=3x+5,$ and $L=11.$

**Analysis.** Recall that $y=3x+5$ is a line with no breaks. As the input values approach $2,$ the output values will get close to $11.$ This may be phrased with the equation $\lim_{x\to2}(3x+5)=11,$ which means that as $x$ nears $2$ (but is not exactly $2$), the output of the function $f(x)=3x+5$ gets as close as we want to $3(2)+5,$ or $11,$ which is the limit $L,$ as we take values of $x$ sufficiently near $2$ but not at $x=2.$

{{< fillin
  question="For the limit $\lim_{x\to5}(2x^2-4)=46$, what is $a$?"
  answer="5"
  answerForm="decimal"
  answerDisplay="$5$"
  hint="$a$ is the value printed under the limit symbol — the value $x$ approaches."
>}}

{{< fillin
  question="For the limit $\lim_{x\to5}(2x^2-4)=46$, what is $f(x)$?"
  answer="2x^2-4"
  answerDisplay="$2x^2-4$"
  hint="$f(x)$ is the expression inside the parentheses whose limit is being taken."
>}}

{{< fillin
  question="For the limit $\lim_{x\to5}(2x^2-4)=46$, what is $L$?"
  answer="46"
  answerForm="decimal"
  answerDisplay="$46$"
  hint="$L$ is the value the limit equals, printed on the right of the equation."
>}}

### Understanding Left-Hand Limits and Right-Hand Limits

We can approach the input of a function from either side of a value—from the left or the right. The table below shows the values of

$$f(x)=x+1,\ x\ne7$$

as described earlier.

| $x$ | $6.9$ | $6.99$ | $6.999$ | $7$ | $7.001$ | $7.01$ | $7.1$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $f(x)$ | $7.9$ | $7.99$ | $7.999$ | undefined | $8.001$ | $8.01$ | $8.1$ |

Values described as "from the left" are less than the input value $7$ and would therefore appear to the left of the value on a number line. The input values that approach $7$ from the left in the table are $6.9,$ $6.99,$ and $6.999.$ The corresponding outputs are $7.9,$ $7.99,$ and $7.999.$ These values are getting closer to $8.$ The limit of values of $f(x)$ as $x$ approaches from the left is known as the left-hand limit. For this function, $8$ is the left-hand limit of the function $f(x)=x+1,\ x\ne7$ as $x$ approaches $7.$

Values described as "from the right" are greater than the input value $7$ and would therefore appear to the right of the value on a number line. The input values that approach $7$ from the right in the table are $7.1,$ $7.01,$ and $7.001.$ The corresponding outputs are $8.1,$ $8.01,$ and $8.001.$ These values are getting closer to $8.$ The limit of values of $f(x)$ as $x$ approaches from the right is known as the right-hand limit. For this function, $8$ is also the right-hand limit of the function $f(x)=x+1,\ x\ne7$ as $x$ approaches $7.$

The table shows that we can get the output of the function within a distance of $0.1$ from $8$ by using an input within a distance of $0.1$ from $7.$ In other words, we need an input $x$ within the interval $6.9<x<7.1$ to produce an output value of $f(x)$ within the interval $7.9<f(x)<8.1.$

We also see that we can get output values of $f(x)$ successively closer to $8$ by selecting input values closer to $7.$ In fact, we can obtain output values within any specified interval if we choose appropriate input values.

The graph below provides a visual representation of the left- and right-hand limits of the function. From the graph of $f(x),$ we observe the output can get infinitesimally close to $L=8$ as $x$ approaches $7$ from the left and as $x$ approaches $7$ from the right.

To indicate the left-hand limit, we write

$$\lim\limits_{x\to7^-}f(x)=8.$$

To indicate the right-hand limit, we write

$$\lim\limits_{x\to7^+}f(x)=8.$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line y = x+1 with an open circle at (7, 8). A dashed horizontal line at y = 8 runs from the y-axis to the open circle, illustrating that the output approaches 8 as the input approaches 7 from either side.","xMin":-2,"xMax":9,"yMin":-2,"yMax":10,"unit":26,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":1,"intercept":1},{"y":8,"dashed":true,"label":"y = 8"}],"points":[{"at":[7,8],"open":true,"label":"(7, 8)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Left- and Right-Hand Limits.** The **left-hand limit** of a function $f(x)$ as $x$ approaches $a$ from the left is equal to $L,$ denoted by

  $$\lim\limits_{x\to a^-}f(x)=L.$$

  The values of $f(x)$ can get as close to the limit $L$ as we like by taking values of $x$ sufficiently close to $a$ such that $x<a$ and $x\ne a.$

  The **right-hand limit** of a function $f(x),$ as $x$ approaches $a$ from the right, is equal to $L,$ denoted by

  $$\lim\limits_{x\to a^+}f(x)=L.$$

  The values of $f(x)$ can get as close to the limit $L$ as we like by taking values of $x$ sufficiently close to $a$ but greater than $a.$ Both $a$ and $L$ are real numbers.
{{< /callout >}}

### Understanding Two-Sided Limits

In the previous example, the left-hand limit and right-hand limit as $x$ approaches $a$ are equal. If the left- and right-hand limits are equal, we say that the function $f(x)$ has a **two-sided limit** as $x$ approaches $a.$ More commonly, we simply refer to a two-sided limit as a limit. If the left-hand limit does not equal the right-hand limit, or if one of them does not exist, we say the limit does not exist.

{{< callout type="info" >}}
  **The Two-Sided Limit of a Function as $x$ Approaches $a$.** The limit of a function $f(x),$ as $x$ approaches $a,$ is equal to $L,$ that is,

  $$\lim\limits_{x\to a}f(x)=L$$

  if and only if

  $$\lim\limits_{x\to a^-}f(x)=\lim\limits_{x\to a^+}f(x).$$

  In other words, the left-hand limit of a function $f(x)$ as $x$ approaches $a$ is equal to the right-hand limit of the same function as $x$ approaches $a.$ If such a limit exists, we refer to the limit as a two-sided limit. Otherwise we say the limit does not exist.
{{< /callout >}}

### Finding a Limit Using a Graph

To visually determine if a limit exists as $x$ approaches $a,$ we observe the graph of the function when $x$ is very near to $x=a.$ In the graph below we observe the behavior of the graph on both sides of $a.$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve rising from the lower left to a peak and falling to the lower right, with an open circle at the peak marking the point where the input is a and the output approaches L. Arrows show the curve continuing beyond both ends.","xMin":-3,"xMax":5,"yMin":-2,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.4,"b":0.8,"c":2.6,"arrows":true}],"lines":[{"y":3,"dashed":true,"label":"y = L"}],"points":[{"at":[1,3],"open":true,"label":"(a, L)"}],"texts":[{"at":[3.7,0.5],"text":"f"}]}
{{< /apfigure >}}

To determine if a left-hand limit exists, we observe the branch of the graph to the left of $x=a,$ but near $x=a.$ This is where $x<a.$ We see that the outputs are getting close to some real number $L$ so there is a left-hand limit.

To determine if a right-hand limit exists, observe the branch of the graph to the right of $x=a,$ but near $x=a.$ This is where $x>a.$ We see that the outputs are getting close to some real number $L,$ so there is a right-hand limit.

If the left-hand limit and the right-hand limit are the same, as they are above, then we know that the function has a two-sided limit. Normally, when we refer to a "limit," we mean a two-sided limit, unless we call it a one-sided limit.

Finally, we can look for an output value for the function $f(x)$ when the input value $x$ is equal to $a.$ The coordinate pair of the point would be $(a,f(a)).$ If such a point exists, then $f(a)$ has a value. If the point does not exist, as above, then we say that $f(a)$ does not exist.

{{< callout type="info" >}}
  **How To: Given a function $f(x),$ use a graph to find the limits and a function value as $x$ approaches $a.$**

  1. Examine the graph to determine whether a left-hand limit exists.
  2. Examine the graph to determine whether a right-hand limit exists.
  3. If the two one-sided limits exist and are equal, then there is a two-sided limit—what we normally call a "limit."
  4. If there is a point at $x=a,$ then $f(a)$ is the corresponding function value.
{{< /callout >}}

**Example.** Determine the following limits and function value for the function $f$ shown in the first graph below: $\lim_{x\to2^-}f(x),$ $\lim_{x\to2^+}f(x),$ $\lim_{x\to2}f(x),$ and $f(2).$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward through the origin, drawn for x less than 2 and ending in an open circle at (2, 8); a line falling to the right starts at a filled point (2, 3) and continues to the right edge.","xMin":-4,"xMax":6,"yMin":-2,"yMax":10,"unit":28,"quadratics":[{"a":2,"from":-4,"to":2,"arrows":"start"}],"segments":[{"from":[2,3],"to":[6,-1],"arrows":"end"}],"points":[{"at":[2,8],"open":true},{"at":[2,3]}]}
{{< /apfigure >}}

Then determine the same four quantities for the function $f$ shown in the second graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward through the origin, drawn for x less than 2 and ending in an open circle at (2, 8); a line falling gently to the right also approaches that same open circle from beyond x = 2 and continues to the right edge; a separate filled point sits at (2, 4).","xMin":-4,"xMax":6,"yMin":-2,"yMax":10,"unit":28,"quadratics":[{"a":2,"from":-4,"to":2,"arrows":"start"}],"segments":[{"from":[2,8],"to":[6,4],"arrows":"end"}],"points":[{"at":[2,8],"open":true},{"at":[2,4]}]}
{{< /apfigure >}}

**Solution.** Looking at the first graph:

- $\lim_{x\to2^-}f(x)=8;$ when $x<2,$ but infinitesimally close to $2,$ the output values get close to $y=8.$
- $\lim_{x\to2^+}f(x)=3;$ when $x>2,$ but infinitesimally close to $2,$ the output values approach $y=3.$
- $\lim_{x\to2}f(x)$ does not exist because $\lim_{x\to2^-}f(x)\ne\lim_{x\to2^+}f(x);$ the left- and right-hand limits are not equal.
- $f(2)=3$ because the graph of the function $f$ passes through the point $(2,f(2))$ or $(2,3).$

Looking at the second graph:

- $\lim_{x\to2^-}f(x)=8;$ when $x<2$ but infinitesimally close to $2,$ the output values approach $y=8.$
- $\lim_{x\to2^+}f(x)=8;$ when $x>2$ but infinitesimally close to $2,$ the output values approach $y=8.$
- $\lim_{x\to2}f(x)=8$ because $\lim_{x\to2^-}f(x)=\lim_{x\to2^+}f(x)=8;$ the left- and right-hand limits are equal.
- $f(2)=4$ because the graph of the function $f$ passes through the point $(2,f(2))$ or $(2,4).$

Using the graph of $y=f(x)$ shown below, estimate the following limits: $\lim_{x\to0^-}f(x),$ $\lim_{x\to0^+}f(x),$ $\lim_{x\to0}f(x),$ $\lim_{x\to2^-}f(x),$ $\lim_{x\to2^+}f(x),$ $\lim_{x\to2}f(x),$ $\lim_{x\to4^-}f(x),$ $\lim_{x\to4^+}f(x),$ and $\lim_{x\to4}f(x).$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise graph: a branch for x less than 0 dips to a low point and rises to an open circle at (0, 0); a curve from a filled point at (0, 2) falls to a filled point at (2, \u22122); a third branch is a straight line starting at an open circle at (2, 0), rising through an open circle at (4, 4), and continuing upward with an arrow.","xMin":-6,"xMax":6,"yMin":-3,"yMax":5,"unit":32,"tickLabels":true,"quadratics":[{"a":0.42,"b":1.092,"c":0.01,"from":-4,"to":0,"arrows":"start"},{"a":-1,"c":2,"from":0,"to":2,"arrows":false}],"segments":[{"from":[2,0],"to":[4.5,5],"arrows":"end"}],"points":[{"at":[0,0],"open":true},{"at":[0,2]},{"at":[2,-2]},{"at":[2,0],"open":true},{"at":[4,4],"open":true}]}
{{< /apfigure >}}

{{< fillin
  question="Using the graph above, estimate $\lim_{x\to0^-}f(x)$."
  answer="0"
  answerForm="decimal"
  answerDisplay="$0$"
  hint="Follow the left branch of the graph as $x$ approaches $0$ from values less than $0$."
>}}

{{< multiplechoice
  question="Using the same graph, determine $\lim_{x\to2}f(x)$."
  mode="text"
  answer="The limit does not exist."
  hint="Compare the left- and right-hand limits as $x$ approaches $2$; if they differ, the two-sided limit does not exist."
>}}
The limit does not exist.
$-2$
$0$
{{< /multiplechoice >}}

{{< fillin
  question="Using the same graph, determine $\lim_{x\to4}f(x)$."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4$"
  hint="The two branches meet at the same height as $x$ approaches $4$ from both sides."
>}}

### Finding a Limit Using a Table

Creating a table is a way to determine limits using numeric information. We create a table of values in which the input values of $x$ approach $a$ from both sides. Then we determine if the output values get closer and closer to some real value, the **limit** $L.$

Let's consider an example using the following function:

$$\lim\limits_{x\to5}\left(\tfrac{x^3-125}{x-5}\right)$$

To create the table, we evaluate the function at values close to $x=5.$ We use some input values less than $5$ and some values greater than $5,$ as in the table below. The table values show that when $x<5$ but nearing $5,$ the corresponding output gets close to $75.$ When $x>5$ but nearing $5,$ the corresponding output also gets close to $75.$

| $x$ | $4.9$ | $4.99$ | $4.999$ | $5$ | $5.001$ | $5.01$ | $5.1$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $f(x)$ | $73.51$ | $74.8501$ | $74.985001$ | undefined | $75.015001$ | $75.1501$ | $76.51$ |

Because

$$\lim\limits_{x\to5^-}f(x)=75=\lim\limits_{x\to5^+}f(x),$$

then

$$\lim\limits_{x\to5}f(x)=75.$$

Remember that $f(5)$ does not exist.

{{< callout type="info" >}}
  **How To: Given a function $f,$ use a table to find the limit as $x$ approaches $a$ and the value of $f(a),$ if it exists.**

  1. Choose several input values that approach $a$ from both the left and right. Record them in a table.
  2. Evaluate the function at each input value. Record them in the table.
  3. Determine if the table values indicate a left-hand limit and a right-hand limit.
  4. If the left-hand and right-hand limits exist and are equal, there is a two-sided limit.
  5. Replace $x$ with $a$ to find the value of $f(a).$
{{< /callout >}}

**Example.** Numerically estimate the limit of the following expression by setting up a table of values on both sides of the limit.

$$\lim\limits_{x\to0}\left(\tfrac{5\sin(x)}{3x}\right)$$

**Solution.** We can estimate the value of a limit, if it exists, by evaluating the function at values near $x=0.$ We cannot find a function value for $x=0$ directly because the result would have a denominator equal to $0,$ and thus would be undefined.

$$f(x)=\tfrac{5\sin(x)}{3x}$$

We create the table below by choosing several input values close to $x=0,$ with half of them less than $x=0$ and half of them greater than $x=0.$ Note that we need to be sure we are using radian mode. We evaluate the function at each input value to complete the table.

The table values indicate that when $x<0$ but approaching $0,$ the corresponding output nears $\tfrac{5}{3}.$

When $x>0$ but approaching $0,$ the corresponding output also nears $\tfrac{5}{3}.$

| $x$ | $-0.1$ | $-0.01$ | $-0.001$ | $0$ | $0.001$ | $0.01$ | $0.1$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $f(x)$ | $1.66389$ | $1.666639$ | $1.666666$ | undefined | $1.666666$ | $1.666639$ | $1.66389$ |

Because

$$\lim\limits_{x\to0^-}f(x)=\tfrac{5}{3}=\lim\limits_{x\to0^+}f(x),$$

then

$$\lim\limits_{x\to0}f(x)=\tfrac{5}{3}.$$

{{< fillin
  question="Numerically estimate the limit $\lim_{x\to0}\left(\tfrac{20\sin(x)}{4x}\right)$ by making a table of values."
  answer="5"
  answerForm="decimal"
  answerDisplay="$5$"
  hint="Simplify $\tfrac{20}{4}=5$ and recall that $\tfrac{\sin x}{x}$ approaches $1$ as $x$ approaches $0$."
>}}

{{< callout type="info" >}}
  **Q&A.** *Is it possible to check our answer using a graphing utility?*

  Yes. We previously used a table to find a limit of $75$ for the function $f(x)=\tfrac{x^3-125}{x-5}$ as $x$ approaches $5.$ To check, we graph the function on a viewing window as shown below. A graphical check shows both branches of the graph of the function get close to the output $75$ as $x$ nears $5.$ Furthermore, we can use the "trace" feature of a graphing calculator. By approaching $x=5$ we may numerically observe the corresponding outputs getting close to $75.$
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-curving graph with an open circle at (5, 75). A dashed horizontal line at y = 75 runs from the y-axis to the open circle, illustrating that the output approaches 75 as the input approaches 5 from either side.","xMin":-3,"xMax":7,"yMin":-10,"yMax":105,"unit":26,"yUnit":2.35,"tickLabels":true,"xTickStep":2,"yTickStep":25,"quadratics":[{"a":1,"b":5,"c":25,"from":-3,"to":7,"arrows":true}],"lines":[{"y":75,"dashed":true,"label":"y = 75"}],"points":[{"at":[5,75],"open":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Is one method for determining a limit better than the other?*

  No. Both methods have advantages. Graphing allows for quick inspection. Tables can be used when graphical utilities aren't available, and they can be calculated to a higher precision than could be seen with an unaided eye inspecting a graph.
{{< /callout >}}

**Example.** With the use of a graphing utility, if possible, determine the left- and right-hand limits of the following function as $x$ approaches $0.$ If the function has a limit as $x$ approaches $0,$ state it. If not, discuss why there is no limit.

$$f(x)=3\sin\left(\tfrac{\pi}{x}\right)$$

**Solution.** We can use a graphing utility to investigate the behavior of the graph close to $x=0.$ Centering around $x=0,$ we choose two viewing windows such that the second one is zoomed in closer to $x=0$ than the first one. The result would resemble the graph below for $[-2,2]$ by $[-3,3].$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of 3 sine of pi over x on the window from \u22122 to 2 by \u22123 to 3: the curve oscillates between \u22123 and 3, packed into a dense band near x = 0 and spreading into individually visible waves farther out.","xMin":-2,"xMax":2,"yMin":-3,"yMax":3,"unit":55,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polylines":[{"through":[[-2,-3],[-1.996,-3],[-1.992,-3],[-1.988,-3],[-1.984,-3],[-1.98,-3],[-1.976,-2.999],[-1.972,-2.999],[-1.968,-2.999],[-1.964,-2.999],[-1.96,-2.998],[-1.956,-2.998],[-1.952,-2.998],[-1.948,-2.997],[-1.944,-2.997],[-1.94,-2.996],[-1.936,-2.996],[-1.932,-2.995],[-1.928,-2.995],[-1.924,-2.994],[-1.92,-2.994],[-1.916,-2.993],[-1.912,-2.992],[-1.908,-2.991],[-1.904,-2.991],[-1.9,-2.99],[-1.896,-2.989],[-1.892,-2.988],[-1.888,-2.987],[-1.884,-2.986],[-1.88,-2.985],[-1.876,-2.984],[-1.872,-2.983],[-1.868,-2.982],[-1.864,-2.98],[-1.86,-2.979],[-1.856,-2.978],[-1.852,-2.976],[-1.848,-2.975],[-1.844,-2.974],[-1.84,-2.972],[-1.836,-2.971],[-1.832,-2.969],[-1.828,-2.967],[-1.824,-2.966],[-1.82,-2.964],[-1.816,-2.962],[-1.812,-2.96],[-1.808,-2.958],[-1.804,-2.956],[-1.8,-2.954],[-1.796,-2.952],[-1.792,-2.95],[-1.788,-2.948],[-1.784,-2.946],[-1.78,-2.944],[-1.776,-2.941],[-1.772,-2.939],[-1.768,-2.936],[-1.764,-2.934],[-1.76,-2.931],[-1.756,-2.929],[-1.752,-2.926],[-1.748,-2.923],[-1.744,-2.921],[-1.74,-2.918],[-1.736,-2.915],[-1.732,-2.912],[-1.728,-2.909],[-1.724,-2.906],[-1.72,-2.902],[-1.716,-2.899],[-1.712,-2.896],[-1.708,-2.892],[-1.704,-2.889],[-1.7,-2.885],[-1.696,-2.882],[-1.692,-2.878],[-1.688,-2.874],[-1.684,-2.871],[-1.68,-2.867],[-1.676,-2.863],[-1.672,-2.859],[-1.668,-2.855],[-1.664,-2.85],[-1.66,-2.846],[-1.656,-2.842],[-1.652,-2.837],[-1.648,-2.833],[-1.644,-2.828],[-1.64,-2.823],[-1.636,-2.819],[-1.632,-2.814],[-1.628,-2.809],[-1.624,-2.804],[-1.62,-2.799],[-1.616,-2.793],[-1.612,-2.788],[-1.608,-2.783],[-1.604,-2.777],[-1.6,-2.772],[-1.596,-2.766],[-1.592,-2.76],[-1.588,-2.754],[-1.584,-2.748],[-1.58,-2.742],[-1.576,-2.736],[-1.572,-2.73],[-1.568,-2.723],[-1.564,-2.717],[-1.56,-2.71],[-1.556,-2.704],[-1.552,-2.697],[-1.548,-2.69],[-1.544,-2.683],[-1.54,-2.676],[-1.536,-2.669],[-1.532,-2.661],[-1.528,-2.654],[-1.524,-2.646],[-1.52,-2.638],[-1.516,-2.631],[-1.512,-2.623],[-1.508,-2.615],[-1.504,-2.606],[-1.5,-2.598],[-1.496,-2.59],[-1.492,-2.581],[-1.488,-2.572],[-1.484,-2.564],[-1.48,-2.555],[-1.476,-2.545],[-1.472,-2.536],[-1.468,-2.527],[-1.464,-2.517],[-1.46,-2.508],[-1.456,-2.498],[-1.452,-2.488],[-1.448,-2.478],[-1.444,-2.468],[-1.44,-2.457],[-1.436,-2.447],[-1.432,-2.436],[-1.428,-2.425],[-1.424,-2.415],[-1.42,-2.403],[-1.416,-2.392],[-1.412,-2.381],[-1.408,-2.369],[-1.404,-2.357],[-1.4,-2.345],[-1.396,-2.333],[-1.392,-2.321],[-1.388,-2.309],[-1.384,-2.296],[-1.38,-2.283],[-1.376,-2.271],[-1.372,-2.257],[-1.368,-2.244],[-1.364,-2.231],[-1.36,-2.217],[-1.356,-2.203],[-1.352,-2.189],[-1.348,-2.175],[-1.344,-2.161],[-1.34,-2.146],[-1.336,-2.131],[-1.332,-2.116],[-1.328,-2.101],[-1.324,-2.086],[-1.32,-2.07],[-1.316,-2.054],[-1.312,-2.039],[-1.308,-2.022],[-1.304,-2.006],[-1.3,-1.989],[-1.296,-1.973],[-1.292,-1.956],[-1.288,-1.938],[-1.284,-1.921],[-1.28,-1.903],[-1.276,-1.885],[-1.272,-1.867],[-1.268,-1.849],[-1.264,-1.83],[-1.26,-1.811],[-1.256,-1.792],[-1.252,-1.773],[-1.248,-1.754],[-1.244,-1.734],[-1.24,-1.714],[-1.236,-1.694],[-1.232,-1.673],[-1.228,-1.652],[-1.224,-1.631],[-1.22,-1.61],[-1.216,-1.589],[-1.212,-1.567],[-1.208,-1.545],[-1.204,-1.523],[-1.2,-1.5],[-1.196,-1.477],[-1.192,-1.454],[-1.188,-1.431],[-1.184,-1.407],[-1.18,-1.383],[-1.176,-1.359],[-1.172,-1.335],[-1.168,-1.31],[-1.164,-1.285],[-1.16,-1.26],[-1.156,-1.234],[-1.152,-1.208],[-1.148,-1.182],[-1.144,-1.156],[-1.14,-1.129],[-1.136,-1.102],[-1.132,-1.075],[-1.128,-1.047],[-1.124,-1.019],[-1.12,-0.991],[-1.116,-0.962],[-1.112,-0.933],[-1.108,-0.904],[-1.104,-0.875],[-1.1,-0.845],[-1.096,-0.815],[-1.092,-0.785],[-1.088,-0.754],[-1.084,-0.723],[-1.08,-0.692],[-1.076,-0.66],[-1.072,-0.628],[-1.068,-0.596],[-1.064,-0.564],[-1.06,-0.531],[-1.056,-0.497],[-1.052,-0.464],[-1.048,-0.43],[-1.044,-0.396],[-1.04,-0.362],[-1.036,-0.327],[-1.032,-0.292],[-1.028,-0.256],[-1.024,-0.221],[-1.02,-0.185],[-1.016,-0.148],[-1.012,-0.112],[-1.008,-0.075],[-1.004,-0.038],[-1,0],[-0.996,0.038],[-0.992,0.076],[-0.988,0.114],[-0.984,0.153],[-0.98,0.192],[-0.976,0.232],[-0.972,0.271],[-0.968,0.311],[-0.964,0.351],[-0.96,0.392],[-0.956,0.432],[-0.952,0.473],[-0.948,0.514],[-0.944,0.556],[-0.94,0.598],[-0.936,0.639],[-0.932,0.682],[-0.928,0.724],[-0.924,0.767],[-0.92,0.809],[-0.916,0.852],[-0.912,0.896],[-0.908,0.939],[-0.904,0.982],[-0.9,1.026],[-0.896,1.07],[-0.892,1.114],[-0.888,1.158],[-0.884,1.202],[-0.88,1.246],[-0.876,1.291],[-0.872,1.335],[-0.868,1.379],[-0.864,1.424],[-0.86,1.468],[-0.856,1.513],[-0.852,1.557],[-0.848,1.601],[-0.844,1.646],[-0.84,1.69],[-0.836,1.734],[-0.832,1.778],[-0.828,1.822],[-0.824,1.865],[-0.82,1.909],[-0.816,1.952],[-0.812,1.995],[-0.808,2.037],[-0.804,2.079],[-0.8,2.121],[-0.796,2.163],[-0.792,2.204],[-0.788,2.244],[-0.784,2.284],[-0.78,2.324],[-0.776,2.363],[-0.772,2.401],[-0.768,2.439],[-0.764,2.475],[-0.76,2.511],[-0.756,2.547],[-0.752,2.581],[-0.748,2.615],[-0.744,2.647],[-0.74,2.679],[-0.736,2.709],[-0.732,2.739],[-0.728,2.767],[-0.724,2.794],[-0.72,2.819],[-0.716,2.843],[-0.712,2.866],[-0.708,2.887],[-0.704,2.907],[-0.7,2.925],[-0.696,2.941],[-0.692,2.955],[-0.688,2.968],[-0.684,2.979],[-0.68,2.987],[-0.676,2.994],[-0.672,2.998],[-0.668,3],[-0.664,2.999],[-0.66,2.997],[-0.656,2.991],[-0.652,2.983],[-0.648,2.972],[-0.644,2.959],[-0.64,2.942],[-0.636,2.923],[-0.632,2.9],[-0.628,2.875],[-0.624,2.846],[-0.62,2.813],[-0.616,2.777],[-0.612,2.738],[-0.608,2.695],[-0.604,2.649],[-0.6,2.598],[-0.596,2.544],[-0.592,2.486],[-0.588,2.423],[-0.584,2.357],[-0.58,2.286],[-0.576,2.212],[-0.572,2.133],[-0.568,2.05],[-0.564,1.962],[-0.56,1.87],[-0.556,1.774],[-0.552,1.674],[-0.548,1.569],[-0.544,1.46],[-0.54,1.346],[-0.536,1.229],[-0.532,1.107],[-0.528,0.981],[-0.524,0.851],[-0.52,0.718],[-0.516,0.581],[-0.512,0.44],[-0.508,0.296],[-0.504,0.15],[-0.5,0],[-0.496,-0.152],[-0.492,-0.306],[-0.488,-0.462],[-0.484,-0.619],[-0.48,-0.776],[-0.476,-0.935],[-0.472,-1.092],[-0.468,-1.25],[-0.464,-1.405],[-0.46,-1.559],[-0.456,-1.709],[-0.452,-1.856],[-0.448,-1.999],[-0.444,-2.136],[-0.44,-2.267],[-0.436,-2.391],[-0.432,-2.506],[-0.428,-2.613],[-0.424,-2.708],[-0.42,-2.793],[-0.416,-2.864],[-0.412,-2.922],[-0.408,-2.964],[-0.404,-2.991],[-0.4,-3],[-0.396,-2.991],[-0.392,-2.962],[-0.388,-2.912],[-0.384,-2.841],[-0.38,-2.747],[-0.376,-2.631],[-0.372,-2.491],[-0.368,-2.327],[-0.364,-2.14],[-0.36,-1.928],[-0.356,-1.694],[-0.352,-1.438],[-0.348,-1.161],[-0.344,-0.864],[-0.34,-0.551],[-0.336,-0.224],[-0.332,0.114],[-0.328,0.458],[-0.324,0.805],[-0.32,1.148],[-0.316,1.483],[-0.312,1.802],[-0.308,2.1],[-0.304,2.367],[-0.3,2.598],[-0.296,2.784],[-0.292,2.916],[-0.288,2.989],[-0.284,2.993],[-0.28,2.925],[-0.276,2.778],[-0.272,2.551],[-0.268,2.242],[-0.264,1.854],[-0.26,1.394],[-0.256,0.871],[-0.252,0.299],[-0.248,-0.304],[-0.244,-0.912],[-0.24,-1.5],[-0.236,-2.035],[-0.232,-2.483],[-0.228,-2.81],[-0.224,-2.981],[-0.22,-2.969],[-0.216,-2.755],[-0.212,-2.33],[-0.208,-1.704],[-0.204,-0.909],[-0.2,0],[-0.196,0.945],[-0.192,1.826],[-0.188,2.529],[-0.184,2.937],[-0.18,2.954],[-0.176,2.524],[-0.172,1.655],[-0.168,0.447],[-0.164,-0.905],[-0.16,-2.121],[-0.156,-2.882],[-0.152,-2.908],[-0.148,-2.076],[-0.144,-0.521],[-0.14,1.302],[-0.136,2.685],[-0.132,2.915],[-0.128,1.667],[-0.124,-0.604],[-0.12,-2.598],[-0.116,-2.787],[-0.112,-0.668],[-0.108,2.182],[-0.104,2.805],[-0.1,0],[-0.096,-2.898],[-0.092,-1.195],[-0.088,2.729],[-0.084,0.884],[-0.08,-3],[-0.076,1.428],[-0.072,1.026],[-0.068,-2.394],[-0.064,2.772],[-0.06,-2.598],[-0.056,1.302],[-0.052,1.989],[-0.048,-1.5],[-0.044,-2.267],[-0.04,0],[-0.036,1.928],[-0.032,2.121],[-0.028,2.345],[-0.024,2.598],[-0.02,0]]},{"through":[[0.02,0],[0.024,-2.598],[0.028,-2.345],[0.032,-2.121],[0.036,-1.928],[0.04,0],[0.044,2.267],[0.048,1.5],[0.052,-1.989],[0.056,-1.302],[0.06,2.598],[0.064,-2.772],[0.068,2.394],[0.072,-1.026],[0.076,-1.428],[0.08,3],[0.084,-0.884],[0.088,-2.729],[0.092,1.195],[0.096,2.898],[0.1,0],[0.104,-2.805],[0.108,-2.182],[0.112,0.668],[0.116,2.787],[0.12,2.598],[0.124,0.604],[0.128,-1.667],[0.132,-2.915],[0.136,-2.685],[0.14,-1.302],[0.144,0.521],[0.148,2.076],[0.152,2.908],[0.156,2.882],[0.16,2.121],[0.164,0.905],[0.168,-0.447],[0.172,-1.655],[0.176,-2.524],[0.18,-2.954],[0.184,-2.937],[0.188,-2.529],[0.192,-1.826],[0.196,-0.945],[0.2,0],[0.204,0.909],[0.208,1.704],[0.212,2.33],[0.216,2.755],[0.22,2.969],[0.224,2.981],[0.228,2.81],[0.232,2.483],[0.236,2.035],[0.24,1.5],[0.244,0.912],[0.248,0.304],[0.252,-0.299],[0.256,-0.871],[0.26,-1.394],[0.264,-1.854],[0.268,-2.242],[0.272,-2.551],[0.276,-2.778],[0.28,-2.925],[0.284,-2.993],[0.288,-2.989],[0.292,-2.916],[0.296,-2.784],[0.3,-2.598],[0.304,-2.367],[0.308,-2.1],[0.312,-1.802],[0.316,-1.483],[0.32,-1.148],[0.324,-0.805],[0.328,-0.458],[0.332,-0.114],[0.336,0.224],[0.34,0.551],[0.344,0.864],[0.348,1.161],[0.352,1.438],[0.356,1.694],[0.36,1.928],[0.364,2.14],[0.368,2.327],[0.372,2.491],[0.376,2.631],[0.38,2.747],[0.384,2.841],[0.388,2.912],[0.392,2.962],[0.396,2.991],[0.4,3],[0.404,2.991],[0.408,2.964],[0.412,2.922],[0.416,2.864],[0.42,2.793],[0.424,2.708],[0.428,2.613],[0.432,2.506],[0.436,2.391],[0.44,2.267],[0.444,2.136],[0.448,1.999],[0.452,1.856],[0.456,1.709],[0.46,1.559],[0.464,1.405],[0.468,1.25],[0.472,1.092],[0.476,0.935],[0.48,0.776],[0.484,0.619],[0.488,0.462],[0.492,0.306],[0.496,0.152],[0.5,0],[0.504,-0.15],[0.508,-0.296],[0.512,-0.44],[0.516,-0.581],[0.52,-0.718],[0.524,-0.851],[0.528,-0.981],[0.532,-1.107],[0.536,-1.229],[0.54,-1.346],[0.544,-1.46],[0.548,-1.569],[0.552,-1.674],[0.556,-1.774],[0.56,-1.87],[0.564,-1.962],[0.568,-2.05],[0.572,-2.133],[0.576,-2.212],[0.58,-2.286],[0.584,-2.357],[0.588,-2.423],[0.592,-2.486],[0.596,-2.544],[0.6,-2.598],[0.604,-2.649],[0.608,-2.695],[0.612,-2.738],[0.616,-2.777],[0.62,-2.813],[0.624,-2.846],[0.628,-2.875],[0.632,-2.9],[0.636,-2.923],[0.64,-2.942],[0.644,-2.959],[0.648,-2.972],[0.652,-2.983],[0.656,-2.991],[0.66,-2.997],[0.664,-2.999],[0.668,-3],[0.672,-2.998],[0.676,-2.994],[0.68,-2.987],[0.684,-2.979],[0.688,-2.968],[0.692,-2.955],[0.696,-2.941],[0.7,-2.925],[0.704,-2.907],[0.708,-2.887],[0.712,-2.866],[0.716,-2.843],[0.72,-2.819],[0.724,-2.794],[0.728,-2.767],[0.732,-2.739],[0.736,-2.709],[0.74,-2.679],[0.744,-2.647],[0.748,-2.615],[0.752,-2.581],[0.756,-2.547],[0.76,-2.511],[0.764,-2.475],[0.768,-2.439],[0.772,-2.401],[0.776,-2.363],[0.78,-2.324],[0.784,-2.284],[0.788,-2.244],[0.792,-2.204],[0.796,-2.163],[0.8,-2.121],[0.804,-2.079],[0.808,-2.037],[0.812,-1.995],[0.816,-1.952],[0.82,-1.909],[0.824,-1.865],[0.828,-1.822],[0.832,-1.778],[0.836,-1.734],[0.84,-1.69],[0.844,-1.646],[0.848,-1.601],[0.852,-1.557],[0.856,-1.513],[0.86,-1.468],[0.864,-1.424],[0.868,-1.379],[0.872,-1.335],[0.876,-1.291],[0.88,-1.246],[0.884,-1.202],[0.888,-1.158],[0.892,-1.114],[0.896,-1.07],[0.9,-1.026],[0.904,-0.982],[0.908,-0.939],[0.912,-0.896],[0.916,-0.852],[0.92,-0.809],[0.924,-0.767],[0.928,-0.724],[0.932,-0.682],[0.936,-0.639],[0.94,-0.598],[0.944,-0.556],[0.948,-0.514],[0.952,-0.473],[0.956,-0.432],[0.96,-0.392],[0.964,-0.351],[0.968,-0.311],[0.972,-0.271],[0.976,-0.232],[0.98,-0.192],[0.984,-0.153],[0.988,-0.114],[0.992,-0.076],[0.996,-0.038],[1,0],[1.004,0.038],[1.008,0.075],[1.012,0.112],[1.016,0.148],[1.02,0.185],[1.024,0.221],[1.028,0.256],[1.032,0.292],[1.036,0.327],[1.04,0.362],[1.044,0.396],[1.048,0.43],[1.052,0.464],[1.056,0.497],[1.06,0.531],[1.064,0.564],[1.068,0.596],[1.072,0.628],[1.076,0.66],[1.08,0.692],[1.084,0.723],[1.088,0.754],[1.092,0.785],[1.096,0.815],[1.1,0.845],[1.104,0.875],[1.108,0.904],[1.112,0.933],[1.116,0.962],[1.12,0.991],[1.124,1.019],[1.128,1.047],[1.132,1.075],[1.136,1.102],[1.14,1.129],[1.144,1.156],[1.148,1.182],[1.152,1.208],[1.156,1.234],[1.16,1.26],[1.164,1.285],[1.168,1.31],[1.172,1.335],[1.176,1.359],[1.18,1.383],[1.184,1.407],[1.188,1.431],[1.192,1.454],[1.196,1.477],[1.2,1.5],[1.204,1.523],[1.208,1.545],[1.212,1.567],[1.216,1.589],[1.22,1.61],[1.224,1.631],[1.228,1.652],[1.232,1.673],[1.236,1.694],[1.24,1.714],[1.244,1.734],[1.248,1.754],[1.252,1.773],[1.256,1.792],[1.26,1.811],[1.264,1.83],[1.268,1.849],[1.272,1.867],[1.276,1.885],[1.28,1.903],[1.284,1.921],[1.288,1.938],[1.292,1.956],[1.296,1.973],[1.3,1.989],[1.304,2.006],[1.308,2.022],[1.312,2.039],[1.316,2.054],[1.32,2.07],[1.324,2.086],[1.328,2.101],[1.332,2.116],[1.336,2.131],[1.34,2.146],[1.344,2.161],[1.348,2.175],[1.352,2.189],[1.356,2.203],[1.36,2.217],[1.364,2.231],[1.368,2.244],[1.372,2.257],[1.376,2.271],[1.38,2.283],[1.384,2.296],[1.388,2.309],[1.392,2.321],[1.396,2.333],[1.4,2.345],[1.404,2.357],[1.408,2.369],[1.412,2.381],[1.416,2.392],[1.42,2.403],[1.424,2.415],[1.428,2.425],[1.432,2.436],[1.436,2.447],[1.44,2.457],[1.444,2.468],[1.448,2.478],[1.452,2.488],[1.456,2.498],[1.46,2.508],[1.464,2.517],[1.468,2.527],[1.472,2.536],[1.476,2.545],[1.48,2.555],[1.484,2.564],[1.488,2.572],[1.492,2.581],[1.496,2.59],[1.5,2.598],[1.504,2.606],[1.508,2.615],[1.512,2.623],[1.516,2.631],[1.52,2.638],[1.524,2.646],[1.528,2.654],[1.532,2.661],[1.536,2.669],[1.54,2.676],[1.544,2.683],[1.548,2.69],[1.552,2.697],[1.556,2.704],[1.56,2.71],[1.564,2.717],[1.568,2.723],[1.572,2.73],[1.576,2.736],[1.58,2.742],[1.584,2.748],[1.588,2.754],[1.592,2.76],[1.596,2.766],[1.6,2.772],[1.604,2.777],[1.608,2.783],[1.612,2.788],[1.616,2.793],[1.62,2.799],[1.624,2.804],[1.628,2.809],[1.632,2.814],[1.636,2.819],[1.64,2.823],[1.644,2.828],[1.648,2.833],[1.652,2.837],[1.656,2.842],[1.66,2.846],[1.664,2.85],[1.668,2.855],[1.672,2.859],[1.676,2.863],[1.68,2.867],[1.684,2.871],[1.688,2.874],[1.692,2.878],[1.696,2.882],[1.7,2.885],[1.704,2.889],[1.708,2.892],[1.712,2.896],[1.716,2.899],[1.72,2.902],[1.724,2.906],[1.728,2.909],[1.732,2.912],[1.736,2.915],[1.74,2.918],[1.744,2.921],[1.748,2.923],[1.752,2.926],[1.756,2.929],[1.76,2.931],[1.764,2.934],[1.768,2.936],[1.772,2.939],[1.776,2.941],[1.78,2.944],[1.784,2.946],[1.788,2.948],[1.792,2.95],[1.796,2.952],[1.8,2.954],[1.804,2.956],[1.808,2.958],[1.812,2.96],[1.816,2.962],[1.82,2.964],[1.824,2.966],[1.828,2.967],[1.832,2.969],[1.836,2.971],[1.84,2.972],[1.844,2.974],[1.848,2.975],[1.852,2.976],[1.856,2.978],[1.86,2.979],[1.864,2.98],[1.868,2.982],[1.872,2.983],[1.876,2.984],[1.88,2.985],[1.884,2.986],[1.888,2.987],[1.892,2.988],[1.896,2.989],[1.9,2.99],[1.904,2.991],[1.908,2.991],[1.912,2.992],[1.916,2.993],[1.92,2.994],[1.924,2.994],[1.928,2.995],[1.932,2.995],[1.936,2.996],[1.94,2.996],[1.944,2.997],[1.948,2.997],[1.952,2.998],[1.956,2.998],[1.96,2.998],[1.964,2.999],[1.968,2.999],[1.972,2.999],[1.976,2.999],[1.98,3],[1.984,3],[1.988,3],[1.992,3],[1.996,3],[2,3]]}]}
{{< /apfigure >}}

The result would resemble the graph below for $[-0.1,0.1]$ by $[-3,3].$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of 3 sine of pi over x zoomed in to the window from \u22120.1 to 0.1 by \u22123 to 3: the curve still oscillates between \u22123 and 3 across the whole window, packed even more densely than the wider view.","xMin":-0.1,"xMax":0.1,"yMin":-3,"yMax":3,"xUnit":1400,"yUnit":43,"tickLabels":true,"xTickStep":0.05,"yTickStep":1,"polylines":[{"through":[[-0.1,0],[-0.0998,-0.189],[-0.0996,-0.378],[-0.0994,-0.565],[-0.0992,-0.752],[-0.099,-0.936],[-0.0988,-1.117],[-0.0986,-1.294],[-0.0984,-1.467],[-0.0982,-1.634],[-0.098,-1.794],[-0.0978,-1.948],[-0.0976,-2.094],[-0.0974,-2.231],[-0.0972,-2.359],[-0.097,-2.477],[-0.0968,-2.585],[-0.0966,-2.681],[-0.0964,-2.766],[-0.0962,-2.838],[-0.096,-2.898],[-0.0958,-2.944],[-0.0956,-2.977],[-0.0954,-2.995],[-0.0952,-3],[-0.095,-2.99],[-0.0948,-2.965],[-0.0946,-2.926],[-0.0944,-2.872],[-0.0942,-2.804],[-0.094,-2.721],[-0.0938,-2.624],[-0.0936,-2.514],[-0.0934,-2.39],[-0.0932,-2.253],[-0.093,-2.103],[-0.0928,-1.942],[-0.0926,-1.77],[-0.0924,-1.587],[-0.0922,-1.396],[-0.092,-1.195],[-0.0918,-0.987],[-0.0916,-0.773],[-0.0914,-0.554],[-0.0912,-0.33],[-0.091,-0.104],[-0.0908,0.125],[-0.0906,0.353],[-0.0904,0.58],[-0.0902,0.805],[-0.09,1.026],[-0.0898,1.242],[-0.0896,1.451],[-0.0894,1.652],[-0.0892,1.844],[-0.089,2.026],[-0.0888,2.195],[-0.0886,2.351],[-0.0884,2.493],[-0.0882,2.619],[-0.088,2.729],[-0.0878,2.821],[-0.0876,2.895],[-0.0874,2.95],[-0.0872,2.985],[-0.087,3],[-0.0868,2.994],[-0.0866,2.967],[-0.0864,2.919],[-0.0862,2.85],[-0.086,2.761],[-0.0858,2.651],[-0.0856,2.522],[-0.0854,2.373],[-0.0852,2.206],[-0.085,2.021],[-0.0848,1.82],[-0.0846,1.605],[-0.0844,1.376],[-0.0842,1.135],[-0.084,0.884],[-0.0838,0.625],[-0.0836,0.36],[-0.0834,0.09],[-0.0832,-0.181],[-0.083,-0.452],[-0.0828,-0.721],[-0.0826,-0.985],[-0.0824,-1.242],[-0.0822,-1.49],[-0.082,-1.726],[-0.0818,-1.948],[-0.0816,-2.154],[-0.0814,-2.341],[-0.0812,-2.509],[-0.081,-2.654],[-0.0808,-2.776],[-0.0806,-2.873],[-0.0804,-2.943],[-0.0802,-2.986],[-0.08,-3],[-0.0798,-2.985],[-0.0796,-2.942],[-0.0794,-2.869],[-0.0792,-2.767],[-0.079,-2.637],[-0.0788,-2.479],[-0.0786,-2.296],[-0.0784,-2.087],[-0.0782,-1.856],[-0.078,-1.603],[-0.0778,-1.333],[-0.0776,-1.046],[-0.0774,-0.747],[-0.0772,-0.438],[-0.077,-0.122],[-0.0768,0.196],[-0.0766,0.514],[-0.0764,0.828],[-0.0762,1.134],[-0.076,1.428],[-0.0758,1.707],[-0.0756,1.966],[-0.0754,2.204],[-0.0752,2.415],[-0.075,2.598],[-0.0748,2.749],[-0.0746,2.867],[-0.0744,2.948],[-0.0742,2.992],[-0.074,2.997],[-0.0738,2.963],[-0.0736,2.889],[-0.0734,2.775],[-0.0732,2.623],[-0.073,2.435],[-0.0728,2.211],[-0.0726,1.955],[-0.0724,1.669],[-0.0722,1.358],[-0.072,1.026],[-0.0718,0.677],[-0.0716,0.315],[-0.0714,-0.053],[-0.0712,-0.422],[-0.071,-0.787],[-0.0708,-1.142],[-0.0706,-1.481],[-0.0704,-1.798],[-0.0702,-2.088],[-0.07,-2.345],[-0.0698,-2.566],[-0.0696,-2.745],[-0.0694,-2.879],[-0.0692,-2.964],[-0.069,-2.999],[-0.0688,-2.982],[-0.0686,-2.912],[-0.0684,-2.79],[-0.0682,-2.616],[-0.068,-2.394],[-0.0678,-2.126],[-0.0676,-1.817],[-0.0674,-1.472],[-0.0672,-1.096],[-0.067,-0.697],[-0.0668,-0.282],[-0.0666,0.141],[-0.0664,0.564],[-0.0662,0.978],[-0.066,1.375],[-0.0658,1.745],[-0.0656,2.08],[-0.0654,2.373],[-0.0652,2.617],[-0.065,2.805],[-0.0648,2.932],[-0.0646,2.994],[-0.0644,2.988],[-0.0642,2.914],[-0.064,2.772],[-0.0638,2.563],[-0.0636,2.292],[-0.0634,1.964],[-0.0632,1.585],[-0.063,1.165],[-0.0628,0.713],[-0.0626,0.241],[-0.0624,-0.241],[-0.0622,-0.72],[-0.062,-1.183],[-0.0618,-1.617],[-0.0616,-2.01],[-0.0614,-2.351],[-0.0612,-2.628],[-0.061,-2.833],[-0.0608,-2.959],[-0.0606,-3],[-0.0604,-2.953],[-0.0602,-2.818],[-0.06,-2.598],[-0.0598,-2.297],[-0.0596,-1.923],[-0.0594,-1.486],[-0.0592,-0.999],[-0.059,-0.477],[-0.0588,0.064],[-0.0586,0.607],[-0.0584,1.133],[-0.0582,1.624],[-0.058,2.063],[-0.0578,2.433],[-0.0576,2.719],[-0.0574,2.909],[-0.0572,2.995],[-0.057,2.972],[-0.0568,2.836],[-0.0566,2.593],[-0.0564,2.247],[-0.0562,1.812],[-0.056,1.302],[-0.0558,0.736],[-0.0556,0.136],[-0.0554,-0.474],[-0.0552,-1.069],[-0.055,-1.622],[-0.0548,-2.109],[-0.0546,-2.508],[-0.0544,-2.797],[-0.0542,-2.963],[-0.054,-2.995],[-0.0538,-2.888],[-0.0536,-2.644],[-0.0534,-2.271],[-0.0532,-1.786],[-0.053,-1.209],[-0.0528,-0.568],[-0.0526,0.107],[-0.0524,0.782],[-0.0522,1.421],[-0.052,1.989],[-0.0518,2.455],[-0.0516,2.789],[-0.0514,2.97],[-0.0512,2.986],[-0.051,2.829],[-0.0508,2.507],[-0.0506,2.034],[-0.0504,1.435],[-0.0502,0.743],[-0.05,0],[-0.0498,-0.749],[-0.0496,-1.456],[-0.0494,-2.074],[-0.0492,-2.559],[-0.049,-2.876],[-0.0488,-2.999],[-0.0486,-2.915],[-0.0484,-2.624],[-0.0482,-2.142],[-0.048,-1.5],[-0.0478,-0.741],[-0.0476,0.079],[-0.0474,0.901],[-0.0472,1.658],[-0.047,2.291],[-0.0468,2.744],[-0.0466,2.975],[-0.0464,2.96],[-0.0462,2.694],[-0.046,2.193],[-0.0458,1.494],[-0.0456,0.656],[-0.0454,-0.249],[-0.0452,-1.138],[-0.045,-1.928],[-0.0448,-2.54],[-0.0446,-2.909],[-0.0444,-2.992],[-0.0442,-2.774],[-0.044,-2.267],[-0.0438,-1.519],[-0.0436,-0.601],[-0.0434,0.39],[-0.0432,1.346],[-0.043,2.16],[-0.0428,2.732],[-0.0426,2.99],[-0.0424,2.894],[-0.0422,2.445],[-0.042,1.69],[-0.0418,0.715],[-0.0416,-0.362],[-0.0414,-1.4],[-0.0412,-2.262],[-0.041,-2.823],[-0.0408,-2.999],[-0.0406,-2.751],[-0.0404,-2.105],[-0.0402,-1.143],[-0.04,0],[-0.0398,1.154],[-0.0396,2.138],[-0.0394,2.792],[-0.0392,2.998],[-0.039,2.71],[-0.0388,1.961],[-0.0386,0.866],[-0.0384,-0.392],[-0.0382,-1.592],[-0.038,-2.511],[-0.0378,-2.97],[-0.0376,-2.865],[-0.0374,-2.2],[-0.0372,-1.089],[-0.037,0.254],[-0.0368,1.559],[-0.0366,2.545],[-0.0364,2.989],[-0.0362,2.774],[-0.036,1.928],[-0.0358,0.627],[-0.0356,-0.836],[-0.0354,-2.112],[-0.0352,-2.878],[-0.035,-2.925],[-0.0348,-2.215],[-0.0346,-0.911],[-0.0344,0.652],[-0.0342,2.052],[-0.034,2.885],[-0.0338,2.892],[-0.0336,2.041],[-0.0334,0.561],[-0.0332,-1.109],[-0.033,-2.444],[-0.0328,-2.998],[-0.0326,-2.559],[-0.0324,-1.241],[-0.0322,0.524],[-0.032,2.121],[-0.0318,2.958],[-0.0316,2.692],[-0.0314,1.386],[-0.0312,-0.481],[-0.031,-2.174],[-0.0308,-2.984],[-0.0306,-2.534],[-0.0304,-0.974],[-0.0302,1.039],[-0.03,2.598],[-0.0298,2.952],[-0.0296,1.885],[-0.0294,-0.128],[-0.0292,-2.098],[-0.029,-2.996],[-0.0288,-2.298],[-0.0286,-0.329],[-0.0284,1.848],[-0.0282,2.978],[-0.028,2.345],[-0.0278,0.271],[-0.0276,-1.997],[-0.0274,-3],[-0.0272,-2.021],[-0.027,0.348],[-0.0268,2.499],[-0.0266,2.87],[-0.0264,1.115],[-0.0262,-1.51],[-0.026,-2.978],[-0.0258,-2.056],[-0.0256,0.585],[-0.0254,2.754],[-0.0252,2.52],[-0.025,0],[-0.0248,-2.546],[-0.0246,-2.671],[-0.0244,-0.154],[-0.0242,2.545],[-0.024,2.598],[-0.0238,-0.158],[-0.0236,-2.764],[-0.0234,-2.219],[-0.0232,0.958],[-0.023,2.993],[-0.0228,1.28],[-0.0226,-2.107],[-0.0224,-2.703],[-0.0222,0.423],[-0.022,2.969],[-0.0218,1.178],[-0.0216,-2.406],[-0.0214,-2.257],[-0.0212,1.526],[-0.021,2.793],[-0.0208,-0.718],[-0.0206,-2.972],[-0.0204,0.185],[-0.0202,3],[-0.02,0],[-0.0198,-3],[-0.0196,0.192],[-0.0194,2.968],[-0.0192,-0.776],[-0.019,-2.747],[-0.0188,1.698],[-0.0186,2.03],[-0.0184,-2.664],[-0.0182,-0.515],[-0.018,2.954],[-0.0178,-1.606],[-0.0176,-1.622],[-0.0174,2.988],[-0.0172,-1.273],[-0.017,-1.579],[-0.0168,2.992],[-0.0166,-2.06],[-0.0164,-0.23],[-0.0162,2.26],[-0.016,-3],[-0.0158,2.377],[-0.0156,-0.95],[-0.0154,-0.608],[-0.0152,1.843],[-0.015,-2.598],[-0.0148,2.933],[-0.0146,-2.999],[-0.0144,2.954],[-0.0142,-2.912],[-0.014,2.925],[-0.0138,-2.981],[-0.0136,2.987],[-0.0134,-2.765],[-0.0132,2.07],[-0.013,-0.718],[-0.0128,-1.148],[-0.0126,2.735],[-0.0124,-2.693],[-0.0122,0.308],[-0.012,2.598],[-0.0118,-2.149],[-0.0116,-1.816],[-0.0114,2.316],[-0.0112,2.345],[-0.011,-0.845],[-0.0108,-2.874],[-0.0106,-2.627],[-0.0104,-1.394],[-0.0102,-0.369],[-0.01,0],[-0.0098,-0.384],[-0.0096,-1.5],[-0.0094,-2.8],[-0.0092,-2.451],[-0.009,1.026],[-0.0088,2.729],[-0.0086,-2.306],[-0.0084,0.447],[-0.0082,0.458],[-0.008,0],[-0.0078,-1.802],[-0.0076,2.908],[-0.0074,1.236],[-0.0072,-1.026],[-0.007,-1.302],[-0.0068,0.551],[-0.0066,2.997],[-0.0064,-2.121],[-0.0062,2.372],[-0.006,-2.598],[-0.0058,-2.891],[-0.0056,-2.925],[-0.0054,1.649],[-0.0052,-2.469],[-0.005,0],[-0.0048,-2.598],[-0.0046,2.827],[-0.0044,2.267],[-0.0042,-0.884],[-0.004,0],[-0.0038,1.428],[-0.0036,1.928],[-0.0034,-1.084],[-0.0032,-3],[-0.003,2.598],[-0.0028,1.302],[-0.0026,-2.805],[-0.0024,-2.598],[-0.0022,-2.969],[-0.002,0],[-0.0018,2.954],[-0.0016,0],[-0.0014,-2.345],[-0.0012,2.598],[-0.001,0],[-0.0008,0],[-0.0006,-2.598]]},{"through":[[0.0006,2.598],[0.0008,0],[0.001,0],[0.0012,-2.598],[0.0014,2.345],[0.0016,0],[0.0018,-2.954],[0.002,0],[0.0022,2.969],[0.0024,2.598],[0.0026,2.805],[0.0028,-1.302],[0.003,-2.598],[0.0032,3],[0.0034,1.084],[0.0036,-1.928],[0.0038,-1.428],[0.004,0],[0.0042,0.884],[0.0044,-2.267],[0.0046,-2.827],[0.0048,2.598],[0.005,0],[0.0052,2.469],[0.0054,-1.649],[0.0056,2.925],[0.0058,2.891],[0.006,2.598],[0.0062,-2.372],[0.0064,2.121],[0.0066,-2.997],[0.0068,-0.551],[0.007,1.302],[0.0072,1.026],[0.0074,-1.236],[0.0076,-2.908],[0.0078,1.802],[0.008,0],[0.0082,-0.458],[0.0084,-0.447],[0.0086,2.306],[0.0088,-2.729],[0.009,-1.026],[0.0092,2.451],[0.0094,2.8],[0.0096,1.5],[0.0098,0.384],[0.01,0],[0.0102,0.369],[0.0104,1.394],[0.0106,2.627],[0.0108,2.874],[0.011,0.845],[0.0112,-2.345],[0.0114,-2.316],[0.0116,1.816],[0.0118,2.149],[0.012,-2.598],[0.0122,-0.308],[0.0124,2.693],[0.0126,-2.735],[0.0128,1.148],[0.013,0.718],[0.0132,-2.07],[0.0134,2.765],[0.0136,-2.987],[0.0138,2.981],[0.014,-2.925],[0.0142,2.912],[0.0144,-2.954],[0.0146,2.999],[0.0148,-2.933],[0.015,2.598],[0.0152,-1.843],[0.0154,0.608],[0.0156,0.95],[0.0158,-2.377],[0.016,3],[0.0162,-2.26],[0.0164,0.23],[0.0166,2.06],[0.0168,-2.992],[0.017,1.579],[0.0172,1.273],[0.0174,-2.988],[0.0176,1.622],[0.0178,1.606],[0.018,-2.954],[0.0182,0.515],[0.0184,2.664],[0.0186,-2.03],[0.0188,-1.698],[0.019,2.747],[0.0192,0.776],[0.0194,-2.968],[0.0196,-0.192],[0.0198,3],[0.02,0],[0.0202,-3],[0.0204,-0.185],[0.0206,2.972],[0.0208,0.718],[0.021,-2.793],[0.0212,-1.526],[0.0214,2.257],[0.0216,2.406],[0.0218,-1.178],[0.022,-2.969],[0.0222,-0.423],[0.0224,2.703],[0.0226,2.107],[0.0228,-1.28],[0.023,-2.993],[0.0232,-0.958],[0.0234,2.219],[0.0236,2.764],[0.0238,0.158],[0.024,-2.598],[0.0242,-2.545],[0.0244,0.154],[0.0246,2.671],[0.0248,2.546],[0.025,0],[0.0252,-2.52],[0.0254,-2.754],[0.0256,-0.585],[0.0258,2.056],[0.026,2.978],[0.0262,1.51],[0.0264,-1.115],[0.0266,-2.87],[0.0268,-2.499],[0.027,-0.348],[0.0272,2.021],[0.0274,3],[0.0276,1.997],[0.0278,-0.271],[0.028,-2.345],[0.0282,-2.978],[0.0284,-1.848],[0.0286,0.329],[0.0288,2.298],[0.029,2.996],[0.0292,2.098],[0.0294,0.128],[0.0296,-1.885],[0.0298,-2.952],[0.03,-2.598],[0.0302,-1.039],[0.0304,0.974],[0.0306,2.534],[0.0308,2.984],[0.031,2.174],[0.0312,0.481],[0.0314,-1.386],[0.0316,-2.692],[0.0318,-2.958],[0.032,-2.121],[0.0322,-0.524],[0.0324,1.241],[0.0326,2.559],[0.0328,2.998],[0.033,2.444],[0.0332,1.109],[0.0334,-0.561],[0.0336,-2.041],[0.0338,-2.892],[0.034,-2.885],[0.0342,-2.052],[0.0344,-0.652],[0.0346,0.911],[0.0348,2.215],[0.035,2.925],[0.0352,2.878],[0.0354,2.112],[0.0356,0.836],[0.0358,-0.627],[0.036,-1.928],[0.0362,-2.774],[0.0364,-2.989],[0.0366,-2.545],[0.0368,-1.559],[0.037,-0.254],[0.0372,1.089],[0.0374,2.2],[0.0376,2.865],[0.0378,2.97],[0.038,2.511],[0.0382,1.592],[0.0384,0.392],[0.0386,-0.866],[0.0388,-1.961],[0.039,-2.71],[0.0392,-2.998],[0.0394,-2.792],[0.0396,-2.138],[0.0398,-1.154],[0.04,0],[0.0402,1.143],[0.0404,2.105],[0.0406,2.751],[0.0408,2.999],[0.041,2.823],[0.0412,2.262],[0.0414,1.4],[0.0416,0.362],[0.0418,-0.715],[0.042,-1.69],[0.0422,-2.445],[0.0424,-2.894],[0.0426,-2.99],[0.0428,-2.732],[0.043,-2.16],[0.0432,-1.346],[0.0434,-0.39],[0.0436,0.601],[0.0438,1.519],[0.044,2.267],[0.0442,2.774],[0.0444,2.992],[0.0446,2.909],[0.0448,2.54],[0.045,1.928],[0.0452,1.138],[0.0454,0.249],[0.0456,-0.656],[0.0458,-1.494],[0.046,-2.193],[0.0462,-2.694],[0.0464,-2.96],[0.0466,-2.975],[0.0468,-2.744],[0.047,-2.291],[0.0472,-1.658],[0.0474,-0.901],[0.0476,-0.079],[0.0478,0.741],[0.048,1.5],[0.0482,2.142],[0.0484,2.624],[0.0486,2.915],[0.0488,2.999],[0.049,2.876],[0.0492,2.559],[0.0494,2.074],[0.0496,1.456],[0.0498,0.749],[0.05,0],[0.0502,-0.743],[0.0504,-1.435],[0.0506,-2.034],[0.0508,-2.507],[0.051,-2.829],[0.0512,-2.986],[0.0514,-2.97],[0.0516,-2.789],[0.0518,-2.455],[0.052,-1.989],[0.0522,-1.421],[0.0524,-0.782],[0.0526,-0.107],[0.0528,0.568],[0.053,1.209],[0.0532,1.786],[0.0534,2.271],[0.0536,2.644],[0.0538,2.888],[0.054,2.995],[0.0542,2.963],[0.0544,2.797],[0.0546,2.508],[0.0548,2.109],[0.055,1.622],[0.0552,1.069],[0.0554,0.474],[0.0556,-0.136],[0.0558,-0.736],[0.056,-1.302],[0.0562,-1.812],[0.0564,-2.247],[0.0566,-2.593],[0.0568,-2.836],[0.057,-2.972],[0.0572,-2.995],[0.0574,-2.909],[0.0576,-2.719],[0.0578,-2.433],[0.058,-2.063],[0.0582,-1.624],[0.0584,-1.133],[0.0586,-0.607],[0.0588,-0.064],[0.059,0.477],[0.0592,0.999],[0.0594,1.486],[0.0596,1.923],[0.0598,2.297],[0.06,2.598],[0.0602,2.818],[0.0604,2.953],[0.0606,3],[0.0608,2.959],[0.061,2.833],[0.0612,2.628],[0.0614,2.351],[0.0616,2.01],[0.0618,1.617],[0.062,1.183],[0.0622,0.72],[0.0624,0.241],[0.0626,-0.241],[0.0628,-0.713],[0.063,-1.165],[0.0632,-1.585],[0.0634,-1.964],[0.0636,-2.292],[0.0638,-2.563],[0.064,-2.772],[0.0642,-2.914],[0.0644,-2.988],[0.0646,-2.994],[0.0648,-2.932],[0.065,-2.805],[0.0652,-2.617],[0.0654,-2.373],[0.0656,-2.08],[0.0658,-1.745],[0.066,-1.375],[0.0662,-0.978],[0.0664,-0.564],[0.0666,-0.141],[0.0668,0.282],[0.067,0.697],[0.0672,1.096],[0.0674,1.472],[0.0676,1.817],[0.0678,2.126],[0.068,2.394],[0.0682,2.616],[0.0684,2.79],[0.0686,2.912],[0.0688,2.982],[0.069,2.999],[0.0692,2.964],[0.0694,2.879],[0.0696,2.745],[0.0698,2.566],[0.07,2.345],[0.0702,2.088],[0.0704,1.798],[0.0706,1.481],[0.0708,1.142],[0.071,0.787],[0.0712,0.422],[0.0714,0.053],[0.0716,-0.315],[0.0718,-0.677],[0.072,-1.026],[0.0722,-1.358],[0.0724,-1.669],[0.0726,-1.955],[0.0728,-2.211],[0.073,-2.435],[0.0732,-2.623],[0.0734,-2.775],[0.0736,-2.889],[0.0738,-2.963],[0.074,-2.997],[0.0742,-2.992],[0.0744,-2.948],[0.0746,-2.867],[0.0748,-2.749],[0.075,-2.598],[0.0752,-2.415],[0.0754,-2.204],[0.0756,-1.966],[0.0758,-1.707],[0.076,-1.428],[0.0762,-1.134],[0.0764,-0.828],[0.0766,-0.514],[0.0768,-0.196],[0.077,0.122],[0.0772,0.438],[0.0774,0.747],[0.0776,1.046],[0.0778,1.333],[0.078,1.603],[0.0782,1.856],[0.0784,2.087],[0.0786,2.296],[0.0788,2.479],[0.079,2.637],[0.0792,2.767],[0.0794,2.869],[0.0796,2.942],[0.0798,2.985],[0.08,3],[0.0802,2.986],[0.0804,2.943],[0.0806,2.873],[0.0808,2.776],[0.081,2.654],[0.0812,2.509],[0.0814,2.341],[0.0816,2.154],[0.0818,1.948],[0.082,1.726],[0.0822,1.49],[0.0824,1.242],[0.0826,0.985],[0.0828,0.721],[0.083,0.452],[0.0832,0.181],[0.0834,-0.09],[0.0836,-0.36],[0.0838,-0.625],[0.084,-0.884],[0.0842,-1.135],[0.0844,-1.376],[0.0846,-1.605],[0.0848,-1.82],[0.085,-2.021],[0.0852,-2.206],[0.0854,-2.373],[0.0856,-2.522],[0.0858,-2.651],[0.086,-2.761],[0.0862,-2.85],[0.0864,-2.919],[0.0866,-2.967],[0.0868,-2.994],[0.087,-3],[0.0872,-2.985],[0.0874,-2.95],[0.0876,-2.895],[0.0878,-2.821],[0.088,-2.729],[0.0882,-2.619],[0.0884,-2.493],[0.0886,-2.351],[0.0888,-2.195],[0.089,-2.026],[0.0892,-1.844],[0.0894,-1.652],[0.0896,-1.451],[0.0898,-1.242],[0.09,-1.026],[0.0902,-0.805],[0.0904,-0.58],[0.0906,-0.353],[0.0908,-0.125],[0.091,0.104],[0.0912,0.33],[0.0914,0.554],[0.0916,0.773],[0.0918,0.987],[0.092,1.195],[0.0922,1.396],[0.0924,1.587],[0.0926,1.77],[0.0928,1.942],[0.093,2.103],[0.0932,2.253],[0.0934,2.39],[0.0936,2.514],[0.0938,2.624],[0.094,2.721],[0.0942,2.804],[0.0944,2.872],[0.0946,2.926],[0.0948,2.965],[0.095,2.99],[0.0952,3],[0.0954,2.995],[0.0956,2.977],[0.0958,2.944],[0.096,2.898],[0.0962,2.838],[0.0964,2.766],[0.0966,2.681],[0.0968,2.585],[0.097,2.477],[0.0972,2.359],[0.0974,2.231],[0.0976,2.094],[0.0978,1.948],[0.098,1.794],[0.0982,1.634],[0.0984,1.467],[0.0986,1.294],[0.0988,1.117],[0.099,0.936],[0.0992,0.752],[0.0994,0.565],[0.0996,0.378],[0.0998,0.189],[0.1,0]]}]}
{{< /apfigure >}}

The closer we get to $0,$ the greater the swings in the output values are. That is not the behavior of a function with either a left-hand limit or a right-hand limit. And if there is no left-hand limit or right-hand limit, there certainly is no limit to the function $f(x)$ as $x$ approaches $0.$

We write

$$\lim\limits_{x\to0^-}\left(3\sin\left(\tfrac{\pi}{x}\right)\right)\text{ does not exist.}$$

$$\lim\limits_{x\to0^+}\left(3\sin\left(\tfrac{\pi}{x}\right)\right)\text{ does not exist.}$$

$$\lim\limits_{x\to0}\left(3\sin\left(\tfrac{\pi}{x}\right)\right)\text{ does not exist.}$$

{{< multiplechoice
  question="Numerically estimate the limit $\lim_{x\to0}\sin\left(\tfrac{2}{x}\right)$."
  mode="text"
  answer="The limit does not exist."
  hint="As $x\to0$, $\tfrac{2}{x}$ grows without bound, so $\sin(2/x)$ oscillates between $-1$ and $1$ without settling on one value."
>}}
$0$
$1$
The limit does not exist.
{{< /multiplechoice >}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and
practice with finding limits.
{{< /callout >}}

## Key concepts

- A function has a limit if the output values approach some value $L$ as the input values approach some quantity $a.$
- A shorthand notation is used to describe the limit of a function according to the form $\lim_{x\to a}f(x)=L,$ which indicates that as $x$ approaches $a,$ both from the left of $x=a$ and the right of $x=a,$ the output value gets close to $L.$
- A function has a left-hand limit if $f(x)$ approaches $L$ as $x$ approaches $a$ where $x<a.$ A function has a right-hand limit if $f(x)$ approaches $L$ as $x$ approaches $a$ where $x>a.$
- A two-sided limit exists if the left-hand limit and the right-hand limit of a function are the same. A function is said to have a limit if it has a two-sided limit.
- A graph provides a visual method of determining the limit of a function.
- If the function has a limit as $x$ approaches $a,$ the branches of the graph will approach the same $y$-coordinate near $x=a$ from the left and the right.
- A table can be used to determine if a function has a limit. The table should show input values that approach $a$ from both directions so that the resulting output values can be evaluated. If the output values approach some number, the function has a limit.
- A graphing utility can also be used to find a limit.

## Practice

### Understand limit notation

{{< multiplechoice
  question="Explain the difference between a value at $x=a$ and the limit as $x$ approaches $a$."
  mode="text"
  answer="The value $f(a)$ is the function's actual output at $x=a$; the limit is the value $f(x)$ approaches as $x$ gets arbitrarily close to $a$ without ever equaling $a$."
  hint="Think about whether the two quantities are asking about the point $x=a$ itself or about the behavior of $f$ near that point."
>}}
The value $f(a)$ is the function's actual output at $x=a$; the limit is the value $f(x)$ approaches as $x$ gets arbitrarily close to $a$ without ever equaling $a$.
They are always the same number, since $f(a)$ must equal $\lim_{x\to a}f(x)$ whenever the limit exists.
The limit describes the output at $x=a$, while $f(a)$ describes the behavior of nearby points.
{{< /multiplechoice >}}

{{< fillin
  question="For the limit $\lim_{x\to-3}(2x^2+1)=19$, what is $a$?"
  answer="-3"
  answerForm="decimal"
  answerDisplay="$-3$"
  hint="$a$ is the value printed under the limit symbol — the value $x$ approaches."
>}}

{{< fillin
  question="For the limit $\lim_{x\to-3}(2x^2+1)=19$, what is $f(x)$?"
  answer="2x^2+1"
  answerDisplay="$2x^2+1$"
  hint="$f(x)$ is the expression inside the parentheses whose limit is being taken."
>}}

{{< fillin
  question="For the limit $\lim_{x\to-3}(2x^2+1)=19$, what is $L$?"
  answer="19"
  answerForm="decimal"
  answerDisplay="$19$"
  hint="$L$ is the value the limit equals, printed on the right of the equation."
>}}

### Find a limit using a graph

For the following exercises, estimate the functional values and the limits from the graph of the function $f$ shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise graph with three discontinuities. For x less than \u22122 the curve descends steeply from the upper left to an open circle at (\u22122, \u22124); a separate filled point sits at (\u22122, 3). From \u22122 to 1 the curve rises from that same open circle to a peak near (0, 4) and falls to an open circle at (1, 2). A second open circle sits at (1, 0); from there the curve rises through a filled point at (4, 4). A short separate piece starts at an open circle at (4, 6) and hooks down to the right, ending in an arrow.","xMin":-5,"xMax":6,"yMin":-5,"yMax":7,"unit":26,"tickLabels":true,"quadratics":[{"a":-2,"c":4,"from":-2,"to":1,"arrows":false}],"curves":[{"kind":"sqrt","a":2.309,"h":1,"k":0,"from":1,"to":4,"arrows":false}],"segments":[{"from":[-2,-4],"to":[-3.7,6],"arrows":"end"},{"from":[4,6],"to":[4.45,5.85],"arrows":false},{"from":[4.45,5.85],"to":[4.9,5.15],"arrows":"end"}],"points":[{"at":[-2,-4],"open":true},{"at":[-2,3]},{"at":[1,2],"open":true},{"at":[1,0],"open":true},{"at":[4,4]},{"at":[4,6],"open":true}]}
{{< /apfigure >}}

{{< fillin
  question="Estimate $\lim_{x\to-2^-}f(x)$ from the graph above."
  answer="-4"
  answerForm="decimal"
  answerDisplay="$-4$"
  hint="Follow the branch of the graph to the left of $x=-2$ toward the open circle it approaches."
>}}

{{< fillin
  question="Estimate $\lim_{x\to-2}f(x)$ from the graph above."
  answer="-4"
  answerForm="decimal"
  answerDisplay="$-4$"
  hint="Compare the left- and right-hand limits at $x=-2$; if they agree, that shared value is the two-sided limit."
>}}

{{< fillin
  question="Estimate $\lim_{x\to1^-}f(x)$ from the graph above."
  answer="2"
  answerForm="decimal"
  answerDisplay="$2$"
  hint="Follow the branch of the graph to the left of $x=1$ toward the open circle it approaches."
>}}

{{< multiplechoice
  question="Estimate $\lim_{x\to1}f(x)$ from the graph above."
  mode="text"
  answer="The limit does not exist."
  hint="Compare the left- and right-hand limits at $x=1$; if they differ, the two-sided limit does not exist."
>}}
$0$
The limit does not exist.
$2$
{{< /multiplechoice >}}

{{< fillin
  question="Estimate $\lim_{x\to4^-}f(x)$ from the graph above."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4$"
  hint="Follow the branch of the graph to the left of $x=4$ toward the point it approaches."
>}}

{{< multiplechoice
  question="Estimate $\lim_{x\to4}f(x)$ from the graph above."
  mode="text"
  answer="The limit does not exist."
  hint="Compare the left- and right-hand limits at $x=4$; the two branches near $x=4$ meet the vertical line $x=4$ at different heights."
>}}
$4$
The limit does not exist.
$6$
{{< /multiplechoice >}}

### Find a limit using a table

{{< fillin
  question="Use numerical evidence to estimate $\lim_{x\to3}\left(\tfrac{x^2-x-6}{x^2-9}\right)$. Round your answer to two decimal places."
  answer="0.83"
  answerForm="decimal"
  answerDisplay="$0.83$"
  hint="Build a table of values of $\tfrac{x^2-x-6}{x^2-9}$ for $x$ just below and just above $3$."
>}}

{{< fillin
  question="Use numerical evidence to estimate $\lim_{x\to1}\left(\tfrac{x^2-1}{x^2-3x+2}\right)$. Round your answer to two decimal places."
  answer="-2"
  answerForm="decimal"
  answerDisplay="$-2.00$"
  hint="Build a table of values of $\tfrac{x^2-1}{x^2-3x+2}$ for $x$ just below and just above $1$."
>}}

{{< fillin
  question="Use numerical evidence to estimate $\lim_{x\to1}\left(\tfrac{10-10x^2}{x^2-3x+2}\right)$. Round your answer to two decimal places."
  answer="20"
  answerForm="decimal"
  answerDisplay="$20.00$"
  hint="Build a table of values of $\tfrac{10-10x^2}{x^2-3x+2}$ for $x$ just below and just above $1$."
>}}

{{< multiplechoice
  question="Use numerical evidence to determine whether $\lim_{x\to-\frac12}\left(\tfrac{x}{4x^2+4x+1}\right)$ exists."
  mode="text"
  answer="The limit does not exist. Function values decrease without bound as $x$ approaches $-\frac12$ from either side."
  hint="Build a table of values for $x$ just below and just above $-\frac12$ and watch what happens to the size of the output."
>}}
The limit equals $-\frac12$.
The limit does not exist. Function values increase without bound as $x$ approaches $-\frac12$ from either side.
The limit does not exist. Function values decrease without bound as $x$ approaches $-\frac12$ from either side.
{{< /multiplechoice >}}

{{< fillin
  question="Use a calculator to estimate $\lim_{x\to0}\tfrac{7\tan x}{3x}$ by preparing a table of values, as a fraction."
  answer="\tfrac{7}{3}"
  answerForm="fraction"
  answerDisplay="$\tfrac{7}{3}$"
  hint="Build a table of values of $\tfrac{7\tan x}{3x}$ for $x$ just below and just above $0$; the values approach $\tfrac{7}{3}$ exactly."
>}}

{{< fillin
  question="Use a graphing utility to find numerical evidence to estimate $\lim_{x\to0}e^{e^{-\frac{1}{x^2}}}$."
  answer="1"
  answerForm="decimal"
  answerDisplay="$1$"
  hint="As $x\to0$, $-\tfrac{1}{x^2}\to-\infty$, so the inner exponential approaches $0$ and the outer exponential approaches $e^0$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 12.1: Finding Limits: Numerical and Graphical Approaches](https://openstax.org/books/precalculus-2e/pages/12-1-finding-limits-numerical-and-graphical-approaches) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: Every source figure is recreated as an apfigure spec, never a traced image. The two “generic” limit-at-$(a,L)$ illustrations (the intro figure and the “finding a limit using a graph” figure) have no named source formula, so each was fitted by script to a low-degree polynomial matching the open circle at $(a,L)$: the intro S-curve is the cubic $y=0.12(x-1)^3+2$, and the hump figure is the quadratic $y=-0.4(x-1)^2+3$. The hole graph of $f(x)=\tfrac{x^2-6x-7}{x-7}=x+1,\ x\ne7$ (bare, then annotated with the $y=8$ guide line) is the line of slope $1$ with an open circle at $(7,8)$. Example 2's two piecewise graphs are each an upward parabola $y=2x^2$ (drawn from $x=-4$) meeting a line or a second open circle at $x=2$, with coordinates read directly off the printed page. The Try It graph (the nine-part graph read after Example 2) is a quadratic $y=0.42x^2+1.092x+0.01$ ending open at the origin, a second quadratic $y=-x^2+2$ running from a filled point at $(0,2)$ to a filled point at $(2,-2)$, and a straight line of slope $2$ from an open circle at $(2,0)$ through an open circle at $(4,4)$, so every open and filled dot lands exactly on the values the printed answer key gives ($0,2,-2,0,4$); only $\lim_{x\to0^-}f(x)$, $\lim_{x\to2}f(x)$, and $\lim_{x\to4}f(x)$ were carried into real components — the other six of its nine parts (the right-hand limits at $0$ and $4$, the individual one-sided limits at $x=2$, and the two two-sided-limit-exists parts already implied by the carried items) were not, per the playbook's nine-part-Try-It allowance. The graphing-utility check graph in the Q&A is the algebraic simplification of $\tfrac{x^3-125}{x-5}$, namely $x^2+5x+25$, with an open circle at $(5,75)$; it duplicates Example 3's function because the source's own Q&A duplicates it as a graphical check. The two $3\sin(\pi/x)$ zoom windows are not a named curve family, so each was sampled directly from the formula into a pair of polylines (roughly 500 points per branch, excluding a small neighborhood of the $x=0$ singularity); the resulting aliasing into a dense packed band near the center in both windows reproduces the same compressed look the printed figure shows, rather than smoothing it away. The graphical-exercise figure (discontinuities at $x=-2,1,4$) was transcribed dot-for-dot from the printed page: a steep line segment for $x<-2$, a downward parabola $y=-2x^2+4$ from an open circle at $(-2,-4)$ to an open circle at $(1,2)$ with an isolated filled point at $(-2,3)$, a second open circle at $(1,0)$ starting a square-root branch $y=2.309\sqrt{x-1}$ through a filled point at $(4,4)$, and a short separate hooked piece starting from an open circle at $(4,6)$ that no exercise reads numerically. Corrected one spelling slip in the graphing-utility Q&A (the source prints "appraoching"), a non-mathematical transcription slip. Omitted the Media callout's two external resource links, keeping its introductory sentence, matching house precedent elsewhere in this book. Every retained Try It is a real fillin or multiplechoice component; every “does not exist” answer is multiplechoice, since MathLive cannot type words and a fillin cannot key a bare-text answer; every “evaluate/estimate the limit” fillin declares decimal or fraction so the engine's own evaluation of the printed limit expression cannot pass as a retype (verified against the real grader). The “Understand limit notation” Practice group draws its multiplechoice from the section's Verbal exercises (fs-id1165137810884, the only one of the two with a printed solution) and, since that leaves the group with only one item, adds a fresh “identify $a$, $f(x)$, and $L$” triple in the pattern of Example 1 / Try It 1 with a new substitution, $\lim_{x\to-3}(2x^2+1)=19$, not printed in the source, per the brief's allowance for a thin objective. The “Find a limit using a graph” group is the six graph-read exercises with printed solutions from the “Graphical” set reading the discontinuities figure (fs-id1165135183014, fs-id1165137806213, fs-id1165137935628, fs-id1165135181688, fs-id1165137455877, fs-id1165137794235 — printed numbers 3, 5, 7, 9, 11, 13). The “Find a limit using a table” group is six exercises with printed solutions from the “Numeric” set (fs-id1165135195366, fs-id1165137836967, fs-id1165137770148, fs-id1165135209740, fs-id1165135188629, fs-id1165137731539 — printed numbers 31, 33, 35, 37, 39, 43); the last of those (printed #43) belongs to the “use a graphing utility to find numerical or graphical evidence” subset rather than the “Numeric” subset proper, but is the same kind of table-driven estimate and is independently re-derived like every other item here. The Extensions subsection's relativistic-mass conjecture exercise and its accompanying table (Table_12_01_01) were not used: that item asks for an open-ended conjecture rather than a single checkable value, and the two Practice groups above already meet the “find a limit using a graph/table” objectives without it.</small>
