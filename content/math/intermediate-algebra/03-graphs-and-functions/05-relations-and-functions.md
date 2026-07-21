---
title: Relations and Functions
description: >-
  Finding the domain and range of a relation, determining whether a relation
  is a function, and evaluating functions — adapted from OpenStax Intermediate
  Algebra 2e, Section 3.5.
source_section: "3.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find the domain and
  range of a relation, determine if a relation is a function, and find the
  value of a function.
{{< /callout >}}

## Find the domain and range of a relation

As we go about our daily lives, we have many data items or quantities that
are paired to our names. Our social security number, student ID number, email
address, phone number and our birthday are matched to our name. There is a
relationship between our name and each of those items.

When your professor gets her class roster, the names of all the students in
the class are listed in one column and then the student ID number is likely to
be in the next column. If we think of the correspondence as a set of ordered
pairs, where the first element is a student name and the second element is
that student's ID number, we call this a **relation**.

$$(\text{Student name},\ \text{Student ID \#})$$

The set of all the names of the students in the class is called the
**domain** of the relation and the set of all student ID numbers paired with
these students is the **range** of the relation.

There are many similar situations where one variable is paired or matched
with another. The set of ordered pairs that records this matching is a
relation.

{{< callout type="info" >}}
  **Relation.** A relation is any set of ordered pairs, $(x,y)$. All the
  $x$-values in the ordered pairs together make up the **domain**. All the
  $y$-values in the ordered pairs together make up the **range**.
{{< /callout >}}

**Example.** For the relation
$\{(1,1),(2,4),(3,9),(4,16),(5,25)\}$:

(a) Find the domain of the relation.

(b) Find the range of the relation.

**Solution.**

(a) The domain is the set of all $x$-values of the relation:
$\{1,2,3,4,5\}$.

(b) The range is the set of all $y$-values of the relation:
$\{1,4,9,16,25\}$.

{{< fillin
  question="For the relation $\{(1,1),(2,8),(3,27),(4,64),(5,125)\}$, enter the domain as a comma-separated list."
  answer="1,2,3,4,5"
  answerDisplay="$1,2,3,4,5$"
  hint="The domain is the set of all $x$-values."
>}}

{{< fillin
  question="For the relation $\{(1,3),(2,6),(3,9),(4,12),(5,15)\}$, enter the range as a comma-separated list."
  answer="3,6,9,12,15"
  answerDisplay="$3,6,9,12,15$"
  hint="The range is the set of all $y$-values."
>}}

{{< callout type="info" >}}
  **Mapping.** A mapping is sometimes used to show a relation. The arrows
  show the pairing of the elements of the domain with the elements of the
  range.
{{< /callout >}}

**Example.** Use the mapping of the relation shown to (a) list the ordered
pairs of the relation, (b) find the domain of the relation, and (c) find the
range of the relation.

| Name | Birthday |
| :--- | :--- |
| Alison | April 25 |
| Penelope | May 23 |
| June | August 2 |
| Gregory | September 15 |
| Geoffrey | January 12 |
| Lauren | May 10 |
| Stephen | July 24 |
| Alice | February 3 |
| Liz | August 2 |
| Danny | July 24 |

**Solution.** (a) The arrow shows the matching of the person to their
birthday. We create ordered pairs with the person's name as the $x$-value
and their birthday as the $y$-value:

$\{(\text{Alison},\text{April 25}),(\text{Penelope},\text{May 23}),
(\text{June},\text{August 2}),(\text{Gregory},\text{September 15}),
(\text{Geoffrey},\text{January 12}),(\text{Lauren},\text{May 10}),
(\text{Stephen},\text{July 24}),(\text{Alice},\text{February 3}),
(\text{Liz},\text{August 2}),(\text{Danny},\text{July 24})\}$.

(b) The domain is the set of all $x$-values of the relation:
$\{\text{Alison},\text{Penelope},\text{June},\text{Gregory},
\text{Geoffrey},\text{Lauren},\text{Stephen},\text{Alice},\text{Liz},
\text{Danny}\}$.

(c) The range is the set of all $y$-values of the relation:
$\{\text{January 12},\text{February 3},\text{April 25},\text{May 10},
\text{May 23},\text{July 24},\text{August 2},\text{September 15}\}$.

{{< multiplechoice
  question="In the source mapping, Khanh Nguyen is paired with which student ID number?"
  answer="kn68413"
>}}
kn68413
ab56781
jh47983
sm32479
{{< /multiplechoice >}}

{{< multiplechoice
  question="In the source mapping, Maria is paired with which birthday?"
  answer="November 6"
>}}
November 6
January 18
March 15
December 8
{{< /multiplechoice >}}

A graph is yet another way that a relation can be represented. The set of
ordered pairs of all the points plotted is the relation. The set of all
$x$-coordinates is the domain of the relation and the set of all
$y$-coordinates is the range. Generally we write the numbers in ascending
order for both the domain and range.

**Example.** Use the graph of the relation to (a) list the ordered pairs of
the relation, (b) find the domain of the relation, and (c) find the range of
the relation.

<div class="ap-figure">
<svg role="img" aria-label="Coordinate plane with points at 1 comma 5; negative 3 comma negative 1; 4 comma negative 2; 0 comma 3; 2 comma negative 2; and negative 3 comma 4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <circle cx="166" cy="46" r="4" fill="currentColor"/>
  <circle cx="86" cy="166" r="4" fill="currentColor"/>
  <circle cx="226" cy="186" r="4" fill="currentColor"/>
  <circle cx="146" cy="86" r="4" fill="currentColor"/>
  <circle cx="186" cy="186" r="4" fill="currentColor"/>
  <circle cx="86" cy="66" r="4" fill="currentColor"/>
</svg>
</div>

**Solution.** (a) The ordered pairs of the relation are
$\{(1,5),(-3,-1),(4,-2),(0,3),(2,-2),(-3,4)\}$.

(b) The domain is the set of all $x$-values of the relation:
$\{-3,0,1,2,4\}$. Notice that while $-3$ repeats, it is only listed once.

(c) The range is the set of all $y$-values of the relation:
$\{-2,-1,3,4,5\}$. Notice that while $-2$ repeats, it is only listed once.

{{< fillin
  question="For the source graph with points $(-3,3),(-2,2),(-1,0),(0,-1),(2,-2),(4,-4)$, enter the domain as a comma-separated list."
  answer="-3,-2,-1,0,2,4"
  answerDisplay="$-3,-2,-1,0,2,4$"
  hint="List each distinct $x$-coordinate once."
>}}

{{< fillin
  question="For the source graph with points $(-3,0),(-3,5),(-3,-6),(-1,-2),(1,2),(4,-4)$, enter the range as a comma-separated list in the order shown in the Answer Key."
  answer="-6,0,5,-2,2,-4"
  answerDisplay="$-6,0,5,-2,2,-4$"
  hint="List the $y$-coordinates, writing repeated values only once."
>}}

## Determine if a relation is a function

A special type of relation, called a **function**, occurs extensively in
mathematics. A function is a relation that assigns to each element in its
domain exactly one element in the range. For each ordered pair in the
relation, each $x$-value is matched with only one $y$-value.

{{< callout type="info" >}}
  **Function.** A function is a relation that assigns to each element in its
  domain exactly one element in the range.
{{< /callout >}}

The birthday example helps us understand this definition. Every person has
a birthday but no one has two birthdays. It is okay for two people to share
a birthday. It is okay that Danny and Stephen share July 24 as their
birthday and that June and Liz share August 2. Since each person has exactly
one birthday, the relation in the example is a function.

The relation shown by the graph in the previous example includes the ordered
pairs $(-3,-1)$ and $(-3,4)$. Is that okay in a function? No, as this is like
one person having two different birthdays.

**Example.** Use the set of ordered pairs to (i) determine whether the
relation is a function, (ii) find the domain of the relation, and (iii) find
the range of the relation.

(a) $\{(-3,27),(-2,8),(-1,1),(0,0),(1,1),(2,8),(3,27)\}$

(b) $\{(9,-3),(4,-2),(1,-1),(0,0),(1,1),(4,2),(9,3)\}$

**Solution.** (a) Each $x$-value is matched with only one $y$-value. So this
relation is a function. The domain is $\{-3,-2,-1,0,1,2,3\}$. The range is
$\{27,8,1,0\}$; we do not list range values twice.

(b) The $x$-value $9$ is matched with two $y$-values, both $3$ and $-3$. So
this relation is not a function. The domain is $\{0,1,4,9\}$; we do not list
domain values twice. The range is $\{-3,-2,-1,0,1,2,3\}$.

{{< multiplechoice
  question="Is the relation $\{(-3,-6),(-2,-4),(-1,-2),(0,0),(1,2),(2,4),(3,6)\}$ a function?"
  answer="Yes"
>}}
Yes
No
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the relation $\{(27,-3),(8,-2),(1,-1),(0,0),(1,1),(8,2),(27,3)\}$ a function?"
  answer="No"
>}}
No
Yes
{{< /multiplechoice >}}

