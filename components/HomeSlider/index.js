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
        '/images/artworks/art-work1.jpg',
        '/images/artworks/art-work2.jpg',
        '/images/artworks/art-work3.jpg',
        '/images/artworks/art-work4.jpg',
        '/images/artworks/art-work5.jpg',
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
                Lanter l
            </div>
            <div className={classes.artistName}>
                By Sahand Hesamiyan
            </div>
            <div className={classes.artworkInfo}>
                This work is designed for Didi Gallery and Museum only in 2015.
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
                <img style={{marginRight:20,}} className={classes.vector} onClick={() => {
                    setCurrentSlide(prevState => (prevState - 1))
                    animateRef.current.slideBackwards()
                }}
                     src="/icons/vector-left.png" alt=""/>
                <div onClick={() => animateRef.current.slideTo(0)}
                     className={currentSlide === 0 ? classes.selectedTap : classes.unselectedTab}>
                    Just You Name It
                </div>
                <div onClick={() => animateRef.current.slideTo(1)}
                     className={currentSlide === 1 ? classes.selectedTap : classes.unselectedTab}>
                    Just You Name It
                </div>
                <div onClick={() => animateRef.current.slideTo(2)}
                     className={currentSlide === 2 ? classes.selectedTap : classes.unselectedTab}>
                    Rain
                </div>
                <div onClick={() => animateRef.current.slideTo(3)}
                     className={currentSlide === 3 ? classes.selectedTap : classes.unselectedTab}>
                    Lanter l
                </div>
                <div onClick={() => animateRef.current.slideTo(4)}
                     className={currentSlide === 4 ? classes.selectedTap : classes.unselectedTab}>
                    Just You Name It
                </div>
                <img style={{marginLeft:20,}} className={classes.vector} onClick={() => {
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