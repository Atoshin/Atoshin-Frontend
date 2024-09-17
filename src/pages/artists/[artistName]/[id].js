import classes from "../../../styles/ArtistProfile/ArtistProfile.module.scss";
import style from '../../../styles/ArtCenter/artCenter.module.scss'
import {Button, Fade, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useEffect, useRef, useState} from "react";
import * as React from "react";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import ArtistTabPanel from "../../../components/ArtistProfile/ArtistTabPanel";
import axios from "axios";
import shortenWords from "../../../functions/shortenWords";
import extractContent from "../../../functions/getHtmlInnerText";
import Link from 'next/link';
import NewsModal from "../../../components/ArtistProfile/NewsModal";
import Head from "next/head";

import RelatedSlider from "../../../components/ArtistProfile/RelatedSlider";


export default function Artist({artist, relatedAssets}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));
    const matches4 = useMediaQuery(theme.breakpoints.down('xl'));
    const relatedSliderRef = useRef()
    const [openNewsModal, setOpenNewsModal] = useState(false);
    // const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    // ];
    // const properties = {
    //     autoplay: true,
    //     cssClass: style.slider,
    //     easing: "ease",
    //     slidesToShow: 2,
    //     // slidesToShow:matches ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 4 : 5,
    //     infinite: true,
    //     slidesToScroll: 1,
    //     transitionDuration: 500,
    //     duration: 5000,
    //     arrows: matches ? false : artist.assets.length < 5 ? true : false
    // };
    return (
        <>
            <Head>
                <title>{artist.fullName}</title>
            </Head>
            <NewsModal open={openNewsModal} setOpen={setOpenNewsModal} news={artist.news}/>
            <div className={classes.main}>
                <div className={classes.topSec}>

                    <div className={classes.artistImgSecMob}>
                        <div className={classes.mobileArtistImg}
                             style={{backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,}}
                            // style={{backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`}}
                        />
                    </div>
                    {/*{matches &&*/}
                    {/*    <div className={classes.artistImgSec}>*/}
                    {/*        <div className={classes.MobileArtistImg} style={{backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,}}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*}*/}
                    <div className={classes.artistDetailSec}>
                        <div className={classes.artistName}>{artist.fullName}</div>
                        <a href={artist.website} target="_blank" rel="noreferrer"
                           className={classes.artistWebsite}>{artist.website}</a>
                        <div className={classes.rankingMainSec}>
                            <a target="_blank" href={artist.rankingLink} rel="noreferrer"
                               className={classes.rankingText}>
                                Ranking
                            </a>
                            <div className={classes.rankingSec}>
                                <div className={classes.globalRank}>
                                    {
                                        artist.worldRanking ?
                                            ` Top ${artist.worldRanking}.Global` :
                                            'unKnown'
                                    }
                                    {/*{artist.worldRanking}*/}
                                </div>
                                <div className={classes.domesticRank}>
                                    {/*{artist.iranRanking}*/}
                                    {
                                        artist.iranRanking ?
                                            `Top ${artist.iranRanking}.Iran, Islamic Republic Of Iran` :
                                            !artist.iranRanking && !artist.worldRanking ?
                                                ''
                                                :
                                                'unknown'
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={classes.newsMainSec} onClick={() => setOpenNewsModal(true)}>
                            <div className={classes.newsSec}>
                                <div className={classes.newsText}>
                                    News
                                </div>
                                <div className={classes.newsTitle}>Interesting news and stories about artist</div>
                                {/*{artist.news.map((newsSingular, idx) => {*/}
                                {/*    return <a key={idx} target="_blank" rel="noreferrer" href={newsSingular.link} className={classes.newsLink}>*/}
                                {/*        {newsSingular.title}*/}
                                {/*    </a>*/}
                                {/*})}*/}
                            </div>
                            {/*<img src="/icons/link-out.svg" alt=""/>*/}
                        </div>
                    </div>

                    <div className={classes.artistImgSec}>
                        <div className={classes.artistImg}
                             style={{backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,}}/>
                    </div>
                    {/*{!matches &&*/}
                    {/*    <div className={classes.artistImgSec}>*/}
                    {/*        <div style={{*/}
                    {/*            width: 455,*/}
                    {/*            height: 450,*/}
                    {/*            backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,*/}
                    {/*            backgroundPosition: "center",*/}
                    {/*            backgroundSize: "cover",*/}
                    {/*            borderRadius: 3,*/}
                    {/*        }}/>*/}
                    {/*    </div>*/}
                    {/*}*/}

                </div>
                <div className={classes.midMainSec}>
                    <ArtistTabPanel artist={artist}/>
                </div>
                {
                    relatedAssets &&
                    <RelatedSlider data={relatedAssets}/>
                }

            </div>
        </>
    )

}

/*
export async function getStaticPaths() {
    const {data: {artists}} = await axios.get(`${process.env.BACKEND_BASE_URL}/artists`)
    const paths = artists.map(artist => ({
        params: {id: artist.id.toString(), artistName: artist.fullName.replace(/ /g, '-').toLowerCase()}
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}
export async function getStaticProps({params: {id}}) {
    const {
        data: {
            artist
        }
    } = await axios.get(`${process.env.BACKEND_BASE_URL}/artist/${id}/show`)

    return {
        props: {
            artist
        },
    }
}
*/

export async function getServerSideProps({query}) {
    const {id, artistName} = query;

    const {
        data: {
            artist,
            relatedAssets
        }
    } = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/artist-profile/${id}`)

    return {
        props: {
            artist,
            relatedAssets
        }
    }
}