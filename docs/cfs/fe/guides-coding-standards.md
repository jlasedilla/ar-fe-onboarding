# Frontend Coding Standards

[[toc]]

Practice __`SOLID`__ principle.
- S — Single responsibility principle
- O — Open closed principle
- L — Liskov substitution principle
- I — Interface segregation principle
- D — Dependency Inversion principle

## Type Linting

::: tip
Typescript will be inforced by tslint, and eslint as a support.
:::

- `js` or `jsx` files are not allowed, use `ts` or `tsx` instead
- filenames should be consistent
- avoid using `any`

## Formatting

::: tip
If using VSCode.
Formatting will be inforced by Prettier upon save.
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