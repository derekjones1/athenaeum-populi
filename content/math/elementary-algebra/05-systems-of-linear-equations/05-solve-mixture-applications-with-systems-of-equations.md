---
title: Solve Mixture Applications with Systems of Equations
description: >-
  Setting up and solving systems of two equations for coin- and ticket-value
  mixture problems and for mixing solutions of different concentrations, then
  extending the same models to simple-interest investment and loan
  applications — adapted from OpenStax Elementary Algebra 2e, Section 5.5.
source_section: "5.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve mixture applications using systems of equations
- Solve interest applications using systems of equations
{{< /callout >}}

## Solve Mixture Applications

When we solved mixture applications earlier with coins and tickets, we
started by creating a table with columns for type, number, value, and total
value — filling in the value of each type of coin — so we could organize
the information, following the model
$\text{number} \cdot \text{value} = \text{total value}$. Using only one
variable meant we had to relate the number of nickels and the number of
dimes — deciding whether to let $n$ be the number of nickels and write the
number of dimes in terms of $n$, or the other way around.

Now that we know how to solve systems of equations with two variables, we'll
just let $n$ be the number of nickels and $d$ be the number of dimes. One
equation will come from the Total Value column, like before, and the other
equation will come from the Number column.

We'll start with a ticket problem where the ticket prices are in whole
dollars, so we won't need decimals just yet.

**Example.** The box office at a movie theater sold 147 tickets for the
evening show, and receipts totaled \$1,302. How many \$11 adult and how many
\$8 child tickets were sold?

We organize the information in a table. Let $a$ be the number of adult
tickets and $c$ the number of child tickets sold.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Adult | $a$ | $11$ | $11a$ |
| Child | $c$ | $8$ | $8c$ |
| **Total** | $147$ | | $1{,}302$ |

The Number column gives one equation, and the Total Value column gives the
other, so we have a system of two equations in two variables:

$$
\begin{cases}
a + c = 147 \\
11a + 8c = 1{,}302
\end{cases}
$$

We'll solve by elimination. Multiply the first equation by $-8$ so the
$c$-terms cancel when we add:

$$
\begin{array}{rcl}
-8a - 8c &=& -1{,}176 \\
11a + 8c &=& 1{,}302 \\
\hline
3a &=& 126
\end{array}
$$

So $a = 42$. Substituting into $a + c = 147$ gives $42 + c = 147$, so
$c = 105$.

Check: $42$ adult tickets at \$11 each make $42 \cdot 11 = 462$ dollars, and
$105$ child tickets at \$8 each make $105 \cdot 8 = 840$ dollars; together
that's $462 + 840 = 1{,}302$ dollars. ✓ The theater sold 42 adult tickets and
105 child tickets.

{{< fillin
  question="A science center sold 1,363 tickets on a busy weekend. The receipts totaled \$12,146. Adult tickets cost \$12 each and child tickets cost \$7 each. How many adult tickets were sold?"
  answer="521"
  answerForm="decimal"
  hint="Let $a$ and $c$ be the numbers of adult and child tickets. The Number column gives one equation and the Total Value column (count times price) gives the other; eliminate $c$ and solve for $a$."
>}}

In the next example we solve a coin problem. Now that we can work with
systems of two variables, naming the variables in the "number" column is
easy — no more writing one count in terms of the other.

**Example.** Priam has a collection of nickels and quarters, with a total
value of \$7.30. The number of nickels is six less than three times the
number of quarters. How many nickels and how many quarters does he have?

Let $n$ be the number of nickels and $q$ the number of quarters.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Nickels | $n$ | $0.05$ | $0.05n$ |
| Quarters | $q$ | $0.25$ | $0.25q$ |
| **Total** | | | $7.30$ |

The Total Value column gives one equation. Translating "the number of
nickels is six less than three times the number of quarters" gives the
second:

$$
\begin{cases}
0.05n + 0.25q = 7.30 \\
n = 3q - 6
\end{cases}
$$

