---
title: Solve Applications of Quadratic Equations
description: >-
  Solving number, geometry, projectile-motion, uniform-motion, and work
  applications that are modeled by quadratic equations.
source_section: "9.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve applications modeled by quadratic equations
{{< /callout >}}

## Solve Applications Modeled by Quadratic Equations

We solved some applications that are modeled by quadratic equations earlier,
when the only method we had to solve them was factoring. Now that we have more
methods to solve quadratic equations, we will take another look at applications.

Let's first summarize the methods we now have to solve quadratic equations.

{{< callout type="info" >}}
**Methods to Solve Quadratic Equations**

1. Factoring
2. Square Root Property
3. Completing the Square
4. Quadratic Formula
{{< /callout >}}

As you solve each equation, choose the method that is most convenient for you
to work the problem. As a reminder, we will copy our usual Problem-Solving
Strategy here so we can follow the steps.

{{< callout type="info" >}}
**Use a Problem-Solving Strategy.**

1. **Read** the problem. Make sure all the words and ideas are understood.
2. **Identify** what we are looking for.
3. **Name** what we are looking for. Choose a variable to represent that quantity.
4. **Translate** into an equation. It may be helpful to restate the problem in
   one sentence with all the important information. Then, translate the English
   sentence into an algebraic equation.
5. **Solve** the equation using algebra techniques.
6. **Check** the answer in the problem and make sure it makes sense.
7. **Answer** the question with a complete sentence.
{{< /callout >}}

We have solved number applications that involved consecutive even and odd
integers, by modeling the situation with linear equations. Remember, we noticed
each even integer is 2 more than the number preceding it. If we call the first
one $n$, then the next one is $n+2$. The next one would be $n+2+2$ or $n+4$.
This is also true when we use odd integers.

| Consecutive even integers: 64, 66, 68 | Consecutive odd integers: 77, 79, 81 |
|---|---|
| $n$: first even integer | $n$: first odd integer |
| $n+2$: second consecutive even integer | $n+2$: second consecutive odd integer |
| $n+4$: third consecutive even integer | $n+4$: third consecutive odd integer |

Some applications of odd or even consecutive integers are modeled by quadratic
equations. The notation above will be helpful as you name the variables.

### Example 9.35

The product of two consecutive odd integers is 195. Find the integers.

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what we are looking for. We are looking for two
consecutive odd integers.

**Step 3. Name** what we are looking for. Let $n$ be the first odd integer and
$n+2$ the next odd integer.

**Step 4. Translate** into an equation. “The product of two consecutive odd
integers is 195.”

$$
n(n+2)=195
$$

**Step 5. Solve** the equation.

$$
\begin{array}{lrcl}
\text{Distribute.} & n^2+2n &=& 195 \\[4pt]
\text{Write in standard form.} & n^2+2n-195 &=& 0 \\[4pt]
\text{Factor.} & (n+15)(n-13) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & n+15=0 &\text{ or }& n-13=0 \\[4pt]
\text{Solve each equation.} & n=-15 &\text{ or }& n=13
\end{array}
$$

There are two values of $n$ that are solutions. This will give us two pairs of
consecutive odd integers for our solution: $13,15$ and $-15,-13$.

**Step 6. Check** the answer. Both pairs are consecutive odd integers, and
$13\cdot15=195$ and $(-13)(-15)=195$.

**Step 7. Answer** the question. Two consecutive odd integers whose product is
195 are 13, 15 and $-13,-15$.

{{< fillin
  question="The product of two consecutive odd integers is 99. Find the integers. Enter the positive pair followed by the negative pair, separated by commas."
  answer="9, 11, -9, -11"
  answerDisplay="$9,\ 11$ and $-9,\ -11$"
  hint="Let $n$ be the first odd integer. Solve $n(n+2)=99$."
>}}

{{< fillin
  question="The product of two consecutive even integers is 168. Find the integers. Enter the positive pair followed by the negative pair, separated by commas."
  answer="12, 14, -12, -14"
  answerDisplay="$12,\ 14$ and $-12,\ -14$"
  hint="Let $n$ be the first even integer. Solve $n(n+2)=168$."
>}}

{{< callout type="info" >}}
**Area of a Triangle.** For a triangle with base, $b$, and height, $h$, the
area, $A$, is given by the formula

$$A=\tfrac12bh.$$
{{< /callout >}}

Recall that when we solve geometric applications, it is helpful to draw the
figure.

### Example 9.36

An architect is designing the entryway of a restaurant. She wants to put a
triangular window above the doorway. Due to energy restrictions, the window can
only have an area of 120 square feet and the architect wants the base to be 4
feet more than twice the height. Find the base and height of the window.

