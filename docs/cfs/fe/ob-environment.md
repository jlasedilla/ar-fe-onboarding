# Environment

[[toc]]

## Code

- Node: __v19.3.0__
- NPM: __9.2.0__

## Directory Structure

### Configs Files

```
┣ 📜.eslintignore       // [!code focus]
┣ 📜.eslintrc           // [!code focus]
┣ 📜.gitignore
┣ 📜.prettierrc         // [!code focus]
┣ 📜cypress.config.ts   // [!code focus]
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
┃ ┃ ┗ 📜Button.stories.tsx
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
    - Stories for every components and pages are placed here

### Full Structure
```
┣ 📦.storybook
┣ 📦.vscode
┣ 📦cypress
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
┃ ┃ ┗ 📜Button.stories.tsx
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
┣ 📜cypress.config.ts
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