export default () => {
    return <>
        <div className="w-full py-16 pt-16 pb-20">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center md:border-r md:mb-0 mb-8">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{`${(new Date()).getFullYear() - 2013}+`}</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base p-4 md:p-0">
                        Years of experience
                    </p>
                </div>
                <div className="text-center md:border-r md:mb-0 mb-8">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">1M+</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base p-4 md:p-0">
                        Line of code
                    </p>
                </div>
                <div className="text-center md:border-r md:mb-0 mb-8">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">50+</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base p-4 md:p-0">
                        Happy clients
                    </p>
                </div>
                <div className="text-center md:mb-0 mb-8">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">100+</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base p-4 md:p-0">
                        Projects
                    </p>
                </div>
            </div>
        </div>
    </>;
};