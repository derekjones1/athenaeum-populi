---
title: Averages and Probability
description: >-
  Calculating the mean, median, and mode of a set of numbers, and using the
  basic definition of probability — adapted from OpenStax Prealgebra 2e,
  Section 5.5.
source_section: "5.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** calculate the mean of
  a set of numbers, find the median of a set of numbers, identify the mode
  of a set of numbers, and use the basic definition of probability.
{{< /callout >}}

One application of decimals that arises often is finding the *average* of a
set of numbers. What do you think of when you hear the word *average*? Is it
your grade point average, the average rent for an apartment in your city,
the batting average of a player on your favorite baseball team? The average
is a typical value in a set of numerical data. Calculating an average
sometimes involves working with decimal numbers. In this section, we will
look at three different ways to calculate an average.

## Calculate the mean of a set of numbers

The **mean** is often called the arithmetic average. It is computed by
dividing the sum of the values by the number of values. Students want to
know the mean of their test scores. Climatologists report that the mean
temperature has, or has not, changed. City planners are interested in the
mean household size.

Suppose Ethan's first three test scores were $85, 88,$ and $94$. To find
the mean score, he would add them and divide by $3$:

$$\frac{85 + 88 + 94}{3} = \frac{267}{3} = 89$$

His mean test score is $89$ points.

{{< callout type="info" >}}
  **The mean.** The mean of a set of $n$ numbers is the arithmetic average
  of the numbers:

  $$\text{mean} = \frac{\text{sum of values in data set}}{n}$$
{{< /callout >}}

{{< callout type="info" >}}
  **Calculate the mean of a set of numbers.**

  1. Write the formula for the mean: $\text{mean} = \tfrac{\text{sum of values in data set}}{n}$.
  2. Find the sum of all the values in the set. Write the sum in the
     numerator.
  3. Count the number, $n$, of values in the set. Write this number in the
     denominator.
  4. Simplify the fraction.
  5. Check to see that the mean is reasonable. It should be greater than the
     least number and less than the greatest number in the set.
{{< /callout >}}

**Example.** Find the mean of the numbers $8, 12, 15, 9,$ and $6$.

Write the formula for the mean, write the sum of the numbers in the
numerator, and count how many numbers are in the set — there are $5$
numbers, so $n = 5$:

$$\text{mean} = \frac{8+12+15+9+6}{5} = \frac{50}{5} = 10$$

Check to see that the mean is "typical": $10$ is neither less than $6$ nor
greater than $15$. The mean is $10$.

{{< fillin
  question="Find the mean of the numbers: 8, 9, 7, 12, 10, 5"
  answer="8.5"
  hint="Add all six numbers together, then divide by 6."
>}}

{{< fillin
  question="Find the mean of the numbers: 9, 13, 11, 7, 5"
  answer="9"
  hint="Add all five numbers together, then divide by 5."
>}}

**Example.** The ages of the members of a family who got together for a
birthday celebration were $16, 26, 53, 56, 65, 70, 93,$ and $97$ years. Find
the mean age.

Write the sum of the numbers in the numerator, and count how many numbers
are in the set — there are $8$, so $n = 8$:

$$\text{mean} = \frac{16+26+53+56+65+70+93+97}{8} = \frac{476}{8} = 59.5$$

Is $59.5$ "typical"? Yes, it is neither less than $16$ nor greater than
$97$. The mean age is $59.5$ years.

{{< fillin
  question="The ages of the four students in Ben's carpool are 25, 18, 21, and 22. Find the mean age of the students."
  answer="21.5"
  hint="Add all four ages together, then divide by 4."
>}}

{{< fillin
  question="Yen counted the number of emails she received last week. The numbers were 4, 9, 15, 12, 10, 12, and 8. Find the mean number of emails."
  answer="10"
  hint="Add all seven numbers together, then divide by 7."
>}}

Did you notice that in the last example, while all the numbers were whole
numbers, the mean was $59.5$, a number with one decimal place? It is
customary to report the mean to one more decimal place than the original
numbers. In the next example, all the numbers represent money, and it will
make sense to report the mean in dollars and cents.

**Example.** For the past four months, Daisy's cell phone bills were
$\text{\textdollar}42.75$, $\text{\textdollar}50.12$, $\text{\textdollar}41.54$, $\text{\textdollar}48.15$. Find the mean cost of Daisy's cell
phone bills.

