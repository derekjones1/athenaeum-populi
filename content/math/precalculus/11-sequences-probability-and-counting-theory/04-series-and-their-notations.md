---
title: Series and Their Notations
description: >-
  Writing sums in summation notation, evaluating finite sums, and applying
  the formulas for arithmetic series, geometric series, and infinite
  geometric series to solve annuity and other application problems —
  adapted from OpenStax Precalculus 2e, Section 11.4.
source_section: "11.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use summation notation
- Use the formula for the sum of the first $n$ terms of an arithmetic series
- Use the formula for the sum of the first $n$ terms of a geometric series
- Use the formula for the sum of an infinite geometric series
- Solve annuity problems
{{< /callout >}}

A parent decides to start a college fund for their daughter. They plan to invest \$50 in the fund each month. The fund pays $6\%$ annual interest, compounded monthly. How much money will they have saved when their daughter is ready to start college in 6 years? In this section, we will learn how to answer this question. To do so, we need to consider the amount of money invested and the amount of interest earned.

### Using Summation Notation

To find the total amount of money in the college fund and the sum of the amounts deposited, we need to add the amounts deposited each month and the amounts earned monthly. The sum of the terms of a sequence is called a **series**. Consider, for example, the following series.

$$3+7+11+15+19+\ldots$$

The $n$th **partial sum** of a series is the sum of a finite number of consecutive terms beginning with the first term. The notation $S_n$ represents the partial sum.

$$
\begin{array}{lrcl}
& S_1 &=& 3 \\[4pt]
& S_2 &=& 3+7=10 \\[4pt]
& S_3 &=& 3+7+11=21 \\[4pt]
& S_4 &=& 3+7+11+15=36
\end{array}
$$

**Summation notation** is used to represent series. Summation notation is often known as sigma notation because it uses the Greek capital letter **sigma**, $\Sigma$, to represent the sum. Summation notation includes an explicit formula and specifies the first and last terms in the series. An explicit formula for each term of the series is given to the right of the sigma. A variable called the **index of summation** is written below the sigma. The index of summation is set equal to the **lower limit of summation**, which is the number used to generate the first term in the series. The number above the sigma, called the **upper limit of summation**, is the number used to generate the last term in a series.

If we interpret the given notation, we see that it asks us to find the sum of the terms in the series $a_k=2k$ for $k=1$ through $k=5$. We can begin by substituting the terms for $k$ and listing out the terms of this series.

$$
\begin{array}{lrcl}
& a_1 &=& 2(1)=2 \\[4pt]
& a_2 &=& 2(2)=4 \\[4pt]
& a_3 &=& 2(3)=6 \\[4pt]
& a_4 &=& 2(4)=8 \\[4pt]
& a_5 &=& 2(5)=10
\end{array}
$$

We can find the sum of the series by adding the terms:

$$\sum_{k=1}^{5}2k=2+4+6+8+10=30$$

{{< callout type="info" >}}
  **Summation Notation.** The sum of the first $n$ terms of a series can be expressed in summation notation as follows:

  $$\sum_{k=1}^{n}a_k$$

  This notation tells us to find the sum of $a_k$ from $k=1$ to $k=n$. $k$ is called the **index of summation**, $1$ is the **lower limit of summation**, and $n$ is the **upper limit of summation**.
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Does the lower limit of summation have to be $1$?*

  No. The lower limit of summation can be any number, but $1$ is frequently used. We will look at examples with lower limits of summation other than $1$.
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given summation notation for a series, evaluate the value.

  1. Identify the lower limit of summation.
  2. Identify the upper limit of summation.
  3. Substitute each value of $k$ from the lower limit to the upper limit into the formula.
  4. Add to find the sum.
{{< /callout >}}

**Example.** Evaluate $\sum_{k=3}^{7}k^2$.

**Solution.** According to the notation, the lower limit of summation is $3$ and the upper limit is $7$. So we need to find the sum of $k^2$ from $k=3$ to $k=7$. We find the terms of the series by substituting $k=3,4,5,6,$ and $7$ into the function $k^2$. We add the terms to find the sum.

$$
\begin{array}{lrcl}
& \sum_{k=3}^{7}k^2 &=& 3^2+4^2+5^2+6^2+7^2 \\[4pt]
& &=& 9+16+25+36+49 \\[4pt]
& &=& 135
\end{array}
$$

{{< fillin
  question="Evaluate $\sum_{k=2}^{5}(3k-1)$."
  answer="38"
  answerForm="decimal"
  answerDisplay="$38$"
  hint="Substitute $k=2,3,4,$ and $5$ into $3k-1$, then add the four results."
>}}

### Using the Formula for Arithmetic Series

Just as we studied special types of sequences, we will look at special types of series. Recall that an **arithmetic sequence** is a sequence in which the difference between any two consecutive terms is the **common difference**, $d$. The sum of the terms of an arithmetic sequence is called an **arithmetic series**. We can write the sum of the first $n$ terms of an arithmetic series as:

$$S_n=a_1+(a_1+d)+(a_1+2d)+\ldots+(a_n-d)+a_n$$

We can also reverse the order of the terms and write the sum as

