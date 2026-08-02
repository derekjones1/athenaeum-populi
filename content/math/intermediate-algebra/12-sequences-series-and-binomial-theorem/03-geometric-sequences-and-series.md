---
title: Geometric Sequences and Series
description: >-
  Determine geometric sequences, find their general terms and finite or
  infinite sums, and apply geometric series to consumer spending and annuities.
source_section: "12.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine if a sequence is geometric
- Find the general term (nth term) of a geometric sequence
- Find the sum of the first $n$ terms of a geometric sequence
- Find the sum of an infinite geometric series
- Apply geometric sequences and series in the real world
{{< /callout >}}

## Determine if a sequence is geometric

We are now ready to look at the second special type of sequence, the geometric
sequence.

A sequence is called a **geometric sequence** if the ratio between consecutive
terms is always the same. The ratio between consecutive terms in a geometric
sequence is $r$, the **common ratio**, where $n$ is greater than or equal to
two.

{{< callout type="info" >}}
**Geometric sequence**

A geometric sequence is a sequence where the ratio between consecutive terms
is always the same.

The ratio between consecutive terms, $\tfrac{a_n}{a_{n-1}}$, is $r$, the common
ratio. $n$ is greater than or equal to two.
{{< /callout >}}

Consider these sequences.

$$
\begin{array}{c}
4,\ 12,\ 36,\ 108,\ 324,\ 972,\ldots\\[4pt]
\tfrac{12}{4}=\tfrac{36}{12}=\tfrac{108}{36}=\tfrac{324}{108}
=\tfrac{972}{324}=3\\[8pt]
8,\ 4,\ 2,\ 1,\ \tfrac12,\ \tfrac14,\ldots\\[4pt]
\tfrac48=\tfrac24=\tfrac12=\tfrac{0.5}{1}
=\tfrac{0.25}{0.5}=\tfrac12
\end{array}
$$

**Example 12.21.** Determine if each sequence is geometric. If so, indicate the
common ratio.

(a) $4,8,16,32,64,128,\ldots$

(b) $-2,6,-12,36,-72,216,\ldots$

(c) $27,9,3,1,\tfrac13,\tfrac19,\ldots$

**Solution.** To determine if the sequence is geometric, we find the ratio of
the consecutive terms shown.

(a) Find the ratio of the consecutive terms.

$$
\tfrac84=\tfrac{16}{8}=\tfrac{32}{16}=\tfrac{64}{32}
=\tfrac{128}{64}=2
$$

The sequence is geometric. The common ratio is $r=2$.

(b) Find the ratio of the consecutive terms.

$$
\tfrac{6}{-2}=-3,\qquad
\tfrac{-12}{6}=-2,\qquad
\tfrac{36}{-12}=-3,\qquad
\tfrac{-72}{36}=-2,\qquad
\tfrac{216}{-72}=-3
$$

The sequence is not geometric. There is no common ratio.

(c) Find the ratio of the consecutive terms.

$$
\tfrac9{27}=\tfrac39=\tfrac13
=\tfrac{\frac13}{1}=\tfrac{\frac19}{\frac13}=\tfrac13
$$

The sequence is geometric. The common ratio is $r=\tfrac13$.

{{< multiplechoice question="Determine if the sequence $7,21,63,189,567,1{,}701,\ldots$ is geometric. If so, indicate the common ratio." answer="geometric with common ratio $r=3$" hint="Divide each term by the preceding term." >}}
geometric with common ratio $r=3$
geometric with common ratio $r=\tfrac13$
not geometric
{{< /multiplechoice >}}

{{< multiplechoice question="Determine if the sequence $64,16,4,1,\tfrac14,\tfrac1{16},\ldots$ is geometric. If so, indicate the common ratio." answer="geometric with common ratio $r=\tfrac14$" hint="Divide each term by the preceding term." >}}
geometric with common ratio $r=4$
geometric with common ratio $r=\tfrac14$
not geometric
{{< /multiplechoice >}}

