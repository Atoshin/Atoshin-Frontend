import classes from "../../../styles/Header/Header.module.scss";
import Link from "next/link";
import {Button, useMediaQuery} from "@mui/material";
import Container from "@mui/material/Container";
import UserMenu from "../UserMenu";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {useState} from "react";
import {selectAddress} from "../../../redux/slices/accountSlice";
import {useTheme} from "@mui/material/styles";
import {useRouter} from "next/router";
import {setOpen} from '../../../redux/slices/connectWalletModalSlice'

export default function HeaderContent({setDrawerMenu}) {
    const dispatch = useAppDispatch()
    const address = useAppSelector(selectAddress)


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const router = useRouter()

    const handleOpen = () => dispatch(setOpen(true));


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
                                    {/*<img className={classes.AtoshinLogoMob}*/}
                                    {/*     src={"images/atoshin-logo-typography.svg"}*/}
                                    {/*     // src="images/atoshin-logo-typography.svg"*/}
                                    {/*     alt=""/>*/}
                                    <svg className={classes.AtoshinLogoMob} width="120" height="17" viewBox="0 0 120 17"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24.7543 0H18.0293V3.05481H24.7543V17H27.7768V3.05481H34.5018V0H27.7768H24.7543Z"
                                            fill="black"/>
                                        <path
                                            d="M49.8861 0H39.5115C37.834 0 36.4663 1.3823 36.4663 3.07772V13.9223C36.4663 15.6177 37.834 17 39.5115 17H49.8937C51.5711 17 52.9388 15.6177 52.9388 13.9223V3.07772C52.9313 1.3823 51.5711 0 49.8861 0ZM49.9088 13.9223C49.9088 13.9376 49.9012 13.9452 49.8861 13.9452H39.5115C39.4963 13.9452 39.4888 13.9376 39.4888 13.9223V3.07772C39.4888 3.06244 39.4963 3.05481 39.5115 3.05481H49.8937C49.9088 3.05481 49.9163 3.06244 49.9163 3.07772V13.9223H49.9088Z"
                                            fill="black"/>
                                        <path
                                            d="M55.8706 3.07772V10.0274H57.3818H58.8931H69.3206V13.9223C69.3206 13.9376 69.3131 13.9452 69.298 13.9452H55.8706V17H69.298C70.9754 17 72.3431 15.6177 72.3431 13.9223V6.9726H70.8319H69.3206H58.8931V3.07772C58.8931 3.06244 58.9006 3.05481 58.9158 3.05481H72.3431V0H58.9158C57.2383 0 55.8706 1.3823 55.8706 3.07772Z"
                                            fill="black"/>
                                        <path
                                            d="M88.7323 6.9726H78.3047V0H75.2822V6.9726V10.0274V17H78.3047V10.0274H88.7323V17H91.7548V10.0274V6.9726V0H88.7323V6.9726Z"
                                            fill="black"/>
                                        <path d="M98.125 0H95.1025V17H98.125V0Z" fill="black"/>
                                        <path
                                            d="M116.978 0V13.9452H115.746L107.986 0H101.963V17H104.986V3.05481H106.218L113.978 17H120V0H116.978Z"
                                            fill="black"/>
                                        <path d="M0 17H3.46829L11.2285 3.05481H12.4602V17H15.4826V0H9.46036L0 17Z"
                                              fill="black"/>
                                    </svg>
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
                                    <img className={classes.AtoshinLogo} src="/images/atoshin-logo-typography.svg"
                                         alt=""/>
                                </a>
                            </Link>
                        </div>
                        <ul className={classes.menuContainer}>
                            <Link href={'/marketplace'}>
                                <a>
                                    <ActiveLink title={' Marketplace '} href={"/marketplace"}/>
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
                                    <ActiveLink title={'What is Fractionalized NFT ?'} href={"/about-nft"}/>
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
    </>
}