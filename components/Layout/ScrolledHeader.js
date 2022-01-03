import {Button, useMediaQuery} from "@mui/material";
import Container from '@mui/material/Container';
import {useTheme} from '@mui/material/styles';
import classes from '../../styles/Header/Header.module.scss';
import ConnectWalletModal from '/components/Layout/ConnectWalletModal.js';
import {useEffect, useState} from 'react';
import Menu from '@mui/material/Menu';
import {useDispatch, useSelector} from "react-redux";
import Web3 from 'web3'
import {setAddress} from "../../redux/slices/accountSlice";
import UserMenu from "./UserMenu";

export default function ScrolledHeader({setDrawerMenu}) {

    const dispatch = useDispatch()
    const address = useSelector(state => state.account.address)

    useEffect(() => {
        const checkConnection = async () => {
            let web3;
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                web3.eth.getAccounts()
                    .then(async (addr) => {
                        dispatch(setAddress(addr[0]))
                    });
                providerEventListener()
            } else if (window.web3) {
                web3 = new Web3(window.web3.currentProvider);
                web3.eth.getAccounts()
                    .then(async (addr) => {
                        dispatch(setAddress(addr[0]))
                    });
                providerEventListener()
            }
        };

        const providerEventListener = () => {
            window.ethereum.on('accountsChanged', function (accounts) {
                if (accounts.length > 0) {
                    dispatch(setAddress(accounts[0]))
                } else {
                    dispatch(setAddress(''))
                }
            })

        }
        checkConnection();
    }, [])

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    const [openModal, setOpenModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return <>
        <div className={classes.mainHeader}>
            {matches ?
                <>
                    <div className={classes.headerMainMob}>
                        <div className={classes.logoWithHam}>
                            <img className={classes.hamburger} src="/icons/hamburger.png" alt=""
                                 onClick={() => setDrawerMenu(true)}/>
                            <div className={classes.hamburgerAndlogo}>
                                <div className={classes.logoMob}>
                                    <img className={classes.AtoshinLogoMob} src="/images/atoshin-logo-typography.svg"
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                        {address ?
                            <div className={classes.avatarIconSec} onClick={handleClick}>
                                <img className={classes.avatarIconMob} src="/icons/avatar-icon.png" alt=""/>
                            </div>
                            :
                            <Button className={classes.registerBtnMob} onClick={handleOpen}>Wallet</Button>
                        }
                    </div>
                </>
                :
                <>
                    <Container>
                        <div className={classes.mainHeaderDesktop}>
                            <div className={classes.logoContainer}>
                                <img className={classes.AtoshinLogo} src="/images/Atoshin-logo.png" alt=""/>
                            </div>
                            <ul className={classes.menuContainer}>
                                <li className={classes.marketplaceItem}>Marketplace</li>
                                <li>fuck u</li>
                                <li>Artists</li>
                                <li>About NFT</li>
                                {address ?
                                    <div className={classes.avatarIconSec} onClick={handleClick}>
                                        <img className={classes.avatarIcon} src="/icons/avatar-icon.png" alt=""/>
                                    </div>
                                    :
                                    <Button onClick={handleOpen} className={classes.registerBtn} disableElevation
                                            variant={"contained"}>
                                        Connect Wallet
                                    </Button>
                                }
                            </ul>
                        </div>
                    </Container>
                </>
            }
            <UserMenu anchorEl={anchorEl} handleClose={handleClose}/>
            <ConnectWalletModal setIsLoggedIn={setIsLoggedIn} open={openModal} setOpen={setOpenModal}
                                handleClose={handleCloseModal}/>
        </div>
    </>
}