{{< multiplechoice question="Determine if the sequence $2,4,12,48,240,1{,}440,\ldots$ is geometric. If so, indicate the common ratio." answer="not geometric" hint="Compare several ratios of consecutive terms." >}}
geometric with common ratio $r=2$
geometric with common ratio $r=3$
not geometric
{{< /multiplechoice >}}

If we know the first term, $a_1$, and the common ratio, $r$, we can list a
finite number of terms of the sequence.

**Example 12.22.** Write the first five terms of the sequence where the first
term is 3 and the common ratio is $r=-2$.

**Solution.** We start with the first term and multiply it by the common ratio.
Then we multiply that result by the common ratio to get the next term, and so
on.

$$
\begin{array}{ccccc}
a_1&a_2&a_3&a_4&a_5\\[4pt]
3&3(-2)&-6(-2)&12(-2)&-24(-2)\\[4pt]
3&-6&12&-24&48
\end{array}
$$

The sequence is $3,-6,12,-24,48,\ldots$

{{< fillin question="Write the first five terms of the sequence where the first term is $7$ and the common ratio is $r=-3$. Enter the terms separated by commas." answer="7,-21,63,-189,567" answerDisplay="$7,-21,63,-189,567$" hint="Start with $7$ and multiply each term by $-3$." >}}

{{< fillin question="Write the first five terms of the sequence where the first term is $6$ and the common ratio is $r=-4$. Enter the terms separated by commas." answer="6,-24,96,-384,1536" answerDisplay="$6,-24,96,-384,1{,}536$" hint="Start with $6$ and multiply each term by $-4$." >}}

## Find the general term (nth term) of a geometric sequence

Just as we found a formula for the general term of a sequence and an arithmetic
sequence, we can also find a formula for the general term of a geometric
sequence.

Let's write the first few terms of the sequence where the first term is $a_1$
and the common ratio is $r$. We will then look for a pattern.

$$
\begin{array}{ccccc}
a_1&a_2&a_3&a_4&a_5\\[4pt]
a_1&a_1r&a_1r^2&a_1r^3&a_1r^4
\end{array}
$$

As we look for a pattern in the five terms above, we see that each of the terms
starts with $a_1$.

The first term, $a_1$, is not multiplied by any $r$. In the second term, the
$a_1$ is multiplied by $r$. In the third term, the $a_1$ is multiplied by $r$
two times ($r\cdot r$ or $r^2$). In the fourth term, the $a_1$ is multiplied
by $r$ three times ($r\cdot r\cdot r$ or $r^3$) and in the fifth term, the
$a_1$ is multiplied by $r$ four times. In each term, the number of times $a_1$
is multiplied by $r$ is one less than the number of the term. This leads us to
the following.

{{< callout type="info" >}}
**General term (nth term) of a geometric sequence**

The general term of a geometric sequence with first term $a_1$ and the common
ratio $r$ is

$$a_n=a_1r^{n-1}.$$
{{< /callout >}}

We will use this formula in the next example to find the fourteenth term of a
sequence.

**Example 12.23.** Find the fourteenth term of a sequence where the first term
is 64 and the common ratio is $r=\tfrac12$.

**Solution.**

$$
\begin{array}{lrcl}
\text{To find the fourteenth term, }a_{14},\text{ use the formula with }
a_1=64\text{ and }r=\tfrac12.
&a_n&=&a_1r^{n-1}\\[10pt]
\text{Substitute in the values.}
&a_{14}&=&64\left(\tfrac12\right)^{14-1}\\[10pt]
\text{Simplify.}
&a_{14}&=&64\left(\tfrac12\right)^{13}\\[10pt]
&&=&\tfrac1{128}
\end{array}
$$

{{< fillin question="Find the thirteenth term of a sequence where the first term is $81$ and the common ratio is $r=\tfrac13$." answer="\frac{1}{6561}" answerDisplay="$\tfrac1{6{,}561}$" hint="Use $a_n=a_1r^{n-1}$ with $n=13$." >}}

