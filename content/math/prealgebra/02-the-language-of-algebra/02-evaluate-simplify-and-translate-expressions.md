---
title: Evaluate, Simplify, and Translate Expressions
description: >-
  Evaluating algebraic expressions, identifying terms, coefficients, and like
  terms, combining like terms, and translating word phrases into expressions —
  adapted from OpenStax Prealgebra 2e, Section 2.2.
source_section: "2.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Evaluate algebraic expressions
- Identify terms, coefficients, and like terms
- Simplify expressions by combining like terms
- Translate word phrases to algebraic expressions
{{< /callout >}}

## Evaluate algebraic expressions

In the last section, we simplified expressions using the order of operations.
Here we **evaluate** expressions — find the value of an expression when the
variable is replaced by a given number. To evaluate, substitute the number for
the variable and then simplify using the order of operations.

**Example.** Evaluate $x + 7$ when (a) $x = 3$ and (b) $x = 12$.

For (a), substitute $3$ for $x$: $3 + 7 = 10$. For (b), substitute $12$ for $x$:
$12 + 7 = 19$. Notice the two parts give different results, because the value of
an expression depends on the value used for the variable.

**Example.** Evaluate $9x - 2$ when (a) $x = 5$ and (b) $x = 1$. Remember that
$9x$ means $9$ times $x$. For (a): $9 \cdot 5 - 2 = 45 - 2 = 43$. For (b):
$9(1) - 2 = 9 - 2 = 7$. Both the dot and the parentheses tell us to multiply.

{{< fillin
  question="Evaluate $8x - 3$ when $x = 2$."
  answer="13"
  answerForm="decimal"
  hint="Substitute the given value for $x$, then follow the order of operations: multiply before you subtract."
>}}

When an expression contains a variable with an exponent, substitute carefully.

**Example.** Evaluate $x^2$ when $x = 10$. Substitute $10$ for $x$:
$10^2 = 10 \cdot 10 = 100$.

**Example.** Evaluate $2^x$ when $x = 5$. Here the variable is the exponent:
$2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$.

An expression can contain more than one variable, requiring more than one
substitution.

**Example.** Evaluate $3x + 4y - 6$ when $x = 10$ and $y = 2$. Substitute:
$3(10) + 4(2) - 6$. Multiply: $30 + 8 - 6$. Add and subtract left to right: $32$.

{{< fillin
  question="Evaluate $2x + 5y - 4$ when $x = 11$ and $y = 3$."
  answer="33"
  answerForm="decimal"
  hint="Make both substitutions, one for each variable. Multiply first, then add and subtract from left to right."
>}}

**Example.** Evaluate $2x^2 + 3x + 8$ when $x = 4$. Be careful: $2x^2$ means
$2 \cdot x \cdot x$, which is different from $(2x)^2$. Substitute $4$ for each
$x$: $2(4)^2 + 3(4) + 8$. Simplify the exponent: $2(16) + 3(4) + 8$. Multiply:
$32 + 12 + 8$. Add: $52$.

{{< fillin
  question="Evaluate $3x^2 + 4x + 1$ when $x = 3$."
  answer="40"
  answerForm="decimal"
  hint="Substitute the value for every $x$. Simplify the exponent first, then multiply, then add. The exponent applies only to $x$, not to the coefficient."
>}}

## Identify terms, coefficients, and like terms

Algebraic expressions are built from **terms**. A term is a constant or the
product of a constant and one or more variables. Examples of terms are $7$, $y$,
$5x^2$, $9a$, and $13xy$.

The constant that multiplies the variable(s) in a term is called the
**coefficient**. Think of it as the number *in front of* the variable. The
coefficient of $3x$ is $3$. When we write $x$ by itself, the coefficient is $1$,
since $x = 1 \cdot x$.

| Term    | Coefficient |
| :------ | :---------- |
| $9a$    | $9$         |
| $y$     | $1$         |
| $5x^2$  | $5$         |

An expression may have several terms added or subtracted; we include the
operation before a term with it. For example, $3x^2 + 4x^2 + 5y + 3$ has the
terms $3x^2$, $4x^2$, $5y$, and $3$.

