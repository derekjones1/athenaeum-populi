---
title: Sequences
description: >-
  Write terms and general terms of sequences, use factorial notation, find
  partial sums, and write sums in summation notation.
source_section: "12.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:** write the first few terms of a sequence; find a formula for the general term (nth term) of a sequence; use factorial notation; find the partial sum; use summation notation to write a sum.
{{< /callout >}}

## Write the First Few Terms of a Sequence

Let’s look at the function $f(x)=2x$ and evaluate it for just the counting numbers.

| $x$ | $2x$ |
| ---: | ---: |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |
| $\cdots$ | $\cdots$ |

If we list the function values in order as 2, 4, 6, 8, and 10, $\ldots$ we have a sequence. A **sequence** is a function whose domain is the counting numbers.

{{< callout type="info" >}}
### Sequences

A **sequence** is a function whose domain is the counting numbers.
{{< /callout >}}

A sequence can also be seen as an ordered list of numbers and each number in the list is a *term*. A sequence may have an infinite number of terms or a finite number of terms. Our sequence has three dots (ellipsis) at the end which indicates the list never ends. If the domain is the set of all counting numbers, then the sequence is an **infinite sequence**. Its domain is all counting numbers and there is an infinite number of counting numbers.

$$
2,4,6,8,10,\ldots
$$

If we limit the domain to a finite number of counting numbers, then the sequence is a **finite sequence**. If we use only the first four counting numbers, 1, 2, 3, 4 our sequence would be the finite sequence,

$$
2,4,6,8
$$

Often when working with sequences we do not want to write out all the terms. We want a more compact way to show how each term is defined. When we worked with functions, we wrote $f(x)=2x$ and we said the expression $2x$ was the rule that defined values in the range. While a sequence is a function, we do not use the usual function notation. Instead of writing the function as $f(x)=2x$, we would write it as $a_n=2n$. The $a_n$ is the nth term of the sequence, the term in the nth position where $n$ is a value in the domain. The formula for writing the nth term of the sequence is called the **general term** or formula of the sequence.

{{< callout type="info" >}}
### General Term of a Sequence

The **general term** of the sequence is found from the formula for writing the nth term of the sequence. The nth term of the sequence, $a_n$, is the term in the nth position where $n$ is a value in the domain.
{{< /callout >}}

When we are given the general term of the sequence, we can find the terms by replacing $n$ with the counting numbers in order. For $a_n=2n$,

| $n$ | 1 | 2 | 3 | 4 | 5 | $a_n$ |
| --- | --- | --- | --- | --- | --- | --- |
| $a_n$ | $2\cdot1=2$ | $2\cdot2=4$ | $2\cdot3=6$ | $2\cdot4=8$ | $2\cdot5=10$ | $2n$ |

$$
\begin{array}{ccccccccccccc}
a_1,&a_2,&a_3,&a_4,&a_5,&\ldots,&a_n,&\ldots\\
2,&4,&6,&8,&10,&\ldots
\end{array}
$$

To find the values of a sequence, we substitute in the counting numbers in order into the general term of the sequence.

**Example 12.1.** Write the first five terms of the sequence whose general term is $a_n=4n-3$.

**Solution.** We substitute the values 1, 2, 3, 4, and 5 into the formula, $a_n=4n-3$, in order.

$$
\begin{array}{rclcrclcrcl}
a_1&=&4\cdot1-3=1, &
a_2&=&4\cdot2-3=5, &
a_3&=&4\cdot3-3=9,\\[4pt]
a_4&=&4\cdot4-3=13, &
a_5&=&4\cdot5-3=17.
\end{array}
$$

The first five terms of the sequence are 1, 5, 9, 13, and 17.

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=3n-4$. Enter the terms separated by commas."
  answer="-1,2,5,8,11"
  answerDisplay="$-1,2,5,8,11$"
  hint="Substitute $n=1,2,3,4,5$ into $3n-4$."
