import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from '../../styles/Profile/EditProfileModal/EditProfileModal.module.scss'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 822,
    height:477,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:'5px',
    boxShadow: 24,
    p: 4,
};

export default function EditProfileModal(props) {
    const {open, setOpen} = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={classes.modalMainSec}>
                        <div className={classes.closeVectorSec}>
                            <div className={classes.closeVector} onClick={handleClose}>
                                <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                            </div>
                        </div>
                        <div className={classes.modalMain}>
                            <div className={classes.leftSec}>
                                <img className={classes.editProfileImg} src="/icons/profile-icon.svg" alt=""/>
                                <div className={classes.changePhoto}>
                                    Change Photo
                                </div>
                            </div>
                            <div className={classes.rightSec}>
                                <div className={classes.inputTitle}>
                                    First name
                                </div>
                                <input className={classes.input} placeholder="Enter First name" type="text"/>
                                <div className={classes.inputTitle}>
                                    Last name
                                </div>
                                <input className={classes.input} placeholder="Enter Last name" type="text"/>
                                <div className={classes.inputTitle}>
                                    Enter Last name
                                </div>
                                <input className={classes.input} placeholder="Enter Email" type="text"/>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
