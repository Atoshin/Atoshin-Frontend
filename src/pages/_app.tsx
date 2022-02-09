import '../styles/globals.scss'
import {AppProps} from 'next/app';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Container from '@mui/material/Container';
import LeftDrawer from "../components/Layout/LeftDrawer";
import {useEffect, useRef, useState} from "react";
import {wrapper} from "../redux/store";

function MyApp({Component, pageProps}: AppProps) {
    const [drawerState, setDrawerState] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const setScroll = (e) => {
            if (window.scrollY > 300) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', setScroll)

        return function cleanup() {
            window.removeEventListener('scroll', setScroll)
        }
    }, [])

    return <>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            <Header setDrawerMenu={setDrawerState} isScrolled={scrolled}/>
            <LeftDrawer state={drawerState} setState={setDrawerState}/>
            <Container className="main-mui-container">
                <Component {...pageProps} />
            </Container>
            <Footer/>
        </div>
    </>
}

export default wrapper.withRedux(MyApp)