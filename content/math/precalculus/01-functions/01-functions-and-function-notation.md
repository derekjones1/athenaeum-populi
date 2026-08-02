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

<div class="ap-figure">
<svg role="img" aria-label="A mapping diagram. The input bubble holds p, q, and r; the output bubble holds m and n. An arrow goes from p to m, from q to n, and from r to n. Each input has exactly one arrow leaving it, so the relation is a function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293 204" width="293" height="204" font-family="Helvetica, Arial, sans-serif">
  <line x1="103.2" y1="79.3" x2="187.5" y2="87.1" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="193.5,87.7 185.2,90.9 185.9,82.9" fill="currentColor"/>
  <line x1="103.2" y1="104.5" x2="187.6" y2="115.4" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="193.5,116.2 185.1,119.2 186.1,111.2" fill="currentColor"/>
  <line x1="103.2" y1="129.7" x2="187.5" y2="120.2" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="193.5,119.6 186,124.4 185.1,116.5" fill="currentColor"/>
  <circle cx="84.3" cy="105.3" r="48.3" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="218.7" cy="105.3" r="37.8" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="84.3" y="36" font-size="13" fill="currentColor" text-anchor="middle">Inputs</text>
  <text x="218.7" y="36" font-size="13" fill="currentColor" text-anchor="middle">Outputs</text>
  <text x="84.3" y="79.3" font-size="13" fill="currentColor" text-anchor="middle">p</text>
  <text x="84.3" y="104.5" font-size="13" fill="currentColor" text-anchor="middle">q</text>
  <text x="84.3" y="129.7" font-size="13" fill="currentColor" text-anchor="middle">r</text>
  <text x="218.7" y="89.8" font-size="13" fill="currentColor" text-anchor="middle">m</text>
  <text x="218.7" y="119.2" font-size="13" fill="currentColor" text-anchor="middle">n</text>
  <text x="151.5" y="168.3" font-size="13" fill="currentColor" text-anchor="middle">(a)</text>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A mapping diagram. The input bubble holds p, q, and r; the output bubble holds x, y, and z. An arrow goes from p to x, from q to y, and from r to z. Each input has exactly one arrow and each output receives exactly one, so the relation is a function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303 204" width="303" height="204" font-family="Helvetica, Arial, sans-serif">
  <line x1="103.2" y1="79.3" x2="193.8" y2="79.3" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="199.8,79.3 191.8,83.3 191.8,75.3" fill="currentColor"/>
  <line x1="103.2" y1="104.5" x2="193.8" y2="104.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="199.8,104.5 191.8,108.5 191.8,100.5" fill="currentColor"/>
  <line x1="103.2" y1="129.7" x2="193.8" y2="129.7" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="199.8,129.7 191.8,133.7 191.8,125.7" fill="currentColor"/>
  <circle cx="84.3" cy="105.3" r="48.3" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="218.7" cy="105.3" r="48.3" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="84.3" y="36" font-size="13" fill="currentColor" text-anchor="middle">Inputs</text>
  <text x="218.7" y="36" font-size="13" fill="currentColor" text-anchor="middle">Outputs</text>
  <text x="84.3" y="79.3" font-size="13" fill="currentColor" text-anchor="middle">p</text>
  <text x="84.3" y="104.5" font-size="13" fill="currentColor" text-anchor="middle">q</text>
  <text x="84.3" y="129.7" font-size="13" fill="currentColor" text-anchor="middle">r</text>
  <text x="218.7" y="79.3" font-size="13" fill="currentColor" text-anchor="middle">x</text>
  <text x="218.7" y="104.5" font-size="13" fill="currentColor" text-anchor="middle">y</text>
  <text x="218.7" y="129.7" font-size="13" fill="currentColor" text-anchor="middle">z</text>
  <text x="151.5" y="168.3" font-size="13" fill="currentColor" text-anchor="middle">(b)</text>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A mapping diagram. The input bubble holds p and q; the output bubble holds x, y, and z. An arrow goes from p to x, and two arrows leave q, one to y and one to z. Because q has two outputs, the relation is not a function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 204" width="297" height="204" font-family="Helvetica, Arial, sans-serif">
  <line x1="92.7" y1="90.6" x2="187.5" y2="79.9" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="193.5,79.3 186,84.1 185.1,76.2" fill="currentColor"/>
  <line x1="92.7" y1="120" x2="187.6" y2="105.4" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="193.5,104.5 186.2,109.6 185,101.7" fill="currentColor"/>
  <line x1="92.7" y1="120" x2="187.5" y2="129.1" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="193.5,129.7 185.2,132.9 185.9,124.9" fill="currentColor"/>
  <circle cx="78" cy="105.3" r="42" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="212.4" cy="105.3" r="48.3" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="78" y="36" font-size="13" fill="currentColor" text-anchor="middle">Inputs</text>
  <text x="212.4" y="36" font-size="13" fill="currentColor" text-anchor="middle">Outputs</text>
  <text x="78" y="90.6" font-size="13" fill="currentColor" text-anchor="middle">p</text>
  <text x="78" y="120" font-size="13" fill="currentColor" text-anchor="middle">q</text>
  <text x="212.4" y="79.3" font-size="13" fill="currentColor" text-anchor="middle">x</text>
  <text x="212.4" y="104.5" font-size="13" fill="currentColor" text-anchor="middle">y</text>
  <text x="212.4" y="129.7" font-size="13" fill="currentColor" text-anchor="middle">z</text>
  <text x="145.2" y="168.3" font-size="13" fill="currentColor" text-anchor="middle">(c)</text>
</svg>
</div>

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

<div class="ap-figure">
<svg role="img" aria-label="A coffee shop menu. Plain Donut, Jelly Donut, and Chocolate Donut are listed on the left and the prices 1.49, 1.99, and 1.99 on the right. An arrow runs from each item to its own price, so each item has exactly one price." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 187" width="320" height="187" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="151" x2="284.4" y2="151" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284.4" y1="151" x2="284.4" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284.4" y1="36" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36" y1="36" x2="36" y2="151" stroke="currentColor" stroke-width="1.5"/>
  <line x1="132.6" y1="98.1" x2="232.4" y2="98.1" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="238.4,98.1 230.4,102.1 230.4,94.1" fill="currentColor"/>
  <line x1="132.6" y1="116.5" x2="232.4" y2="116.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="238.4,116.5 230.4,120.5 230.4,112.5" fill="currentColor"/>
  <line x1="155.6" y1="134.9" x2="232.4" y2="134.9" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="238.4,134.9 230.4,138.9 230.4,130.9" fill="currentColor"/>
  <text x="160.2" y="52.1" font-size="13" fill="currentColor" text-anchor="middle">Menu</text>
  <text x="47.5" y="75.1" font-size="13" fill="currentColor" text-anchor="start">Item</text>
  <text x="272.9" y="75.1" font-size="13" fill="currentColor" text-anchor="end">Price</text>
  <text x="47.5" y="98.1" font-size="13" fill="currentColor" text-anchor="start">Plain Donut</text>
  <text x="47.5" y="116.5" font-size="13" fill="currentColor" text-anchor="start">Jelly Donut</text>
  <text x="47.5" y="134.9" font-size="13" fill="currentColor" text-anchor="start">Chocolate Donut</text>
  <text x="272.9" y="98.1" font-size="13" fill="currentColor" text-anchor="end">1.49</text>
  <text x="272.9" y="116.5" font-size="13" fill="currentColor" text-anchor="end">1.99</text>
  <text x="272.9" y="134.9" font-size="13" fill="currentColor" text-anchor="end">1.99</text>
</svg>
</div>

Each item on the menu has only one price, so the price is a function of the
item.

(b) Two items on the menu have the same price. If we consider the prices to
be the input values and the items to be the output, then the same input value
could have more than one output associated with it.

<div class="ap-figure">
<svg role="img" aria-label="The same coffee shop menu with the arrows reversed, running from each price back to an item. The price 1.99 has two arrows leaving it, one to Jelly Donut and one to Chocolate Donut, so one price gives two different items." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 187" width="320" height="187" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="151" x2="284.4" y2="151" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284.4" y1="151" x2="284.4" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284.4" y1="36" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36" y1="36" x2="36" y2="151" stroke="currentColor" stroke-width="1.5"/>
  <line x1="238.4" y1="98.1" x2="138.6" y2="98.1" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="132.6,98.1 140.6,94.1 140.6,102.1" fill="currentColor"/>
  <line x1="238.4" y1="116.5" x2="138.6" y2="116.5" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="132.6,116.5 140.6,112.5 140.6,120.5" fill="currentColor"/>
  <line x1="238.4" y1="116.5" x2="161.5" y2="133.6" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <polygon points="155.6,134.9 162.5,129.3 164.3,137.1" fill="currentColor"/>
  <text x="160.2" y="52.1" font-size="13" fill="currentColor" text-anchor="middle">Menu</text>
  <text x="47.5" y="75.1" font-size="13" fill="currentColor" text-anchor="start">Item</text>
  <text x="272.9" y="75.1" font-size="13" fill="currentColor" text-anchor="end">Price</text>
  <text x="47.5" y="98.1" font-size="13" fill="currentColor" text-anchor="start">Plain Donut</text>
  <text x="47.5" y="116.5" font-size="13" fill="currentColor" text-anchor="start">Jelly Donut</text>
  <text x="47.5" y="134.9" font-size="13" fill="currentColor" text-anchor="start">Chocolate Donut</text>
  <text x="272.9" y="98.1" font-size="13" fill="currentColor" text-anchor="end">1.49</text>
  <text x="272.9" y="116.5" font-size="13" fill="currentColor" text-anchor="end">1.99</text>
  <text x="272.9" y="134.9" font-size="13" fill="currentColor" text-anchor="end">1.99</text>
</svg>
</div>

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
Yes
No
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

<div class="ap-figure">
<svg role="img" aria-label="The equation 31 equals f of January. An arrow labeled output points up to 31, an arrow labeled rule points up to f, and an arrow labeled input points up to January." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 139" width="199" height="139" font-family="Helvetica, Arial, sans-serif">
  <line x1="52.1" y1="77.4" x2="50.3" y2="53.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="49.8,47.5 54.4,55.2 46.4,55.8" fill="currentColor"/>
  <line x1="109.6" y1="95.8" x2="109.6" y2="53.5" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="109.6,47.5 113.6,55.5 105.6,55.5" fill="currentColor"/>
  <line x1="162.5" y1="77.4" x2="153.2" y2="53.1" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="151,47.5 157.6,53.5 150.1,56.4" fill="currentColor"/>
  <text x="42.9" y="36" font-size="13" fill="currentColor" text-anchor="start">31</text>
  <text x="79.7" y="36" font-size="13" fill="currentColor" text-anchor="start">=</text>
  <text x="105" y="36" font-size="13" fill="currentColor" text-anchor="start">f</text>
  <text x="116.5" y="36" font-size="13" fill="currentColor" text-anchor="start">(January)</text>
  <text x="36" y="86.6" font-size="13" fill="currentColor" text-anchor="start">output</text>
  <text x="98.1" y="102.7" font-size="13" fill="currentColor" text-anchor="start">rule</text>
  <text x="153.3" y="86.6" font-size="13" fill="currentColor" text-anchor="start">input</text>
</svg>
</div>

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
$w=f(d)$
$d=f(w)$
$f=w(d)$
$w=d(f)$
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
Yes
No
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

