import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";
import Zoom from "react-img-zoom";
import {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
export default function ShowImage({
                                      videos,
                                      mainImg,
                                      isGallery,
                                      images,
                                      vertical,
                                      selectedImg,
                                      clickedVideoId,
                                      newInfo,
                                  }) {

    const theme = useTheme();

    const [img, setImg] = useState(images.find(img => img.main === 1))
    const [isImage, setIsImage] = useState(images.find(img => img.main === 1))
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.down('md'));
    const matches3 = useMediaQuery('(max-width:1000px)');


    let ZoomImg = () => (<Zoom
        img={img.url}
        // style={{borderRadius: 3}}
        zoomScale={2}
        width={698}
        height={469}
    />)
    // console.log({videos});
    // console.log(img);
    //
    // console.log(images[1].id);
    // console.log(selectedImg);
    //
    // console.log({clickedVideoId});
    // // console.log(videos[0].id);
    //
    // console.log(newInfo);
    useEffect(() => {
        if (newInfo.video) {
            // console.log('video');
            setImg(videos.find(video => video.id === newInfo.id))
        } else {
            setImg(images.find(img => img.id === newInfo.id))
            // console.log('image');
        }
    }, [newInfo])

    // useEffect(() => {
    //     setImg(images.find(img => img.id === newInfo.id))
    // }, [newInfo])

    return (
        <div className={classes.showImageContainer}>
            {/*{*/}
            {/*    images.map((image, idx) => {*/}
            {/*        console.log(image);*/}
            {/*        return(*/}
            {/*)*/}
            {/*})*/}
            {/*}*/}
            {
                newInfo.video ?
                    <div className={classes.video} dangerouslySetInnerHTML={{__html: img.link}}>
                    </div>
                    :
                    ''
            }
            {
                newInfo.image ?
                    isGallery ?
                        <>
                            <img width={'100%'} height={'90%'} className={classes.showImage} src={img.url} alt=""/>
                        </> :
                        (matches || matches2 || matches3 ) ?
                        <>
                            <img width={'100%'} height={'90%'} className={classes.showImage} src={img.url} alt=""/>
                            {/*<img width={'100%'} height={'90%'} className={classes.showImage} style={{border:'solid '}} src={img.url} alt=""/>*/}
                        </> :
                            <ZoomImg/>


                    // <img width={'100%'} height={'90%'} className={classes.showImage} src={img.url} alt=""/>

                    :
                    ''
            }
        </div>
    )
}
