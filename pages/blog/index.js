import Head from 'next/head';
import ArticleList from "../../components/articlelist";

export default ({ posts }) => {
    return <>
        <Head>
            <meta charSet="utf-8" />
            <title>Blog | debuss-a</title>
            <meta name="description" content="Here is a list of all my blogposts." />
            <meta name="copyright" content="Alexandre DEBUSSCHÈRE" />
            <meta name="author" content="Alexandre DEBUSSCHÈRE" />
        </Head>
        <section className="text-gray-700 body-font">
            <div className="w-full container mx-auto flex px-5 pt-24 pb-12 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Blogpost!
                    </h1>
                    <p className="mb-4 leading-relaxed">
                        Here is a list of all my blogposts.<br />
                        They will mostly be about my daily experiences with Shopify and technologies in general,
                        but you'll be able to find virtually any topics.
                    </p>
                </div>
            </div>
        </section>
        <section className="text-gray-700 body-font bg-white">
            <div className="w-full container mx-auto flex px-5 py-12 flex-col items-center">
                <ArticleList posts={posts} />
            </div>
        </section>
    </>;
};

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const response = await fetch('https://strapi.debuss-a.me/articles?_sort=id:desc')
    const posts = await response.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return { props: { posts } };
}

