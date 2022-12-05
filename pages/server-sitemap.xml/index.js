import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
    const response = await fetch('https://strapi.debuss-a.me/api/articles?sort=id:desc&fields[0]=slugurl&fields[1]=published&locale=all');
    const posts = await response.json();

    const fields = posts?.data?.map(post => ({
        loc: `https://debuss-a.me/blog/${post?.attributes?.slugurl}`,
        lastmod: new Date(post?.attributes?.published).toISOString(),
        changefreq: 'yearly',
        priority: 0.5
    }));

    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {};
