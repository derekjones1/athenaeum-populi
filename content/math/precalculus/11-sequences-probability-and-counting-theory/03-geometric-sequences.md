---
title: Geometric Sequences
description: >-
  Finding the common ratio of a geometric sequence, listing its terms, and
  using recursive and explicit formulas to find any term of the sequence,
  including in application problems — adapted from OpenStax Precalculus 2e,
  Section 11.3.
source_section: "11.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the common ratio for a geometric sequence.
- List the terms of a geometric sequence.
- Use a recursive formula for a geometric sequence.
- Use an explicit formula for a geometric sequence.
{{< /callout >}}

Many jobs offer an annual cost-of-living increase to keep salaries consistent with inflation. Suppose, for example, a recent college graduate finds a position as a sales manager earning an annual salary of \$26,000. He is promised a 2% cost of living increase each year. His annual salary in any given year can be found by multiplying his salary from the previous year by 102%. His salary will be \$26,520 after one year; \$27,050.40 after two years; \$27,591.41 after three years; and so on. When a salary increases by a constant rate each year, the salary grows by a constant factor. In this section, we will review sequences that grow in this way.

### Finding Common Ratios

The yearly salary values described form a **geometric sequence** because they change by a constant factor each year. Each term of a geometric sequence increases or decreases by a constant factor called the **common ratio**. The sequence below is an example of a geometric sequence because each term increases by a constant factor of 6. Multiplying any term of the sequence by the common ratio 6 generates the subsequent term.

$$1\xrightarrow{\ \times6\ }6\xrightarrow{\ \times6\ }36\xrightarrow{\ \times6\ }216\xrightarrow{\ \times6\ }1{,}296,\ldots$$

{{< callout type="info" >}}
  **Definition of a Geometric Sequence.** A **geometric sequence** is one in which any term divided by the previous term is a constant. This constant is called the **common ratio** of the sequence. The common ratio can be found by dividing any term in the sequence by the previous term. If $a_1$ is the initial term of a geometric sequence and $r$ is the common ratio, the sequence will be

  $$\{a_1,a_1r,a_1r^2,a_1r^3,\ldots\}.$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a set of numbers, determine if they represent a geometric sequence.

  1. Divide each term by the previous term.
  2. Compare the quotients. If they are the same, a common ratio exists and the sequence is geometric.
{{< /callout >}}

**Example.** Is the sequence geometric? If so, find the common ratio.

a. $1,2,4,8,16,\ldots$
b. $48,12,4,2,\ldots$

**Solution.** Divide each term by the previous term to determine whether a common ratio exists.

a. $$\tfrac{2}{1}=2\qquad\tfrac{4}{2}=2\qquad\tfrac{8}{4}=2\qquad\tfrac{16}{8}=2$$

   The sequence is geometric because there is a common ratio. The common ratio is $2$.

b. $$\tfrac{12}{48}=\tfrac{1}{4}\qquad\tfrac{4}{12}=\tfrac{1}{3}\qquad\tfrac{2}{4}=\tfrac{1}{2}$$

   The sequence is not geometric because there is not a common ratio.

**Analysis.** The graph of each sequence is shown below. It seems from the graphs that both (a) and (b) appear to have the form of the graph of an exponential function in this viewing window. However, we know that (a) is geometric and so this interpretation holds, but (b) is not.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a geometric sequence, labeled (a): (1, 1), (2, 2), (3, 4), (4, 8), and (5, 16), rising steeply as n increases.","xMin":0,"xMax":6,"yMin":0,"yMax":20,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"unit":44,"yUnit":10,"yGridStep":4,"yTickStep":4,"points":[{"at":[1,1]},{"at":[2,2]},{"at":[3,4]},{"at":[4,8]},{"at":[5,16]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of four points showing a non-geometric sequence, labeled (b): (1, 48), (2, 12), (3, 4), and (4, 2), dropping sharply as n increases.","xMin":0,"xMax":6,"yMin":0,"yMax":60,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"unit":44,"yUnit":4,"yGridStep":12,"yTickStep":12,"points":[{"at":[1,48]},{"at":[2,12]},{"at":[3,4]},{"at":[4,2]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *If you are told that a sequence is geometric, do you have to divide every term by the previous term to find the common ratio?*

  No. If you know that the sequence is geometric, you can choose any one term in the sequence and divide it by the previous term to find the common ratio.
{{< /callout >}}

{{< multiplechoice
  question="Is the sequence $5,10,15,20,\ldots$ geometric?"
  mode="text"
  answer="not geometric"
  hint="Divide the second term by the first, then the third term by the second; a geometric sequence needs the same quotient every time."
>}}
geometric
not geometric
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the sequence $100,20,4,\tfrac{4}{5},\ldots$ geometric?"
  mode="text"
  answer="geometric"
  hint="Divide each term by the previous term and check whether the quotient stays the same."
>}}
geometric
not geometric
{{< /multiplechoice >}}

