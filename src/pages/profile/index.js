import classes from '../../styles/Profile/Profile.module.scss'
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import ProfileTabPanel from "../../components/Profile/ProfileTabPanel";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import * as React from "react";
import HistoryModal from "../../components/ShowAsset/HistoryModal";


export default function Profile() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        const body = document.getElementsByTagName('body')[0]
        body.style.backgroundColor = '#E5E5E5'
        body.style.backgroundImage = 'none'
    }, [])


    return (
        <>
            <EditProfileModal open={openModal} setOpen={setOpenModal}/>
            <div className={classes.profileMain}>
                <div className={classes.leftSec}>
                    {!matches ?
                        <>
                            <div className={classes.editProfileSec} onClick={() => setOpenModal(true)}>
                                Edit Profile
                            </div>
                            <img className={classes.profileImg} src="/icons/profile-icon.svg" alt=""/>
                            <div className={classes.profileName}>
                                Unknown
                            </div>
                            <div className={classes.walletAddressSec}>
                                <div className={classes.walletAddress}>
                                    0we6...245rb
                                </div>
                                <img className={classes.copyImg} src="/icons/copy-icon.svg" alt=""/>
                                <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                            </div>
                            <div className={classes.valueTxt}>
                                The value of your account
                            </div>
                            <div className={classes.valueSec}>
                                <div className={classes.valueNum}>
                                    8.664
                                </div>
                                <div className={classes.ethTxt}>
                                    ETH
                                </div>
                            </div>
                        </>
                        :
                        <>
                            {/*<div className={classes.editProfileSec}>*/}
                            {/*    Edit Profile*/}
                            {/*</div>*/}a
                            <div className={classes.profileImgSecMob}>
                                <img className={classes.profileImg} src="/icons/profile-icon.svg" alt=""/>
                                <div className={classes.profileName}>
                                    Unknown
                                </div>
                            </div>
                            <div className={classes.detailSecMob}>
                                <div className={classes.walletAddressSec}>
                                    <div className={classes.walletAddress}>
                                        0we6...245rb
                                    </div>
                                    <img className={classes.copyImg} src="/icons/copy-icon.svg" alt=""/>
                                    <img className={classes.linkOutImg} src="icons/link-out.svg" alt=""/>
                                </div>
                                <div className={classes.valueTxt}>
                                    The value of your account
                                </div>
                                <div className={classes.valueSec}>
                                    <div className={classes.valueNum}>
                                        8.664
                                    </div>
                                    <div className={classes.ethTxt}>
                                        ETH
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                </div>
                <div className={classes.rightSec}>
                    <ProfileTabPanel/>
                </div>
            </div>
        </>
    )

}