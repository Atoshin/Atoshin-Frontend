import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";


export default function ImagesModal(props) {
    const {open, setOpen} = props;

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
            <div className={classes.dialogBody}>
                <img className={classes.modalMainImg} src="/images/starry-night-main.png" alt=""/>
                <div className={classes.otherImgesContainer}>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                    <img src="/images/starry-night-second.png" className={classes.sideImage}/>
                </div>
            </div>
        </Dialog>
    );
}
