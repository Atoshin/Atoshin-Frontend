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
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"md"} classes={{paper: classes.dialog}}>
            <div>
                <DialogTitle className={classes.modalTitle}>Starry Night Photos</DialogTitle>
                <img className={classes.modalMainImg} src="/images/starry-night-main.png" alt=""/>
            </div>
            <div className={classes.otherImgesContainer}>
                <div style={{backgroundImage: 'url("/images/starry-night-second.png")'}} className={classes.sideImage}/>
            </div>
        </Dialog>
    );
}
