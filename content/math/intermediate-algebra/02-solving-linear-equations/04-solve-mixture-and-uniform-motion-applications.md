---
title: Solve Mixture and Uniform Motion Applications
description: >-
  Solving coin, ticket, stamp, mixture, and uniform motion applications with
  linear equations — adapted from OpenStax Intermediate Algebra 2e, Section 2.4.
source_section: "2.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve coin word
  problems, solve ticket and stamp word problems, solve mixture word problems,
  and solve uniform motion applications.
{{< /callout >}}

## Solve coin word problems

Using algebra to find the number of nickels and pennies in a piggy bank may
seem silly. You may wonder why we just don’t open the bank and count them. But
this type of problem introduces us to some techniques that will be useful as
we move forward in our study of mathematics.

If we have a pile of dimes, how would we determine its value? If we count the
number of dimes, we’ll know how many we have—the *number* of dimes. But this
does not tell us the *value* of all the dimes. Say we counted 23 dimes, how
much are they worth? Each dime is worth \$0.10—that is the *value* of one
dime. To find the total value of the pile of 23 dimes, multiply 23 by \$0.10
to get \$2.30.

The number of dimes times the value of each dime equals the total value of the
dimes.

$$
\begin{array}{rcl}
\textit{number}\cdot\textit{value} &=& \textit{total value} \\[4pt]
23\cdot\$0.10 &=& \$2.30
\end{array}
$$

This method leads to the following model.

{{< callout type="info" >}}
  **Total Value of Coins.** For the same type of coin, the total value of a
  number of coins is found by using the model

  $$\textit{number}\cdot\textit{value}=\textit{total value}$$

  - *number* is the number of coins
  - *value* is the value of each coin
  - *total value* is the total value of all the coins
{{< /callout >}}

If we had several types of coins, we could continue this process for each type
of coin, and then we would know the total value of each type of coin. To get
the total value of *all* the coins, add the total value of each type of coin.

**Example 2.39.** Jesse has \$3.02 worth of pennies and nickels in his piggy
bank. The number of nickels is three more than eight times the number of
pennies. How many nickels and how many pennies does Jesse have?

**Solution.**

**Step 1. Read the problem.** Determine the types of coins involved: pennies
and nickels. Create a table. Write in the value of each type of coin. Pennies
are worth \$0.01. Nickels are worth \$0.05.

**Step 2. Identify what we are looking for:** the number of pennies and
nickels.

**Step 3. Name.** Represent the number of each type of coin using variables.
The number of nickels is defined in terms of the number of pennies, so start
with pennies. Let $p=$ number of pennies. The number of nickels is three more
than eight times the number of pennies, so $8p+3=$ number of nickels.

In the chart, multiply the number and the value to get the total value of each
type of coin.

| Type | Number | Value (\$) | Total Value (\$) |
| :--- | ---: | ---: | ---: |
| pennies | $p$ | $0.01$ | $0.01p$ |
| nickels | $8p+3$ | $0.05$ | $0.05(8p+3)$ |
| **Total** |  |  | **$3.02$** |

**Step 4. Translate.** Write the equation by adding the total value of all the
types of coins.

$$0.01p+0.05(8p+3)=3.02$$

**Step 5. Solve the equation.**

$$
\begin{array}{rcl}
0.01p+0.40p+0.15 &=& 3.02 \\[4pt]
0.41p+0.15 &=& 3.02 \\[4pt]
0.41p &=& 2.87 \\[4pt]
p &=& 7\text{ pennies}
\end{array}
$$

How many nickels?

$$
\begin{array}{rcl}
8p+3 &=& 8(7)+3 \\[4pt]
&=& 59\text{ nickels}
\end{array}
$$

**Step 6. Check** the answer in the problem and make sure it makes sense.
Jesse has 7 pennies and 59 nickels. Is the total value \$3.02?

$$
\begin{array}{rcl}
7(0.01)+59(0.05) &\overset{?}{=}& 3.02 \\[4pt]
3.02 &=& 3.02\checkmark
\end{array}
$$

**Step 7. Answer** the question with a complete sentence. Jesse has 7 pennies
and 59 nickels.

