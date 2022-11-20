export default () => {
    return <>
        <div className="grid w-full gap-8 row-gap-10 sm:grid-cols-2 lg:py-20 py-8">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                <div className="mr-4">
                    <div className="flex items-center justify-center md:w-12 md:h-12 mb-4 rounded-full bg-indigo-50">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                            <path d="M11.558 1.034C5.174 1.034 0 6.21 0 12.592c0 1.258.201 2.47.574 3.597l.002-.007a12.415 12.415 0 01.53-1.787l.011-.03c.085-.222.179-.442.277-.66l.084-.181c.08-.171.165-.34.253-.507.036-.068.07-.136.108-.203.02-.038.044-.073.064-.11.094-.166.19-.332.29-.493l.075-.114c.125-.195.256-.386.393-.573l.035-.05c.144-.193.295-.38.451-.563l.1-.118c.155-.177.315-.35.481-.517l.099-.097a10.321 10.321 0 01.546-.503c.74-2.48 3.005-4.285 5.686-4.285 1.079 0 2.152.31 3.071.873a6.017 6.017 0 012.211 2.407l.007.015.04.074v.003l.004.002a9.925 9.925 0 011.567 1.198c.04.037.081.071.12.109.002 0 .006.005.007.006l-.002-.006-.001-.004v-.003l.042-.084c.377-2.384 1.43-4.102 2.67-4.102.934 0 1.762.975 2.276 2.476l.005.016.001.002c.145.158.287.331.424.521l.007.01.021.067-.02-.078c-1.542-4.569-5.863-7.857-10.952-7.857zM9.927 5.477C7.586 5.52 5.34 7.132 4.574 9.365l-.012.034a10.14 10.14 0 011.315-.895c2.806-1.656 6.479-1.646 9.278.016-.895-1.653-2.631-2.819-4.5-3.004a5.14 5.14 0 00-.728-.039zm9.834.5a1.36 1.36 0 00-.39.067c-1.265.562-1.719 2.073-2.031 3.303l-.016.072c.365-.62.808-1.215 1.396-1.642.835-.687 2.105-.655 2.916.053.308.326.141.008.031-.22-.342-.75-1.025-1.653-1.906-1.634zM21.67 7.98zm-9.32.335l-1.07 3.27-.002.005-.006.002-4.498 1.112h-.009l4.456 1.087c.105.11.227.205.36.28h.002c.042.024.085.045.129.065l.01.005c.041.018.083.033.126.047l.021.008c.04.013.08.023.12.032l.033.008a1.677 1.677 0 00.318.033 1.546 1.546 0 001.43-.948c.08-.186.123-.39.123-.604v-.011l-.001-.012c-.001-.054-.004-.107-.01-.16l-.001-.002a1.506 1.506 0 00-.026-.153l-.001-.004a1.511 1.511 0 00-.096-.288v-.003a1.521 1.521 0 00-.348-.49v-.003zm3.148.626c.048 1.008.036 2.046-.1 3.057-.17 2.018-1.19 3.798-1.972 5.616l-.03.08-.035.086c1.51-1.522 3.17-3.04 3.969-5.082.383-.636.118-1.342-.115-1.976-.17-.877-1.069-1.278-1.717-1.781zm6.172.572l-.588 2.688a1.764 1.764 0 00-.047.2c-.002.02-.007.04-.01.06a1.76 1.76 0 00-.016.222l-.002.031h.003c0 .628.297 1.136.663 1.137a.41.41 0 00.182-.045l.027-.015a.537.537 0 00.07-.047c.013-.01.024-.022.036-.033a.752.752 0 00.137-.168l.03-.054a1.23 1.23 0 00.052-.108l.017-.04c.02-.053.038-.108.053-.166l.002-.002.001-.003.404-.451-.407-.456v.001l-.02-.063zm-4.381.856c.69 1.716.85 3.707.091 5.43-.49 1.368-1.587 2.463-1.874 3.905.73.115 1.468.176 2.21.186 2.166.029 4.332-.42 6.284-1.365-2.04-2.869-4.121-5.755-6.711-8.156zm-4.948.977a.583.583 0 110 1.166.583.583 0 010-1.166zm9.352.37c.138 0 .249.19.249.426s-.111.426-.249.426c-.137 0-.248-.19-.248-.426 0-.235.11-.426.248-.426zm-4.044.184c-.016.112-.033.209-.05.29l-.006.023c-.01.05-.022.094-.033.128-.48 1.417-1.275 2.52-2.36 3.697-.147.16-.301.32-.459.484a58.883 58.883 0 01-1.196 1.205c-.112.11-.259.261-.425.436-.103.287-.22.61-.318.95-.044-.016-.086-.031-.131-.049-2.108-.815-3.519-1.904-3.519-1.904s1.086 1.414 2.915 2.74c.177.129.351.24.522.339-.075 1.194.452 2.34 2.83 2.682a4.81 4.81 0 001.228.008l-.01-.029a.062.062 0 00-.004-.01s-.167-.133-.379-.377a3.842 3.842 0 01-.584-.897 3.382 3.382 0 01-.266-.862 3.176 3.176 0 01-.006-.972c.017-.12.04-.241.072-.366.093-.374.255-.772.507-1.192l.002-.003.241-.404c1.103-1.86 1.797-3.275 1.506-5.441a8.943 8.943 0 00-.078-.476zm4.668.576l.001.008-.001-.008zm.013.203l.003.036v.01c0 .013-.003.025-.003.038 0-.014.003-.028.003-.043 0-.014-.002-.026-.003-.04zm-.012.275v.001l-.002.01-.002.014.004-.025zm1.353 5.928c-2.553 1.138-5.44 1.44-8.192 1.007-.14 1.108.384 2.218 1.214 2.93l.012.01c2.703-.433 4.975-2.168 6.966-3.946z"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <h6 className="mb-3 text-xl font-bold leading-5">PrestaShop</h6>
                    <p className="mb-3 text-gray-900">
                        Development of marketplace and carrier solutions.<br/>
                        In my career I had the opportunities to create and maintain industry renowned modules:{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/6059-cdiscount-marketplace.html" target="_blank" rel="noopener noreferrer" title="Cdiscount on PrestaShop Addons">Cdiscount</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/2639-fnac-market-place.html" target="_blank" rel="noopener noreferrer" title="Fnac on PrestaShop Addons">Fnac</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/85940-back-market.html" target="_blank" rel="noopener noreferrer" title="Back Market on PrestaShop Addons">Back Market</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/17140-spartoo.html" target="_blank" rel="noopener noreferrer" title="Spartoo on PrestaShop Addons">Spartoo</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/24950-mirakl-connecteur-multi-marketplaces.html" target="_blank" rel="noopener noreferrer" title="Mirakl on PrestaShop Addons">Mirakl</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/3511-rakuten-france.html" target="_blank" rel="noopener noreferrer" title="Rakuten on PrestaShop Addons">Rakuten</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/marketplace/39531-wizaplace-marketplaces-connector.html" target="_blank" rel="noopener noreferrer" title="Wizaplace on PrestaShop Addons">Wizaplace</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/transporteurs/86928-colissimo-max.html" target="_blank" rel="noopener noreferrer" title="Colissimo on PrestaShop Addons">Colissimo</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/point-relais-retrait-magasin/88973-relais-max.html" target="_blank" rel="noopener noreferrer" title="Mondial Relay on PrestaShop Addons">Mondial Relay</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://addons.prestashop.com/fr/transporteurs/41670-couriier-livraison-express-par-coursiers-velo.html" target="_blank" rel="noopener noreferrer" title="Couriier on PrestaShop Addons">Couriier</a>,{' '}
                        ...
                    </p>
                </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                <div className="mr-4">
                    <div className="flex items-center justify-center md:w-12 md:h-12 mb-4 rounded-full bg-indigo-50">
                        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <h6 className="mb-3 text-xl font-bold leading-5">
                        Shopify
                    </h6>
                    <p className="mb-3 text-gray-900">
                        Development and hosting of application, on AWS or managed on a server.<br/>
                        I am the author of many Shopify apps: {' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/colissimo-1?locale=fr" target="_blank" rel="noopener noreferrer" title="Colissimo on PrestaShop Addons">Colissimo</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/dpd?locale=fr" target="_blank" rel="noopener noreferrer" title="DPD on PrestaShop Addons">DPD</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/couriier?locale=fr" target="_blank" rel="noopener noreferrer" title="Couriier on PrestaShop Addons">Couriier</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://apps.shopify.com/fnac?locale=fr" target="_blank" rel="noopener noreferrer" title="Fnac on PrestaShop Addons">Fnac</a>,{' '}
                        Mirakl, Spartoo, Stuart, Chronopost,
                        ...
                    </p>
                </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                <div className="mr-4">
                    <div className="flex items-center justify-center md:w-12 md:h-12 mb-4 rounded-full bg-indigo-50">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                            <path d="m12.248 6.685c-.656 2.694-.614 2.55-1.209 5.014-.013.227-.201.406-.43.406-.025 0-.05-.002-.074-.006h.003-.675c-.02.004-.044.006-.067.006-.203 0-.37-.151-.396-.346v-.002c-.577-1.846-1.35-4.41-1.87-6.125-.192-.633-.066-.618.436-.605.174.005.342 0 .515 0 .012-.001.026-.002.041-.002.196 0 .358.145.385.333v.002c.169.605.281 1.069 1.246 4.88.018.075.042.146.066.215h.051c.023-.094.051-.182.075-.277q.548-2.313 1.092-4.63c.113-.48.314-.525.8-.525h.356c.32.005.422.07.502.389.281 1.097 1.102 4.77 1.251 5.174.24-.858-.084.37 1.336-5.108.098-.379.192-.454.577-.454h.591c.253.005.328.084.267.333-.113.446-.136.464-1.935 6.228-.146.464-.197.506-.684.506h-.497c-.342 0-.431-.061-.515-.394-.202-.759-1.092-4.485-1.238-5.01zm-6.364 5.211c.068.139.208.233.37.233.114 0 .216-.046.291-.121l.295-.197c.32-.211.342-.295.169-.633-.186-.354-.296-.773-.296-1.218 0-.015 0-.03 0-.045v.002c0-.146.028-2.61-.042-3.13-.062-.87-.665-1.584-1.471-1.811l-.014-.003c-.353-.098-.758-.154-1.177-.154-.126 0-.252.005-.375.015l.016-.001c-.736.029-1.42.224-2.025.547l.025-.012c-.091.049-.159.13-.191.227l-.001.003c-.026.118-.041.254-.041.393 0 .061.003.122.008.182l-.001-.008c.028.277.122.328.384.24.24-.08.469-.182.708-.253.345-.128.743-.202 1.159-.202.323 0 .635.045.931.128l-.024-.006c.317.095.564.334.668.639l.002.007c.077.258.122.554.122.861 0 .094-.004.188-.012.28l.001-.012c0 .258-.005.258-.258.211-.43-.107-.923-.169-1.431-.169-.187 0-.373.008-.556.025l.024-.002c-.726.053-1.36.406-1.787.933l-.004.005c-.26.36-.416.811-.416 1.298 0 .197.025.387.073.569l-.003-.016c.104.682.588 1.228 1.225 1.422l.012.003c.28.1.603.158.94.158.667 0 1.282-.227 1.77-.608l-.006.005c.178-.131.338-.29.52-.446.146.234.272.454.417.656zm-.72-2.887h.005c.111 0 .201.09.201.201 0 .014-.001.027-.004.041v-.001c-.01.178.005.356-.014.534-.05.523-.377.959-.83 1.164l-.009.004c-.294.154-.641.245-1.01.245-.075 0-.149-.004-.222-.011l.009.001c-.529-.031-.946-.467-.946-1.001 0-.082.01-.162.029-.239l-.001.007c.026-.548.46-.987 1.004-1.021h.003c.21-.034.452-.053.698-.053.388 0 .766.048 1.126.138l-.032-.007zm16.346 3.051c.825-.277 1.408-1.043 1.408-1.945 0-.141-.014-.279-.041-.412l.002.013c-.107-.653-.564-1.177-1.169-1.379l-.012-.004c-.912-.286-1.659-.575-2.383-.905l.129.053c-.209-.105-.351-.315-.356-.559v-.001c-.006-.037-.009-.079-.009-.122 0-.419.318-.763.726-.805h.003c.211-.05.453-.078.702-.078.217 0 .43.022.635.063l-.02-.003c.342.066.67.197 1.003.295.131.042.277.098.366-.075.046-.097.073-.211.073-.33 0-.298-.166-.557-.411-.689l-.004-.002c-.494-.236-1.074-.373-1.686-.373-.546 0-1.066.11-1.54.308l.026-.01c-.725.288-1.228.984-1.228 1.797 0 .779.462 1.451 1.127 1.755l.012.005c.361.174.754.277 1.134.417s.759.272 1.13.426c.256.142.427.411.427.72 0 .286-.146.537-.368.684l-.003.002c-1.298.72-3.04-.113-3.243-.178-.154-.051-.248.01-.295.174-.038.089-.06.193-.06.302 0 .369.255.679.599.761l.005.001c.531.213 1.146.336 1.79.336.546 0 1.072-.089 1.563-.253l-.035.01zm-7.634 7.625c2.498-.268 4.766-1.052 6.763-2.244l-.076.042c.375-.22.726-.48 1.082-.736.342-.24.15-.862-.53-.572-2.344 1.029-5.066 1.687-7.925 1.821l-.051.002c-.3.015-.651.023-1.004.023-1.152 0-2.284-.088-3.389-.258l.123.016c-3.117-.449-5.924-1.458-8.429-2.927l.109.059c-.088-.059-.189-.107-.297-.139l-.008-.002c-.23-.051-.361.22-.113.454 3.069 2.838 7.189 4.578 11.716 4.578h.014-.001c.675-.038 1.35-.042 2.015-.117zm8.187-4.32c.694.038.909.277.736.946-.178.694-.436 1.369-.651 2.053-.042.136-.197.295-.038.413.174.122.305-.047.422-.154.455-.433.813-.962 1.044-1.555l.01-.029c.258-.564.408-1.224.408-1.919 0-.016 0-.031 0-.047v.002c-.01-.29-.084-.413-.366-.492-.224-.069-.487-.122-.757-.148l-.016-.001c-.183-.023-.394-.036-.609-.036-.836 0-1.626.197-2.327.546l.03-.014c-.155.084-.289.176-.412.28l.004-.003c-.051.042-.15.248.113.286.024.002.053.003.081.003.069 0 .137-.006.202-.018l-.007.001c.526-.075 1.134-.118 1.751-.118.134 0 .267.002.4.006h-.019z"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <h6 className="mb-3 text-xl font-bold leading-5">
                        Amazon Web Service
                    </h6>
                    <p className="mb-3 text-gray-900">
                        Going serverless is nowadays standard and AWS is the best in its field!<br/>
                        In order to master it, I took courses on{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://serverless-visually-explained.com" target="_blank" rel="noopener noreferrer" title="Serverless Visually Explained">Serverless Visually Explained</a>,
                        today all my new projects are hosted on AWS.
                    </p>
                </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                <div className="mr-4">
                    <div className="flex items-center justify-center md:w-12 md:h-12 mb-4 rounded-full bg-indigo-50">
                        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 511.999 511.999">
                            <g>
                                <g>
                                    <path d="M424.464,226.038h-31.289c-4.637,0-8.394,3.758-8.394,8.394v17.485H370.51v-17.485c0-4.636-3.757-8.394-8.394-8.394
                                        h-34.743v-17.351h34.743c4.637,0,8.394-3.758,8.394-8.394V66.121c0-20.285-16.502-36.787-36.787-36.787h-69.329V8.394
                                        c0-4.636-3.757-8.394-8.394-8.394c-4.637,0-8.394,3.758-8.394,8.394v20.939h-69.33c-20.285,0-36.787,16.503-36.787,36.787v134.173
                                        c0,4.636,3.757,8.394,8.394,8.394h34.744v17.351h-34.744c-4.637,0-8.394,3.758-8.394,8.394v17.485h-14.271v-17.485
                                        c0-4.636-3.757-8.394-8.394-8.394h-31.29c-4.637,0-8.394,3.758-8.394,8.394v169.096c0,4.636,3.757,8.394,8.394,8.394h31.289
                                        c4.637,0,8.394-3.758,8.394-8.394V303.215h14.271v68.203c0,4.636,3.757,8.394,8.394,8.394h14.9v75.713h-10.586
                                        c-4.637,0-8.394,3.758-8.394,8.394v39.686c0,4.636,3.757,8.394,8.394,8.394h70.744c4.637,0,8.394-3.758,8.394-8.394v-39.686
                                        c0-4.636-3.757-8.394-8.394-8.394h-10.585v-75.713h83.289v75.713h-10.586c-4.637,0-8.394,3.758-8.394,8.394v39.686
                                        c0,4.636,3.757,8.394,8.394,8.394h70.744c4.637,0,8.394-3.758,8.394-8.394v-39.686c0-4.636-3.757-8.394-8.394-8.394h-10.585
                                        v-75.713h14.9c4.637,0,8.394-3.758,8.394-8.394v-68.203h14.271v100.312c0,4.636,3.757,8.394,8.394,8.394h31.289
                                        c4.637,0,8.394-3.758,8.394-8.394V234.431C432.857,229.796,429.1,226.038,424.464,226.038z M110.43,395.134H95.929V242.826h14.501
                                        V395.134z M141.489,286.428h-14.271v-17.723h14.271V286.428z M158.276,191.9V66.121c0-11.028,8.972-20,20-20h155.447
                                        c11.028,0,20,8.972,20,20V191.9H158.276z M310.586,208.686v17.351H201.414v-17.351H310.586z M216.547,472.314v22.898h-53.957
                                        v-22.898H216.547z M181.571,455.526v-75.713h15.998v75.713H181.571z M349.409,472.314v22.898h-53.957v-22.898H349.409z
                                         M314.433,455.526v-75.713h15.998v75.713h0H314.433z M353.723,363.024H158.276V242.826h195.446V363.024z M384.781,286.428H370.51
                                        v-17.723h14.271V286.428z M416.07,395.134h-14.501V242.826h14.501V395.134z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M204.236,84.744c-20.803,0-37.727,16.924-37.727,37.726c0,20.802,16.924,37.726,37.727,37.726
                                        c20.802,0.001,37.726-16.923,37.726-37.726C241.963,101.668,225.039,84.744,204.236,84.744z M204.236,143.409
                                        c-11.545,0-20.94-9.392-20.94-20.939c0-11.545,9.394-20.939,20.94-20.939c11.545,0,20.939,9.393,20.939,20.939
                                        C225.175,134.016,215.782,143.409,204.236,143.409z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M307.765,84.744c-20.803,0-37.727,16.924-37.727,37.726c0,20.802,16.924,37.727,37.727,37.727
                                        c20.802,0,37.726-16.924,37.726-37.726S328.567,84.744,307.765,84.744z M307.765,143.409c-11.545,0-20.94-9.393-20.94-20.939
                                        c0-11.545,9.393-20.939,20.94-20.939c11.545,0,20.939,9.393,20.939,20.939C328.703,134.016,319.31,143.409,307.765,143.409z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M256.001,270.9c-30.317,0-54.982,24.664-54.982,54.982c0,4.636,3.757,8.394,8.394,8.394h93.176
                                        c4.637,0,8.394-3.758,8.394-8.394C310.982,295.565,286.318,270.9,256.001,270.9z M218.735,317.488
                                        c3.835-17.036,19.089-29.8,37.265-29.8c18.177,0,33.43,12.764,37.265,29.8H218.735z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <circle cx="326.744" cy="267.215" r="8.394"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <circle cx="185.257" cy="267.215" r="8.394"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div>
                    <h6 className="mb-3 text-xl font-bold leading-5">
                        Automated testing
                    </h6>
                    <p className="mb-3 text-gray-900">
                        Untested code is legacy code.<br/>
                        Every piece of code I provide is tested thoroughly in order to be confident each time you deploy
                        something new and facilitate the onboarding of new team members.
                    </p>
                </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                <div className="mr-4">
                    <div className="flex items-center justify-center md:w-12 md:h-12 mb-4 rounded-full bg-indigo-50">
                        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 16 16">
                            <rect width="16" height="16" id="icon-bound" fill="none" />
                            <path d="M6,4H3.528c0.075-0.081,0.15-0.162,0.228-0.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756 C13.375,4.891,14,6.397,14,8h2c0-4.419-3.581-8-8-8C5.609,0,3.466,1.047,2,2.709V0H0v6h6V4z M10,12h2.472 c-0.075,0.081-0.15,0.163-0.228,0.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8H0 c0,4.419,3.581,8,8,8c2.391,0,4.534-1.047,6-2.709V16h2v-6h-6V12z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <h6 className="mb-3 text-xl font-bold leading-5">
                        Continuous integration
                    </h6>
                    <p className="mb-3 text-gray-900">
                        Automatically and continuously deploying new code into production is a dream for any serious business that wants to please its customers.
                        We can make it happen without any infrastructure cost thanks to{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" title="Amazon Web Service">AWS</a>.
                    </p>
                </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                <div className="mr-4">
                    <div className="flex items-center justify-center md:w-12 md:h-12 mb-4 rounded-full bg-indigo-50">
                        <svg fill="currentColor" className="w-10 h-10" viewBox="0 0 1024 1024">
                            <path d="M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z"/>
                            <path d="M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7 6 17.2 13.6 33.6 22.7 49 24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2c41.5-24.3 76.2-59 100.5-100.5 9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3C317.7 752 308 716.8 308 680V412h408v268z"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <h6 className="mb-3 text-xl font-bold leading-5">
                        Error monitoring
                    </h6>
                    <p className="mb-3 text-gray-900">
                        What if we could prevent your company to loose even more money?<br/>
                        We can set up a tool that monitors and logs everything wrong happening on your web applications instead of relying on feedback:{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://sentry.io" target="_blank" rel="noopener noreferrer" title="Sentry">Sentry</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://www.bugsnag.com" target="_blank" rel="noopener noreferrer" title="Bugsnag">Bugsnag</a>,{' '}
                        <a className="text-blue-500 no-underline hover:underline" href="https://www.datadoghq.com" target="_blank" rel="noopener noreferrer" title="Datadog">Datadog</a>,{' '}
                        ...
                    </p>
                </div>
            </div>
        </div>
    </>;
};