>}}

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=2n-5$. Enter the terms separated by commas."
  answer="-3,-1,1,3,5"
  answerDisplay="$-3,-1,1,3,5$"
  hint="Substitute $n=1,2,3,4,5$ into $2n-5$."
>}}

For some sequences, the variable is an exponent.

**Example 12.2.** Write the first five terms of the sequence whose general term is $a_n=2^n+1$.

**Solution.** We substitute the values 1, 2, 3, 4, and 5 into the formula, $a_n=2^n+1$, in order.

$$
\begin{array}{rclcrclcrcl}
a_1&=&2^1+1=3, &
a_2&=&2^2+1=5, &
a_3&=&2^3+1=9,\\[4pt]
a_4&=&2^4+1=17, &
a_5&=&2^5+1=33.
\end{array}
$$

The first five terms of the sequence are 3, 5, 9, 17, and 33.

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=3^n+4$. Enter the terms separated by commas."
  answer="7,13,31,85,247"
  answerDisplay="$7,13,31,85,247$"
  hint="Substitute $n=1,2,3,4,5$ into $3^n+4$."
>}}

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=2^n-5$. Enter the terms separated by commas."
  answer="-3,-1,3,11,27"
  answerDisplay="$-3,-1,3,11,27$"
  hint="Substitute $n=1,2,3,4,5$ into $2^n-5$."
>}}

It is not uncommon to see the expressions $(-1)^n$ or $(-1)^{n+1}$ in the general term for a sequence. If we evaluate each of these expressions for a few values, we see that this expression alternates the sign for the terms.

| $n$ | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| $(-1)^n$ | $-1$ | $1$ | $-1$ | $1$ | $-1$ |
| $(-1)^{n+1}$ | $1$ | $-1$ | $1$ | $-1$ | $1$ |

The terms in the next example will alternate signs as a result of the powers of $-1$.

**Example 12.3.** Write the first five terms of the sequence whose general term is $a_n=(-1)^n n^3$.

**Solution.** We substitute the values 1, 2, 3, 4, and 5 into the formula, $a_n=(-1)^n n^3$, in order.

$$
\begin{array}{rclcrclcrcl}
a_1&=&(-1)^1 1^3=-1, &
a_2&=&(-1)^2 2^3=8, &
a_3&=&(-1)^3 3^3=-27,\\[4pt]
a_4&=&(-1)^4 4^3=64, &
a_5&=&(-1)^5 5^3=-125.
\end{array}
$$

The first five terms of the sequence are $-1,8,-27,64,$ and $-125$.

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=(-1)^n n^2$. Enter the terms separated by commas."
  answer="-1,4,-9,16,-25"
  answerDisplay="$-1,4,-9,16,-25$"
  hint="Evaluate the power of $-1$ and then $n^2$ for $n=1,2,3,4,5$."
>}}

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=(-1)^{n+1}n^3$. Enter the terms separated by commas."
  answer="1,-8,27,-64,125"
  answerDisplay="$1,-8,27,-64,125$"
  hint="The factor $(-1)^{n+1}$ makes the first term positive and then alternates signs."
>}}

## Find a Formula for the General Term (nth Term) of a Sequence

Sometimes we have a few terms of a sequence and it would be helpful to know the general term or nth term. To find the general term, we look for patterns in the terms. Often the patterns involve multiples or powers. We also look for a pattern in the signs of the terms.

**Example 12.4.** Find a general term for the sequence whose first five terms are shown.

$$
4,8,12,16,20,\ldots
$$

**Solution.** We look for a pattern in the terms.

| Observation | Pattern |
| --- | --- |
| The terms are $4,8,12,16,20,\ldots$. | For $n=1,2,3,4,5,\ldots$, the terms are $4\cdot1,4\cdot2,4\cdot3,4\cdot4,4\cdot5,\ldots,4\cdot n$. |
| The numbers are all multiples of 4. | The general term of the sequence is $a_n=4n$. |