$$S_n=a_n+(a_n-d)+(a_n-2d)+\ldots+(a_1+d)+a_1$$

If we add these two expressions for the sum of the first $n$ terms of an arithmetic series, we can derive a formula for the sum of the first $n$ terms of any arithmetic series.

$$
\begin{array}{lrcl}
& S_n &=& a_1+(a_1+d)+(a_1+2d)+\ldots+(a_n-d)+a_n \\[4pt]
+ & S_n &=& a_n+(a_n-d)+(a_n-2d)+\ldots+(a_1+d)+a_1 \\[4pt]
\hline
& 2S_n &=& (a_1+a_n)+(a_1+a_n)+\ldots+(a_1+a_n)
\end{array}
$$

Because there are $n$ terms in the series, we can simplify this sum to

$$2S_n=n(a_1+a_n)$$

We divide by $2$ to find the formula for the sum of the first $n$ terms of an arithmetic series.

$$S_n=\tfrac{n(a_1+a_n)}{2}$$

{{< callout type="info" >}}
  **Formula for the Sum of the First $n$ Terms of an Arithmetic Series.** An arithmetic series is the sum of the terms of an arithmetic sequence. The formula for the sum of the first $n$ terms of an arithmetic sequence is

  $$S_n=\tfrac{n(a_1+a_n)}{2}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given terms of an arithmetic series, find the sum of the first $n$ terms.

  1. Identify $a_1$ and $a_n$.
  2. Determine $n$.
  3. Substitute values for $a_1$, $a_n$, and $n$ into the formula $S_n=\tfrac{n(a_1+a_n)}{2}$.
  4. Simplify to find $S_n$.
{{< /callout >}}

**Example.** Find the sum of each arithmetic series.

a. $5+8+11+14+17+20+23+26+29+32$
b. $20+15+10+\ldots+(-50)$
c. $\sum_{k=1}^{12}(3k-8)$

**Solution.**

a. We are given $a_1=5$ and $a_n=32$. Count the number of terms in the sequence to find $n=10$. Substitute values for $a_1$, $a_n$, and $n$ into the formula and simplify.

   $$
   \begin{array}{lrcl}
   & S_n &=& \tfrac{n(a_1+a_n)}{2} \\[4pt]
   & S_{10} &=& \tfrac{10(5+32)}{2}=185
   \end{array}
   $$

b. We are given $a_1=20$ and $a_n=-50$. Use the formula for the general term of an arithmetic sequence to find $n$.

   $$
   \begin{array}{lrcl}
   & a_n &=& a_1+(n-1)d \\[4pt]
   & -50 &=& 20+(n-1)(-5) \\[4pt]
   & -70 &=& (n-1)(-5) \\[4pt]
   & 14 &=& n-1 \\[4pt]
   & 15 &=& n
   \end{array}
   $$

   Substitute values for $a_1$, $a_n$, $n$ into the formula and simplify.

   $$
   \begin{array}{lrcl}
   & S_n &=& \tfrac{n(a_1+a_n)}{2} \\[4pt]
   & S_{15} &=& \tfrac{15(20-50)}{2}=-225
   \end{array}
   $$

c. To find $a_1$, substitute $k=1$ into the given explicit formula.

   $$
   \begin{array}{lrcl}
   & a_k &=& 3k-8 \\[4pt]
   & a_1 &=& 3(1)-8=-5
   \end{array}
   $$

   We are given that $n=12$. To find $a_{12}$, substitute $k=12$ into the given explicit formula.

   $$
   \begin{array}{lrcl}
   & a_k &=& 3k-8 \\[4pt]
   & a_{12} &=& 3(12)-8=28
   \end{array}
   $$

   Substitute values for $a_1$, $a_n$, and $n$ into the formula and simplify.

   $$
   \begin{array}{lrcl}
   & S_n &=& \tfrac{n(a_1+a_n)}{2} \\[4pt]
   & S_{12} &=& \tfrac{12(-5+28)}{2}=138
   \end{array}
   $$

{{< fillin
  question="Find the sum $1.4+1.6+1.8+2.0+2.2+2.4+2.6+2.8+3.0+3.2+3.4$."
  answer="26.4"
  answerForm="decimal"
  answerDisplay="$26.4$"
  hint="This is an arithmetic series with $a_1=1.4$, $d=0.2$, and $11$ terms; use $S_n=\tfrac{n(a_1+a_n)}{2}$ rather than adding term by term."
>}}

{{< fillin
  question="Find the sum $13+21+29+\ldots+69$."
  answer="328"
  answerForm="decimal"
  answerDisplay="$328$"
  hint="This arithmetic series has $a_1=13$, $d=8$, and $a_n=69$; find $n$ first, then use $S_n=\tfrac{n(a_1+a_n)}{2}$."
>}}

{{< fillin
  question="Evaluate $\sum_{k=1}^{10}(5-6k)$."
  answer="-280"
  answerForm="decimal"
  answerDisplay="$-280$"
  hint="This is an arithmetic series with $a_1=-1$ and $d=-6$; find $a_{10}$, then use $S_n=\tfrac{n(a_1+a_n)}{2}$."
>}}

