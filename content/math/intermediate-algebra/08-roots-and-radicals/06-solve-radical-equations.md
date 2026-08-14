---
title: Solve Radical Equations
description: >-
  Solving equations with one or more radicals, checking for extraneous
  solutions, and applying radical equations.
source_section: "8.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve radical equations
- Solve radical equations with two radicals
- Use radicals in applications
{{< /callout >}}

## Solve Radical Equations

In this section we will solve equations that have a variable in the radicand of a radical expression. An equation of this type is called a radical equation.

### Radical Equation

An equation in which a variable is in the radicand of a radical expression is called a **radical equation**.

As usual, when solving these equations, what we do to one side of an equation we must do to the other side as well. Once we isolate the radical, our strategy will be to raise both sides of the equation to the power of the index. This will eliminate the radical.

Solving radical equations containing an even index by raising both sides to the power of the index may introduce an algebraic solution that would not be a solution to the original radical equation. Again, we call this an extraneous solution as we did when we solved rational equations.

In the next example, we will see how to solve a radical equation. Our strategy is based on raising a radical with index *n* to the *n*th power. This will eliminate the radical.

$$\text{For}\ a \geq 0, \left(\sqrt[n]{a}\right)^{n} = a.$$

**Example.**

#### How to Solve a Radical Equation

Solve: $\sqrt{5 n - 4} - 9 = 0.$

| Step | Result |
| --- | --- |
| 1. Isolate the radical by adding 9 to both sides. | $\sqrt{5n-4}-9+9=0+9$ |
| Simplify. | $\sqrt{5n-4}=9$ |
| 2. Square both sides. | $\left(\sqrt{5n-4}\right)^2=9^2$ |
| Simplify. | $5n-4=81$ |
| 3. Solve the new equation. | $5n=85$ |
|  | $n=17$ |
| 4. Check the answer in the original equation. | $\sqrt{5(17)-4}-9=\sqrt{81}-9=9-9=0$ |

