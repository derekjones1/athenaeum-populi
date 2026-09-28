---
title: Solve Uniform Motion and Work Applications
description: >-
  Using the uniform motion formula D = rt (solved for time) to model
  headwind/tailwind, uphill/downhill, and multi-leg trips, and using the
  work-rate model to find how long a shared job takes — adapted from OpenStax
  Elementary Algebra 2e, Section 8.8.
source_section: "8.8"
weight: 8
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve uniform motion applications
- Solve work applications
{{< /callout >}}

## Solve uniform motion applications

We have solved uniform motion problems using the formula $D = rt$ in previous
chapters. We used a table to organize the information and lead us to the
equation.

The formula $D = rt$ assumes we know $r$ and $t$ and use them to find $D$. If
we know $D$ and $r$ and need to find $t$, we solve the equation for $t$ and get
the formula

$$t = \frac{D}{r}.$$

In each row of the rate table we divide the distance by the rate to fill in the
time column. When two legs of a trip take **equal times**, we set the two time
expressions equal; when their times differ by a known amount, or add to a known
total, we build the equation from that relationship.

We have also explained how flying with or against a current affects the speed
of a vehicle — a tailwind adds to the speed and a headwind subtracts from it.

**Example.** An airplane can fly $200$ miles into a $30$ mph headwind in the
same amount of time it takes to fly $300$ miles with a $30$ mph tailwind. What
is the speed of the airplane?

Let $r =$ the speed of the airplane in still air. Flying into the headwind the
rate is $r - 30$; flying with the tailwind the rate is $r + 30$. We divide each
distance by its rate to get the time, and record everything in the chart.

| | Rate | Time | Distance |
| :--- | :---: | :---: | :---: |
| Headwind | $r - 30$ | $\tfrac{200}{r-30}$ | $200$ |
| Tailwind | $r + 30$ | $\tfrac{300}{r+30}$ | $300$ |

The two times are equal, so we write and solve the equation. Multiply both
sides by the LCD $(r-30)(r+30)$:

$$
\begin{array}{lrcl}
& \tfrac{200}{r-30} &=& \tfrac{300}{r+30} \\[4pt]
\text{Clear the fractions.} & 200(r+30) &=& 300(r-30) \\[4pt]
\text{Distribute.} & 200r + 6{,}000 &=& 300r - 9{,}000 \\[4pt]
\text{Solve.} & 15{,}000 &=& 100r \\[4pt]
& 150 &=& r
\end{array}
$$

**Check.** Is $150$ mph reasonable for an airplane? Yes. At $150$ mph the
tailwind speed is $180$ mph and $\tfrac{300}{180} = \tfrac{5}{3}$ hours; the
headwind speed is $120$ mph and $\tfrac{200}{120} = \tfrac{5}{3}$ hours. The
times are equal, so it checks. The plane was traveling $150$ mph.

{{< fillin
  question="Link has an electric bike which runs at a constant speed. That speed is reduced by the amount of any headwind and increased by the amount of any tailwind. Link can ride his bike $20$ miles into a $3$ mph headwind in the same amount of time he can ride $30$ miles with a $3$ mph tailwind. What is Link's biking speed, in mph (enter the number)?"
  answer="15"
  answerForm="decimal"
  hint="Let $r$ be his speed with no wind. Write each time as distance over rate, set the two times equal, and clear the fractions."
>}}

{{< fillin
  question="Mary takes a helicopter tour that flies $450$ miles against a $35$ mph headwind in the same time it flies $702$ miles with a $35$ mph tailwind. Find the speed of the helicopter in still air, in mph (enter the number)."
  answer="160"
  answerForm="decimal"
  hint="Let $r$ be the speed in still air; the headwind subtracts from it and the tailwind adds to it. Write each time as distance over rate, set the two times equal, and clear the fractions."
>}}

### A total time from two legs

Sometimes we know the **total** time for a trip made up of two legs traveled at
different speeds. We still divide each distance by its rate to get each leg's
time, then add the two times to get the total.

**Example.** Jazmine trained for $3$ hours on Saturday. She ran $8$ miles and
then biked $24$ miles. Her biking speed is $4$ mph faster than her running
speed. What is her running speed?

Let $r =$ Jazmine's running speed, so $r + 4 =$ her biking speed.

