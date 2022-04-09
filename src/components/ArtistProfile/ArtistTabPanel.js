import * as React from 'react';
import classes from "../../styles/ArtistProfile/ArtistTabPanel/ArtistTabPanel.module.scss";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArtworkImages from "./ArtworksGridGallery";
import {createTheme, useTheme} from '@mui/material/styles';
import {useMediaQuery} from "@mui/material";
import addCommas from "../../functions/addCommas";


function ArtistTabPanel(props) {
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
                <Box sx={{p: 3}} className={classes.boxMob}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

ArtistTabPanel.propTypes = {
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

export default function BasicTabs({artist}) {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{width: '100%'}}>
            <Box className={classes.table} sx={{borderBottom: 2, borderColor: '#A7A7A7', marginTop: '125px'}}>
                <Tabs value={value} onChange={handleChange} style={{width: '100%'}}
                      TabIndicatorProps={{style: {background: '#232323'}}} textColor="secondary"
                      indicatorColor="secondary" aria-label="basic tabs example">
                    <Tab className={classes.tabTitles} label="Biography" {...a11yProps(0)} />
                    {
                        Object.keys(artist.medias).length  > 1 ?
                            <Tab className={classes.tabTitles} label="Artworks" {...a11yProps(1)} /> :
                            ''
                    }
                    {
                        Object.keys(artist.auctions).length > 1 ?
                            <Tab className={classes.tabTitles} label="Auctions" {...a11yProps(2)} /> :
                            ''
                    }
                </Tabs>
            </Box>
            <ArtistTabPanel value={value} index={0} className={classes.bioTab}>
                <div className={classes.bioSec} dangerouslySetInnerHTML={{__html: artist.bio}}/>
            </ArtistTabPanel>
            {
                Object.keys(artist.medias).length > 1 ?
                    <ArtistTabPanel value={value} index={1} className={classes.artworkTab}>
                        <div className={classes.artworkSec}>
                            <ArtworkImages artworks={artist.medias}/>
                        </div>
                    </ArtistTabPanel> : ''
            }
            {
                Object.keys(artist.auctions).length > 1 ?
                    <ArtistTabPanel value={value} index={2} className={classes.auctionTab}>
                        <div className={classes.auctionMainSec}>
                            {artist.auctions.map((auction, idx) => {
                                if (parseInt(Object.keys(artist.auctions)[Object.keys(artist.auctions).length - 1]) === idx) {
                                    return <div key={idx} className={classes.lastAuctionRow}>
                                        <div className={classes.leftSec}>
                                            {!matches &&
                                            <div style={{
                                                backgroundImage: `url("${auction.medias && auction.medias.url}")`,
                                                width: '226px',
                                                height: '283px',
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundPosition: 'center'
                                            }}>
                                            </div>
                                            // <img className={classes.auctionImg} src={auction.medias && auction.medias.url}
                                            //      alt=""/>
                                            }
                                            {matches &&
                                            <div className={classes.auctionImgMobSec}>
                                                <div style={{
                                                    backgroundImage: `url("${auction.medias && auction.medias.url}")`,
                                                    width: '226px',
                                                    height: '283px',
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: 'center'
                                                }}>
                                                </div>
                                                {/*<img className={classes.auctionImg} src={auction.medias && auction.medias.url}*/}
                                                {/*     alt=""/>*/}
                                                <div className={classes.auctionArtDetail}>
                                                    {auction.assetName}
                                                </div>
                                                <div className={classes.auctionArtDetail}>
                                                    {auction.size}
                                                </div>
                                                <div className={classes.auctionArtDetail}>
                                                    {auction.material}
                                                </div>
                                            </div>

                                            }
                                            <div className={classes.auctionDetail}>
                                                <div className={classes.auctionTitle}>
                                                    {auction.auctionName}
                                                </div>
                                                <div className={classes.auctionDate}>
                                                    {auction.auctionDate}
                                                    {/*{new Date(auction.auctionDate).getDate() + ' ' + monthNames[new Date(auction.auctionDate).getMonth()] + ' ' + new Date(auction.auctionDate).getFullYear()}*/}
                                                </div>
                                                {matches &&
                                                <div className={classes.rightSec}>
                                                    <div className={classes.soldPrice}>
                                                        Sold price: {addCommas(auction.soldPrice)}
                                                    </div>
                                                    {/*<div className={classes.auctionPriceDetails}>*/}
                                                    {/*    Estimates: 30,000 - 40,000$*/}
                                                    {/*</div>*/}
                                                    {/*<div className={classes.auctionPriceDetails}>*/}
                                                    {/*    Hammer price: 24,000$*/}
                                                    {/*</div>*/}
                                                </div>
                                                }
                                                {!matches &&
                                                <>
                                                    <div className={classes.auctionArtDetail}>
                                                        {auction.assetName}
                                                    </div>
                                                    <div className={classes.auctionArtDetail}>
                                                        {auction.size}
                                                    </div>
                                                    <div className={classes.auctionArtDetail}>
                                                        {auction.material}
                                                    </div>
                                                </>
                                                }
                                            </div>
                                        </div>
                                        {!matches &&
                                        <div className={classes.rightSec}>
                                            <div className={classes.soldPrice}>
                                                Sold price: {addCommas(auction.soldPrice)}
                                            </div>
                                            {/*<div className={classes.auctionPriceDetails}>*/}
                                            {/*    Estimates: 30,000 - 40,000$*/}
                                            {/*</div>*/}
                                            {/*<div className={classes.auctionPriceDetails}>*/}
                                            {/*    Hammer price: 24,000$*/}
                                            {/*</div>*/}
                                        </div>
                                        }
                                    </div>
                                } else {
                                    return <div key={idx} className={classes.auctionRow}>
                                        <div className={classes.leftSec}>
                                            {!matches &&
                                            <div style={{
                                                backgroundImage: `url("${auction.medias && auction.medias.url}")`,
                                                width: '226px',
                                                height: '283px',
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundPosition: 'center'
                                            }}>
                                            </div>
                                            // <img className={classes.auctionImg} src={auction.medias && auction.medias.url}
                                            //      alt=""/>
                                            }
                                            {matches &&
                                            <div className={classes.auctionImgMobSec}>
                                                <div style={{
                                                    backgroundImage: `url("${auction.medias && auction.medias.url}")`,
                                                    width: '226px',
                                                    height: '283px',
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: 'center'
                                                }}>
                                                </div>
                                                {/*<img className={classes.auctionImg} src={auction.medias && auction.medias.url}*/}
                                                {/*     alt=""/>*/}
                                                <div className={classes.auctionArtDetail}>
                                                    {auction.assetName}
                                                </div>
                                                <div className={classes.auctionArtDetail}>
                                                    {auction.size}
                                                </div>
                                                <div className={classes.auctionArtDetail}>
                                                    {auction.material}
                                                </div>
                                            </div>

                                            }
                                            <div className={classes.auctionDetail}>
                                                <div className={classes.auctionTitle}>
                                                    {auction.auctionName}
                                                </div>
                                                <div className={classes.auctionDate}>
                                                    {auction.auctionDate}
                                                    {/*{new Date(auction.auctionDate).getDate() + ' ' + monthNames[new Date(auction.auctionDate).getMonth()] + ' ' + new Date(auction.auctionDate).getFullYear()}*/}
                                                </div>
                                                {matches &&
                                                <div className={classes.rightSec}>
                                                    <div className={classes.soldPrice}>
                                                        Sold price: {addCommas(auction.soldPrice)}
                                                    </div>
                                                    {/*<div className={classes.auctionPriceDetails}>*/}
                                                    {/*    Estimates: 30,000 - 40,000$*/}
                                                    {/*</div>*/}
                                                    {/*<div className={classes.auctionPriceDetails}>*/}
                                                    {/*    Hammer price: 24,000$*/}
                                                    {/*</div>*/}
                                                </div>
                                                }
                                                {!matches &&
                                                <>
                                                    <div className={classes.auctionArtDetail}>
                                                        {auction.assetName}
                                                    </div>
                                                    <div className={classes.auctionArtDetail}>
                                                        {auction.size}
                                                    </div>
                                                    <div className={classes.auctionArtDetail}>
                                                        {auction.material}
                                                    </div>
                                                </>
                                                }
                                            </div>
                                        </div>
                                        {!matches &&
                                        <div className={classes.rightSec}>
                                            <div className={classes.soldPrice}>
                                                Sold price: {addCommas(auction.soldPrice)}
                                            </div>
                                            {/*<div className={classes.auctionPriceDetails}>*/}
                                            {/*    Estimates: 30,000 - 40,000$*/}
                                            {/*</div>*/}
                                            {/*<div className={classes.auctionPriceDetails}>*/}
                                            {/*    Hammer price: 24,000$*/}
                                            {/*</div>*/}
                                        </div>
                                        }
                                    </div>
                                }
                            })}
                        </div>
                    </ArtistTabPanel> : ''
            }
        </Box>
    );
}
