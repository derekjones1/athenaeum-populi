---
title: Arithmetic Sequences
description: >-
  Determining whether a sequence is arithmetic, finding its general term, and
  finding the sum of its first terms.
source_section: "12.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:** determine if a sequence is
arithmetic, find the general term ($n$th term) of an arithmetic sequence, and
find the sum of the first $n$ terms of an arithmetic sequence.
{{< /callout >}}

## Determine if a Sequence is Arithmetic

The last section introduced sequences and now we will look at two specific
types of sequences that each have special properties. In this section we will
look at arithmetic sequences and in the next section, geometric sequences.

An **arithmetic sequence** is a sequence where the difference between
consecutive terms is constant. The difference between consecutive terms,
$a_n-a_{n-1}$, is $d$, the **common difference**, for $n$ greater than or
equal to two.

{{< callout type="info" >}}
### Arithmetic Sequence

An **arithmetic sequence** is a sequence where the difference between
consecutive terms is always the same.

The difference between consecutive terms, $a_n-a_{n-1}$, is $d$, the
**common difference**, for $n$ greater than or equal to two.
{{< /callout >}}

For the sequence

$$7,\ 10,\ 13,\ 16,\ 19,\ 22,\ldots,$$

the consecutive differences are

$$10-7=3,\quad 13-10=3,\quad 16-13=3,\quad 19-16=3,\quad 22-19=3.$$

For the sequence

$$8,\ 4,\ 0,\ -4,\ -8,\ -12,\ldots,$$

the consecutive differences are

$$4-8=-4,\quad 0-4=-4,\quad -4-0=-4,\quad -8-(-4)=-4,\quad -12-(-8)=-4.$$

In each of these sequences, the difference between consecutive terms is
constant, and so the sequence is arithmetic.

**Example 12.13.** Determine if each sequence is arithmetic. If so, indicate
the common difference.

(a) $5,9,13,17,21,25,\ldots$

(b) $4,9,12,17,20,25,\ldots$

(c) $10,3,-4,-11,-18,-25,\ldots$

**Solution.** To determine if the sequence is arithmetic, we find the
difference of the consecutive terms shown.

(a)

$$
\begin{array}{rcl}
9-5&=&4\\[4pt]
13-9&=&4\\[4pt]
17-13&=&4\\[4pt]
21-17&=&4\\[4pt]
25-21&=&4
\end{array}
$$

The sequence is arithmetic. The common difference is $d=4$.

(b)

$$
\begin{array}{rcl}
9-4&=&5\\[4pt]
12-9&=&3\\[4pt]
17-12&=&5\\[4pt]
20-17&=&3\\[4pt]
25-20&=&5
\end{array}
$$

The sequence is not arithmetic as all the differences between the consecutive
terms are not the same. There is no common difference.

(c)

$$
\begin{array}{rcl}
3-10&=&-7\\[4pt]
-4-3&=&-7\\[4pt]
-11-(-4)&=&-7\\[4pt]
-18-(-11)&=&-7\\[4pt]
-25-(-18)&=&-7
\end{array}
$$

The sequence is arithmetic. The common difference is $d=-7$.

Determine whether each sequence is arithmetic. If so, indicate the common
difference.

{{< multiplechoice question="For $9,20,31,42,53,64,\ldots$, which statement is correct?" answer="The sequence is arithmetic with common difference $d=11$." hint="Subtract each term from the term that follows it." >}}
The sequence is arithmetic with common difference $d=11$.
The sequence is arithmetic with common difference $d=9$.
The sequence is not arithmetic.
{{< /multiplechoice >}}

{{< multiplechoice question="For $12,6,0,-6,-12,-18,\ldots$, which statement is correct?" answer="The sequence is arithmetic with common difference $d=-6$." hint="Subtract each term from the term that follows it." >}}
The sequence is arithmetic with common difference $d=-6$.
The sequence is arithmetic with common difference $d=6$.
The sequence is not arithmetic.
{{< /multiplechoice >}}

