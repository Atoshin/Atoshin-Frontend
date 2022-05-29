import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import classes from "../../styles/Profile/SellModal/SellModal.module.scss";
import {CircularProgress, TextField} from "@mui/material";
import * as React from "react";
import SellModalTabPanel from './SellModalTabPanel'

export default function SellModal({open, setOpen}) {
    const handleClose = () => {
        setOpen(false)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'unset',
        maxWidth: 681,
        // height: 477,
        bgcolor: 'background.paper',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className={classes.box}>
                        <div className={classes.modalMainSec}>
                            {/*<div className={classes.modalMain}>*/}

                                <SellModalTabPanel setOpen={setOpen}/>
                                {/*<div className={classes.closeVector} onClick={handleClose}>*/}
                                {/*    <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}