<div class="ap-figure">
<svg role="img" aria-label="The parabola h of p equals p squared plus 2p. A horizontal line at h(p) = 3 meets the curve at (-3, 3) and (1, 3), and the point (4, 24) is marked on the curve." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 212" width="272" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="186" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="186" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="186" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="186" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="186" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="186" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="186" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="186" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="186" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="186" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="246" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="246" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="246" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="246" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="246" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="246" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="246" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="166" x2="248" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,166 248,171 248,161" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="136,198 131,188 141,188" fill="currentColor"/>
  <text x="256" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">p</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">h(p)</text>
  <line x1="26" y1="163" x2="26" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="181" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="163" x2="48" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="181" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="163" x2="70" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="181" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="163" x2="92" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="181" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="163" x2="114" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="181" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="163" x2="158" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="181" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="163" x2="180" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="181" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="163" x2="202" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="181" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="163" x2="224" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="181" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="163" x2="246" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="181" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="186" x2="139" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="190" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="133" y1="146" x2="139" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="150" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="133" y1="126" x2="139" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="130" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="133" y1="106" x2="139" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="110" font-size="11" fill="currentColor" text-anchor="end">15</text>
  <line x1="133" y1="86" x2="139" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="90" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="133" y1="66" x2="139" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="70" font-size="11" fill="currentColor" text-anchor="end">25</text>
  <line x1="133" y1="46" x2="139" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="50" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">35</text>
  <line x1="20" y1="154" x2="252" y2="154" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="30.6,112.5 30.8,112.7 31,113.1 31.3,113.4 31.5,113.8 31.8,114.1 32,114.4 32.3,114.8 32.5,115.1 32.8,115.4 33,115.8 33.2,116.1 33.5,116.4 33.8,116.8 34,117.1 34.3,117.4 34.5,117.8 34.8,118.1 35,118.4 35.3,118.7 35.5,119.1 35.8,119.4 36,119.7 36.3,120 36.5,120.4 36.8,120.7 37,121 37.3,121.3 37.5,121.6 37.8,121.9 38,122.3 38.3,122.6 38.5,122.9 38.8,123.2 39,123.5 39.3,123.8 39.5,124.1 39.8,124.4 40,124.7 40.3,125 40.5,125.4 40.7,125.7 41,126 41.3,126.3 41.5,126.6 41.8,126.9 42,127.2 42.3,127.5 42.5,127.8 42.8,128 43,128.3 43.3,128.6 43.5,128.9 43.8,129.2 44,129.5 44.3,129.8 44.5,130.1 44.8,130.4 45,130.7 45.3,130.9 45.5,131.2 45.8,131.5 46,131.8 46.2,132.1 46.5,132.3 46.8,132.6 47,132.9 47.3,133.2 47.5,133.5 47.8,133.7 48,134 48.3,134.3 48.5,134.5 48.8,134.8 49,135.1 49.3,135.4 49.5,135.6 49.8,135.9 50,136.1 50.3,136.4 50.5,136.7 50.8,136.9 51,137.2 51.3,137.5 51.5,137.7 51.8,138 52,138.2 52.3,138.5 52.5,138.7 52.8,139 53,139.2 53.3,139.5 53.5,139.8 53.8,140 54,140.2 54.3,140.5 54.5,140.7 54.8,141 55,141.2 55.3,141.5 55.5,141.7 55.8,142 56,142.2 56.3,142.4 56.5,142.7 56.8,142.9 57,143.1 57.3,143.4 57.5,143.6 57.8,143.9 58,144.1 58.3,144.3 58.5,144.5 58.8,144.8 59,145 59.3,145.2 59.5,145.5 59.8,145.7 60,145.9 60.3,146.1 60.5,146.3 60.8,146.6 61,146.8 61.3,147 61.5,147.2 61.8,147.4 62,147.7 62.3,147.9 62.5,148.1 62.8,148.3 63,148.5 63.3,148.7 63.5,148.9 63.8,149.1 64,149.3 64.3,149.5 64.5,149.8 64.8,150 65,150.2 65.3,150.4 65.5,150.6 65.8,150.8 66,151 66.3,151.2 66.5,151.4 66.8,151.5 67,151.7 67.3,151.9 67.5,152.1 67.8,152.3 68,152.5 68.3,152.7 68.5,152.9 68.8,153.1 69,153.3 69.3,153.4 69.5,153.6 69.8,153.8 70,154 70.3,154.2 70.5,154.4 70.8,154.5 71,154.7 71.3,154.9 71.5,155.1 71.8,155.2 72,155.4 72.3,155.6 72.5,155.8 72.8,155.9 73,156.1 73.3,156.3 73.5,156.4 73.8,156.6 74,156.8 74.3,156.9 74.5,157.1 74.8,157.3 75,157.4 75.3,157.6 75.5,157.8 75.8,157.9 76,158.1 76.3,158.2 76.5,158.4 76.8,158.5 77,158.7 77.3,158.8 77.5,159 77.8,159.1 78,159.3 78.3,159.4 78.5,159.6 78.8,159.7 79,159.9 79.3,160 79.5,160.2 79.8,160.3 80,160.4 80.3,160.6 80.5,160.7 80.8,160.9 81,161 81.3,161.1 81.5,161.3 81.8,161.4 82,161.5 82.3,161.7 82.5,161.8 82.8,161.9 83,162.1 83.3,162.2 83.5,162.3 83.8,162.4 84,162.6 84.3,162.7 84.5,162.8 84.8,162.9 85,163 85.3,163.2 85.5,163.3 85.8,163.4 86,163.5 86.3,163.6 86.5,163.8 86.8,163.9 87,164 87.3,164.1 87.5,164.2 87.8,164.3 88,164.4 88.3,164.5 88.5,164.6 88.8,164.7 89,164.8 89.3,164.9 89.5,165 89.8,165.1 90,165.2 90.3,165.3 90.5,165.4 90.8,165.5 91,165.6 91.3,165.7 91.5,165.8 91.8,165.9 92,166 92.3,166.1 92.5,166.2 92.8,166.3 93,166.4 93.3,166.4 93.5,166.5 93.8,166.6 94,166.7 94.3,166.8 94.5,166.9 94.8,166.9 95,167 95.3,167.1 95.5,167.2 95.8,167.2 96,167.3 96.3,167.4 96.5,167.5 96.8,167.5 97,167.6 97.3,167.7 97.5,167.8 97.8,167.8 98,167.9 98.3,167.9 98.5,168 98.8,168.1 99,168.1 99.3,168.2 99.5,168.3 99.8,168.3 100,168.4 100.3,168.4 100.5,168.5 100.8,168.5 101,168.6 101.3,168.7 101.5,168.7 101.8,168.8 102,168.8 102.3,168.9 102.5,168.9 102.8,169 103,169 103.3,169 103.5,169.1 103.8,169.1 104,169.2 104.3,169.2 104.5,169.3 104.8,169.3 105,169.3 105.3,169.4 105.5,169.4 105.8,169.4 106,169.5 106.3,169.5 106.5,169.5 106.8,169.6 107,169.6 107.3,169.6 107.5,169.7 107.8,169.7 108,169.7 108.3,169.7 108.5,169.8 108.8,169.8 109,169.8 109.3,169.8 109.5,169.8 109.8,169.9 110,169.9 110.3,169.9 110.5,169.9 110.8,169.9 111,169.9 111.3,169.9 111.5,169.9 111.8,170 112,170 112.3,170 112.5,170 112.8,170 113,170 113.3,170 113.5,170 113.8,170 114,170 114.3,170 114.5,170 114.8,170 115,170 115.3,170 115.5,170 115.8,170 116,170 116.3,170 116.5,169.9 116.8,169.9 117,169.9 117.3,169.9 117.5,169.9 117.8,169.9 118,169.9 118.3,169.9 118.5,169.8 118.8,169.8 119,169.8 119.3,169.8 119.5,169.8 119.8,169.7 120,169.7 120.3,169.7 120.5,169.7 120.8,169.6 121,169.6 121.2,169.6 121.5,169.5 121.8,169.5 122,169.5 122.3,169.4 122.5,169.4 122.8,169.4 123,169.3 123.3,169.3 123.5,169.3 123.8,169.2 124,169.2 124.3,169.1 124.5,169.1 124.8,169 125,169 125.3,169 125.5,168.9 125.8,168.9 126,168.8 126.3,168.8 126.5,168.7 126.7,168.7 127,168.6 127.3,168.5 127.5,168.5 127.8,168.4 128,168.4 128.3,168.3 128.5,168.3 128.8,168.2 129,168.1 129.3,168.1 129.5,168 129.8,167.9 130,167.9 130.3,167.8 130.5,167.8 130.8,167.7 131,167.6 131.3,167.5 131.5,167.5 131.8,167.4 132,167.3 132.3,167.2 132.5,167.2 132.8,167.1 133,167 133.3,166.9 133.5,166.9 133.8,166.8 134,166.7 134.3,166.6 134.5,166.5 134.8,166.4 135,166.4 135.3,166.3 135.5,166.2 135.8,166.1 136,166 136.3,165.9 136.5,165.8 136.8,165.7 137,165.6 137.3,165.5 137.5,165.4 137.8,165.3 138,165.2 138.3,165.1 138.5,165 138.8,164.9 139,164.8 139.3,164.7 139.5,164.6 139.8,164.5 140,164.4 140.3,164.3 140.5,164.2 140.8,164.1 141,164 141.3,163.9 141.5,163.8 141.8,163.6 142,163.5 142.3,163.4 142.5,163.3 142.8,163.2 143,163 143.3,162.9 143.5,162.8 143.8,162.7 144,162.6 144.3,162.4 144.5,162.3 144.8,162.2 145,162.1 145.3,161.9 145.5,161.8 145.8,161.7 146,161.5 146.3,161.4 146.5,161.3 146.8,161.1 147,161 147.3,160.9 147.5,160.7 147.8,160.6 148,160.4 148.3,160.3 148.5,160.2 148.8,160 149,159.9 149.3,159.7 149.5,159.6 149.8,159.4 150,159.3 150.3,159.1 150.5,159 150.8,158.8 151,158.7 151.3,158.5 151.5,158.4 151.8,158.2 152,158.1 152.3,157.9 152.5,157.8 152.8,157.6 153,157.4 153.3,157.3 153.5,157.1 153.8,156.9 154,156.8 154.3,156.6 154.5,156.4 154.8,156.3 155,156.1 155.3,155.9 155.5,155.8 155.8,155.6 156,155.4 156.3,155.2 156.5,155.1 156.8,154.9 157,154.7 157.3,154.5 157.5,154.4 157.8,154.2 158,154 158.3,153.8 158.5,153.6 158.8,153.4 159,153.3 159.3,153.1 159.5,152.9 159.8,152.7 160,152.5 160.3,152.3 160.5,152.1 160.8,151.9 161,151.7 161.3,151.5 161.5,151.4 161.8,151.2 162,151 162.3,150.8 162.5,150.6 162.8,150.4 163,150.2 163.3,150 163.5,149.8 163.8,149.5 164,149.3 164.3,149.1 164.5,148.9 164.8,148.7 165,148.5 165.3,148.3 165.5,148.1 165.8,147.9 166,147.7 166.3,147.4 166.5,147.2 166.8,147 167,146.8 167.3,146.6 167.5,146.3 167.8,146.1 168,145.9 168.3,145.7 168.5,145.5 168.8,145.2 169,145 169.3,144.8 169.5,144.5 169.8,144.3 170,144.1 170.3,143.9 170.5,143.6 170.8,143.4 171,143.1 171.3,142.9 171.5,142.7 171.8,142.4 172,142.2 172.3,142 172.5,141.7 172.8,141.5 173,141.2 173.3,141 173.5,140.7 173.8,140.5 174,140.2 174.3,140 174.5,139.8 174.8,139.5 175,139.2 175.3,139 175.5,138.7 175.8,138.5 176,138.2 176.3,138 176.5,137.7 176.8,137.5 177,137.2 177.3,136.9 177.5,136.7 177.8,136.4 178,136.1 178.3,135.9 178.5,135.6 178.8,135.4 179,135.1 179.3,134.8 179.5,134.5 179.8,134.3 180,134 180.3,133.7 180.5,133.5 180.8,133.2 181,132.9 181.3,132.6 181.5,132.3 181.8,132.1 182,131.8 182.3,131.5 182.5,131.2 182.8,130.9 183,130.7 183.3,130.4 183.5,130.1 183.8,129.8 184,129.5 184.3,129.2 184.5,128.9 184.8,128.6 185,128.3 185.3,128 185.5,127.8 185.8,127.5 186,127.2 186.3,126.9 186.5,126.6 186.8,126.3 187,126 187.3,125.7 187.5,125.4 187.8,125 188,124.7 188.3,124.4 188.5,124.1 188.8,123.8 189,123.5 189.3,123.2 189.5,122.9 189.8,122.6 190,122.3 190.3,121.9 190.5,121.6 190.8,121.3 191,121 191.3,120.7 191.5,120.4 191.8,120 192,119.7 192.3,119.4 192.5,119.1 192.8,118.7 193,118.4 193.3,118.1 193.5,117.8 193.8,117.4 194,117.1 194.3,116.8 194.5,116.4 194.8,116.1 195,115.8 195.3,115.4 195.5,115.1 195.8,114.8 196,114.4 196.3,114.1 196.5,113.8 196.8,113.4 197,113.1 197.3,112.7 197.5,112.4 197.8,112 198,111.7 198.3,111.3 198.5,111 198.8,110.6 199,110.3 199.3,109.9 199.5,109.6 199.8,109.2 200,108.9 200.3,108.5 200.5,108.2 200.8,107.8 201,107.4 201.3,107.1 201.5,106.7 201.8,106.4 202,106 202.3,105.6 202.5,105.3 202.8,104.9 203,104.5 203.3,104.2 203.5,103.8 203.8,103.4 204,103.1 204.3,102.7 204.5,102.3 204.8,101.9 205,101.6 205.3,101.2 205.5,100.8 205.8,100.4 206,100 206.3,99.7 206.5,99.3 206.8,98.9 207,98.5 207.3,98.1 207.5,97.8 207.8,97.4 208,97 208.3,96.6 208.5,96.2 208.8,95.8 209,95.4 209.3,95 209.5,94.6 209.8,94.2 210,93.8 210.3,93.4 210.5,93 210.8,92.6 211,92.2 211.3,91.8 211.5,91.4 211.8,91 212,90.6 212.3,90.2 212.5,89.8 212.8,89.4 213,89 213.3,88.6 213.5,88.2 213.8,87.8 214,87.4 214.3,86.9 214.5,86.5 214.8,86.1 215,85.7 215.3,85.3 215.5,84.9 215.8,84.4 216,84 216.3,83.6 216.5,83.2 216.8,82.7 217,82.3 217.3,81.9 217.5,81.5 217.8,81 218,80.6 218.3,80.2 218.5,79.8 218.8,79.3 219,78.9 219.3,78.4 219.5,78 219.8,77.6 220,77.1 220.3,76.7 220.5,76.3 220.8,75.8 221,75.4 221.3,74.9 221.5,74.5 221.8,74 222,73.6 222.3,73.2 222.5,72.7 222.8,72.3 223,71.8 223.3,71.4 223.5,70.9 223.8,70.5 224,70 224.3,69.5 224.5,69.1 224.8,68.6 225,68.2 225.3,67.7 225.5,67.3 225.8,66.8 226,66.3 226.3,65.9 226.5,65.4 226.8,64.9 227,64.5 227.3,64 227.5,63.5 227.8,63.1 228,62.6 228.3,62.1 228.5,61.7 228.8,61.2 229,60.7 229.3,60.2 229.5,59.8 229.8,59.3 230,58.8 230.3,58.3 230.5,57.8 230.8,57.4 231,56.9 231.3,56.4 231.5,55.9 231.8,55.4 232,54.9 232.3,54.4 232.5,53.9 232.8,53.5 233,53 233.3,52.5 233.5,52 233.8,51.5 234,51 234.3,50.5 234.5,50 234.8,49.5 235,49 235.3,48.5 235.5,48 235.8,47.5 236,47 236.3,46.5 236.5,46 236.8,45.5 237,45 237.3,44.5 237.5,43.9 237.8,43.4 238,42.9 238.3,42.4 238.5,41.9 238.8,41.4 239,40.9 239.3,40.4 239.5,39.8 239.8,39.3 240,38.8 240.3,38.3 240.5,37.8 240.8,37.2 241,36.7 241.3,36.2 241.5,35.7 241.8,35.1 242,34.6 242.3,34.1 242.5,33.5 242.6,33.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,106 35.8,111.4 27.6,117.1" fill="currentColor"/>
  <polygon points="246,26 246.4,37.2 237.3,33" fill="currentColor"/>
  <circle cx="70" cy="154" r="4" fill="currentColor"/>
  <circle cx="158" cy="154" r="4" fill="currentColor"/>
  <circle cx="224" cy="70" r="4" fill="currentColor"/>
</svg>
</div>

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

<div class="ap-figure">
<svg role="img" aria-label="An upward-opening parabola with its vertex at (1, 0), crossing the vertical axis at (0, 1), on a grid from -5 to 5 horizontally and -3 to 7 vertically." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="246" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="246" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="246" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="246" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="246" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="246" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="246" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="246" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="246" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="248" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,180 248,185 248,175" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="136,258 131,248 141,248" fill="currentColor"/>
  <text x="256" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="177" x2="70" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="195" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="177" x2="246" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="136" x2="139" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="140" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="101.5,34.9 101.8,36.2 102,37.5 102.3,38.7 102.5,40 102.8,41.2 103,42.5 103.3,43.7 103.5,45 103.8,46.2 104,47.5 104.3,48.7 104.5,49.9 104.8,51.1 105,52.3 105.3,53.5 105.5,54.7 105.8,55.9 106,57.1 106.3,58.3 106.5,59.4 106.8,60.6 107,61.8 107.3,62.9 107.5,64.1 107.8,65.2 108,66.4 108.3,67.5 108.5,68.6 108.8,69.7 109,70.9 109.3,72 109.5,73.1 109.8,74.2 110,75.3 110.3,76.4 110.5,77.4 110.8,78.5 111,79.6 111.3,80.7 111.5,81.7 111.8,82.8 112,83.8 112.3,84.9 112.5,85.9 112.8,86.9 113,88 113.3,89 113.5,90 113.8,91 114,92 114.3,93 114.5,94 114.8,95 115,96 115.3,96.9 115.5,97.9 115.8,98.9 116,99.8 116.3,100.8 116.5,101.7 116.8,102.7 117,103.6 117.3,104.5 117.5,105.4 117.8,106.4 118,107.3 118.3,108.2 118.5,109.1 118.8,110 119,110.9 119.3,111.7 119.5,112.6 119.8,113.5 120,114.4 120.3,115.2 120.5,116.1 120.8,116.9 121,117.8 121.2,118.6 121.5,119.4 121.8,120.3 122,121.1 122.3,121.9 122.5,122.7 122.8,123.5 123,124.3 123.3,125.1 123.5,125.9 123.8,126.7 124,127.5 124.3,128.2 124.5,129 124.8,129.7 125,130.5 125.3,131.2 125.5,132 125.8,132.7 126,133.5 126.3,134.2 126.5,134.9 126.7,135.6 127,136.3 127.3,137 127.5,137.7 127.8,138.4 128,139.1 128.3,139.8 128.5,140.4 128.8,141.1 129,141.8 129.3,142.4 129.5,143.1 129.8,143.7 130,144.4 130.3,145 130.5,145.6 130.8,146.2 131,146.9 131.3,147.5 131.5,148.1 131.8,148.7 132,149.3 132.3,149.9 132.5,150.4 132.8,151 133,151.6 133.3,152.2 133.5,152.7 133.8,153.3 134,153.8 134.3,154.4 134.5,154.9 134.8,155.4 135,156 135.3,156.5 135.5,157 135.8,157.5 136,158 136.3,158.5 136.5,159 136.8,159.5 137,160 137.3,160.4 137.5,160.9 137.8,161.4 138,161.8 138.3,162.3 138.5,162.7 138.8,163.2 139,163.6 139.3,164 139.5,164.4 139.8,164.9 140,165.3 140.3,165.7 140.5,166.1 140.8,166.5 141,166.9 141.3,167.2 141.5,167.6 141.8,168 142,168.4 142.3,168.7 142.5,169.1 142.8,169.4 143,169.8 143.3,170.1 143.5,170.4 143.8,170.8 144,171.1 144.3,171.4 144.5,171.7 144.8,172 145,172.3 145.3,172.6 145.5,172.9 145.8,173.2 146,173.5 146.3,173.7 146.5,174 146.8,174.2 147,174.5 147.3,174.7 147.5,175 147.8,175.2 148,175.5 148.3,175.7 148.5,175.9 148.8,176.1 149,176.3 149.3,176.5 149.5,176.7 149.8,176.9 150,177.1 150.3,177.3 150.5,177.4 150.8,177.6 151,177.8 151.3,177.9 151.5,178.1 151.8,178.2 152,178.4 152.3,178.5 152.5,178.6 152.8,178.7 153,178.9 153.3,179 153.5,179.1 153.8,179.2 154,179.3 154.3,179.4 154.5,179.4 154.8,179.5 155,179.6 155.3,179.7 155.5,179.7 155.8,179.8 156,179.8 156.3,179.9 156.5,179.9 156.8,179.9 157,180 157.3,180 157.5,180 157.8,180 158,180 158.3,180 158.5,180 158.8,180 159,180 159.3,179.9 159.5,179.9 159.8,179.9 160,179.8 160.3,179.8 160.5,179.7 160.8,179.7 161,179.6 161.3,179.5 161.5,179.4 161.8,179.4 162,179.3 162.3,179.2 162.5,179.1 162.8,179 163,178.9 163.3,178.7 163.5,178.6 163.8,178.5 164,178.4 164.3,178.2 164.5,178.1 164.8,177.9 165,177.8 165.3,177.6 165.5,177.4 165.8,177.3 166,177.1 166.3,176.9 166.5,176.7 166.8,176.5 167,176.3 167.3,176.1 167.5,175.9 167.8,175.7 168,175.5 168.3,175.2 168.5,175 168.8,174.7 169,174.5 169.3,174.2 169.5,174 169.8,173.7 170,173.5 170.3,173.2 170.5,172.9 170.8,172.6 171,172.3 171.3,172 171.5,171.7 171.8,171.4 172,171.1 172.3,170.8 172.5,170.4 172.8,170.1 173,169.8 173.3,169.4 173.5,169.1 173.8,168.7 174,168.4 174.3,168 174.5,167.6 174.8,167.2 175,166.9 175.3,166.5 175.5,166.1 175.8,165.7 176,165.3 176.3,164.9 176.5,164.4 176.8,164 177,163.6 177.3,163.2 177.5,162.7 177.8,162.3 178,161.8 178.3,161.4 178.5,160.9 178.8,160.4 179,160 179.3,159.5 179.5,159 179.8,158.5 180,158 180.3,157.5 180.5,157 180.8,156.5 181,156 181.3,155.4 181.5,154.9 181.8,154.4 182,153.8 182.3,153.3 182.5,152.7 182.8,152.2 183,151.6 183.3,151 183.5,150.4 183.8,149.9 184,149.3 184.3,148.7 184.5,148.1 184.8,147.5 185,146.9 185.3,146.2 185.5,145.6 185.8,145 186,144.4 186.3,143.7 186.5,143.1 186.8,142.4 187,141.8 187.3,141.1 187.5,140.4 187.8,139.8 188,139.1 188.3,138.4 188.5,137.7 188.8,137 189,136.3 189.3,135.6 189.5,134.9 189.8,134.2 190,133.5 190.3,132.7 190.5,132 190.8,131.2 191,130.5 191.3,129.7 191.5,129 191.8,128.2 192,127.5 192.3,126.7 192.5,125.9 192.8,125.1 193,124.3 193.3,123.5 193.5,122.7 193.8,121.9 194,121.1 194.3,120.3 194.5,119.4 194.8,118.6 195,117.8 195.3,116.9 195.5,116.1 195.8,115.2 196,114.4 196.3,113.5 196.5,112.6 196.8,111.7 197,110.9 197.3,110 197.5,109.1 197.8,108.2 198,107.3 198.3,106.4 198.5,105.4 198.8,104.5 199,103.6 199.3,102.7 199.5,101.7 199.8,100.8 200,99.8 200.3,98.9 200.5,97.9 200.8,96.9 201,96 201.3,95 201.5,94 201.8,93 202,92 202.3,91 202.5,90 202.8,89 203,88 203.3,86.9 203.5,85.9 203.8,84.9 204,83.8 204.3,82.8 204.5,81.7 204.8,80.7 205,79.6 205.3,78.5 205.5,77.4 205.8,76.4 206,75.3 206.3,74.2 206.5,73.1 206.8,72 207,70.9 207.3,69.7 207.5,68.6 207.8,67.5 208,66.4 208.3,65.2 208.5,64.1 208.8,62.9 209,61.8 209.3,60.6 209.5,59.4 209.8,58.3 210,57.1 210.3,55.9 210.5,54.7 210.8,53.5 211,52.3 211.3,51.1 211.5,49.9 211.8,48.7 212,47.5 212.3,46.2 212.5,45 212.8,43.7 213,42.5 213.3,41.2 213.5,40 213.8,38.7 214,37.5 214.3,36.2 214.5,34.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="100,27.1 106.8,36 97,37.8" fill="currentColor"/>
  <polygon points="216,27.1 219,37.8 209.2,36" fill="currentColor"/>
</svg>
</div>

**Solution.** (a) To evaluate $f(2)$, locate the point on the curve where
$x=2$, then read the $y$-coordinate of that point. The point has coordinates
$(2,1)$, so $f(2)=1$.

