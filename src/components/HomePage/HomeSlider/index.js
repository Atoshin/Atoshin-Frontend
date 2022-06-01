import classes from '../../../styles/HomeSlider/HomeSlider.module.scss'
import {Button, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useEffect, useRef, useState} from "react";
import Slider from './Slider';
import {useRouter} from "next/router";
import Link from "next/link";

export default function HomeSlider({assets}) {
    const imageRef = useRef({
        current: {}
    })
    const animateRef = useRef({
        current: {
            state: {
                index: 0
            }
        }
    })
    const router = useRouter()
    const BuyBtn = () => {
        return <Link href={`/show-asset/${assets[currentSlide].id}`}>
            <a>
                <Button
                    className={comingSoonWithTime ? classes.buyBtnBlack : comingSoon ? classes.buyBtnBlack2 : classes.buyBtn}>
                    {
                        comingSoon || comingSoonWithTime ? "coming soon" : 'Buy Now'
                    }
                </Button>
            </a>
        </Link>
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('1052px'));
    const [currentSlide, setCurrentSlide] = useState(0)
    const [visibleDesc, setVisibleDesc] = useState(true)
    const [firstRender, setFirstRender] = useState(true)
    const [currentDesc, setCurrentDesc] = useState(assets[0])

    const [comingSoon, setComingSoon] = useState(false);
    const [soldOut, setSoldOut] = useState(false);
    const [comingSoonWithTime, setComingSoonWithTime] = useState(false);

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
    const artworkInfo = () => {
        if (currentDesc) {
            if (currentDesc.bio.slice(3, -4).length >= 388) {
                return {__html: currentDesc.bio.slice(3, -4).slice(0, 386) + '..'}
            } else {
                return {__html: currentDesc.bio}
            }
        }
    }
    return <div className={classes.topMainSec}>
        <div className={visibleDesc ? classes.topLeftSecFadeIn : classes.topLeftSecFadeOut}>
            <div className={classes.artWorkName}>
                {currentDesc.title}
            </div>
            <div className={classes.artistName}>
                By {currentDesc.artistName}
            </div>
            <div className={classes.infoSecDesktop}>
                <div className={classes.artworkInfoSec}>
                    <div className={classes.artworkInfo} dangerouslySetInnerHTML={artworkInfo()}/>
                </div>
                <div className={classes.buyBtnDesktop}>
                    {
                        soldOut ?
                            <Button className={classes.buyBtnDisabled}>
                                {
                                    soldOut ?
                                        'sold out' : 'Buy Now'
                                }
                            </Button> : <BuyBtn/>
                    }

                </div>
            </div>
        </div>
        <div className={classes.topRightMainSec}>
            <div className={classes.sliderImages} style={{height: (((imageRef.current.clientWidth) * 2) / 3) + 115}}>
                {/*<Animation hover={isHovered} images={sliderImages} setImages={setSliderImages}*/}
                {/*    currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} ref={animateRef} />*/}
                <Slider imageRef={imageRef} assets={assets} currentSlide={currentSlide} images={sliderImages}
                        sliderRef={animateRef} comingSoon={comingSoon} soldOut={soldOut}
                        comingSoonWithTime={comingSoonWithTime}
                        setCurrentSlide={setCurrentSlide}/>
            </div>
            <div className={comingSoon ? classes.sliderBottomMenuComingSoon : classes.sliderBottomMenu}>
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
            <div className={classes.mobBtn}>
                {
                    soldOut ?
                        <Button className={classes.buyBtnDisabled}>
                            {
                                soldOut ?
                                    'sold out' : 'Buy Now'
                            }
                        </Button> : <BuyBtn/>
                }

            </div>
        </div>
    </div>
}