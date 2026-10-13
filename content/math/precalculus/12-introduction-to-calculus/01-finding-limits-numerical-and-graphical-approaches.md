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
{"ariaLabel":"An increasing S-shaped curve labeled f, with arrows showing it continues down to the lower left and up to the upper right. A dashed horizontal line labeled y = L crosses the window and passes through an open circle on the curve labeled (a, L); a dashed vertical segment drops from the open circle to the point labeled a on the x-axis.","xMin":-2,"xMax":4,"yMin":-2,"yMax":6,"grid":false,"tickLabels":false,"cubics":[{"a":0.12,"b":-0.36,"c":0.36,"d":1.88,"arrows":true}],"lines":[{"y":2,"dashed":true,"label":"y = L"}],"points":[{"at":[1,2],"open":true,"label":"(a, L)"}],"texts":[{"at":[3.5,5.1],"text":"f"},{"at":[1,-0.6],"text":"a"}],"segments":[{"from":[1,0],"to":[1,2],"dashed":true}]}
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
{"ariaLabel":"The line y = f(x) = x + 1 with an open circle at (7, 8). Dashed guide lines run from 7 on the x-axis and from 8 on the y-axis to the open circle, illustrating that the output approaches 8 as the input approaches 7 from either side.","xMin":-2,"xMax":9,"yMin":-2,"yMax":10,"unit":26,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":1,"intercept":1,"label":"y = f(x)"}],"points":[{"at":[7,8],"open":true,"label":"(7, 8)"}],"guides":[[7,8]]}
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
{"ariaLabel":"A curve labeled f rising from the lower left to a peak and falling to the lower right, with arrows showing it continues beyond both ends. An open circle labeled (a, L) sits at the peak; a dashed horizontal line labeled y = L touches the curve there, and a dashed vertical segment drops from the open circle to the point labeled a on the x-axis.","xMin":-3,"xMax":5,"yMin":-2,"yMax":6,"grid":false,"tickLabels":false,"quadratics":[{"a":-0.4,"b":0.8,"c":2.6,"arrows":true}],"lines":[{"y":3,"dashed":true,"label":"y = L"}],"points":[{"at":[1,3],"open":true,"label":"(a, L)"}],"texts":[{"at":[3.6,1.4],"text":"f"},{"at":[1,-0.6],"text":"a"}],"segments":[{"from":[1,0],"to":[1,3],"dashed":true}]}
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
{"ariaLabel":"A parabola opening upward through the origin, drawn for x less than 2 and ending in an open circle at (2, 8); a line falling to the right starts at a filled point at (2, 3) and continues down past (6, \u22121) with an arrow.","xMin":-4,"xMax":6,"yMin":-2,"yMax":10,"unit":28,"quadratics":[{"a":2,"from":-4,"to":2,"arrows":"start"}],"segments":[{"from":[2,3],"to":[6,-1],"arrows":"end"}],"points":[{"at":[2,8],"open":true},{"at":[2,3]}],"tickLabels":true}
{{< /apfigure >}}

Then determine the same four quantities for the function $f$ shown in the second graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward through the origin, drawn for x less than 2 and ending in an open circle at (2, 8); a line falling to the right starts from that same open circle and continues down past (6, 4) with an arrow; a separate filled point sits at (2, 4).","xMin":-4,"xMax":6,"yMin":-2,"yMax":10,"unit":28,"quadratics":[{"a":2,"from":-4,"to":2,"arrows":"start"}],"segments":[{"from":[2,8],"to":[6,4],"arrows":"end"}],"points":[{"at":[2,8],"open":true},{"at":[2,4]}],"tickLabels":true}
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

Using the graph of $y=f(x)$ shown below, estimate the following limits.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A piecewise graph: a branch for x less than 0 dips to a low point and rises to an open circle at (0, 0); a curve from a filled point at (0, 2) falls to a filled point at (2, \u22122); a third branch is a straight line starting at an open circle at (2, 0), rising through an open circle at (4, 4), and continuing upward with an arrow.","xMin":-6,"xMax":6,"yMin":-3,"yMax":5,"unit":32,"tickLabels":true,"quadratics":[{"a":0.42,"b":1.092,"from":-4,"to":0,"arrows":"start"},{"a":-1,"c":2,"from":0,"to":2,"arrows":false}],"segments":[{"from":[2,0],"to":[4.5,5],"arrows":"end"}],"points":[{"at":[0,0],"open":true},{"at":[0,2]},{"at":[2,-2]},{"at":[2,0],"open":true},{"at":[4,4],"open":true}]}
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
  hint="Read the height the graph approaches as $x$ nears $4$ from the left, then from the right, and compare the two."
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
  hint="In radian mode, evaluate $\tfrac{20\sin(x)}{4x}$ at inputs such as $\pm0.1,$ $\pm0.01,$ and $\pm0.001,$ and see what value the outputs approach from both sides."
>}}

{{< callout type="info" >}}
  **Q&A.** *Is it possible to check our answer using a graphing utility?*

  Yes. We previously used a table to find a limit of $75$ for the function $f(x)=\tfrac{x^3-125}{x-5}$ as $x$ approaches $5.$ To check, we graph the function on a viewing window as shown below. A graphical check shows both branches of the graph of the function get close to the output $75$ as $x$ nears $5.$ Furthermore, we can use the "trace" feature of a graphing calculator. By approaching $x=5$ we may numerically observe the corresponding outputs getting close to $75.$
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-curving graph with an open circle at (5, 75). Dashed guide lines run from 5 on the x-axis and from 75 on the y-axis to the open circle, illustrating that the output approaches 75 as the input approaches 5 from either side.","xMin":-3,"xMax":7,"yMin":-10,"yMax":105,"unit":26,"yUnit":2.35,"tickLabels":true,"xTickStep":2,"yTickStep":25,"yTickOffset":12,"quadratics":[{"a":1,"b":5,"c":25,"from":-3,"to":7,"arrows":true}],"points":[{"at":[5,75],"open":true}],"guides":[[5,75]]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Is one method for determining a limit better than the other?*

  No. Both methods have advantages. Graphing allows for quick inspection. Tables can be used when graphical utilities aren't available, and they can be calculated to a higher precision than could be seen with an unaided eye inspecting a graph.
{{< /callout >}}

**Example.** With the use of a graphing utility, if possible, determine the left- and right-hand limits of the following function as $x$ approaches $0.$ If the function has a limit as $x$ approaches $0,$ state it. If not, discuss why there is no limit.

$$f(x)=3\sin\left(\tfrac{\pi}{x}\right)$$

