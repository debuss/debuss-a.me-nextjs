import Head from 'next/head';

export default () => {
    return <>
        <Head>
            <title>Resume | debuss-a</title>
            <meta name="description" content="All my achievements are listed here."/>
            <meta name="copyright" content="Alexandre DEBUSSCHÈRE"/>
            <meta name="author" content="Alexandre DEBUSSCHÈRE"/>
        </Head>
        <section className="text-gray-700 body-font">
            <div className="w-full container mx-auto flex px-5 pt-24 pb-12 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Curriculum Vitae!
                    </h1>
                    <p className="mb-4 leading-relaxed">
                        A curated list of my achievements.
                    </p>
                </div>
            </div>
        </section>
        <section className="text-gray-700 body-font bg-white">
            <div className="w-full container mx-auto px-5 py-12 items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="lg:flex-grow flex flex-col md:items-start md:text-left w-full">
                        <strong>
                            Lead Dev @ <a href="https://cdiscount.com" className="text-blue-500 no-underline hover:underline" target="_blank" rel="noopener noreferrer">Cdiscount</a> - France (2020 - <span className="underline">Today</span>)
                        </strong>
                        <div className="flex flex-wrap w-full mt-4">
                            <p>
                                Development of new features and maintenance of the Cdiscount customer care application used by support team during customer call.<br/>
                                Development of Octopia Customer Care Portal, an application included in Octopia to deal with customer support.
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center w-full">
                        <strong>
                            Freelance @ <a href="https://kosmonaft.dev" className="text-blue-500 no-underline hover:underline" target="_blank" rel="noopener noreferrer">Kosmonaft.dev</a> - France (2020 - <span className="underline">Today</span>)
                        </strong>
                        <div className="flex flex-wrap w-full mt-4">
                            <p>
                                Continuation of my activity with Common-Services from France.<br/>
                                Development of new modules for PrestaShop: Back Market, ColiShip, Colissimo Max, Spartoo Max, ...<br/>
                                Development of modules/apps for PrestaShop and Shopify on <a href="https://fr.fiverr.com/alexandredeb" className="text-blue-500 no-underline hover:underline" target="_blank" rel="noopener noreferrer">Fiverr</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center w-full pt-10 border-t border-gray-400">
                    <strong>Lead Dev @ <a href="https://blog.common-services.com" className="text-blue-500 no-underline hover:underline" target="_blank" rel="noopener noreferrer">Common-Service</a> - Bangkok (2013 - 2020)</strong>
                    <div className="flex flex-wrap w-full mt-4">
                        <p>
                            Design of the planning, teams and technologies for the creation of e-commerce applications
                            (PrestaShop / Shopify), monitoring of ongoing projects and application support for applications in production.<br/>
                            Development of successful applications such as Colissimo/SoNice (pickup points, labelling, tracking and return)
                            on PrestaShop and Shopify. Maintenance and evolution of marketplace modules (Cdiscount, Rakuten, Fnac, Mirakl, Spartoo, etc).
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/*<table className="table-auto w-full">*/}
        {/*    <thead>*/}
        {/*    <tr>*/}
        {/*        <th className="px-4 py-2">Date</th>*/}
        {/*        <th className="px-4 py-2">Project</th>*/}
        {/*    </tr>*/}
        {/*    </thead>*/}
        {/*    <tbody>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2020-07</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/rakuten-france?locale=fr&amp;target=_blank">Rakuten France App for Shopify</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2020-06</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/fnac?locale=fr&amp;target=_blank">Fnac App for Shopify</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2020-05</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/couriier?locale=fr&amp;target=_blank">Couriier App for Shopify</a><br /><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/stuart?locale=fr&amp;target=_blank">Stuart App for Shopify</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2020-01</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/cdiscount-feed?locale=fr&amp;target=_blank">Cdiscount Feed App for Shopify</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2019-09</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/dpd?locale=fr&amp;target=_blank">DPD France App for Shopfiy</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2019-08</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/transporteurs/46249-sonice-pro.html?target=_blank">SoNice Pro module for PrestaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2019-05</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/chronopost?locale=fr&amp;target=_blank">Chronopost App for Shopify</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2019-03</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/colissimo-1?locale=fr&amp;target=_blank">Colissimo App for Shopify</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2018-08</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/transporteurs/41670-couriier-livraison-express-par-coursiers-velo.html?target=_blank">Couriier module for PrestaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2016-01</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/suivi-livraison/21850-mondial-relay-advanced.html?target=_blank">Mondial Relay module for PrestaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2015-12</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/transporteurs/2704-colissimo-domicile-et-points-de-retrait.html?target=_blank">Colissimo Domicile et Points de Retrait module for PrestaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2014-07</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/preparation-expedition/16511-colissimo-etiquetage-sonice.html?target=_blank">SoNice Étiquetage module for PrestaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2014-06</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/17140-spartoo.html?target=_blank">Spartoo marketplace module for PrestaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2014-01</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/preparation-expedition/9058-sonice-retour-etiquette-retour-colissimo.html?target=_blank">SoNice Retour module for PretaShop</a><br /><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/suivi-livraison/9824-sonice-suivi-colis-colissimo.html?target=_blank">SoNice Suivi de Colis module for PretaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td className="border px-4 py-2">2013-09</td>*/}
        {/*        <td className="border px-4 py-2"><a target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/transporteurs/2104-so-colissimo-liberte.html?target=_blank">So Colissimo Liberté module for PrestaShop</a></td>*/}
        {/*    </tr>*/}
        {/*    </tbody>*/}
        {/*</table>*/}
    </>;
};