{{< fillin question="Find the twelfth term of a sequence where the first term is $256$ and the common ratio is $r=\tfrac14$." answer="\frac{1}{16384}" answerDisplay="$\tfrac1{16{,}384}$" hint="Use $a_n=a_1r^{n-1}$ with $n=12$." >}}

Sometimes we do not know the common ratio and we must use the given
information to find it before we find the requested term.

**Example 12.24.** Find the twelfth term of the sequence
$3,6,12,24,48,96,\ldots$ Find the general term for the sequence.

**Solution.** To find the twelfth term, we use the formula
$a_n=a_1r^{n-1}$, and so we need to first determine $a_1$ and the common
ratio $r$.

$$
\begin{array}{lrcl}
\text{The first term is three.}&a_1&=&3\\[4pt]
\text{Find the common ratio.}&\tfrac63=\tfrac{12}{6}
=\tfrac{24}{12}=\tfrac{48}{24}=\tfrac{96}{48}&=&2\\[4pt]
\text{The common ratio is }r=2.&&&
\end{array}
$$

To find the twelfth term, $a_{12}$, use the formula with $a_1=3$ and $r=2$.

$$
\begin{array}{lrcl}
&a_n&=&a_1r^{n-1}\\[4pt]
\text{Substitute in the values.}&a_{12}&=&3\cdot2^{12-1}\\[4pt]
\text{Simplify.}&a_{12}&=&3\cdot2^{11}\\[4pt]
&&=&6{,}144
\end{array}
$$

Find the general term.

$$
\begin{array}{lrcl}
&a_n&=&a_1r^{n-1}\\[4pt]
\text{We use the formula with }a_1=3\text{ and }r=2.
&a_n&=&3(2)^{n-1}
\end{array}
$$

{{< fillin question="Find the ninth term of the sequence $6,18,54,162,486,1{,}458,\ldots$." answer="39366" answerDisplay="$a_9=39{,}366$" hint="First find the common ratio, then use $a_n=a_1r^{n-1}$." >}}

{{< fillin question="Find the general term of the sequence $6,18,54,162,486,1{,}458,\ldots$." answer="6\cdot3^{n-1}" answerDisplay="$a_n=6(3)^{n-1}$" hint="Use the first term and common ratio in $a_n=a_1r^{n-1}$." >}}

{{< fillin question="Find the eleventh term of the sequence $7,14,28,56,112,224,\ldots$." answer="7168" answerDisplay="$a_{11}=7{,}168$" hint="First find the common ratio, then use $a_n=a_1r^{n-1}$." >}}

## Find the sum of the first $n$ terms of a geometric sequence

We found the sum of both general sequences and arithmetic sequence. We will now
do the same for geometric sequences. The sum, $S_n$, of the first $n$ terms
of a geometric sequence is written as
$S_n=a_1+a_2+a_3+\cdots+a_n$. We can write this sum by starting with the
first term, $a_1$, and keep multiplying by $r$ to get the next term as:

$$S_n=a_1+a_1r+a_1r^2+\cdots+a_1r^{n-1}.$$

Let's also multiply both sides of the equation by $r$.

$$rS_n=a_1r+a_1r^2+a_1r^3+\cdots+a_1r^n.$$

Next, we subtract these equations. We will see that when we subtract, all but
the first term of the top equation and the last term of the bottom equation
subtract to zero.

$$
\begin{array}{rcl}
S_n&=&a_1+a_1r+a_1r^2+a_1r^3+\cdots+a_1r^{n-1}\\[4pt]
-rS_n&=&\phantom{a_1+{}}-a_1r-a_1r^2-a_1r^3-\cdots-a_1r^{n-1}-a_1r^n\\[4pt]
\hline
S_n-rS_n&=&a_1-a_1r^n
\end{array}
$$

We factor both sides.

$$S_n(1-r)=a_1(1-r^n).$$