**Solution.** We can use a graphing utility to investigate the behavior of the graph close to $x=0.$ Centering around $x=0,$ we choose two viewing windows such that the second one is zoomed in closer to $x=0$ than the first one. The result would resemble the graph below for $[-2,2]$ by $[-3,3].$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of 3 sine of pi over x on the window from \u22122 to 2 by \u22123 to 3: the curve oscillates between \u22123 and 3, packed into a dense band near x = 0 and spreading into individually visible waves farther out.","xMin":-2,"xMax":2,"yMin":-3,"yMax":3,"unit":55,"tickLabels":true,"xTickStep":2,"yTickStep":1,"polylines":[{"through":[[-2,-3],[-1.98,-3],[-1.96,-2.998],[-1.94,-2.996],[-1.92,-2.994],[-1.9,-2.99],[-1.88,-2.985],[-1.86,-2.979],[-1.84,-2.972],[-1.82,-2.964],[-1.8,-2.954],[-1.78,-2.944],[-1.76,-2.931],[-1.74,-2.918],[-1.72,-2.902],[-1.7,-2.885],[-1.68,-2.867],[-1.66,-2.846],[-1.64,-2.823],[-1.62,-2.799],[-1.6,-2.772],[-1.58,-2.742],[-1.56,-2.71],[-1.54,-2.676],[-1.52,-2.638],[-1.5,-2.598],[-1.48,-2.555],[-1.46,-2.508],[-1.44,-2.457],[-1.42,-2.403],[-1.4,-2.345],[-1.38,-2.283],[-1.36,-2.217],[-1.34,-2.146],[-1.32,-2.07],[-1.3,-1.989],[-1.28,-1.903],[-1.26,-1.811],[-1.24,-1.714],[-1.22,-1.61],[-1.2,-1.5],[-1.18,-1.383],[-1.16,-1.26],[-1.14,-1.129],[-1.12,-0.991],[-1.1,-0.845],[-1.08,-0.692],[-1.06,-0.531],[-1.04,-0.362],[-1.02,-0.185],[-1,0],[-0.98,0.192],[-0.96,0.392],[-0.94,0.598],[-0.92,0.809],[-0.9,1.026],[-0.88,1.246],[-0.86,1.468],[-0.84,1.69],[-0.82,1.909],[-0.8,2.121],[-0.78,2.324],[-0.76,2.511],[-0.74,2.679],[-0.72,2.819],[-0.7,2.925],[-0.68,2.987],[-0.66,2.997],[-0.64,2.942],[-0.62,2.813],[-0.6008,2.608],[-0.5827,2.335],[-0.5658,2.002],[-0.5498,1.617],[-0.5346,1.187],[-0.5203,0.728],[-0.5068,0.253],[-0.494,-0.229],[-0.4818,-0.705],[-0.4702,-1.163],[-0.4591,-1.593],[-0.4486,-1.978],[-0.4385,-2.315],[-0.4289,-2.59],[-0.4197,-2.798],[-0.4109,-2.935],[-0.4024,-2.997],[-0.3943,-2.981],[-0.3866,-2.89],[-0.3791,-2.723],[-0.3719,-2.487],[-0.365,-2.189],[-0.3583,-1.832],[-0.3519,-1.431],[-0.3457,-0.992],[-0.3398,-0.535],[-0.334,-0.056],[-0.3284,0.423],[-0.323,0.891],[-0.3178,1.334],[-0.3127,1.748],[-0.3079,2.107],[-0.3031,2.423],[-0.2985,2.673],[-0.2941,2.854],[-0.2897,2.966],[-0.2855,3],[-0.2815,2.959],[-0.2775,2.842],[-0.2737,2.657],[-0.2699,2.399],[-0.2663,2.087],[-0.2627,1.712],[-0.2593,1.307],[-0.2559,0.857],[-0.2526,0.387],[-0.2494,-0.091],[-0.2463,-0.563],[-0.2433,-1.018],[-0.2403,-1.457],[-0.2375,-1.843],[-0.2346,-2.203],[-0.2319,-2.493],[-0.2292,-2.726],[-0.2266,-2.889],[-0.224,-2.981],[-0.2215,-2.997],[-0.219,-2.935],[-0.2166,-2.8],[-0.2143,-2.6],[-0.212,-2.33],[-0.2097,-1.993],[-0.2075,-1.613],[-0.2054,-1.204],[-0.2033,-0.757],[-0.2012,-0.281],[-0.1992,0.189],[-0.1972,0.664],[-0.1953,1.107],[-0.1934,1.532],[-0.1915,1.926],[-0.1897,2.26],[-0.1879,2.543],[-0.1861,2.766],[-0.1844,2.913],[-0.1827,2.99],[-0.181,2.991],[-0.1794,2.919],[-0.1777,2.763],[-0.1762,2.556],[-0.1746,2.267],[-0.1731,1.934],[-0.1716,1.547],[-0.1701,1.114],[-0.1687,0.676],[-0.1673,0.214],[-0.1659,-0.261],[-0.1645,-0.737],[-0.1631,-1.202],[-0.1618,-1.611],[-0.1605,-1.988],[-0.1592,-2.32],[-0.1579,-2.597],[-0.1567,-2.795],[-0.1555,-2.93],[-0.1542,-2.997],[-0.1531,-2.985],[-0.1519,-2.898],[-0.1507,-2.731],[-0.1496,-2.51],[-0.1485,-2.225],[-0.1474,-1.881],[-0.1463,-1.484],[-0.1452,-1.042],[-0.1442,-0.61],[-0.1431,-0.112],[-0.1421,0.351],[-0.1411,0.811],[-0.1401,1.258],[-0.1391,1.679],[-0.1381,2.061],[-0.1372,2.363],[-0.1363,2.614],[-0.1353,2.826],[-0.1344,2.948],[-0.1335,2.999],[-0.1326,2.975],[-0.1317,2.873],[-0.1309,2.717],[-0.13,2.469],[-0.1292,2.187],[-0.1283,1.807],[-0.1275,1.419],[-0.1267,0.993],[-0.1259,0.536],[-0.1251,0.06],[-0.1243,-0.423],[-0.1235,-0.902],[-0.1228,-1.306],[-0.122,-1.738],[-0.1213,-2.081],[-0.1205,-2.42],[-0.1198,-2.661],[-0.1191,-2.842],[-0.1184,-2.957],[-0.1177,-3],[-0.11764706,-3],[-0.08695652,3],[-0.06896552,-3],[-0.05128205,3],[-0.03278689,-3],[-0.01438849,3]]},{"through":[[0.01438849,-3],[0.03278689,3],[0.05128205,-3],[0.06896552,3],[0.08695652,-3],[0.11764706,3],[0.1177,3],[0.1184,2.957],[0.1191,2.842],[0.1198,2.661],[0.1205,2.42],[0.1213,2.081],[0.122,1.738],[0.1228,1.306],[0.1235,0.902],[0.1243,0.423],[0.1251,-0.06],[0.1259,-0.536],[0.1267,-0.993],[0.1275,-1.419],[0.1283,-1.807],[0.1292,-2.187],[0.13,-2.469],[0.1309,-2.717],[0.1317,-2.873],[0.1326,-2.975],[0.1335,-2.999],[0.1344,-2.948],[0.1353,-2.826],[0.1363,-2.614],[0.1372,-2.363],[0.1381,-2.061],[0.1391,-1.679],[0.1401,-1.258],[0.1411,-0.811],[0.1421,-0.351],[0.1431,0.112],[0.1442,0.61],[0.1452,1.042],[0.1463,1.484],[0.1474,1.881],[0.1485,2.225],[0.1496,2.51],[0.1507,2.731],[0.1519,2.898],[0.1531,2.985],[0.1542,2.997],[0.1555,2.93],[0.1567,2.795],[0.1579,2.597],[0.1592,2.32],[0.1605,1.988],[0.1618,1.611],[0.1631,1.202],[0.1645,0.737],[0.1659,0.261],[0.1673,-0.214],[0.1687,-0.676],[0.1701,-1.114],[0.1716,-1.547],[0.1731,-1.934],[0.1746,-2.267],[0.1762,-2.556],[0.1777,-2.763],[0.1794,-2.919],[0.181,-2.991],[0.1827,-2.99],[0.1844,-2.913],[0.1861,-2.766],[0.1879,-2.543],[0.1897,-2.26],[0.1915,-1.926],[0.1934,-1.532],[0.1953,-1.107],[0.1972,-0.664],[0.1992,-0.189],[0.2012,0.281],[0.2033,0.757],[0.2054,1.204],[0.2075,1.613],[0.2097,1.993],[0.212,2.33],[0.2143,2.6],[0.2166,2.8],[0.219,2.935],[0.2215,2.997],[0.224,2.981],[0.2266,2.889],[0.2292,2.726],[0.2319,2.493],[0.2346,2.203],[0.2375,1.843],[0.2403,1.457],[0.2433,1.018],[0.2463,0.563],[0.2494,0.091],[0.2526,-0.387],[0.2559,-0.857],[0.2593,-1.307],[0.2627,-1.712],[0.2663,-2.087],[0.2699,-2.399],[0.2737,-2.657],[0.2775,-2.842],[0.2815,-2.959],[0.2855,-3],[0.2897,-2.966],[0.2941,-2.854],[0.2985,-2.673],[0.3031,-2.423],[0.3079,-2.107],[0.3127,-1.748],[0.3178,-1.334],[0.323,-0.891],[0.3284,-0.423],[0.334,0.056],[0.3398,0.535],[0.3457,0.992],[0.3519,1.431],[0.3583,1.832],[0.365,2.189],[0.3719,2.487],[0.3791,2.723],[0.3866,2.89],[0.3943,2.981],[0.4024,2.997],[0.4109,2.935],[0.4197,2.798],[0.4289,2.59],[0.4385,2.315],[0.4486,1.978],[0.4591,1.593],[0.4702,1.163],[0.4818,0.705],[0.494,0.229],[0.5068,-0.253],[0.5203,-0.728],[0.5346,-1.187],[0.5498,-1.617],[0.5658,-2.002],[0.5827,-2.335],[0.6008,-2.608],[0.62,-2.813],[0.64,-2.942],[0.66,-2.997],[0.68,-2.987],[0.7,-2.925],[0.72,-2.819],[0.74,-2.679],[0.76,-2.511],[0.78,-2.324],[0.8,-2.121],[0.82,-1.909],[0.84,-1.69],[0.86,-1.468],[0.88,-1.246],[0.9,-1.026],[0.92,-0.809],[0.94,-0.598],[0.96,-0.392],[0.98,-0.192],[1,0],[1.02,0.185],[1.04,0.362],[1.06,0.531],[1.08,0.692],[1.1,0.845],[1.12,0.991],[1.14,1.129],[1.16,1.26],[1.18,1.383],[1.2,1.5],[1.22,1.61],[1.24,1.714],[1.26,1.811],[1.28,1.903],[1.3,1.989],[1.32,2.07],[1.34,2.146],[1.36,2.217],[1.38,2.283],[1.4,2.345],[1.42,2.403],[1.44,2.457],[1.46,2.508],[1.48,2.555],[1.5,2.598],[1.52,2.638],[1.54,2.676],[1.56,2.71],[1.58,2.742],[1.6,2.772],[1.62,2.799],[1.64,2.823],[1.66,2.846],[1.68,2.867],[1.7,2.885],[1.72,2.902],[1.74,2.918],[1.76,2.931],[1.78,2.944],[1.8,2.954],[1.82,2.964],[1.84,2.972],[1.86,2.979],[1.88,2.985],[1.9,2.99],[1.92,2.994],[1.94,2.996],[1.96,2.998],[1.98,3],[2,3]]}],"yTickOffset":27}
{{< /apfigure >}}

