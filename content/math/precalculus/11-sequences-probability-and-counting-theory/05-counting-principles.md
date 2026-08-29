---
title: Counting Principles
description: >-
  Solving counting problems with the Addition and Multiplication Principles,
  counting permutations and combinations of distinct objects, finding the
  number of subsets of a set, and counting permutations of non-distinct
  objects — adapted from OpenStax Precalculus 2e, Section 11.5.
source_section: "11.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve counting problems using the Addition Principle
- Solve counting problems using the Multiplication Principle
- Solve counting problems using permutations involving $n$ distinct objects
- Solve counting problems using combinations
- Find the number of subsets of a given set
- Solve counting problems using permutations involving $n$ non-distinct objects
{{< /callout >}}

A new company sells customizable cases for tablets and smartphones. Each case comes in a variety of colors and can be personalized for an additional fee with images or a monogram. A customer can choose not to personalize or could choose to have one, two, or three images or a monogram. The customer can choose the order of the images and the letters in the monogram. The company is working with an agency to develop a marketing campaign with a focus on the huge number of options they offer. Counting the possibilities is challenging!

We encounter a wide variety of counting problems every day. There is a branch of mathematics devoted to the study of counting problems such as this one. Other applications of counting include secure passwords, horse racing outcomes, and college scheduling choices. We will examine this type of mathematics in this section.

### Using the Addition Principle

The company that sells customizable cases offers cases for tablets and smartphones. There are 3 supported tablet models and 5 supported smartphone models. The **Addition Principle** tells us that we can add the number of tablet options to the number of smartphone options to find the total number of options. By the Addition Principle, there are 8 total options: $3+5=8$.

{{< callout type="info" >}}
  **The Addition Principle.** According to the Addition Principle, if one event can occur in $m$ ways and a second event with no common outcomes can occur in $n$ ways, then the first *or* second event can occur in $m+n$ ways.
{{< /callout >}}

**Example.** There are 2 vegetarian entrée options and 5 meat entrée options on a dinner menu. What is the total number of entrée options?

**Solution.** We can add the number of vegetarian options to the number of meat options to find the total number of entrée options: $2+5=7$. There are 7 total options.

{{< fillin
  question="A student is shopping for a new computer. He is deciding among 3 desktop computers and 4 laptop computers. What is the total number of computer options?"
  answer="7"
  answerDisplay="$7$"
  hint="The two groups share no common option, so add the number of desktops to the number of laptops."
>}}

### Using the Multiplication Principle

