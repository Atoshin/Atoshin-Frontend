import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import classes from "./../../styles/BuyerProfile/Modal.module.scss";
import * as React from "react";
import {Button, Checkbox, MenuItem, Select, TextField, useMediaQuery} from "@mui/material";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";
import {useRouter} from "next/router";


export default function MakeOfferModal({open, setOpen}) {
    const [value, setValue] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [price, setPrice] = useState('');
    const [offerTime, setOfferTime] = useState('');
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();
    const handleClose = () => {
        setOpen(false)
    }
    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    };
    const inputHandler = (event) => {
        if (!isNaN(event.target.value)) {
            setPrice(event.target.value)
        }
    }
    const handleChange = (event) => {
        // if (!isNaN(event.target.value)) {
            setOfferTime(String(event.target.value))
            console.log(String(event.target.value))
        // }
    }
    const offerTimeHandler = (event) => {
        if (!isNaN(event.target.value)) {
            setOfferTime(event.target.value)
        }
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 'unset',
        // maxWidth: 681,
        // height: 477,
        bgcolor: 'background.paper',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className={classes.box}>
                        <div className={classes.modalMainSec}>
                            {/*<div className={classes.modalMain}>*/}
                            {/*<div className={classes.closeVector} onClick={handleClose}>*/}
                            {/*    <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>*/}
                            {/*</div>*/}
                            <div className={classes.processModalHeader}>
                                <div className={classes.loadingNote}>
                                    Make Offer
                                </div>
                                <div className={classes.closeVector} onClick={handleClose}>
                                    <img className={classes.vectorX} src="/icons/vector-X.png" alt=""/>
                                </div>
                            </div>
                            <div className={classes.fixPriceSec}>
                                <div className={classes.imageSec}>
                                    <img src="/images/starry-night-main.png" alt=""/>
                                    <div className={classes.desSec}>
                                        <div className={classes.assetName}>
                                            Starry Night
                                        </div>
                                        <div className={classes.lastPriceSec}>
                                            <div>Last Offer</div>
                                            <div className={classes.lastPrice}>4.5 ETH</div>
                                        </div>

                                        <div className={classes.priceSec}>
                                            <div>Your Offer</div>
                                            <div className={classes.price}>
                                                <input className={price ? classes.orangeInput : classes.input}
                                                       value={price} onChange={inputHandler}>

                                                </input>
                                            </div>
                                        </div>

                                        <div className={classes.offerSec}>
                                            <div>Offer Last for</div>
                                            <div className={classes.price}>

                                                {/*<select id="cars" name="carlist" form="carform" className={classes.select}>*/}
                                                {/*    <option value="volvo">Volvo</option>*/}
                                                {/*    <option value="saab">Saab</option>*/}
                                                {/*    <option value="opel">Opel</option>*/}
                                                {/*    <option value="audi">Audi</option>*/}
                                                {/*</select>*/}


                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    variant="outlined"
                                                    value={offerTime}
                                                    // label="Age"
                                                    InputLabelProps={{shrink: false}}
                                                    onChange={handleChange}
                                                    className={offerTime ? classes.orangeSelect : classes.select}
                                                    // sx={{
                                                    //     '& .MuiOutlinedInput-notchedOutline':{
                                                    //         borderColor:'#FD6108 ',
                                                    //     },
                                                    //     // // .css-gyyl3k-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline
                                                    //     // '& .MuiInputBase-root-MuiOutlinedInput-root.focused .MuiOutlinedInput-notchedOutline' :{
                                                    //     //     borderColor:'#000000 ',
                                                    //     // }
                                                    // }}
                                                >
                                                    <MenuItem value={'1'} classes={{root:classes.menuItem}}>1 Day</MenuItem>
                                                    <MenuItem value={'1W'} classes={{root:classes.menuItem}}>1 Week</MenuItem>
                                                    <MenuItem value={'1M'} classes={{root:classes.lastMenuItem}}>1 Month</MenuItem>
                                                </Select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={classes.textSec}>
                                    <div className={classes.title}>fee</div>
                                    <div className={classes.note}>Commission fee will deducted form your wallet after you send your offer
                                    </div>
                                    <div className={classes.toWhereSec}>
                                        <div>To hamijoo</div>
                                        <hr/>
                                        <div className={classes.offer}>0.01 ETH</div>
                                    </div>
                                    <div className={classes.checkBoxSec}>
                                        <Checkbox
                                            checked={isChecked}
                                            onChange={handleCheckBox}
                                            className={classes.checkBox}
                                            classes={{checked: classes.checked}}
                                            inputProps={{'aria-label': 'controlled'}}
                                        />
                                        <div>Do you agree with our <span
                                            onClick={() => router.push('/terms-and-conditions')}>Terms and Conditions</span>
                                        </div>
                                    </div>
                                    <div className={classes.buttonSec}>
                                        <Button variant='contained'
                                                className={isChecked && price && offerTime ? classes.btn : classes.disabledBtn}>
                                            Send Your Offer
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/*</div>*/}
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}