The result would resemble the graph below for $[-0.1,0.1]$ by $[-3,3].$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of 3 sine of pi over x zoomed in to the window from \u22120.1 to 0.1 by \u22123 to 3: the curve still oscillates between \u22123 and 3 across the whole window, packed even more densely than the wider view.","xMin":-0.1,"xMax":0.1,"yMin":-3,"yMax":3,"xUnit":1400,"yUnit":43,"tickLabels":true,"xTickStep":0.05,"yTickStep":1,"polylines":[{"through":[[-0.1,0],[-0.0995,-0.472],[-0.099,-0.936],[-0.09851,-1.372],[-0.09803,-1.771],[-0.09755,-2.129],[-0.09707,-2.437],[-0.0966,-2.681],[-0.09614,-2.858],[-0.09567,-2.967],[-0.09522,-3],[-0.09476,-2.959],[-0.09431,-2.843],[-0.09387,-2.66],[-0.09343,-2.409],[-0.09299,-2.096],[-0.09256,-1.734],[-0.09213,-1.326],[-0.09171,-0.892],[-0.09129,-0.431],[-0.09087,0.045],[-0.09046,0.512],[-0.09005,0.971],[-0.08964,1.41],[-0.08924,1.807],[-0.08884,2.162],[-0.08845,2.459],[-0.08806,2.698],[-0.08767,2.871],[-0.08728,2.973],[-0.0869,2.999],[-0.08653,2.953],[-0.08615,2.83],[-0.08578,2.639],[-0.08541,2.381],[-0.08505,2.069],[-0.08469,1.704],[-0.08433,1.293],[-0.08397,0.846],[-0.08362,0.387],[-0.08327,-0.086],[-0.08292,-0.56],[-0.08258,-1.012],[-0.08224,-1.441],[-0.0819,-1.839],[-0.08156,-2.193],[-0.08123,-2.485],[-0.0809,-2.718],[-0.08057,-2.885],[-0.08025,-2.978],[-0.07993,-2.998],[-0.07961,-2.945],[-0.07929,-2.816],[-0.07898,-2.622],[-0.07867,-2.363],[-0.07836,-2.043],[-0.07805,-1.668],[-0.07774,-1.248],[-0.07744,-0.808],[-0.07714,-0.344],[-0.07685,0.116],[-0.07655,0.593],[-0.07626,1.043],[-0.07597,1.471],[-0.07568,1.865],[-0.07539,2.215],[-0.07511,2.501],[-0.07482,2.736],[-0.07454,2.895],[-0.07427,2.981],[-0.07399,2.997],[-0.07372,2.938],[-0.07345,2.807],[-0.07318,2.606],[-0.07291,2.338],[-0.07264,2.008],[-0.07238,1.639],[-0.07212,1.228],[-0.07186,0.783],[-0.0716,0.315],[-0.07134,-0.164],[-0.07109,-0.624],[-0.07084,-1.072],[-0.07058,-1.513],[-0.07034,-1.888],[-0.07009,-2.234],[-0.06984,-2.525],[-0.0696,-2.745],[-0.06936,-2.9],[-0.06912,-2.984],[-0.06888,-2.995],[-0.06864,-2.93],[-0.0684,-2.79],[-0.06817,-2.586],[-0.06794,-2.318],[-0.06771,-1.992],[-0.06748,-1.614],[-0.06725,-1.192],[-0.06702,-0.738],[-0.0668,-0.282],[-0.06658,0.184],[-0.06635,0.669],[-0.06613,1.12],[-0.06592,1.526],[-0.0657,1.917],[-0.06548,2.262],[-0.06527,2.538],[-0.06506,2.755],[-0.06484,2.912],[-0.06463,2.989],[-0.06442,2.992],[-0.06422,2.925],[-0.06401,2.78],[-0.06381,2.575],[-0.0636,2.292],[-0.0634,1.964],[-0.0632,1.585],[-0.063,1.165],[-0.0628,0.713],[-0.0626,0.241],[-0.06241,-0.217],[-0.06221,-0.697],[-0.06202,-1.138],[-0.06183,-1.554],[-0.06164,-1.936],[-0.06145,-2.271],[-0.06126,-2.552],[-0.06107,-2.77],[-0.06088,-2.919],[-0.0607,-2.99],[-0.06051,-2.99],[-0.06033,-2.916],[-0.06015,-2.771],[-0.05997,-2.558],[-0.05979,-2.28],[-0.05961,-1.943],[-0.05943,-1.555],[-0.05925,-1.125],[-0.05908,-0.689],[-0.0589,-0.208],[-0.05873,0.255],[-0.05856,0.714],[-0.05839,1.159],[-0.05822,1.577],[-0.05805,1.959],[-0.05788,2.294],[-0.05771,2.573],[-0.05755,2.776],[-0.05738,2.923],[-0.05721,2.994],[-0.05705,2.988],[-0.05689,2.911],[-0.05673,2.763],[-0.05657,2.547],[-0.05641,2.267],[-0.05625,1.928],[-0.05609,1.539],[-0.05593,1.109],[-0.05577,0.647],[-0.05562,0.196],[-0.05546,-0.292],[-0.05531,-0.745],[-0.05516,-1.183],[-0.05501,-1.596],[-0.05485,-1.995],[-0.0547,-2.321],[-0.05455,-2.591],[-0.05441,-2.786],[-0.05426,-2.927],[-0.05411,-2.995],[-0.05396,-2.985],[-0.05382,-2.905],[-0.05367,-2.744],[-0.05353,-2.527],[-0.05339,-2.25],[-0.05324,-1.891],[-0.0531,-1.508],[-0.05296,-1.085],[-0.05282,-0.634],[-0.05268,-0.165],[-0.05254,0.312],[-0.0524,0.782],[-0.05227,1.204],[-0.05213,1.63],[-0.05199,2.015],[-0.05186,2.328],[-0.05172,2.605],[-0.05159,2.802],[-0.05146,2.933],[-0.05133,2.995],[-0.05119,2.982],[-0.05106,2.894],[-0.05093,2.735],[-0.0508,2.507],[-0.05067,2.215],[-0.05055,1.895],[-0.05042,1.499],[-0.05029,1.063],[-0.05016,0.597],[-0.05004,0.151],[-0.04991,-0.339],[-0.04979,-0.786],[-0.04966,-1.251],[-0.04954,-1.653],[-0.04942,-2.017],[-0.0493,-2.335],[-0.04917,-2.618],[-0.04905,-2.814],[-0.04893,-2.942],[-0.04881,-2.998],[-0.04869,-2.979],[-0.04858,-2.895],[-0.04846,-2.732],[-0.04834,-2.498],[-0.04822,-2.198],[-0.04811,-1.871],[-0.04799,-1.464],[-0.04788,-1.056],[-0.04776,-0.58],[-0.04765,-0.129],[-0.04753,0.37],[-0.04742,0.82],[-0.04731,1.253],[-0.0472,1.658],[-0.04709,2.026],[-0.04698,2.345],[-0.04686,2.63],[-0.04676,2.809],[-0.04665,2.94],[-0.04654,2.997],[-0.04643,2.979],[-0.04632,2.884],[-0.04621,2.713],[-0.04611,2.496],[-0.046,2.193],[-0.04589,1.829],[-0.04579,1.455],[-0.04568,1.004],[-0.04558,0.567],[-0.04548,0.116],[-0.04537,-0.385],[-0.04527,-0.834],[-0.04517,-1.265],[-0.04507,-1.668],[-0.04496,-2.067],[-0.04486,-2.38],[-0.04476,-2.635],[-0.04466,-2.827],[-0.04456,-2.95],[-0.04446,-2.999],[-0.04436,-2.973],[-0.04427,-2.884],[-0.04417,-2.715],[-0.04407,-2.475],[-0.04397,-2.169],[-0.04388,-1.843],[-0.04378,-1.433],[-0.04368,-0.983],[-0.04359,-0.552],[-0.04349,-0.059],[-0.0434,0.39],[-0.04331,0.831],[-0.04321,1.301],[-0.04312,1.695],[-0.04303,2.051],[-0.04293,2.392],[-0.04284,2.641],[-0.04275,2.828],[-0.04266,2.949],[-0.04257,2.999],[-0.04248,2.976],[-0.04239,2.88],[-0.0423,2.712],[-0.04221,2.476],[-0.04212,2.176],[-0.04203,1.82],[-0.04194,1.416],[-0.04185,0.973],[-0.04176,0.503],[-0.04168,0.072],[-0.04159,-0.416],[-0.0415,-0.895],[-0.04142,-1.302],[-0.04133,-1.729],[-0.04125,-2.07],[-0.04116,-2.401],[-0.04108,-2.641],[-0.04099,-2.842],[-0.04091,-2.954],[-0.04082,-3],[-0.04074,-2.969],[-0.04066,-2.87],[-0.04058,-2.704],[-0.04049,-2.441],[-0.04041,-2.146],[-0.04033,-1.798],[-0.04025,-1.406],[-0.04017,-0.979],[-0.04009,-0.526],[-0.04001,-0.059],[-0.03993,0.412],[-0.03985,0.874],[-0.03977,1.316],[-0.03969,1.727],[-0.03961,2.096],[-0.03953,2.412],[-0.03945,2.667],[-0.03938,2.834],[-0.0393,2.956],[-0.03922,3],[-0.03914,2.964],[-0.03907,2.867],[-0.03899,2.683],[-0.03891,2.425],[-0.03884,2.144],[-0.03876,1.765],[-0.03869,1.392],[-0.03861,0.927],[-0.03854,0.497],[-0.03846,-0.01],[-0.03839,-0.455],[-0.03832,-0.891],[-0.03824,-1.367],[-0.03817,-1.753],[-0.0381,-2.099],[-0.03803,-2.399],[-0.03795,-2.675],[-0.03788,-2.851],[-0.03781,-2.96],[-0.03774,-3],[-0.03767,-2.968],[-0.0376,-2.865],[-0.03752,-2.662],[-0.03745,-2.414],[-0.03738,-2.106],[-0.03731,-1.745],[-0.03724,-1.338],[-0.03718,-0.961],[-0.03711,-0.498],[-0.03704,-0.02],[-0.03697,0.46],[-0.0369,0.929],[-0.03683,1.377],[-0.03676,1.79],[-0.0367,2.108],[-0.03663,2.427],[-0.03656,2.683],[-0.0365,2.845],[-0.03643,2.963],[-0.03636,3],[-0.0363,2.966],[-0.03623,2.849],[-0.03617,2.685],[-0.0361,2.422],[-0.03603,2.09],[-0.03597,1.756],[-0.0359,1.319],[-0.03584,0.911],[-0.03578,0.483],[-0.03571,-0.032],[-0.03565,-0.474],[-0.03558,-0.978],[-0.03552,-1.388],[-0.03546,-1.769],[-0.0354,-2.112],[-0.03533,-2.452],[-0.03527,-2.685],[-0.03521,-2.856],[-0.03515,-2.962],[-0.03508,-2.999],[-0.03502,-2.955],[-0.03496,-2.841],[-0.0349,-2.659],[-0.03484,-2.412],[-0.03478,-2.107],[-0.03472,-1.749],[-0.03466,-1.348],[-0.0346,-0.911],[-0.03454,-0.451],[-0.03448,0.022],[-0.03442,0.496],[-0.03436,0.959],[-0.0343,1.4],[-0.03424,1.806],[-0.03418,2.167],[-0.03413,2.426],[-0.03407,2.679],[-0.03401,2.862],[-0.03395,2.97],[-0.03389,2.999],[-0.03384,2.962],[-0.03378,2.843],[-0.03372,2.647],[-0.03366,2.377],[-0.03361,2.101],[-0.03355,1.715],[-0.0335,1.356],[-0.03344,0.888],[-0.03338,0.394],[-0.03333,-0.028],[-0.03327,-0.535],[-0.03322,-0.948],[-0.03316,-1.419],[-0.03311,-1.781],[-0.03305,-2.169],[-0.033,-2.444],[-0.03294,-2.707],[-0.03289,-2.866],[-0.03283,-2.976],[-0.032786885,-3],[-0.031746032,3],[-0.030769231,-3],[-0.029850746,3],[-0.028985507,-3],[-0.028169014,3],[-0.02739726,-3],[-0.026666667,3],[-0.025974026,-3],[-0.025316456,3],[-0.024691358,-3],[-0.024096386,3],[-0.023529412,-3],[-0.022988506,3],[-0.02247191,-3],[-0.021978022,3],[-0.020618557,-3],[-0.019417476,3],[-0.018348624,-3],[-0.017391304,3],[-0.016528926,-3],[-0.015748031,3],[-0.015037594,-3],[-0.014388489,3],[-0.013422819,-3],[-0.012578616,3],[-0.01183432,-3],[-0.011173184,3],[-0.010362694,-3],[-0.009661836,3],[-0.008888889,-3],[-0.008097166,3],[-0.007326007,-3],[-0.00660066,3],[-0.005865103,-3],[-0.00511509,3],[-0.004376368,-3],[-0.003656307,3],[-0.002936858,-3],[-0.002224694,3],[-0.001509434,-3],[-0.000795229,3],[-0.000080942,-2.99]]},{"through":[[0.000080942,2.99],[0.000795229,-3],[0.001509434,3],[0.002224694,-3],[0.002936858,3],[0.003656307,-3],[0.004376368,3],[0.00511509,-3],[0.005865103,3],[0.00660066,-3],[0.007326007,3],[0.008097166,-3],[0.008888889,3],[0.009661836,-3],[0.010362694,3],[0.011173184,-3],[0.01183432,3],[0.012578616,-3],[0.013422819,3],[0.014388489,-3],[0.015037594,3],[0.015748031,-3],[0.016528926,3],[0.017391304,-3],[0.018348624,3],[0.019417476,-3],[0.020618557,3],[0.021978022,-3],[0.02247191,3],[0.022988506,-3],[0.023529412,3],[0.024096386,-3],[0.024691358,3],[0.025316456,-3],[0.025974026,3],[0.026666667,-3],[0.02739726,3],[0.028169014,-3],[0.028985507,3],[0.029850746,-3],[0.030769231,3],[0.031746032,-3],[0.032786885,3],[0.03283,2.976],[0.03289,2.866],[0.03294,2.707],[0.033,2.444],[0.03305,2.169],[0.03311,1.781],[0.03316,1.419],[0.03322,0.948],[0.03327,0.535],[0.03333,0.028],[0.03338,-0.394],[0.03344,-0.888],[0.0335,-1.356],[0.03355,-1.715],[0.03361,-2.101],[0.03366,-2.377],[0.03372,-2.647],[0.03378,-2.843],[0.03384,-2.962],[0.03389,-2.999],[0.03395,-2.97],[0.03401,-2.862],[0.03407,-2.679],[0.03413,-2.426],[0.03418,-2.167],[0.03424,-1.806],[0.0343,-1.4],[0.03436,-0.959],[0.03442,-0.496],[0.03448,-0.022],[0.03454,0.451],[0.0346,0.911],[0.03466,1.348],[0.03472,1.749],[0.03478,2.107],[0.03484,2.412],[0.0349,2.659],[0.03496,2.841],[0.03502,2.955],[0.03508,2.999],[0.03515,2.962],[0.03521,2.856],[0.03527,2.685],[0.03533,2.452],[0.0354,2.112],[0.03546,1.769],[0.03552,1.388],[0.03558,0.978],[0.03565,0.474],[0.03571,0.032],[0.03578,-0.483],[0.03584,-0.911],[0.0359,-1.319],[0.03597,-1.756],[0.03603,-2.09],[0.0361,-2.422],[0.03617,-2.685],[0.03623,-2.849],[0.0363,-2.966],[0.03636,-3],[0.03643,-2.963],[0.0365,-2.845],[0.03656,-2.683],[0.03663,-2.427],[0.0367,-2.108],[0.03676,-1.79],[0.03683,-1.377],[0.0369,-0.929],[0.03697,-0.46],[0.03704,0.02],[0.03711,0.498],[0.03718,0.961],[0.03724,1.338],[0.03731,1.745],[0.03738,2.106],[0.03745,2.414],[0.03752,2.662],[0.0376,2.865],[0.03767,2.968],[0.03774,3],[0.03781,2.96],[0.03788,2.851],[0.03795,2.675],[0.03803,2.399],[0.0381,2.099],[0.03817,1.753],[0.03824,1.367],[0.03832,0.891],[0.03839,0.455],[0.03846,0.01],[0.03854,-0.497],[0.03861,-0.927],[0.03869,-1.392],[0.03876,-1.765],[0.03884,-2.144],[0.03891,-2.425],[0.03899,-2.683],[0.03907,-2.867],[0.03914,-2.964],[0.03922,-3],[0.0393,-2.956],[0.03938,-2.834],[0.03945,-2.667],[0.03953,-2.412],[0.03961,-2.096],[0.03969,-1.727],[0.03977,-1.316],[0.03985,-0.874],[0.03993,-0.412],[0.04001,0.059],[0.04009,0.526],[0.04017,0.979],[0.04025,1.406],[0.04033,1.798],[0.04041,2.146],[0.04049,2.441],[0.04058,2.704],[0.04066,2.87],[0.04074,2.969],[0.04082,3],[0.04091,2.954],[0.04099,2.842],[0.04108,2.641],[0.04116,2.401],[0.04125,2.07],[0.04133,1.729],[0.04142,1.302],[0.0415,0.895],[0.04159,0.416],[0.04168,-0.072],[0.04176,-0.503],[0.04185,-0.973],[0.04194,-1.416],[0.04203,-1.82],[0.04212,-2.176],[0.04221,-2.476],[0.0423,-2.712],[0.04239,-2.88],[0.04248,-2.976],[0.04257,-2.999],[0.04266,-2.949],[0.04275,-2.828],[0.04284,-2.641],[0.04293,-2.392],[0.04303,-2.051],[0.04312,-1.695],[0.04321,-1.301],[0.04331,-0.831],[0.0434,-0.39],[0.04349,0.059],[0.04359,0.552],[0.04368,0.983],[0.04378,1.433],[0.04388,1.843],[0.04397,2.169],[0.04407,2.475],[0.04417,2.715],[0.04427,2.884],[0.04436,2.973],[0.04446,2.999],[0.04456,2.95],[0.04466,2.827],[0.04476,2.635],[0.04486,2.38],[0.04496,2.067],[0.04507,1.668],[0.04517,1.265],[0.04527,0.834],[0.04537,0.385],[0.04548,-0.116],[0.04558,-0.567],[0.04568,-1.004],[0.04579,-1.455],[0.04589,-1.829],[0.046,-2.193],[0.04611,-2.496],[0.04621,-2.713],[0.04632,-2.884],[0.04643,-2.979],[0.04654,-2.997],[0.04665,-2.94],[0.04676,-2.809],[0.04686,-2.63],[0.04698,-2.345],[0.04709,-2.026],[0.0472,-1.658],[0.04731,-1.253],[0.04742,-0.82],[0.04753,-0.37],[0.04765,0.129],[0.04776,0.58],[0.04788,1.056],[0.04799,1.464],[0.04811,1.871],[0.04822,2.198],[0.04834,2.498],[0.04846,2.732],[0.04858,2.895],[0.04869,2.979],[0.04881,2.998],[0.04893,2.942],[0.04905,2.814],[0.04917,2.618],[0.0493,2.335],[0.04942,2.017],[0.04954,1.653],[0.04966,1.251],[0.04979,0.786],[0.04991,0.339],[0.05004,-0.151],[0.05016,-0.597],[0.05029,-1.063],[0.05042,-1.499],[0.05055,-1.895],[0.05067,-2.215],[0.0508,-2.507],[0.05093,-2.735],[0.05106,-2.894],[0.05119,-2.982],[0.05133,-2.995],[0.05146,-2.933],[0.05159,-2.802],[0.05172,-2.605],[0.05186,-2.328],[0.05199,-2.015],[0.05213,-1.63],[0.05227,-1.204],[0.0524,-0.782],[0.05254,-0.312],[0.05268,0.165],[0.05282,0.634],[0.05296,1.085],[0.0531,1.508],[0.05324,1.891],[0.05339,2.25],[0.05353,2.527],[0.05367,2.744],[0.05382,2.905],[0.05396,2.985],[0.05411,2.995],[0.05426,2.927],[0.05441,2.786],[0.05455,2.591],[0.0547,2.321],[0.05485,1.995],[0.05501,1.596],[0.05516,1.183],[0.05531,0.745],[0.05546,0.292],[0.05562,-0.196],[0.05577,-0.647],[0.05593,-1.109],[0.05609,-1.539],[0.05625,-1.928],[0.05641,-2.267],[0.05657,-2.547],[0.05673,-2.763],[0.05689,-2.911],[0.05705,-2.988],[0.05721,-2.994],[0.05738,-2.923],[0.05755,-2.776],[0.05771,-2.573],[0.05788,-2.294],[0.05805,-1.959],[0.05822,-1.577],[0.05839,-1.159],[0.05856,-0.714],[0.05873,-0.255],[0.0589,0.208],[0.05908,0.689],[0.05925,1.125],[0.05943,1.555],[0.05961,1.943],[0.05979,2.28],[0.05997,2.558],[0.06015,2.771],[0.06033,2.916],[0.06051,2.99],[0.0607,2.99],[0.06088,2.919],[0.06107,2.77],[0.06126,2.552],[0.06145,2.271],[0.06164,1.936],[0.06183,1.554],[0.06202,1.138],[0.06221,0.697],[0.06241,0.217],[0.0626,-0.241],[0.0628,-0.713],[0.063,-1.165],[0.0632,-1.585],[0.0634,-1.964],[0.0636,-2.292],[0.06381,-2.575],[0.06401,-2.78],[0.06422,-2.925],[0.06442,-2.992],[0.06463,-2.989],[0.06484,-2.912],[0.06506,-2.755],[0.06527,-2.538],[0.06548,-2.262],[0.0657,-1.917],[0.06592,-1.526],[0.06613,-1.12],[0.06635,-0.669],[0.06658,-0.184],[0.0668,0.282],[0.06702,0.738],[0.06725,1.192],[0.06748,1.614],[0.06771,1.992],[0.06794,2.318],[0.06817,2.586],[0.0684,2.79],[0.06864,2.93],[0.06888,2.995],[0.06912,2.984],[0.06936,2.9],[0.0696,2.745],[0.06984,2.525],[0.07009,2.234],[0.07034,1.888],[0.07058,1.513],[0.07084,1.072],[0.07109,0.624],[0.07134,0.164],[0.0716,-0.315],[0.07186,-0.783],[0.07212,-1.228],[0.07238,-1.639],[0.07264,-2.008],[0.07291,-2.338],[0.07318,-2.606],[0.07345,-2.807],[0.07372,-2.938],[0.07399,-2.997],[0.07427,-2.981],[0.07454,-2.895],[0.07482,-2.736],[0.07511,-2.501],[0.07539,-2.215],[0.07568,-1.865],[0.07597,-1.471],[0.07626,-1.043],[0.07655,-0.593],[0.07685,-0.116],[0.07714,0.344],[0.07744,0.808],[0.07774,1.248],[0.07805,1.668],[0.07836,2.043],[0.07867,2.363],[0.07898,2.622],[0.07929,2.816],[0.07961,2.945],[0.07993,2.998],[0.08025,2.978],[0.08057,2.885],[0.0809,2.718],[0.08123,2.485],[0.08156,2.193],[0.0819,1.839],[0.08224,1.441],[0.08258,1.012],[0.08292,0.56],[0.08327,0.086],[0.08362,-0.387],[0.08397,-0.846],[0.08433,-1.293],[0.08469,-1.704],[0.08505,-2.069],[0.08541,-2.381],[0.08578,-2.639],[0.08615,-2.83],[0.08653,-2.953],[0.0869,-2.999],[0.08728,-2.973],[0.08767,-2.871],[0.08806,-2.698],[0.08845,-2.459],[0.08884,-2.162],[0.08924,-1.807],[0.08964,-1.41],[0.09005,-0.971],[0.09046,-0.512],[0.09087,-0.045],[0.09129,0.431],[0.09171,0.892],[0.09213,1.326],[0.09256,1.734],[0.09299,2.096],[0.09343,2.409],[0.09387,2.66],[0.09431,2.843],[0.09476,2.959],[0.09522,3],[0.09567,2.967],[0.09614,2.858],[0.0966,2.681],[0.09707,2.437],[0.09755,2.129],[0.09803,1.771],[0.09851,1.372],[0.099,0.936],[0.0995,0.472],[0.1,0]]}]}
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
  hint="Evaluate $\sin\left(\tfrac{2}{x}\right)$ at inputs closer and closer to $0$ from both sides, such as $\pm0.1,$ $\pm0.01,$ and $\pm0.001,$ and check whether the outputs settle toward one number."
