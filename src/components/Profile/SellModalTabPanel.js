import * as React from 'react';
import classes from "../../styles/Profile/SellModal/SellModal.module.scss";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {createTheme, useTheme} from '@mui/material/styles';
import {Button, Checkbox, TextField, useMediaQuery} from "@mui/material";
import calculateDecimalPrecision from "../../functions/calculateDecimalPrecision";
import {useState} from "react";
import {useRouter} from "next/router";

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

export default function BasicTabs({setOpen}) {
    const [value, setValue] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [price, setPrice] = useState('');

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    };
    const inputHandler = (event) => {
        if(!isNaN(event.target.value)){
            setPrice(event.target.value)
        }
    }
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return (
        <Box className={classes.tabBox} sx={{width: '100%'}}>
            <Box className={classes.table} sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} style={{width: '100%'}}
                      TabIndicatorProps={{style: {background: '#232323'}}} textColor="secondary"
                      indicatorColor="secondary" aria-label="basic tabs example">
                    <Tab className={classes.tabTitles} label="Fix Price" {...a11yProps(0)} />
                    <Tab className={classes.tabTitles} label='Auction' {...a11yProps(1)} />
                    <div className={classes.closeVector} onClick={() => setOpen(false)}>
                        <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                    </div>
                </Tabs>
            </Box>
            <ProfileTabPanel value={value} index={0}>
                <div className={classes.fixPriceSec}>
                    <div className={classes.imageSec}>
                        <img src="/images/starry-night-main.png" alt=""/>
                        <div className={classes.desSec}>
                            <div className={classes.assetName}>
                                Starry Night
                            </div>
                            <div className={classes.lastPriceSec}>
                                <div>Last Price</div>
                                <div className={classes.lastPrice}>4.5 ETH</div>
                            </div>

                            <div className={classes.priceSec}>
                                <div>Your Price</div>
                                <div className={classes.lastPrice}>
                                    <TextField className={price ? classes.orangeInput : classes.input} value={price} onChange={inputHandler}>

                                    </TextField>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.textSec}>
                        <div className={classes.title}>fee</div>
                        <div className={classes.note}>As the time of the sale the following fee will be deducted from
                            your profit of this sell
                        </div>
                        <div className={classes.toWhereSec}>
                            <div>To hamijoo</div>
                            <hr/>
                            <div>2.5 % of offer</div>
                        </div>
                        <div className={classes.checkBoxSec}>
                            <Checkbox
                                checked={isChecked}
                                onChange={handleCheckBox}
                                classes={{checked:classes.checked}}
                                inputProps={{'aria-label': 'controlled'}}
                            />
                            <div>Do you agree with our <span onClick={()=> router.push('/terms-and-conditions')}>Terms and Conditions</span></div>
                        </div>
                        <div className={classes.buttonSec}>
                            <Button variant='contained' className={isChecked && price ? classes.btn : classes.disabledBtn}>
                                Post Your Listing
                            </Button>
                        </div>
                    </div>
                </div>
            </ProfileTabPanel>
            <ProfileTabPanel value={value} index={1}>
                <div className={classes.auctionSec}>

                </div>
            </ProfileTabPanel>
        </Box>
    );
}
