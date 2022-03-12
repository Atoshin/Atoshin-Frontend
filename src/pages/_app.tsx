import '../styles/globals.scss'
import {AppProps} from 'next/app';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Container from '@mui/material/Container';
import LeftDrawer from "../components/Layout/LeftDrawer";
import {useEffect, useRef, useState} from "react";
import {wrapper} from "../redux/store";
import {CookiesProvider} from "react-cookie";
import {useRouter} from 'next/router';
import AppSnackbar from '../components/Layout/Snackbar';

function MyApp({Component, pageProps}: AppProps) {
    const [drawerState, setDrawerState] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const router = useRouter()


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
        <CookiesProvider>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                {router.pathname !== '/welcome' &&
                <Header setDrawerMenu={setDrawerState} isScrolled={scrolled}/>
                }
                <LeftDrawer state={drawerState} setState={setDrawerState}/>
                {router.pathname === '/welcome' ?
                    <Component {...pageProps}/>
                    :
                    <Container className="main-mui-container">
                        <Component {...pageProps}/>
                    </Container>
                }
                {router.pathname !== '/welcome' &&
                <Footer/>
                }
            </div>
            <AppSnackbar/>
        </CookiesProvider>
    </>
}

export default wrapper.withRedux(MyApp)