>}}
$0$
$1$
The limit does not exist.
{{< /multiplechoice >}}

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
They are always the same number, because the function's output at $x=a$ is exactly the value its nearby outputs approach.
The limit is the function's actual output at $x=a$; the value $f(a)$ is what $f(x)$ approaches as $x$ gets arbitrarily close to $a$ without equaling $a$.
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
{"ariaLabel":"A piecewise graph with three discontinuities. For x less than \u22122 the curve descends steeply from the upper left to an open circle at (\u22122, \u22124); a separate filled point sits at (\u22122, 3). From \u22122 to 1 the curve rises from that same open circle to a peak near (0, 4) and falls to an open circle at (1, 2). A second open circle sits at (1, 0); from there the curve rises to end at a filled point at (4, 4). A short separate piece starts at an open circle at (4, 6) and hooks down to the right, ending in an arrow.","xMin":-5,"xMax":6,"yMin":-5,"yMax":7,"unit":26,"tickLabels":true,"yTickOffset":3,"quadratics":[{"a":-2,"c":4,"from":-2,"to":1,"arrows":false}],"curves":[{"kind":"sqrt","a":2.309,"h":1,"k":0,"from":1,"to":4,"arrows":false}],"segments":[{"from":[-2,-4],"to":[-3.7,6],"arrows":"end"},{"from":[4,6],"to":[4.45,5.85],"arrows":false},{"from":[4.45,5.85],"to":[4.9,5.15],"arrows":"end"}],"points":[{"at":[-2,-4],"open":true},{"at":[-2,3]},{"at":[1,2],"open":true},{"at":[1,0],"open":true},{"at":[4,4]},{"at":[4,6],"open":true}]}
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
  hint="Read the height the graph approaches as $x$ nears $4$ from the left, then from the right, and compare the two."
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
  question="Use numerical evidence to determine whether $\lim_{x\to-\tfrac12}\left(\tfrac{x}{4x^2+4x+1}\right)$ exists."
  mode="text"
  answer="The limit does not exist. Function values decrease without bound as $x$ approaches $-\tfrac12$ from either side."
  hint="Build a table of values for $x$ just below and just above $-\tfrac12$ and watch what happens to the size of the output."
