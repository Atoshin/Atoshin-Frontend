import classes from '../../styles/landing/Landing.module.scss'
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import ProfileTabPanel from "../../components/Profile/ProfileTabPanel";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import * as React from "react";
import HistoryModal from "../../components/ShowAsset/HistoryModal";
import axios from "axios";
import Web3 from "web3";
import {selectAddress, selectBalance, setAddress, setBalance} from "../../redux/slices/accountSlice";
import {ethers} from "ethers";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import Youtube from 'react-youtube';


export default function Profile() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <video className={classes.bgVideo} autoPlay muted loop id="myVideo">
                <source src="https://mastercard-a.akamaihd.net/videos/RSA_Header_video_1080p_new.mp4?autoplay=1"
                        type="video/mp4"/>
            </video>
            <img className={classes.topLogo} src="/images/atoshin-logo-typography-white.svg" alt=""/>
            <img className={classes.midLogo} src="/images/atoshin-logo-hexagon-white.svg" alt=""/>
            <div className={classes.midText}>
                Increases Access And Enables New Communities
            </div>
            <img className={classes.vector} src="/icons/vector-down.svg" alt=""/>
        </>
    )
}