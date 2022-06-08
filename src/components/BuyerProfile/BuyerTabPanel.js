import * as React from 'react';
import {useState} from 'react';
import classes from "../../styles/BuyerProfile/BuyerProfileTabPanel/BuyerProfileTabPanel.module.scss";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import {useMediaQuery} from "@mui/material";
import MakeOfferModal from "./MakeOfferModal";

function BuyerTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 0}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({artworks, history}) {
    const [value, setValue] = React.useState(0);
    const [isSale, setIsSale] = useState(false);
     const [openMakeOfferModall, setOpenMakeOfferModall] = useState(false);
    const [artWorkHover, setArtWorkHover] = useState(false);
    const artWorkMouseOver = () => {
        setArtWorkHover(true)
    }
    const artWorkMouseLeave = () => {
        setArtWorkHover(false)
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return (
        <Box className={classes.tabBox} sx={{width: '100%'}}>
            <Box className={classes.table} sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} style={{width: '100%'}}
                      TabIndicatorProps={{style: {background: '#232323'}}} textColor="secondary"
                      indicatorColor="secondary" aria-label="basic tabs example">
                    <Tab className={classes.tabTitles} label="Artworks" {...a11yProps(0)} />
                    <Tab className={classes.tabTitles} label="History" {...a11yProps(1)} />
                    <Tab className={classes.tabTitles} label="On Sale" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <BuyerTabPanel value={value} index={0}>
                <MakeOfferModal open={openMakeOfferModall} setOpen={setOpenMakeOfferModall} />
                <div className={Object.keys(artworks).length === 1  ? classes.profileBoxArtwork2 : classes.profileBoxArtwork}>
                    <div className={Object.keys(artworks).length === 1  ? classes.artworkSec2 :  classes.artworkSec}>
                        {/*{artworks.map((artwork, idx) => {*/}
                        {/*    return <ArtWork artwork={artwork} key={idx} isSale={false}/>*/}
                        {/*})}*/}
                            <div className={artWorkHover ? classes.hoveredArtworkCard : classes.artworkCard}
                                        onMouseEnter={artWorkMouseOver}
                                        onMouseLeave={artWorkMouseLeave}>
                                {
                                    artWorkHover === true ?
                                        <div className={classes.hoveredArtworkBackground}>
                                            <div className={classes.contractsBtn} onClick={()=> setOpenMakeOfferModall(true)}><div>Make Offer</div></div>
                                            <div className={classes.assetBtn}><div>Asset</div></div>
                                        </div> : ''
                                }
                                <div className={artWorkHover ? classes.hoveredArtworkImg : classes.artworkImg} style={{
                                    // backgroundImage: `url(${artwork.assetImage})`,
                                    backgroundImage: `url(/images/starryNight.png)`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}/>
                                <div className={classes.cardBottomSec}>
                                    <div className={classes.artworkName}>
                                        Starry Night
                                    </div>
                                    {/*<div className={classes.artworkTokens}>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                    </div>
                </div>
            </BuyerTabPanel>
            <BuyerTabPanel value={value} index={1}>
                <div className={classes.profileBoxHistory}>
                    <div className={classes.historyMainSec}>
                        <div className={classes.historyIndexSec}>
                            <div className={classes.indexTitleSec}>
                                <div className={classes.itemsTitle}>
                                    Items
                                </div>
                                <div className={classes.statusTitle}>
                                    Status
                                </div>
                                <div className={classes.dateTitle}>
                                    Date
                                </div>
                                <div className={classes.transactionTitle}>
                                    Transaction
                                </div>
                            </div>
                            {/*<div className={Object.keys(history.txns).length < 5 ? classes.historyRowSec : classes.historyRowSec2 }>*/}
                            <div className={classes.historyRowSec}>

                                {/*<div  className={classes.indexRowSec}>*/}
                                {/*    <div className={classes.itemsSec}>*/}
                                {/*        <div className={classes.smallImg} style={{*/}
                                {/*            backgroundImage: `url(images/starryNight.png)`,*/}
                                {/*            backgroundPosition: "center",*/}
                                {/*            backgroundSize: "cover"*/}
                                {/*        }}/>*/}
                                {/*        <div className={classes.artworkNameIndex}>*/}
                                {/*            /!*{history.assets[idx].title}*!/*/}
                                {/*            ghghghg*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className={classes.statusSec}>*/}
                                {/*        Sold*/}
                                {/*    </div>*/}
                                {/*    <div className={classes.dateSec}>*/}
                                {/*        2023*/}
                                {/*        /!*{monthNames[new Date(txn.createdAt).getMonth()]} {new Date(txn.createdAt).getDate()}, {new Date(txn.createdAt).getFullYear()}*!/*/}
                                {/*    </div>*/}
                                {/*    <div className={classes.transactionSec}>*/}
                                {/*        jdfjk*/}
                                {/*        /!*{calculateDecimalPrecision(history.assets[idx].ethPricePerFraction * txn.tokenQuantity, 3) + ' ETH'}*!/*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*{history.txns.map((txn, idx) => {*/}
                                {/*    return <div key={idx} className={classes.indexRowSec}>*/}
                                {/*        <div className={classes.itemsSec}>*/}
                                {/*            <div className={classes.smallImg} style={{*/}
                                {/*                backgroundImage: `url(${history.assets[idx].medias.find(media => media.main === 1).url})`,*/}
                                {/*                backgroundPosition: "center",*/}
                                {/*                backgroundSize: "cover"*/}
                                {/*            }}/>*/}
                                {/*            <div className={classes.artworkNameIndex}>*/}
                                {/*                {history.assets[idx].title}*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className={classes.statusSec}>*/}
                                {/*            Bought*/}
                                {/*        </div>*/}
                                {/*        <div className={classes.dateSec}>*/}
                                {/*            {monthNames[new Date(txn.createdAt).getMonth()]} {new Date(txn.createdAt).getDate()}, {new Date(txn.createdAt).getFullYear()}*/}
                                {/*        </div>*/}
                                {/*        <div className={classes.transactionSec}>*/}
                                {/*            {calculateDecimalPrecision(history.assets[idx].ethPricePerFraction * txn.tokenQuantity, 3) + ' ETH'}*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*})}*/}

                                <div className={classes.indexRowSec}>
                                    <div className={classes.itemsSec}>
                                        <div className={classes.smallImg} style={{
                                            // backgroundImage: `url(${history.assets[idx].medias.find(media => media.main === 1).url})`,
                                            backgroundImage: `url(/images/starryNight.png)`,
                                            backgroundPosition: "center",
                                            backgroundSize: "cover"
                                        }}/>
                                        <div className={classes.artworkNameIndex}>
                                            {/*{history.assets[idx].title}*/}
                                            Starry Night
                                        </div>
                                    </div>
                                    <div className={classes.statusSec}>
                                        Sold
                                    </div>
                                    <div className={classes.dateSec}>
                                        2022
                                        {/*{monthNames[new Date(txn.createdAt).getMonth()]} {new Date(txn.createdAt).getDate()}, {new Date(txn.createdAt).getFullYear()}*/}
                                    </div>
                                    <div className={classes.transactionSec}>
                                        3ETH
                                        {/*{calculateDecimalPrecision(history.assets[idx].ethPricePerFraction * txn.tokenQuantity, 3) + ' ETH'}*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BuyerTabPanel>
            <BuyerTabPanel value={value} index={2}>
                <div className={classes.profileBoxArtwork}>
                    <div className={classes.artworkSec}>
                        {/*{artworks.map((artwork, idx) => {*/}
                        {/*    return <ArtWork artwork={artwork} key={idx} isSale={true}/>*/}
                        {/*})}*/}
                             <div  className={artWorkHover ? classes.sellHoveredArtworkCard : classes.sellArtworkCard}
                                        onMouseEnter={artWorkMouseOver}
                                        onMouseLeave={artWorkMouseLeave}>
                                {
                                    artWorkHover === true ?
                                        <div className={classes.hoveredArtworkBackground}>
                                            <div className={classes.contractsBtn}><div>Buy</div></div>
                                            <div className={classes.assetBtn}><div>Asset</div></div>
                                        </div> : ''
                                }
                                <div className={artWorkHover ? classes.hoveredArtworkImg : classes.artworkImg} style={{
                                    // backgroundImage: `url(${artwork.assetImage})`,
                                    backgroundImage: `url(/images/starryNight.png)`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}/>
                                <div className={classes.sellCardBottomSec}>
                                    <div className={classes.artworkName}>
                                        {/*{artwork.name}*/}
                                        Starry Night
                                    </div>
                                    <div className={classes.artworkTokens}>
                                        <span>4 ETH</span> <div>sale price</div>
                                    </div>
                                </div>
                            </div>


                    </div>
                </div>
            </BuyerTabPanel>
        </Box>
    );
}