**Example.** On the Sunday after a minor surgery, a woman is able to walk a half-mile. Each Sunday, she walks an additional quarter-mile. After $8$ weeks, what will be the total number of miles she has walked?

**Solution.** This problem can be modeled by an arithmetic series with $a_1=\tfrac12$ and $d=\tfrac14$. We are looking for the total number of miles walked after 8 weeks, so we know that $n=8$, and we are looking for $S_8$. To find $a_8$, we can use the explicit formula for an arithmetic sequence.

$$
\begin{array}{lrcl}
& a_n &=& a_1+d(n-1) \\[4pt]
& a_8 &=& \tfrac12+\tfrac14(8-1)=\tfrac94
\end{array}
$$

We can now use the formula for arithmetic series.

$$
\begin{array}{lrcl}
& S_n &=& \tfrac{n(a_1+a_n)}{2} \\[4pt]
& S_8 &=& \tfrac{8\left(\tfrac12+\tfrac94\right)}{2}=11
\end{array}
$$

She will have walked a total of $11$ miles.

{{< fillin
  question="A man earns \$100 in the first week of June. Each week, he earns \$12.50 more than the previous week. After $12$ weeks, how much has he earned in total? Enter the number only, without a dollar sign."
  answer="2025"
  answerForm="decimal"
  answerDisplay="\$2{,}025"
  hint="This is an arithmetic series with $a_1=100$ and $d=12.5$; find $a_{12}$, then use $S_n=\tfrac{n(a_1+a_n)}{2}$ with $n=12$."
>}}

### Using the Formula for Geometric Series

Just as the sum of the terms of an arithmetic sequence is called an arithmetic series, the sum of the terms in a geometric sequence is called a **geometric series**. Recall that a **geometric sequence** is a sequence in which the ratio of any two consecutive terms is the **common ratio**, $r$. We can write the sum of the first $n$ terms of a geometric series as

$$S_n=a_1+ra_1+r^2a_1+\ldots+r^{n-1}a_1$$

Just as with arithmetic series, we can do some algebraic manipulation to derive a formula for the sum of the first $n$ terms of a geometric series. We will begin by multiplying both sides of the equation by $r$.

$$rS_n=ra_1+r^2a_1+r^3a_1+\ldots+r^na_1$$

Next, we subtract this equation from the original equation.

$$
\begin{array}{lrcl}
& S_n &=& a_1+ra_1+r^2a_1+\ldots+r^{n-1}a_1 \\[4pt]
- & rS_n &=& ra_1+r^2a_1+r^3a_1+\ldots+r^na_1 \\[4pt]
\hline
& (1-r)S_n &=& a_1-r^na_1
\end{array}
$$

Notice that when we subtract, all but the first term of the top equation and the last term of the bottom equation cancel out. To obtain a formula for $S_n$, divide both sides by $(1-r)$.

$$S_n=\tfrac{a_1(1-r^n)}{1-r},\quad r\ne1$$

{{< callout type="info" >}}
  **Formula for the Sum of the First $n$ Terms of a Geometric Series.** A geometric series is the sum of the terms in a geometric sequence. The formula for the sum of the first $n$ terms of a geometric sequence is represented as

  $$S_n=\tfrac{a_1(1-r^n)}{1-r},\quad r\ne1$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a geometric series, find the sum of the first $n$ terms.

  1. Identify $a_1$, $r$, and $n$.
  2. Substitute values for $a_1$, $r$, and $n$ into the formula $S_n=\tfrac{a_1(1-r^n)}{1-r}$.
  3. Simplify to find $S_n$.
{{< /callout >}}

**Example.** Use the formula to find the indicated partial sum of each geometric series.

a. $S_{11}$ for the series $8+(-4)+2+\ldots$
b. $\sum_{k=1}^{6}3\cdot2^k$

**Solution.**

a. $a_1=8$, and we are given that $n=11$. We can find $r$ by dividing the second term of the series by the first.

   $$r=\tfrac{-4}{8}=-\tfrac12$$

   Substitute values for $a_1$, $r$, and $n$ into the formula and simplify.

   $$
   \begin{array}{lrcl}
   & S_n &=& \tfrac{a_1(1-r^n)}{1-r} \\[4pt]
   & S_{11} &=& \tfrac{8\left(1-\left(-\tfrac12\right)^{11}\right)}{1-\left(-\tfrac12\right)}\approx5.336
   \end{array}
   $$

b. Find $a_1$ by substituting $k=1$ into the given explicit formula.

   $$a_1=3\cdot2^1=6$$

   We can see from the given explicit formula that $r=2$. The upper limit of summation is $6$, so $n=6$. Substitute values for $a_1$, $r$, and $n$ into the formula, and simplify.

   $$
   \begin{array}{lrcl}
   & S_n &=& \tfrac{a_1(1-r^n)}{1-r} \\[4pt]
   & S_6 &=& \tfrac{6(1-2^6)}{1-2}=378
   \end{array}
   $$