{{< multiplechoice question="For $7,1,10,4,13,7,\ldots$, which statement is correct?" answer="The sequence is not arithmetic." hint="Compare all the consecutive differences." >}}
The sequence is arithmetic with common difference $d=-6$.
The sequence is arithmetic with common difference $d=9$.
The sequence is not arithmetic.
{{< /multiplechoice >}}

Apply the same test to each sequence in the next set.

{{< multiplechoice question="For $-4,4,2,10,8,16,\ldots$, which statement is correct?" answer="The sequence is not arithmetic." hint="Compare all the consecutive differences." >}}
The sequence is arithmetic with common difference $d=8$.
The sequence is arithmetic with common difference $d=-2$.
The sequence is not arithmetic.
{{< /multiplechoice >}}

{{< multiplechoice question="For $-3,-1,1,3,5,7,\ldots$, which statement is correct?" answer="The sequence is arithmetic with common difference $d=2$." hint="Subtract each term from the term that follows it." >}}
The sequence is arithmetic with common difference $d=2$.
The sequence is arithmetic with common difference $d=-2$.
The sequence is not arithmetic.
{{< /multiplechoice >}}

{{< multiplechoice question="For $7,2,-3,-8,-13,-18,\ldots$, which statement is correct?" answer="The sequence is arithmetic with common difference $d=-5$." hint="Subtract each term from the term that follows it." >}}
The sequence is arithmetic with common difference $d=-5$.
The sequence is arithmetic with common difference $d=5$.
The sequence is not arithmetic.
{{< /multiplechoice >}}

If we know the first term, $a_1$, and the common difference, $d$, we can list a
finite number of terms of the sequence.

**Example 12.14.** Write the first five terms of the sequence where the first
term is 5 and the common difference is $d=-6$.

**Solution.** We start with the first term and add the common difference. Then
we add the common difference to that result to get the next term, and so on.

$$
\begin{array}{rcl}
a_1&=&5\\[4pt]
a_2&=&5+(-6)=-1\\[4pt]
a_3&=&-1+(-6)=-7\\[4pt]
a_4&=&-7+(-6)=-13\\[4pt]
a_5&=&-13+(-6)=-19
\end{array}
$$

The sequence is $5,-1,-7,-13,-19,\ldots$.

{{< fillin question="Write the first five terms of the sequence where the first term is $7$ and the common difference is $d=-4$. Enter the terms separated by commas." answer="7,3,-1,-5,-9" answerDisplay="$7,3,-1,-5,-9$" hint="Start with $7$ and repeatedly add the common difference." >}}

{{< fillin question="Write the first five terms of the sequence where the first term is $11$ and the common difference is $d=-8$. Enter the terms separated by commas." answer="11,3,-5,-13,-21" answerDisplay="$11,3,-5,-13,-21$" hint="Start with $11$ and repeatedly add the common difference." >}}

## Find the General Term ($n$th Term) of an Arithmetic Sequence

Just as we found a formula for the general term of a sequence, we can also find
a formula for the general term of an arithmetic sequence.

Let's write the first few terms of a sequence where the first term is $a_1$ and
the common difference is $d$. We will then look for a pattern.

As we look for a pattern we see that each term starts with $a_1$:

$$
\begin{array}{rcl}
a_1&=&a_1\\[4pt]
a_2&=&a_1+d\\[4pt]
a_3&=&a_1+2d\\[4pt]
a_4&=&a_1+3d\\[4pt]
a_5&=&a_1+4d.
\end{array}
$$

The first term adds $0d$ to the $a_1$, the second term adds $1d$, the third
term adds $2d$, the fourth term adds $3d$, and the fifth term adds $4d$. The
number of $d$'s that were added to $a_1$ is one less than the number of the
term. This leads us to the following.

$$a_n=a_1+(n-1)d$$

