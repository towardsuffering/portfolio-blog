module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-portfolio-minimal',
            options: {
                siteUrl: "https://carot.io/", // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/favicon.png', // Path is relative to the root
                    siteName: 'caRot', // Used in manifest.json
                    shortName: 'Landing Page', // Used in manifest.json
                    startUrl: '/', // Used in manifest.json
                    backgroundColor: '#FFFFFF', // Used in manifest.json
                    themeColor: '#000000', // Used in manifest.json
                    display: 'minimal-ui', // Used in manifest.json
                },
                contentDirectory: './content',
                blogSettings: {
                    path: '/blog', // Defines the slug for the blog listing page
                    usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
                },
                // plausibleAnalytics: {
                //     domain: 'example.com',
                // },
                googleAnalytics: {
                    trackingId: "UA-197563814-1",
                    anonymize: true, // Default true
                    environments: ["production", "development"] // Default ["production"]
                }
            },
        },
    ],
};
