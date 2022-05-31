import classes from "../../../styles/HomePage/HomePage.module.scss";
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import YoutubeVideoModal from "./YoutubeVideoModal";
import * as React from "react";
import ImagesModal from "./ImagesModal";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import GallerySlider from "./GallerySlider";


export default function GallerySection({gallery}) {
    const [openYouTube, setOpenYouTube] = React.useState(false);
    const [openImage, setOpenImage] = React.useState({
        toggle: false,
        imgSrc: null
    });
    const [selectedGallery, setSelectedGallery] = useState(gallery[0]);
    const router = useRouter();
    const sliderRef = useRef();

    const imageRef = useRef({
        current: {}
    })
    const ExploreBtn = () => {
        return <Link href={`/museums-and-galleries/${selectedGallery.id}`}>
            <a>
                <Button className={classes.exploreBtn}>Explore</Button>
            </a>
        </Link>
    }

    const openYouTubeModal = (e) => {
        setOpenYouTube(true)
    }

    const openImageModal = (e) => {
        setOpenImage({
            toggle: true,
            imgSrc: e.target.getAttribute('datasrc')
        })
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));

    const gallerySummery = (gallery) => {
        if (gallery.summary.length > 426) {
            return gallery.summary.slice(0, 423) + '...'
        } else {
            return gallery.summary
        }
    }
    // const properties = {
    //     easing: "ease",
    //     slidesToShow: matches ? 2 : 4,
    //     infinite: true,
    //     // arrows:false,
    //     nextArrow: <img className={classes.sliderNextArrow} src='/icons/vector-right.svg' alt="vector-right"/>,
    //     prevArrow: <img className={classes.sliderPrevArrow} src="/icons/vector-left.svg" alt="vector-left"/>,
    //     slidesToScroll: 1,
    //     transitionDuration: 500,
    //     duration: 5000,
    // }
    return <>
        <ImagesModal setOpen={setOpenImage} open={openImage}/>
        {
            selectedGallery.videoLinks[0] &&
            <YoutubeVideoModal video={selectedGallery.videoLinks[0]} open={openYouTube} setOpen={setOpenYouTube}/>
        }
        {
            <div className={classes.galleryMainSec}>
                <div className={classes.artCenterSec}>
                    <div className={classes.artCenterTitle}>
                        Museums and Galleries
                    </div>
                    <div onClick={() => router.push('gallery-list')} className={classes.viewAllArtCenters}>
                        View All
                    </div>
                </div>

                {(matches || matches2) ?
                Object.keys(selectedGallery.videoLinks).length > 0 ?
                    selectedGallery.videoLinks.slice(0, 1).map((videoLinks, idx) => {
                        if (videoLinks.media !== null) {
                            return <div key={idx} className={classes.galleryVidContainerM}>
                                <div
                                    style={{
                                        backgroundImage: `url("${videoLinks.media.url}")`,
                                        // width: '100%',
                                        height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : '100%',
                                        // height: '300px',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize:"cover",
                                        backgroundPosition: 'center',
                                        // filter: 'contrast(50%)',
                                        // filter: 'hue-rotate(85deg) saturate(100%) brightness(0.85)'
                                        filter: 'saturate(100%) brightness(0.50)',
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}
                                    className={classes.galleryMainPhotoN}
                                    onClick={openYouTubeModal}
                                />
                                <img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""
                                     onClick={openYouTubeModal}/>
                            </div>
                        } else {
                            return selectedGallery.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((data, key) => {
                                return <div key={key} className={classes.galleryVidContainerM}>
                                    <div style={{
                                        backgroundImage: `url("${data.url}")`,
                                        // width: '100%',
                                        height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : 360,
                                        // height: '300px',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        // backgroundSize: "100% 100%",
                                        backgroundPosition: 'center',
                                        // filter: 'contrast(50%)',
                                        // filter: 'hue-rotate(85deg) saturate(100%) brightness(0.85)',
                                        // filter: 'saturate(100%) brightness(0.50)'
                                    }}
                                         className={classes.galleryMainPhotoN}/>
                                    {/*<img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""*/}
                                    {/*     onClick={openYouTubeModal}/>*/}
                                </div>
                            })
                        }
                    }) :
                    selectedGallery.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((data, idx) => {
                        return <div key={idx} className={classes.galleryVidContainerM}>
                            <div
                                style={{
                                    backgroundImage: `url("${data.url}")`,
                                    width: '100%',
                                    height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : 360,
                                    // height: '300px',
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: 'center',
                                    // filter: 'contrast(50%)',
                                    // filter: 'hue-rotate(85deg) saturate(100%) brightness(0.85)'
                                    // filter: 'saturate(100%) brightness(0.50)'
                                }}
                                className={classes.galleryMainPhotoN}
                            />
                        </div>
                    }) : ''
                }

                {/*paste here*/}
                <div className={classes.galleryTopSec}>
                    <div className={classes.galleryDescMainSec}>
                        <div className={classes.galleryName}>
                            <img className={classes.imgSec}
                                 src={selectedGallery.medias.find(media => media.main === 1).url}
                                 alt=""/>
                            {selectedGallery.name}
                        </div>
                        <div className={classes.galleryDescSec}>
                            <div className={classes.galleryDesc}>
                                {(!matches && !matches2) ?
                                    <div className={classes.galleryDecsTxt}>
                                        {gallerySummery(selectedGallery)}
                                    </div> : ''
                                }
                                {(matches || matches2) ?
                                    <div className={classes.galleryDecsTxtMob}>
                                        {selectedGallery.summary}
                                    </div> : ''
                                }
                                {(matches || matches2) ?
                                    <div className={classes.mobileExploreSec}><ExploreBtn/></div> : ''
                                }
                                {(!matches && !matches2) ?
                                    <ExploreBtn/> : ''
                                }
                            </div>
                        </div>
                    </div>
                    {(!matches && !matches2)  ?
                    Object.keys(selectedGallery.videoLinks).length > 0 ?
                        selectedGallery.videoLinks.slice(0, 1).map((videoLinks, idx) => {
                            if (videoLinks.media !== null) {
                                return <div key={idx} className={classes.galleryVidContainer}>
                                    <div
                                        style={{
                                            backgroundImage: `url("${videoLinks.media.url}")`,
                                            // width: '100%',
                                            height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : 360,
                                            // height: '300px',
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: 'center',
                                            // filter: 'contrast(50%)',
                                            // filter: 'hue-rotate(85deg) saturate(100%) brightness(0.85)'
                                            filter: 'saturate(100%) brightness(0.50)',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}
                                        className={classes.galleryMainPhotoN}
                                        onClick={openYouTubeModal}
                                    />
                                    <img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""
                                         onClick={openYouTubeModal}/>
                                </div>
                            } else {
                                return selectedGallery.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((data, key) => {
                                    return <div key={key} className={classes.galleryVidContainer}>
                                        <div style={{
                                            backgroundImage: `url("${data.url}")`,
                                            // width: '100%',
                                            height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : 360,
                                            // height: '300px',
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: 'center',
                                            // filter: 'contrast(50%)',
                                            // filter: 'hue-rotate(85deg) saturate(100%) brightness(0.85)',
                                            // filter: 'saturate(100%) brightness(0.50)'
                                        }}
                                             className={classes.galleryMainPhotoN}/>
                                        {/*<img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""*/}
                                        {/*     onClick={openYouTubeModal}/>*/}
                                    </div>
                                })
                            }
                        }) :
                        selectedGallery.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((data, idx) => {
                            return <div key={idx} className={classes.galleryVidContainer}>
                                <div
                                    style={{
                                        backgroundImage: `url("${data.url}")`,
                                        width: '100%',
                                        // height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : 360,
                                        height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : 360,
                                        // height: '300px',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: 'center',
                                        // filter: 'contrast(50%)',
                                        // filter: 'hue-rotate(85deg) saturate(100%) brightness(0.85)'
                                        // filter: 'saturate(100%) brightness(0.50)'
                                    }}
                                    className={classes.galleryMainPhotoN}
                                />
                            </div>
                        }) : ''
                    }
                </div>
                <GallerySlider gallery={gallery} setSelectedGallery={setSelectedGallery}
                               selectedGallery={selectedGallery}/>
            </div>
        }
    </>
}