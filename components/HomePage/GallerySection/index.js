import classes from "../../../styles/HomePage/HomePage.module.scss";
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import YoutubeVideoModal from "./YoutubeVideoModal";
import * as React from "react";
import ImagesModal from "./ImagesModal";
import {useRef} from "react";

export default function GallerySection() {
    const [openYouTube, setOpenYouTube] = React.useState(false);
    const [openImage, setOpenImage] = React.useState({
        toggle: false,
        imgSrc: null
    });
    const imageRef = useRef({
        current: {}
    })
    const ExploreBtn = () => {
        return <Button className={classes.exploreBtn}>Explore</Button>

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
        <YoutubeVideoModal open={openYouTube} setOpen={setOpenYouTube}/>
        <div className={classes.galleryMainSec}>
            <div className={classes.artCenterSec}>
                <div className={classes.artCenterTitle}>
                    Art Centers
                </div>
                <div className={classes.viewAllArtCenters}>
                    View All
                </div>
            </div>
            {matches &&
                <div className={classes.galleryVidContainer} onClick={openYouTubeModal}>
                    <div ref={imageRef} style={{
                        backgroundImage: 'url("/images/DD-gallery-main.jpg")',
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
                        <img className={classes.imgSec} src="/images/DD-logo.png"
                             alt=""/>
                        DD Gallery
                    </div>
                    <div className={classes.galleryDescSec}>
                        <div className={classes.galleryDesc}>
                            <div className={classes.galleryDecsTxt}>
                                The mission of this museum is to further flourish the art and culture of Iran. Apart
                                from the personal desire of its founder, some of the reasons behind the construction
                                of this art and cultural center were, creating a context where different ideas could
                                meet, working toward the economic advancement of art, creating demand for work of
                                art, supporting artists, introducing the capabilities and talents of Iranian artists
                                to the world.
                            </div>
                            {!matches &&
                                <ExploreBtn/>
                            }
                        </div>
                    </div>
                </div>
                {!matches &&
                    <div className={classes.galleryVidContainer}>
                        <img className={classes.galleryMainPhoto} src="/images/DD-gallery-main.jpg" alt=""
                             onClick={openYouTubeModal}/>
                        <img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""
                             onClick={openYouTubeModal}/>
                    </div>
                }
                {matches &&
                    <ExploreBtn/>
                }
            </div>
            <div className={classes.galleryBottomSec}>
                <div datasrc={"/images/dd-gallery1.jpg"} style={{
                    backgroundImage: 'url("/images/dd-gallery1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className={classes.galleryPhotos} onClick={openImageModal}/>
                <div datasrc={"/images/dd-gallery2.jpg"} style={{
                    backgroundImage: 'url("/images/dd-gallery2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className={classes.galleryPhotos} onClick={openImageModal}/>
                <div datasrc={"/images/dd-gallery3.jpg"} style={{
                    backgroundImage: 'url("/images/dd-gallery3.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className={classes.galleryPhotos} onClick={openImageModal}/>
                <div datasrc={"/images/dd-gallery5.jpg"} style={{
                    backgroundImage: 'url("/images/dd-gallery5.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className={classes.galleryPhotos} onClick={openImageModal}/>
            </div>
        </div>
    </>
}