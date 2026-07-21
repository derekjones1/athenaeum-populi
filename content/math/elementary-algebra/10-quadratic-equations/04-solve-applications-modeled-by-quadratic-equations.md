---
title: Solve Applications Modeled by Quadratic Equations
description: >-
  Using quadratic equations to solve applications involving consecutive integers,
  geometry, the Pythagorean Theorem, rectangular areas, and projectile motion.
source_section: "10.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve applications
  modeled by Quadratic Equations.
{{< /callout >}}

## Solve Applications of the Quadratic Formula

We solved some applications that are modeled by quadratic equations earlier,
when the only method we had to solve them was factoring. Now that we have more
methods to solve quadratic equations, we will take another look at applications.
To get us started, we will copy our usual Problem Solving Strategy here so we
can follow the steps.

{{< callout type="info" >}}
  **Use the problem solving strategy.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
  2. **Identify** what we are looking for.
  3. **Name** what we are looking for. Choose a variable to represent that quantity.
  4. **Translate** into an equation. It may be helpful to restate the problem in
     one sentence with all the important information. Then, translate the English
     sentence into an algebra equation.
  5. **Solve** the equation using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

We have solved number applications that involved **consecutive even integers**
and **consecutive odd integers** by modeling the situation with linear equations.
Remember, we noticed each even integer is 2 more than the number preceding it.
If we call the first one $n$, then the next one is $n+2$. The next one would be
$n+2+2$ or $n+4$. This is also true when we use odd integers. One set of even
integers and one set of odd integers are shown below.

| Consecutive even integers: 64, 66, 68 | Consecutive odd integers: 77, 79, 81 |
| --- | --- |
| $n$: 1st even integer | $n$: 1st odd integer |
| $n+2$: 2nd consecutive even integer | $n+2$: 2nd consecutive odd integer |
| $n+4$: 3rd consecutive even integer | $n+4$: 3rd consecutive odd integer |

Some applications of consecutive odd integers or consecutive even integers are
modeled by quadratic equations. The notation above will be helpful as you name
the variables.

**Example 10.38.** The product of two consecutive odd integers is 195. Find the integers.

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what we are looking for. We are looking for two consecutive
odd integers.

**Step 3. Name** what we are looking for. Let $n=$ the first odd integer and
$n+2=$ the next odd integer.

**Step 4. Translate** into an equation. State the problem in one sentence.
“The product of two consecutive odd integers is 195.” The product of the first
odd integer and the second odd integer is 195. Translate into an equation.

**Step 5. Solve** the equation.

$$
\begin{array}{lrcl}
\text{Translate into an equation.} & n(n+2) &=& 195 \\[4pt]
\text{Distribute.} & n^2+2n &=& 195 \\[4pt]
\text{Subtract 195 to get the equation in standard form.} & n^2+2n-195 &=& 0 \\[4pt]
\text{Identify the }a,b,c\text{ values.} & a&=&1,\ b=2,\ c=-195 \\[4pt]
\text{Write the quadratic equation.} & n &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Then substitute in the values of }a,b,c. & n &=& \tfrac{-2\pm\sqrt{2^2-4(1)(-195)}}{2(1)} \\[10pt]
\text{Simplify.} & n &=& \tfrac{-2\pm\sqrt{4+780}}{2} \\[10pt]
&&=& \tfrac{-2\pm\sqrt{784}}{2} \\[10pt]
\text{Simplify the radical.} & n &=& \tfrac{-2\pm28}{2} \\[10pt]
\text{Rewrite to show two solutions.} & n &=& \tfrac{-2+28}{2},\ n=\tfrac{-2-28}{2} \\[10pt]
\text{Solve each equation.} & n&=&13,\ n=-15
\end{array}
$$

There are two values of $n$ that are solutions. This will give us two pairs
of consecutive odd integers for our solution. If $n=13$, the next odd integer
is $13+2=15$. If $n=-15$, the next odd integer is $-15+2=-13$.

