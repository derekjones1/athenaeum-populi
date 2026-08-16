---
title: Functions and Function Notation
description: >-
  Deciding whether a relation is a function, function notation, evaluating and
  solving functions given by formulas, tables, and graphs, one-to-one
  functions, the vertical and horizontal line tests, and the toolkit
  functions — adapted from OpenStax Precalculus 2e, Section 1.1.
source_section: "1.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine whether a relation represents a function
- Find the value of a function
- Determine whether a function is one-to-one
- Use the vertical line test to identify functions
- Graph the functions listed in the library of functions
{{< /callout >}}

A jetliner changes altitude as its distance from the starting point of a
flight increases. The weight of a growing child increases with time. In each
case, one quantity depends on another. There is a relationship between the
two quantities that we can describe, analyze, and use to make predictions. In
this section, we will analyze such relationships.

## Determining whether a relation represents a function

A **relation** is a set of ordered pairs. The set of the first components of
each **ordered pair** is called the **domain** and the set of the second
components of each ordered pair is called the **range**. Consider the
following set of ordered pairs. The first numbers in each pair are the first
five natural numbers. The second number in each pair is twice that of the
first.

$$\{(1,2),(2,4),(3,6),(4,8),(5,10)\}$$

The domain is $\{1,2,3,4,5\}$. The range is $\{2,4,6,8,10\}$.

Note that each value in the domain is also known as an **input** value, or
**independent variable**, and is often labeled with the lowercase letter $x$.
Each value in the range is also known as an **output** value, or **dependent
variable**, and is often labeled lowercase letter $y$.

A function $f$ is a relation that assigns a single value in the range to each
value in the domain. In other words, no $x$-values are repeated. For our
example that relates the first five natural numbers to numbers double their
values, this relation is a function because each element in the domain,
$\{1,2,3,4,5\}$, is paired with exactly one element in the range,
$\{2,4,6,8,10\}$.

Now let's consider the set of ordered pairs that relates the terms "even" and
"odd" to the first five natural numbers. It would appear as

$$\{(\text{odd},1),(\text{even},2),(\text{odd},3),(\text{even},4),(\text{odd},5)\}$$

Notice that each element in the domain, $\{\text{even},\text{odd}\}$ is
*not* paired with exactly one element in the range, $\{1,2,3,4,5\}$. For
example, the term "odd" corresponds to three values from the range,
$\{1,3,5\}$, and the term "even" corresponds to two values from the range,
$\{2,4\}$. This violates the definition of a function, so this relation is
not a function.

