import classes from "../styles/ArtistsSlider.module.scss";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRef} from "react";

export default function ArtistsSlider() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const sliderRef = useRef()


    return <div className={classes.artistMainSec}>
        <div className={classes.artistTitle}>
            Artists
        </div>
        <div className={classes.moreArtists}>
            <p className={classes.artistsSubtext}>
                Learn more about these great artists
            </p>
            <p className={classes.viewAll}>
                View All
            </p>
        </div>
        <div className={classes.artistsSlider}>
            <img className={classes.vectorLeft} onClick={() => {
                sliderRef.current.goNext()
            }}
                 src="/icons/vector-left.png" alt=""/>
            <Slide ref={sliderRef} easing={"ease"} slidesToShow={matches ? 2 : 4} infinite={true} arrows={false}
                   slidesToScroll={1}
                   duration={5000}>
                <div className={classes.artist}>
                    <img src="/images/artists/Ahmad-Nasrollahi.jpg" alt=""/>
                    <p>Ahmad Nasrollahi</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/artists/Farideh-Lashai.jpg" alt=""/>
                    <p>Farideh Lashai</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/artists/Kambiz-Sabri.jpg" alt=""/>
                    <p>Kambiz Sabri</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/artists/Reza-Derakhshani.jpg" alt=""/>
                    <p>Reza Derakhshani</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/artists/Sahand-Hesamiyan.jpg" alt=""/>
                    <p>Sahand Hesamiyan</p>
                </div>
            </Slide>
            <img className={classes.vectorRight} onClick={() => {
                sliderRef.current.goBack()
            }}
                 src="/icons/vector-right.png" alt=""/>
        </div>
    </div>
}