{{< fillin
  question="Find the common ratio of the geometric sequence $100,20,4,\tfrac{4}{5},\ldots$, as a fraction."
  answer="\tfrac{1}{5}"
  answerForm="fraction"
  answerDisplay="$\tfrac{1}{5}$"
  hint="Divide the second term by the first term."
>}}

### Writing Terms of Geometric Sequences

Now that we can identify a geometric sequence, we will learn how to find the terms of a geometric sequence if we are given the first term and the common ratio. The terms of a geometric sequence can be found by beginning with the first term and multiplying by the common ratio repeatedly. For instance, if the first term of a geometric sequence is $a_1=-2$ and the common ratio is $r=4$, we can find subsequent terms by multiplying $-2\cdot4$ to get $-8$ then multiplying the result $-8\cdot4$ to get $-32$ and so on.

$$
\begin{array}{lrcl}
& a_1 &=& -2 \\[4pt]
& a_2 &=& (-2\cdot4)=-8 \\[4pt]
& a_3 &=& (-8\cdot4)=-32 \\[4pt]
& a_4 &=& (-32\cdot4)=-128
\end{array}
$$

The first four terms are $-2,-8,-32,-128$.

{{< callout type="info" >}}
  **How To:** given the first term and the common factor, find the first four terms of a geometric sequence.

  1. Multiply the initial term, $a_1$, by the common ratio to find the next term, $a_2$.
  2. Repeat the process, using $a_2$ to find $a_3$ and then $a_3$ to find $a_4$, until all four terms have been identified.
  3. Write the terms separated by commas within brackets.
{{< /callout >}}

**Example.** List the first four terms of the geometric sequence with $a_1=5$ and $r=-2$.

**Solution.** Multiply $a_1$ by $-2$ to find $a_2$. Repeat the process, using $a_2$ to find $a_3$, and so on.

$$
\begin{array}{lrcl}
& a_1 &=& 5 \\[4pt]
& a_2 &=& -2a_1=-10 \\[4pt]
& a_3 &=& -2a_2=20 \\[4pt]
& a_4 &=& -2a_3=-40
\end{array}
$$

The first four terms are $5,-10,20,-40$.

{{< fillin
  question="List the first five terms of the geometric sequence with $a_1=18$ and $r=\tfrac{1}{3}$. Enter the first five terms, in order, separated by commas."
  answer="18,6,2,2/3,2/9"
  answerDisplay="$18,6,2,\tfrac{2}{3},\tfrac{2}{9}$"
  hint="Multiply each term by $\tfrac13$ to get the next one, starting from $a_1=18$."
>}}

### Using Recursive Formulas for Geometric Sequences

A **recursive formula** allows us to find any term of a geometric sequence by using the previous term. Each term is the product of the common ratio and the previous term. For example, suppose the common ratio is 9. Then each term is nine times the previous term. As with any recursive formula, the initial term must be given.

{{< callout type="info" >}}
  **Recursive Formula for a Geometric Sequence.** The recursive formula for a geometric sequence with common ratio $r$ and first term $a_1$ is

  $$a_n=ra_{n-1},\ n\ge2$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given the first several terms of a geometric sequence, write its recursive formula.

  1. State the initial term.
  2. Find the common ratio by dividing any term by the preceding term.
  3. Substitute the common ratio into the recursive formula for a geometric sequence.
{{< /callout >}}

**Example.** Write a recursive formula for the following geometric sequence.

$$\{6,9,13.5,20.25,\ldots\}$$

**Solution.** The first term is given as 6. The common ratio can be found by dividing the second term by the first term.

