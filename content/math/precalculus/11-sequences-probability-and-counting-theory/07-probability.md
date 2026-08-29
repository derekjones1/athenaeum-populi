---
title: Probability
description: >-
  Constructing probability models, computing probabilities of equally likely
  outcomes and of the union of two events, applying the Complement Rule, and
  computing probability using counting theory — adapted from OpenStax
  Precalculus 2e, Section 11.7.
source_section: "11.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Construct probability models
- Compute probabilities of equally likely outcomes
- Compute probabilities of the union of two events
- Use the complement rule to find probabilities
- Compute probability using counting theory
{{< /callout >}}

Residents of the Southeastern United States are all too familiar with charts, known as spaghetti models, that combine a collection of weather data to predict the most likely path of a hurricane. Each colored line represents one possible path. The group of squiggly lines can begin to resemble strands of spaghetti, hence the name. In this section, we will investigate methods for making these types of predictions.

### Constructing Probability Models

Suppose we roll a six-sided number cube. Rolling a number cube is an example of an **experiment**, or an activity with an observable result. The numbers on the cube are possible results, or **outcomes**, of this experiment. The set of all possible outcomes of an experiment is called the **sample space** of the experiment. The sample space for this experiment is $\{1,2,3,4,5,6\}$. An **event** is any subset of a sample space.

The likelihood of an event is known as **probability**. The probability of an event $p$ is a number that always satisfies $0\le p\le1$, where 0 indicates an impossible event and 1 indicates a certain event. A **probability model** is a mathematical description of an experiment listing all possible outcomes and their associated probabilities. For instance, if there is a 1% chance of winning a raffle and a 99% chance of losing the raffle, a probability model would look much like the table below.

| Outcome | Probability |
| :--- | :--- |
| Winning the raffle | 1% |
| Losing the raffle | 99% |

The sum of the probabilities listed in a probability model must equal 1, or 100%.

{{< callout type="info" >}}
  **How To: given a probability event where each event is equally likely, construct a probability model.**

  1. Identify every outcome.
  2. Determine the total number of possible outcomes.
  3. Compare each outcome to the total number of possible outcomes.
{{< /callout >}}

**Example.** Construct a probability model for rolling a single, fair die, with the event being the number shown on the die.

**Solution.** Begin by making a list of all possible outcomes for the experiment. The possible outcomes are the numbers that can be rolled: 1, 2, 3, 4, 5, and 6. There are six possible outcomes that make up the sample space.

Assign probabilities to each outcome in the sample space by determining a ratio of the outcome to the number of possible outcomes. There is one of each of the six numbers on the cube, and there is no reason to think that any particular face is more likely to show up than any other one, so the probability of rolling any number is $\tfrac16$.

| Outcome | Roll of 1 | Roll of 2 | Roll of 3 | Roll of 4 | Roll of 5 | Roll of 6 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Probability | $\tfrac16$ | $\tfrac16$ | $\tfrac16$ | $\tfrac16$ | $\tfrac16$ | $\tfrac16$ |

{{< callout type="info" >}}
  **Q&A.** *Do probabilities always have to be expressed as fractions?*

  No. Probabilities can be expressed as fractions, decimals, or percents. Probability must always be a number between 0 and 1, inclusive of 0 and 1.
{{< /callout >}}

{{< multiplechoice
  question="Which probability model correctly describes tossing a fair coin?"
  mode="text"
  answer="Heads $\tfrac12$; Tails $\tfrac12$"
  hint="A fair coin has two equally likely outcomes, and the probabilities in a model must always sum to 1."
>}}
Heads $1$; Tails $0$
Heads $\tfrac12$; Tails $\tfrac12$
Heads $\tfrac13$; Tails $\tfrac23$
Heads $\tfrac12$; Tails $\tfrac14$
{{< /multiplechoice >}}

### Computing Probabilities of Equally Likely Outcomes

