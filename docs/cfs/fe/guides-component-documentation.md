# Component Documentation

[[toc]]

---

This section shows the basic steps in documenting react components using `Storybook`.
Refer to the official [Storybook](https://storybook.js.org/docs/7.0/react/get-started/introduction) documentation for more details.

::: warning Note
To mitigate react dependency warning we will be using Storybook version __`7.0 (beta)`__.
Latest stable version of Storybook is __`6.5`__
:::

::: warning Prerequisite
See [installation](/cfs/fe/ob-environment#installation) section.
:::

## Component

Use function components instead of class component.

::: tip
See [Coding Standards](/cfs/fe/guides-coding-standards) section for additional details.
:::

### Props

Create interface for your component props and add comment.

```ts:line-numbers
interface ButtonProps {
    /**                                 // [!code ++]
     * Icon in a form of component      // [!code ++]
     */                                 // [!code ++]
    icon?: ReactNode;
    /**                                 // [!code ++]
     * Button label                     // [!code ++]
     */                                 // [!code ++]
    label?: string;
    /**                                 // [!code ++]
     * Button edge style                // [!code ++]
     */                                 // [!code ++]
    edge?: 'rounded' | 'pill' | 'default';
    /**                                 // [!code ++]
     * onClick callback function        // [!code ++]
     */                                 // [!code ++]
    onClick?: () => void;
    /**                                 // [!code ++]
     * Other children node              // [!code ++]
     */                                 // [!code ++]
    children?: ReactNode;
}
```

### Function

If using arrow function define your default props in the argument.

```ts:line-numbers
export const Button: React.FC<ButtonProps> = (props) => {       // [!code --]
    const {                                                     // [!code --]
        icon,                                                   // [!code --]
        label = 'Button',                                       // [!code --]
        edge = 'rounded',                                       // [!code --]
        onClick,                                                // [!code --]
        children,                                               // [!code --]
    } = props;                                                  // [!code --]
export const Button: React.FC<ButtonProps> = ({                 // [!code ++]
    icon,                                                       // [!code ++]
    label = 'Button',                                           // [!code ++]
    edge = 'rounded',                                           // [!code ++]
    onClick,                                                    // [!code ++]
    children,                                                   // [!code ++]
}) => {                                                         // [!code ++]
    return (
        <button className={`button ${edge}`} onClick={onClick}>
            {icon}
            {label}
            {children}
        </button>
    );
};
```

## Stories

Add story file inside the component directory.

```
┃ ┣ 📂components
┃ ┃ ┣ 📂common
┃ ┃ ┃ ┣ 📂Button                // [!code focus]
┃ ┃ ┃ ┃ ┣ 📜Button.css
┃ ┃ ┃ ┃ ┣ 📜Button.stories.tsx  // [!code focus]
┃ ┃ ┃ ┃ ┣ 📜Button.test.ts
┃ ┃ ┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┃ ┃ ┣ 📜sample-func.test.ts
┃ ┃ ┃ ┃ ┗ 📜sample-func.ts
┃ ┃ ┃ ┗ 📂Header
```

### Code

- Import the commponent.

```ts:line-numbers
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/components/common/Button/Button'; // [!code focus]

const meta: Meta<typeof Button> = {
    title: 'Components/Common/Button',
    component: Button,
    parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => (
        <div className="m-0 grid h-80 place-items-center">
            <Button {...args} />
        </div>
    ),
    args: {
        onClick: () => console.log('clicked!'),
    },
};
```

- Define the meta.
    - title
        - Where should the story in storybook be created
        - Should follow component directory structure and naming
    - component
        - Set the component here
    - parameters/layout
        - Set to centered by default. If using page set it to screen.
        - See [official documentation](https://storybook.js.org/docs/react/writing-stories/parameters#gatsby-focus-wrapper) for other possible values for `parameters`.

```ts:line-numbers
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/components/common/Button/Button';

const meta: Meta<typeof Button> = {                 // [!code focus]
    title: 'Components/Common/Button',              // [!code focus]
    component: Button,                              // [!code focus]
    parameters: { layout: 'centered' },             // [!code focus]
};                                                  // [!code focus]

export default meta;                                // [!code focus]
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => (
        <div className="m-0 grid h-80 place-items-center">
            <Button {...args} />
        </div>
    ),
    args: {
        onClick: () => console.log('clicked!'),
    },
};
```

- Render the components story
    - Using `render` set the view on how you want to see the component in storybook
    - Use `args` to set default props for the story

::: tip
You can create multiple stories if you want to showcase different versions of the component depending on the props/inputs.
Just make sure you name your story appropriately. Example `Defualt`, `Primary`, `Secondary`.
:::

```ts:line-numbers
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/components/common/Button/Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Common/Button',
    component: Button,
    parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Button>;   // [!code focus]

export const Default: Story = {         // [!code focus]
    render: (args) => (                 // [!code focus]
        <div className="m-0 grid h-80 place-items-center">      // [!code focus]
            <Button {...args} />        // [!code focus]
        </div>                          // [!code focus]
    ),                                  // [!code focus]
    args: {                             // [!code focus]
        onClick: () => console.log('clicked!'),     // [!code focus]
    },                                  // [!code focus]
};                                      // [!code focus]
```

### Viewing | Testing

To view the story run Storybook.

```powershell
$> npm run storybook
```

Wait until storybook local server is ready

```powershell
$> base-react-vite-v1@0.0.0 storybook
$> storybook dev -p 6006

@storybook/cli v7.0.0-beta.19

info => Starting manager..
╭────────────────────────────────────────────────────╮
│                                                    │
│   Storybook 7.0.0-beta.19 for react-vite started   │
│   13 s for manager and 2.23 min for preview        │
│                                                    │
│    Local:            http://localhost:6006/        │
│    On your network:  http://localhost:6006/        │
│                                                    │
╰────────────────────────────────────────────────────╯
```

You should be able to access Storybook UI through any modern browser.

![StorybookDocs](/images/storybook1.jpg)

You can play/interact with the component by either using the `Docs` or the individual stories (Ex. `Default`).