{{< fillin
  question="Jesse has \$6.55 worth of quarters and nickels in his pocket. The number of nickels is five more than two times the number of quarters. How many nickels and how many quarters does Jesse have? Enter the numbers of nickels and quarters, separated by commas."
  answer="41, 18"
  answerDisplay="$41$ nickels and $18$ quarters"
  hint="Let $q$ be the number of quarters, so the number of nickels is $2q+5$. Use the total-value equation."
>}}

{{< fillin
  question="Elane has \$7.00 total in dimes and nickels in her coin jar. The number of dimes that Elane has is seven less than three times the number of nickels. How many of each coin does Elane have? Enter the numbers of nickels and dimes, separated by commas."
  answer="22, 59"
  answerDisplay="$22$ nickels and $59$ dimes"
  hint="Let $n$ be the number of nickels, so the number of dimes is $3n-7$."
>}}

The steps for solving a coin word problem are summarized below.

{{< callout type="info" >}}
  **Solve coin word problems.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
     Determine the types of coins involved. Create a table to organize the
     information. Label the columns “type,” “number,” “value,” and “total
     value.” List the types of coins. Write in the value of each type of coin.
     Write in the total value of all the coins.
  2. **Identify** what you are looking for.
  3. **Name** what you are looking for. Choose a variable to represent that
     quantity. Use variable expressions to represent the number of each type
     of coin and write them in the table. Multiply the number times the value
     to get the total value of each type of coin.
  4. **Translate** into an equation. It may be helpful to restate the problem
     in one sentence with all the important information. Then, translate the
     sentence into an equation. Write the equation by adding the total values
     of all the types of coins.
  5. **Solve** the equation using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

## Solve ticket and stamp word problems

Problems involving tickets or stamps are very much like coin problems. Each
type of ticket and stamp has a value, just like each type of coin does. So to
solve these problems, we will follow the same steps we used to solve coin
problems.

**Example 2.40.** Danny paid \$15.75 for stamps. The number of 49-cent stamps
was five less than three times the number of 35-cent stamps. How many 49-cent
stamps and how many 35-cent stamps did Danny buy?

**Solution.**

**Step 1.** Determine the types of stamps involved: 49-cent stamps and
35-cent stamps.

**Step 2. Identify** what we are looking for: the number of 49-cent stamps
and the number of 35-cent stamps.

**Step 3.** Write variable expressions to represent the number of each type
of stamp. Let $x=$ number of 35-cent stamps. “The number of 49-cent stamps
was five less than three times the number of 35-cent stamps,” so $3x-5=$
number of 49-cent stamps.

| Type | Number | Value (\$) | Total Value (\$) |
| :--- | ---: | ---: | ---: |
| 49-cent stamps | $3x-5$ | $0.49$ | $0.49(3x-5)$ |
| 35-cent stamps | $x$ | $0.35$ | $0.35x$ |
| **Total** |  |  | **$15.75$** |

**Step 4.** Write the equation from the total values.

$$0.49(3x-5)+0.35x=15.75$$

**Step 5. Solve** the equation.

$$
\begin{array}{rcl}
1.47x-2.45+0.35x &=& 15.75 \\[4pt]
1.82x-2.45 &=& 15.75 \\[4pt]
1.82x &=& 18.2 \\[4pt]
x &=& 10\text{ 35-cent stamps}
\end{array}
$$

How many 49-cent stamps?

$$3x-5=3(10)-5=25\text{ 49-cent stamps}$$

**Step 6. Check.**

$$
\begin{array}{rcl}
10(0.35)+25(0.49) &\overset{?}{=}& 15.75 \\[4pt]
3.50+12.25 &\overset{?}{=}& 15.75 \\[4pt]
15.75 &=& 15.75\checkmark
\end{array}
$$

**Step 7. Answer** the question with a complete sentence. Danny bought ten
35-cent stamps and twenty-five 49-cent stamps.

{{< fillin
  question="Eric paid \$19.88 for stamps. The number of 49-cent stamps was eight more than twice the number of 35-cent stamps. How many 49-cent stamps and how many 35-cent stamps did Eric buy? Enter the numbers of 49-cent and 35-cent stamps, separated by commas."
  answer="32, 12"
  answerDisplay="$32$ 49-cent stamps and $12$ 35-cent stamps"
  hint="Let $x$ be the number of 35-cent stamps. Then the number of 49-cent stamps is $2x+8$."
>}}