| | Rate | Time | Distance |
| :--- | :---: | :---: | :---: |
| Run | $r$ | $\tfrac{8}{r}$ | $8$ |
| Bike | $r + 4$ | $\tfrac{24}{r+4}$ | $24$ |

Her running time plus her biking time is $3$ hours. Multiply both sides by the
LCD $r(r+4)$:

$$
\begin{array}{lrcl}
& \tfrac{8}{r} + \tfrac{24}{r+4} &=& 3 \\[4pt]
\text{Clear the fractions.} & 8(r+4) + 24r &=& 3r(r+4) \\[4pt]
\text{Distribute.} & 8r + 32 + 24r &=& 3r^2 + 12r \\[4pt]
\text{Write in standard form.} & 0 &=& 3r^2 - 20r - 32 \\[4pt]
\text{Factor.} & 0 &=& (3r + 4)(r - 8)
\end{array}
$$

So $r = -\tfrac{4}{3}$ or $r = 8$. A negative speed does not make sense here, so
$r = 8$. **Check:** at $8$ mph running takes $\tfrac{8}{8} = 1$ hour and at
$12$ mph biking takes $\tfrac{24}{12} = 2$ hours, a total of $3$ hours.
Jazmine's running speed is $8$ mph.

{{< fillin
  question="Tony drove $4$ hours to his home, driving $208$ miles on the interstate and $40$ miles on country roads. If he drove $15$ mph faster on the interstate than on the country roads, what was his rate on the country roads, in mph (enter the number)?"
  answer="50"
  answerForm="decimal"
  hint="Let $r$ be his country-road rate. Write each leg's time as distance over rate, set their sum equal to the total time, clear the fractions, and keep the root that makes sense as a speed."
>}}

### One leg takes longer than the other

When a trip out and back covers the same distance but the two directions take
different times, we express one time as *more than* the other.

**Example.** Hamilton rode his bike downhill $12$ miles from his house to the
ocean and then rode uphill to return home. His uphill speed was $8$ mph slower
than his downhill speed. It took him $2$ hours longer to get home than it took
to get to the ocean. Find Hamilton's downhill speed.

Let $r =$ Hamilton's downhill speed, so $r - 8 =$ his uphill speed. The distance
is $12$ miles each way.

| | Rate | Time | Distance |
| :--- | :---: | :---: | :---: |
| Downhill | $r$ | $\tfrac{12}{r}$ | $12$ |
| Uphill | $r - 8$ | $\tfrac{12}{r-8}$ | $12$ |

The uphill time is $2$ more than the downhill time. Multiply both sides by the
LCD $r(r-8)$:

$$
\begin{array}{lrcl}
& \tfrac{12}{r-8} &=& \tfrac{12}{r} + 2 \\[4pt]
\text{Clear the fractions.} & 12r &=& 12(r-8) + 2r(r-8) \\[4pt]
\text{Distribute.} & 12r &=& 12r - 96 + 2r^2 - 16r \\[4pt]
\text{Write in standard form.} & 0 &=& 2r^2 - 16r - 96 \\[4pt]
\text{Factor out } 2 \text{ and factor.} & 0 &=& 2(r - 12)(r + 4)
\end{array}
$$

So $r = 12$ or $r = -4$. A negative speed makes no sense, so $r = 12$.
**Check:** downhill at $12$ mph takes $\tfrac{12}{12} = 1$ hour; uphill at
$12 - 8 = 4$ mph takes $\tfrac{12}{4} = 3$ hours, which is $2$ hours more.
Hamilton's downhill speed is $12$ mph.

{{< fillin
  question="Kayla rode her bike $75$ miles home from college one weekend and then rode the bus back to college. It took her $2$ hours less to ride back to college on the bus than it took her to ride home on her bike, and the average speed of the bus was $10$ miles per hour faster than Kayla's biking speed. Find Kayla's biking speed, in mph (enter the number)."
  answer="15"
  answerForm="decimal"
  hint="Let $r$ be her biking speed. Write each time as distance over rate, write the equation that relates the two times, clear the fractions, and keep the root that makes sense as a speed."
>}}

## Solve work applications

Suppose Pete can paint a room in $10$ hours. Working at a steady pace, in $1$
hour he paints $\tfrac{1}{10}$ of the room. If Alicia would take $8$ hours to
paint the same room, then in $1$ hour she paints $\tfrac{1}{8}$ of the room. How
long would it take them to paint the room working together?