{{< callout type="info" >}}
### General Term ($n$th term) of an Arithmetic Sequence

The general term of an arithmetic sequence with first term $a_1$ and the
common difference $d$ is

$$a_n=a_1+(n-1)d.$$
{{< /callout >}}

We will use this formula in the next example to find the fifteenth term of a
sequence.

**Example 12.15.** Find the fifteenth term of a sequence where the first term
is 3 and the common difference is 6.

**Solution.** To find the fifteenth term, $a_{15}$, use the formula with
$a_1=3$ and $d=6$.

$$
\begin{array}{lrcl}
\text{Use the formula.} & a_n&=&a_1+(n-1)d\\[4pt]
\text{Substitute in the values.} & a_{15}&=&3+(15-1)6\\[4pt]
\text{Simplify.} & a_{15}&=&3+(14)6\\[4pt]
&&=&87
\end{array}
$$

{{< fillin question="Find the twenty-seventh term of a sequence where the first term is $7$ and the common difference is $9$." answer="241" answerDisplay="$241$" hint="Use $a_n=a_1+(n-1)d$." >}}

{{< fillin question="Find the eighteenth term of a sequence where the first term is $13$ and the common difference is $-7$." answer="-106" answerDisplay="$-106$" hint="Use $a_n=a_1+(n-1)d$." >}}

Sometimes we do not know the first term and we must use other given information
to find it before we find the requested term.

**Example 12.16.** Find the twelfth term of a sequence where the seventh term
is 10 and the common difference is $-2$. Give the formula for the general
term.

**Solution.** To first find the first term, $a_1$, use the formula with
$a_7=10$, $n=7$, and $d=-2$.

$$
\begin{array}{lrcl}
\text{Use the formula.} & a_n&=&a_1+(n-1)d\\[4pt]
\text{Substitute in the values.} & 10&=&a_1+(7-1)(-2)\\[4pt]
\text{Simplify.} & 10&=&a_1+(6)(-2)\\[4pt]
&10&=&a_1-12\\[4pt]
&a_1&=&22
\end{array}
$$

Find the twelfth term, $a_{12}$, using the formula with $a_1=22$, $n=12$, and
$d=-2$.

$$
\begin{array}{lrcl}
\text{Use the formula.} & a_n&=&a_1+(n-1)d\\[4pt]
\text{Substitute in the values.} & a_{12}&=&22+(12-1)(-2)\\[4pt]
\text{Simplify.} & a_{12}&=&22+(11)(-2)\\[4pt]
&a_{12}&=&0
\end{array}
$$

The twelfth term of the sequence is 0, $a_{12}=0$.

To find the general term, substitute the values into the formula.

$$
\begin{array}{rcl}
a_n&=&a_1+(n-1)d\\[4pt]
a_n&=&22+(n-1)(-2)\\[4pt]
a_n&=&22-2n+2\\[4pt]
a_n&=&-2n+24.
\end{array}
$$

The general term is $a_n=-2n+24$.

{{< fillin question="Find the eleventh term of a sequence where the ninth term is $8$ and the common difference is $-3$." answer="2" answerDisplay="$a_{11}=2$" hint="First use the ninth term to find $a_1$, then find $a_{11}$." >}}

{{< fillin question="For the sequence where the ninth term is $8$ and the common difference is $-3$, give the formula for the general term." answer="-3n+35" answerDisplay="$a_n=-3n+35$" hint="Find $a_1$ from $a_9=a_1+8d$, then use the general-term formula." >}}

Now use the same process with a different known term and common difference.

{{< fillin question="Find the nineteenth term of a sequence where the fifth term is $1$ and the common difference is $-4$." answer="-55" answerDisplay="$a_{19}=-55$" hint="First use the fifth term to find $a_1$, then find $a_{19}$." >}}

