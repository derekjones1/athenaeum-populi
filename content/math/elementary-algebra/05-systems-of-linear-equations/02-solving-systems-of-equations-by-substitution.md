---
title: Solving Systems of Equations by Substitution
description: >-
  Solving a system of linear equations by substitution — including the
  general "How To" procedure, the dependent and inconsistent cases — and
  using substitution to solve applications with two unknowns. Adapted from
  OpenStax Elementary Algebra 2e, Section 5.2.
source_section: "5.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve a system of
  equations by substitution, and solve applications of systems of equations
  by substitution.
{{< /callout >}}

Solving systems of linear equations by graphing is a good way to visualize
the types of solutions that may result. However, there are many cases where
solving a system by graphing is inconvenient or imprecise. If the graphs
extend beyond the small grid with $x$ and $y$ both between $-10$ and $10$,
graphing the lines may be cumbersome. And if the solutions to the system are
not integers, it can be hard to read their values precisely from a graph.

In this section, we will solve systems of linear equations by the
**substitution** method.

## Solve a System of Equations by Substitution

We will use the same system we used first for graphing.

$$
\begin{cases} 2x+y=7 \\ x-2y=6 \end{cases}
$$

We will first solve one of the equations for either $x$ or $y$. We can
choose either equation and solve for either variable — but we'll try to
make a choice that will keep the work easy. Then we substitute that
expression into the other equation. The result is an equation with just one
variable — and we know how to solve those! After we find the value of one
variable, we substitute that value into one of the original equations and
solve for the other variable. Finally, we check our solution and make sure
it makes both equations true.

**Example.** Solve the system by substitution: $\begin{cases} 2x+y=7 \\
x-2y=6 \end{cases}$.

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Solve one of the equations for either variable. | We'll solve the first equation for $y$. | $2x+y=7$ becomes $y=7-2x$ |
| 2. Substitute the expression from Step 1 into the other equation. | Replace $y$ in the second equation with $7-2x$. | $x-2(7-2x)=6$ |
| 3. Solve the resulting equation. | Now we have an equation with just one variable. | $x-14+4x=6$, so $5x=20$, so $x=4$ |
| 4. Substitute the solution in Step 3 into one of the original equations to find the other variable. | We'll use the first equation and replace $x$ with $4$. | $2(4)+y=7$, so $8+y=7$, so $y=-1$ |
| 5. Write the solution as an ordered pair. | The ordered pair is $(x,y)$. | $(4,-1)$ |
| 6. Check that the ordered pair is a solution to both original equations. | Substitute $(4,-1)$ into both equations. | $\begin{aligned} 2(4)+(-1) &\overset{?}{=} 7, \text{ so } 7=7\ \checkmark \\ 4-2(-1) &\overset{?}{=} 6, \text{ so } 6=6\ \checkmark \end{aligned}$ |

Both equations are true, so $(4,-1)$ is the solution to the system.

{{< fillin
  question="Solve the system by substitution: $-2x + y = -11$ and $x + 3y = 9$."
  answer="(6,1)"
  hint="Solve the first equation for y, then substitute that expression for y in the second equation."
>}}

{{< callout type="info" >}}
  **How to solve a system of equations by substitution.**

  1. **Solve one of the equations for either variable.**
  2. **Substitute the expression from Step 1 into the other equation.**
  3. **Solve the resulting equation.**
  4. **Substitute the solution in Step 3 into one of the original equations to find the other variable.**
  5. **Write the solution as an ordered pair.**
  6. **Check that the ordered pair is a solution to both original equations.**
{{< /callout >}}

If one of the equations in the system is already given in slope-intercept
form, Step 1 is done for us.

**Example.** Solve the system by substitution: $\begin{cases} x+y=-1 \\
y=x+5 \end{cases}$.

The second equation is already solved for $y$, so we substitute the
expression $x+5$ in place of $y$ in the first equation: $x+(x+5)=-1$, so
$2x+5=-1$, so $2x=-6$, and $x=-3$. Substitute $x=-3$ into $y=x+5$ to find
$y$: $y=-3+5=2$. The ordered pair is $(-3,2)$.

Check: let $x=-3$ and $y=2$. Then $-3+2\overset{?}{=}-1$, so $-1=-1\
\checkmark$; and $2\overset{?}{=}-3+5$, so $2=2\ \checkmark$. Both equations
are true, so $(-3,2)$ is the solution to the system.

