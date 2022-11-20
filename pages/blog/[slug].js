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

    const publicationDate = new Date(post.published);

    return <>
        <Head>
            <title>{post?.title || 'Post'} | debuss-a</title>
            <meta name="description" content={post?.meta_description || 'Post'} />
            <meta name="copyright" content="Alexandre DEBUSSCHÈRE" />
            <meta name="author" content="Alexandre DEBUSSCHÈRE" />
            <meta property="og:title" content={post?.seo_title} />
            <meta property="og:description" content={post?.meta_description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://debuss-a.me/blog/${post?.slugurl}`} />
            <meta property="og:image" content={`https://strapi.debuss-a.me${post?.seo_image?.file?.url}`} />
            <meta property="og:image:width" content={post?.seo_image?.file?.width} />
            <meta property="og:image:height" content={post?.seo_image?.file?.height} />
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
                        {post?.title}
                    </h1>
                    <TagList tags={post?.tags} />
                    <p className="text-sm md:text-base font-normal text-gray-700">
                        Published on {
                            `${new Intl.DateTimeFormat('en-US', { month: 'long'}).format(publicationDate)} 
                            ${publicationDate.getDay()}, ${publicationDate.getFullYear()}`
                        }
                        {/*by {post?.created_by?.firstname} {post?.created_by?.lastname}*/}
                    </p>
                </div>
            </div>
        </section>
        <section className="text-gray-700 body-font bg-white">
            <div className="w-full container mx-auto flex px-5 pt-12 pb-12 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center">
                    <div className="flex flex-wrap w-full">
                        {post && Object.keys(post).length === 0 && post.constructor === Object && <div className="flex mx-auto h-24">
                            <svg version="1.1" className="" width="200" height="100">
                                <circle fill="#cbd5e0" stroke="none" cx="30" cy="50" r="24">
                                    <animate
                                        attributeName="opacity"
                                        dur="1s"
                                        values="0;1;0"
                                        repeatCount="indefinite"
                                        begin="0.1"/>
                                </circle>
                                <circle fill="#cbd5e0" stroke="none" cx="100" cy="50" r="24">
                                    <animate
                                        attributeName="opacity"
                                        dur="1s"
                                        values="0;1;0"
                                        repeatCount="indefinite"
                                        begin="0.2"/>
                                </circle>
                                <circle fill="#cbd5e0" stroke="none" cx="172" cy="50" r="24">
                                    <animate
                                        attributeName="opacity"
                                        dur="1s"
                                        values="0;1;0"
                                        repeatCount="indefinite"
                                        begin="0.3"/>
                                </circle>
                            </svg>
                        </div>}
                        <Markdown
                            className="post-markdown"
                            children={post?.body}
                            transformImageUri={(uri) => `https://strapi.debuss-a.me${uri}`}
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
    const response = await fetch(`https://strapi.debuss-a.me/articles?slugurl=${slug}`)
    const post = (await response.json())[0];

    if (post === undefined) {
        return {
            notFound: true
        };
    }

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return { props: { post } };
}