**Example.** Use the mapping to (a) determine whether the relation is a
function, (b) find the domain of the relation, and (c) find the range of the
relation.

The mapping pairs Lydia with 321-549-3327 home and 321-964-7324 cell;
Eugene with 427-658-2314 cell; Janet with 427-658-2314 cell; Rick with
798-367-8541 cell; and Marty with 684-358-7961 home and 684-369-7231 cell.

**Solution.** (a) Both Lydia and Marty have two phone numbers. So each
$x$-value is not matched with only one $y$-value. So this relation is not a
function.

(b) The domain is $\{\text{Lydia},\text{Eugene},\text{Janet},\text{Rick},
\text{Marty}\}$.

(c) The range is $\{321\text{-}549\text{-}3327,
427\text{-}658\text{-}2314,321\text{-}964\text{-}7324,
684\text{-}358\text{-}7961,684\text{-}369\text{-}7231,
798\text{-}367\text{-}8541\}$.

{{< multiplechoice
  question="The source mapping pairs NBC with three programs, HGTV with three programs, and HBO with three programs. Is the relation a function?"
  answer="No"
>}}
No
Yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="In the source phone-number mapping, Neal, Krystal, Kelvin, George, Christa, and Mike are each paired with exactly one number. Is the relation a function?"
  answer="Yes"