{{< fillin
  question="Kailee paid \$14.74 for stamps. The number of 49-cent stamps was four less than three times the number of 20-cent stamps. How many 49-cent stamps and how many 20-cent stamps did Kailee buy? Enter the numbers of 49-cent and 20-cent stamps, separated by commas."
  answer="26, 10"
  answerDisplay="$26$ 49-cent stamps and $10$ 20-cent stamps"
  hint="Let $x$ be the number of 20-cent stamps. Then the number of 49-cent stamps is $3x-4$."
>}}

In most of our examples so far, we have been told that one quantity is four
more than twice the other, or something similar. In our next example, we have
to relate the quantities in a different way.

Suppose Aniket sold a total of 100 tickets. Each ticket was either an adult
ticket or a child ticket. If he sold 20 child tickets, how many adult tickets
did he sell?

*Did you say “80”? How did you figure that out? Did you subtract 20 from
100?*

If he sold 45 child tickets, how many adult tickets did he sell?

*Did you say “55”? How did you find it? By subtracting 45 from 100?*

Now, suppose Aniket sold $x$ child tickets. Then how many adult tickets did he
sell? To find out, we would follow the same logic we used above. In each case,
we subtracted the number of child tickets from 100 to get the number of adult
tickets. We now do the same with $x$.

| Child tickets | Adult tickets |
| ---: | ---: |
| $20$ | $80$ |
| $45$ | $55$ |
| $75$ | $25$ |
| $x$ | $100-x$ |

We will apply this technique in the next example.

**Example 2.41.** A whale-watching ship had 40 paying passengers on board. The
total revenue collected from tickets was \$1,196. Full-fare passengers paid
\$32 each and reduced-fare passengers paid \$26 each. How many full-fare
passengers and how many reduced-fare passengers were on the ship?

**Solution.**

**Step 1.** Determine the types of tickets involved: full-fare tickets and
reduced-fare tickets.

**Step 2. Identify** what we are looking for: the number of full-fare tickets
and reduced-fare tickets.

**Step 3. Name.** Represent the number of each type of ticket using variables.
Let $f=$ the number of full-fare tickets. $40-f=$ the number of reduced-fare
tickets. We know the total number of tickets sold was 40. This means the
number of reduced-fare tickets is 40 less the number of full-fare tickets.
Multiply the number times the value to get the total value of each type of
ticket.

| Type | Number | Value (\$) | Total Value (\$) |
| :--- | ---: | ---: | ---: |
| Full-fare | $f$ | $32$ | $32f$ |
| Reduced-fare | $40-f$ | $26$ | $26(40-f)$ |
| **Total** |  |  | **$1{,}196$** |

**Step 4. Translate.** Write the equation by adding the total values of each
type of ticket.

$$32f+26(40-f)=1{,}196$$

**Step 5. Solve** the equation.

$$
\begin{array}{rcl}
32f+1{,}040-26f &=& 1{,}196 \\[4pt]
6f &=& 156 \\[4pt]
f &=& 26\text{ full-fare tickets}
\end{array}
$$

How many reduced-fare tickets?

$$40-f=40-26=14\text{ reduced-fare tickets}$$

**Step 6. Check** the answer. There were 26 full-fare tickets at \$32 each
and 14 reduced-fare tickets at \$26 each. Is the total value \$1,196?

$$
\begin{array}{rcl}
26\cdot32 &=& 832 \\[4pt]
14\cdot26 &=& 364 \\[4pt]
832+364 &=& 1{,}196\checkmark
\end{array}
$$

**Step 7. Answer** the question. They sold 26 full-fare and 14 reduced-fare
tickets.

{{< fillin
  question="During her shift at the museum ticket booth, Leah sold 115 tickets for a total of \$1,163. Adult tickets cost \$12 and student tickets cost \$5. How many adult tickets and how many student tickets did Leah sell? Enter the numbers of adult and student tickets, separated by commas."
  answer="84, 31"
  answerDisplay="$84$ adult tickets and $31$ student tickets"
  hint="Let $a$ be the number of adult tickets. The number of student tickets is $115-a$."
>}}

{{< fillin
  question="Galen sold 810 tickets for his church’s carnival for a total revenue of \$2,820. Children’s tickets cost \$3 each and adult tickets cost \$5 each. How many children’s tickets and how many adult tickets did he sell? Enter the numbers of children’s and adult tickets, separated by commas."
  answer="615, 195"
  answerDisplay="$615$ children’s tickets and $195$ adult tickets"
  hint="Let $a$ be the number of adult tickets. The number of children’s tickets is $810-a$."
>}}