Let $S$ be a sample space for an experiment. When investigating probability, an event is any subset of $S$. When the outcomes of an experiment are all equally likely, we can find the probability of an event by dividing the number of outcomes in the event by the total number of outcomes in $S$. Suppose a number cube is rolled, and we are interested in finding the probability of the event "rolling a number less than or equal to 4." There are 4 possible outcomes in the event and 6 possible outcomes in $S$, so the probability of the event is $\tfrac46=\tfrac23$.

{{< callout type="info" >}}
  **Computing the Probability of an Event with Equally Likely Outcomes.** The probability of an event $E$ in an experiment with sample space $S$ with equally likely outcomes is given by

  $$P(E)=\tfrac{n(E)}{n(S)}$$

  $E$ is a subset of $S$, so it is always true that $0\le P(E)\le1$.
{{< /callout >}}

**Example.** A six-sided number cube is rolled. Find the probability of rolling an odd number.

**Solution.** The event "rolling an odd number" contains three outcomes. There are 6 equally likely outcomes in the sample space. Divide to find the probability of the event.

$$P(E)=\tfrac36=\tfrac12$$

{{< fillin
  question="A number cube is rolled. Find the probability of rolling a number greater than 2. Enter the probability as a fraction."
  answer="\frac{2}{3}"
  answerForm="fraction"
  answerDisplay="$\tfrac23$"
  hint="Count the outcomes greater than 2 out of the 6 equally likely outcomes on the cube."
>}}

### Computing the Probability of the Union of Two Events

We are often interested in finding the probability that one of multiple events occurs. Suppose we are playing a card game, and we will win if the next card drawn is either a heart or a king. We would be interested in finding the probability of the next card being a heart or a king. The **union of two events** $E$ and $F$, written $E\cup F$, is the event that occurs if either or both events occur.

$$P(E\cup F)=P(E)+P(F)-P(E\cap F)$$

Suppose the spinner shown below is spun. We want to find the probability of spinning orange or spinning a $b$.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A spinner divided into six equal sections: two sections labeled a, both orange; one section labeled b, orange; another section labeled b, red; one section labeled d, blue; and one section labeled c, green.","unit":45,"circles":[{"at":[0,0],"r":2.2}],"segments":[{"from":[0,0],"to":[0,2.2],"arrow":true},{"from":[0,0],"to":[1.9053,1.1]},{"from":[0,0],"to":[1.9053,-1.1]},{"from":[0,0],"to":[0,-2.2]},{"from":[0,0],"to":[-1.9053,-1.1]},{"from":[0,0],"to":[-1.9053,1.1]}],"texts":[{"at":[0.775,1.3423],"text":"a (orange)","anchor":"middle"},{"at":[1.55,0],"text":"b (red)","anchor":"middle"},{"at":[0.775,-1.3423],"text":"c (green)","anchor":"middle"},{"at":[-0.775,-1.3423],"text":"d (blue)","anchor":"middle"},{"at":[-1.55,0],"text":"a (orange)","anchor":"middle"},{"at":[-0.775,1.3423],"text":"b (orange)","anchor":"middle"}]}
{{< /apfigure >}}

There are a total of 6 sections, and 3 of them are orange. So the probability of spinning orange is $\tfrac36=\tfrac12$. There are a total of 6 sections, and 2 of them have a $b$. So the probability of spinning a $b$ is $\tfrac26=\tfrac13$. If we added these two probabilities, we would be counting the sector that is both orange and a $b$ twice. To find the probability of spinning an orange or a $b$, we need to subtract the probability that the sector is both orange and has a $b$.

$$\tfrac12+\tfrac13-\tfrac16=\tfrac23$$

The probability of spinning orange or a $b$ is $\tfrac23$.

