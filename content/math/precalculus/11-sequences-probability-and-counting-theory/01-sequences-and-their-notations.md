---
title: Sequences and Their Notations
description: >-
  Writing the terms of a sequence defined by an explicit formula or a
  recursive formula, and using factorial notation — adapted from OpenStax
  Precalculus 2e, Section 11.1.
source_section: "11.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Write the terms of a sequence defined by an explicit formula
- Write the terms of a sequence defined by a recursive formula
- Use factorial notation
{{< /callout >}}

A video game company launches an exciting new advertising campaign. They predict the number of online visits to their website, or hits, will double each day. The model they are using shows 2 hits the first day, 4 hits the second day, 8 hits the third day, and so on.

| Day | 1 | 2 | 3 | 4 | 5 | … |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Hits | 2 | 4 | 8 | 16 | 32 | … |

If their model continues, how many hits will there be at the end of the month? To answer this question, we'll first need to know how to determine a list of numbers written in a specific order. In this section, we will explore these kinds of ordered lists.

### Writing the Terms of a Sequence Defined by an Explicit Formula

One way to describe an ordered list of numbers is as a **sequence**. A sequence is a function whose domain is a subset of the counting numbers. The sequence established by the number of hits on the website is

$$\{2,4,8,16,32,\ldots\}.$$

The **ellipsis** ($\ldots$) indicates that the sequence continues indefinitely. Each number in the sequence is called a **term**. The first five terms of this sequence are 2, 4, 8, 16, and 32.

Listing all of the terms for a sequence can be cumbersome. For example, finding the number of hits on the website at the end of the month would require listing out as many as 31 terms. A more efficient way to determine a specific term is by writing a formula to define the sequence.

One type of formula is an **explicit formula**, which defines the terms of a sequence using their position in the sequence. Explicit formulas are helpful if we want to find a specific term of a sequence without finding all of the previous terms. We can use the formula to find the **$n$th term of the sequence**, where $n$ is any positive number. In our example, each number in the sequence is double the previous number, so we can use powers of 2 to write a formula for the $n$th term.

The first term of the sequence is $2^1=2$, the second term is $2^2=4$, the third term is $2^3=8$, and so on. The $n$th term of the sequence can be found by raising 2 to the $n$th power. An explicit formula for a sequence is named by a lower case letter $a,b,c\ldots$ with the subscript $n$. The explicit formula for this sequence is

$$a_n=2^n.$$

Now that we have a formula for the $n$th term of the sequence, we can answer the question posed at the beginning of this section. We were asked to find the number of hits at the end of the month, which we will take to be 31 days. To find the number of hits on the last day of the month, we need to find the 31st term of the sequence. We will substitute 31 for $n$ in the formula.

$$
\begin{array}{lrcl}
& a_{31} &=& 2^{31} \\[4pt]
& &=& 2{,}147{,}483{,}648
\end{array}
$$

If the doubling trend continues, the company will get $2{,}147{,}483{,}648$ hits on the last day of the month. That is over 2.1 billion hits! The huge number is probably a little unrealistic because it does not take consumer interest and competition into account. It does, however, give the company a starting point from which to consider business decisions.

Another way to represent the sequence is by using a table. The first five terms of the sequence and the $n$th term of the sequence are shown in the table below.

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $n$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $n$th term of the sequence, $a_n$ | $2$ | $4$ | $8$ | $16$ | $32$ | $2^n$ |

Graphing provides a visual representation of the sequence as a set of distinct points. We can see from the graph below that the number of hits is rising at an exponential rate. This particular sequence forms an exponential function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing the sequence of powers of 2: (1, 2), (2, 4), (3, 8), (4, 16), and (5, 32), rising steeply as n increases.","xMin":0,"xMax":6,"yMin":0,"yMax":36,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":4,"points":[{"at":[1,2],"label":"(1, 2)"},{"at":[2,4],"label":"(2, 4)"},{"at":[3,8],"label":"(3, 8)"},{"at":[4,16],"label":"(4, 16)"},{"at":[5,32],"label":"(5, 32)"}],"unit":44,"yUnit":6,"yGridStep":4}
{{< /apfigure >}}

Lastly, we can write this particular sequence as

$$\{2,4,8,16,32,\ldots,2^n,\ldots\}.$$

A sequence that continues indefinitely is called an **infinite sequence**. The domain of an infinite sequence is the set of counting numbers. If we consider only the first 10 terms of the sequence, we could write

$$\{2,4,8,16,32,\ldots,2^n,\ldots,1024\}.$$

This sequence is called a **finite sequence** because it does not continue indefinitely.

