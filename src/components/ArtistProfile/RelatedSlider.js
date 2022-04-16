import classes from "../../styles/ArtistProfile/ArtistProfile.module.scss";
import {Button, Fade, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useRef, useState} from "react";
import * as React from "react";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
import shortenWords from "../../functions/shortenWords";
import extractContent from "../../functions/getHtmlInnerText";

export default function RelatedSlider({data}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));
    const matches4 = useMediaQuery(theme.breakpoints.down('xl'));
    const relatedSliderRef = useRef()

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    // console.log(matches ? data.length === 2 ? 2 : data.length
    //     : matches2 ? data.length === 3 ? 3 : data.length
    //         : matches3 ? data.length === 3 ? 3 : data.length
    //             : matches4 ? data.length === 4 ? 4
    //                 : data.length : data.length === 5 ? 5 : data.length)
    //
    // console.log(data.length)
    const properties = {
        autoplay: data.length > 5 ? true : false,
        cssClass: classes.slider,
        easing: "ease",
        slidesToShow: matches ? data.length >= 2 ? 2 : data.length
            : matches2 ? data.length >= 3 ? 3 : data.length
                : matches3 ? data.length >= 3 ? 3 : data.length
                    : matches4 ? data.length >= 4 ? 4 : data.length :
                        data.length >= 5 ? 5 : data.length,
        infinite: true,
        slidesToScroll: 1,
        transitionDuration: 500,
        duration: 5000,
        arrows: matches ? false : data.length > 5 ? true : false
    };
    const mapData = () => {
        return <div style={{display: 'flex'}}>
            {
                data.map((asset, idx) => {
                    return (
                        <Link href={`/show-asset/${asset.id}`} key={idx}>
                            <a>
                                <div key={idx}
                                     className={(matches || matches2) ? classes.cardMobile : classes.card}>
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
                })
            }
        </div>

    }

    const slideData = () => {
        return <Slide {...properties} ref={relatedSliderRef}>
            {data.map((asset, idx) => {
                return (
                    <Link href={`/show-asset/${asset.id}`} key={idx}>
                        <a>
                            <div key={idx}
                                 className={(matches || matches2) ? classes.cardMobile : classes.card}>
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
    }

    const showData = () => {
        if (matches) {
            if (data.length <= 2) {
                return mapData()
            } else {
                return slideData()
            }
        }
        if (matches2) {
            if (data.length <= 3) {
                return mapData()
            } else {
                return slideData()
            }
        }
        if (matches3) {
            if (data.length <= 3) {
                return mapData()
            } else {
                return slideData()
            }
        }
        if (matches4) {
            if (data.length <= 4) {
                return mapData()
            } else {
                return slideData()
            }
        } else {
            if (data.length <= 5) {
                return mapData()
            } else {
                return slideData()
            }
        }
    }

    return (
        <>
            {
                data.length ?
                    <div className={classes.relatedSec}>
                        <div className={classes.relatedTitle}>
                            Offering artworks in Atoshin
                        </div>
                        <div className={classes.slider2}>
                            {showData()}
                        </div>
                    </div>
                    :
                    <div style={{height: '250px'}}/>
            }
        </>
    )

}