export default {
    title: "AR",
    description: "Developer Documentation",
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/ar-small.png"}],
    ],
    themeConfig: {
        siteTitle: 'AR',
        // logo: "/assets/ar-banner.png",
        nav: [
            { text: "Company", link: "/company/" },
            { 
                text: "CFS",
                items: [
                    { text: 'FE', link: '/cfs/fe/ob-environment' },
                    { text: 'BE', link: '/cfs/be/ob-environment' }
                ] 
            },
            { text: "Wordpress", link: "/wordpress/" }
        ],
        sidebar: {
            "/company/": [
                {
                    text: "Introduction",
                    items: [
                        { text: 'What is AR?', link: '/company/' },
                        { text: 'Team', link: '/team/' },
                    ],
                },
                {
                    text: "Development Processes",
                    items: [
                        { text: "Git", link: "/company/dp-git" },
                        { text: "Development Cycle", link: "/company/dp-dev-cycle" },
                    ],
                }
            ],
            "/cfs/fe/": [
                {
                    text: "Onboarding",
                    items: [
                        { text: "Environment", link: "/cfs/fe/ob-environment" },
                        { text: "Tech Stack", link: "/cfs/fe/ob-tech-stack" },
                        { text: "Tools", link: "/cfs/fe/ob-tools" },
                    ],
                },
                {
                    text: "Guides",
                    items: [
                        { text: "Coding Standards", link: "/cfs/fe/guides-coding-standards" },
                        { text: "Component Documentation", link: "/cfs/fe/guides-component-documentation" },
                        { text: "Unit Testing", link: "/cfs/fe/guides-unit-testing" },
                        { text: "Coverage", link: "/cfs/fe/guides-coverage" },
                        { text: "E2E Testing", link: "/cfs/fe/guides-e2e-testing" },
                        { text: "Deployment", link: "/cfs/fe/guides-deployment" },
                    ],
                },
            ],
            "/cfs/be/": [
                {
                    text: "Onboarding",
                    items: [
                        { text: "Environment", link: "/cfs/be/ob-environment" },
                        { text: "Tech Stack", link: "/cfs/be/ob-tech-stack" },
                        { text: "Tools", link: "/cfs/be/ob-tools" },
                    ],
                },
                {
                    text: "Coding Standards",
                    items: [
                    ],
                },
                {
                    text: "Guides",
                    items: [
                        { text: "Coding Standards", link: "/cfs/be/g-coding-standards" },
                        { text: "Documentation", link: "/cfs/be/guides-documentation" },
                        { text: "Unit Testing", link: "/cfs/be/guides-unit-testing" },
                        { text: "Coverage", link: "/cfs/be/guides-coverage" },
                        { text: "E2E Testing", link: "/cfs/be/guides-unit-testing" },
                        { text: "Deployment", link: "/cfs/be/guides-deployment" },
                    ],
                },
            ],
        },
    },
};