{{< callout type="info" >}}
  **Probability of the Union of Two Events.** The probability of the union of two events $E$ and $F$ (written $E\cup F$) equals the sum of the probability of $E$ and the probability of $F$ minus the probability of $E$ and $F$ occurring together (which is called the **intersection** of $E$ and $F$ and is written as $E\cap F$).

  $$P(E\cup F)=P(E)+P(F)-P(E\cap F)$$
{{< /callout >}}

**Example.** A card is drawn from a standard deck. Find the probability of drawing a heart or a 7.

**Solution.** A standard deck contains an equal number of hearts, diamonds, clubs, and spades. So the probability of drawing a heart is $\tfrac14$. There are four 7s in a standard deck, and there are a total of 52 cards. So the probability of drawing a 7 is $\tfrac{1}{13}$.

The only card in the deck that is both a heart and a 7 is the 7 of hearts, so the probability of drawing both a heart and a 7 is $\tfrac{1}{52}$. Substitute $P(H)=\tfrac14$, $P(7)=\tfrac{1}{13}$, and $P(H\cap7)=\tfrac{1}{52}$ into the formula.

$$
\begin{array}{lrcl}
& P(E\cup F) &=& P(E)+P(F)-P(E\cap F) \\[4pt]
& &=& \tfrac14+\tfrac{1}{13}-\tfrac{1}{52} \\[4pt]
& &=& \tfrac{4}{13}
\end{array}
$$

The probability of drawing a heart or a 7 is $\tfrac{4}{13}$.

{{< fillin
  question="A card is drawn from a standard deck. Find the probability of drawing a red card or an ace. Enter the probability as a fraction."
  answer="\frac{7}{13}"
  answerForm="fraction"
  answerDisplay="$\tfrac{7}{13}$"
  hint="Add $P(\text{red})$ and $P(\text{ace})$, then subtract $P(\text{red ace})$ so the two red aces are not counted twice."
>}}

### Computing the Probability of Mutually Exclusive Events

Suppose the spinner shown above is spun again, but this time we are interested in the probability of spinning an orange or a $d$. There are no sectors that are both orange and contain a $d$, so these two events have no outcomes in common. Events are said to be **mutually exclusive events** when they have no outcomes in common. Because there is no overlap, there is nothing to subtract, so the general formula is

$$P(E\cup F)=P(E)+P(F)$$

Notice that with mutually exclusive events, the intersection of $E$ and $F$ is the empty set. The probability of spinning an orange is $\tfrac36=\tfrac12$ and the probability of spinning a $d$ is $\tfrac16$. We can find the probability of spinning an orange or a $d$ simply by adding the two probabilities.

$$
\begin{array}{lrcl}
& P(E\cup F) &=& P(E)+P(F) \\[4pt]
& &=& \tfrac12+\tfrac16 \\[4pt]
& &=& \tfrac23
\end{array}
$$

The probability of spinning an orange or a $d$ is $\tfrac23$.

{{< callout type="info" >}}
  **Probability of the Union of Mutually Exclusive Events.** The probability of the union of two *mutually exclusive* events $E$ and $F$ is given by

  $$P(E\cup F)=P(E)+P(F)$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To: given a set of events, compute the probability of the union of mutually exclusive events.**

  1. Determine the total number of outcomes for the first event.
  2. Find the probability of the first event.
  3. Determine the total number of outcomes for the second event.
  4. Find the probability of the second event.
  5. Add the probabilities.
{{< /callout >}}

**Example.** A card is drawn from a standard deck. Find the probability of drawing a heart or a spade.

**Solution.** The events "drawing a heart" and "drawing a spade" are mutually exclusive because they cannot occur at the same time. The probability of drawing a heart is $\tfrac14$, and the probability of drawing a spade is also $\tfrac14$, so the probability of drawing a heart or a spade is

$$\tfrac14+\tfrac14=\tfrac12$$

{{< fillin
  question="A card is drawn from a standard deck. Find the probability of drawing an ace or a king. Enter the probability as a fraction."
  answer="\frac{2}{13}"
  answerForm="fraction"
  answerDisplay="$\tfrac{2}{13}$"
  hint="Drawing an ace and drawing a king are mutually exclusive, so add their two probabilities directly."
>}}

