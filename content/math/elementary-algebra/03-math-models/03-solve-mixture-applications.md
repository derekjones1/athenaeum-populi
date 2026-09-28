---
title: Solve Mixture Applications
description: >-
  Solving coin, ticket and stamp, general mixture, and simple-interest
  investment problems by organizing the number, value, and total value of
  each item into a table and translating it into an equation — adapted from
  OpenStax Elementary Algebra 2e, Section 3.3.
source_section: "3.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve coin word problems
- Solve ticket and stamp word problems
- Solve mixture word problems
- Use the mixture model to solve investment problems using simple interest
{{< /callout >}}

## Solve coin word problems

In **mixture problems**, we have two or more items with different values to
combine together. The mixture model is used by grocers and bartenders to
set fair prices for the products they sell — chemists, investment bankers,
and landscapers use it too.

We'll start with an application everyone is familiar with: money. Imagine
you take a handful of coins from a pocket and place them on a desk. To find
the total value of the pile, you could separate the coins by type — quarters
with quarters, dimes with dimes, and so on — and then add the total value
of each pile.

How would you find the value of one pile, say the dimes? Counting the
number of dimes tells you the *number* you have, but not the *value*. Each
dime is worth \$0.10 — that's the *value* of one dime. To get the total
value of a pile of 17 dimes, multiply 17 by \$0.10 to get \$1.70. This leads
to the following model.

{{< callout type="info" >}}
  **Total value of coins.** For the same type of coin, the total value of a
  number of coins is found using the model
  $$\text{number} \cdot \text{value} = \text{total value}$$
  where *number* is the number of coins, *value* is the value of each coin,
  and *total value* is the total value of all the coins.
{{< /callout >}}

The number of dimes times the value of each dime equals the total value of
the dimes:

$$17 \cdot \$0.10 = \$1.70$$

We can repeat this for each type of coin, then add the total value of each
type to get the total value of all the coins. Suppose there are 14
quarters, 17 dimes, 21 nickels, and 39 pennies:

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Quarters | $14$ | $0.25$ | $3.50$ |
| Dimes | $17$ | $0.10$ | $1.70$ |
| Nickels | $21$ | $0.05$ | $1.05$ |
| Pennies | $39$ | $0.01$ | $0.39$ |
| **Total** | | | $6.64$ |

The total value of all the coins is \$6.64. Notice how the table organizes
all the information — this is exactly how we'll solve coin word problems.

**Example.** Adalberto has \$2.25 in dimes and nickels in his pocket. He has
nine more nickels than dimes. How many of each type of coin does he have?

We create a table with columns "type," "number," "value," and "total
value," and fill in what we know. The value of a dime is \$0.10 and the
value of a nickel is \$0.05; the total value of all the coins is \$2.25.

Since the number of nickels is nine more than the number of dimes, let $d$
be the number of dimes; then the number of nickels is $d + 9$. We multiply
number times value to get each row's total value:

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Dimes | $d$ | $0.10$ | $0.10d$ |
| Nickels | $d + 9$ | $0.05$ | $0.05(d + 9)$ |
| **Total** | | | $2.25$ |

Adding the total values of all the types of coins gives the equation to
solve:

$$
\begin{array}{lrcl}
& 0.10d + 0.05(d + 9) &=& 2.25 \\[4pt]
\text{Distribute.} & 0.10d + 0.05d + 0.45 &=& 2.25 \\[4pt]
\text{Combine like terms.} & 0.15d + 0.45 &=& 2.25 \\[4pt]
\text{Subtract 0.45 from each side.} & 0.15d &=& 1.80 \\[4pt]
\text{Divide.} & d &=& 12
\end{array}
$$

So there are 12 dimes. The number of nickels is $d + 9 = 12 + 9 = 21$.

