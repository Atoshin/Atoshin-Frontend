import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";
import Zoom from "react-img-zoom";
import {useEffect, useRef, useState} from "react";

export default function GalleryList({
                                        videos,
                                        mainImg,
                                        isGallary,
                                        images,
                                        vertical,
                                        setSelectedImg,
                                        artCenter,
                                        setNewInfo,
                                        newInfo
                                    }) {

    //
    // console.log({videos});
    // console.log(mainImg);

    // if (typeof document !== 'undefined') {
    //     let span = document.createElement('span');
    //     span.hidden = true;
    //     span.innerHTML = artCenter.videoLinks[0].link;
    //     const iframe = span.children[0];
    //     const ytvId = iframe.src.slice(-11)
    //     span.remove()
    // }

    const selectVideo = (id) => {
        setNewInfo({
            video: true,
            image: false,
            id: id,
            open: true
        })
    }
    const selectImage = (id) => {
        setNewInfo({
            video: false,
            image: true,
            id: id,
            open: true
        })
    }

    return (
        <div className={classes.container}>
            <div className={classes.items}>
                {
                    artCenter.videoLinks.map((data, idx) => {
                        // console.log(data);
                        if (typeof document !== 'undefined') {
                            let span = document.createElement('span');
                            span.hidden = true;
                            span.innerHTML = artCenter.videoLinks[0].link;
                            const iframe = span.children[0];
                            const ytvId = iframe.src.slice(-11)
                            span.remove()
                            return (
                                    <div onClick={() => selectVideo(data.id)} key={idx}
                                         className={classes.videoItem}
                                         style={{
                                             backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`}}>
                                        <img src={'/images/show-asset/videoPlay.svg'}
                                             className={classes.playIcon}
                                            // style={{display: "flex", alignItems: "center", justifyContent: "center"}}
                                        />
                                    </div>
                            )
                        }
                    })
                }
                {
                    images.map((image, idx) => {
                        // console.log(image);
                        if (!image.main && !image.galleryLargePicture && !newInfo.showAsset) {
                            return (
                                <img onClick={() => selectImage(image.id)} className={classes.item} key={idx}
                                     src={image.url} alt=""/>
                            )
                        } else if (newInfo.showAsset) {
                            return (
                                <img onClick={() => selectImage(image.id)} className={classes.item} key={idx}
                                     src={image.url} alt=""/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
