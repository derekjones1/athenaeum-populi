---
title: Add and Subtract Fractions with Different Denominators
description: >-
  Finding the least common denominator, converting fractions to equivalent
  forms with the LCD, adding and subtracting fractions with different
  denominators, simplifying complex fractions with the order of operations,
  and evaluating variable expressions with fractions — adapted from
  OpenStax Prealgebra 2e, Section 4.5.
source_section: "4.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find the least
  common denominator (LCD), convert fractions to equivalent fractions
  with the LCD, add and subtract fractions with different denominators,
  identify and use fraction operations, use the order of operations to
  simplify complex fractions, and evaluate variable expressions with
  fractions.
{{< /callout >}}

## Find the least common denominator

Can you add one quarter and one dime? Not directly — you'd first convert
them to a common unit, cents. One quarter is $25$ cents and one dime is
$10$ cents, so together they're worth $35$ cents, or $\tfrac{35}{100}$ of
a dollar.

Similarly, to add fractions with different denominators, we first convert
them to equivalent fractions with a common denominator.

Using fraction tiles to find a common denominator for $\tfrac{1}{2}$ and
$\tfrac{1}{3}$: fourths don't exactly cover both a half-tile and a
third-tile; fifths don't either; but sixths do — exactly three
$\tfrac{1}{6}$ tiles cover the $\tfrac{1}{2}$ tile, and exactly two cover
the $\tfrac{1}{3}$ tile. Twelfths would also work, since even smaller
tiles can always cover both. The denominator of the *smallest* piece that
covers both fractions is called the **least common denominator (LCD)**.
So the LCD of $\tfrac{1}{2}$ and $\tfrac{1}{3}$ is $6$ — the least common
multiple of the denominators $2$ and $3$.

{{< callout type="info" >}}
  **Least common denominator.** The least common denominator (LCD) of two
  fractions is the least common multiple (LCM) of their denominators.
{{< /callout >}}

To find the LCD of two fractions, we find the LCM of their denominators —
using only the denominators, not the numerators.

{{< callout type="info" >}}
  **Find the least common denominator (LCD) of two fractions.**

  1. Factor each denominator into its primes.
  2. List the primes, matching primes in columns when possible.
  3. Bring down the columns.
  4. Multiply the factors — the product is the LCM of the denominators.
  5. The LCM of the denominators is the LCD of the fractions.
{{< /callout >}}

**Example.** Find the LCD for the fractions $\tfrac{7}{12}$ and
$\tfrac{5}{18}$.

Factor each denominator into primes: $12 = 2 \cdot 2 \cdot 3$ and
$18 = 2 \cdot 3 \cdot 3$. Listing the primes in matching columns and
bringing each column down:

$$\text{LCM} = 2 \cdot 2 \cdot 3 \cdot 3 = 36$$

The LCM of $12$ and $18$ is $36$, so the LCD of $\tfrac{7}{12}$ and
$\tfrac{5}{18}$ is $36$.

{{< fillin
  question="Find the least common denominator for the fractions $\tfrac{13}{24}$ and $\tfrac{17}{32}$."
  answer="96"
  hint="Factor $24$ and $32$ into primes, match up common columns, then multiply every column down."
>}}

{{< fillin
  question="Find the least common denominator for the fractions $\tfrac{8}{15}$ and $\tfrac{11}{24}$."
  answer="120"
  hint="$15 = 3\cdot5$ and $24 = 2\cdot2\cdot2\cdot3$. Bring down every prime column, matching where possible."
>}}

## Convert fractions to equivalent fractions with the LCD

Earlier we saw that the LCD of $\tfrac{1}{4}$ and $\tfrac{1}{6}$ is $12$
— three $\tfrac{1}{12}$ pieces exactly cover $\tfrac{1}{4}$, and two cover
$\tfrac{1}{6}$, so $\tfrac{1}{4} = \tfrac{3}{12}$ and
$\tfrac{1}{6} = \tfrac{2}{12}$. We can find this algebraically using the
Equivalent Fractions Property, without models.