**Example.** Identify the terms of $9b + 15x^2 + a + 6$ and each coefficient.
The four terms are $9b$, $15x^2$, $a$, and $6$. Their coefficients are $9$, $15$,
$1$ (no number written means $1$), and $6$ (the coefficient of a constant is the
constant itself).

{{< fillin
  question="Give the coefficient of each term of $9a + 13a^2 + a^3$, in the order the terms appear, separated by commas."
  answer="9,13,1" answerForm="decimal"
  answerDisplay="$9$, $13$, $1$"
  hint="The coefficient is the constant that multiplies the variable part of each term. A term with no number written in front of its variable still has a coefficient."
>}}

Some terms share the same variables and exponents. **Like terms** are terms that
are either constants or have the same variables raised to the same powers. Among
the terms $5x$, $7$, $n^2$, $4$, $3x$, $9n^2$: the constants $7$ and $4$ are like
terms; $5x$ and $3x$ are like terms; and $n^2$ and $9n^2$ are like terms.

{{< multiplechoice
  question="Identify the like terms in the list $9$, $2x^3$, $y^2$, $8x^3$, $15$, $9y$, $11y^2$."
  answer="$9$ and $15$; $2x^3$ and $8x^3$; $y^2$ and $11y^2$"
  hint="Apply the definition above to each pair: compare the variable parts and their exponents, not the coefficients."
>}}
$9$ and $15$; $2x^3$ and $8x^3$; $y^2$ and $11y^2$
$9$ and $15$; $2x^3$ and $8x^3$; $y^2$, $9y$, and $11y^2$
$9$, $15$, and $9y$; $2x^3$ and $8x^3$; $y^2$ and $11y^2$
$2x^3$ and $8x^3$; $y^2$ and $11y^2$
{{< /multiplechoice >}}

## Simplify expressions by combining like terms

We can simplify an expression by **combining like terms**. What does $3x + 6x$
simplify to? If you have $3$ of something and add $6$ more of the same thing, you
have $9$ of them, so $3x + 6x = 9x$. We add the coefficients and keep the same
variable.

{{< callout type="info" >}}
  **Combine like terms.**

  1. Identify like terms.
  2. Rearrange the expression so like terms are together.
  3. Add the coefficients of the like terms.
{{< /callout >}}

**Example.** Simplify $3x + 7 + 4x + 5$. The like terms are $3x$ and $4x$, and
the constants $7$ and $5$. Rearranged: $3x + 4x + 7 + 5$. Combine:
$7x + 12$.

{{< fillin
  question="Simplify by combining like terms: $7x + 9 + 9x + 8$"
  answer="16x + 17"
  answerDisplay="$16x + 17$"
  answerForm="no-like-terms"
  hint="Rearrange so the $x$-terms sit together and the constants sit together, then add the coefficients within each group."
>}}

When a term has a negative coefficient, the procedure is the same — you subtract
instead of add.

**Example.** Simplify $7x^2 + 8x - x^2 - 4x$. The like terms are $7x^2$ and
$-x^2$, and $8x$ and $-4x$. Rearranged: $7x^2 - x^2 + 8x - 4x$. Combine:
$6x^2 + 4x$. Since $6x^2$ and $4x$ are not like terms, this is in simplest form.

{{< fillin
  question="Simplify by combining like terms: $3x^2 + 9x + x^2 + 5x$"
  answer="4x^2 + 14x"
  answerDisplay="$4x^2 + 14x$"
  answerForm="no-like-terms"
  hint="Combine the $x^2$ terms with each other and the $x$ terms with each other; an $x^2$ term and an $x$ term are not like terms. A term written with no number in front has coefficient $1$."
>}}

## Translate word phrases to algebraic expressions

In the last section we translated expressions into words; now we reverse the
process. Watch for the words *of* and *and* to find the numbers being operated
on.

| Operation      | Phrase                                                       | Expression    |
| :------------- | :---------------------------------------------------------- | :------------ |
| Addition       | $a$ plus $b$; the sum of $a$ and $b$; $a$ increased by $b$; $b$ more than $a$ | $a + b$ |
| Subtraction    | $a$ minus $b$; the difference of $a$ and $b$; $b$ subtracted from $a$; $a$ decreased by $b$; $b$ less than $a$ | $a - b$ |
| Multiplication | $a$ times $b$; the product of $a$ and $b$                   | $a \cdot b$   |
| Division       | $a$ divided by $b$; the quotient of $a$ and $b$; the ratio of $a$ and $b$ | $a \div b$ |

