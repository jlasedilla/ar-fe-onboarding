# Frontend Coding Standards

[[toc]]

## General Coding

- Practice __`SOLID`__ principle.
    - __S__ ingle responsibility principle
    - __O__ pen closed principle
    - __L__ iskov substitution principle
    - __I__ nterface segregation principle
    - __D__ ependency Inversion principle
- Use function to create components instead of class
- Use hooks

::: tip Important
Add `data-cy` attribute to elements/components during coding. This will help creation of Cypress tests much easier.
:::

## Type Linting

::: tip
Linting will be enforced by tslint and eslint.
<br>
Use VSCode for auto assist on some rules.
:::

- `js` or `jsx` files are not allowed, use `ts` or `tsx` instead
- filenames should be consistent
- avoid using `any`

## Formatting

::: tip
Use VSCode and install Prettier extension. This will auto format your code upon save.
:::

- Use 4 spaces as tab width
- Use single quote
- Set print width / code width is set to 100 characters

## Naming

- Use PascalCase for components
- Use camelCase for functions and methods
- Use PascalCase filename for .tsx and .css files
- Use kebab-case filename for .ts files
- Choose descriptive and unambiguous names
- Make meaningful distinction
- Use pronounceable names
- Use searchable names
- Replace magic numbers with named constants

## Functions

- Small
- Do one thing
- Use descriptive names
- Prefer fewer arguments
- Have no side effects
- Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag

## Comments

- Always try to explain yourself in code
- Don't be redundant
- Don't add obvious noise
- Don't comment out code. Just remove
- Use as explanation of intent
- Use as clarification of code
- Use as warning of consequences

## Tests

- One assert per test
- Readable
- Fast
- Independent
- Repeatable

---

::: info Reference
[Clean Code](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) by Robert C. Martin
:::