{{< fillin
  question="Solve: $\sqrt{3 m + 2} - 5 = 0$"
  answer="m = \tfrac{23}{3}"
  answerDisplay="$m = \tfrac{23}{3}$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

{{< fillin
  question="Solve: $\sqrt{10 z + 1} - 2 = 0$"
  answer="z = \tfrac{3}{10}"
  answerDisplay="$z = \tfrac{3}{10}$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

### How To

#### Solve a radical equation with one radical.

1.  Step 1. Isolate the radical on one side of the equation.
2.  Step 2. Raise both sides of the equation to the power of the index.
3.  Step 3. Solve the new equation.
4.  Step 4. Check the answer in the original equation.

When we use a radical sign, it indicates the principal or positive root. If an equation has a radical with an even index equal to a negative number, that equation will have no solution.

**Example.**

Solve: $\sqrt{9 k - 2} + 1 = 0.$

| Step | Result |
| --- | --- |
|  | $\sqrt{9k-2}+1=0$ |
| To isolate the radical, subtract 1 from both sides. | $\sqrt{9k-2}+1-1=0-1$ |
| Simplify. | $\sqrt{9k-2}=-1$ |

Because the square root is equal to a negative number, the equation has no solution.

{{< multiplechoice
  question="Solve: $\sqrt{2 r - 3} + 5 = 0$"
  answer="no solution"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}
$r = 14$
no solution
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve: $\sqrt{7 s - 3} + 2 = 0$"
  answer="no solution"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}
no solution
$s = 1$
{{< /multiplechoice >}}

If one side of an equation with a square root is a binomial, we use the Product of Binomial Squares Pattern when we square it.

### Binomial Squares

$$\begin{matrix} \\ \\ \left(a + b\right)^{2} = a^{2} + 2 a b + b^{2} \\ \left(a - b\right)^{2} = a^{2} - 2 a b + b^{2}\end{matrix}$$

Don’t forget the middle term!

**Example.**

Solve: $\sqrt{p - 1} + 1 = p.$

| Step | Result |
| --- | --- |
|  | $\sqrt{p-1}+1=p$ |
| To isolate the radical, subtract 1 from both sides. | $\sqrt{p-1}+1-1=p-1$ |
| Simplify. | $\sqrt{p-1}=p-1$ |
| Square both sides of the equation. | $\left(\sqrt{p-1}\right)^2=(p-1)^2$ |
| Simplify, using the Product of Binomial Squares Pattern on the right. Then solve the new equation. | $p-1=p^2-2p+1$ |
| It is a quadratic equation, so get zero on one side. | $0=p^2-3p+2$ |
| Factor the right side. | $0=(p-1)(p-2)$ |
| Use the Zero Product Property. | $0=p-1\quad\text{or}\quad 0=p-2$ |
| Solve each equation. | $p=1\quad\text{or}\quad p=2$ |
| Check $p=1$. | $\sqrt{1-1}+1=1$ |
| Check $p=2$. | $\sqrt{2-1}+1=2$ |
|  | The solutions are $p = 1, p = 2.$ |

{{< fillin
  question="Solve: $\sqrt{x - 2} + 2 = x$"
  answer="x = 2 , x = 3"
  answerMode="unordered"
  answerDisplay="$x = 2 , x = 3$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

{{< fillin
  question="Solve: $\sqrt{y - 5} + 5 = y$"
  answer="y = 5 , y = 6"
  answerMode="unordered"
  answerDisplay="$y = 5 , y = 6$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

When the index of the radical is 3, we cube both sides to remove the radical.

$$\left(\sqrt[3]{a}\right)^{3} = a$$

**Example.**

Solve: $\sqrt[3]{5 x + 1} + 8 = 4.$

| Step | Result |
| --- | --- |
|  | $\sqrt[3]{5 x + 1} + 8 = 4$ |
| To isolate the radical, subtract 8 from both sides. | $\sqrt[3]{5 x + 1} = -4$ |
| Cube both sides of the equation. | $\left(\sqrt[3]{5 x + 1}\right)^{3} = \left(-4\right)^{3}$ |
| Simplify. | $5 x + 1 = -64$ |
| Solve the equation. | $5 x = -65$ |
|  | $x = -13$ |
| Check the answer. | $\sqrt[3]{5(-13)+1}+8=\sqrt[3]{-64}+8=-4+8=4$ |
|  | The solution is $x = -13.$ |

{{< fillin
  question="Solve: $\sqrt[3]{4 x - 3} + 8 = 5$"
  answer="x = -6"
  answerDisplay="$x = -6$"
  hint="Isolate the cube-root expression, cube both sides, and solve the resulting linear equation."
>}}

{{< fillin
  question="Solve: $\sqrt[3]{6 x - 10} + 1 = -3$"
  answer="x = -9"
  answerDisplay="$x = -9$"
  hint="Isolate the cube-root expression, cube both sides, and solve the resulting linear equation."
>}}

Sometimes an equation will contain rational exponents instead of a radical. We use the same techniques to solve the equation as when we have a radical. We raise each side of the equation to the power of the denominator of the rational exponent. Since $\left(a^{m}\right)^{n} = a^{m \cdot n},$ we have for example,

$$\left(x^{\tfrac{1}{2}}\right)^{2} = x, \left(x^{\tfrac{1}{3}}\right)^{3} = x$$

Remember, $x^{\tfrac{1}{2}} = \sqrt{x}$ and $x^{\tfrac{1}{3}} = \sqrt[3]{x}.$

**Example.**

Solve: $\left(3 x - 2\right)^{\tfrac{1}{4}} + 3 = 5.$

| Step | Result |
| --- | --- |
|  | $\left(3 x - 2\right)^{\frac{1}{4}} + 3 = 5$ |
| To isolate the term with the rational exponent,subtract 3 from both sides. | $\left(3 x - 2\right)^{\frac{1}{4}} = 2$ |
| Raise each side of the equation to the fourth power. | $\left(\left(3 x - 2\right)^{\frac{1}{4}}\right)^{4} = \left(2\right)^{4}$ |
| Simplify. | $3 x - 2 = 16$ |
| Solve the equation. | $3 x = 18$ |
|  | $x = 6$ |
| Check the answer. | $\left(3(6)-2\right)^{\tfrac{1}{4}}+3=16^{\tfrac{1}{4}}+3=2+3=5$ |
|  | The solution is $x = 6.$ |

{{< fillin
  question="Solve: $\left(9 x + 9\right)^{\tfrac{1}{4}} - 2 = 1$"
  answer="x = 8"
  answerDisplay="$x = 8$"
  hint="Isolate the fourth-power expression, raise both sides to the fourth power, and check the result."
>}}

{{< fillin
  question="Solve: $\left(4 x - 8\right)^{\tfrac{1}{4}} + 5 = 7$"
  answer="x = 6"
  answerDisplay="$x = 6$"
  hint="Isolate the fourth-power expression, raise both sides to the fourth power, and check the result."
>}}

Sometimes the solution of a radical equation results in two algebraic solutions, but one of them may be an extraneous solution!

**Example.**

Solve: $\sqrt{r + 4} - r + 2 = 0.$

| Step | Result |
| --- | --- |
|  | $\sqrt{r + 4} - r + 2 = 0$ |
| Isolate the radical. | $\sqrt{r + 4} = r - 2$ |
| Square both sides of the equation. | $\left(\sqrt{r + 4}\right)^{2} = \left(r - 2\right)^{2}$ |
| Simplify and then solve the equation | $r + 4 = r^{2} - 4 r + 4$ |
| It is a quadratic equation, so get zero on one side. | $0 = r^{2} - 5 r$ |
| Factor the right side. | $0 = r \left(r - 5\right)$ |
| Use the Zero Product Property. | $0=r\quad\text{or}\quad0=r-5$ |
| Solve the equation. | $r=0\quad\text{or}\quad r=5$ |
| Check $r=0$. | $\sqrt{0+4}-0+2=4\neq0,$ so $r=0$ is extraneous. |
| Check $r=5$. | $\sqrt{5+4}-5+2=0,$ so the solution is $r=5.$ |

{{< fillin
  question="Solve: $\sqrt{m + 9} - m + 3 = 0$"
  answer="m = 7"
  answerDisplay="$m = 7$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

{{< fillin
  question="Solve: $\sqrt{n + 1} - n + 1 = 0$"
  answer="n = 3"
  answerDisplay="$n = 3$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

When there is a coefficient in front of the radical, we must raise it to the power of the index, too.

**Example.**

Solve: $\text{3}\ \sqrt{3 x - 5} - 8 = 4.$

| Step | Result |
| --- | --- |
|  | $\text{3}\ \sqrt{3 x - 5} - 8 = 4$ |
| Isolate the radical term. | $3 \sqrt{3 x - 5} = 12$ |
| Isolate the radical by dividing both sides by 3. | $\sqrt{3 x - 5} = 4$ |
| Square both sides of the equation. | $\left(\sqrt{3 x - 5}\right)^{2} = \left(4\right)^{2}$ |
| Simplify, then solve the new equation. | $3 x - 5 = 16$ |
|  | $3 x = 21$ |
| Solve the equation. | $x = 7$ |
| Check the answer. | $3\sqrt{3(7)-5}-8=3\sqrt{16}-8=12-8=4$ |
|  | The solution is $x = 7.$ |

{{< fillin
  question="Solve: $2 \sqrt{4 a + 4} - 16 = 16$"
  answer="a = 63"
  answerDisplay="$a = 63$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

{{< fillin
  question="Solve: $3 \sqrt{2 b + 3} - 25 = 50$"
  answer="b = 311"
  answerDisplay="$b = 311$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

## Solve Radical Equations with Two Radicals

If the radical equation has two radicals, we start out by isolating one of them. It often works out easiest to isolate the more complicated radical first.

In the next example, when one radical is isolated, the second radical is also isolated.

**Example.**

Solve: $\sqrt[3]{4 x - 3} = \sqrt[3]{3 x + 2}.$

| Step | Result |
| --- | --- |
| The radical terms are isolated. | $\sqrt[3]{4 x - 3} = \sqrt[3]{3 x + 2}$ |
| Since the index is 3, cube both sides of theequation. | $\left(\sqrt[3]{4 x - 3}\right)^{3} = \left(\sqrt[3]{3 x + 2}\right)^{3}$ |
| Simplify, then solve the new equation. | $4 x - 3 = 3 x + 2$ |
|  | $x - 3 = 2$ |
|  | $x = 5$ |
|  | $\text{The solution is}\ x = 5.$ |
| Check the answer. |  |
| We leave it to you to show that 5 checks! |  |

{{< fillin
  question="Solve: $\sqrt[3]{5 x - 4} = \sqrt[3]{2 x + 5}$"
  answer="x = 3"
  answerDisplay="$x = 3$"
  hint="Isolate the cube-root expression, cube both sides, and solve the resulting linear equation."
>}}

{{< fillin
  question="Solve: $\sqrt[3]{7 x + 1} = \sqrt[3]{2 x - 5}$"
  answer="x = - \tfrac{6}{5}"
  answerDisplay="$x = - \tfrac{6}{5}$"
  hint="Isolate the cube-root expression, cube both sides, and solve the resulting linear equation."
>}}

Sometimes after raising both sides of an equation to a power, we still have a variable inside a radical. When that happens, we repeat Step 1 and Step 2 of our procedure. We isolate the radical and raise both sides of the equation to the power of the index again.

**Example.**

#### How to Solve a Radical Equation

Solve: $\sqrt{m} + 1 = \sqrt{m + 9}.$

| Step | Result |
| --- | --- |
| 1. Isolate one radical. The radical on the right is already isolated. | $\sqrt{m}+1=\sqrt{m+9}$ |
| 2. Square both sides. | $\left(\sqrt{m}+1\right)^2=\left(\sqrt{m+9}\right)^2$ |
| Simplify carefully. | $m+2\sqrt{m}+1=m+9$ |
| 3. Isolate the remaining radical. | $2\sqrt{m}=8$ |
| Divide both sides by 2. | $\sqrt{m}=4$ |
| Square both sides again. | $\left(\sqrt{m}\right)^2=4^2$ |
| Solve. | $m=16$ |
| 4. Check the answer. | $\sqrt{16}+1=\sqrt{16+9}$ |
| Simplify. | $4+1=5$ |

{{< fillin
  question="Solve: $3 - \sqrt{x} = \sqrt{x - 3}$"
  answer="x = 4"
  answerDisplay="$x = 4$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

{{< fillin
  question="Solve: $\sqrt{x} + 2 = \sqrt{x + 16}$"
  answer="x = 9"
  answerDisplay="$x = 9$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

We summarize the steps here. We have adjusted our previous steps to include more than one radical in the equation This procedure will now work for any radical equations.

### How To

#### Solve a radical equation.

1.  Step 1. Isolate one of the radical terms on one side of the equation.
2.  Step 2. Raise both sides of the equation to the power of the index.
3.  Step 3. Are there any more radicals?
    If yes, repeat Step 1 and Step 2 again.
    If no, solve the new equation.
4.  Step 4. Check the answer in the original equation.

Be careful as you square binomials in the next example. Remember the pattern is $\left(a + b\right)^{2} = a^{2} + 2 a b + b^{2}$ or $\left(a - b\right)^{2} = a^{2} - 2 a b + b^{2}.$

**Example.**

Solve: $\sqrt{q - 2} + 3 = \sqrt{4 q + 1}.$

| Step | Result |
| --- | --- |
|  | $\sqrt{q-2}+3=\sqrt{4q+1}$ |
| The radical on the right is isolated. Square both sides. | $\left(\sqrt{q-2}+3\right)^2=\left(\sqrt{4q+1}\right)^2$ |
| Simplify. | $q-2+6\sqrt{q-2}+9=4q+1$ |
| There is still a radical in the equation, so repeat the previous steps. Isolate the radical. | $6\sqrt{q-2}=3q-6$ |
| Square both sides. Remember to square both the 6 and $\sqrt{q-2}.$ | $\left(6\sqrt{q-2}\right)^2=(3q-6)^2$ |
| Expand the squares. | $6^2\left(\sqrt{q-2}\right)^2=(3q)^2-2(3q)(6)+6^2$ |
| Simplify, then solve the new equation. | $36(q-2)=9q^2-36q+36$ |
| Distribute. | $36q-72=9q^2-36q+36$ |
| It is a quadratic equation, so get zero on one side. | $0=9q^2-72q+108$ |
| Factor the right side. | $0=9(q-6)(q-2)$ |
| Use the Zero Product Property. | $q-6=0\quad\text{or}\quad q-2=0$ |
| Solve each equation. | $q=6\quad\text{or}\quad q=2$ |
| The checks are left to you. | The solutions are $q = 6$ and $q = 2.$ |

{{< fillin
  question="Solve: $\sqrt{x - 1} + 2 = \sqrt{2 x + 6}$"
  answer="x = 5"
  answerDisplay="$x = 5$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

{{< fillin
  question="Solve: $\sqrt{x} + 2 = \sqrt{3 x + 4}$. Enter both solutions, separated by a comma."
  answer="0,4"
  answerMode="unordered"
  answerDisplay="$x=0$ or $x=4$"
  hint="Isolate the radical, square both sides, solve the resulting equation, and check for extraneous solutions."
>}}

## Use Radicals in Applications

As you progress through your college courses, you’ll encounter formulas that include radicals in many disciplines. We will modify our Problem Solving Strategy for Geometry Applications slightly to give us a plan for solving applications with formulas from any discipline.

### How To

#### Use a problem solving strategy for applications with formulas.

1.  Step 1. **Read** the problem and make sure all the words and ideas are understood. When appropriate, draw a figure and label it with the given information.
2.  Step 2. **Identify** what we are looking for.
3.  Step 3. **Name** what we are looking for by choosing a variable to represent it.
4.  Step 4. **Translate** into an equation by writing the appropriate formula or model for the situation. Substitute in the given information.
5.  Step 5. **Solve the equation** using good algebra techniques.
6.  Step 6. **Check** the answer in the problem and make sure it makes sense.
7.  Step 7. **Answer** the question with a complete sentence.

One application of radicals has to do with the effect of gravity on falling objects. The formula allows us to determine how long it will take a fallen object to hit the gound.

### Falling Objects

On Earth, if an object is dropped from a height of *h* feet, the time in seconds it will take to reach the ground is found by using the formula

$$t = \tfrac{\sqrt{h}}{4}.$$

For example, if an object is dropped from a height of 64 feet, we can find the time it takes to reach the ground by substituting $h = 64$ into the formula.

| Step | Result |
| --- | --- |
|  | $t=\tfrac{\sqrt{h}}{4}$ |
| Substitute $h=64$. | $t=\tfrac{\sqrt{64}}{4}$ |
| Take the square root of 64. | $t=\tfrac{8}{4}$ |
| Simplify the fraction. | $t=2$ |

It would take 2 seconds for an object dropped from a height of 64 feet to reach the ground.

**Example.**

Marissa dropped her sunglasses from a bridge 400 feet above a river. Use the formula $t = \tfrac{\sqrt{h}}{4}$ to find how many seconds it took for the sunglasses to reach the river.

| Step | Result |
| --- | --- |
| Step 1. Read the problem. |  |
| Step 2. Identify what we are looking for. | the time it takes for thesunglasses to reach the river |
| Step 3. Name what we are looking. | Let $t =$ time. |
| Step 4. Translate into an equation by writing the appropriate formula. Substitute in the given information. | $t=\tfrac{\sqrt{400}}{4}$ |
| Step 5. Solve the equation. | $t=\tfrac{20}{4}$ |
|  | $t=5$ |
| Step 6. Check the answer in the problem and make sure it makes sense. | $5=\tfrac{\sqrt{400}}{4}=\tfrac{20}{4}=5$ |
| Does 5 seconds seem like a reasonable length oftime? | Yes. |
| Step 7. Answer the question. | It will take 5 seconds for thesunglasses to reach the river. |

{{< fillin
  question="A helicopter dropped a rescue package from a height of 1,296 feet. Use the formula $t = \tfrac{\sqrt{h}}{4}$ to find how many seconds it took for the package to reach the ground."
  answer="9"
  answerDisplay="9 seconds"
  hint="Substitute the given measurement into the stated formula, evaluate the square root, and apply the requested rounding."
>}}

{{< fillin
  question="A window washer dropped a squeegee from a platform 196 feet above the sidewalk Use the formula $t = \tfrac{\sqrt{h}}{4}$ to find how many seconds it took for the squeegee to reach the sidewalk."
  answer="3.5"
  answerDisplay="$3.5$ seconds"
  hint="Substitute the given measurement into the stated formula, evaluate the square root, and apply the requested rounding."
>}}

Police officers investigating car accidents measure the length of the skid marks on the pavement. Then they use square roots to determine the speed, in miles per hour, a car was going before applying the brakes.

### Skid Marks and Speed of a Car

If the length of the skid marks is *d* feet, then the speed, *s*, of the car before the brakes were applied can be found by using the formula

$$s = \sqrt{24 d}$$

**Example.**

After a car accident, the skid marks for one car measured 190 feet. Use the formula $s = \sqrt{24 d}$ to find the speed of the car before the brakes were applied. Round your answer to the nearest tenth.

| Step | Result |
| --- | --- |
| Step 1. Read the problem |  |
| Step 2. Identify what we are looking for. | the speed of a car |
| Step 3. Name what weare looking for, | Let $s =$ the speed. |
| Step 4. Translate into an equation by writing the appropriate formula. Substitute in the given information. | $s=\sqrt{24(190)}$ |
| Step 5. Solve the equation. | $s=\sqrt{4{,}560}$ |
|  | $s=67.52777\ldots$ |
| Round to 1 decimal place. | $s\approx67.5$ |
| Step 6. Check the answer. | $67.5\approx\sqrt{24(190)}=\sqrt{4{,}560}\approx67.5277$ |
|  | The speed of the car before the brakes were appliedwas 67.5 miles per hour. |

{{< fillin
  question="An accident investigator measured the skid marks of the car. The length of the skid marks was 76 feet. Use the formula $s = \sqrt{24 d}$ to find the speed of the car before the brakes were applied. Round your answer to the nearest tenth."
  answer="42.7"
  answerDisplay="$42.7$ miles per hour"
  hint="Substitute the given measurement into the stated formula, evaluate the square root, and apply the requested rounding."
>}}

{{< fillin
  question="The skid marks of a vehicle involved in an accident were 122 feet long. Use the formula $s = \sqrt{24 d}$ to find the speed of the vehicle before the brakes were applied. Round your answer to the nearest tenth."
  answer="54.1"
  answerDisplay="$54.1$ miles per hour"
  hint="Substitute the given measurement into the stated formula, evaluate the square root, and apply the requested rounding."
>}}

## Practice

### Solve Radical Equations

{{< fillin
  question="Solve: $\sqrt{5x - 6} = 8$"
  answer="x = 14"
  answerDisplay="$x = 14$"
  hint="Square both sides to eliminate the radical, solve the resulting linear equation, and check the answer in the original equation."
>}}

{{< multiplechoice
  question="Solve: $\sqrt{5x + 1} = -3$"
  answer="no solution"
  hint="A principal square root is never negative, so check whether the isolated radical is being set equal to a negative number before you square."
>}}
no solution
$x = \tfrac{8}{5}$
{{< /multiplechoice >}}

{{< fillin
  question="Solve: $\sqrt{u - 3} + 3 = u$. Enter both solutions, separated by a comma."
  answer="u = 3 , u = 4"
  answerMode="unordered"
  answerDisplay="$u = 3$ or $u = 4$"
  hint="Isolate the radical, square both sides, solve the resulting quadratic equation, and check both candidate solutions in the original equation."
>}}

### Solve Radical Equations with Two Radicals

{{< fillin
  question="Solve: $\sqrt{3u + 7} = \sqrt{5u + 1}$"
  answer="u = 3"
  answerDisplay="$u = 3$"
  hint="Since both radicals are already isolated, square both sides, solve the resulting linear equation, and check the answer in the original equation."
>}}

{{< fillin
  question="Solve: $\sqrt{a} + 2 = \sqrt{a + 4}$"
  answer="a = 0"
  answerDisplay="$a = 0$"
  hint="Square both sides, simplify, isolate the remaining radical, and check the answer in the original equation."
>}}

{{< fillin
  question="Solve: $\sqrt[3]{2 x^2 + 9 x - 18} = \sqrt[3]{x^2 + 3 x - 2}$. Enter both solutions, separated by a comma."
  answer="x = -8 , x = 2"
  answerMode="unordered"
  answerDisplay="$x = -8$ or $x = 2$"
  hint="Since both sides have the same index, cube both sides, solve the resulting quadratic equation, and check each candidate solution in the original equation."
>}}

### Use Radicals in Applications

{{< fillin
  question="Reed wants to have a square garden plot in his backyard. He has enough compost to cover an area of 75 square feet. Use the formula $s = \sqrt{A}$ to find the length of each side of his garden, rounded to the nearest tenth of a foot."
  answer="8.7"
  answerDisplay="$8.7$ feet"
  hint="Substitute the given area into the formula, evaluate the square root, and round to the nearest tenth."
>}}

{{< fillin
  question="A hang glider dropped his cell phone from a height of 350 feet. Use the formula $t = \tfrac{\sqrt{h}}{4}$ to find how many seconds it took for the cell phone to reach the ground, rounded to the nearest tenth."
  answer="4.7"
  answerDisplay="$4.7$ seconds"
  hint="Substitute the given height into the falling-object formula, evaluate the square root, divide by 4, and round to the nearest tenth."
>}}

{{< fillin
  question="The skid marks for a car involved in an accident measured 216 feet. Use the formula $s = \sqrt{24 d}$ to find the speed of the car before the brakes were applied, in miles per hour."
  answer="72"
  answerDisplay="$72$ miles per hour"
  hint="Substitute the given skid-mark length into the speed formula and evaluate the square root; this radicand is a perfect square, so no rounding is needed."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 8.6: Solve Radical Equations](https://openstax.org/books/intermediate-algebra-2e/pages/8-6-solve-radical-equations) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted worked solutions for the web; omitted the Be Prepared quiz, media links, and self-check reflection; converted the source Try It practice into interactive exercises; and adapted selected end-of-section exercises into an interactive Practice block.</small>