{{< fillin
  question="Find $S_{20}$ for the series $1000+500+250+\ldots$, rounded to the nearest cent. Enter the number only, without a dollar sign."
  answer="2000.00"
  answerForm="decimal"
  answerDisplay="\$2{,}000.00"
  hint="This geometric series has $a_1=1000$ and $r=\tfrac12$; substitute $a_1$, $r$, and $n=20$ into $S_n=\tfrac{a_1(1-r^n)}{1-r}$."
>}}

{{< fillin
  question="Evaluate $\sum_{k=1}^{8}3^k$."
  answer="9840"
  answerForm="decimal"
  answerDisplay="$9{,}840$"
  hint="This is a geometric series with $a_1=3$ and $r=3$; substitute into $S_n=\tfrac{a_1(1-r^n)}{1-r}$ with $n=8$."
>}}

**Example.** At a new job, an employee's starting salary is \$26{,}750. He receives a $1.6\%$ annual raise. Find his total earnings at the end of $5$ years.

**Solution.** The problem can be represented by a geometric series with $a_1=26{,}750$; $n=5$; and $r=1.016$. Substitute values for $a_1$, $r$, and $n$ into the formula and simplify to find the total amount earned at the end of 5 years.

$$
\begin{array}{lrcl}
& S_n &=& \tfrac{a_1(1-r^n)}{1-r} \\[4pt]
& S_5 &=& \tfrac{26{,}750(1-1.016^5)}{1-1.016}\approx138{,}099.03
\end{array}
$$

He will have earned a total of \$138{,}099.03 by the end of 5 years.

{{< fillin
  question="At a new job, an employee's starting salary is \$32{,}100. She receives a $2\%$ annual raise. How much will she have earned by the end of $8$ years, rounded to the nearest cent? Enter the number only, without a dollar sign."
  answer="275513.31"
  answerForm="decimal"
  answerDisplay="\$275{,}513.31"
  hint="This is a geometric series with $a_1=32{,}100$ and $r=1.02$; substitute into $S_n=\tfrac{a_1(1-r^n)}{1-r}$ with $n=8$."
>}}

### Using the Formula for the Sum of an Infinite Geometric Series

Thus far, we have looked only at finite series. Sometimes, however, we are interested in the sum of the terms of an infinite sequence rather than the sum of only the first $n$ terms. An **infinite series** is the sum of the terms of an infinite sequence. An example of an infinite series is $2+4+6+8+\ldots$

This series can also be written in summation notation as $\sum_{k=1}^{\infty}2k$, where the upper limit of summation is infinity. Because the terms are not tending to zero, the sum of the series increases without bound as we add more terms. Therefore, the sum of this infinite series is not defined. When the sum is not a real number, we say the series **diverges**.

#### Determining Whether the Sum of an Infinite Geometric Series is Defined

If the terms of an **infinite geometric sequence** approach $0$, the sum of an infinite geometric series can be defined. The terms in this series approach $0$:

$$1+0.2+0.04+0.008+0.0016+\ldots$$

The common ratio $r=0.2$. As $n$ gets very large, the values of $r^n$ get very small and approach $0$. Each successive term affects the sum less than the preceding term. As each succeeding term gets closer to $0$, the sum of the terms approaches a finite value. The terms of any infinite geometric series with $-1<r<1$ approach $0$; the sum of a geometric series is defined when $-1<r<1$.

{{< callout type="info" >}}
  **Determining Whether the Sum of an Infinite Geometric Series is Defined.** The sum of an infinite series is defined if the series is geometric and $-1<r<1$.
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given the first several terms of an infinite series, determine if the sum of the series exists.

  1. Find the ratio of the second term to the first term.
  2. Find the ratio of the third term to the second term.
  3. Continue this process to ensure the ratio of a term to the preceding term is constant throughout. If so, the series is geometric.
  4. If a common ratio, $r$, was found in step 3, check to see if $-1<r<1$. If so, the sum is defined. If not, the sum is not defined.
{{< /callout >}}

**Example.** Determine whether the sum of each infinite series is defined.

a. $12+8+4+\ldots$
b. $\tfrac34+\tfrac12+\tfrac13+\ldots$
c. $\sum_{k=1}^{\infty}27\cdot\left(\tfrac13\right)^k$
d. $\sum_{k=1}^{\infty}5k$

**Solution.**

a. The ratio of the second term to the first is $\tfrac23$, which is not the same as the ratio of the third term to the second, $\tfrac12$. The series is not geometric.

b. The ratio of the second term to the first is the same as the ratio of the third term to the second. The series is geometric with a common ratio of $\tfrac23$. The sum of the infinite series is defined.

c. The given formula is exponential with a base of $\tfrac13$; the series is geometric with a common ratio of $\tfrac13$. The sum of the infinite series is defined.

d. The given formula is not exponential; the series is not geometric because the terms are increasing, and so cannot yield a finite sum.

{{< multiplechoice
  question="Determine whether the sum of the infinite series $\tfrac13+\tfrac12+\tfrac34+\tfrac98+\ldots$ is defined."
  mode="text"
  answer="The series is geometric, but the sum is not defined."
  hint="Divide each term by the one before it to find the common ratio, then compare it with $-1$ and $1$."
>}}
The series is not geometric.
The series is geometric, and the sum is defined.
The series is geometric, but the sum is not defined.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the sum of the infinite series $24+(-12)+6+(-3)+\ldots$ is defined."
  mode="text"
  answer="The series is geometric, and the sum is defined."
  hint="Divide each term by the one before it; if the ratio is constant and between $-1$ and $1$, the sum is defined."
