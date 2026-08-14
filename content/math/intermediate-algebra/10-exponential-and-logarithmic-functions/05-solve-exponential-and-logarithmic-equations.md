---
title: Solve Exponential and Logarithmic Equations
description: >-
  Solving exponential equations and logarithmic equations and using exponential and logarithmic models in applications.
source_section: "10.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve logarithmic equations using the properties of logarithms
- Solve exponential equations using logarithms
- Use exponential models in applications
{{< /callout >}}

## Solve Logarithmic Equations Using the Properties of Logarithms

In the section on logarithmic functions, we solved some equations by rewriting the equation in exponential form. Now that we have the properties of logarithms, we have additional methods we can use to solve logarithmic equations.

If our equation has two logarithms we can use a property that says that if ${\text{log}}_{a}M={\text{log}}_{a}N$ then it is true that $M=N.$ This is the One-to-One Property of Logarithmic Equations.

{{< callout type="info" >}}
**One-to-One Property of Logarithmic Equations.** For $M>0,N>0,\text{a}\text{>}0,$ and $\text{a}\ne 1$ is any real number:

$$
\text{if }\log_a M=\log_a N,\text{ then }M=N.
$$
{{< /callout >}}

To use this property, we must be certain that both sides of the equation are written with the same base.

Remember that logarithms are defined only for positive real numbers. Check your results in the original equation. You may have obtained a result that gives a logarithm of zero or a negative number.

**Example 10.38.** Solve: $2{\text{log}}_{5}x={\text{log}}_{5}81.$

**Solution.**

|  | $2\log_{5}x=\log_{5}81$ |
| --- | --- |
| Use the Power Property. | $\log_{5}{x}^{2}=\log_{5}81$ |
| Use the One-to-One Property, if $\log_{a}M=\log_{a}N$, then $M=N$. | ${x}^{2}=81$ |
| Solve using the Square Root Property. | $x=\pm9$ |
| We eliminate $x=-9$ because the logarithm of a negative number is undefined. | $x=9$ |
| Check. |  |
| $\begin{array}{rcl}2\log_{5}9&=&\log_{5}81\\[4pt]\log_{5}(9^2)&=&\log_{5}81\\[4pt]\log_{5}81&=&\log_{5}81\ \checkmark\end{array}$ |  |

{{< fillin
  question="Solve $2\log_3x=\log_3 36$."
  answer="6"
  answerDisplay="$x=6$"
  hint="Use the Power Property to rewrite the left side, then equate the logarithm arguments."
>}}

{{< fillin
  question="Solve $3\log x=\log64$."
  answer="4"
  answerDisplay="$x=4$"
  hint="Rewrite $3\log x$ as $\log(x^3)$."
>}}

Another strategy to use to solve logarithmic equations is to condense sums or differences into a single logarithm.

**Example 10.39.** Solve: ${\text{log}}_{3}x+{\text{log}}_{3}(x-8)=2.$

**Solution.**

|  | $\log_{3}x+\log_{3}(x-8)=2$ |
| --- | --- |
| Use the Product Property, $\log_{a}M+\log_{a}N=\log_{a}(M\cdot N)$. | $\log_{3}(x(x-8))=2$ |
| Rewrite in exponential form. | ${3}^{2}=x(x-8)$ |
| Simplify. | $9={x}^{2}-8x$ |
| Subtract 9 from each side. | $0={x}^{2}-8x-9$ |
| Factor. | $0=(x-9)(x+1)$ |
| Use the Zero-Product Property. | $x-9=0,x+1=0$ |
| Solve each equation. | $x=9,x=-1$ |
| Check. |  |
| $\begin{array}{rcl}x=-1:\quad \log_{3}x+\log_{3}(x-8)&=&2\\[4pt]\log_{3}(-1)+\log_{3}(-9)&=&2\end{array}$ |  |
| We cannot take the log of a negative number. |  |
| $\begin{array}{rcl}x=9:\quad \log_{3}x+\log_{3}(x-8)&=&2\\[4pt]\log_{3}9+\log_{3}1&=&2\\[4pt]2+0&=&2\ \checkmark\end{array}$ |  |

{{< fillin
  question="Solve $\log_2x+\log_2(x-2)=3$."
  answer="4"
  answerDisplay="$x=4$"
  hint="Combine the logarithms, rewrite in exponential form, and reject values outside the logarithm domains."
>}}

