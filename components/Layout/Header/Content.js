import classes from "../../../styles/Header/Header.module.scss";
import Link from "next/link";
import {Button, useMediaQuery} from "@mui/material";
import Container from "@mui/material/Container";
import UserMenu from "../UserMenu";
import ConnectWalletModal from "../ConnectWalletModal";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Web3 from "web3";
import {setAddress, setBalance} from "../../../redux/slices/accountSlice";
import {ethers} from "ethers";
import {useTheme} from "@mui/material/styles";
import {useRouter} from "next/router";

export default function HeaderContent({setDrawerMenu}) {
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
                        if (addr[0]) {
                            web3.eth.getBalance(addr[0]).then(r => {
                                dispatch(setBalance(ethers.utils.formatEther(r)))
                            });
                        }
                    });
                providerEventListener()
            } else if (window.web3) {
                web3 = new Web3(window.web3.currentProvider);
                web3.eth.getAccounts()
                    .then(async (addr) => {
                        dispatch(setAddress(addr[0]))
                        if (addr[0]) {
                            web3.eth.getBalance(addr[0]).then(r => {
                                dispatch(setBalance(ethers.utils.formatEther(r)))
                            });
                        }
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
    const router = useRouter()

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

    const ActiveLink = ({title, href}) => {
        console.log(href, router.pathname)
        if (href === router.pathname) {
            return <li className={classes.marketplaceItemActive}>{title}</li>
        }else{
            return <li className={classes.marketplaceItem}>{title}</li>
        }
    }

    return <>
        {matches ?
            <>
                <div className={classes.headerMainMob}>
                    <div className={classes.logoWithHam}>
                        <img className={classes.hamburger} src="/icons/hamburger.png" alt=""
                             onClick={() => setDrawerMenu(true)}/>
                        <div className={classes.hamburgerAndlogo}>
                            <div className={classes.logoMob}>
                                <Link href="/">
                                    <img className={classes.AtoshinLogoMob}
                                         src="/images/atoshin-logo-typography.svg"
                                         alt=""/>
                                </Link>
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
                            <Link href="/">
                                <img className={classes.AtoshinLogo} src="/images/Atoshin-logo.png" alt=""/>
                            </Link>
                        </div>
                        <ul className={classes.menuContainer}>
                            <Link href={"/marketplace"}>
                                <ActiveLink title={'Marketplace'} href={"/marketplace"}/>
                            </Link>
                            <li>Art Centers</li>
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
        <UserMenu handleClose={handleClose} anchorEl={anchorEl}/>
        <ConnectWalletModal setIsLoggedIn={setIsLoggedIn} open={openModal} setOpen={setOpenModal}
                            handleClose={handleCloseModal}/>
    </>
}