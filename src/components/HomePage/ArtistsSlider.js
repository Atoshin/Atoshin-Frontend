import classes from "../../styles/ArtistsSlider/ArtistsSlider.module.scss";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRef} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import * as React from "react";

export default function ArtistsSlider({artists}) {
    const theme = useTheme();
    const sliderRef = useRef();
    const router = useRouter();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));
    const matches4 = useMediaQuery(theme.breakpoints.down('xl'));

    const mapData = () => {
        return <div style={{border:'solid purple', display:'flex'}}>
            {artists.map((artist, idx) => {
                return (
                    <Link key={idx} href={`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`}>
                        <a>
                            {/*onClick={() => router.push(`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`)}*/}
                            <div key={artist.id} className={classes.artist2}>
                                {/*<img src={artist.medias.find(media => media.main === 1).url} alt="" style={{borderRadius:" 3px 3px 0px 0px"}}/>*/}
                                <div className={classes.artistCard} style={{backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,}}>
                                </div>
                                <p>{artist.fullName}</p>
                            </div>
                        </a>
                    </Link>
                )
            })}
        </div>
    }
    const slider = () => {
        return <Slide ref={sliderRef} easing={"ease"} slidesToShow={matches ? 2 : 4} infinite={true}
                      arrows={matches ? false : artists.length > 4 ? true : false}
                      slidesToScroll={1}
                      transitionDuration={500}
                      duration={3000}>
            {artists.map((artist, idx) => {
                return (
                    <Link key={idx} href={`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`}>
                        <a>
                            {/*onClick={() => router.push(`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`)}*/}
                            <div key={artist.id} className={classes.artist}>
                                {/*<img src={artist.medias.find(media => media.main === 1).url} alt="" style={{borderRadius:" 3px 3px 0px 0px"}}/>*/}
                                <div className={classes.artistCard}
                                     style={{backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,}}>
                                </div>
                                <p>{artist.fullName}</p>
                            </div>
                        </a>
                    </Link>
                )
            })}
        </Slide>
    }

    const showData = () => {
        if (matches) {
            if (artists.length <= 2) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches2) {
            if (artists.length <= 3) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches3) {
            if (artists.length <= 3) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches4) {
            if (artists.length <= 4) {
                return mapData()
            } else {
                return slider()
            }
        } else {
            if (artists.slice(0, 3).length <= 4) {
                return mapData()
            } else {
                return slider()
            }
        }
    }

    return <div className={classes.artistMainSec}>
        <div className={classes.artistTitle}>
            Artists
        </div>
        <div className={classes.moreArtists}>
            <div className={classes.artistsSubtext}>
                Learn more about these great artists
            </div>
            <div onClick={() => router.push('/artists')} className={classes.viewAll}>
                View All
            </div>
        </div>
        <div className={classes.artistsSlider}>
            {/*<img className={classes.vectorLeft} onClick={() => {*/}
            {/*    sliderRef.current.goBack()*/}
            {/*}}*/}
            {/*     src="/icons/vector-left.svg" alt=""/>*/}

            {showData()}

            {/*<Slide ref={sliderRef} easing={"ease"} slidesToShow={matches ? 2 : 4} infinite={true} arrows={matches ? false : artists.length > 4 ? true : false }*/}
            {/*       slidesToScroll={1}*/}
            {/*       transitionDuration={500}*/}
            {/*       duration={3000}>*/}
            {/*    {artists.map((artist, idx) => {*/}
            {/*        return (*/}
            {/*            <Link key={idx} href={`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`}>*/}
            {/*                <a>*/}
            {/*                    /!*onClick={() => router.push(`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`)}*!/*/}
            {/*                    <div key={artist.id} className={classes.artist}>*/}
            {/*                        /!*<img src={artist.medias.find(media => media.main === 1).url} alt="" style={{borderRadius:" 3px 3px 0px 0px"}}/>*!/*/}
            {/*                        <div className={classes.artistCard} style={{backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,}}>*/}
            {/*                        </div>*/}
            {/*                        <p>{artist.fullName}</p>*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*            </Link>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</Slide>*/}


            {/*<img className={classes.vectorRight} onClick={() => {*/}
            {/*    sliderRef.current.goNext()*/}
            {/*}}*/}
            {/*     src="/icons/vector-right.svg" alt=""/>*/}
        </div>
    </div>
}