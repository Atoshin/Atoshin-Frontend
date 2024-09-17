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


const SlideSection = ({asset, imageRef}) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    if (asset.soldFractions === asset.totalFractions) {
        return <div ref={imageRef}
                    className={classes.artWorkDetailSecSoldOut}>
            <div className={classes.priceMainSec}>
                <div className={classes.fractionsLeft}>
                    <div className={classes.fractionsTitle}>
                        Fractions left
                    </div>
                </div>
                <div className={classes.quantSec}>
                    <div className={classes.fractionsItem}>
                        0/{asset.totalFractions}
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
                        Campaign ended
                    </div>
                </div>
                <div className={classes.quantSec}>
                    <div className={classes.fractionsItem}>
                        {/*{new Date(asset.startDate).getFullYear()}/{new Date(asset.startDate).getMonth() + 1}/{new Date(asset.startDate).getDate()}*/}
                    </div>
                </div>
            </div>
        </div>
    } else if (new Date(asset.endDate) < new Date()) {
        return <div ref={imageRef}
                    className={classes.artWorkDetailSecSoldOut}>
            <div className={classes.priceMainSec}>
                <div className={classes.fractionsLeft}>
                    <div className={classes.fractionsTitle}>
                        Fractions left
                    </div>
                </div>
                <div className={classes.quantSec}>
                    <div className={classes.fractionsItem}>
                        0/{asset.totalFractions}
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
                        {new Date(asset.endDate).getFullYear()}/{new Date(asset.endDate).getMonth() + 1}/{new Date(asset.endDate).getDate()}
                    </div>
                </div>
            </div>
        </div>
    } else if (new Date(asset.startDate) > new Date()) {
        return <div ref={imageRef}
                    className={classes.artWorkDetailSecComingSoon}>
            <div className={classes.campaignSec}>
                <div className={classes.campaignStart}>
                    Campaign will start in
                </div>
                <div className={classes.campaignStart}>
                    {monthNames[new Date(asset.startDate).getMonth()]} {new Date(asset.startDate).getDate()}, {new Date(asset.startDate).getFullYear()}
                </div>
            </div>
            <TimeDifference time={asset.startDate}
                            comingSoon={true}/>
        </div>
    } else if (!asset.startDate) {
        return null;
    } else {
        return <div ref={imageRef}
                    className={classes.artWorkDetailSec}>
            <div className={classes.priceMainSec}>
                <div className={classes.priceSec}>
                    <div className={classes.titleSec}>
                        Price
                    </div>
                    <div className={classes.amountSec}>
                        {calculateDecimalPrecision(asset.ethPricePerFraction, 5)} {asset.tradedCurrency}
                    </div>
                </div>
                <div className={classes.quantSec}>
                    <div className={classes.title2Sec}>
                        Quantity
                    </div>
                    <div className={classes.amountSec}>
                        {asset.totalFractions} Tokens
                    </div>
                </div>
            </div>
            <TimeDifference time={asset.endDate}/>
        </div>
    }
}


export default function Slider({
                                   images,
                                   sliderRef,
                                   setCurrentSlide,
                                   assets,
                                   currentSlide,
                                   imageRef,
                               }) {

    return (
        <Slide ref={sliderRef}
               easing={"ease"}
               slidesToShow={1}
               infinite={true}
               arrows={false}
               autoplay={false}
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
                          href={`${process.env.NEXT_PUBLIC_APP_URL}/show-asset/${assets[currentSlide].id}`}>
                        <a>
                            <div
                                className={classes.topRightSec} style={{width: imageRef.current.clientWidth}}>
                                <div className={classes.artworkImgSec}
                                     style={{height: (((imageRef.current.clientWidth) * 2) / 3)}}>
                                    <div style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: `${!assets[currentSlide].startDate ? 836 : imageRef.current.clientWidth}px`,
                                        width: '100%',
                                        height: !assets[currentSlide].startDate ? (((imageRef.current.clientWidth) * 5.1) / 6) : (((imageRef.current.clientWidth) * 2) / 3),
                                    }} className={classes.artWorkImg}/>
                                </div>
                                <SlideSection asset={assets[i]} imageRef={imageRef} />
                            </ div>
                        </a>
                    </Link>
                ))
            }
        </Slide>
    )
}