To obtain the formula for $S_n$, divide both sides by $(1-r)$.

$$S_n=\frac{a_1(1-r^n)}{1-r}.$$

{{< callout type="info" >}}
**Sum of the first $n$ terms of a geometric series**

The sum, $S_n$, of the first $n$ terms of a geometric sequence is

$$S_n=\frac{a_1(1-r^n)}{1-r},$$

where $a_1$ is the first term and $r$ is the common ratio, and $r$ is not
equal to one.
{{< /callout >}}

We apply this formula in the next example where the first few terms of the
sequence are given. Notice the sum of a geometric sequence typically gets
very large when the common ratio is greater than one.

**Example 12.25.** Find the sum of the first 20 terms of the geometric sequence
$7,14,28,56,112,224,\ldots$

**Solution.** To find the sum, we will use the formula
$S_n=\tfrac{a_1(1-r^n)}{1-r}$. We know $a_1=7$, $r=2$, and $n=20$.

$$
\begin{array}{lrcl}
\text{Knowing }a_1=7,\ r=2,\text{ and }n=20,\text{ use the sum formula.}
&S_n&=&\tfrac{a_1(1-r^n)}{1-r}\\[10pt]
\text{Substitute in the values.}
&S_{20}&=&\tfrac{7(1-2^{20})}{1-2}\\[10pt]
\text{Simplify.}&S_{20}&=&7{,}340{,}025
\end{array}
$$

{{< fillin question="Find the sum of the first 20 terms of the geometric sequence $3,6,12,24,48,96,\ldots$." answer="3145725" answerDisplay="$3{,}145{,}725$" hint="Use $S_n=\tfrac{a_1(1-r^n)}{1-r}$ with $a_1=3$, $r=2$, and $n=20$." >}}

{{< fillin question="Find the sum of the first 20 terms of the geometric sequence $6,18,54,162,486,1{,}458,\ldots$." answer="10460353200" answerDisplay="$10{,}460{,}353{,}200$" hint="Use the finite geometric sum formula with common ratio $3$." >}}

In the next example, we are given the sum in summation notation. While adding
all the terms might be possible, most often it is easiest to use the formula
to find the sum of the first $n$ terms.

To use the formula, we need $r$. We can find it by writing out the first few
terms of the sequence and find their ratio. Another option is to realize that
in summation notation, a sequence is written in the form
$\sum_{i=1}^{k}a(r)^i$, where $r$ is the common ratio.

**Example 12.26.** Find the sum:

$$\sum_{i=1}^{15}2(3)^i.$$

**Solution.** To find the sum, we will use the formula
$S_n=\tfrac{a_1(1-r^n)}{1-r}$, which requires $a_1$ and $r$. We will write
out a few of the terms, so we can get the needed information.

$$
\begin{array}{lrcl}
\text{Write out the first few terms.}
&&&2\cdot3^1,\ 2\cdot3^2,\ 2\cdot3^3,\ldots\\[4pt]
&&&6,\ 18,\ 54,\ldots\\[4pt]
\text{Identify }a_1.&a_1&=&6\\[4pt]
\text{Find the common ratio.}&\tfrac{18}{6}=\tfrac{54}{18}&=&3
\end{array}
$$

The common ratio is $r=3$.

$$
\begin{array}{lrcl}
\text{Knowing }a_1=6,\ r=3,\text{ and }n=15,\text{ use the sum formula.}
&S_n&=&\tfrac{a_1(1-r^n)}{1-r}\\[10pt]
\text{Substitute in the values.}
&S_{15}&=&\tfrac{6(1-3^{15})}{1-3}\\[10pt]
\text{Simplify.}&S_{15}&=&43{,}046{,}718
\end{array}
$$

{{< fillin question="Find the sum $\sum_{i=1}^{15}6(2)^i$." answer="393204" answerDisplay="$393{,}204$" hint="Write the first term, identify the common ratio, and use the finite geometric sum formula." >}}