The three diagrams below compare relations that are functions and not
functions.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A mapping diagram. The input bubble holds p, q, and r; the output bubble holds m and n. An arrow goes from p to m, from q to n, and from r to n. Each input has exactly one arrow leaving it, so the relation is a function.","circles":[{"at":[0,0],"r":1.6},{"at":[4.5,0],"r":1.25}],"texts":[{"at":[0,2.3],"text":"Inputs","anchor":"middle"},{"at":[4.5,2.3],"text":"Outputs","anchor":"middle"},{"at":[0,0.85],"text":"p","anchor":"middle"},{"at":[0,0],"text":"q","anchor":"middle"},{"at":[0,-0.85],"text":"r","anchor":"middle"},{"at":[4.5,0.5],"text":"m","anchor":"middle"},{"at":[4.5,-0.5],"text":"n","anchor":"middle"},{"at":[2.25,-2.1],"text":"(a)","anchor":"middle"}],"segments":[{"from":[0.65,0.85],"to":[3.6,0.55],"arrow":true},{"from":[0.65,0],"to":[3.6,-0.4],"arrow":true},{"from":[0.65,-0.85],"to":[3.6,-0.55],"arrow":true}]}
{{< /apfigure >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A mapping diagram. The input bubble holds p, q, and r; the output bubble holds x, y, and z. An arrow goes from p to x, from q to y, and from r to z. Each input has exactly one arrow and each output receives exactly one, so the relation is a function.","circles":[{"at":[0,0],"r":1.6},{"at":[4.5,0],"r":1.6}],"texts":[{"at":[0,2.3],"text":"Inputs","anchor":"middle"},{"at":[4.5,2.3],"text":"Outputs","anchor":"middle"},{"at":[0,0.85],"text":"p","anchor":"middle"},{"at":[0,0],"text":"q","anchor":"middle"},{"at":[0,-0.85],"text":"r","anchor":"middle"},{"at":[4.5,0.85],"text":"x","anchor":"middle"},{"at":[4.5,0],"text":"y","anchor":"middle"},{"at":[4.5,-0.85],"text":"z","anchor":"middle"},{"at":[2.25,-2.1],"text":"(b)","anchor":"middle"}],"segments":[{"from":[0.65,0.85],"to":[3.85,0.85],"arrow":true},{"from":[0.65,0],"to":[3.85,0],"arrow":true},{"from":[0.65,-0.85],"to":[3.85,-0.85],"arrow":true}]}
{{< /apfigure >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A mapping diagram. The input bubble holds p and q; the output bubble holds x, y, and z. An arrow goes from p to x, and two arrows leave q, one to y and one to z. Because q has two outputs, the relation is not a function.","circles":[{"at":[0,0],"r":1.4},{"at":[4.5,0],"r":1.6}],"texts":[{"at":[0,2.3],"text":"Inputs","anchor":"middle"},{"at":[4.5,2.3],"text":"Outputs","anchor":"middle"},{"at":[0,0.5],"text":"p","anchor":"middle"},{"at":[0,-0.5],"text":"q","anchor":"middle"},{"at":[4.5,0.85],"text":"x","anchor":"middle"},{"at":[4.5,0],"text":"y","anchor":"middle"},{"at":[4.5,-0.85],"text":"z","anchor":"middle"},{"at":[2.25,-2.1],"text":"(c)","anchor":"middle"}],"segments":[{"from":[0.5,0.5],"to":[3.85,0.85],"arrow":true},{"from":[0.5,-0.5],"to":[3.85,0],"arrow":true},{"from":[0.5,-0.5],"to":[3.85,-0.85],"arrow":true}]}
{{< /apfigure >}}

Diagram (a) is a function because each input is associated with a single
output. Note that inputs $q$ and $r$ both give output $n$. Diagram (b) is
also a function. In this case, each input is associated with a single output.
Diagram (c) is not a function because input $q$ is associated with two
different outputs.

{{< callout type="info" >}}
  **Function.** A function is a relation in which each possible input value
  leads to exactly one output value. We say "the output is a function of the
  input."

  The **input** values make up the **domain**, and the **output** values make
  up the **range**.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a relationship between two quantities, determine whether
  the relationship is a function.

  1. Identify the input values.
  2. Identify the output values.
  3. If each input value leads to only one output value, classify the
     relationship as a function. If any input value leads to two or more
     outputs, do not classify the relationship as a function.
{{< /callout >}}

**Example.** The coffee shop menu below consists of items and their prices.

| Item | Price |
| :--- | ---: |
| Plain Donut | 1.49 |
| Jelly Donut | 1.99 |
| Chocolate Donut | 1.99 |

(a) Is price a function of the item?

(b) Is the item a function of the price?

**Solution.** (a) Let's begin by considering the input as the items on the
menu. The output values are then the prices.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A coffee shop menu. Plain Donut, Jelly Donut, and Chocolate Donut are listed on the left and the prices 1.49, 1.99, and 1.99 on the right. An arrow runs from each item to its own price, so each item has exactly one price.","polygons":[{"points":[[0,0],[8.28,0],[8.28,3.83],[0,3.83]]}],"texts":[{"at":[4.14,3.3],"text":"Menu","anchor":"middle"},{"at":[0.38,2.53],"text":"Item"},{"at":[7.9,2.53],"text":"Price","anchor":"end"},{"at":[0.38,1.76],"text":"Plain Donut"},{"at":[7.9,1.76],"text":"1.49","anchor":"end"},{"at":[0.38,1.15],"text":"Jelly Donut"},{"at":[7.9,1.15],"text":"1.99","anchor":"end"},{"at":[0.38,0.54],"text":"Chocolate Donut"},{"at":[7.9,0.54],"text":"1.99","anchor":"end"}],"segments":[{"from":[3.22,1.76],"to":[6.75,1.76],"dashed":true,"arrow":true},{"from":[3.22,1.15],"to":[6.75,1.15],"dashed":true,"arrow":true},{"from":[3.99,0.54],"to":[6.75,0.54],"dashed":true,"arrow":true}]}
{{< /apfigure >}}

Each item on the menu has only one price, so the price is a function of the
item.

(b) Two items on the menu have the same price. If we consider the prices to
be the input values and the items to be the output, then the same input value
could have more than one output associated with it.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The same coffee shop menu with the arrows reversed, running from each price back to an item. The price 1.99 has two arrows leaving it, one to Jelly Donut and one to Chocolate Donut, so one price gives two different items.","polygons":[{"points":[[0,0],[8.28,0],[8.28,3.83],[0,3.83]]}],"texts":[{"at":[4.14,3.3],"text":"Menu","anchor":"middle"},{"at":[0.38,2.53],"text":"Item"},{"at":[7.9,2.53],"text":"Price","anchor":"end"},{"at":[0.38,1.76],"text":"Plain Donut"},{"at":[7.9,1.76],"text":"1.49","anchor":"end"},{"at":[0.38,1.15],"text":"Jelly Donut"},{"at":[7.9,1.15],"text":"1.99","anchor":"end"},{"at":[0.38,0.54],"text":"Chocolate Donut"},{"at":[7.9,0.54],"text":"1.99","anchor":"end"}],"segments":[{"from":[6.75,1.76],"to":[3.22,1.76],"dashed":true,"arrow":true},{"from":[6.75,1.15],"to":[3.22,1.15],"dashed":true,"arrow":true},{"from":[6.75,1.15],"to":[3.99,0.54],"dashed":true,"arrow":true}]}
{{< /apfigure >}}

Therefore, the item is not a function of price.

**Example.** In a particular math class, the overall percent grade
corresponds to a grade point average. Is grade point average a function of
the percent grade? Is the percent grade a function of the grade point
average? The table below shows a possible rule for assigning grade points.

| Percent grade | 0–56 | 57–61 | 62–66 | 67–71 | 72–77 | 78–86 | 87–91 | 92–100 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Grade point average | 0.0 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 | 4.0 |

**Solution.** For any percent grade earned, there is an associated grade
point average, so the grade point average is a function of the percent grade.
In other words, if we input the percent grade, the output is a specific grade
point average.

In the grading system given, there is a range of percent grades that
correspond to the same grade point average. For example, students who receive
a grade point average of 3.0 could have a variety of percent grades ranging
from 78 all the way to 86. Thus, percent grade is not a function of grade
point average.

The table below lists the five greatest baseball players of all time in order
of rank.

| Player | Rank |
| :--- | ---: |
| Babe Ruth | 1 |
| Willie Mays | 2 |
| Ty Cobb | 3 |
| Walter Johnson | 4 |
| Hank Aaron | 5 |

{{< multiplechoice
  question="Using the table of baseball players above, is the rank a function of the player name?"
  answer="Yes"
  hint="Ask whether any single player name is paired with more than one rank."
>}}
No
Yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Using the same table, is the player name a function of the rank?"
  answer="Yes"
  hint="Ask whether any single rank is paired with more than one player. If two players had tied, the answer would change."
>}}
Yes
No
{{< /multiplechoice >}}

## Using function notation

Once we determine that a relationship is a function, we need to display and
define the functional relationships so that we can understand and use them,
and sometimes also so that we can program them into computers. There are
various ways of representing functions. A standard **function notation** is
one representation that facilitates working with functions.

To represent "height is a function of age," we start by identifying the
descriptive variables $h$ for height and $a$ for age. The letters $f$, $g$,
and $h$ are often used to represent functions just as we use $x$, $y$, and
$z$ to represent numbers and $A$, $B$, and $C$ to represent sets.

$$
\begin{array}{ll}
h\text{ is }f\text{ of }a & \text{We name the function }f;\text{ height is a function of age.} \\[4pt]
h=f(a) & \text{We use parentheses to indicate the function input.} \\[4pt]
f(a) & \text{We name the function }f;\text{ the expression is read as ``}f\text{ of }a\text{.''}
\end{array}
$$

Remember, we can use any letter to name the function; the notation $h(a)$
shows us that $h$ depends on $a$. The value $a$ must be put into the function
$h$ to get a result. The parentheses indicate that age is input into the
function; they do not indicate multiplication.

We can also give an algebraic expression as the input to a function. For
example $f(a+b)$ means "first add $a$ and $b$, and the result is the input
for the function $f$." The operations must be performed in this order to
obtain the correct result.

{{< callout type="info" >}}
  **Function notation.** The notation $y=f(x)$ defines a function named $f$.
  This is read as "$y$ is a function of $x$." The letter $x$ represents the
  input value, or independent variable. The letter $y$, or $f(x)$,
  represents the output value, or dependent variable.
{{< /callout >}}

**Example.** Use function notation to represent a function whose input is the
name of a month and output is the number of days in that month. Assume that
the domain does not include leap years.

**Solution.** The number of days in a month is a function of the name of the
month, so if we name the function $f$, we write
$\text{days}=f(\text{month})$ or $d=f(m)$. The name of the month is the input
to a "rule" that associates a specific number (the output) with each input.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The equation 31 equals f of January. An arrow labeled output points up to 31, an arrow labeled rule points up to f, and an arrow labeled input points up to January.","texts":[{"at":[0.23,2.2],"text":"31"},{"at":[1.46,2.2],"text":"="},{"at":[2.3,2.2],"text":"f"},{"at":[2.68,2.2],"text":"(January)"},{"at":[0,0.51],"text":"output"},{"at":[2.07,0],"text":"rule"},{"at":[3.91,0.51],"text":"input"}],"segments":[{"from":[0.54,0.82],"to":[0.46,1.82],"arrow":true},{"from":[2.45,0.21],"to":[2.45,1.82],"arrow":true},{"from":[4.22,0.82],"to":[3.83,1.82],"arrow":true}]}
{{< /apfigure >}}

For example, $f(\text{March})=31$, because March has 31 days. The notation
$d=f(m)$ reminds us that the number of days, $d$ (the output), is dependent
on the name of the month, $m$ (the input).

*Analysis.* Note that the inputs to a function do not have to be numbers;
function inputs can be names of people, labels of geometric objects, or any
other element that determines some kind of output. However, most of the
functions we will work with in this book will have numbers as inputs and
outputs.

**Example.** A function $N=f(y)$ gives the number of police officers, $N$, in
a town in year $y$. What does $f(2005)=300$ represent?

**Solution.** When we read $f(2005)=300$, we see that the input year is 2005.
The value for the output, the number of police officers $(N)$, is 300.
Remember, $N=f(y)$. The statement $f(2005)=300$ tells us that in the year
2005 there were 300 police officers in the town.

{{< multiplechoice
  question="Use function notation to express the weight of a pig in pounds as a function of its age in days $d$. Which statement says this?"
  answer="$w=f(d)$"
  hint="The quantity being described is the output, and the quantity it depends on goes inside the parentheses."
>}}
$w=d(f)$
$d=f(w)$
$w=f(d)$
$f=w(d)$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Q&A.** *Instead of a notation such as $y=f(x)$, could we use the same
  symbol for the output as for the function, such as $y=y(x)$, meaning "$y$
  is a function of $x$?"*

  Yes, this is often done, especially in applied subjects that use higher
  math, such as physics and engineering. However, in exploring math itself we
  like to maintain a distinction between a function such as $f$, which is a
  rule or procedure, and the output $y$ we get by applying $f$ to a
  particular input $x$. This is why we usually use notation such as
  $y=f(x)$, $P=W(d)$, and so on.
{{< /callout >}}

## Representing functions using tables

A common method of representing functions is in the form of a table. The
table rows or columns display the corresponding input and output values. In
some cases, these values represent all we know about the relationship; other
times, the table provides a few select examples from a more complete
relationship.

The table below lists the input number of each month (January = 1, February =
2, and so on) and the output value of the number of days in that month. This
information represents all we know about the months and days for a given year
(that is not a leap year). Note that, in this table, we define a
days-in-a-month function $f$ where $D=f(m)$ identifies months by an integer
rather than by name.

| Month number, $m$ (input) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Days in month, $D$ (output) | 31 | 28 | 31 | 30 | 31 | 30 | 31 | 31 | 30 | 31 | 30 | 31 |

The next table defines a function $Q=g(n)$. Remember, this notation tells us
that $g$ is the name of the function that takes the input $n$ and gives the
output $Q$.

| $n$ | 1 | 2 | 3 | 4 | 5 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $Q$ | 8 | 6 | 7 | 6 | 8 |

The third table displays the age of children in years and their corresponding
heights. This table displays just some of the data available for the heights
and ages of children. We can see right away that this table does not
represent a function because the same input value, 5 years, has two different
output values, 40 in. and 42 in.

| Age in years, $a$ (input) | 5 | 5 | 6 | 7 | 8 | 9 | 10 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Height in inches, $h$ (output) | 40 | 42 | 44 | 47 | 50 | 52 | 54 |

{{< callout type="info" >}}
  **How to:** given a table of input and output values, determine whether the
  table represents a function.

  1. Identify the input and output values.
  2. Check to see if each input value is paired with only one output value.
     If so, the table represents a function.
{{< /callout >}}

**Example.** Which table, A, B, or C, represents a function (if any)?

Table A:

| Input | Output |
| ---: | ---: |
| 2 | 1 |
| 5 | 3 |
| 8 | 6 |

Table B:

| Input | Output |
| ---: | ---: |
| −3 | 5 |
| 0 | 1 |
| 4 | 5 |

Table C:

| Input | Output |
| ---: | ---: |
| 1 | 0 |
| 5 | 2 |
| 5 | 4 |

**Solution.** Tables A and B define functions. In both, each input value
corresponds to exactly one output value. Table C does not define a function
because the input value of 5 corresponds to two different output values.

When a table represents a function, corresponding input and output values can
also be specified using function notation. The function represented by table
A can be represented by writing

$$f(2)=1,\quad f(5)=3,\quad \text{and}\quad f(8)=6$$

Similarly, the statements

$$g(-3)=5,\quad g(0)=1,\quad \text{and}\quad g(4)=5$$

represent the function in table B. Table C cannot be expressed in a similar
way because it does not represent a function.

{{< multiplechoice
  question="Does the table with inputs $1,2,3$ and matching outputs $10,100,1000$ represent a function?"
  answer="Yes"
  hint="Check whether any input value appears twice with different outputs."
>}}
No
Yes
{{< /multiplechoice >}}

## Finding input and output values of a function

When we know an input value and want to determine the corresponding output
value for a function, we **evaluate** the function. Evaluating will always
produce one result because each input value of a function corresponds to
exactly one output value.

When we know an output value and want to determine the input values that
would produce that output value, we set the output equal to the function's
formula and **solve** for the input. Solving can produce more than one
solution because different input values can produce the same output value.

### Evaluation of functions in algebraic forms

When we have a function in formula form, it is usually a simple matter to
evaluate the function. For example, the function $f(x)=5-3x^2$ can be
evaluated by squaring the input value, multiplying by 3, and then subtracting
the product from 5.

{{< callout type="info" >}}
  **How to:** given the formula for a function, evaluate.

  1. Substitute the input variable in the formula with the value provided.
  2. Calculate the result.
{{< /callout >}}

**Example.** Evaluate $f(x)=x^2+3x-4$ at:

(a) $2$ &nbsp; (b) $a$ &nbsp; (c) $a+h$ &nbsp; (d) Now evaluate
$\tfrac{f(a+h)-f(a)}{h}$

**Solution.** Replace the $x$ in the function with each specified value.

(a) Because the input value is a number, 2, we can use simple algebra to
simplify.

$$
\begin{array}{lrcl}
& f(2) &=& 2^2+3(2)-4 \\[4pt]
& &=& 4+6-4 \\[4pt]
& &=& 6
\end{array}
$$

(b) In this case, the input value is a letter so we cannot simplify the
answer any further.

$$f(a)=a^2+3a-4$$

(c) With an input value of $a+h$, we must use the distributive property.

$$
\begin{array}{lrcl}
& f(a+h) &=& (a+h)^2+3(a+h)-4 \\[4pt]
& &=& a^2+2ah+h^2+3a+3h-4
\end{array}
$$

(d) In this case, we apply the input values to the function more than once,
and then perform algebraic operations on the result. We already found that

$$f(a+h)=a^2+2ah+h^2+3a+3h-4$$

and we know that

$$f(a)=a^2+3a-4$$

Now we combine the results and simplify.

$$
\begin{array}{lrcl}
& \tfrac{f(a+h)-f(a)}{h} &=& \tfrac{(a^2+2ah+h^2+3a+3h-4)-(a^2+3a-4)}{h} \\[4pt]
& &=& \tfrac{2ah+h^2+3h}{h} \\[4pt]
\text{Factor out }h. & &=& \tfrac{h(2a+h+3)}{h} \\[4pt]
\text{Simplify.} & &=& 2a+h+3
\end{array}
$$

**Example.** Given the function $h(p)=p^2+2p$, evaluate $h(4)$.

**Solution.** To evaluate $h(4)$, we substitute the value 4 for the input
variable $p$ in the given function.

$$
\begin{array}{lrcl}
& h(p) &=& p^2+2p \\[4pt]
& h(4) &=& (4)^2+2(4) \\[4pt]
& &=& 16+8 \\[4pt]
& &=& 24
\end{array}
$$

Therefore, for an input of 4, we have an output of 24.

{{< fillin
  question="Given the function $g(m)=\sqrt{m-4}$, evaluate $g(5)$."
  answer="1"
  hint="Substitute $5$ for $m$ first, then take the square root of what is left."
>}}

**Example.** Given the function $h(p)=p^2+2p$, solve for $h(p)=3$.

**Solution.**

$$
\begin{array}{lrcl}
& h(p) &=& 3 \\[4pt]
\text{Substitute the original function }h(p)=p^2+2p. & p^2+2p &=& 3 \\[4pt]
\text{Subtract 3 from each side.} & p^2+2p-3 &=& 0 \\[4pt]
\text{Factor.} & (p+3)(p-1) &=& 0
\end{array}
$$

If $(p+3)(p-1)=0$, either $(p+3)=0$ or $(p-1)=0$ (or both of them equal 0).
We will set each factor equal to 0 and solve for $p$ in each case.

$$
\begin{array}{lrcl}
& (p+3) &=& 0,\quad p=-3 \\[4pt]
& (p-1) &=& 0,\quad p=1
\end{array}
$$

This gives us two solutions. The output $h(p)=3$ when the input is either
$p=1$ or $p=-3$. We can also verify by graphing. The graph verifies that
$h(1)=h(-3)=3$ and $h(4)=24$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola h of p equals p squared plus 2p. A horizontal line at h(p) = 3 meets the curve at (-3, 3) and (1, 3), and the point (4, 24) is marked on the curve.","xMin":-5,"xMax":5,"yMin":-5,"yMax":35,"unit":22,"yUnit":4,"yGridStep":5,"tickLabels":true,"yTickStep":5,"xLabel":"p","yLabel":"h(p)","quadratics":[{"a":1,"b":2}],"lines":[{"y":3,"arrows":false}],"points":[{"at":[-3,3]},{"at":[1,3]},{"at":[4,24]}]}
{{< /apfigure >}}

| $p$ | −3 | −2 | 0 | 1 | 4 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $h(p)$ | 3 | 0 | 0 | 3 | 24 |

{{< fillin
  question="Given the function $g(m)=\sqrt{m-4}$, solve $g(m)=2$."
  answer="8"
  hint="Square both sides to undo the radical, then solve for $m$."
>}}

### Evaluating functions expressed in formulas

Some functions are defined by mathematical rules or procedures expressed in
**equation** form. If it is possible to express the function output with a
**formula** involving the input quantity, then we can define a function in
algebraic form. For example, the equation $2n+6p=12$ expresses a functional
relationship between $n$ and $p$. We can rewrite it to decide if $p$ is a
function of $n$.

{{< callout type="info" >}}
  **How to:** given a function in equation form, write its algebraic formula.

  1. Solve the equation to isolate the output variable on one side of the
     equal sign, with the other side as an expression that involves *only*
     the input variable.
  2. Use all the usual algebraic methods for solving equations, such as
     adding or subtracting the same quantity to or from both sides, or
     multiplying or dividing both sides of the equation by the same quantity.
{{< /callout >}}

**Example.** Express the relationship $2n+6p=12$ as a function $p=f(n)$, if
possible.

**Solution.** To express the relationship in this form, we need to be able to
write the relationship where $p$ is a function of $n$, which means writing it
as $p=[\text{expression involving }n]$.

$$
\begin{array}{lrcl}
& 2n+6p &=& 12 \\[4pt]
\text{Subtract }2n\text{ from both sides.} & 6p &=& 12-2n \\[4pt]
\text{Divide both sides by 6 and simplify.} & p &=& \tfrac{12-2n}{6} \\[4pt]
& p &=& \tfrac{12}{6}-\tfrac{2n}{6} \\[4pt]
& p &=& 2-\tfrac{1}{3}n
\end{array}
$$

Therefore, $p$ as a function of $n$ is written as

$$p=f(n)=2-\tfrac{1}{3}n$$

*Analysis.* It is important to note that not every relationship expressed by
an equation can also be expressed as a function with a formula.

**Example.** Does the equation $x^2+y^2=1$ represent a function with $x$ as
input and $y$ as output? If so, express the relationship as a function
$y=f(x)$.

**Solution.** First we subtract $x^2$ from both sides.

$$y^2=1-x^2$$

We now try to solve for $y$ in this equation.

$$
\begin{array}{lrcl}
& y &=& \pm\sqrt{1-x^2} \\[4pt]
& &=& +\sqrt{1-x^2}\ \text{and}\ -\sqrt{1-x^2}
\end{array}
$$

We get two outputs corresponding to the same input, so this relationship
cannot be represented as a single function $y=f(x)$.

{{< fillin
  question="If $x-8y^3=0$, express $y$ as a function of $x$."
  answer="\frac{\sqrt[3]{x}}{2}"
  answerDisplay="$y=f(x)=\tfrac{\sqrt[3]{x}}{2}$"
  hint="Isolate $y^3$ first, then take the cube root of both sides."
>}}

{{< callout type="info" >}}
  **Q&A.** *Are there relationships expressed by an equation that do
  represent a function but which still cannot be represented by an algebraic
  formula?*

  Yes, this can happen. For example, given the equation $x=y+2^y$, if we want
  to express $y$ as a function of $x$, there is no simple algebraic formula
  involving only $x$ that equals $y$. However, each $x$ does determine a
  unique value for $y$, and there are mathematical procedures by which $y$
  can be found to any desired accuracy. In this case, we say that the
  equation gives an implicit (implied) rule for $y$ as a function of $x$,
  even though the formula cannot be written explicitly.
{{< /callout >}}

### Evaluating a function given in tabular form

As we saw above, we can represent functions in tables. Conversely, we can use
information in tables to write functions, and we can evaluate functions using
the tables. For example, how well do our pets recall the fond memories we
share with them? There is an urban legend that a goldfish has a memory of 3
seconds, but this is just a myth. Goldfish can remember up to 3 months, while
the beta fish has a memory of up to 5 months. And while a puppy's memory span
is no longer than 30 seconds, the adult dog can remember for 5 minutes. This
is meager compared to a cat, whose memory span lasts for 16 hours.

The function that relates the type of pet to the duration of its memory span
is more easily visualized with the use of a table.

| Pet | Memory span in hours |
| :--- | ---: |
| Puppy | 0.008 |
| Adult dog | 0.083 |
| Cat | 16 |
| Goldfish | 2,160 |
| Beta fish | 3,600 |

At times, evaluating a function in table form may be more useful than using
equations. Here let us call the function $P$. The **domain** of the function
is the type of pet and the range is a real number representing the number of
hours the pet's memory span lasts. We can evaluate the function $P$ at the
input value of "goldfish." We would write $P(\text{goldfish})=2{,}160$. Notice
that, to evaluate the function in table form, we identify the input value and
the corresponding output value from the pertinent row of the table. The
tabular form for function $P$ seems ideally suited to this function, more so
than writing it in paragraph or function form.

{{< callout type="info" >}}
  **How to:** given a function represented by a table, identify specific
  output and input values.

  1. Find the given input in the row (or column) of input values.
  2. Identify the corresponding output value paired with that input value.
  3. Find the given output values in the row (or column) of output values,
     noting every time that output value appears.
  4. Identify the input value(s) corresponding to the given output value.
{{< /callout >}}

**Example.** Using the table below, (a) evaluate $g(3)$, and (b) solve
$g(n)=6$.

| $n$ | 1 | 2 | 3 | 4 | 5 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $g(n)$ | 8 | 6 | 7 | 6 | 8 |

**Solution.** (a) Evaluating $g(3)$ means determining the output value of the
function $g$ for the input value of $n=3$. The table output value
corresponding to $n=3$ is 7, so $g(3)=7$.

(b) Solving $g(n)=6$ means identifying the input values, $n$, that produce an
output value of 6. The table shows two solutions: $2$ and $4$. When we input
2 into the function $g$, our output is 6. When we input 4 into the function
$g$, our output is also 6.

{{< fillin
  question="Using the table above, evaluate $g(1)$."
  answer="8"
  hint="Find the column where $n=1$ and read the value directly beneath it."
>}}

## Finding function values from a graph

Evaluating a function using a graph also requires finding the corresponding
output value for a given input value, only in this case, we find the output
value by looking at the graph. Solving a function equation using a graph
requires finding all instances of the given output value on the graph and
observing the corresponding input value(s).

**Example.** Given the graph below, (a) evaluate $f(2)$, and (b) solve
$f(x)=4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with its vertex at (1, 0), crossing the vertical axis at (0, 1), on a grid from -5 to 5 horizontally and -3 to 7 vertically.","xMin":-5,"xMax":5,"yMin":-3,"yMax":7,"unit":22,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","quadratics":[{"a":1,"b":-2,"c":1}]}
{{< /apfigure >}}

**Solution.** (a) To evaluate $f(2)$, locate the point on the curve where
$x=2$, then read the $y$-coordinate of that point. The point has coordinates
$(2,1)$, so $f(2)=1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same parabola with vertex at (1, 0), with the point (2, 1) marked to show that f(2) = 1.","xMin":-5,"xMax":5,"yMin":-3,"yMax":7,"unit":22,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","quadratics":[{"a":1,"b":-2,"c":1}],"points":[{"at":[2,1],"label":"(2, 1)","labelSide":"e"}]}
{{< /apfigure >}}

