import '../styles/globals.css'
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import withRedux from 'next-redux-wrapper';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from '@mui/material/Container';

import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Provider store={store}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                <Header />
                <Container>
                    <Component {...pageProps} />
                </Container>
                <Footer />
            </div>
        </Provider>
    </>
}

export default MyApp