{{< callout type="info" >}}
  **Sequence.** A **sequence** is a function whose domain is the set of positive integers. A **finite sequence** is a sequence whose domain consists of only the first $n$ positive integers. The numbers in a sequence are called **terms**. The variable $a$ with a number subscript is used to represent the terms in a sequence and to indicate the position of the term in the sequence.

  $$a_1,a_2,a_3,\ldots,a_n,\ldots$$

  We call $a_1$ the first term of the sequence, $a_2$ the second term of the sequence, $a_3$ the third term of the sequence, and so on. The term $a_n$ is called the **$n$th term of the sequence**, or the general term of the sequence. An **explicit formula** defines the $n$th term of a sequence using the position of the term. A sequence that continues indefinitely is an **infinite sequence**.
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Does a sequence always have to begin with $a_1$?*

  No. In certain problems, it may be useful to define the initial term as $a_0$ instead of $a_1$. In these problems, the domain of the function includes 0.
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given an explicit formula, write the first $n$ terms of a sequence.

  1. Substitute each value of $n$ into the formula. Begin with $n=1$ to find the first term, $a_1$.
  2. To find the second term, $a_2$, use $n=2$.
  3. Continue in the same manner until you have identified all $n$ terms.
{{< /callout >}}

**Example.** Write the first five terms of the sequence defined by the explicit formula $a_n=-3n+8$.

**Solution.** Substitute $n=1$ into the formula. Repeat with values 2 through 5 for $n$.

$$
\begin{array}{lrcl}
n=1 & a_1 &=& -3(1)+8=5 \\[4pt]
n=2 & a_2 &=& -3(2)+8=2 \\[4pt]
n=3 & a_3 &=& -3(3)+8=-1 \\[4pt]
n=4 & a_4 &=& -3(4)+8=-4 \\[4pt]
n=5 & a_5 &=& -3(5)+8=-7
\end{array}
$$

The first five terms are $5,2,-1,-4,-7$.

**Analysis.** The sequence values can be listed in a table. A table, such as the one below, is a convenient way to input the function into a graphing utility.

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $a_n$ | $5$ | $2$ | $-1$ | $-4$ | $-7$ |

A graph can be made from this table of values. From the graph below, we can see that this sequence represents a linear function, but notice the graph is not continuous because the domain is over the positive integers only.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a decreasing linear sequence: (1, 5), (2, 2), (3, -1), (4, -4), and (5, -7).","xMin":-1,"xMax":6,"yMin":-8,"yMax":6,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"points":[{"at":[1,5],"label":"(1, 5)"},{"at":[2,2],"label":"(2, 2)"},{"at":[3,-1],"label":"(3, -1)"},{"at":[4,-4],"label":"(4, -4)"},{"at":[5,-7],"label":"(5, -7)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the first five terms of the sequence defined by the explicit formula $t_n=5n-4$. Enter the first five terms, in order, separated by commas."
  answer="1,6,11,16,21"
  answerDisplay="$1,6,11,16,21$"
  hint="Substitute $n=1,2,3,4,5$ in turn into the formula."
>}}

### Investigating Alternating Sequences

Sometimes sequences have terms that are alternate. In fact, the terms may actually alternate in sign. The steps to finding terms of the sequence are the same as if the signs did not alternate. However, the resulting terms will not show increase or decrease as $n$ increases. Let's take a look at the following sequence.

$$\{2,-4,6,-8\}$$

Notice the first term is greater than the second term, the second term is less than the third term, and the third term is greater than the fourth term. This trend continues forever. Do not rearrange the terms in numerical order to interpret the sequence.

{{< callout type="info" >}}
  **How To:** given an explicit formula with alternating terms, write the first $n$ terms of a sequence.

  1. Substitute each value of $n$ into the formula. Begin with $n=1$ to find the first term, $a_1$. The sign of the term is given by the $(-1)^n$ in the explicit formula.
  2. To find the second term, $a_2$, use $n=2$.
  3. Continue in the same manner until you have identified all $n$ terms.
{{< /callout >}}

**Example.** Write the first five terms of the sequence.

$$a_n=\tfrac{(-1)^nn^2}{n+1}$$

**Solution.** Substitute $n=1,n=2,$ and so on in the formula.

$$
\begin{array}{lrcl}
n=1 & a_1 &=& \tfrac{(-1)^11^2}{1+1}=-\tfrac{1}{2} \\[4pt]
n=2 & a_2 &=& \tfrac{(-1)^22^2}{2+1}=\tfrac{4}{3} \\[4pt]
n=3 & a_3 &=& \tfrac{(-1)^33^2}{3+1}=-\tfrac{9}{4} \\[4pt]
n=4 & a_4 &=& \tfrac{(-1)^44^2}{4+1}=\tfrac{16}{5} \\[4pt]
n=5 & a_5 &=& \tfrac{(-1)^55^2}{5+1}=-\tfrac{25}{6}
\end{array}
$$

The first five terms are $-\tfrac{1}{2},\tfrac{4}{3},-\tfrac{9}{4},\tfrac{16}{5},-\tfrac{25}{6}$.

