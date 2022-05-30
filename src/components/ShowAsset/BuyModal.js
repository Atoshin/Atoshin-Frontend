import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import classes from "../../styles/ShowAsset/BuyModal.module.scss";
import * as React from "react";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";


export default function BuyModal({open, setOpen}) {
    const [isBuyProcessing, setIsBuyProcessing] = useState(false);
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
    useEffect(()=> {
        setIsBuyProcessing(false)
    }, [open])
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

                            {
                                !isBuyProcessing ?
                                    <>
                                        <div className={classes.modalHeader}>
                                            <div className={classes.closeVector} onClick={handleClose}>
                                                <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                                            </div>
                                        </div>

                                        <div className={classes.modalBody}>
                                            <div className={classes.assetTable}>
                                                <div className={classes.tableHeader}>
                                                    <div className={classes.assetTitle}>Asset</div>
                                                    <div className={classes.ownerTitle}>Owner</div>
                                                    <div className={classes.priceTitle}>Price</div>
                                                </div>

                                                <div className={classes.itemRow}>
                                                    <div className={classes.asset}>
                                                        <img src="/images/starryNight.png" alt=""/>
                                                        <div className={classes.assetName}>starry Night</div>
                                                    </div>
                                                    <div className={classes.owner}>0we6...245rb</div>
                                                    <div className={classes.price}>4.5 ETH</div>
                                                </div>

                                                <div className={classes.totalCostSec}>
                                                    <div className={classes.totalCost}>Total cost</div>
                                                    <div className={classes.hr}/>
                                                    <div className={classes.totalCostPrice}>4.5 ETH</div>
                                                </div>
                                                <div className={classes.btnSec}>
                                                    <Button variant='contained' className={classes.BuyBtn}
                                                            onClick={() => setIsBuyProcessing(true)}>
                                                        <span style={{textTransform: 'capitalize'}}> B</span>uy
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </> :
                                    <>
                                        <div className={classes.processModalHeader}>
                                            <div className={classes.loadingNote}>
                                                Your purchase is processing
                                            </div>
                                            <div className={classes.closeVector} onClick={handleClose}>
                                                <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                                            </div>
                                        </div>

                                        <div className={classes.processModalBody}>
                                            <div className={classes.imageSec}>
                                                <div className={classes.processNote}>You just purchased Starry Night .
                                                    It should confirmed on
                                                    the blockchain shortly
                                                </div>
                                                <img src="/images/starryNight.png" alt="" className={classes.assetImg}/>
                                            </div>

                                            <div className={classes.statusSec}>
                                                <div className={classes.titleSec}>
                                                    <div className={classes.statusTitle}>status</div>
                                                    <div className={classes.transactionTitle}>Transaction hash</div>
                                                </div>
                                                <div className={classes.row}>
                                                    <div className={classes.status}>Processing</div>
                                                    <div className={classes.transaction}>0we6...245rb</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}