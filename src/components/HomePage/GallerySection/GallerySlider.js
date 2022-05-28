import classes from "../../../styles/GallerySlider/GallerySlider.module.scss";
import {Slide} from "react-slideshow-image";

import 'react-slideshow-image/dist/styles.css'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import * as React from "react";

export default function ArtistsSlider({gallery, setSelectedGallery, selectedGallery}) {
    const theme = useTheme();
    const sliderRef = useRef();
    const router = useRouter();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));
    const matches4 = useMediaQuery(theme.breakpoints.down('xl'));
    const slider = () => {
        return <Slide ref={sliderRef} easing={"ease"} slidesToShow={matches ? 2 : 4} infinite={true}
                      arrows={matches ? false : gallery.length > 4 ? true : false}
                      slidesToScroll={1}
                      transitionDuration={500}
                      autoplay={false}
                      duration={5000}>

            {gallery.map((data) => {
                if (data.id === selectedGallery.id) {
                    return data.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((img, idx) => {
                        const {url} = img;
                        return <div key={idx} className={classes.selectedGallery}>
                            <div datasrc={url} style={{
                                backgroundImage: `url("${url}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }} className={classes.galleryPhotos}/>
                            <p className={classes.galleryTitle}>{data.name}</p>
                        </div>
                    })
                } else {
                    return data.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((img, idx) => {
                        const {url} = img;
                        return <div onClick={() => setSelectedGallery(data)} key={idx}
                                    className={classes.artist}>
                            <div datasrc={url} style={{
                                backgroundImage: `url("${url}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }} className={classes.galleryPhotos}/>
                            <p className={classes.galleryTitle}>{data.name}</p>
                        </div>
                    })
                }
                // </Link>
            })}
        </Slide>
    }

    const mapData = () => {
        return <div style={{display:'flex'}}>
            {
                gallery.map((data) => {
                    if (data.id === selectedGallery.id) {
                        return data.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((img, idx) => {
                            const {url} = img;
                            return <div key={idx} className={classes.selectedGallery2}>
                                <div datasrc={url} style={{
                                    backgroundImage: `url("${url}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }} className={classes.galleryPhotos}/>
                                <p className={classes.galleryTitle}>{data.name}</p>
                            </div>
                        })
                    } else {
                        return data.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((img, idx) => {
                            const {url} = img;
                            return <div onClick={() => setSelectedGallery(data)} key={idx}
                                        className={classes.artist2}>
                                <div datasrc={url} style={{
                                    backgroundImage: `url("${url}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }} className={classes.galleryPhotos}/>
                                <p className={classes.galleryTitle}>{data.name}</p>
                            </div>
                        })
                    }
                    // </Link>
                })
            }
        </div>
    }

    const showData = () => {
        if (matches) {
            if (gallery.length <= 2) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches2) {
            if (gallery.length <= 3) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches3) {
            if (gallery.length <= 3) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches4) {
            if (gallery.length <= 4) {
                return mapData()
            } else {
                return slider()
            }
        } else {
            if (gallery.length <= 4) {
                return mapData()
            } else {
                return slider()
            }
        }
    }

    return <div className={classes.artistMainSec}>
        <div className={classes.artistsSlider}>
            {showData()}
        </div>
    </div>
}