**Analysis.** The graph of this function, shown below, looks different from the ones we have seen previously in this section because the terms of the sequence alternate between positive and negative values.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing an alternating sequence: (1, -1/2), (2, 4/3), (3, -9/4), (4, 16/5), and (5, -25/6), alternating between negative and positive values.","xMin":-1,"xMax":6,"yMin":-5,"yMax":4,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"points":[{"at":[1,-0.5],"label":"(1, -1/2)"},{"at":[2,1.3333],"label":"(2, 4/3)"},{"at":[3,-2.25],"label":"(3, -9/4)"},{"at":[4,3.2],"label":"(4, 16/5)"},{"at":[5,-4.1667],"label":"(5, -25/6)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *In the example above, does the $(-1)$ to the power of $n$ account for the oscillations of signs?*

  Yes, the power might be $n,n+1,n-1,$ and so on, but any odd powers will result in a negative term, and any even power will result in a positive term.
{{< /callout >}}

{{< fillin
  question="Write the first five terms of the sequence $a_n=\tfrac{4n}{(-2)^n}$. Enter the first five terms, in order, separated by commas."
  answer="-2,2,-3/2,1,-5/8"
  answerDisplay="$-2,2,-\tfrac{3}{2},1,-\tfrac{5}{8}$"
  hint="Substitute $n=1,2,3,4,5$; the sign of each term is set by $(-2)^n$ in the denominator."
>}}

### Investigating Piecewise Explicit Formulas

We've learned that sequences are functions whose domain is over the positive integers. This is true for other types of functions, including some **piecewise functions**. Recall that a piecewise function is a function defined by multiple subsections. A different formula might represent each individual subsection.

{{< callout type="info" >}}
  **How To:** given an explicit formula for a piecewise function, write the first $n$ terms of a sequence.

  1. Identify the formula to which $n=1$ applies.
  2. To find the first term, $a_1$, use $n=1$ in the appropriate formula.
  3. Identify the formula to which $n=2$ applies.
  4. To find the second term, $a_2$, use $n=2$ in the appropriate formula.
  5. Continue in the same manner until you have identified all $n$ terms.
{{< /callout >}}

**Example.** Write the first six terms of the sequence.

$$a_n=\begin{cases}n^2 & \text{if }n\text{ is not divisible by }3 \\ \tfrac{n}{3} & \text{if }n\text{ is divisible by }3\end{cases}$$

**Solution.** Substitute $n=1,n=2,$ and so on in the appropriate formula. Use $n^2$ when $n$ is not a multiple of 3. Use $\tfrac{n}{3}$ when $n$ is a multiple of 3.

$$
\begin{array}{lrcl}
a_1=1^2=1 & & & \text{1 is not a multiple of 3. Use }n^2. \\[4pt]
a_2=2^2=4 & & & \text{2 is not a multiple of 3. Use }n^2. \\[4pt]
a_3=\tfrac{3}{3}=1 & & & \text{3 is a multiple of 3. Use }\tfrac{n}{3}. \\[4pt]
a_4=4^2=16 & & & \text{4 is not a multiple of 3. Use }n^2. \\[4pt]
a_5=5^2=25 & & & \text{5 is not a multiple of 3. Use }n^2. \\[4pt]
a_6=\tfrac{6}{3}=2 & & & \text{6 is a multiple of 3. Use }\tfrac{n}{3}.
\end{array}
$$

The first six terms are $1,4,1,16,25,2$.

**Analysis.** Every third point on the graph shown below stands out from the two nearby points. This occurs because the sequence was defined by a piecewise function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of six points showing a piecewise sequence: (1, 1), (2, 4), (3, 1), (4, 16), (5, 25), and (6, 2), where every third point drops sharply below the rising trend of the others.","xMin":0,"xMax":7,"yMin":0,"yMax":28,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":4,"points":[{"at":[1,1]},{"at":[2,4]},{"at":[3,1]},{"at":[4,16]},{"at":[5,25]},{"at":[6,2]}],"unit":40,"yUnit":7,"yGridStep":4}
{{< /apfigure >}}

{{< fillin
  question="Write the first six terms of the sequence $a_n=\begin{cases}2n^3 & \text{if }n\text{ is odd} \\ \tfrac{5n}{2} & \text{if }n\text{ is even}\end{cases}$. Enter the first six terms, in order, separated by commas."
  answer="2,5,54,10,250,15"
  answerDisplay="$2,5,54,10,250,15$"
  hint="Use $2n^3$ when $n$ is odd and $\tfrac{5n}{2}$ when $n$ is even; check each $n$ from 1 through 6 against both conditions."
>}}

### Finding an Explicit Formula

