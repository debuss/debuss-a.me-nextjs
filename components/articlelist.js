import Link from "next/link";
import TagList from "./taglist";

export default ({ posts }) => {
    return <>
        {posts?.data?.map((post, key) => {
            const publicationDate = new Date(post.attributes.published);

            return (
                <div className="container px-0 py-8 mx-auto" key={key}>
                    <div className="-my-8">
                        <div className="py-8 flex flex-no-wrap">
                            <div className="md:w-48 md:mb-0 mb-6 mt-1 flex-shrink-0 flex flex-col hidden md:block">
                                <span
                                    className="tracking-widest font-medium title-font mt-2 ml-1 text-gray-600 text-sm">
                                    {
                                        `${new Intl.DateTimeFormat('en-US', { month: 'long'}).format(publicationDate)} 
                                        ${publicationDate.getDay()}, ${publicationDate.getFullYear()}`
                                    }
                                </span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-0">
                                    <Link href={`/blog/${post.attributes.slugurl}`}>
                                        {post.attributes.title}
                                    </Link>
                                </h2>
                                <TagList tags={post.attributes?.tags} />
                                <p className="leading-relaxed">
                                    {post.attributes.summary}
                                </p>
                                <div className="text-blue-500 inline-flex items-center mt-4">
                                    <Link href={`/blog/${post.attributes.slugurl}`}>
                                        Read more
                                        <svg
                                            className="w-4 h-4 ml-2 inline-block"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"/>
                                            <path d="M12 5l7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
    </>;
};