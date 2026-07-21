---
title: Solve Systems of Equations by Elimination
description: >-
  Solving a system of two linear equations by strategically multiplying and
  adding the equations to eliminate a variable — including the "How To"
  procedure and the cases where one or both equations must be multiplied by
  a constant first — plus applications and choosing the most convenient
  method, adapted from OpenStax Elementary Algebra 2e, Section 5.3.
source_section: "5.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve a system of
  equations by elimination, solve applications of systems of equations by
  elimination, and choose the most convenient method to solve a system of
  linear equations.
{{< /callout >}}

## Solve a System of Equations by Elimination

We have solved systems of linear equations by graphing and by substitution.
Graphing works well when the coefficients are small and the solution has
integer values. Substitution works well when one equation is already solved
for a variable, or can easily be solved for one.

The third method for solving systems of linear equations is called
**elimination**. It is based on the Addition Property of Equality, which
says that adding the same quantity to both sides of an equation preserves
equality. We extend that idea: if $a=b$ and $c=d$, then $a+c=b+d$ — adding
equal quantities to both sides of an equation gives equal results.

To solve a system by elimination, we start with both equations in standard
form, then decide which variable will be easiest to eliminate. We want the
coefficients of that variable to be opposites, so that adding the equations
eliminates it. Notice how that works when we add these two equations
together:

$$
\begin{array}{rcl}
3x + y &=& 5 \\
2x - y &=& 0 \\
5x &=& 5
\end{array}
$$

The $y$'s add to zero, leaving one equation with one variable. Now try this
system:

$$
\left\{\begin{array}{l}
x + 4y = 2 \\
2x + 5y = -2
\end{array}\right.
$$

This time no variable is ready to eliminate right away. But multiplying the
first equation by $-2$ makes the coefficients of $x$ opposites:
$-2(x+4y) = -2(2)$ gives $-2x - 8y = -4$, while the second equation stays
the same. Adding the new first equation to the second eliminates $x$:

$$
\begin{array}{rcl}
-2x - 8y &=& -4 \\
2x + 5y &=& -2 \\
-3y &=& -6
\end{array}
$$

Sometimes we can't make one variable's coefficients opposite by multiplying
only one equation — unless we're willing to use fractions. Instead, we
multiply *both* equations by (different) constants. For
$4x - 3y = 10$ and $3x + 5y = -7$, multiplying the first equation by $3$
and the second by $-4$ turns the $x$-coefficients into $12$ and $-12$:

$$
\left\{\begin{array}{l}
12x - 9y = 30 \\
-12x - 20y = 28
\end{array}\right.
$$

Adding these eliminates the $x$'s, leaving $-29y = 58$.

Once we have an equation with just one variable, we solve it, then
substitute that value into one of the original equations to solve for the
remaining variable — and, as always, check the answer in **both** original
equations.

**Example.** Solve the system by elimination.

$$
\left\{\begin{array}{l}
2x + y = 7 \\
x - 2y = 6
\end{array}\right.
$$

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Write both equations in standard form. If any coefficients are fractions, clear them. | Both equations are already in standard form, with no fractions. | |
| 2. Make the coefficients of one variable opposites. Decide which variable to eliminate, then multiply one or both equations so its coefficients become opposites. | We can eliminate $y$ by multiplying the first equation by $2$. | $\begin{aligned} 2(2x+y) &= 2(7) \\ 4x + 2y &= 14 \end{aligned}$ |
| 3. Add the equations resulting from Step 2 to eliminate one variable. | Add the $x$'s, $y$'s, and constants. | $\begin{aligned} 4x+2y &= 14 \\ x-2y &= 6 \\ 5x &= 20 \end{aligned}$ |
| 4. Solve for the remaining variable. | Divide both sides by $5$. | $x = 4$ |
| 5. Substitute the solution from Step 4 into one of the original equations, then solve for the other variable. | Substitute $x=4$ into $x-2y=6$. | $\begin{aligned} 4 - 2y &= 6 \\ y &= -1 \end{aligned}$ |
| 6. Write the solution as an ordered pair. | | $(4, -1)$ |
| 7. Check that the ordered pair is a solution to **both** original equations. | Substitute $(4,-1)$ into both equations. | $\begin{aligned} 2(4)+(-1) &\overset{?}{=} 7, \text{ so } 7=7\ \checkmark \\ 4-2(-1) &\overset{?}{=} 6, \text{ so } 6=6\ \checkmark \end{aligned}$ |

{{< callout type="info" >}}
  **How to solve a system of equations by elimination.**

  1. **Write both equations in standard form.** If any coefficients are
     fractions, clear them.
  2. **Make the coefficients of one variable opposites.** Decide which
     variable you will eliminate. Multiply one or both equations so that
     the coefficients of that variable are opposites.
  3. **Add the equations** resulting from Step 2 to eliminate one variable.
  4. **Solve for the remaining variable.**
  5. **Substitute** the solution from Step 4 into one of the original
     equations. Then solve for the other variable.
  6. **Write the solution as an ordered pair.**
  7. **Check** that the ordered pair is a solution to **both** original
     equations.
{{< /callout >}}

{{< fillin
  question="Solve the system by elimination: $2x + y = 5$ and $x - y = 4$. What is x?"
  answer="3"
  hint="The y-coefficients are already opposites (1 and -1), so add the equations directly to eliminate y."
>}}

Now let's look at a system where multiplying just one equation makes a pair
of coefficients opposite.

**Example.** Solve the system by elimination.

$$
\left\{\begin{array}{l}
3x - 2y = -2 \\
5x - 6y = 10
\end{array}\right.
$$

Neither variable's coefficients are opposites yet, but multiplying the
first equation by $-3$ makes the $y$-coefficients opposite ($6$ and $-6$):
$-3(3x-2y) = -3(-2)$ gives $-9x + 6y = 6$. Adding that to the second
equation:

$$
\begin{array}{rcl}
-9x + 6y &=& 6 \\
5x - 6y &=& 10 \\
-4x &=& 16
\end{array}
$$

So $x = -4$. Substituting $x=-4$ into $3x-2y=-2$ gives $3(-4) - 2y = -2$,
so $-12 - 2y = -2$, and $-2y = 10$, so $y = -5$. The solution is $(-4,-5)$.
Check: $3(-4)-2(-5) = -12+10=-2$ ✓ and $5(-4)-6(-5)=-20+30=10$ ✓.

{{< fillin
  question="Solve the system by elimination: $4x - 3y = 1$ and $5x - 9y = -4$. What is y?"
  answer="1"
  hint="Multiply the first equation by -3 so its y-coefficient becomes opposite the second equation's y-coefficient, then add."
>}}

Sometimes we must multiply *both* equations by constants to make a pair of
coefficients opposite.

**Example.** Solve the system by elimination.

$$
\left\{\begin{array}{l}
4x - 3y = 9 \\
7x + 2y = -6
\end{array}\right.
$$

Neither variable can be eliminated by multiplying just one equation. To
make the $y$-coefficients opposite, multiply the first equation by $2$ and
the second by $3$:

$$
\left\{\begin{array}{l}
2(4x-3y) = 2(9) \\
3(7x+2y) = 3(-6)
\end{array}\right.
\quad\Longrightarrow\quad
\left\{\begin{array}{l}
8x - 6y = 18 \\
21x + 6y = -18
\end{array}\right.
$$

Adding these equations eliminates $y$: $29x = 0$, so $x=0$. Substituting
$x=0$ into $7x+2y=-6$ gives $2y=-6$, so $y=-3$. The solution is $(0,-3)$.

{{< fillin
  question="Solve the system by elimination: $3x - 4y = -9$ and $5x + 3y = 14$. What is y?"
  answer="3"
  hint="Multiply the first equation by 3 and the second by 4 so the x-coefficients become opposites, then add and solve for x first."
>}}

When a system has fractions, clear them first by multiplying each equation
by its LCD — then eliminate as usual. For
$x + \tfrac{1}{2}y = 6$ and $\tfrac{3}{2}x + \tfrac{2}{3}y = \tfrac{17}{2}$,
multiplying the first equation by $2$ and the second by $6$ clears the
fractions: $2x+y=12$ and $9x+4y=51$. Multiplying the first of *those* by
$-4$ gives $-8x-4y=-48$; adding it to $9x+4y=51$ leaves $x=3$, and
substituting back gives $y=6$. The solution is $(3,6)$.

Not every system has exactly one solution. Recall from graphing that two
equations describing the same line have infinitely many solutions (a
consistent, dependent system), and two equations describing parallel lines
have no solution at all (an inconsistent system). Elimination reveals both
cases too.

**Example.** Solve the system by elimination.

$$
\left\{\begin{array}{l}
3x + 4y = 12 \\
y = 3 - \tfrac{3}{4}x
\end{array}\right.
$$

Writing the second equation in standard form gives
$\tfrac{3}{4}x + y = 3$; multiplying by $4$ clears the fraction:
$3x+4y=12$ — the very same equation as the first! Multiplying this
equation by $-1$ and adding it to the first equation gives $0=0$, a true
statement. The system is consistent but dependent: the two equations
describe the same (coincident) line, so the system has infinitely many
solutions.

{{< multiplechoice
  question="Solve the system by elimination: $5x - 3y = 15$ and $y = -5 + \tfrac{5}{3}x$. How many solutions does the system have?"
  hint="Rewrite the second equation in standard form and compare it to the first - do they describe the same line?"
  answer="infinitely many solutions"
>}}
exactly one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

**Example.** Solve the system by elimination.

$$
\left\{\begin{array}{l}
-6x + 15y = 10 \\
2x - 5y = -5
\end{array}\right.
$$

Multiplying the second equation by $3$ gives $6x - 15y = -15$. Adding this
to the first equation, the variables cancel and we're left with
$0 = -5$ — a false statement. The system is inconsistent: the two equations
describe parallel lines, so the system has no solution.

{{< multiplechoice
  question="Solve the system by elimination: $-3x + 2y = 8$ and $9x - 6y = 13$. How many solutions does the system have?"
  hint="Multiply the first equation by 3 and add it to the second. If the variables cancel and leave a false statement, the lines are parallel."
  answer="no solution"
>}}
exactly one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

## Solve Applications of Systems of Equations by Elimination

Many application problems translate directly into a system of two equations
in standard form, which makes elimination a natural choice. As before, we
follow the problem-solving strategy: read, identify, name, translate,
solve, check, and answer.

**Example.** The sum of two numbers is 39. Their difference is 9. Find the
numbers.

Let $n =$ the first number and $m =$ the second number. "The sum of two
numbers is 39" translates to $n+m=39$; "their difference is 9" translates
to $n - m = 9$. The system is:

$$
\left\{\begin{array}{l}
n + m = 39 \\
n - m = 9
\end{array}\right.
$$

The coefficients of $m$ are already opposite, so add the equations:
$2n = 48$, giving $n = 24$. Substituting into $n+m=39$ gives $24+m=39$, so
$m=15$. Check: $24+15=39$ and $24-15=9$. The numbers are 24 and 15.

{{< fillin
  question="The sum of two numbers is 42. Their difference is 8. What is the larger of the two numbers?"
  answer="25"
  hint="Let n and m be the numbers, with $n + m = 42$ and $n - m = 8$. Add the equations to eliminate m."
>}}

**Example.** Joe stops at a burger restaurant every day on his way to work.
Monday he had one order of medium fries and two small sodas, for a total
of 620 calories. Tuesday he had two orders of medium fries and one small
soda, for a total of 820 calories. How many calories are in one order of
medium fries? How many calories are in one small soda?

Let $f =$ the number of calories in one order of medium fries, and
$s =$ the number of calories in one small soda. "One order of fries and two
sodas had 620 calories" translates to $f+2s=620$; "two orders of fries and
one soda had 820 calories" translates to $2f+s=820$. The system is:

$$
\left\{\begin{array}{l}
f + 2s = 620 \\
2f + s = 820
\end{array}\right.
$$

Multiplying the first equation by $-2$ gives $-2f-4s=-1240$. Adding this to
the second equation eliminates $f$: $-3s = -420$, so $s = 140$. Substituting
$s=140$ into $f+2s=620$ gives $f + 280 = 620$, so $f = 340$. The fries have
340 calories and the soda has 140 calories.

{{< fillin
  question="Malik buys a bag of diapers and 2 cans of formula for a total of \$37. The next week he buys 2 bags of diapers and 5 cans of formula for a total of \$87. How much does one bag of diapers cost, in dollars?"
  answer="11"
  answerDisplay="\$11"
  hint="Let d = the cost of a bag of diapers and c = the cost of a can of formula. Then $d + 2c = 37$ and $2d + 5c = 87$. Multiply the first equation by -2 and add to eliminate d."
>}}

## Choose the Most Convenient Method to Solve a System of Linear Equations

You now know three ways to solve a system of linear equations: graphing,
substitution, and elimination. In a later math class you'll usually have to
decide for yourself which method to use, so it helps to recognize which
method is easiest for a given system.

| Graphing | Substitution | Elimination |
| :--- | :--- | :--- |
| Use when you need a picture of the situation. | Use when one equation is already solved for one variable. | Use when the equations are already in standard form. |

**Example.** For each system of linear equations, decide whether it would
be more convenient to solve it by substitution or elimination.

(a) $3x+8y=40$ and $7x-4y=-32$ — both equations are already in standard
form, so elimination will be most convenient.

(b) $5x+6y=12$ and $y=\tfrac{2}{3}x-1$ — the second equation is already
solved for $y$, so substitution will be most convenient.

{{< multiplechoice
  question="For the system $4x - 5y = -32$ and $3x + 2y = -1$, both equations are in standard form. Which method is more convenient?"
  hint="Neither equation is already solved for a variable, but both are in standard form ready for adding."
  answer="elimination"
>}}
substitution
elimination
{{< /multiplechoice >}}

## Key terms

**elimination** — a method for solving a system of linear equations in
which the equations are added together, after being multiplied by
constants if necessary, so that one variable cancels out. **consistent,
dependent system** — a system whose equations describe the same line, so it
has infinitely many solutions; eliminating a variable leaves a true
statement like $0=0$. **inconsistent system** — a system whose equations
describe parallel lines, so it has no solution; eliminating a variable
leaves a false statement like $0=-5$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.3: Solve Systems of Equations by Elimination](https://openstax.org/books/elementary-algebra-2e/pages/5-3-solve-systems-of-equations-by-elimination) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the seven-step worked example and the Choose-the-Method comparison as markdown tables; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback — including turning the consistent/inconsistent Try Its into multiple-choice questions about the number of solutions, since a word answer like "no solution" can't be graded by the math checker.</small>