Count how many numbers are in the set — there are $4$ — and write the sum of
all the numbers in the numerator:

$$\text{mean} = \frac{42.75+50.12+41.54+48.15}{4} = \frac{182.56}{4} = 45.64$$

Does $\text{\textdollar}45.64$ seem "typical" of this set of numbers? Yes, it is neither
less than $\text{\textdollar}41.54$ nor greater than $\text{\textdollar}50.12$. The mean cost of her cell
phone bill was $\text{\textdollar}45.64$.

{{< fillin
  question="Last week Ray recorded how much he spent for lunch each workday. He spent \$6.50, \$7.25, \$4.90, \$5.30, and \$12.00. Find the mean of how much he spent each day."
  answer="7.19"
  answerDisplay="\$7.19"
  hint="Add all five amounts together, then divide by 5."
>}}

{{< fillin
  question="Lisa has kept the receipts from the past four trips to the gas station. The receipts show the following amounts: \$34.87, \$42.31, \$38.04, and \$43.26. Find the mean."
  answer="39.62"
  answerDisplay="\$39.62"
  hint="Add all four amounts together, then divide by 4."
>}}

## Find the median of a set of numbers

When Ann, Bianca, Dora, Eve, and Francine sing together on stage, they line
up in order of their heights: $59, 60, 65, 68, 70$ inches. Dora is in the
middle of the group. Her height, $65$ inches, is the *median* of the girls'
heights. Half of the heights are less than or equal to Dora's height, and
half are greater than or equal. The median is the middle value.

{{< callout type="info" >}}
  **Median.** The median of a set of data values is the middle value.

  - Half the data values are less than or equal to the median.
  - Half the data values are greater than or equal to the median.
{{< /callout >}}

What if Carmen, the pianist, joins the singing group on stage? Carmen is
$62$ inches tall, so she fits in the height order between Bianca and Dora.
Now the data set looks like this:

$$59, 60, 62, 65, 68, 70$$

There is no single middle value — the heights of the six girls can be
divided into two equal parts, $59, 60, 62$ and $65, 68, 70$. Statisticians
have agreed that in cases like this the median is the mean of the two
values closest to the middle. So the median is the mean of $62$ and $65$,
$\tfrac{62+65}{2}$. The median height is $63.5$ inches.

Notice that when the number of girls was $5$, the median was the third
height, but when the number of girls was $6$, the median was the mean of the
third and fourth heights. In general, when the number of values is odd, the
median will be the one value in the middle, but when the number is even, the
median is the mean of the two middle values.

{{< callout type="info" >}}
  **Find the median of a set of numbers.**

  1. List the numbers from smallest to largest.
  2. Count how many numbers are in the set. Call this $n$.
  3. Is $n$ odd or even?
     - If $n$ is an odd number, the median is the middle value.
     - If $n$ is an even number, the median is the mean of the two middle
       values.
{{< /callout >}}

**Example.** Find the median of $12, 13, 19, 9, 11, 15,$ and $18$.

List the numbers in order from smallest to largest: $9, 11, 12, 13, 15, 18,
19$. Count how many numbers are in the set — $n = 7$, which is odd, so the
median is the middle value. The middle is the number in the 4th position,
so the median of the data is $13$.

{{< fillin
  question="Find the median of the data set: 43, 38, 51, 40, 46"
  answer="43"
  hint="List the numbers from smallest to largest, then find the value in the middle position."
>}}

{{< fillin
  question="Find the median of the data set: 15, 35, 20, 45, 50, 25, 30"
  answer="30"
  hint="List the numbers from smallest to largest, then find the value in the middle position."
>}}

**Example.** Kristen received the following scores on her weekly math
quizzes: $83, 79, 85, 86, 92, 100, 76, 90, 88,$ and $64$. Find her median
score.

List the numbers in order from smallest to largest: $64, 76, 79, 83, 85, 86,
88, 90, 92, 100$. Count the number of data values — $n = 10$, which is
even, so the median is the mean of the two middle values, the 5th and 6th
numbers, $85$ and $86$:

$$\text{mean} = \frac{85+86}{2} = 85.5$$

Kristen's median score is $85.5$.