Check: $12$ dimes are worth $12(0.10) = 1.20$ dollars, and $21$ nickels are
worth $21(0.05) = 1.05$ dollars; together that's
$1.20 + 1.05 = 2.25$ dollars. ✓ Adalberto has twelve dimes and
twenty-one nickels.

{{< fillin
  question="Michaela has \$2.05 in dimes and nickels in her change purse. She has seven more dimes than nickels. How many nickels does she have?"
  answer="9"
  answerForm="decimal"
  hint="Let $n$ be the number of nickels and write the number of dimes in terms of $n$. Then the total value of the nickels plus the total value of the dimes equals the total value in the purse."
>}}

{{< callout type="info" >}}
  **How to solve coin word problems.**

  1. **Read** the problem. Determine the types of coins involved, and
     create a table to organize the information: label the columns "type,"
     "number," "value," and "total value"; list the types of coins; write
     in the value of each type; write in the total value of all the coins.
  2. **Identify** what you are looking for.
  3. **Name** what you are looking for. Use variable expressions to
     represent the number of each type of coin, and write them in the
     table. Multiply the number times the value to get the total value of
     each type of coin.
  4. **Translate** into an equation. Write the equation by adding the total
     values of all the types of coins.
  5. **Solve** the equation using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

**Example.** Maria has \$2.43 in quarters and pennies in her wallet. She has
twice as many pennies as quarters. How many coins of each type does she
have?

Maria has quarters and pennies, so we let $q$ represent the number of
quarters; since she has twice as many pennies, the number of pennies is
$2q$. Multiplying number by value:

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Quarters | $q$ | $0.25$ | $0.25q$ |
| Pennies | $2q$ | $0.01$ | $0.01(2q)$ |
| **Total** | | | $2.43$ |

Adding the total values gives the equation:

$$
\begin{array}{lrcl}
& 0.25q + 0.01(2q) &=& 2.43 \\[4pt]
\text{Multiply.} & 0.25q + 0.02q &=& 2.43 \\[4pt]
\text{Combine like terms.} & 0.27q &=& 2.43 \\[4pt]
\text{Divide by 0.27.} & q &=& 9
\end{array}
$$

So Maria has 9 quarters, and the number of pennies is $2q = 2(9) = 18$.

Check: $9$ quarters are worth $9(0.25) = 2.25$ dollars and $18$ pennies are
worth $18(0.01) = 0.18$ dollars; the total is $2.25 + 0.18 = 2.43$ dollars.
✓ Maria has nine quarters and eighteen pennies.

{{< fillin
  question="Sumanta has \$4.20 in nickels and dimes in her piggy bank. She has twice as many nickels as dimes. How many dimes does she have?"
  answer="21"
  answerForm="decimal"
  hint="Let $d$ be the number of dimes and write the number of nickels in terms of $d$. The value of the dimes plus the value of the nickels equals the total in the piggy bank."
>}}

**Example.** Danny has \$2.14 worth of pennies and nickels in his piggy
bank. The number of nickels is two more than ten times the number of
pennies. How many nickels and how many pennies does Danny have?

Let $p$ represent the number of pennies, so the number of nickels is
$10p + 2$.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Pennies | $p$ | $0.01$ | $0.01p$ |
| Nickels | $10p + 2$ | $0.05$ | $0.05(10p + 2)$ |
| **Total** | | | $2.14$ |

$$
\begin{array}{lrcl}
& 0.01p + 0.05(10p + 2) &=& 2.14 \\[4pt]
\text{Distribute.} & 0.01p + 0.50p + 0.10 &=& 2.14 \\[4pt]
\text{Combine like terms.} & 0.51p + 0.10 &=& 2.14 \\[4pt]
\text{Solve.} & p &=& 4
\end{array}
$$

Danny has 4 pennies. The number of nickels is $10p + 2 = 10(4) + 2 = 42$.

Check: $4(0.01) + 42(0.05) = 0.04 + 2.10 = 2.14$ dollars. ✓ Danny has four
pennies and 42 nickels.

