import Head from 'next/head';
import Hero from "../components/hero";
import Statistics from "../components/statistics";
import Features from "../components/features";
import ArticleList from "../components/articlelist";

export default ({ posts }) => {
  return <>
    <Head>
      <meta charSet="utf-8"/>
      <title>Home | debuss-a</title>
      <meta name="description" content="Hi ! I am Alexandre Debusschère, a web developer from Boulogne-sur-Mer, specialized in e-commerce apps development."/>
      <meta name="copyright" content="Alexandre DEBUSSCHÈRE"/>
      <meta name="author" content="Alexandre DEBUSSCHÈRE"/>
    </Head>
    <section className="text-gray-700 body-font">
      <Hero />
    </section>
    <section className="text-gray-700 body-font bg-slate-100">
      <div className="w-full container mx-auto flex md:flex-row flex-col items-center">
        <Statistics />
      </div>
    </section>
    <section className="text-gray-700 body-font bg-white">
      <div className="w-full container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="flex-grow flex flex-col md:items-start md:text-left items-center text-center">
          <div className="container text-center">
            <h3 className="title-font text-3xl mb-4 font-medium text-gray-900">My expertise</h3>
          </div>
          <Features />
        </div>
      </div>
    </section>
    <section className="text-gray-700 body-font bg-slate-100">
      <div className="w-full container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center">
          <div className="container text-center">
            <h3 className="title-font text-3xl mb-4 font-medium text-gray-900">Latest blogposts</h3>
          </div>
          <ArticleList posts={posts} />
        </div>
      </div>
    </section>
  </>;
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=14400'
  );

  // Fetch data from external API
  const response = await fetch(`https://strapi.debuss-a.me/api/articles?sort=id:desc&pagination[page]=1&pagination[pageSize]=3&populate[]=tags`);
  const posts = await response.json();

  // Pass data to the page via props
  return { props: { posts } };
}
