import classes from '../../../styles/HomeSlider/HomeSlider.module.scss'
import {Slide} from "react-slideshow-image";
import {useRef} from "react";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRouter} from "next/router";
import {TimeDifference} from "../TimeDifference";
import 'react-slideshow-image/dist/styles.css';
import Link from "next/link";
import calculateDecimalPrecision from "../../../functions/calculateDecimalPrecision";

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
               // autoplay={true}
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
                          href={`/show-asset/${assets[currentSlide].id}`}>
                        <a>
                            <div
                                // onClick={() => router.push(`/show-asset/${assets[currentSlide].id}`)}
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
                                                {calculateDecimalPrecision(assets[i].ethPricePerFraction, 5)} ETH
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
                            </ div>
                        </a>
                    </Link>
                ))
            }
        </Slide>
    )
}