{{< fillin
  question="Elane has \$7.00 total in dimes and nickels in her coin jar. The number of dimes that Elane has is seven less than three times the number of nickels. How many nickels does Elane have?"
  answer="22"
  answerForm="decimal"
  hint="Name the number of nickels with a variable, since the dimes are described in terms of the nickels, and write the number of dimes in terms of it. The value of the nickels plus the value of the dimes equals the total in the jar."
>}}

## Solve ticket and stamp word problems

Problems involving tickets or stamps work very much like coin problems —
each type of ticket or stamp has a value, just like each type of coin does,
so we follow the same steps.

**Example.** At a school concert, the total value of tickets sold was
\$1,506. Student tickets sold for \$6 each and adult tickets sold for \$9
each. The number of adult tickets sold was five less than three times the
number of student tickets sold. How many student tickets and how many
adult tickets were sold?

Let $s$ be the number of student tickets; then the number of adult tickets
is $3s - 5$.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Student | $s$ | $6$ | $6s$ |
| Adult | $3s - 5$ | $9$ | $9(3s - 5)$ |
| **Total** | | | $1{,}506$ |

$$
\begin{array}{lrcl}
& 6s + 9(3s - 5) &=& 1{,}506 \\[4pt]
\text{Distribute.} & 6s + 27s - 45 &=& 1{,}506 \\[4pt]
\text{Combine like terms.} & 33s - 45 &=& 1{,}506 \\[4pt]
\text{Add 45 to both sides.} & 33s &=& 1{,}551 \\[4pt]
\text{Divide.} & s &=& 47
\end{array}
$$

There were 47 student tickets. The number of adult tickets is
$3(47) - 5 = 136$.

Check: $47 \cdot 6 = 282$ and $136 \cdot 9 = 1{,}224$; the total is
$282 + 1{,}224 = 1{,}506$ dollars. ✓ They sold 47 student tickets and 136
adult tickets.

{{< fillin
  question="The first day of a water polo tournament the total value of tickets sold was \$17,610. One-day passes sold for \$20 and tournament passes sold for \$30. The number of tournament passes sold was 37 more than the number of day passes sold. How many day passes were sold?"
  answer="330"
  answerForm="decimal"
  hint="Let $d$ be the number of day passes and write the number of tournament passes in terms of $d$. The receipts from each kind of pass add up to the day's total."
>}}

Sometimes we know the total number of tickets and need to work out how the
two types relate. Suppose 100 tickets are sold, each either an adult ticket
or a child ticket. If 75 are child tickets, the number of adult tickets must
be $100 - 75$, so 25 adult tickets were sold. If $x$ child tickets are sold,
the same reasoning gives $100 - x$ adult tickets.

**Example.** Galen sold 810 tickets for his church's carnival for a total
of \$2,820. Children's tickets cost \$3 each and adult tickets cost \$5
each. How many children's tickets and how many adult tickets did he sell?

Since the total number of tickets sold was 810, if $c$ is the number of
children's tickets, then $810 - c$ is the number of adult tickets.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Children | $c$ | $3$ | $3c$ |
| Adult | $810 - c$ | $5$ | $5(810 - c)$ |
| **Total** | | | $2{,}820$ |

$$
\begin{array}{lrcl}
& 3c + 5(810 - c) &=& 2{,}820 \\[4pt]
\text{Distribute.} & 3c + 4{,}050 - 5c &=& 2{,}820 \\[4pt]
\text{Combine like terms.} & -2c + 4{,}050 &=& 2{,}820 \\[4pt]
\text{Subtract 4,050.} & -2c &=& -1{,}230 \\[4pt]
\text{Divide.} & c &=& 615
\end{array}
$$

Galen sold 615 children's tickets. The number of adult tickets is
$810 - 615 = 195$.

Check: $615 \cdot 3 = 1{,}845$ and $195 \cdot 5 = 975$; the total is
$1{,}845 + 975 = 2{,}820$ dollars. ✓ Galen sold 615 children's tickets and
195 adult tickets.

