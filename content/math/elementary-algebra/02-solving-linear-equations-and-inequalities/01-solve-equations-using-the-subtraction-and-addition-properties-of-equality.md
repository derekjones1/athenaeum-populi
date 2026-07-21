---
title: Solve Equations Using the Subtraction and Addition Properties of Equality
description: >-
  Verifying whether a value is a solution of an equation, solving equations
  with the Subtraction and Addition Properties of Equality, simplifying
  before isolating the variable, and translating sentences and applications
  into equations — adapted from OpenStax Elementary Algebra 2e, Section 2.1.
source_section: "2.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** verify a solution of
  an equation, solve equations using the Subtraction and Addition Properties
  of Equality, solve equations that require simplification, translate to an
  equation and solve, and translate and solve applications.
{{< /callout >}}

## Verify a Solution of an Equation

Solving an equation is like discovering the answer to a puzzle. The purpose
in solving an equation is to find the value or values of the variable that
make each side of the equation the same — so that we end up with a true
statement. Any value of the variable that makes the equation true is called
a **solution** to the equation. It is the answer to the puzzle!

{{< callout type="info" >}}
  **Solution of an equation.** A solution of an equation is a value of a
  variable that makes a true statement when substituted into the equation.
{{< /callout >}}

{{< callout type="info" >}}
  **To determine whether a number is a solution to an equation.**

  1. Substitute the number in for the variable in the equation.
  2. Simplify the expressions on both sides of the equation.
  3. Determine whether the resulting equation is true (the left side is
     equal to the right side). If it is true, the number is a solution. If
     it is not true, the number is not a solution.
{{< /callout >}}

**Example.** Determine whether $x = \tfrac{3}{2}$ is a solution of
$4x - 2 = 2x + 1$.

Since a solution to an equation is a value of the variable that makes the
equation true, begin by substituting $\tfrac{3}{2}$ for $x$.

$$
\begin{array}{lrcl}
& 4x - 2 &=& 2x + 1 \\[4pt]
\text{Substitute } \tfrac{3}{2} \text{ for } x. & 4\left(\tfrac{3}{2}\right) - 2 &\overset{?}{=}& 2\left(\tfrac{3}{2}\right) + 1 \\[4pt]
\text{Multiply.} & 6 - 2 &\overset{?}{=}& 3 + 1 \\[4pt]
\text{Subtract.} & 4 &=& 4 \; \checkmark
\end{array}
$$

Since $x = \tfrac{3}{2}$ results in a true equation ($4$ is in fact equal to
$4$), $\tfrac{3}{2}$ is a solution to the equation $4x - 2 = 2x + 1$.

{{< fillin
  question="Substitute $y = \tfrac{4}{3}$ into both sides of $9y + 2 = 6y + 3$ and simplify. What value does the left side, $9y + 2$, come out to?"
  answer="14"
  hint="9 times $\tfrac{4}{3}$ is $\tfrac{36}{3}$, which simplifies to 12. Then add 2."
>}}

Since the left side simplifies to the same value as the right side ($6$),
$y = \tfrac{4}{3}$ is a solution of $9y + 2 = 6y + 3$.

## Solve Equations Using the Subtraction and Addition Properties of Equality

We are going to use a model to clarify the process of solving an equation.
An envelope represents the variable — since its contents are unknown — and
each counter represents one. Suppose both sides of a workspace have the same
number of counters, but some counters are "hidden" in the envelope on the
left, alongside three loose counters, while the right side shows eight
loose counters. Can you tell how many counters are in the envelope?

Perhaps you are thinking: "I need to remove the three counters at the
bottom left to get the envelope by itself. The three counters on the left
can be matched with three on the right, so I can take them away from both
sides. That leaves five on the right — so there must be five counters in
the envelope."

The algebraic equation that matches this situation is $x + 3 = 8$, where
each side of the workspace represents an expression and the equal sign takes
the place of the center line. Let's write algebraically the steps we took to
discover how many counters were in the envelope:

$$
\begin{array}{lrcl}
& x + 3 &=& 8 \\[4pt]
\text{First, we took away three from each side.} & x + 3 - 3 &=& 8 - 3 \\[4pt]
\text{Then we were left with five.} & x &=& 5
\end{array}
$$

Check: five in the envelope plus three more does equal eight!

$$5 + 3 = 8$$

Our model has given us an idea of what we need to do to solve one kind of
equation. The goal is to isolate the variable by itself on one side of the
equation. To solve equations such as these mathematically, we use the
**Subtraction Property of Equality**.

