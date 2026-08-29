---
title: Binomial Theorem
description: >-
  Identifying and evaluating binomial coefficients, applying the Binomial
  Theorem to expand a binomial, and using the Binomial Theorem to find a
  single specified term of a binomial expansion without fully expanding it
  — adapted from OpenStax Precalculus 2e, Section 11.6.
source_section: "11.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Apply the Binomial Theorem
{{< /callout >}}

A polynomial with two terms is called a binomial. We have already learned to multiply binomials and to raise binomials to powers, but raising a binomial to a high power can be tedious and time-consuming. In this section, we will discuss a shortcut that will allow us to find $(x+y)^n$ without multiplying the binomial by itself $n$ times.

### Identifying Binomial Coefficients

In Counting Principles, we studied **combinations**. In the shortcut to finding $(x+y)^n$, we will need to use combinations to find the coefficients that will appear in the expansion of the binomial. In this case, we use the notation $\binom{n}{r}$ instead of $C(n,r)$, but it can be calculated in the same way. So

$$\binom{n}{r}=C(n,r)=\tfrac{n!}{r!(n-r)!}$$

The combination $\binom{n}{r}$ is called a **binomial coefficient**. An example of a binomial coefficient is $\binom{5}{2}=C(5,2)=10$.

{{< callout type="info" >}}
  **Binomial Coefficients.** If $n$ and $r$ are integers greater than or equal to $0$ with $n\ge r$, then the binomial coefficient is

  $$\binom{n}{r}=C(n,r)=\tfrac{n!}{r!(n-r)!}$$
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Is a binomial coefficient always a whole number?*

  Yes. Just as the number of combinations must always be a whole number, a binomial coefficient will always be a whole number.
{{< /callout >}}

**Example.** Find each binomial coefficient.

a. $\binom{5}{3}$
b. $\binom{9}{2}$
c. $\binom{9}{7}$

**Solution.** Use the formula to calculate each binomial coefficient. You can also use the $nC_r$ function on your calculator.

$$\binom{n}{r}=C(n,r)=\tfrac{n!}{r!(n-r)!}$$

a. $\binom{5}{3}=\tfrac{5!}{3!(5-3)!}=\tfrac{5\cdot4\cdot3!}{3!2!}=10$
b. $\binom{9}{2}=\tfrac{9!}{2!(9-2)!}=\tfrac{9\cdot8\cdot7!}{2!7!}=36$
c. $\binom{9}{7}=\tfrac{9!}{7!(9-7)!}=\tfrac{9\cdot8\cdot7!}{7!2!}=36$

**Analysis.** Notice that we obtained the same result for parts b and c. If you look closely at the solution for these two parts, you will see that you end up with the same two factorials in the denominator, but the order is reversed, just as with combinations.

$$\binom{n}{r}=\binom{n}{n-r}$$

{{< fillin
  question="Find the binomial coefficient $\binom{7}{3}$."
  answer="35"
  answerDisplay="$35$"
  hint="Use $\binom{n}{r}=\tfrac{n!}{r!(n-r)!}$ with $n=7$ and $r=3$."
>}}

{{< fillin
  question="Find the binomial coefficient $\binom{11}{4}$."
  answer="330"
  answerDisplay="$330$"
  hint="Use $\binom{n}{r}=\tfrac{n!}{r!(n-r)!}$ with $n=11$ and $r=4$."
>}}

### Using the Binomial Theorem

When we expand $(x+y)^n$ by multiplying, the result is called a **binomial expansion**, and it includes binomial coefficients. If we wanted to expand $(x+y)^{52}$, we might multiply $(x+y)$ by itself fifty-two times. This could take hours! If we examine some simple binomial expansions, we can find patterns that will lead us to a shortcut for finding more complicated binomial expansions.

