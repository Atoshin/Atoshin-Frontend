import classes from '../../styles/landing/Landing.module.scss'
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";
import axios from 'axios';

export default function Landing({data}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [cookie, setCookie] = useCookies();
    const router = useRouter();
    const autoRedirect = () => {
        return router.push('/')
    }


    useEffect(() => {
        setCookie('visitedLanding', true, {
            path: "/",
            sameSite: true,
            maxAge: 365 * 24 * 60 * 60
        })
        setTimeout(() => {
            autoRedirect()
        }, 15000)
    }, [])
    return (
        <>
            <Head>
                <title>Welcome to Atoshin</title>
            </Head>
            <video className={classes.bgVideo} width="1000" autoPlay muted loop id="myVideo">
                {/*<source src="/public/videos/landing-intro.webm"*/}
                {/*        type="video/webm"/>*/}
                <source src="/videos/landing-video.mp4"
                        type="video/mp4"/>
            </video>
            <img className={classes.topLogo} src="/images/atoshin-logo-typography-white.svg" alt=""/>
            <img className={classes.midLogo} src="/images/atoshin-logo-hexagon-white.svg" alt=""/>
            <div className={classes.midText}>{data}</div>
            <Link href="/">
                <img className={classes.vector} src="/icons/vector-down.svg" alt=""/>
            </Link>
        </>
    )
}


export async function getStaticProps() {
    const {data: {data}} = await axios.get(`${process.env.BACKEND_BASE_URL}/landing/content`)

    return {
        props: {
            data
        }
    }
}