{{< fillin question="Find the sum $\sum_{i=1}^{10}5(2)^i$." answer="10230" answerDisplay="$10{,}230$" hint="Write the first term, identify the common ratio, and use the finite geometric sum formula." >}}

## Find the sum of an infinite geometric series

If we take a geometric sequence and add the terms, we have a sum that is called
a geometric series. An **infinite geometric series** is an infinite sum whose
first term is $a_1$ and common ratio is $r$ and is written

$$a_1+a_1r+a_1r^2+\cdots+a_1r^{n-1}+\cdots.$$

{{< callout type="info" >}}
**Infinite geometric series**

An infinite geometric series is an infinite sum whose first term is $a_1$ and
common ratio is $r$ and is written

$$a_1+a_1r+a_1r^2+\cdots+a_1r^{n-1}+\cdots.$$
{{< /callout >}}

We know how to find the sum of the first $n$ terms of a geometric series using
the formula, $S_n=\tfrac{a_1(1-r^n)}{1-r}$. But how do we find the sum of an
infinite sum?

Let's look at the infinite geometric series
$3+6+12+24+48+96+\cdots$. Each term gets larger and larger so it makes sense
that the sum of the infinite number of terms gets larger. Let's look at a few
partial sums for this series. We see $a_1=3$ and $r=2$.

$$
\begin{array}{rclcrclcrcl}
S_{10}&=&\tfrac{3(1-2^{10})}{1-2}
&\quad&S_{30}&=&\tfrac{3(1-2^{30})}{1-2}
&\quad&S_{50}&=&\tfrac{3(1-2^{50})}{1-2}\\[10pt]
S_{10}&=&3{,}069
&&S_{30}&=&3{,}221{,}225{,}469
&&S_{50}&\approx&3.38\times10^{15}
\end{array}
$$

As $n$ gets larger and larger, the sum gets larger and larger. This is true
when $|r|\ge1$ and we call the series divergent. We cannot find a sum of an
infinite geometric series when $|r|\ge1$.

Let's look at an infinite geometric series whose common ratio is a fraction
less than one,

$$\tfrac12+\tfrac14+\tfrac18+\tfrac1{16}+\tfrac1{32}+\tfrac1{64}+\cdots.$$

Here the terms get smaller and smaller as $n$ gets larger. Let's look at a few
finite sums for this series. We see $a_1=\tfrac12$ and $r=\tfrac12$.

$$
\begin{array}{rclcrclcrcl}
S_{10}&=&\tfrac{0.5(1-(0.5)^{10})}{1-0.5}
&\quad&S_{20}&=&\tfrac{0.5(1-(0.5)^{20})}{1-0.5}
&\quad&S_{30}&=&\tfrac{0.5(1-(0.5)^{30})}{1-0.5}\\[10pt]
S_{10}&\approx&0.9990234375
&&S_{20}&\approx&0.9999990463
&&S_{30}&\approx&0.9999999991
\end{array}
$$

Notice the sum gets larger and larger but also gets closer and closer to one.
When $|r|<1$, the expression $r^n$ gets smaller and smaller. In this case, we
call the series convergent. As $n$ approaches infinity (gets infinitely
large), $r^n$ gets closer and closer to zero. In our sum formula, we can
replace the $r^n$ with zero and then we get a formula for the sum, $S$, for an
infinite geometric series when $|r|<1$.

$$
\begin{aligned}
S_n&=\frac{a_1(1-r^n)}{1-r}\\
S&=\frac{a_1(1-0)}{1-r}\\
S&=\frac{a_1}{1-r}
\end{aligned}
$$

This formula gives us the sum of the infinite geometric sequence. Notice the
$S$ does not have the subscript $n$ as in $S_n$ as we are not adding a finite
number of terms.

{{< callout type="info" >}}
**Sum of an infinite geometric series**

For an infinite geometric series whose first term is $a_1$ and common ratio
$r$:

