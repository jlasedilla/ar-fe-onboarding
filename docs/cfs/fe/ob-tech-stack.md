---
layout: page
---

<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
        avatar: '/images/reactjs.png',
        name: 'React 18',
        title: 'Framework',
        links: [
            { icon: 'github', link: 'https://reactjs.org/' },
        ]
    },
    {
        avatar: '/images/vitejs.png',
        name: 'ViteJS',
        title: 'Development Tool',
        links: [
            { icon: 'github', link: 'https://vitejs.dev/' },
        ]
    },
    {
        avatar: '/images/redux.png',
        name: 'Redux Tool Kit (RTK)',
        title: 'Styling',
        links: [
            { icon: 'github', link: 'https://redux-toolkit.js.org/' },
        ]
    },
    {
        avatar: '/images/rtkq.png',
        name: 'RTK Query',
        title: 'API Requests Library',
        links: [
            { icon: 'github', link: 'https://redux-toolkit.js.org/rtk-query/overview' },
        ]
    },
    {
        avatar: '/images/tailwindcss.png',
        name: 'Tailwindcss',
        title: 'State Management',
        links: [
            { icon: 'github', link: 'https://tailwindcss.com/' },
        ]
    },
    {
        avatar: '/images/storybook.svg',
        name: 'Storybook',
        title: 'Documentation | Visual Testing',
        links: [
            { icon: 'github', link: 'https://storybook.js.org/' },
        ]
    },
    {
        avatar: '/images/cypress.png',
        name: 'Cypress',
        title: 'E2E Testing',
        links: [
            { icon: 'github', link: 'https://www.cypress.io/' },
        ]
    },
    {
        avatar: '/images/vitest.svg',
        name: 'Vitest',
        title: 'Unit Testing',
        links: [
            { icon: 'github', link: 'https://vitest.dev/' },
        ]
    },
    {
        avatar: '/images/i18next.png',
        name: 'i18next',
        title: 'Translation',
        links: [
            { icon: 'github', link: 'https://www.i18next.com/' },
        ]
    },
    {
        avatar: '/images/momentjs.png',
        name: 'Momentjs',
        title: 'Date | Time',
        links: [
            { icon: 'github', link: 'https://momentjs.com/' },
        ]
    },
    {
        avatar: '/images/eslint.png',
        name: 'ESLint',
        title: 'Linting',
        links: [
            { icon: 'github', link: 'https://eslint.org/' },
        ]
    },
    {
        avatar: '/images/prettier.png',
        name: 'Prettier',
        title: 'Formatting',
        links: [
            { icon: 'github', link: 'https://prettier.io/' },
        ]
    },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Tech Stack
    </template>
    <template #lead>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