<div class="ap-figure">
<svg role="img" aria-label="The same parabola with vertex at (1, 0), with the point (2, 1) marked to show that f(2) = 1." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="246" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="246" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="246" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="246" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="246" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="246" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="246" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="246" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="246" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="248" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,180 248,185 248,175" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="136,258 131,248 141,248" fill="currentColor"/>
  <text x="256" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="177" x2="70" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="195" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="177" x2="246" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="136" x2="139" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="140" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="101.5,34.9 101.8,36.2 102,37.5 102.3,38.7 102.5,40 102.8,41.2 103,42.5 103.3,43.7 103.5,45 103.8,46.2 104,47.5 104.3,48.7 104.5,49.9 104.8,51.1 105,52.3 105.3,53.5 105.5,54.7 105.8,55.9 106,57.1 106.3,58.3 106.5,59.4 106.8,60.6 107,61.8 107.3,62.9 107.5,64.1 107.8,65.2 108,66.4 108.3,67.5 108.5,68.6 108.8,69.7 109,70.9 109.3,72 109.5,73.1 109.8,74.2 110,75.3 110.3,76.4 110.5,77.4 110.8,78.5 111,79.6 111.3,80.7 111.5,81.7 111.8,82.8 112,83.8 112.3,84.9 112.5,85.9 112.8,86.9 113,88 113.3,89 113.5,90 113.8,91 114,92 114.3,93 114.5,94 114.8,95 115,96 115.3,96.9 115.5,97.9 115.8,98.9 116,99.8 116.3,100.8 116.5,101.7 116.8,102.7 117,103.6 117.3,104.5 117.5,105.4 117.8,106.4 118,107.3 118.3,108.2 118.5,109.1 118.8,110 119,110.9 119.3,111.7 119.5,112.6 119.8,113.5 120,114.4 120.3,115.2 120.5,116.1 120.8,116.9 121,117.8 121.2,118.6 121.5,119.4 121.8,120.3 122,121.1 122.3,121.9 122.5,122.7 122.8,123.5 123,124.3 123.3,125.1 123.5,125.9 123.8,126.7 124,127.5 124.3,128.2 124.5,129 124.8,129.7 125,130.5 125.3,131.2 125.5,132 125.8,132.7 126,133.5 126.3,134.2 126.5,134.9 126.7,135.6 127,136.3 127.3,137 127.5,137.7 127.8,138.4 128,139.1 128.3,139.8 128.5,140.4 128.8,141.1 129,141.8 129.3,142.4 129.5,143.1 129.8,143.7 130,144.4 130.3,145 130.5,145.6 130.8,146.2 131,146.9 131.3,147.5 131.5,148.1 131.8,148.7 132,149.3 132.3,149.9 132.5,150.4 132.8,151 133,151.6 133.3,152.2 133.5,152.7 133.8,153.3 134,153.8 134.3,154.4 134.5,154.9 134.8,155.4 135,156 135.3,156.5 135.5,157 135.8,157.5 136,158 136.3,158.5 136.5,159 136.8,159.5 137,160 137.3,160.4 137.5,160.9 137.8,161.4 138,161.8 138.3,162.3 138.5,162.7 138.8,163.2 139,163.6 139.3,164 139.5,164.4 139.8,164.9 140,165.3 140.3,165.7 140.5,166.1 140.8,166.5 141,166.9 141.3,167.2 141.5,167.6 141.8,168 142,168.4 142.3,168.7 142.5,169.1 142.8,169.4 143,169.8 143.3,170.1 143.5,170.4 143.8,170.8 144,171.1 144.3,171.4 144.5,171.7 144.8,172 145,172.3 145.3,172.6 145.5,172.9 145.8,173.2 146,173.5 146.3,173.7 146.5,174 146.8,174.2 147,174.5 147.3,174.7 147.5,175 147.8,175.2 148,175.5 148.3,175.7 148.5,175.9 148.8,176.1 149,176.3 149.3,176.5 149.5,176.7 149.8,176.9 150,177.1 150.3,177.3 150.5,177.4 150.8,177.6 151,177.8 151.3,177.9 151.5,178.1 151.8,178.2 152,178.4 152.3,178.5 152.5,178.6 152.8,178.7 153,178.9 153.3,179 153.5,179.1 153.8,179.2 154,179.3 154.3,179.4 154.5,179.4 154.8,179.5 155,179.6 155.3,179.7 155.5,179.7 155.8,179.8 156,179.8 156.3,179.9 156.5,179.9 156.8,179.9 157,180 157.3,180 157.5,180 157.8,180 158,180 158.3,180 158.5,180 158.8,180 159,180 159.3,179.9 159.5,179.9 159.8,179.9 160,179.8 160.3,179.8 160.5,179.7 160.8,179.7 161,179.6 161.3,179.5 161.5,179.4 161.8,179.4 162,179.3 162.3,179.2 162.5,179.1 162.8,179 163,178.9 163.3,178.7 163.5,178.6 163.8,178.5 164,178.4 164.3,178.2 164.5,178.1 164.8,177.9 165,177.8 165.3,177.6 165.5,177.4 165.8,177.3 166,177.1 166.3,176.9 166.5,176.7 166.8,176.5 167,176.3 167.3,176.1 167.5,175.9 167.8,175.7 168,175.5 168.3,175.2 168.5,175 168.8,174.7 169,174.5 169.3,174.2 169.5,174 169.8,173.7 170,173.5 170.3,173.2 170.5,172.9 170.8,172.6 171,172.3 171.3,172 171.5,171.7 171.8,171.4 172,171.1 172.3,170.8 172.5,170.4 172.8,170.1 173,169.8 173.3,169.4 173.5,169.1 173.8,168.7 174,168.4 174.3,168 174.5,167.6 174.8,167.2 175,166.9 175.3,166.5 175.5,166.1 175.8,165.7 176,165.3 176.3,164.9 176.5,164.4 176.8,164 177,163.6 177.3,163.2 177.5,162.7 177.8,162.3 178,161.8 178.3,161.4 178.5,160.9 178.8,160.4 179,160 179.3,159.5 179.5,159 179.8,158.5 180,158 180.3,157.5 180.5,157 180.8,156.5 181,156 181.3,155.4 181.5,154.9 181.8,154.4 182,153.8 182.3,153.3 182.5,152.7 182.8,152.2 183,151.6 183.3,151 183.5,150.4 183.8,149.9 184,149.3 184.3,148.7 184.5,148.1 184.8,147.5 185,146.9 185.3,146.2 185.5,145.6 185.8,145 186,144.4 186.3,143.7 186.5,143.1 186.8,142.4 187,141.8 187.3,141.1 187.5,140.4 187.8,139.8 188,139.1 188.3,138.4 188.5,137.7 188.8,137 189,136.3 189.3,135.6 189.5,134.9 189.8,134.2 190,133.5 190.3,132.7 190.5,132 190.8,131.2 191,130.5 191.3,129.7 191.5,129 191.8,128.2 192,127.5 192.3,126.7 192.5,125.9 192.8,125.1 193,124.3 193.3,123.5 193.5,122.7 193.8,121.9 194,121.1 194.3,120.3 194.5,119.4 194.8,118.6 195,117.8 195.3,116.9 195.5,116.1 195.8,115.2 196,114.4 196.3,113.5 196.5,112.6 196.8,111.7 197,110.9 197.3,110 197.5,109.1 197.8,108.2 198,107.3 198.3,106.4 198.5,105.4 198.8,104.5 199,103.6 199.3,102.7 199.5,101.7 199.8,100.8 200,99.8 200.3,98.9 200.5,97.9 200.8,96.9 201,96 201.3,95 201.5,94 201.8,93 202,92 202.3,91 202.5,90 202.8,89 203,88 203.3,86.9 203.5,85.9 203.8,84.9 204,83.8 204.3,82.8 204.5,81.7 204.8,80.7 205,79.6 205.3,78.5 205.5,77.4 205.8,76.4 206,75.3 206.3,74.2 206.5,73.1 206.8,72 207,70.9 207.3,69.7 207.5,68.6 207.8,67.5 208,66.4 208.3,65.2 208.5,64.1 208.8,62.9 209,61.8 209.3,60.6 209.5,59.4 209.8,58.3 210,57.1 210.3,55.9 210.5,54.7 210.8,53.5 211,52.3 211.3,51.1 211.5,49.9 211.8,48.7 212,47.5 212.3,46.2 212.5,45 212.8,43.7 213,42.5 213.3,41.2 213.5,40 213.8,38.7 214,37.5 214.3,36.2 214.5,34.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="100,27.1 106.8,36 97,37.8" fill="currentColor"/>
  <polygon points="216,27.1 219,37.8 209.2,36" fill="currentColor"/>
  <circle cx="180" cy="158" r="4" fill="currentColor"/>
  <text x="194" y="162" font-size="13" fill="currentColor" text-anchor="start">(2, 1)</text>
</svg>
</div>

(b) To solve $f(x)=4$, we find the output value $4$ on the vertical axis.
Moving horizontally along the line $y=4$, we locate two points of the curve
with output value $4$: $(-1,4)$ and $(3,4)$. These points represent the two
solutions to $f(x)=4$: $-1$ or $3$. This means $f(-1)=4$ and $f(3)=4$, or
when the input is $-1$ or $3$, the output is $4$.

<div class="ap-figure">
<svg role="img" aria-label="The same parabola with vertex at (1, 0). A horizontal line at y = 4 meets the curve at the marked points (-1, 4) and (3, 4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 272" width="272" height="272" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="246" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="246" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="246" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="246" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="246" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="246" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="246" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="246" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="246" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="246" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="246" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="248" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="248" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,180 248,185 248,175" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="136,258 131,248 141,248" fill="currentColor"/>
  <text x="256" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="177" x2="70" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="195" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="177" x2="246" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="246" x2="139" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="250" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="133" y1="202" x2="139" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="206" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="133" y1="158" x2="139" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="162" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="133" y1="136" x2="139" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="140" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="133" y1="114" x2="139" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="118" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="70" x2="139" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="74" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="133" y1="26" x2="139" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="20" y1="92" x2="252" y2="92" stroke="currentColor" stroke-width="1.8"/>
  <polyline points="101.5,34.9 101.8,36.2 102,37.5 102.3,38.7 102.5,40 102.8,41.2 103,42.5 103.3,43.7 103.5,45 103.8,46.2 104,47.5 104.3,48.7 104.5,49.9 104.8,51.1 105,52.3 105.3,53.5 105.5,54.7 105.8,55.9 106,57.1 106.3,58.3 106.5,59.4 106.8,60.6 107,61.8 107.3,62.9 107.5,64.1 107.8,65.2 108,66.4 108.3,67.5 108.5,68.6 108.8,69.7 109,70.9 109.3,72 109.5,73.1 109.8,74.2 110,75.3 110.3,76.4 110.5,77.4 110.8,78.5 111,79.6 111.3,80.7 111.5,81.7 111.8,82.8 112,83.8 112.3,84.9 112.5,85.9 112.8,86.9 113,88 113.3,89 113.5,90 113.8,91 114,92 114.3,93 114.5,94 114.8,95 115,96 115.3,96.9 115.5,97.9 115.8,98.9 116,99.8 116.3,100.8 116.5,101.7 116.8,102.7 117,103.6 117.3,104.5 117.5,105.4 117.8,106.4 118,107.3 118.3,108.2 118.5,109.1 118.8,110 119,110.9 119.3,111.7 119.5,112.6 119.8,113.5 120,114.4 120.3,115.2 120.5,116.1 120.8,116.9 121,117.8 121.2,118.6 121.5,119.4 121.8,120.3 122,121.1 122.3,121.9 122.5,122.7 122.8,123.5 123,124.3 123.3,125.1 123.5,125.9 123.8,126.7 124,127.5 124.3,128.2 124.5,129 124.8,129.7 125,130.5 125.3,131.2 125.5,132 125.8,132.7 126,133.5 126.3,134.2 126.5,134.9 126.7,135.6 127,136.3 127.3,137 127.5,137.7 127.8,138.4 128,139.1 128.3,139.8 128.5,140.4 128.8,141.1 129,141.8 129.3,142.4 129.5,143.1 129.8,143.7 130,144.4 130.3,145 130.5,145.6 130.8,146.2 131,146.9 131.3,147.5 131.5,148.1 131.8,148.7 132,149.3 132.3,149.9 132.5,150.4 132.8,151 133,151.6 133.3,152.2 133.5,152.7 133.8,153.3 134,153.8 134.3,154.4 134.5,154.9 134.8,155.4 135,156 135.3,156.5 135.5,157 135.8,157.5 136,158 136.3,158.5 136.5,159 136.8,159.5 137,160 137.3,160.4 137.5,160.9 137.8,161.4 138,161.8 138.3,162.3 138.5,162.7 138.8,163.2 139,163.6 139.3,164 139.5,164.4 139.8,164.9 140,165.3 140.3,165.7 140.5,166.1 140.8,166.5 141,166.9 141.3,167.2 141.5,167.6 141.8,168 142,168.4 142.3,168.7 142.5,169.1 142.8,169.4 143,169.8 143.3,170.1 143.5,170.4 143.8,170.8 144,171.1 144.3,171.4 144.5,171.7 144.8,172 145,172.3 145.3,172.6 145.5,172.9 145.8,173.2 146,173.5 146.3,173.7 146.5,174 146.8,174.2 147,174.5 147.3,174.7 147.5,175 147.8,175.2 148,175.5 148.3,175.7 148.5,175.9 148.8,176.1 149,176.3 149.3,176.5 149.5,176.7 149.8,176.9 150,177.1 150.3,177.3 150.5,177.4 150.8,177.6 151,177.8 151.3,177.9 151.5,178.1 151.8,178.2 152,178.4 152.3,178.5 152.5,178.6 152.8,178.7 153,178.9 153.3,179 153.5,179.1 153.8,179.2 154,179.3 154.3,179.4 154.5,179.4 154.8,179.5 155,179.6 155.3,179.7 155.5,179.7 155.8,179.8 156,179.8 156.3,179.9 156.5,179.9 156.8,179.9 157,180 157.3,180 157.5,180 157.8,180 158,180 158.3,180 158.5,180 158.8,180 159,180 159.3,179.9 159.5,179.9 159.8,179.9 160,179.8 160.3,179.8 160.5,179.7 160.8,179.7 161,179.6 161.3,179.5 161.5,179.4 161.8,179.4 162,179.3 162.3,179.2 162.5,179.1 162.8,179 163,178.9 163.3,178.7 163.5,178.6 163.8,178.5 164,178.4 164.3,178.2 164.5,178.1 164.8,177.9 165,177.8 165.3,177.6 165.5,177.4 165.8,177.3 166,177.1 166.3,176.9 166.5,176.7 166.8,176.5 167,176.3 167.3,176.1 167.5,175.9 167.8,175.7 168,175.5 168.3,175.2 168.5,175 168.8,174.7 169,174.5 169.3,174.2 169.5,174 169.8,173.7 170,173.5 170.3,173.2 170.5,172.9 170.8,172.6 171,172.3 171.3,172 171.5,171.7 171.8,171.4 172,171.1 172.3,170.8 172.5,170.4 172.8,170.1 173,169.8 173.3,169.4 173.5,169.1 173.8,168.7 174,168.4 174.3,168 174.5,167.6 174.8,167.2 175,166.9 175.3,166.5 175.5,166.1 175.8,165.7 176,165.3 176.3,164.9 176.5,164.4 176.8,164 177,163.6 177.3,163.2 177.5,162.7 177.8,162.3 178,161.8 178.3,161.4 178.5,160.9 178.8,160.4 179,160 179.3,159.5 179.5,159 179.8,158.5 180,158 180.3,157.5 180.5,157 180.8,156.5 181,156 181.3,155.4 181.5,154.9 181.8,154.4 182,153.8 182.3,153.3 182.5,152.7 182.8,152.2 183,151.6 183.3,151 183.5,150.4 183.8,149.9 184,149.3 184.3,148.7 184.5,148.1 184.8,147.5 185,146.9 185.3,146.2 185.5,145.6 185.8,145 186,144.4 186.3,143.7 186.5,143.1 186.8,142.4 187,141.8 187.3,141.1 187.5,140.4 187.8,139.8 188,139.1 188.3,138.4 188.5,137.7 188.8,137 189,136.3 189.3,135.6 189.5,134.9 189.8,134.2 190,133.5 190.3,132.7 190.5,132 190.8,131.2 191,130.5 191.3,129.7 191.5,129 191.8,128.2 192,127.5 192.3,126.7 192.5,125.9 192.8,125.1 193,124.3 193.3,123.5 193.5,122.7 193.8,121.9 194,121.1 194.3,120.3 194.5,119.4 194.8,118.6 195,117.8 195.3,116.9 195.5,116.1 195.8,115.2 196,114.4 196.3,113.5 196.5,112.6 196.8,111.7 197,110.9 197.3,110 197.5,109.1 197.8,108.2 198,107.3 198.3,106.4 198.5,105.4 198.8,104.5 199,103.6 199.3,102.7 199.5,101.7 199.8,100.8 200,99.8 200.3,98.9 200.5,97.9 200.8,96.9 201,96 201.3,95 201.5,94 201.8,93 202,92 202.3,91 202.5,90 202.8,89 203,88 203.3,86.9 203.5,85.9 203.8,84.9 204,83.8 204.3,82.8 204.5,81.7 204.8,80.7 205,79.6 205.3,78.5 205.5,77.4 205.8,76.4 206,75.3 206.3,74.2 206.5,73.1 206.8,72 207,70.9 207.3,69.7 207.5,68.6 207.8,67.5 208,66.4 208.3,65.2 208.5,64.1 208.8,62.9 209,61.8 209.3,60.6 209.5,59.4 209.8,58.3 210,57.1 210.3,55.9 210.5,54.7 210.8,53.5 211,52.3 211.3,51.1 211.5,49.9 211.8,48.7 212,47.5 212.3,46.2 212.5,45 212.8,43.7 213,42.5 213.3,41.2 213.5,40 213.8,38.7 214,37.5 214.3,36.2 214.5,34.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="100,27.1 106.8,36 97,37.8" fill="currentColor"/>
  <polygon points="216,27.1 219,37.8 209.2,36" fill="currentColor"/>
  <circle cx="114" cy="92" r="4" fill="currentColor"/>
  <circle cx="202" cy="92" r="4" fill="currentColor"/>
  <text x="102.8" y="112.2" font-size="13" fill="currentColor" text-anchor="end">(−1, 4)</text>
  <text x="213.2" y="112.2" font-size="13" fill="currentColor" text-anchor="start">(3, 4)</text>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A smooth curve rising from the lower left to a high point at (0, 2), dipping to a shallow low point near (4.8, 0.7), then rising again to the right. Black dots mark the points (0, 2) and (6, 1).","xMin":-6,"xMax":7,"yMin":-4,"yMax":4,"cubics":[{"a":0.023148148148148147,"b":-0.16666666666666666,"c":0,"d":2,"to":6.8}],"points":[{"at":[0,2]},{"at":[6,1]}]}'>