(b) To solve $f(x)=4$, we find the output value $4$ on the vertical axis.
Moving horizontally along the line $y=4$, we locate two points of the curve
with output value $4$: $(-1,4)$ and $(3,4)$. These points represent the two
solutions to $f(x)=4$: $-1$ or $3$. This means $f(-1)=4$ and $f(3)=4$, or
when the input is $-1$ or $3$, the output is $4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same parabola with vertex at (1, 0). A horizontal line at y = 4 meets the curve at the marked points (-1, 4) and (3, 4).","xMin":-5,"xMax":5,"yMin":-3,"yMax":7,"unit":22,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","quadratics":[{"a":1,"b":-2,"c":1}],"lines":[{"y":4,"arrows":false}],"points":[{"at":[-1,4],"label":"(−1, 4)","labelSide":"sw"},{"at":[3,4],"label":"(3, 4)","labelSide":"se"}]}
{{< /apfigure >}}

{{< fillin
  question="Using the graph above, solve $f(x)=1$. Enter both solutions, separated by a comma."
  answer="0,2"
  answerMode="unordered"
  answerDisplay="$x=0$ or $x=2$"
  hint="Find every point on the curve at height $1$ and read off its $x$-coordinate."
>}}

## Determining whether a function is one-to-one

Some functions have a given output value that corresponds to two or more
input values. For example, in the stock chart shown in the figure at the
beginning of this chapter, the stock price was \$1000 on five different
dates, meaning that there were five different input values that all resulted
in the same output value of \$1000.

