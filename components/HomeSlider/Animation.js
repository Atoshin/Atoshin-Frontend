import {useEffect, useState, forwardRef, useImperativeHandle} from "react";
import classes from "../../styles/HomeSlider.module.scss";

let IMAGES_LENGTH;
const Animation = forwardRef(({images, currentSlide, setImages, hover, setCurrentSlide}, ref) => {
    const [styles, setStyles] = useState([]);
    const [timerStateChange, setTimerStateChange] = useState(true);
    const [timeoutId, setTimeoutId] = useState(undefined);

    useImperativeHandle(ref, () => ({
        slideForward() {
            slideForwards()
        },
        slideBackwards() {
            slideBackwards()
        },
        slideTo(idx) {
            slideTo(idx)
        }
    }));

    const slideTo = (idx) => {
        const amount = idx - currentSlide;
        if (amount > 0) {
            for (let i = 0; i < amount; i++) {
                unMountStyle(currentSlide + i)
            }
            slideForwardStyle(idx)
            setCurrentSlide(currentSlide + amount)
            return;
        } else if (amount === 0) {
            //do nothing
            return;
        } else {

        }
        unMountStyle(currentSlide)
        slideForwardStyle(currentSlide)
    }

    const slideForwards = () => {
        unMountStyle(currentSlide)
        slideForwardStyle(currentSlide)
    }

    const slideBackwards = () => {
        mountStyle(currentSlide)
        slideBackwardsStyle(currentSlide)
    }


    const calculateIndex = (idx) => {
        return idx % IMAGES_LENGTH
    }

    const unMountStyle = (i) => {
        styles[i] = {
            ...styles[i],
            transition: 'all 1s ease',
            transform: 'scale(0)'
        }
    }

    const mountStyle = (i) => {
        styles[i - 1] = {
            ...styles[i - 1],
            transition: 'all 1s ease',
            transform: 'scale(1)',
        }
    }

    const slideForwardStyle = (idx) => {
        for (let i = 0; i < images.length; i++) {
            if (idx !== i) {
                const left = styles[i].left ? parseInt(styles[i].left) : undefined
                styles[i] = {
                    ...styles[i],
                    transition: "all 1s ease",
                    left: `${left - 700}px`,
                }
            }
        }
    }

    const slideBackwardsStyle = (idx) => {
        for (let i = 0; i < images.length; i++) {
            if ((idx - 1) !== (i)) {
                const left = styles[i].left ? parseInt(styles[i].left) : undefined
                styles[i] = {
                    ...styles[i],
                    transition: "all 1s ease",
                    left: `${left + 700}px`,
                }
            }
        }
    }


    const transitionEnd = (e) => {
        // if (e.nativeEvent.propertyName === 'transform') {
        // if (currentSlide === idx) {
        // setImages([...images, images[idx - 1]]);
        // }
    }


    useEffect(() => {
        const stylesArr = []
        for (let i = 0; i < images.length; i++) {
            let left = i * 700;
            if (i === 0) {
                stylesArr.push({
                    transition: 'all 1s ease',
                })
            } else {
                stylesArr.push({
                    position: 'absolute',
                    left: `${left}px`,
                    transition: 'all 1s ease',
                })
            }
        }
        setStyles(stylesArr)
        IMAGES_LENGTH = images.length
    }, [])

    useEffect(() => {
        if (styles.length > 0) {
            let timeout;
            if (!hover) {
                timeout = setTimeout(() => {
                    setCurrentSlide(currentSlide + 1)
                    setTimerStateChange(!timerStateChange)
                    slideForwards()
                }, 5000)
                setTimeoutId(timeout)
            } else {
                if (timeoutId) {
                    clearTimeout(timeoutId)
                }
            }
        }
    }, [timerStateChange, hover, styles])

    return images.map((img, i) => (
        <div style={styles[i]} onTransitionEnd={transitionEnd}
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
});

export default Animation;