Thus far, we have been given the explicit formula and asked to find a number of terms of the sequence. Sometimes, the explicit formula for the $n$th term of a sequence is not given. Instead, we are given several terms from the sequence. When this happens, we can work in reverse to find an explicit formula from the first few terms of a sequence. The key to finding an explicit formula is to look for a pattern in the terms. Keep in mind that the pattern may involve alternating terms, formulas for numerators, formulas for denominators, exponents, or bases.

{{< callout type="info" >}}
  **How To:** given the first few terms of a sequence, find an explicit formula for the sequence.

  1. Look for a pattern among the terms.
  2. If the terms are fractions, look for a separate pattern among the numerators and denominators.
  3. Look for a pattern among the signs of the terms.
  4. Write a formula for $a_n$ in terms of $n$. Test your formula for $n=1,n=2,$ and $n=3$.
{{< /callout >}}

**Example.** Write an explicit formula for the $n$th term of each sequence.

a. $-\tfrac{2}{11},\tfrac{3}{13},-\tfrac{4}{15},\tfrac{5}{17},-\tfrac{6}{19},\ldots$
b. $-\tfrac{2}{25},-\tfrac{2}{125},-\tfrac{2}{625},-\tfrac{2}{3{,}125},-\tfrac{2}{15{,}625},\ldots$
c. $e^4,e^5,e^6,e^7,e^8,\ldots$

**Solution.** Look for the pattern in each sequence.

a. The terms alternate between positive and negative. We can use $(-1)^n$ to make the terms alternate. The numerator can be represented by $n+1$. The denominator can be represented by $2n+9$.

   $$a_n=\tfrac{(-1)^n(n+1)}{2n+9}$$

b. The terms are all negative. So we know that the fraction is negative, the numerator is 2, and the denominator can be represented by $5^{n+1}$.

   $$a_n=-\tfrac{2}{5^{n+1}}$$

c. The terms are powers of $e$. For $n=1$, the first term is $e^4$ so the exponent must be $n+3$.

   $$a_n=e^{n+3}$$

{{< fillin
  question="Write an explicit formula for the $n$th term of the sequence $9,-81,729,-6{,}561,59{,}049,\ldots$."
  answer="(-1)^{n+1}9^n"
  answerDisplay="$(-1)^{n+1}9^n$"
  hint="The terms alternate in sign and are powers of 9; test your formula for $n=1$ and $n=2$."
>}}

{{< fillin
  question="Write an explicit formula for the $n$th term of the sequence $-\tfrac{3}{4},-\tfrac{9}{8},-\tfrac{27}{12},-\tfrac{81}{16},-\tfrac{243}{20},\ldots$."
  answer="-3^n/(4n)"
  answerDisplay="$-\tfrac{3^n}{4n}$"
  hint="The numerators are powers of 3 and the denominators are multiples of 4; every term is negative."
>}}

{{< fillin
  question="Write an explicit formula for the $n$th term of the sequence $\tfrac{1}{e^2},\tfrac{1}{e},1,e,e^2,\ldots$."
  answer="e^{n-3}"
  answerDisplay="$e^{n-3}$"
  hint="The terms are powers of $e$; find the exponent that gives $-2$ when $n=1$."
>}}

### Writing the Terms of a Sequence Defined by a Recursive Formula

Sequences occur naturally in the growth patterns of nautilus shells, pinecones, tree branches, and many other natural structures. We may see the sequence in the leaf or branch arrangement, the number of petals of a flower, or the pattern of the chambers in a nautilus shell. Their growth follows the Fibonacci sequence, a famous sequence in which each term can be found by adding the preceding two terms. The numbers in the sequence are 1, 1, 2, 3, 5, 8, 13, 21, 34,…. Other examples from the natural world that exhibit the Fibonacci sequence are the Calla Lily, which has just one petal, the Black-Eyed Susan with 13 petals, and different varieties of daisies that may have 21 or 34 petals.

Each term of the Fibonacci sequence depends on the terms that come before it. The Fibonacci sequence cannot easily be written using an explicit formula. Instead, we describe the sequence using a **recursive formula**, a formula that defines the terms of a sequence using previous terms.

A recursive formula always has two parts: the value of an initial term (or terms), and an equation defining $a_n$ in terms of preceding terms. For example, suppose we know the following:

$$
\begin{array}{lrcl}
& a_1 &=& 3 \\[4pt]
& a_n &=& 2a_{n-1}-1\text{ for }n\ge2
\end{array}
$$

We can find the subsequent terms of the sequence using the first term.

$$
\begin{array}{lrcl}
& a_1 &=& 3 \\[4pt]
& a_2 &=& 2a_1-1=2(3)-1=5 \\[4pt]
& a_3 &=& 2a_2-1=2(5)-1=9 \\[4pt]
& a_4 &=& 2a_3-1=2(9)-1=17
\end{array}
$$

So the first four terms of the sequence are $3,5,9,17$.

The recursive formula for the Fibonacci sequence states the first two terms and defines each successive term as the sum of the preceding two terms.

