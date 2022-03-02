import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";
import Zoom from "react-img-zoom";
import {useEffect, useRef, useState} from "react";

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
                                        two,
                                        setTwo
                                    }) {
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
        style={{borderRadius: 3}}
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
                                style={{borderRadius: 3}}
                                dangerouslySetInnerHTML={{__html: mainImg.link}}/>
                            :
                            <div  style={{width:698, height:469, display:'flex', justifyContent:'center'}}>
                                <img src={mainImg.url}
                                     style={{borderRadius: 3, boxShadow:" 0px 1px 3px 0px #00000026"}}
                                    // style={{width:698, height:469}}
                                />
                            </div>
                            // <div style={{borderRadius: 3}}><ZoomImg/></div>
                    }
                </div>
                {/*<img className={classes.modalMainImg} src="/images/starry-night-main.png" alt=""/>*/}
                <div className={classes.dialogBody}>
                    <div className={classes.otherImgesContainer}>
                        {videos.map((video, idx) => {
                            if (typeof document !== "undefined") {
                                let span = document.createElement('span');
                                span.hidden = true;
                                span.innerHTML = video.link;
                                const iframe = span.children[0]
                                const ytvId = iframe.src.slice(-11)
                                span.remove()
                                if (video.id === mainImg.id) {
                                    return <div style={{
                                        width: 120,
                                        height: 120,
                                        border: '2px solid #FD6E19',
                                        borderRadius: 3,
                                        marginBottom: 24,
                                        marginLeft: 24,
                                        padding: 3,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <div onClick={() => setImg(video)} key={idx} style={{
                                            backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`,
                                            width: 110,
                                            height: 110,
                                            borderRadius: 3,
                                            backgroundPosition: 'center',
                                            backgroundSize: "cover",
                                            cursor: "pointer",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: "0px 1px 3px 0px #00000026",
                                        }}>
                                            <img src={'/images/show-asset/videoPlay.svg'}
                                                 style={{width: 53.84, height: 53.84}}/>

                                        </div>
                                    </div>

                                } else {
                                    return <div onClick={() => setImg(video)} key={idx} style={{
                                        backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`,
                                        width: 120,
                                        height: 120,
                                        borderRadius: 3,
                                        backgroundPosition: 'center',
                                        backgroundSize: "cover",
                                        cursor: "pointer",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 24,
                                        marginLeft: 24,
                                        boxShadow: '0px 1px 3px 0px #00000026',
                                    }}>
                                        <img src={'/images/show-asset/videoPlay.svg'}
                                             style={{width: 53.84, height: 53.84}}/>

                                    </div>
                                }
                            }
                        })}
                        {
                            two ?
                                images.filter(media => media.homeapagePicture === 1).map((image, idx) => {
                                    if (image.id === mainImg.id) {
                                        return <div style={{
                                            width: 120,
                                            height: 120,
                                            border: '2px solid #FD6E19',
                                            borderRadius: 3,
                                            marginBottom: 24,
                                            marginLeft: 24,
                                            padding: 3,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <div id='test' onClick={() => setImg(image)} key={idx} style={{
                                                backgroundImage: `url(${image.url})`,
                                                width: 110,
                                                height: 110,
                                                borderRadius: 3,
                                                backgroundPosition: 'center',
                                                backgroundSize: "cover",
                                                cursor: "pointer",
                                                boxShadow: '0px 1px 3px 0px #00000026',
                                            }}/>
                                        </div>
                                    } else {
                                        return <div onClick={() => setImg(image)} key={idx} style={{
                                            backgroundImage: `url(${image.url})`,
                                            width: 120,
                                            height: 120,
                                            borderRadius: 3,
                                            backgroundPosition: 'center',
                                            backgroundSize: "cover",
                                            cursor: "pointer",
                                            marginBottom: 24,
                                            marginLeft: 24,
                                            boxShadow: '0px 1px 3px 0px #00000026',
                                        }}/>
                                    }
                                })
                                :
                                images.map((image, idx) => {
                                    if (image.id === mainImg.id) {
                                        // location.href = "#test";
                                        // if (typeof window !== 'undefined') {
                                        //     document.querySelector('#test').scrollIntoView({
                                        //         behavior: 'smooth'
                                        //     });
                                        // }
                                        // return <div className={classes.selectedItem}>
                                        //     <div id='test'  onClick={() => setImg(image)} key={idx} style={{
                                        //         backgroundImage: `url(${image.url})`,
                                        //         width: 120,
                                        //         height: 120,
                                        //         // boxShadow: '0px 7px 12px rgba(0, 0, 0, 0.1)',
                                        //         // boxShadow: 'rgb(0 0 0 / 93%) 0px 7px 12px',
                                        //         boxShadow: '#FD6108 0px 7px 12px',
                                        //         backgroundPosition: 'center',
                                        //         backgroundSize: "cover",
                                        //         cursor: "pointer",
                                        //         marginBottom: 24,
                                        //         marginLeft: 24,
                                        //     }}/>
                                        // </div>
                                        return <div style={{
                                            width: 120,
                                            height: 120,
                                            border: '2px solid #FD6E19',
                                            borderRadius: 3,
                                            marginBottom: 24,
                                            marginLeft: 24,
                                            padding: 3,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <div id='test' onClick={() => setImg(image)} key={idx} style={{
                                                backgroundImage: `url(${image.url})`,
                                                width: 110,
                                                height: 110,
                                                borderRadius: 3,
                                                backgroundPosition: 'center',
                                                backgroundSize: "cover",
                                                cursor: "pointer",
                                                boxShadow: '0px 1px 3px 0px #00000026',
                                            }}/>
                                        </div>
                                    } else {
                                        return <div onClick={() => setImg(image)} key={idx} style={{
                                            backgroundImage: `url(${image.url})`,
                                            width: 120,
                                            height: 120,
                                            borderRadius: 3,
                                            backgroundPosition: 'center',
                                            backgroundSize: "cover",
                                            cursor: "pointer",
                                            marginBottom: 24,
                                            marginLeft: 24,
                                            boxShadow: '0px 1px 3px 0px #00000026',
                                        }}/>
                                    }
                                })
                        }
                        {/*<img src="/images/starry-night-second.png" className={classes.sideImage}/>*/}
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
