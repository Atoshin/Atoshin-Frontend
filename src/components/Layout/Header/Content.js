import classes from "../../../styles/Header/Header.module.scss";
import Link from "next/link";
import {Button, useMediaQuery} from "@mui/material";
import Container from "@mui/material/Container";
import UserMenu from "../UserMenu";
import ConnectWalletModal from "../ConnectWalletModal";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {useEffect, useState} from "react";
import Web3 from "web3";
import {selectAddress, setAddress, setBalance} from "../../../redux/slices/accountSlice";
import {ethers} from "ethers";
import {useTheme} from "@mui/material/styles";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";
import {setOpen} from '../../../redux/slices/connectWalletModalSlice'

export default function HeaderContent({setDrawerMenu}) {
    const dispatch = useAppDispatch()
    const address = useAppSelector(selectAddress)

    const [_, __, removeCookie] = useCookies()
    useEffect(() => {
        const getAccountAndBalance = (web3) => {
            web3.eth.getAccounts()
                .then(async (addr) => {
                    if (addr[0]) {
                        dispatch(setAddress(addr[0]));
                        web3.eth.getBalance(addr[0]).then(r => {
                            dispatch(setBalance(ethers.utils.formatEther(r)))
                        });
                    } else {
                        removeCookie(['token'])
                    }
                });
        }

        const checkConnection = async () => {
            let web3;
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                getAccountAndBalance(web3)
                providerEventListener()
            } else if (window.web3) {
                web3 = new Web3(window.web3.currentProvider);
                getAccountAndBalance(web3)
                providerEventListener()
            }
        };

        const providerEventListener = () => {
            window.ethereum.on('accountsChanged', function (accounts) {
                if (accounts.length > 0) {
                    dispatch(setAddress(accounts[0]))
                } else {
                    removeCookie(['token'])
                    dispatch(setAddress(''))
                }
            })

        }
        checkConnection();
    }, [])

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter()

    const handleOpen = () => dispatch(setOpen(true));
    const handleCloseModal = () => dispatch(setOpen(false));


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const ActiveLink = ({title, href}) => {
        if (title === "Marketplace") {
            if (href === router.pathname) {
                return <li onClick={() => router.push('/marketplace')}
                           className={classes.marketplaceItemActive}>{title}</li>
            } else {
                return <li onClick={() => router.push('/marketplace')} className={classes.marketplaceItem}>{title}</li>
            }
        } else {
            if (href === router.pathname) {
                return <li onClick={() => router.push(href)}
                           className={classes.itemActive}>{title}</li>
            } else {
                return <li onClick={() => router.push(href)}>{title}</li>
            }
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
                                <a>
                                    <img className={classes.AtoshinLogo} src="/images/Atoshin-logo-typography.svg" alt=""/>
                                </a>
                            </Link>
                        </div>
                        <ul className={classes.menuContainer}>
                            <Link href={'/marketplace'}>
                                <a>
                                    <ActiveLink title={'Marketplace'} href={"/marketplace"}/>
                                </a>
                            </Link>
                            <Link href={"/gallery-list"}>
                                <a>
                                    <ActiveLink title={'Museums and Galleries'} href={"/gallery-list"}/>
                                </a>
                            </Link>
                            <Link href={"/artists"}>
                                <a>
                                    <ActiveLink title={'Artists'} href={"/artists"}/>
                                </a>
                            </Link>

                            {/*<ActiveLink title={'Marketplace'} href={"/marketplace"}/>*/}
                            {/*<ActiveLink title={'Art Centers'} href={"/gallery-list"}/>*/}
                            {/*<ActiveLink title={'Artists'} href={"/artists"}/>*/}
                            {/*<li>About NFT</li>*/}
                            <Link href={"/about-nft"}>
                                <a>
                                    <ActiveLink title={'About NFT'} href={"/about-nft"}/>
                                </a>
                            </Link>
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
        <ConnectWalletModal handleClose={handleCloseModal}/>
    </>
}