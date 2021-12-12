import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import classes from '../styles/ConnectWalletModal.module.scss'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";



export default function ConnectWalletModal({open, setOpen, handleClose,}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 550,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
        filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))',
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                       <div className={classes.modalMain}>
                           <div className={classes.connectWalletTitleSec}>
                               <div className={classes.connectWalletTitle}>
                                   Connect your wallet
                               </div>
                               <div onClick={handleClose} className={classes.vectorXSec}>
                                   <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                               </div>
                           </div>
                           <div className={classes.connectWalletDesc}>
                               For Sign up you only need to connect your <br/> MetaMask wallet
                           </div>
                           <div className={classes.metaMaskMainSec}>
                               <div className={classes.metaMaskLogoMain}>
                                   <div className={classes.metaMaskLogoSec}>
                                       <img className={classes.metaMaskLogo} src="/images/metaMask-logo.png" alt=""/>
                                   </div>
                                   <div className={classes.metaMaskTitle}>
                                       MetaMask
                                   </div>
                               </div>
                               <img className={classes.vectorRight} src="/icons/vector-right.png" alt=""/>
                           </div>
                           <div className={classes.moreInfoMainSec}>
                                <div className={classes.noAccSec}>
                                    Don’t have account?
                                </div>
                               <div className={classes.moreInfoSec}>
                                   More Info
                               </div>
                           </div>
                       </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
