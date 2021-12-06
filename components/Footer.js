import classes from '../styles/Footer.module.scss'
import {Button} from "@mui/material";
import Head from "next/head";


export default function Footer() {

    return <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className={classes.footerMain}>
            <div className={classes.registerText}>
                Register to our newsletter
            </div>
            <div className={classes.emailSec}>
                <input className={classes.emailInput} type="text" placeholder='Email Address'/>
                <Button className={classes.registerBtn} >Register</Button>
            </div>
            <div className={classes.dividingLine}>
            </div>
            <div className={classes.linksMainSec}>
                <div className={classes.logoSec}>
                    LOGO
                </div>
                <div className={classes.linksSec}>
                    <div className={classes.linkTitle}>
                        Support
                    </div>
                    <div className={classes.linkSubtitle}>
                        Contact Us
                    </div>
                    <div className={classes.linkSubtitle}>
                        About Us
                    </div>
                    <div className={classes.linkSubtitle}>
                        FAQ
                    </div>
                </div>
                <div className={classes.linksSec}>
                    <div className={classes.linkTitle}>
                        Legal
                    </div>
                    <div className={classes.linkSubtitle}>
                        Terms of Service
                    </div>
                    <div className={classes.linkSubtitle}>
                        Privacy Policy
                    </div>
                </div>
            </div>
            <div className={classes.socialMediaSec}>
                <img className={classes.instagramIcon} src="/icons/instagram.svg" alt=""/>
                <img className={classes.linkedInIcon} src="/icons/linkedIn.svg" alt=""/>
                <img className={classes.telegramIcon} src="/icons/telegram.svg" alt=""/>
                <img className={classes.twitterIcon} src="/icons/twitter.svg" alt=""/>

            </div>
        </div>
    </>
}