{{< callout type="info" >}}
  **Subtraction Property of Equality.** For any numbers $a$, $b$, and $c$: if
  $a = b$, then $a - c = b - c$. When you subtract the same quantity from
  both sides of an equation, you still have equality.
{{< /callout >}}

Let's see how to use this property to solve an equation. Remember, the goal
is to isolate the variable on one side of the equation, and we check our
solutions by substituting the value into the equation to make sure we have a
true statement.

**Example.** Solve: $y + 37 = -13$.

To get $y$ by itself, we will undo the addition of $37$ by using the
Subtraction Property of Equality.

$$
\begin{array}{lrcl}
& y + 37 &=& -13 \\[4pt]
\text{Subtract 37 from each side to 'undo' the addition.} & y + 37 - 37 &=& -13 - 37 \\[4pt]
\text{Simplify.} & y &=& -50
\end{array}
$$

Check: substitute $y = -50$.

$$
\begin{array}{rcl}
y + 37 &=& -13 \\
-50 + 37 &\overset{?}{=}& -13 \\
-13 &=& -13 \; \checkmark
\end{array}
$$

Since $y = -50$ makes $y + 37 = -13$ a true statement, we have the solution
to this equation.

{{< fillin
  question="Solve: $x + 19 = -27$."
  answer="-46"
  hint="Subtract 19 from both sides to undo the addition."
>}}

{{< fillin
  question="Solve: $x + 16 = -34$."
  answer="-50"
  hint="Subtract 16 from both sides to undo the addition."
>}}

What happens when an equation has a number subtracted from the variable, as
in the equation $x - 5 = 8$? We use another property of equations to solve
equations where a number is subtracted from the variable. We want to isolate
the variable, so to 'undo' the subtraction we will add the number to both
sides. We use the **Addition Property of Equality**.

{{< callout type="info" >}}
  **Addition Property of Equality.** For any numbers $a$, $b$, and $c$: if
  $a = b$, then $a + c = b + c$. When you add the same quantity to both
  sides of an equation, you still have equality.
{{< /callout >}}

In the previous example, $37$ was added to $y$, and so we subtracted $37$ to
'undo' the addition. In the next example, we will need to 'undo' subtraction
by using the Addition Property of Equality.

**Example.** Solve: $a - 28 = -37$.

$$
\begin{array}{lrcl}
& a - 28 &=& -37 \\[4pt]
\text{Add 28 to each side to 'undo' the subtraction.} & a - 28 + 28 &=& -37 + 28 \\[4pt]
\text{Simplify.} & a &=& -9
\end{array}
$$

Check: substitute $a = -9$.

$$
\begin{array}{rcl}
a - 28 &=& -37 \\
-9 - 28 &\overset{?}{=}& -37 \\
-37 &=& -37 \; \checkmark
\end{array}
$$

The solution to $a - 28 = -37$ is $a = -9$.

{{< fillin
  question="Solve: $n - 61 = -75$."
  answer="-14"
  hint="Add 61 to both sides to undo the subtraction."
>}}

{{< fillin
  question="Solve: $p - 41 = -73$."
  answer="-32"
  hint="Add 41 to both sides to undo the subtraction."
>}}

**Example.** Solve: $x - \tfrac{5}{8} = \tfrac{3}{4}$.

$$
\begin{array}{lrcl}
& x - \tfrac{5}{8} &=& \tfrac{3}{4} \\[4pt]
\text{Use the Addition Property of Equality.} & x - \tfrac{5}{8} + \tfrac{5}{8} &=& \tfrac{3}{4} + \tfrac{5}{8} \\[4pt]
\text{Find the LCD to add the fractions on the right.} & x - \tfrac{5}{8} + \tfrac{5}{8} &=& \tfrac{6}{8} + \tfrac{5}{8} \\[4pt]
\text{Simplify.} & x &=& \tfrac{11}{8}
\end{array}
$$

Check: substitute $x = \tfrac{11}{8}$.

$$
\begin{array}{rcl}
x - \tfrac{5}{8} &=& \tfrac{3}{4} \\[2pt]
\tfrac{11}{8} - \tfrac{5}{8} &\overset{?}{=}& \tfrac{3}{4} \\[2pt]
\tfrac{6}{8} &\overset{?}{=}& \tfrac{3}{4} \\[2pt]
\tfrac{3}{4} &=& \tfrac{3}{4} \; \checkmark
\end{array}
$$

The solution to $x - \tfrac{5}{8} = \tfrac{3}{4}$ is $x = \tfrac{11}{8}$.

{{< fillin
  question="Solve: $p - \tfrac{2}{3} = \tfrac{5}{6}$."
  answer="\frac{3}{2}"
  hint="Add $\tfrac{2}{3}$ to both sides, then find a common denominator to add the fractions."
>}}

