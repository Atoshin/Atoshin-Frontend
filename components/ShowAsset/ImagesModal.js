import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";


export default function ImagesModal(props) {
    const {open, setOpen} = props;
    const images = [
        "/images/starry-night-main.png",
        "/images/starry-night-main.png",
        "/images/starry-night-main.png",
        "/images/starry-night-main.png",
        "/images/starry-night-main.png",
        "/images/starry-night-main.png",
    ]
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"xl"} classes={{paper: classes.imgDialog}}>
            <div className={classes.dialogHeader}>
                <DialogTitle className={classes.modalTitle}>Starry Night Photos</DialogTitle>
                <div className={classes.vectorX} onClick={handleClose}>
                    <img src="/icons/vector-X.png" alt=""/>
                </div>
            </div>
            <div className={classes.main}>
                <img className={classes.modalMainImg} src="/images/starry-night-main.png" alt=""/>
                <div className={classes.dialogBody}>
                    <div className={classes.otherImgesContainer}>
                        {images.map((image, idx) => {
                            return <div style={{
                                backgroundImage: `url(${image})`,
                                width: 120,
                                height: 120,
                                backgroundPosition: 'center',
                                // background-position: center;
                                // background-size: 120px, 120px;
                                marginBottom: 24,
                                marginLeft: 24,
                            }}/>

                        })}
                        {/*<img src="/images/starry-night-second.png" className={classes.sideImage}/>*/}
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