However, some functions have only one input value for each output value, as
well as having only one output for each input. We call these functions
one-to-one functions. As an example, consider a school that uses only letter
grades and decimal equivalents, as listed below.

| Letter grade | Grade point average |
| :--- | ---: |
| A | 4.0 |
| B | 3.0 |
| C | 2.0 |
| D | 1.0 |

This grading system represents a one-to-one function, because each letter
input yields one particular grade point average output and each grade point
average corresponds to one input letter.

To visualize this concept, let's look again at the two simple functions
sketched in diagrams (a) and (b) at the start of this section. The function
in diagram (a) shows a relationship that is not a one-to-one function because
inputs $q$ and $r$ both give output $n$. The function in diagram (b) shows a
relationship that is a one-to-one function because each input is associated
with a single output.

{{< callout type="info" >}}
  **One-to-one function.** A one-to-one function is a function in which each
  output value corresponds to exactly one input value.
{{< /callout >}}

**Example.** Is the area of a circle a function of its radius? If yes, is the
function one-to-one?

**Solution.** A circle of radius $r$ has a unique area measure given by
$A=\pi r^2$, so for any input, $r$, there is only one output, $A$. The area
is a function of radius $r$.

If the function is one-to-one, the output value, the area, must correspond to
a unique input value, the radius. Any area measure $A$ is given by the
formula $A=\pi r^2$. Because areas and radii are positive numbers, there is
exactly one solution: $\sqrt{\tfrac{A}{\pi}}$. So the area of a circle is a
one-to-one function of the circle's radius.

