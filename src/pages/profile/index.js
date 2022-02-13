import classes from '../../styles/Profile/Profile.module.scss'
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useEffect, useRef} from "react";
import ProfileTabPanel from "../../components/Profile/ProfileTabPanel";
import axios from "axios";
import Web3 from "web3";
import {selectAddress, selectBalance, setAddress, setBalance} from "../../redux/slices/accountSlice";
import {ethers} from "ethers";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";


export default function Profile() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useAppDispatch();
    const address = useAppSelector(selectAddress)
    const balance = useAppSelector(selectBalance)

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = '#E5E5E5';
        body.style.backgroundImage = 'none';
        //endregion

        //region fetch profile data
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
                    setCookie('token', accounts[0], {
                        path: "/",
                        sameSite: true,
                        maxAge: 365 * 24 * 60 * 60
                    })
                } else {
                    dispatch(setAddress(''))
                }
            })

        }
        checkConnection();
        //endregion
    }, [])


    return (
        <div className={classes.profileMain}>
            <div className={classes.leftSec}>
                {!matches ?
                    <>
                        <div className={classes.editProfileSec}>
                            Edit Profile
                        </div>
                        <img className={classes.profileImg} src="/icons/profile-icon.svg" alt=""/>
                        <div className={classes.profileName}>
                            Unknown
                        </div>
                        <div className={classes.walletAddressSec}>
                            <div className={classes.walletAddress}>
                                0we6...245rb
                            </div>
                            <img className={classes.copyImg} src="/icons/copy-icon.svg" alt=""/>
                            <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                        </div>
                        <div className={classes.valueTxt}>
                            The value of your account
                        </div>
                        <div className={classes.valueSec}>
                            <div className={classes.valueNum}>
                                8.664
                            </div>
                            <div className={classes.ethTxt}>
                                ETH
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {/*<div className={classes.editProfileSec}>*/}
                        {/*    Edit Profile*/}
                        {/*</div>*/}
                        <div className={classes.profileImgSecMob}>
                            <img className={classes.profileImg} src="/icons/profile-icon.svg" alt=""/>
                            <div className={classes.profileName}>
                                Unknown
                            </div>
                        </div>
                        <div className={classes.detailSecMob}>
                            <div className={classes.walletAddressSec}>
                                <div className={classes.walletAddress}>
                                    0we6...245rb
                                </div>
                                <img className={classes.copyImg} src="/icons/copy-icon.svg" alt=""/>
                                <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                            </div>
                            <div className={classes.valueTxt}>
                                The value of your account
                            </div>
                            <div className={classes.valueSec}>
                                <div className={classes.valueNum}>
                                    8.664
                                </div>
                                <div className={classes.ethTxt}>
                                    ETH
                                </div>
                            </div>
                        </div>
                    </>
                }

            </div>
            <div className={classes.rightSec}>
                <ProfileTabPanel/>
            </div>
        </div>
    )
}