**Step 6. Check** the answer. Do these pairs work? Are they consecutive odd
integers? Is their product 195? $13$ and $15$ are consecutive odd integers and
$13\cdot15=195$; $-13$ and $-15$ are consecutive odd integers and
$-13(-15)=195$.

**Step 7. Answer** the question. The two
consecutive odd integers whose product is 195 are 13, 15, and $-13,-15$.

{{< fillin
  question="The product of two consecutive odd integers is 99. Find the integers. Enter the two positive integers followed by the two negative integers, separated by commas."
  answer="9,11,-9,-11"
  answerDisplay="$9,11,-9,-11$"
  hint="Let the first odd integer be $n$ and the next be $n+2$. Translate the product into an equation."
>}}

{{< fillin
  question="The product of two consecutive even integers is 168. Find the integers. Enter the two positive integers followed by the two negative integers, separated by commas."
  answer="12,14,-12,-14"
  answerDisplay="$12,14,-12,-14$"
  hint="Let the first even integer be $n$ and the next be $n+2$."
>}}

We will use the formula for the area of a triangle to solve the next example.

{{< callout type="info" >}}
  **Area of a Triangle.** For a triangle with base $b$ and height $h$, the
  area, $A$, is given by the formula $A=\tfrac{1}{2}bh$.
{{< /callout >}}

<div class="ap-figure">
<svg role="img" aria-label="A triangle with horizontal base b and a perpendicular height h drawn from the top vertex to the base." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 177" width="252" height="177" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="141" x2="216" y2="141" stroke="currentColor" stroke-width="1.5"/>
  <text x="126" y="163" text-anchor="middle" font-size="13" fill="currentColor">b</text>
  <line x1="216" y1="141" x2="156" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156" y1="36" x2="36" y2="141" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156" y1="36" x2="156" y2="141" stroke="currentColor" stroke-width="1.5"/>
  <text x="168" y="92.5" text-anchor="start" font-size="13" fill="currentColor">h</text>
  <path d="M 146 141 L 146 131 L 156 131" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

Recall that, when we solve geometry applications, it is helpful to draw the figure.

**Example 10.39.** An architect is designing the entryway of a restaurant. She
wants to put a triangular window above the doorway. Due to energy restrictions,
the window can have an area of 120 square feet and the architect wants the width
to be 4 feet more than twice the height. Find the height and width of the window.

**Solution.**

**Step 1. Read** the problem. Draw a picture.

**Step 2. Identify** what we are looking for. We are looking for the height and width.

**Step 3. Name** what we are looking for. Let $h=$ the height of the triangle
and $2h+4=$ the width of the triangle.

<div class="ap-figure">
<svg role="img" aria-label="A triangular window with perpendicular height h and horizontal width 2h plus 4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 177" width="252" height="177" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="141" x2="216" y2="141" stroke="currentColor" stroke-width="1.5"/>
  <text x="126" y="163" text-anchor="middle" font-size="13" fill="currentColor">2h+4</text>
  <line x1="216" y1="141" x2="156" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156" y1="36" x2="36" y2="141" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156" y1="36" x2="156" y2="141" stroke="currentColor" stroke-width="1.5"/>
  <text x="168" y="92.5" text-anchor="start" font-size="13" fill="currentColor">h</text>
  <path d="M 146 141 L 146 131 L 156 131" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

**Step 4. Translate.** We know the area. Write the formula for the area of a
triangle, $A=\tfrac12bh$.

**Step 5. Solve** the equation. Substitute in the values.