{{< multiplechoice
  question="Is a balance a function of the bank account number?"
  answer="Yes"
  hint="Ask whether one account number could correspond to two different balances at the same moment."
>}}
Yes
No
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is a bank account number a function of the balance?"
  answer="No"
  hint="Ask whether two different accounts could hold exactly the same balance."
>}}
No
Yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="If each percent grade earned in a course translates to one letter grade, is the letter grade a one-to-one function of the percent grade?"
  answer="No"
  hint="There are about a hundred possible percent grades but only about five letter grades."
>}}
No
Yes
{{< /multiplechoice >}}

## Using the vertical line test

As we have seen in some examples above, we can represent a function using a
graph. Graphs display a great many input-output pairs in a small space. The
visual information they provide often makes relationships easier to
understand. By convention, graphs are typically constructed with the input
values along the horizontal axis and the output values along the vertical
axis.

The most common graphs name the input value $x$ and the output value $y$, and
we say $y$ is a function of $x$, or $y=f(x)$ when the function is named $f$.
The graph of the function is the set of all points $(x,y)$ in the plane that
satisfies the equation $y=f(x)$. If the function is defined for only a few
input values, then the graph of the function is only a few points, where the
$x$-coordinate of each point is an input value and the $y$-coordinate of each
point is the corresponding output value. For example, the black dots on the
graph below tell us that $f(0)=2$ and $f(6)=1$. However, the set of all
points $(x,y)$ satisfying $y=f(x)$ is a curve. The curve shown includes
$(0,2)$ and $(6,1)$ because the curve passes through those points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A smooth curve rising from the lower left to a high point at (0, 2), dipping to a shallow low point near (4.8, 0.7), then rising again to the right. Black dots mark the points (0, 2) and (6, 1).","xMin":-6,"xMax":7,"yMin":-4,"yMax":4,"cubics":[{"a":0.023148148148148147,"b":-0.16666666666666666,"c":0,"d":2,"to":6.8}],"points":[{"at":[0,2]},{"at":[6,1]}]}
{{< /apfigure >}}