>}}
The series is geometric, and the sum is defined.
The series is geometric, but the sum is not defined.
The series is not geometric.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the sum of the infinite series $\sum_{k=1}^{\infty}15\cdot(-0.3)^k$ is defined."
  mode="text"
  answer="The series is geometric, and the sum is defined."
  hint="The series is geometric with $r=-0.3$; compare $r$ with $-1$ and $1$."
>}}
The series is not geometric.
The series is geometric, but the sum is not defined.
The series is geometric, and the sum is defined.
{{< /multiplechoice >}}

#### Finding Sums of Infinite Series

When the sum of an infinite geometric series exists, we can calculate the sum. The formula for the sum of an infinite series is related to the formula for the sum of the first $n$ terms of a geometric series.

$$S_n=\tfrac{a_1(1-r^n)}{1-r}$$

We will examine an infinite series with $r=\tfrac12$. What happens to $r^n$ as $n$ increases?

$$
\begin{array}{lrcl}
& \left(\tfrac12\right)^2 &=& \tfrac14 \\[4pt]
& \left(\tfrac12\right)^3 &=& \tfrac18 \\[4pt]
& \left(\tfrac12\right)^4 &=& \tfrac{1}{16}
\end{array}
$$

The value of $r^n$ decreases rapidly. What happens for greater values of $n$?

$$
\begin{array}{lrcl}
& \left(\tfrac12\right)^{10} &=& \tfrac{1}{1{,}024} \\[4pt]
& \left(\tfrac12\right)^{20} &=& \tfrac{1}{1{,}048{,}576} \\[4pt]
& \left(\tfrac12\right)^{30} &=& \tfrac{1}{1{,}073{,}741{,}824}
\end{array}
$$

As $n$ gets very large, $r^n$ gets very small. We say that, as $n$ increases without bound, $r^n$ approaches $0$. As $r^n$ approaches $0$, $1-r^n$ approaches $1$. When this happens, the numerator approaches $a_1$. This gives us a formula for the sum of an infinite geometric series.

{{< callout type="info" >}}
  **Formula for the Sum of an Infinite Geometric Series.** The formula for the sum of an infinite geometric series with $-1<r<1$ is

  $$S=\tfrac{a_1}{1-r}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given an infinite geometric series, find its sum.

  1. Identify $a_1$ and $r$.
  2. Confirm that $-1<r<1$.
  3. Substitute values for $a_1$ and $r$ into the formula, $S=\tfrac{a_1}{1-r}$.
  4. Simplify to find $S$.
{{< /callout >}}

**Example.** Find the sum, if it exists, for the following:

a. $10+9+8+7+\ldots$
b. $248.6+99.44+39.776+\ldots$
c. $\sum_{k=1}^{\infty}4{,}374\cdot\left(-\tfrac13\right)^{k-1}$
d. $\sum_{k=1}^{\infty}\tfrac19\cdot\left(\tfrac43\right)^k$

**Solution.**

a. There is not a constant ratio; the series is not geometric.

b. There is a constant ratio; the series is geometric. $a_1=248.6$ and $r=\tfrac{99.44}{248.6}=0.4$, so the sum exists. Substitute $a_1=248.6$ and $r=0.4$ into the formula and simplify to find the sum:

   $$
   \begin{array}{lrcl}
   & S &=& \tfrac{a_1}{1-r} \\[4pt]
   & S &=& \tfrac{248.6}{1-0.4}=414.\overline3
   \end{array}
   $$

c. The formula is exponential, so the series is geometric with $r=-\tfrac13$. Find $a_1$ by substituting $k=1$ into the given explicit formula:

   $$a_1=4{,}374\cdot\left(-\tfrac13\right)^{1-1}=4{,}374$$

   Substitute $a_1=4{,}374$ and $r=-\tfrac13$ into the formula, and simplify to find the sum:

   $$
   \begin{array}{lrcl}
   & S &=& \tfrac{a_1}{1-r} \\[4pt]
   & S &=& \tfrac{4{,}374}{1-\left(-\tfrac13\right)}=3{,}280.5
   \end{array}
   $$

d. The formula is exponential, so the series is geometric, but $r>1$. The sum does not exist.

**Example.** Find an equivalent fraction for the repeating decimal $0.\overline3$.

**Solution.** We notice the repeating decimal $0.\overline3=0.333\ldots$ so we can rewrite the repeating decimal as a sum of terms.

$$0.\overline3=0.3+0.03+0.003+\ldots$$

Looking for a pattern, we rewrite the sum, noticing that we see the first term multiplied by $0.1$ in the second term, and the second term multiplied by $0.1$ in the third term. Notice the pattern; we multiply each consecutive term by a common ratio of $0.1$ starting with the first term of $0.3$. So, substituting into our formula for an infinite geometric sum, we have

