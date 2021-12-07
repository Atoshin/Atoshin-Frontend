import classes from '../styles/Header.module.scss'
import {Button, useMediaQuery} from "@mui/material";
import {ethers} from "ethers"
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

export default function Header() {

    const connectWallet = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const style = {
        position: 'absolute',
        outline: 0,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 550,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <>
        <div className={classes.mainHeader}>
            {matches ?
                <>
                    <div className={classes.headerMainMob}>
                        <Button className={classes.registerBtnMob} onClick={handleOpen} >Connect Wallet</Button>
                        <div className={classes.hamburgerAndlogo}>
                            <div className={classes.logoMob}>

                            </div>
                            <img className={classes.hamburger} src="/icons/hamburger.png" alt=""/>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className={classes.logoContainer}>LOGO</div>
                    <ul className={classes.menuContainer}>
                        <li className={classes.marketplaceItem}>Marketplace</li>
                        <li>Art Centers</li>
                        <li>Artists</li>
                        <li>About NFT</li>
                        <Button onClick={handleOpen} className={classes.registerBtn} disableElevation
                                variant={"contained"}>
                            Connect Wallet
                        </Button>
                    </ul>
                </>
            }
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
                     <div className={classes.modalMainSec}>
                        <div style={{fontSize:20}} className={classes.connectWalletTitle}>
                            Connect your wallet
                        </div>
                     </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    </>
}