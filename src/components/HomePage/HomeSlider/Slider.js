import classes from '../../../styles/HomeSlider/HomeSlider.module.scss'
import {Slide} from "react-slideshow-image";
import {useRef, useState} from "react";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRouter} from "next/router";
import {TimeDifference} from "../TimeDifference";
import 'react-slideshow-image/dist/styles.css';
import Link from "next/link";
import calculateDecimalPrecision from "../../../functions/calculateDecimalPrecision";

export default function Slider({
                                   images,
                                   sliderRef,
                                   setCurrentSlide,
                                   assets,
                                   currentSlide,
                                   imageRef,
                                   comingSoon,
                                   soldOut,
                                   comingSoonWithTime
                               }) {
    const router = useRouter();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Slide ref={sliderRef}
               easing={"ease"}
               slidesToShow={1}
               infinite={true}
               arrows={false}

               autoplay={true}
               slidesToScroll={1}
               cssClass={classes.slider}
               duration={5000}
               onChange={(oldIdx, newIdx) => {
                   setCurrentSlide(newIdx)
               }}
        >
            {
                images.map((img, i) => (
                    <Link key={i}
                          href={`/show-asset/${assets[currentSlide].id}`}>
                        <a>
                            <div
                                // onClick={() => router.push(`/show-asset/${assets[currentSlide].id}`)}
                                className={classes.topRightSec} style={{width: imageRef.current.clientWidth}}>
                                <div className={classes.artworkImgSec}
                                     style={{height: (((imageRef.current.clientWidth) * 2) / 3)}}>
                                    <div style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: `${imageRef.current.clientWidth}px`,
                                        // width: imageRef.current.clientWidth,
                                        width: '100%',
                                        // height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : undefined
                                        height: (((imageRef.current.clientWidth) * 2) / 3),
                                    }} className={classes.artWorkImg}/>
                                </div>
                                {
                                    comingSoon ? '' :
                                        comingSoonWithTime ?
                                            <div ref={imageRef}
                                                 className={classes.artWorkDetailSecComingSoon}>
                                                <div className={classes.campaignSec}>
                                                    {/*<div className={classes.priceSec}>*/}
                                                        <div className={classes.campaignStart}>
                                                            Campaign will start in
                                                        </div>
                                                    {/*</div>*/}
                                                    {/*<div className={classes.quantSec}>*/}
                                                        <div className={classes.campaignStart}>
                                                            December 11, 2022
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                                <TimeDifference time={assets[i].endDate} comingSoon={comingSoonWithTime}/>
                                            </div> :
                                            soldOut ?
                                                <div ref={imageRef}
                                                     className={classes.artWorkDetailSecSoldOut}>
                                                    <div className={classes.priceMainSec}>
                                                        <div className={classes.fractionsLeft}>
                                                            <div className={classes.fractionsTitle}>
                                                                Fractions left
                                                            </div>
                                                        </div>
                                                        <div className={classes.quantSec}>
                                                            <div className={classes.fractionsItem}>
                                                                0/100
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classes.priceMainSec}>
                                                        <div className={classes.fractionsLeft}>
                                                            <div className={classes.fractionsTitle}>
                                                                Price
                                                            </div>
                                                        </div>
                                                        <div className={classes.quantSec}>
                                                            <div className={classes.fractionsItem}>
                                                               -
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classes.priceMainSec}>
                                                        <div className={classes.fractionsLeft}>
                                                            <div className={classes.fractionsTitle}>
                                                                Campaign ended in
                                                            </div>
                                                        </div>
                                                        <div className={classes.quantSec}>
                                                            <div className={classes.fractionsItem}>
                                                                1/4/2022
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div ref={imageRef}
                                                     className={classes.artWorkDetailSec}>
                                                    <div className={classes.priceMainSec}>
                                                        <div className={classes.priceSec}>
                                                            <div className={classes.titleSec}>
                                                                Price
                                                            </div>
                                                            <div className={classes.amountSec}>
                                                                {calculateDecimalPrecision(assets[i].ethPricePerFraction, 5)} {assets[i].tradedCurrency}
                                                            </div>
                                                        </div>
                                                        <div className={classes.quantSec}>
                                                            <div className={classes.title2Sec}>
                                                                Quantity
                                                            </div>
                                                            <div className={classes.amountSec}>
                                                                {assets[i].totalFractions} Tokens
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <TimeDifference time={assets[i].endDate}/>
                                                </div>
                                }
                            </ div>
                        </a>
                    </Link>
                ))
            }
        </Slide>
    )
}

