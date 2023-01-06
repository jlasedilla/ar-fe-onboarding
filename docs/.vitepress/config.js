export default {
    title: "AR",
    description: "Developer Documentation",
    themeConfig: {
        siteTitle: 'AR',
        // logo: "/assets/ar-banner.png",
        nav: [{ text: "FE", link: "/fe/" }],
        sidebar: {
            "/fe/": [
                {
                    text: "Onboarding",
                    items: [
                        { text: "Development Process", link: "/fe/index#development-process" },
                        { text: "Environment", link: "/fe/index#environment" },
                        { text: "Tech Stack", link: "/fe/index#tech-stack" },
                        { text: "Tools", link: "/fe/index#tools" },
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
                        { text: "Documentation", link: "/fe/guides#documentation" },
                        { text: "Unit Testing", link: "/fe/guides#unit-testing" },
                        { text: "Coverage", link: "/fe/guides#coverage" },
                        { text: "E2E Testing", link: "/fe/guides#unit-testing" },
                        { text: "Deployment", link: "/fe/guides#deployment" },
                    ],
                },
            ],
        },
    },
};
