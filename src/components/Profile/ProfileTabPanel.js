import * as React from 'react';
import classes from "../../styles/Profile/ProfileTabPanel/ProfileTabPanel.module.scss";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {createTheme, useTheme} from '@mui/material/styles';
import {useMediaQuery} from "@mui/material";


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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
                        <div className={classes.artworkCard}>
                            <img className={classes.artworkImg} src="/images/img_11.png" alt=""/>
                            <div className={classes.cardBottomSec}>
                                <div className={classes.artworkName}>
                                    Starry Night
                                </div>
                                <div className={classes.artworkTokens}>
                                    2 Tokens
                                </div>
                            </div>
                        </div>
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
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>
                            <div className={classes.indexRowSec}>
                                <div className={classes.itemsSec}>
                                    <img className={classes.smallImg} src="/images/img_12.png" alt=""/>
                                    <div className={classes.artworkNameIndex}>
                                        Starry Night
                                    </div>
                                </div>
                                <div className={classes.statusSec}>
                                    Sold
                                </div>
                                <div className={classes.dateSec}>
                                    Dec 23, 2021
                                </div>
                                <div className={classes.transactionSec}>
                                    4.6 ETH
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </ProfileTabPanel>
        </Box>
    );
}