>}}
Yes
No
{{< /multiplechoice >}}

In algebra, more often than not, functions will be represented by an
equation. It is easiest to see if the equation is a function when it is
solved for $y$. If each value of $x$ results in only one value of $y$, then
the equation defines a function.

**Example.** Determine whether each equation is a function. Assume $x$ is
the independent variable.

(a) $2x+y=7$ &nbsp; (b) $y=x^2+1$ &nbsp; (c) $x+y^2=3$

**Solution.** (a) For each value of $x$, we multiply it by $-2$ and then
add $7$ to get the $y$-value. For example, if $x=3$:

$$
\begin{array}{lrcl}
& y &=& -2x+7 \\[4pt]
\text{Substitute }x=3. & y &=& -2\cdot3+7 \\[4pt]
& y &=& 1
\end{array}
$$

We have that when $x=3$, then $y=1$. It would work similarly for any value
of $x$. Since each value of $x$ corresponds to only one value of $y$, the
equation defines a function.

(b) For each value of $x$, we square it and then add $1$ to get the
$y$-value. For example, if $x=2$:

$$
\begin{array}{lrcl}
& y &=& x^2+1 \\[4pt]
\text{Substitute }x=2. & y &=& 2^2+1 \\[4pt]
& y &=& 5
\end{array}
$$

We have that when $x=2$, then $y=5$. It would work similarly for any value
of $x$. Since each value of $x$ corresponds to only one value of $y$, the
equation defines a function.

(c)

$$
\begin{array}{lrcl}
& x+y^2 &=& 3 \\[4pt]
\text{Isolate the }y\text{ term.} & y^2 &=& -x+3 \\[4pt]
\text{Let's substitute }x=2. & y^2 &=& -2+3 \\[4pt]
& y^2 &=& 1 \\[4pt]
\text{This gives us two values for }y. & y &=& 1,-1
\end{array}
$$

We have shown that when $x=2$, then $y=1$ and $y=-1$. It would work
similarly for any value of $x$. Since each value of $x$ does not correspond
to only one value of $y$, the equation does not define a function.

{{< multiplechoice
  question="Determine whether $4x+y=-3$ defines $y$ as a function of $x$."
  answer="Yes"
>}}
Yes
No
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether $x+y^2=4$ defines $y$ as a function of $x$."
  answer="No"
>}}
No
Yes
{{< /multiplechoice >}}

## Find the value of a function