A **work** application has three quantities: the time each person takes alone,
and the time it takes them together. Let $t$ be the number of hours it takes
them together. Then in $1$ hour working together they complete $\tfrac{1}{t}$ of
the job. The key model is:

$$\text{part done by first} + \text{part done by second} = \text{part done together}$$

So Pete's part plus Alicia's part equals the whole rate:

$$
\begin{array}{lrcl}
& \tfrac{1}{10} + \tfrac{1}{8} &=& \tfrac{1}{t} \\[4pt]
\text{Multiply by the LCD } 40t. & 4t + 5t &=& 40 \\[4pt]
\text{Simplify and solve.} & 9t &=& 40 \\[4pt]
& t &=& \tfrac{40}{9}
\end{array}
$$

Written as a mixed number, $t = 4\tfrac{4}{9}$ hours. Since $\tfrac{4}{9}$ of
$60$ minutes is about $27$ minutes, it would take Pete and Alicia about $4$
hours and $27$ minutes to paint the room together. Notice it takes *less* time
together than either person alone, as it should.

{{< fillin
  question="One gardener can mow a golf course in $4$ hours, while another gardener can mow the same golf course in $6$ hours. How long would it take if the two gardeners worked together to mow the golf course? Enter the time in hours, as a decimal."
  answer="2.4"
  answerForm="decimal"
  answerDisplay="$2.4$ hours ($2$ hours and $24$ minutes)"
  hint="Let $t$ be the time together. Add the part of the course each gardener mows in one hour, set the sum equal to $\tfrac{1}{t}$, and clear the fractions."
>}}

{{< callout type="info" >}}
  **Solve a work application.**

  1. Read the problem and let $t$ be the time it takes to do the job together.
  2. Find each worker's rate: if a job takes $a$ hours alone, that worker does
     $\tfrac{1}{a}$ of the job per hour.
  3. Set the sum of the individual per-hour parts equal to the together rate
     $\tfrac{1}{t}$.
  4. Clear the fractions with the LCD, solve, and check the answer is
     reasonable.
{{< /callout >}}

**Example.** Press #1 takes $6$ hours to print a magazine and Press #2 takes
$12$ hours. How long will it take to print the magazine with both presses
running together?

Let $t =$ the hours to finish together. Each row records the hours to complete
the whole job and the part completed per hour.

| | Hours to complete | Part per hour |
| :--- | :---: | :---: |
| Press #1 | $6$ | $\tfrac{1}{6}$ |
| Press #2 | $12$ | $\tfrac{1}{12}$ |
| Together | $t$ | $\tfrac{1}{t}$ |

The part completed by Press #1 plus the part by Press #2 equals the amount
completed together. Multiply both sides by the LCD $12t$:

$$
\begin{array}{lrcl}
& \tfrac{1}{6} + \tfrac{1}{12} &=& \tfrac{1}{t} \\[4pt]
\text{Clear the fractions.} & 2t + t &=& 12 \\[4pt]
\text{Simplify and solve.} & 3t &=& 12 \\[4pt]
& t &=& 4
\end{array}
$$

When both presses run together it takes $4$ hours to do the job.

{{< fillin
  question="Carrie can weed the garden in $7$ hours, while her mother can do it in $3$. How long will it take the two of them working together? Enter the time in hours, as a decimal."
  answer="2.1"
  answerForm="decimal"
  answerDisplay="$2.1$ hours ($2$ hours and $6$ minutes)"
  hint="Let $t$ be the time together. Add the part of the garden each person weeds in one hour, set the sum equal to $\tfrac{1}{t}$, and clear the fractions."
>}}

Some work problems give the *together* time and one worker's time, and ask for
the other worker's time alone.

**Example.** Corey can shovel all the snow from the sidewalk and driveway in
$4$ hours. If he and his twin Casey work together, they finish in $2$ hours. How
many hours would it take Casey to do the job alone?

Let $t =$ the hours Casey needs alone.

| | Hours to complete | Part per hour |
| :--- | :---: | :---: |
| Corey | $4$ | $\tfrac{1}{4}$ |
| Casey | $t$ | $\tfrac{1}{t}$ |
| Together | $2$ | $\tfrac{1}{2}$ |