$$S_n=\tfrac{a_1}{1-r}=\tfrac{0.3}{1-0.1}=\tfrac{0.3}{0.9}=\tfrac13$$

{{< fillin
  question="Find the sum, if it exists: $2+\tfrac23+\tfrac29+\ldots$"
  answer="3"
  answerForm="decimal"
  answerDisplay="$3$"
  hint="This infinite geometric series has $a_1=2$ and $r=\tfrac13$; substitute into $S=\tfrac{a_1}{1-r}$."
>}}

{{< multiplechoice
  question="Determine whether the sum of the infinite series $\sum_{k=1}^{\infty}(0.76k+1)$ is defined."
  mode="text"
  answer="The series is not geometric."
  hint="Compute the ratio of consecutive terms; if it is not constant, the series is not geometric at all, and the infinite-sum formula does not apply."
>}}
The series is geometric, and the sum is defined.
The series is not geometric.
The series is geometric, but the sum is not defined.
{{< /multiplechoice >}}

{{< fillin
  question="Find the sum, if it exists, as a fraction: $\sum_{k=1}^{\infty}\left(-\tfrac38\right)^k$."
  answer="-\tfrac{3}{11}"
  answerForm="fraction"
  answerDisplay="$-\tfrac{3}{11}$"
  hint="This is an infinite geometric series with $a_1=-\tfrac38$ and $r=-\tfrac38$; substitute into $S=\tfrac{a_1}{1-r}$."
>}}

### Solving Annuity Problems

At the beginning of the section, we looked at a problem in which a parent invested a set amount of money each month into a college fund for six years. An **annuity** is an investment in which the purchaser makes a sequence of periodic, equal payments. To find the amount of an annuity, we need to find the sum of all the payments and the interest earned. In the example, the parent invests \$50 each month. This is the value of the initial deposit. The account paid $6\%$ annual interest, compounded monthly. To find the interest rate per payment period, we need to divide the $6\%$ annual percentage interest (APR) rate by $12$. So the monthly interest rate is $0.5\%$. We can multiply the amount in the account each month by $100.5\%$ to find the value of the account after interest has been added.

We can find the value of the annuity right after the last deposit by using a geometric series with $a_1=50$ and $r=100.5\%=1.005$. After the first deposit, the value of the annuity will be \$50. Let us see if we can determine the amount in the college fund and the interest earned.

We can find the value of the annuity after $n$ deposits using the formula for the sum of the first $n$ terms of a geometric series. In 6 years, there are $72$ months, so $n=72$. We can substitute $a_1=50$, $r=1.005$, and $n=72$ into the formula, and simplify to find the value of the annuity after 6 years.

$$S_{72}=\tfrac{50(1-1.005^{72})}{1-1.005}\approx4{,}320.44$$

After the last deposit, the parent will have a total of \$4{,}320.44 in the account. Notice, the parent made $72$ payments of \$50 each, for a total of $72(50)=3{,}600$ dollars, or \$3{,}600. This means that because of the annuity, the parent earned \$720.44 interest in their college fund.

{{< callout type="info" >}}
  **How To:** given an initial deposit and an interest rate, find the value of an annuity.

  1. Determine $a_1$, the value of the initial deposit.
  2. Determine $n$, the number of deposits.
  3. Determine $r$. Divide the annual interest rate by the number of times per year that interest is compounded. Add $1$ to this amount to find $r$.
  4. Substitute values for $a_1$, $r$, and $n$ into the formula for the sum of the first $n$ terms of a geometric series, $S_n=\tfrac{a_1(1-r^n)}{1-r}$.
  5. Simplify to find $S_n$, the value of the annuity after $n$ deposits.
{{< /callout >}}

**Example.** A deposit of \$100 is placed into a college fund at the beginning of every month for $10$ years. The fund earns $9\%$ annual interest, compounded monthly, and paid at the end of the month. How much is in the account right after the last deposit?

**Solution.** The value of the initial deposit is \$100, so $a_1=100$. A total of $120$ monthly deposits are made in the 10 years, so $n=120$. To find $r$, divide the annual interest rate by $12$ to find the monthly interest rate and add $1$ to represent the new monthly deposit.

$$r=1+\tfrac{0.09}{12}=1.0075$$

Substitute $a_1=100$, $r=1.0075$, and $n=120$ into the formula for the sum of the first $n$ terms of a geometric series, and simplify to find the value of the annuity.

$$S_{120}=\tfrac{100(1-1.0075^{120})}{1-1.0075}\approx19{,}351.43$$

So the account has \$19{,}351.43 after the last deposit is made.

{{< fillin
  question="At the beginning of each month, \$200 is deposited into a retirement fund. The fund earns $6\%$ annual interest, compounded monthly, and paid into the account at the end of the month. How much is in the account if deposits are made for $10$ years, rounded to the nearest cent? Enter the number only, without a dollar sign."
  answer="32775.87"
  answerForm="decimal"
  answerDisplay="\$32{,}775.87"
  hint="Find $r=1+\tfrac{0.06}{12}$ and $n=120$, then substitute $a_1=200$, $r$, and $n$ into $S_n=\tfrac{a_1(1-r^n)}{1-r}$."
>}}

