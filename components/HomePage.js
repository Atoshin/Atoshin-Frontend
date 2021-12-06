import classes from '../styles/HomePage.module.scss'
import { Button, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
//TODO change all <img/> elements with next <Image/>
import Image from 'next/image';
import ArtistsSlider from "./ArtistsSlider";
import HomeSlider from "./HomeSlider";

export default function HomePage() {

    const ExploreBtn = () => {
        return <Button className={classes.exploreBtn}>Explore</Button>

    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return <>
        <div className={classes.main}>
            <HomeSlider/>
            <div className={classes.galleryMainSec}>
                <div className={classes.galleryTopSec}>
                    <div className={classes.galleryDescMainSec}>
                        <div className={classes.galleryName}>
                            {matches &&
                                <img style={{ width: 42, height: 45, }} className={classes.imgSec} src="/images/img.png" alt="" />
                            }
                            DD Gallery

                        </div>
                        <div className={classes.galleryDescSec}>
                            {!matches &&
                                <img className={classes.imgSec} src="/images/img.png" alt="" />
                            }
                            <div className={classes.galleryDesc}>
                                <div className={classes.galleryDecsTxt}>
                                    A non-fungible token is a unique and non-interchangeable unit of data stored
                                    on a
                                    digital ledger. NFTs can be associated with easily-reproducible
                                    items such
                                </div>
                                {!matches &&
                                    <ExploreBtn />
                                }
                            </div>
                        </div>
                    </div>
                    <img className={classes.galleryMainPhoto} src="/images/gallery-main.png" alt="" />
                    {matches &&
                        <ExploreBtn />
                    }
                </div>
                <div className={classes.galleryBottomSec}>
                    <img className={classes.galleryPhotos} src="/images/gallery-1.png" alt="" />
                    <img className={classes.galleryPhotos} src="/images/gallery-2.png" alt="" />
                    <img className={classes.galleryPhotos} src="/images/gallery-3.png" alt="" />
                    <img className={classes.galleryPhotos} src="/images/gallery-4.png" alt="" />
                </div>
            </div>
            <ArtistsSlider/>
        </div>
    </>
}