{{< fillin
  question="Solve: $q - \tfrac{1}{2} = \tfrac{5}{6}$."
  answer="\frac{4}{3}"
  hint="Add $\tfrac{1}{2}$ to both sides, then find a common denominator to add the fractions."
>}}

The next example is an equation with decimals.

**Example.** Solve: $n - 0.63 = -4.2$.

$$
\begin{array}{lrcl}
& n - 0.63 &=& -4.2 \\[4pt]
\text{Use the Addition Property of Equality.} & n - 0.63 + 0.63 &=& -4.2 + 0.63 \\[4pt]
\text{Add.} & n &=& -3.57
\end{array}
$$

Check: let $n = -3.57$.

$$
\begin{array}{rcl}
n - 0.63 &=& -4.2 \\
-3.57 - 0.63 &\overset{?}{=}& -4.2 \\
-4.2 &=& -4.2 \; \checkmark
\end{array}
$$

{{< fillin
  question="Solve: $b - 0.47 = -2.1$."
  answer="-1.63"
  hint="Add 0.47 to both sides."
>}}

{{< fillin
  question="Solve: $c - 0.93 = -4.6$."
  answer="-3.67"
  hint="Add 0.93 to both sides."
>}}

## Solve Equations That Require Simplification

In the previous examples, we were able to isolate the variable with just one
operation. Most of the equations we encounter in algebra will take more
steps to solve. Usually, we will need to simplify one or both sides of an
equation before using the Subtraction or Addition Properties of Equality.

You should always simplify as much as possible before you try to isolate the
variable. Remember that to simplify an expression means to do all the
operations in the expression. Simplify one side of the equation at a time.
Note that simplification is different from the process used to solve an
equation in which we apply an operation to both sides.

**Example.** Solve $9x - 5 - 8x - 6 = 7$.

**Step 1. Simplify the expressions on each side as much as possible.**
Rearrange the terms, using the Commutative Property of Addition, and combine
like terms. Notice that each side is now simplified as much as possible.

$$9x - 5 - 8x - 6 = 7 \;\Rightarrow\; 9x - 8x - 5 - 6 = 7 \;\Rightarrow\; x - 11 = 7$$

**Step 2. Isolate the variable.** Now isolate $x$. Undo subtraction by
adding $11$ to both sides.

$$x - 11 + 11 = 7 + 11$$

**Step 3. Simplify the expressions on both sides of the equation.**

$$x = 18$$

**Step 4. Check the solution.** Substitute $x = 18$.

$$
\begin{array}{rcl}
9x - 5 - 8x - 6 &=& 7 \\
9(18) - 5 - 8(18) - 6 &\overset{?}{=}& 7 \\
162 - 5 - 144 - 6 &\overset{?}{=}& 7 \\
157 - 144 - 6 &\overset{?}{=}& 7 \\
13 - 6 &\overset{?}{=}& 7 \\
7 &=& 7 \; \checkmark
\end{array}
$$

The solution to $9x - 5 - 8x - 6 = 7$ is $x = 18$.

{{< fillin
  question="Solve: $8y - 4 - 7y - 7 = 4$."
  answer="15"
  hint="Combine like terms on the left first, then isolate the variable."
>}}

{{< fillin
  question="Solve: $6z + 5 - 5z - 4 = 3$."
  answer="2"
  hint="Combine like terms on the left first, then isolate the variable."
>}}

**Example.** Solve $5(n - 4) - 4n = -8$.

We simplify both sides of the equation as much as possible before we try to
isolate the variable.

$$
\begin{array}{lrcl}
& 5(n - 4) - 4n &=& -8 \\[4pt]
\text{Distribute on the left.} & 5n - 20 - 4n &=& -8 \\[4pt]
\text{Use the Commutative Property to rearrange terms.} & 5n - 4n - 20 &=& -8 \\[4pt]
\text{Combine like terms.} & n - 20 &=& -8 \\[4pt]
\text{Undo subtraction by using the Addition Property of Equality.} & n - 20 + 20 &=& -8 + 20 \\[4pt]
\text{Add.} & n &=& 12
\end{array}
$$

Check: substitute $n = 12$.

$$
\begin{array}{rcl}
5(n - 4) - 4n &=& -8 \\
5(12 - 4) - 4(12) &\overset{?}{=}& -8 \\
5(8) - 48 &\overset{?}{=}& -8 \\
40 - 48 &\overset{?}{=}& -8 \\
-8 &=& -8 \; \checkmark
\end{array}
$$

The solution to $5(n - 4) - 4n = -8$ is $n = 12$.