**Solution.**

**Step 1. Read** the problem. Draw a picture: the triangular window has height
$h$ and base $2h+4$.

**Step 2. Identify** what we are looking for. We are looking for the base and
height.

**Step 3. Name** what we are looking for. Let $h$ be the height of the triangle.
Then $2h+4$ is the base.

**Step 4. Translate** into an equation. Use $A=\tfrac12bh$.

**Step 5. Solve** the equation.

$$
\begin{array}{lrcl}
\text{Substitute the values.} & 120 &=& \tfrac12(2h+4)h \\[10pt]
\text{Distribute.} & 120 &=& h^2+2h \\[4pt]
\text{Write in standard form.} & h^2+2h-120 &=& 0 \\[4pt]
\text{Factor.} & (h-10)(h+12) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & h-10=0 &\text{ or }& h+12=0 \\[4pt]
\text{Simplify.} & h=10 &\text{ or }& h=-12
\end{array}
$$

Since $h$ is the height of a window, $h=-12$ does not make sense. The height is
10 feet, and the base is $2(10)+4=24$ feet.

**Step 6. Check** the answer. A triangle with height 10 and base 24 has area
$\tfrac12(24)(10)=120$. Yes.

**Step 7. Answer** the question. The height of the triangular window is 10 feet
and the base is 24 feet.

{{< fillin
  question="Find the base and height of a triangle whose base is four inches more than six times its height and has an area of 456 square inches. Enter the base and height, separated by a comma."
  answer="76, 12"
  answerDisplay="base $76$ inches, height $12$ inches"
  hint="Let $h$ be the height. Then the base is $6h+4$ and $456=\tfrac12(6h+4)h$."
>}}

{{< fillin
  question="A triangle has an area of 110 square feet and a base that is two feet less than twice the height. Enter the base and height, separated by a comma."
  answer="20, 11"
  answerDisplay="base $20$ feet, height $11$ feet"
  hint="Let $h$ be the height. Then the base is $2h-2$."
>}}

In the two preceding examples, the number in the radical in the Quadratic
Formula was a perfect square and so the solutions were rational numbers. If we
get an irrational number as a solution to an application problem, we will use a
calculator to get an approximate value.

We will use the formula for the area of a rectangle to solve the next example.

{{< callout type="info" >}}
**Area of a Rectangle.** For a rectangle with length, $L$, and width, $W$, the
area, $A$, is given by the formula $A=LW$.
{{< /callout >}}

### Example 9.37

Mike wants to put 150 square feet of artificial turf in his front yard. This is
the maximum area of artificial turf allowed by his homeowners association. He
wants to have a rectangular area of turf with length one foot less than 3 times
the width. Find the length and width. Round to the nearest tenth of a foot.

**Solution.**

**Step 1. Read** the problem. Draw a rectangle with width $w$ and length $3w-1$.

**Step 2. Identify** what we are looking for. We are looking for the length and
width.

**Step 3. Name** what we are looking for. Let $w$ be the width. Then $3w-1$ is
the length.

**Step 4. Translate** into an equation. Use $A=L\cdot W$.

**Step 5. Solve** the equation.

$$
\begin{array}{lrcl}
\text{Substitute the values.} & 150 &=& (3w-1)w \\[4pt]
\text{Distribute.} & 150 &=& 3w^2-w \\[4pt]
\text{Write in standard form.} & 3w^2-w-150 &=& 0
\end{array}
$$

Here $a=3$, $b=-1$, and $c=-150$. Using the Quadratic Formula,

$$
\begin{aligned}
w&=\frac{-(-1)\pm\sqrt{(-1)^2-4(3)(-150)}}{2(3)}\\
 &=\frac{1\pm\sqrt{1801}}6.
\end{aligned}
$$

The two solutions are approximately $7.2$ and $-6.9$. We eliminate the negative
solution for the width. The width is approximately 7.2 feet, and the length is
$3(7.2)-1\approx20.6$ feet.

**Step 6. Check** the answer. Since the answers are approximate, the area will
not come out exactly to 150.

**Step 7. Answer** the question. The width is approximately 7.2 feet and the
length is approximately 20.6 feet.

{{< fillin
  question="The length of a 200-square-foot rectangular vegetable garden is four feet less than twice the width. Find the length and width, to the nearest tenth of a foot. Enter the length and width, separated by a comma."
  answer="18.1, 11.0"
  answerDisplay="length $18.1$ feet, width $11.0$ feet"
  hint="Let $w$ be the width. Solve $w(2w-4)=200$ and reject the negative value."
>}}