{{< callout type="info" >}}
  **Convert two fractions to equivalent fractions with their LCD as the
  common denominator.**

  1. Find the LCD.
  2. For each fraction, determine the number needed to multiply the
     denominator to get the LCD.
  3. Use the Equivalent Fractions Property to multiply both the numerator
     and denominator by that number.
  4. Simplify the numerator and denominator.
{{< /callout >}}

**Example.** Convert $\tfrac{1}{4}$ and $\tfrac{1}{6}$ to equivalent
fractions with denominator $12$, their LCD.

The number that multiplies $4$ to get $12$ is $3$; the number that
multiplies $6$ to get $12$ is $2$. Multiply the numerator and denominator
of each fraction by that number:

$$\frac{1 \cdot 3}{4 \cdot 3} = \frac{3}{12}, \qquad \frac{1 \cdot 2}{6 \cdot 2} = \frac{2}{12}$$

We do *not* reduce the resulting fractions — doing so would just get us
back to the original fractions and lose the common denominator.

{{< fillin
  question="Convert $\tfrac{3}{4}$ and $\tfrac{5}{6}$ to equivalent fractions with LCD 12. Enter the equivalent form of $\tfrac{3}{4}$."
  answer="\frac{9}{12}"
  answerDisplay="$\tfrac{9}{12}$"
  hint="$4$ times what number gives $12$? Multiply the numerator by that same number."
>}}

**Example.** Convert $\tfrac{8}{15}$ and $\tfrac{11}{24}$ to equivalent
fractions with denominator $120$, their LCD.

The number that multiplies $15$ to get $120$ is $8$; the number that
multiplies $24$ to get $120$ is $5$. Multiplying:

$$\frac{8 \cdot 8}{15 \cdot 8} = \frac{64}{120}, \qquad \frac{11 \cdot 5}{24 \cdot 5} = \frac{55}{120}$$

{{< fillin
  question="Convert $\tfrac{13}{24}$ and $\tfrac{17}{32}$ to equivalent fractions with LCD 96. Enter the equivalent form of $\tfrac{17}{32}$."
  answer="\frac{51}{96}"
  answerDisplay="$\tfrac{51}{96}$"
  hint="$32$ times what number gives $96$? Multiply the numerator by that same number."
>}}

## Add and subtract fractions with different denominators

Once two fractions share a common denominator, we can add or subtract
them by combining the numerators.

{{< callout type="info" >}}
  **Add or subtract fractions with different denominators.**

  1. Find the LCD.
  2. Convert each fraction to an equivalent form with the LCD as the
     denominator.
  3. Add or subtract the fractions.
  4. Write the result in simplified form.
{{< /callout >}}

**Example.** Add: $\tfrac{1}{2} + \tfrac{1}{3}$.

Find the LCD of $2$ and $3$: it's $6$. Convert each fraction:
$\tfrac{1 \cdot 3}{2 \cdot 3} + \tfrac{1 \cdot 2}{3 \cdot 2} = \tfrac{3}{6} + \tfrac{2}{6}$.
Add the numerators:

$$\frac{1}{2} + \frac{1}{3} = \frac{5}{6}$$

Since $5$ and $6$ have no common factors, this fraction cannot be reduced
further.

{{< fillin
  question="Add: $\tfrac{1}{4} + \tfrac{1}{3}$"
  answer="\frac{7}{12}"
  answerDisplay="$\tfrac{7}{12}$"
  hint="Find the LCD ($12$), convert each fraction, then add the numerators."
>}}

**Example.** Subtract: $\tfrac{1}{2} - \left(-\tfrac{1}{4}\right)$.

The LCD of $2$ and $4$ is $4$ — one fraction already has the LCD, so we
only need to convert the other: $\tfrac{1 \cdot 2}{2 \cdot 2} = \tfrac{2}{4}$.
Subtract:

$$\frac{1}{2} - \left(-\frac{1}{4}\right) = \frac{2-(-1)}{4} = \frac{3}{4}$$

{{< fillin
  question="Simplify: $\tfrac{1}{3} - \left(-\tfrac{1}{6}\right)$"
  answer="\frac{1}{2}"
  answerDisplay="$\tfrac{1}{2}$"
  hint="The LCD of $3$ and $6$ is $6$. Convert $\tfrac{1}{3}$ to sixths, then subtract."
>}}

**Example.** Add: $\tfrac{7}{12} + \tfrac{5}{18}$.

