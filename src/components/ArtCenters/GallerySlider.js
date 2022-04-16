import classes from "../../styles/ArtCenter/artCenter.module.scss";
import {Slide} from "react-slideshow-image";
import Link from "next/link";
import shortenWords from "../../functions/shortenWords";
import extractContent from "../../functions/getHtmlInnerText";
import * as React from "react";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useRef} from "react";

export const GallerySlider = ({data, setSelectedImg}) => {
    const theme = useTheme();
    const gallerySliderRef = useRef()

    const matches1 = useMediaQuery(theme.breakpoints.down('sm'));

    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery(theme.breakpoints.down('lg'));
    const matches4 = useMediaQuery(theme.breakpoints.down('xl'));

    const mapData = () => {
        return data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).map((img, key) => {
            return <div
                onClick={() => setSelectedImg(img.id)}
                key={key} className={classes.SlideImg3}
                style={{backgroundImage: `url("${img.url}")`}}/>
        })
    }

    const slider = () => {
        return  <Slide style={{position: 'relative'}}
                       autoplay={false}
            // autoplay={artCenter.medias.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).length > 5 ? true : false}
                       cssClass={classes.slider}
                       easing={"ease"}
                       slidesToShow={matches1 ? 2 : matches2 ? 3 : matches3 ? 3 : matches4 ? 4 : 5}
            // slidesToShow:matches ? 2 : 4,
                       infinite={true}
                       arrows={data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).length > 5 ? true : false}
                       slidesToScroll={1}
                       transitionDuration={500}
                       duration={5000}
                       nextArrow={matches1 ? <div></div> :
                           <div className={classes.previous}><img
                               alt={"vector-right"}
                               src={'/icons/vector-right.svg'}/>
                           </div>}
                       prevArrow={<div/>}
                       ref={gallerySliderRef}>
            {
                data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).map((img, key) => {
                    return <div
                        onClick={() => setSelectedImg(img.id)}
                        key={key} className={classes.SlideImg}
                        style={{backgroundImage: `url("${img.url}")`}}/>
                })
            }
        </Slide>
    }

    const showData = () => {
        console.log(data.length <= 2)
        console.log(data.length)
        if (matches1) {
            if (data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).length <= 2) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches2) {
            if (data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).length <= 3) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches3) {
            if (data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).length <= 3) {
                return mapData()
            } else {
                return slider()
            }
        }
        if (matches4) {
            if (data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).length <= 4) {
                return mapData()
            } else {
                return slider()
            }
        } else {
            console.log(data.length);
            if (data.filter(image => image.main !== 1 && image.galleryLargePicture !== 1).length <= 4) {
                return mapData()
            } else {
                return slider()
            }
        }
    }

    return (
        // <div className={classes.slider2}>
        //
        // </div>
        <>
            {showData()}
        </>
    )

}