The **Multiplication Principle** applies when we are making more than one selection. Suppose we are choosing an appetizer, an entrée, and a dessert. If there are 2 appetizer options, 3 entrée options, and 2 dessert options on a fixed-price dinner menu, there are a total of 12 possible choices of one each, as shown in the tree diagram below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A tree diagram for the soup appetizer branch. Soup leads to three entree choices, chicken, fish, and steak; each entree leads to two dessert choices, cake and pudding, for six soup-branch dinners.","unit":44,"texts":[{"at":[2.7,2],"text":"Soup","anchor":"middle"},{"at":[0.5,1],"text":"Chicken","anchor":"middle"},{"at":[2.7,1],"text":"Fish","anchor":"middle"},{"at":[4.9,1],"text":"Steak","anchor":"middle"},{"at":[0,0],"text":"Cake","anchor":"middle"},{"at":[1,0],"text":"Pudding","anchor":"middle"},{"at":[2.2,0],"text":"Cake","anchor":"middle"},{"at":[3.2,0],"text":"Pudding","anchor":"middle"},{"at":[4.4,0],"text":"Cake","anchor":"middle"},{"at":[5.4,0],"text":"Pudding","anchor":"middle"}],"segments":[{"from":[2.7,2],"to":[0.5,1],"gapTexts":true},{"from":[2.7,2],"to":[2.7,1],"gapTexts":true},{"from":[2.7,2],"to":[4.9,1],"gapTexts":true},{"from":[0.5,1],"to":[0,0],"gapTexts":true},{"from":[0.5,1],"to":[1,0],"gapTexts":true},{"from":[2.7,1],"to":[2.2,0],"gapTexts":true},{"from":[2.7,1],"to":[3.2,0],"gapTexts":true},{"from":[4.9,1],"to":[4.4,0],"gapTexts":true},{"from":[4.9,1],"to":[5.4,0],"gapTexts":true}]}
{{< /apfigure >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A tree diagram for the salad appetizer branch. Salad leads to three entree choices, chicken, fish, and steak; each entree leads to two dessert choices, cake and pudding, for six salad-branch dinners.","unit":44,"texts":[{"at":[2.7,2],"text":"Salad","anchor":"middle"},{"at":[0.5,1],"text":"Chicken","anchor":"middle"},{"at":[2.7,1],"text":"Fish","anchor":"middle"},{"at":[4.9,1],"text":"Steak","anchor":"middle"},{"at":[0,0],"text":"Cake","anchor":"middle"},{"at":[1,0],"text":"Pudding","anchor":"middle"},{"at":[2.2,0],"text":"Cake","anchor":"middle"},{"at":[3.2,0],"text":"Pudding","anchor":"middle"},{"at":[4.4,0],"text":"Cake","anchor":"middle"},{"at":[5.4,0],"text":"Pudding","anchor":"middle"}],"segments":[{"from":[2.7,2],"to":[0.5,1],"gapTexts":true},{"from":[2.7,2],"to":[2.7,1],"gapTexts":true},{"from":[2.7,2],"to":[4.9,1],"gapTexts":true},{"from":[0.5,1],"to":[0,0],"gapTexts":true},{"from":[0.5,1],"to":[1,0],"gapTexts":true},{"from":[2.7,1],"to":[2.2,0],"gapTexts":true},{"from":[2.7,1],"to":[3.2,0],"gapTexts":true},{"from":[4.9,1],"to":[4.4,0],"gapTexts":true},{"from":[4.9,1],"to":[5.4,0],"gapTexts":true}]}
{{< /apfigure >}}

The possible choices are:

1. soup, chicken, cake
2. soup, chicken, pudding
3. soup, fish, cake
4. soup, fish, pudding
5. soup, steak, cake
6. soup, steak, pudding
7. salad, chicken, cake
8. salad, chicken, pudding
9. salad, fish, cake
10. salad, fish, pudding
11. salad, steak, cake
12. salad, steak, pudding

We can also find the total number of possible dinners by multiplying. We could also conclude that there are 12 possible dinner choices simply by applying the Multiplication Principle.

$$\text{\# of appetizer options}\times\text{\# of entree options}\times\text{\# of dessert options}=2\times3\times2=12$$

{{< callout type="info" >}}
  **The Multiplication Principle.** According to the Multiplication Principle, if one event can occur in $m$ ways and a second event can occur in $n$ ways after the first event has occurred, then the two events can occur in $m\times n$ ways. This is also known as the **Fundamental Counting Principle**.
{{< /callout >}}

**Example.** Diane packed 2 skirts, 4 blouses, and 2 sweaters for her business trip. She will need to choose a skirt and a blouse for each outfit and decide whether to wear the sweater. Use the Multiplication Principle to find the total number of possible outfits.

**Solution.** To find the total number of outfits, find the product of the number of skirt options, the number of blouse options, and the number of sweater options: $2\times4\times2=16$. There are 16 possible outfits.

{{< fillin
  question="A restaurant offers a breakfast special that includes a breakfast sandwich, a side dish, and a beverage. There are 3 types of breakfast sandwiches, 4 side dish options, and 5 beverage choices. Find the total number of possible breakfast specials."
  answer="60"
  answerDisplay="$60$"
  hint="Multiply the number of sandwich options by the number of side options by the number of beverage options."
>}}

### Finding the Number of Permutations of $n$ Distinct Objects

The Multiplication Principle can be used to solve a variety of problem types. One type of problem involves placing objects in order. We arrange letters into words and digits into numbers, line up for photographs, decorate rooms, and more. An ordering of objects is called a **permutation**.

#### Finding the Number of Permutations of $n$ Distinct Objects Using the Multiplication Principle

To solve permutation problems, it is often helpful to draw line segments for each option. That enables us to determine the number of each option so we can multiply. For instance, suppose we have four paintings, and we want to find the number of ways we can hang three of the paintings in order on the wall. We can draw three lines to represent the three places on the wall.

There are four options for the first place, so we write a 4 on the first line. After the first place has been filled, there are three options for the second place, so we write a 3 on the second line. After the second place has been filled, there are two options for the third place, so we write a 2 on the third line. Finally, we find the product.

$$4\times3\times2=24$$

There are 24 possible permutations of the paintings.

{{< callout type="info" >}}
  **How To:** given $n$ distinct options, determine how many permutations there are.

  1. Determine how many options there are for the first situation.
  2. Determine how many options are left for the second situation.
  3. Continue until all of the spots are filled.
  4. Multiply the numbers together.
{{< /callout >}}

**Example.** At a swimming competition, nine swimmers compete in a race.

a. How many ways can they place first, second, and third?
b. How many ways can they place first, second, and third if a swimmer named Ariel wins first place? (Assume there is only one contestant named Ariel.)
c. How many ways can all nine swimmers line up for a photo?

**Solution.**

a. There are 9 options for first place. Once someone has won first place, there are 8 remaining options for second place. Once first and second place have been won, there are 7 remaining options for third place: $9\times8\times7=504$. Multiply to find that there are 504 ways for the swimmers to place.
b. We know Ariel must win first place, so there is only 1 option for first place. There are 8 remaining options for second place, and then 7 remaining options for third place: $1\times8\times7=56$. Multiply to find that there are 56 ways for the swimmers to place if Ariel wins first.
c. There are 9 choices for the first spot, then 8 for the second, 7 for the third, 6 for the fourth, and so on until only 1 person remains for the last spot: $9\times8\times7\times6\times5\times4\times3\times2\times1=362{,}880$. There are 362,880 possible permutations for the swimmers to line up.

**Analysis.** Note that in part c, we found there were $9!$ ways for 9 people to line up. The number of permutations of $n$ distinct objects can always be found by $n!$.

A family of five is having portraits taken. Use the Multiplication Principle to find the following.

{{< fillin
  question="A family of five is having portraits taken. How many ways can the family line up for the portrait?"
  answer="120"
  answerDisplay="$120$"
  hint="All 5 family members are being placed in order, so the count is $5!$."
>}}

{{< fillin
  question="A family of five is having portraits taken. How many ways can the photographer line up 3 of the 5 family members?"
  answer="60"
  answerDisplay="$60$"
  hint="There are 5 choices for the first spot, 4 for the second, and 3 for the third."
>}}

{{< fillin
  question="A family of five is having portraits taken. How many ways can the family line up for the portrait if the parents are required to stand on each end?"
  answer="12"
  answerDisplay="$12$"
  hint="There are 2 ways to arrange the parents on the two ends, then arrange the 3 children in the middle 3 spots."
>}}

#### Finding the Number of Permutations of $n$ Distinct Objects Using a Formula

For some permutation problems, it is inconvenient to use the Multiplication Principle because there are so many numbers to multiply. Fortunately, we can solve these problems using a formula. Before we learn the formula, let's look at two common notations for permutations. If we have a set of $n$ objects and we want to choose $r$ objects from the set in order, we write $P(n,r)$. Another way to write this is $_nP_r$, a notation commonly seen on computers and calculators. To calculate $P(n,r)$, we begin by finding $n!$, the number of ways to line up all $n$ objects. We then divide by $(n-r)!$ to cancel out the $(n-r)$ items that we do not wish to line up.

Let's see how this works with a simple example. Imagine a club of six people. They need to elect a president, a vice president, and a treasurer. Six people can be elected president, any one of the five remaining people can be elected vice president, and any of the remaining four people could be elected treasurer. The number of ways this may be done is $6\times5\times4=120$. Using factorials, we get the same result.

$$\tfrac{6!}{3!}=\tfrac{6\cdot5\cdot4\cdot3!}{3!}=6\cdot5\cdot4=120$$

There are 120 ways to select 3 officers in order from a club with 6 members. We refer to this as a permutation of 6 taken 3 at a time. The general formula is as follows.

$$P(n,r)=\tfrac{n!}{(n-r)!}$$

Note that the formula still works if we are choosing all $n$ objects and placing them in order. In that case we would be dividing by $(n-n)!$ or $0!$, which we said earlier is equal to 1. So the number of permutations of $n$ objects taken $n$ at a time is $\tfrac{n!}{1}$ or just $n!$.

{{< callout type="info" >}}
  **Formula for Permutations of $n$ Distinct Objects.** Given $n$ distinct objects, the number of ways to select $r$ objects from the set in order is

  $$P(n,r)=\tfrac{n!}{(n-r)!}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a word problem, evaluate the possible permutations.

  1. Identify $n$ from the given information.
  2. Identify $r$ from the given information.
  3. Replace $n$ and $r$ in the formula with the given values.
  4. Evaluate.
{{< /callout >}}

**Example.** A professor is creating an exam of 9 questions from a test bank of 12 questions. How many ways can she select and arrange the questions?

**Solution.** Substitute $n=12$ and $r=9$ into the permutation formula and simplify.

$$
\begin{array}{lrcl}
& P(n,r) &=& \tfrac{n!}{(n-r)!} \\[4pt]
& P(12,9) &=& \tfrac{12!}{(12-9)!}=\tfrac{12!}{3!}=79{,}833{,}600
\end{array}
$$

There are 79,833,600 possible permutations of exam questions!

{{< callout type="info" >}}
  **Q&A.** *Could we have solved this example using the Multiplication Principle?*

  Yes. We could have multiplied $12\cdot11\cdot10\cdot9\cdot8\cdot7\cdot6\cdot5\cdot4$ to find the same answer.
{{< /callout >}}

A play has a cast of 7 actors preparing to make their curtain call. Use the permutation formula to find the following.

{{< fillin
  question="A play has a cast of 7 actors preparing to make their curtain call. How many ways can the 7 actors line up?"
  answer="5040"
  answerDisplay="$5{,}040$"
  hint="All 7 actors are placed in order, so use $P(7,7)$."
>}}

{{< fillin
  question="A play has a cast of 7 actors preparing to make their curtain call. How many ways can 5 of the 7 actors be chosen to line up?"
  answer="2520"
  answerDisplay="$2{,}520$"
  hint="Use the permutation formula $P(n,r)=\tfrac{n!}{(n-r)!}$ with $n=7$ and $r=5$."
>}}

### Find the Number of Combinations Using the Formula

So far, we have looked at problems asking us to put objects in order. There are many problems in which we want to select a few objects from a group of objects, but we do not care about the order. When we are selecting objects and the order does not matter, we are dealing with **combinations**. A selection of $r$ objects from a set of $n$ objects where the order does not matter can be written as $C(n,r)$. Just as with permutations, $C(n,r)$ can also be written as $_nC_r$. In this case, the general formula is as follows.

$$C(n,r)=\tfrac{n!}{r!(n-r)!}$$

An earlier problem considered choosing 3 of 4 possible paintings to hang on a wall. We found that there were 24 ways to select 3 of the 4 paintings in order. But what if we did not care about the order? We would expect a smaller number because selecting paintings 1, 2, 3 would be the same as selecting paintings 2, 3, 1. To find the number of ways to select 3 of the 4 paintings, disregarding the order of the paintings, divide the number of permutations by the number of ways to order 3 paintings. There are $3!=3\cdot2\cdot1=6$ ways to order 3 paintings. There are $\tfrac{24}{6}$, or 4 ways to select 3 of the 4 paintings. This number makes sense because every time we are selecting 3 paintings, we are *not* selecting 1 painting. There are 4 paintings we could choose *not* to select, so there are 4 ways to select 3 of the 4 paintings.

{{< callout type="info" >}}
  **Formula for Combinations of $n$ Distinct Objects.** Given $n$ distinct objects, the number of ways to select $r$ objects from the set is

  $$C(n,r)=\tfrac{n!}{r!(n-r)!}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a number of options, determine the possible number of combinations.

  1. Identify $n$ from the given information.
  2. Identify $r$ from the given information.
  3. Replace $n$ and $r$ in the formula with the given values.
  4. Evaluate.
{{< /callout >}}

**Example.** A fast food restaurant offers five side dish options. Your meal comes with two side dishes.

a. How many ways can you select your side dishes?
b. How many ways can you select 3 side dishes?

**Solution.**

a. We want to choose 2 side dishes from 5 options: $C(5,2)=\tfrac{5!}{2!(5-2)!}=10$.
b. We want to choose 3 side dishes from 5 options: $C(5,3)=\tfrac{5!}{3!(5-3)!}=10$.

{{< callout type="info" >}}
  **Q&A.** *Is it a coincidence that parts (a) and (b) above have the same answers?*

  No. When we choose $r$ objects from $n$ objects, we are *not* choosing $(n-r)$ objects. Therefore, $C(n,r)=C(n,n-r)$.
{{< /callout >}}

{{< fillin
  question="An ice cream shop offers 10 flavors of ice cream. How many ways are there to choose 3 flavors for a banana split?"
  answer="120"
  answerDisplay="$120$"
  hint="Order does not matter here, so use the combination formula $C(10,3)$."
>}}

### Finding the Number of Subsets of a Set

We have looked only at combination problems in which we chose exactly $r$ objects. In some problems, we want to consider choosing every possible number of objects. Consider, for example, a pizza restaurant that offers 5 toppings. Any number of toppings can be ordered. How many different pizzas are possible?

To answer this question, we need to consider pizzas with any number of toppings. There is $C(5,0)=1$ way to order a pizza with no toppings. There are $C(5,1)=5$ ways to order a pizza with exactly one topping. If we continue this process, we get

$$C(5,0)+C(5,1)+C(5,2)+C(5,3)+C(5,4)+C(5,5)=32$$

There are 32 possible pizzas. This result is equal to $2^5$.

We are presented with a sequence of choices. For each of the $n$ objects we have two choices: include it in the subset or not. So for the whole subset we have made $n$ choices, each with two options. So there are a total of $2\cdot2\cdot2\cdot\ldots\cdot2$ possible resulting subsets, all the way from the empty subset, which we obtain when we say "no" each time, to the original set itself, which we obtain when we say "yes" each time.

{{< callout type="info" >}}
  **Formula for the Number of Subsets of a Set.** A set containing $n$ distinct objects has $2^n$ subsets.
{{< /callout >}}

**Example.** A restaurant offers butter, cheese, chives, and sour cream as toppings for a baked potato. How many different ways are there to order a potato?

**Solution.** We are looking for the number of subsets of a set with 4 objects. Substitute $n=4$ into the formula.

$$
\begin{array}{lrcl}
& 2^n &=& 2^4 \\[4pt]
& &=& 16
\end{array}
$$

There are 16 possible ways to order a potato.

{{< fillin
  question="A sundae bar at a wedding has 6 toppings to choose from. Any number of toppings can be chosen. How many different sundaes are possible?"
  answer="64"
  answerDisplay="$64$"
  hint="A set of 6 distinct toppings has $2^6$ subsets, including the subset with no toppings."
>}}

### Finding the Number of Permutations of $n$ Non-Distinct Objects

We have studied permutations where all of the objects involved were distinct. What happens if some of the objects are indistinguishable? For example, suppose there is a sheet of 12 stickers. If all of the stickers were distinct, there would be $12!$ ways to order the stickers. However, 4 of the stickers are identical stars, and 3 are identical moons. Because all of the objects are not distinct, many of the $12!$ permutations we counted are duplicates. The general formula for this situation is as follows.

$$\tfrac{n!}{r_1!r_2!\ldots r_k!}$$

In this example, we need to divide by the number of ways to order the 4 stars and the ways to order the 3 moons to find the number of unique permutations of the stickers. There are $4!$ ways to order the stars and $3!$ ways to order the moons.

$$\tfrac{12!}{4!3!}=3{,}326{,}400$$

There are 3,326,400 ways to order the sheet of stickers.

{{< callout type="info" >}}
  **Formula for Finding the Number of Permutations of $n$ Non-Distinct Objects.** If there are $n$ elements in a set and $r_1$ are alike, $r_2$ are alike, $r_3$ are alike, and so on through $r_k$, the number of permutations can be found by

  $$\tfrac{n!}{r_1!r_2!\ldots r_k!}$$
{{< /callout >}}

**Example.** Find the number of rearrangements of the letters in the word DISTINCT.

**Solution.** There are 8 letters. Both I and T are repeated 2 times. Substitute $n=8$, $r_1=2$, and $r_2=2$ into the formula.

$$\tfrac{8!}{2!2!}=10{,}080$$

There are 10,080 arrangements.

{{< fillin
  question="Find the number of rearrangements of the letters in the word CARRIER."
  answer="840"
  answerDisplay="$840$"
  hint="There are 7 letters, and the letter R repeats 3 times; divide $7!$ by $3!$."
>}}

{{< callout type="info" >}}
  **Media.** Access these online resources for additional instruction and practice with combinations and permutations.
{{< /callout >}}

## Key equations

| number of permutations of $n$ distinct objects taken $r$ at a time | $P(n,r)=\tfrac{n!}{(n-r)!}$ |
| :--- | :--- |
| number of combinations of $n$ distinct objects taken $r$ at a time | $C(n,r)=\tfrac{n!}{r!(n-r)!}$ |
| number of permutations of $n$ non-distinct objects | $\tfrac{n!}{r_1!r_2!\ldots r_k!}$ |

## Key concepts

- If one event can occur in $m$ ways and a second event with no common outcomes can occur in $n$ ways, then the first or second event can occur in $m+n$ ways.
- If one event can occur in $m$ ways and a second event can occur in $n$ ways after the first event has occurred, then the two events can occur in $m\times n$ ways.
- A permutation is an ordering of $n$ objects.
- If we have a set of $n$ objects and we want to choose $r$ objects from the set in order, we write $P(n,r)$.
- Permutation problems can be solved using the Multiplication Principle or the formula for $P(n,r)$.
- A selection of objects where the order does not matter is a combination.
- Given $n$ distinct objects, the number of ways to select $r$ objects from the set is $C(n,r)$, and can be found using a formula.
- A set containing $n$ distinct objects has $2^n$ subsets.
- A permutation of $n$ non-distinct objects, where $r_1$ are alike, $r_2$ are alike, and so on through $r_k$, is found by dividing $n!$ by $r_1!r_2!\ldots r_k!$.

## Practice

### Solve counting problems using the Addition Principle

{{< multiplechoice
  question="Two separate events are joined by the word \"or\" when counting their combined outcomes. Which counting principle applies?"
  mode="text"
  answer="Addition Principle"
  hint="The word \"or\" signals that the events' outcome counts should be combined, not multiplied."
>}}
Addition Principle
Multiplication Principle
Permutation formula
Combination formula
{{< /multiplechoice >}}

{{< fillin
  question="Let the set $B=\{-23,-16,-7,-2,20,36,48,72\}$. How many ways are there to choose a positive number or an odd number from $B$?"
  answer="6"
  answerDisplay="$6$"
  hint="Count the positive numbers, count the odd numbers, and add — no number in $B$ is both positive and odd."
>}}

{{< fillin
  question="How many ways are there to pick a paint color from 5 shades of green, 4 shades of blue, or 7 shades of yellow?"
  answer="16"
  answerDisplay="$16$"
  hint="The three color groups share no shade, so add the three counts."
>}}

### Solve counting problems using the Multiplication Principle

{{< fillin
  question="How many outcomes are possible from tossing a coin and rolling a 6-sided die?"
  answer="12"
  answerDisplay="$12$"
  hint="Multiply the number of coin outcomes by the number of die outcomes."
>}}

{{< fillin
  question="How many ways are there to construct a string of 3 digits if digits can be repeated?"
  answer="1000"
  answerDisplay="$1000$"
  hint="There are 10 choices for each of the 3 positions; multiply $10\times10\times10$."
>}}

{{< fillin
  question="A wholesale T-shirt company offers sizes small, medium, large, and extra-large in organic or non-organic cotton and colors white, black, gray, blue, and red. How many different T-shirts are there to choose from?"
  answer="40"
  answerDisplay="$40$"
  hint="Multiply the number of sizes by the number of cotton types by the number of colors."
>}}

### Solve counting problems using permutations involving $n$ distinct objects

{{< fillin
  question="Evaluate $P(5,2)$."
  answer="20"
  answerDisplay="$20$"
  hint="Use $P(n,r)=\tfrac{n!}{(n-r)!}$ with $n=5$ and $r=2$."
>}}

{{< fillin
  question="Evaluate $P(11,5)$."
  answer="55440"
  answerDisplay="$55{,}440$"
  hint="Use $P(n,r)=\tfrac{n!}{(n-r)!}$ with $n=11$ and $r=5$."
>}}

{{< fillin
  question="How many ways can a baseball coach arrange the order of 9 batters if there are 15 players on the team?"
  answer="1816214400"
  answerDisplay="$1{,}816{,}214{,}400$"
  hint="The batting order matters and not every player bats, so use $P(15,9)$."
>}}

### Solve counting problems using combinations

{{< multiplechoice
  question="What is the term for an arrangement that selects $r$ objects from a set of $n$ objects when the order of the $r$ objects is not important?"
  mode="text"
  answer="combination"
  hint="Order does not matter, which is the defining feature of one of the two named selections in this section."
>}}
permutation
combination
subset
factorial
{{< /multiplechoice >}}

{{< fillin
  question="Evaluate $C(12,4)$."
  answer="495"
  answerDisplay="$495$"
  hint="Use $C(n,r)=\tfrac{n!}{r!(n-r)!}$ with $n=12$ and $r=4$."
>}}

{{< fillin
  question="A motorcycle shop has 10 choppers, 6 bobbers, and 5 café racers — different types of vintage motorcycles. How many ways can the shop choose 3 choppers, 5 bobbers, and 2 café racers for a weekend showcase?"
  answer="7200"
  answerDisplay="$7{,}200$"
  hint="Order does not matter within each type, so multiply $C(10,3)\times C(6,5)\times C(5,2)$."
>}}

### Find the number of subsets of a given set

{{< fillin
  question="Find the number of subsets of the set $\{1,2,3,4,5,6,7,8,9,10\}$."
  answer="1024"
  answerDisplay="$1024$"
  hint="A set of 10 distinct objects has $2^{10}$ subsets."
>}}

{{< fillin
  question="Find the number of subsets of a set containing 5 distinct numbers, 4 distinct letters, and 3 distinct symbols."
  answer="4096"
  answerDisplay="$4{,}096$"
  hint="Count the total number of distinct objects in the set, then raise 2 to that power."
>}}

{{< fillin
  question="Find the number of subsets of the set of two-digit numbers between 1 and 100 that contain the digit 0."
  answer="512"
  answerDisplay="$512$"
  hint="First count how many two-digit numbers contain the digit 0 (they all end in 0), then raise 2 to that count."
>}}

### Solve counting problems using permutations involving $n$ non-distinct objects

{{< fillin
  question="Find the distinct number of arrangements of the letters in the word \"academia.\""
  answer="6720"
  answerDisplay="$6{,}720$"
  hint="The word has 8 letters with the letter a repeated 3 times; divide $8!$ by $3!$."
>}}

{{< fillin
  question="Find the distinct number of arrangements of the symbols in the string #,#,#,@,@,\$,\$,\$,%,%,%,%."
  answer="277200"
  answerDisplay="$277{,}200$"
  hint="There are 12 symbols with # repeated 3 times, @ repeated 2 times, \$ repeated 3 times, and % repeated 4 times; divide $12!$ by the product of those factorials."
>}}

{{< fillin
  question="Suni bought 20 plants to arrange along the border of her garden. How many distinct arrangements can she make if the plants are comprised of 6 tulips, 6 roses, and 8 daisies?"
  answer="116396280"
  answerDisplay="$116{,}396{,}280$"
  hint="Divide $20!$ by $6!\,6!\,8!$ to remove the duplicate orderings within each identical flower type."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 11.5: Counting Principles](https://openstax.org/books/precalculus-2e/pages/11-5-counting-principles) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Objective 1" and "Objective 2" review of the Addition and Multiplication Principles, keyed to Intermediate Algebra 12.4, complete with its own worked example and two "Practice Makes Perfect" exercise sets) — confirmed against the rendered PDF, page 1137 (true PDF index 1147), where the previous section's last Real-World Applications exercise (11.4, exercise 62) runs directly into the "11.5 Counting Principles" heading with no corequisite-skills material between them; the same prepended-block pattern is already logged in this book's errata for other chapter-11 modules and this section joins that list. Omitted the source's Figure 1 (a photograph-style illustration of 3 tablets plus 5 phones equaling 8 total device options): the figure is purely decorative — the count it illustrates is already fully stated in the surrounding prose ($3+5=8$) — so it is not recreated, per this book's convention of omitting decorative photographs. Recreated the source's Figure 2 (the tree diagram of the 12 appetizer/entrée/dessert dinner combinations) as two accessible spec-first figures, one for the Soup branch and one for the Salad branch, each drawn with the figure engine's segment and text primitives (segments routed behind the node labels via `gapTexts`) rather than as a single wide diagram, to keep each figure under the composite-width guidance for this chapter; the row category labels ("Appetizers" / "Entrées" / "Desserts") printed beside the source's tree are omitted since the branch structure itself (Soup/Salad → Chicken/Fish/Steak → Cake/Pudding) carries the same information. Every informal "photograph of typeset arithmetic" image the source uses inside worked-example solutions (the addition/multiplication diagrams with underlined option counts, the factorial products, and so on) is transcribed as ordinary KaTeX rather than recreated as a figure, since each is a plain arithmetic statement with no diagrammatic content of its own. Kept the "Media" callout's introductory sentence but omitted its two external video links, matching house precedent elsewhere in this book. Both Try Its following the multiplication-principle-formula example (the actor line-up questions) and the single Try It following the combinations example (the ice cream banana split) are kept exactly as the source poses them. **Every count in this section is a plain-number answer with no `answerForm` token**, since `\binom{n}{k}`, `C(n,r)`, `P(n,r)`, and `{}_nC_r` all parse as invalid or grade `incorrect` against their own value on the pinned grading engine (confirmed by replay), so printing $P(n,r)$ or $C(n,r)$ in a question is never itself a retype hazard; a learner who instead types the equivalent factorial quotient (e.g. `\frac{5!}{2!3!}`) still grades correct, which is expected and fine. The two "which term applies" Verbal exercises (adapted from the source's own explanatory exercises on distinguishing the Addition Principle from the Multiplication Principle, and on naming the unordered-selection arrangement) are recast as `multiplechoice` items over the source's own explanations, since a free-form justification cannot be graded as a math expression. Eighteen selected end-of-section exercises (16 numeric fill-ins and 2 explanatory items recast as multiple choice) were adapted into interactive Practice components, one group per objective; the section's ten in-page Try Its are additionally kept as the source poses them, one component per Try It. Every retained answer — the 18 Practice items and the 10 Try Its alike — was independently re-derived, including by running the arithmetic in Node with exact (BigInt) factorials, rather than read off the source key.</small>
