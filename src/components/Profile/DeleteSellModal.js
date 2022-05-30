import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import classes from "../../styles/ShowAsset/BuyModal.module.scss";
import {Button} from "@mui/material";
import * as React from "react";

export default function DeleteSellModal({open, setOpen}) {
    const handleClose = () => {
        setOpen(false)
    }
    const style = {
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // // width: 'unset',
        // width: 550,
        // maxWidth: 550,
        // // height: 477,
        // bgcolor: 'background.paper',
        // borderRadius: '5px',
        // boxShadow: 24,
        // p: 4,
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4
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
                    <Box className={classes.box} sx={style}>
                        <div className={classes.modalMainSec}>
                            <div className={classes.deleteModalHeader}>
                                <div className={classes.closeVector} onClick={handleClose}>
                                    <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                                </div>
                            </div>

                            <div className={classes.processModalBody}>
                                <div className={classes.imageSec2}>
                                    <div className={classes.processNote}>You just purchased Starry Night .
                                        It should confirmed on
                                        the blockchain shortly
                                    </div>
                                    <img src="/images/starryNight.png" alt="" className={classes.deletingAssetImg}/>
                                    <div className={classes.processNote}>Commission fee will deducted form your wallet
                                        if you cancel your sell
                                    </div>
                                </div>

                                <div className={classes.deleteRow}>
                                    <div className={classes.toWhere}>To Hamijoo</div>
                                    <div className={classes.deleteHr}></div>
                                    <div className={classes.assetPrice}>0.1 ETH</div>
                                </div>
                                <div className={classes.btnSec}>
                                    <Button variant='contained' className={classes.deleteBtn} onClick={()=> setOpen(false)}>
                                        <span style={{textTransform: 'capitalize'}}>D</span>elete Sell
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}
