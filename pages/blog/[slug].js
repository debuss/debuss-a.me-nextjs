import Head from 'next/head';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Markdown from 'react-markdown';
import TagList from "../../components/taglist";
import CodeBlock from "../../components/codeblock";

export default ({ post }) => {
    const router = useRouter();
    if (!post) {
        return router.push('/blog');
    }

    const publicationDate = new Date(post?.data[0]?.attributes.published);

    return <>
        <Head>
            <title>{post?.data[0]?.attributes?.title || 'Post'} | debuss-a</title>
            <meta name="description" content={post?.data[0]?.attributes?.meta_description || 'Post'} />
            <meta name="copyright" content="Alexandre DEBUSSCHÈRE" />
            <meta name="author" content="Alexandre DEBUSSCHÈRE" />
            <meta property="og:title" content={post?.data[0]?.attributes?.seo_title} />
            <meta property="og:description" content={post?.data[0]?.attributes?.meta_description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://debuss-a.me/blog/${post?.data[0]?.attributes?.slugurl}`} />
            <meta property="og:image" content={`https://strapi.debuss-a.me${post?.data[0]?.attributes?.seo_image?.file?.url}`} />
            <meta property="og:image:width" content={post?.data[0]?.attributes?.seo_image?.file?.width} />
            <meta property="og:image:height" content={post?.data[0]?.attributes?.seo_image?.file?.height} />
            <meta property="og:site_name" content="debuss-a.me" />
        </Head>
        <section className="text-gray-700 body-font">
            <div className="w-full container mx-auto flex px-5 pt-24 pb-12 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center">
                        <span className="text-base md:text-sm text-blue-500 font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="inline align-top icon icon-tabler icon-tabler-arrow-narrow-left"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 fill="none"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                            >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                  <line x1="5" y1="12" x2="9" y2="16" />
                                  <line x1="5" y1="12" x2="9" y2="8" />
                            </svg>
                            <Link href="/blog" className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline">
                                BACK TO BLOG
                            </Link>
                        </span>
                    <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                        {post?.data[0]?.attributes?.title}
                    </h1>
                    <TagList tags={post?.data[0]?.attributes?.tags} />
                    <p className="text-sm md:text-base font-normal text-gray-700">
                        Published on {
                            `${new Intl.DateTimeFormat('en-US', { month: 'long'}).format(publicationDate)} 
                            ${publicationDate.getDay()}, ${publicationDate.getFullYear()}`
                        }
                    </p>
                </div>
            </div>
        </section>
        <section className="text-gray-700 body-font bg-white">
            <div className="w-full container mx-auto flex px-5 pt-12 pb-12 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center">
                    <div className="flex flex-wrap w-full">
                        <Markdown
                            className="post-markdown"
                            children={post?.data[0]?.attributes?.body}
                            transformImageUri={(uri) => `https://strapi-production-4cf6.up.railway.app${uri}`}
                            components={{
                                code: CodeBlock
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export async function getServerSideProps(context) {
    const slug = context.params.slug;

    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const response = await fetch(`https://strapi-production-4cf6.up.railway.app/api/articles?filters[slugurl][$eq]=${slug}`)
    const post = await response.json();

    if (post === undefined) {
        return {
            notFound: true
        };
    }

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return { props: { post } };
}