$$
\begin{array}{lrcl}
& a_1 &=& 1 \\[4pt]
& a_2 &=& 1 \\[4pt]
& a_n &=& a_{n-1}+a_{n-2}\text{ for }n\ge3
\end{array}
$$

To find the tenth term of the sequence, for example, we would need to add the eighth and ninth terms. We were told previously that the eighth and ninth terms are 21 and 34, so

$$a_{10}=a_9+a_8=34+21=55$$

{{< callout type="info" >}}
  **Recursive Formula.** A **recursive formula** is a formula that defines each term of a sequence using preceding term(s). Recursive formulas must always state the initial term, or terms, of the sequence.
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Must the first two terms always be given in a recursive formula?*

  No. The Fibonacci sequence defines each term using the two preceding terms, but many recursive formulas define each term using only one preceding term. These sequences need only the first term to be defined.
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a recursive formula with only the first term provided, write the first $n$ terms of a sequence.

  1. Identify the initial term, $a_1$, which is given as part of the formula. This is the first term.
  2. To find the second term, $a_2$, substitute the initial term into the formula for $a_{n-1}$. Solve.
  3. To find the third term, $a_3$, substitute the second term into the formula. Solve.
  4. Repeat until you have solved for the $n$th term.
{{< /callout >}}

**Example.** Write the first five terms of the sequence defined by the recursive formula.

$$
\begin{array}{lrcl}
& a_1 &=& 9 \\[4pt]
& a_n &=& 3a_{n-1}-20,\text{ for }n\ge2
\end{array}
$$

**Solution.** The first term is given in the formula. For each subsequent term, we replace $a_{n-1}$ with the value of the preceding term.

$$
\begin{array}{lrcl}
n=1 & a_1 &=& 9 \\[4pt]
n=2 & a_2 &=& 3a_1-20=3(9)-20=27-20=7 \\[4pt]
n=3 & a_3 &=& 3a_2-20=3(7)-20=21-20=1 \\[4pt]
n=4 & a_4 &=& 3a_3-20=3(1)-20=3-20=-17 \\[4pt]
n=5 & a_5 &=& 3a_4-20=3(-17)-20=-51-20=-71
\end{array}
$$

The first five terms are $9,7,1,-17,-71$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a decreasing recursive sequence: (1, 9), (2, 7), (3, 1), (4, -17), and (5, -71).","xMin":-1,"xMax":6,"yMin":-80,"yMax":20,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":20,"unit":45,"yUnit":3,"points":[{"at":[1,9],"label":"(1, 9)"},{"at":[2,7],"label":"(2, 7)"},{"at":[3,1],"label":"(3, 1)"},{"at":[4,-17],"label":"(4, -17)"},{"at":[5,-71],"label":"(5, -71)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the first five terms of the sequence defined by the recursive formula $a_1=2,\ a_n=2a_{n-1}+1,$ for $n\ge2$. Enter the first five terms, in order, separated by commas."
  answer="2,5,11,23,47"
  answerDisplay="$2,5,11,23,47$"
  hint="Start from $a_1=2$ and repeatedly substitute the previous term into $a_n=2a_{n-1}+1$."
>}}

{{< callout type="info" >}}
  **How To:** given a recursive formula with two initial terms, write the first $n$ terms of a sequence.

  1. Identify the initial term, $a_1$, which is given as part of the formula.
  2. Identify the second term, $a_2$, which is given as part of the formula.
  3. To find the third term, substitute the initial term and the second term into the formula. Evaluate.
  4. Repeat until you have evaluated the $n$th term.
{{< /callout >}}

**Example.** Write the first six terms of the sequence defined by the recursive formula.

$$
\begin{array}{lrcl}
& a_1 &=& 1 \\[4pt]
& a_2 &=& 2 \\[4pt]
& a_n &=& 3a_{n-1}+4a_{n-2},\text{ for }n\ge3
\end{array}
$$

**Solution.** The first two terms are given. For each subsequent term, we replace $a_{n-1}$ and $a_{n-2}$ with the values of the two preceding terms.

$$
\begin{array}{lrcl}
n=3 & a_3 &=& 3a_2+4a_1=3(2)+4(1)=10 \\[4pt]
n=4 & a_4 &=& 3a_3+4a_2=3(10)+4(2)=38 \\[4pt]
n=5 & a_5 &=& 3a_4+4a_3=3(38)+4(10)=154 \\[4pt]
n=6 & a_6 &=& 3a_5+4a_4=3(154)+4(38)=614
\end{array}
$$

