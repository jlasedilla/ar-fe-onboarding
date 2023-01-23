# End-to-End Testing

[[toc]]

---

See [official Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress) for more details.

## Directory Structure

```
┣ 📦.storybook
┣ 📦.vscode
┣ 📦cypress                 // [!code focus]
┃ ┣ 📂configs               // [!code focus]
┃ ┃ ┣ 📜dev.config.ts       // [!code focus]
┃ ┃ ┗ 📜stage.config.ts     // [!code focus]
┃ ┣ 📂e2e                   // [!code focus]
┃ ┃ ┗ 📜sample-spec.cy.ts   // [!code focus]
┃ ┣ 📂fixtures              // [!code focus]
┃ ┣ 📂screenshots           // [!code focus]
┃ ┣ 📂support               // [!code focus]
┃ ┗ 📂videos                // [!code focus]
┣ 📦src
┃ ┣ 📂assets
```

- _configs_:
    - Directory for different configs based on stage
- _e2e_:
    - E2E test code location
- _fixtures_:
    - Directory for supporting data files
- _screenshots_:
    - Image location for failed tests. Note that this should not be pushed to git (already added to .gitignore).
- _support_:
    - Directory for any test functions or utilities
- _videos_:
    - Recorded test videos. Only enabled during dev testing. Also note that this should not be pushed to git (already added to .gitignore).

## Test Code

```ts:line-numbers
/// <reference types="cypress" />

describe('Sample Spec', () => {
    it('Passes', () => {
        cy.visit('/');

        cy.get('[data-cy="header"]').contains('React');
    });
});
```

- Use cypress reference tag to recognize file as cypress test file
- Similar to unit test, describe the test and use `it` to separate each test cases
- Assertion should be present in every tests

::: tip
For more info refer to the official [E2E Testing](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) documentation.
:::

## Execution

### Browser based

To run cypress in browser use the following command:

```powershell
$> npm run cypress:open
```

This will open `Cypress` dashboard UI.

![CypressE2E1-UI](/images/cypresse2e1.png)

Select E2E Testing.

::: warning Note
Note that we can also do Component Testing but for now we'll focus on E2E.
:::

Then select which browser to run the test.

::: warning Note
Depending on the browsers installed in your system this choices might vary.
:::

![CypressE2E2-UI](/images/cypresse2e2.png)

Cypress dashboard will open on the selected browser. The dashboard will show the list of tests (file) and its status.

![CypressE2E3-UI](/images/cypresse2e3.png)

Click on the test file to execute. Steps described in the test will be shown including the assertions. It will also show the site being tested and the actions performed.

![CypressE2E4-UI](/images/cypresse2e4.png)

::: warning Note
Browser based test is only configured for dev testing. Testing in stage branch is only configured to run using headless mode.
:::

### Headless

To run cypress in headless mode use the following commands:

::: code-group
```powershell [dev]
$> npm run cypress:run-dev
```

```powershell [stage]
$> npm run cypress:run-stage
```

```powershell [dev-component]
$> npm run cypress:run-c-dev
```

```powershell [stage-component]
$> npm run cypress:run-c-stage
```
:::

::: warning Note
Component testing using Cypress is currently in low priority. It is expected that `xxx-component` commands above will not be used.
:::

```powershell
==================================================================================

  (Run Starting)

  ┌──────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.3.0                                                       │
  │ Browser:        Electron 106 (headless)                                      │
  │ Node Version:   v19.3.0 (C:\Program Files\nodejs\node.exe)                   │
  │ Specs:          1 found (sample-spec.cy.ts)                                  │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                          │
  └──────────────────────────────────────────────────────────────────────────────┘


──────────────────────────────────────────────────────────────────────────────────

  Running:  sample-spec.cy.ts                                             (1 of 1)


  Sample Spec
    √ Passes (625ms)


  1 passing (664ms)


  (Results)

  ┌──────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                              │
  │ Passing:      1                                                              │
  │ Failing:      0                                                              │
  │ Pending:      0                                                              │
  │ Skipped:      0                                                              │
  │ Screenshots:  0                                                              │
  │ Video:        true                                                           │
  │ Duration:     0 seconds                                                      │
  │ Spec Ran:     sample-spec.cy.ts                                              │
  └──────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: ...\cypress\videos\sample-spec.cy.ts.mp4     (0 seconds)


==================================================================================

  (Run Finished)


       Spec                              Tests  Passing  Failing  Pending  Skipped
  ┌──────────────────────────────────────────────────────────────────────────────┐
  │ √  sample-spec.cy.ts      649ms        1        1        -        -        - │
  └──────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!      649ms        1        1        -        -        -
```