{{< fillin
  question="A rectangular tablecloth has an area of 80 square feet. The width is 5 feet shorter than the length. Find the length and width to the nearest tenth of a foot. Enter the length and width, separated by a comma."
  answer="11.8, 6.8"
  answerDisplay="length $11.8$ feet, width $6.8$ feet"
  hint="Let $L$ be the length. Then the width is $L-5$."
>}}

The Pythagorean Theorem gives the relation between the legs and hypotenuse of a
right triangle. We will use the Pythagorean Theorem to solve the next example.

{{< callout type="info" >}}
**Pythagorean Theorem.** In any right triangle, where $a$ and $b$ are the
lengths of the legs, and $c$ is the length of the hypotenuse,
$a^2+b^2=c^2$.
{{< /callout >}}

### Example 9.38

Rene is setting up a holiday light display. He wants to make a “tree” in the
shape of two right triangles and has two 10-foot strings of lights to use for
the sides. He will attach the lights to the top of a pole and to two stakes on
the ground. He wants the height of the pole to be the same as the distance from
the base of the pole to each stake. How tall should the pole be?

**Solution.**

**Step 1. Read** the problem. Draw a picture of the two right triangles.

**Step 2. Identify** what we are looking for. We are looking for the height of
the pole.

**Step 3. Name** what we are looking for. Let $x$ be both the height of the pole
and the distance from the pole to a stake. Each side is a right triangle with
legs $x,x$ and hypotenuse 10.

**Step 4. Translate** into an equation. Use the Pythagorean Theorem.

**Step 5. Solve** the equation.

$$
\begin{array}{lrcl}
\text{Substitute.} & x^2+x^2 &=& 10^2 \\[4pt]
\text{Simplify.} & 2x^2 &=& 100 \\[4pt]
\text{Divide by 2.} & x^2 &=& 50 \\[4pt]
\text{Use the Square Root Property.} & x &=& \pm\sqrt{50} \\[4pt]
\text{Simplify the radical.} & x &=& \pm5\sqrt2
\end{array}
$$

We eliminate the negative solution. If we approximate to the nearest tenth,
$x\approx7.1$.

**Step 6. Check** the answer in the Pythagorean Theorem.

**Step 7. Answer** the question. The pole should be about 7.1 feet tall.

{{< fillin
  question="A flag pole is three times the length of its shadow. The distance between the end of the shadow and the top of the pole is 20 feet. Find the shadow length and pole length to the nearest tenth. Enter them in that order, separated by a comma."
  answer="6.3, 19.0"
  answerDisplay="shadow $6.3$ feet, pole $19.0$ feet"
  hint="Let $x$ be the shadow length. The right triangle has legs $x$ and $3x$ and hypotenuse $20$."
>}}

{{< fillin
  question="The distance between opposite corners of a rectangular field is four more than the width. The length is twice the width. Find the distance between opposite corners, to the nearest tenth."
  answer="7.2"
  answerDisplay="$7.2$"
  hint="Let $w$ be the width. Then the diagonal is $w+4$ and the length is $2w$."
>}}

The height of a projectile shot upward from the ground is modeled by a
quadratic equation. The initial velocity, $v_0$, propels the object up until
gravity causes the object to fall back down.

{{< callout type="info" >}}
**Projectile motion.** The height in feet, $h$, of an object shot upwards into
the air with initial velocity, $v_0$, after $t$ seconds is given by

$$h=-16t^2+v_0t.$$
{{< /callout >}}

We can use this formula to find how many seconds it will take for a firework to
reach a specific height.

### Example 9.39

A firework is shot upwards with initial velocity 130 feet per second. How many
seconds will it take to reach a height of 260 feet? Round to the nearest tenth
of a second.

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what we are looking for. We are looking for the number of
seconds, which is time.

**Step 3. Name** what we are looking for. Let $t$ be the number of seconds.

**Step 4. Translate** into an equation. Use the projectile-motion formula.

**Step 5. Solve** the equation. Substitute $v_0=130$ and $h=260$:

$$260=-16t^2+130t.$$

Rewrite it as $16t^2-130t+260=0$, where $a=16$, $b=-130$, and $c=260$.

$$
\begin{aligned}
t&=\frac{-(-130)\pm\sqrt{(-130)^2-4(16)(260)}}{2(16)}\\
 &=\frac{130\pm\sqrt{260}}{32}.
\end{aligned}
$$

Thus $t\approx4.6$ seconds or $t\approx3.6$ seconds.

**Step 6. Check** the answer. The check is left to you.