## Solve mixture word problems

Now we’ll solve some more general applications of the mixture model. In
mixture problems, we are often mixing two quantities, such as raisins and
nuts, to create a mixture, such as trail mix. In our tables we will have a
row for each item to be mixed as well as one for the final mixture.

**Example 2.42.** Henning is mixing raisins and nuts to make 25 pounds of
trail mix. Raisins cost \$4.50 a pound and nuts cost \$8 a pound. If Henning
wants his cost for the trail mix to be \$6.60 a pound, how many pounds of
raisins and how many pounds of nuts should he use?

**Solution.**

**Step 1.** Determine what is being mixed. The 25 pounds of trail mix will
come from mixing raisins and nuts.

**Step 2. Identify** what we are looking for: the number of pounds of raisins
and nuts.

**Step 3.** Represent the number of each type of ticket using variables. Let
$x=$ number of pounds of raisins. $25-x=$ number of pounds of nuts. As before,
we fill in a chart to organize our information. We enter the price per pound
for each item. We multiply the number times the value to get the total value.

| Type | Number of pounds | Price per pound (\$) | Total Value (\$) |
| :--- | ---: | ---: | ---: |
| Raisins | $x$ | $4.50$ | $4.5x$ |
| Nuts | $25-x$ | $8$ | $8(25-x)$ |
| Trail mix | $25$ | $6.60$ | $25(6.60)$ |

Notice that the last column in the table gives the information for the total
amount of the mixture.

**Step 4. Translate** into an equation. The value of the raisins plus the
value of the nuts will be the value of the trail mix.

**Step 5. Solve** the equation.

$$
\begin{array}{rcl}
4.5x+8(25-x) &=& 25(6.60) \\[4pt]
4.5x+200-8x &=& 165 \\[4pt]
-3.5x &=& -35 \\[4pt]
x &=& 10\text{ pounds of raisins}
\end{array}
$$

Find the number of pounds of nuts.

$$25-x=25-10=15\text{ pounds of nuts}$$

**Step 6. Check.**

$$
\begin{array}{rcl}
4.5(10)+8(15) &\overset{?}{=}& 25(6.60) \\[4pt]
45+120 &\overset{?}{=}& 165 \\[4pt]
165 &=& 165\checkmark
\end{array}
$$

**Step 7. Answer** the question. Henning mixed ten pounds of raisins with 15
pounds of nuts.

{{< fillin
  question="Orlando is mixing nuts and cereal squares to make a party mix. Nuts sell for \$7 a pound and cereal squares sell for \$4 a pound. Orlando wants to make 30 pounds of party mix at a cost of \$6.50 a pound. How many pounds of cereal squares and how many pounds of nuts should he use? Enter the numbers of pounds of cereal squares and nuts, separated by commas."
  answer="5, 25"
  answerDisplay="$5$ pounds of cereal squares and $25$ pounds of nuts"
  hint="Let $n$ be the pounds of nuts. Then the pounds of cereal squares is $30-n$."
>}}

{{< fillin
  question="Becca wants to mix fruit juice and soda to make a punch. She can buy fruit juice for \$3 a gallon and soda for \$4 a gallon. If she wants to make 28 gallons of punch at a cost of \$3.25 a gallon, how many gallons of fruit juice and how many gallons of soda should she buy? Enter the numbers of gallons of fruit juice and soda, separated by commas."
  answer="21, 7"
  answerDisplay="$21$ gallons of fruit juice and $7$ gallons of soda"
  hint="Let $s$ be the gallons of soda. Then the gallons of fruit juice is $28-s$."
>}}

## Solve uniform motion applications

When you are driving down the interstate using your cruise control, the speed
of your car stays the same—it is uniform. We call a problem in which the speed
of an object is constant a uniform motion application. We will use the
distance, rate, and time formula, $D=rt$, to compare two scenarios, such as
two vehicles travelling at different rates or in opposite directions.

Our problem solving strategies will still apply here, but we will add to the
first step. The first step will include drawing a diagram that shows what is
happening in the example. Drawing the diagram helps us understand what is
happening so that we will write an appropriate equation. Then we will make a
table to organize the information, like we did for the coin, ticket, and stamp
applications.

The steps are listed here for easy reference:

{{< callout type="info" >}}
  **Solve a uniform motion application.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
     Draw a diagram to illustrate what is happening. Create a table to
     organize the information. Label the columns rate, time, distance. List
     the two scenarios. Write in the information you know.
  2. **Identify** what you are looking for.
  3. **Name** what you are looking for. Choose a variable to represent that
     quantity. Complete the chart. Use variable expressions to represent that
     quantity in each row. Multiply the rate times the time to get the
     distance.
  4. **Translate** into an equation. Restate the problem in one sentence with
     all the important information. Then, translate the sentence into an
     equation.
  5. **Solve** the equation using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

**Example 2.43.** Wayne and Dennis like to ride the bike path from Riverside
Park to the beach. Dennis’s speed is seven miles per hour faster than Wayne’s
speed, so it takes Wayne two hours to ride to the beach while it takes Dennis
1.5 hours for the ride. Find the speed of both bikers.

**Solution.**

**Step 1. Read** the problem. Make sure all the words and ideas are
understood. Draw a diagram to illustrate what is happening. Both Dennis and
Wayne travel from Riverside Park to the beach—the same distance. Dennis rides
for 1.5 hours at a speed 7 mph faster than Wayne, who rides for 2 hours.
Create a table to organize the information.

**Step 2. Identify** what you are looking for. You are asked to find the speed
of both bikers. Notice that the distance formula uses the word “rate,” but it
is more common to use “speed” when we talk about vehicles in everyday English.

**Step 3. Name** what we are looking for. Choose a variable to represent that
quantity. We are looking for the speed of the bikers. Let $r$ represent
Wayne’s speed. Since Dennis’s speed is 7 mph faster, we represent that as
$r+7$.

|  | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | ---: | ---: | ---: |
| Dennis | $r+7$ | $1.5$ | $1.5(r+7)$ |
| Wayne | $r$ | $2$ | $2r$ |

**Step 4. Translate** into an equation. Since both bikers leave from Riverside
and travel to the beach, they travel the same distance.

$$1.5(r+7)=2r$$

**Step 5. Solve** the equation using algebra techniques.

$$
\begin{array}{rcl}
1.5(r+7) &=& 2r \\[4pt]
1.5r+10.5 &=& 2r \\[4pt]
10.5 &=& 0.5r \\[4pt]
21 &=& r
\end{array}
$$

So Wayne’s speed is 21 mph. Find Dennis’s speed: $r+7=21+7=28$. Dennis’s
speed is 28 mph.

**Step 6. Check** the answer in the problem and make sure it makes sense.

$$
\begin{array}{rcl}
\text{Dennis: }28\text{ mph}(1.5\text{ hours}) &=& 42\text{ miles} \\[4pt]
\text{Wayne: }21\text{ mph}(2\text{ hours}) &=& 42\text{ miles}\checkmark
\end{array}
$$

**Step 7. Answer** the question with a complete sentence. Wayne rode at 21
mph and Dennis rode at 28 mph.

{{< fillin
  question="An express train and a local train leave Pittsburgh to travel to Washington, D.C. The express train can make the trip in four hours and the local train takes five hours for the trip. The speed of the express train is 12 miles per hour faster than the speed of the local train. Enter the speeds of the local and express trains, separated by commas."
  answer="48, 60"
  answerDisplay="$48$ mph and $60$ mph"
  hint="The trains travel the same distance, so set $5r=4(r+12)$."
>}}

{{< fillin
  question="Jeromy can drive from his house in Cleveland to his college in Chicago in 4.5 hours. It takes his mother six hours to make the same drive. Jeromy drives 20 miles per hour faster than his mother. Enter Jeromy’s speed and his mother’s speed, separated by commas."
  answer="80, 60"
  answerDisplay="$80$ mph and $60$ mph"
  hint="They travel the same distance. Let $r$ be his mother’s speed."
>}}

In Example 2.43, we had two bikers traveling the same distance. In the next
example, two people drive toward each other until they meet.

**Example 2.44.** Carina is driving from her home in Anaheim to Berkeley on
the same day her brother is driving from Berkeley to Anaheim, so they decide
to meet for lunch along the way in Buttonwillow. The distance from Anaheim to
Berkeley is 395 miles. It takes Carina three hours to get to Buttonwillow,
while her brother drives four hours to get there. Carina’s average speed is 15
miles per hour faster than her brother’s average speed. Find Carina’s and her
brother’s average speeds.