{{< fillin
  question="Solve the system by substitution: $x + y = 6$ and $y = 3x - 2$."
  answer="(2,4)"
  hint="The second equation is already solved for y — substitute $3x - 2$ for y in the first equation."
>}}

If the equations are given in standard form, we'll need to start by solving
for one of the variables.

**Example.** Solve the system by substitution: $\begin{cases} 3x+y=5 \\
2x+4y=-10 \end{cases}$.

We need to solve one equation for one variable. Solving the first equation
for $y$ gives $y=-3x+5$. Substitute $-3x+5$ for $y$ in the second equation:
$2x+4(-3x+5)=-10$, so $2x-12x+20=-10$, so $-10x=-30$, and $x=3$. Substitute
$x=3$ into $y=-3x+5$ to find $y$: $y=-3(3)+5=-4$. The ordered pair is
$(3,-4)$.

Check: let $x=3$ and $y=-4$. Then $3(3)+(-4)\overset{?}{=}5$, so
$9-4\overset{?}{=}5$, and $5=5\ \checkmark$; and
$2(3)+4(-4)\overset{?}{=}-10$, so $6-16\overset{?}{=}-10$, and
$-10=-10\ \checkmark$. The solution is $(3,-4)$.

{{< fillin
  question="Solve the system by substitution: $4x + y = 2$ and $3x + 2y = -1$."
  answer="(1,-2)"
  hint="Solve the first equation for y, then substitute that expression into the second equation."
>}}

Sometimes it is easier to solve for $x$ rather than $y$ — look for a
variable whose coefficient is $1$.

**Example.** Solve the system by substitution: $\begin{cases} x-2y=-2 \\
3x+2y=34 \end{cases}$.

We will solve the first equation for $x$ and then substitute the expression
into the second equation. Solving for $x$ gives $x=2y-2$. Substitute
$2y-2$ for $x$ in the second equation: $3(2y-2)+2y=34$, so $6y-6+2y=34$, so
$8y=40$, and $y=5$. Substitute $y=5$ into $x=2y-2$ to find $x$: $x=2(5)-2=8$.
The ordered pair is $(8,5)$.

Check: let $x=8$ and $y=5$. Then $8-2(5)\overset{?}{=}-2$, so
$8-10\overset{?}{=}-2$, and $-2=-2\ \checkmark$; and
$3(8)+2(5)\overset{?}{=}34$, so $24+10\overset{?}{=}34$, and $34=34\
\checkmark$. The solution is $(8,5)$.

{{< fillin
  question="Solve the system by substitution: $x - 5y = 13$ and $4x - 3y = 1$."
  answer="(-2,-3)"
  hint="Solve the first equation for x, since its coefficient is already 1."
>}}

When both equations are already solved for the same variable, it is easy to
substitute!

**Example.** Solve the system by substitution: $\begin{cases} y=-2x+5 \\
y=\tfrac{1}{2}x \end{cases}$.

Since both equations are solved for $y$, we can substitute one into the
other: $\tfrac{1}{2}x=-2x+5$. Clear the fraction by multiplying both sides
by $2$: $x=-4x+10$, so $5x=10$, and $x=2$. Substitute $x=2$ into
$y=\tfrac{1}{2}x$ to find $y$: $y=\tfrac{1}{2}(2)=1$. The ordered pair is
$(2,1)$.

Check: let $x=2$ and $y=1$. Then $1\overset{?}{=}\tfrac{1}{2}(2)$, and
$1=1\ \checkmark$; and $1\overset{?}{=}-2(2)+5$, so $1\overset{?}{=}-4+5$,
and $1=1\ \checkmark$. The solution is $(2,1)$.

{{< fillin
  question="Solve the system by substitution: $y = 3x - 16$ and $y = \tfrac{1}{3}x$."
  answer="(6,2)"
  hint="Both equations are already solved for y — set the two expressions equal, clear the fraction, and solve for x."
>}}

Be very careful with the signs in the next example.

**Example.** Solve the system by substitution: $\begin{cases} 4x+2y=4 \\
6x-y=8 \end{cases}$.

We need to solve one equation for one variable. Solving the first equation
for $y$ gives $2y=-4x+4$, so $y=-2x+2$. Substitute $-2x+2$ for $y$ in the
second equation: $6x-(-2x+2)=8$, so $6x+2x-2=8$, so $8x=10$, and
$x=\tfrac{5}{4}$. Substitute $x=\tfrac{5}{4}$ into $4x+2y=4$ to find $y$:
$4\left(\tfrac{5}{4}\right)+2y=4$, so $5+2y=4$, so $2y=-1$, and
$y=-\tfrac{1}{2}$. The ordered pair is $\left(\tfrac{5}{4},-\tfrac{1}{2}\right)$.