We'll solve by substitution, since the second equation is already solved for
$n$. Substitute $n = 3q - 6$ into the first equation:

$$
\begin{array}{lrcl}
& 0.05(3q - 6) + 0.25q &=& 7.30 \\[4pt]
\text{Distribute.} & 0.15q - 0.30 + 0.25q &=& 7.30 \\[4pt]
\text{Combine like terms.} & 0.40q - 0.30 &=& 7.30 \\[4pt]
\text{Solve.} & q &=& 19
\end{array}
$$

To find $n$, substitute $q = 19$ into $n = 3q - 6$: $n = 3(19) - 6 = 51$.

Check: $19$ quarters at \$0.25 each make $19 \cdot 0.25 = 4.75$ dollars, and
$51$ nickels at \$0.05 each make $51 \cdot 0.05 = 2.55$ dollars; together
that's $4.75 + 2.55 = 7.30$ dollars. Also $3 \cdot 19 - 6 = 51$. ✓ Priam has
51 nickels and 19 quarters.

{{< fillin
  question="Juan has a pocketful of nickels and dimes with a total value of \$8.10. The number of dimes is nine less than twice the number of nickels. How many nickels does Juan have?"
  answer="36"
  answerForm="decimal"
  hint="Let $n$ and $d$ be the numbers of nickels and dimes. Translate the sentence comparing the counts into one equation and the total value into the other, then substitute for $d$ and solve for $n$."
>}}

Some mixture applications involve combining foods or drinks rather than
coins — for example, mixing nuts and dried fruit to make a trail mix, or
blending two kinds of coffee beans.

**Example.** Carson wants to make 20 pounds of trail mix using nuts and
chocolate chips. His budget requires that the trail mix cost him \$7.60 a
pound. Nuts cost \$9.00 a pound and chocolate chips cost \$2.00 a pound. How
many pounds of nuts and how many pounds of chocolate chips should he use?

Let $n$ be the number of pounds of nuts and $c$ the number of pounds of
chocolate chips.

| Type | Number of pounds | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Nuts | $n$ | $9.00$ | $9n$ |
| Chocolate chips | $c$ | $2.00$ | $2c$ |
| Trail mix | $20$ | $7.60$ | $7.60(20)$ |

The Number column and the Total Value column give the system:

$$
\begin{cases}
n + c = 20 \\
9n + 2c = 152
\end{cases}
$$

Solving by elimination — multiply the first equation by $-2$:

$$
\begin{array}{rcl}
-2n - 2c &=& -40 \\
9n + 2c &=& 152 \\
\hline
7n &=& 112
\end{array}
$$

So $n = 16$. Substituting into $n + c = 20$ gives $c = 4$.

Check: $9(16) + 2(4) = 144 + 8 = 152$ dollars, and $16 + 4 = 20$ pounds. ✓
Carson should mix 16 pounds of nuts with 4 pounds of chocolate chips.

{{< fillin
  question="Greta wants to make 5 pounds of a nut mix using peanuts and cashews. Her budget requires the mixture to cost her \$6 a pound. Peanuts are \$4 a pound and cashews are \$9 a pound. How many pounds of cashews should she use?"
  answer="2"
  answerForm="decimal"
  hint="Let $p$ and $c$ be the pounds of peanuts and cashews. The pounds give one equation; for the other, the value of the peanuts plus the value of the cashews equals the value of the whole mix. Eliminate $p$ and solve for $c$."
>}}

Another mixture application relates to concentrated cleaning supplies and
other chemicals, where the concentration is given as a percent. For example,
a 20% concentrated household cleanser means that 20% of the total amount is
cleanser and the rest is water; to make 35 ounces of a 20% concentration, you
mix 7 ounces of the cleanser with 28 ounces of water. For these problems
we'll use percent, instead of value, for one of the columns in our table.