The first six terms are $1,2,10,38,154,614$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of six points showing a rapidly increasing recursive sequence: (1, 1), (2, 2), (3, 10), (4, 38), (5, 154), and (6, 614).","xMin":0,"xMax":7,"yMin":0,"yMax":700,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"yTickStep":100,"unit":45,"yUnit":0.5,"points":[{"at":[1,1],"label":"(1, 1)"},{"at":[2,2],"label":"(2, 2)"},{"at":[3,10],"label":"(3, 10)"},{"at":[4,38],"label":"(4, 38)"},{"at":[5,154],"label":"(5, 154)"},{"at":[6,614],"label":"(6, 614)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the first eight terms of the sequence defined by the recursive formula $a_1=0,\ a_2=1,\ a_3=1,\ a_n=\tfrac{a_{n-1}}{a_{n-2}}+a_{n-3},$ for $n\ge4$. Enter the first eight terms, in order, separated by commas."
  answer="0,1,1,1,2,3,5/2,17/6"
  answerDisplay="$0,1,1,1,2,3,\tfrac{5}{2},\tfrac{17}{6}$"
  hint="The first three terms are given; for each later term divide the two preceding terms and add the term before those."
>}}

### Using Factorial Notation

The formulas for some sequences include products of consecutive positive integers. **$n$ factorial**, written as $n!$, is the product of the positive integers from 1 to $n$. For example,

$$
\begin{array}{lrcl}
& 4! &=& 4\cdot3\cdot2\cdot1=24 \\[4pt]
& 5! &=& 5\cdot4\cdot3\cdot2\cdot1=120
\end{array}
$$

An example of a formula containing a **factorial** is $a_n=(n+1)!$. The sixth term of the sequence can be found by substituting 6 for $n$.

$$a_6=(6+1)!=7!=7\cdot6\cdot5\cdot4\cdot3\cdot2\cdot1=5{,}040$$

The factorial of any whole number $n$ is $n(n-1)!$. We can therefore also think of $5!$ as $5\cdot4!$.

{{< callout type="info" >}}
  **$n$ Factorial.** **$n$ factorial** is a mathematical operation that can be defined using a recursive formula. The factorial of $n$, denoted $n!$, is defined for a positive integer $n$ as:

  $$
  \begin{array}{lrcl}
  & 0! &=& 1 \\[4pt]
  & 1! &=& 1 \\[4pt]
  & n! &=& n(n-1)(n-2)\cdots(2)(1),\text{ for }n\ge2
  \end{array}
  $$

  The special case $0!$ is defined as $0!=1$.
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Can factorials always be found using a calculator?*

  No. Factorials get large very quickly — faster than even exponential functions! When the output gets too large for the calculator, it will not be able to calculate the factorial.
{{< /callout >}}

**Example.** Write the first five terms of the sequence defined by the explicit formula $a_n=\tfrac{5n}{(n+2)!}$.

**Solution.** Substitute $n=1,n=2,$ and so on in the formula.

$$
\begin{array}{lrcl}
n=1 & a_1 &=& \tfrac{5(1)}{(1+2)!}=\tfrac{5}{3!}=\tfrac{5}{3\cdot2\cdot1}=\tfrac{5}{6} \\[4pt]
n=2 & a_2 &=& \tfrac{5(2)}{(2+2)!}=\tfrac{10}{4!}=\tfrac{10}{4\cdot3\cdot2\cdot1}=\tfrac{5}{12} \\[4pt]
n=3 & a_3 &=& \tfrac{5(3)}{(3+2)!}=\tfrac{15}{5!}=\tfrac{15}{5\cdot4\cdot3\cdot2\cdot1}=\tfrac{1}{8} \\[4pt]
n=4 & a_4 &=& \tfrac{5(4)}{(4+2)!}=\tfrac{20}{6!}=\tfrac{20}{6\cdot5\cdot4\cdot3\cdot2\cdot1}=\tfrac{1}{36} \\[4pt]
n=5 & a_5 &=& \tfrac{5(5)}{(5+2)!}=\tfrac{25}{7!}=\tfrac{25}{7\cdot6\cdot5\cdot4\cdot3\cdot2\cdot1}=\tfrac{5}{1{,}008}
\end{array}
$$

The first five terms are $\tfrac{5}{6},\tfrac{5}{12},\tfrac{1}{8},\tfrac{1}{36},\tfrac{5}{1{,}008}$.

**Analysis.** The figure below shows the graph of the sequence. Notice that, since factorials grow very quickly, the presence of the factorial term in the denominator results in the denominator becoming much larger than the numerator as $n$ increases. This means the quotient gets smaller and, as the plot of the terms shows, the terms are decreasing and nearing zero.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a sequence with a factorial in the denominator, decreasing rapidly toward zero: (1, 5/6), (2, 5/12), (3, 1/8), (4, 1/36), and (5, 5/1008).","xMin":0,"xMax":7,"yMin":0,"yMax":1,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"unit":60,"yUnit":300,"points":[{"at":[1,0.8333],"label":"(1, 5/6)"},{"at":[2,0.4167],"label":"(2, 5/12)"},{"at":[3,0.125],"label":"(3, 1/8)","labelSide":"w"},{"at":[4,0.0278],"label":"(4, 1/36)","labelSide":"n"},{"at":[5,0.00496],"label":"(5, 5/1008)","labelSide":"ne","labelNudge":[0,-6]}],"yGridStep":0.25,"yTickStep":0.25}
{{< /apfigure >}}

