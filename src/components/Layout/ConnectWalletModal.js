import {useMediaQuery} from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import {useTheme} from "@mui/material/styles";
import {ethers} from "ethers";
import classes from '../../styles/ConnectWalletModal/ConnectWalletModal.module.scss';
import axios from 'axios';
import {useCookies} from "react-cookie";
import {parseCookies} from "../../functions/parseCookies";

export default function ConnectWalletModal({open, setOpen, handleClose}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [cookie, setCookie] = useCookies(['token'])


    const signMessage = async (signer) => {
        const walletAddress = await signer.getAddress();
        try {
            const signature = await signer.signMessage("This website uses this cryptographic signature in place of a password, verifying that you are the owner of this Ethereum address.");
            await axios.post(`/api/signature`, {
                signature,
                walletAddress
            })
            setOpen(false);
            setCookie('token', signature, {
                path: "/",
                sameSite: true,
                maxAge: 365 * 24 * 60 * 60
            })
        } catch (error) {
            console.log(error)
        }
    }

    const connectWallet = async (e) => {
        e.preventDefault();
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const walletAddress = await signer.getAddress();
            if (walletAddress) {
                axios.post(`/api/wallet`, {
                    walletAddress
                }).then(r => {
                    signMessage(signer)
                }).catch(e => {
                    if (typeof e.response !== 'undefined') {
                        if (!e.response.data.data) {
                            signMessage(signer)
                        }
                    }
                });
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
            padding: '24px 24px 16px 24px',
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
                                    <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                                </div>
                            </div>
                            {
                                matches ?
                                    <div className={classes.connectWalletDesc}>
                                        For Sign up you only need to connect your MetaMask <br/> wallet
                                    </div> :
                                    <div className={classes.connectWalletDesc}>
                                        For Sign up you only need to connect your MetaMask wallet
                                    </div>
                            }

                            <div onClick={connectWallet} className={classes.metaMaskMainSec}>
                                <div className={classes.metaMaskLogoMain}>
                                    <div className={classes.metaMaskLogoSec}>
                                        <img className={classes.metaMaskLogo} src="/images/metaMask-logo.png" alt=""/>
                                    </div>
                                    <div className={classes.metaMaskTitle}>
                                        MetaMask
                                    </div>
                                </div>
                                <img className={classes.vectorRight} src="/icons/vector-right.svg" alt=""/>
                            </div>
                            <div className={classes.moreInfoMainSec}>
                                <div className={classes.noAccSec}>
                                    Don’t have account?
                                </div>
                                {/*<div className={classes.moreInfoSec}>*/}
                                {/*    More Info*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className={classes.bottomMainSec} >
                            <div className={classes.downloadMainSec}>
                                <div className={classes.downloadIconSec}>
                                    <img className={classes.downloadIcon} src="/icons/download-icon.svg" alt=""/>
                                </div>
                                <div className={classes.downloadTxt}>
                                    Download extention
                                </div>
                            </div>
                            <div>
                                <img className={classes.vectorRight2} src="/icons/vector-right.svg" alt=""/>
                            </div>
                            <div className={classes.createWalletSec} >
                                <div className={classes.walletIconSec}>
                                    <img className={classes.walletIcon} src="/icons/wallet-icon.svg" alt=""/>
                                </div>
                                <div className={classes.creatWalletTxt}>
                                    Creat wallet
                                </div>
                            </div>
                            <div>
                                <img className={classes.vectorRight2} src="/icons/vector-right.svg" alt=""/>
                            </div>
                            <div className={classes.refreshSec}>
                                <div className={classes.refreshIconSec}>
                                    <img className={classes.refreshIcon} src="/icons/refresh-icon.svg" alt=""/>
                                </div>
                                <div className={classes.refreshTxt}>
                                    Creat wallet
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
