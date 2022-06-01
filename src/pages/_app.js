import '../styles/globals.scss'
import {wrapper} from "../redux/store";
import {CookiesProvider} from "react-cookie";
import Layout from '../components/Layout/Layout'

function MyApp({Component, pageProps}) {

    return <>
        <CookiesProvider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </CookiesProvider>
    </>
}

export default wrapper.withRedux(MyApp)