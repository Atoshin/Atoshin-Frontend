import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/ShowAsset.module.scss";


export default function OwnersModal(props) {
    const {open, setOpen} = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth={"md"} classes={{paper: classes.ownersDialog}}>
            <div className={classes.dialogHeader}>
                <DialogTitle className={classes.modalTitle}>Other Owners</DialogTitle>
                <div className={classes.vectorX} onClick={handleClose}>
                    <img src="/icons/vector-X.png" alt=""/>
                </div>
            </div>
        </Dialog>
    );
}
