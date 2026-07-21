---
title: Solve Mixture Applications with Systems of Equations
description: >-
  Setting up and solving systems of two equations for coin-, ticket-, and
  food-mixture problems, for percent-concentration mixtures, for simple
  interest investment and loan applications, and for cost-and-revenue
  break-even applications — adapted from OpenStax Intermediate Algebra 2e,
  Section 4.3.
source_section: "4.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve mixture
  applications, solve interest applications, and solve applications of cost
  and revenue functions.
{{< /callout >}}

## Solve mixture applications

When we solved mixture applications earlier with coins and tickets, we
started by creating a table with columns for number, value, and total value,
following the model
$\text{number} \cdot \text{value} = \text{total value}$. Using only one
variable meant we had to relate the number of one type to the number of the
other — deciding whether to let $n$ be the number of nickels and write the
number of dimes in terms of $n$, or the other way around.

Now that we know how to solve systems of equations with two variables, we'll
just let one variable stand for the number of each type. One equation will
come from the number column, and the other equation will come from the total
value column.

We'll start with a ticket problem where the ticket prices are in whole
dollars, so we won't need decimals just yet.

**Example.** A science center sold 1,363 tickets on a busy weekend. The
receipts totaled \$12,146. How many \$12 adult and how many \$7 child tickets
were sold?

Let $a$ be the number of adult tickets and $c$ the number of child tickets.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Adult | $a$ | $12$ | $12a$ |
| Child | $c$ | $7$ | $7c$ |
| **Total** | $1{,}363$ | | $12{,}146$ |

The number column and the total value column give the system:

