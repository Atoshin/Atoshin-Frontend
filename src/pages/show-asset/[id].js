import styles from "../../styles/ShowAsset/ShowAsset.module.scss";
import {Button, Slide as MUISlide, Fade, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import ImagesModal from "../../components/ShowAsset/ImagesModal";
import {useEffect, useState} from "react";
import OwnersModal from "../../components/ShowAsset/OwnersModal";
import HistoryModal from "../../components/ShowAsset/HistoryModal";
import * as React from "react";
import axios from "axios";
import {TimeDifference} from "../../components/ShowAsset/TimeDifference";
import Link from 'next/link';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Youtube from 'react-youtube';
import {useRouter} from "next/router";
import CryptoJS from 'crypto-js';
import {parseCookies} from "../../functions/parseCookies";
import {ethers} from "ethers";
import {useCookies} from "react-cookie";
import calculateDecimalPrecision from "../../functions/calculateDecimalPrecision";
import {useAppDispatch} from "../../redux/hooks";
import {setAlert} from "../../redux/slices/alertSlice";
import LoadingBackdrop from "../../components/Layout/Backdrop";


const nullAddress = "0x0000000000000000000000000000000000000000";
export default function ShowAsset({asset}) {
    const [openImages, setOpenImages] = useState(false)
    const [openOwners, setOpenOwners] = useState(false)
    const [openHistory, setOpenHistory] = useState(false)
    const [rendered, setRendered] = useState(false)
    const [tooltip, setTooltip] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [sliderAutoplay, setSliderAutoplay] = useState(true)
    const [secondTooltip, setSecondTooltip] = useState(false)
    const [loadingTxn, setLoadingTxn] = useState(false)
    const [isAuctionOver, setIsAuctionOver] = useState(false)
    const [owners, setOwners] = useState([])
    const [cookie, setCookie] = useCookies()
    const [currentSlide, setCurrentSlide] = useState(asset.medias.find(media => media.main === 1))
    const [mainImgSize, setMainImgSize] = useState({
        width: '',
        height: ''
    })
    const dispatch = useAppDispatch()
    const {query} = useRouter();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const [clickedImageId, setClickedImageId] = useState('');
    const [clickedVideoId, setClickedVideoId] = useState('');
    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = 'initial';
        style.backgroundImage = ' url("/backgrounds/left.svg"), url("/backgrounds/right.svg")';
        style.backgroundRepeat = 'no-repeat, no-repeat';
        style.backgroundPosition = 'left top, right top';
        style.backgroundSize = '60%, 30%';
        //endregion
    }, [])

    function removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject = {};

        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }


    useEffect(() => {
        const onScroll = (e) => {
            const container = document.getElementsByClassName(styles.showAssetMain)[0]
            const topSec = document.getElementsByClassName(styles.topMainSec)[0]
            var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            // console.log(window.scrollY, container.clientHeight)
            if (window.scrollY + height > container.clientHeight) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }
        }


        window.addEventListener('scroll', onScroll)

        const loadOwners = async () => {
            try {
                const tokenIds = asset.contracts.map((contract) => {
                    return contract.minted.tokenId
                });
                const {data: encData} = await axios.get('/api/contracts/abi-info');
                const decrypted = await CryptoJS.AES.decrypt(encData, process.env.NEXT_PUBLIC_CRYPT_KEY)
                const {
                    Market: {address: nftMarketAddress, abi: marketAbi},
                    RPCEndPoint: rpcEndpoint
                } = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

                const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint)
                // const provider = new ethers.providers.JsonRpcProvider()
                const marketContract = new ethers.Contract(nftMarketAddress, marketAbi, provider)
                const data = await marketContract.getArtworkOwners(tokenIds[0], tokenIds[tokenIds.length - 1])
                let items = await Promise.all(data.map(async i => {
                    return i
                }))

                items = items.map(item => {
                    // if (item !== nullAddress) {
                        const occurrences = items.filter(address => address === item).length;
                        return {
                            tokens: occurrences,
                            address: item
                        }
                    // }
                });
                let nftOwners = [];
                for (let i = 0; i < items.length; i++) {
                    if (items[i]) nftOwners.push(items[i])
                }
                nftOwners = removeDuplicates(nftOwners, 'address')
                nftOwners.sort((a,b) => (a.tokens > b.tokens) ? 1 : ((b.tokens > a.tokens) ? -1 : 0));
                console.log(nftOwners)

            } catch (e) {
                console.error(e)
            }
        }

        loadOwners()
        return function () {
            window.removeEventListener('scroll', onScroll)
        }

    }, [])


    const openImageModal = (id) => {
        setClickedImageId(id)
        setOpenImages(true);
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const ArtworkSubImages = () => {
        if (asset.videoLinks[0]) {
            if (typeof document !== 'undefined') {
                let span = document.createElement('span');
                span.hidden = true;
                span.innerHTML = asset.videoLinks[0].link;
                const iframe = span.children[0];
                const ytvId = iframe.src.slice(-11)
                span.remove()
                return [
                    <div key={5000} onClick={() => {
                        setClickedVideoId(asset.videoLinks[0].id)
                        setOpenImages(true)
                    }} style={{
                        backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`,
                        width: 93.39,
                        height: 93.39,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                        marginRight: 15.73,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        boxShadow: '0px 1px 3px 0px #00000026'
                    }}>
                        <img src={'/images/show-asset/videoPlay.svg'} style={{width: 53.84, height: 53.84}}/>
                    </div>
                    ,
                    asset.medias.slice(0, 5).map((data, idx) => {
                        if (idx === parseInt(Object.keys(asset.medias)[Object.keys(asset.medias).length - 1]) || idx === 4) {
                            return <div onClick={() => openImageModal(data.id)} style={{
                                backgroundImage: `url("${data.url}")`,
                                width: 93.39,
                                height: 93.39,
                                backgroundPosition: 'center',
                                backgroundSize: "cover",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 3,
                                boxShadow: '0px 1px 3px 0px #00000026'
                            }}>
                                <img src="/images/show-asset/more.svg" style={{width: 53.84, height: 53.84}}/>
                            </div>
                        } else {
                            return <div onClick={() => openImageModal(data.id)} style={{
                                backgroundImage: `url("${data.url}")`,
                                width: 93.39,
                                height: 93.39,
                                backgroundPosition: 'center',
                                backgroundSize: "cover",
                                marginRight: 15.73,
                                borderRadius: 3,
                                boxShadow: '0px 1px 3px 0px #00000026'
                            }}/>
                        }
                    })]
                // return [asset.medias.slice(0, 5).map((data, idx) => {
                //     return <div style={{
                //         backgroundImage: `url("${data.url}")`,
                //         width: 93.39,
                //         height: 93.39,
                //         backgroundPosition: 'center',
                //         backgroundSize: "cover",
                //         marginRight: 15.73,
                //     }}/>
                // }), <div style={{
                //     backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`,
                //     width: 93.39,
                //     height: 93.39,
                //     backgroundPosition: 'center',
                //     backgroundSize: "cover",
                //     // marginRight: 15.73,
                //     display:'flex',
                //     justifyContent:'center',
                //     alignItems:'center',
                // }}>
                //     <img src="/images/show-asset/more.svg" style={{width: 54.07, height: 54.07}}/>
                // </div>]
            } else {
                return null;
            }
        } else {
            return asset.medias.slice(0, 6).map((data, idx) => {
                if (idx === parseInt(Object.keys(asset.medias)[Object.keys(asset.medias).length - 1]) || idx === 5) {
                    return <div onClick={() => openImageModal(data.id)} style={{
                        backgroundImage: `url("${data.url}")`,
                        width: 93.39,
                        height: 93.39,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                        marginRight: 15.73,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        boxShadow: '0px 1px 3px 0px #00000026'
                    }}>
                        <img src="/images/show-asset/more.svg" style={{width: 54.07, height: 54.07}}/>
                    </div>
                } else {
                    return <div onClick={() => openImageModal(data.id)} style={{
                        backgroundImage: `url("${data.url}")`,
                        width: 93.39,
                        height: 93.39,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                        marginRight: 15.73,
                        borderRadius: 3,
                        boxShadow: '0px 1px 3px 0px #00000026'
                    }}/>
                }
            })
        }
    }
    const signMessage = async (signer) => {
        const walletAddress = await signer.getAddress();
        try {
            const signature = await signer.signMessage(process.env.NEXT_PUBLIC_SIGNATURE_PHRASE);
            await axios.post(`/api/signature`, {
                signature,
                walletAddress,
                type: true
            })
            setCookie('buyToken', signature, {
                path: "/",
                sameSite: true,
                maxAge: 10 * 60
            })
        } catch (error) {
            console.log(error)
        }
    }

    const submitOrder = async () => {
        try {
            if (window.ethereum) {
                setLoadingTxn(true)
                const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const walletAddress = await signer.getAddress();
                if (walletAddress) {
                    await axios.post(`/api/wallet`, {
                        walletAddress
                    }).then(async (r) => {
                        await signMessage(signer)
                    }).catch(async e => {
                        if (typeof e.response !== 'undefined') {
                            if (!e.response.data.data) {
                                await signMessage(signer)
                            }
                        }
                    });
                }
                const {data: encrypted} = await axios.post(`/api/contracts/asset/${query.id}`, {amount: quantity})
                const decrypted = await CryptoJS.AES.decrypt(encrypted, process.env.NEXT_PUBLIC_CRYPT_KEY)
                const resData = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
                const ppf = ethers.utils.parseUnits(resData.ppf.toString(), 'ether')
                const totalPrice = ethers.utils.parseUnits((resData.ppf * resData.contracts.length).toString(), 'ether')

                let contract = new ethers.Contract(resData.Market.address, resData.Market.abi, signer)
                const tokenIds = [];
                const mintedAts = [];
                const mintedIds = [];
                for (let i = 0; i < resData.contracts.length; i++) {
                    tokenIds.push(resData.contracts[i].minted.tokenId);
                    mintedAts.push(new Date(resData.contracts[i].minted.createdAt).getTime());
                    mintedIds.push(resData.contracts[i].minted.id);
                }
                const address = await signer.getAddress();
                let transaction = await contract.createMarketItems(
                    resData.NFT.address,
                    tokenIds,
                    ppf,
                    resData.royaltyPercentage,
                    resData.totalFractions,
                    resData.creator,
                    address,
                    mintedAts,
                    {value: totalPrice}
                )

                const tx = await transaction.wait()
                const txnHash = tx.transactionHash
                await axios.patch(`/api/contracts/asset/${query.id}`, {
                    txnHash,
                    mintedIds,
                    txnStatus: 'sold'
                })
                setLoadingTxn(false)
            } else {
            }
        } catch (e) {
            setLoadingTxn(false)
            if (e.response) {
                dispatch(setAlert({
                    open: true,
                    message: e.response.data.message,
                    severity: 'error'
                }))
            } else {
                dispatch(setAlert({
                    open: true,
                    message: e.message,
                    severity: 'error'
                }))
            }
        }
    }

    useEffect(() => {
        const imgContainer = document.getElementById('main-img-container')
        if (imgContainer) {
            if (currentSlide.url) {
                const height = (imgContainer.clientWidth * currentSlide.size.height) / currentSlide.size.width
                setMainImgSize({
                    height,
                    width: imgContainer.clientWidth
                })
            } else {
                // const iframe = document.getElementById(`asset-ytv-${currentSlide.id}`).children[0]
                // iframe.width = imgContainer.clientWidth;
                // iframe.height = imgContainer.clientWidth * 2 / 3;
                // const initialSrc = iframe.src;
                // const iframeSrc = new URL(initialSrc);
                // iframeSrc.searchParams.set('enablejsapi', '1');
                // iframeSrc.searchParams.set("version", "3");
                // iframeSrc.searchParams.set("playerapiid", "ytplayer");
                // iframe.src = iframeSrc;
            }
        }
        if (!rendered) {
            setRendered(true)
        }
    }, [currentSlide, rendered])

    const add = () => {
        if (quantity <= parseInt((asset.totalFractions - asset.soldFractions) - 1)) {
            setQuantity((quantity) => {
                return parseInt(quantity) + 1
            })
            // setQuantity(quantity+1)
        }
        if (!quantity) {
            setQuantity(1)
            setQuantity((quantity) => {
                return parseInt(quantity)
            })
        }
    }
    const minus = () => {
        if (quantity > 1) {
            setQuantity((quantity) => {
                return parseInt(quantity) - 1
            })
        }
    }

    const inputHandler = (e) => {
        let fractionsLeft = asset.totalFractions - asset.soldFractions;
        if (parseInt(e.target.value) > fractionsLeft || parseInt(e.target.value) < 1 || isNaN(e.target.value)) {

        } else {
            setQuantity(e.target.value)
        }
        // if(e.target.value.slice(0,1) === fractionsLeft.toString().slice(0,1) && parseInt(e.target.value.charAt(e.target.value.length - 1)) >= parseInt(fractionsLeft.toString().charAt(fractionsLeft.toString().length - 1)) ){
        //     console.log(e.target.value)
        // }
        // else{
        //     setQuantity(e.target.value)
        // }
    }

    console.log(asset)
    return (
        <>
            <LoadingBackdrop setOpen={setLoadingTxn} open={loadingTxn}/>
            <ImagesModal open={openImages} setOpen={setOpenImages} images={asset.medias} title={asset.title}
                         videos={asset.videoLinks}
                         clickedImageId={clickedImageId}
                         setClickedImageId={setClickedImageId}
                         setClickedVideoId={setClickedVideoId}
                         clickedVideoId={clickedVideoId}
                         two={false}
            />
            {/*imageId={imageId}*/}
            {/*pass*/}
            <OwnersModal owners={asset.buyTransactions} open={openOwners} setOpen={setOpenOwners}/>
            <HistoryModal open={openHistory} setOpen={setOpenHistory}/>
            <div className={styles.showAssetMain}>
                <div className={styles.topMainSec}>
                    <div className={styles.topLeftMainSec}>
                        <div className={styles.titleSec}>
                            <div className={styles.artworkTitle}>{asset.title}</div>
                            <div className={styles.artistNameSec}>
                                <div className={styles.artistText}>
                                    Artist
                                </div>
                                <Link
                                    href={`/artists/${asset.artist.fullName.toLowerCase().replace(/ /g, '-')}/${asset.artist.id}`}>
                                    <a>
                                        <div className={styles.artistName}>
                                            {asset.artistName}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {matches &&
                            <div id="main-img-container" style={{...mainImgSize, transition: 'all 500ms ease'}}
                                 className={styles.artworkMainImgSec}>
                                <Slide
                                    easing='ease'
                                    slidesToShow={1}
                                    infinite={true}
                                    autoplay={sliderAutoplay}
                                    duration={5000}
                                    indicators
                                    onChange={(oldIdx, newIdx) => {
                                        const mediaIndexes = asset.medias.filter(media => media.main !== 1).length - 1
                                        if (newIdx > mediaIndexes) {
                                            newIdx = newIdx - (mediaIndexes + 1);
                                            setCurrentSlide(asset.videoLinks[newIdx])
                                        } else {
                                            setCurrentSlide(asset.medias.filter(media => media.main !== 1)[newIdx])
                                        }
                                    }}
                                >
                                    {asset.medias.filter(media => media.main !== 1).map(media => {
                                        return <img key={media.id}
                                                    style={{...mainImgSize, transition: 'all 500ms ease'}}
                                                    className={styles.artworkMainImg}
                                                    src={media.url} alt=""/>
                                    })}
                                    {asset.videoLinks.map(video => {
                                        let span = document.createElement('span');
                                        span.hidden = true;
                                        span.innerHTML = video.link;
                                        const iframe = span.children[0]
                                        const ytvId = iframe.src.slice(-11)
                                        span.remove()
                                        return <Youtube
                                            key={ytvId}
                                            // videoId={video.videoId}
                                            videoId={ytvId}
                                            containerClassName={styles.artworkMainImgMobile}
                                            opts={mainImgSize}
                                            onPlay={() => {
                                                setSliderAutoplay(false)
                                            }}
                                            onPause={() => {
                                                setSliderAutoplay(true)
                                            }}
                                        />
                                    })}
                                </Slide>
                            </div>
                        }
                        {matches &&
                            <div className={styles.saleEndDateMob}>
                                {isAuctionOver ? 'Sale ended on ' : 'Sale ends in '}
                                {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDay()}, {new Date(asset.endDate).getFullYear()}
                            </div>
                        }
                        <div className={styles.saleMainSec}>
                            <div className={styles.saleEndDate}>
                                {isAuctionOver ? 'Sale ended on ' : 'Sale ends in '}
                                {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDay()}, {new Date(asset.endDate).getFullYear()}
                            </div>
                            <TimeDifference setIsOver={setIsAuctionOver} time={asset.endDate}/>
                        </div>
                        <div className={styles.fractionsMainSec}>
                            <div className={styles.fractionsLeftTxt}>
                                Fractions left
                                {!matches &&
                                    <img onMouseEnter={() => setTooltip(true)} onMouseOut={() => setTooltip(false)}
                                         className={styles.infoTooltip} src="/icons/info-tooltip.svg" alt=""/>
                                }
                                <Fade in={tooltip}>
                                    <div className={styles.fractionsTooltip}>
                                        {(asset.totalFractions * asset.ownershipPercentage) / 100} fractions belong to
                                        the gallery
                                        and {(asset.totalFractions - (asset.totalFractions * asset.ownershipPercentage) / 100)} fractions
                                        can be traded
                                        <div className={styles.arrow}/>
                                    </div>
                                </Fade>
                            </div>
                            <div className={styles.fractionsLeftAmount}>
                                {asset.totalFractions - asset.soldFractions}<span
                                style={{fontWeight: 400}}>/{asset.totalFractions}</span>
                            </div>
                            {matches &&
                                <img onMouseEnter={() => setTooltip(true)} onMouseOut={() => setTooltip(false)}
                                     className={styles.infoTooltip} src="/icons/info-tooltip.svg" alt=""/>
                            }
                        </div>
                        {(matches) &&
                            <MUISlide in={scrolled} direction={"up"}>
                                <div className={styles.priceMainSec}>
                                    <div className={styles.priceSec}>
                                        <div className={styles.priceTxt}>
                                            Price
                                        </div>
                                        <div className={styles.priceAmount}>
                                            {asset.ethPricePerFraction} ETH
                                        </div>
                                    </div>
                                    <Button className={styles.BuyBtn}>
                                        Buy now
                                    </Button>
                                </div>
                            </MUISlide>
                        }
                        {
                            (!matches) &&
                            <div className={styles.priceMainSec}>
                                <div className={styles.counterPart}>
                                    <img src="/images/show-asset/minus.svg" style={{marginLeft: 32, width: 56.5}}
                                         onClick={minus}/>
                                    <input value={quantity} onChange={inputHandler}
                                           className={styles.quantityInput} type="text"/>
                                    <img src="/images/show-asset/plus.svg" style={{marginRight: 37, width: 56.5}}
                                         onClick={add}/>
                                </div>
                                <Button disabled={isAuctionOver} classes={{disabled: styles.disabledBtn}}
                                        onClick={submitOrder} className={styles.BuyBtnDesktop}>
                                    Buy {quantity ? quantity : 0} - {calculateDecimalPrecision(asset.ethPricePerFraction * quantity, 5)} ETH
                                </Button>
                            </div>
                        }
                    </div>
                    <div className={styles.topRightMainSec}>
                        <div className={styles.artworkMainImgSec} onClick={() => {
                            setOpenImages(true)
                            setClickedImageId(asset.medias.find(media => media.main === 1).id)
                        }}>
                            <img className={styles.artworkMainImg}
                                 src={asset.medias.find(media => media.main === 1).url} alt=""/>
                        </div>
                        <div className={styles.artworkOtherImgSec}>
                            <ArtworkSubImages/>
                        </div>
                    </div>
                </div>
                <div className={styles.midMainSec}>
                    <div className={styles.provenanceTitle}>
                        Provenance
                    </div>
                    <div className={styles.provenanceMainSec}>
                        <div className={styles.backStorySec}>
                            <div className={styles.backStoryTitle}>
                                Back story
                            </div>
                            <div className={styles.backStoryTxt} dangerouslySetInnerHTML={{__html: asset.bio}}/>
                            <div className={styles.backStoryDivider}>
                            </div>
                            <div className={styles.backStoryBottomSec}>
                                <div className={styles.backStoryArtistSec}>
                                    <div className={styles.backStoryArtistTxt}>
                                        Artist
                                    </div>
                                    <Link
                                        href={`/artists/${asset.artist.fullName.toLowerCase().replace(/ /g, '-')}/${asset.artist.id}`}>
                                        <a>
                                            <div className={styles.backStoryArtistName}>{asset.artistName}</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.originalOwnerSec}>
                                    <div className={styles.originalOwnerTxt}>
                                        Original owner
                                    </div>
                                    <Link href={`/museums-and-galleries/${asset.gallery.id}`}>
                                        <a>
                                            <div className={styles.originalOwnerName}>
                                                {asset.gallery.name}
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.provenanceDivider}>
                        </div>
                        <div className={styles.aboutArtworkSec}>
                            <div className={styles.aboutArtworkTxt}>
                                About artwork
                            </div>
                            <div className={styles.detailSec}>
                                <div className={styles.detailTitle}>
                                    Date of creation
                                </div>
                                <div className={styles.detailText}>
                                    {new Date(asset.createdAt).getFullYear()}
                                </div>
                            </div>
                            <div className={styles.detailSec}>
                                <div className={styles.detailTitle}>
                                    Materials
                                </div>
                                <div className={styles.detailText}>
                                    {asset.material}
                                </div>
                            </div>
                            <div className={styles.detailSec}>
                                <div className={styles.detailTitle}>
                                    Size
                                </div>
                                <div className={styles.detailText}>
                                    {asset.size}
                                </div>
                            </div>
                            <div className={styles.detailSec}>
                                <div className={styles.detailTitle}>
                                    Located in
                                </div>
                                <div className={styles.detailText}>{asset.gallery.name}</div>
                            </div>
                            <div className={styles.aboutArtworkDivider}>
                            </div>
                            <div className={styles.aboutArtworkBottomSec}>
                                {asset.mintTransactions.length > 0 ?
                                    <a target="_blank"
                                       href={process.env.NEXT_PUBLIC_ETHERSCAN_DOMAIN + 'tx/' + asset.mintTransactions[0].txnHash}
                                       className={styles.mintedDateSec} rel="noreferrer">
                                        Minted on
                                        {
                                            ' ' + monthNames[new Date(asset.mintTransactions[0].createdAt).getMonth()] + ' ' + new Date(asset.mintTransactions[0].createdAt).getDay() + ' ' + new Date(asset.mintTransactions[0].createdAt).getFullYear()
                                        }
                                    </a>
                                    :
                                    <div style={{width: 177}}/>}
                                <div onMouseEnter={() => setSecondTooltip(true)}
                                     onMouseOut={() => setSecondTooltip(false)} className={styles.watchArtworkSec}>
                                    Watch artwork online
                                </div>
                                {
                                    secondTooltip &&
                                    <Fade in={secondTooltip}>
                                        <div className={styles.watchOnlineTooltip}>
                                            This item is only active for owners
                                            <div className={styles.arrow2}/>
                                        </div>
                                    </Fade>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomMainSec}>
                    <div className={styles.ownersMainSec}>
                        <div className={styles.ownersTitleSec}>
                            <div className={styles.ownersTitle}>
                                Top Owners
                            </div>
                            <div onClick={() => setOpenOwners(true)} className={styles.viewAllOwners}>
                                View All
                            </div>
                        </div>
                        <div className={styles.ownersIndexSec}>
                            <div className={styles.indexTitles}>
                                <div className={styles.rankTitle}>
                                    Rank
                                </div>
                                <div className={styles.ownerNameTitle}>
                                    Owners
                                </div>
                                <div className={styles.quantityTitle}>
                                    Quantity
                                </div>
                            </div>
                            {asset.buyTransactions && asset.buyTransactions.slice(0, 3).map((txn, idx) => {
                                return <div key={idx} className={styles.ownersIndexRow}>
                                    <div className={styles.rankNum}>
                                        {idx + 1}
                                    </div>
                                    <div className={styles.ownerName}>
                                        {txn.transactable.wallet.walletAddress.slice(0, 4) + '...' + txn.transactable.wallet.walletAddress.slice(-4)}
                                    </div>
                                    <div className={styles.quantity}>
                                        {txn.tokenQuantity} Token{txn.tokenQuantity > 1 && 's'}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className={styles.historyMainSec}>
                        <div className={styles.historyTitleSec}>
                            <div className={styles.historyTitle}>
                                History
                            </div>
                            <div onClick={() => setOpenHistory(true)} className={styles.viewAllHistory}>
                                View All
                            </div>
                        </div>
                        <div className={styles.historyIndexSec}>
                            <div className={styles.historyIndexTitles}>
                                <div className={styles.buyerNameTitle}>
                                    Buyers
                                </div>
                                <div className={styles.dateTitle}>
                                    Date
                                </div>
                            </div>
                            <div className={styles.historyIndexRow}>
                                <div className={styles.buyerNameSec}>
                                    <div className={styles.boughtBy}>
                                        Bought by
                                    </div>
                                    <div className={styles.buyerName}>
                                        0we6...245rb
                                    </div>
                                </div>
                                <div className={styles.dateBought}>
                                    in December 23, 2021
                                </div>
                            </div>
                            <div className={styles.historyIndexRow}>
                                <div className={styles.buyerNameSec}>
                                    <div className={styles.boughtBy}>
                                        Bought by
                                    </div>
                                    <div className={styles.buyerName}>
                                        0as7...345il
                                    </div>
                                </div>
                                <div className={styles.dateBought}>
                                    in December 18, 2021
                                </div>
                            </div>
                            <div className={styles.historyIndexRow}>
                                <div className={styles.buyerNameSec}>
                                    <div className={styles.boughtBy}>
                                        Bought by
                                    </div>
                                    <div className={styles.buyerName}>
                                        0wr6...256jh
                                    </div>
                                </div>
                                <div className={styles.dateBought}>
                                    in December 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const {data: {assets}} = await axios.get(`${process.env.BACKEND_BASE_URL}/marketplace`)
    const paths = assets.map(asset => ({
        params: {id: asset.id.toString()}
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params: {id}}) {
    const {
        data: {
            asset
        }
    } = await axios.get(`${process.env.BACKEND_BASE_URL}/asset/${id}/show`)

    return {
        props: {
            asset,
        },
        revalidate: 30
    }
}