{{< fillin
  question="Write the first five terms of the sequence defined by the explicit formula $a_n=\tfrac{(n+1)!}{2n}$. Enter the first five terms, in order, separated by commas."
  answer="1,3/2,4,15,72"
  answerDisplay="$1,\tfrac{3}{2},4,15,72$"
  hint="Substitute $n=1,2,3,4,5$; expand each factorial before dividing by $2n$."
>}}

{{< callout type="info" >}}
  **Media.** Access this online resource for additional instruction and practice with sequences.

  - Finding Terms in a Sequence
{{< /callout >}}

## Key equations

| Formula for a factorial | $\begin{array}{lrcl} 0! &=& 1 \\[4pt] 1! &=& 1 \\[4pt] n! &=& n(n-1)(n-2)\cdots(2)(1),\text{ for } n\ge2 \end{array}$ |
| :--- | :--- |

## Key concepts

- A sequence is a list of numbers, called terms, written in a specific order.
- Explicit formulas define each term of a sequence using the position of the term.
- An explicit formula for the $n$th term of a sequence can be written by analyzing the pattern of several terms.
- Recursive formulas define each term of a sequence using previous terms.
- Recursive formulas must state the initial term, or terms, of a sequence.
- A set of terms can be written by using a recursive formula.
- A factorial is a mathematical operation that can be defined recursively.
- The factorial of $n$ is the product of all integers from 1 to $n$.

## Practice

### Write the terms of a sequence defined by an explicit formula

{{< fillin
  question="Write the first four terms of the sequence $a_n=\tfrac{2^n}{n^3}$. Enter the first four terms, in order, separated by commas."
  answer="2,1/2,8/27,1/4"
  answerDisplay="$2,\tfrac{1}{2},\tfrac{8}{27},\tfrac{1}{4}$"
  hint="Substitute $n=1,2,3,4$ and simplify each power-of-2-over-cube fraction."
>}}

{{< fillin
  question="Write the first four terms of the sequence $a_n=1.25\cdot(-4)^{n-1}$. Enter the first four terms, in order, separated by commas."
  answer="1.25,-5,20,-80"
  answerDisplay="$1.25,-5,20,-80$"
  hint="Substitute $n=1,2,3,4$; the sign alternates because the base is negative."
>}}

{{< fillin
  question="Write the first eight terms of the piecewise sequence $a_n=\begin{cases}\tfrac{n^2}{2n+1} & \text{if }n\le5 \\ n^2-5 & \text{if }n>5\end{cases}$. Enter the first eight terms, in order, separated by commas."
  answer="1/3,4/5,9/7,16/9,25/11,31,44,59"
  answerDisplay="$\tfrac{1}{3},\tfrac{4}{5},\tfrac{9}{7},\tfrac{16}{9},\tfrac{25}{11},31,44,59$"
  hint="Use the first formula for $n=1$ through $5$, then switch to the second formula for $n=6,7,8$."
>}}

{{< fillin
  question="Write an explicit formula for the $n$th term of the sequence $1,1,\tfrac{4}{3},2,\tfrac{16}{5},\ldots$."
  answer="2^{n-1}/n"
  answerDisplay="$\tfrac{2^{n-1}}{n}$"
  hint="Compare each term's numerator to a power of 2 and its denominator to $n$."
>}}

### Write the terms of a sequence defined by a recursive formula

{{< fillin
  question="Write the first five terms of the sequence defined by the recursive formula $a_1=3,\ a_n=(-3)a_{n-1},$ for $n\ge2$. Enter the first five terms, in order, separated by commas."
  answer="3,-9,27,-81,243"
  answerDisplay="$3,-9,27,-81,243$"
  hint="Start from $a_1=3$ and multiply each term by $-3$ to get the next one."
>}}

{{< fillin
  question="Write the first five terms of the sequence defined by the recursive formula $a_1=-1,\ a_n=\tfrac{(-3)^{n-1}}{a_{n-1}-2},$ for $n\ge2$. Enter the first five terms, in order, separated by commas."
  answer="-1,1,-9,27/11,891/5"
  answerDisplay="$-1,1,-9,\tfrac{27}{11},\tfrac{891}{5}$"
  hint="At each step, subtract 2 from the previous term and divide it into $(-3)^{n-1}$."
>}}

{{< fillin
  question="The sequence $-8,-6,-3,1,6,\ldots$ is defined by a recursive formula. Find its initial term $a_1$."
  answer="-8"
  answerDisplay="$a_1=-8$"
  hint="The initial term is simply the first number listed."
>}}

