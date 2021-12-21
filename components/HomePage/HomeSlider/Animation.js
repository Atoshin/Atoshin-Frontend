import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import classes from "../../../styles/HomeSlider/HomeSlider.module.scss";
import usePrevious from "../../../functions/hooks/usePrevious";
import useEffectDebugger from "../../../functions/hooks/useEffectDebugger";

let IMAGES_LENGTH;
const Animation = forwardRef(({ images, currentSlide, setImages, hover, setCurrentSlide }, ref) => {
    const [styles, setStyles] = useState({});
    const [timeoutId, setTimeoutId] = useState(undefined);
    let startingClientX;
    let dragging = false;
    let distanceSwiped = 0;
    let width = 0;
    const prevSlide = usePrevious(currentSlide)

    useImperativeHandle(ref, () => ({
        slideForward() {
            slideForwards();
        },
        slideBackwards() {
            slideBackwards();
        },
        startSwipe(e) {
            startSwipe(e);
        },
        endSwipe(e) {
            endSwipe(e);
        },
        swipe(e) {
            swipe(e);
        },
        slideTo(idx) {
            slideTo(idx)
        }
    }));


    const swipe = (e) => {
        const clientX = e.touches ? e.touches[0].pageX : e.clientX;
        if (dragging) {
            let translateValue = width * currentSlide;
            const distance = clientX - startingClientX;
            // if (
            //     !infinite &&
            //     this.state.index === children.length - slidesToScroll &&
            //     distance < 0
            // ) {
            //     // if it is the last and infinite is false and you're swiping left
            //     // then nothing happens
            //     return;
            // }
            // if (!infinite && this.state.index === 0 && distance > 0) {
            //     // if it is the first and infinite is false and you're swiping right
            //     // then nothing happens
            //     return;
            // }
            distanceSwiped = distance;
            translateValue -= distanceSwiped;
            imageContainer.style.transform = `translate(-${translateValue}px)`;
        }
    }

    const endSwipe = (e) => {
        dragging = false;
        if (Math.abs(distanceSwiped) / width > 0.2) {
            if (distanceSwiped < 0) {
                slideForwards();
            } else {
                slideBackwards();
            }
        } else {
            if (Math.abs(distanceSwiped) > 0) {
                // slideTo(, );
            }
        }
    }

    const startSwipe = (e) => {
        startingClientX = e.touches ? e.touches[0].pageX : e.clientX;
        clearTimeout(timeoutId);
        dragging = true;
    }

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
        setTimeout(() => {
            setStyles({
                ...styles,
                [currentSlide]: {
                    transition: 'all 1s ease',
                    transform: 'scale(1)',
                    left: `${(images.length - 1) * 700}px`
                }
            })
        }, 1000)
        setCurrentSlide(calculateNextSlideIdx())
    }

    const calculateNextSlideIdx = () => {
        if (currentSlide % images.length === images.length - 1) {
            return 0
        } else {
            return (currentSlide % images.length) + 1
        }
    }

    const slideBackwards = () => {
        mountStyle(currentSlide)
        slideBackwardsStyle(currentSlide)
        setCurrentSlide(currentSlide - 1)
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
        const stylesObj = {}
        for (let i = 0; i < images.length; i++) {
            let left = i * 700;
            // if (i === 0) {
            //     stylesObj[i] = {
            //         transition: 'all 1s ease',
            //     }
            // } else {
            stylesObj[i] = {
                left: `${left}px`,
                transition: 'all 1s ease',
            }
            // }
        }
        setStyles(stylesObj)
        IMAGES_LENGTH = images.length
    }, [])

    const slideOnClick = (i) => {
        if (currentSlide !== i) {
            slideForwards()
        }
    }

    const autoSlide = () => {
        let timeout = setTimeout(() => {
            slideForwards()
        }, 5000)
        setTimeoutId(timeout)
    }

    // useEffect(() => {
    // if (Object.keys(styles).length > 0) {
    //     if (!hover) {
    //         autoSlide()
    //     } else {
    //         if (timeoutId) {
    //             clearTimeout(timeoutId)
    //         }
    //     }
    // }
    // }, [hover, Object.keys(styles).length, currentSlide])

    return images.map((img, i) => (
        <div style={styles[i]} onTransitionEnd={transitionEnd}
            className={currentSlide === i ? classes.topRightSec : classes.topRightSecBehind}
            onClick={() => slideOnClick(i)}>
            <div className={classes.artworkImgSec}>
                <img className={classes.artWorkImg} src={img} alt="" />
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

