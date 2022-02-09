import classes from '../../../styles/HomeSlider/HomeSlider.module.scss'
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useEffect, useRef, useState} from "react";
import Slider from './Slider';
import {useRouter} from "next/router";

export default function HomeSlider({assets}) {
    const animateRef = useRef({
        current: {
            state: {
                index: 0
            }
        }
    })
    const router = useRouter()
    const BuyBtn = () => {
        return <Button onClick={() => router.push(`/show-asset/${assets[currentSlide].id}`)} className={classes.buyBtn}>Buy
            Now</Button>
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentSlide, setCurrentSlide] = useState(0)
    const [visibleDesc, setVisibleDesc] = useState(true)
    const [firstRender, setFirstRender] = useState(true)
    const [currentDesc, setCurrentDesc] = useState(assets[0])
    const changeImageDesc = () => {
        setVisibleDesc(false)
        setTimeout(() => {
            setCurrentDesc(assets[currentSlide])
            setVisibleDesc(true)
        }, 500)
    }

    useEffect(() => {
        if (!firstRender) {
            changeImageDesc()
        } else {
            setFirstRender(false)
        }
    }, [currentSlide])

    const sliderImages = assets.map(asset => {
        return asset.medias.find(media => media.main === 1).url
    })


    return <div className={classes.topMainSec}>
        <div className={visibleDesc ? classes.topLeftSecFadeIn : classes.topLeftSecFadeOut}>
            <div className={classes.artWorkName}>
                {currentDesc.title}
            </div>
            <div className={classes.artistName}>
                By {currentDesc.artistName}
            </div>
            {!matches &&
                <>
                    <div className={classes.artworkInfo} dangerouslySetInnerHTML={{__html: currentDesc.bio}}/>
                    <BuyBtn/>
                </>
            }
        </div>
        <div className={classes.topRightMainSec}>
            <div className={classes.sliderImages}>
                {/*<Animation hover={isHovered} images={sliderImages} setImages={setSliderImages}*/}
                {/*    currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} ref={animateRef} />*/}
                <Slider assets={assets} currentSlide={currentSlide} images={sliderImages} sliderRef={animateRef}
                        setCurrentSlide={setCurrentSlide}/>
            </div>
            <div className={classes.sliderBottomMenu}>
                <img style={{marginRight: 20,}} className={classes.vector} onClick={() => {
                    animateRef.current.goBack()
                }}
                     src="/icons/vector-left.svg" alt=""/>
                {assets.map((asset, idx) => {
                    return <div key={idx} onClick={() => animateRef.current.goTo(idx)}
                                className={currentSlide === idx ? classes.selectedTap : classes.unselectedTab}>
                        {asset.title}
                    </div>
                })}
                <img style={{marginLeft: 20,}} className={classes.vector} onClick={() => {
                    animateRef.current.goNext()
                }}
                     src="/icons/vector-right.svg" alt=""/>
            </div>
            {matches &&
                <BuyBtn/>
            }
        </div>
    </div>
}