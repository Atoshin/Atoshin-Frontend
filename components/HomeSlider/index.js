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
    const descriptions = [
        {
            name: 'Just You Name it',
            artist: 'Reza Derakhshani',
            desc: "The present work belongs to the \"Khosrow and Shirin\" collection, in which two Iranian lovers are depicted. Date of creation is 2001."
        },
        {
            name: 'Just You Name it',
            artist: 'Reza Derakhshani',
            desc: "The present work belongs to the \"Khosrow and Shirin\" collection, in which two Iranian lovers are depicted. Date of creation is 2001."
        },
        {
            name: 'Rain',
            artist: 'Kambiz Sabri',
            desc: "Rain in 2011 among 2451 works from around the world, was able to win the Emirates Sky Skills competition and in addition to a $ 5,000 cash prize and a special show and art pavilion at Art Dubai 2011, for one year on the Emirates's pulpit cards around the world was  published. Also in 2016, this Artwork was displayed at the Venice Architecture Biennale for 6 months"
        },
        {
            name: 'Lanter I',
            artist: 'Sahand Hesamiyan',
            desc: "This work is designed for Didi Gallery and Museum only in 2015."
        },
        {
            name: 'Just you Name it',
            artist: 'Ahmad Nasrollahi',
            desc: "This artwork is created in 2004."
        },
    ]
    const [currentDesc, setCurrentDesc] = useState(descriptions[0])
    const changeImageDesc = () => {
        setVisibleDesc(false)
        setTimeout(() => {
            setCurrentDesc(descriptions[currentSlide])
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
                {currentDesc.name}
            </div>
            <div className={classes.artistName}>
                By {currentDesc.artist}
            </div>
            <div className={classes.artworkInfo}>
                {currentDesc.desc}
            </div>
            {!matches &&
                <BuyBtn/>
            }
        </div>
        <div className={classes.topRightMainSec}>
            <div className={classes.sliderImages}>
                {/*<Animation hover={isHovered} images={sliderImages} setImages={setSliderImages}*/}
                {/*           currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} ref={animateRef}/>*/}
            </div>
            <div className={classes.sliderBottomMenu}>
                <img style={{marginRight: 20,}} className={classes.vector} onClick={() => {
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
                <img style={{marginLeft: 20,}} className={classes.vector} onClick={() => {
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