**Step 7. Answer** the question. As the firework goes up, it will reach 260
feet after approximately 3.6 seconds. It will also pass that height on the way
down at 4.6 seconds.

{{< fillin
  question="An arrow is shot from the ground at an initial speed of 108 ft/s. Use $h=-16t^2+v_0t$ to determine when it will be 180 feet from the ground. Enter both times to the nearest tenth, separated by a comma."
  answer="3.0, 3.8"
  answerMode="unordered"
  answerDisplay="$3.0$ seconds and $3.8$ seconds"
  hint="Set $180=-16t^2+108t$ and solve the quadratic equation."
>}}

{{< fillin
  question="A man throws a ball into the air at 96 ft/s. Use $h=-16t^2+v_0t$ to determine when its height will be 48 feet. Enter both times to the nearest tenth, separated by a comma."
  answer="0.6, 5.4"
  answerMode="unordered"
  answerDisplay="$0.6$ second and $5.4$ seconds"
  hint="Set $48=-16t^2+96t$ and solve."
>}}

We have solved uniform motion problems using the formula $D=rt$ in previous
chapters. We used a table to organize the information and lead us to the
equation.

|  | Rate $\cdot$ | Time $=$ | Distance |
|---|---:|---:|---:|
|  | $r$ | $t$ | $D$ |

The formula $D=rt$ assumes we know $r$ and $t$ and use them to find $D$. If we
know $D$ and $r$ and need to find $t$, we solve for $t$ and get
$t=\tfrac Dr$. Some uniform motion problems are also modeled by quadratic
equations.

### Example 9.40

Professor Smith just returned from a conference that was 2,000 miles east of
his home. His total time in the airplane for the round trip was 9 hours. If the
plane was flying at a rate of 450 miles per hour, what was the speed of the jet
stream?

**Solution.** This is a uniform motion situation. A diagram helps us visualize
the 2,000-mile trip with the wind and the 2,000-mile return trip against the
wind.

We are looking for the speed of the jet stream. Let $r$ be its speed. With the
wind, the plane's rate is $450+r$; against the wind, it is $450-r$.

| Type | Rate | Time | Distance |
|---|---:|---:|---:|
| Headwind | $450-r$ | $\tfrac{2000}{450-r}$ | $2000$ |
| Tailwind | $450+r$ | $\tfrac{2000}{450+r}$ | $2000$ |

The times add to 9:

$$\frac{2000}{450-r}+\frac{2000}{450+r}=9.$$

Multiply both sides by the LCD, $(450-r)(450+r)$, and solve:

$$
\begin{aligned}
2000(450+r)+2000(450-r)&=9(450-r)(450+r)\\
2000(900)&=9(450^2-r^2)\\
2000(100)&=450^2-r^2\\
200{,}000&=202{,}500-r^2\\
-2{,}500&=-r^2\\
r&=50.
\end{aligned}
$$

Check: the tailwind rate is $500$ mph, so the trip takes
$\tfrac{2000}{500}=4$ hours. The headwind rate is $400$ mph, so the return
takes $\tfrac{2000}{400}=5$ hours. The times add to 9 hours. The speed of the
jet stream was 50 mph.

{{< fillin
  question="MaryAnne's destination is 2,400 miles from home and her total round-trip flight time was 10 hours. If the plane flew at 500 mph in still air, what was the speed of the jet stream?"
  answer="100"
  answerDisplay="$100$ mph"
  hint="Let $r$ be the wind speed and add $\tfrac{2{,}400}{500-r}+\tfrac{2{,}400}{500+r}$."
>}}

{{< fillin
  question="Gerry's destination is 3,000 miles from home and his total round-trip flight time was 11 hours. If the plane flew at 550 mph in still air, what was the speed of the jet stream?"
  answer="50"
  answerDisplay="$50$ mph"
  hint="Let $r$ be the wind speed. The two rates are $550-r$ and $550+r$."
>}}

Work applications can also be modeled by quadratic equations. We will set them
up using the same methods we used when we solved them with rational equations.
We'll use a similar scenario now.

### Example 9.41

The weekly gossip magazine has a big story about the presidential election and
the editor wants the magazine to be printed as soon as possible. She has asked
the printer to run an extra printing press to get the printing done more
quickly. Press #1 takes 12 hours more than Press #2 to do the job and when both
presses are running they can print the job in 8 hours. How long does it take
for each press to print the job alone?

**Solution.** This is a work problem. A chart will help us organize the
information. Let $x$ be the number of hours for Press #2 to complete the job.

