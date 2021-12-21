import classes from '../../styles/HomeSlider/HomeSlider.module.scss'
import {Slide} from "react-slideshow-image";
import {useEffect, useState} from "react";

export default function Slider({images, sliderRef, setCurrentSlide}) {

    return (
        <Slide ref={sliderRef}
               easing={"ease"}
               slidesToShow={1}
               infinite={true}
               arrows={false}
               autoplay={false}
               slidesToScroll={1}
               duration={5000}
               onChange={(oldIdx, newIdx) => {
                   setCurrentSlide(newIdx)
               }}
        >
            {
                images.map((img, i) => (
                    <div
                        key={i}
                        className={classes.topRightSec}>
                        <div className={classes.artworkImgSec}>
                            <img className={classes.artWorkImg} src={img} alt=""/>
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
                    </ div>
                ))
            }
        </Slide>
    )
}