<svg role="img" aria-label="A smooth curve rising from the lower left to a high point at (0, 2), dipping to a shallow low point near (4.8, 0.7), then rising again to the right. Black dots mark the points (0, 2) and (6, 1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 212" width="312" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="186" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="186" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="186" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="186" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="186" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="186" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="186" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="186" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="186" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="186" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="186" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="186" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="186" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="286" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="286" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="286" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="286" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="286" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="286" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="286" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="106" x2="288" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="298,106 288,111 288,101" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,106 24,101 24,111" fill="currentColor"/>
  <polygon points="146,198 141,188 151,188" fill="currentColor"/>
  <text x="296" y="98" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <polyline points="55.3,177.8 55.5,177.1 55.8,176.4 56,175.7 56.3,175 56.5,174.2 56.8,173.5 57,172.8 57.3,172.1 57.5,171.4 57.8,170.7 58,170 58.3,169.3 58.5,168.6 58.8,167.9 59,167.2 59.3,166.5 59.5,165.8 59.8,165.1 60,164.4 60.3,163.8 60.5,163.1 60.8,162.4 61,161.7 61.3,161.1 61.5,160.4 61.8,159.8 62,159.1 62.3,158.4 62.5,157.8 62.8,157.1 63,156.5 63.3,155.9 63.5,155.2 63.8,154.6 64,153.9 64.3,153.3 64.5,152.7 64.8,152.1 65,151.4 65.3,150.8 65.5,150.2 65.8,149.6 66,149 66.3,148.4 66.5,147.7 66.8,147.1 67,146.5 67.3,145.9 67.5,145.3 67.8,144.8 68,144.2 68.3,143.6 68.5,143 68.8,142.4 69,141.8 69.3,141.3 69.5,140.7 69.8,140.1 70,139.5 70.3,139 70.5,138.4 70.8,137.8 71,137.3 71.3,136.7 71.5,136.2 71.8,135.6 72,135.1 72.3,134.5 72.5,134 72.8,133.5 73,132.9 73.3,132.4 73.5,131.9 73.8,131.3 74,130.8 74.3,130.3 74.5,129.8 74.8,129.2 75,128.7 75.3,128.2 75.5,127.7 75.8,127.2 76,126.7 76.3,126.2 76.5,125.7 76.8,125.2 77,124.7 77.3,124.2 77.5,123.7 77.8,123.2 78,122.7 78.3,122.2 78.5,121.8 78.8,121.3 79,120.8 79.3,120.3 79.5,119.9 79.8,119.4 80,118.9 80.3,118.5 80.5,118 80.8,117.6 81,117.1 81.3,116.6 81.5,116.2 81.8,115.7 82,115.3 82.3,114.9 82.5,114.4 82.8,114 83,113.5 83.3,113.1 83.5,112.7 83.8,112.3 84,111.8 84.3,111.4 84.5,111 84.8,110.6 85,110.1 85.3,109.7 85.5,109.3 85.8,108.9 86,108.5 86.3,108.1 86.5,107.7 86.8,107.3 87,106.9 87.3,106.5 87.5,106.1 87.8,105.7 88,105.3 88.3,104.9 88.5,104.6 88.8,104.2 89,103.8 89.3,103.4 89.5,103 89.8,102.7 90,102.3 90.3,101.9 90.5,101.6 90.8,101.2 91,100.8 91.3,100.5 91.5,100.1 91.8,99.8 92,99.4 92.3,99.1 92.5,98.7 92.8,98.4 93,98 93.3,97.7 93.5,97.3 93.8,97 94,96.7 94.3,96.3 94.5,96 94.8,95.7 95,95.4 95.3,95 95.5,94.7 95.8,94.4 96,94.1 96.3,93.8 96.5,93.4 96.8,93.1 97,92.8 97.3,92.5 97.5,92.2 97.8,91.9 98,91.6 98.3,91.3 98.5,91 98.8,90.7 99,90.4 99.3,90.1 99.5,89.8 99.8,89.6 100,89.3 100.3,89 100.5,88.7 100.8,88.4 101,88.1 101.3,87.9 101.5,87.6 101.8,87.3 102,87.1 102.3,86.8 102.5,86.5 102.8,86.3 103,86 103.3,85.8 103.5,85.5 103.8,85.2 104,85 104.3,84.7 104.5,84.5 104.8,84.2 105,84 105.3,83.8 105.5,83.5 105.8,83.3 106,83 106.3,82.8 106.5,82.6 106.8,82.3 107,82.1 107.3,81.9 107.5,81.7 107.8,81.4 108,81.2 108.3,81 108.5,80.8 108.8,80.6 109,80.3 109.3,80.1 109.5,79.9 109.8,79.7 110,79.5 110.3,79.3 110.5,79.1 110.8,78.9 111,78.7 111.3,78.5 111.5,78.3 111.8,78.1 112,77.9 112.3,77.7 112.5,77.5 112.8,77.3 113,77.2 113.3,77 113.5,76.8 113.8,76.6 114,76.4 114.3,76.3 114.5,76.1 114.8,75.9 115,75.7 115.3,75.6 115.5,75.4 115.8,75.2 116,75.1 116.3,74.9 116.5,74.7 116.8,74.6 117,74.4 117.3,74.3 117.5,74.1 117.8,74 118,73.8 118.3,73.7 118.5,73.5 118.8,73.4 119,73.2 119.3,73.1 119.5,72.9 119.8,72.8 120,72.7 120.3,72.5 120.5,72.4 120.8,72.2 121,72.1 121.3,72 121.5,71.9 121.8,71.7 122,71.6 122.3,71.5 122.5,71.4 122.8,71.2 123,71.1 123.3,71 123.5,70.9 123.8,70.8 124,70.6 124.3,70.5 124.5,70.4 124.8,70.3 125,70.2 125.3,70.1 125.5,70 125.8,69.9 126,69.8 126.3,69.7 126.5,69.6 126.8,69.5 127,69.4 127.3,69.3 127.5,69.2 127.8,69.1 128,69 128.3,68.9 128.5,68.9 128.8,68.8 129,68.7 129.3,68.6 129.5,68.5 129.8,68.4 130,68.4 130.3,68.3 130.5,68.2 130.8,68.1 131,68.1 131.3,68 131.5,67.9 131.8,67.9 132,67.8 132.3,67.7 132.5,67.7 132.8,67.6 133,67.5 133.3,67.5 133.5,67.4 133.8,67.4 134,67.3 134.3,67.2 134.5,67.2 134.8,67.1 135,67.1 135.3,67 135.5,67 135.8,66.9 136,66.9 136.3,66.8 136.5,66.8 136.8,66.8 137,66.7 137.3,66.7 137.5,66.6 137.8,66.6 138,66.6 138.3,66.5 138.5,66.5 138.8,66.5 139,66.4 139.3,66.4 139.5,66.4 139.8,66.3 140,66.3 140.3,66.3 140.5,66.3 140.8,66.2 141,66.2 141.3,66.2 141.5,66.2 141.8,66.2 142,66.1 142.3,66.1 142.5,66.1 142.8,66.1 143,66.1 143.3,66.1 143.5,66.1 143.8,66 144,66 144.3,66 144.5,66 144.8,66 145,66 145.3,66 145.5,66 145.8,66 146,66 146.3,66 146.5,66 146.8,66 147,66 147.3,66 147.5,66 147.8,66 148,66 148.3,66 148.5,66.1 148.8,66.1 149,66.1 149.3,66.1 149.5,66.1 149.8,66.1 150,66.1 150.3,66.1 150.5,66.2 150.8,66.2 151,66.2 151.3,66.2 151.5,66.2 151.8,66.3 152,66.3 152.3,66.3 152.5,66.3 152.8,66.4 153,66.4 153.3,66.4 153.5,66.4 153.8,66.5 154,66.5 154.3,66.5 154.5,66.6 154.8,66.6 155,66.6 155.3,66.7 155.5,66.7 155.8,66.7 156,66.8 156.3,66.8 156.5,66.9 156.8,66.9 157,66.9 157.3,67 157.5,67 157.8,67.1 158,67.1 158.3,67.1 158.5,67.2 158.8,67.2 159,67.3 159.3,67.3 159.5,67.4 159.8,67.4 160,67.5 160.3,67.5 160.5,67.6 160.8,67.6 161,67.7 161.3,67.7 161.5,67.8 161.8,67.8 162,67.9 162.3,68 162.5,68 162.8,68.1 163,68.1 163.3,68.2 163.5,68.2 163.8,68.3 164,68.4 164.3,68.4 164.5,68.5 164.8,68.5 165,68.6 165.3,68.7 165.5,68.7 165.8,68.8 166,68.9 166.3,68.9 166.5,69 166.8,69.1 167,69.1 167.3,69.2 167.5,69.3 167.8,69.3 168,69.4 168.3,69.5 168.5,69.6 168.8,69.6 169,69.7 169.3,69.8 169.5,69.9 169.8,69.9 170,70 170.3,70.1 170.5,70.2 170.8,70.2 171,70.3 171.3,70.4 171.5,70.5 171.8,70.5 172,70.6 172.3,70.7 172.5,70.8 172.8,70.9 173,70.9 173.3,71 173.5,71.1 173.8,71.2 174,71.3 174.3,71.3 174.5,71.4 174.8,71.5 175,71.6 175.3,71.7 175.5,71.8 175.8,71.9 176,71.9 176.3,72 176.5,72.1 176.8,72.2 177,72.3 177.3,72.4 177.5,72.5 177.8,72.5 178,72.6 178.3,72.7 178.5,72.8 178.8,72.9 179,73 179.3,73.1 179.5,73.2 179.8,73.3 180,73.4 180.3,73.5 180.5,73.5 180.8,73.6 181,73.7 181.3,73.8 181.5,73.9 181.8,74 182,74.1 182.3,74.2 182.5,74.3 182.8,74.4 183,74.5 183.3,74.6 183.5,74.7 183.8,74.8 184,74.9 184.3,75 184.5,75 184.8,75.1 185,75.2 185.3,75.3 185.5,75.4 185.8,75.5 186,75.6 186.3,75.7 186.5,75.8 186.8,75.9 187,76 187.3,76.1 187.5,76.2 187.8,76.3 188,76.4 188.3,76.5 188.5,76.6 188.8,76.7 189,76.8 189.3,76.9 189.5,77 189.8,77.1 190,77.2 190.3,77.3 190.5,77.4 190.8,77.5 191,77.6 191.3,77.7 191.5,77.8 191.8,77.9 192,78 192.3,78.1 192.5,78.2 192.8,78.3 193,78.4 193.3,78.5 193.5,78.6 193.8,78.7 194,78.8 194.3,78.9 194.5,79 194.8,79.1 195,79.2 195.3,79.3 195.5,79.4 195.8,79.5 196,79.6 196.3,79.7 196.5,79.8 196.8,79.9 197,80 197.3,80.1 197.5,80.2 197.8,80.3 198,80.4 198.3,80.5 198.5,80.6 198.8,80.7 199,80.8 199.3,80.9 199.5,81 199.8,81.1 200,81.2 200.3,81.3 200.5,81.4 200.8,81.5 201,81.6 201.3,81.7 201.5,81.8 201.8,81.9 202,82 202.3,82.1 202.5,82.2 202.8,82.3 203,82.4 203.3,82.5 203.5,82.6 203.8,82.6 204,82.7 204.3,82.8 204.5,82.9 204.8,83 205,83.1 205.3,83.2 205.5,83.3 205.8,83.4 206,83.5 206.3,83.6 206.5,83.7 206.8,83.8 207,83.9 207.3,84 207.5,84.1 207.8,84.1 208,84.2 208.3,84.3 208.5,84.4 208.8,84.5 209,84.6 209.3,84.7 209.5,84.8 209.8,84.9 210,85 210.3,85.1 210.5,85.1 210.8,85.2 211,85.3 211.3,85.4 211.5,85.5 211.8,85.6 212,85.7 212.3,85.7 212.5,85.8 212.8,85.9 213,86 213.3,86.1 213.5,86.2 213.8,86.3 214,86.3 214.3,86.4 214.5,86.5 214.8,86.6 215,86.7 215.3,86.7 215.5,86.8 215.8,86.9 216,87 216.3,87.1 216.5,87.1 216.8,87.2 217,87.3 217.3,87.4 217.5,87.4 217.8,87.5 218,87.6 218.3,87.7 218.5,87.7 218.8,87.8 219,87.9 219.3,88 219.5,88 219.8,88.1 220,88.2 220.3,88.3 220.5,88.3 220.8,88.4 221,88.5 221.3,88.5 221.5,88.6 221.8,88.7 222,88.7 222.3,88.8 222.5,88.9 222.8,88.9 223,89 223.3,89.1 223.5,89.1 223.8,89.2 224,89.2 224.3,89.3 224.5,89.4 224.8,89.4 225,89.5 225.3,89.5 225.5,89.6 225.8,89.6 226,89.7 226.3,89.8 226.5,89.8 226.8,89.9 227,89.9 227.3,90 227.5,90 227.8,90.1 228,90.1 228.3,90.2 228.5,90.2 228.8,90.3 229,90.3 229.3,90.4 229.5,90.4 229.8,90.5 230,90.5 230.3,90.5 230.5,90.6 230.8,90.6 231,90.7 231.3,90.7 231.5,90.7 231.8,90.8 232,90.8 232.3,90.9 232.5,90.9 232.8,90.9 233,91 233.3,91 233.5,91 233.8,91.1 234,91.1 234.3,91.1 234.5,91.2 234.8,91.2 235,91.2 235.3,91.2 235.5,91.3 235.8,91.3 236,91.3 236.3,91.3 236.5,91.4 236.8,91.4 237,91.4 237.3,91.4 237.5,91.4 237.8,91.5 238,91.5 238.3,91.5 238.5,91.5 238.8,91.5 239,91.5 239.3,91.5 239.5,91.5 239.8,91.6 240,91.6 240.3,91.6 240.5,91.6 240.8,91.6 241,91.6 241.3,91.6 241.5,91.6 241.8,91.6 242,91.6 242.3,91.6 242.5,91.6 242.8,91.6 243,91.6 243.3,91.6 243.5,91.6 243.8,91.6 244,91.6 244.3,91.6 244.5,91.5 244.8,91.5 245,91.5 245.3,91.5 245.5,91.5 245.8,91.5 246,91.5 246.3,91.4 246.5,91.4 246.8,91.4 247,91.4 247.3,91.4 247.5,91.3 247.8,91.3 248,91.3 248.3,91.3 248.5,91.2 248.8,91.2 249,91.2 249.3,91.1 249.5,91.1 249.8,91.1 250,91 250.3,91 250.5,91 250.8,90.9 251,90.9 251.3,90.8 251.5,90.8 251.8,90.8 252,90.7 252.3,90.7 252.5,90.6 252.8,90.6 253,90.5 253.3,90.5 253.5,90.4 253.8,90.4 254,90.3 254.3,90.2 254.5,90.2 254.8,90.1 255,90.1 255.3,90 255.5,89.9 255.8,89.9 256,89.8 256.3,89.7 256.5,89.7 256.8,89.6 257,89.5 257.3,89.5 257.5,89.4 257.8,89.3 258,89.2 258.3,89.2 258.5,89.1 258.8,89 259,88.9 259.3,88.8 259.5,88.7 259.8,88.7 260,88.6 260.3,88.5 260.5,88.4 260.8,88.3 261,88.2 261.3,88.1 261.5,88 261.8,87.9 262,87.8 262.3,87.7 262.5,87.6 262.8,87.5 263,87.4 263.3,87.3 263.5,87.2 263.8,87.1 264,87 264.3,86.8 264.5,86.7 264.8,86.6 265,86.5 265.3,86.4 265.5,86.2 265.8,86.1 266,86 266.3,85.9 266.5,85.7 266.8,85.6 267,85.5 267.3,85.4 267.5,85.2 267.8,85.1 268,84.9 268.3,84.8 268.5,84.7 268.8,84.5 269,84.4 269.3,84.2 269.5,84.1 269.8,83.9 270,83.8 270.3,83.6 270.5,83.5 270.8,83.3 271,83.2 271.3,83 271.5,82.9 271.8,82.7 272,82.5 272.3,82.4 272.5,82.2 272.8,82 273,81.9 273.3,81.7 273.5,81.5 273.8,81.3 274,81.2 274.3,81 274.5,80.8 274.8,80.6 275,80.4 275.3,80.3 275.5,80.1 275.8,79.9 275.9,79.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="52.8,185.4 51.2,174.3 60.7,177.5" fill="currentColor"/>
  <polygon points="282,74.6 277.6,84.9 271.1,77.3" fill="currentColor"/>
  <circle cx="146" cy="66" r="4" fill="currentColor"/>
  <circle cx="266" cy="86" r="4" fill="currentColor"/>
</svg>
</div>

