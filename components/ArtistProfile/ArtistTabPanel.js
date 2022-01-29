import * as React from 'react';
import classes from "../../styles/ArtistProfile/ArtistTabPanel/ArtistTabPanel.module.scss";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArtworkImages from "./ArtworkImages";
import {createTheme, useTheme} from '@mui/material/styles';
import {useMediaQuery} from "@mui/material";


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
                <Box sx={{p: 3}}>
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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{width: '100%'}}>
            <Box className={classes.table} sx={{borderBottom: 1, borderColor: 'divider', marginTop: '125px',}}>
                <Tabs value={value} onChange={handleChange} style={{width: '100%'}}
                      TabIndicatorProps={{style: {background: '#232323'}}} textColor="secondary"
                      indicatorColor="secondary" aria-label="basic tabs example">
                    <Tab className={classes.tabTitles} label="Biography" {...a11yProps(0)} />
                    <Tab className={classes.tabTitles} label="Artworks" {...a11yProps(1)} />
                    <Tab className={classes.tabTitles} label="Auctions" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <ArtistTabPanel value={value} index={0}>
                <div className={classes.bioSec}>
                    Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast
                    of Iran. He grew up in a great black tent on the top of a mountain, among horses and fields of
                    blue and yellow wild flowers. Reza moved from the study of constellations of light made by
                    moonlight shining through tiny holes in the tent to the study of mathematics in high school, and
                    visual arts in Tehran and the U.S.
                    The long and circuitous road of Derakshani’s artistic and geographic migration eventually found
                    him in New York City, where he made a home and worked for sixteen years. He later moved to
                    Italy, eventually returning to Tehran for seven years before leaving his homeland once again in
                    2010 and settling in Dubai. He moved back to USA a few years later.
                    Derakshani currently lives and works between Austin USA and St Petersburg Russiaz
                    Reza Derakshani’s first solo show at the age of nineteen was held at the renowned Ghandriz Art
                    Gallery in Tehran. Following this auspicious debut, he participated in many group and solo
                    exhibits at other leading art galleries. His work has been widely exhibited and collected
                    internationally.
                    Derakshani’s passion for beauty and his nuanced perception of the light and dark of the world
                    has found expression in many different forms, from music, graphic design, book illustration,
                    film animation and calligraphy to studies in traditional and western classical visual arts. Yet
                    it is within contemporary painting that he has experienced true liberation and fulfillment as an
                    artist. The challenging techniques, innovation and mental stimulation inherent to contemporary
                    art have led him to create a meditative solitude that results in pure freedom of
                    self-expression. Reza’s work, known for its diversity and originality, has gained recognition
                    for its fearless exploration of form and style, and the skill and vision necessary to merge an
                    unbending tradition with a wild contemporary spirit.
                    A vocalist, multi-instrumentalist, composer and performer, Derakshani does not limit his musical
                    journey to giving concerts, but joins his music with his visual art. Reza’s music serves as a
                    compliment to his art at many of his openings, in the form of performance that calls to mind
                    painting with sounds.

                </div>
            </ArtistTabPanel>
            <ArtistTabPanel value={value} index={1}>
                <div className={classes.artworkSec}>
                    <ArtworkImages/>
                </div>
            </ArtistTabPanel>
            <ArtistTabPanel value={value} index={2}>
                <div className={classes.auctionMainSec}>
                    <div className={classes.auctionRow}>
                        <div className={classes.leftSec}>
                            {!matches &&
                            <img className={classes.auctionImg} src="/images/img_10.png" alt=""/>
                            }
                            {matches &&
                                <div className={classes.auctionImgMobSec}>
                                    <img className={classes.auctionImg} src="/images/img_10.png" alt=""/>
                                    <div className={classes.auctionArtDetail}>
                                        2018 | Spring Hunt
                                    </div>
                                    <div className={classes.auctionArtDetail}>
                                        99 × 78.7cm
                                    </div>
                                    <div className={classes.auctionArtDetail}>
                                        oil on canvas
                                    </div>
                                </div>

                            }
                            <div className={classes.auctionDetail}>
                                <div className={classes.auctionTitle}>
                                    Sporting Art Auction
                                </div>
                                <div className={classes.auctionDate}>
                                    21 Nov 2021
                                </div>
                                {matches &&
                                <div className={classes.rightSec}>
                                    <div className={classes.soldPrice}>
                                        Sold price: 24,000$
                                    </div>
                                    <div className={classes.auctionPriceDetails}>
                                        Estimates: 30,000 - 40,000$
                                    </div>
                                    <div className={classes.auctionPriceDetails}>
                                        Hammer price: 24,000$
                                    </div>
                                </div>
                                }
                                {!matches &&
                                <>
                                    <div className={classes.auctionArtDetail}>
                                        2018 | Spring Hunt
                                    </div>
                                    <div className={classes.auctionArtDetail}>
                                        99 × 78.7cm
                                    </div>
                                    <div className={classes.auctionArtDetail}>
                                        oil on canvas
                                    </div>
                                </>
                                }
                            </div>
                        </div>
                        {!matches &&
                        <div className={classes.rightSec}>
                            <div className={classes.soldPrice}>
                                Sold price: 24,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Estimates: 30,000 - 40,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Hammer price: 24,000$
                            </div>
                        </div>
                        }
                    </div>
                    <div className={classes.auctionRow}>
                        <div className={classes.leftSec}>
                            <img className={classes.auctionImg} src="/images/img_10.png" alt=""/>
                            <div className={classes.auctionDetail}>
                                <div className={classes.auctionTitle}>
                                    Sporting Art Auction
                                </div>
                                <div className={classes.auctionDate}>
                                    21 Nov 2021
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    2018 | Spring Hunt
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    99 × 78.7cm
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    oil on canvas
                                </div>
                            </div>
                        </div>
                        <div className={classes.rightSec}>
                            <div className={classes.soldPrice}>
                                Sold price: 24,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Estimates: 30,000 - 40,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Hammer price: 24,000$
                            </div>
                        </div>
                    </div>
                    <div className={classes.auctionRow}>
                        <div className={classes.leftSec}>
                            <img className={classes.auctionImg} src="/images/img_10.png" alt=""/>
                            <div className={classes.auctionDetail}>
                                <div className={classes.auctionTitle}>
                                    Sporting Art Auction
                                </div>
                                <div className={classes.auctionDate}>
                                    21 Nov 2021
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    2018 | Spring Hunt
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    99 × 78.7cm
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    oil on canvas
                                </div>
                            </div>
                        </div>
                        <div className={classes.rightSec}>
                            <div className={classes.soldPrice}>
                                Sold price: 24,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Estimates: 30,000 - 40,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Hammer price: 24,000$
                            </div>
                        </div>
                    </div>
                    <div className={classes.auctionRow}>
                        <div className={classes.leftSec}>
                            <img className={classes.auctionImg} src="/images/img_10.png" alt=""/>
                            <div className={classes.auctionDetail}>
                                <div className={classes.auctionTitle}>
                                    Sporting Art Auction
                                </div>
                                <div className={classes.auctionDate}>
                                    21 Nov 2021
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    2018 | Spring Hunt
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    99 × 78.7cm
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    oil on canvas
                                </div>
                            </div>
                        </div>
                        <div className={classes.rightSec}>
                            <div className={classes.soldPrice}>
                                Sold price: 24,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Estimates: 30,000 - 40,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Hammer price: 24,000$
                            </div>
                        </div>
                    </div>
                    <div className={classes.auctionRow}>
                        <div className={classes.leftSec}>
                            <img className={classes.auctionImg} src="/images/img_10.png" alt=""/>
                            <div className={classes.auctionDetail}>
                                <div className={classes.auctionTitle}>
                                    Sporting Art Auction
                                </div>
                                <div className={classes.auctionDate}>
                                    21 Nov 2021
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    2018 | Spring Hunt
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    99 × 78.7cm
                                </div>
                                <div className={classes.auctionArtDetail}>
                                    oil on canvas
                                </div>
                            </div>
                        </div>
                        <div className={classes.rightSec}>
                            <div className={classes.soldPrice}>
                                Sold price: 24,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Estimates: 30,000 - 40,000$
                            </div>
                            <div className={classes.auctionPriceDetails}>
                                Hammer price: 24,000$
                            </div>
                        </div>
                    </div>
                </div>
            </ArtistTabPanel>
        </Box>
    );
}
