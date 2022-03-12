import * as React from 'react';
import classes from "../../styles/Profile/ProfileTabPanel/ProfileTabPanel.module.scss";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {createTheme, useTheme} from '@mui/material/styles';
import {useMediaQuery} from "@mui/material";
import calculateDecimalPrecision from "../../functions/calculateDecimalPrecision";
import {useState} from "react";
import ArtWork from "./ArtWork";

function ProfileTabPanel(props) {
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

ProfileTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({artworks, history}) {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return (
        <Box sx={{width: '100%'}}>
            <Box className={classes.table} sx={{borderBottom: 1, borderColor: 'divider',}}>
                <Tabs value={value} onChange={handleChange} style={{width: '100%'}}
                      TabIndicatorProps={{style: {background: '#232323'}}} textColor="secondary"
                      indicatorColor="secondary" aria-label="basic tabs example">
                    <Tab className={classes.tabTitles} label="Artworks" {...a11yProps(0)} />
                    <Tab className={classes.tabTitles} label="History" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <ProfileTabPanel value={value} index={0}>
                <div className={classes.profileBoxArtwork}>
                    <div className={classes.artworkSec}>
                        {artworks.map((artwork, idx) => {
                            return <ArtWork artwork={artwork} key={idx}/>
                        })}
                        {/*<div  className={artWorkHover ? classes.hoveredArtworkCard : classes.artworkCard}*/}
                        {/*     onMouseEnter={artWorkMouseOver}*/}
                        {/*     onMouseLeave={artWorkMouseLeave}>*/}
                        {/*    {*/}
                        {/*        artWorkHover === true ?*/}
                        {/*            <div className={classes.hoveredArtworkBackground}>*/}
                        {/*                <div className={classes.contractsBtn}>*/}
                        {/*                    <div>Contracts</div>*/}
                        {/*                </div>*/}
                        {/*                /!*<div className={classes.assetBtn}>*!/*/}
                        {/*                /!*    <div>Asset</div>*!/*/}
                        {/*                /!*</div>*!/*/}
                        {/*            </div> : ''*/}
                        {/*    }*/}
                        {/*    <div className={artWorkHover === true ? classes.hoveredArtworkImg : classes.artworkImg} style={{*/}
                        {/*        backgroundImage: `url(images/dd-gallery1.jpg)`,*/}
                        {/*        backgroundPosition: "center",*/}
                        {/*        backgroundSize: "cover"*/}
                        {/*    }}/>*/}
                        {/*    <div className={classes.cardBottomSec}>*/}
                        {/*        <div className={classes.artworkName}>*/}
                        {/*            /!*{artwork.name}*!/*/}
                        {/*            1111*/}
                        {/*        </div>*/}
                        {/*        /!*<div className={classes.artworkTokens}>*!/*/}
                        {/*        /!*</div>*!/*/}
                        {/*    </div>*/}
                        {/*</div>*/}



                        {/*{artworks.map((artwork, idx) => {*/}
                        {/*    return <div key={idx} className={artWorkHover ? classes.hoveredArtworkCard : classes.artworkCard}*/}
                        {/*                onMouseEnter={artWorkMouseOver}*/}
                        {/*                onMouseLeave={artWorkMouseLeave}>*/}
                        {/*        {*/}
                        {/*            artWorkHover === true ?*/}
                        {/*                <div className={classes.hoveredArtworkBackground}>*/}
                        {/*                    <div className={classes.contractsBtn}><div>Contracts</div></div>*/}
                        {/*                    <div className={classes.assetBtn}><div>Asset</div></div>*/}
                        {/*                </div> : ''*/}
                        {/*        }*/}
                        {/*        <div className={classes.artworkImg} style={{*/}
                        {/*            backgroundImage: `url(${artwork.assetImage})`,*/}
                        {/*            backgroundPosition: "center",*/}
                        {/*            backgroundSize: "cover"*/}
                        {/*        }}/>*/}
                        {/*        <div className={classes.cardBottomSec}>*/}
                        {/*            <div className={classes.artworkName}>*/}
                        {/*                {artwork.name}*/}
                        {/*            </div>*/}
                        {/*            /!*<div className={classes.artworkTokens}>*!/*/}
                        {/*            /!*</div>*!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*})}*/}
                    </div>
                </div>
            </ProfileTabPanel>
            <ProfileTabPanel value={value} index={1}>
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
                            <div className={classes.historyRowSec}>
                                {history.txns.map((txn, idx) => {
                                    return <div key={idx} className={classes.indexRowSec}>
                                        <div className={classes.itemsSec}>
                                            <div className={classes.smallImg} style={{
                                                backgroundImage: `url(${history.assets[idx].medias.find(media => media.main === 1).url})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover"
                                            }}/>
                                            <div className={classes.artworkNameIndex}>
                                                {history.assets[idx].title}
                                            </div>
                                        </div>
                                        <div className={classes.statusSec}>
                                            Sold
                                        </div>
                                        <div className={classes.dateSec}>
                                            {monthNames[new Date(txn.createdAt).getMonth()]} {new Date(txn.createdAt).getDate()}, {new Date(txn.createdAt).getFullYear()}
                                        </div>
                                        <div className={classes.transactionSec}>
                                            {calculateDecimalPrecision(history.assets[idx].ethPricePerFraction * txn.tokenQuantity, 3) + ' ETH'}
                                        </div>
                                    </div>
                                })}
                                {/*<div className={classes.indexRowSec}>*/}
                                {/*    <div className={classes.itemsSec}>*/}
                                {/*        <div className={classes.smallImg} style={{*/}
                                {/*            backgroundImage: `url(${history.assets[idx].medias.find(media => media.main === 1).url})`,*/}
                                {/*            backgroundPosition: "center",*/}
                                {/*            backgroundSize: "cover"*/}
                                {/*        }}/>*/}
                                {/*        <div className={classes.artworkNameIndex}>*/}
                                {/*            {history.assets[idx].title}*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className={classes.statusSec}>*/}
                                {/*        Sold*/}
                                {/*    </div>*/}
                                {/*    <div className={classes.dateSec}>*/}
                                {/*        {monthNames[new Date(txn.createdAt).getMonth()]} {new Date(txn.createdAt).getDate()}, {new Date(txn.createdAt).getFullYear()}*/}
                                {/*    </div>*/}
                                {/*    <div className={classes.transactionSec}>*/}
                                {/*        {calculateDecimalPrecision(history.assets[idx].ethPricePerFraction * txn.tokenQuantity, 3) + ' ETH'}*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileTabPanel>
        </Box>
    );
}
