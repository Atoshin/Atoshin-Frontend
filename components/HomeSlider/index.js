import classes from '../../styles/HomeSlider.module.scss'
import { Button, Fade, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grow from '@mui/material/Grow';
import { useState, useRef } from "react";
import { Animation } from "./Animation";

export default function Index() {
    const sliderContainerRef = useRef()
    const BuyBtn = () => {
        return <Button onClick={() => setCurrentSlide(currentSlide + 1)} className={classes.buyBtn}>Buy Now</Button>
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderImages, setSliderImages] = useState([
        '/images/starryNight.png',
        '/images/image_645x430.png',
        '/images/starryNight.png',
        '/images/image_645x430.png',
        '/images/starryNight.png',
        '/images/image_645x430.png',
    ]);


    return <div className={classes.topMainSec}>
        <div className={classes.topLeftSec}>
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
                <BuyBtn />
            }
        </div>
        <div className={classes.topRightMainSec}>
            <div className={classes.sliderImages} ref={sliderContainerRef}>
                {sliderImages.map((image, idx) => {
                    return <Animation key={idx} setCurrentSlide={setCurrentSlide} setImages={setSliderImages} images={sliderImages} idx={idx} currentSlide={currentSlide} />
                })}
            </div>
            <div className={classes.sliderBottomMenu}>
                <img className={classes.vector} src="/icons/vector-left.png" alt="" />
                <div className={classes.selectedTap}>
                    Starry Night
                </div>
                <div className={classes.unselectedTab}>
                    Mona Lisa
                </div>
                <div className={classes.unselectedTab}>
                    Las Meninas
                </div>
                <div className={classes.unselectedTab}>
                    The Last Supper
                </div>
                <div className={classes.unselectedTab}>
                    The Scream
                </div>
                <img className={classes.vector} src="/icons/vector-right.png" alt="" />
            </div>
            {matches &&
                <BuyBtn />
            }
        </div>
    </div>
}