**Example.** Sasheena is a lab assistant at her community college. She needs
to make 200 milliliters of a 40% solution of sulfuric acid for a lab
experiment. The lab has only 25% and 50% solutions in the storeroom. How
much should she mix of the 25% and the 50% solutions to make the 40%
solution?

Let $x$ be the number of milliliters of the 25% solution and $y$ the number
of milliliters of the 50% solution.

| Type | Number of units | Concentration | Amount |
| :--- | :---: | :---: | :---: |
| 25% | $x$ | $0.25$ | $0.25x$ |
| 50% | $y$ | $0.50$ | $0.50y$ |
| 40% | $200$ | $0.40$ | $0.40(200)$ |

We multiply the number of units by the concentration to get the total amount
of sulfuric acid in each solution. The Number column and the Amount column
give the system:

$$
\begin{cases}
x + y = 200 \\
0.25x + 0.50y = 0.40(200)
\end{cases}
$$

Solving by elimination — multiply the first equation by $-0.5$:

$$
\begin{array}{rcl}
-0.5x - 0.5y &=& -100 \\
0.25x + 0.50y &=& 80 \\
\hline
-0.25x &=& -20
\end{array}
$$

So $x = 80$. Substituting into $x + y = 200$ gives $y = 120$.

Check: $80 + 120 = 200$ ml, and $0.25(80) + 0.50(120) = 20 + 60 = 80$, which
matches $0.40(200) = 80$. ✓ Sasheena should mix 80 ml of the 25% solution
with 120 ml of the 50% solution.

{{< fillin
  question="LeBron needs 150 milliliters of a 30% solution of sulfuric acid for a lab experiment but only has access to a 25% solution and a 50% solution. How many milliliters of the 50% solution should he use to make the 30% solution?"
  answer="30"
  answerForm="decimal"
  hint="Let $x$ and $y$ be the milliliters of the 25% and 50% solutions. The volumes give one equation; for the other, the acid in each solution (volume times concentration) adds up to the acid in the mixture. Eliminate $x$ and solve for $y$."
>}}

## Solve Interest Applications

We can also use the mixture model to solve investment and loan applications
using simple interest. The formula to model interest applications is
$I = Prt$: the interest $I$ is the product of the principal $P$, the rate
$r$, and the time $t$. Since we'll calculate the interest earned in one
year, $t = 1$, and the formula becomes $I = Pr$. We modify the column
headings in the mixture table to show this formula.

**Example.** Adnan has \$40,000 to invest and hopes to earn 7.1% interest
per year. He will put some of the money into a stock fund that earns 8% per
year and the rest into bonds that earn 3% per year. How much money should he
put into each account?

Let $s$ be the amount invested in the stock fund and $b$ the amount invested
in bonds.

| Account | Principal (\$) | Rate | Interest (\$) |
| :--- | :---: | :---: | :---: |
| Stock fund | $s$ | $0.08$ | $0.08s$ |
| Bonds | $b$ | $0.03$ | $0.03b$ |
| **Total** | $40{,}000$ | $0.071$ | $0.071(40{,}000)$ |

Notice that the Principal column represents the total amount of money
invested, while the Interest column represents only the interest earned. The
Principal column and the Interest column give the system:

$$
\begin{cases}
s + b = 40{,}000 \\
0.08s + 0.03b = 0.071(40{,}000)
\end{cases}
$$

Solving by elimination — multiply the first equation by $-0.03$:

$$
\begin{array}{rcl}
-0.03s - 0.03b &=& -1{,}200 \\
0.08s + 0.03b &=& 2{,}840 \\
\hline
0.05s &=& 1{,}640
\end{array}
$$

So $s = 32{,}800$. Substituting into $s + b = 40{,}000$ gives
$b = 7{,}200$.

Check: $0.08(32{,}800) + 0.03(7{,}200) = 2{,}624 + 216 = 2{,}840$ dollars,
which matches $0.071(40{,}000) = 2{,}840$. ✓ Adnan should invest \$32,800 in
the stock fund and \$7,200 in bonds.

