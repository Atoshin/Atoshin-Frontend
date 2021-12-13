import { useMediaQuery } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { useTheme } from "@mui/material/styles";
import { ethers } from "ethers";
import classes from '../styles/ConnectWalletModal.module.scss';
import Web3Modal from 'web3modal'
import api from '../api'

export default function ConnectWalletModal({ open, setOpen, handleClose, }) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const connectWallet = async (e) => {
        e.preventDefault();
        if (window.ethereum) {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            if (address) {
                const response = await api.post('wallets/store', {
                    walletAddress: address
                });
                setOpen(false);
            }
        } else {
            window.open('https://metamask.io/download', '_blank')
        }
    }

    const style = matches ? {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 328,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: '5px',
        boxShadow: 24,
        padding: '24px 24px 0px 24px',
        filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))',
    }
        :
        {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            bgcolor: 'background.paper',
            // border: '2px solid #000',
            borderRadius: '5px',
            boxShadow: 24,
            padding: '32px',
            filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))',
        }

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
                                    <img className={classes.vectorX} src="/icons/vector-X.png" alt="" />
                                </div>
                            </div>
                            <div className={classes.connectWalletDesc}>
                                For Sign up you only need to connect your <br /> MetaMask wallet
                            </div>
                            <div onClick={connectWallet} className={classes.metaMaskMainSec}>
                                <div className={classes.metaMaskLogoMain}>
                                    <div className={classes.metaMaskLogoSec}>
                                        <img className={classes.metaMaskLogo} src="/images/metaMask-logo.png" alt="" />
                                    </div>
                                    <div className={classes.metaMaskTitle}>
                                        MetaMask
                                    </div>
                                </div>
                                <img className={classes.vectorRight} src="/icons/vector-right.png" alt="" />
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