>}}
The limit equals $-\tfrac12$.
The limit does not exist. Function values increase without bound as $x$ approaches $-\tfrac12$ from either side.
The limit does not exist. Function values decrease without bound as $x$ approaches $-\tfrac12$ from either side.
{{< /multiplechoice >}}

{{< fillin
  question="Use a calculator to estimate $\lim_{x\to0}\tfrac{7\tan x}{3x}$ by preparing a table of values. Enter the limit as a fraction in lowest terms."
  answer="\tfrac{7}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{7}{3}$"
  hint="In radian mode, build a table of values of $\tfrac{7\tan x}{3x}$ for $x$ just below and just above $0,$ then write the value the outputs approach as a fraction."
>}}

{{< fillin
  question="Use a graphing utility to find numerical evidence to estimate $\lim_{x\to0}e^{e^{-\frac{1}{x^2}}}$."
  answer="1"
  answerForm="decimal"
  answerDisplay="$1$"
  hint="Evaluate the function at inputs such as $\pm0.5,$ $\pm0.1,$ and $\pm0.05,$ working from the innermost exponent outward, and see what value the outputs approach."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 12.1: Finding Limits: Numerical and Graphical Approaches](https://openstax.org/books/precalculus-2e/pages/12-1-finding-limits-numerical-and-graphical-approaches) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: Every source figure is recreated as an apfigure spec, never a traced image. The two “generic” limit-at-$(a,L)$ illustrations (the intro figure and the “finding a limit using a graph” figure) have no named source formula, so each was fitted by script to a low-degree polynomial matching the open circle at $(a,L)$: the intro S-curve is the cubic $y=0.12(x-1)^3+2$, and the hump figure is the quadratic $y=-0.4(x-1)^2+3$; each marks $a$ on the $x$-axis with a dashed segment up to the open circle. The hole graph of $f(x)=\tfrac{x^2-6x-7}{x-7}=x+1,\ x\ne7$ (bare, then annotated with dashed guides from $x=7$ and $y=8$ to the open circle) is the line of slope $1$ with an open circle at $(7,8)$. Example 2's two piecewise graphs are each an upward parabola $y=2x^2$ (drawn from $x=-4$) meeting a line or a second open circle at $x=2$, with coordinates read directly off the printed page. The Try It graph (the nine-part graph read after Example 2) is a quadratic $y=0.42x^2+1.092x$ ending open at the origin, a second quadratic $y=-x^2+2$ running from a filled point at $(0,2)$ to a filled point at $(2,-2)$, and a straight line of slope $2$ from an open circle at $(2,0)$ through an open circle at $(4,4)$, so every open and filled dot lands exactly on the values the printed answer key gives ($0,2,-2,0,4$); only $\lim_{x\to0^-}f(x)$, $\lim_{x\to2}f(x)$, and $\lim_{x\to4}f(x)$ were carried into real components — the other six of its nine parts (the right-hand limits at $0$ and $4$, the individual one-sided limits at $x=2$, and the two two-sided-limit-exists parts already implied by the carried items) were not, and its lead-in no longer lists the nine limits. The graphing-utility check graph in the Q&A is the algebraic simplification of $\tfrac{x^3-125}{x-5}$, namely $x^2+5x+25$, with an open circle at $(5,75)$ and dashed guides from $x=5$ and $y=75$; it duplicates Example 3's function because the source's own Q&A duplicates it as a graphical check. The two $3\sin(\pi/x)$ zoom windows are not a named curve family, so each was sampled from the formula into a pair of polylines (about 200 and 450 points per branch, excluding a small neighborhood of the $x=0$ singularity), stepped evenly in the angle $\pi/x$ where individual waves are visible and through the exact peaks $\pm3$ where the waves pack closer than a pixel, so the central band is solid as in the printed figure. The graphical-exercise figure (discontinuities at $x=-2,1,4$) was transcribed dot-for-dot from the printed page: a steep line segment for $x<-2$, a downward parabola $y=-2x^2+4$ from an open circle at $(-2,-4)$ to an open circle at $(1,2)$ with an isolated filled point at $(-2,3)$, a second open circle at $(1,0)$ starting a square-root branch $y=2.309\sqrt{x-1}$ through a filled point at $(4,4)$, and a short separate hooked piece starting from an open circle at $(4,6)$ that no exercise reads numerically. Corrected one spelling slip in the graphing-utility Q&A (the source prints "appraoching"), a non-mathematical transcription slip, and the verb agreement in "the terms of the sequence … get closer and closer to $0$" (the source prints "gets"). Corrected the first inequality in the sentence introducing the $\tfrac{x^3-125}{x-5}$ table: the source prints "when $x>5$ but nearing $5$" twice, and the page prints $x<5$ for the left-hand side. Omitted the Media callout and its two external resource links. Every retained Try It is a real fillin or multiplechoice component; every “does not exist” answer is multiplechoice, since MathLive cannot type words and a fillin cannot key a bare-text answer; every “evaluate/estimate the limit” fillin declares decimal or fraction so the engine's own evaluation of the printed limit expression cannot pass as a retype, and the $\tfrac{7\tan x}{3x}$ exercise asks for the fraction in lowest terms. The “Understand limit notation” Practice group draws its multiplechoice from the section's Verbal exercises (fs-id1165137810884, the only one of the two with a printed solution) and, since that leaves the group with only one item, adds a fresh “identify $a$, $f(x)$, and $L$” triple in the pattern of Example 1 / Try It 1 with a new substitution, $\lim_{x\to-3}(2x^2+1)=19$, not printed in the source. The “Find a limit using a graph” group is the six graph-read exercises with printed solutions from the “Graphical” set reading the discontinuities figure (fs-id1165135183014, fs-id1165137806213, fs-id1165137935628, fs-id1165135181688, fs-id1165137455877, fs-id1165137794235 — printed numbers 3, 5, 7, 9, 11, 13). The “Find a limit using a table” group is six exercises with printed solutions from the “Numeric” set (fs-id1165135195366, fs-id1165137836967, fs-id1165137770148, fs-id1165135209740, fs-id1165135188629, fs-id1165137731539 — printed numbers 31, 33, 35, 37, 39, 43); the last of those (printed #43) belongs to the “use a graphing utility to find numerical or graphical evidence” subset rather than the “Numeric” subset proper, but is the same kind of table-driven estimate. The Extensions subsection's relativistic-mass conjecture exercise and its accompanying table (Table_12_01_01) were not used: that item asks for an open-ended conjecture rather than a single checkable value, and the two Practice groups above already meet the “find a limit using a graph/table” objectives without it.</small>