Corey's part plus Casey's part equals the together part. Multiply both sides by
the LCD $4t$:

$$
\begin{array}{lrcl}
& \tfrac{1}{4} + \tfrac{1}{t} &=& \tfrac{1}{2} \\[4pt]
\text{Clear the fractions.} & t + 4 &=& 2t \\[4pt]
\text{Solve.} & 4 &=& t
\end{array}
$$

It would take Casey $4$ hours to do the job alone.

{{< fillin
  question="Two hoses can fill a swimming pool in $10$ hours. It would take one hose $26$ hours to fill the pool by itself. How long would it take for the other hose, working alone, to fill the pool? Enter the time in hours, as a decimal."
  answer="16.25"
  answerForm="decimal"
  answerDisplay="$16.25$ hours"
  hint="Let $t$ be the other hose's time alone. The parts of the pool the two hoses fill in one hour add up to the part they fill together in one hour; clear the fractions and solve for $t$."
>}}

## Key terms

**uniform motion** — motion at a constant rate, modeled by $D = rt$; solving
for time gives $t = \tfrac{D}{r}$, which fills the time column of a rate table.
**headwind / tailwind** — a wind (or current) that decreases or increases a
vehicle's speed, changing the rate by a fixed amount. **work application** — a
problem where two or more workers share a job; each does $\tfrac{1}{a}$ of the
job per hour when alone, and their per-hour parts sum to $\tfrac{1}{t}$, the
together rate.

## Practice

### Solve uniform motion applications

{{< fillin
  question="A boat travels $140$ miles downstream in the same time it travels $92$ miles upstream, and the speed of the current is $6$ mph. Find the speed of the boat in still water, in mph (enter the number)."
  answer="29"
  answerForm="decimal"
  hint="Let $b$ be the speed of the boat in still water; the current adds to it downstream and subtracts from it upstream. Write each time as distance over rate, set the two times equal, and clear the fractions."
>}}

{{< fillin
  question="Jane spent $2$ hours exploring a mountain on a dirt bike. She rode $40$ miles uphill at a rate $5$ mph slower than the rate at which she then rode $12$ miles along the summit. Find her rate along the summit, in mph (enter the number)."
  answer="30"
  answerForm="decimal"
  hint="Let $s$ be her summit rate. Write each leg's time as distance over rate, set their sum equal to the total time, clear the fractions, and keep the root that gives both rates positive."
>}}

{{< fillin
  question="Chester rode his bike $24$ miles uphill, then rode back downhill at a rate $2$ mph faster than his uphill rate. The uphill ride took $2$ hours longer than the downhill ride. Find his uphill rate, in mph (enter the number)."
  answer="4"
  answerForm="decimal"
  hint="Let $u$ be his uphill rate. Write each time as distance over rate, write the equation that relates the two times, clear the fractions, and keep the root that makes sense as a speed."
>}}

### Solve work applications

{{< fillin
  question="Mike, an experienced bricklayer, can build a wall in $3$ hours, while his son, who is learning, can do the job in $6$ hours. How long does it take for them to build a wall together, in hours (enter the number)?"
  answer="2"
  answerForm="decimal"
  hint="Let $t$ be the time together. Add the part of the wall each builds in one hour, set the sum equal to $\tfrac{1}{t}$, and clear the fractions."
>}}

{{< fillin
  question="Leeson can proofread a newspaper copy in $4$ hours. If Ryan helps, they can do the job in $3$ hours. How long would it take for Ryan to do the job alone, in hours (enter the number)?"
  answer="12"
  answerForm="decimal"
  hint="Let $t$ be Ryan's time alone. The parts Leeson and Ryan each do in one hour add up to the part they do together in one hour; clear the fractions and solve for $t$."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.8: Solve Uniform Motion and Work Applications](https://openstax.org/books/elementary-algebra-2e/pages/8-8-solve-uniform-motion-and-work-applications) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples into rate/work tables and aligned step tables, added a callout summarizing the steps of a work application, and grouped the uniform motion examples by the relationship used (equal times, total time, and a time difference); added a Key terms list; omitted the Be Prepared quiz, the diagrams, the Self Check checklist, and unselected end-of-section exercises; adapted selected end-of-section exercises into the interactive Practice block; and converted the practice problems ("Try Its") and representative exercises into interactive exercises with instant feedback.</small>
