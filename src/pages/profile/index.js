import classes from '../../styles/Profile/Profile.module.scss'
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import ProfileTabPanel from "../../components/Profile/ProfileTabPanel";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import copyText from '../../functions/copyText'
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
    const [userData, setUserData] = useState({})

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
                const signature = await signer.signMessage(process.env.NEXT_PUBLIC_SIGNATURE_PHRASE);
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
            setUserData(user)
        }

        checkConnection();
        //endregion

    }, [cookie])


    return (
        <>
            <EditProfileModal setUserData={setUserData} open={openModal} setOpen={setOpenModal}/>
            <div className={classes.profileMain}>
                <div className={classes.leftSec}>
                    {!matches ?
                        <>
                            <div className={classes.editProfileSec} onClick={() => setOpenModal(true)}>
                                Edit Profile
                            </div>
                            <div className={classes.profileImg} style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: `url(${userData.avatarUrl ? userData.avatarUrl : "/icons/profile-icon.svg"})`
                            }}/>
                            {/*<img className={classes.profileImg} src={userData.avatar ? userData.avatar : "/icons/profile-icon.svg"} alt=""/>*/}
                            <div className={classes.profileName}>
                                {userData.firstName ? userData.firstName + ' ' + userData.lastName : 'Unknown'}
                            </div>
                            <div className={classes.walletAddressSec}>
                                <div className={classes.walletAddress}>
                                    {address && address.slice(0, 4) + '...' + address.slice(-4)}
                                </div>
                                <img onClick={() => copyText(address)} className={classes.copyImg}
                                     src="/icons/copy-icon.svg" alt=""/>
                                <a target="_blank" href={`https://etherscan.io/address/${address}`} rel="noreferrer">
                                    <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                                </a>
                            </div>
                            <div className={classes.valueTxt}>
                                The value of your account
                            </div>
                            <div className={classes.valueSec}>
                                <div className={classes.valueNum}>
                                    {balance}
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
                                <div className={classes.profileImg} style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundImage: `url(${userData.avatarUrl ? userData.avatarUrl : "/icons/profile-icon.svg"})`
                                }}/>
                                <div className={classes.profileName}>
                                    {userData.firstName ? userData.firstName + ' ' + userData.lastName : 'Unknown'}
                                </div>
                            </div>
                            <div className={classes.detailSecMob}>
                                <div className={classes.walletAddressSec}>
                                    <div className={classes.walletAddress}>
                                        {address && address.slice(0, 4) + '...' + address.slice(-4)}
                                    </div>
                                    <img onClick={() => copyText(address)} className={classes.copyImg}
                                         src="/icons/copy-icon.svg" alt=""/>
                                    <a target="_blank" href={`https://etherscan.io/address/${address}`} rel="noreferrer">
                                        <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                                    </a>
                                </div>
                                <div className={classes.valueTxt}>
                                    The value of your account
                                </div>
                                <div className={classes.valueSec}>
                                    <div className={classes.valueNum}>
                                        {balance}
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

export async function getServerSideProps({req, res}) {
    let token = null;
    const cookies = parseCookies(req);
    if (cookies.token) {
        token = cookies.token;
    }


    if (!token) {
        res.setHeader("location", "/")
        res.statusCode = 302
        res.end()
    }

    return {
        props: {
            token
        }
    }
}