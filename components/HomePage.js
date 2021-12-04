import classes from '../styles/HomePage.module.scss'
import {Button} from "@mui/material";
import Head from "next/head";


export default function HomePage() {

    return <>
        <div className={classes.main}>
            <div className={classes.topMainSec}>
                <div className={classes.topLeftSec}>
                    <div className={classes.artWorkName}>
                        Starry Night
                    </div>
                    <div className={classes.artistName}>
                        By Vincent Van Gogh
                    </div>
                    <div className={classes.artworkInfo}>
                        is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted
                        in June 1889, it depicts the view from the east-facing window of his asylum room at
                        Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village
                    </div>
                    <Button className={classes.buyBtn}>Buy Now</Button>
                </div>
                <div className={classes.topRightSec}>
                    <div>
                        <img className={classes.artWorkImg} src="/images/starryNight.png" alt=""/>
                    </div>
                    <div className={classes.artWorkDetailSec}>
                        <div className={classes.priceMainSec}>
                            <div className={classes.priceSec}>
                                <div className={classes.titleSec}>
                                    Price
                                </div>
                                <div className={classes.amountSec}>
                                    765 ETH
                                </div>
                            </div>
                            <div className={classes.quantSec}>
                                <div className={classes.title2Sec}>
                                    Quantity
                                </div>
                                <div className={classes.amountSec}>
                                    12 Token
                                </div>
                            </div>
                        </div>
                        <div className={classes.dayHourMinSec}>
                            <div className={classes.Sec}>
                                <div className={classes.Num}>
                                    02
                                </div>
                                <div className={classes.Txt}>
                                    Day
                                </div>
                            </div>
                            <div className={classes.Sec}>
                                <div className={classes.Num}>
                                    18
                                </div>
                                <div className={classes.Txt}>
                                    Hour
                                </div>
                            </div>
                            <div className={classes.Sec}>
                                <div className={classes.Num}>
                                    40
                                </div>
                                <div className={classes.Txt}>
                                    Min
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.galleryMainSec}>
                <div className={classes.galleryTopSec}>
                    <div className={classes.galleryDescMainSec}>
                        <div className={classes.galleryName}>
                            DD Gallery
                        </div>
                        <div className={classes.galleryDescSec}>
                            <img className={classes.imgSec} src="/images/img.png" alt=""/>
                            <div className={classes.galleryDesc}>
                                <div className={classes.galleryDecsTxt}>
                                    A non-fungible token is a unique and non-interchangeable unit of data stored on a
                                    digital ledger. NFTs can be associated with easily-reproducible
                                    <br/>items such
                                </div>
                                <Button className={classes.exploreBtn}>Explore</Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.galleryMainPhoto}>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </>
}