{{< fillin
  question="Julius invested \$7,000 into two stock investments. One stock paid 11% interest and the other stock paid 13% interest. He earned 12.5% interest on the total investment. How much, in dollars, did he invest in the stock that paid 13% interest?"
  answer="5250"
  answerForm="decimal"
  answerDisplay="\$5,250"
  hint="Let $x$ and $y$ be the amounts invested at 11% and 13%. The amounts add to the total investment, and the interest from each stock (principal times rate) adds to the interest on the total. Eliminate $x$ and solve for $y$."
>}}

**Example.** Rosie owes \$21,540 on two student loans. The interest rate on
her bank loan is 10.5% and the interest rate on her federal loan is 5.9%.
The total amount of interest she paid last year was \$1,669.68. What was the
principal for each loan?

Let $b$ be the principal for the bank loan and $f$ the principal for the
federal loan.

| Account | Principal (\$) | Rate | Interest (\$) |
| :--- | :---: | :---: | :---: |
| Bank | $b$ | $0.105$ | $0.105b$ |
| Federal | $f$ | $0.059$ | $0.059f$ |
| **Total** | $21{,}540$ | | $1{,}669.68$ |

The Principal column and the Interest column give the system:

$$
\begin{cases}
b + f = 21{,}540 \\
0.105b + 0.059f = 1{,}669.68
\end{cases}
$$

We'll solve by substitution. Solving the first equation for $b$ gives
$b = -f + 21{,}540$; substituting into the second equation:

$$
\begin{array}{lrcl}
& 0.105(-f + 21{,}540) + 0.059f &=& 1{,}669.68 \\[4pt]
\text{Distribute.} & -0.105f + 2{,}261.70 + 0.059f &=& 1{,}669.68 \\[4pt]
\text{Combine like terms.} & -0.046f + 2{,}261.70 &=& 1{,}669.68 \\[4pt]
\text{Solve.} & f &=& 12{,}870
\end{array}
$$

To find $b$, substitute $f = 12{,}870$ into $b + f = 21{,}540$:
$b = 8{,}670$.

Check: $0.105(8{,}670) + 0.059(12{,}870) = 910.35 + 759.33 = 1{,}669.68$
dollars, and $8{,}670 + 12{,}870 = 21{,}540$ dollars. ✓ The principal for
Rosie's bank loan is \$8,670 and the principal for her federal loan is
\$12,870.

{{< fillin
  question="Laura owes \$18,000 on her student loans. The interest rate on the bank loan is 2.5% and the interest rate on the federal loan is 6.9%. The total amount of interest she paid last year was \$1,066. What was the principal for the federal loan, in dollars?"
  answer="14000"
  answerForm="decimal"
  answerDisplay="\$14,000"
  hint="Let $b$ and $f$ be the principals of the bank and federal loans. The principals add to the total owed, and the interest on each loan (principal times rate) adds to the total interest. Eliminate $b$ and solve for $f$."
>}}

## Key terms

**total value model** — $\text{number} \cdot \text{value} = \text{total
value}$: the number of coins, tickets, or units of an ingredient times the
value of each gives the total value of that type; in a mixture problem with
two unknown types, the Number column and the Total Value column each give an
equation, and together they form a system of two equations in two variables.
**simple interest formula** — $I = Prt$, or $I = Pr$ when $t = 1$ year; in an
investment or loan mixture problem, the Principal column gives one equation
(the total amount invested or owed) and the Interest column gives the other
(the total interest earned or paid).

## Practice

### Solve mixture applications using systems of equations

{{< fillin
  question="Tickets to a Broadway show cost \$35 for adults and \$15 for children. The total receipts for 1,650 tickets at one performance were \$47,150. How many adult and how many child tickets were sold? Enter the adult count first and the child count second as an ordered pair."
  answer="(1120,530)"
  answerForm="decimal"
  answerDisplay="$1{,}120$ adult tickets and $530$ child tickets"
  hint="Let $a$ and $c$ be the adult and child counts. Write one equation from the number of tickets and one from the receipts (count times price), then eliminate a variable."
>}}