$$
\left\{\begin{array}{l}
a + c = 1{,}363 \\
12a + 7c = 12{,}146
\end{array}\right.
$$

We'll solve by elimination. Multiply the first equation by $-7$ so the
$c$-terms cancel when we add:

$$
\begin{array}{rcl}
-7a - 7c &=& -9{,}541 \\
12a + 7c &=& 12{,}146 \\
\hline
5a &=& 2{,}605
\end{array}
$$

So $a = 521$. Substituting into $a + c = 1{,}363$ gives $521 + c = 1{,}363$,
so $c = 842$.

Check: $521$ adult tickets at \$12 each make $521 \cdot 12 = 6{,}252$
dollars, and $842$ child tickets at \$7 each make $842 \cdot 7 = 5{,}894$
dollars; together that's $6{,}252 + 5{,}894 = 12{,}146$ dollars. ✓ The
science center sold 521 adult tickets and 842 child tickets.

{{< fillin
  question="The ticket office at the zoo sold 553 tickets one day. The receipts totaled \$3,936. How many \$9 adult and how many \$6 child tickets were sold? Enter the number of adult tickets."
  answer="206"
  hint="Let a be the number of adult tickets and c the number of child tickets, so $a + c = 553$. Set $9a + 6c$ equal to 3,936, then solve the system for a."
>}}

In the next example we solve a coin problem. Now that we can work with
systems of two variables, naming the variables in the "number" column is
easy — no more writing one count in terms of the other before we translate.

**Example.** Juan has a pocketful of nickels and dimes. The total value of
the coins is \$8.10. The number of dimes is 9 less than twice the number of
nickels. How many nickels and how many dimes does Juan have?

Let $n$ be the number of nickels and $d$ the number of dimes.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Nickels | $n$ | $0.05$ | $0.05n$ |
| Dimes | $d$ | $0.10$ | $0.10d$ |
| **Total** | | | $8.10$ |

The total value column gives one equation. Translating "the number of dimes
is 9 less than twice the number of nickels" gives the second:

$$
\left\{\begin{array}{l}
0.05n + 0.10d = 8.10 \\
d = 2n - 9
\end{array}\right.
$$

We'll solve by substitution, since the second equation is already solved for
$d$. Substitute $d = 2n - 9$ into the first equation:

$$
\begin{array}{lrcl}
& 0.05n + 0.10(2n - 9) &=& 8.10 \\[4pt]
\text{Distribute.} & 0.05n + 0.2n - 0.90 &=& 8.10 \\[4pt]
\text{Combine like terms.} & 0.25n - 0.90 &=& 8.10 \\[4pt]
\text{Solve.} & n &=& 36
\end{array}
$$

To find $d$, substitute $n = 36$ into $d = 2n - 9$: $d = 2(36) - 9 = 63$.

Check: $36$ nickels at \$0.05 each make $36 \cdot 0.05 = 1.80$ dollars, and
$63$ dimes at \$0.10 each make $63 \cdot 0.10 = 6.30$ dollars; together
that's $1.80 + 6.30 = 8.10$ dollars. Also $2(36) - 9 = 63$. ✓ Juan has 36
nickels and 63 dimes.

{{< fillin
  question="Matilda has a handful of quarters and dimes, with a total value of \$8.55. The number of quarters is 3 more than twice the number of dimes. How many dimes does she have?"
  answer="13"
  hint="Let q be the number of quarters and d the number of dimes, so $q = 2d + 3$. Set $0.25q + 0.10d$ equal to 8.55, substitute for q, and solve for d."
>}}

Some mixture applications involve combining foods rather than coins or
tickets — for example, mixing nuts and chocolate chips to make a trail mix.

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
| Trail mix | $20$ | $7.60$ | $7.60(20) = 152$ |

The number column and the total value column give the system:

$$
\left\{\begin{array}{l}
n + c = 20 \\
9n + 2c = 152
\end{array}\right.
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
  question="Sammy has most of the ingredients he needs to make a large batch of chili. He needs a total of 20 pounds combined of beans and ground beef and has a budget of \$3 a pound. The price of beans is \$1 a pound and the price of ground beef is \$5 a pound. How many pounds of ground beef should he purchase?"
  answer="10"
  hint="Let b be the pounds of beans and g the pounds of ground beef, so $b + g = 20$. Set $1b + 5g$ equal to 20(3), then solve the system for g."
>}}

Another mixture application relates to concentrated cleaning supplies and
other chemicals, where the concentration is given as a percent. For example,
a $20\%$ concentrated household cleanser means that $20\%$ of the total
amount is cleanser and the rest is water; to make 35 ounces of a $20\%$
concentration, you mix 7 ounces of the cleanser with 28 ounces of water. For
these problems we'll use percent, instead of value, for one of the columns
in our table.

**Example.** Sasheena is a lab assistant at her community college. She needs
to make 200 milliliters of a $40\%$ solution of sulfuric acid for a lab
experiment. The lab has only $25\%$ and $50\%$ solutions in the storeroom.
How much should she mix of the $25\%$ and the $50\%$ solutions to make the
$40\%$ solution?

Let $x$ be the number of milliliters of the $25\%$ solution and $y$ the
number of milliliters of the $50\%$ solution.

| Type | Number of units | Concentration | Amount |
| :--- | :---: | :---: | :---: |
| $25\%$ | $x$ | $0.25$ | $0.25x$ |
| $50\%$ | $y$ | $0.50$ | $0.50y$ |
| $40\%$ | $200$ | $0.40$ | $0.40(200) = 80$ |

We multiply the number of units by the concentration to get the total amount
of sulfuric acid in each solution. The number column and the amount column
give the system:

$$
\left\{\begin{array}{l}
x + y = 200 \\
0.25x + 0.50y = 80
\end{array}\right.
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

Check: $0.25(80) + 0.50(120) = 20 + 60 = 80$, which matches
$0.40(200) = 80$, and $80 + 120 = 200$ ml. ✓ Sasheena should mix 80 ml of
the $25\%$ solution with 120 ml of the $50\%$ solution.

{{< fillin
  question="Anatole needs to make 250 milliliters of a 25% solution of hydrochloric acid for a lab experiment. The lab only has a 10% solution and a 40% solution in the storeroom. How many milliliters of the 40% solution should he use to make the 25% solution?"
  answer="125"
  hint="Let x be the ml of the 10% solution and y the ml of the 40% solution, so $x + y = 250$. Set $0.10x + 0.40y$ equal to 0.25(250), then solve the system for y."
>}}

## Solve interest applications

We can also use the mixture model to solve investment and loan applications
using simple interest. The formula to model interest applications is
$I = Prt$: the interest $I$ is the product of the principal $P$, the rate
$r$, and the time $t$. Here we'll calculate the interest earned in one year,
so $t = 1$ and the formula becomes $I = Pr$. We modify the column headings
in the mixture table to show this formula.

**Example.** Adnan has \$40,000 to invest and hopes to earn $7.1\%$ interest
per year. He will put some of the money into a stock fund that earns $8\%$
per year and the rest into bonds that earn $3\%$ per year. How much money
should he put into each account?

Let $s$ be the amount invested in the stock fund and $b$ the amount invested
in bonds.

| Account | Principal (\$) | Rate | Interest (\$) |
| :--- | :---: | :---: | :---: |
| Stock fund | $s$ | $0.08$ | $0.08s$ |
| Bonds | $b$ | $0.03$ | $0.03b$ |
| **Total** | $40{,}000$ | $0.071$ | $0.071(40{,}000) = 2{,}840$ |

Notice that the principal column represents the total amount of money
invested, while the interest column represents only the interest earned. The
principal column and the interest column give the system:

$$
\left\{\begin{array}{l}
s + b = 40{,}000 \\
0.08s + 0.03b = 2{,}840
\end{array}\right.
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

Check: $0.08(32{,}800) + 0.03(7{,}200) = 2{,}624 + 216 = 2{,}840$, which
matches $0.071(40{,}000) = 2{,}840$, and $32{,}800 + 7{,}200 = 40{,}000$. ✓
Adnan should invest \$32,800 in the stock fund and \$7,200 in bonds.

{{< fillin
  question="Leon had \$50,000 to invest and hopes to earn 6.2% interest per year. He will put some of the money into a stock fund that earns 7% per year and the rest into a savings account that earns 2% per year. How much money should he put into the stock fund?"
  answer="42000"
  hint="Let s be the amount in the stock fund and v the amount in savings, so $s + v = 50{,}000$. Set $0.07s + 0.02v$ equal to 0.062(50,000), then solve the system for s."
>}}

The next example requires that we find the principal, given the amount of
interest earned.

**Example.** Rosie owes \$21,540 on two student loans. The interest rate on
her bank loan is $10.5\%$ and the interest rate on her federal loan is
$5.9\%$. The total amount of interest she paid last year was \$1,669.68.
What was the principal for each loan?

Let $b$ be the principal for the bank loan and $f$ the principal for the
federal loan.

| Account | Principal (\$) | Rate | Interest (\$) |
| :--- | :---: | :---: | :---: |
| Bank | $b$ | $0.105$ | $0.105b$ |
| Federal | $f$ | $0.059$ | $0.059f$ |
| **Total** | $21{,}540$ | | $1{,}669.68$ |

The principal column and the interest column give the system:

$$
\left\{\begin{array}{l}
b + f = 21{,}540 \\
0.105b + 0.059f = 1{,}669.68
\end{array}\right.
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

Check: $0.105(8{,}670) + 0.059(12{,}870) = 910.35 + 759.33 = 1{,}669.68$,
and $8{,}670 + 12{,}870 = 21{,}540$. ✓ The principal for Rosie's bank loan
is \$8,670 and the principal for her federal loan is \$12,870.

{{< fillin
  question="Jill's Sandwich Shoppe owes \$65,200 on two business loans, one at 4.5% interest and the other at 7.2% interest. The total amount of interest owed last year was \$3,582. What was the principal for the loan at 7.2% interest?"
  answer="24000"
  hint="Let a be the principal at 4.5% and b the principal at 7.2%, so $a + b = 65{,}200$. Set $0.045a + 0.072b$ equal to 3,582, then solve the system for b."
>}}

## Solve applications of cost and revenue functions

Suppose a company makes and sells $x$ units of a product. The **cost** to
the company is the total cost to produce $x$ units. This is the cost to
manufacture each unit times $x$, the number of units manufactured, plus the
fixed costs. The **revenue** is the money the company brings in as a result
of selling $x$ units — the selling price of each unit times the number of
units sold. When the costs equal the revenue we say the business has reached
the **break-even point**.

{{< callout type="info" >}}
  **Cost and revenue functions.** The cost function is the cost to
  manufacture each unit times $x$, the number of units manufactured, plus
  the fixed costs:
  $$C(x) = (\text{cost per unit}) \cdot x + \text{fixed costs}.$$
  The revenue function is the selling price of each unit times $x$, the
  number of units sold:
  $$R(x) = (\text{selling price per unit}) \cdot x.$$
  The break-even point is where the revenue equals the costs:
  $$C(x) = R(x).$$
{{< /callout >}}

**Example.** The manufacturer of a weight training bench spends \$105 to
build each bench and sells them for \$245. The manufacturer also has fixed
costs each month of \$7,000.

(a) Find the cost function $C$ when $x$ benches are manufactured.

(b) Find the revenue function $R$ when $x$ benches are sold.

(c) Show the break-even point by graphing both the revenue and cost
functions on the same grid.

(d) Find the break-even point. Interpret what the break-even point means.

(a) The manufacturer has \$7,000 of fixed costs no matter how many weight
training benches it produces. In addition to the fixed costs, the
manufacturer also spends \$105 to produce each bench. Suppose $x$ benches
are sold:

$$C(x) = 105x + 7{,}000.$$

(b) The manufacturer sells each weight training bench for \$245. We get the
total revenue by multiplying the revenue per unit by the number of units
sold:

$$R(x) = 245x.$$

(c) Together, the cost and revenue functions form a system of linear
equations:

$$
\left\{\begin{array}{l}
y = 105x + 7{,}000 \\
y = 245x
\end{array}\right.
$$

Graphing $y = 105x + 7{,}000$ and $y = 245x$ on the same grid (with benches
on the horizontal axis and dollars on the vertical axis), the cost line
starts at $(0, 7{,}000)$ and climbs gently, while the revenue line starts at
the origin $(0,0)$ and climbs more steeply, since $245 > 105$. Because the
revenue line starts lower but climbs faster, the two lines cross exactly
once — at the break-even point:

<div class="ap-figure">
<svg role="img" aria-label="A graph with benches on the horizontal axis, from 0 to 100, and dollars on the vertical axis, from 0 to 15,000. The cost line C(x) = 105x + 7,000 starts at (0, 7,000) and climbs gently; the revenue line R(x) = 245x starts at the origin and climbs more steeply. The two lines cross at the break-even point (50, 12,250)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388 388" width="388" height="388" font-family="Helvetica, Arial, sans-serif">
  <line x1="74" y1="344" x2="74" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="344" x2="104" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="344" x2="134" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="164" y1="344" x2="164" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="344" x2="194" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="344" x2="224" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="344" x2="254" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="284" y1="344" x2="284" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="344" x2="314" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="344" y1="344" x2="344" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="324" x2="344" y2="324" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="304" x2="344" y2="304" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="284" x2="344" y2="284" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="264" x2="344" y2="264" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="244" x2="344" y2="244" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="224" x2="344" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="204" x2="344" y2="204" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="184" x2="344" y2="184" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="164" x2="344" y2="164" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="144" x2="344" y2="144" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="124" x2="344" y2="124" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="104" x2="344" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="84" x2="344" y2="84" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="64" x2="344" y2="64" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="44" x2="344" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="344" x2="346" y2="344" stroke="currentColor" stroke-width="1"/>
  <line x1="44" y1="42" x2="44" y2="344" stroke="currentColor" stroke-width="1"/>
  <polygon points="356,344 346,349 346,339" fill="currentColor"/>
  <polygon points="44,32 49,42 39,42" fill="currentColor"/>
  <text x="354" y="336" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="52" y="42" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="104" y1="341" x2="104" y2="347" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="359" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="164" y1="341" x2="164" y2="347" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="359" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="224" y1="341" x2="224" y2="347" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="359" font-size="11" fill="currentColor" text-anchor="middle">60</text>
  <line x1="284" y1="341" x2="284" y2="347" stroke="currentColor" stroke-width="1"/>
  <text x="284" y="359" font-size="11" fill="currentColor" text-anchor="middle">80</text>
  <line x1="344" y1="341" x2="344" y2="347" stroke="currentColor" stroke-width="1"/>
  <text x="344" y="359" font-size="11" fill="currentColor" text-anchor="middle">100</text>
  <line x1="41" y1="294" x2="47" y2="294" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="298" font-size="11" fill="currentColor" text-anchor="end">2,500</text>
  <line x1="41" y1="244" x2="47" y2="244" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="248" font-size="11" fill="currentColor" text-anchor="end">5,000</text>
  <line x1="41" y1="194" x2="47" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="198" font-size="11" fill="currentColor" text-anchor="end">7,500</text>
  <line x1="41" y1="144" x2="47" y2="144" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="148" font-size="11" fill="currentColor" text-anchor="end">10,000</text>
  <line x1="41" y1="94" x2="47" y2="94" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="98" font-size="11" fill="currentColor" text-anchor="end">12,500</text>
  <line x1="41" y1="44" x2="47" y2="44" stroke="currentColor" stroke-width="1"/>
  <text x="38" y="48" font-size="11" fill="currentColor" text-anchor="end">15,000</text>
  <line x1="194" y1="344" x2="194" y2="99" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="44" y1="99" x2="194" y2="99" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>
  <line x1="46.2" y1="202.5" x2="273" y2="43.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="281.1,38 275.8,47.8 270.1,39.6" fill="currentColor"/>
  <polygon points="38,208.2 43.3,198.4 49.1,206.6" fill="currentColor"/>
  <line x1="45.5" y1="341.5" x2="226.1" y2="46.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="231.3,38 230.4,49.1 221.9,43.9" fill="currentColor"/>
  <polygon points="40.3,350 41.3,338.9 49.8,344.1" fill="currentColor"/>
  <circle cx="194" cy="99" r="4" fill="currentColor"/>
  <text x="205.2" y="119.2" font-size="13" fill="currentColor" text-anchor="start">(50, 12,250)</text>
  <text x="236.8" y="92.6" font-size="13" fill="currentColor" text-anchor="start">C(x) = 105x + 7,000</text>
  <text x="111.3" y="268.8" font-size="13" fill="currentColor" text-anchor="start">R(x) = 245x</text>
</svg>
</div>

(d) To find the actual value, remember the break-even point occurs when
costs equal revenue:

$$
\begin{array}{rcl}
C(x) &=& R(x) \\
105x + 7{,}000 &=& 245x \\
7{,}000 &=& 140x \\
50 &=& x
\end{array}
$$

When 50 benches are sold, the costs equal the revenue:
$C(50) = 105(50) + 7{,}000 = 12{,}250$ and $R(50) = 245(50) = 12{,}250$. This
corresponds to the ordered pair $(50, 12{,}250)$ — when 50 benches are sold,
both the cost and the revenue are \$12,250.

{{< fillin
  question="The manufacturer of a weight training bench spends \$15 to build each bench and sells them for \$32. The manufacturer also has fixed costs each month of \$25,500. Write the cost function $C(x)$ for producing $x$ benches."
  answer="15x+25500"
  answerDisplay="$15x + 25{,}500$"
  hint="The cost function is (cost per unit) times x, plus fixed costs."
>}}

{{< fillin
  question="The manufacturer of a weight training bench spends \$120 to build each bench and sells them for \$170. The manufacturer also has fixed costs each month of \$150,000. How many benches must be sold to break even?"
  answer="3000"
  hint="Set $120x + 150{,}000$ equal to $170x$ and solve for x."
>}}

## Key terms

**total value model** — $\text{number} \cdot \text{value} = \text{total
value}$: in a mixture problem with two unknown types, the number column and
the total value column each give an equation, and together they form a
system of two equations in two variables. **simple interest formula** —
$I = Prt$, or $I = Pr$ when $t = 1$ year; in an investment or loan mixture
problem, the principal column gives one equation (the total amount invested
or owed) and the interest column gives the other (the total interest earned
or paid). **cost function** — $C(x) = (\text{cost per unit}) \cdot x +
\text{fixed costs}$, the total cost of manufacturing $x$ units. **revenue
function** — $R(x) = (\text{selling price per unit}) \cdot x$, the total
money brought in from selling $x$ units. **break-even point** — the point
where the cost and revenue functions are equal, $C(x) = R(x)$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.3: Solve Mixture Applications with Systems of Equations](https://openstax.org/books/intermediate-algebra-2e/pages/4-3-solve-mixture-applications-with-systems-of-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the ticket/coin/mixture/investment/loan tables as markdown tables; wrote each system of equations and its elimination or substitution steps as display-math blocks; recreated the cost-and-revenue break-even graph with the site's coordinate-graph component; omitted the "Be Prepared" readiness quiz, the Media link, the Section 4.3 Exercises ("Practice Makes Perfect") block, and the Self Check checklist; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