The **vertical line test** can be used to determine whether a graph
represents a function. If we can draw any vertical line that intersects a
graph more than once, then the graph does *not* define a function because a
function has only one output value for each input value.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A wavy curve that rises and falls but never doubles back. A dashed vertical line crosses it exactly once, so the graph is a function.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"curves":[{"kind":"sine","a":1.6,"b":1.5707963267948966,"h":-3,"k":-0.2,"from":-2.75,"to":1.95}],"lines":[{"x":1.2,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A sideways parabola opening to the right. A dashed vertical line crosses it at two points, so the graph is not a function.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":20,"grid":false,"quadratics":[{"a":0.35,"c":-2.2,"sideways":true}],"lines":[{"x":1.2,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle centred at the origin. A dashed vertical line crosses it at two points, so the graph is not a function.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":20,"grid":false,"circles":[{"at":[0,0],"r":3}],"lines":[{"x":2,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

The first graph is a function: every vertical line meets it exactly once. The
second and third are not functions, because a vertical line meets each of
them at two points.

{{< callout type="info" >}}
  **How to:** given a graph, use the vertical line test to determine if the
  graph represents a function.

  1. Inspect the graph to see if any vertical line drawn would intersect the
     curve more than once.
  2. If there is any such line, determine that the graph does not represent a
     function.
{{< /callout >}}

**Example.** Which of the graphs below represent(s) a function $y=f(x)$?

{{< apfigure kind="graph" >}}
{"ariaLabel":"A cubic curve with a local high point at (-1, 3) and a local low point at (1, -3), falling to the lower left and rising to the upper right.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","cubics":[{"a":1.5,"c":-4.5}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A straight line falling from left to right, passing through (4, 1) and (12, -3).","xMin":3,"xMax":12,"yMin":-5,"yMax":5,"unit":20,"tickLabels":"x","lines":[{"slope":-0.5,"intercept":3}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle of radius 3 centred at the origin.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","circles":[{"at":[0,0],"r":3}]}
{{< /apfigure >}}

**Solution.** If any vertical line intersects a graph more than once, the
relation represented by the graph is not a function. Notice that any vertical
line would pass through only one point of the two graphs shown in parts (a)
and (b). From this we can conclude that these two graphs represent functions.
The third graph does not represent a function because, at most $x$-values, a
vertical line would intersect the graph at more than one point, as shown
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle of radius 3 centred at the origin with a dashed vertical line at x = 2. The line meets the circle at two marked points, so the circle is not the graph of a function.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","circles":[{"at":[0,0],"r":3}],"lines":[{"x":2,"dashed":true,"arrows":false}],"points":[{"at":[2,2.236]},{"at":[2,-2.236]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals the absolute value of x: a V shape with its corner at the origin, rising to the left and to the right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":24,"tickLabels":true,"polylines":[{"through":[[-4,4],[0,0],[4,4]],"arrows":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Does the graph of $y=\lvert x\rvert$ shown above represent a function?"
  answer="Yes"
  hint="Slide a vertical line across the V and count how many times it meets the graph."
>}}
No
Yes
{{< /multiplechoice >}}

## Using the horizontal line test

Once we have determined that a graph defines a function, an easy way to
determine if it is a one-to-one function is to use the **horizontal line
test**. Draw horizontal lines through the graph. If any horizontal line
intersects the graph more than once, then the graph does not represent a
one-to-one function.

{{< callout type="info" >}}
  **How to:** given a graph of a function, use the horizontal line test to
  determine if the graph represents a one-to-one function.

  1. Inspect the graph to see if any horizontal line drawn would intersect
     the curve more than once.
  2. If there is any such line, determine that the function is not
     one-to-one.
{{< /callout >}}

**Example.** Consider the two functions graphed earlier in parts (a) and (b)
of the vertical line test example. Are either of the functions one-to-one?

**Solution.** The function in part (a) is not one-to-one. The horizontal line
shown below intersects the graph of the function at two points (and we can
even find horizontal lines that intersect it at three points).

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cubic curve with a local high point at (-1, 3). A dashed horizontal line at y = 3 meets the curve at two points, so the function is not one-to-one.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","cubics":[{"a":1.5,"c":-4.5}],"lines":[{"y":3,"dashed":true,"arrows":false}],"points":[{"at":[-1,3]},{"at":[2,3]}]}
{{< /apfigure >}}

The function in part (b) is one-to-one. Any horizontal line will intersect a
diagonal line at most once.

{{< multiplechoice
  question="Is the circle graphed in part (c) of the vertical line test example one-to-one?"
  answer="No"
  hint="A relation must first be a function before it can be one-to-one."
>}}
Yes
No
{{< /multiplechoice >}}

## Identifying basic toolkit functions

In this text, we will be exploring functions—the shapes of their graphs,
their unique characteristics, their algebraic formulas, and how to solve
problems with them. When learning to read, we start with the alphabet. When
learning to do arithmetic, we start with numbers. When working with
functions, it is similarly helpful to have a base set of building-block
elements. We call these our "toolkit functions," which form a set of basic
named functions for which we know the graph, formula, and special properties.
Some of these functions are programmed to individual buttons on many
calculators. For these definitions we will use $x$ as the input variable and
$y=f(x)$ as the output variable.

We will see these toolkit functions, combinations of toolkit functions, their
graphs, and their transformations frequently throughout this book. It will be
very helpful if we can recognize these toolkit functions and their features
quickly by name, formula, graph, and basic table properties.

**Constant** — $f(x)=c$, where $c$ is a constant

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a constant function: a horizontal line.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"y":2}]}
{{< /apfigure >}}

**Identity** — $f(x)=x$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the identity function: a straight line through the origin rising at 45 degrees.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"slope":1,"intercept":0}]}
{{< /apfigure >}}

