import {AppProps} from "next/app";
import LeftDrawer from "./LeftDrawer";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import AppSnackbar from "./Snackbar";
import Header from "./Header";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";


export default function Layout({children}) {
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
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            {router.pathname !== '/welcome' &&
                <Header setDrawerMenu={setDrawerState} isScrolled={scrolled}/>
            }
            <LeftDrawer state={drawerState} setState={setDrawerState}/>
            {router.pathname === '/welcome' ?
                {children}
                :
                <Container className="main-mui-container">
                    {children}
                </Container>
            }
            {router.pathname !== '/welcome' &&
                <Footer/>
            }
        </div>
        <AppSnackbar/>
    </>
}