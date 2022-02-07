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

export default function ShowAsset({asset}) {
    const [openImages, setOpenImages] = useState(false)
    const [openOwners, setOpenOwners] = useState(false)
    const [openHistory, setOpenHistory] = useState(false)
    const [rendered, setRendered] = useState(false)
    const [tooltip, setTooltip] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [sliderAutoplay, setSliderAutoplay] = useState(true)
    const [secondTooltip, setSecondTooltip] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(asset.medias.find(media => media.main === 1))
    const [mainImgSize, setMainImgSize] = useState({
        width: '',
        height: ''
    })
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        const onScroll = (e) => {
            const container = document.getElementsByClassName(styles.showAssetMain)[0]
            const topSec = document.getElementsByClassName(styles.topMainSec)[0]
            if (window.scrollY > container.clientHeight || window.scrollY < topSec.clientHeight - 100) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }
        }


        window.addEventListener('scroll', onScroll)


        return function () {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])


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
                return [asset.medias.slice(0, 5).map(({url}) => {
                    return <div style={{
                        backgroundImage: `url("${url}")`,
                        width: 93.39,
                        height: 93.39,
                        backgroundPosition: 'center',
                        backgroundSize: "cover"
                    }}/>
                }), <div style={{
                    backgroundImage: `url("https://img.youtube.com/vi/${ytvId}/1.jpg")`,
                    width: 93.39,
                    height: 93.39,
                    backgroundPosition: 'center',
                    backgroundSize: "cover"
                }}/>]
            } else {
                return null;
            }
        } else {
            return asset.medias.slice(0, 6).map(({url}) => {
                return <div style={{
                    backgroundImage: `url("${url}")`,
                    width: 93.39,
                    height: 93.39,
                    backgroundPosition: 'center',
                    backgroundSize: "cover"
                }}/>
            })
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

    return (
        <>
            <ImagesModal open={openImages} setOpen={setOpenImages} images={asset.medias} title={asset.title}
                         videos={asset.videoLinks}/>
            <OwnersModal open={openOwners} setOpen={setOpenOwners}/>
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
                                    <div className={styles.artistName}>
                                        {asset.artistName}
                                    </div>
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
                                Sale ends
                                in {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDay()}, {new Date(asset.endDate).getFullYear()}
                            </div>
                        }
                        <div className={styles.saleMainSec}>
                            <div className={styles.saleEndDate}>
                                Sale ends
                                in {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDay()}, {new Date(asset.endDate).getFullYear()}
                            </div>
                            <TimeDifference time={asset.endDate}/>
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
                                {asset.totalFractions - asset.soldFractions}/{asset.totalFractions}
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
                                            {asset.price} ETH
                                        </div>
                                    </div>
                                    <Button className={styles.BuyBtn}>
                                        Buy now
                                    </Button>
                                </div>
                            </MUISlide>
                        }
                        {
                            !matches &&
                            <div className={styles.priceMainSec}>
                                <div className={styles.priceSec}>
                                    <div className={styles.priceTxt}>
                                        Price
                                    </div>
                                    <div className={styles.priceAmount}>
                                        {asset.price} ETH
                                    </div>
                                </div>
                                <Button className={styles.BuyBtn}>
                                    Buy now
                                </Button>
                            </div>
                        }
                    </div>
                    <div className={styles.topRightMainSec} onClick={() => setOpenImages(true)}>
                        <div className={styles.artworkMainImgSec}>
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
                                        <div className={styles.backStoryArtistName}>{asset.artistName}</div>
                                    </Link>
                                </div>
                                <div className={styles.originalOwnerSec}>
                                    <div className={styles.originalOwnerTxt}>
                                        Original owner
                                    </div>
                                    <Link href={`/art-center/${asset.gallery.id}`}>
                                        <div className={styles.originalOwnerName}>
                                            {asset.gallery.name}
                                        </div>
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
                                <div className={styles.mintedDateSec}>
                                    Minted on Dec 8, 2021
                                </div>
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
                                Top 10 Owners
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
                                    Owner Name
                                </div>
                                <div className={styles.quantityTitle}>
                                    Quantity
                                </div>
                            </div>
                            <div className={styles.ownersIndexRow}>
                                <div className={styles.rankNum}>
                                    1
                                </div>
                                <div className={styles.ownerName}>
                                    0we6...245rb
                                </div>
                                <div className={styles.quantity}>
                                    21 Token
                                </div>
                            </div>
                            <div className={styles.ownersIndexRow}>
                                <div className={styles.rankNum}>
                                    2
                                </div>
                                <div className={styles.ownerName}>
                                    0as7...345il
                                </div>
                                <div className={styles.quantity}>
                                    10 Token
                                </div>
                            </div>
                            <div className={styles.ownersIndexRow}>
                                <div className={styles.rankNum}>
                                    3
                                </div>
                                <div className={styles.ownerName}>
                                    0wr6...256jh
                                </div>
                                <div className={styles.quantity}>
                                    8 Token
                                </div>
                            </div>
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
                                    Buyer Name
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


export async function getServerSideProps({query}) {
    const assetId = query.id;

    const {
        data: {
            asset
        }
    } = await axios.get(`${process.env.BASE_URL}/api/show-asset/${assetId}`)

    return {
        props: {
            asset
        }
    }
}