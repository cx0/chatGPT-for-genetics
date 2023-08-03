// _app.js
import React from 'react';
import '../styles/global.css';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-GRYK5L4WC3');

function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            ReactGA.send("pageview");
        }
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