Check: let $x=\tfrac{5}{4}$ and $y=-\tfrac{1}{2}$. Substituting back into
both original equations gives $4=4\ \checkmark$ and $8=8\ \checkmark$. The
solution is $\left(\tfrac{5}{4},-\tfrac{1}{2}\right)$.

{{< fillin
  question="Solve the system by substitution: $x - 4y = -4$ and $-3x + 4y = 0$."
  answer="(2,\frac{3}{2})"
  answerDisplay="$(2, \tfrac{3}{2})$"
  hint="Solve the first equation for x, substitute into the second, and be careful with the negative signs."
>}}

Sometimes, when we solve the resulting equation, all the variable terms
cancel out.

**Example.** Solve the system by substitution: $\begin{cases} 4x-3y=6 \\
15y-20x=-30 \end{cases}$.

We need to solve one equation for one variable. Solving the first equation
for $x$ gives $x=\tfrac{3}{4}y+\tfrac{3}{2}$. Substitute this expression
into the second equation:
$15y-20\left(\tfrac{3}{4}y+\tfrac{3}{2}\right)=-30$, so
$15y-15y-30=-30$, so $-30=-30$.

Since $-30=-30$ is a true statement, the system is **consistent**. The
equations are **dependent**. The graphs of these two equations would give
the same line. The system has infinitely many solutions.

{{< multiplechoice
  question="Solve the system by substitution: $2x - 3y = 12$ and $-12y + 8x = 48$. What kind of system is this?"
  hint="Solve the first equation for x and substitute into the second. If the variable terms cancel out leaving a true numeric statement, the equations are dependent."
  answer="infinitely many solutions"
>}}
one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

Look back at the equations in the last example — is there any way to
recognize that they are the same line? Let's see what happens when the
lines are parallel instead.

**Example.** Solve the system by substitution: $\begin{cases} 5x-2y=-10 \\
y=\tfrac{5}{2}x \end{cases}$.

The second equation is already solved for $y$, so we substitute
$\tfrac{5}{2}x$ for $y$ in the first equation: $5x-2\left(\tfrac{5}{2}x\right)=-10$,
so $5x-5x=-10$, so $0=-10$.

Since $0=-10$ is a false statement, the equations are **inconsistent**. The
graphs of the two equations would be parallel lines. The system has no
solution.

{{< multiplechoice
  question="Solve the system by substitution: $3x + 2y = 9$ and $y = -\tfrac{3}{2}x + 1$. What kind of system is this?"
  hint="Substitute the expression for y into the first equation. If the variable terms cancel out leaving a false numeric statement, the system has no solution."
  answer="no solution"
>}}
one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

## Solve Applications of Systems of Equations by Substitution

We'll use the same problem-solving strategy we used for solving systems of
equations by graphing. Now that we know how to solve systems by
substitution, that's what we'll do in Step 5.

{{< callout type="info" >}}
  **How to use a problem-solving strategy for systems of linear equations.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
  2. **Identify** what we are looking for.
  3. **Name** what we are looking for. Choose variables to represent those quantities.
  4. **Translate** into a system of equations.
  5. **Solve** the system of equations using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

**Example.** The sum of two numbers is zero. One number is nine less than
the other. Find the numbers.

Let $n$ be the first number and $m$ be the second number. The sum of the two
numbers is zero, so $n+m=0$. One number is nine less than the other, so
$n=m-9$. The system is $\begin{cases} n+m=0 \\ n=m-9 \end{cases}$.

We'll solve by substitution, since the second equation is already solved for
$n$. Substitute $m-9$ for $n$ in the first equation: $(m-9)+m=0$, so
$2m-9=0$, so $2m=9$, and $m=\tfrac{9}{2}$. Substitute $m=\tfrac{9}{2}$ into
$n=m-9$ to find $n$: $n=\tfrac{9}{2}-9=-\tfrac{9}{2}$.

The numbers are $\tfrac{9}{2}$ and $-\tfrac{9}{2}$.

{{< fillin
  question="The sum of two numbers is 10. One number is 4 less than the other. Find the numbers, entering the smaller number first, as an ordered pair (smaller, larger)."
  answer="(3,7)"
  hint="Let n and m be the two numbers: $n + m = 10$ and $n = m - 4$. Substitute and solve for m first."
>}}

**Example.** The perimeter of a rectangle is $88$. The length is five more
than twice the width. Find the length and the width.

