---
title: Arithmetic Sequences
description: >-
  Finding the common difference for an arithmetic sequence, writing its
  terms, and using a recursive or an explicit formula to describe it —
  adapted from OpenStax Precalculus 2e, Section 11.2.
source_section: "11.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the common difference for an arithmetic sequence
- Write terms of an arithmetic sequence
- Use a recursive formula for an arithmetic sequence
- Use an explicit formula for an arithmetic sequence
{{< /callout >}}

Companies often make large purchases, such as computers and vehicles, for business use. The book-value of these supplies decreases each year for tax purposes. This decrease in value is called depreciation. One method of calculating depreciation is straight-line depreciation, in which the value of the asset decreases by the same amount each year.

As an example, consider a woman who starts a small contracting business. She purchases a new truck for \$25,000. After five years, she estimates that she will be able to sell the truck for \$8,000. The loss in value of the truck will therefore be \$17,000, which is \$3,400 per year for five years. The truck will be worth \$21,600 after the first year; \$18,200 after two years; \$14,800 after three years; \$11,400 after four years; and \$8,000 at the end of five years. In this section, we will consider specific kinds of sequences that will allow us to calculate depreciation, such as the truck's value.

### Finding Common Differences

The values of the truck in the example are said to form an **arithmetic sequence** because they change by a constant amount each year. Each term increases or decreases by the same constant value called the **common difference** of the sequence. For this sequence, the common difference is $-3{,}400$.

$$\{25{,}000,\ 21{,}600,\ 18{,}200,\ 14{,}800,\ 11{,}400,\ 8{,}000\}$$

Each value is $3{,}400$ less than the one before it.

The sequence below is another example of an arithmetic sequence. In this case, the constant difference is $3$. You can choose any term of the sequence, and add $3$ to find the subsequent term.

$$\{3,\ 6,\ 9,\ 12,\ 15,\ldots\}$$

{{< callout type="info" >}}
  **Arithmetic Sequence.** An **arithmetic sequence** is a sequence that has the property that the difference between any two consecutive terms is a constant. This constant is called the **common difference**. If $a_1$ is the first term of an arithmetic sequence and $d$ is the common difference, the sequence will be:

  $$\{a_n\}=\{a_1,a_1+d,a_1+2d,a_1+3d,\ldots\}$$
{{< /callout >}}

**Example.** Is each sequence arithmetic? If so, find the common difference.

a. $\{1,2,4,8,16,\ldots\}$
b. $\{-3,1,5,9,13,\ldots\}$

**Solution.** Subtract each term from the subsequent term to determine whether a common difference exists.

a.

$$
\begin{array}{lrcl}
& 2-1 &=& 1 \\[4pt]
& 4-2 &=& 2 \\[4pt]
& 8-4 &=& 4 \\[4pt]
& 16-8 &=& 8
\end{array}
$$

The sequence is not arithmetic because there is no common difference.

b.

$$
\begin{array}{lrcl}
& 1-(-3) &=& 4 \\[4pt]
& 5-1 &=& 4 \\[4pt]
& 9-5 &=& 4 \\[4pt]
& 13-9 &=& 4
\end{array}
$$

The sequence is arithmetic because there is a common difference. The common difference is $4$.

