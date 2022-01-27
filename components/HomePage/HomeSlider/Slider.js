import classes from '../../../styles/HomeSlider/HomeSlider.module.scss'
import {Slide} from "react-slideshow-image";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRouter} from "next/router";

export default function Slider({images, sliderRef, setCurrentSlide, assets, currentSlide}) {
    const imageRef = useRef({
        current: {}
    })
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
               duration={5000}
               onChange={(oldIdx, newIdx) => {
                   setCurrentSlide(newIdx)
               }}
        >
            {
                images.map((img, i) => (
                    <div
                        onClick={() => router.push(`/show-asset/${assets[currentSlide].id}`)}
                        key={i}
                        className={classes.topRightSec}>
                        <div className={classes.artworkImgSec}>
                            <div style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: `${imageRef.current.clientWidth}px`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: 'center',
                                width: imageRef.current.clientWidth,
                                height: matches ? (((imageRef.current.clientWidth) * 2) / 3) : undefined
                            }} className={classes.artWorkImg}/>
                        </div>
                        <div ref={imageRef} className={classes.artWorkDetailSec}>
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
                    </ div>
                ))
            }
        </Slide>
    )
}

