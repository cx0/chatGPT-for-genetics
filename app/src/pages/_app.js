import '../styles/global.css';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
    React.useEffect(() => {
        ReactGA.initialize('G-GRYK5L4WC3');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
