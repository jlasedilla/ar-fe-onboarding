# Unit Testing

[[toc]]

---
Vitest will be used as the unit test framework.

## Function Testing

Create a test file with the same filename as the `.ts` file and append `.test` between the filename and the file extension.

```
┃ ┃ ┃ ┣ 📂Button
┃ ┃ ┃ ┃ ┣ 📜Button.css
┃ ┃ ┃ ┃ ┣ 📜Button.stories.tsx
┃ ┃ ┃ ┃ ┣ 📜Button.test.ts
┃ ┃ ┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┃ ┃ ┣ 📜sample-func.test.ts    <--- sample function test file // [!code focus]
┃ ┃ ┃ ┃ ┗ 📜sample-func.ts         <--- target file               // [!code focus]
```

Using the following code example:

::: code-group
```ts:line-numbers [sample-function.ts]
export const add = (x: number, y: number) => x + y;
```
:::

Example test file:

::: code-group
```ts:line-numbers [sample-function.test.ts]
import { describe, expect, it } from 'vitest';
import { add } from './sample-func';

// All tests within this suite will be run in parallel
describe.concurrent('suite', () => {
    it('add success test', async () => {
        expect(add(1, 1)).toBe(2);
    });
    it('add failed test', async () => {
        expect(add(1, 1)).not.toBe(3);
    });
});
```
:::

1. Import methods from `vitest`
1. Import the target function
1. Create a suite using `describe`. Note that in the example above `.concurrent` is used but it may not be necessary, you can use this to run tests consecutively.
1. Describe your tests using  `it` method, make sure you have an assertion in every tests. Also make sure that your assertion tests your intension.
1. Use `npm run test` command to execute all tests.

::: tip
For more test options and guides refer to official [vitest](https://vitest.dev/guide/) documentation.
:::

## Component Testing ❌

::: warning Note
Component testing is currently in __Low__ priority. For now it will not be performed.
<br>
This might change depending on the need.
:::