It is very convenient to name a function and most often we name it $f$, $g$,
$h$, $F$, $G$, or $H$. In any function, for each $x$-value from the domain
we get a corresponding $y$-value in the range. For the function $f$, we
write this range value as $f(x)$. This is called function notation and is
read *f of x* or the value of $f$ at $x$. In this case the parentheses does
not indicate multiplication.

{{< callout type="info" >}}
  **Function notation.** For the function $y=f(x)$:

  - $f$ is the name of the function.
  - $x$ is the domain value.
  - $f(x)$ is the range value $y$ corresponding to the value $x$.

  We read $f(x)$ as *f of x* or the value of $f$ at $x$.
{{< /callout >}}

We call $x$ the independent variable as it can be any value in the domain.
We call $y$ the dependent variable as its value depends on $x$.

{{< callout type="info" >}}
  **Independent and dependent variables.** For the function $y=f(x)$, $x$
  is the independent variable as it can be any value in the domain, and $y$
  is the dependent variable as its value depends on $x$.
{{< /callout >}}

Much as when you first encountered the variable $x$, function notation may
be rather unsettling. It seems strange because it is new. You will feel more
comfortable with the notation as you use it. Let's look at the equation
$y=4x-5$. To find the value of $y$ when $x=2$, we know to substitute $x=2$
into the equation and then simplify.

$$
\begin{array}{lrcl}
& y &=& 4x-5 \\[4pt]
\text{Let }x=2. & y &=& 4\cdot2-5 \\[4pt]
& y &=& 3
\end{array}
$$

The value of the function at $x=2$ is $3$.

We do the same thing using function notation, the equation $y=4x-5$ can be
written as $f(x)=4x-5$. To find the value when $x=2$, we write:

$$
\begin{array}{lrcl}
& f(x) &=& 4x-5 \\[4pt]
\text{Let }x=2. & f(2) &=& 4\cdot2-5 \\[4pt]
& f(2) &=& 3
\end{array}
$$

The value of the function at $x=2$ is $3$. This process of finding the value
of $f(x)$ for a given value of $x$ is called *evaluating the function*.

**Example.** For the function $f(x)=2x^2+3x-1$, evaluate the function.

(a) $f(3)$ &nbsp; (b) $f(-2)$ &nbsp; (c) $f(a)$

**Solution.**

$$
\begin{array}{lrcl}
& f(x) &=& 2x^2+3x-1 \\[4pt]
\text{To evaluate }f(3),\text{ substitute }3\text{ for }x. & f(3) &=& 2(3)^2+3\cdot3-1 \\[4pt]
\text{Simplify.} & f(3) &=& 2\cdot9+3\cdot3-1 \\[4pt]
& f(3) &=& 18+9-1 \\[4pt]
& f(3) &=& 26
\end{array}
$$

$$
\begin{array}{lrcl}
& f(x) &=& 2x^2+3x-1 \\[4pt]
\text{To evaluate }f(-2),\text{ substitute }-2\text{ for }x. & f(-2) &=& 2(-2)^2+3(-2)-1 \\[4pt]
\text{Simplify.} & f(-2) &=& 2\cdot4+(-6)-1 \\[4pt]
& f(-2) &=& 8+(-6)-1 \\[4pt]
& f(-2) &=& 1
\end{array}
$$

$$
\begin{array}{lrcl}
& f(x) &=& 2x^2+3x-1 \\[4pt]
\text{To evaluate }f(a),\text{ substitute }a\text{ for }x. & f(a) &=& 2(a)^2+3\cdot a-1 \\[4pt]
\text{Simplify.} & f(a) &=& 2a^2+3a-1
\end{array}
$$

{{< fillin
  question="For $f(x)=3x^2-2x+1$, evaluate $f(3)$."
  answer="22"
  hint="Substitute $3$ for every $x$, then simplify."
>}}

{{< fillin
  question="For $f(x)=2x^2+4x-3$, evaluate $f(-3)$."
  answer="3"
  hint="Substitute $-3$ for every $x$; remember to square the entire negative number."
>}}

In the last example, we found $f(x)$ for a constant value of $x$. In the
next example, we are asked to find $g(x)$ with values of $x$ that are
variables. We still follow the same procedure and substitute the variables
in for the $x$.

**Example.** For the function $g(x)=3x-5$, evaluate the function.

