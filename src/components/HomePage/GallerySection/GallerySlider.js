import classes from "../../../styles/GallerySlider/GallerySlider.module.scss";
import {Slide} from "react-slideshow-image";

import 'react-slideshow-image/dist/styles.css'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import * as React from "react";

export default function ArtistsSlider({gallery, setSelectedGallery, selectedGallery}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const sliderRef = useRef();
    const router = useRouter();

    return <div className={classes.artistMainSec}>
        <div className={classes.artistsSlider}>
            {/*<img className={classes.vectorLeft}*/}
            {/*     // onClick={() => {sliderRef.current.goBack()}}*/}
            {/*     src="/icons/vector-left.svg" alt=""/>*/}
            <Slide ref={sliderRef} easing={"ease"} slidesToShow={matches ? 2 : 4} infinite={true} arrows={matches ? false : gallery.length < 4 ? true : false }
                   slidesToScroll={1}
                   transitionDuration={500}
                   autoplay={false}
                   duration={5000}>

                {/*// <Link key={idx} href={'/'}>*/}
                {/*//     <a>*/}
                {/*//         /!*onClick={() => router.push(`/artists/${artist.fullName.toLowerCase().replace(/ /g, '-')}/${artist.id}`)}*!/*/}
                {/*//         <div onClick={() => setSelectedGallery(data)} key={data.id} className={classes.artist}>*/}
                {/*//             /!*<img src={artist.medias.find(media => media.main === 1).url} alt="" style={{borderRadius:" 3px 3px 0px 0px"}}/>*!/*/}
                {/*//             <div style={{*/}
                {/*//                 backgroundImage: `url("${data.medias.find(media => media.main === 1).url}")`,*/}
                {/*//                 width: '100%',*/}
                {/*//                 height: '221px',*/}
                {/*//                 backgroundRepeat: "no-repeat",*/}
                {/*//                 backgroundSize: "cover",*/}
                {/*//                 backgroundPosition: 'center'*/}
                {/*//             }}>*/}
                {/*//             </div>*/}
                {/*//             <p>{data.name}</p>*/}
                {/*//         </div>*/}
                {/*//     </a>*/}
                {gallery.map((data) => {
                    if (data.id === selectedGallery.id) {
                        return data.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((img, idx) => {
                            const {url} = img;
                            return <div key={idx} className={classes.selectedGallery}>
                                <div datasrc={url} style={{
                                    backgroundImage: `url("${url}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }} className={classes.galleryPhotos}/>
                                <p className={classes.galleryTitle}>{data.name}</p>
                            </div>
                        })
                    } else {
                        return data.medias.filter(media => media.homeapagePicture === 1).slice(0, 1).map((img, idx) => {
                            const {url} = img;
                            return <div onClick={() => setSelectedGallery(data)} key={idx}
                                        className={classes.artist}>
                                <div datasrc={url} style={{
                                    backgroundImage: `url("${url}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }} className={classes.galleryPhotos}/>
                                <p className={classes.galleryTitle}>{data.name}</p>
                            </div>
                        })
                    }
                        // </Link>
                })}
            </Slide>
            {/*<img className={classes.vectorRight}*/}
            {/*     // onClick={() => {sliderRef.current.goNext()}}*/}
            {/*     src="/icons/vector-right.svg" alt=""/>*/}
        </div>
    </div>
}