{{< fillin
  question="Find the median of the data set: 8, 7, 5, 10, 9, 12"
  answer="8.5"
  hint="List the numbers from smallest to largest — with 6 values, the median is the mean of the two middle numbers."
>}}

{{< fillin
  question="Find the median of the data set: 21, 25, 19, 17, 22, 18, 20, 24"
  answer="20.5"
  hint="List the numbers from smallest to largest — with 8 values, the median is the mean of the two middle numbers."
>}}

## Identify the mode of a set of numbers

The *average* is one number in a set of numbers that is somehow typical of
the whole set of numbers. The mean and median are both often called the
average. Yes, it can be confusing when the word average refers to two
different numbers, the mean and the median! In fact, there is a third
number that is also an average. This average is the **mode**. The mode of a
set of numbers is the number that occurs the most. The **frequency** is the
number of times a number occurs. So the mode of a set of numbers is the
number with the highest frequency.

{{< callout type="info" >}}
  **Mode.** The mode of a set of numbers is the number with the highest
  frequency.
{{< /callout >}}

Suppose Jolene kept track of the number of miles she ran since the start of
the month: $2, 15, 8, 3, 8, 5, 8$. If we list the numbers in order it is
easier to identify the one with the highest frequency:

$$2, 3, 5, 8, 8, 8, 15$$

Jolene ran $8$ miles three times, and every other distance is listed only
once. So the mode of the data is $8$ miles.

{{< callout type="info" >}}
  **Identify the mode of a set of numbers.**

  1. List the data values in numerical order.
  2. Count the number of times each value appears.
  3. The mode is the value with the highest frequency.
{{< /callout >}}

**Example.** The ages of students in a college math class are listed below.
Identify the mode.

$$
18, 18, 18, 18, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 21, 21, 22, 22,
22, 22, 22, 23, 24, 24, 25, 29, 30, 40, 44
$$

The ages are already listed in order. Make a table of frequencies to help
identify the age with the highest frequency:

| Age | $18$ | $19$ | $20$ | $21$ | $22$ | $23$ | $24$ | $25$ | $29$ | $30$ | $40$ | $44$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Frequency | $4$ | $3$ | $7$ | $2$ | $5$ | $1$ | $2$ | $1$ | $1$ | $1$ | $1$ | $1$ |

Now look for the highest frequency. The highest frequency is $7$, which
corresponds to the age $20$. So the mode of the ages in this class is $20$
years.

{{< fillin
  question="The number of sick days employees used last year: 3, 6, 2, 3, 7, 5, 6, 2, 4, 2. Identify the mode."
  answer="2"
  hint="Count how many times each value appears — one number appears three times, more than any other."
>}}

{{< fillin
  question="The number of handbags owned by women in a book club: 5, 6, 3, 1, 5, 8, 1, 5, 8, 5. Identify the mode."
  answer="5"
  hint="Count how many times each value appears — one number appears four times, more than any other."
>}}

**Example.** The data lists the heights, in inches, of $31$ students in a
statistics class. Identify the mode.

| Height | $56$ | $60$ | $61$ | $62$ | $63$ | $64$ | $65$ | $66$ | $67$ | $70$ | $74$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Frequency | $1$ | $2$ | $2$ | $1$ | $5$ | $4$ | $3$ | $5$ | $6$ | $1$ | $1$ |

Now look for the highest frequency. The highest frequency is $6$, which
corresponds to the height $67$ inches. So the mode of this set of heights is
$67$ inches.

Some data sets do not have a mode because no value appears more than any
other. And some data sets have more than one mode. In a given set, if two or
more data values have the same highest frequency, we say they are all
modes.

{{< fillin
  question="The ages of the students in a statistics class are: 19, 20, 23, 23, 38, 21, 19, 21, 19, 21, 20, 43, 20, 23, 17, 21, 21, 20, 29, 18, 28. What is the mode?"
  answer="21"
  hint="Count how many times each age appears — one age appears five times, more than any other."
>}}

{{< fillin
  question="Students listed the number of members in their household: 6, 2, 5, 6, 3, 7, 5, 6, 5, 3, 4, 4, 5, 7, 6, 4, 5, 2, 1, 5. What is the mode?"
  answer="5"
  hint="Count how many times each value appears — one number appears six times, more than any other."
>}}