{{< fillin
  question="Solve: $5(p - 3) - 4p = -10$."
  answer="5"
  hint="Distribute first, combine like terms, then isolate the variable."
>}}

{{< fillin
  question="Solve: $4(q + 2) - 3q = -8$."
  answer="-16"
  hint="Distribute first, combine like terms, then isolate the variable."
>}}

**Example.** Solve $3(2y - 1) - 5y = 2(y + 1) - 2(y + 3)$.

We simplify both sides of the equation before we isolate the variable.

$$
\begin{array}{lrcl}
& 3(2y - 1) - 5y &=& 2(y + 1) - 2(y + 3) \\[4pt]
\text{Distribute on both sides.} & 6y - 3 - 5y &=& 2y + 2 - 2y - 6 \\[4pt]
\text{Use the Commutative Property of Addition.} & 6y - 5y - 3 &=& 2y - 2y + 2 - 6 \\[4pt]
\text{Combine like terms.} & y - 3 &=& -4 \\[4pt]
\text{Undo subtraction by using the Addition Property of Equality.} & y - 3 + 3 &=& -4 + 3 \\[4pt]
\text{Add.} & y &=& -1
\end{array}
$$

Check: let $y = -1$.

$$
\begin{array}{rcl}
3(2y - 1) - 5y &=& 2(y + 1) - 2(y + 3) \\
3(2(-1) - 1) - 5(-1) &\overset{?}{=}& 2(-1 + 1) - 2(-1 + 3) \\
3(-2 - 1) + 5 &\overset{?}{=}& 2(0) - 2(2) \\
3(-3) + 5 &\overset{?}{=}& 0 - 4 \\
-9 + 5 &\overset{?}{=}& -4 \\
-4 &=& -4 \; \checkmark
\end{array}
$$

The solution to $3(2y - 1) - 5y = 2(y + 1) - 2(y + 3)$ is $y = -1$.

{{< fillin
  question="Solve: $4(2h - 3) - 7h = 6(h - 2) - 6(h - 1)$."
  answer="6"
  hint="Distribute on both sides, combine like terms on each side, then isolate the variable."
>}}

{{< fillin
  question="Solve: $2(5x + 2) - 9x = 3(x - 2) - 3(x - 4)$."
  answer="2"
  hint="Distribute on both sides, combine like terms on each side, then isolate the variable."
>}}

## Translate to an Equation and Solve

To solve applications algebraically, we will begin by translating from
English sentences into equations. Our first step is to look for the word
(or words) that would translate to the equals sign — words such as "is,"
"is equal to," "is the same as," "the result is," "gives," "was," and "will
be" all translate to $=$.

{{< callout type="info" >}}
  **Translate an English sentence to an algebraic equation.**

  1. Locate the "equals" word(s). Translate to an equals sign ($=$).
  2. Translate the words to the left of the "equals" word(s) into an
     algebraic expression.
  3. Translate the words to the right of the "equals" word(s) into an
     algebraic expression.
{{< /callout >}}

**Example.** Translate and solve: Eleven more than $x$ is equal to $54$.

$$
\begin{array}{lrcl}
\text{Translate.} & x + 11 &=& 54 \\[4pt]
\text{Subtract 11 from both sides.} & x + 11 - 11 &=& 54 - 11 \\[4pt]
\text{Simplify.} & x &=& 43
\end{array}
$$

Check: is $54$ eleven more than $43$?

$$43 + 11 \overset{?}{=} 54 \qquad 54 = 54 \; \checkmark$$

{{< fillin
  question="Translate and solve: Ten more than x is equal to 41."
  answer="31"
  hint="Ten more than x translates to $x + 10 = 41$."
>}}

{{< fillin
  question="Translate and solve: Twelve less than x is equal to 51."
  answer="63"
  hint="Twelve less than x translates to $x - 12 = 51$."
>}}

**Example.** Translate and solve: The difference of $12t$ and $11t$ is
$-14$.

$$
\begin{array}{lrcl}
\text{Translate.} & 12t - 11t &=& -14 \\[4pt]
\text{Simplify.} & t &=& -14
\end{array}
$$

Check: substitute $t = -14$.

$$12(-14) - 11(-14) \overset{?}{=} -14 \qquad -168 + 154 \overset{?}{=} -14 \qquad -14 = -14 \; \checkmark$$

{{< fillin
  question="Translate and solve: The difference of 4x and 3x is 14."
  answer="14"
  hint="The difference of 4x and 3x translates to $4x - 3x = 14$."
>}}

