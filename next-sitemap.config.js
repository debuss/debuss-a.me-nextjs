/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://debuss-a.me',
    generateRobotsTxt: true, // (optional)
    changefreq: 'monthly',
    transform: async (config, path) => ({
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: path === '/blog' ? 'weekly' : config.changefreq,
        priority: path === '/' ? 1 : config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
    }),
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://debuss-a.me/server-sitemap.xml',
        ],
    },
}