**Solution.**

**Step 1. Read** the problem. Draw a diagram. Carina and her brother start at
opposite ends of a 395-mile route and meet for lunch; Carina drives 3 hours,
her brother drives 4 hours, and Carina’s speed is 15 mph faster. Create a
table.

**Step 2. Identify** what we are looking for. We are asked to find the average
speeds of Carina and her brother.

**Step 3. Name** what we are looking for. Let $r$ represent the average speed
of Carina’s brother. Since Carina’s speed is 15 mph faster, we represent that
as $r+15$.

|  | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | ---: | ---: | ---: |
| Carina | $r+15$ | $3$ | $3(r+15)$ |
| Brother | $r$ | $4$ | $4r$ |
| **Total** |  |  | **$395$** |

**Step 4. Translate** into an equation. The distance Carina traveled plus the
distance her brother traveled must add up to 395 miles.

$$3(r+15)+4r=395$$

**Step 5. Solve** the equation using algebra techniques.

$$
\begin{array}{rcl}
3(r+15)+4r &=& 395 \\[4pt]
3r+45+4r &=& 395 \\[4pt]
7r+45 &=& 395 \\[4pt]
7r &=& 350 \\[4pt]
r &=& 50
\end{array}
$$

So Carina’s brother’s speed was 50 mph. Carina’s speed is
$r+15=50+15=65$ mph.

**Step 6. Check** the answer in the problem and make sure it makes sense.

$$
\begin{array}{rcl}
\text{Carina drove }65\text{ mph}(3\text{ hours}) &=& 195\text{ miles} \\[4pt]
\text{Her brother drove }50\text{ mph}(4\text{ hours}) &=& 200\text{ miles} \\[4pt]
195+200 &=& 395\text{ miles}\checkmark
\end{array}
$$

**Step 7. Answer** the question with a complete sentence. Carina drove 65 mph
and her brother 50 mph.

{{< fillin
  question="Christopher and his parents live 115 miles apart. They met at a restaurant between their homes. Christopher drove one and a half hours while his parents drove one hour. Christopher’s average speed was ten miles per hour faster than his parents’ average speed. Enter Christopher’s and his parents’ average speeds, separated by commas."
  answer="50, 40"
  answerDisplay="$50$ mph and $40$ mph"
  hint="Their distances add to $115$. Let $r$ be the parents’ speed."
>}}

{{< fillin
  question="Ashley goes to college in Minneapolis, 234 miles from her home in Sioux Falls. Ashley and her parents both drove two hours to a restaurant between the cities. Ashley’s average speed was seven miles per hour faster than her parents’ average speed. Enter Ashley’s and her parents’ average speeds, separated by commas."
  answer="62, 55"
  answerDisplay="$62$ mph and $55$ mph"
  hint="Their distances add to $234$. Let $r$ be the parents’ speed."
>}}

As you read the next example, think about the relationship of the distances
traveled. Which of the previous two examples is more similar to this
situation?

**Example 2.45.** Two truck drivers leave a rest area on the interstate at the
same time. One truck travels east and the other one travels west. The truck
traveling west travels at 70 mph and the truck traveling east has an average
speed of 60 mph. How long will they travel before they are 325 miles apart?

**Solution.**

**Step 1. Read** the problem. Draw a diagram. Both trucks leave the rest stop
at the same time in opposite directions, the westbound truck at 70 mph and
the eastbound truck at 60 mph, until they are 325 miles apart. Create a table.

**Step 2. Identify** what we are looking for. We are asked to find the amount
of time the trucks will travel until they are 325 miles apart.

**Step 3. Name** what we are looking for. Let $t$ be the time travelled. Both
trucks will travel the same amount of time.

|  | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | ---: | ---: | ---: |
| West | $70$ | $t$ | $70t$ |
| East | $60$ | $t$ | $60t$ |
| **Total** |  |  | **$325$** |

**Step 4. Translate** into an equation. The distance travelled by the truck
going west plus the distance travelled by the truck going east must add up to
325 miles.

$$70t+60t=325$$

**Step 5. Solve** the equation using algebra techniques.

$$
\begin{array}{rcl}
70t+60t &=& 325 \\[4pt]
130t &=& 325 \\[4pt]
t &=& 2.5
\end{array}
$$

So it will take the trucks 2.5 hours to be 325 miles apart.