Let $L$ be the length and $W$ be the width. The perimeter of a rectangle is
$2L+2W=P$, so $2L+2W=88$. The length is five more than twice the width, so
$L=2W+5$. The system is $\begin{cases} 2L+2W=88 \\ L=2W+5 \end{cases}$.

Substitute $2W+5$ for $L$ in the first equation: $2(2W+5)+2W=88$, so
$4W+10+2W=88$, so $6W+10=88$, so $6W=78$, and $W=13$. Substitute $W=13$ into
$L=2W+5$ to find $L$: $L=2(13)+5=31$.

Does a rectangle with length $31$ and width $13$ have perimeter $88$? Yes.
The length is $31$ and the width is $13$.

{{< fillin
  question="The perimeter of a rectangle is 40. The length is 4 more than the width. Find the length and width as an ordered pair (length, width)."
  answer="(12,8)"
  hint="Let L be the length and W the width: $2L + 2W = 40$ and $L = W + 4$."
>}}

**Example.** The measure of one of the small angles of a right triangle is
ten more than three times the measure of the other small angle. Find the
measures of both angles.

Let $a$ be the measure of the first angle and $b$ be the measure of the
second angle. One small angle is ten more than three times the other, so
$a=3b+10$. The sum of the measures of the angles of a triangle is $180$, and
one angle of a right triangle already measures $90°$, so
$a+b+90=180$. The system is $\begin{cases} a=3b+10 \\ a+b+90=180
\end{cases}$.

Substitute $3b+10$ for $a$ in the second equation: $(3b+10)+b+90=180$, so
$4b+100=180$, so $4b=80$, and $b=20$. Substitute $b=20$ into $a=3b+10$ to
find $a$: $a=3(20)+10=70$.

The measures of the small angles are $20°$ and $70°$.

{{< fillin
  question="The measure of one of the small angles of a right triangle is 2 more than 3 times the measure of the other small angle. Find the measures of both angles as an ordered pair (smaller angle, larger angle)."
  answer="(22,68)"
  hint="Let $a = 3b + 2$ and $a + b + 90 = 180$. Substitute and solve for b first."
>}}

**Example.** Heather has been offered two options for her salary as a
trainer at the gym. Option A would pay her $\text{\textdollar}25{,}000$
plus $\text{\textdollar}15$ for each training session. Option B would pay
her $\text{\textdollar}10{,}000$ plus $\text{\textdollar}40$ for each
training session. How many training sessions would make the salary options
equal?

Let $s$ be Heather's salary and $n$ be the number of training sessions.
Option A gives $s=25{,}000+15n$. Option B gives $s=10{,}000+40n$. The system
is $\begin{cases} s=25{,}000+15n \\ s=10{,}000+40n \end{cases}$.

Substitute $25{,}000+15n$ for $s$ in the second equation:
$25{,}000+15n=10{,}000+40n$, so $25{,}000=10{,}000+25n$, so
$15{,}000=25n$, and $n=600$.

Are 600 training sessions a reasonable number, and are the two options equal
when $n=600$? Yes. The salary options would be equal for $600$ training
sessions.

{{< fillin
  question="Geraldine has been offered positions by two insurance companies. The first pays a salary of \$12,000 plus a commission of \$100 for each policy sold. The second pays a salary of \$20,000 plus a commission of \$50 for each policy sold. How many policies would need to be sold to make the total pay the same?"
  answer="160"
  hint="Let s = Geraldine's salary and n = the number of policies sold: $s = 12000 + 100n$ and $s = 20000 + 50n$."
>}}

## Key terms

**substitution method** — solving one equation of a system for a variable,
then replacing that variable with the resulting expression in the other
equation so it becomes an equation in one variable. **consistent, dependent
system** — a system whose equations, after substitution, reduce to a true
numeric statement (like $-30=-30$); the two equations describe the same
line and the system has infinitely many solutions. **inconsistent system**
— a system whose equations, after substitution, reduce to a false numeric
statement (like $0=-10$); the two equations describe parallel lines and the
system has no solution.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.2: Solving Systems of Equations by Substitution](https://openstax.org/books/elementary-algebra-2e/pages/5-2-solving-systems-of-equations-by-substitution) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the first worked example's step-by-step breakdown as a markdown table and condensed the remaining worked examples into prose with inline checks; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback — including turning the dependent/inconsistent-system Try Its into a multiple-choice classification, since the math checker cannot reliably grade a bare true/false numeric statement as an answer.</small>
