import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
    const response = await fetch('https://strapi.debuss-a.me/articles?_sort=id:desc');
    const posts = await response.json();

    const fields = posts.filter(post => post.active).map(post => ({
        loc: `https://debuss-a.me/blog/${post.slugurl}`,
        lastmod: new Date(post.published).toISOString(),
        changefreq: 'yearly',
        priority: 0.5
    }));

    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {};