|  | Number of hours needed to complete the job | Part of job completed/hour |
|---|---:|---:|
| Press #1 | $x+12$ | $\tfrac1{x+12}$ |
| Press #2 | $x$ | $\tfrac1x$ |
| Together | $8$ | $\tfrac18$ |

The part completed by Press #1 plus the part completed by Press #2 equals the
amount completed together:

$$\frac1{x+12}+\frac1x=\frac18.$$

Multiply by the LCD, $8x(x+12)$, and solve.

$$
\begin{aligned}
8x+8(x+12)&=x(x+12)\\
8x+8x+96&=x^2+12x\\
0&=x^2-4x-96\\
0&=(x-12)(x+8).
\end{aligned}
$$

So $x=12$ or $x=-8$. Since negative hours do not make sense, use $x=12$.
Press #1 would take 24 hours and Press #2 would take 12 hours to do the job
alone.

{{< fillin
  question="Press #1 takes 6 hours more than Press #2 to print a job. Together they print it in 4 hours. How long does each press take alone? Enter the times for Press #1 and Press #2, separated by a comma."
  answer="12, 6"
  answerDisplay="Press #1: $12$ hours; Press #2: $6$ hours"
  hint="Let $x$ be Press #2's time. Then $\tfrac1{x+6}+\tfrac1x=\tfrac14$."
>}}

{{< fillin
  question="A red hose takes 3 hours more than a green hose to fill a hot tub. Together they fill it in 2 hours. How long does each hose take alone? Enter the red-hose and green-hose times, separated by a comma."
  answer="6, 3"
  answerDisplay="red hose: $6$ hours; green hose: $3$ hours"
  hint="Let $x$ be the green hose's time. Then $\tfrac1{x+3}+\tfrac1x=\tfrac12$."
>}}

## Key terms

No new key terms are introduced in this section.

## Practice

### Solve applications modeled by quadratic equations

{{< fillin
  question="The product of two consecutive odd integers is 255. Find the integers. Enter the positive pair followed by the negative pair, separated by commas."
  answer="15, 17, -15, -17"
  answerDisplay="$15,\ 17$ and $-15,\ -17$"
  hint="Let $n$ be the first odd integer and $n+2$ the next. Solve $n(n+2)=255$ and keep both roots."
>}}

{{< fillin
  question="The length of a rectangular driveway is five feet more than three times the width. The area of the driveway is 50 square feet. Find the length and width, rounded to the nearest tenth of a foot. Enter the length and then the width, separated by a comma."
  answer="15.0, 3.3"
  answerDisplay="length $15.0$ feet, width $3.3$ feet"
  hint="Let $w$ be the width. Then the length is $3w+5$; substitute into $A=LW$ and solve $50=(3w+5)w$."
>}}

{{< fillin
  question="The hypotenuse of a right triangle is twice the length of one of its legs. The other leg is 3 feet long. Find the lengths of all three sides, rounded to the nearest tenth of a foot. Enter the sides in order from shortest to longest, separated by commas."
  answer="1.7, 3, 3.5"
  answerDisplay="$1.7$ ft, $3$ ft, $3.5$ ft"
  hint="Let $x$ be the leg whose hypotenuse is $2x$. Apply the Pythagorean Theorem: $x^2+3^2=(2x)^2$."
>}}

{{< fillin
  question="A firework rocket is shot upward with initial velocity 640 feet per second. Use $h=-16t^2+v_0t$ to determine when its height will be 1,200 feet. Round each time to the nearest hundredth of a second. Enter both times, separated by a comma."
  answer="1.97, 38.03"
  answerMode="unordered"
  answerDisplay="$1.97$ seconds and $38.03$ seconds"
  hint="Substitute $v_0=640$ and $h=1200$, write the equation in standard form, and apply the Quadratic Formula."
>}}

{{< fillin
  question="A small plane made a round trip for a lunch meeting, flying 200 miles each way, with a total flying time of 4 hours. If the plane's speed in still air was 120 mph, find the speed of the wind. Round to the nearest whole number."
  answer="49"
  answerDisplay="$49$ mph"
  hint="Let $r$ be the wind speed. Solve $\tfrac{200}{120+r}+\tfrac{200}{120-r}=4$ and reject the negative root."
>}}

---

<small>
Adapted from [*Intermediate Algebra 2e*, Section 9.5](https://openstax.org/books/intermediate-algebra-2e/pages/9-5-solve-applications-of-quadratic-equations) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/). Changes: adapted the source to interactive web format and converted Try It exercises to auto-graded questions, and adapted selected end-of-section exercises into an interactive Practice block.
</small>
