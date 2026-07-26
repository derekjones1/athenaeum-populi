---
title: Binomial Theorem
description: >-
  Using Pascal's Triangle and the Binomial Theorem to expand binomials,
  evaluate binomial coefficients, and find specific terms in expansions.
source_section: "12.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:** use Pascal's Triangle to
expand a binomial, evaluate a binomial coefficient, and use the Binomial
Theorem to expand a binomial.
{{< /callout >}}

## Use Pascal's Triangle to expand a binomial

In our previous work, we have squared binomials either by using FOIL or by
using the Binomial Squares Pattern. We can also say that we expanded
$(a+b)^2$.

$$(a+b)^2=a^2+2ab+b^2$$

To expand $(a+b)^3$, we recognize that this is $(a+b)^2(a+b)$ and multiply.

$$
\begin{aligned}
(a+b)^3
  &=(a+b)^2(a+b)\\
  &=(a^2+2ab+b^2)(a+b)\\
  &=a^3+2a^2b+ab^2+a^2b+2ab^2+b^3\\
  &=a^3+3a^2b+3ab^2+b^3
\end{aligned}
$$

To find a method that is less tedious that will work for higher expansions
like $(a+b)^7$, we again look for patterns in some expansions.

| Expansion | Number of terms | First term | Last term |
|:--|:--:|:--:|:--:|
| $(a+b)^1=a+b$ | 2 | $a^1$ | $b^1$ |
| $(a+b)^2=a^2+2ab+b^2$ | 3 | $a^2$ | $b^2$ |
| $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ | 4 | $a^3$ | $b^3$ |
| $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$ | 5 | $a^4$ | $b^4$ |
| $(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$ | 6 | $a^5$ | $b^5$ |
| $(a+b)^n$ | $n+1$ | $a^n$ | $b^n$ |

Notice the first and last terms show only one variable. Recall that $a^0=1$,
so we could rewrite the first and last terms to include both variables. For
example, we could expand $(a+b)^3$ to show each term with both variables.

$$(a+b)^3=a^3b^0+3a^2b^1+3a^1b^2+a^0b^3$$

Generally, we don't show the zero exponents, just as we usually write $x$
rather than $1x$.

{{< callout type="info" >}}
**Patterns in the expansion of $(a+b)^n$**

- The number of terms is $n+1$.
- The first term is $a^n$ and the last term is $b^n$.
- The exponents on $a$ decrease by one on each term going left to right.
- The exponents on $b$ increase by one on each term going left to right.
- The sum of the exponents on any term is $n$.
{{< /callout >}}

Let's look at an example to highlight the last three patterns.

$$
(a+b)^5
=a^5+5a^4b^1+10a^3b^2+10a^2b^3+5a^1b^4+b^5
$$

The exponents of $a$ go from $5\to4\to3\to2\to1$. The exponents of $b$ go
from $1\to2\to3\to4\to5$. In each term, the sum of the exponents is 5.

From the patterns we identified, we see the variables in the expansion of
$(a+b)^n$ would be

$$(a+b)^n=a^n+\underline{\phantom{00}}a^{n-1}b^1+
\underline{\phantom{00}}a^{n-2}b^2+\cdots+
\underline{\phantom{00}}a^1b^{n-1}+b^n.$$

To find the coefficients of the terms, we write our expansions again,
focusing on the coefficients. We rewrite the coefficients to the right,
forming an array of coefficients.

$$
\begin{array}{rcl}
(a+b)^0&=&1\\[4pt]
(a+b)^1&=&1a+1b\\[4pt]
(a+b)^2&=&1a^2+2ab+1b^2\\[4pt]
(a+b)^3&=&1a^3+3a^2b+3ab^2+1b^3\\[4pt]
(a+b)^4&=&1a^4+4a^3b+6a^2b^2+4ab^3+1b^4\\[4pt]
(a+b)^5&=&1a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+1b^5
\end{array}
$$

The array to the right is called **Pascal's Triangle**. Notice each number in
the array is the sum of the two closest numbers in the row above. We can find
the next row by starting and ending with one and then adding two adjacent
numbers.

$$
\begin{array}{rrrrrrrrrrrrr}
&&&&&&1\\
&&&&&1&&1\\
&&&&1&&2&&1\\
&&&1&&3&&3&&1\\
&&1&&4&&6&&4&&1\\
&1&&5&&10&&10&&5&&1\\
1&&6&&15&&20&&15&&6&&1
\end{array}
$$

This triangle gives the coefficients of the terms when we expand binomials.

**Pascal's Triangle**

$$
\begin{array}{rrrrrrrrrrrrr}
&&&&&&1\\
&&&&&1&&1\\
&&&&1&&2&&1\\
&&&1&&3&&3&&1\\
&&1&&4&&6&&4&&1\\
&1&&5&&10&&10&&5&&1\\
1&&6&&15&&20&&15&&6&&1
\end{array}
$$

In the next example, we will use this triangle and the patterns we recognized
to expand the binomial.

**Example 12.31.** Use Pascal's Triangle to expand $(x+y)^6$.

**Solution.** We know the variables for this expansion will follow the pattern
we identified. The nonzero exponents of $x$ will start at six and decrease to
one. The nonzero exponents of $y$ will start at one and increase to six. The
sum of the exponents in each term will be six. In our pattern, $a=x$ and
$b=y$.

$$
\begin{aligned}
(a+b)^n
  &=a^n+\underline{\phantom{00}}a^{n-1}b^1+
    \underline{\phantom{00}}a^{n-2}b^2+\cdots+
    \underline{\phantom{00}}a^1b^{n-1}+b^n\\
(x+y)^6
  &=x^6+\underline{\phantom{00}}x^5y^1+
    \underline{\phantom{00}}x^4y^2+
    \underline{\phantom{00}}x^3y^3+
    \underline{\phantom{00}}x^2y^4+
    \underline{\phantom{00}}x^1y^5+y^6
\end{aligned}
$$

To find the coefficients, we go to Pascal's Triangle and read off the
coefficients from the row whose second entry is $n$, in this case, 6.

$$
\begin{aligned}
(x+y)^6
 &=1x^6+6x^5y^1+15x^4y^2+20x^3y^3+15x^2y^4+6x^1y^5+1y^6\\
 &=x^6+6x^5y+15x^4y^2+20x^3y^3+15x^2y^4+6xy^5+y^6
\end{aligned}
$$

{{< fillin
  question="Use Pascal's Triangle to expand $(x+y)^5$."
  answer="x^5+5x^4y+10x^3y^2+10x^2y^3+5xy^4+y^5"
  answerDisplay="$x^5+5x^4y+10x^3y^2+10x^2y^3+5xy^4+y^5$"
  hint="Use the row of Pascal's Triangle whose second entry is $5$."
>}}

{{< fillin
  question="Use Pascal's Triangle to expand $(p+q)^7$."
  answer="p^7+7p^6q+21p^5q^2+35p^4q^3+35p^3q^4+21p^2q^5+7pq^6+q^7"
  answerDisplay="$p^7+7p^6q+21p^5q^2+35p^4q^3+35p^3q^4+21p^2q^5+7pq^6+q^7$"
  hint="Use the row of Pascal's Triangle whose second entry is $7$."
>}}

In the next example we want to expand a binomial with one variable and one
constant. We need to identify the $a$ and $b$ to carefully apply the pattern.

**Example 12.32.** Use Pascal's Triangle to expand $(x+3)^5$.

**Solution.** We identify the $a$ and $b$ of the pattern.

$$
\begin{array}{c}
(a+b)^n\\
(x+3)^5
\end{array}
$$

In our pattern, $a=x$ and $b=3$. We know the variables for this expansion will
follow the pattern we identified. The sum of the exponents in each term will
be five.

$$
\begin{aligned}
(a+b)^n
  &=a^n+\underline{\phantom{00}}a^{n-1}b^1+
    \underline{\phantom{00}}a^{n-2}b^2+\cdots+
    \underline{\phantom{00}}a^1b^{n-1}+b^n\\
(x+3)^5
  &=x^5+\underline{\phantom{00}}x^4\cdot3^1+
    \underline{\phantom{00}}x^3\cdot3^2+
    \underline{\phantom{00}}x^2\cdot3^3+
    \underline{\phantom{00}}x^1\cdot3^4+3^5
\end{aligned}
$$

To find the coefficients, we go to Pascal's Triangle and read off the
coefficients from the row whose second entry is $n$, in this case, 5.

$$
\begin{aligned}
(x+3)^5
 &=1x^5+5\cdot3x^4+10\cdot9x^3+10\cdot27x^2+5\cdot81x+1\cdot243\\
 &=x^5+15x^4+90x^3+270x^2+405x+243
\end{aligned}
$$

{{< fillin
  question="Use Pascal's Triangle to expand $(x+2)^4$."
  answer="x^4+8x^3+24x^2+32x+16"
  answerDisplay="$x^4+8x^3+24x^2+32x+16$"
  hint="Use the coefficients $1,4,6,4,1$ and powers of $2$."
>}}

{{< fillin
  question="Use Pascal's Triangle to expand $(x+1)^6$."
  answer="x^6+6x^5+15x^4+20x^3+15x^2+6x+1"
  answerDisplay="$x^6+6x^5+15x^4+20x^3+15x^2+6x+1$"
  hint="Use the row of Pascal's Triangle whose second entry is $6$."
>}}

In the next example, the binomial is a difference and the first term has a
constant times the variable. Once we identify the $a$ and $b$ of the pattern,
we must once again carefully apply the pattern.

**Example 12.33.** Use Pascal's Triangle to expand $(3x-2)^4$.

**Solution.** We identify the $a$ and $b$ of the pattern.

$$
\begin{array}{c}
(a+b)^n\\
(3x-2)^4
\end{array}
$$

In our pattern, $a=3x$ and $b=-2$. To find the coefficients, we go to
Pascal's Triangle and read off the coefficients from the row whose second
entry is $n$, in this case, 4.

$$
\begin{aligned}
(a+b)^n
 &=a^n+\underline{\phantom{00}}a^{n-1}b^1+
   \underline{\phantom{00}}a^{n-2}b^2+\cdots+
   \underline{\phantom{00}}a^1b^{n-1}+b^n\\
(3x-2)^4
 &=1(3x)^4+4(3x)^3(-2)^1+6(3x)^2(-2)^2+
   4(3x)^1(-2)^3+1(-2)^4\\
 &=81x^4+4(27x^3)(-2)+6(9x^2)(4)+4(3x)(-8)+1\cdot16\\
 &=81x^4-216x^3+216x^2-96x+16
\end{aligned}
$$

{{< fillin
  question="Use Pascal's Triangle to expand $(2x-3)^4$."
  answer="16x^4-96x^3+216x^2-216x+81"
  answerDisplay="$16x^4-96x^3+216x^2-216x+81$"
  hint="In the pattern, use $a=2x$ and $b=-3$."
>}}

{{< fillin
  question="Use Pascal's Triangle to expand $(2x-1)^6$."
  answer="64x^6-192x^5+240x^4-160x^3+60x^2-12x+1"
  answerDisplay="$64x^6-192x^5+240x^4-160x^3+60x^2-12x+1$"
  hint="In the pattern, use $a=2x$ and $b=-1$."
>}}

## Evaluate a binomial coefficient

While Pascal's Triangle is one method to expand a binomial, we will also look
at another method. Before we get to that, we need to introduce some more
factorial notation. This notation is not only used to expand binomials, but
also in the study and use of probability.

To find the coefficients of the terms of expanded binomials, we will need to
be able to evaluate the notation $\binom{n}{r}$, which is called a **binomial
coefficient**. We read $\binom{n}{r}$ as “$n$ choose $r$” or “$n$ taken $r$
at a time.”

{{< callout type="info" >}}
**Binomial coefficient**

A binomial coefficient $\binom{n}{r}$, where $r$ and $n$ are integers with
$0\le r\le n$, is defined as

$$\binom{n}{r}=\frac{n!}{r!(n-r)!}.$$

We read $\binom{n}{r}$ as “$n$ choose $r$” or “$n$ taken $r$ at a time.”
{{< /callout >}}

**Example 12.34.** Evaluate: (a) $\binom{5}{1}$, (b) $\binom{7}{7}$,
(c) $\binom{4}{0}$, (d) $\binom{8}{5}$.

**Solution.**

(a) We will use the definition of a binomial coefficient,
$\binom{n}{r}=\tfrac{n!}{r!(n-r)!}$.

$$
\begin{aligned}
\binom{5}{1}
 &=\frac{5!}{1!(5-1)!}\\
 &=\frac{5!}{1!(4)!}\\
 &=\frac{5\cdot4!}{1\cdot4!}\\
 &=5
\end{aligned}
$$

Thus, $\binom{5}{1}=5$.

(b)

$$
\begin{aligned}
\binom{7}{7}
 &=\frac{7!}{7!(7-7)!}\\
 &=\frac{7!}{7!(0)!}\\
 &=1
\end{aligned}
$$

Remember, $0!=1$. Thus, $\binom{7}{7}=1$.

(c)

$$
\begin{aligned}
\binom{4}{0}
 &=\frac{4!}{0!(4-0)!}\\
 &=\frac{4!}{0!(4)!}\\
 &=1
\end{aligned}
$$

Thus, $\binom{4}{0}=1$.

(d)

$$
\begin{aligned}
\binom{8}{5}
 &=\frac{8!}{5!(8-5)!}\\
 &=\frac{8!}{5!(3)!}\\
 &=\frac{8\cdot7\cdot6\cdot5!}{5!\cdot3\cdot2\cdot1}\\
 &=56
\end{aligned}
$$

Thus, $\binom{8}{5}=56$.

{{< fillin question="Evaluate $\binom{6}{1}$." answer="6" answerDisplay="$6$" hint="Use $\binom{n}{1}=n$." >}}

{{< fillin question="Evaluate $\binom{8}{8}$." answer="1" answerDisplay="$1$" hint="Use the definition and remember $0!=1$." >}}

{{< fillin question="Evaluate $\binom{5}{0}$." answer="1" answerDisplay="$1$" hint="Use the definition and remember $0!=1$." >}}

In the previous example, parts (a), (b), and (c) demonstrate some special
properties of binomial coefficients.

{{< callout type="info" >}}
**Properties of binomial coefficients**

$$\binom{n}{1}=n,\qquad \binom{n}{n}=1,\qquad \binom{n}{0}=1.$$
{{< /callout >}}

## Use the Binomial Theorem to expand a binomial

We are now ready to use the alternate method of expanding binomials. The
**Binomial Theorem** uses the same pattern for the variables, but uses the
binomial coefficient for the coefficient of each term.

{{< callout type="info" >}}
**Binomial Theorem**

For any real numbers $a$ and $b$, and positive integer $n$,

$$
(a+b)^n=
\binom{n}{0}a^n+
\binom{n}{1}a^{n-1}b^1+
\binom{n}{2}a^{n-2}b^2+\cdots+
\binom{n}{r}a^{n-r}b^r+\cdots+
\binom{n}{n}b^n.
$$
{{< /callout >}}

**Example 12.35.** Use the Binomial Theorem to expand $(p+q)^4$.

**Solution.** We identify the $a$ and $b$ of the pattern.

$$
\begin{array}{c}
(a+b)^n\\
(p+q)^4
\end{array}
$$

In our pattern, $a=p$ and $b=q$. We use the Binomial Theorem.

$$
(a+b)^n=
\binom{n}{0}a^n+
\binom{n}{1}a^{n-1}b^1+
\binom{n}{2}a^{n-2}b^2+\cdots+
\binom{n}{r}a^{n-r}b^r+\cdots+
\binom{n}{n}b^n
$$

Substitute in the values $a=p$, $b=q$, and $n=4$.

$$
(p+q)^4=
\binom{4}{0}p^4+
\binom{4}{1}p^{4-1}q^1+
\binom{4}{2}p^{4-2}q^2+
\binom{4}{3}p^{4-3}q^3+
\binom{4}{4}q^4
$$

Simplify the exponents.

$$
(p+q)^4=
\binom{4}{0}p^4+
\binom{4}{1}p^3q+
\binom{4}{2}p^2q^2+
\binom{4}{3}pq^3+
\binom{4}{4}q^4
$$

Evaluate the coefficients. Remember,
$\binom{n}{1}=n$, $\binom{n}{n}=1$, and $\binom{n}{0}=1$.

$$
\begin{aligned}
(p+q)^4
 &=1p^4+4p^3q+\frac{4!}{2!(2)!}p^2q^2+
   \frac{4!}{3!(4-3)!}pq^3+1q^4\\
 &=p^4+4p^3q+6p^2q^2+4pq^3+q^4
\end{aligned}
$$

{{< fillin
  question="Use the Binomial Theorem to expand $(x+y)^5$."
  answer="x^5+5x^4y+10x^3y^2+10x^2y^3+5xy^4+y^5"
  answerDisplay="$x^5+5x^4y+10x^3y^2+10x^2y^3+5xy^4+y^5$"
  hint="Use the binomial coefficients $\binom{5}{r}$."
>}}

{{< fillin
  question="Use the Binomial Theorem to expand $(m+n)^6$."
  answer="m^6+6m^5n+15m^4n^2+20m^3n^3+15m^2n^4+6mn^5+n^6"
  answerDisplay="$m^6+6m^5n+15m^4n^2+20m^3n^3+15m^2n^4+6mn^5+n^6$"
  hint="Use the binomial coefficients $\binom{6}{r}$."
>}}

Notice that when we expanded $(p+q)^4$ in the last example, using the
Binomial Theorem, we got the same coefficients we would get from using
Pascal's Triangle.

$$
\begin{aligned}
(p+q)^4
 &=\binom{4}{0}p^4+\binom{4}{1}p^3q+
   \binom{4}{2}p^2q^2+\binom{4}{3}pq^3+\binom{4}{4}q^4\\
 &=p^4+4p^3q+6p^2q^2+4pq^3+q^4
\end{aligned}
$$

The next example, the binomial is a difference. When the binomial is a
difference, we must be careful in identifying the values we will use in the
pattern.

**Example 12.36.** Use the Binomial Theorem to expand $(x-2)^5$.

**Solution.** We identify the $a$ and $b$ of the pattern.

$$
\begin{array}{c}
(a+b)^n\\
(x-2)^5
\end{array}
$$

In our pattern, $a=x$ and $b=-2$. We use the Binomial Theorem.

$$
(a+b)^n=
\binom{n}{0}a^n+
\binom{n}{1}a^{n-1}b^1+
\binom{n}{2}a^{n-2}b^2+\cdots+
\binom{n}{r}a^{n-r}b^r+\cdots+
\binom{n}{n}b^n
$$

Substitute in the values $a=x$, $b=-2$, and $n=5$.

$$
(x-2)^5=
\binom{5}{0}x^5+
\binom{5}{1}x^{5-1}(-2)^1+
\binom{5}{2}x^{5-2}(-2)^2+
\binom{5}{3}x^{5-3}(-2)^3+
\binom{5}{4}x^{5-4}(-2)^4+
\binom{5}{5}(-2)^5
$$

Simplify the exponents and evaluate the coefficients. Remember,
$\binom{n}{1}=n$, $\binom{n}{n}=1$, and $\binom{n}{0}=1$.

$$
\begin{aligned}
(x-2)^5
 &=\binom{5}{0}x^5+\binom{5}{1}x^4(-2)+
   \binom{5}{2}x^3(-2)^2+\binom{5}{3}x^2(-2)^3+
   \binom{5}{4}x(-2)^4+\binom{5}{5}(-2)^5\\
 &=1x^5+5(-2)x^4+\frac{5!}{2!3!}(-2)^2x^3+
   \frac{5!}{3!2!}(-2)^3x^2+
   \frac{5!}{4!1!}(-2)^4x+1(-2)^5\\
 &=x^5+5(-2)x^4+10\cdot4x^3+10(-8)x^2+5\cdot16x+1(-32)\\
 &=x^5-10x^4+40x^3-80x^2+80x-32
\end{aligned}
$$

{{< fillin
  question="Use the Binomial Theorem to expand $(x-3)^5$."
  answer="x^5-15x^4+90x^3-270x^2+405x-243"
  answerDisplay="$x^5-15x^4+90x^3-270x^2+405x-243$"
  hint="In the pattern, use $a=x$ and $b=-3$."
>}}

{{< fillin
  question="Use the Binomial Theorem to expand $(y-1)^6$."
  answer="y^6-6y^5+15y^4-20y^3+15y^2-6y+1"
  answerDisplay="$y^6-6y^5+15y^4-20y^3+15y^2-6y+1$"
  hint="In the pattern, use $a=y$ and $b=-1$."
>}}

Things can get messy when both terms have a coefficient and a variable.

**Example 12.37.** Use the Binomial Theorem to expand $(2x-3y)^4$.

**Solution.** We identify the $a$ and $b$ of the pattern.

$$
\begin{array}{c}
(a+b)^n\\
(2x-3y)^4
\end{array}
$$

In our pattern, $a=2x$ and $b=-3y$. We use the Binomial Theorem.

$$
(a+b)^n=
\binom{n}{0}a^n+
\binom{n}{1}a^{n-1}b^1+
\binom{n}{2}a^{n-2}b^2+\cdots+
\binom{n}{r}a^{n-r}b^r+\cdots+
\binom{n}{n}b^n
$$

Substitute in the values $a=2x$, $b=-3y$, and $n=4$.

$$
(2x-3y)^4=
\binom{4}{0}(2x)^4+
\binom{4}{1}(2x)^{4-1}(-3y)^1+
\binom{4}{2}(2x)^{4-2}(-3y)^2+
\binom{4}{3}(2x)^{4-3}(-3y)^3+
\binom{4}{4}(-3y)^4
$$

Simplify the exponents.

$$
(2x-3y)^4=
\binom{4}{0}(2x)^4+
\binom{4}{1}(2x)^3(-3y)^1+
\binom{4}{2}(2x)^2(-3y)^2+
\binom{4}{3}(2x)^1(-3y)^3+
\binom{4}{4}(-3y)^4
$$

Evaluate the coefficients. Remember,
$\binom{n}{1}=n$, $\binom{n}{n}=1$, and $\binom{n}{0}=1$.

$$
\begin{aligned}
(2x-3y)^4
 &=1(2x)^4+4(2x)^3(-3y)^1+
   \frac{4!}{2!(2)!}(2x)^2(-3y)^2+
   \frac{4!}{3!(4-3)!}(2x)^1(-3y)^3+1(-3y)^4\\
 &=16x^4+4\cdot8x^3(-3y)+6(4x^2)(9y^2)+
   4(2x)(-27y^3)+81y^4\\
 &=16x^4-96x^3y+216x^2y^2-216xy^3+81y^4
\end{aligned}
$$

{{< fillin
  question="Use the Binomial Theorem to expand $(3x-2y)^5$."
  answer="243x^5-810x^4y+1080x^3y^2-720x^2y^3+240xy^4-32y^5"
  answerDisplay="$243x^5-810x^4y+1080x^3y^2-720x^2y^3+240xy^4-32y^5$"
  hint="In the pattern, use $a=3x$ and $b=-2y$."
>}}

{{< fillin
  question="Use the Binomial Theorem to expand $(4x-3y)^4$."
  answer="256x^4-768x^3y+864x^2y^2-432xy^3+81y^4"
  answerDisplay="$256x^4-768x^3y+864x^2y^2-432xy^3+81y^4$"
  hint="In the pattern, use $a=4x$ and $b=-3y$."
>}}

The real beauty of the Binomial Theorem is that it gives a formula for any
particular term of the expansion without having to compute the whole sum.
Let's look for a pattern in the Binomial Theorem.

$$
(a+b)^n=
\underbrace{\binom{n}{0}a^nb^0}_{\text{1st term}}+
\underbrace{\binom{n}{1}a^{n-1}b^1}_{\text{2nd term}}+
\underbrace{\binom{n}{2}a^{n-2}b^2}_{\text{3rd term}}+\cdots+
\underbrace{\binom{n}{r}a^{n-r}b^r}_{(r+1)\text{st term}}+\cdots+
\binom{n}{n}b^n
$$

Notice that, in each case, the exponent on the $b$ is one less than the
number of the term. The $(r+1)$st term is the term where the exponent of $b$
is $r$. So we can use the formula of the $(r+1)$st term to find the value of
a specific term.

{{< callout type="info" >}}
**Find a specific term in a binomial expansion**

The $(r+1)$st term in the expansion of $(a+b)^n$ is

$$\binom{n}{r}a^{n-r}b^r.$$
{{< /callout >}}

**Example 12.38.** Find the fourth term of $(x+y)^7$.

**Solution.** In our pattern, $n=7$, $a=x$, and $b=y$. We are looking for the
fourth term. Since $r+1=4$, then $r=3$.

Write the formula and substitute in the values $n=7$, $r=3$, $a=x$, and
$b=y$.

$$
\begin{aligned}
\binom{n}{r}a^{n-r}b^r
 &=\binom{7}{3}x^{7-3}y^3\\
 &=\frac{7!}{3!4!}x^{7-3}y^3\\
 &=\frac{7\cdot6\cdot5\cdot4!}{4!\cdot3\cdot2\cdot1}x^4y^3\\
 &=35x^4y^3
\end{aligned}
$$

{{< fillin question="Find the third term of $(x+y)^6$." answer="15x^4y^2" answerDisplay="$15x^4y^2$" hint="For the third term, use $r=2$." >}}

{{< fillin question="Find the fifth term of $(a+b)^8$." answer="70a^4b^4" answerDisplay="$70a^4b^4$" hint="For the fifth term, use $r=4$." >}}

**Example 12.39.** Find the coefficient of the $x^6$ term of $(x+3)^9$.

**Solution.** In our pattern, $n=9$, $a=x$, and $b=3$. We are looking for
the coefficient of the $x^6$ term. Since $a=x$, and $x^{9-r}=x^6$, we know
$r=3$.

Write the formula and substitute in the values $n=9$, $r=3$, $a=x$, and
$b=3$.

$$
\begin{aligned}
\binom{n}{r}a^{n-r}b^r
 &=\binom{9}{3}x^{9-3}\cdot3^3\\
 &=\frac{9!}{3!6!}x^{9-3}\cdot3^3\\
 &=\frac{9\cdot8\cdot7\cdot6!}{3!\cdot6!}x^6\cdot27\\
 &=84\cdot27\cdot x^6\\
 &=2268x^6
\end{aligned}
$$

The coefficient of the $x^6$ term is 2268.

{{< fillin question="Find the coefficient of the $x^5$ term of $(x+4)^8$." answer="3584" answerDisplay="$3{,}584$" hint="Solve $8-r=5$ and evaluate the resulting coefficient." >}}

{{< fillin question="Find the coefficient of the $x^4$ term of $(x+2)^7$." answer="280" answerDisplay="$280$" hint="Solve $7-r=4$ and evaluate the resulting coefficient." >}}

**Key terms.** A **binomial coefficient** $\binom{n}{r}$ is
$\tfrac{n!}{r!(n-r)!}$. The **Binomial Theorem** gives the expansion of
$(a+b)^n$ using binomial coefficients. **Pascal's Triangle** is the triangular
array in which each interior number is the sum of the two numbers above it;
its rows give the coefficients in binomial expansions.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 12.4](https://openstax.org/books/intermediate-algebra-2e/pages/12-4-binomial-theorem) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: converted the source Try It exercises into interactive questions and omitted the readiness quiz, section exercise set, self-check, and media links in accordance with the authoring playbook.</small>
