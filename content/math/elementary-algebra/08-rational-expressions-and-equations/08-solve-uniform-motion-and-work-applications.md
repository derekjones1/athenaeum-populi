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
  **By the end of this section, you will be able to:** solve uniform motion
  applications, and solve work applications.
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
\text{Distribute.} & 200r + 6000 &=& 300r - 9000 \\[4pt]
\text{Solve.} & 15000 &=& 100r \\[4pt]
& 150 &=& r
\end{array}
$$

**Check.** Is $150$ mph reasonable for an airplane? Yes. At $150$ mph the
tailwind speed is $180$ mph and $\tfrac{300}{180} = \tfrac{5}{3}$ hours; the
headwind speed is $120$ mph and $\tfrac{200}{120} = \tfrac{5}{3}$ hours. The
times are equal, so it checks. The plane was traveling $150$ mph.

{{< fillin
  question="An airplane can fly $200$ miles into a $30$ mph headwind in the same time it takes to fly $300$ miles with a $30$ mph tailwind. Find the speed of the airplane in still air, in mph (enter the number)."
  answer="150"
  hint="Both legs take the same time: $\tfrac{200}{r-30} = \tfrac{300}{r+30}$. Cross-multiply and solve for $r$."
>}}

{{< fillin
  question="Mary takes a helicopter tour that flies $450$ miles against a $35$ mph headwind in the same time it flies $702$ miles with a $35$ mph tailwind. Find the speed of the helicopter in still air, in mph (enter the number)."
  answer="160"
  hint="Set the times equal: $\tfrac{450}{r-35} = \tfrac{702}{r+35}$, then $450(r+35) = 702(r-35)$."
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
  question="Jazmine trained for $3$ hours total. She ran $8$ miles and biked $24$ miles, biking $4$ mph faster than she ran. Find her running speed, in mph (enter the number)."
  answer="8"
  hint="Running time plus biking time is $3$ hours: $\tfrac{8}{r} + \tfrac{24}{r+4} = 3$. Discard the negative root."
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
  question="Hamilton rode $12$ miles downhill to the ocean, then $12$ miles uphill home at a speed $8$ mph slower. The uphill trip took $2$ hours longer. Find his downhill speed, in mph (enter the number)."
  answer="12"
  hint="Uphill time is $2$ more than downhill time: $\tfrac{12}{r-8} = \tfrac{12}{r} + 2$. Discard the negative root."
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
  question="Pete paints a room in $10$ hours and Alicia in $8$ hours. Working together, they finish in $t$ hours, where $\tfrac{1}{10} + \tfrac{1}{8} = \tfrac{1}{t}$. Find $t$ (enter it as a fraction of hours)."
  answer="\frac{40}{9}"
  answerDisplay="$t = \tfrac{40}{9}$ hours (about $4$ hours $27$ minutes)"
  hint="Multiply both sides by $40t$ to get $4t + 5t = 40$, then solve for $t$."
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
  question="Press #1 prints a magazine in $6$ hours and Press #2 in $12$ hours. Running together they finish in $t$ hours, where $\tfrac{1}{6} + \tfrac{1}{12} = \tfrac{1}{t}$. Find $t$, in hours (enter the number)."
  answer="4"
  hint="Multiply both sides by $12t$ to get $2t + t = 12$, then solve for $t$."
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
  question="Corey shovels the snow in $4$ hours; with his twin Casey they finish in $2$ hours. Casey alone needs $t$ hours, where $\tfrac{1}{4} + \tfrac{1}{t} = \tfrac{1}{2}$. Find $t$, in hours (enter the number)."
  answer="4"
  hint="Multiply both sides by $4t$ to get $t + 4 = 2t$, then solve for $t$."
>}}

## Key terms

**uniform motion** — motion at a constant rate, modeled by $D = rt$; solving
for time gives $t = \tfrac{D}{r}$, which fills the time column of a rate table.
**headwind / tailwind** — a wind (or current) that decreases or increases a
vehicle's speed, changing the rate by a fixed amount. **work application** — a
problem where two or more workers share a job; each does $\tfrac{1}{a}$ of the
job per hour when alone, and their per-hour parts sum to $\tfrac{1}{t}$, the
together rate.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.8: Solve Uniform Motion and Work Applications](https://openstax.org/books/elementary-algebra-2e/pages/8-8-solve-uniform-motion-and-work-applications) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples into rate/work tables and aligned step tables, recast the "How To" procedure as a callout, and grouped the uniform motion examples by the relationship used (equal times, total time, and a time difference); omitted the Be Prepared quiz, the diagrams, media links, and end-of-section exercises; and converted the practice problems ("Try Its") and representative exercises into interactive exercises with instant feedback.</small>