{{< fillin
  question="Brandon has a cup of quarters and dimes with a total value of \$3.80. The number of quarters is four less than twice the number of dimes. How many quarters and how many dimes does Brandon have? Enter the quarter count first and the dime count second as an ordered pair."
  answer="(12,8)"
  answerForm="decimal"
  answerDisplay="$12$ quarters and $8$ dimes"
  hint="Let $q$ and $d$ be the numbers of quarters and dimes. Translate the sentence comparing the counts into one equation and the total value into the other, then substitute."
>}}

{{< fillin
  question="Marissa wants to blend candy selling for \$1.80 per pound with candy costing \$1.20 per pound to get a mixture that costs her \$1.40 per pound to make. She wants to make 90 pounds of the candy blend. How many pounds of each type of candy should she use? Enter the pounds of the \$1.20 candy first and the pounds of the \$1.80 candy second as an ordered pair."
  answer="(60,30)"
  answerForm="decimal"
  answerDisplay="$60$ pounds of the \$1.20-per-pound candy and $30$ pounds of the \$1.80-per-pound candy"
  hint="Let $x$ and $y$ be the pounds of the \$1.20 and \$1.80 candies. The pounds give one equation; for the other, the cost of each candy adds up to the cost of the whole blend."
>}}

### Solve interest applications using systems of equations

{{< fillin
  question="Hattie had \$3,000 to invest and wants to earn 10.6% interest per year. She will put some of the money into an account that earns 12% per year and the rest into an account that earns 10% per year. How much money should she put into each account? Enter the dollars at 12% first and the dollars at 10% second, without dollar signs, as an ordered pair."
  answer="(900,2100)"
  answerForm="decimal"
  answerDisplay="\$900 at 12% and \$2,100 at 10%"
  hint="Let $x$ and $y$ be the amounts at 12% and 10%. The amounts add to the total invested, and the interest from each account (principal times rate) adds to the interest on the total."
>}}

{{< fillin
  question="Sam invested \$48,000, some at 6% interest and the rest at 10%. How much did he invest at each rate if he received \$4,000 in interest in one year? Enter the dollars at 6% first and the dollars at 10% second, without dollar signs, as an ordered pair."
  answer="(20000,28000)"
  answerForm="decimal"
  answerDisplay="\$20,000 at 6% and \$28,000 at 10%"
  hint="Let $x$ and $y$ be the amounts at 6% and 10%. The amounts add to the total invested, and the interest from each amount (principal times rate) adds to the interest he received."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.5: Solve Mixture Applications with Systems of Equations](https://openstax.org/books/elementary-algebra-2e/pages/5-5-solve-mixture-applications-with-systems-of-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the ticket/coin/mixture/concentration/investment/loan tables as markdown tables, dropping the Time column (always 1) from the two interest tables, and described the opening nickel-and-dime table in prose; wrote each system of equations and its elimination or substitution steps as display-math blocks, and wrote out the checks the two interest examples leave to the reader; corrected three slips in the worked examples: the coin example's check (3 · 19 − 6 = 51, printed with 16), the acid example's check (80 + 120 = 200, printed as 120), and the loan example's answer, which swaps the two principals; omitted the "Be Prepared" readiness quiz, the solution-mixing diagram, the Media links block, the Key Concepts summary tables, the unselected Section 5.5 exercises (including the Everyday Math and Writing Exercises), and the Self Check checklist; added a Key terms list written for this page (the module has no glossary); converted a selection of the practice problems ("Try Its") into interactive exercises with instant feedback, each asking for one of the two quantities; and adapted selected end-of-section exercises into the interactive Practice block, each asking for both quantities as an ordered pair in a stated order.</small>