{{< fillin
  question="Find a general term for the sequence $3,6,9,12,15,\ldots$."
  answer="3n"
  answerDisplay="$a_n=3n$"
  hint="Each term is a multiple of its position $n$."
>}}

{{< fillin
  question="Find a general term for the sequence $5,10,15,20,25,\ldots$."
  answer="5n"
  answerDisplay="$a_n=5n$"
  hint="Each term is a multiple of its position $n$."
>}}

**Example 12.5.** Find a general term for the sequence whose first five terms are shown.

$$
2,-4,8,-16,32,\ldots
$$

**Solution.** We look for a pattern in the terms. The numbers are powers of 2. The signs are alternating, with even $n$ negative.

$$
\begin{array}{c|ccccc}
n&1&2&3&4&5\\ \hline
\text{terms}&2&-4&8&-16&32\\
\text{pattern}&(-1)^{1+1}2^1&(-1)^{2+1}2^2&(-1)^{3+1}2^3&(-1)^{4+1}2^4&(-1)^{5+1}2^5
\end{array}
$$

The general term of the sequence is $a_n=(-1)^{n+1}2^n$.

{{< fillin
  question="Find a general term for the sequence $-3,9,-27,81,-243,\ldots$."
  answer="(-1)^n3^n"
  answerDisplay="$a_n=(-1)^n3^n$"
  hint="The absolute values are powers of 3, and the signs alternate beginning with a negative term."
>}}

{{< fillin
  question="Find a general term for the sequence $1,-4,9,-16,25,\ldots$."
  answer="(-1)^{n+1}n^2"
  answerDisplay="$a_n=(-1)^{n+1}n^2$"
  hint="The absolute values are squares, and the signs alternate beginning with a positive term."
>}}

**Example 12.6.** Find a general term for the sequence whose first five terms are shown.

$$
\tfrac13,\tfrac19,\tfrac1{27},\tfrac1{81},\tfrac1{243},\ldots
$$

**Solution.** We look for a pattern in the terms. The numerators are all 1. The denominators are powers of 3:

$$
\tfrac1{3^1},\tfrac1{3^2},\tfrac1{3^3},\tfrac1{3^4},\tfrac1{3^5},\ldots,\tfrac1{3^n}.
$$

The general term of the sequence is $a_n=\tfrac1{3^n}$.

{{< fillin
  question="Find a general term for the sequence $\tfrac12,\tfrac14,\tfrac18,\tfrac1{16},\tfrac1{32},\ldots$."
  answer="\frac{1}{2^n}"
  answerDisplay="$a_n=\tfrac1{2^n}$"
  hint="The numerators are 1 and the denominators are powers of 2."
>}}

{{< fillin
  question="Find a general term for the sequence $1,\tfrac14,\tfrac19,\tfrac1{16},\tfrac1{25},\ldots$."
  answer="\frac{1}{n^2}"
  answerDisplay="$a_n=\tfrac1{n^2}$"
  hint="The denominators are the squares of the counting numbers."
>}}

## Use Factorial Notation

Sequences often have terms that are products of consecutive integers. We indicate these products with a special notation called *factorial notation*. For example, $5!$, read 5 factorial, means $5\cdot4\cdot3\cdot2\cdot1$. The exclamation point is not punctuation here; it indicates the **factorial notation**.

{{< callout type="info" >}}
### Factorial Notation

If $n$ is a positive integer, then $n!$ is

$$
n!=n(n-1)(n-2)\cdots.
$$

We define $0!$ as 1, so $0!=1$.
{{< /callout >}}

The values of $n!$ for the first 5 positive integers are shown.

| $1!$ | $2!$ | $3!$ | $4!$ | $5!$ |
| ---: | ---: | ---: | ---: | ---: |
| $1$ | $2\cdot1$ | $3\cdot2\cdot1$ | $4\cdot3\cdot2\cdot1$ | $5\cdot4\cdot3\cdot2\cdot1$ |
| $1$ | $2$ | $6$ | $24$ | $120$ |

