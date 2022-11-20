import Link from "next/link";

export default () => {
    return <>
        <section className="text-gray-700 body-font">
            <div className="w-full container mx-auto flex px-5 pt-24 pb-12 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Whooops!
                    </h1>
                    <p className="mb-4 leading-relaxed">
                        You made it crash...
                    </p>
                </div>
            </div>
        </section>
        <section className="text-gray-700 body-font bg-white">
            <div className="w-full container mx-auto px-5 py-12 items-center">
                <p className="mb-8">The page you are looking for could not be rendered.</p>
                <p className="">Continue with:</p>
                <ul className="list-disc list-inside">
                    <li><Link className="text-blue-500 no-underline hover:underline" href="/">Home page</Link></li>
                    <li><Link className="text-blue-500 no-underline hover:underline" href="/blog">Blog</Link></li>
                    <li><Link className="text-blue-500 no-underline hover:underline" href="/resume">Resume</Link></li>
                    <li><Link className="text-blue-500 no-underline hover:underline" href="/contact">Contact</Link></li>
                </ul>
            </div>
        </section>
    </>;
};