{{< fillin
  question="Translate and solve: The difference of 7a and 6a is -8."
  answer="-8"
  hint="The difference of 7a and 6a translates to $7a - 6a = -8$."
>}}

## Translate and Solve Applications

Most of the time a question that requires an algebraic solution comes out
of a real-life question. To begin with, that question is asked in English
(or the language of the person asking) and not in math symbols. Because of
this, it is an important skill to be able to translate an everyday situation
into algebraic language.

We will start by restating the problem in just one sentence, assign a
variable, and then translate the sentence into an equation to solve. When
assigning a variable, choose a letter that reminds you of what you are
looking for. For example, you might use $q$ for the number of quarters if
you were solving a problem about coins.

{{< callout type="info" >}}
  **Solve an application.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
  2. **Identify** what we are looking for.
  3. **Name** what we are looking for. Choose a variable to represent that
     quantity.
  4. **Translate** into an equation. It may be helpful to restate the
     problem in one sentence with the important information.
  5. **Solve** the equation using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

**Example.** The MacIntyre family recycled newspapers for two months. The
two months of newspapers weighed a total of $57$ pounds. The second month,
the newspapers weighed $28$ pounds. How much did the newspapers weigh the
first month?

Read the problem: it is about the weight of newspapers. We are asked to
find how much the newspapers weighed the first month. Let $w =$ weight of
the newspapers the first month.

Restate the problem in one sentence with the important information: weight
of newspapers the first month plus the weight of the newspapers the second
month equals $57$ pounds. Translate into an equation, using the variable
$w$:

$$w + 28 = 57$$

Solve the equation:

$$w + 28 - 28 = 57 - 28 \qquad w = 29$$

Check: does the first month's weight plus the second month's weight equal
$57$ pounds?

$$29 + 28 \overset{?}{=} 57 \qquad 57 = 57 \; \checkmark$$

Answer the question with a complete sentence: the first month the
newspapers weighed $29$ pounds.

{{< fillin
  question="Translate into an algebraic equation and solve: The Pappas family has two cats, Zeus and Athena. Together, they weigh 23 pounds. Zeus weighs 16 pounds. How much does Athena weigh, in pounds?"
  answer="7"
  hint="Let a = Athena's weight. Zeus's weight plus Athena's weight equals 23: $16 + a = 23$."
>}}

{{< fillin
  question="Translate into an algebraic equation and solve: Sam and Henry are roommates. Together, they have 68 books. Sam has 26 books. How many books does Henry have?"
  answer="42"
  hint="Let h = Henry's books. Sam's books plus Henry's books equals 68: $26 + h = 68$."
>}}

**Example.** Randell paid \$28,675 for his new car. This was \$875 less
than the sticker price. What was the sticker price of the car?

Read the problem. We are asked to find the sticker price of the car. Let
$s =$ the sticker price of the car.

Restate the problem in one sentence: \$28,675 is \$875 less than the
sticker price. Translate into an equation:

$$28{,}675 = s - 875$$

Solve the equation:

$$28{,}675 + 875 = s - 875 + 875 \qquad 29{,}550 = s$$

Check: is \$875 less than \$29,550 equal to \$28,675?

$$29{,}550 - 875 \overset{?}{=} 28{,}675 \qquad 28{,}675 = 28{,}675 \; \checkmark$$

The sticker price of the car was \$29,550.

{{< fillin
  question="Translate into an algebraic equation and solve: Eddie paid \$19,875 for his new car. This was \$1,025 less than the sticker price. What was the sticker price of the car, in dollars?"
  answer="20900"
  answerDisplay="\$20,900"
  hint="Let s = the sticker price. \$19,875 is \$1,025 less than s, so 19,875 = s - 1,025."
>}}

{{< fillin
  question="Translate into an algebraic equation and solve: The admission price for the movies during the day is \$7.75. This is \$3.25 less than the price at night. How much does the movie cost at night, in dollars?"
  answer="11"
  answerDisplay="\$11.00"
  hint="Let n = the night price. \$7.75 is \$3.25 less than n, so 7.75 = n - 3.25."
>}}

## Key terms

**solution of an equation** — a value of a variable that makes a true
statement when substituted into the equation. **Subtraction Property of
Equality** — if $a = b$, then $a - c = b - c$; subtracting the same
quantity from both sides of an equation preserves equality. **Addition
Property of Equality** — if $a = b$, then $a + c = b + c$; adding the same
quantity to both sides of an equation preserves equality.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 2.1: Solve Equations Using the Subtraction and Addition Properties of Equality](https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the envelope-and-counters figures as prose descriptions and the "Equals" word list and Step tables as prose/Callouts; omitted the Manipulative Mathematics callout, Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
