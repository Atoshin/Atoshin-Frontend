import '../styles/globals.scss'
import {Provider} from 'react-redux';
import {AppProps} from 'next/app';
import Header from "../components/Layout/Header";
import ScrolledHeader from "../components/Layout/ScrolledHeader";
import Footer from "../components/Layout/Footer";
import Container from '@mui/material/Container';

import {store} from '../redux/store'
import LeftDrawer from "../components/Layout/LeftDrawer";
import {useRef, useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const [drawerState, setDrawerState] = useState(false)
    const [scrolled, setScrolled] = useState(true)
    const boxRef = useRef(null)


    return <>
        <Provider store={store}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}
                 onScroll={() => {
                     const winScroll =
                         boxRef.current.scrollTop
                     const height =
                         boxRef.current.scrollHeight -
                         boxRef.current.clientHeight
                     const scrolled = (winScroll / height) * 100
                     if (scrolled > 95) {
                         setScrolled(false)
                     }
                 }}
            >
                {
                    scrolled ?
                        <Header setDrawerMenu={setDrawerState}/>
                        :
                        <ScrolledHeader setDrawerMenu={setDrawerState}/>
                }
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