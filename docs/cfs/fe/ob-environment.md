# Environment

[[toc]]

## Installation 🚧

### Nodejs & NPM

Using your preferred terminal, install `node` and `npm`. (See preferred [IDE](/cfs/fe/ob-tools#ide))

- Node: __v19.3.0__
- NPM: __9.2.0__

For fresh download use official [site](https://nodejs.org/en/).

If using version manager.

```powershell
$> nvm install 19.3.0
```

### Git

Download installer. See official [git guide](https://git-scm.com/download/win).

### Setup
- Clone __\<Project\>__.

```powershell
$> git clone <project ssh or http url>
```

- Install packages

```powershell
$> cd <project root dir>
$> npm install
```

## Commands

| NPM Commands | Description |
| --- | --- |
| dev | Runs the app in the development mode. |
| build | Builds the app for production. |
| preview | Locally preview production build. |
| lint | Performs static lint test using the eslint rules declared in `.eslintrc` |
| format | Performs static lint test using the eslint rules and formats documents using prettier rules declared in `.prettierrc` |
| coverage | Runs unit test coverage |
| cypress:open | Opens cypress UI |
| cypress:run-dev | Runs cypress tests in headless mode using dev config |
| cypress:run-stage | Runs cypress tests in headless mode using stage config |
| cypress:run-c-dev | Runs cypress tests in headless mode for component tests using dev config.<br> Currently not used as component testing is low priority. 🚨 |
| cypress:run-c-stage | Runs cypress tests in headless mode for component tests using stage config.<br> Currently not used as component testing is low priority. 🚨 |
| storybook | Runs storybook server |
| build-storybook | Builds storybook |

## Directory Structure

### Configuration Files

```
┣ 📦cypress
┃ ┣ 📂configs
┃ ┃ ┣ 📜dev.config.ts   // [!code focus]
┃ ┃ ┗ 📜stage.config.ts // [!code focus]
...
┣ 📜.eslintignore       // [!code focus]
┣ 📜.eslintrc           // [!code focus]
┣ 📜.gitignore
┣ 📜.prettierrc         // [!code focus]
┣ 📜cypress.d.ts
┣ 📜index.html
┣ 📜package-lock.json
┣ 📜package.json        // [!code focus]
┣ 📜postcss.config.cjs  // [!code focus]
┣ 📜tailwind.config.cjs // [!code focus]
┣ 📜tsconfig.json       // [!code focus]
┣ 📜tsconfig.node.json
┗ 📜vite.config.ts      // [!code focus]
```

### Assets Files

```
┃ ┗ 📂videos
┣ 📦src
┃ ┣ 📂assets        // [!code focus]
┃ ┃ ┣ 📂images      // [!code focus]
┃ ┃ ┗ 📂resources   // [!code focus]
┃ ┣ 📂components
┃ ┃ ┣ 📂common
```

- _assets_:
    - Components directory
- _images_:
    - Image location such as icons and logos
- _resources_:
    - Language resouces are placed here

### Components

```
┃ ┣ 📂components        // [!code focus]
┃ ┃ ┣ 📂common          // [!code focus]
┃ ┃ ┃ ┣ 📂Button        // [!code focus]
┃ ┃ ┃ ┃ ┣ 📜Button.css
┃ ┃ ┃ ┃ ┣ 📜Button.stories.tsx
┃ ┃ ┃ ┃ ┣ 📜Button.test.ts
┃ ┃ ┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┃ ┃ ┣ 📜sample-func.test.ts
┃ ┃ ┃ ┃ ┗ 📜sample-func.ts
┃ ┃ ┃ ┗ 📂Header        // [!code focus]
┃ ┃ ┗ 📂feature1        // [!code focus]
┃ ┃ ┃ ┣ 📂Feature1Component1    // [!code focus]
┃ ┃ ┃ ┗ 📂Feature1Component2    // [!code focus]
┃ ┣ 📂pages             // [!code focus]
┃ ┃ ┣ 📂Page1           // [!code focus]
┃ ┃ ┗ 📂Page2           // [!code focus]
```

- _components_:
    - Components directory
- _common_:
    - Common components such as Button, Header, etc
- _\<feature#\>_:
    - Common components such as Button, Header, etc
- _\<Feature#Component#\>_:
    - Each components (not common) are separated by folder
- _pages_:
    - Pages directory
- _\<Page#\>_:
    - Pages are separated by folder

### Others

```
┃ ┣ 📂routing               // [!code focus]
┃ ┣ 📂services              // [!code focus]
┃ ┃ ┣ 📂slices              // [!code focus]
┃ ┃ ┣ 📂utilities           // [!code focus]
┃ ┃ ┗ 📜store.ts
┃ ┣ 📂stories               // [!code focus]
┃ ┃ ┣ 📂assets
┃ ┃ ┗ 📜Introduction.stories.mdx
```

- _routing_:
    - Routing files are placed here
- _services_:
    - Services directory
- _slices_:
    - Redux slices are placed here
- _utillities_:
    - Utility functions are placed here
- _stories_:
    - Stories directory that cannot be classified inside of each component or page directories

### Full Structure
```
┣ 📦.storybook
┣ 📦.vscode
┣ 📦cypress
┃ ┣ 📂configs
┃ ┃ ┣ 📜dev.config.ts
┃ ┃ ┗ 📜stage.config.ts
┃ ┣ 📂e2e
┃ ┣ 📂fixtures
┃ ┣ 📂screenshots
┃ ┣ 📂support
┃ ┗ 📂videos
┣ 📦src
┃ ┣ 📂assets
┃ ┃ ┣ 📂images
┃ ┃ ┗ 📂resources
┃ ┣ 📂components
┃ ┃ ┣ 📂common
┃ ┃ ┃ ┣ 📂Button
┃ ┃ ┃ ┃ ┣ 📜Button.css
┃ ┃ ┃ ┃ ┣ 📜Button.stories.tsx
┃ ┃ ┃ ┃ ┣ 📜Button.test.ts
┃ ┃ ┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┃ ┃ ┣ 📜sample-func.test.ts
┃ ┃ ┃ ┃ ┗ 📜sample-func.ts
┃ ┃ ┃ ┗ 📂Header
┃ ┃ ┗ 📂feature1
┃ ┃ ┃ ┣ 📂Feature1Component1
┃ ┃ ┃ ┗ 📂Feature1Component2
┃ ┣ 📂pages
┃ ┃ ┣ 📂Page1
┃ ┃ ┗ 📂Page2
┃ ┣ 📂routing
┃ ┣ 📂services
┃ ┃ ┣ 📂slices
┃ ┃ ┣ 📂utilities
┃ ┃ ┗ 📜store.ts
┃ ┣ 📂stories
┃ ┃ ┣ 📂assets
┃ ┃ ┗ 📜Introduction.stories.mdx
┃ ┣ 📜App.css
┃ ┣ 📜App.tsx
┃ ┣ 📜i18n.ts
┃ ┣ 📜index.css
┃ ┗ 📜main.tsx
┗ 📦test
┃ ┗ 📂unit
┃ ┃ ┗ 📂coverage
┣ 📜.eslintignore
┣ 📜.eslintrc
┣ 📜.gitignore
┣ 📜.prettierrc
┣ 📜cypress.d.ts
┣ 📜index.html
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜postcss.config.cjs
┣ 📜tailwind.config.cjs
┣ 📜tsconfig.json
┣ 📜tsconfig.node.json
┗ 📜vite.config.ts
```