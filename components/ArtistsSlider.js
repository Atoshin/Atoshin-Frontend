import classes from "../styles/ArtistsSlider.module.scss";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

export default function ArtistsSlider() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

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
            <Slide easing={"ease"} slidesToShow={matches ? 2 : 4} slidesToScroll={1} autoplay={false}>
                <div className={classes.artist}>
                    <img src="/images/img_1.png" alt=""/>
                    <p>Pablo Picasso</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/img_2.png" alt=""/>
                    <p>Vincent van Gogh</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/img_3.png" alt=""/>
                    <p>Claude Monet</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/img_4.png" alt=""/>
                    <p>Jackson Pollock</p>
                </div>
                <div className={classes.artist}>
                    <img src="/images/img_3.png" alt=""/>
                    <p>Claude Monet</p>
                </div>
            </Slide>
        </div>
    </div>
}