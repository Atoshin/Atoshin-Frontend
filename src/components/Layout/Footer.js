import classes from '../../styles/Footer/Footer.module.scss'
import {Button, CircularProgress, useMediaQuery} from "@mui/material";
import Head from "next/head";
import {useTheme} from "@mui/material/styles";
import Link from 'next/link';
import {useState} from "react";
import axios from "axios";

export default function Footer() {
    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const submit = () => {
        setLoading(true)
        axios.post('/api/newsletter', {
            email: state
        }).then(r => {
            setLoading(false)
        }).catch(e => {
            setLoading(false)
        })
    }

    return <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <div className={classes.footerMain}>
            <div className={classes.registerText}>
                Register to our newsletter
            </div>
            <div className={classes.emailSec}>
                <input onChange={e => setState(e.target.value)} value={state} className={classes.emailInput} type="text"
                       placeholder='Email Address'/>
                <Button onClick={submit} className={classes.registerBtn}>{loading ?
                    <CircularProgress size={20} style={{color: "black"}}/> : 'Register'}</Button>
            </div>
            <div className={classes.dividingLine}>
            </div>
            <div className={classes.linksMainSec}>
                {/*{matches ?*/}
                {/*    <div className={classes.logoSec}>*/}
                {/*        <img className={classes.logoSec} src="/images/atoshin-logo-typography-white.svg" alt=""/>*/}
                {/*    </div>*/}
                {/*    :*/}
                {/*    <div className={classes.logoSec}>*/}
                {/*        <img className={classes.logoSec} src="/images/atoshin-logo-white.svg" alt=""/>*/}
                {/*    </div>*/}
                {/*}*/}

                {/*<div className={classes.logoSec}>*/}
                {/*    <img className={classes.logoSec} src="/images/atoshin-logo-white.svg" alt=""/>*/}
                {/*</div>*/}


                <div className={classes.logoSec}>
                    <img className={classes.logoSec} src="/images/atoshin-logo-hexagon-white.svg" alt=""/>
                </div>


                <div className={classes.linksSec}>
                    <div className={classes.linkTitle}>
                        Support
                    </div>
                    <div className={classes.linkSubtitle}>
                        <Link href={'/contact-us'}>
                            Contact Us
                        </Link>
                    </div>
                    <div className={classes.linkSubtitle}>
                        <Link href={'/about-us'}>
                        About Us
                        </Link>
                    </div>
                    <div className={classes.linkSubtitle}>
                        <Link href={'/faq'}>
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className={classes.linksSec}>
                    <div className={classes.linkTitle}>
                        Legal
                    </div>
                    <div className={classes.linkSubtitle}>
                        <Link href={'/terms-and-conditions'}>
                            Terms of Service
                        </Link>
                    </div>
                    <div className={classes.linkSubtitle}>
                        <Link href={'/privacy-policy'}>
                            Privacy Policy
                        </Link>
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