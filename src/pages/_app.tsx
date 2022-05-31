import '../styles/globals.scss'
import {AppProps} from 'next/app';
import {wrapper} from "../redux/store";
import {CookiesProvider} from "react-cookie";
import Layout from '../components/Layout/Layout'

function MyApp({Component, pageProps}: AppProps) {

    return <>
        <CookiesProvider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </CookiesProvider>
    </>
}

export default wrapper.withRedux(MyApp)