- If $|r|<1$, the sum is $S=\tfrac{a_1}{1-r}$.
- If $|r|\ge1$, the infinite geometric series does not have a sum. We say the
  series diverges.
{{< /callout >}}

**Example 12.27.** Find the sum of the infinite geometric series

$$54+18+6+2+\tfrac23+\tfrac29+\cdots.$$

**Solution.** To find the sum, we first have to verify that the common ratio
$|r|<1$ and then we can use the sum formula $S=\tfrac{a_1}{1-r}$.

$$
\begin{array}{lrcl}
\text{Find the common ratio.}
&r=\tfrac{18}{54}&=&\tfrac{6}{18}=\cdots\\[10pt]
&r&=&\tfrac13,\quad |r|<1\\[4pt]
\text{Identify }a_1.&a_1&=&54\\[4pt]
\text{Knowing }a_1=54,\ r=\tfrac13,\text{ use the sum formula.}
&S&=&\tfrac{a_1}{1-r}\\[10pt]
\text{Substitute in the values.}&S&=&\tfrac{54}{1-\tfrac13}\\[10pt]
\text{Simplify.}&S&=&81
\end{array}
$$

{{< fillin question="Find the sum of the infinite geometric series $48+24+12+6+3+\tfrac32+\cdots$." answer="96" answerDisplay="$96$" hint="Verify that $|r|<1$, then use $S=\tfrac{a_1}{1-r}$." >}}

{{< fillin question="Find the sum of the infinite geometric series $64+16+4+1+\tfrac14+\tfrac1{16}+\cdots$." answer="\frac{256}{3}" answerDisplay="$\tfrac{256}{3}$" hint="Verify that $|r|<1$, then use $S=\tfrac{a_1}{1-r}$." >}}

An interesting use of infinite geometric series is to write a repeating decimal
as a fraction.

**Example 12.28.** Write the repeating decimal $0.\overline5$ as a fraction.

**Solution.**

$$
\begin{array}{lrcl}
\text{Rewrite the }0.\overline5\text{ showing the repeating five.}
&&&0.555555555555\ldots\\[4pt]
\text{Use place value to rewrite this as a sum.}
&&&0.5+0.05+0.005+0.0005+\cdots\\[4pt]
\text{This is an infinite geometric series.}&&&\\[4pt]
\text{Find the common ratio.}
&r=\tfrac{0.05}{0.5}&=&\tfrac{0.005}{0.05}=\cdots\\[10pt]
&r&=&0.1,\quad |r|<1\\[4pt]
\text{Identify }a_1.&a_1&=&0.5\\[4pt]
\text{Knowing }a_1=0.5,\ r=0.1,\text{ use the sum formula.}
&S&=&\tfrac{a_1}{1-r}\\[10pt]
\text{Substitute in the values.}&S&=&\tfrac{0.5}{1-0.1}\\[10pt]
\text{Simplify.}&S&=&\tfrac{0.5}{0.9}\\[10pt]
\text{Multiply numerator and denominator by 10.}&S&=&\tfrac59\\[4pt]
\text{We are asked to find the fraction form.}&0.\overline5&=&\tfrac59
\end{array}
$$

{{< fillin question="Write the repeating decimal $0.\overline4$ as a fraction." answer="\frac{4}{9}" answerDisplay="$\tfrac49$" hint="Write the decimal as an infinite geometric series and use its sum formula." >}}

{{< fillin question="Write the repeating decimal $0.\overline8$ as a fraction." answer="\frac{8}{9}" answerDisplay="$\tfrac89$" hint="Write the decimal as an infinite geometric series and use its sum formula." >}}

## Apply geometric sequences and series in the real world

One application of geometric sequences has to do with consumer spending. If a
tax rebate is given to each household, the effect on the economy is many times
the amount of the individual rebate.