{{< fillin
  question="Solve $\log_2x+\log_2(x-6)=4$."
  answer="8"
  answerDisplay="$x=8$"
  hint="Use the Product Property, convert to exponential form, and check both logarithm arguments."
>}}

When there are logarithms on both sides, we condense each side into a single logarithm. Remember to use the Power Property as needed.

**Example 10.40.** Solve: ${\text{log}}_{4}(x+6)-{\text{log}}_{4}(2x+5)=-{\text{log}}_{4}x.$

**Solution.**

|  | ${\text{log}}_{4}(x+6)-{\text{log}}_{4}(2x+5)=-{\text{log}}_{4}x$ |
| --- | --- |
| Use the Quotient Property on the left side and the Power Property on the right. | ${\text{log}}_{4}(\tfrac{x+6}{2x+5})={\text{log}}_{4}{x}^{-1}$ |
| Rewrite ${x}^{-1}=\tfrac{1}{x}$. | ${\text{log}}_{4}(\tfrac{x+6}{2x+5})={\text{log}}_{4}\tfrac{1}{x}$ |
| Use the One-to-One Property, if ${\text{log}}_{a}M={\text{log}}_{a}N$, then $M=N$. | $\tfrac{x+6}{2x+5}=\tfrac{1}{x}$ |
| Solve the rational equation. | $x(x+6)=2x+5$ |
| Distribute. | ${x}^{2}+6x=2x+5$ |
| Write in standard form. | ${x}^{2}+4x-5=0$ |
| Factor. | $(x+5)(x-1)=0$ |
| Use the Zero-Product Property. | $x+5=0,x-1=0$ |
| Solve each equation. | $x=-5,x=1$ |
| Check. |  |
| We leave the check for you. |  |

{{< fillin
  question="Solve $\log(x+2)-\log(4x+3)=-\log x$."
  answer="3"
  answerDisplay="$x=3$"
  hint="Use the Quotient Property and rewrite $-\log x$ as $\log(\tfrac1x)$."
>}}

{{< fillin
  question="Solve $\log(x-2)-\log(4x+16)=\log(\tfrac1x)$."
  answer="8"
  answerDisplay="$x=8$"
  hint="Combine the left side as one logarithm, equate arguments, and check the domain."
>}}

## Solve Exponential Equations Using Logarithms

In the section on exponential functions, we solved some equations by writing both sides of the equation with the same base. Next we wrote a new equation by setting the exponents equal.

It is not always possible or convenient to write the expressions with the same base. In that case we often take the common logarithm or natural logarithm of both sides once the exponential is isolated.

**Example 10.41.** Solve ${5}^{x}=11.$ Find the exact answer and then approximate it to three decimal places.

**Solution.**

|  | $\begin{array}{llllll}{5}^{x} & = & 11 \\\end{array}$ |
| --- | --- |
| Since the exponential is isolated, take the logarithm of both sides.Use the Power Property to get the $x$ as a factor, not an exponent.Solve for $x.$ Find the exact answer.Approximate the answer. | $\begin{array}{llllll}\text{log}{5}^{x} & = & \text{log}11 \\x\text{log}5 & = & \text{log}11 \\x & = & \tfrac{\text{log}11}{\text{log}5} \\x & \approx & 1.490 \\\end{array}$ |
| Since ${5}^{1}=5$ and ${5}^{2}=25,$ does it makes sense that ${5}^{1.490}\approx 11?$ |  |

{{< fillin
  question="Solve $7^x=43$. Enter the exact answer; the feedback also gives its three-decimal approximation."
  answer="\frac{\log 43}{\log 7}"
  answerDisplay="$x=\tfrac{\log43}{\log7}\approx1.933$"
  hint="Take a logarithm of both sides and use the Power Property."
>}}

{{< fillin
  question="Solve $8^x=98$. Enter the exact answer; the feedback also gives its three-decimal approximation."
  answer="\frac{\log 98}{\log 8}"
  answerDisplay="$x=\tfrac{\log98}{\log8}\approx2.205$"
  hint="Take a logarithm of both sides and isolate $x$."
>}}

When we take the logarithm of both sides we will get the same result whether we use the common or the natural logarithm (try using the natural log in the last example. Did you get the same result?) When the exponential has base e, we use the natural logarithm.

