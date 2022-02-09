import classes from "../../../styles/HomePage/HomePage.module.scss";
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import YoutubeVideoModal from "./YoutubeVideoModal";
import * as React from "react";
import ImagesModal from "./ImagesModal";
import {useRef} from "react";
import {useRouter} from "next/router";

export default function GallerySection({gallery}) {
    const [openYouTube, setOpenYouTube] = React.useState(false);
    const [openImage, setOpenImage] = React.useState({
        toggle: false,
        imgSrc: null
    });
    const router = useRouter();
    const imageRef = useRef({
        current: {}
    })
    const ExploreBtn = () => {
        return <Button onClick={() => router.push(`/art-center/1`)} className={classes.exploreBtn}>Explore</Button>

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

    return <>
        <ImagesModal setOpen={setOpenImage} open={openImage}/>
        <YoutubeVideoModal video={gallery.videoLinks[0]} open={openYouTube} setOpen={setOpenYouTube}/>
        <div className={classes.galleryMainSec}>
            <div className={classes.artCenterSec}>
                <div className={classes.artCenterTitle}>
                    Art Centers
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
                                    {gallery.summary}
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
                                backgroundPosition: 'center'
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
                {gallery.medias.filter(media => media.homeapagePicture === 1).map((img, idx) => {
                    const {url} = img;
                    return <div key={idx} datasrc={url} style={{
                        backgroundImage: `url("${url}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }} className={classes.galleryPhotos} onClick={openImageModal}/>
                })}
            </div>
        </div>
    </>
}