### Using the Complement Rule to Compute Probabilities

We have discussed how to calculate the probability that an event will happen. Sometimes, we are interested in finding the probability that an event will *not* happen. The **complement of an event** $E$, denoted $E'$, is the set of outcomes in the sample space that are not in $E$. For example, suppose we are interested in the probability that a horse will lose a race. If event $W$ is the horse winning the race, then the complement of event $W$ is the horse losing the race.

To find the probability that the horse loses the race, we need to use the fact that the sum of all probabilities in a probability model must be 1.

$$P(E')=1-P(E)$$

The probability of the horse winning added to the probability of the horse losing must be equal to 1. Therefore, if the probability of the horse winning the race is $\tfrac19$, the probability of the horse losing the race is simply

$$1-\tfrac19=\tfrac89$$

{{< callout type="info" >}}
  **The Complement Rule.** The probability that the **complement of an event** will occur is given by

  $$P(E')=1-P(E)$$
{{< /callout >}}

**Example.** Two six-sided number cubes are rolled.

a. Find the probability that the sum of the numbers rolled is less than or equal to 3.
b. Find the probability that the sum of the numbers rolled is greater than 3.

**Solution.** The first step is to identify the sample space, which consists of all the possible outcomes. There are two number cubes, and each number cube has six possible outcomes. Using the Multiplication Principle, we find that there are $6\times6$, or $36$, total possible outcomes. So, for example, $1\text{-}1$ represents a 1 rolled on each number cube.

| | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | $1\text{-}1$ | $1\text{-}2$ | $1\text{-}3$ | $1\text{-}4$ | $1\text{-}5$ | $1\text{-}6$ |
| **2** | $2\text{-}1$ | $2\text{-}2$ | $2\text{-}3$ | $2\text{-}4$ | $2\text{-}5$ | $2\text{-}6$ |
| **3** | $3\text{-}1$ | $3\text{-}2$ | $3\text{-}3$ | $3\text{-}4$ | $3\text{-}5$ | $3\text{-}6$ |
| **4** | $4\text{-}1$ | $4\text{-}2$ | $4\text{-}3$ | $4\text{-}4$ | $4\text{-}5$ | $4\text{-}6$ |
| **5** | $5\text{-}1$ | $5\text{-}2$ | $5\text{-}3$ | $5\text{-}4$ | $5\text{-}5$ | $5\text{-}6$ |
| **6** | $6\text{-}1$ | $6\text{-}2$ | $6\text{-}3$ | $6\text{-}4$ | $6\text{-}5$ | $6\text{-}6$ |

a. We need to count the number of ways to roll a sum of 3 or less. These would include the following outcomes: $1\text{-}1$, $1\text{-}2$, and $2\text{-}1$. So there are only three ways to roll a sum of 3 or less. The probability is $\tfrac{3}{36}=\tfrac{1}{12}$.

b. Rather than listing all the possibilities, we can use the Complement Rule. Because we have already found the probability of the complement of this event, we can simply subtract that probability from 1 to find the probability that the sum of the numbers rolled is greater than 3.

$$
\begin{array}{lrcl}
& P(E') &=& 1-P(E) \\[4pt]
& &=& 1-\tfrac{1}{12} \\[4pt]
& &=& \tfrac{11}{12}
\end{array}
$$

{{< fillin
  question="Two number cubes are rolled. Use the Complement Rule to find the probability that the sum is less than 10. Enter the probability as a fraction."
  answer="\frac{5}{6}"
  answerForm="fraction"
  answerDisplay="$\tfrac56$"
  hint="First find the probability that the sum is 10 or more (there are only 6 such outcomes out of 36), then subtract that probability from 1."
>}}

### Computing Probability Using Counting Theory

Many interesting probability problems involve counting principles, permutations, and combinations. In these problems, we will use permutations and combinations to find the number of elements in events and sample spaces. These problems can be complicated, but they can be made easier by breaking them down into smaller counting problems.

Assume, for example, that a store has 8 cellular phones and that 3 of those are defective. We might want to find the probability that a couple purchasing 2 phones receives 2 phones that are not defective. To solve this problem, we need to calculate all of the ways to select 2 phones that are not defective as well as all of the ways to select 2 phones. There are 5 phones that are not defective, so there are $C(5,2)$ ways to select 2 phones that are not defective. There are 8 phones, so there are $C(8,2)$ ways to select 2 phones. The probability of selecting 2 phones that are not defective is:

$$
\begin{array}{lrcl}
& \tfrac{\text{ways to select 2 phones that are not defective}}{\text{ways to select 2 phones}} &=& \tfrac{C(5,2)}{C(8,2)} \\[4pt]
& &=& \tfrac{10}{28} \\[4pt]
& &=& \tfrac{5}{14}
\end{array}
$$

**Example.** A child randomly selects 5 toys from a bin containing 3 bunnies, 5 dogs, and 6 bears.

a. Find the probability that only bears are chosen.
b. Find the probability that 2 bears and 3 dogs are chosen.
c. Find the probability that at least 2 dogs are chosen.

**Solution.**

a. We need to count the number of ways to choose only bears and the total number of possible ways to select 5 toys. There are 6 bears, so there are $C(6,5)$ ways to choose 5 bears. There are 14 toys, so there are $C(14,5)$ ways to choose any 5 toys.

   $$\tfrac{C(6,5)}{C(14,5)}=\tfrac{6}{2{,}002}=\tfrac{3}{1{,}001}$$

b. We need to count the number of ways to choose 2 bears and 3 dogs and the total number of possible ways to select 5 toys. There are 6 bears, so there are $C(6,2)$ ways to choose 2 bears. There are 5 dogs, so there are $C(5,3)$ ways to choose 3 dogs. Since we are choosing both bears and dogs at the same time, we will use the Multiplication Principle. There are $C(6,2)\cdot C(5,3)$ ways to choose 2 bears and 3 dogs. We can use this result to find the probability.

   $$\tfrac{C(6,2)C(5,3)}{C(14,5)}=\tfrac{15\cdot10}{2{,}002}=\tfrac{75}{1{,}001}$$

c. It is often easiest to solve "at least" problems using the Complement Rule. We will begin by finding the probability that fewer than 2 dogs are chosen. If less than 2 dogs are chosen, then either no dogs could be chosen, or 1 dog could be chosen.

   When no dogs are chosen, all 5 toys come from the 9 toys that are not dogs. There are $C(9,5)$ ways to choose toys from the 9 toys that are not dogs. Since there are 14 toys, there are $C(14,5)$ ways to choose the 5 toys from all of the toys.

   $$\tfrac{C(9,5)}{C(14,5)}=\tfrac{63}{1{,}001}$$

   If there is 1 dog chosen, then 4 toys must come from the 9 toys that are not dogs, and 1 must come from the 5 dogs. Since we are choosing both dogs and other toys at the same time, we will use the Multiplication Principle. There are $C(5,1)\cdot C(9,4)$ ways to choose 1 dog and 1 other toy.

   $$\tfrac{C(5,1)C(9,4)}{C(14,5)}=\tfrac{5\cdot126}{2{,}002}=\tfrac{315}{1{,}001}$$

   Because these events would not occur together and are therefore mutually exclusive, we add the probabilities to find the probability that fewer than 2 dogs are chosen.

   $$\tfrac{63}{1{,}001}+\tfrac{315}{1{,}001}=\tfrac{378}{1{,}001}$$

   We then subtract that probability from 1 to find the probability that at least 2 dogs are chosen.

   $$1-\tfrac{378}{1{,}001}=\tfrac{623}{1{,}001}$$

{{< fillin
  question="A child randomly selects 3 gumballs from a container holding 4 purple gumballs, 8 yellow gumballs, and 2 green gumballs. Find the probability that all 3 gumballs selected are purple. Enter the probability as a fraction."
  answer="\frac{1}{91}"
  answerForm="fraction"
  answerDisplay="$\tfrac{1}{91}$"
  hint="There are $C(14,3)$ ways to select any 3 gumballs; count the ways to select 3 purple ones from the 4 purple gumballs."
>}}

{{< fillin
  question="A child randomly selects 3 gumballs from a container holding 4 purple gumballs, 8 yellow gumballs, and 2 green gumballs. Find the probability that no yellow gumballs are selected. Enter the probability as a fraction."
  answer="\frac{5}{91}"
  answerForm="fraction"
  answerDisplay="$\tfrac{5}{91}$"
  hint="Count the ways to select all 3 gumballs from the 6 that are not yellow (4 purple plus 2 green), out of $C(14,3)$ total ways."
>}}

{{< fillin
  question="A child randomly selects 3 gumballs from a container holding 4 purple gumballs, 8 yellow gumballs, and 2 green gumballs. Find the probability that at least 1 yellow gumball is selected. Enter the probability as a fraction."
  answer="\frac{86}{91}"
  answerForm="fraction"
  answerDisplay="$\tfrac{86}{91}$"
  hint="Use the Complement Rule: subtract the probability that no yellow gumballs are selected from 1."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and practice with probability.
{{< /callout >}}

## Key equations

| probability of an event with equally likely outcomes | $P(E)=\tfrac{n(E)}{n(S)}$ |
| :--- | :--- |
| probability of the union of two events | $P(E\cup F)=P(E)+P(F)-P(E\cap F)$ |
| probability of the union of mutually exclusive events | $P(E\cup F)=P(E)+P(F)$ |
| probability of the complement of an event | $P(E')=1-P(E)$ |

## Key concepts

- Probability is always a number between 0 and 1, where 0 means an event is impossible and 1 means an event is certain.
- The probabilities in a probability model must sum to 1.
- When the outcomes of an experiment are all equally likely, we can find the probability of an event by dividing the number of outcomes in the event by the total number of outcomes in the sample space for the experiment.
- To find the probability of the union of two events, we add the probabilities of the two events and subtract the probability that both events occur simultaneously.
- To find the probability of the union of two mutually exclusive events, we add the probabilities of each of the events.
- The probability of the complement of an event is the difference between 1 and the probability that the event occurs.
- In some probability problems, we need to use permutations and combinations to find the number of elements in events and sample spaces.

## Practice

### Construct probability models

{{< multiplechoice
  question="What term is used to express the likelihood of an event occurring, and what values can that term take?"
  mode="text"
  answer="Probability, a number between $0$ and $1$ inclusive"
  hint="This term is restricted to values between 0 and 1, inclusive of 0 and 1."
>}}
Sample space, a set listing every possible result
Outcome
Probability, a number between $0$ and $1$ inclusive
Odds, any nonnegative real number
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is an experiment, in the sense used to build a probability model?"
  mode="text"
  answer="An activity with an observable result"
  hint="Rolling a die or tossing a coin are both examples; the term names the activity itself, not its results."
>}}
An activity with an observable result
A subset of a sample space
The set of all possible outcomes of an activity
A number between $0$ and $1$ that describes a likelihood
{{< /multiplechoice >}}

### Compute probabilities of equally likely outcomes

{{< fillin
  question="Two fair coins are tossed. Find the probability of tossing two heads. Enter the probability as a fraction."
  answer="\frac{1}{4}"
  answerForm="fraction"
  answerDisplay="$\tfrac14$"
  hint="List the four equally likely outcomes of tossing two coins, then count how many show two heads."
>}}

{{< fillin
  question="Four fair coins are tossed. Find the probability of tossing exactly two heads. Enter the probability as a fraction."
  answer="\frac{3}{8}"
  answerForm="fraction"
  answerDisplay="$\tfrac38$"
  hint="There are 16 equally likely outcomes; count how many have exactly two heads among the four coins."
>}}

### Compute probabilities of the union of two events

{{< fillin
  question="A fair coin is tossed, and a card is drawn from a standard deck of 52 cards. Find the probability that the coin shows heads or the card is a club. Enter the probability as a fraction."
  answer="\frac{5}{8}"
  answerForm="fraction"
  answerDisplay="$\tfrac58$"
  hint="Add $P(\text{heads})$ and $P(\text{club})$, then subtract $P(\text{heads and a club})$, since the two events are independent."
>}}

{{< fillin
  question="A fair coin is tossed, and a card is drawn from a standard deck of 52 cards. Find the probability that the coin shows heads or the card is a face card (a jack, queen, or king). Enter the probability as a fraction."
  answer="\frac{8}{13}"
  answerForm="fraction"
  answerDisplay="$\tfrac{8}{13}$"
  hint="Add $P(\text{heads})$ and $P(\text{face card})$, then subtract $P(\text{heads and a face card})$."
>}}

{{< fillin
  question="Using the spinner shown, find the probability of landing on purple or landing on a vowel (A, E, I, O, or U). Enter the probability as a fraction."
  answer="\frac{5}{8}"
  answerForm="fraction"
  answerDisplay="$\tfrac58$"
  hint="Purple and the vowels share no sector, so add the probability of landing on purple to the probability of landing on a vowel."
>}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A spinner divided into eight equal sections, one for each letter A, B, C, D, E, F, I, and O: A and D are blue, B is purple, C is orange, E is red, F and I are green, and O is yellow.","unit":38,"circles":[{"at":[0,0],"r":2.8}],"segments":[{"from":[0,0],"to":[0,2.8],"arrow":true},{"from":[0,0],"to":[1.9799,1.9799]},{"from":[0,0],"to":[2.8,0]},{"from":[0,0],"to":[1.9799,-1.9799]},{"from":[0,0],"to":[0,-2.8]},{"from":[0,0],"to":[-1.9799,-1.9799]},{"from":[0,0],"to":[-2.8,0]},{"from":[0,0],"to":[-1.9799,1.9799]}],"texts":[{"at":[0.7654,1.8478],"text":"A (blue)","anchor":"middle"},{"at":[1.8478,0.7654],"text":"B (purple)","anchor":"middle"},{"at":[1.8478,-0.7654],"text":"I (green)","anchor":"middle"},{"at":[0.7654,-1.8478],"text":"D (blue)","anchor":"middle"},{"at":[-0.7654,-1.8478],"text":"E (red)","anchor":"middle"},{"at":[-1.8478,-0.7654],"text":"C (orange)","anchor":"middle"},{"at":[-1.8478,0.7654],"text":"O (yellow)","anchor":"middle"},{"at":[-0.7654,1.8478],"text":"F (green)","anchor":"middle"}]}
{{< /apfigure >}}

### Use the complement rule to find probabilities

{{< fillin
  question="Four fair coins are tossed. Find the probability of tossing not all tails. Enter the probability as a fraction."
  answer="\frac{15}{16}"
  answerForm="fraction"
  answerDisplay="$\tfrac{15}{16}$"
  hint="Find the probability of tossing all tails, then subtract it from 1."
>}}

{{< fillin
  question="One card is drawn from a standard deck of 52 cards. Find the probability of drawing a non-ace. Enter the probability as a fraction."
  answer="\frac{12}{13}"
  answerForm="fraction"
  answerDisplay="$\tfrac{12}{13}$"
  hint="Find the probability of drawing an ace, then subtract it from 1."
>}}

### Compute probability using counting theory

{{< fillin
  question="A bag of M&Ms contains 12 blue, 6 brown, 10 orange, 8 yellow, 8 red, and 4 green M&Ms. Reaching into the bag, a person grabs 5 M&Ms. What is the probability of getting all blue M&Ms? Enter the probability as a fraction."
  answer="\frac{1}{2162}"
  answerForm="fraction"
  answerDisplay="$\tfrac{1}{2{,}162}$"
  hint="Divide the number of ways to choose 5 blue M&Ms, $C(12,5)$, by the number of ways to choose any 5 of the 48 M&Ms, $C(48,5)$."
>}}

{{< fillin
  question="A bag of M&Ms contains 12 blue, 6 brown, 10 orange, 8 yellow, 8 red, and 4 green M&Ms. Reaching into the bag, a person grabs 5 M&Ms. What is the probability of getting exactly 3 blue M&Ms? Enter the probability as a fraction."
  answer="\frac{175}{2162}"
  answerForm="fraction"
  answerDisplay="$\tfrac{175}{2{,}162}$"
  hint="Use the Multiplication Principle: multiply the ways to choose 3 of the 12 blue M&Ms, $C(12,3)$, by the ways to choose the other 2 from the remaining 36, $C(36,2)$, then divide by $C(48,5)$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 11.7: Probability](https://openstax.org/books/precalculus-2e/pages/11-7-probability) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Objective 1" review of sample spaces and basic probability, keyed to Intermediate Algebra 12.4.1, complete with its own worked example and a "Practice Makes Perfect" exercise set) — confirmed against the rendered PDF, page 1154 (true PDF index 1164), where the "Graphical"/"Extensions" exercises of the previous section (11.6, Binomial Theorem) run directly into the "11.7 Probability" heading and Learning Objectives with no corequisite-skills material between them, matching the pattern this book's errata already record for the chapter's other modules. This module (m49450) also carries the chapter's own Chapter Review Exercises and Practice Test appended after its Section Exercises; those chapter-level items were not transcribed and no Practice item was drawn from them — including that Practice Test's own numbered 7-section spinner figure and its accompanying "construct a probability model" exercises, which accordingly do not appear on this page. Omitted the credited "spaghetti model" hurricane-forecast photograph (a stock illustrative map, not a mathematical figure), keeping the paragraph that introduces it. Kept the Media callout's introductory sentence but omitted its two external video links, matching house precedent elsewhere in this book. Recreated the section's two pie-chart/spinner figures as accessible spec-first `figure` diagrams — a rim circle, six or eight equal sectors drawn as spokes from the center, and each sector labeled with its letter and color in place of a color fill, since the figure engine has no sector-fill primitive: the six-section spinner (two orange sectors labeled a, one orange and one red sector labeled b, one blue sector labeled d, one green sector labeled c) illustrating the union and mutually-exclusive-union examples, and the eight-section lettered spinner (A, D blue; B purple; C orange; E red; F, I green; O yellow) used by the Practice block's "purple or a vowel" item, both matching the sector arrangement and colors the source figures print. The two-dice sample-space table in the Complement Rule example (36 outcome pairs, needed to see how "sum of 3 or less" is counted) is transcribed as a Markdown table. Every "construct a probability model" and vocabulary ask (naming the term for the likelihood of an event, and what an experiment is) is a `multiplechoice`, since a learner cannot type back a whole model or a word definition; every probability answer is keyed as a bare fraction exactly as the source solution gives it, since none of the retained exercises are stated in lowest-terms, decimal, or percent form. Eleven selected end-of-section Verbal, Numeric, and Real-World Applications exercises were adapted into the interactive components of the closing Practice block, one Practice group per objective, every one independently re-derived — including by running exact-rational and combinatorial arithmetic in Node with BigInt — rather than read off the source key; the "purple or a vowel" and "coin and a card" items inline their spinner and deck context directly into the question text, and the M&M items inline the bag's contents, so each question is self-contained.</small>