$$
\begin{array}{lrcl}
\text{Substitute in the values.} & 120 &=& \tfrac12(2h+4)h \\[10pt]
\text{Distribute.} & 120 &=& h^2+2h \\[4pt]
\text{Rewrite it in standard form.} & h^2+2h-120 &=& 0 \\[4pt]
\text{Identify the }a,b,c\text{ values.} & a&=&1,\ b=2,\ c=-120 \\[4pt]
\text{Write the quadratic equation.} & h &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Then substitute in the values of }a,b,c. & h &=& \tfrac{-2\pm\sqrt{2^2-4(1)(-120)}}{2(1)} \\[10pt]
\text{Simplify.} & h &=& \tfrac{-2\pm\sqrt{4+480}}{2} \\[10pt]
&&=& \tfrac{-2\pm\sqrt{484}}{2} \\[10pt]
\text{Simplify the radical.} & h &=& \tfrac{-2\pm22}{2} \\[10pt]
\text{Rewrite to show two solutions.} & h &=& \tfrac{-2+22}{2},\ h=\tfrac{-2-22}{2} \\[10pt]
\text{Simplify.} & h&=&10,\ h=-12
\end{array}
$$

Since $h$ is the height of a window, a value of $h=-12$ does not make sense.
The height of the triangle is $h=10$. The width of the triangle is
$2h+4=2\cdot10+4=24$.

**Step 6. Check** the answer. Does a triangle with a height 10 and width 24
have area 120? Yes.

**Step 7. Answer** the question. The height of the triangular window is 10 feet
and the width is 24 feet.

Notice that the solutions were integers. That tells us that we could have solved
the equation by factoring. When we wrote the equation in standard form,
$h^2+2h-120=0$, we could have factored it. If we did, we would have solved the
equation $(h+12)(h-10)=0$.

{{< fillin
  question="Find the dimensions of a triangle whose width is four more than six times its height and has an area of 208 square inches. Enter the height and width, separated by a comma."
  answer="8,52"
  answerDisplay="$8,52$ inches"
  hint="Use $208=\tfrac12(6h+4)h$."
>}}

{{< fillin
  question="If a triangle that has an area of 110 square feet has a height that is two feet less than twice the width, what are its dimensions? Enter the height and width, separated by a comma."
  answer="20,11"
  answerDisplay="$20,11$ feet"
  hint="Use $110=\tfrac12 w(2w-2)$."
>}}

In the two preceding examples, the number in the radical in the Quadratic Formula
was a perfect square and so the solutions were rational numbers. If we get an
irrational number as a solution to an application problem, we will use a calculator
to get an approximate value.

The Pythagorean Theorem gives the relation between the legs and hypotenuse of a
right triangle. We will use the Pythagorean Theorem to solve the next example.

{{< callout type="info" >}}
  **Pythagorean Theorem.** In any right triangle, where $a$ and $b$ are the
  lengths of the legs and $c$ is the length of the hypotenuse, $a^2+b^2=c^2$.
{{< /callout >}}

<div class="ap-figure">
<svg role="img" aria-label="A right triangle whose legs are labeled a and b and whose hypotenuse is labeled c." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="156" x2="156" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="96" y="178" text-anchor="middle" font-size="13" fill="currentColor">b</text>
  <line x1="156" y1="156" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="104.5" y="85.5" text-anchor="start" font-size="13" fill="currentColor">c</text>
  <line x1="36" y1="36" x2="36" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="24" y="100" text-anchor="end" font-size="13" fill="currentColor">a</text>
  <path d="M 46 156 L 46 146 L 36 146" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

**Example 10.40.** Rene is setting up a holiday light display. He wants to make
a ‘tree’ in the shape of two right triangles, as shown below, and has two 10-foot
strings of lights to use for the sides. He will attach the lights to the top of
a pole and to two stakes on the ground. He wants the height of the pole to be the
same as the distance from the base of the pole to each stake. How tall should the pole be?

<div class="ap-figure">
<svg role="img" aria-label="Two congruent right triangles form a tree shape. The central vertical pole and each horizontal distance to a stake are x; each sloping light string is 10 feet." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 192" width="252" height="192" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="156" x2="126" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="71.4" y="86.8" text-anchor="end" font-size="13" fill="currentColor">10</text>
  <line x1="126" y1="36" x2="216" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="180.6" y="86.8" text-anchor="start" font-size="13" fill="currentColor">10</text>
  <line x1="126" y1="36" x2="126" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="138" y="100" text-anchor="start" font-size="13" fill="currentColor">x</text>
  <line x1="36" y1="156" x2="126" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="81" y="142" text-anchor="middle" font-size="13" fill="currentColor">x</text>
  <line x1="126" y1="156" x2="216" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="171" y="142" text-anchor="middle" font-size="13" fill="currentColor">x</text>