$$r=\tfrac{9}{6}=1.5$$

Substitute the common ratio into the recursive formula for geometric sequences and define $a_1$.

$$
\begin{array}{lrcl}
& a_n &=& ra_{n-1} \\[4pt]
& a_n &=& 1.5a_{n-1}\text{ for }n\ge2 \\[4pt]
& a_1 &=& 6
\end{array}
$$

**Analysis.** The sequence of data points follows an exponential pattern. The common ratio is also the base of an exponential function, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of four points showing a geometric sequence: (1, 6), (2, 9), (3, 13.5), and (4, 20.25), rising as n increases.","xMin":0,"xMax":5,"yMin":0,"yMax":24,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"unit":48,"yUnit":10,"yGridStep":6,"yTickStep":6,"points":[{"at":[1,6]},{"at":[2,9]},{"at":[3,13.5]},{"at":[4,20.25]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Do we have to divide the second term by the first term to find the common ratio?*

  No. We can divide any term in the sequence by the previous term. It is, however, most common to divide the second term by the first term because it is often the easiest method of finding the common ratio.
{{< /callout >}}

{{< fillin
  question="Find the initial term $a_1$ of the geometric sequence $2,\tfrac{4}{3},\tfrac{8}{9},\tfrac{16}{27},\ldots$."
  answer="2"
  hint="The initial term is simply the first number listed."
>}}

{{< fillin
  question="Find the recursive formula for the geometric sequence $2,\tfrac{4}{3},\tfrac{8}{9},\tfrac{16}{27},\ldots$, in the form $a_n=\ldots$ (in terms of $a_{n-1}$) for $n\ge2$."
  answer="a_n=\tfrac{2}{3}a_{n-1}"
  answerDisplay="$a_n=\tfrac{2}{3}a_{n-1}$"
  hint="Divide the second term by the first term to find the common ratio, then substitute it into $a_n=ra_{n-1}$."
>}}

### Using Explicit Formulas for Geometric Sequences

Because a geometric sequence is an exponential function whose domain is the set of positive integers, and the common ratio is the base of the function, we can write explicit formulas that allow us to find particular terms.

$$a_n=a_1r^{n-1}$$

Let's take a look at the sequence $\{18,36,72,144,288,\ldots\}$. This is a geometric sequence with a common ratio of 2 and an exponential function with a base of 2. An explicit formula for this sequence is

$$a_n=18\cdot2^{n-1}$$

The graph of the sequence is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of five points showing a rapidly increasing geometric sequence: (1, 18), (2, 36), (3, 72), (4, 144), and (5, 288).","xMin":0,"xMax":6,"yMin":0,"yMax":360,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"unit":44,"yUnit":0.65,"yGridStep":36,"yTickStep":36,"points":[{"at":[1,18]},{"at":[2,36]},{"at":[3,72]},{"at":[4,144]},{"at":[5,288]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Explicit Formula for a Geometric Sequence.** The $n$th term of a geometric sequence is given by the explicit formula:

  $$a_n=a_1r^{n-1}$$
{{< /callout >}}

**Example.** Given a geometric sequence with $a_1=3$ and $a_4=24$, find $a_2$.

**Solution.** The sequence can be written in terms of the initial term and the common ratio $r$.

$$3,3r,3r^2,3r^3,\ldots$$

Find the common ratio using the given fourth term.

$$a_n=a_1r^{n-1}$$

$$
\begin{array}{lrcl}
\text{Write the fourth term of the sequence in terms of }a_1\text{ and }r. & a_4 &=& 3r^3 \\[4pt]
\text{Substitute }24\text{ for }a_4. & 24 &=& 3r^3 \\[4pt]
\text{Divide.} & 8 &=& r^3 \\[4pt]
\text{Solve for the common ratio.} & r &=& 2
\end{array}
$$

Find the second term by multiplying the first term by the common ratio.

$$
\begin{array}{lrcl}
a_2 &=& 2a_1 \\[4pt]
&=& 2(3) \\[4pt]
&=& 6
\end{array}
$$

**Analysis.** The common ratio is multiplied by the first term once to find the second term, twice to find the third term, three times to find the fourth term, and so on. The tenth term could be found by multiplying the first term by the common ratio nine times or by multiplying by the common ratio raised to the ninth power.

