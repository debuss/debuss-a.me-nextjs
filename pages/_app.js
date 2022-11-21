import {useEffect} from 'react';
import Router from 'next/router';
import * as ackeeTracker from 'ackee-tracker';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import '../styles/globals.css';

export default ({Component, pageProps}) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.ackeeTrackerInstance = ackeeTracker.create('https://analytics.kosmonaft.dev', {
              /*
               * Enable or disable tracking of personal data.
               * We recommend to ask the user for permission before turning this option on.
               */
              detailed: true,
              /*
               * Enable or disable tracking when on localhost.
               */
              ignoreLocalhost: true,
              /*
               * Enable or disable the tracking of your own visits.
               * This is enabled by default, but should be turned off when using a wildcard Access-Control-Allow-Origin header.
               * Some browsers strictly block third-party cookies. The option won't have an impact when this is the case.
               */
              ignoreOwnVisits: true
            });
            window.ackeeTrackerInstance.record('3e271f87-7650-4d9a-89df-42d400263d26')

            Router.events.on('routeChangeComplete', () => window.ackeeTrackerInstance.record('3e271f87-7650-4d9a-89df-42d400263d26'))
        }
    }, []);

    return <>
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
    </>;
};
