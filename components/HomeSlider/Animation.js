import { Slide } from "@mui/material";
import { useEffect, useState } from "react";
import classes from "../../styles/HomeSlider.module.scss";


export function Animation({ currentSlide, idx, images, setImages, setCurrentSlide }) {
    const [styles, setStyles] = useState({
        opacity: 1,
        transition: 'all 1s ease',
    });

    const initiateSlide = () => {
        if (currentSlide - 1 === idx) {
            unMountStyle()
        }
        setTimeout(async () => {
            slideStyle()
        }, 100)
    }

    const unMountStyle = () => {
        setStyles({
            ...styles,
            opacity: 0,
            transition: 'all 1s ease',
            transform: 'scale(0)'
        })
    }

    const slideStyle = () => {
        setStyles(prevState => {
            const left = prevState.left ? parseInt(prevState.left) : undefined
            return {
                ...prevState,
                transition: "all 1s ease",
                left: left - 700,
            }
        })
    }

    const mountStyle = () => {
        setStyles({
            ...styles,
            opacity: 1,
            transition: 'all 1s ease',
        })
    }

    const transitionEnd = () => {
        if (currentSlide === idx) {
            console.log(images, idx, images[idx - 1]);
            setImages([...images, images[idx - 1]]);
        }
    }

    useEffect(() => {
        if (currentSlide !== 0) {
            initiateSlide()
        }
    }, [currentSlide])

    useEffect(() => {
        if (idx !== 0) {
            setStyles({
                ...styles,
                position: 'absolute',
                left: `${idx * 700}px`,
                transition: 'all 1s ease',
            })
        }
    }, [])

    return <div style={styles} onTransitionEnd={transitionEnd}
        // className={currentSlide === idx ? classes.topRightSec : classes.topRightMainSec}>
        className={classes.topRightSec}>
        <div className={classes.artworkImgSec}>
            <img className={classes.artWorkImg} src={images[idx]} alt="" />
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
}