{{< fillin
  question="Given a geometric sequence with $a_2=4$ and $a_3=32$, find $a_6$."
  answer="16384"
  answerDisplay="$a_6=16{,}384$"
  hint="Find $r$ from $\tfrac{a_3}{a_2}$, then find $a_1$ and multiply forward to $a_6$, or scale $a_2$ by $r^4$."
>}}

**Example.** Write an explicit formula for the $n$th term of the following geometric sequence.

$$\{2,10,50,250,\ldots\}$$

**Solution.** The first term is 2. The common ratio can be found by dividing the second term by the first term.

$$\tfrac{10}{2}=5$$

The common ratio is 5. Substitute the common ratio and the first term of the sequence into the formula.

$$
\begin{array}{lrcl}
& a_n &=& a_1r^{(n-1)} \\[4pt]
& a_n &=& 2\cdot5^{n-1}
\end{array}
$$

The graph of this sequence, shown below, shows an exponential pattern.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of four points showing a rapidly increasing geometric sequence: (1, 2), (2, 10), (3, 50), and (4, 250).","xMin":0,"xMax":5,"yMin":0,"yMax":300,"xLabel":"n","yLabel":"aₙ","tickLabels":true,"unit":48,"yUnit":0.75,"yGridStep":50,"yTickStep":50,"points":[{"at":[1,2]},{"at":[2,10]},{"at":[3,50]},{"at":[4,250]}]}
{{< /apfigure >}}

{{< fillin
  question="Write an explicit formula for the following geometric sequence: $-1,3,-9,27,\ldots$."
  answer="-(-3)^{n-1}"
  answerDisplay="$a_n=-(-3)^{n-1}$"
  hint="Divide the second term by the first term to find the common ratio, then substitute it and the first term into $a_n=a_1r^{n-1}$."
>}}

### Solving Application Problems with Geometric Sequences

In real-world scenarios involving geometric sequences, we may need to use an initial term of $a_0$ instead of $a_1$. In these problems, we can alter the explicit formula slightly by using the following formula:

$$a_n=a_0r^n$$

**Example.** In 2013, the number of students in a small school is 284. It is estimated that the student population will increase by 4% each year.

a. Write a formula for the student population.
b. Estimate the student population in 2020.

**Solution.**

a. The situation can be modeled by a geometric sequence with an initial term of 284. The student population will be 104% of the prior year, so the common ratio is 1.04.

   Let $P$ be the student population and $n$ be the number of years after 2013. Using the explicit formula for a geometric sequence we get

   $$P_n=284\cdot1.04^n$$

b. We can find the number of years since 2013 by subtracting.

   $$2020-2013=7$$

   We are looking for the population after 7 years. We can substitute 7 for $n$ to estimate the population in 2020.

   $$P_7=284\cdot1.04^7\approx374$$

   The student population will be about 374 in 2020.

{{< fillin
  question="A business starts a new website. Initially the number of hits is 293 due to the curiosity factor. The business estimates the number of hits will increase by 2.6% per week. Write a formula for the number of hits after $n$ weeks."
  answer="P_n=293\cdot1.026^n"
  answerDisplay="$P_n=293\cdot1.026^n$"
  hint="The number of hits is 102.6% of the prior week's, so the common ratio is 1.026; use the explicit formula with an initial term of $a_0=293$."
>}}

{{< fillin
  question="For the same website (293 hits initially, increasing 2.6% per week), estimate the number of hits in 5 weeks, rounded to the nearest whole number."
  answer="333"
  answerForm="decimal"
  hint="Substitute $n=5$ into the formula from the previous question."
>}}

{{< callout type="info" >}}
  **Media.** Access these online resources for additional instruction and practice with geometric sequences.
{{< /callout >}}

## Key equations

| recursive formula for $n$th term of a geometric sequence | $a_n=ra_{n-1},n\ge2$ |
| :--- | :--- |
| explicit formula for $n$th term of a geometric sequence | $a_n=a_1r^{n-1}$ |

## Key concepts