(a) $g(h^2)$ &nbsp; (b) $g(x+2)$ &nbsp; (c) $g(x)+g(2)$

**Solution.**

$$
\begin{array}{lrcl}
& g(x) &=& 3x-5 \\[4pt]
\text{To evaluate }g(h^2),\text{ substitute }h^2\text{ for }x. & g(h^2) &=& 3h^2-5
\end{array}
$$

$$
\begin{array}{lrcl}
& g(x) &=& 3x-5 \\[4pt]
\text{To evaluate }g(x+2),\text{ substitute }x+2\text{ for }x. & g(x+2) &=& 3(x+2)-5 \\[4pt]
\text{Simplify.} & g(x+2) &=& 3x+6-5 \\[4pt]
& g(x+2) &=& 3x+1
\end{array}
$$

$$
\begin{array}{lrcl}
& g(x) &=& 3x-5 \\[4pt]
\text{To evaluate }g(x)+g(2),\text{ first find }g(2). & g(2) &=& 3\cdot2-5 \\[4pt]
& g(2) &=& 1 \\[4pt]
\text{Now find }g(x)+g(2). & g(x)+g(2) &=& 3x-5+1 \\[4pt]
\text{Simplify.} & g(x)+g(2) &=& 3x-4
\end{array}
$$

Notice the difference between parts (b) and (c). We get $g(x+2)=3x+1$ and
$g(x)+g(2)=3x-4$. So we see that $g(x+2)\ne g(x)+g(2)$.

{{< fillin
  question="For $g(x)=4x-7$, evaluate $g(m^2)$."
  answer="4m^2-7"
  hint="Substitute $m^2$ for $x$."
>}}

{{< fillin
  question="For $h(x)=2x+1$, evaluate $h(x)+h(1)$."
  answer="2x+4"
  hint="First find $h(1)$, then add it to $h(x)$."
>}}

Many everyday situations can be modeled using functions.

**Example.** The number of unread emails in Sylvia's account is $75$. This
number grows by $10$ unread emails a day. The function $N(t)=75+10t$
represents the relation between the number of emails, $N$, and the time,
$t$, measured in days.

(a) Determine the independent and dependent variable.

(b) Find $N(5)$. Explain what this result means.

**Solution.** (a) The number of unread emails is a function of the number of
days. The number of unread emails, $N$, depends on the number of days, $t$.
Therefore, the variable $N$ is the dependent variable and the variable $t$
is the independent variable.

(b)

$$
\begin{array}{lrcl}
& N(t) &=& 75+10t \\[4pt]
\text{Substitute in }t=5. & N(5) &=& 75+10\cdot5 \\[4pt]
\text{Simplify.} & N(5) &=& 75+50 \\[4pt]
& N(5) &=& 125
\end{array}
$$

Since $5$ is the number of days, $N(5)$ is the number of unread emails after
$5$ days. After $5$ days, there are $125$ unread emails in the account.

{{< fillin
  question="Bryan's account has 100 unread emails and gains 15 a day, so $N(t)=100+15t$. Find $N(7)$."
  answer="205"
  hint="Substitute $7$ for $t$ and simplify."
>}}

{{< fillin
  question="Anthony's account has 110 unread emails and gains 25 a day, so $N(t)=110+25t$. Find $N(14)$."
  answer="460"
  hint="Substitute $14$ for $t$ and simplify."
>}}

## Key terms

**relation** — any set of ordered pairs, $(x,y)$. **domain of a relation** —
all the $x$-values in the ordered pairs. **range of a relation** — all the
$y$-values in the ordered pairs. **mapping** — a representation of a
relation in which arrows show the pairing of the elements of the domain with
the elements of the range. **function** — a relation that assigns to each
element in its domain exactly one element in the range. **function
notation** — for the function $y=f(x)$, $f(x)$ is the range value $y$
corresponding to the domain value $x$. **independent variable** — a variable
that can be any value in the domain. **dependent variable** — a variable
whose value depends on the independent variable.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.5: Relations and Functions](https://openstax.org/books/intermediate-algebra-2e/pages/3-5-relations-and-functions) by Lynn Marecek, Andrea Honeycutt Mathis, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the coordinate-plane figure as an accessible interactive graph; represented mapping figures as accessible tables or complete prose; omitted the Be Prepared quiz, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