**Example 12.29.** The government has decided to give a \$1,000 tax rebate to
each household in order to stimulate the economy. The government statistics say
that each household will spend 80% of the rebate in goods and services. The
businesses and individuals who benefitted from that 80% will then spend 80% of
what they received and so on. The result is called the multiplier effect. What
is the total effect of the rebate on the economy?

**Solution.** Every time money goes into the economy, 80% of it is spent and is
then in the economy to be spent. Again, 80% of this money is spent in the
economy again. This situation continues and so leads us to an infinite
geometric series.

$$1000+1000(0.8)+1000(0.8)^2+\cdots$$

Here the first term is 1,000, $a_1=1000$. The common ratio is $0.8$, $r=0.8$.
We can evaluate this sum since $0.8<1$. We use the formula for the sum of an
infinite geometric series.

$$
\begin{array}{lrcl}
&S&=&\tfrac{a_1}{1-r}\\[10pt]
\text{Substitute in the values, }a_1=1{,}000\text{ and }r=0.8.
&S&=&\tfrac{1{,}000}{1-0.8}\\[10pt]
\text{Evaluate.}&S&=&5{,}000
\end{array}
$$

The total effect of the \$1,000 received by each household will be a \$5,000
growth in the economy.

{{< fillin question="What is the total effect on the economy of a government tax rebate of \$1,000 to each household if each household will spend 90% of the rebate in goods and services?" answer="10000" answerDisplay="$\text{\textdollar}10{,}000$" hint="Model the repeated spending as an infinite geometric series." >}}

{{< fillin question="What is the total effect on the economy of a government tax rebate of \$500 to each household if each household will spend 85% of the rebate in goods and services? Round to the nearest cent." answer="3333.33" answerDisplay="$\text{\textdollar}3{,}333.33$" hint="Use $500$ as the first term and $0.85$ as the common ratio." >}}

We have looked at a compound interest formula where a principal, $P$, is
invested at an interest rate, $r$, for $t$ years. The new balance, $A$, is
$A=P(1+\tfrac rn)^{nt}$ when interest is compounded $n$ times a year. This
formula applies when a lump sum was invested upfront and tells us the value
after a certain time period.

An **annuity** is an investment that is a sequence of equal periodic deposits.
We will be looking at annuities that pay the interest at the time of the
deposits. As we develop the formula for the value of an annuity, we are going
to let $n=1$. That means there is one deposit per year.

$$
\begin{array}{lrcl}
&A&=&P\left(1+\tfrac rn\right)^{nt}\\[10pt]
\text{Let }n=1.&A&=&P\left(1+\tfrac r1\right)^{1t}\\[10pt]
\text{Simplify.}&A&=&P(1+r)^t
\end{array}
$$

Suppose $P$ dollars is invested at the end of each year. One year later that
deposit is worth $P(1+r)^1$ dollars, and another year later it is worth
$P(1+r)^2$ dollars. After $t$ years, it will be worth $A=P(1+r)^t$ dollars.

|  | End of year 1 | End of year 2 | End of year 3 |
|:--|:--:|:--:|:--:|
| First deposit $P$ at end of year 1 | $P$ | Amount 1 year later: $P(1+r)^1$ | Amount 2 years later: $P(1+r)^2$ |
| Second deposit $P$ at end of year 2 |  | $P$ | Amount 1 year later: $P(1+r)^1$ |
| Third deposit $P$ at end of year 3 |  |  | $P$ |

After three years, the value of the annuity is

$$P+P(1+r)^1+P(1+r)^2.$$

This a sum of the terms of a geometric sequence where the first term is $P$
and the common ratio is $1+r$. We substitute these values into the sum
formula. Be careful, we have two different uses of $r$. The $r$ in the sum
formula is the common ratio of the sequence. In this case, that is $1+r$ where
$r$ is the interest rate.

$$
\begin{array}{lrcl}
&S_t&=&\tfrac{a_1(1-r^t)}{1-r}\\[10pt]
\text{Substitute in the values.}
&S_t&=&\tfrac{P(1-(1+r)^t)}{1-(1+r)}\\[10pt]
\text{Simplify.}
&S_t&=&\tfrac{P(1-(1+r)^t)}{-r}\\[10pt]
&&=&\tfrac{P((1+r)^t-1)}{r}
\end{array}
$$