</svg>
</div>

**Solution.**

**Step 1. Read** the problem. Draw a picture.

**Step 2. Identify** what we are looking for. We are looking for the height of the pole.

**Step 3. Name** what we are looking for. The distance from the base of the pole
to either stake is the same as the height of the pole. Let $x=$ the height of
the pole. $x=$ the distance from the pole to stake.

Each side is a right triangle. We draw a picture of one of them.

<div class="ap-figure">
<svg role="img" aria-label="One of the right triangles in the light display. Its two legs are each x and its hypotenuse is 10." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="156" x2="156" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="96" y="178" text-anchor="middle" font-size="13" fill="currentColor">x</text>
  <line x1="156" y1="156" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="104.5" y="85.5" text-anchor="start" font-size="13" fill="currentColor">10</text>
  <line x1="36" y1="36" x2="36" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="24" y="100" text-anchor="end" font-size="13" fill="currentColor">x</text>
  <path d="M 46 156 L 46 146 L 36 146" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

**Step 4. Translate** into an equation. We can use the Pythagorean Theorem to
solve for $x$. Write the Pythagorean Theorem, $a^2+b^2=c^2$.

**Step 5. Solve** the equation. Substitute.

$$
\begin{array}{lrcl}
\text{Substitute.} & x^2+x^2 &=& 10^2 \\[4pt]
\text{Simplify.} & 2x^2 &=& 100 \\[4pt]
\text{Divide by 2 to isolate the variable.} & \tfrac{2x^2}{2} &=& \tfrac{100}{2} \\[10pt]
\text{Simplify.} & x^2 &=& 50 \\[4pt]
\text{Square Root Property.} & x &=& \pm\sqrt{50} \\[4pt]
\text{Simplify the radical.} & x &=& \pm5\sqrt2 \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 5\sqrt2,\ x=-5\sqrt2 \\[4pt]
\text{Approximate this number to the nearest tenth with a calculator.} & x &\approx& 7.1
\end{array}
$$

**Step 6. Check** the answer. Check on your own in the Pythagorean Theorem.

**Step 7. Answer** the question. The pole should be about 7.1 feet tall.

{{< fillin
  question="The sun casts a shadow from a flag pole. The height of the flag pole is three times the length of its shadow. The distance between the end of the shadow and the top of the flag pole is 20 feet. Find the length of the shadow and the length of the flag pole. Round to the nearest tenth of a foot. Enter the shadow length and flag pole length, separated by a comma."
  answer="6.3,18.9"
  answerDisplay="$6.3,18.9$ feet"
  hint="If the shadow is $x$, the pole is $3x$. Use the Pythagorean Theorem."
>}}

{{< fillin
  question="The distance between opposite corners of a rectangular field is four more than the width of the field. The length of the field is twice its width. Find the distance between the opposite corners. Round to the nearest tenth."
  answer="7.2"
  answerDisplay="$7.2$"
  hint="Let the width be $w$, the length $2w$, and the diagonal $w+4$."
>}}

**Example 10.41.** Mike wants to put 150 square feet of artificial turf in his
front yard. This is the maximum area of artificial turf allowed by his homeowners
association. He wants to have a rectangular area of turf with length one foot less
than three times the width. Find the length and width. Round to the nearest tenth of a foot.

**Solution.**

**Step 1. Read** the problem. Draw a picture.

**Step 2. Identify** what we are looking for. We are looking for the length and width.

**Step 3. Name** what we are looking for. Let $w=$ the width of the rectangle.
$3w-1=$ the length of the rectangle.

