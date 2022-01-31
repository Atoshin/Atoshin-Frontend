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

export default function Artist({artist}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const relatedSliderRef = useRef()


    return (
        <>
            <div className={classes.main}>
                <div className={classes.topSec}>
                    {matches &&
                        <div className={classes.artistImgSec}>
                            <div style={{
                                width: 312,
                                height: 242,
                                backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                            />
                        </div>
                    }
                    <div className={classes.artistDetailSec}>
                        <div className={classes.artistName}>{artist.fullName}</div>
                        <a href={artist.website} target="_blank" className={classes.artistWebsite}>{artist.website}</a>
                        <div className={classes.rankingMainSec}>
                            <a target="_blank" href={artist.rankingLink} className={classes.rankingText}>
                                Ranking
                            </a>
                            <div className={classes.rankingSec}>
                                <div className={classes.globalRank}>{artist.worldRanking}</div>
                                <div className={classes.domesticRank}>{artist.iranRanking}</div>
                            </div>
                        </div>
                        <div className={classes.newsMainSec}>
                            <div className={classes.newsSec}>
                                <div className={classes.newsText}>
                                    News
                                </div>
                                {artist.news.map((newsSingular, idx) => {
                                    return <a target="_blank" href={newsSingular.link} className={classes.newsLink}>
                                        {newsSingular.title}
                                    </a>
                                })}
                            </div>
                            {/*<img src="/icons/link-out.svg" alt=""/>*/}
                        </div>
                    </div>
                    {!matches &&
                        <div className={classes.artistImgSec}>
                            <div style={{
                                width: 455,
                                height: 450,
                                backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}/>
                        </div>
                    }

                </div>
                <div className={classes.midMainSec}>
                    <ArtistTabPanel artist={artist}/>
                </div>
                <div className={classes.relatedSec}>
                    <div className={classes.relatedTitle}>
                        Related to Artist
                    </div>
                    <div className={classes.slider2}>
                        <Slide ref={relatedSliderRef} autoplay={artist.assets.length >= 4} easing={"ease"} slidesToShow={artist.assets. length < 4 ? artist.assets.length : (matches ? 2 : 4)}
                               infinite={true}
                               arrows={false}
                               slidesToScroll={1}
                               transitionDuration={500}
                               duration={5000}>
                            {artist.assets.map((asset, idx) => {
                                return <Link href={`/show-asset/${asset.id}`}>
                                    <div key={idx} className={classes.card}>
                                        <div className={classes.relatedImg}
                                             style={{backgroundImage: `url("${asset.medias.find(media => media.main === 1).url}")`, backgroundPosition: "center", backgroundSize: "cover"}}/>
                                        <div className={classes.relatedDescription}>
                                            <p className={classes.relatedDescTitle}>{asset.title}</p>
                                            <p className={classes.relatedDescDesc}>{shortenWords(extractContent(asset.bio), 60) + '...'}</p>
                                        </div>
                                    </div>
                                </Link>
                            })}
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )

}

export async function getServerSideProps({query}) {
    const {id, artistName} = query;

    const {
        data: {
            artist
        }
    } = await axios.get(`${process.env.BASE_URL}/api/artist-profile/${id}`)

    return {
        props: {
            artist
        }
    }
}