**Example 12.7.** Write the first five terms of the sequence whose general term is $a_n=\tfrac1{n!}$.

**Solution.** We substitute the values 1, 2, 3, 4, 5 into the formula, $a_n=\tfrac1{n!}$, in order.

$$
\begin{array}{c|ccccc}
 &a_1&a_2&a_3&a_4&a_5\\ \hline
\text{Substitute.}
&\tfrac1{1!}&\tfrac1{2!}&\tfrac1{3!}&\tfrac1{4!}&\tfrac1{5!}\\[10pt]
\text{Expand the factorials.}
&\tfrac11&\tfrac1{2\cdot1}&\tfrac1{3\cdot2\cdot1}
&\tfrac1{4\cdot3\cdot2\cdot1}&\tfrac1{5\cdot4\cdot3\cdot2\cdot1}\\[10pt]
\text{Simplify.}
&1&\tfrac12&\tfrac16&\tfrac1{24}&\tfrac1{120}
\end{array}
$$

The first five terms of the sequence are $1,\tfrac12,\tfrac16,\tfrac1{24},\tfrac1{120}$.

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=\tfrac2{n!}$. Enter the terms separated by commas."
  answer="2,1,\frac{1}{3},\frac{1}{12},\frac{1}{60}"
  answerDisplay="$2,1,\tfrac13,\tfrac1{12},\tfrac1{60}$"
  hint="Evaluate $2/n!$ for $n=1,2,3,4,5$."
>}}

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=\tfrac3{n!}$. Enter the terms separated by commas."
  answer="3,\frac{3}{2},\frac{1}{2},\frac{1}{8},\frac{1}{40}"
  answerDisplay="$3,\tfrac32,\tfrac12,\tfrac18,\tfrac1{40}$"
  hint="Evaluate $3/n!$ for $n=1,2,3,4,5$."
>}}

When there is a fraction with factorials in the numerator and denominator, we line up the factors vertically to make our calculations easier.

**Example 12.8.** Write the first five terms of the sequence whose general term is $a_n=\tfrac{(n+1)!}{(n-1)!}$.

**Solution.** We substitute the values 1, 2, 3, 4, 5 into the formula, $a_n=\tfrac{(n+1)!}{(n-1)!}$, in order.

$$
\begin{array}{c|ccccc}
 &a_1&a_2&a_3&a_4&a_5\\ \hline
\text{Substitute.}
&\tfrac{(1+1)!}{(1-1)!}&\tfrac{(2+1)!}{(2-1)!}
&\tfrac{(3+1)!}{(3-1)!}&\tfrac{(4+1)!}{(4-1)!}
&\tfrac{(5+1)!}{(5-1)!}\\[10pt]
\text{Simplify inside parentheses.}
&\tfrac{2!}{0!}&\tfrac{3!}{1!}&\tfrac{4!}{2!}&\tfrac{5!}{3!}&\tfrac{6!}{4!}\\[10pt]
\text{Expand the factorials.}
&\tfrac{2\cdot1}{1}&\tfrac{3\cdot2\cdot1}{1}
&\tfrac{4\cdot3\cdot2\cdot1}{2\cdot1}
&\tfrac{5\cdot4\cdot3\cdot2\cdot1}{3\cdot2\cdot1}
&\tfrac{6\cdot5\cdot4\cdot3\cdot2\cdot1}{4\cdot3\cdot2\cdot1}\\[10pt]
\text{Simplify.}&2&6&12&20&30
\end{array}
$$

The first five terms of the sequence are 2, 6, 12, 20, and 30.

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=\tfrac{(n-1)!}{(n+1)!}$. Enter the terms separated by commas."
  answer="\frac{1}{2},\frac{1}{6},\frac{1}{12},\frac{1}{20},\frac{1}{30}"
  answerDisplay="$\tfrac12,\tfrac16,\tfrac1{12},\tfrac1{20},\tfrac1{30}$"
  hint="Expand enough factorial factors to cancel common factors."
