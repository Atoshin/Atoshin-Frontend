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
    console.log(mainImg)
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
        // console.log(id);
        setNewInfo({
            ...newInfo,
            video: false,
            image: true,
            id: id,
            open: true,
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
                            if(data.id === newInfo.id){
                                return <div className={classes.selectedVideoSec}>
                                    <div onClick={() => selectVideo(data.id)} key={idx}
                                         className={classes.selectedVideoItem}
                                         style={{
                                             backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`,
                                         }}>
                                        <img src={'/images/show-asset/videoPlay.svg'}
                                             className={classes.playIcon}
                                            // style={{display: "flex", alignItems: "center", justifyContent: "center"}}
                                        />
                                    </div>
                                </div>
                            }
                        else{
                            return  <div onClick={() => selectVideo(data.id)} key={idx}
                                         className={classes.videoItem}
                                         style={{
                                             backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`
                                         }}>
                                <img src={'/images/show-asset/videoPlay.svg'}
                                     className={classes.playIcon}
                                    // style={{display: "flex", alignItems: "center", justifyContent: "center"}}
                                />
                            </div>
                            }
                            // return (
                                // <div onClick={() => selectVideo(data.id)} key={idx}
                                //      className={classes.videoItem}
                                //      style={{
                                //          backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`
                                //      }}>
                                //     <img src={'/images/show-asset/videoPlay.svg'}
                                //          className={classes.playIcon}
                                //         // style={{display: "flex", alignItems: "center", justifyContent: "center"}}
                                //     />
                                // </div>
                            // )
                        }
                    })
                }
                {
                    images.map((image, idx) => {
                        if (!newInfo.showAsset && !image.main && !image.galleryLargePicture) {
                            // return (
                                // <img onClick={() => {
                                //     selectImage(image.id)
                                // }} className={classes.item} key={idx}
                                //      // style={{border: 'solid purple'}}
                                //      src={image.url} alt=""/>
                            if (image.id === newInfo.id) {
                                return <div className={classes.selectedItem} style={{display:'flex'}}>
                                    <img onClick={() => {
                                        selectImage(image.id)
                                    }} className={classes.selectedItemImg} key={idx}
                                         src={image.url} alt=""/>
                                </div>
                            } else {
                                return <img onClick={() => {
                                    selectImage(image.id)
                                }} className={classes.item} key={idx}
                                            src={image.url} alt=""/>
                            }
                        // )
                        } else if (newInfo.showAsset) {
                            // return (
                             if(image.id === newInfo.id){
                                 return <div className={classes.selectedItem}>
                                     <img onClick={() => {
                                         selectImage(image.id)
                                     }} className={classes.selectedItemImg} key={idx}
                                          src={image.url} alt=""/>
                                 </div>
                                 // return  <img onClick={() => {
                                 //     selectImage(image.id)
                                 // }} className={classes.selectedItem} key={idx}
                                 //               // style={{border:'solid purple'}}
                                 //                 src={image.url} alt=""/>
                             }
                             else {
                                return <img onClick={() => {
                                     selectImage(image.id)
                                 }} className={classes.item} key={idx}
                                      src={image.url} alt=""/>
                             }
                            // )
                        }

                    })
                }
            </div>
        </div>
    )
}