<div class="ap-figure">
<svg role="img" aria-label="A rectangle with vertical width w and horizontal length 3w minus 1." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 147" width="252" height="147" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="111" x2="216" y2="111" stroke="currentColor" stroke-width="1.5"/>
  <text x="126" y="133" text-anchor="middle" font-size="13" fill="currentColor">3w−1</text>
  <line x1="216" y1="111" x2="216" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="228" y="77.5" text-anchor="start" font-size="13" fill="currentColor">w</text>
  <line x1="216" y1="36" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="126" y="22" text-anchor="middle" font-size="13" fill="currentColor">3w−1</text>
  <line x1="36" y1="36" x2="36" y2="111" stroke="currentColor" stroke-width="1.5"/>
  <text x="24" y="77.5" text-anchor="end" font-size="13" fill="currentColor">w</text>
</svg>
</div>

**Step 4. Translate** into an equation. We know the area. Write the formula for
the area of a rectangle, $A=L\cdot W$.

**Step 5. Solve** the equation. Substitute in the values.

$$
\begin{array}{lrcl}
\text{Substitute.} & 150 &=& (3w-1)w \\[4pt]
\text{Distribute.} & 150 &=& 3w^2-w \\[4pt]
\text{Rewrite it in standard form.} & 3w^2-w-150 &=& 0 \\[4pt]
\text{Identify the }a,b,c\text{ values.} & a&=&3,\ b=-1,\ c=-150 \\[4pt]
\text{Write the Quadratic Formula.} & w &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Then substitute in the values of }a,b,c. & w &=& \tfrac{-(-1)\pm\sqrt{(-1)^2-4(3)(-150)}}{2(3)} \\[10pt]
\text{Simplify.} & w &=& \tfrac{1\pm\sqrt{1+1800}}{6} \\[10pt]
&&=& \tfrac{1\pm\sqrt{1801}}{6} \\[10pt]
\text{Rewrite to show two solutions.} & w &=& \tfrac{1+\sqrt{1801}}{6},\ w=\tfrac{1-\sqrt{1801}}{6} \\[10pt]
\text{Approximate the answers using a calculator.} & w&\approx&7.2,\ w\approx-6.9
\end{array}
$$

Approximate the answers using a calculator. We eliminate the negative solution
for the width. Width $w\approx7.2$. Length $\approx3w-1\approx3(7.2)-1\approx20.6$.

**Step 6. Check** the answer. Make sure that the answers make sense.

**Step 7. Answer** the question. The width of the rectangle is approximately
7.2 feet and the length 20.6 feet.

{{< fillin
  question="The length of a 200 square foot rectangular vegetable garden is four feet less than twice the width. Find the length and width of the garden. Round to the nearest tenth of a foot. Enter the length and width, separated by a comma."
  answer="18.1,11.0"
  answerDisplay="$18.1,11.0$ feet"
  hint="Use $200=w(2w-4)$."
>}}

{{< fillin
  question="A rectangular tablecloth has an area of 80 square feet. The width is 5 feet shorter than the length. What are the length and width of the tablecloth? Round to the nearest tenth of a foot. Enter the length and width, separated by a comma."
  answer="11.8,6.8"
  answerDisplay="$11.8,6.8$ feet"
  hint="If the length is $l$, the width is $l-5$."
>}}

The height of a projectile shot upwards is modeled by a quadratic equation. The
initial velocity, $v_0$, propels the object up until gravity causes the object to fall back down.

{{< callout type="info" >}}
  **Projectile Motion.** The height in feet, $h$, of an object shot upwards into
  the air with initial velocity, $v_0$, after $t$ seconds is given by the formula:
  $$h=-16t^2+v_0t$$
{{< /callout >}}

We can use the formula for projectile motion to find how many seconds it will
take for a firework to reach a specific height.

**Example 10.42.** A firework is shot upwards with initial velocity 130 feet per
second. How many seconds will it take to reach a height of 260 feet? Round to the
nearest tenth of a second.

**Solution.**

**Step 1. Read** the problem.

**Step 2. Identify** what we are looking for. We are looking for the number of
seconds, which is time.

