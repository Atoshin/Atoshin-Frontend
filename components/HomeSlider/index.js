import classes from '../../styles/HomeSlider.module.scss'
import {Button, Fade, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Grow from '@mui/material/Grow';
import {useState} from "react";

export default function Index() {

    const BuyBtn = () => {
        return <Button onClick={() => setCurrentSlide(currentSlide + 1)} className={classes.buyBtn}>Buy Now</Button>
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderImages = [
        '/images/starryNight.png',
        '/images/starryNight.png',
    ]


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
                <BuyBtn/>
            }
        </div>
        <div className={classes.topRightMainSec}>
            <div className={classes.sliderImages}>
                {sliderImages.map((image, idx) => {
                    return <Fade
                        // in={currentSlide === idx}
                        in={true}
                        style={{transformOrigin: '0 0 0'}}
                        {...(currentSlide === idx ? {timeout: 1000} : {})}
                    >
                        <div className={classes.topRightSec}>
                            <div className={classes.artworkImgSec}>
                                <img className={classes.artWorkImg} src={image} alt=""/>
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
                        </div>
                    </Fade>
                })}
            </div>
            <div className={classes.sliderBottomMenu}>
                <img className={classes.vector} src="/icons/vector-left.png" alt=""/>
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
                <img className={classes.vector} src="/icons/vector-right.png" alt=""/>
            </div>
            {matches &&
                <BuyBtn/>
            }
        </div>
    </div>
}