The **vertical line test** can be used to determine whether a graph
represents a function. If we can draw any vertical line that intersects a
graph more than once, then the graph does *not* define a function because a
function has only one output value for each input value.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A wavy curve that rises and falls but never doubles back. A dashed vertical line crosses it exactly once, so the graph is a function.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"curves":[{"kind":"sine","a":1.6,"b":1.5707963267948966,"h":-3,"k":-0.2,"from":-2.75,"to":1.95}],"lines":[{"x":1.2,"dashed":true,"arrows":false}]}'>
<svg role="img" aria-label="A wavy curve that rises and falls but never doubles back. A dashed vertical line crosses it exactly once, so the graph is a function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="106" x2="188" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="198,106 188,111 188,101" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,106 24,101 24,111" fill="currentColor"/>
  <polygon points="106,198 101,188 111,188" fill="currentColor"/>
  <text x="196" y="98" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="130" y1="192" x2="130" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="54.3,90.5 54.5,90.2 54.8,89.7 55,89.2 55.3,88.7 55.5,88.3 55.8,87.8 56,87.4 56.3,86.9 56.5,86.5 56.8,86.1 57,85.7 57.3,85.3 57.5,84.9 57.8,84.5 58,84.1 58.3,83.7 58.5,83.4 58.8,83 59,82.7 59.3,82.4 59.5,82.1 59.8,81.8 60,81.5 60.3,81.2 60.5,80.9 60.8,80.7 61,80.4 61.3,80.2 61.5,80 61.8,79.8 62,79.6 62.3,79.4 62.5,79.2 62.8,79 63,78.9 63.3,78.7 63.5,78.6 63.8,78.5 64,78.4 64.3,78.3 64.5,78.2 64.8,78.2 65,78.1 65.3,78.1 65.5,78 65.8,78 66,78 66.3,78 66.5,78 66.8,78.1 67,78.1 67.3,78.2 67.5,78.2 67.8,78.3 68,78.4 68.3,78.5 68.5,78.6 68.8,78.7 69,78.9 69.3,79 69.5,79.2 69.8,79.4 70,79.6 70.3,79.8 70.5,80 70.8,80.2 71,80.4 71.3,80.7 71.5,80.9 71.8,81.2 72,81.5 72.3,81.8 72.5,82.1 72.8,82.4 73,82.7 73.3,83 73.5,83.4 73.8,83.7 74,84.1 74.3,84.5 74.5,84.9 74.8,85.3 75,85.7 75.3,86.1 75.5,86.5 75.8,86.9 76,87.4 76.3,87.8 76.5,88.3 76.8,88.7 77,89.2 77.3,89.7 77.5,90.2 77.8,90.7 78,91.2 78.3,91.7 78.5,92.2 78.8,92.7 79,93.3 79.3,93.8 79.5,94.4 79.8,94.9 80,95.5 80.3,96 80.5,96.6 80.8,97.2 81,97.8 81.3,98.3 81.5,98.9 81.8,99.5 82,100.1 82.3,100.7 82.5,101.3 82.8,101.9 83,102.5 83.3,103.1 83.5,103.8 83.8,104.4 84,105 84.3,105.6 84.5,106.2 84.8,106.9 85,107.5 85.3,108.1 85.5,108.7 85.8,109.4 86,110 86.3,110.6 86.5,111.3 86.8,111.9 87,112.5 87.3,113.1 87.5,113.8 87.8,114.4 88,115 88.3,115.6 88.5,116.2 88.8,116.9 89,117.5 89.3,118.1 89.5,118.7 89.8,119.3 90,119.9 90.3,120.5 90.5,121.1 90.8,121.7 91,122.2 91.3,122.8 91.5,123.4 91.8,124 92,124.5 92.3,125.1 92.5,125.6 92.8,126.2 93,126.7 93.3,127.3 93.5,127.8 93.8,128.3 94,128.8 94.3,129.3 94.5,129.8 94.8,130.3 95,130.8 95.3,131.3 95.5,131.7 95.8,132.2 96,132.6 96.3,133.1 96.5,133.5 96.8,133.9 97,134.3 97.3,134.7 97.5,135.1 97.8,135.5 98,135.9 98.3,136.3 98.5,136.6 98.8,137 99,137.3 99.3,137.6 99.5,137.9 99.8,138.2 100,138.5 100.3,138.8 100.5,139.1 100.8,139.3 101,139.6 101.3,139.8 101.5,140 101.8,140.2 102,140.4 102.3,140.6 102.5,140.8 102.8,141 103,141.1 103.3,141.3 103.5,141.4 103.8,141.5 104,141.6 104.3,141.7 104.5,141.8 104.8,141.8 105,141.9 105.3,141.9 105.5,142 105.8,142 106,142 106.3,142 106.5,142 106.8,141.9 107,141.9 107.3,141.8 107.5,141.8 107.8,141.7 108,141.6 108.3,141.5 108.5,141.4 108.8,141.3 109,141.1 109.3,141 109.5,140.8 109.8,140.6 110,140.4 110.3,140.2 110.5,140 110.8,139.8 111,139.6 111.3,139.3 111.5,139.1 111.8,138.8 112,138.5 112.3,138.2 112.5,137.9 112.8,137.6 113,137.3 113.3,137 113.5,136.6 113.8,136.3 114,135.9 114.3,135.5 114.5,135.1 114.8,134.7 115,134.3 115.3,133.9 115.5,133.5 115.8,133.1 116,132.6 116.3,132.2 116.5,131.7 116.8,131.3 117,130.8 117.3,130.3 117.5,129.8 117.8,129.3 118,128.8 118.3,128.3 118.5,127.8 118.8,127.3 119,126.7 119.3,126.2 119.5,125.6 119.8,125.1 120,124.5 120.3,124 120.5,123.4 120.8,122.8 121,122.2 121.3,121.7 121.5,121.1 121.8,120.5 122,119.9 122.3,119.3 122.5,118.7 122.8,118.1 123,117.5 123.3,116.9 123.5,116.2 123.8,115.6 124,115 124.3,114.4 124.5,113.8 124.8,113.1 125,112.5 125.3,111.9 125.5,111.3 125.8,110.6 126,110 126.3,109.4 126.5,108.7 126.8,108.1 127,107.5 127.3,106.9 127.5,106.2 127.8,105.6 128,105 128.3,104.4 128.5,103.8 128.8,103.1 129,102.5 129.3,101.9 129.5,101.3 129.8,100.7 130,100.1 130.3,99.5 130.5,98.9 130.8,98.3 131,97.8 131.3,97.2 131.5,96.6 131.8,96 132,95.5 132.3,94.9 132.5,94.4 132.8,93.8 133,93.3 133.3,92.7 133.5,92.2 133.8,91.7 134,91.2 134.3,90.7 134.5,90.2 134.8,89.7 135,89.2 135.3,88.7 135.5,88.3 135.8,87.8 136,87.4 136.3,86.9 136.5,86.5 136.8,86.1 137,85.7 137.3,85.3 137.5,84.9 137.8,84.5 138,84.1 138.3,83.7 138.5,83.4 138.8,83 138.8,82.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="51,97.8 50.6,86.6 59.7,90.8" fill="currentColor"/>
  <polygon points="145,78.1 140.2,88.2 134,80.3" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A sideways parabola opening to the right. A dashed vertical line crosses it at two points, so the graph is not a function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="106" x2="188" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="198,106 188,111 188,101" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,106 24,101 24,111" fill="currentColor"/>
  <polygon points="106,198 101,188 111,188" fill="currentColor"/>
  <text x="196" y="98" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="130" y1="192" x2="130" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="166.5,183.3 166.4,183.3 165.8,183 165.1,182.8 164.4,182.5 163.7,182.3 163.1,182 162.4,181.8 161.8,181.5 161.1,181.3 160.4,181 159.8,180.8 159.1,180.5 158.5,180.3 157.8,180 157.2,179.8 156.5,179.5 155.9,179.3 155.3,179 154.6,178.8 154,178.5 153.4,178.3 152.7,178 152.1,177.8 151.5,177.5 150.8,177.3 150.2,177 149.6,176.8 149,176.5 148.4,176.3 147.8,176 147.1,175.8 146.5,175.5 145.9,175.3 145.3,175 144.7,174.8 144.1,174.5 143.5,174.3 142.9,174 142.3,173.8 141.7,173.5 141.1,173.3 140.6,173 140,172.8 139.4,172.5 138.8,172.3 138.2,172 137.7,171.8 137.1,171.5 136.5,171.3 135.9,171 135.4,170.8 134.8,170.5 134.2,170.3 133.7,170 133.1,169.8 132.6,169.5 132,169.3 131.5,169 130.9,168.8 130.4,168.5 129.8,168.3 129.3,168 128.7,167.8 128.2,167.5 127.7,167.3 127.1,167 126.6,166.8 126.1,166.5 125.5,166.3 125,166 124.5,165.8 124,165.5 123.4,165.3 122.9,165 122.4,164.8 121.9,164.5 121.4,164.3 120.9,164 120.4,163.8 119.9,163.5 119.4,163.3 118.9,163 118.4,162.8 117.9,162.5 117.4,162.3 116.9,162 116.4,161.8 115.9,161.5 115.4,161.3 114.9,161 114.5,160.8 114,160.5 113.5,160.3 113,160 112.6,159.8 112.1,159.5 111.6,159.3 111.2,159 110.7,158.8 110.2,158.5 109.8,158.3 109.3,158 108.9,157.8 108.4,157.5 108,157.3 107.5,157 107.1,156.8 106.6,156.5 106.2,156.3 105.8,156 105.3,155.8 104.9,155.5 104.4,155.3 104,155 103.6,154.8 103.2,154.5 102.7,154.3 102.3,154 101.9,153.8 101.5,153.5 101.1,153.3 100.7,153 100.2,152.8 99.8,152.5 99.4,152.3 99,152 98.6,151.8 98.2,151.5 97.8,151.3 97.4,151 97,150.8 96.7,150.5 96.3,150.3 95.9,150 95.5,149.8 95.1,149.5 94.7,149.3 94.4,149 94,148.8 93.6,148.5 93.2,148.3 92.9,148 92.5,147.8 92.1,147.5 91.8,147.3 91.4,147 91.1,146.8 90.7,146.5 90.4,146.3 90,146 89.7,145.8 89.3,145.5 89,145.3 88.6,145 88.3,144.8 87.9,144.5 87.6,144.3 87.3,144 86.9,143.8 86.6,143.5 86.3,143.3 86,143 85.6,142.8 85.3,142.5 85,142.3 84.7,142 84.4,141.8 84.1,141.5 83.7,141.3 83.4,141 83.1,140.8 82.8,140.5 82.5,140.3 82.2,140 81.9,139.8 81.6,139.5 81.3,139.3 81.1,139 80.8,138.8 80.5,138.5 80.2,138.3 79.9,138 79.6,137.8 79.4,137.5 79.1,137.3 78.8,137 78.5,136.8 78.3,136.5 78,136.3 77.8,136 77.5,135.8 77.2,135.5 77,135.3 76.7,135 76.5,134.8 76.2,134.5 76,134.3 75.7,134 75.5,133.8 75.2,133.5 75,133.3 74.8,133 74.5,132.8 74.3,132.5 74.1,132.3 73.8,132 73.6,131.8 73.4,131.5 73.2,131.3 72.9,131 72.7,130.8 72.5,130.5 72.3,130.3 72.1,130 71.9,129.8 71.7,129.5 71.5,129.3 71.3,129 71.1,128.8 70.9,128.5 70.7,128.3 70.5,128 70.3,127.8 70.1,127.5 69.9,127.3 69.7,127 69.5,126.8 69.4,126.5 69.2,126.3 69,126 68.8,125.8 68.7,125.5 68.5,125.3 68.3,125 68.2,124.8 68,124.5 67.8,124.3 67.7,124 67.5,123.8 67.4,123.5 67.2,123.3 67.1,123 66.9,122.8 66.8,122.5 66.6,122.3 66.5,122 66.3,121.8 66.2,121.5 66.1,121.3 65.9,121 65.8,120.8 65.7,120.5 65.6,120.3 65.4,120 65.3,119.8 65.2,119.5 65.1,119.3 65,119 64.8,118.8 64.7,118.5 64.6,118.3 64.5,118 64.4,117.8 64.3,117.5 64.2,117.3 64.1,117 64,116.8 63.9,116.5 63.8,116.3 63.7,116 63.7,115.8 63.6,115.5 63.5,115.3 63.4,115 63.3,114.8 63.3,114.5 63.2,114.3 63.1,114 63.1,113.8 63,113.5 62.9,113.3 62.9,113 62.8,112.8 62.7,112.5 62.7,112.3 62.6,112 62.6,111.8 62.5,111.5 62.5,111.3 62.4,111 62.4,110.8 62.4,110.5 62.3,110.3 62.3,110 62.2,109.8 62.2,109.5 62.2,109.3 62.2,109 62.1,108.8 62.1,108.5 62.1,108.3 62.1,108 62.1,107.8 62,107.5 62,107.3 62,107 62,106.8 62,106.5 62,106.3 62,106 62,105.8 62,105.5 62,105.3 62,105 62,104.8 62,104.5 62.1,104.3 62.1,104 62.1,103.8 62.1,103.5 62.1,103.3 62.2,103 62.2,102.8 62.2,102.5 62.2,102.3 62.3,102 62.3,101.8 62.4,101.5 62.4,101.3 62.4,101 62.5,100.8 62.5,100.5 62.6,100.3 62.6,100 62.7,99.8 62.7,99.5 62.8,99.3 62.9,99 62.9,98.8 63,98.5 63.1,98.3 63.1,98 63.2,97.8 63.3,97.5 63.3,97.3 63.4,97 63.5,96.8 63.6,96.5 63.7,96.3 63.7,96 63.8,95.8 63.9,95.5 64,95.3 64.1,95 64.2,94.8 64.3,94.5 64.4,94.3 64.5,94 64.6,93.8 64.7,93.5 64.8,93.3 65,93 65.1,92.8 65.2,92.5 65.3,92.3 65.4,92 65.6,91.8 65.7,91.5 65.8,91.3 65.9,91 66.1,90.8 66.2,90.5 66.3,90.3 66.5,90 66.6,89.8 66.8,89.5 66.9,89.3 67.1,89 67.2,88.8 67.4,88.5 67.5,88.3 67.7,88 67.8,87.8 68,87.5 68.2,87.3 68.3,87 68.5,86.8 68.7,86.5 68.8,86.3 69,86 69.2,85.8 69.4,85.5 69.5,85.3 69.7,85 69.9,84.8 70.1,84.5 70.3,84.3 70.5,84 70.7,83.8 70.9,83.5 71.1,83.3 71.3,83 71.5,82.8 71.7,82.5 71.9,82.3 72.1,82 72.3,81.8 72.5,81.5 72.7,81.3 72.9,81 73.2,80.8 73.4,80.5 73.6,80.3 73.8,80 74.1,79.8 74.3,79.5 74.5,79.3 74.8,79 75,78.8 75.2,78.5 75.5,78.3 75.7,78 76,77.8 76.2,77.5 76.5,77.3 76.7,77 77,76.8 77.2,76.5 77.5,76.3 77.8,76 78,75.8 78.3,75.5 78.5,75.3 78.8,75 79.1,74.8 79.4,74.5 79.6,74.3 79.9,74 80.2,73.8 80.5,73.5 80.8,73.3 81.1,73 81.3,72.8 81.6,72.5 81.9,72.3 82.2,72 82.5,71.8 82.8,71.5 83.1,71.3 83.4,71 83.7,70.8 84.1,70.5 84.4,70.3 84.7,70 85,69.8 85.3,69.5 85.6,69.3 86,69 86.3,68.8 86.6,68.5 86.9,68.3 87.3,68 87.6,67.8 87.9,67.5 88.3,67.3 88.6,67 89,66.8 89.3,66.5 89.7,66.3 90,66 90.4,65.8 90.7,65.5 91.1,65.3 91.4,65 91.8,64.8 92.1,64.5 92.5,64.3 92.9,64 93.2,63.8 93.6,63.5 94,63.3 94.4,63 94.7,62.8 95.1,62.5 95.5,62.3 95.9,62 96.3,61.7 96.7,61.5 97,61.3 97.4,61 97.8,60.8 98.2,60.5 98.6,60.3 99,60 99.4,59.8 99.8,59.5 100.2,59.2 100.7,59 101.1,58.8 101.5,58.5 101.9,58.3 102.3,58 102.7,57.8 103.2,57.5 103.6,57.3 104,57 104.4,56.7 104.9,56.5 105.3,56.3 105.8,56 106.2,55.8 106.6,55.5 107.1,55.3 107.5,55 108,54.8 108.4,54.5 108.9,54.2 109.3,54 109.8,53.8 110.2,53.5 110.7,53.3 111.2,53 111.6,52.8 112.1,52.5 112.6,52.3 113,52 113.5,51.7 114,51.5 114.5,51.3 114.9,51 115.4,50.8 115.9,50.5 116.4,50.3 116.9,50 117.4,49.8 117.9,49.5 118.4,49.2 118.9,49 119.4,48.8 119.9,48.5 120.4,48.3 120.9,48 121.4,47.8 121.9,47.5 122.4,47.3 122.9,47 123.4,46.7 124,46.5 124.5,46.3 125,46 125.5,45.8 126.1,45.5 126.6,45.3 127.1,45 127.7,44.8 128.2,44.5 128.7,44.2 129.3,44 129.8,43.8 130.4,43.5 130.9,43.3 131.5,43 132,42.8 132.6,42.5 133.1,42.3 133.7,42 134.2,41.8 134.8,41.5 135.4,41.3 135.9,41 136.5,40.8 137.1,40.5 137.7,40.3 138.2,40 138.8,39.8 139.4,39.5 140,39.3 140.6,39 141.1,38.8 141.7,38.5 142.3,38.3 142.9,38 143.5,37.8 144.1,37.5 144.7,37.3 145.3,37 145.9,36.8 146.5,36.5 147.1,36.3 147.8,36 148.4,35.8 149,35.5 149.6,35.3 150.2,35 150.8,34.8 151.5,34.5 152.1,34.3 152.7,34 153.4,33.8 154,33.5 154.6,33.3 155.3,33 155.9,32.8 156.5,32.5 157.2,32.3 157.8,32 158.5,31.8 159.1,31.5 159.8,31.3 160.4,31 161.1,30.8 161.8,30.5 162.4,30.3 163.1,30 163.7,29.8 164.4,29.5 165.1,29.3 165.8,29 166.4,28.8 166.5,28.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="174,186 162.9,187.3 166.3,177.9" fill="currentColor"/>
  <polygon points="174,26 166.3,34.1 162.9,24.7" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A circle centred at the origin. A dashed vertical line crosses it at two points, so the graph is not a function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="106" x2="188" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="188" stroke="currentColor" stroke-width="1"/>
  <polygon points="198,106 188,111 188,101" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,106 24,101 24,111" fill="currentColor"/>
  <polygon points="106,198 101,188 111,188" fill="currentColor"/>
  <text x="196" y="98" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="146" y1="192" x2="146" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <ellipse cx="106" cy="106" rx="60" ry="60" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

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