$$
\begin{array}{l}
(x+y)^2=x^2+2xy+y^2 \\
(x+y)^3=x^3+3x^2y+3xy^2+y^3 \\
(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4
\end{array}
$$

First, let's examine the exponents. With each successive term, the exponent for $x$ decreases and the exponent for $y$ increases. The sum of the two exponents is $n$ for each term.

Next, let's examine the coefficients. Notice that the coefficients increase and then decrease in a symmetrical pattern. The coefficients follow a pattern:

$$\binom{n}{0},\binom{n}{1},\binom{n}{2},\ldots,\binom{n}{n}.$$

These patterns lead us to the **Binomial Theorem**, which can be used to expand any binomial.

$$
\begin{array}{lcl}
(x+y)^n &=& \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k \\[4pt]
&=& x^n+\binom{n}{1}x^{n-1}y+\binom{n}{2}x^{n-2}y^2+\cdots+\binom{n}{n-1}xy^{n-1}+y^n
\end{array}
$$

Another way to see the coefficients is to examine the expansion of a binomial in general form, $x+y$, to successive powers 1, 2, 3, and 4.

$$
\begin{array}{l}
(x+y)^1=x+y \\
(x+y)^2=x^2+2xy+y^2 \\
(x+y)^3=x^3+3x^2y+3xy^2+y^3 \\
(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4
\end{array}
$$

Can you guess the next expansion for the binomial $(x+y)^5$?

The table below illustrates the following:

- There are $n+1$ terms in the expansion of $(x+y)^n$.
- The degree (or sum of the exponents) for each term is $n$.
- The powers on $x$ begin with $n$ and decrease to 0.
- The powers on $y$ begin with 0 and increase to $n$.
- The coefficients are symmetric.

| $(x+y)^n$ | Exponent | Pattern | # of Terms |
| :--- | :--- | :--- | :--- |
| $(x+y)^1=x+y$ | $1$ | $1+1$ | $2$ |
| $(x+y)^2=x^2+2xy+y^2$ | $2$ | $2+1$ | $3$ |
| $(x+y)^3=x^3+3x^2y+3xy^2+y^3$ | $3$ | $3+1$ | $4$ |
| $(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4$ | $4$ | $4+1$ | $5$ |
| $(x+y)^n$ | $n$ | $n+1$ | $n+1$ |

For the $n=4$ row, each term's exponents break down as follows:

| Term | $x^4$ | $x^3y$ | $x^2y^2$ | $xy^3$ | $y^4$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Exponent sum | $4+0$ | $3+1$ | $2+2$ | $1+3$ | $0+4$ |
| Exponent on $x$ | $4$ | $3$ | $2$ | $1$ | $0$ |
| Exponent on $y$ | $0$ | $1$ | $2$ | $3$ | $4$ |

To determine the expansion on $(x+y)^5$, we see $n=5$, thus, there will be $5+1=6$ terms. Each term has a combined degree of 5. In descending order for powers of $x$, the pattern is as follows:

- Introduce $x^5$, and then for each successive term reduce the exponent on $x$ by 1 until $x^0=1$ is reached.
- Introduce $y^0=1$, and then increase the exponent on $y$ by 1 until $y^5$ is reached.

$$x^5,\ x^4y,\ x^3y^2,\ x^2y^3,\ xy^4,\ y^5$$

The next expansion would be

$$(x+y)^5=x^5+5x^4y+10x^3y^2+10x^2y^3+5xy^4+y^5.$$

But where do those coefficients come from? The binomial coefficients are symmetric. We can see these coefficients in an array known as Pascal's Triangle, shown below. Pascal didn't invent the triangle. The underlying principles had been developed and written about for over 1500 years, first by the Indian mathematician (and poet) Pingala in the second century BCE. Others throughout Asia and Europe worked with the concepts throughout, and the triangle was first published in its graphical form by Omar Khayyam, an Iranian mathematician and astronomer, for whom the triangle is named in Iran. French mathematician Blaise Pascal repopularized it when he republished it and used it to solve a number of probability problems.

$$
\begin{array}{ccccccccccc}
&&&&&1&&&&& \\
&&&&1&&1&&&& \\
&&&1&&2&&1&&& \\
&&1&&3&&3&&1&& \\
&1&&4&&6&&4&&1& \\
1&&5&&10&&10&&5&&1
\end{array}
$$

To generate Pascal's Triangle, we start by writing a 1. In the row below, row 2, we write two 1's. In the 3rd row, flank the ends of the rows with 1's, and add $1+1$ to find the middle number, 2. In the $n$th row, flank the ends of the row with 1's. Each element in the triangle is the sum of the two elements immediately above it.

To see the connection between Pascal's Triangle and binomial coefficients, let us revisit the expansion of the binomials in general form.

| Pascal's Triangle row | $(x+y)^n$ |
| :--- | :--- |
| $1$ | $(x+y)^0=1$ |
| $1\quad1$ | $(x+y)^1=x+y$ |
| $1\quad2\quad1$ | $(x+y)^2=x^2+2xy+y^2$ |
| $1\quad3\quad3\quad1$ | $(x+y)^3=x^3+3x^2y+3xy^2+y^3$ |
| $1\quad4\quad6\quad4\quad1$ | $(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4$ |
| $1\quad5\quad10\quad10\quad5\quad1$ | $(x+y)^5=x^5+5x^4y+10x^3y^2+10x^2y^3+5xy^4+y^5$ |

{{< callout type="info" >}}
  **The Binomial Theorem.** The Binomial Theorem is a formula that can be used to expand any binomial.

  $$
  \begin{array}{lcl}
  (x+y)^n &=& \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k \\[4pt]
  &=& x^n+\binom{n}{1}x^{n-1}y+\binom{n}{2}x^{n-2}y^2+\cdots+\binom{n}{n-1}xy^{n-1}+y^n
  \end{array}
  $$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a binomial, write it in expanded form.

  1. Determine the value of $n$ according to the exponent.
  2. Evaluate the $k=0$ through $k=n$ terms using the Binomial Theorem formula.
  3. Simplify.
{{< /callout >}}

**Example.** Write in expanded form.

a. $(x+y)^5$
b. $(3x-y)^4$

**Solution.**

a. Substitute $n=5$ into the formula. Evaluate the $k=0$ through $k=5$ terms. Simplify.

   $$
   \begin{array}{lcl}
   (x+y)^5 &=& \binom{5}{0}x^5y^0+\binom{5}{1}x^4y^1+\binom{5}{2}x^3y^2+\binom{5}{3}x^2y^3+\binom{5}{4}x^1y^4+\binom{5}{5}x^0y^5 \\[4pt]
   (x+y)^5 &=& x^5+5x^4y+10x^3y^2+10x^2y^3+5xy^4+y^5
   \end{array}
   $$

b. Substitute $n=4$ into the formula. Evaluate the $k=0$ through $k=4$ terms. Notice that $3x$ is in the place that was occupied by $x$ and that $-y$ is in the place that was occupied by $y$. So we substitute them. Simplify.

   $$
   \begin{array}{lcl}
   (3x-y)^4 &=& \binom{4}{0}(3x)^4(-y)^0+\binom{4}{1}(3x)^3(-y)^1+\binom{4}{2}(3x)^2(-y)^2+\binom{4}{3}(3x)^1(-y)^3+\binom{4}{4}(3x)^0(-y)^4 \\[4pt]
   (3x-y)^4 &=& 81x^4-108x^3y+54x^2y^2-12xy^3+y^4
   \end{array}
   $$

**Analysis.** Notice the alternating signs in part b. This happens because $(-y)$ raised to odd powers is negative, but $(-y)$ raised to even powers is positive. This will occur whenever the binomial contains a subtraction sign.

{{< fillin
  question="Write $(x-y)^5$ in expanded form."
  answer="x^5-5x^4y+10x^3y^2-10x^2y^3+5xy^4-y^5"
  answerForm="expanded"
  answerDisplay="$x^5-5x^4y+10x^3y^2-10x^2y^3+5xy^4-y^5$"
  hint="Substitute $n=5$ into the Binomial Theorem with $-y$ in place of $y$, evaluate the $k=0$ through $k=5$ terms, then simplify."
>}}

{{< fillin
  question="Write $(2x+5y)^3$ in expanded form."
  answer="8x^3+60x^2y+150xy^2+125y^3"
  answerForm="expanded"
  answerDisplay="$8x^3+60x^2y+150xy^2+125y^3$"
  hint="Substitute $n=3$ into the Binomial Theorem with $2x$ in place of $x$ and $5y$ in place of $y$, evaluate the $k=0$ through $k=3$ terms, then simplify."
>}}

### Using the Binomial Theorem to Find a Single Term

Expanding a binomial with a high exponent such as $(x+2y)^{16}$ can be a lengthy process.

Sometimes we are interested only in a certain term of a binomial expansion. We do not need to fully expand a binomial to find a single specific term.

Note the pattern of coefficients in the expansion of $(x+y)^5$.

$$(x+y)^5=x^5+\binom{5}{1}x^4y+\binom{5}{2}x^3y^2+\binom{5}{3}x^2y^3+\binom{5}{4}xy^4+y^5$$

The second term is $\binom{5}{1}x^4y$. The third term is $\binom{5}{2}x^3y^2$. We can generalize this result.

$$\binom{n}{r}x^{n-r}y^r$$

{{< callout type="info" >}}
  **The $(r+1)$th Term of a Binomial Expansion.** The $(r+1)$th term of the binomial expansion of $(x+y)^n$ is

  $$\binom{n}{r}x^{n-r}y^r$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a binomial, write a specific term without fully expanding.

  1. Determine the value of $n$ according to the exponent.
  2. Determine $(r+1)$.
  3. Determine $r$.
  4. Replace $r$ in the formula for the $(r+1)$th term of the binomial expansion.
{{< /callout >}}

**Example.** Find the tenth term of $(x+2y)^{16}$ without fully expanding the binomial.

**Solution.** Because we are looking for the tenth term, $r+1=10$, we will use $r=9$ in our calculations.

$$\binom{n}{r}x^{n-r}y^r$$

$$\binom{16}{9}x^{16-9}(2y)^9=5{,}857{,}280x^7y^9$$

{{< fillin
  question="Find the sixth term of $(3x-y)^9$ without fully expanding the binomial."
  answer="-10206x^4y^5"
  answerDisplay="$-10{,}206x^4y^5$"
  hint="The sixth term has $r+1=6$, so $r=5$; use $\binom{n}{r}x^{n-r}y^r$ with $n=9$, $x=3x$, and $y=-y$."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and
practice with binomial expansion.
{{< /callout >}}

## Key equations

| Binomial Theorem | $(x+y)^n=\sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k$ |
| :--- | :--- |
| $(r+1)$th term of a binomial expansion | $\binom{n}{r}x^{n-r}y^r$ |

## Key concepts

- $\binom{n}{r}$ is called a binomial coefficient and is equal to $C(n,r)$.
- The Binomial Theorem allows us to expand binomials without multiplying.
- We can find a given term of a binomial expansion without fully expanding the binomial.

## Practice

### Apply the Binomial Theorem

{{< fillin
  question="Evaluate the binomial coefficient $\binom{6}{2}$."
  answer="15"
  answerDisplay="$15$"
  hint="Use $\binom{n}{r}=\tfrac{n!}{r!(n-r)!}$ with $n=6$ and $r=2$."
>}}

{{< fillin
  question="Evaluate the binomial coefficient $\binom{17}{6}$."
  answer="12376"
  answerDisplay="$12{,}376$"
  hint="Use $\binom{n}{r}=\tfrac{n!}{r!(n-r)!}$ with $n=17$ and $r=6$; the shared $11!$ cancels before you multiply out the rest."
>}}

{{< fillin
  question="Use the Binomial Theorem to expand $(4a-b)^3$."
  answer="64a^3-48a^2b+12ab^2-b^3"
  answerForm="expanded"
  answerDisplay="$64a^3-48a^2b+12ab^2-b^3$"
  hint="Substitute $n=3$ into the Binomial Theorem with $x=4a$ and $y=-b$, evaluate the $k=0$ through $k=3$ terms, then simplify."
>}}

{{< fillin
  question="Use the Binomial Theorem to write the first three terms of $(a+b)^{17}$."
  answer="a^{17}+17a^{16}b+136a^{15}b^2"
  answerForm="expanded"
  answerDisplay="$a^{17}+17a^{16}b+136a^{15}b^2$"
  hint="Use $\binom{n}{k}x^{n-k}y^k$ for $k=0,1,2$ with $n=17$, $x=a$, and $y=b$."
>}}

{{< fillin
  question="Find the fourth term of $(3x-2y)^5$ without fully expanding the binomial."
  answer="-720x^2y^3"
  answerDisplay="$-720x^2y^3$"
  hint="The fourth term has $r+1=4$, so $r=3$; use $\binom{n}{r}x^{n-r}y^r$ with $n=5$, $x=3x$, and $y=-2y$."
>}}

{{< fillin
  question="In the expansion of $(5x+3y)^n$, each term has the form $\binom{n}{k}(5x)^{n-k}(3y)^k$, where $k$ successively takes on the value $0,1,2,\ldots,n$. If $\binom{n}{k}=\binom{7}{2}$, what is the corresponding term?"
  answer="590625x^5y^2"
  answerDisplay="$590{,}625x^5y^2$"
  hint="Since $\binom{n}{k}=\binom{7}{2}$, take $n=7$ and $k=2$; the term is $\binom{7}{2}(5x)^{7-2}(3y)^2$."
>}}

{{< multiplechoice
  question="Which expression cannot be expanded using the Binomial Theorem?"
  mode="text"
  answer="$(x^3+2y^2-z)^5$"
  hint="The Binomial Theorem expands a two-term expression raised to a power; check whether the base inside each set of parentheses truly has only two terms."
>}}
$(x^2-2x+1)$
$(\sqrt{a}+4\sqrt{a}-5)^8$
$(x^3+2y^2-z)^5$
$(3x^2-\sqrt{2y^3})^{12}$
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 11.6: Binomial Theorem](https://openstax.org/books/precalculus-2e/pages/11-6-binomial-theorem) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Objective 1: Use Pascal's Triangle to expand a binomial" review, keyed to Intermediate Algebra 12.4.1, complete with three worked examples and one "Practice Makes Perfect" exercise set of three items) — confirmed against the rendered PDF, page 1148 (true PDF index 1158), where the previous section's last Real-World Applications exercise (11.5, exercise 54) runs directly into the "11.6 Binomial Theorem" heading with no corequisite-skills material between them; the same prepended-block pattern, including this module by name, is already logged in this book's errata as not a defect (the block belongs to a corequisite title the bundle ships alongside Precalculus). The source's Figure 1 (an image captioned "Pascal's Triangle" but actually a table of the exponent pattern and term count for $(x+y)^1$ through $(x+y)^4$ and $(x+y)^n$, with a breakdown of the $n=4$ row's five terms by exponent sum) is recreated as two Markdown tables rather than as a figure, since it is tabular data, not a diagram; its alt text ("Graph of the function f_2") does not describe a table at all and matches the alt text of a later, unrelated answer graph in this same module's Graphical exercises — a suspected mislabeling, not corrected on the page since no figure is being reproduced. The source's Figure 2 (Pascal's Triangle, six rows) and the uncaptioned media immediately following it (Pascal's Triangle with each row's coefficients pointing to the matching $(x+y)^n$ expansion) are recreated as, respectively, a centered KaTeX array and a two-column Markdown table, per this book's convention of setting "stacked numbers" displays as KaTeX rather than as figures; the red addition-rule annotation arrows drawn on the source's Figure 2 (illustrating $1+2=3$ and $6+4=10$) are not reproduced, since the addition rule they illustrate is already stated in the following paragraph's prose. Kept the "Media" callout's introductory sentence but omitted its two external video links, matching house precedent elsewhere in this book. **Binomial coefficient values are never keyed as `\binom{n}{r}`, `C(n,r)`, `P(n,r)`, or `{}_nC_r`**, since all four parse as invalid or grade incorrect against their own value on the pinned grading engine (confirmed by replay) — every binomial-coefficient and specific-term answer here is a plain number or a simplified monomial with no `answerForm` token, while $\binom{n}{r}$ and $C(n,r)$ notation is displayed freely in questions and worked examples, since only submitted answers are restricted. Every "expand" and "write the first three terms" fill-in keys `answerForm="expanded"`, since the printed power itself reports `form` under that token (confirmed by replay) and the expansion is otherwise passable by retyping the prompt. The two Try Its following the binomial-coefficient and expansion examples are kept as the source poses their two parts, one fill-in per part; the third Try It (a single specific-term ask) is a single fill-in. The Extensions exercise asking "which expression cannot be expanded using the Binomial Theorem" is recast as a `multiplechoice` over the source's own four printed expressions, since a free-form justification cannot be graded as a math expression. Seven selected end-of-section exercises (six numeric fill-ins and one explanatory item recast as multiple choice) were adapted into interactive Practice components under the section's single objective; the section's three in-page Try Its are additionally kept as the source poses them, one component per Try It part. Every retained answer — the seven Practice items and the five Try It parts alike — was independently re-derived, including by running the arithmetic in Node with exact (BigInt) factorial and binomial-expansion arithmetic, rather than read off the source key.</small>