>}}

{{< fillin
  question="Write the first five terms of the sequence whose general term is $a_n=\tfrac{n!}{(n+1)!}$. Enter the terms separated by commas."
  answer="\frac{1}{2},\frac{1}{3},\frac{1}{4},\frac{1}{5},\frac{1}{6}"
  answerDisplay="$\tfrac12,\tfrac13,\tfrac14,\tfrac15,\tfrac16$"
  hint="Since $(n+1)!=(n+1)n!$, simplify the general term first."
>}}

## Find the Partial Sum

Sometimes in applications, rather than just list the terms, it is important for us to add the terms of a sequence. Rather than just connect the terms with plus signs, we can use **summation notation**.

For example, $a_1+a_2+a_3+a_4+a_5$ can be written as $\sum_{i=1}^{5}a_i$. We read this as “the sum of a sub i from i equals one to five.” The symbol $\sum$ means to add and the $i$ is the index of summation. The 1 tells us where to start (initial value) and the 5 tells us where to end (terminal value).

{{< callout type="info" >}}
### Summation Notation

The sum of the first $n$ terms of a sequence whose nth term is $a_n$ is written in summation notation as:

$$
\sum_{i=1}^{n}a_i=a_1+a_2+a_3+a_4+a_5+\cdots+a_n.
$$

The $i$ is the index of summation and the 1 tells us where to start and the $n$ tells us where to end.
{{< /callout >}}

When we add a finite number of terms, we call the sum a **partial sum**.

**Example 12.9.** Expand the partial sum and find its value: $\sum_{i=1}^{5}2i$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Substitute the values }1,2,3,4,5\text{ in order.} &&& 2\cdot1+2\cdot2+2\cdot3+2\cdot4+2\cdot5\\[4pt]
\text{Simplify.} &&& 2+4+6+8+10\\[4pt]
\text{Add.} &&& 30
\end{array}
$$

Therefore, $\sum_{i=1}^{5}2i=30$.

{{< fillin
  question="Expand the partial sum and find its value: $\sum_{i=1}^{5}3i$."
  answer="45"
  answerDisplay="$45$"
  hint="Substitute $i=1,2,3,4,5$, then add the five terms."
>}}

{{< fillin
  question="Expand the partial sum and find its value: $\sum_{i=1}^{5}4i$."
  answer="60"
  answerDisplay="$60$"
  hint="Substitute $i=1,2,3,4,5$, then add the five terms."
>}}

The index does not always have to be $i$; we can use any letter, but $i$ and $k$ are commonly used. The index does not have to start with 1 either—it can start and end with any positive integer.

**Example 12.10.** Expand the partial sum and find its value: $\sum_{k=0}^{3}\tfrac1{k!}$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Substitute the values }0,1,2,3\text{ in order.} &&& \tfrac1{0!}+\tfrac1{1!}+\tfrac1{2!}+\tfrac1{3!}\\[10pt]
\text{Evaluate the factorials.} &&& \tfrac11+\tfrac11+\tfrac12+\tfrac16\\[10pt]
\text{Simplify.} &&& 1+1+\tfrac36+\tfrac16\\[10pt]
\text{Simplify.} &&& \tfrac{16}{6}\\[10pt]
\text{Simplify.} &&& \tfrac83
\end{array}
$$

Therefore, $\sum_{k=0}^{3}\tfrac1{k!}=\tfrac83$.

{{< fillin
  question="Expand the partial sum and find its value: $\sum_{k=0}^{3}\tfrac2{k!}$."
  answer="\frac{16}{3}"
  answerDisplay="$\tfrac{16}{3}$"
  hint="Substitute $k=0,1,2,3$ and remember that $0!=1$."
>}}

