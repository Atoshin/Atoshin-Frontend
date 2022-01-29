import classes from "../styles/ArtistProfile/ArtistProfile.module.scss";
import {Button, Fade, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useRef, useState} from "react";
import * as React from "react";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import ArtistTabPanel from "../components/ArtistProfile/ArtistTabPanel";

export default function ArtistProfile() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const gallerySliderRef = useRef()
    const relatedSliderRef = useRef()


    return (
        <>
            <div className={classes.main}>
                <div className={classes.topSec}>
                    {matches &&
                    <div className={classes.artistImgSec}>
                        <img style={{width: 312, height: 242}} src="images/artists/reza-deralkshani-thumbnail.png"
                             alt=""/>
                    </div>
                    }
                    <div className={classes.artistDetailSec}>
                        <div className={classes.artistName}>
                            Reza Derakhshani
                        </div>
                        <div className={classes.artistWebsite}>
                            rezaderakshani.com
                        </div>
                        <div className={classes.rankingMainSec}>
                            <div className={classes.rankingText}>
                                Ranking
                            </div>
                            <div className={classes.rankingSec}>
                                <div className={classes.globalRank}>
                                    Top 100,000.Global
                                </div>
                                <div className={classes.domesticRank}>
                                    Top 100.Iran, Islamic Republic Of
                                </div>
                            </div>
                        </div>
                        <div className={classes.newsMainSec}>
                            <div className={classes.newsSec}>
                                <div className={classes.newsText}>
                                    News
                                </div>
                                <div className={classes.newsLink}>
                                    www.sophiacontemporary.com
                                </div>
                            </div>
                            <img src="icons/link-out.svg" alt=""/>
                        </div>
                    </div>
                    {!matches &&
                    <div className={classes.artistImgSec}>
                        <img style={{width: 455, height: 450}} src="images/artists/reza-deralkshani-thumbnail.png"
                             alt=""/>
                    </div>
                    }

                </div>
                <div className={classes.midMainSec}>
                    <ArtistTabPanel/>
                </div>
                <div className={classes.relatedSec}>
                    <div className={classes.relatedTitle}>
                        Related to Artist
                    </div>
                    <div className={classes.slider2}>
                        <Slide ref={relatedSliderRef} autoplay={true} easing={"ease"} slidesToShow={matches ? 2 : 5}
                               infinite={true}
                               arrows={false}
                               slidesToScroll={1}
                               transitionDuration={500}
                               duration={5000}>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.relatedImg}
                                     style={{backgroundImage: `url("images/img_8.png")`}}/>
                                <div className={classes.relatedDescription}>
                                    <p className={classes.relatedDescTitle}>Derakhshani Auction</p>
                                    <p className={classes.relatedDescDesc}>
                                        Derakshani’s passion for beauty and his nuanced
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )

}