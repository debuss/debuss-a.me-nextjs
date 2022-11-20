import Image from "next/image";
import Me from "../public/me.jpeg";

export default () => {
    return <>
        <div className="w-full container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center mb-6">
            <div className="mb-10 md:mb-0 w-1/2">
                <Image
                    src={Me}
                    alt="Me"
                    className="object-cover object-center rounded-full mx-auto"
                />
            </div>
            <div
                className="lg:flex-grow lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Hi, I am Alexandre
                </h1>
                <p className="mb-4 leading-relaxed">
                    A web developer from{' '}
                    <a href="https://goo.gl/maps/zJJMVMVK1VQyspX49"
                       className="text-blue-500 no-underline hover:underline" target="_blank"
                       rel="noopener noreferrer">Boulogne-sur-Mer</a>,
                    specialized in e-commerce apps development.
                </p>
                <p className="mb-4 leading-relaxed">
                    I spent the early part of my career as Lead Developer/Project Manager for{' '}
                    <a href="https://common-services.com"
                       className="text-blue-500 no-underline hover:underline" target="_blank"
                       rel="noopener noreferrer">Common-Services</a>{' '}
                    doing module development for <a href="https://prestashop.com"
                                                    className="text-blue-500 no-underline hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer">PrestaShop</a> and{' '}
                    <a href="https://www.shopify.com" className="text-blue-500 no-underline hover:underline"
                       target="_blank" rel="noopener noreferrer">Shopify</a>,{' '}
                    in <a href="https://goo.gl/maps/Nmpwg9iCLBZUW3oc7"
                          className="text-blue-500 no-underline hover:underline" target="_blank"
                          rel="noopener noreferrer">Bangkok</a>.
                </p>
                <p className="mb-4 leading-relaxed">
                    Currently, I work as a Lead Developer for <a href="https://cdiscount.com"
                                                                 className="text-blue-500 no-underline hover:underline"
                                                                 target="_blank"
                                                                 rel="noopener noreferrer">Cdiscount</a>,{' '}
                    where the team and I manage customer service applications.<br/>
                    Freelance developer as a secondary occupation at{' '}
                    <a href="https://kosmonaft.dev" className="text-blue-500 no-underline hover:underline"
                       target="_blank" rel="noopener noreferrer">Kosmonaft.dev</a>.
                </p>
            </div>
        </div>
    </>;
};