The LCD of $12$ and $18$ is $36$. Converting each fraction and adding:

$$\frac{7 \cdot 3}{12 \cdot 3} + \frac{5 \cdot 2}{18 \cdot 2} = \frac{21}{36} + \frac{10}{36} = \frac{31}{36}$$

Since $31$ is prime, it shares no factors with $36$, so the answer is
already simplified.

{{< fillin
  question="Add: $\tfrac{7}{12} + \tfrac{11}{15}$"
  answer="\frac{79}{60}"
  answerDisplay="$\tfrac{79}{60}$"
  hint="The LCD of $12$ and $15$ is $60$. Convert each fraction, then add the numerators."
>}}

When we use the Equivalent Fractions Property, there's a quick way to
find the number needed for each fraction: the "missing" factors of a
denominator (compared to the LCD's full factor list) tell you exactly
what to multiply by. For instance, if the LCD $36 = 2 \cdot 2 \cdot 3 \cdot 3$
and one denominator is $12 = 2 \cdot 2 \cdot 3$ (missing one factor of
$3$), multiply that fraction's numerator and denominator by $3$.

**Example.** Subtract: $\tfrac{7}{15} - \tfrac{19}{24}$.

The LCD of $15$ and $24$ is $120$. Rewriting as equivalent fractions with
denominator $120$ and subtracting, then removing the common factor of
$3$:

$$\frac{7}{15} - \frac{19}{24} = -\frac{13}{40}$$

{{< fillin
  question="Subtract: $\tfrac{13}{24} - \tfrac{17}{32}$"
  answer="\frac{1}{96}"
  answerDisplay="$\tfrac{1}{96}$"
  hint="The LCD of $24$ and $32$ is $96$. Convert each fraction to have that denominator, then subtract."
>}}

**Example.** Add: $-\tfrac{11}{30} + \tfrac{23}{42}$.

The LCD of $30$ and $42$ is $210$. Converting and adding, then removing
the common factor of $2$:

$$-\frac{11}{30} + \frac{23}{42} = \frac{19}{105}$$

{{< fillin
  question="Add: $-\tfrac{13}{42} + \tfrac{17}{35}$"
  answer="\frac{37}{210}"
  answerDisplay="$\tfrac{37}{210}$"
  hint="The LCD of $42$ and $35$ is $210$. Convert each fraction, then add the numerators and simplify."
>}}

When one fraction has a variable in its numerator, we follow the same
steps.

**Example.** Add: $\tfrac{3}{5} + \tfrac{x}{8}$.

The LCD of $5$ and $8$ is $40$. Rewriting as equivalent fractions:
$\tfrac{3 \cdot 8}{5 \cdot 8} + \tfrac{x \cdot 5}{8 \cdot 5} = \tfrac{24}{40} + \tfrac{5x}{40}$.
Adding the numerators:

$$\frac{3}{5} + \frac{x}{8} = \frac{24+5x}{40}$$

We cannot combine $24$ and $5x$ since they aren't like terms, so this is
fully simplified.

{{< fillin
  question="Add: $\tfrac{x}{6} + \tfrac{7}{15}$"
  answer="\frac{5x+14}{30}"
  answerDisplay="$\tfrac{5x+14}{30}$"
  hint="The LCD of $6$ and $15$ is $30$. Convert each fraction to that denominator, then add the numerators."
>}}

## Identify and use fraction operations

By now you've practiced all four fraction operations. Remember: you need
a common denominator to add or subtract fractions, but *not* to multiply
or divide them.

{{< callout type="info" >}}
  **Summary of fraction operations.**

  Fraction multiplication: $\tfrac{a}{b} \cdot \tfrac{c}{d} = \tfrac{ac}{bd}$
  — multiply the numerators and multiply the denominators.

  Fraction division: $\tfrac{a}{b} \div \tfrac{c}{d} = \tfrac{a}{b} \cdot \tfrac{d}{c}$
  — multiply the first fraction by the reciprocal of the second.

  Fraction addition: $\tfrac{a}{c} + \tfrac{b}{c} = \tfrac{a+b}{c}$ — add
  the numerators over a common denominator; if the denominators differ,
  convert to the LCD first.

  Fraction subtraction: $\tfrac{a}{c} - \tfrac{b}{c} = \tfrac{a-b}{c}$ —
  subtract the numerators over a common denominator; if the denominators
  differ, convert to the LCD first.
{{< /callout >}}

**Example.** Simplify: (a) $-\tfrac{1}{4} + \tfrac{1}{6}$; (b)
$-\tfrac{1}{4} \div \tfrac{1}{6}$.

(a) The operation is addition. The LCD of $4$ and $6$ is $12$. Convert:
$-\tfrac{3}{12} + \tfrac{2}{12} = -\tfrac{1}{12}$.

(b) The operation is division — no common denominator is needed. Multiply
by the reciprocal of the second fraction:
$-\tfrac{1}{4} \cdot \tfrac{6}{1} = -\tfrac{6}{4} = -\tfrac{3}{2}$.

{{< fillin
  question="Simplify: $-\tfrac{3}{4} - \tfrac{1}{6}$ (this is subtraction, not division)"
  answer="-\frac{11}{12}"
  answerDisplay="$-\tfrac{11}{12}$"
  hint="The LCD of $4$ and $6$ is $12$. Convert each fraction, then subtract the numerators."
>}}

{{< fillin
  question="Simplify: $-\tfrac{3}{4} \cdot \tfrac{1}{6}$ (this is multiplication)"
  answer="-\frac{1}{8}"
  answerDisplay="$-\tfrac{1}{8}$"
  hint="No common denominator is needed for multiplication — just multiply straight across."
>}}

**Example.** Simplify: (a) $\tfrac{5x}{6} - \tfrac{3}{10}$; (b)
$\tfrac{5x}{6} \cdot \tfrac{3}{10}$.

(a) The operation is subtraction, and the fractions don't share a
denominator. The LCD of $6$ and $10$ is $30$. Rewriting:
$\tfrac{25x}{30} - \tfrac{9}{30} = \tfrac{25x-9}{30}$.

(b) The operation is multiplication — no common denominator needed.
Multiplying and removing common factors of $2$ and $3$:
$\tfrac{5x \cdot 3}{6 \cdot 10} = \tfrac{x}{4}$.

{{< fillin
  question="Simplify: $\tfrac{2a}{3} \cdot \tfrac{5}{9}$ (multiplication — answer in terms of $a$)"
  answer="\frac{10a}{27}"
  answerDisplay="$\tfrac{10a}{27}$"
  hint="No common denominator needed — multiply the numerators and multiply the denominators."
>}}

## Use the order of operations to simplify complex fractions

A complex fraction is a fraction in which the numerator or denominator
contains a fraction — we saw this in the previous section, where we
rewrote such fractions as division problems. Now consider complex
fractions where the numerator or denominator itself needs to be
simplified first. Following the order of operations, we simplify the
numerator and denominator separately, then divide.

{{< callout type="info" >}}
  **Simplify complex fractions.**

  1. Simplify the numerator.
  2. Simplify the denominator.
  3. Divide the numerator by the denominator.
  4. Simplify if possible.
{{< /callout >}}

**Example.** Simplify: $\tfrac{\left(\tfrac{1}{2}\right)^2}{4+3^2}$.

Simplify the numerator: $\left(\tfrac{1}{2}\right)^2 = \tfrac{1}{4}$.
Simplify the denominator: $4 + 3^2 = 4 + 9 = 13$. Divide the numerator by
the denominator: $\tfrac{1}{4} \div 13 = \tfrac{1}{4} \cdot \tfrac{1}{13}$:

$$\frac{\left(\tfrac{1}{2}\right)^2}{4+3^2} = \frac{1}{52}$$

{{< fillin
  question="Simplify: $\left(\tfrac{1}{3}\right)^2 / (2^3 + 2)$"
  answer="\frac{1}{90}"
  answerDisplay="$\tfrac{1}{90}$"
  hint="Simplify the numerator ($\tfrac{1}{3}$ squared) and the denominator ($2$ cubed plus $2$) separately, then divide."
>}}

**Example.** Simplify: $\tfrac{\tfrac{1}{2}+\tfrac{2}{3}}{\tfrac{3}{4}-\tfrac{1}{6}}$.

Rewrite the numerator with LCD $6$ and the denominator with LCD $12$:
$\tfrac{3}{6}+\tfrac{4}{6}$ over $\tfrac{9}{12}-\tfrac{2}{12}$. Add in the
numerator and subtract in the denominator: $\tfrac{7}{6} \div \tfrac{7}{12}$.
Rewrite as multiplication by the reciprocal and simplify:

$$\frac{\tfrac{1}{2}+\tfrac{2}{3}}{\tfrac{3}{4}-\tfrac{1}{6}} = 2$$

{{< fillin
  question="Simplify: $\left(\tfrac{1}{3} + \tfrac{1}{2}\right) / \left(\tfrac{3}{4} - \tfrac{1}{3}\right)$"
  answer="2"
  hint="Combine the numerator over a common denominator, combine the denominator over a common denominator, then divide."
>}}

## Evaluate variable expressions with fractions

We've evaluated expressions before; now we can do the same with
fractions. To evaluate an expression, substitute the value of the
variable and simplify.

**Example.** Evaluate $x + \tfrac{1}{3}$ when (a) $x = -\tfrac{1}{3}$;
(b) $x = -\tfrac{3}{4}$.

(a) Substitute $-\tfrac{1}{3}$ for $x$: $-\tfrac{1}{3} + \tfrac{1}{3} = 0$.

(b) Substitute $-\tfrac{3}{4}$ for $x$. The LCD of $4$ and $3$ is $12$:
$-\tfrac{9}{12} + \tfrac{4}{12} = -\tfrac{5}{12}$.

{{< fillin
  question="Evaluate $y - \tfrac{5}{6}$ when $y = -\tfrac{2}{3}$"
  answer="-\frac{3}{2}"
  answerDisplay="$-\tfrac{3}{2}$"
  hint="Substitute $-\tfrac{2}{3}$ for $y$, then rewrite both fractions with the LCD of $6$ before subtracting."
>}}

**Example.** Evaluate $2x^2y$ when $x = \tfrac{1}{4}$ and
$y = -\tfrac{2}{3}$.

In $2x^2y$, the exponent applies only to $x$. Substituting and
simplifying the exponent first:
$2\left(\tfrac{1}{4}\right)^2\left(-\tfrac{2}{3}\right) = 2 \cdot \tfrac{1}{16} \cdot \left(-\tfrac{2}{3}\right)$.
Multiplying and removing common factors:

$$2x^2y = -\frac{1}{12}$$

{{< fillin
  question="Evaluate $3ab^2$ when $a = -\tfrac{2}{3}$ and $b = -\tfrac{1}{2}$"
  answer="-\frac{1}{2}"
  answerDisplay="$-\tfrac{1}{2}$"
  hint="The exponent applies only to $b$. Simplify $b$ squared first, then multiply by $3$ and $a$."
>}}

**Example.** Evaluate $\tfrac{p+q}{r}$ when $p = -4$, $q = -2$, and
$r = 8$.

Substitute the values into the expression: $\tfrac{-4+(-2)}{8}$. Add in
the numerator first: $\tfrac{-6}{8}$. Simplify:

$$\frac{p+q}{r} = -\frac{3}{4}$$

{{< fillin
  question="Evaluate $\tfrac{a+b}{c}$ when $a = -8$, $b = -7$, and $c = 6$"
  answer="-\frac{5}{2}"
  answerDisplay="$-\tfrac{5}{2}$"
  hint="Add $a$ and $b$ first (the numerator), then divide by $c$."
>}}

## Key terms

**least common denominator (LCD)** — the least common multiple of the
denominators of two or more fractions. **complex fraction** — a fraction
whose numerator or denominator (or both) itself contains a fraction,
requiring the order of operations to simplify: numerator first,
denominator next, then divide.

---

<small>This section is adapted from [Prealgebra 2e, Section 4.5: Add and Subtract Fractions with Different Denominators](https://openstax.org/books/prealgebra-2e/pages/4-5-add-and-subtract-fractions-with-different-denominators) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: described the coin and fraction-tile models for the LCD in prose instead of reproducing the diagrams, and presented the two-column worked examples as prose walkthroughs with typeset math; omitted the Be Prepared quiz, Manipulative Mathematics callout, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