**Example.** Translate each phrase into an algebraic expression: (a) the
difference of $20$ and $4$; (b) the quotient of $10x$ and $3$.

For (a), *difference* means subtraction: $20 - 4$. For (b), *quotient* means
division: $10x \div 3$, which can also be written $\tfrac{10x}{3}$.

Two phrases need special care. *More than* means "added to," and *less than*
means "subtracted from" — so the order is reversed from how the words are read.

**Example.** Translate each phrase: (a) eight more than $y$; (b) seven less than
$9z$. For (a), "more than" means added to $y$: $y + 8$. For (b), "less than"
means subtracted from $9z$: $9z - 7$.

{{< fillin
  question="Translate into an algebraic expression: eleven more than $x$"
  answer="x + 11"
  answerDisplay="$x + 11$"
  hint="'More than' means 'added to': the number is added to the quantity named after 'than'."
>}}

{{< fillin
  question="Translate into an algebraic expression: fourteen less than $11a$"
  answer="11a - 14"
  answerDisplay="$11a - 14$"
  hint="'Less than' means 'subtracted from': start with the quantity named after 'than' and take the number away from it. Watch the order."
>}}

Parentheses matter when a phrase combines operations.

**Example.** Translate: (a) five times the sum of $m$ and $n$; (b) the sum of
five times $m$ and $n$. In (a) we multiply $5$ by the whole sum, so we need
parentheses: $5(m + n)$. In (b) we add $n$ to five times $m$: $5m + n$. The
parentheses change the result.

{{< fillin
  question="Translate into an algebraic expression: four times the sum of $p$ and $q$"
  answer="4(p + q)"
  answerDisplay="$4(p + q)$"
  hint="'Times the sum' multiplies the whole sum, not just its first term, so the sum needs grouping symbols."
>}}

## Key terms

**evaluate** — to find the value of an expression by substituting a given number
for the variable and simplifying. **term** — a constant or the product of a
constant and one or more variables. **coefficient** — the constant that
multiplies the variable(s) in a term. **like terms** — terms that are constants,
or that have the same variables raised to the same powers. **combining like
terms** — simplifying by adding the coefficients of like terms.

## Practice

### Evaluate algebraic expressions

{{< fillin
  question="Evaluate $7x + 8$ when $x = 2$."
  answer="22"
  answerForm="decimal"
  hint="Substitute the given value for $x$, then follow the order of operations — multiply before you add."
>}}

{{< fillin
  question="Evaluate $x^2$ when $x = 12$."
  answer="144"
  answerForm="decimal"
  hint="Substitute the given value for $x$; the exponent $2$ means use that number as a factor two times."
>}}

{{< fillin
  question="Evaluate $3^x$ when $x = 3$."
  answer="27"
  answerForm="decimal"
  hint="Here the variable is the exponent, not the base: substitute its value, then use the base as a factor that many times."
>}}

{{< fillin
  question="Evaluate $(x - y)^2$ when $x = 10$ and $y = 7$."
  answer="9"
  answerForm="decimal"
  hint="Grouping symbols come first: subtract inside the parentheses, then square that single result."
>}}

### Identify terms, coefficients, and like terms

{{< fillin
  question="List the terms of $15x^2 + 6x + 2$. Separate them with commas."
  answer="15x^2, 6x, 2"
  answerMode="unordered"
  answerDisplay="$15x^2$, $6x$, $2$"
  hint="A term is a constant or a constant times one or more variables; the addition signs mark where one term ends and the next begins."
>}}

{{< fillin
  question="Identify the coefficient of the term $5r^2$."
  answer="5" answerForm="decimal"
  hint="The coefficient is the constant that multiplies the variable part. The exponent belongs to the variable, not to the coefficient."
>}}