**Analysis.** The graph of each of these sequences is shown below. We can see from the graphs that, although both sequences show growth, a is not linear whereas b is linear. Arithmetic sequences have a constant rate of change so their graphs will always be points on a line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a non-arithmetic sequence: (1, 1), (2, 2), (3, 4), (4, 8), and (5, 16), rising steeply, labeled (a).","xMin":0,"xMax":6,"yMin":-4,"yMax":20,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":4,"yGridStep":4,"unit":40,"yUnit":10,"points":[{"at":[1,1]},{"at":[2,2]},{"at":[3,4]},{"at":[4,8]},{"at":[5,16]}],"texts":[{"at":[3,-4.9],"text":"(a)","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing an arithmetic sequence: (1, -3), (2, 1), (3, 5), (4, 9), and (5, 13), rising in a straight line, labeled (b).","xMin":0,"xMax":6,"yMin":-4,"yMax":20,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":4,"yGridStep":4,"unit":40,"yUnit":10,"points":[{"at":[1,-3]},{"at":[2,1]},{"at":[3,5]},{"at":[4,9]},{"at":[5,13]}],"texts":[{"at":[3,-4.9],"text":"(b)","anchor":"middle"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *If we are told that a sequence is arithmetic, do we have to subtract every term from the following term to find the common difference?*

  No. If we know that the sequence is arithmetic, we can choose any one term in the sequence, and subtract it from the subsequent term to find the common difference.
{{< /callout >}}

{{< multiplechoice
  question="Is the sequence $18,16,14,12,10,\ldots$ arithmetic?"
  mode="text"
  answer="yes"
  hint="Subtract each term from the one after it and compare the results."
>}}
yes
no
{{< /multiplechoice >}}

{{< fillin
  question="Find the common difference of the arithmetic sequence $18,16,14,12,10,\ldots$."
  answer="-2"
  answerDisplay="$-2$"
  hint="Subtract the first term from the second term."
>}}

{{< multiplechoice
  question="Is the sequence $1,3,6,10,15,\ldots$ arithmetic?"
  mode="text"
  answer="no"
  hint="Compare the difference between the first pair of terms with the difference between the second pair."
>}}
yes
no
{{< /multiplechoice >}}

### Writing Terms of Arithmetic Sequences

Now that we can recognize an arithmetic sequence, we will find the terms if we are given the first term and the common difference. The terms can be found by beginning with the first term and adding the common difference repeatedly. In addition, any term can also be found by plugging in the values of $n$ and $d$ into the formula below.

$$a_n=a_1+(n-1)d$$

{{< callout type="info" >}}
  **How To:** given the first term and the common difference of an arithmetic sequence, find the first several terms.

  1. Add the common difference to the first term to find the second term.
  2. Add the common difference to the second term to find the third term.
  3. Continue until all of the desired terms are identified.
  4. Write the terms separated by commas within brackets.
{{< /callout >}}

**Example.** Write the first five terms of the arithmetic sequence with $a_1=17$ and $d=-3$.

**Solution.** Adding $-3$ is the same as subtracting $3$. Beginning with the first term, subtract $3$ from each term to find the next term.

The first five terms are $\{17,14,11,8,5\}$.

**Analysis.** As expected, the graph of the sequence consists of points on a line, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a decreasing arithmetic sequence at n equals 1 through 5, forming a straight line.","xMin":0,"xMax":6,"yMin":0,"yMax":20,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":5,"yGridStep":5,"unit":40,"yUnit":12,"points":[{"at":[1,17]},{"at":[2,14]},{"at":[3,11]},{"at":[4,8]},{"at":[5,5]}]}
{{< /apfigure >}}

{{< fillin
  question="List the first five terms of the arithmetic sequence with $a_1=1$ and $d=5$. Enter the first five terms, in order, separated by commas."
  answer="1,6,11,16,21"
  answerDisplay="$1,6,11,16,21$"
  hint="Start at $1$ and repeatedly add $5$."
>}}

{{< callout type="info" >}}
  **How To:** given any first term and any other term in an arithmetic sequence, find a given term.

  1. Substitute the values given for $a_1,a_n,n$ into the formula $a_n=a_1+(n-1)d$ to solve for $d$.
  2. Find a given term by substituting the appropriate values for $a_1,n,$ and $d$ into the formula $a_n=a_1+(n-1)d$.
{{< /callout >}}

**Example.** Given $a_1=8$ and $a_4=14$, find $a_5$.

**Solution.** The sequence can be written in terms of the initial term $8$ and the common difference $d$.

$$\{8,8+d,8+2d,8+3d\}$$

We know the fourth term equals $14$; we know the fourth term has the form $a_1+3d=8+3d$. We can find the common difference $d$.

$$
\begin{array}{lrcl}
& a_n &=& a_1+(n-1)d \\[4pt]
& a_4 &=& a_1+3d \\[4pt]
\text{Write the fourth term of the sequence in terms of }a_1\text{ and }d. & a_4 &=& 8+3d \\[4pt]
\text{Substitute }14\text{ for }a_4. & 14 &=& 8+3d \\[4pt]
\text{Solve for the common difference.} & d &=& 2
\end{array}
$$

Find the fifth term by adding the common difference to the fourth term.

$$a_5=a_4+2=16$$

**Analysis.** Notice that the common difference is added to the first term once to find the second term, twice to find the third term, three times to find the fourth term, and so on. The tenth term could be found by adding the common difference to the first term nine times or by using the equation $a_n=a_1+(n-1)d$.

{{< fillin
  question="Given $a_3=7$ and $a_5=17$, find $a_2$."
  answer="2"
  answerDisplay="$a_2=2$"
  hint="Find the common difference from $a_3$ to $a_5$ over two steps, then subtract it once from $a_3$."
>}}

### Using Recursive Formulas for Arithmetic Sequences

Some arithmetic sequences are defined in terms of the previous term using a **recursive formula**. The formula provides an algebraic rule for determining the terms of the sequence. A recursive formula allows us to find any term of an arithmetic sequence using a function of the preceding term. Each term is the sum of the previous term and the common difference. For example, if the common difference is $5$, then each term is the previous term plus $5$. As with any recursive formula, the first term must be given.

$$a_n=a_{n-1}+d\qquad n\ge2$$

{{< callout type="info" >}}
  **Recursive Formula for an Arithmetic Sequence.** The recursive formula for an arithmetic sequence with common difference $d$ is:

  $$a_n=a_{n-1}+d\qquad n\ge2$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given an arithmetic sequence, write its recursive formula.

  1. Subtract any term from the subsequent term to find the common difference.
  2. State the initial term and substitute the common difference into the recursive formula for arithmetic sequences.
{{< /callout >}}

**Example.** Write a recursive formula for the arithmetic sequence.

$$\{-18,-7,4,15,26,\ldots\}$$

**Solution.** The first term is given as $-18$. The common difference can be found by subtracting the first term from the second term.

$$d=-7-(-18)=11$$

Substitute the initial term and the common difference into the recursive formula for arithmetic sequences.

$$
\begin{array}{lrcl}
& a_1 &=& -18 \\[4pt]
& a_n &=& a_{n-1}+11,\text{ for }n\ge2
\end{array}
$$

**Analysis.** We see that the common difference is the slope of the line formed when we graph the terms of the sequence, shown below. The growth pattern of the sequence shows the constant difference of $11$ units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing an increasing arithmetic sequence at n equals 1 through 5, forming a straight line.","xMin":0,"xMax":6,"yMin":-20,"yMax":30,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":10,"yGridStep":10,"unit":40,"yUnit":5,"points":[{"at":[1,-18]},{"at":[2,-7]},{"at":[3,4]},{"at":[4,15]},{"at":[5,26]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Do we have to subtract the first term from the second term to find the common difference?*

  No. We can subtract any term in the sequence from the subsequent term. It is, however, most common to subtract the first term from the second term because it is often the easiest method of finding the common difference.
{{< /callout >}}

{{< fillin
  question="The arithmetic sequence $25,37,49,61,\ldots$ is defined by a recursive formula. Find its initial term $a_1$."
  answer="25"
  answerDisplay="$a_1=25$"
  hint="The initial term is simply the first number listed."
>}}

{{< fillin
  question="Find the recursive rule for the sequence $25,37,49,61,\ldots$, in the form $a_n=\ldots$ (in terms of $a_{n-1}$) for $n\ge2$."
  answer="a_n=a_{n-1}+12"
  answerDisplay="$a_n=a_{n-1}+12$"
  hint="Subtract the first term from the second term to find the common difference."
>}}

### Using Explicit Formulas for Arithmetic Sequences

We can think of an arithmetic sequence as a function on the domain of the natural numbers; it is a linear function because it has a constant rate of change. The common difference is the constant rate of change, or the slope of the function. We can construct the linear function if we know the slope and the vertical intercept.

$$a_n=a_1+d(n-1)$$

To find the $y$-intercept of the function, we can subtract the common difference from the first term of the sequence. Consider the following sequence.

$$\{200,\ 150,\ 100,\ 50,\ 0,\ldots\}$$

The common difference is $-50$, so the sequence represents a linear function with a slope of $-50$. To find the $y$-intercept, we subtract $-50$ from $200$: $200-(-50)=200+50=250$. You can also find the $y$-intercept by graphing the function and determining where a line that connects the points would intersect the vertical axis. The graph is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a decreasing arithmetic sequence at n equals 1 through 5, forming a straight line.","xMin":0,"xMax":6,"yMin":0,"yMax":250,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":50,"yGridStep":50,"unit":40,"yUnit":1,"points":[{"at":[1,200]},{"at":[2,150]},{"at":[3,100]},{"at":[4,50]},{"at":[5,0]}]}
{{< /apfigure >}}

Recall the slope-intercept form of a line is $y=mx+b$. When dealing with sequences, we use $a_n$ in place of $y$ and $n$ in place of $x$. If we know the slope and vertical intercept of the function, we can substitute them for $m$ and $b$ in the slope-intercept form of a line. Substituting $-50$ for the slope and $250$ for the vertical intercept, we get the following equation:

$$a_n=-50n+250$$

We do not need to find the vertical intercept to write an explicit formula for an arithmetic sequence. Another explicit formula for this sequence is $a_n=200-50(n-1)$, which simplifies to $a_n=-50n+250$.

{{< callout type="info" >}}
  **Explicit Formula for an Arithmetic Sequence.** An explicit formula for the $n$th term of an arithmetic sequence is given by

  $$a_n=a_1+d(n-1)$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given the first several terms for an arithmetic sequence, write an explicit formula.

  1. Find the common difference, $a_2-a_1$.
  2. Substitute the common difference and the first term into $a_n=a_1+d(n-1)$.
{{< /callout >}}

**Example.** Write an explicit formula for the arithmetic sequence.

$$\{2,12,22,32,42,\ldots\}$$

**Solution.** The common difference can be found by subtracting the first term from the second term.

$$
\begin{array}{lrcl}
d &=& a_2-a_1 \\[4pt]
&=& 12-2 \\[4pt]
&=& 10
\end{array}
$$

The common difference is $10$. Substitute the common difference and the first term of the sequence into the formula and simplify.

$$
\begin{array}{lrcl}
& a_n &=& 2+10(n-1) \\[4pt]
& a_n &=& 10n-8
\end{array}
$$

**Analysis.** The graph of this sequence, shown below, shows a slope of $10$ and a vertical intercept of $-8$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing an increasing arithmetic sequence at n equals 1 through 5, forming a straight line.","xMin":0,"xMax":10,"yMin":0,"yMax":50,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":10,"yGridStep":10,"unit":40,"yUnit":4,"points":[{"at":[1,2]},{"at":[2,12]},{"at":[3,22]},{"at":[4,32]},{"at":[5,42]}]}
{{< /apfigure >}}

{{< fillin
  question="Write an explicit formula for the arithmetic sequence $50,47,44,41,\ldots$."
  answer="53-3n"
  answerDisplay="$a_n=53-3n$"
  hint="Find the common difference, then substitute it and the first term into $a_n=a_1+d(n-1)$ and simplify."
>}}

### Finding the Number of Terms in a Finite Arithmetic Sequence

Explicit formulas can be used to determine the number of terms in a finite arithmetic sequence. We need to find the common difference, and then determine how many times the common difference must be added to the first term to obtain the final term of the sequence.

{{< callout type="info" >}}
  **How To:** given the first three terms and the last term of a finite arithmetic sequence, find the total number of terms.

  1. Find the common difference $d$.
  2. Substitute the common difference and the first term into $a_n=a_1+d(n-1)$.
  3. Substitute the last term for $a_n$ and solve for $n$.
{{< /callout >}}

**Example.** Find the number of terms in the finite arithmetic sequence.

$$\{8,1,-6,\ldots,-41\}$$

**Solution.** The common difference can be found by subtracting the first term from the second term.

$$1-8=-7$$

The common difference is $-7$. Substitute the common difference and the initial term of the sequence into the $n$th term formula and simplify.

$$
\begin{array}{lrcl}
& a_n &=& a_1+d(n-1) \\[4pt]
& a_n &=& 8+(-7)(n-1) \\[4pt]
& a_n &=& 15-7n
\end{array}
$$

Substitute $-41$ for $a_n$ and solve for $n$.

$$
\begin{array}{lrcl}
& -41 &=& 15-7n \\[4pt]
& 8 &=& n
\end{array}
$$

There are eight terms in the sequence.

{{< fillin
  question="Find the number of terms in the finite arithmetic sequence $6,11,16,\ldots,56$."
  answer="11"
  answerDisplay="$11$"
  hint="Find the common difference, write the $n$th-term formula, then substitute $56$ for $a_n$ and solve for $n$."
>}}

### Solving Application Problems with Arithmetic Sequences

In many application problems, it often makes sense to use an initial term of $a_0$ instead of $a_1$. In these problems, we alter the explicit formula slightly to account for the difference in initial terms. We use the following formula:

$$a_n=a_0+dn$$

**Example.** A five-year old child receives an allowance of \$1 each week. His parents promise him an annual increase of \$2 per week.

a. Write a formula for the child's weekly allowance in a given year.
b. What will the child's allowance be when he is 16 years old?

**Solution.**

a. The situation can be modeled by an arithmetic sequence with an initial term of $1$ and a common difference of $2$. Let $A$ be the amount of the allowance and $n$ be the number of years after age $5$. Using the altered explicit formula for an arithmetic sequence we get:

   $$A_n=1+2n$$

b. We can find the number of years since age $5$ by subtracting.

   $$16-5=11$$

   We are looking for the child's allowance after 11 years. Substitute $11$ into the formula to find the child's allowance at age $16$.

   $$A_{11}=1+2(11)=23$$

   The child's allowance at age 16 will be \$23 per week.

{{< fillin
  question="A woman decides to go for a 10-minute run every day this week and plans to increase the time of her daily run by 4 minutes each week. Write a formula for the time of her run (in minutes), $T_n$, after $n$ weeks."
  answer="10+4n"
  answerDisplay="$T_n=10+4n$"
  hint="Use the altered explicit formula $a_n=a_0+dn$ with the starting run time as $a_0$ and the weekly increase as $d$."
>}}

{{< fillin
  question="Using the formula $T_n=10+4n$ for the length, in minutes, of the woman's daily run after $n$ weeks, how long will her daily run be 8 weeks from today?"
  answer="42"
  answerDisplay="$42$ minutes"
  hint="Substitute $8$ for $n$ in the formula."
>}}

{{< callout type="info" >}}
**Media.** Access this online resource for additional instruction and practice with arithmetic sequences.

- Arithmetic Sequences
{{< /callout >}}

## Key equations

| recursive formula for $n$th term of an arithmetic sequence | $a_n=a_{n-1}+d,\ n\ge2$ |
| :--- | :--- |
| explicit formula for $n$th term of an arithmetic sequence | $a_n=a_1+d(n-1)$ |

## Key concepts

- An arithmetic sequence is a sequence where the difference between any two consecutive terms is a constant.
- The constant between two consecutive terms is called the common difference.
- The common difference is the number added to any one term of an arithmetic sequence that generates the subsequent term.
- The terms of an arithmetic sequence can be found by beginning with the initial term and adding the common difference repeatedly.
- A recursive formula for an arithmetic sequence with common difference $d$ is given by $a_n=a_{n-1}+d,\ n\ge2$.
- As with any recursive formula, the initial term of the sequence must be given.
- An explicit formula for an arithmetic sequence with common difference $d$ is given by $a_n=a_1+d(n-1)$.
- An explicit formula can be used to find the number of terms in a sequence.
- In application problems, we sometimes alter the explicit formula slightly to $a_n=a_0+dn$.

## Practice

### Find the common difference for an arithmetic sequence

{{< multiplechoice
  question="Is the sequence $4,16,64,256,1024,\ldots$ arithmetic?"
  mode="text"
  answer="no"
  hint="Subtract each term from the one after it and compare the results."
>}}
yes
no
{{< /multiplechoice >}}

{{< fillin
  question="Find the common difference, as a fraction, of the arithmetic sequence $0,\tfrac12,1,\tfrac32,2,\ldots$."
  answer="\frac{1}{2}"
  answerForm="fraction"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Subtract the first term from the second term."
>}}

### Write terms of an arithmetic sequence

{{< fillin
  question="Write the first five terms of the arithmetic sequence given the first term $a_1=0$ and common difference $d=\tfrac23$. Enter the first five terms, in order, separated by commas."
  answer="0,2/3,4/3,2,8/3"
  answerDisplay="$0,\tfrac{2}{3},\tfrac{4}{3},2,\tfrac{8}{3}$"
  hint="Start at $0$ and repeatedly add $\tfrac23$."
>}}

{{< fillin
  question="An arithmetic sequence has $a_{13}=-60$ and $a_{33}=-160$. Write its first five terms, in order, separated by commas."
  answer="0,-5,-10,-15,-20"
  answerDisplay="$0,-5,-10,-15,-20$"
  hint="Use the two given terms to find the common difference, then work backward from $a_{13}$ to find $a_1$."
>}}

### Use a recursive formula for an arithmetic sequence

{{< fillin
  question="Use the recursive formula $a_1=-19,\ a_n=a_{n-1}-1.4,$ for $n\ge2$, to write the first five terms of the arithmetic sequence. Enter the first five terms, in order, separated by commas."
  answer="-19,-20.4,-21.8,-23.2,-24.6"
  answerDisplay="$-19,-20.4,-21.8,-23.2,-24.6$"
  hint="Start at $-19$ and repeatedly subtract $1.4$."
>}}

{{< fillin
  question="The arithmetic sequence $17,26,35,\ldots$ is defined by a recursive formula. Find its initial term $a_1$."
  answer="17"
  answerDisplay="$a_1=17$"
  hint="The initial term is simply the first number listed."
>}}

{{< fillin
  question="Find the recursive rule for the sequence $17,26,35,\ldots$, in the form $a_n=\ldots$ (in terms of $a_{n-1}$) for $n\ge2$."
  answer="a_n=a_{n-1}+9"
  answerDisplay="$a_n=a_{n-1}+9$"
  hint="Subtract the first term from the second term to find the common difference."
>}}

### Use an explicit formula for an arithmetic sequence

{{< fillin
  question="Write the first five terms of the arithmetic sequence defined by the explicit formula $a_n=24-4n$. Enter the first five terms, in order, separated by commas."
  answer="20,16,12,8,4"
  answerDisplay="$20,16,12,8,4$"
  hint="Substitute $n=1,2,3,4,5$ in turn into the formula."
>}}

{{< fillin
  question="Write an explicit formula for the arithmetic sequence $3,5,7,\ldots$."
  answer="2n+1"
  answerDisplay="$a_n=2n+1$"
  hint="Find the common difference, then substitute it and the first term into $a_n=a_1+d(n-1)$ and simplify."
>}}

{{< fillin
  question="Find the number of terms in the finite arithmetic sequence $3,-4,-11,\ldots,-60$."
  answer="10"
  answerDisplay="$10$"
  hint="Find the common difference, write the $n$th-term formula, then substitute $-60$ for $a_n$ and solve for $n$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 11.2: Arithmetic Sequences](https://openstax.org/books/precalculus-2e/pages/11-2-arithmetic-sequences) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Learning Objectives" keyed to Intermediate Algebra 12.2.1–12.2.2, with two short "Determine if a sequence is arithmetic" and "Find the general term" examples and their own "Practice Makes Perfect" exercise sets) — confirmed against the rendered PDF, true page 1114 (printed page 1104), where an unrelated exercise from the prior section runs directly into the "11.2 Arithmetic Sequences" heading, objectives, and the depreciation paragraph with no corequisite-skills material between them; this is the same prepended-block pattern already logged in this book's errata for other chapters' opening modules. Recreated all six instructional figures as accessible spec-first scatter plots, points-only (no connecting curve), matching the source art exactly: the two-panel Analysis figure after Example 1 (comparing a non-arithmetic and an arithmetic sequence) is authored as two separate `apfigure`s, each carrying its own panel label ("(a)"/"(b)") as a `texts` entry beneath the axis, since a two-panel source figure is two figures per house convention. None of this section's own scatter plots carry per-point coordinate labels, matching the source exactly (unlike the labelled points in Section 11.1's figures) — every plotted value is already stated in the surrounding prose or the worked solution, so no answer is hidden by the omission. **One suspected source defect, confirmed against the raw PDF (true page 1116) and independent computation, corrected locally:** the Analysis figure following Example 2 ("Write the first five terms of the arithmetic sequence with $a_1=17$ and $d=-3$", terms $17,14,11,8,5$) prints the *same* raster image used later in the module's "Using Explicit Formulas" discussion — a y-axis scaled $0$ to $250$ with five points at $(1,200),(2,150),(3,100),(4,50),(5,0)$, which is a different sequence entirely (the $a_1=200,d=-50$ sequence discussed several paragraphs later) and does not depict $17,14,11,8,5$ at any scale. The local page recreates the correct scatter plot for the printed example ($1,17),(2,14),(3,11),(4,8),(5,5)$ on a $0$–$20$ axis instead of reproducing the mismatched source image; the later, correctly-scaled $200/150/100/50/0$ figure is recreated faithfully in its own place. Omitted the two small raster illustrations of the depreciation and $+3$ example sequences (informal arrow diagrams, not numbered figures in the source) and the two raster images inside Example 1's solution showing the four subtraction computations for each part; all of this arithmetic is recreated as ordinary KaTeX (a labelled sequence display for the two intro sequences, and a `\begin{array}{lrcl}` step table for each part of Example 1's solution), preserving every computed step rather than the finished result alone. Every "is the sequence arithmetic?" ask is a `multiplechoice` (yes/no); where the source's own Try It also asks for the common difference, it splits into the multiple choice plus a separate fill-in, per this book's established pattern. Every "find a recursive formula" fill-in pins the requested shape ("in the form $a_n=\ldots$, in terms of $a_{n-1}$, for $n\ge2$") and keys the initial term as its own separate fill-in, since the grader accepts reordered and rescaled restatements of a correct recursive rule but treats a shifted index or a wrong sign as a different rule; the source's own algebraic answer key states both parts together (e.g. "$a_1=17;a_n=a_{n-1}+9,n\ge2$"), split here into two components per the multipart-expansion rule. The one fraction-valued single-value fill-in (the common difference of $0,\tfrac12,1,\tfrac32,2,\ldots$) declares `answerForm="fraction"` and its question says "as a fraction," confirmed against the real grader: a rounded decimal reports `form`, not `correct`, once the token is declared. Nine selected end-of-section exercises were adapted into the interactive components of the closing Practice block, one Practice group per objective, every answer independently re-derived — including by running the arithmetic in Node with exact-rational tracking for every fraction — rather than read off the source key.</small>