## Use the basic definition of probability

The probability of an event tells us how likely that event is to occur. We
usually write probabilities as fractions or decimals.

For example, picture a fruit bowl that contains five pieces of fruit —
three bananas and two apples. If you want to choose one piece of fruit to
eat for a snack and don't care what it is, there is a $\tfrac{3}{5}$
probability you will choose a banana, because there are three bananas out
of the total of five pieces of fruit. The probability of an event is the
number of favorable outcomes divided by the total number of outcomes:

$$\text{Probability of an event} = \frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}$$

$$\text{Probability of choosing a banana} = \frac{3}{5}$$

{{< callout type="info" >}}
  **Probability.** The probability of an event is the number of favorable
  outcomes divided by the total number of outcomes possible:

  $$\text{Probability} = \frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}$$
{{< /callout >}}

Converting the fraction $\tfrac{3}{5}$ to a decimal, we would say there is a
$0.6$ probability of choosing a banana. This basic definition of probability
assumes that all the outcomes are equally likely to occur.

**Example.** The ski club is holding a raffle to raise money. They sold
$100$ tickets. All of the tickets are placed in a jar. One ticket will be
pulled out of the jar at random, and the winner will receive a prize.
Cherie bought one raffle ticket. (a) Find the probability she will win the
prize. (b) Convert the fraction to a decimal.

(a) There is $1$ favorable outcome (Cherie has $1$ ticket) out of $100$
total outcomes:

$$\text{Probability Cherie wins} = \frac{1}{100}$$

(b) Convert the fraction to a decimal: $\text{Probability} = 0.01$.

{{< fillin
  question="Ignaly is attending a fashion show where the guests are seated at tables of ten. One guest from each table will be selected at random to receive a door prize. Find the probability Ignaly will win the door prize for her table. Enter as a fraction."
  answer="\frac{1}{10}"
  answerDisplay="$\tfrac{1}{10}$"
  hint="There is $1$ favorable outcome (Ignaly) out of $10$ people at her table."
>}}

{{< fillin
  question="Hoang is among 20 people available to sit on a jury. One person will be chosen at random from the 20. Convert the probability that Hoang will be chosen to a decimal."
  answer="0.05"
  hint="There is $1$ favorable outcome out of $20$ total people — write that as a fraction, then convert to a decimal."
>}}

**Example.** Three women and five men interviewed for a job. One of the
candidates will be offered the job. (a) Find the probability the job is
offered to a woman. (b) Convert the fraction to a decimal.

(a) The number of favorable outcomes is $3$ (three women), and the total
number of outcomes is $8$ (eight people interviewed):

$$\text{Probability} = \frac{3}{8}$$

(b) Convert the fraction to a decimal: $\text{Probability} = 0.375$.

{{< fillin
  question="A bowl of Halloween candy contains 5 chocolate candies and 3 lemon candies. Tanya will choose one piece of candy at random. Find the probability Tanya will choose a chocolate candy. Enter as a fraction."
  answer="\frac{5}{8}"
  answerDisplay="$\tfrac{5}{8}$"
  hint="There are $5$ chocolate candies out of $8$ total pieces of candy."
>}}

{{< fillin
  question="Dan has 2 pairs of black socks and 6 pairs of blue socks. He will choose one pair at random to wear tomorrow. Convert the probability Dan will choose a pair of black socks to a decimal."
  answer="0.25"
  hint="There are $2$ pairs of black socks out of $8$ total pairs — write that as a fraction, then convert to a decimal."
>}}

## Key terms

**mean** — the arithmetic average of a set of $n$ numbers, found by dividing
the sum of the values by $n$. **median** — the middle value of a set of data
(or the mean of the two middle values, when there is an even number of
values). **mode** — the value in a set of numbers with the highest
frequency. **frequency** — the number of times a value occurs in a data
set. **probability** — the number of favorable outcomes divided by the
total number of possible outcomes.

---

<small>This section is adapted from [Prealgebra 2e, Section 5.5: Averages and Probability](https://openstax.org/books/prealgebra-2e/pages/5-5-averages-and-probability) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the calendar figure as a plain list of running distances and the frequency tables as markdown tables; omitted the Be Prepared quiz, Media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