{{< fillin
  question="During her shift at the museum ticket booth, Leah sold 115 tickets for a total of \$1,163. Adult tickets cost \$12 and student tickets cost \$5. How many adult tickets did Leah sell?"
  answer="84"
  answerForm="decimal"
  hint="Let $a$ be the number of adult tickets; since the total number of tickets is known, write the number of student tickets in terms of $a$. The adult receipts plus the student receipts equal the total collected."
>}}

**Example.** Monica paid \$8.36 for stamps. The number of 41-cent stamps
was four more than twice the number of two-cent stamps. How many 41-cent
stamps and how many two-cent stamps did Monica buy?

The types of stamps are 41-cent stamps and two-cent stamps — their names
give the value directly. Let $x$ represent the number of two-cent stamps;
then the number of 41-cent stamps is $2x + 4$.

| Type | Number | Value (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| 41-cent | $2x + 4$ | $0.41$ | $0.41(2x + 4)$ |
| 2-cent | $x$ | $0.02$ | $0.02x$ |
| **Total** | | | $8.36$ |

$$
\begin{array}{lrcl}
& 0.41(2x + 4) + 0.02x &=& 8.36 \\[4pt]
\text{Distribute.} & 0.82x + 1.64 + 0.02x &=& 8.36 \\[4pt]
\text{Combine like terms.} & 0.84x + 1.64 &=& 8.36 \\[4pt]
\text{Subtract 1.64.} & 0.84x &=& 6.72 \\[4pt]
\text{Divide.} & x &=& 8
\end{array}
$$

Monica bought eight two-cent stamps. The number of 41-cent stamps is
$2(8) + 4 = 20$.

Check: $8(0.02) + 20(0.41) = 0.16 + 8.20 = 8.36$ dollars. ✓ Monica bought
eight two-cent stamps and 20 forty-one-cent stamps.

{{< fillin
  question="Eric paid \$13.36 for stamps. The number of 41-cent stamps was eight more than twice the number of two-cent stamps. How many two-cent stamps did Eric buy?"
  answer="12"
  answerForm="decimal"
  hint="Let $x$ be the number of two-cent stamps and write the number of 41-cent stamps in terms of $x$. The value of each kind of stamp adds up to what Eric paid."
>}}

## Solve mixture word problems

Now we'll solve more general applications of the mixture model. Grocers and
bartenders use the mixture model to set a fair price for a product made by
mixing two or more ingredients; financial planners use it when investing
money across several accounts; landscape designers use it when mixing an
assortment of plants on a fixed budget; and event coordinators use it when
choosing appetizers and entrees for a banquet.

**Example.** Henning is mixing raisins and nuts to make 10 pounds of trail
mix. Raisins cost \$2 a pound and nuts cost \$6 a pound. If Henning wants
his cost for the trail mix to be \$5.20 a pound, how many pounds of raisins
and how many pounds of nuts should he use?

The 10 pounds of trail mix will come from mixing raisins and nuts. Let $x$
be the number of pounds of raisins; then $10 - x$ is the number of pounds
of nuts. We enter the price per pound for each item and multiply number
times price to get the total value — the last row of the table gives the
total amount of the mixture:

| Type | Number of pounds | Price per pound (\$) | Total value (\$) |
| :--- | :---: | :---: | :---: |
| Raisins | $x$ | $2$ | $2x$ |
| Nuts | $10 - x$ | $6$ | $6(10 - x)$ |
| Trail mix | $10$ | $5.20$ | $10(5.20)$ |

The value of the raisins plus the value of the nuts equals the value of the
trail mix:

$$
\begin{array}{lrcl}
& 2x + 6(10 - x) &=& 10(5.20) \\[4pt]
\text{Distribute.} & 2x + 60 - 6x &=& 52 \\[4pt]
\text{Combine like terms.} & -4x + 60 &=& 52 \\[4pt]
\text{Solve.} & x &=& 2
\end{array}
$$

Henning should use 2 pounds of raisins. The number of pounds of nuts is
$10 - 2 = 8$.

Check: $2(2) + 8(6) = 4 + 48 = 52$ dollars, and $10(5.20) = 52$ dollars. ✓
Henning mixed two pounds of raisins with eight pounds of nuts.

{{< fillin
  question="Orlando is mixing nuts and cereal squares to make a party mix. Nuts sell for \$7 a pound and cereal squares sell for \$4 a pound. Orlando wants to make 30 pounds of party mix at a cost of \$6.50 a pound. How many pounds of nuts should he use?"
  answer="25"
  answerForm="decimal"
  hint="Let $x$ be the pounds of nuts and write the pounds of cereal squares in terms of $x$, using the total weight. The value of the nuts plus the value of the cereal squares equals the value of the party mix."
>}}

{{< fillin
  question="Becca wants to mix fruit juice and soda to make a punch. She can buy fruit juice for \$3 a gallon and soda for \$4 a gallon. If she wants to make 28 gallons of punch at a cost of \$3.25 a gallon, how many gallons of soda should she buy?"
  answer="7"
  answerForm="decimal"
  hint="Let $x$ be the gallons of soda and write the gallons of fruit juice in terms of $x$, using the total amount of punch. The cost of the juice plus the cost of the soda equals the cost of the punch."
>}}

We can also use the mixture model to solve investment problems using
simple interest. Recall the simple interest formula $I = Prt$, where $t$ is
the number of years; when we need the interest for just one year, $t = 1$,
so $I = Pr$.

**Example.** Stacey has \$20,000 to invest in two different bank accounts.
One account pays interest at 3% per year and the other pays interest at 5%
per year. How much should she invest in each account if she wants to earn
4.5% interest per year on the total amount?

We fill in a table using the simple interest formula to find the interest
earned in each account. Let $x$ be the amount invested at 3%; then
$20{,}000 - x$ is the amount invested at 5%. The amount invested is the
*principal* for each account. We multiply the amount invested by the rate
to get the interest:

| Type | Amount invested (\$) | Rate | Interest (\$) |
| :--- | :---: | :---: | :---: |
| 3% | $x$ | $0.03$ | $0.03x$ |
| 5% | $20{,}000 - x$ | $0.05$ | $0.05(20{,}000 - x)$ |
| 4.5% | $20{,}000$ | $0.045$ | $0.045(20{,}000)$ |

The total amount invested, \$20,000, is the sum of the amounts invested at
3% and at 5%; the total interest, $0.045(20{,}000)$, is the sum of the
interest earned in each account. As with the other mixture applications,
the last column gives the equation to solve:

$$
\begin{array}{lrcl}
& 0.03x + 0.05(20{,}000 - x) &=& 0.045(20{,}000) \\[4pt]
\text{Distribute.} & 0.03x + 1{,}000 - 0.05x &=& 900 \\[4pt]
\text{Combine like terms.} & -0.02x + 1{,}000 &=& 900 \\[4pt]
\text{Solve.} & x &=& 5{,}000
\end{array}
$$

Stacey should invest \$5,000 at 3%. The amount invested at 5% is
$20{,}000 - 5{,}000 = 15{,}000$ dollars.

Check: $0.03(5{,}000) + 0.05(15{,}000) = 150 + 750 = 900$, and
$0.045(20{,}000) = 900$. ✓ Stacey should invest \$5,000 in the account
that earns 3% and \$15,000 in the account that earns 5%.

{{< fillin
  question="Remy has \$14,000 to invest in two mutual funds. One fund pays interest at 4% per year and the other fund pays interest at 7% per year. How much should she invest in the fund that pays 4% if she wants to earn 6.1% interest on the total amount? Enter the amount in dollars."
  answer="4200"
  answerForm="decimal"
  answerDisplay="\$4,200"
  hint="Let $x$ be the amount invested at 4% and write the amount at 7% in terms of $x$, using the total. The interest from each fund adds up to the interest on the whole amount at 6.1%."
>}}

{{< fillin
  question="Marco has \$8,000 to save for his daughter's college education. He wants to divide it between one account that pays 3.2% interest per year and another account that pays 8% interest per year. How much should he invest in the account that pays 8% if he wants the interest on the total investment to be 6.5%? Enter the amount in dollars."
  answer="5500"
  answerForm="decimal"
  answerDisplay="\$5,500"
  hint="Let $x$ be the amount invested at 3.2% and write the amount at 8% in terms of $x$, using the total. The interest from the two accounts adds up to the interest on the whole amount at 6.5%; answer with the amount at 8%."
>}}

## Key terms

**mixture problem** — a problem in which two or more items with different
values are combined together. **total value model** —
$\text{number} \cdot \text{value} = \text{total value}$: for a single type
of coin, ticket, stamp, or ingredient, the number of items times the value
per item gives the total value of that item. **simple interest** — interest
computed once on the principal, using $I = Pr$ when the time is one year;
in a mixture-model investment problem, the "value" of each account is its
interest rate and the "total value" is the interest earned.

## Practice

### Solve coin word problems

{{< fillin
  question="Jaime has \$2.60 in dimes and nickels. The number of dimes is 14 more than the number of nickels. How many of each coin does he have? Enter the number of nickels and the number of dimes, separated by a comma."
  answer="8,22"
  answerForm="decimal"
  answerDisplay="8 nickels, 22 dimes"
  hint="Name the number of nickels with a variable and write the number of dimes in terms of it. The total value of the nickels plus the total value of the dimes equals the total value."
>}}

{{< fillin
  question="Ngo has a collection of dimes and quarters with a total value of \$3.50. The number of dimes is seven more than the number of quarters. How many of each coin does he have? Enter the number of dimes and the number of quarters, separated by a comma."
  answer="15,8"
  answerForm="decimal"
  answerDisplay="15 dimes, 8 quarters"
  hint="Let $q$ be the number of quarters and write the number of dimes in terms of $q$. Add the value of each kind of coin and set the sum equal to the total value of the collection."
>}}

### Solve ticket and stamp word problems

{{< fillin
  question="The school play sold \$550 in tickets one night. The number of \$8 adult tickets was 10 less than twice the number of \$5 child tickets. How many of each ticket were sold? Enter the number of child tickets and the number of adult tickets, separated by a comma."
  answer="30,50"
  answerForm="decimal"
  answerDisplay="30 child tickets, 50 adult tickets"
  hint="Let $c$ be the number of child tickets and write the number of adult tickets in terms of $c$. The child-ticket receipts plus the adult-ticket receipts equal the night's total."
>}}

{{< fillin
  question="The movie theater took in \$1,220 one Monday night. The number of \$7 child tickets was ten more than twice the number of \$9 adult tickets. How many of each were sold? Enter the number of child tickets and the number of adult tickets, separated by a comma."
  answer="110,50"
  answerForm="decimal"
  answerDisplay="110 child tickets, 50 adult tickets"
  hint="Name the number of adult tickets first, since the child tickets are described in terms of it, and write the number of child tickets in terms of that variable. The receipts from each kind of ticket add up to the night's total."
>}}

### Solve mixture word problems

{{< fillin
  question="Kaapo is mixing Kona beans and Maui beans to make 25 pounds of coffee blend. Kona beans cost Kaapo \$15 per pound and Maui beans cost \$24 per pound. How many pounds of each coffee bean should Kaapo use for his blend to cost him \$17.70 per pound? Enter the pounds of Maui beans and the pounds of Kona beans as decimals, separated by a comma."
  answer="7.5,17.5"
  answerForm="decimal"
  answerDisplay="7.5 pounds of Maui beans, 17.5 pounds of Kona beans"
  hint="Let $m$ be the pounds of Maui beans and write the pounds of Kona beans in terms of $m$, using the total weight. The cost of each kind of bean adds up to the cost of the whole blend."
>}}

{{< fillin
  question="Carmen wants to tile the floor of his house. He will need 1,000 square feet of tile. He will do most of the floor with a tile that costs \$1.50 per square foot, but also wants to use an accent tile that costs \$9.00 per square foot. If he wants the overall cost to be \$3 per square foot, how many square feet of the \$1.50 tile should he plan to use?"
  answer="800"
  answerForm="decimal"
  answerDisplay="800 square feet at \$1.50"
  hint="Let $x$ be the square feet of the \$1.50 tile and write the square feet of accent tile in terms of $x$, using the total area. The cost of each tile adds up to the cost of the whole floor at the overall rate."
>}}

{{< fillin
  question="Lauren is making 15 liters of mimosas for a brunch banquet. Orange juice costs her \$1.50 per liter and champagne costs her \$12 per liter. How many liters of orange juice and how many liters of champagne should she use for the mimosas to cost Lauren \$5 per liter? Enter the liters of orange juice and the liters of champagne, separated by a comma."
  answer="10,5"
  answerForm="decimal"
  answerDisplay="10 liters of orange juice, 5 liters of champagne"
  hint="Let $j$ be the liters of orange juice and write the liters of champagne in terms of $j$, using the total volume. The cost of the orange juice plus the cost of the champagne equals the cost of the mimosas."
>}}

### Use the mixture model to solve investment problems using simple interest

{{< fillin
  question="Vartan was paid \$25,000 for a cell phone app that he wrote and wants to invest it to save for his son’s education. He wants to put some of the money into a bond that pays 4% annual interest and the rest into stocks that pay 9% annual interest. If he wants to earn 7.4% annual interest on the total amount, how much money should he invest in each account? Enter the dollars invested at 4% and the dollars invested at 9%, without dollar signs, separated by a comma."
  answer="8000,17000"
  answerForm="decimal"
  answerDisplay="\$8,000 at 4%, \$17,000 at 9%"
  hint="Let $b$ be the amount invested at 4% and write the amount in stocks in terms of $b$, using the total. The interest from the bond plus the interest from the stocks equals the interest on the whole amount at the target rate."
>}}

{{< fillin
  question="Stephanie inherited \$40,000. She wants to put some of the money in a certificate of deposit that pays 2.1% interest per year and the rest in a mutual fund account that pays 6.5% per year. How much should she invest in each account if she wants to earn 5.4% interest per year on the total amount? Enter the dollars invested in the certificate of deposit and the dollars invested in the mutual fund, without dollar signs, separated by a comma."
  answer="10000,30000"
  answerForm="decimal"
  answerDisplay="\$10,000 in the certificate of deposit, \$30,000 in the mutual fund"
  hint="Let $c$ be the amount in the certificate of deposit and write the amount in the mutual fund in terms of $c$, using the total. The interest from each account adds up to the interest on the whole inheritance at the target rate."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 3.3: Solve Mixture Applications](https://openstax.org/books/elementary-algebra-2e/pages/3-3-solve-mixture-applications) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the coin/ticket/stamp/mixture/investment tables as markdown tables; omitted the Be Prepared quiz, the coin photograph, the Manipulative Mathematics callout, the ticket-relationship summary table's illustrative rows (kept as prose), the Everyday Math and Writing Exercises, and the Self Check checklist; converted a selection of the practice problems ("Try Its") into interactive exercises with instant feedback, each asking for one of the two quantities; adapted selected end-of-section exercises into the interactive Practice block, restating list answers in an explicit response order, asking for one quantity where the two-number answer would read as a single grouped number, and correcting a typo ("in making") in one exercise; and named the unit to enter in the investment questions.</small>