- A geometric sequence is a sequence in which the ratio between any two consecutive terms is a constant.
- The constant ratio between two consecutive terms is called the common ratio.
- The common ratio can be found by dividing any term in the sequence by the previous term.
- The terms of a geometric sequence can be found by beginning with the first term and multiplying by the common ratio repeatedly.
- A recursive formula for a geometric sequence with common ratio $r$ is given by $a_n=ra_{n-1}$ for $n\ge2$.
- As with any recursive formula, the initial term of the sequence must be given.
- An explicit formula for a geometric sequence with common ratio $r$ is given by $a_n=a_1r^{n-1}$.
- In application problems, we sometimes alter the explicit formula slightly to $a_n=a_0r^n$.

## Practice

### Find the common ratio for a geometric sequence

{{< fillin
  question="Find the common ratio for the geometric sequence $-0.125,0.25,-0.5,1,-2,\ldots$."
  answer="-2"
  hint="Divide the second term by the first term."
>}}

{{< multiplechoice
  question="Is the sequence $-6,-12,-24,-48,-96,\ldots$ geometric?"
  mode="text"
  answer="geometric"
  hint="Divide each term by the previous term and compare the quotients."
>}}
geometric
not geometric
{{< /multiplechoice >}}

{{< fillin
  question="Find the common ratio of the geometric sequence $-6,-12,-24,-48,-96,\ldots$."
  answer="2"
  hint="Divide any term by the term immediately before it."
>}}

### List the terms of a geometric sequence

{{< fillin
  question="Write the first five terms of the geometric sequence with $a_1=5$ and $r=\tfrac{1}{5}$. Enter the first five terms, in order, separated by commas."
  answer="5,1,1/5,1/25,1/125"
  answerDisplay="$5,1,\tfrac{1}{5},\tfrac{1}{25},\tfrac{1}{125}$"
  hint="Multiply each term by $\tfrac15$ to get the next one, starting from $a_1=5$."
>}}

{{< fillin
  question="A geometric sequence with a positive common ratio has $a_6=25$ and $a_8=6.25$. Write the first five terms of the sequence, in order, separated by commas."
  answer="800,400,200,100,50"
  hint="Use $a_8=a_6r^2$ to solve for the positive common ratio, then find $a_1$ from $a_6=a_1r^5$ and multiply forward."
>}}

### Use a recursive formula for a geometric sequence

{{< fillin
  question="A geometric sequence has $a_1=7$ and recursive formula $a_n=0.2a_{n-1}$. Write the first five terms of the sequence, in order, separated by commas."
  answer="7,1.4,0.28,0.056,0.0112"
  hint="Start at $a_1=7$ and repeatedly multiply by $0.2$."
>}}

{{< fillin
  question="Find the initial term $a_1$ of the geometric sequence $-32,-16,-8,-4,\ldots$."
  answer="-32"
  hint="The initial term is simply the first number listed."
>}}

{{< fillin
  question="Find the recursive formula for the geometric sequence $-32,-16,-8,-4,\ldots$, in the form $a_n=\ldots$ (in terms of $a_{n-1}$) for $n\ge2$."
  answer="a_n=\tfrac{1}{2}a_{n-1}"
  answerDisplay="$a_n=\tfrac{1}{2}a_{n-1}$"
  hint="Divide a term by the one before it to find the common ratio, then substitute it into $a_n=ra_{n-1}$."
>}}

### Use an explicit formula for a geometric sequence

{{< fillin
  question="Write the first five terms of the geometric sequence $a_n=12\cdot\left(-\tfrac{1}{2}\right)^{n-1}$. Enter the first five terms, in order, separated by commas."
  answer="12,-6,3,-3/2,3/4"
  answerDisplay="$12,-6,3,-\tfrac{3}{2},\tfrac{3}{4}$"
  hint="Substitute $n=1,2,3,4,5$ into the formula."
>}}

