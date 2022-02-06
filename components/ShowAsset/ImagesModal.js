import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";
import Zoom from "react-img-zoom";
import {useEffect, useRef, useState} from "react";

export default function ImagesModal({open, setOpen, images, title, videos}) {
    const [mainImg, setImg] = useState(images.find(img => img.main === 1))
    const ref = useRef();
    const handleClose = () => {
        setOpen(false);
        if (ref.current) {
            const iframe = ref.current.children[0];
            iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
        setImg(images.find(img => img.main === 1))
    }

    let ZoomImg = () => (<Zoom
        img={mainImg.url}
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
                    <img src="/icons/vector-X.png" alt=""/>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.modalMainImg}>
                    {
                        mainImg.videoLinkableId ?
                            <div
                                id="ytv-asset"
                                ref={ref}
                                dangerouslySetInnerHTML={{__html: mainImg.link}}/>
                            :
                    <ZoomImg/>
                    }
                </div>
                {/*<img className={classes.modalMainImg} src="/images/starry-night-main.png" alt=""/>*/}
                <div className={classes.dialogBody}>
                    <div className={classes.otherImgesContainer}>
                        {images.map((image, idx) => {
                            return <div onClick={() => setImg(image)} key={idx} style={{
                                backgroundImage: `url(${image.url})`,
                                width: 120,
                                height: 120,
                                backgroundPosition: 'center',
                                backgroundSize: "cover",
                                cursor: "pointer",
                                marginBottom: 24,
                                marginLeft: 24,
                            }}/>
                        })}
                        {videos.map((video, idx) => {
                            if (typeof document !== "undefined"){
                                let span = document.createElement('span');
                                span.hidden = true;
                                span.innerHTML = video.link;
                                const iframe = span.children[0]
                                const ytvId = iframe.src.slice(-11)
                                span.remove()
                                return <div onClick={() => setImg(video)} key={idx} style={{
                                    backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`,
                                    width: 120,
                                    height: 120,
                                    backgroundPosition: 'center',
                                    backgroundSize: "cover",
                                    cursor: "pointer",
                                    marginBottom: 24,
                                    marginLeft: 24,
                                }}/>
                            }
                        })}
                        {/*<img src="/images/starry-night-second.png" className={classes.sideImage}/>*/}
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