**Example 10.42.** Solve $3{e}^{x+2}=24.$ Find the exact answer and then approximate it to three decimal places.

**Solution.**

|  | $3{e}^{x+2}=24$ |
| --- | --- |
| Isolate the exponential by dividing both sides by 3. | ${e}^{x+2}=8$ |
| Take the natural logarithm of both sides. | $\text{ln}{e}^{x+2}=\text{ln}8$ |
| Use the Power Property to get the $x$ as a factor, not an exponent. | $(x+2)\text{ln}e=\text{ln}8$ |
| Use the property $\text{ln}e=1$ to simplify. | $x+2=\text{ln}8$ |
| Solve the equation. Find the exact answer. | $x=\text{ln}8-2$ |
| Approximate the answer. | $x\approx 0.079$ |

{{< fillin
  question="Solve $2e^{x-2}=18$. Enter the exact answer; the feedback also gives its three-decimal approximation."
  answer="\ln 9+2"
  answerDisplay="$x=\ln9+2\approx4.197$"
  hint="First isolate the exponential, then take the natural logarithm."
>}}

{{< fillin
  question="Solve $5e^{2x}=25$. Enter the exact answer; the feedback also gives its three-decimal approximation."
  answer="\frac{\ln 5}{2}"
  answerDisplay="$x=\tfrac{\ln5}{2}\approx0.805$"
  hint="Divide by 5, take the natural logarithm, and solve for $x$."
>}}

## Use Exponential Models in Applications

In previous sections we were able to solve some applications that were modeled with exponential equations. Now that we have so many more options to solve these equations, we are able to solve more applications.

We will again use the Compound Interest Formulas and so we list them here for reference.

{{< callout type="info" >}}
**Compound Interest.** For a principal, P, invested at an interest rate, r, for t years, the new balance, A is:

$$
A=P\left(1+\tfrac{r}{n}\right)^{nt}
\quad\text{when interest is compounded }n\text{ times per year},
$$

and

$$
A=Pe^{rt}
\quad\text{when interest is compounded continuously}.
$$
{{< /callout >}}

**Example 10.43.** Jermael’s parents put $10,000 in investments for his college expenses on his first birthday. They hope the investments will be worth $50,000 when he turns 18. If the interest compounds continuously, approximately what rate of growth will they need to achieve their goal?

**Solution.**

|  | $A=50{,}000$ |
| --- | --- |
|  | $P=10{,}000$ |
| Identify the variables in the formula | $r=?$ |
|  | $t=17\text{years}$ |
|  | $A=P{e}^{rt}$ |
| Substitute the values into the formula. | $50,000=10,000{e}^{r\cdot 17}$ |
| Solve for $r.$ Divide each side by 10,000. | $5={e}^{17r}$ |
| Take the natural log of each side. | $\text{ln}5=\text{ln}{e}^{17r}$ |
| Use the Power Property. | $\text{ln}5=17r\text{ln}e$ |
| Simplify. | $\text{ln}5=17r$ |
| Divide each side by 17. | $\tfrac{\text{ln}5}{17}=r$ |
| Approximate the answer. | $r\approx 0.095$ |
| Convert to a percentage. | $r\approx 9.5\%$ |
|  | They need the rate of growth to be approximately $9.5\%$. |

{{< fillin
  question="Hector invests \$10,000 at age 21 and wants \$150,000 at age 50. With continuous compounding, what annual growth rate is required? Enter a percent."
  answer="9.3\%"
  answerForm="percent"
  answerDisplay="$r\approx9.3\%$"
  hint="Use $150{,}000=10{,}000e^{29r}$ and solve for $r$."
  placeholder="percent"
>}}

{{< fillin
  question="Rachel invests \$15,000 at age 25 and wants \$90,000 at age 40. With continuous compounding, what annual growth rate is required? Enter a percent."
  answer="11.9\%"
  answerForm="percent"
  answerDisplay="$r\approx11.9\%$"
  hint="Use $90{,}000=15{,}000e^{15r}$ and solve for $r$."
  placeholder="percent"
>}}

We have seen that growth and decay are modeled by exponential functions. For growth and decay we use the formula $A={A}_{0}{e}^{kt}.$ Exponential growth has a positive rate of growth or growth constant, $k$, and exponential decay has a negative rate of growth or decay constant, k.