**Step 6. Check** the answer in the problem and make sure it makes sense.

$$
\begin{array}{rcl}
\text{Truck going West: }70\text{ mph}(2.5\text{ hours}) &=& 175\text{ miles} \\[4pt]
\text{Truck going East: }60\text{ mph}(2.5\text{ hours}) &=& 150\text{ miles} \\[4pt]
175+150 &=& 325\text{ miles}\checkmark
\end{array}
$$

**Step 7. Answer** the question with a complete sentence. It will take the
trucks 2.5 hours to be 325 miles apart.

{{< fillin
  question="Pierre and Monique leave their home in Portland at the same time. Pierre drives north at 75 miles per hour while Monique drives south at 68 miles per hour. How long will it take them to be 429 miles apart?"
  answer="3"
  answerDisplay="$3$ hours"
  hint="Their distances add to $429$, and they travel for the same time $t$."
>}}

{{< fillin
  question="Thanh and Nhat leave their office in Sacramento at the same time. Thanh drives north on I-5 at 72 miles per hour. Nhat drives south on I-5 at 76 miles per hour. How long will it take them to be 330 miles apart?"
  answer="2.2"
  answerDisplay="$2.2$ hours"
  hint="Use $72t+76t=330$."
>}}

It is important to make sure that the units match when we use the distance
rate and time formula. For instance, if the rate is in miles per hour, then
the time must be in hours.

**Example 2.46.** When Naoko walks to school, it takes her 30 minutes. If she
rides her bike, it takes her 15 minutes. Her speed is three miles per hour
faster when she rides her bike than when she walks. What is her speed walking
and her speed riding her bike?

**Solution.** First, we draw a diagram that represents the situation to help
us see what is happening. The walk and bike routes both go from Naoko’s home
to her school—the same distance. Walking takes 30 minutes, biking takes 15
minutes, and biking is 3 mph faster.

We are asked to find her speed walking and riding her bike. Let’s call her
walking speed $r$. Since her biking speed is three miles per hour faster, we
will call that speed $r+3$. We write the speeds in the chart.

The speed is in miles per hour, so we need to express the times in hours, too,
in order for the units to be the same. Remember, 1 hour is 60 minutes. So:

$$30\text{ minutes is }\frac{30}{60}\text{ or }\frac12\text{ hour}$$

$$15\text{ minutes is }\frac{15}{60}\text{ or }\frac14\text{ hour}$$

We write the times in the chart. Next, we multiply rate times time to fill in
the distance column.

|  | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | ---: | ---: | ---: |
| Walk | $r$ | $\tfrac12$ | $\tfrac12r$ |
| Bike | $r+3$ | $\tfrac14$ | $\tfrac14(r+3)$ |

The equation will come from the fact that the distance from Naoko’s home to
her school is the same whether she is walking or riding her bike.

Translate to an equation.

$$\frac12r=\frac14(r+3)$$

Clear the fractions by multiplying by the LCD of all the fractions in the
equation.

$$8\cdot\frac12r=8\cdot\frac14(r+3)$$

Simplify.

$$
\begin{array}{rcl}
4r &=& 2(r+3) \\[4pt]
4r &=& 2r+6 \\[4pt]
2r &=& 6 \\[4pt]
r &=& 3\text{ mph walking speed}
\end{array}
$$

The biking speed is $r+3=3+3=6$ mph.

Let’s check if this works.

$$
\begin{array}{rcl}
\text{Walk: }3\text{ mph}(0.5\text{ hour}) &=& 1.5\text{ miles} \\[4pt]
\text{Bike: }6\text{ mph}(0.25\text{ hour}) &=& 1.5\text{ miles}
\end{array}
$$

Yes, either way Naoko travels 1.5 miles to school. Naoko’s walking speed is 3
mph and her speed riding her bike is 6 mph.

{{< fillin
  question="Suzy takes 50 minutes to hike uphill from the parking lot to the lookout tower. It takes her 30 minutes to hike back down to the parking lot. Her speed going downhill is 1.2 miles per hour faster than her speed going uphill. Enter Suzy’s uphill and downhill speeds, separated by commas."
  answer="1.8, 3"
  answerDisplay="$1.8$ mph uphill and $3$ mph downhill"
  hint="Convert both times to hours and equate the uphill and downhill distances."
>}}

