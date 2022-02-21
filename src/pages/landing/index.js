import classes from '../../styles/landing/Landing.module.scss'
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import * as React from "react";


export default function Landing() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <video className={classes.bgVideo} width="500" autoPlay muted loop id="myVideo">
                <source src="/videos/landing-intro.webm"
                        type="video/webm"/>
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