{{< callout type="info" >}}
**Exponential Growth and Decay.** For an original amount, ${A}_{0},$ that grows or decays at a rate, k, for a certain time, t, the final amount, A, is:

$$
A=A_0e^{kt}.
$$
{{< /callout >}}

We can now solve applications that give us enough information to determine the rate of growth. We can then use that rate of growth to predict other situations.

**Example 10.44.** Researchers recorded that a certain bacteria population grew from 100 to 300 in 3 hours. At this rate of growth, how many bacteria will there be 24 hours from the start of the experiment?

**Solution.**

This problem requires two main steps. First we must find the unknown rate, k. Then we use that value of k to help us find the unknown number of bacteria.

| Identify the variables in the formula. | $\begin{array}{llllll}A & = & 300 \\{A}_{0} & = & 100 \\k & = & ? \\t & = & 3\text{hours}\ \\A & = & {A}_{0}{e}^{kt} \\\end{array}$ |
| --- | --- |
| Substitute the values in the formula. | $300=100{e}^{k\cdot 3}$ |
| Solve for $k$. Divide each side by 100. | $3={e}^{3k}$ |
| Take the natural log of each side. | $\text{ln}3=\text{ln}{e}^{3k}$ |
| Use the Power Property. | $\text{ln}3=3k\text{ln}e$ |
| Simplify. | $\text{ln}3=3k$ |
| Divide each side by 3. | $\tfrac{\text{ln}3}{3}=k$ |
| Approximate the answer. | $k\approx 0.366$ |
| We use this rate of growth to predict the number of bacteria there will be in 24 hours. | $\begin{array}{llllll}A & = & ? \\{A}_{0} & = & 100 \\k & = & \tfrac{\text{ln}3}{3} \\t & = & 24\text{hours}\ \\A & = & {A}_{0}{e}^{kt} \\\end{array}$ |
| Substitute in the values. | $A=100{e}^{\tfrac{\text{ln}3}{3}\cdot 24}$ |
| Evaluate. | $A\approx 656,100$ |
|  | At this rate of growth, they can expect 656,100 bacteria. |

{{< fillin
  question="A bacteria population grows from 100 to 500 in 6 hours. At the same continuous growth rate, how many bacteria will there be after 24 hours?"
  answer="62500"
  answerDisplay="$62{,}500$ bacteria"
  hint="Six hours is one growth interval; determine how many such intervals occur in 24 hours."
>}}

{{< fillin
  question="A bacteria population declines from 700,000 to 400,000 in 5 hours. At the same decay rate, about how many bacteria will remain after 24 hours?"
  answer="47700"
  answerDisplay="about $47{,}700$ bacteria"
  hint="Use an exponential decay model with a 5-hour factor of $\tfrac47$, then evaluate it at 24 hours."
>}}

Radioactive substances decay or decompose according to the exponential decay formula. The amount of time it takes for the substance to decay to half of its original amount is called the half-life of the substance.

Similar to the previous example, we can use the given information to determine the constant of decay, and then use that constant to answer other questions.

**Example 10.45.** The half-life of radium-226 is 1,590 years. How much of a 100 mg sample will be left in 500 years?

**Solution.**

This problem requires two main steps. First we must find the decay constant k. If we start with 100-mg, at the half-life there will be 50-mg remaining. We will use this information to find k. Then we use that value of k to help us find the amount of sample that will be left in 500 years.

| Identify the variables in the formula. | $\begin{array}{llllll}A & = & 50 \\{A}_{0} & = & 100 \\k & = & ? \\t & = & 1590\text{years}\ \\A & = & {A}_{0}{e}^{kt} \\\end{array}$ |
| --- | --- |
| Substitute the values in the formula. | $50=100{e}^{k\cdot 1590}$ |
| Solve for $k$. Divide each side by 100. | $0.5={e}^{1590k}$ |
| Take the natural log of each side. | $\text{ln}0.5=\text{ln}{e}^{1590k}$ |
| Use the Power Property. | $\text{ln}0.5=1590k\text{ln}e$ |
| Simplify. | $\text{ln}0.5=1590k$ |
| Divide each side by 1590. | $\tfrac{\text{ln}0.5}{1590}=k\text{exact answer}$ |
| We use this rate of growth to predict the amount that will be left in 500 years. | $\begin{array}{llllll}A & = & ? \\{A}_{0} & = & 100 \\k & = & \tfrac{\text{ln}0.5}{1590} \\t & = & 500\text{years}\ \\A & = & {A}_{0}{e}^{kt} \\\end{array}$ |
| Substitute in the values. | $A=100{e}^{\tfrac{\text{ln}0.5}{1590}\cdot 500}$ |
| Evaluate. | $A\approx 80.4\text{mg}$ |
|  | In 500 years there would be approximately 80.4 mg remaining. |