**Absolute value** — $f(x)=\lvert x\rvert$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the absolute value function: a V shape with its corner at the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"polylines":[{"through":[[-4,4],[0,0],[4,4]],"arrows":true}]}
{{< /apfigure >}}

**Quadratic** — $f(x)=x^2$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the quadratic function: an upward-opening parabola with its vertex at the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1}]}
{{< /apfigure >}}

**Cubic** — $f(x)=x^3$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the cubic function: an S-shaped curve through the origin, falling to the lower left and rising to the upper right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"cubics":[{"a":1}]}
{{< /apfigure >}}

**Reciprocal** — $f(x)=\tfrac{1}{x}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the reciprocal function: two branches approaching but never touching the axes, one in the upper right and one in the lower left.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"curves":[{"kind":"reciprocal"}]}
{{< /apfigure >}}

**Reciprocal squared** — $f(x)=\tfrac{1}{x^2}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the reciprocal squared function: two branches, both above the horizontal axis, approaching but never touching the axes.","xMin":-4,"xMax":4,"yMin":-1,"yMax":7,"unit":18,"tickLabels":true,"tickStep":2,"curves":[{"kind":"reciprocal-squared"}]}
{{< /apfigure >}}

**Square root** — $f(x)=\sqrt{x}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the square root function: a curve starting at the origin and rising to the right, flattening as it goes.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"curves":[{"kind":"sqrt"}]}
{{< /apfigure >}}

**Cube root** — $f(x)=\sqrt[3]{x}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the cube root function: a curve through the origin rising to the right and falling to the left, steep near the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"curves":[{"kind":"cbrt"}]}
{{< /apfigure >}}

## Key equations

| Constant function | $f(x)=c$, where $c$ is a constant |
| :--- | :--- |
| Identity function | $f(x)=x$ |
| Absolute value function | $f(x)=\lvert x\rvert$ |
| Quadratic function | $f(x)=x^2$ |
| Cubic function | $f(x)=x^3$ |
| Reciprocal function | $f(x)=\tfrac{1}{x}$ |
| Reciprocal squared function | $f(x)=\tfrac{1}{x^2}$ |
| Square root function | $f(x)=\sqrt{x}$ |
| Cube root function | $f(x)=\sqrt[3]{x}$ |

## Key concepts

- A relation is a set of ordered pairs. A function is a specific type of
  relation in which each domain value, or input, leads to exactly one range
  value, or output.
- Function notation is a shorthand method for relating the input to the
  output in the form $y=f(x)$.
- In tabular form, a function can be represented by rows or columns that
  relate to input and output values.
- To evaluate a function, we determine an output value for a corresponding
  input value. Algebraic forms of a function can be evaluated by replacing
  the input variable with a given value.
- To solve for a specific function value, we determine the input values that
  yield the specific output value.
- An algebraic form of a function can be written from an equation.
- Input and output values of a function can be identified from a table.
- Relating input values to output values on a graph is another way to
  evaluate a function.
- A function is one-to-one if each output value corresponds to only one input
  value.
- A graph represents a function if any vertical line drawn on the graph
  intersects the graph at no more than one point.
- The graph of a one-to-one function passes the horizontal line test.

## Key terms

**relation** — a set of ordered pairs. **domain** — the set of all input
values of a relation. **range** — the set of all output values of a relation.
**independent variable** — an input value of a function. **dependent
variable** — an output value of a function. **function** — a relation in
which each input value yields a unique output value. **function notation** —
the notation $y=f(x)$, defining a function named $f$ with input $x$ and
output $y$. **one-to-one function** — a function for which each value of the
output is associated with a unique input value. **vertical line test** — a
method of testing whether a graph represents a function by determining
whether a vertical line intersects the graph no more than once. **horizontal
line test** — a method of testing whether a function is one-to-one by
determining whether any horizontal line intersects the graph more than once.

## Practice

