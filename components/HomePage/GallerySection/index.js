import classes from "../../../styles/HomePage/HomePage.module.scss";
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import YoutubeVideoModal from "./YoutubeVideoModal";
import * as React from "react";

export default function GallerySection() {
    const [openYouTube, setOpenYouTube] = React.useState(false);
    const ExploreBtn = () => {
        return <Button className={classes.exploreBtn}>Explore</Button>

    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return <>
        <YoutubeVideoModal open={openYouTube} setOpen={setOpenYouTube}/>
        <div className={classes.galleryMainSec}>
            <div className={classes.galleryTopSec}>
                <div className={classes.galleryDescMainSec}>
                    <div className={classes.galleryName}>
                        {matches &&
                            <img style={{width: 42,}} className={classes.imgSec} src="/images/DD-logo.png"
                                 alt=""/>
                        }
                        DD Gallery
                    </div>
                    <div className={classes.galleryDescSec}>
                        {!matches &&
                            <img className={classes.imgSec} src="/images/DD-logo.png" alt=""/>
                        }
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
                {matches ?
                    // <img className={classes.galleryMainPhoto} src="/images/DD-gallery-main-mob.jpg" alt=""/>
                    <div className={classes.galleryVidContainer} onClick={() => setOpenYouTube(true)}>
                        <div style={{
                            backgroundImage: 'url("/images/DD-gallery-main.jpg")',
                            width: '100%',
                            height: 178,
                            backgroundPosition: 'center'
                        }}>
                            {/*<img className={classes.galleryMainPhoto} src="/images/DD-gallery-main.jpg" alt=""/>*/}
                        </div>
                        <img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""/>
                    </div>
                    :
                    <div className={classes.galleryVidContainer}>
                        <img className={classes.galleryMainPhoto} src="/images/DD-gallery-main.jpg" alt=""/>
                        <img src="/icons/play-icon.svg" className={classes.galleryPlayPhoto} alt=""/>
                    </div>
                }
                {matches &&
                    <ExploreBtn/>
                }
            </div>
            <div className={classes.galleryBottomSec}>
                <img className={classes.galleryPhotos} src="/images/dd-gallery1.jpg" alt=""/>
                <img className={classes.galleryPhotos} src="/images/dd-gallery2.jpg" alt=""/>
                <img className={classes.galleryPhotos} src="/images/dd-gallery3.jpg" alt=""/>
                <img className={classes.galleryPhotos} src="/images/dd-gallery4.jpg" alt=""/>
            </div>
        </div>
    </>
}