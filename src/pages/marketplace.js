import classes from '../styles/Marketplace/Marketplace.module.scss'
import 'react-slideshow-image/dist/styles.css'
import axios from "axios";
import {TimeDifference} from "../components/Marketplace/TimeDifference";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Slider from "../components/Marketplace/Slider";
import SliderMain from "../components/Marketplace/SliderMain";
import Head from "next/head";

export default function Marketplace({assets}) {
    const router = useRouter();
    const [hovered, setHovered] = useState({})

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
    }, [])

    const mouseOver = (a) => {
        // setHovered({...hovered, [a]: true})
    }
    const mouseOut = (a) => {
        // setHovered({...hovered, [a]: false})
    }

    return <div className={classes.main}>
        <Head>
            <title>Marketplace</title>
            <meta name="description" content="Atoshin Marketplace"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h1 className={classes.mainTitle}></h1>
        <hr className={classes.hr}/>
        <div
            className={classes.items}>
            {assets.map((asset, idx) => {
                return (
                    <SliderMain key={idx} idx={idx} asset={asset} hovered={hovered}/>
                )
            })}
        </div>
    </div>
}


export async function getServerSideProps(ctx) {
    const {
        data: {
            assets
        }
    } = await axios.get(`${process.env.BASE_URL}/api/marketplace`)

    return {
        props: {
            assets
        }
    }
}