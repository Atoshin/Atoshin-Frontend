import classes from '../../styles/HomeSlider.module.scss'
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useEffect, useRef, useState} from "react";
import Animation from "./Animation";

export default function Index() {
    const animateRef = useRef()
    const BuyBtn = () => {
        return <Button onClick={() => setCurrentSlide(prevState => (prevState + 1))} className={classes.buyBtn}>Buy
            Now</Button>
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentSlide, setCurrentSlide] = useState(0)
    const [visibleDesc, setVisibleDesc] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const [sliderImages, setSliderImages] = useState([
        '/images/starryNight.png',
        '/images/image_645x430.png',
        '/images/starryNight.png',
    ]);

    const changeImageDesc = () => {
        setVisibleDesc(false)
        setTimeout(() => {
            setVisibleDesc(true)
        }, 800)
    }


    useEffect(() => {
        if (currentSlide !== 0) {
            changeImageDesc()
        }
    }, [currentSlide])

    return <div className={classes.topMainSec} onMouseOut={() => {
        if (isHovered) setIsHovered(false)
    }} onMouseOver={() => {
        if (!isHovered) setIsHovered(true)
    }}>
        <div className={visibleDesc ? classes.topLeftSecFadeIn : classes.topLeftSecFadeOut}>
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
            {!matches &&
                <BuyBtn/>
            }
        </div>
        <div className={classes.topRightMainSec}>
            <div className={classes.sliderImages}>
                <Animation hover={isHovered} images={sliderImages} setImages={setSliderImages}
                           currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} ref={animateRef}/>
            </div>
            <div className={classes.sliderBottomMenu}>
                <img className={classes.vector} onClick={() => {
                    setCurrentSlide(prevState => (prevState - 1))
                    animateRef.current.slideBackwards()
                }}
                     src="/icons/vector-left.png" alt=""/>
                <div onClick={() => animateRef.current.slideTo(0)}
                     className={currentSlide === 0 ? classes.selectedTap : classes.unselectedTab}>
                    Starry Night
                </div>
                <div onClick={() => animateRef.current.slideTo(1)}
                     className={currentSlide === 1 ? classes.selectedTap : classes.unselectedTab}>
                    Mona Lisa
                </div>
                <div onClick={() => animateRef.current.slideTo(2)}
                     className={currentSlide === 2 ? classes.selectedTap : classes.unselectedTab}>
                    Las Meninas
                </div>
                <div onClick={() => animateRef.current.slideTo(3)}
                     className={currentSlide === 3 ? classes.selectedTap : classes.unselectedTab}>
                    The Last Supper
                </div>
                <div onClick={() => animateRef.current.slideTo(4)}
                     className={currentSlide === 4 ? classes.selectedTap : classes.unselectedTab}>
                    The Scream
                </div>
                <img className={classes.vector} onClick={() => {
                    setCurrentSlide(prevState => (prevState + 1))
                    animateRef.current.slideForward()
                }}
                     src="/icons/vector-right.png" alt=""/>
            </div>
            {matches &&
                <BuyBtn/>
            }
        </div>
    </div>
}