{{< fillin question="For the sequence where the fifth term is $1$ and the common difference is $-4$, give the formula for the general term." answer="-4n+21" answerDisplay="$a_n=-4n+21$" hint="Find $a_1$ from $a_5=a_1+4d$, then use the general-term formula." >}}

Sometimes the information given leads us to two equations in two unknowns. We
then use our methods for solving systems of equations to find the values
needed.

**Example 12.17.** Find the first term and common difference of a sequence
where the fifth term is 19 and the eleventh term is 37. Give the formula for
the general term.

**Solution.** Since we know two terms, we can make a system of equations using
the formula for the general term.

$$a_n=a_1+(n-1)d$$

We know the value of $a_5$ and $a_{11}$, so we will use $n=5$ and $n=11$:

$$
\left\{
\begin{array}{rcl}
a_5&=&a_1+(5-1)d\\[4pt]
a_{11}&=&a_1+(11-1)d.
\end{array}
\right.
$$

Substitute in the values, $a_5=19$ and $a_{11}=37$, and simplify.

$$
\left\{
\begin{array}{rcl}
19&=&a_1+4d\\[4pt]
37&=&a_1+10d.
\end{array}
\right.
$$

Prepare to eliminate the $a_1$ term by multiplying the top equation by $-1$.
Add the equations.

$$
\begin{array}{rcl}
-19&=&-a_1-4d\\[4pt]
37&=&a_1+10d\\ \hline
18&=&6d\\[4pt]
3&=&d
\end{array}
$$

Substituting $d=3$ back into the first equation,

$$
\begin{array}{rcl}
19&=&a_1+4\cdot3\\[4pt]
19&=&a_1+12\\[4pt]
7&=&a_1.
\end{array}
$$

Use the formula with $a_1=7$ and $d=3$.

$$
\begin{array}{lrcl}
\text{Use the formula.} & a_n&=&a_1+(n-1)d\\[4pt]
\text{Substitute in the values.} & a_n&=&7+(n-1)3\\[4pt]
\text{Simplify.} & a_n&=&7+3n-3\\[4pt]
&a_n&=&3n+4
\end{array}
$$

The first term is $a_1=7$. The common difference is $d=3$. The general term
of the sequence is $a_n=3n+4$.

{{< fillin question="For a sequence where the fourth term is $17$ and the thirteenth term is $53$, find the first term." answer="5" answerDisplay="$a_1=5$" hint="Form two equations from $a_n=a_1+(n-1)d$ and eliminate $a_1$." >}}

{{< fillin question="For a sequence where the fourth term is $17$ and the thirteenth term is $53$, find the common difference." answer="4" answerDisplay="$d=4$" hint="Form two equations from $a_n=a_1+(n-1)d$ and subtract them." >}}

{{< fillin question="For a sequence where the fourth term is $17$ and the thirteenth term is $53$, give the formula for the general term." answer="4n+1" answerDisplay="$a_n=4n+1$" hint="After finding $a_1$ and $d$, substitute them into the general-term formula." >}}

Repeat the process for another pair of known terms.

{{< fillin question="For a sequence where the third term is $2$ and the twelfth term is $-25$, find the first term." answer="8" answerDisplay="$a_1=8$" hint="Form two equations from $a_n=a_1+(n-1)d$ and eliminate $a_1$." >}}

{{< fillin question="For a sequence where the third term is $2$ and the twelfth term is $-25$, find the common difference." answer="-3" answerDisplay="$d=-3$" hint="Form two equations from $a_n=a_1+(n-1)d$ and subtract them." >}}

{{< fillin question="For a sequence where the third term is $2$ and the twelfth term is $-25$, give the formula for the general term." answer="-3n+11" answerDisplay="$a_n=-3n+11$" hint="After finding $a_1$ and $d$, substitute them into the general-term formula." >}}

## Find the Sum of the First $n$ Terms of an Arithmetic Sequence

As with the general sequences, it is often useful to find the sum of an
arithmetic sequence. The sum, $S_n$, of the first $n$ terms of any arithmetic
sequence is written as

$$S_n=a_1+a_2+a_3+\cdots+a_n.$$

To find the sum by merely adding all the terms can be tedious. So we can also
develop a formula to find the sum of a sequence using the first and last term
of the sequence.

We can develop this new formula by first writing the sum by starting with the
first term, $a_1$, and keep adding a $d$ to get the next term as

$$S_n=a_1+(a_1+d)+(a_1+2d)+\cdots+a_n.$$

We can also reverse the order of the terms and write the sum by starting with
$a_n$ and keep subtracting $d$ to get the next term as

$$S_n=a_n+(a_n-d)+(a_n-2d)+\cdots+a_1.$$

If we add these two expressions for the sum of the first $n$ terms of an
arithmetic sequence, we can derive a formula for the sum of the first $n$
terms of any arithmetic series.

$$
\begin{array}{rrrrrrrrr}
S_n&=&a_1&+&(a_1+d)&+&(a_1+2d)&+\cdots+a_n\\[4pt]
+S_n&=&a_n&+&(a_n-d)&+&(a_n-2d)&+\cdots+a_1\\ \hline
2S_n&=&(a_1+a_n)&+&(a_1+a_n)&+&(a_1+a_n)&+\cdots+(a_1+a_n)
\end{array}
$$

Because there are $n$ sums of $(a_1+a_n)$ on the right side of the equation,
we rewrite the right side as $n(a_1+a_n)$.

$$2S_n=n(a_1+a_n)$$

We divide by two to solve for $S_n$.

$$S_n=\tfrac n2(a_1+a_n)$$

This gives us a general formula for the sum of the first $n$ terms of an
arithmetic sequence.

{{< callout type="info" >}}
### Sum of the First $n$ Terms of an Arithmetic Sequence

The sum, $S_n$, of the first $n$ terms of an arithmetic sequence is

$$S_n=\tfrac n2(a_1+a_n),$$

where $a_1$ is the first term and $a_n$ is the $n$th term.
{{< /callout >}}

We apply this formula in the next example where the first few terms of the
sequence are given.

**Example 12.18.** Find the sum of the first 30 terms of the arithmetic
sequence: $8,13,18,23,28,\ldots$

**Solution.** To find the sum, we will use the formula
$S_n=\tfrac n2(a_1+a_n)$. We know $a_1=8$, $d=5$, and $n=30$, but we need to
find $a_n$ in order to use the sum formula.

$$
\begin{array}{lrcl}
\text{Use the general-term formula.} & a_n&=&a_1+(n-1)d\\[4pt]
\text{Find }a_n\text{ where }a_1=8,d=5,n=30. & a_{30}&=&8+(30-1)5\\[4pt]
\text{Simplify.} & a_{30}&=&8+(29)5\\[4pt]
&a_{30}&=&153\\[4pt]
\text{Use the sum formula.} & S_n&=&\tfrac n2(a_1+a_n)\\[4pt]
\text{Substitute in the values.} & S_{30}&=&\tfrac{30}{2}(8+153)\\[4pt]
\text{Simplify.} & S_{30}&=&15(161)\\[4pt]
&S_{30}&=&2{,}415
\end{array}
$$

{{< fillin question="Find the sum of the first $30$ terms of the arithmetic sequence $5,9,13,17,21,\ldots$." answer="1890" answerDisplay="$1{,}890$" hint="Find $a_{30}$, then use $S_n=\tfrac n2(a_1+a_n)$." >}}

{{< fillin question="Find the sum of the first $30$ terms of the arithmetic sequence $7,10,13,16,19,\ldots$." answer="1515" answerDisplay="$1{,}515$" hint="Find $a_{30}$, then use $S_n=\tfrac n2(a_1+a_n)$." >}}

In the next example, we are given the general term for the sequence and are
asked to find the sum of the first 50 terms.

**Example 12.19.** Find the sum of the first 50 terms of the arithmetic
sequence whose general term is $a_n=3n-4$.

**Solution.** To find the sum, we will use the formula
$S_n=\tfrac n2(a_1+a_n)$. We know $n=50$, but we need to find $a_1$ and $a_n$
in order to use the sum formula.

$$
\begin{array}{lrcl}
&a_n&=&3n-4\\[4pt]
\text{Find }a_1\text{ by substituting }n=1. & a_1&=&3\cdot1-4\\[4pt]
&a_1&=&-1\\[4pt]
\text{Find }a_n\text{ by substituting }n=50. & a_{50}&=&3\cdot50-4\\[4pt]
\text{Simplify.} & a_{50}&=&146\\[4pt]
\text{Use the sum formula.} & S_n&=&\tfrac n2(a_1+a_n)\\[4pt]
\text{Substitute in the values.} & S_{50}&=&\tfrac{50}{2}(-1+146)\\[4pt]
\text{Simplify.} & S_{50}&=&25(145)\\[4pt]
&S_{50}&=&3{,}625
\end{array}
$$

{{< fillin question="Find the sum of the first $50$ terms of the arithmetic sequence whose general term is $a_n=2n-5$." answer="2300" answerDisplay="$2{,}300$" hint="Evaluate the general term at $n=1$ and $n=50$, then use the sum formula." >}}

{{< fillin question="Find the sum of the first $50$ terms of the arithmetic sequence whose general term is $a_n=4n+3$." answer="5250" answerDisplay="$5{,}250$" hint="Evaluate the general term at $n=1$ and $n=50$, then use the sum formula." >}}

In the next example we are given the sum in summation notation. To add all the
terms would be tedious, so we extract the information needed to use the
formula to find the sum of the first $n$ terms.

**Example 12.20.** Find the sum:

$$\sum_{i=1}^{25}(4i+7).$$

**Solution.** To find the sum, we will use the formula
$S_n=\tfrac n2(a_1+a_n)$. We know $n=25$, but we need to find $a_1$ and $a_n$
in order to use the sum formula.

Expand the summation notation.

$$
\sum_{i=1}^{25}(4i+7)
=(4\cdot1+7)+(4\cdot2+7)+(4\cdot3+7)+\cdots+(4\cdot25+7).
$$

Simplify.

$$\sum_{i=1}^{25}(4i+7)=11+15+19+\cdots+107.$$

Identify $a_1=11$ and $a_{25}=107$. Knowing $n=25$, $a_1=11$, and
$a_{25}=107$, use the sum formula.

$$
\begin{array}{lrcl}
\text{Use the sum formula.} & S_n&=&\tfrac n2(a_1+a_n)\\[4pt]
\text{Substitute in the values.} & S_{25}&=&\tfrac{25}{2}(11+107)\\[4pt]
\text{Simplify.} & S_{25}&=&\tfrac{25}{2}(118)\\[4pt]
&S_{25}&=&1{,}475
\end{array}
$$

{{< fillin question="Find the sum $\sum_{i=1}^{30}(6i-4)$." answer="2670" answerDisplay="$2{,}670$" hint="Identify the first and thirtieth terms, then use the arithmetic-sequence sum formula." >}}

{{< fillin question="Find the sum $\sum_{i=1}^{35}(5i-3)$." answer="3045" answerDisplay="$3{,}045$" hint="Identify the first and thirty-fifth terms, then use the arithmetic-sequence sum formula." >}}

**Key terms.** An **arithmetic sequence** is a sequence in which the difference
between consecutive terms is always the same. This constant difference $d$ is
the **common difference**.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 12.2](https://openstax.org/books/intermediate-algebra-2e/pages/12-2-arithmetic-sequences) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/books/intermediate-algebra-2e/pages/12-2-arithmetic-sequences). Changes: omitted the readiness quiz, media links, and section exercise sets; converted Try It exercises into interactive questions and adapted formatting for the web.</small>
