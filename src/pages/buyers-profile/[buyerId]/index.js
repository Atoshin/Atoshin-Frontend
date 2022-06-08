import * as React from "react";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../../redux/hooks";
import {selectAddress, selectBalance, selectCurrency} from "../../../redux/slices/accountSlice";
import {useCookies} from "react-cookie";
import {ethers} from "ethers";
import axios from "axios";
import CryptoJS from "crypto-js";
import Head from "next/head";
import classes from "../../../styles/BuyerProfile/BuyerProfile.module.scss";
import copyText from "../../../functions/copyText";
import calculateDecimalPrecision from "../../../functions/calculateDecimalPrecision";
import BuyerTabPanel from './../../../components/BuyerProfile/BuyerTabPanel'
export default function BuyerProfile() {
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

    // const loadMyNFTs = async () => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    //     await provider.send("eth_requestAccounts", []);
    //     const signer = provider.getSigner();
    //     const {data: encData} = await axios.get('/api/contracts/abi-info');
    //     const decrypted = await CryptoJS.AES.decrypt(encData, process.env.NEXT_PUBLIC_CRYPT_KEY)
    //     const {
    //         Market: {address: nftMarketAddress, abi: marketAbi},
    //         NFT: {address: nftAddress, abi: nftAbi},
    //     } = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    //     const contract = new ethers.Contract(nftMarketAddress, marketAbi, signer)
    //     const nftContract = new ethers.Contract(nftAddress, nftAbi, signer)
    //     const data = await contract.fetchMyNFTs()
    //     const items = await Promise.all(data.map(async i => {
    //         const tokenUri = await nftContract.tokenURI(i.tokenId)
    //         const meta = await axios.get(tokenUri)
    //         let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
    //         return {
    //             price,
    //             name: meta.data.name,
    //             tokenId: i.tokenId.toNumber(),
    //             seller: i.creator,
    //             owner: i.owner,
    //             image: meta.data.image,
    //             assetImage: meta.data.assetImage
    //         }
    //     }))
    //     setArtworks(items)
    // }
    //
    // useEffect(() => {
    //
    //     loadMyNFTs();
    //
    // }, [cookie])

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <div className={classes.profileMain}>
                <div className={classes.leftSec}>
                    <>
                        <div className={classes.desktopDiv}>
                            <div className={classes.profileImg} style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                // backgroundImage: `url(${userData.media ? userData.media.url : "/icons/profile-icon.svg"})`
                                backgroundImage: `url("/icons/profile-icon.svg")`
                            }}/>
                            <div className={classes.profileName}>
                                {/*{userNameTxt()}*/}
                                Unknown
                            </div>
                            <div className={classes.walletAddressSec}>
                                <div className={classes.walletAddress}>
                                    {/*{address && address.slice(0, 4) + '...' + address.slice(-4)}*/}
                                    0we6...245rb
                                </div>
                                <img onClick={() => copyText(address)} className={classes.copyImg}
                                     src="/icons/copy-icon.svg" alt=""/>
                                <a target="_blank" href={`https://etherscan.io/address/${address}`} rel="noreferrer"
                                   className={classes.link}>
                                    <img className={classes.linkOutImg} src="/icons/link-out.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </>
                    <>
                        <div className={classes.profileImgSecMob}>
                            <div className={classes.profileImg} style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: `url("/icons/profile-icon.svg")`
                                // backgroundImage: `url(${!(userData.avatarUrl === process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL) ? userData.avatarUrl : "/icons/profile-icon.svg"})`
                            }}/>
                            <div className={classes.profileName}>
                                {/*{userNameTxt()}*/}
                                Unknown
                            </div>
                        </div>
                        <div className={classes.detailSecMob}>

                            <div className={classes.detailMob}>
                                <div className={classes.walletAddressSec}>
                                    <div className={classes.walletAddress}>
                                        0we6...245rb
                                        {/*{address && address.slice(0, 4) + '...' + address.slice(-4)}*/}
                                    </div>
                                    <img onClick={() => copyText(address)} className={classes.copyImg}
                                         src="/icons/copy-icon.svg" alt=""/>
                                    <a target="_blank" href={`https://etherscan.io/address/${address}`}
                                       rel="noreferrer">
                                        <img className={classes.linkOutImg} src="/icons/link-out.svg" alt=""/>
                                    </a>
                                </div>
                                {/*<div className={classes.valueTxt}>*/}
                                {/*    Wallet Balance*/}
                                {/*</div>*/}
                                {/*<div className={classes.valueSec}>*/}
                                {/*    <div className={classes.valueNum}>*/}
                                {/*        /!*{calculateDecimalPrecision(balance, 5)}*!/*/}
                                {/*    </div>*/}
                                {/*    <div className={classes.ethTxt}>*/}
                                {/*        ETH*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </>

                </div>
                <div className={classes.rightSec}>
                    <BuyerTabPanel
                        artworks={artworks}
                                     // history={{txns: userData.transactions, assets: userData.assets}}
                    />
                </div>
            </div>
        </>
    )
}