{{< multiplechoice
  question="Identify all sets of like terms in $x^3$, $8x$, $14$, $8y$, $5$, $8x^3$."
  answer="$x^3$ and $8x^3$; $14$ and $5$"
  hint="Like terms are constants, or have exactly the same variables raised to exactly the same powers. A shared coefficient does not make two terms alike."
>}}
$x^3$ and $8x^3$; $14$ and $5$
$8x$, $8y$, and $8x^3$; $14$ and $5$
$8x$ and $8y$; $8x$ and $8x^3$
$x^3$ and $8x$; $14$ and $5$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify all sets of like terms in $9a$, $a^2$, $16ab$, $16b^2$, $4ab$, $9b^2$."
  answer="$16ab$ and $4ab$; $16b^2$ and $9b^2$"
  hint="Compare only the variable parts: like terms have exactly the same variables raised to exactly the same powers. A shared coefficient does not make two terms alike."
>}}
$9a$ and $9b^2$; $16ab$ and $16b^2$
$16ab$, $16b^2$, and $4ab$; $9a$ and $9b^2$
$16ab$ and $4ab$; $16b^2$ and $9b^2$
$9a$ and $a^2$; $16ab$ and $16b^2$
{{< /multiplechoice >}}

### Simplify expressions by combining like terms

{{< fillin
  question="Simplify by combining like terms: $17a + 9a$"
  answer="26a"
  answerDisplay="$26a$"
  answerForm="no-like-terms"
  hint="Both terms carry the same variable, so add the coefficients and keep $a$."
>}}

{{< fillin
  question="Simplify by combining like terms: $9x + 3x + 8$"
  answer="12x + 8"
  answerDisplay="$12x + 8$"
  answerForm="no-like-terms"
  hint="Only the two $x$-terms are alike; the constant $8$ has nothing to combine with, so it stays as it is."
>}}

{{< fillin
  question="Simplify by combining like terms: $10a + 7 + 5a - 2 + 7a - 4$"
  answer="22a + 1"
  answerDisplay="$22a + 1$"
  answerForm="no-like-terms"
  hint="Rearrange so the $a$-terms sit together and the constants sit together, keeping each sign with the term that follows it; then combine each group."
>}}

{{< fillin
  question="Simplify by combining like terms: $3x^2 + 12x + 11 + 14x^2 + 8x + 5$"
  answer="17x^2 + 20x + 16"
  answerDisplay="$17x^2 + 20x + 16$"
  answerForm="no-like-terms"
  hint="There are three families here — the $x^2$ terms, the $x$ terms, and the constants. Combine each family on its own; they cannot be merged with each other."
>}}

### Translate word phrases to algebraic expressions

{{< fillin
  question="Translate into an algebraic expression: the difference of $x$ and $4$"
  answer="x - 4"
  answerDisplay="$x - 4$"
  hint="'The difference of' subtracts the second quantity from the first, in the order the phrase names them."
>}}

{{< fillin
  question="Translate into an algebraic expression: the quotient of $y$ and $3$"
  answer="y/3"
  answerDisplay="$y \div 3$"
  hint="'Quotient' means division, and the quantity named first is the one being divided."
>}}

{{< fillin
  question="Translate into an algebraic expression: eight times the difference of $y$ and nine"
  answer="8(y - 9)"
  answerDisplay="$8(y - 9)$"
  hint="'Times the difference' multiplies the whole difference, not just its first term, so the difference needs grouping symbols."
>}}

{{< fillin
  question="Greg has nickels and pennies in his pocket. The number of pennies is seven less than twice the number of nickels. Let $n$ represent the number of nickels. Write an expression for the number of pennies."
  answer="2n - 7"
  answerDisplay="$2n - 7$"
  hint="Write a phrase for the pennies in terms of $n$, then translate it piece by piece. 'Twice' means two times, and 'less than' means subtracted from the amount named after it."
>}}

---

<small>This section is adapted from [Prealgebra 2e, Section 2.2: Evaluate, Simplify, and Translate Expressions](https://openstax.org/books/prealgebra-2e/pages/2-2-evaluate-simplify-and-translate-expressions) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: condensed prose, recreated tables in accessible Markdown, converted practice problems ("Try Its") into interactive exercises with instant feedback, with the terms-and-coefficients Try It asking for the coefficients only, and adapted selected end-of-section exercises into the interactive Practice block.</small>