**Step 3. Name** what we are looking for. Let $t=$ the number of seconds.

**Step 4. Translate** into an equation. Use the formula, $h=-16t^2+v_0t$.

**Step 5. Solve** the equation. We know the velocity $v_0$ is 130 feet per
second. The height is 260 feet. Substitute the values.

$$
\begin{array}{lrcl}
\text{Substitute.} & 260 &=& -16t^2+130t \\[4pt]
\text{Rewrite it in standard form.} & 16t^2-130t+260 &=& 0 \\[4pt]
\text{Identify the }a,b,c\text{ values.} & a&=&16,\ b=-130,\ c=260 \\[4pt]
\text{Write the Quadratic Formula.} & t &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Then substitute in the values of }a,b,c. & t &=& \tfrac{-(-130)\pm\sqrt{(-130)^2-4(16)(260)}}{2(16)} \\[10pt]
\text{Simplify.} & t &=& \tfrac{130\pm\sqrt{16{,}900-16{,}640}}{32} \\[10pt]
&&=& \tfrac{130\pm\sqrt{260}}{32} \\[10pt]
\text{Rewrite to show two solutions.} & t &=& \tfrac{130+\sqrt{260}}{32},\ t=\tfrac{130-\sqrt{260}}{32} \\[10pt]
\text{Approximate the answers with a calculator.} & t&\approx&4.6\text{ seconds},\ t\approx3.6
\end{array}
$$

**Step 6. Check** the answer. The check is left to you.

The firework will go up and then fall back down. As the firework goes up, it will
reach 260 feet after approximately 3.6 seconds. It will also pass that height on
the way down at 4.6 seconds.

**Step 7. Answer** the question.

{{< fillin
  question="An arrow is shot from the ground into the air at an initial speed of 108 ft/sec. Use the formula $h=-16t^2+v_0t$ to determine when the arrow will be 180 feet from the ground. Round to the nearest tenth of a second. Enter both times, separated by a comma."
  answer="3,3.8"
  answerDisplay="$3,3.8$ seconds"
  hint="Set $180=-16t^2+108t$ and find both positive solutions."
>}}

{{< fillin
  question="A man throws a ball into the air with a velocity of 96 ft/sec. Use the formula $h=-16t^2+v_0t$ to determine when the height of the ball will be 48 feet. Round to the nearest tenth of a second. Enter both times, separated by a comma."
  answer="0.6,5.4"
  answerDisplay="$0.6,5.4$ seconds"
  hint="Set $48=-16t^2+96t$ and find both positive solutions."
>}}

## Key terms

**Area of a Triangle** — for a triangle with base $b$ and height $h$, the
area is $A=\tfrac{1}{2}bh$. **consecutive even integers** — even integers
that immediately follow each other, each two more than the previous
($n$, $n+2$, $n+4$, ...). **consecutive odd integers** — odd integers that
immediately follow each other, following the same “add two” pattern as
consecutive even integers. **problem solving strategy** — read the problem,
identify and name what is sought, translate the situation into an equation,
solve the equation, check the result, and answer the question. **Projectile
Motion** — the height in feet of an object shot upward from the ground with
initial velocity $v_0$ is $h=-16t^2+v_0t$ after $t$ seconds. **Pythagorean
Theorem** — in a right triangle with legs $a$ and $b$ and hypotenuse $c$,
$a^2+b^2=c^2$.

---

<small>This page is adapted from [Elementary Algebra 2e, Section 10.4](https://openstax.org/books/elementary-algebra-2e/pages/10-4-solve-applications-modeled-by-quadratic-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: reformatted the source for accessible web presentation and converted selected Try It problems into interactive exercises; corrected Try It 10.80 from the source key’s $3.2$ (the width) to $7.2$ (the requested diagonal), Try It 10.81 from 18 feet by 11 feet to 18.1 feet by 11.0 feet as directed to the nearest tenth, and Try It 10.84 from 0.6 and 5.5 seconds to 0.6 and 5.4 seconds; the source exercise set and media links are omitted.</small>
