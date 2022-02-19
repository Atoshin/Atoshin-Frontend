import classes from '../../styles/Profile/Profile.module.scss'
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import ProfileTabPanel from "../../components/Profile/ProfileTabPanel";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import * as React from "react";
import HistoryModal from "../../components/ShowAsset/HistoryModal";
import axios from "axios";
import Web3 from "web3";
import {selectAddress, selectBalance, setAddress, setBalance} from "../../redux/slices/accountSlice";
import {ethers} from "ethers";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {parseCookies} from "../../functions/parseCookies";
import {useCookies} from "react-cookie";


export default function Profile({token}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useAppDispatch();
    const address = useAppSelector(selectAddress)
    const balance = useAppSelector(selectBalance)
    const [cookie, setCookie, removeCookie] = useCookies(['token'])

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#e5e5e5';
        style.backgroundImage = 'none';
        //endregion
    }, [])

    useEffect(() => {
                //region fetch profile data
        const signMessage = async () => {
            await window.ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner();
            try {
                const signature = await signer.signMessage("This website uses this cryptographic signature in place of a password, verifying that you are the owner of this Ethereum address.");
                setCookie('token', signature, {
                    path: "/",
                    sameSite: true,
                    maxAge: 365 * 24 * 60 * 60
                })
                return signature
            } catch (error) {
                console.log(error)
            }
        }


        const getAccountAndBalance = (web3) => {
            web3.eth.getAccounts()
                .then(async (addr) => {
                    dispatch(setAddress(addr[0]))
                    fetchAccountData(addr[0])
                    if (addr[0]) {
                        web3.eth.getBalance(addr[0]).then(r => {
                            dispatch(setBalance(ethers.utils.formatEther(r)))
                        });
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
                    fetchAccountData(accounts[0])
                    dispatch(setAddress(accounts[0]))
                } else {
                    dispatch(setAddress(''))
                }
            })
        }

        const fetchAccountData = async (address) => {
            if (!token) {
                try {
                    await signMessage();
                } catch (e) {
                    console.error(e);
                }
            }
            const {data: {user}} =
                await axios.get(`/api/profile/${address}`)
        }

        checkConnection();
        //endregion

    }, [cookie])


    return (
        <>
            <EditProfileModal open={openModal} setOpen={setOpenModal}/>
            <div className={classes.profileMain}>
                <div className={classes.leftSec}>
                    {!matches ?
                        <>
                            <div className={classes.editProfileSec} onClick={() => setOpenModal(true)}>
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
                            {/*</div>*/}a
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
        </>
    )
}

export async function getServerSideProps({req}) {
    let token = null;
    const cookies = parseCookies(req);
    if (cookies.token) {
        token = cookies.token;
    }

    if (!token){
        return {
            notFound: true
        }
    }

    return {
        props: {
            token
        }
    }
}