### Determine whether a relation represents a function

{{< multiplechoice
  question="Does $3x^2+y=14$ describe $y$ as a function of $x$?"
  answer="function"
  hint="Solve for $y$ in terms of $x$ and check whether each $x$ gives a single output."
>}}
function
not a function
{{< /multiplechoice >}}

{{< multiplechoice
  question="Does $y^2=x^2$ describe $y$ as a function of $x$?"
  answer="not a function"
  hint="Solve for $y$: does a nonzero value of $x$ give one value of $y$ or two?"
>}}
function
not a function
{{< /multiplechoice >}}

### Find the value of a function

{{< fillin
  question="For $f(x)=8-3x$, evaluate $f(-2)$."
  answer="14"
  hint="Substitute $-2$ for $x$ and simplify."
>}}

{{< fillin
  question="For $f(x)=8-3x$, solve $f(x)=-1$."
  answer="3"
  answerDisplay="$x=3$"
  hint="Set $8-3x$ equal to $-1$ and solve for $x$."
>}}

{{< fillin
  question="For $f(x)=x^2-3x$, evaluate $f(5)$."
  answer="10"
  hint="Substitute $5$ for $x$ and simplify."
>}}

{{< fillin
  question="For $f(x)=x^2-3x$, solve $f(x)=4$. Enter both solutions, separated by a comma."
  answer="-1,4"
  answerMode="unordered"
  answerDisplay="$x=-1$ or $x=4$"
  hint="Move every term to one side and factor the resulting quadratic."
>}}

The table below gives selected values of a function $f$.

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | 74 | 28 | 1 | 53 | 56 | 3 | 36 | 45 | 14 | 47 |

{{< fillin
  question="Using the table above, solve $f(x)=1$."
  answer="2"
  answerDisplay="$x=2$"
  hint="Scan the table for the input whose output is $1$."
>}}

### Determine whether a function is one-to-one

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse centered at (−2, 1), spanning x from −3 to −1 and y from −1 to 3.","xMin":-5,"xMax":2,"yMin":-2,"yMax":4,"circles":[{"at":[-2,1],"rx":1,"ry":2}],"tickLabels":true}
{{< /apfigure >}}

{{< multiplechoice
  question="Is the relation graphed above a one-to-one function?"
  answer="not a function"
  hint="A one-to-one function must first be a function — check whether the graph passes the vertical line test."
>}}
not a function
function, but not one-to-one
one-to-one function
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A steadily rising curve shaped like a cube root function, with an inflection point near (−2, 1), running from about (−5.2, −0.5) up to about (3.5, 2.8) and never turning back.","xMin":-5.5,"xMax":4,"yMin":-1,"yMax":3,"curves":[{"kind":"cbrt","a":1,"h":-2,"k":1,"from":-5.2,"to":3.5}],"tickLabels":true}
{{< /apfigure >}}

{{< multiplechoice
  question="Is the relation graphed above a one-to-one function?"
  answer="one-to-one function"
  hint="The curve never doubles back on itself, so ask whether any horizontal line could cross it twice."
>}}
not a function
function, but not one-to-one
one-to-one function
{{< /multiplechoice >}}

### Use the vertical line test to identify functions

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph that is constant at y = −2 for x at or below −1, rises in a straight line through the origin to (1, 2), then stays constant at y = 2 for x at or above 1.","xMin":-5,"xMax":5,"yMin":-4,"yMax":4,"polylines":[{"through":[[-4,-2],[-1,-2],[1,2],[4,2]],"arrows":true}],"tickLabels":true}
{{< /apfigure >}}

{{< multiplechoice
  question="Does the graph shown above pass the vertical line test?"
  answer="function"
  hint="Check whether any vertical line could cross the graph more than once."
>}}
not a function
function
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two curves leaving the origin, nearly flat at first and curving away from the x-axis as they extend to the right: the upper branch rises toward about (4.5, 5) and the lower branch falls toward about (4.5, −5).","xMin":-1,"xMax":6,"yMin":-6,"yMax":6,"quadratics":[{"a":0.25,"from":0,"to":4.5,"arrows":"end"},{"a":-0.25,"from":0,"to":4.5,"arrows":"end"}],"tickLabels":true}
{{< /apfigure >}}

{{< multiplechoice
  question="Does the graph shown above pass the vertical line test?"
  answer="not a function"
  hint="Look at $x=1$: how many points on the curve share that input?"
>}}
not a function
function
{{< /multiplechoice >}}

### Graph the functions listed in the library of functions

{{< graphplot
  question="Graph $y=x^2$."
  answerDisplay="$y=x^2$"
  ariaLabel="A blank grid from −10 to 10 on the x-axis and −10 to 100 on the y-axis."
  hint="Plot the vertex at the origin, then use symmetry about the $y$-axis."
>}}
{"answer": {"quadratic": {"a": 1, "b": 0, "c": 0}}, "grid": {"xMin": -10, "xMax": 10, "yMin": -10, "yMax": 100, "xUnit": 18, "yUnit": 3.2, "yGridStep": 10, "yTickStep": 10}}
{{< /graphplot >}}

{{< multiplechoice
  question="What is the range of $y=x^2$ on the domain $[-10,10]$?"
  answer="$[0,100]$"
  hint="Squaring never gives a negative output, and the input farthest from $0$ has absolute value $10$."
>}}
$[-10,10]$
$[0,100]$
$[0,10]$
$[-100,100]$
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the range of $y=x^3$ on the domain $[-0.1,0.1]$?"
  answer="$[-0.001,0.001]$"
  hint="The cubing function is increasing, so evaluate it at both ends of the domain."
>}}
$[-0.01,0.01]$
$[-0.001,0.001]$
$[0,0.001]$
$[-0.1,0.1]$
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the range of $y=\sqrt{x}$ on the domain $[0,100]$?"
  answer="$[0,10]$"
  hint="The square root function is increasing, so evaluate it at both ends of the domain."
>}}
$[0,10]$
$[0,50]$
$[0,100]$
$[-10,10]$
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.1: Functions and Function Notation](https://openstax.org/books/precalculus-2e/pages/1-1-functions-and-function-notation) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every figure as an accessible inline SVG, including the input–output mapping diagrams, the coffee shop menu mappings, and the function-machine diagram; presented the menu itself and the toolkit function library as Markdown tables and headed figure groups rather than images; omitted the media links; adapted selected end-of-section exercises into the closing interactive Practice block, including two recreated figures for the one-to-one determinations and two for the vertical-line-test items; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and presented the write-a-function-notation practice item as multiple choice so it can be graded in the browser.</small>
