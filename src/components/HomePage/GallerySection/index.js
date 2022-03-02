import classes from "../../../styles/HomePage/HomePage.module.scss";
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import YoutubeVideoModal from "./YoutubeVideoModal";
import * as React from "react";
import ImagesModal from "./ImagesModal";
import {useRef} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
export default function GallerySection({gallery}) {
    const [openYouTube, setOpenYouTube] = React.useState(false);
    const [openImage, setOpenImage] = React.useState({
        toggle: false,
        imgSrc: null
    });
    const router = useRouter();
    const sliderRef = useRef();

    const imageRef = useRef({
        current: {}
    })
    const ExploreBtn = () => {
        // onClick={() => router.push(`/museums-and-galleries/1`)}
        return <Link href={`/museums-and-galleries//1`}>
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

    const gallerySummery = () => {
        if (gallery.summary.length > 426) {
            return gallery.summary.slice(0,423) + '...'
        }
        else {
            return gallery.summary
        }
    }

    const properties ={
        easing:"ease",
        slidesToShow:matches ? 2 : 4 ,
        infinite:true ,
        // arrows:false,
        nextArrow:<img className={classes.sliderNextArrow} src='/icons/vector-right.svg' alt="vector-right"/>,
        prevArrow:   <img className={classes.sliderPrevArrow} src="/icons/vector-left.svg" alt="vector-left"/>,
        slidesToScroll:1,
        transitionDuration:500,
        duration:5000,
    }

    console.log(gallery)
    return <>
        <ImagesModal setOpen={setOpenImage} open={openImage}/>
        <YoutubeVideoModal video={gallery.videoLinks[0]} open={openYouTube} setOpen={setOpenYouTube}/>
        <div className={classes.galleryMainSec}>
            <div className={classes.artCenterSec}>
                <div className={classes.artCenterTitle}>
                    Museums and Galleries
                </div>
                <div onClick={() => router.push('gallery-list')} className={classes.viewAllArtCenters}>
                    View All
                </div>
            </div>
            {matches &&
            <div className={classes.galleryVidContainer} onClick={openYouTubeModal}>
                <div ref={imageRef} style={{
                    backgroundImage: `url("${gallery.videoLinks[0].media.url}")`,
                    width: '100%',
                    height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : undefined,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}>
                    {/*<img className={classes.galleryMainPhoto} src="/images/DD-gallery-main.jpg" alt=""/>*/}
                </div>
                <img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""
                     onClick={openYouTubeModal}/>
            </div>
            }
            <div className={classes.galleryTopSec}>
                <div className={classes.galleryDescMainSec}>
                    <div className={classes.galleryName}>
                        <img className={classes.imgSec} src={gallery.medias.find(media => media.main === 1).url}
                             alt=""/>
                        {gallery.name}
                    </div>
                    <div className={classes.galleryDescSec}>
                        <div className={classes.galleryDesc}>
                            {!matches &&
                            <div className={classes.galleryDecsTxt}>
                                {gallerySummery()}
                            </div>
                            }
                            {matches &&
                            <div className={classes.galleryDecsTxtMob}>
                                {gallery.summary}
                            </div>
                            }
                            {!matches &&
                            <ExploreBtn/>
                            }
                        </div>
                    </div>
                </div>
                {!matches &&
                <div className={classes.galleryVidContainer}>
                    <div
                        style={{
                            backgroundImage: `url("${gallery.videoLinks[0].media.url}")`,
                            // width: '100%',
                            height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : undefined,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: 'center',
                            // filter: 'contrast(50%)',
                            // filter: 'hue-rotate(85deg) saturate(100%) brightness(0.85)'
                            filter: 'saturate(100%) brightness(0.50)'
                        }}
                        className={classes.galleryMainPhoto}
                        onClick={openYouTubeModal}
                    />
                    {/*<img className={classes.galleryMainPhoto} src={gallery.videoLinks[0].media.url} alt=""*/}
                    {/*     onClick={openYouTubeModal}/>*/}
                    <img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""
                         onClick={openYouTubeModal}/>
                </div>
                }
                {matches &&
                <ExploreBtn/>
                }
            </div>
            <div className={classes.galleryBottomSec}>
                {/*{gallery.medias.filter(media => media.homeapagePicture === 1).map((img, idx) => {*/}
                {/*    const {url} = img;*/}
                {/*    return <div key={idx} datasrc={url} style={{*/}
                {/*        backgroundImage: `url("${url}")`,*/}
                {/*        backgroundSize: 'cover',*/}
                {/*        backgroundPosition: "center",*/}
                {/*        backgroundRepeat: "no-repeat",*/}
                {/*    }} className={classes.galleryPhotos} onClick={openImageModal}/>*/}
                {/*})}*/}
                {/*{gallery.medias.filter(media => media.homeapagePicture === 1).map((img, idx) => {*/}
                {/*    const {url} = img;*/}
                {/*    return <div className={classes.gallerySec}><div key={idx} datasrc={url} style={{*/}
                {/*            backgroundImage: `url("${url}")`,*/}
                {/*            backgroundSize: 'cover',*/}
                {/*            backgroundPosition: "center",*/}
                {/*            backgroundRepeat: "no-repeat",*/}
                {/*        }} className={classes.galleryPhotos} onClick={openImageModal}/>*/}
                {/*        <div className={classes.galleryTitle}>Borghese Gallery</div>*/}
                {/*    </div>*/}
                {/*})}*/}
                {/*the simple one */}


            <div style={{width:'100%'}}>
                <Slide ref={sliderRef} style={{position: 'relative'}} {...properties}>
                    {gallery.medias.filter(media => media.homeapagePicture === 1).map((img, idx) => {
                        const {url} = img;
                        return <div key={idx} className={classes.gallerySec}><div datasrc={url} style={{
                            backgroundImage: `url("${url}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }} className={classes.galleryPhotos} onClick={openImageModal}/>
                            <div className={classes.galleryTitle}>Borghese Gallery</div>
                        </div>
                    })}
                </Slide>
            </div>
                {/*the slider one */}

            </div>
        </div>
    </>
}