Remember our premise was that one deposit was made at the end of each year.

We can adapt this formula for $n$ deposits made per year and the interest is
compounded $n$ times a year.

{{< callout type="info" >}}
**Value of an annuity with interest compounded $n$ times a year**

For a principal, $P$, invested at the end of a compounding period, with an
interest rate, $r$, which is compounded $n$ times a year, the new balance,
$A_t$, after $t$ years, is

$$
A_t=\frac{P\left(\left(1+\frac rn\right)^{nt}-1\right)}{\frac rn}.
$$
{{< /callout >}}

**Example 12.30.** New parents decide to invest \$100 per month in an annuity
for their baby daughter. The account will pay 5% interest per year which is
compounded monthly. How much will be in the child's account at her eighteenth
birthday?

**Solution.** To find the annuity formula,
$A_t=\tfrac{P((1+\tfrac rn)^{nt}-1)}{\tfrac rn}$, we need to identify $P$, $r$,
$n$, and $t$.

$$
\begin{array}{lrcl}
\text{Identify }P,\text{ the amount invested each month.}&P&=&100\\[4pt]
\text{Identify }r,\text{ the annual interest rate, in decimal form.}&r&=&0.05\\[4pt]
\text{Identify }n,\ \begin{array}{l}
\text{the number of times the deposit will be made and}\\[4pt]
\text{the interest compounded each year.}
\end{array}
&n&=&12\\[4pt]
\text{Identify }t,\text{ the number of years.}&t&=&18\\[4pt]
\text{Knowing }P=100,\ r=0.05,\ n=12,\text{ and }t=18,
\text{ use the sum formula.}
&A_t&=&\tfrac{P((1+\tfrac rn)^{nt}-1)}{\tfrac rn}\\[10pt]
\text{Substitute in the values.}
&A_t&=&\tfrac{100((1+\tfrac{0.05}{12})^{12\cdot18}-1)}
{\tfrac{0.05}{12}}\\[10pt]
\text{Use the calculator to evaluate. Be sure to use parentheses as needed.}
&A_t&=&34{,}920.20
\end{array}
$$

The child will have \$34,920.20 when she turns 18.

{{< fillin question="New grandparents invest \$200 per month in an annuity for their grandson. The account pays 5% interest per year compounded monthly. How much will be in the child's account at his twenty-first birthday? Round to the nearest cent." answer="88868.36" answerDisplay="$\text{\textdollar}88{,}868.36$" hint="Use the annuity formula with $P=200$, $r=0.05$, $n=12$, and $t=21$." >}}

{{< fillin question="Arturo begins investing \$200 per month in an IRA at age 27. The annuity earns 8% interest compounded monthly. How much will be in Arturo's account when he retires at age 67? Round to the nearest cent." answer="698201.57" answerDisplay="$\text{\textdollar}698{,}201.57$" hint="Use the annuity formula with $P=200$, $r=0.08$, $n=12$, and $t=40$." >}}

**Key terms.** A **geometric sequence** has the same ratio between consecutive
terms; this ratio is the **common ratio**. A **geometric series** is the sum of
the terms of a geometric sequence. An **infinite geometric series** is an
infinite sum whose terms form a geometric sequence. A convergent infinite
geometric series has a finite sum; a divergent one does not. An **annuity** is
an investment that is a sequence of equal periodic deposits.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 12.3](https://openstax.org/books/intermediate-algebra-2e/pages/12-3-geometric-sequences-and-series) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: converted the source Try It exercises into interactive questions; omitted the readiness quiz, section exercise set, self-check, and media links in accordance with the authoring playbook; and corrected the opening ratio-3 sequence from $4,12,36,108,432,1728$ to $4,12,36,108,324,972$.</small>
