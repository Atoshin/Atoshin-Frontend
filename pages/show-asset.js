import styles from "../styles/ShowAsset.module.css";
import Head from "next/head";
import HomePage from "../components/HomePage";
import {Button, useMediaQuery} from "@mui/material";
import OwnerIndexModal from '../components/Layout/OwnersIndexModal.js';



export default function ShowAsset() {
    return (
        <>
            <div className={styles.showAssetMain}>
                <div className={styles.topMainSec}>
                    <div className={styles.topLeftMainSec}>
                        <div className={styles.titleSec}>
                            <div className={styles.artworkTitle}>
                                Starry Night
                            </div>
                            <div className={styles.artistNameSec}>
                                <div className={styles.artistText}>
                                    Artist
                                </div>
                                <div className={styles.artistName}>
                                    Vincent Van Gogh
                                </div>
                            </div>
                        </div>
                        <div className={styles.saleMainSec}>
                            <div className={styles.saleStartDate}>
                                Sale started in December 5, 2021
                            </div>
                            <div className={styles.timeCounterSec}>
                                <div className={styles.counterSec}>
                                    <div className={styles.counterNum}>
                                        02
                                    </div>
                                    <div className={styles.counterTitle}>
                                        Days
                                    </div>
                                </div>
                                <div className={styles.counterSec}>
                                    <div className={styles.counterNum}>
                                        18
                                    </div>
                                    <div className={styles.counterTitle}>
                                        Hours
                                    </div>
                                </div>
                                <div className={styles.counterSec}>
                                    <div className={styles.counterNum}>
                                        40
                                    </div>
                                    <div className={styles.counterTitle}>
                                        Minutes
                                    </div>
                                </div>
                            </div>
                            <div className={styles.saleEndDate}>
                                Sale ends in December 11, 2021
                            </div>
                        </div>
                        <div className={styles.fractionsMainSec}>
                            <div className={styles.fractionsLeftTxt}>
                                Fractions left
                            </div>
                            <div className={styles.fractionsLeftAmount}>
                                34/100
                            </div>
                        </div>
                        <div className={styles.priceMainSec}>
                            <div className={styles.priceSec}>
                                <div className={styles.priceTxt}>
                                    Price
                                </div>
                                <div className={styles.priceAmount}>
                                    0.4 ETH
                                </div>
                            </div>
                            <Button className={styles.BuyBtn}>
                                Buy now
                            </Button>
                        </div>
                    </div>
                    <div className={styles.topRightMainSec}>
                        <div className={styles.artworkMainImgSec}>
                            <img className={styles.artworkMainImg} src="/images/starry-night-main.png" alt=""/>
                        </div>
                        <div className={styles.artworkOtherImgSec}>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
                            <img className={styles.artworkOtherImg} src="/images/starry-night-second.png" alt=""/>
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
                            <div className={styles.backStoryTxt}>
                                is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh.
                                Painted in June 1889, it depicts the view from the east-facing window of his asylum room
                                at Saint-Rémy
                            </div>
                            <div className={styles.backStoryDivider}>
                            </div>
                            <div className={styles.backStoryBottomSec}>
                                <div className={styles.backStoryArtistSec}>
                                    <div className={styles.backStoryArtistTxt}>
                                        Artist
                                    </div>
                                    <div className={styles.backStoryArtistName}>
                                        Vincent Van Gogh
                                    </div>
                                </div>
                                <div className={styles.originalOwnerSec}>
                                    <div className={styles.originalOwnerTxt}>
                                        Orginal owner
                                    </div>
                                    <div className={styles.originalOwnerName}>
                                        DD Gallery
                                    </div>
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
                                    2001
                                </div>
                            </div>
                            <div className={styles.detailSec}>
                                <div className={styles.detailTitle}>
                                    Materials
                                </div>
                                <div className={styles.detailText}>
                                    Mixed Media on Canvas
                                </div>
                            </div>
                            <div className={styles.detailSec}>
                                <div className={styles.detailTitle}>
                                    Size
                                </div>
                                <div className={styles.detailText}>
                                    160*130cm
                                </div>
                            </div>
                            <div className={styles.detailSec}>
                                <div className={styles.detailTitle}>
                                    Located in
                                </div>
                                <div className={styles.detailText}>
                                    DD Gallery
                                </div>
                            </div>
                            <div className={styles.aboutArtworkDivider}>
                            </div>
                            <div className={styles.aboutArtworkBottomSec}>
                                <div className={styles.mintedDateSec}>
                                    Minted on Dec 8, 2021
                                </div>
                                <div className={styles.watchArtworkSec}>
                                    Watch artwork online
                                </div>
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
                            <div className={styles.viewAllOwners}>
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
                            <div className={styles.viewAllHistory}>
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