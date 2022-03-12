import classes from "../../../styles/ArtistProfile/ArtistProfile.module.scss";
import {Button, Fade, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useRef, useState} from "react";
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

export default function Artist({artist}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));
    const matches4 = useMediaQuery(theme.breakpoints.down('xl'));
    const relatedSliderRef = useRef()
    const [openNewsModal, setOpenNewsModal] = useState(false);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const properties = {

        // autoplay: true,
        autoplay: false,
        cssClass: classes.slider,
        easing: "ease",
        slidesToShow: matches ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 4 : 5,
        // slidesToShow:matches ? 2 : 4,
        infinite: true,
        // arrows:false,
        slidesToScroll: 1,
        transitionDuration: 500,
        duration: 5000,
        arrows: true,


        // // autoplay: true,
        // autoplay: false,
        // cssClass: classes.slider,
        // easing: "ease",
        // slidesToShow: matches ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 4 : 5,
        // // slidesToShow:matches ? 2 : 4,
        // infinite: true,
        // // arrows:false,
        // slidesToScroll: 1,
        // transitionDuration: 500,
        // duration: 5000,
        // nextArrow: <div className={classes.previous}><img alt={"vector-right"} src={'/icons/vector-right.svg'}/></div>,
        // prevArrow: <div/>,




        // autoplay:artist.assets.length >= 4 ? true : false ,
        // autoplay:true,
        // easing: "ease",
        // // slidesToShow:artist.assets.length < 4 ? artist.assets.length : (matches ? 2 : 4),
        // // slidesToShow:4,
        // slidesToShow: matches ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 4 : 5,
        // infinite: true,
        // // arrows:artist.assets.length >= 5 ? true : false,
        // arrows: true,
        // slidesToScroll: 1,
        // // transitionDuration:500,
        // // duration:5000,
    };

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
                                    {/*{artist.worldRanking}*/}
                                    Top {artist.worldRanking}.Global
                                </div>
                                <div className={classes.domesticRank}>
                                    {/*{artist.iranRanking}*/}
                                    Top {artist.iranRanking}.Iran, Islamic Republic Of Iran
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
                    artist.assets.length ?
                        <div className={classes.relatedSec} style={{border:'solid red'}}>
                            <div className={classes.relatedTitle}>
                                Related to gallery
                            </div>
                            <div className={classes.slider2}>
                                <Slide {...properties} ref={relatedSliderRef} style={{border:'solid red'}}>
                                    {artist.assets.map((asset, idx) => {
                                        return (
                                            <Link href={`/show-asset/${asset.id}`} key={idx}>
                                                <a>
                                                    <div key={idx}
                                                         className={(matches || matches2) ? classes.card2 : classes.card}>
                                                        <div
                                                            className={(matches || matches2) ? classes.relatedImg2 : classes.relatedImg}
                                                            style={{
                                                                backgroundImage: `url("${asset.medias.find(media => media.main === 1).url}")`,
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                borderRadius: 3,
                                                            }}
                                                        >
                                                        </div>
                                                        <div className={classes.relatedDescription}>

                                                            {
                                                                (new Date(asset.endDate) > new Date()) ?
                                                                    <div className={classes.dateSec}>
                                                                        <div
                                                                            className={(matches || matches2) ? classes.relatedDescTitleMob : classes.relatedDescTitle2}>
                                                                            {asset.title}
                                                                        </div>
                                                                        <div
                                                                            className={matches || matches2 ? classes.date : classes.date1}>
                                                                            Sale ends
                                                                            in {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDate()}, {new Date(asset.endDate).getFullYear()}
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <div className={classes.dateSec2}>
                                                                        <div
                                                                            className={(matches || matches2) ? classes.relatedDescTitleMob : classes.relatedDescTitle}>
                                                                            {asset.title}
                                                                        </div>
                                                                    </div>
                                                            }
                                                            <p className={(matches || matches2) ? classes.relatedDescDesc2 : classes.relatedDescDesc}>
                                                                {
                                                                    (matches || matches2) ?
                                                                        shortenWords(extractContent(asset.bio), 35) + '...'
                                                                        :
                                                                        shortenWords(extractContent(asset.bio), 60) + '...'
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </Slide>
                            </div>
                        </div>
                        :
                        <div style={{height: '250px'}}/>
                }

                {/*<div className={classes.relatedSec}>*/}
                {/*    <div className={classes.relatedTitle}>*/}
                {/*        Related to Artist*/}
                {/*    </div>*/}
                {/*    <div className={classes.slider2}>*/}
                {/*        <Slide ref={relatedSliderRef}*/}
                {/*               autoplay={artist.assets.length >= 4}*/}
                {/*               easing={"ease"}*/}
                {/*            // slidesToShow:artist.assets.length < 4 ? artist.assets.length : (matches ? 2 : 4),*/}
                {/*               slidesToShow={matches ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 4 : 5}*/}
                {/*               infinite={true}*/}
                {/*               arrows={artist.assets.length >= 5}*/}
                {/*               cssClass={classes.slider}*/}
                {/*               slidesToScroll={1}>*/}
                {/*            {artist.assets.map((asset, idx) => {*/}
                {/*                return <Link key={idx} href={`/show-asset/${asset.id}`}>*/}
                {/*                    <a>*/}
                {/*                        <div className={(matches || matches2) ? classes.card2 : classes.card} style={{border:'solid red'}}>*/}
                {/*                            <div className={(matches || matches2) ? classes.relatedImg2 : classes.relatedImg}*/}
                {/*                                 style={{*/}
                {/*                                     backgroundImage: `url("${asset.medias.find(media => media.main === 1).url}")`,*/}
                {/*                                     backgroundPosition: "center",*/}
                {/*                                     backgroundSize: "cover",*/}
                {/*                                     borderRadius: 3*/}
                {/*                                 }}/>*/}
                {/*                            <div className={classes.relatedDescription}>*/}
                {/*                                {*/}
                {/*                                    (new Date(asset.endDate) > new Date()) ?*/}
                {/*                                        <div className={classes.dateSec}>*/}
                {/*                                            <div*/}
                {/*                                                className={(matches || matches2) ? classes.relatedDescTitleMob : classes.relatedDescTitle2}>*/}
                {/*                                                {asset.title}*/}
                {/*                                            </div>*/}
                {/*                                            <div*/}
                {/*                                                className={matches || matches2 ? classes.date : classes.date1}>*/}
                {/*                                                Sale ends*/}
                {/*                                                in {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDate()}, {new Date(asset.endDate).getFullYear()}*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                        :*/}
                {/*                                        <div className={classes.dateSec2}>*/}
                {/*                                            <div*/}
                {/*                                                className={(matches || matches2) ? classes.relatedDescTitleMob : classes.relatedDescTitle}>*/}
                {/*                                                {asset.title}*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                }*/}

                {/*                                /!*<p className={classes.relatedDescTitle}>{asset.title}</p>*!/*/}
                {/*                                /!*{(new Date(asset.endDate) > new Date()) &&*!/*/}
                {/*                                /!*    <div*!/*/}
                {/*                                /!*        className={classes.date1}>*!/*/}
                {/*                                /!*        Sale ends*!/*/}
                {/*                                /!*        in {new Date(asset.endDate).getDate()} {monthNames[new Date(asset.endDate).getMonth()]}  {new Date(asset.endDate).getFullYear()}*!/*/}
                {/*                                /!*    </div>*!/*/}
                {/*                                /!*}*!/*/}
                {/*                                <p  className={(matches || matches2) ? classes.relatedDescDesc2 : classes.relatedDescDesc}>*/}
                {/*                                    {*/}
                {/*                                        (matches || matches2) ?*/}
                {/*                                            shortenWords(extractContent(asset.bio), 35) + '...'*/}
                {/*                                            :*/}
                {/*                                            shortenWords(extractContent(asset.bio), 60) + '...'}*/}
                {/*                                </p>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </a>*/}
                {/*                </Link>*/}
                {/*            })}*/}
                {/*            */}
                {/*        </Slide>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )

}

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