{{< fillin
  question="Expand the partial sum and find its value: $\sum_{k=0}^{3}\tfrac3{k!}$."
  answer="8"
  answerDisplay="$8$"
  hint="Substitute $k=0,1,2,3$ and remember that $0!=1$."
>}}

## Use Summation Notation to Write a Sum

In the last two examples, we went from summation notation to writing out the sum. Now we will start with a sum and change it to summation notation. This is very similar to finding the general term of a sequence. We will need to look at the terms and find a pattern. Often the patterns involve multiples or powers.

**Example 12.11.** Write the sum using summation notation:

$$
1+\tfrac12+\tfrac13+\tfrac14+\tfrac15.
$$

**Solution.** We look for a pattern in the terms. The numerators are all one. The denominators are the counting numbers from one to five:

$$
1,\tfrac12,\tfrac13,\tfrac14,\tfrac15,\ldots,\tfrac1n.
$$

The sum written in summation notation is

$$
1+\tfrac12+\tfrac13+\tfrac14+\tfrac15=\sum_{n=1}^{5}\tfrac1n.
$$

{{< fillin
  question="Write the sum using summation notation: $\tfrac12+\tfrac14+\tfrac18+\tfrac1{16}+\tfrac1{32}$."
  answer="\sum_{n=1}^{5}\frac{1}{2^n}"
  answerDisplay="$\sum_{n=1}^{5}\tfrac1{2^n}$"
  hint="The denominators are powers of 2 for $n=1$ through $n=5$."
>}}

{{< fillin
  question="Write the sum using summation notation: $1+\tfrac14+\tfrac19+\tfrac1{16}+\tfrac1{25}$."
  answer="\sum_{n=1}^{5}\frac{1}{n^2}"
  answerDisplay="$\sum_{n=1}^{5}\tfrac1{n^2}$"
  hint="The denominators are the squares of the counting numbers from 1 through 5."
>}}

When the terms of a sum have negative coefficients, we must carefully analyze the pattern of the signs.

**Example 12.12.** Write the sum using summation notation:

$$
-1+8-27+64-125.
$$

**Solution.** We look for a pattern in the terms. The signs of the terms alternate, and the odd terms are negative. The numbers are the cubes of the counting numbers from one to five.

$$
\begin{array}{c|ccccc}
n&1&2&3&4&5\\ \hline
\text{terms}&-1&8&-27&64&-125\\
\text{pattern}&(-1)^1\cdot1^3&(-1)^2\cdot2^3&(-1)^3\cdot3^3&(-1)^4\cdot4^3&(-1)^5\cdot5^3
\end{array}
$$

The sum written in summation notation is

$$
-1+8-27+64-125=\sum_{n=1}^{5}(-1)^n\cdot n^3.
$$

{{< fillin
  question="Write the sum using summation notation: $1-4+9-16+25$."
  answer="\sum_{n=1}^{5}(-1)^{n+1}n^2"
  answerDisplay="$\sum_{n=1}^{5}(-1)^{n+1}n^2$"
  hint="The absolute values are squares, and the signs alternate beginning with a positive term."
>}}

{{< fillin
  question="Write the sum using summation notation: $-2+4-6+8-10$."
  answer="\sum_{n=1}^{5}(-1)^n2n"
  answerDisplay="$\sum_{n=1}^{5}(-1)^n2n$"
  hint="The absolute values are twice the counting numbers, and the signs alternate beginning with a negative term."
>}}

**Key terms:** factorial notation, finite sequence, general term, index of summation, infinite sequence, partial sum, sequence, summation notation, term.

<small>
Adapted from [Intermediate Algebra 2e, Section 12.1: Sequences](https://openstax.org/books/intermediate-algebra-2e/pages/12-1-sequences) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/). Changes: omitted the “Be Prepared” readiness exercises, section exercise set, and external media link; converted “Try It” exercises to interactive checks and adapted formatting for the web.
</small>