{{< callout type="info" >}}
  **Media.** Access these online resources for additional instruction and practice with series.
{{< /callout >}}

## Key equations

| sum of the first $n$ terms of an arithmetic series | $S_n=\tfrac{n(a_1+a_n)}{2}$ |
| :--- | :--- |
| sum of the first $n$ terms of a geometric series | $S_n=\tfrac{a_1(1-r^n)}{1-r},\ r\ne1$ |
| sum of an infinite geometric series with $-1<r<1$ | $S_n=\tfrac{a_1}{1-r},\ r\ne1$ |

## Key concepts

- The sum of the terms in a sequence is called a series.
- A common notation for series is summation notation, which uses the Greek letter sigma, $\Sigma$, to represent the sum.
- The sum of the terms in an arithmetic sequence is called an arithmetic series.
- The sum of the first $n$ terms of an arithmetic series can be found using a formula.
- The sum of the terms in a geometric sequence is called a geometric series.
- The sum of the first $n$ terms of a geometric series can be found using a formula.
- The sum of an infinite series exists if the series is geometric with $-1<r<1$.
- If the sum of an infinite series exists, it can be found using a formula.
- An annuity is an account into which the investor makes a series of regularly scheduled payments. The value of an annuity can be found using geometric series.

## Practice

### Use summation notation

{{< fillin
  question="Express the following description of a sum using summation notation: the sum that results from adding the number $4$ five times."
  answer="\sum_{k=1}^{5}4"
  answerForm="summation"
  answerDisplay="$\sum_{k=1}^{5}4$"
  hint="Each term is the constant $4$; write a sigma with lower limit $1$, upper limit $5$, and summand $4$."
>}}

{{< fillin
  question="Express the arithmetic sum $10+18+26+\ldots+162$ using summation notation."
  answer="\sum_{k=1}^{20}(8k+2)"
  answerForm="summation"
  answerDisplay="$\sum_{k=1}^{20}(8k+2)$"
  hint="Find the common difference and the number of terms to write the explicit formula $8k+2$, and enclose it in parentheses after the sigma."
>}}

### Use the formula for the sum of the first $n$ terms of an arithmetic series

{{< fillin
  question="Use the formula for the sum of the first $n$ terms of an arithmetic series to find the sum $3.2+3.4+3.6+\ldots+5.6$."
  answer="57.2"
  answerForm="decimal"
  answerDisplay="$57.2$"
  hint="This series has $a_1=3.2$, $d=0.2$, and $a_n=5.6$; find $n$, then use $S_n=\tfrac{n(a_1+a_n)}{2}$."
>}}

{{< fillin
  question="A boulder rolled down a mountain, traveling $6$ feet in the first second. Each successive second, its distance increased by $8$ feet. How far did the boulder travel after $10$ seconds?"
  answer="420"
  answerForm="decimal"
  answerDisplay="$420$ feet"
  hint="This is an arithmetic series with $a_1=6$ and $d=8$; find $a_{10}$, then use the formula for $S_{10}$."
>}}

{{< fillin
  question="How many terms must be added before the arithmetic series $-1-3-5-7-\ldots$ has a sum less than $-75$?"
  answer="9"
  answerForm="decimal"
  answerDisplay="$9$"
  hint="Write $S_n$ using $a_1=-1$ and $d=-2$ in terms of $n$, then solve the inequality $S_n<-75$ for the smallest whole number $n$."
>}}

### Use the formula for the sum of the first $n$ terms of a geometric series

{{< fillin
  question="Use the formula for the sum of the first $n$ terms of a geometric series to find the sum $9+3+1+\tfrac13+\tfrac19$, as a fraction."
  answer="\tfrac{121}{9}"
  answerForm="fraction"
  answerDisplay="$\tfrac{121}{9}$"
  hint="This geometric series has $a_1=9$, $r=\tfrac13$, and $n=5$; substitute into $S_n=\tfrac{a_1(1-r^n)}{1-r}$."
>}}

{{< fillin
  question="Use the formula for the sum of the first $n$ terms of a geometric series to find $S_7$ for the series $0.4-2+10-50+\ldots$"
  answer="5208.4"
  answerForm="decimal"
  answerDisplay="$5208.4$"
  hint="This series has $a_1=0.4$ and $r=-5$; substitute $a_1$, $r$, and $n=7$ into $S_n=\tfrac{a_1(1-r^n)}{1-r}$."
>}}

### Use the formula for the sum of an infinite geometric series

{{< fillin
  question="Find the sum, if it exists, of the infinite geometric series $2+1.6+1.28+1.024+\ldots$"
  answer="10"
  answerForm="decimal"
  answerDisplay="$10$"
  hint="This series has $a_1=2$ and $r=0.8$; confirm $-1<r<1$, then substitute into $S=\tfrac{a_1}{1-r}$."
>}}

{{< fillin
  question="Find the sum, if it exists, of the infinite geometric series $-1-\tfrac14-\tfrac{1}{16}-\tfrac{1}{64}-\ldots$, as a fraction."
  answer="-\tfrac{4}{3}"
  answerForm="fraction"
  answerDisplay="$-\tfrac43$"
  hint="This series has $a_1=-1$ and $r=\tfrac14$; substitute into $S=\tfrac{a_1}{1-r}$."
>}}

