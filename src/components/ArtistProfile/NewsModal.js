import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from '../../styles/ArtistProfile/NewsModal.module.scss'

export default function NewsModal({open, setOpen, news}) {

    const handleClose = () => {
        setOpen(false);
        // if (ref.current) {
        //     const iframe = ref.current.children[0];
        //     iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        // }
        // setImg(images.find(img => img.main === 1))
    }
    const linkHandler = (news) => {
        const url = new URL(news.link);
        return url.origin
    }

    return (
        <>
            <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"xl"} classes={ Object.keys(news).length > 5 ? {paper: classes.imgDialogScroll} : {paper: classes.imgDialog}}>
                <div className={classes.dialogHeader}>
                    <DialogTitle className={classes.modalTitle}>Interesting news and stories about artist</DialogTitle>
                    <div className={classes.vectorX} onClick={handleClose}>
                        <img src="/icons/vector-X.png" alt=""/>
                    </div>
                </div>

                <div className={classes.dialogBody}>
                    {news.map((newsSingular, idx) => {
                        return <a key={idx} target="_blank" rel="noreferrer" href={newsSingular.link}
                                  className={classes.newsLink}>
                            <div className={ parseInt(Object.keys(news)[Object.keys(news).length - 1]) === idx ? classes.lastItem : classes.item}>
                                <div className={classes.itemTxtSec}>
                                    <div className={classes.newsTitle}>{newsSingular.title}</div>
                                    <div className={classes.newsUrl}>
                                        {/*{newsSingular.link}*/}
                                        {linkHandler(newsSingular)}
                                    </div>
                                </div>
                                <div>
                                    <img src="/icons/link-out.svg" alt="link-out" className={classes.linkOut}/>
                                </div>
                            </div>
                        </a>
                    })}
                </div>

            </Dialog>
        </>
    )
}