{{< fillin
  question="The half-life of magnesium-27 is 9.45 minutes. How many milligrams of a 10-mg sample remain after 6 minutes?"
  answer="6.44"
  answerDisplay="about $6.44$ mg"
  hint="Use $A=10(\tfrac12)^{6/9.45}$."
>}}

{{< fillin
  question="The half-life of radioactive iodine is 60 days. How many milligrams of a 50-mg sample remain after 40 days?"
  answer="31.5"
  answerDisplay="about $31.5$ mg"
  hint="Use $A=50(\tfrac12)^{40/60}$."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and practice with solving exponential and logarithmic equations.
{{< /callout >}}

## Practice

### Solve logarithmic equations using the properties of logarithms

{{< fillin
  question="Solve $\log 49=2\log x$."
  answer="7"
  answerDisplay="$x=7$"
  hint="Rewrite $2\log x$ as $\log x^2$, equate the arguments, and reject the root that is not positive."
>}}

{{< fillin
  question="Solve $\log x+\log(x-15)=2$."
  answer="20"
  answerDisplay="$x=20$"
  hint="Combine the left side with the Product Property, rewrite in exponential form, and keep only the root satisfying $x>15$."
>}}

{{< fillin
  question="Solve $\log_5(x+1)+\log_5(x-5)=\log_5 7$."
  answer="6"
  answerDisplay="$x=6$"
  hint="Use the Product Property, apply the One-to-One Property, and keep only the root satisfying $x>5$."
>}}

### Solve exponential equations using logarithms

{{< fillin
  question="Solve $2^x=74$. Enter the exact answer; the feedback also gives its three-decimal approximation."
  answer="\frac{\log 74}{\log 2}"
  answerDisplay="$x=\tfrac{\log74}{\log2}\approx6.209$"
  hint="Take the logarithm of both sides and use the Power Property to bring the exponent down as a factor."
>}}

{{< fillin
  question="Solve $e^x=8$. Enter the exact answer; the feedback also gives its three-decimal approximation."
  answer="\ln 8"
  answerDisplay="$x=\ln8\approx2.079$"
  hint="Take the natural logarithm of both sides and use $\ln e=1$."
>}}

{{< fillin
  question="Solve $\tfrac{e^{x^2}}{e^x}=e^{20}$. Enter both solutions, separated by a comma."
  answer="-4,5"
  answerMode="unordered"
  answerDisplay="$x=-4$ or $x=5$"
  hint="The bases already match, so set the exponents equal and solve the resulting quadratic."
>}}

### Use exponential models in applications

{{< fillin
  question="Simone invests \$8,000 in an account that compounds interest quarterly and earns 5%. How long will it take for the money to double? Round to the nearest tenth of a year."
  answer="13.9"
  answerDisplay="about $13.9$ years"
  hint="Set $2=\left(1+\tfrac{0.05}{4}\right)^{4t}$, take the logarithm of both sides, and solve for $t$."
>}}

{{< fillin
  question="A bacteria population doubles every 24 hours. After 72 hours, the population is how many times as large as the original? Enter the multiplier."
  answer="8"
  answerDisplay="$8$ times the original population"
  hint="72 hours is three doubling periods, so multiply by 2 three times."
>}}

{{< fillin
  question="Technetium-99m has a half-life of 6 hours. About how many milliliters of a 0.5 ml injection remain in the body after 24 hours? Round to the nearest hundredth of a milliliter."
  answer="0.03"
  answerDisplay="about $0.03$ ml"
  hint="24 hours is four half-lives, so multiply 0.5 by $(\tfrac12)^4$."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.5: Solve Exponential and Logarithmic Equations](https://openstax.org/books/intermediate-algebra-2e/pages/10-5-solve-exponential-and-logarithmic-equations) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web; omitted the Be Prepared quiz and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and adapted selected end-of-section exercises into an interactive Practice block.</small>