{{< fillin
  question="A pendulum travels a distance of $3$ feet on its first swing. On each successive swing, it travels $\tfrac34$ the distance of the previous swing. What is the total distance traveled by the pendulum when it stops swinging?"
  answer="12"
  answerForm="decimal"
  answerDisplay="$12$ feet"
  hint="The swing distances form an infinite geometric series with $a_1=3$ and $r=\tfrac34$; substitute into $S=\tfrac{a_1}{1-r}$."
>}}

### Solve annuity problems

{{< fillin
  question="Find the value of an annuity with a monthly deposit of \$150, $24$ total deposits, and an interest rate of $3\%$ compounded monthly, rounded to the nearest cent. Enter the number only, without a dollar sign."
  answer="3705.42"
  answerForm="decimal"
  answerDisplay="\$3{,}705.42"
  hint="Find $r=1+\tfrac{0.03}{12}$, then substitute $a_1=150$, $r$, and $n=24$ into $S_n=\tfrac{a_1(1-r^n)}{1-r}$."
>}}

{{< fillin
  question="Karl has two years to save \$10{,}000 to buy a used car when he graduates. To the nearest dollar, what would his monthly deposits need to be if he invests in an account offering a $4.2\%$ annual interest rate that compounds monthly? Enter the number only, without a dollar sign."
  answer="400"
  answerForm="decimal"
  answerDisplay="\$400"
  hint="Find $r=1+\tfrac{0.042}{12}$ and $n=24$, then solve $S_n=\tfrac{a_1(1-r^n)}{1-r}=10{,}000$ for $a_1$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 11.4: Series and Their Notations](https://openstax.org/books/precalculus-2e/pages/11-4-series-and-their-notations) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own two "Objective N" reviews of summation notation and arithmetic-series sums, keyed to Intermediate Algebra 12.1.5 and 12.2.3, each with its own worked example and "Practice Makes Perfect" exercise set, including one exercise whose printed sequence "7, 10, 13, 13, 19,…" repeats a term and cannot be arithmetic as printed) — confirmed against the rendered PDF, page 1124 (true PDF index 1134), where "11.4 Series and Their Notations" and its Learning Objectives begin at the top of the page with no corequisite-skills material before them; the same prepended-block pattern is already logged in this book's errata for earlier chapters, and this section joins that list without needing its own entry, since the flawed exercise lives entirely inside the omitted block and was never transcribed onto this page. Omitted three purely-typographic illustrations: two of summation-notation vocabulary (labelled call-outs pointing arrows from "upper limit of summation," "lower limit of summation," "index of summation," and "explicit formula for $k$th term" to the parts of $\sum_{k=1}^{5}2k$) and one that brackets the first two terms of the repeating-decimal expansion $0.\overline{3}=0.3+(0.1)(0.3)+\ldots$ as "First Term" and "Second Term", since the surrounding prose, transcribed in full, already states each label in words. Kept the "Media" callout's introductory sentence but omitted its three external resource links, matching house precedent elsewhere in this book. Every retained Try It is a real `fillin` or `multiplechoice` component; the four "determine whether the sum of the infinite series is defined" Try Its are posed as multiple choice among the same three categorical outcomes (not geometric; geometric and defined; geometric but not defined) used in the worked example directly above them, since a categorical judgment is not a fill-in answer. Every "evaluate the sum"/"find the sum" fill-in that prints a fully expanded or summation-notation span declares `decimal` or `fraction` (with "as a fraction" stated in the question) so the engine's own evaluation of the printed span cannot pass as a retype; every "write in summation notation" fill-in declares `summation`, with a hint to parenthesize a sum-shaped summand where the source's own key needs it (10+18+26+…+162). Annuity answers are `decimal`, keyed to the source's own rounding (nearest cent or nearest dollar as each problem states), with "enter the number only, without a dollar sign" in the question since a `\$` in a response is invalid to the grading engine; every annuity value was independently computed at full precision and against the source's own stated rounding, and the two rounds agreed in every case used here. The Key Equations table's third row is reproduced as the pinned CNXML prints it — $S_n=\tfrac{a_1}{1-r},\ r\ne1$ under the heading "sum of an infinite geometric series with $-1<r<1$" — even though the module's own body text states the formula as $S=\tfrac{a_1}{1-r}$ (no subscript, since the sum is not a partial sum) with the $-1<r<1$ condition, so the row carries the finite-series boilerplate by copy; the printed book omits this section's Key Equations entirely, so the CNXML row is the only source spelling and it is kept as printed and recorded as a source note rather than silently repaired. Twelve selected end-of-section exercises were adapted into interactive Practice components, one or more groups per objective, every one independently re-derived (including by running the arithmetic in Node) rather than read off the source key; three of them (the boulder, pendulum, and Karl's-car-fund exercises) sit on PDF page 1147, one page past this run's assigned 1134–1146 range, flagged for the parent's awareness since they are still this section's own end-of-section exercises (module m49447, "Extensions" and "Real-World Applications" subsections) rather than the next section's.</small>