{{< fillin
  question="Find the recursive rule for the sequence $-8,-6,-3,1,6,\ldots$, in the form $a_n=\ldots$ (in terms of $a_{n-1}$) for $n\ge2$."
  answer="a_n=a_{n-1}+n"
  answerDisplay="$a_n=a_{n-1}+n$"
  hint="Find the difference between consecutive terms and check whether that difference itself follows a pattern in $n$."
>}}

### Use factorial notation

{{< fillin
  question="Evaluate the factorial $6!$."
  answer="720"
  answerForm="decimal"
  answerDisplay="$720$"
  hint="Multiply the positive integers from 1 through 6."
>}}

{{< fillin
  question="Evaluate the factorial quotient $\tfrac{12!}{6!}$."
  answer="665280"
  answerForm="decimal"
  answerDisplay="$665{,}280$"
  hint="Cancel the factors common to $12!$ and $6!$ before multiplying what remains, or evaluate the quotient directly."
>}}

{{< fillin
  question="Write the first four terms of the sequence $a_n=\tfrac{n!}{n^2}$. Enter the first four terms, in order, separated by commas."
  answer="1,1/2,2/3,3/2"
  answerDisplay="$1,\tfrac{1}{2},\tfrac{2}{3},\tfrac{3}{2}$"
  hint="Substitute $n=1,2,3,4$; expand each factorial before dividing by $n^2$."
>}}

{{< fillin
  question="Write the first four terms of the sequence $a_n=\tfrac{n!}{n^2-n-1}$. Enter the first four terms, in order, separated by commas."
  answer="-1,2,6/5,24/11"
  answerDisplay="$-1,2,\tfrac{6}{5},\tfrac{24}{11}$"
  hint="Substitute $n=1,2,3,4$; watch the sign of the denominator when $n=1$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 11.1: Sequences and Their Notations](https://openstax.org/books/precalculus-2e/pages/11-1-sequences-and-their-notations) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Learning Objectives" keyed to Intermediate Algebra 12.1.1–12.1.2, with an antibiotic-dosage lead-in example and two "Practice Makes Perfect" exercise sets) — confirmed against the rendered PDF, true page 1099 (printed page 1089), where the chapter-opener lottery-ticket page runs directly into the "11.1 Sequences and Their Notations" heading, objectives, and the video-game-hits paragraph with no corequisite-skills material between them; this is the same prepended-block pattern already logged in this book's errata for other chapters' opening modules. Omitted the credit photograph of the SuperLotto Plus lottery ticket on the chapter-opener page (not part of this section). Recreated all seven instructional figures as accessible spec-first scatter plots: the introductory $a_n=2^n$ plot and every subsequent worked-example plot are `points`-only (no connecting curve or continuous-function overlay, matching the source art exactly), each point labelled with its coordinate pair exactly where the source labels one — fraction-valued coordinates written with a slash (`(1, 5/6)`) rather than the source's occasional mixed-number rendering — and the piecewise-sequence plot left unlabelled, matching the source. Five figures (the opening powers-of-two scatter, the piecewise worked-example scatter, the two recursive-sequence scatters, and the factorial-sequence scatter) carry an explicit `unit`/`yUnit` pair so that terms far larger than the $n$-range still plot in a roughly square window, with `labelSide` pins on the factorial figure's three crowded labels; every figure was compared against its source page and re-rendered until no label overlapped another label, a point, or an axis tick. Every "write the first $n$ terms" fill-in states the order explicitly and is graded as an ordered list; no list answer's members reach $1{,}000$ in magnitude — the two piecewise Section Exercises used in the closing Practice block (Algebraic #17 here) were chosen over faster-growing alternatives for exactly that reason. Every "find a recursive formula" Practice item pins the requested shape ("in the form $a_n=\ldots$, in terms of $a_{n-1}$, for $n\ge2$") and keys the initial term as its own separate fill-in, since the grader accepts reordered and rescaled restatements of a correct recursive rule but treats a shifted index or a wrong sign as a different rule; the source's own algebraic answer key states both parts together (e.g. "$a_1=-8,a_n=a_{n-1}+n$"), split here into two components per the multipart-expansion rule. Every evaluate-a-factorial and evaluate-a-factorial-quotient fill-in ($6!$, $\tfrac{12!}{6!}$) declares `answerForm="decimal"`, confirmed against the real grader: retyping the printed factorial expression itself grades `form`, not `correct`, once the token is declared, while the bare evaluated integer (grouped or not) grades `correct`. Eleven selected end-of-section exercises were adapted into the twelve interactive components of the closing Practice block (one recursive-formula exercise split into its initial-term and recursive-rule parts), one Practice group per objective, every answer independently re-derived — including by running the arithmetic in Node with exact-rational tracking for every fraction — rather than read off the source key.</small>
