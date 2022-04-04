import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";
import Zoom from "react-img-zoom";
import {useEffect, useRef, useState} from "react";
import GalleryList from "./GalleryList";
import ShowImage from "./ShowImage";

export default function ImagesModal({
                                        open,
                                        setOpen,
                                        images,
                                        title,
                                        videos,
                                        clickedImageId,
                                        clickedVideoId,
                                        setClickedImageId,
                                        setClickedVideoId,
                                        isGallery,
                                        vertical,
                                        newInfo,
                                        setNewInfo,
                                        artCenter,
                                        setSelectedImg,
                                        selectedImg
                                    }) {
    const [mainImg, setImg] = useState(images.find(img => img.main === 1))
    // const [selectedImg, setSelectedImg] = useState()

    const ref = useRef();
    const handleClose = () => {
        setOpen(false);
        if (ref.current) {
            const iframe = ref.current.children[0];
            iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
        setImg(images.find(img => img.main === 1))
    }

    useEffect(() => {
        if (clickedImageId) {
            setImg(images.find(img => img.id === clickedImageId))
            setClickedImageId('')
        }
        if (clickedVideoId) {
            setImg(videos.find(video => video.id === clickedVideoId))
            setClickedVideoId('')

        }
        // if (open === false) {
        //     setTwo(false)
        // }
    }, [open])


    let ZoomImg = () => (<Zoom
        img={mainImg.url}
        // style={{borderRadius: 3}}
        zoomScale={2}
        width={698}
        height={469}
    />)

    useEffect(() => {
        const backdrop = document.getElementById('ytv-asset')
        if (backdrop) {
            const iframe = backdrop.children[0];
            iframe.width = 698;
            iframe.height = 469;
            const initialSrc = iframe.src;
            const iframeSrc = new URL(initialSrc);
            iframeSrc.searchParams.set('enablejsapi', '1');
            iframeSrc.searchParams.set("version", "3");
            iframeSrc.searchParams.set("playerapiid", "ytplayer");
            iframe.src = iframeSrc;
        } else {
            // eslint-disable-next-line react/display-name
            ZoomImg = () => (<Zoom
                img={mainImg.url}
                zoomScale={2}
                width={698}
                height={469}
            />)
        }
    }, [mainImg])
    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"xl"} classes={{paper: classes.imgDialog}}>
            <div className={classes.dialogHeader}>
                <DialogTitle className={classes.modalTitle}>{title} Photos</DialogTitle>
                <div className={classes.vectorX} onClick={handleClose}>
                    <img className={classes.vector} src="/icons/vector-X.png" alt=""/>
                </div>
            </div>
            <div className={classes.mg}>
                <div className={classes.pic}>
                    <ShowImage isGallery={isGallery} newInfo={newInfo} selectedImg={selectedImg} videos={videos}
                               images={images} mainImg={mainImg} clickedVideoId={clickedVideoId}/>
                </div>
                <div className={classes.list}>
                    <GalleryList newInfo={newInfo} setNewInfo={setNewInfo} setSelectedImg={setSelectedImg}
                                 videos={videos} images={images} mainImg={mainImg} isGallary={isGallery}
                                 setClickedVideoId artCenter={artCenter}/>
                </div>
            </div>
        </Dialog>
    );
}
