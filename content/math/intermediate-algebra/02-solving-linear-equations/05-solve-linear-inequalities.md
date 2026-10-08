---
title: Solve Linear Inequalities
description: >-
  Graphing inequalities on a number line, solving linear inequalities,
  translating words to inequalities, and solving applications with linear
  inequalities — adapted from OpenStax Intermediate Algebra 2e, Section 2.5.
source_section: "2.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph inequalities on the number line
- Solve linear inequalities
- Translate words to an inequality and solve
- Solve applications with linear inequalities
{{< /callout >}}

## Graph inequalities on the number line

What number would make the inequality $x>3$ true? Are you thinking, “$x$
could be four”? That’s correct, but $x$ could be $6$, too, or $37$, or even
$3.001$. Any number greater than three is a solution to the inequality $x>3$.

We show all the solutions to the inequality $x>3$ on the number line by
shading in all the numbers to the right of three, to show that all numbers
greater than three are solutions. Because the number three itself is not a
solution, we put an open parenthesis at three.

We can also represent inequalities using **interval notation**. There is no
upper end to the solution to this inequality. In interval notation, we
express $x>3$ as $(3,\infty)$. The symbol $\infty$ is read as **“infinity.”**
It is not an actual number.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 5 to 5 with a parenthesis at 3 and shading to the right.","min":-5,"max":5,"title":"x > 3","marker":{"at":3,"type":"paren"},"shade":"right"}
{{< /apfigure >}}

