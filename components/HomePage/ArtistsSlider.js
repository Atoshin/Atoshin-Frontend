import classes from "../../styles/ArtistsSlider/ArtistsSlider.module.scss";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRef} from "react";
import {useRouter} from "next/router";

export default function ArtistsSlider({artists}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const sliderRef = useRef();
    const router = useRouter();

    return <div className={classes.artistMainSec}>
        <div className={classes.artistTitle}>
            Artists
        </div>
        <div className={classes.moreArtists}>
            <p className={classes.artistsSubtext}>
                Learn more about these great artists
            </p>
            <p onClick={() => router.push('/artists')} className={classes.viewAll}>
                View All
            </p>
        </div>
        <div className={classes.artistsSlider}>
            <img className={classes.vectorLeft} onClick={() => {
                sliderRef.current.goBack()
            }}
                 src="/icons/vector-left.svg" alt=""/>
            <Slide ref={sliderRef} easing={"ease"} slidesToShow={matches ? 2 : 4} infinite={true} arrows={false}
                   slidesToScroll={1}
                   transitionDuration={500}
                   duration={5000}>
                {artists.map(artist => {
                    return <div onClick={() => router.push(`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`)} key={artist.id}
                                className={classes.artist}>
                        <img src={artist.medias.find(media => media.main === 1).url} alt=""/>
                        <p>{artist.fullName}</p>
                    </div>
                })}
            </Slide>
            <img className={classes.vectorRight} onClick={() => {
                sliderRef.current.goNext()
            }}
                 src="/icons/vector-right.svg" alt=""/>
        </div>
    </div>
}