{{< fillin
  question="Write an explicit formula for the $n$th term of the geometric sequence $1,3,9,27,\ldots$."
  answer="3^{n-1}"
  answerDisplay="$a_n=3^{n-1}$"
  hint="Find the common ratio, then substitute it and the first term into $a_n=a_1r^{n-1}$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 11.3: Geometric Sequences](https://openstax.org/books/precalculus-2e/pages/11-3-geometric-sequences) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Learning Objectives" keyed to Intermediate Algebra 12.3.1–12.3.2, with a "Determine if a sequence is geometric" / "Find the general term" pair of objectives, an antibiotic-dosage Try It, and "Practice Makes Perfect" exercise sets) — confirmed against the rendered PDF, true page 1126 (printed page 1116), where the previous section's Extensions exercises run directly into the "11.3 Geometric Sequences" heading, objectives, and the salary-increase paragraph with no corequisite-skills material between them; the same prepended-block pattern already logged in this book's errata for other chapters' opening modules. Recreated the introductory arrows-and-labels figure ($1\xrightarrow{\times6}6\xrightarrow{\times6}36\cdots$, showing the sequence $\{1,6,36,216,1{,}296,\ldots\}$ with each arrow marked "×6") as an inline KaTeX display using `\xrightarrow`, since the arrows encode no information beyond the constant-factor relationship already stated in the surrounding sentence, and the figure engine has no primitive for annotated inline arrows between numerals. Recreated the four remaining instructional figures as accessible spec-first scatter plots, each `points`-only with no connecting curve (matching the source art exactly): the two-panel Figure 1 (Example 1's Analysis) as two separate `apfigure`s per house convention for a two-panel source figure, both unlabeled per point exactly as the source prints them, and the three single-panel figures (Example 3's Analysis, and the two graphs shown in the "Using Explicit Formulas for Geometric Sequences" subsection) likewise unlabeled per point. Every figure's `unit`/`yUnit` pair was chosen to keep the plotted window close to square per this chapter's convention, compared against its source page, and re-rendered until no label overlapped another label, a point, or an axis tick. Corrected a source typo in the How To numbered list under "Given the first term and the common factor, find the first four terms of a geometric sequence" (step 3 prints "Write the terms separated by commons within brackets," which is an evident spelling defect for "commas," corrected here) and a source typo in the closing application Try It, whose printed formula key is "$P_{n}=293\cdot1.026a^{n}$" (an extraneous "a" inconsistent with the pattern of the immediately preceding worked Example 6, $P_n=284\cdot1.04^n$, and with the printed answer of "about 333" hits, which only follows from $P_n=293\cdot1.026^n$, independently confirmed by computing $P_5=293\cdot1.026^5\approx333.12$); both are non-mathematical transcription slips, reproduced here in corrected form since they are locally-authored-adjacent scaffolding (a procedural instruction and a keyed formula), not printed exposition requiring a visible source note. Omitted the three external-resource links under the Media callout, keeping its introductory sentence, matching this book's prevailing convention (most authored sections in this book omit the list; a minority keep one item). "Is the sequence geometric?" asks are `multiplechoice` (categorical, never a coded digit), with the common ratio keyed as a separate `fillin` whenever the source also asks for it; the one ratio result that is a proper fraction ($\tfrac15$) states "as a fraction" and declares `answerForm="fraction"`, confirmed against the real grader to refuse a bare decimal retype. Every recursive-formula Try It and Practice item pins the requested shape ("in the form $a_n=\ldots$, in terms of $a_{n-1}$, for $n\ge2$") and keys the initial term as its own separate fill-in, since the grader accepts reordered and rescaled restatements of a correct recursive rule but treats a shifted index or a wrong sign as a different rule; the source's own Algebraic-exercise key states both parts together (e.g. "$a_1=-32,a_n=\tfrac12a_{n-1}$"), split here into two components per the multipart-expansion rule. Algebraic exercise #17 ("write the first five terms of the geometric sequence, given any two terms," $a_6=25,a_8=6.25$) is mathematically satisfied by two common ratios, $r=\pm0.5$, since only $r^2$ is determined by the given terms; the source's own key ($800,400,200,100,50$) uses the positive branch only, so the question here states "a geometric sequence with a positive common ratio" to pin that choice, per the rule for an answer that depends on a choice the source leaves open. Eight selected end-of-section Algebraic exercises were adapted into the interactive components of the closing Practice block, one Practice group per objective, every one independently re-derived — including by running the arithmetic in Node with exact-rational tracking for every fraction — rather than read off the source key; the two Graphical-section exercises ("determine whether the graph shown represents a geometric sequence") were not used, since incorporating them would have required two additional figures beyond this section's four, and the section's four objectives are fully covered without them.</small>
