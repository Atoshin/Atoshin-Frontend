import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from '../../styles/Profile/EditProfileModal/EditProfileModal.module.scss'
import {useRef, useState} from "react";
import axios from "axios";
import {useAppSelector} from "../../redux/hooks";
import {selectAddress} from "../../redux/slices/accountSlice";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 822,
    height: 477,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

export default function EditProfileModal(props) {
    const {open, setOpen} = props;
    const [inputs, setInputs] = useState({});
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const address = useAppSelector(selectAddress);
    const ref = useRef(null);
    const handleClose = () => {
        setOpen(false)
    }

    const chooseImage = (e) => {
        e.preventDefault();
        ref.current.click()
    }

    const submitForm = async (e) => {
        setLoadingSubmit(true);
        await axios.post(`/api/profile/${address}`, inputs);
        setLoadingSubmit(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={classes.modalMainSec}>
                        <div className={classes.closeVectorSec}>
                            <div className={classes.closeVector} style={{marginLeft: 5}} onClick={submitForm}>
                                <img className={classes.vectorCheck} src="/icons/check.svg" alt=""/>
                            </div>
                            <div className={classes.closeVector} onClick={handleClose}>
                                <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                            </div>
                        </div>
                        <div className={classes.modalMain}>
                            <div className={classes.leftSec}>
                                <div className={classes.editProfileImg} style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundImage: `url(${inputs.profile ? (URL.createObjectURL(inputs.profile)) : "/icons/profile-icon.svg"})`
                                }}/>
                                <div onClick={chooseImage} className={classes.changePhoto}>
                                    Change Photo
                                </div>
                                <input type="file" hidden ref={ref}
                                       onChange={e => setInputs({...inputs, profile: e.target.files[0]})}/>
                            </div>
                            <div className={classes.rightSec}>
                                <div className={classes.inputTitle}>
                                    First name
                                </div>
                                <input value={inputs.firstName}
                                       onChange={e => setInputs({...inputs, firstName: e.target.value})}
                                       className={classes.input} placeholder="Enter First name" type="text"/>
                                <div className={classes.inputTitle}>
                                    Last name
                                </div>
                                <input value={inputs.lastName}
                                       onChange={e => setInputs({...inputs, lastName: e.target.value})}
                                       className={classes.input} placeholder="Enter Last name" type="text"/>
                                <div className={classes.inputTitle}>
                                    Email
                                </div>
                                <input value={inputs.email}
                                       onChange={e => setInputs({...inputs, email: e.target.value})}
                                       className={classes.input} placeholder="Enter Email" type="text"/>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