<div class="ap-figure">
<svg role="img" aria-label="A cubic curve with a local high point at (-1, 3) and a local low point at (1, -3), falling to the lower left and rising to the upper right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 252" width="212" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="186" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="186" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="186" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="186" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="186" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="186" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="186" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="186" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="186" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="188" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="198,126 188,131 188,121" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="106,238 101,228 111,228" fill="currentColor"/>
  <text x="196" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="103" y1="226" x2="109" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="103" y1="206" x2="109" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="103" y1="186" x2="109" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="103" y1="166" x2="109" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="103" y1="146" x2="109" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="103" y1="106" x2="109" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="103" y1="86" x2="109" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="103" y1="66" x2="109" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="103" y1="46" x2="109" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="103" y1="26" x2="109" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="64,214.6 64.3,211 64.5,207.3 64.8,203.6 65,200 65.3,196.4 65.5,192.9 65.8,189.4 66,186 66.3,182.7 66.5,179.4 66.8,176.1 67,172.9 67.3,169.8 67.5,166.7 67.8,163.7 68,160.8 68.3,157.9 68.5,155 68.8,152.2 69,149.4 69.3,146.7 69.5,144.1 69.8,141.5 70,139 70.3,136.5 70.5,134 70.8,131.6 71,129.3 71.3,127 71.5,124.7 71.8,122.5 72,120.4 72.3,118.3 72.5,116.2 72.8,114.2 73,112.3 73.3,110.3 73.5,108.5 73.8,106.7 74,104.9 74.3,103.1 74.5,101.5 74.8,99.8 75,98.2 75.3,96.7 75.5,95.1 75.8,93.7 76,92.3 76.3,90.9 76.5,89.5 76.8,88.2 77,87 77.3,85.7 77.5,84.6 77.8,83.4 78,82.3 78.3,81.3 78.5,80.2 78.8,79.3 79,78.3 79.3,77.4 79.5,76.5 79.8,75.7 80,74.9 80.3,74.2 80.5,73.4 80.8,72.7 81,72.1 81.3,71.5 81.5,70.9 81.8,70.4 82,69.8 82.3,69.4 82.5,68.9 82.8,68.5 83,68.1 83.3,67.8 83.5,67.5 83.8,67.2 84,66.9 84.3,66.7 84.5,66.5 84.8,66.4 85,66.2 85.3,66.1 85.5,66.1 85.8,66 86,66 86.3,66 86.5,66.1 86.8,66.1 87,66.2 87.3,66.3 87.5,66.5 87.8,66.7 88,66.9 88.3,67.1 88.5,67.3 88.8,67.6 89,67.9 89.3,68.2 89.5,68.6 89.8,69 90,69.4 90.3,69.8 90.5,70.2 90.8,70.7 91,71.2 91.3,71.7 91.5,72.2 91.8,72.7 92,73.3 92.3,73.9 92.5,74.5 92.8,75.1 93,75.7 93.3,76.4 93.5,77.1 93.8,77.8 94,78.5 94.3,79.2 94.5,80 94.8,80.7 95,81.5 95.3,82.3 95.5,83.1 95.8,83.9 96,84.8 96.3,85.6 96.5,86.5 96.8,87.3 97,88.2 97.3,89.1 97.5,90.1 97.8,91 98,91.9 98.3,92.9 98.5,93.8 98.8,94.8 99,95.8 99.3,96.8 99.5,97.8 99.8,98.8 100,99.8 100.3,100.8 100.5,101.9 100.8,102.9 101,104 101.3,105 101.5,106.1 101.8,107.2 102,108.2 102.3,109.3 102.5,110.4 102.8,111.5 103,112.6 103.3,113.7 103.5,114.8 103.8,115.9 104,117 104.3,118.1 104.5,119.3 104.8,120.4 105,121.5 105.3,122.6 105.5,123.8 105.8,124.9 106,126 106.3,127.1 106.5,128.2 106.8,129.4 107,130.5 107.3,131.6 107.5,132.7 107.8,133.9 108,135 108.3,136.1 108.5,137.2 108.8,138.3 109,139.4 109.3,140.5 109.5,141.6 109.8,142.7 110,143.8 110.3,144.8 110.5,145.9 110.8,147 111,148 111.3,149.1 111.5,150.1 111.8,151.2 112,152.2 112.3,153.2 112.5,154.2 112.8,155.2 113,156.2 113.3,157.2 113.5,158.2 113.8,159.1 114,160.1 114.3,161 114.5,161.9 114.8,162.9 115,163.8 115.3,164.7 115.5,165.5 115.8,166.4 116,167.3 116.3,168.1 116.5,168.9 116.8,169.7 117,170.5 117.3,171.3 117.5,172 117.8,172.8 118,173.5 118.3,174.2 118.5,174.9 118.8,175.6 119,176.3 119.3,176.9 119.5,177.5 119.8,178.1 120,178.7 120.3,179.3 120.5,179.8 120.8,180.3 121,180.8 121.3,181.3 121.5,181.8 121.8,182.2 122,182.6 122.3,183 122.5,183.4 122.8,183.8 123,184.1 123.3,184.4 123.5,184.7 123.8,184.9 124,185.1 124.3,185.3 124.5,185.5 124.8,185.7 125,185.8 125.3,185.9 125.5,185.9 125.8,186 126,186 126.3,186 126.5,185.9 126.8,185.9 127,185.8 127.3,185.6 127.5,185.5 127.8,185.3 128,185.1 128.3,184.8 128.5,184.5 128.8,184.2 129,183.9 129.3,183.5 129.5,183.1 129.8,182.6 130,182.2 130.3,181.6 130.5,181.1 130.8,180.5 131,179.9 131.3,179.3 131.5,178.6 131.8,177.8 132,177.1 132.3,176.3 132.5,175.5 132.8,174.6 133,173.7 133.3,172.7 133.5,171.8 133.8,170.7 134,169.7 134.3,168.6 134.5,167.4 134.8,166.3 135,165 135.3,163.8 135.5,162.5 135.8,161.1 136,159.8 136.3,158.3 136.5,156.9 136.8,155.3 137,153.8 137.3,152.2 137.5,150.5 137.8,148.9 138,147.1 138.3,145.3 138.5,143.5 138.8,141.7 139,139.7 139.3,137.8 139.5,135.8 139.8,133.7 140,131.6 140.3,129.5 140.5,127.3 140.8,125 141,122.7 141.3,120.4 141.5,118 141.8,115.5 142,113 142.3,110.5 142.5,107.9 142.8,105.3 143,102.6 143.3,99.8 143.5,97 143.8,94.1 144,91.2 144.3,88.3 144.5,85.3 144.8,82.2 145,79.1 145.3,75.9 145.5,72.6 145.8,69.3 146,66 146.3,62.6 146.5,59.1 146.8,55.6 147,52 147.3,48.4 147.5,44.7 147.8,41 148,37.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="63.5,222.6 59.1,212.3 69.1,213" fill="currentColor"/>
  <polygon points="148.5,29.4 152.9,39.7 142.9,39" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A straight line falling from left to right, passing through (4, 1) and (12, -3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 252" width="232" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="206" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="206" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="206" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="206" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="206" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="206" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="206" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="206" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="206" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="206" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="208" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="218,126 208,131 208,121" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <polygon points="26,238 21,228 31,228" fill="currentColor"/>
  <text x="216" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">9</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">11</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="28.9" y1="97.5" x2="203.1" y2="184.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="212,189 200.8,189 205.3,180.1" fill="currentColor"/>
  <polygon points="20,93 31.2,93 26.7,101.9" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A circle of radius 3 centred at the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 252" width="212" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="186" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="186" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="186" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="186" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="186" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="186" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="186" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="186" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="186" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="188" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="198,126 188,131 188,121" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="106,238 101,228 111,228" fill="currentColor"/>
  <text x="196" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="103" y1="226" x2="109" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="103" y1="206" x2="109" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="103" y1="186" x2="109" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="103" y1="166" x2="109" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="103" y1="146" x2="109" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="103" y1="106" x2="109" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="103" y1="86" x2="109" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="103" y1="66" x2="109" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="103" y1="46" x2="109" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="103" y1="26" x2="109" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <ellipse cx="106" cy="126" rx="60" ry="60" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

**Solution.** If any vertical line intersects a graph more than once, the
relation represented by the graph is not a function. Notice that any vertical
line would pass through only one point of the two graphs shown in parts (a)
and (b). From this we can conclude that these two graphs represent functions.
The third graph does not represent a function because, at most $x$-values, a
vertical line would intersect the graph at more than one point, as shown
below.

<div class="ap-figure">
<svg role="img" aria-label="A circle of radius 3 centred at the origin with a dashed vertical line at x = 2. The line meets the circle at two marked points, so the circle is not the graph of a function." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252" width="252" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="226" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="226" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="226" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="228" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="126" y1="24" x2="126" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,126 228,131 228,121" fill="currentColor"/>
  <polygon points="126,14 131,24 121,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="126,238 121,228 131,228" fill="currentColor"/>
  <text x="236" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="134" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="226" y1="123" x2="226" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="141" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="123" y1="226" x2="129" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="123" y1="206" x2="129" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="123" y1="186" x2="129" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="123" y1="166" x2="129" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="123" y1="146" x2="129" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="123" y1="106" x2="129" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="123" y1="86" x2="129" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="123" y1="66" x2="129" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="123" y1="46" x2="129" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="123" y1="26" x2="129" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="166" y1="232" x2="166" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <ellipse cx="126" cy="126" rx="60" ry="60" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="166" cy="81.3" r="4" fill="currentColor"/>
  <circle cx="166" cy="170.7" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="The graph of y equals the absolute value of x: a V shape with its corner at the origin, rising to the left and to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 244" width="244" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="218" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="218" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="218" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="218" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="218" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="218" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="122" x2="220" y2="122" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,122 220,127 220,117" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,122 24,117 24,127" fill="currentColor"/>
  <polygon points="122,230 117,220 127,220" fill="currentColor"/>
  <text x="228" y="114" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="119" x2="26" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="137" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="119" x2="50" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="137" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="119" x2="74" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="137" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="119" x2="98" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="137" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="119" x2="146" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="137" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="119" x2="170" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="137" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="119" x2="194" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="137" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="218" y1="119" x2="218" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="137" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="119" y1="218" x2="125" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="222" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="146" x2="125" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="74" x2="125" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="78" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="31.7,31.7 122,122 212.3,31.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,26 36.6,29.5 29.5,36.6" fill="currentColor"/>
  <polygon points="218,26 214.5,36.6 207.4,29.5" fill="currentColor"/>
</svg>
</div>

{{< multiplechoice
  question="Does the graph of $y=\lvert x\rvert$ shown above represent a function?"
  answer="Yes"
  hint="Slide a vertical line across the V and count how many times it meets the graph."
>}}
Yes
No
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

<div class="ap-figure">
<svg role="img" aria-label="The cubic curve with a local high point at (-1, 3). A dashed horizontal line at y = 3 meets the curve at two points, so the function is not one-to-one." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 252" width="212" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="226" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="186" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="186" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="186" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="186" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="186" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="186" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="186" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="186" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="186" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="188" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="106" y1="24" x2="106" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="198,126 188,131 188,121" fill="currentColor"/>
  <polygon points="106,14 111,24 101,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="106,238 101,228 111,228" fill="currentColor"/>
  <text x="196" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="114" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="146" y1="123" x2="146" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="103" y1="226" x2="109" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="103" y1="206" x2="109" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="103" y1="186" x2="109" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="103" y1="166" x2="109" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="103" y1="146" x2="109" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="103" y1="106" x2="109" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="103" y1="86" x2="109" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="103" y1="66" x2="109" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="103" y1="46" x2="109" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="103" y1="26" x2="109" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="100" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="20" y1="66" x2="192" y2="66" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="64,214.6 64.3,211 64.5,207.3 64.8,203.6 65,200 65.3,196.4 65.5,192.9 65.8,189.4 66,186 66.3,182.7 66.5,179.4 66.8,176.1 67,172.9 67.3,169.8 67.5,166.7 67.8,163.7 68,160.8 68.3,157.9 68.5,155 68.8,152.2 69,149.4 69.3,146.7 69.5,144.1 69.8,141.5 70,139 70.3,136.5 70.5,134 70.8,131.6 71,129.3 71.3,127 71.5,124.7 71.8,122.5 72,120.4 72.3,118.3 72.5,116.2 72.8,114.2 73,112.3 73.3,110.3 73.5,108.5 73.8,106.7 74,104.9 74.3,103.1 74.5,101.5 74.8,99.8 75,98.2 75.3,96.7 75.5,95.1 75.8,93.7 76,92.3 76.3,90.9 76.5,89.5 76.8,88.2 77,87 77.3,85.7 77.5,84.6 77.8,83.4 78,82.3 78.3,81.3 78.5,80.2 78.8,79.3 79,78.3 79.3,77.4 79.5,76.5 79.8,75.7 80,74.9 80.3,74.2 80.5,73.4 80.8,72.7 81,72.1 81.3,71.5 81.5,70.9 81.8,70.4 82,69.8 82.3,69.4 82.5,68.9 82.8,68.5 83,68.1 83.3,67.8 83.5,67.5 83.8,67.2 84,66.9 84.3,66.7 84.5,66.5 84.8,66.4 85,66.2 85.3,66.1 85.5,66.1 85.8,66 86,66 86.3,66 86.5,66.1 86.8,66.1 87,66.2 87.3,66.3 87.5,66.5 87.8,66.7 88,66.9 88.3,67.1 88.5,67.3 88.8,67.6 89,67.9 89.3,68.2 89.5,68.6 89.8,69 90,69.4 90.3,69.8 90.5,70.2 90.8,70.7 91,71.2 91.3,71.7 91.5,72.2 91.8,72.7 92,73.3 92.3,73.9 92.5,74.5 92.8,75.1 93,75.7 93.3,76.4 93.5,77.1 93.8,77.8 94,78.5 94.3,79.2 94.5,80 94.8,80.7 95,81.5 95.3,82.3 95.5,83.1 95.8,83.9 96,84.8 96.3,85.6 96.5,86.5 96.8,87.3 97,88.2 97.3,89.1 97.5,90.1 97.8,91 98,91.9 98.3,92.9 98.5,93.8 98.8,94.8 99,95.8 99.3,96.8 99.5,97.8 99.8,98.8 100,99.8 100.3,100.8 100.5,101.9 100.8,102.9 101,104 101.3,105 101.5,106.1 101.8,107.2 102,108.2 102.3,109.3 102.5,110.4 102.8,111.5 103,112.6 103.3,113.7 103.5,114.8 103.8,115.9 104,117 104.3,118.1 104.5,119.3 104.8,120.4 105,121.5 105.3,122.6 105.5,123.8 105.8,124.9 106,126 106.3,127.1 106.5,128.2 106.8,129.4 107,130.5 107.3,131.6 107.5,132.7 107.8,133.9 108,135 108.3,136.1 108.5,137.2 108.8,138.3 109,139.4 109.3,140.5 109.5,141.6 109.8,142.7 110,143.8 110.3,144.8 110.5,145.9 110.8,147 111,148 111.3,149.1 111.5,150.1 111.8,151.2 112,152.2 112.3,153.2 112.5,154.2 112.8,155.2 113,156.2 113.3,157.2 113.5,158.2 113.8,159.1 114,160.1 114.3,161 114.5,161.9 114.8,162.9 115,163.8 115.3,164.7 115.5,165.5 115.8,166.4 116,167.3 116.3,168.1 116.5,168.9 116.8,169.7 117,170.5 117.3,171.3 117.5,172 117.8,172.8 118,173.5 118.3,174.2 118.5,174.9 118.8,175.6 119,176.3 119.3,176.9 119.5,177.5 119.8,178.1 120,178.7 120.3,179.3 120.5,179.8 120.8,180.3 121,180.8 121.3,181.3 121.5,181.8 121.8,182.2 122,182.6 122.3,183 122.5,183.4 122.8,183.8 123,184.1 123.3,184.4 123.5,184.7 123.8,184.9 124,185.1 124.3,185.3 124.5,185.5 124.8,185.7 125,185.8 125.3,185.9 125.5,185.9 125.8,186 126,186 126.3,186 126.5,185.9 126.8,185.9 127,185.8 127.3,185.6 127.5,185.5 127.8,185.3 128,185.1 128.3,184.8 128.5,184.5 128.8,184.2 129,183.9 129.3,183.5 129.5,183.1 129.8,182.6 130,182.2 130.3,181.6 130.5,181.1 130.8,180.5 131,179.9 131.3,179.3 131.5,178.6 131.8,177.8 132,177.1 132.3,176.3 132.5,175.5 132.8,174.6 133,173.7 133.3,172.7 133.5,171.8 133.8,170.7 134,169.7 134.3,168.6 134.5,167.4 134.8,166.3 135,165 135.3,163.8 135.5,162.5 135.8,161.1 136,159.8 136.3,158.3 136.5,156.9 136.8,155.3 137,153.8 137.3,152.2 137.5,150.5 137.8,148.9 138,147.1 138.3,145.3 138.5,143.5 138.8,141.7 139,139.7 139.3,137.8 139.5,135.8 139.8,133.7 140,131.6 140.3,129.5 140.5,127.3 140.8,125 141,122.7 141.3,120.4 141.5,118 141.8,115.5 142,113 142.3,110.5 142.5,107.9 142.8,105.3 143,102.6 143.3,99.8 143.5,97 143.8,94.1 144,91.2 144.3,88.3 144.5,85.3 144.8,82.2 145,79.1 145.3,75.9 145.5,72.6 145.8,69.3 146,66 146.3,62.6 146.5,59.1 146.8,55.6 147,52 147.3,48.4 147.5,44.7 147.8,41 148,37.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="63.5,222.6 59.1,212.3 69.1,213" fill="currentColor"/>
  <polygon points="148.5,29.4 152.9,39.7 142.9,39" fill="currentColor"/>
  <circle cx="86" cy="66" r="4" fill="currentColor"/>
  <circle cx="146" cy="66" r="4" fill="currentColor"/>
</svg>
</div>

The function in part (b) is one-to-one. Any horizontal line will intersect a
diagonal line at most once.

{{< multiplechoice
  question="Is the circle graphed in part (c) of the vertical line test example one-to-one?"
  answer="No"
  hint="A relation must first be a function before it can be one-to-one."
>}}
No
Yes
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

<div class="ap-figure">
<svg role="img" aria-label="The graph of a constant function: a horizontal line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="30" y1="62" x2="166" y2="62" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,62 166,67 166,57" fill="currentColor"/>
  <polygon points="20,62 30,57 30,67" fill="currentColor"/>
</svg>
</div>

**Identity** — $f(x)=x$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the identity function: a straight line through the origin rising at 45 degrees." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="27.1" y1="168.9" x2="168.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,20 172.5,30.6 165.4,23.5" fill="currentColor"/>
  <polygon points="20,176 23.5,165.4 30.6,172.5" fill="currentColor"/>
</svg>
</div>

**Absolute value** — $f(x)=\lvert x\rvert$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the absolute value function: a V shape with its corner at the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="31.7,31.7 98,98 164.3,31.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,26 36.6,29.5 29.5,36.6" fill="currentColor"/>
  <polygon points="170,26 166.5,36.6 159.4,29.5" fill="currentColor"/>
</svg>
</div>

**Quadratic** — $f(x)=x^2$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the quadratic function: an upward-opening parabola with its vertex at the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="64,33.7 64,33.8 64.3,34.7 64.5,35.7 64.8,36.6 65,37.5 65.3,38.4 65.5,39.3 65.8,40.2 66,41.1 66.3,42 66.5,42.9 66.8,43.7 67,44.6 67.3,45.5 67.5,46.3 67.8,47.2 68,48 68.3,48.8 68.5,49.7 68.8,50.5 69,51.3 69.3,52.1 69.5,52.9 69.8,53.7 70,54.4 70.3,55.2 70.5,56 70.8,56.7 71,57.5 71.3,58.2 71.5,59 71.8,59.7 72,60.4 72.3,61.2 72.5,61.9 72.8,62.6 73,63.3 73.3,64 73.5,64.7 73.8,65.3 74,66 74.3,66.7 74.5,67.3 74.8,68 75,68.6 75.3,69.2 75.5,69.9 75.8,70.5 76,71.1 76.3,71.7 76.5,72.3 76.8,72.9 77,73.5 77.3,74.1 77.5,74.7 77.8,75.2 78,75.8 78.3,76.3 78.5,76.9 78.8,77.4 79,77.9 79.3,78.5 79.5,79 79.8,79.5 80,80 80.3,80.5 80.5,81 80.8,81.5 81,81.9 81.3,82.4 81.5,82.9 81.8,83.3 82,83.8 82.3,84.2 82.5,84.7 82.8,85.1 83,85.5 83.3,85.9 83.5,86.3 83.8,86.7 84,87.1 84.3,87.5 84.5,87.9 84.8,88.2 85,88.6 85.3,89 85.5,89.3 85.8,89.7 86,90 86.3,90.3 86.5,90.7 86.8,91 87,91.3 87.3,91.6 87.5,91.9 87.8,92.2 88,92.4 88.3,92.7 88.5,93 88.8,93.2 89,93.5 89.3,93.7 89.5,94 89.8,94.2 90,94.4 90.3,94.7 90.5,94.9 90.8,95.1 91,95.3 91.3,95.5 91.5,95.7 91.8,95.8 92,96 92.3,96.2 92.5,96.3 92.8,96.5 93,96.6 93.3,96.7 93.5,96.9 93.8,97 94,97.1 94.3,97.2 94.5,97.3 94.8,97.4 95,97.5 95.3,97.6 95.5,97.7 95.8,97.7 96,97.8 96.3,97.8 96.5,97.9 96.8,97.9 97,97.9 97.3,98 97.5,98 97.8,98 98,98 98.3,98 98.5,98 98.8,98 99,97.9 99.3,97.9 99.5,97.9 99.8,97.8 100,97.8 100.3,97.7 100.5,97.7 100.8,97.6 101,97.5 101.3,97.4 101.5,97.3 101.8,97.2 102,97.1 102.3,97 102.5,96.9 102.8,96.7 103,96.6 103.3,96.5 103.5,96.3 103.8,96.2 104,96 104.3,95.8 104.5,95.7 104.8,95.5 105,95.3 105.3,95.1 105.5,94.9 105.8,94.7 106,94.4 106.3,94.2 106.5,94 106.8,93.7 107,93.5 107.3,93.2 107.5,93 107.8,92.7 108,92.4 108.3,92.2 108.5,91.9 108.8,91.6 109,91.3 109.3,91 109.5,90.7 109.8,90.3 110,90 110.3,89.7 110.5,89.3 110.8,89 111,88.6 111.3,88.2 111.5,87.9 111.8,87.5 112,87.1 112.3,86.7 112.5,86.3 112.8,85.9 113,85.5 113.3,85.1 113.5,84.7 113.8,84.2 114,83.8 114.3,83.3 114.5,82.9 114.8,82.4 115,81.9 115.3,81.5 115.5,81 115.8,80.5 116,80 116.3,79.5 116.5,79 116.8,78.5 117,77.9 117.3,77.4 117.5,76.9 117.8,76.3 118,75.8 118.3,75.2 118.5,74.7 118.8,74.1 119,73.5 119.3,72.9 119.5,72.3 119.8,71.7 120,71.1 120.3,70.5 120.5,69.9 120.8,69.2 121,68.6 121.3,68 121.5,67.3 121.8,66.7 122,66 122.3,65.3 122.5,64.7 122.8,64 123,63.3 123.3,62.6 123.5,61.9 123.8,61.2 124,60.4 124.3,59.7 124.5,59 124.8,58.2 125,57.5 125.3,56.7 125.5,56 125.8,55.2 126,54.4 126.3,53.7 126.5,52.9 126.8,52.1 127,51.3 127.3,50.5 127.5,49.7 127.8,48.8 128,48 128.3,47.2 128.5,46.3 128.8,45.5 129,44.6 129.3,43.7 129.5,42.9 129.8,42 130,41.1 130.3,40.2 130.5,39.3 130.8,38.4 131,37.5 131.3,36.6 131.5,35.7 131.8,34.7 132,33.8 132,33.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="62,26 69.3,34.5 59.6,36.9" fill="currentColor"/>
  <polygon points="134,26 136.4,36.9 126.7,34.5" fill="currentColor"/>
</svg>
</div>

**Cubic** — $f(x)=x^3$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the cubic function: an S-shaped curve through the origin, falling to the lower left and rising to the upper right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="70.6,161.5 70.8,160.5 71,158.8 71.3,157.1 71.5,155.4 71.8,153.8 72,152.2 72.3,150.7 72.5,149.2 72.8,147.7 73,146.2 73.3,144.8 73.5,143.4 73.8,142 74,140.7 74.3,139.3 74.5,138.1 74.8,136.8 75,135.6 75.3,134.3 75.5,133.2 75.8,132 76,130.9 76.3,129.8 76.5,128.7 76.8,127.6 77,126.6 77.3,125.6 77.5,124.6 77.8,123.6 78,122.7 78.3,121.8 78.5,120.9 78.8,120 79,119.2 79.3,118.3 79.5,117.5 79.8,116.8 80,116 80.3,115.3 80.5,114.5 80.8,113.8 81,113.2 81.3,112.5 81.5,111.9 81.8,111.2 82,110.6 82.3,110.1 82.5,109.5 82.8,108.9 83,108.4 83.3,107.9 83.5,107.4 83.8,106.9 84,106.5 84.3,106 84.5,105.6 84.8,105.2 85,104.8 85.3,104.4 85.5,104 85.8,103.7 86,103.3 86.3,103 86.5,102.7 86.8,102.4 87,102.1 87.3,101.8 87.5,101.6 87.8,101.3 88,101.1 88.3,100.9 88.5,100.6 88.8,100.4 89,100.3 89.3,100.1 89.5,99.9 89.8,99.7 90,99.6 90.3,99.4 90.5,99.3 90.8,99.2 91,99.1 91.3,98.9 91.5,98.8 91.8,98.8 92,98.7 92.3,98.6 92.5,98.5 92.8,98.4 93,98.4 93.3,98.3 93.5,98.3 93.8,98.2 94,98.2 94.3,98.2 94.5,98.1 94.8,98.1 95,98.1 95.3,98.1 95.5,98 95.8,98 96,98 96.3,98 96.5,98 96.8,98 97,98 97.3,98 97.5,98 97.8,98 98,98 98.3,98 98.5,98 98.8,98 99,98 99.3,98 99.5,98 99.8,98 100,98 100.3,98 100.5,98 100.8,97.9 101,97.9 101.3,97.9 101.5,97.9 101.8,97.8 102,97.8 102.3,97.8 102.5,97.7 102.8,97.7 103,97.6 103.3,97.6 103.5,97.5 103.8,97.4 104,97.3 104.3,97.2 104.5,97.2 104.8,97.1 105,96.9 105.3,96.8 105.5,96.7 105.8,96.6 106,96.4 106.3,96.3 106.5,96.1 106.8,95.9 107,95.8 107.3,95.6 107.5,95.4 107.8,95.1 108,94.9 108.3,94.7 108.5,94.4 108.8,94.2 109,93.9 109.3,93.6 109.5,93.3 109.8,93 110,92.7 110.3,92.3 110.5,92 110.8,91.6 111,91.2 111.3,90.8 111.5,90.4 111.8,90 112,89.5 112.3,89.1 112.5,88.6 112.8,88.1 113,87.6 113.3,87.1 113.5,86.5 113.8,85.9 114,85.4 114.3,84.8 114.5,84.1 114.8,83.5 115,82.8 115.3,82.2 115.5,81.5 115.8,80.7 116,80 116.3,79.2 116.5,78.5 116.8,77.7 117,76.8 117.3,76 117.5,75.1 117.8,74.2 118,73.3 118.3,72.4 118.5,71.4 118.8,70.4 119,69.4 119.3,68.4 119.5,67.3 119.8,66.2 120,65.1 120.3,64 120.5,62.8 120.8,61.7 121,60.4 121.3,59.2 121.5,57.9 121.8,56.7 122,55.3 122.3,54 122.5,52.6 122.8,51.2 123,49.8 123.3,48.3 123.5,46.8 123.8,45.3 124,43.8 124.3,42.2 124.5,40.6 124.8,38.9 125,37.3 125.3,35.5 125.4,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="69.5,169.4 65.9,158.9 75.8,160.2" fill="currentColor"/>
  <polygon points="126.5,26.6 130.1,37.1 120.2,35.8" fill="currentColor"/>
</svg>
</div>

**Reciprocal** — $f(x)=\tfrac{1}{x}$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the reciprocal function: two branches approaching but never touching the axes, one in the upper right and one in the lower left." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="34,103.1 34,103.1 34.3,103.1 34.5,103.1 34.8,103.1 35,103.1 35.3,103.2 35.5,103.2 35.8,103.2 36,103.2 36.3,103.2 36.5,103.3 36.8,103.3 37,103.3 37.3,103.3 37.5,103.4 37.8,103.4 38,103.4 38.3,103.4 38.5,103.4 38.8,103.5 39,103.5 39.3,103.5 39.5,103.5 39.8,103.6 40,103.6 40.3,103.6 40.5,103.6 40.8,103.7 41,103.7 41.3,103.7 41.5,103.7 41.8,103.8 42,103.8 42.3,103.8 42.5,103.8 42.8,103.9 43,103.9 43.3,103.9 43.5,103.9 43.8,104 44,104 44.3,104 44.5,104.1 44.8,104.1 45,104.1 45.3,104.1 45.5,104.2 45.8,104.2 46,104.2 46.3,104.3 46.5,104.3 46.8,104.3 47,104.4 47.3,104.4 47.5,104.4 47.7,104.4 48,104.5 48.3,104.5 48.5,104.5 48.8,104.6 49,104.6 49.3,104.6 49.5,104.7 49.8,104.7 50,104.8 50.3,104.8 50.5,104.8 50.8,104.9 51,104.9 51.3,104.9 51.5,105 51.8,105 52,105 52.2,105.1 52.5,105.1 52.8,105.2 53,105.2 53.3,105.2 53.5,105.3 53.8,105.3 54,105.4 54.3,105.4 54.5,105.4 54.8,105.5 55,105.5 55.3,105.6 55.5,105.6 55.8,105.7 56,105.7 56.3,105.8 56.5,105.8 56.7,105.9 57,105.9 57.3,106 57.5,106 57.8,106 58,106.1 58.3,106.2 58.5,106.2 58.8,106.3 59,106.3 59.3,106.4 59.5,106.4 59.8,106.5 60,106.5 60.3,106.6 60.5,106.6 60.8,106.7 61,106.8 61.2,106.8 61.5,106.9 61.8,106.9 62,107 62.3,107.1 62.5,107.1 62.8,107.2 63,107.3 63.3,107.3 63.5,107.4 63.8,107.5 64,107.5 64.3,107.6 64.5,107.7 64.8,107.7 65,107.8 65.3,107.9 65.5,108 65.8,108 66,108.1 66.3,108.2 66.5,108.3 66.8,108.4 67,108.5 67.3,108.5 67.5,108.6 67.8,108.7 68,108.8 68.3,108.9 68.5,109 68.8,109.1 69,109.2 69.3,109.3 69.5,109.4 69.8,109.5 70,109.6 70.3,109.7 70.5,109.8 70.8,109.9 71,110 71.3,110.1 71.5,110.2 71.8,110.3 72,110.5 72.3,110.6 72.5,110.7 72.8,110.8 73,111 73.3,111.1 73.5,111.2 73.8,111.4 74,111.5 74.3,111.6 74.5,111.8 74.8,111.9 75,112.1 75.3,112.2 75.5,112.4 75.8,112.6 76,112.7 76.3,112.9 76.5,113.1 76.8,113.2 77,113.4 77.3,113.6 77.5,113.8 77.8,114 78,114.2 78.3,114.4 78.5,114.6 78.8,114.8 79,115.1 79.3,115.3 79.5,115.5 79.8,115.8 80,116 80.3,116.3 80.5,116.5 80.8,116.8 81,117.1 81.3,117.3 81.5,117.6 81.8,117.9 82,118.3 82.3,118.6 82.5,118.9 82.8,119.2 83,119.6 83.3,120 83.5,120.3 83.8,120.7 84,121.1 84.3,121.6 84.5,122 84.8,122.5 85,122.9 85.3,123.4 85.5,123.9 85.8,124.4 86,125 86.3,125.6 86.5,126.2 86.8,126.8 87,127.5 87.3,128.1 87.5,128.9 87.8,129.6 88,130.4 88.3,131.2 88.5,132.1 88.8,133 89,134 89.3,135 89.5,136.1 89.8,137.3 90,138.5 90.3,139.8 90.5,141.2 90.8,142.7 91,144.3 91.3,146 91.5,147.8 91.8,149.8 92,152 92.3,154.3 92.5,156.9 92.8,159.7 92.9,162" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,102.5 36.3,98.1 35.7,108.1" fill="currentColor"/>
  <polygon points="93.5,170 87.9,160.4 97.8,159.7" fill="currentColor"/>
  <polyline points="103.1,34 103.3,36.3 103.5,39.1 103.8,41.7 104,44 104.3,46.2 104.5,48.2 104.8,50 105,51.7 105.3,53.3 105.5,54.8 105.8,56.2 106,57.5 106.3,58.7 106.5,59.9 106.8,61 107,62 107.3,63 107.5,63.9 107.8,64.8 108,65.6 108.3,66.4 108.5,67.1 108.8,67.9 109,68.5 109.3,69.2 109.5,69.8 109.8,70.4 110,71 110.3,71.6 110.5,72.1 110.8,72.6 111,73.1 111.3,73.5 111.5,74 111.8,74.4 112,74.9 112.3,75.3 112.5,75.7 112.8,76 113,76.4 113.3,76.8 113.5,77.1 113.8,77.4 114,77.8 114.3,78.1 114.5,78.4 114.8,78.7 115,78.9 115.3,79.2 115.5,79.5 115.8,79.7 116,80 116.3,80.2 116.5,80.5 116.8,80.7 117,80.9 117.3,81.2 117.5,81.4 117.8,81.6 118,81.8 118.3,82 118.5,82.2 118.8,82.4 119,82.6 119.3,82.8 119.5,82.9 119.8,83.1 120,83.3 120.3,83.4 120.5,83.6 120.8,83.8 121,83.9 121.3,84.1 121.5,84.2 121.8,84.4 122,84.5 122.3,84.6 122.5,84.8 122.8,84.9 123,85 123.3,85.2 123.5,85.3 123.8,85.4 124,85.5 124.3,85.7 124.5,85.8 124.8,85.9 125,86 125.3,86.1 125.5,86.2 125.8,86.3 126,86.4 126.3,86.5 126.5,86.6 126.8,86.7 127,86.8 127.3,86.9 127.5,87 127.8,87.1 128,87.2 128.3,87.3 128.5,87.4 128.8,87.5 129,87.5 129.3,87.6 129.5,87.7 129.8,87.8 130,87.9 130.3,88 130.5,88 130.8,88.1 131,88.2 131.3,88.3 131.5,88.3 131.8,88.4 132,88.5 132.3,88.5 132.5,88.6 132.8,88.7 133,88.7 133.3,88.8 133.5,88.9 133.8,88.9 134,89 134.3,89.1 134.5,89.1 134.8,89.2 135,89.2 135.3,89.3 135.5,89.4 135.8,89.4 136,89.5 136.3,89.5 136.5,89.6 136.8,89.6 137,89.7 137.3,89.7 137.5,89.8 137.8,89.8 138,89.9 138.3,90 138.5,90 138.8,90 139,90.1 139.3,90.1 139.5,90.2 139.8,90.2 140,90.3 140.3,90.3 140.5,90.4 140.8,90.4 141,90.5 141.3,90.5 141.5,90.6 141.8,90.6 142,90.6 142.3,90.7 142.5,90.7 142.8,90.8 143,90.8 143.3,90.8 143.5,90.9 143.8,90.9 144,91 144.3,91 144.5,91 144.8,91.1 145,91.1 145.3,91.1 145.5,91.2 145.8,91.2 146,91.3 146.3,91.3 146.5,91.3 146.8,91.4 147,91.4 147.3,91.4 147.5,91.5 147.8,91.5 148,91.5 148.3,91.6 148.5,91.6 148.8,91.6 149,91.6 149.3,91.7 149.5,91.7 149.8,91.7 150,91.8 150.3,91.8 150.5,91.8 150.8,91.9 151,91.9 151.3,91.9 151.5,91.9 151.8,92 152,92 152.3,92 152.5,92.1 152.8,92.1 153,92.1 153.3,92.1 153.5,92.2 153.8,92.2 154,92.2 154.3,92.2 154.5,92.3 154.8,92.3 155,92.3 155.3,92.3 155.5,92.4 155.8,92.4 156,92.4 156.3,92.4 156.5,92.5 156.8,92.5 157,92.5 157.3,92.5 157.5,92.6 157.8,92.6 158,92.6 158.3,92.6 158.5,92.6 158.8,92.7 159,92.7 159.3,92.7 159.5,92.7 159.8,92.8 160,92.8 160.3,92.8 160.5,92.8 160.8,92.8 161,92.9 161.3,92.9 161.5,92.9 161.8,92.9 162,92.9 162,92.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="102.5,26 108.1,35.6 98.2,36.3" fill="currentColor"/>
  <polygon points="170,93.5 159.7,97.9 160.3,87.9" fill="currentColor"/>
</svg>
</div>

**Reciprocal squared** — $f(x)=\tfrac{1}{x^2}$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the reciprocal squared function: two branches, both above the horizontal axis, approaching but never touching the axes." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="170" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="152" x2="172" y2="152" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,152 172,157 172,147" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,152 24,147 24,157" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="144" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="149" x2="26" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="167" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="149" x2="62" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="167" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="149" x2="134" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="167" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="149" x2="170" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="167" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="116" x2="101" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="120" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="80" x2="101" y2="80" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="84" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="95" y1="44" x2="101" y2="44" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="48" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="34,150.6 34,150.6 34.3,150.6 34.5,150.6 34.8,150.5 35,150.5 35.3,150.5 35.5,150.5 35.8,150.5 36,150.5 36.3,150.5 36.5,150.5 36.8,150.4 37,150.4 37.3,150.4 37.5,150.4 37.8,150.4 38,150.4 38.3,150.4 38.5,150.4 38.8,150.3 39,150.3 39.3,150.3 39.5,150.3 39.8,150.3 40,150.3 40.3,150.3 40.5,150.2 40.8,150.2 41,150.2 41.3,150.2 41.5,150.2 41.8,150.2 42,150.1 42.3,150.1 42.5,150.1 42.8,150.1 43,150.1 43.3,150.1 43.5,150 43.8,150 44,150 44.3,150 44.5,150 44.8,149.9 45,149.9 45.3,149.9 45.5,149.9 45.8,149.9 46,149.8 46.3,149.8 46.5,149.8 46.8,149.8 47,149.8 47.3,149.7 47.5,149.7 47.7,149.7 48,149.7 48.3,149.6 48.5,149.6 48.8,149.6 49,149.6 49.3,149.5 49.5,149.5 49.8,149.5 50,149.5 50.3,149.4 50.5,149.4 50.8,149.4 51,149.4 51.3,149.3 51.5,149.3 51.8,149.3 52,149.2 52.2,149.2 52.5,149.2 52.8,149.2 53,149.1 53.3,149.1 53.5,149.1 53.8,149 54,149 54.3,149 54.5,148.9 54.8,148.9 55,148.8 55.3,148.8 55.5,148.8 55.8,148.7 56,148.7 56.3,148.7 56.5,148.6 56.7,148.6 57,148.5 57.3,148.5 57.5,148.4 57.8,148.4 58,148.4 58.3,148.3 58.5,148.3 58.8,148.2 59,148.2 59.3,148.1 59.5,148.1 59.8,148 60,148 60.3,147.9 60.5,147.9 60.8,147.8 61,147.7 61.2,147.7 61.5,147.6 61.8,147.6 62,147.5 62.3,147.4 62.5,147.4 62.8,147.3 63,147.2 63.3,147.2 63.5,147.1 63.8,147 64,147 64.3,146.9 64.5,146.8 64.8,146.7 65,146.6 65.3,146.6 65.5,146.5 65.8,146.4 66,146.3 66.3,146.2 66.5,146.1 66.8,146 67,145.9 67.3,145.8 67.5,145.7 67.8,145.6 68,145.5 68.3,145.4 68.5,145.3 68.8,145.2 69,145.1 69.3,144.9 69.5,144.8 69.8,144.7 70,144.6 70.3,144.4 70.5,144.3 70.8,144.1 71,144 71.3,143.8 71.5,143.7 71.8,143.5 72,143.4 72.3,143.2 72.5,143 72.8,142.9 73,142.7 73.3,142.5 73.5,142.3 73.8,142.1 74,141.9 74.3,141.7 74.5,141.4 74.8,141.2 75,141 75.3,140.7 75.5,140.5 75.8,140.2 76,140 76.3,139.7 76.5,139.4 76.8,139.1 77,138.8 77.3,138.5 77.5,138.1 77.8,137.8 78,137.4 78.3,137 78.5,136.7 78.8,136.3 79,135.8 79.3,135.4 79.5,135 79.8,134.5 80,134 80.3,133.5 80.5,133 80.8,132.4 81,131.8 81.3,131.2 81.5,130.6 81.8,129.9 82,129.2 82.3,128.5 82.5,127.7 82.8,126.9 83,126.1 83.3,125.2 83.5,124.3 83.8,123.3 84,122.2 84.3,121.2 84.5,120 84.8,118.8 85,117.5 85.3,116.1 85.5,114.7 85.8,113.1 86,111.5 86.3,109.8 86.5,107.9 86.8,105.9 87,103.8 87.3,101.5 87.5,99.1 87.8,96.5 88,93.7 88.3,90.7 88.5,87.4 88.8,83.8 89,80 89.3,75.8 89.5,71.3 89.8,66.3 90,60.9 90.3,54.9 90.5,48.3 90.8,41 90.8,41" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,150.9 35.8,145.6 36.2,155.6" fill="currentColor"/>
  <polygon points="91,33 95.7,43.1 85.7,42.8" fill="currentColor"/>
  <polyline points="105.2,41 105.3,41 105.5,48.3 105.8,54.9 106,60.9 106.3,66.3 106.5,71.3 106.8,75.8 107,80 107.3,83.8 107.5,87.4 107.8,90.7 108,93.7 108.3,96.5 108.5,99.1 108.8,101.5 109,103.8 109.3,105.9 109.5,107.9 109.8,109.8 110,111.5 110.3,113.1 110.5,114.7 110.8,116.1 111,117.5 111.3,118.8 111.5,120 111.8,121.2 112,122.2 112.3,123.3 112.5,124.3 112.8,125.2 113,126.1 113.3,126.9 113.5,127.7 113.8,128.5 114,129.2 114.3,129.9 114.5,130.6 114.8,131.2 115,131.8 115.3,132.4 115.5,133 115.8,133.5 116,134 116.3,134.5 116.5,135 116.8,135.4 117,135.8 117.3,136.3 117.5,136.7 117.8,137 118,137.4 118.3,137.8 118.5,138.1 118.8,138.5 119,138.8 119.3,139.1 119.5,139.4 119.8,139.7 120,140 120.3,140.2 120.5,140.5 120.8,140.7 121,141 121.3,141.2 121.5,141.4 121.8,141.7 122,141.9 122.3,142.1 122.5,142.3 122.8,142.5 123,142.7 123.3,142.9 123.5,143 123.8,143.2 124,143.4 124.3,143.5 124.5,143.7 124.8,143.8 125,144 125.3,144.1 125.5,144.3 125.8,144.4 126,144.6 126.3,144.7 126.5,144.8 126.8,144.9 127,145.1 127.3,145.2 127.5,145.3 127.8,145.4 128,145.5 128.3,145.6 128.5,145.7 128.8,145.8 129,145.9 129.3,146 129.5,146.1 129.8,146.2 130,146.3 130.3,146.4 130.5,146.5 130.8,146.6 131,146.6 131.3,146.7 131.5,146.8 131.8,146.9 132,147 132.3,147 132.5,147.1 132.8,147.2 133,147.2 133.3,147.3 133.5,147.4 133.8,147.4 134,147.5 134.3,147.6 134.5,147.6 134.8,147.7 135,147.7 135.3,147.8 135.5,147.9 135.8,147.9 136,148 136.3,148 136.5,148.1 136.8,148.1 137,148.2 137.3,148.2 137.5,148.3 137.8,148.3 138,148.4 138.3,148.4 138.5,148.4 138.8,148.5 139,148.5 139.3,148.6 139.5,148.6 139.8,148.7 140,148.7 140.3,148.7 140.5,148.8 140.8,148.8 141,148.8 141.3,148.9 141.5,148.9 141.8,149 142,149 142.3,149 142.5,149.1 142.8,149.1 143,149.1 143.3,149.2 143.5,149.2 143.8,149.2 144,149.2 144.3,149.3 144.5,149.3 144.8,149.3 145,149.4 145.3,149.4 145.5,149.4 145.8,149.4 146,149.5 146.3,149.5 146.5,149.5 146.8,149.5 147,149.6 147.3,149.6 147.5,149.6 147.8,149.6 148,149.7 148.3,149.7 148.5,149.7 148.8,149.7 149,149.8 149.3,149.8 149.5,149.8 149.8,149.8 150,149.8 150.3,149.9 150.5,149.9 150.8,149.9 151,149.9 151.3,149.9 151.5,150 151.8,150 152,150 152.3,150 152.5,150 152.8,150.1 153,150.1 153.3,150.1 153.5,150.1 153.8,150.1 154,150.1 154.3,150.2 154.5,150.2 154.8,150.2 155,150.2 155.3,150.2 155.5,150.2 155.8,150.3 156,150.3 156.3,150.3 156.5,150.3 156.8,150.3 157,150.3 157.3,150.3 157.5,150.4 157.8,150.4 158,150.4 158.3,150.4 158.5,150.4 158.8,150.4 159,150.4 159.3,150.4 159.5,150.5 159.8,150.5 160,150.5 160.3,150.5 160.5,150.5 160.8,150.5 161,150.5 161.3,150.5 161.5,150.6 161.8,150.6 162,150.6 162,150.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="105,33 110.3,42.8 100.3,43.1" fill="currentColor"/>
  <polygon points="170,150.9 159.8,155.6 160.2,145.6" fill="currentColor"/>
</svg>
</div>

**Square root** — $f(x)=\sqrt{x}$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the square root function: a curve starting at the origin and rising to the right, flattening as it goes." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="98,98 98,97.8 98,97.7 98,97.5 98,97.4 98,97.3 98,97.1 98.1,97 98.1,96.8 98.1,96.7 98.1,96.5 98.2,96.3 98.2,96.2 98.2,96 98.2,95.9 98.3,95.8 98.3,95.6 98.4,95.5 98.4,95.3 98.5,95.2 98.5,95 98.6,94.8 98.6,94.7 98.7,94.5 98.7,94.4 98.8,94.3 98.8,94.1 98.9,94 99,93.8 99.1,93.7 99.1,93.5 99.2,93.3 99.3,93.2 99.4,93 99.4,92.9 99.5,92.8 99.6,92.6 99.7,92.5 99.8,92.3 99.9,92.2 100,92 100.1,91.8 100.2,91.7 100.3,91.5 100.4,91.4 100.5,91.3 100.6,91.1 100.8,91 100.9,90.8 101,90.7 101.1,90.5 101.3,90.3 101.4,90.2 101.5,90 101.6,89.9 101.8,89.8 101.9,89.6 102.1,89.5 102.2,89.3 102.4,89.2 102.5,89 102.7,88.8 102.8,88.7 103,88.5 103.1,88.4 103.3,88.3 103.4,88.1 103.6,88 103.8,87.8 104,87.7 104.1,87.5 104.3,87.3 104.5,87.2 104.7,87 104.8,86.9 105,86.8 105.2,86.6 105.4,86.5 105.6,86.3 105.8,86.2 106,86 106.2,85.8 106.4,85.7 106.6,85.5 106.8,85.4 107,85.3 107.2,85.1 107.5,85 107.7,84.8 107.9,84.7 108.1,84.5 108.4,84.3 108.6,84.2 108.8,84 109,83.9 109.3,83.8 109.5,83.6 109.8,83.5 110,83.3 110.3,83.2 110.5,83 110.8,82.8 111,82.7 111.3,82.5 111.5,82.4 111.8,82.3 112,82.1 112.3,82 112.6,81.8 112.9,81.7 113.1,81.5 113.4,81.3 113.7,81.2 114,81 114.2,80.9 114.5,80.8 114.8,80.6 115.1,80.5 115.4,80.3 115.7,80.2 116,80 116.3,79.8 116.6,79.7 116.9,79.5 117.2,79.4 117.5,79.3 117.8,79.1 118.2,79 118.5,78.8 118.8,78.7 119.1,78.5 119.5,78.3 119.8,78.2 120.1,78 120.4,77.9 120.8,77.8 121.1,77.6 121.5,77.5 121.8,77.3 122.2,77.2 122.5,77 122.9,76.8 123.2,76.7 123.6,76.5 123.9,76.4 124.3,76.3 124.6,76.1 125,76 125.4,75.8 125.8,75.7 126.1,75.5 126.5,75.3 126.9,75.2 127.3,75 127.6,74.9 128,74.8 128.4,74.6 128.8,74.5 129.2,74.3 129.6,74.2 130,74 130.4,73.8 130.8,73.7 131.2,73.5 131.6,73.4 132,73.3 132.4,73.1 132.9,73 133.3,72.8 133.7,72.7 134.1,72.5 134.6,72.3 135,72.2 135.4,72 135.8,71.9 136.3,71.8 136.7,71.6 137.2,71.5 137.6,71.3 138.1,71.2 138.5,71 139,70.8 139.4,70.7 139.9,70.5 140.3,70.4 140.8,70.3 141.2,70.1 141.7,70 142.2,69.8 142.7,69.7 143.1,69.5 143.6,69.3 144.1,69.2 144.6,69 145,68.9 145.5,68.8 146,68.6 146.5,68.5 147,68.3 147.5,68.2 148,68 148.5,67.8 149,67.7 149.5,67.5 150,67.4 150.5,67.3 151,67.1 151.6,67 152.1,66.8 152.6,66.7 153.1,66.5 153.7,66.3 154.2,66.2 154.7,66 155.2,65.9 155.8,65.8 156.3,65.6 156.9,65.5 157.4,65.3 158,65.2 158.5,65 159.1,64.8 159.6,64.7 160.2,64.5 160.7,64.4 161.3,64.3 161.8,64.1 162.3,64" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="170,62 161.5,69.3 159.1,59.6" fill="currentColor"/>
</svg>
</div>

**Cube root** — $f(x)=\sqrt[3]{x}$

<div class="ap-figure">
<svg role="img" aria-label="The graph of the cube root function: a curve through the origin rising to the right and falling to the left, steep near the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="35.7,125.2 36.3,125.1 37.9,124.9 39.5,124.7 41,124.4 42.5,124.2 44,124 45.5,123.7 47,123.5 48.4,123.2 49.8,123 51.1,122.8 52.5,122.5 53.8,122.3 55.1,122 56.3,121.8 57.6,121.6 58.8,121.3 60,121.1 61.1,120.9 62.3,120.6 63.4,120.4 64.5,120.1 65.6,119.9 66.6,119.7 67.6,119.4 68.6,119.2 69.6,119 70.6,118.7 71.5,118.5 72.4,118.2 73.3,118 74.2,117.8 75,117.5 75.9,117.3 76.7,117 77.5,116.8 78.2,116.6 79,116.3 79.7,116.1 80.4,115.9 81.1,115.6 81.8,115.4 82.4,115.1 83.1,114.9 83.7,114.7 84.3,114.4 84.9,114.2 85.5,114 86,113.7 86.6,113.5 87.1,113.2 87.6,113 88.1,112.8 88.5,112.5 89,112.3 89.4,112 89.9,111.8 90.3,111.6 90.7,111.3 91.1,111.1 91.4,110.9 91.8,110.6 92.1,110.4 92.5,110.1 92.8,109.9 93.1,109.7 93.4,109.4 93.7,109.2 93.9,109 94.2,108.7 94.5,108.5 94.7,108.2 94.9,108 95.1,107.8 95.3,107.5 95.5,107.3 95.7,107 95.9,106.8 96.1,106.6 96.2,106.3 96.4,106.1 96.5,105.9 96.6,105.6 96.8,105.4 96.9,105.1 97,104.9 97.1,104.7 97.2,104.4 97.3,104.2 97.3,104 97.4,103.7 97.5,103.5 97.6,103.2 97.6,103 97.7,102.8 97.7,102.5 97.8,102.3 97.8,102 97.8,101.8 97.9,101.6 97.9,101.3 97.9,101.1 97.9,100.9 97.9,100.6 98,100.4 98,100.1 98,99.9 98,99.7 98,99.4 98,99.2 98,99 98,98.7 98,98.5 98,98.2 98,98 98,97.8 98,97.5 98,97.3 98,97 98,96.8 98,96.6 98,96.3 98,96.1 98,95.9 98,95.6 98.1,95.4 98.1,95.1 98.1,94.9 98.1,94.7 98.1,94.4 98.2,94.2 98.2,94 98.2,93.7 98.3,93.5 98.3,93.2 98.4,93 98.4,92.8 98.5,92.5 98.6,92.3 98.7,92 98.7,91.8 98.8,91.6 98.9,91.3 99,91.1 99.1,90.9 99.2,90.6 99.4,90.4 99.5,90.1 99.6,89.9 99.8,89.7 99.9,89.4 100.1,89.2 100.3,89 100.5,88.7 100.7,88.5 100.9,88.2 101.1,88 101.3,87.8 101.5,87.5 101.8,87.3 102.1,87 102.3,86.8 102.6,86.6 102.9,86.3 103.2,86.1 103.5,85.9 103.9,85.6 104.2,85.4 104.6,85.1 104.9,84.9 105.3,84.7 105.7,84.4 106.1,84.2 106.6,84 107,83.7 107.5,83.5 107.9,83.2 108.4,83 108.9,82.8 109.4,82.5 110,82.3 110.5,82 111.1,81.8 111.7,81.6 112.3,81.3 112.9,81.1 113.6,80.9 114.2,80.6 114.9,80.4 115.6,80.1 116.3,79.9 117,79.7 117.8,79.4 118.5,79.2 119.3,79 120.1,78.7 121,78.5 121.8,78.2 122.7,78 123.6,77.8 124.5,77.5 125.4,77.3 126.4,77 127.4,76.8 128.4,76.6 129.4,76.3 130.4,76.1 131.5,75.9 132.6,75.6 133.7,75.4 134.9,75.1 136,74.9 137.2,74.7 138.4,74.4 139.7,74.2 140.9,74 142.2,73.7 143.5,73.5 144.9,73.2 146.2,73 147.6,72.8 149,72.5 150.5,72.3 152,72 153.5,71.8 155,71.6 156.5,71.3 158.1,71.1 159.7,70.9 160.3,70.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="27.8,126.3 37,120 38.4,129.9" fill="currentColor"/>
  <polygon points="168.2,69.7 159,76 157.6,66.1" fill="currentColor"/>
</svg>
</div>

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

---

<small>This section is adapted from [Precalculus 2e, Section 1.1: Functions and Function Notation](https://openstax.org/books/precalculus-2e/pages/1-1-functions-and-function-notation) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every figure as an accessible inline SVG, including the input–output mapping diagrams, the coffee shop menu mappings, and the function-machine diagram; presented the menu itself and the toolkit function library as Markdown tables and headed figure groups rather than images; omitted the media links and end-of-section exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and presented the write-a-function-notation practice item as multiple choice so it can be graded in the browser.</small>
