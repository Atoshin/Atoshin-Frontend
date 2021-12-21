import '../styles/globals.scss'
import {Provider} from 'react-redux';
import {AppProps} from 'next/app';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from '@mui/material/Container';

import {store} from '../redux/store'
import LeftDrawer from "../components/HomePage/LeftDrawer";
import {useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const [drawerState, setDrawerState] = useState(false)


    return <>
        <Provider store={store}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                <Header setDrawerMenu={setDrawerState}/>
                <LeftDrawer state={drawerState} setState={setDrawerState}/>
                <Container className="main-mui-container">
                    <Component {...pageProps} />
                </Container>
                <Footer/>
            </div>
        </Provider>
    </>
}

export default MyApp