{{< fillin
  question="Llewyn takes 45 minutes to drive his boat upstream from the dock to his favorite fishing spot. It takes him 30 minutes to drive the boat back downstream to the dock. The boat’s speed going downstream is four miles per hour faster than its speed going upstream. Enter the boat’s upstream and downstream speeds, separated by commas."
  answer="8, 12"
  answerDisplay="$8$ mph upstream and $12$ mph downstream"
  hint="Convert the times to hours and set the two distances equal."
>}}

In the distance, rate and time formula, time represents the actual amount of
elapsed time (in hours, minutes, etc.). If a problem gives us starting and
ending times as clock times, we must find the elapsed time in order to use the
formula.

**Example 2.47.** Cruz is training to compete in a triathlon. He left his
house at 6:00 and ran until 7:30. Then he rode his bike until 9:45. He covered
a total distance of 51 miles. His speed when biking was 1.6 times his speed
when running. Find Cruz’s biking and running speeds.

**Solution.** A diagram will help us model this trip. Cruz ran from 6:00 a.m.
to 7:30 a.m., then rode from 7:30 a.m. to 9:45 a.m.; the two parts together
were 51 miles, and his biking rate was 1.6 times his running rate.

Next, we create a table to organize the information. We know the total
distance is 51 miles. We are looking for the rate of speed for each part of
the trip. The rate while biking is 1.6 times the rate of running. If we let
$r=$ the rate running, then the rate biking is $1.6r$.

The times here are given as clock times. Cruz started from home at 6:00 a.m.
and started biking at 7:30 a.m. So he spent 1.5 hours running. Then he biked
from 7:30 a.m until 9:45 a.m. So he spent 2.25 hours biking.

Now, we multiply the rates by the times.

|  | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | ---: | ---: | ---: |
| run | $r$ | $1.5$ | $1.5r$ |
| bike | $1.6r$ | $2.25$ | $2.25(1.6r)$ |
| **Total** |  |  | **$51$** |

By looking at the diagram, we can see that the sum of the distance running and
the distance biking is 51 miles.

Translate to an equation and solve.

$$
\begin{array}{rcl}
1.5r+2.25(1.6r) &=& 51 \\[4pt]
1.5r+3.6r &=& 51 \\[4pt]
5.1r &=& 51 \\[4pt]
r &=& 10\text{ mph running}
\end{array}
$$

The biking speed is $1.6r=1.6(10)=16$ mph.

Check.

$$
\begin{array}{rcl}
\text{Run: }10\text{ mph}(1.5\text{ hours}) &=& 15\text{ mi} \\[4pt]
\text{Bike: }16\text{ mph}(2.25\text{ hours}) &=& 36\text{ mi} \\[4pt]
15+36 &=& 51\text{ mi}
\end{array}
$$

{{< fillin
  question="Hamilton loves to travel to Las Vegas, 255 miles from his home in Orange County. On his last trip, he left his house at 2:00 p.m. The first part of his trip was on congested city freeways. At 4:00 p.m. the traffic cleared and he drove through the desert at a speed 1.75 times as fast as when he drove in the congested area. He arrived in Las Vegas at 6:30 p.m. Enter his city and desert speeds, separated by commas."
  answer="40, 70"
  answerDisplay="$40$ mph in the city and $70$ mph in the desert"
  hint="He drove 2 hours in the city and 2.5 hours in the desert."
>}}

{{< fillin
  question="Phuong left home on his bicycle at 10:00. He rode on the flat street until 11:15, then rode uphill until 11:45. He rode a total of 31 miles. His speed riding uphill was 0.6 times his speed on the flat street. Enter his uphill and flat-street speeds, separated by commas."
  answer="12, 20"
  answerDisplay="$12$ mph uphill and $20$ mph on the flat street"
  hint="He rode $1.25$ hours on the flat street and $0.5$ hour uphill."
>}}

**Key terms.** A **uniform motion application** is a problem in which the
speed of an object is constant. The **total value of coins** is modeled by
$\textit{number}\cdot\textit{value}=\textit{total value}$.

---

<small>This page adapts [Intermediate Algebra 2e, Section 2.4](https://openstax.org/books/intermediate-algebra-2e/pages/2-4-solve-mixture-and-uniform-motion-applications), by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/details/books/intermediate-algebra-2e). Changes: adapted the section to this site’s interactive format and converted Try It exercises to interactive questions.</small>
