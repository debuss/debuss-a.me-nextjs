import {useState, useCallback} from "react";
import Link from "next/link";
import useEventListener from "../hooks/useEventListener";

export default () => {
    const scrollHandler = useCallback(() => {
        let h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight',
            progress = document.querySelector('#progress'),
            scroll;
        let scrollpos;
        let header = document.getElementById('header');
        let navcontent = document.getElementById('nav-content');

        // Refresh scroll % width
        scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        progress.style.setProperty('--scroll', scroll + '%');

        // Apply classes for slide in bar
        scrollpos = window.scrollY;

        if (scrollpos > 10) {
            header.classList.add("bg-white");
            header.classList.add("shadow");
            navcontent.classList.remove("bg-slate-200");
            navcontent.classList.add("bg-white");
        } else {
            header.classList.remove("bg-white");
            header.classList.remove("shadow");
            navcontent.classList.remove("bg-white");
            navcontent.classList.add("bg-slate-200");
        }
    }, []);
    useEventListener('scroll', scrollHandler);

    const [hidden, setHidden] = useState(true);

    return <>
        <nav id="header" className="fixed w-full z-10 top-0">
            <div id="progress" className="h-1 z-20 top-0" style={{background: 'linear-gradient(to right, rgb(59 130 246) var(--scroll), transparent 0)'}}/>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                <div className="pl-4">
                    <Link className="text-gray-900 text-base no-underline hover:no-underline font-bold text-xl" href="/" onClick={() => setHidden(true)}>
                        ( new <span className="text-blue-500">debuss-a</span>() )-&gt;<span className="text-blue-500">me()</span>;
                    </Link>
                </div>
                <div className="block lg:hidden pr-4">
                    <button
                        id="nav-toggle"
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
                        onClick={() => {
                            setHidden(!hidden);
                            window.scrollTo(window.scrollX, window.scrollY - 1);
                            window.scrollTo(window.scrollX, window.scrollY + 1);
                        }}
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${hidden ? 'hidden' : ''} lg:block mt-2 lg:mt-0 z-20 bg-slate-200`} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link
                                className="inline-block text-gray-700 no-underline hover:text-gray-900 hover:text-underline py-2 px-4 w-full"
                                href="/blog"
                                activeclassname="text-gray-900 font-semibold"
                                onClick={() => setHidden(true)}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link
                                className="inline-block text-gray-700 no-underline hover:text-gray-900 hover:text-underline py-2 px-4 w-full"
                                href="/resume"
                                activeclassname="text-gray-900 font-semibold"
                                onClick={() => setHidden(true)}
                            >
                                R&eacute;sum&eacute;
                            </Link>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-700 no-underline hover:text-gray-900 hover:text-underline py-2 px-4 w-full" href="mailto:alexandre.debusschere@hey.com" target="_blank" rel="noopener noreferrer">
                                <svg fill="currentColor" viewBox="0 0 474 474" className="w-5 h-5 inline mr-2 align-text-bottom">
                                    <g>
                                        <path d="M437.5,59.3h-401C16.4,59.3,0,75.7,0,95.8v282.4c0,20.1,16.4,36.5,36.5,36.5h401c20.1,0,36.5-16.4,36.5-36.5V95.8
                                                C474,75.7,457.6,59.3,437.5,59.3z M432.2,86.3L239.5,251.1L46.8,86.3H432.2z M447,378.2c0,5.2-4.3,9.5-9.5,9.5h-401
                                                c-5.2,0-9.5-4.3-9.5-9.5V104.9l203.7,174.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.5
                                                c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,1,0.4c0.1,0,0.3,0.1,0.4,0.1
                                                c0.3,0.1,0.6,0.2,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.7,0.1,1,0.2c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1l0,0l0,0
                                                c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.2c0.1,0,0.3-0.1,0.4-0.1
                                                c0.3-0.1,0.6-0.2,1-0.4c0.1,0,0.2-0.1,0.3-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5
                                                c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3L447,109.2V378.2z"
                                        />
                                    </g>
                                </svg>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>;
};