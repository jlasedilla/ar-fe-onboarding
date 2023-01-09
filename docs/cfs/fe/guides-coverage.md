# Coverage

## Unit test coverage

To run unit test coverage execute the following command:

```powershell
$> npm run coverage
```

The above command will create a `test` directory.

```
📦tests
 ┗ 📂unit
 ┃ ┗ 📂coverage
 ┃ ┃ ┣ 📂tmp
 ┃ ┃ ┃ ┣ 📜coverage-7796-1672928036045-6.json
 ┃ ┃ ┃ ┣ 📜coverage-7796-1672928036123-2.json
 ┃ ┃ ┃ ┣ 📜coverage-7796-1672928036201-7.json
 ┃ ┃ ┃ ┣ 📜coverage-7796-1672928036264-3.json
 ┃ ┃ ┃ ┣ 📜coverage-7796-1672928036342-4.json
 ┃ ┃ ┃ ┣ 📜coverage-7796-1672928036436-5.json
 ┃ ┃ ┃ ┗ 📜coverage-7796-1672928036514-8.json
 ┃ ┃ ┣ 📜base.css
 ┃ ┃ ┣ 📜block-navigation.js
 ┃ ┃ ┣ 📜coverage-final.json
 ┃ ┃ ┣ 📜favicon.png
 ┃ ┃ ┣ 📜index.html                <--- Result entry point
 ┃ ┃ ┣ 📜prettify.css
 ┃ ┃ ┣ 📜prettify.js
 ┃ ┃ ┣ 📜sample-func.ts.html       <--- HTML for the sample test
 ┃ ┃ ┣ 📜sort-arrow-sprite.png
 ┃ ┃ ┗ 📜sorter.js
```

::: warning Note!
Currently coverage is only performed on _`.ts`_ files. Since component testing is in low priority, coverage collection for _`.tsx`_ files are disabled.
:::

::: warning Note!
Code coverage for the components might be covered using E2E but setup is still under construction.
:::

## E2E test coverage 🚧

::: danger TBD
:::