We use the left parenthesis symbol, $($, to show that the endpoint of the
inequality is not included. The left bracket symbol, $[$, shows that the
endpoint is included.

The inequality $x\leq1$ means all numbers less than or equal to one. Here we
need to show that one is a solution, too. We do that by putting a bracket at
$x=1$. We then shade in all the numbers to the left of one, to show that all
numbers less than one are solutions.

There is no lower end to those numbers. We write $x\leq1$ in interval
notation as $(-\infty,1]$. The symbol $-\infty$ is read as “negative
infinity.”

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 5 to 5 with a bracket at 1 and shading to the left.","min":-5,"max":5,"title":"x ≤ 1","marker":{"at":1,"type":"bracket"},"shade":"left"}
{{< /apfigure >}}

The notation for inequalities on a number line and in interval notation use
the same symbols to express the endpoints of intervals.

**Example.** Graph each inequality on the number line and write in interval
notation: (a) $x\geq-3$ (b) $x<2.5$ (c) $x\leq-\tfrac35$.

**Solution.**

(a) Shade to the right of $-3$, and put a bracket at $-3$.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 4 to negative 1 with a bracket at negative 3 and shading right.","min":-4,"max":-1,"title":"x ≥ −3","marker":{"at":-3,"type":"bracket"},"shade":"right"}
{{< /apfigure >}}

In interval notation, the solution is $[-3,\infty)$.

(b) Shade to the left of $2.5$ and put a parenthesis at $2.5$.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from 0 to 3 with a parenthesis at 2.5 and shading left.","min":0,"max":3,"title":"x < 2.5","marker":{"at":2.5,"type":"paren"},"shade":"left"}
{{< /apfigure >}}

In interval notation, the solution is $(-\infty,2.5)$.

(c) Shade to the left of $-\tfrac35$, and put a bracket at $-\tfrac35$.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 2 to 1 with a bracket at negative three fifths and shading left.","min":-2,"max":1,"title":"x ≤ −3/5","marker":{"at":-0.6,"type":"bracket"},"shade":"left"}
{{< /apfigure >}}

In interval notation, the solution is $\left(-\infty,-\tfrac35\right]$.

{{< fillin
  question="Graph $x>2$ mentally and write its solution in interval notation."
  answer="(2,\infty)"
  answerForm="decimal"
  answerDisplay="$(2,\infty)$"
  hint="Decide whether $2$ itself is a solution (bracket or parenthesis), then which way from it the solutions run."
>}}

What numbers are greater than two but less than five? Are you thinking say,
$2.5,3,3\tfrac23,4,4.99$? We can represent all the numbers between two and
five with the inequality $2<x<5$. We can show $2<x<5$ on the number line by
shading all the numbers between two and five. Again, we use the parentheses
to show the numbers two and five are not included.

On a number line, the solution is the segment between $2$ and $5$, with a
parenthesis at each endpoint. The interval notation is $(2,5)$.

**Example.** Graph each inequality on the number line and write in interval
notation: (a) $-3<x<4$ (b) $-6\leq x<-1$ (c) $0\leq x\leq2.5$.

**Solution.**

(a) Shade between $-3$ and $4$. Put parentheses at $-3$ and $4$.

The graph is the segment between $-3$ and $4$, with a parenthesis at each
endpoint. The interval notation is $(-3,4)$.

(b) Shade between $-6$ and $-1$. Put a bracket at $-6$, and a parenthesis at
$-1$.

The graph is the segment between $-6$ and $-1$, with a bracket at $-6$ and a
parenthesis at $-1$. The interval notation is $[-6,-1)$.

(c) Shade between $0$ and $2.5$. Put a bracket at $0$ and at $2.5$.

The graph is the segment between $0$ and $2.5$, with a bracket at each
endpoint. The interval notation is $[0,2.5]$.

{{< fillin
  question="Graph $-2<x<1$ mentally and write its solution in interval notation."
  answer="(-2,1)"
  answerForm="decimal"
  answerDisplay="$(-2,1)$"
  hint="Decide whether each endpoint is itself a solution (bracket or parenthesis)."
>}}

## Solve linear inequalities

A linear inequality is much like a linear equation—but the equal sign is
replaced with an inequality sign. A **linear inequality** is an inequality in
one variable that can be written in one of the forms, $ax+b<c$, $ax+b\leq c$,
$ax+b>c$, or $ax+b\geq c$.

{{< callout type="info" >}}
  **Linear inequality.** A linear inequality is an inequality in one variable
  that can be written in one of the following forms where $a$, $b$, and $c$
  are real numbers and $a\ne0$:

  $$ax+b<c,\qquad ax+b\leq c,\qquad ax+b>c,\qquad ax+b\geq c.$$
{{< /callout >}}

When we solved linear equations, we were able to use the properties of
equality to add, subtract, multiply, or divide both sides and still keep the
equality. Similar properties hold true for inequalities.

We can add or subtract the same quantity from both sides of an inequality and
still keep the inequality. For example:

$$
\begin{array}{rcl}
-4&<&2\\[4pt]
-4-5&<&2-5\\[4pt]
-9&<&-3\ \text{ True}
\end{array}
\qquad
\begin{array}{rcl}
-4&<&2\\[4pt]
-4+7&<&2+7\\[4pt]
3&<&9\ \text{ True}
\end{array}
$$

Notice that the inequality sign stayed the same.

{{< callout type="info" >}}
  **Addition and Subtraction Property of Inequality.** For any numbers $a$,
  $b$, and $c$, if $a<b$, then $a+c<b+c$ and $a-c<b-c$. If $a>b$, then
  $a+c>b+c$ and $a-c>b-c$. We can add or subtract the same quantity from
  both sides of an inequality and still keep the inequality.
{{< /callout >}}

What happens to an inequality when we divide or multiply both sides by a
constant? Let’s first multiply and divide both sides by a positive number.

$$
\begin{array}{rcl}
10&<&15\\[4pt]10(5)&<&15(5)\\[4pt]50&<&75\ \text{ True}
\end{array}
\qquad
\begin{array}{rcl}
10&<&15\\[4pt]\tfrac{10}{5}&<&\tfrac{15}{5}\\[4pt]2&<&3\ \text{ True}
\end{array}
$$

The inequality signs stayed the same. Does the inequality stay the same when
we divide or multiply by a negative number?

$$
\begin{array}{rcl}
10&<&15\\[4pt]10(-5)&?&15(-5)\\[4pt]-50&?&-75\\[4pt]-50&>&-75
\end{array}
\qquad
\begin{array}{rcl}
10&<&15\\[4pt]\tfrac{10}{-5}&?&\tfrac{15}{-5}\\[4pt]-2&?&-3\\[4pt]-2&>&-3
\end{array}
$$

Notice that when we filled in the inequality signs, the inequality signs
reversed their direction. When we divide or multiply an inequality by a
positive number, the inequality sign stays the same. When we divide or
multiply an inequality by a negative number, the inequality sign reverses.

{{< callout type="info" >}}
  **Multiplication and Division Property of Inequality.** For any numbers
  $a$, $b$, and $c$:

  - If $a<b$ and $c>0$, then $ac<bc$ and $\tfrac ac<\tfrac bc$.
  - If $a>b$ and $c>0$, then $ac>bc$ and $\tfrac ac>\tfrac bc$.
  - If $a<b$ and $c<0$, then $ac>bc$ and $\tfrac ac>\tfrac bc$.
  - If $a>b$ and $c<0$, then $ac<bc$ and $\tfrac ac<\tfrac bc$.
{{< /callout >}}

When we divide or multiply an inequality by a positive number, the inequality
stays the same. When we divide or multiply an inequality by a negative
number, the inequality reverses.

Sometimes when solving an inequality, as in the next example, the variable
ends up on the right. We can rewrite the inequality in reverse to get the
variable to the left. $x>a$ has the same meaning as $a<x$. Think about it as
“If Xander is taller than Andy, then Andy is shorter than Xander.”

**Example.** Solve each inequality. Graph the solution on the number line,
and write the solution in interval notation: (a) $x-\tfrac38\leq\tfrac34$
(b) $9y<54$ (c) $-15<\tfrac35z$.

**Solution.**

(a)

$$
\begin{array}{lrcl}
&x-\tfrac38&\leq&\tfrac34\\[4pt]
\text{Add }\tfrac38\text{ to both sides of the inequality.}&x-\tfrac38+\tfrac38&\leq&\tfrac34+\tfrac38\\[4pt]
\text{Simplify.}&x&\leq&\tfrac98
\end{array}
$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from 0 to 3 with a bracket at nine eighths and shading left.","min":0,"max":3,"title":"x ≤ 9/8","marker":{"at":1.125,"type":"bracket"},"shade":"left"}
{{< /apfigure >}}

In interval notation, the solution is $\left(-\infty,\tfrac98\right]$.

(b)

$$
\begin{array}{lrcl}
&9y&<&54\\[4pt]
\text{Divide both sides by }9\text{; the inequality stays the same.}&\tfrac{9y}{9}&<&\tfrac{54}{9}\\[4pt]
\text{Simplify.}&y&<&6
\end{array}
$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from 4 to 7 with a parenthesis at 6 and shading left.","min":4,"max":7,"title":"y < 6","marker":{"at":6,"type":"paren"},"shade":"left"}
{{< /apfigure >}}

In interval notation, the solution is $(-\infty,6)$.

(c)

$$
\begin{array}{lrcl}
&-15&<&\tfrac35z\\[4pt]
\text{Multiply both sides by }\tfrac53\text{; the inequality stays the same.}&\tfrac53(-15)&<&\tfrac53(\tfrac35z)\\[4pt]
\text{Simplify.}&-25&<&z\\[4pt]
\text{Rewrite with the variable on the left.}&z&>&-25
\end{array}
$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 26 to negative 23 with a parenthesis at negative 25 and shading right.","min":-26,"max":-23,"title":"z > −25","marker":{"at":-25,"type":"paren"},"shade":"right"}
{{< /apfigure >}}

In interval notation, the solution is $(-25,\infty)$.

{{< fillin
  question="Solve $p-\tfrac34\geq\tfrac16$. Enter the solution as an inequality."
  answer="p\geq\frac{11}{12}"
  answerForm="fraction lowest-terms"
  answerDisplay="$p\geq\tfrac{11}{12}$"
  hint="Add $\tfrac34$ to both sides, then combine the fractions over a common denominator."
>}}

Be careful when you multiply or divide by a negative number—remember to
reverse the inequality sign.

**Example.** Solve each inequality, graph the solution on the number line,
and write the solution in interval notation: (a) $-13m\geq65$ (b)
$\tfrac{n}{-2}\geq8$.

**Solution.**

(a) Divide both sides of the inequality by $-13$. Since $-13$ is a negative,
the inequality reverses.

$$\frac{-13m}{-13}\leq\frac{65}{-13},\qquad m\leq-5.$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 7 to negative 4 with a bracket at negative 5 and shading left.","min":-7,"max":-4,"title":"m ≤ −5","marker":{"at":-5,"type":"bracket"},"shade":"left"}
{{< /apfigure >}}

In interval notation, the solution is $(-\infty,-5]$.

(b) Multiply both sides of the inequality by $-2$. Since $-2$ is a negative,
the inequality reverses.

$$-2\left(\frac n{-2}\right)\leq-2(8),\qquad n\leq-16.$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 18 to negative 15 with a bracket at negative 16 and shading left.","min":-18,"max":-15,"title":"n ≤ −16","marker":{"at":-16,"type":"bracket"},"shade":"left"}
{{< /apfigure >}}

In interval notation, the solution is $(-\infty,-16]$.

{{< fillin
  question="Solve $-8q<32$. Enter the solution as an inequality."
  answer="q>-4"
  answerForm="decimal"
  answerDisplay="$q>-4$"
  hint="Divide both sides by the coefficient of $q$; the sign of the number you divide by decides whether the inequality symbol reverses."
>}}

Most inequalities will take more than one step to solve. We follow the same
steps we used in the general strategy for solving linear equations, but make
sure to pay close attention when we multiply or divide to isolate the
variable.

**Example.** Solve the inequality $6y\leq11y+17$, graph the solution on the
number line, and write the solution in interval notation.

**Solution.**

$$
\begin{array}{lrcl}
&6y&\leq&11y+17\\[4pt]
\text{Subtract }11y\text{ from both sides.}&6y-11y&\leq&11y-11y+17\\[4pt]
\text{Simplify.}&-5y&\leq&17\\[4pt]
\text{Divide by }{-5}\text{ and reverse the inequality.}&\tfrac{-5y}{-5}&\geq&\tfrac{17}{-5}\\[4pt]
\text{Simplify.}&y&\geq&-\tfrac{17}{5}
\end{array}
$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from negative 5 to negative 2 with a bracket at negative seventeen fifths and shading right.","min":-5,"max":-2,"title":"y ≥ −17/5","marker":{"at":-3.4,"type":"bracket"},"shade":"right"}
{{< /apfigure >}}

In interval notation, the solution is $\left[-\tfrac{17}{5},\infty\right)$.

{{< fillin
  question="Solve $3q\geq7q-23$. Enter the solution as an inequality."
  answer="q\leq\frac{23}{4}"
  answerForm="lowest-terms"
  answerDisplay="$q\leq\tfrac{23}{4}$"
  hint="Collect the $q$-terms on one side and the constants on the other, then divide by the coefficient of $q$, watching its sign."
>}}

When solving inequalities, it is usually easiest to collect the variables on
the side where the coefficient of the variable is largest. This eliminates
negative coefficients and so we don’t have to multiply or divide by a
negative—which means we don’t have to remember to reverse the inequality
sign.

**Example.** Solve the inequality $8p+3(p-12)>7p-28$, graph the solution on
the number line, and write the solution in interval notation.

**Solution.**

$$
\begin{array}{lrcl}
&8p+3(p-12)&>&7p-28\\[4pt]
\text{Distribute.}&8p+3p-36&>&7p-28\\[4pt]
\text{Combine like terms.}&11p-36&>&7p-28\\[4pt]
\text{Subtract }7p\text{ from both sides.}&11p-36-7p&>&7p-28-7p\\[4pt]
\text{Simplify.}&4p-36&>&-28\\[4pt]
\text{Add }36\text{ to both sides.}&4p-36+36&>&-28+36\\[4pt]
\text{Simplify.}&4p&>&8\\[4pt]
\text{Divide both sides by }4\text{; the inequality stays the same.}&\tfrac{4p}{4}&>&\tfrac84\\[4pt]
\text{Simplify.}&p&>&2
\end{array}
$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from 0 to 3 with a parenthesis at 2 and shading right.","min":0,"max":3,"title":"p > 2","marker":{"at":2,"type":"paren"},"shade":"right"}
{{< /apfigure >}}

In interval notation, the solution is $(2,\infty)$.

{{< fillin
  question="Solve $9y+2(y+6)>5y-24$. Enter the solution as an inequality."
  answer="y>-6"
  answerForm="decimal"
  answerDisplay="$y>-6$"
  hint="Distribute, combine like terms, and collect the variable terms on one side and the constants on the other."
>}}

Just like some equations are identities and some are contradictions,
inequalities may be identities or contradictions, too. We recognize these
forms when we are left with only constants as we solve the inequality. If the
result is a true statement, we have an identity. If the result is a false
statement, we have a contradiction.

**Example.** Solve the inequality $8x-2(5-x)<4(x+9)+6x$, graph the solution
on the number line, and write the solution in interval notation.

**Solution.**

$$
\begin{array}{lrcl}
&8x-2(5-x)&<&4(x+9)+6x\\[4pt]
\text{Distribute.}&8x-10+2x&<&4x+36+6x\\[4pt]
\text{Combine like terms.}&10x-10&<&10x+36\\[4pt]
\text{Subtract }10x\text{ from both sides.}&10x-10-10x&<&10x+36-10x\\[4pt]
\text{Simplify.}&-10&<&36
\end{array}
$$

The $x$’s are gone, and we have a true statement. The inequality is an
identity. The solution is all real numbers. In interval notation, the
solution is $(-\infty,\infty)$.

{{< fillin
  question="Solve $4b-3(3-b)>5(b-6)+2b$. Enter the solution set in interval notation."
  answer="(-\infty,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,\infty)$"
  hint="Distribute and combine like terms on each side, then collect the variable terms on one side and read what is left."
>}}

We can clear fractions in inequalities much as we did in equations. Again,
be careful with the signs when multiplying or dividing by a negative.

**Example.** Solve the inequality $\tfrac13a-\tfrac18a>\tfrac5{24}a+\tfrac34$,
graph the solution on the number line, and write the solution in interval
notation.

**Solution.**

$$
\begin{array}{lrcl}
&\tfrac13a-\tfrac18a&>&\tfrac5{24}a+\tfrac34\\[4pt]
\text{Multiply both sides by the LCD, }24.&24(\tfrac13a-\tfrac18a)&>&24(\tfrac5{24}a+\tfrac34)\\[4pt]
\text{Simplify.}&8a-3a&>&5a+18\\[4pt]
\text{Combine like terms.}&5a&>&5a+18\\[4pt]
\text{Subtract }5a\text{ from both sides.}&5a-5a&>&5a-5a+18\\[4pt]
\text{Simplify.}&0&>&18
\end{array}
$$

The statement is false. The inequality is a contradiction. There is no
solution.

{{< multiplechoice
  question="Solve the inequality $\tfrac14x-\tfrac1{12}x>\tfrac16x+\tfrac78$. Which describes its solution?"
  answer="a contradiction — no solution"
  hint="Clear the fractions by multiplying both sides by the LCD of the denominators, then combine like terms and collect the variable terms on one side."
>}}
a specific solution, $x>\tfrac{21}{8}$
a specific solution, $x<-21$
an identity — every real number is a solution
a contradiction — no solution
{{< /multiplechoice >}}

## Translate to an inequality and solve

To translate English sentences into inequalities, we need to recognize the
phrases that indicate the inequality. Some words are easy, like “more than”
and “less than.” But others are not as obvious. The table shows some common
phrases that indicate inequalities.

| $>$ | $\geq$ | $<$ | $\leq$ |
| --- | --- | --- | --- |
| is greater than | is greater than or equal to | is less than | is less than or equal to |
| is more than | is at least | is smaller than | is at most |
| is larger than | is no less than | has fewer than | is no more than |
| exceeds | is the minimum | is lower than | is the maximum |

**Example.** Translate and solve. Then graph the solution on the number line,
and write the solution in interval notation.

> Twenty-seven less than $x$ is at least $48$.

**Solution.** Translate: $x-27\geq48$. Solve—add $27$ to both sides.

$$x-27+27\geq48+27,\qquad x\geq75.$$

{{< apfigure kind="numberline" >}}
{"ariaLabel":"Number line from 73 to 77 with a bracket at 75 and shading right.","min":73,"max":77,"title":"x ≥ 75","marker":{"at":75,"type":"bracket"},"shade":"right"}
{{< /apfigure >}}

In interval notation, the solution is $[75,\infty)$.

{{< fillin
  question="Translate and solve: Nineteen less than $p$ is no less than 47. Enter the solution as an inequality."
  answer="p\geq66"
  answerForm="decimal"
  answerDisplay="$p\geq66$"
  hint="Translate each phrase using the phrase table above (mind which quantity is subtracted from which), then isolate $p$."
>}}

## Solve applications with linear inequalities

Many real-life situations require us to solve inequalities. The method we
will use to solve applications with linear inequalities is very much like the
one we used when we solved applications with equations.

We will read the problem and make sure all the words are understood. Next, we
will identify what we are looking for and assign a variable to represent it.
We will restate the problem in one sentence to make it easy to translate into
an inequality. Then, we will solve the inequality.

Sometimes an application requires the solution to be a whole number, but the
algebraic solution to the inequality is not a whole number. In that case, we
must round the algebraic solution to a whole number. The context of the
application will determine whether we round up or down.

**Example.** Dawn won a mini-grant of \$4,000 to buy tablet computers for her
classroom. The tablets she would like to buy cost \$254.12 each, including tax
and delivery. What is the maximum number of tablets Dawn can buy?

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what you are looking for: the maximum number of tablets
Dawn can buy.

**Step 3. Name** what you are looking for. Choose a variable to represent
that quantity. Let $n=$ the number of tablets.

**Step 4. Translate.** Write a sentence that gives the information to find
it: \$254.12 times the number of tablets is no more than \$4,000. Translate
into an inequality: $254.12n\leq4{,}000$.

**Step 5. Solve** the inequality. $n\leq15.74$. But $n$ must be a whole
number of tablets, so round to $15$: $n\leq15$.

**Step 6. Check** the answer in the problem and make sure it makes sense.
Rounding down the price to \$250, $15$ tablets would cost \$3,750, while $16$
tablets would be \$4,000. So a maximum of $15$ tablets at \$254.12 seems
reasonable.

**Step 7. Answer** the question with a complete sentence. Dawn can buy a
maximum of $15$ tablets.

{{< fillin
  question="Angie has \$20 to spend on juice boxes for her son’s preschool picnic. Each pack costs \$2.63. What is the maximum number of packs she can buy?"
  answer="7"
  answerForm="decimal"
  answerDisplay="7 packs"
  hint="Write an inequality for the cost of the packs against the \$20 she has, solve it, and take the largest whole number that satisfies it."
>}}

**Example.** Taleisha’s phone plan costs her \$28.80 a month plus \$0.20 per
text message. How many text messages can she send/receive and keep her
monthly phone bill no more than \$50?

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what you are looking for: the number of text messages
Taleisha can make.

**Step 3. Name** what you are looking for. Choose a variable to represent
that quantity. Let $t=$ the number of text messages.

**Step 4. Translate.** Write a sentence that gives the information to find
it: \$28.80 plus \$0.20 times the number of text messages is less than or
equal to \$50. Translate into an inequality: $28.80+0.20t\leq50$.

**Step 5. Solve** the inequality:

$$0.2t\leq21.2,\qquad t\leq106\text{ text messages}.$$

**Step 6. Check** the answer in the problem and make sure it makes sense.
Yes, $28.80+0.20(106)=50$.

**Step 7. Write** a sentence that answers the question. Taleisha can
send/receive no more than $106$ text messages to keep her bill no more than
\$50.

{{< fillin
  question="Sergio and Lizeth plan to rent a car for \$75 a week plus \$0.25 a mile. What is the maximum number of miles they can travel during the week and keep within their \$200 budget?"
  answer="500"
  answerForm="decimal"
  answerDisplay="500 miles"
  hint="Write an inequality: the weekly charge plus the mileage charge is at most the budget. Then solve for the number of miles."
>}}

Profit is the money that remains when the costs have been subtracted from the
revenue. In the next example, we will find the number of jobs a small
businesswoman needs to do every month in order to make a certain amount of
profit.

**Example.** Felicity has a calligraphy business. She charges \$2.50 per
wedding invitation. Her monthly expenses are \$650. How many invitations
must she write to earn a profit of at least \$2,800 per month?

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what you are looking for: the number of invitations
Felicity needs to write.

**Step 3. Name** what you are looking for. Choose a variable to represent
it. Let $j=$ the number of invitations.

**Step 4. Translate.** Write a sentence that gives the information to find
it: \$2.50 times the number of invitations minus \$650 is at least \$2,800.
Translate into an inequality:

$$2.50j-650\geq2{,}800.$$

**Step 5. Solve** the inequality: $2.5j\geq3{,}450$, so
$j\geq1{,}380$ invitations.

**Step 6. Check** the answer in the problem and make sure it makes sense. If
Felicity wrote $1{,}400$ invitations, her profit would be $2.50(1{,}400)-650$, or
\$2,850. This is more than \$2,800.

**Step 7. Write** a sentence that answers the question. Felicity must write
at least $1{,}380$ invitations.

{{< fillin
  question="Caleb charges \$32 per hour for pet sitting. His monthly expenses are \$2,272. What is the minimum number of hours he must work to earn a profit of at least \$800 per month?"
  answer="96"
  answerForm="decimal"
  answerDisplay="96 hours"
  hint="Profit is revenue minus expenses: write an inequality for a profit of at least \$800, then solve for the hours."
>}}

There are many situations in which several quantities contribute to the
total expense. We must make sure to account for all the individual expenses
when we solve problems like this.

**Example.** Malik is planning a six-day summer vacation trip. He has \$840 in
savings, and he earns \$45 per hour for tutoring. The trip will cost him \$525
for airfare, \$780 for food and sightseeing, and \$95 per night for the hotel.
How many hours must he tutor to have enough money to pay for the trip?

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what you are looking for: the number of hours Malik must
tutor.

**Step 3. Name** what you are looking for. Choose a variable to represent
that quantity. Let $h=$ the number of hours.

**Step 4. Translate.** Write a sentence that gives the information to find
it. The expenses must be less than or equal to the income. The cost of
airfare plus the cost of food and sightseeing and the hotel bill must be less
than the savings plus the amount earned tutoring. Translate into an
inequality:

$$525+780+95(6)\leq840+45h.$$

**Step 5. Solve** the inequality:

$$
\begin{array}{rcl}
1{,}875&\leq&840+45h\\[4pt]
1{,}035&\leq&45h\\[4pt]
23&\leq&h\\[4pt]
h&\geq&23
\end{array}
$$

**Step 6. Check** the answer in the problem and make sure it makes sense. We
substitute $23$ into the inequality:

$$
\begin{array}{rcl}
1{,}875&\leq&840+45h\\[4pt]
1{,}875&\leq&840+45(23)\\[4pt]
1{,}875&\leq&1{,}875
\end{array}
$$

**Step 7. Write** a sentence that answers the question. Malik must tutor at
least $23$ hours.

{{< fillin
  question="Brenda has \$500 in savings and can earn \$15 an hour babysitting. She expects to pay \$350 airfare, \$375 for food and entertainment, and \$60 a night for 3 nights. What is the minimum number of hours she must babysit to pay for the trip?"
  answer="27"
  answerForm="decimal"
  answerDisplay="27 hours"
  hint="Add up the trip’s expenses and require them to be no more than her savings plus her babysitting earnings, then solve for the hours."
>}}

## Key terms

A **linear inequality** is an inequality in one variable that
can be written in one of the forms $ax+b<c$, $ax+b\leq c$, $ax+b>c$, or
$ax+b\geq c$, where $a$, $b$, and $c$ are real numbers and $a\ne0$.

## Practice

### Graph inequalities on the number line

{{< fillin
  question="Graph $-5 \le x < -3$ on a number line. Enter the resulting set in interval notation."
  answer="[-5,-3)"
  answerForm="decimal"
  answerDisplay="$[-5, -3)$"
  hint="Decide whether each endpoint is itself a solution (bracket or parenthesis)."
>}}

{{< fillin
  question="Graph $x \le -0.5$ on a number line. Enter the resulting set in interval notation."
  answer="(-\infty,-0.5]"
  answerForm="decimal"
  answerDisplay="$(-\infty, -0.5]$"
  hint="Decide whether $-0.5$ itself is a solution (bracket or parenthesis), then which way from it the solutions run."
>}}

{{< fillin
  question="Graph $x \ge \tfrac{1}{3}$ on a number line. Enter the resulting set in interval notation."
  answer="[\frac{1}{3},\infty)"
  answerForm="fraction lowest-terms"
  answerDisplay="$[\tfrac{1}{3}, \infty)$"
  hint="Decide whether $\tfrac{1}{3}$ itself is a solution (bracket or parenthesis), then which way from it the solutions run."
>}}

{{< fillin
  question="Graph $x \le 5$ on a number line. Enter the resulting set in interval notation."
  answer="(-\infty,5]"
  answerForm="decimal"
  answerDisplay="$(-\infty, 5]$"
  hint="Decide whether $5$ itself is a solution (bracket or parenthesis), then which way from it the solutions run."
>}}

{{< fillin
  question="Graph $x \ge -1.5$ on a number line. Enter the resulting set in interval notation."
  answer="[-1.5,\infty)"
  answerForm="decimal"
  answerDisplay="$[-1.5, \infty)$"
  hint="Decide whether $-1.5$ itself is a solution (bracket or parenthesis), then which way from it the solutions run."
>}}

{{< fillin
  question="Graph $x < -\tfrac{7}{3}$ on a number line. Enter the resulting set in interval notation."
  answer="(-\infty,-\frac{7}{3})"
  answerForm="fraction lowest-terms"
  answerDisplay="$(-\infty, -\tfrac{7}{3})$"
  hint="Decide whether $-\tfrac{7}{3}$ itself is a solution (bracket or parenthesis), then which way from it the solutions run."
>}}

### Solve linear inequalities

{{< fillin
  question="Solve $5u \le 8u - 21$, then write the solution in interval notation."
  answer="[7,\infty)"
  answerForm="decimal"
  answerDisplay="$[7, \infty)$"
  hint="Collect the $u$-terms on one side and the constants on the other, then divide by the coefficient of $u$, watching its sign."
>}}

{{< fillin
  question="Solve $9y + 5(y+3) < 4y - 35$, then write the solution in interval notation."
  answer="(-\infty,-5)"
  answerForm="decimal"
  answerDisplay="$(-\infty, -5)$"
  hint="Distribute the $5$, combine like terms, collect the $y$-terms on one side and the constants on the other, then divide by the coefficient of $y$, watching its sign."
>}}

{{< fillin
  question="Solve $4k - (k-2) \ge 7k - 26$, then write the solution in interval notation."
  answer="(-\infty,7]"
  answerForm="decimal"
  answerDisplay="$(-\infty, 7]$"
  hint="Distribute the negative sign, combine like terms, collect the $k$-terms on one side and the constants on the other, then divide by the coefficient of $k$, watching its sign."
>}}

{{< fillin
  question="Solve $-\tfrac{21}{8}y \le -\tfrac{15}{28}$, then write the solution in interval notation."
  answer="[\frac{10}{49},\infty)"
  answerForm="fraction lowest-terms"
  answerDisplay="$[\tfrac{10}{49}, \infty)$"
  hint="Multiply both sides by the reciprocal of the coefficient of $y$; the sign of that number decides whether the inequality symbol reverses."
>}}

{{< multiplechoice
  question="Solve the inequality $18q - 4(10-3q) < 5(6q-8)$. Which describes its solution?"
  answer="a contradiction — no solution"
  hint="Distribute on both sides, combine like terms, then collect the variable terms on one side and read what is left."
>}}
a specific solution, $q>0$
a contradiction — no solution
an identity — every real number is a solution
a specific solution, $q<0$
{{< /multiplechoice >}}

### Translate words to an inequality and solve

{{< fillin
  question="Translate and solve: Six more than $k$ exceeds $25$. Enter the solution as an inequality."
  answer="k>19"
  answerForm="decimal"
  answerDisplay="$k>19$"
  hint="Translate each phrase using the phrase table above, then isolate $k$."
>}}

{{< fillin
  question="Translate and solve: Twelve less than $x$ is no less than $21$. Enter the solution as an inequality."
  answer="x\geq33"
  answerForm="decimal"
  answerDisplay="$x\geq33$"
  hint="Translate each phrase using the phrase table above (mind which quantity is subtracted from which), then isolate $x$."
>}}

{{< fillin
  question="Translate and solve: Negative two times $s$ is lower than $56$. Enter the solution as an inequality."
  answer="s>-28"
  answerForm="decimal"
  answerDisplay="$s>-28$"
  hint="Translate each phrase using the phrase table above, then divide by the coefficient of $s$, watching its sign."
>}}

{{< fillin
  question="Translate and solve: Fifteen less than $a$ is at least $-7$. Enter the solution as an inequality."
  answer="a\geq8"
  answerForm="decimal"
  answerDisplay="$a\geq8$"
  hint="Translate each phrase using the phrase table above (mind which quantity is subtracted from which), then isolate $a$."
>}}

### Solve applications with linear inequalities

{{< fillin
  question="The elevator in an apartment building has a sign that says the maximum weight is 2,100 pounds. If the average weight of one person is 150 pounds, what is the maximum number of people who can safely ride the elevator?"
  answer="14"
  answerForm="decimal"
  answerDisplay="14 people"
  hint="Write an inequality for the total weight of the riders against the posted maximum, solve it, and take the largest whole number that satisfies it."
>}}

{{< fillin
  question="Kimuyen needs to earn \$4,150 per month to pay all her expenses. Her job pays her \$3,475 per month plus 4% of her total sales. What is the minimum total sales, in dollars, Kimuyen needs?"
  answer="16875"
  answerForm="decimal"
  answerDisplay="\$16,875"
  hint="Her pay is the monthly base plus 4% of her sales; require it to be at least her expenses and solve for the sales."
>}}

{{< fillin
  question="Kiyoshi's phone plan costs \$17.50 per month plus \$0.15 per text message. What is the maximum number of text messages Kiyoshi can send so the phone bill is no more than \$56.60?"
  answer="260"
  answerForm="decimal"
  answerDisplay="260 messages"
  hint="Write an inequality: the monthly charge plus the message charges is at most the budget. Solve it and take the largest whole number that satisfies it."
>}}

{{< fillin
  question="Noe installs and configures software on home computers. He charges \$125 per job. His monthly expenses are \$1,600. What is the minimum number of jobs he must work to make a profit of at least \$2,400?"
  answer="32"
  answerForm="decimal"
  answerDisplay="32 jobs"
  hint="Profit is revenue minus expenses: write an inequality for a profit of at least \$2,400, then solve for the number of jobs."
>}}

---

<small>Adapted from [Intermediate Algebra 2e, Section 2.5](https://openstax.org/books/intermediate-algebra-2e/pages/2-5-solve-linear-inequalities) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/details/books/intermediate-algebra-2e). Changes: adapted the source into an interactive web section; recreated the single-bound number-line figures as accessible inline graphics (the bounded intervals of the second example and the identity’s graph are described in words), drawing a parenthesis at 2 for $p>2$ where the source figure draws a bracket; set the phrase-to-symbol reference as a markdown table; corrected “ends upon the right” to “ends up on the right”; omitted the Be Prepared quiz, the number-line summary figure, the Key Concepts summary (its properties appear in the body callouts), and the Self Check checklist; converted selected Try It exercises into answer-checked activities, posing the contradiction Try It as a multiple choice among descriptions of the solution; and adapted selected end-of-section exercises into an interactive Practice block, posing the contradiction exercise $18q-4(10-3q)<5(6q-8)$ the same way.</small>
