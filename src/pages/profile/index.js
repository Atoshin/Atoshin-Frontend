import classes from '../../styles/Profile/Profile.module.scss'
import 'react-slideshow-image/dist/styles.css';
import * as React from "react";
import {useEffect, useState} from "react";
import ProfileTabPanel from "../../components/Profile/ProfileTabPanel";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import copyText from '../../functions/copyText'
import axios from "axios";
import {selectAddress, selectBalance, selectCurrency, setAddress, setBalance} from "../../redux/slices/accountSlice";
import {ethers} from "ethers";
import {useAppSelector} from "../../redux/hooks";
import {useCookies} from "react-cookie";
import Head from "next/head";
import CryptoJS from "crypto-js";
import calculateDecimalPrecision from "../../functions/calculateDecimalPrecision";
import {parseCookies} from "../../functions/parseCookies";


export default function Profile({token}) {
    const [openModal, setOpenModal] = useState(false);
    const address = useAppSelector(selectAddress)
    const currency = useAppSelector(selectCurrency)
    const balance = useAppSelector(selectBalance)
    const [cookie, setCookie, removeCookie] = useCookies(['token'])
    const [userData, setUserData] = useState({
        assets: [],
        transactions: []
    })
    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#f3f5f8';
        style.backgroundImage = 'none';
        //endregion

    }, [])

    const loadMyNFTs = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const {data: encData} = await axios.get('/api/contracts/abi-info');
        const decrypted = await CryptoJS.AES.decrypt(encData, process.env.NEXT_PUBLIC_CRYPT_KEY)
        const {
            Market: {address: nftMarketAddress, abi: marketAbi},
            NFT: {address: nftAddress, abi: nftAbi},
        } = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        const contract = new ethers.Contract(nftMarketAddress, marketAbi, signer)
        const nftContract = new ethers.Contract(nftAddress, nftAbi, signer)
        const data = await contract.fetchMyNFTs()
        const items = await Promise.all(data.map(async i => {
            const tokenUri = await nftContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            return {
                price,
                name: meta.data.name,
                tokenId: i.tokenId.toNumber(),
                seller: i.creator,
                owner: i.owner,
                image: meta.data.image,
                assetImage: meta.data.assetImage
            }
        }))
        setArtworks(items)
    }

    useEffect(() => {

        loadMyNFTs();

    }, [cookie])

    const userNameTxt = () => {
        if (userData.firstName && userData.lastName) {
            return userData.firstName + ' ' + userData.lastName
        } else if (userData.firstName && !userData.lastName) {
            return userData.firstName
        } else if (!userData.firstName && userData.lastName) {
            return userData.lastName
        } else if (!userData.firstName && !userData.lastName) {
            return 'Unknown'
        }
    }

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <EditProfileModal setUserData={setUserData} userData={userData} open={openModal} setOpen={setOpenModal}/>
            <div className={classes.profileMain}>
                <div className={classes.leftSec}>
                    <>
                        <div className={classes.desktopDiv}>
                            <div className={classes.editProfileSec} onClick={() => setOpenModal(true)}>
                                Edit Profile
                            </div>
                            <div className={classes.profileImg} style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: `url(${userData.media ? userData.media.url : "/icons/profile-icon.svg"})`
                            }}/>
                            <div className={classes.profileName}>
                                {userNameTxt()}
                            </div>
                            <div className={classes.walletAddressSec}>
                                <div className={classes.walletAddress}>
                                    {address && address.slice(0, 4) + '...' + address.slice(-4)}
                                </div>
                                <img onClick={() => copyText(address)} className={classes.copyImg}
                                     src="/icons/copy-icon.svg" alt=""/>
                                <a target="_blank" href={`https://etherscan.io/address/${address}`} rel="noreferrer"
                                   className={classes.link}>
                                    <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                                </a>
                            </div>
                            <div className={classes.valueTxt}>
                                The value of your account
                            </div>
                            <div className={classes.valueSec}>
                                <div className={classes.valueNum}>
                                    {calculateDecimalPrecision(balance, 5)}
                                </div>
                                <div className={classes.ethTxt}>
                                    {currency}
                                </div>
                            </div>
                        </div>

                    </>
                    <>
                        <div className={classes.profileImgSecMob}>
                            <div className={classes.profileImg} style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: `url(${!(userData.avatarUrl === process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL) ? userData.avatarUrl : "/icons/profile-icon.svg"})`
                            }}/>
                            <div className={classes.profileName}>
                                {/*{userData.firstName ? userData.firstName + ' ' + userData.lastName : 'Unknown'}*/}
                                {userNameTxt()}
                            </div>
                        </div>
                        <div className={classes.detailSecMob}>
                            <div className={classes.editProfileSecMob} onClick={() => setOpenModal(true)}>
                                <span> Edit Profile</span>
                            </div>
                            <div className={classes.detailMob}>
                                <div className={classes.walletAddressSec}>
                                    <div className={classes.walletAddress}>
                                        {address && address.slice(0, 4) + '...' + address.slice(-4)}
                                    </div>
                                    <img onClick={() => copyText(address)} className={classes.copyImg}
                                         src="/icons/copy-icon.svg" alt=""/>
                                    <a target="_blank" href={`https://etherscan.io/address/${address}`}
                                       rel="noreferrer">
                                        <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                                    </a>
                                </div>
                                <div className={classes.valueTxt}>
                                    Wallet Balance
                                </div>
                                <div className={classes.valueSec}>
                                    <div className={classes.valueNum}>
                                        {calculateDecimalPrecision(balance, 5)}
                                    </div>
                                    <div className={classes.ethTxt}>
                                        ETH
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                </div>
                <div className={classes.rightSec}>
                    <ProfileTabPanel artworks={artworks}
                                     history={{txns: userData.transactions, assets: userData.assets}}/>
                </div>
            </div>
        </>
    )
}


export async function getServerSideProps({req, res}) {
    const data = parseCookies(req)

    try {
        const {data: {user}} =
            await axios.get(`${process.env.BASE_URL}/api/profile/${data.address}`)


        return {
            props: {
                user
            },
        }
    } catch (e) {
        console.log(e)
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.setHeader("set-cookie", `intended=/profile; path=/; samesite=true;`)
            res.writeHead(301, {Location: "/sign-message"})
            res.end()
        }
        return {
            props: {}
        }
    }
}



