import classes from '../../styles/contactUs/contactUs.module.scss'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import axios from "axios";
import shortenWords from "../../functions/shortenWords";
import Link from 'next/link';

export default function contactUs({galleries}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>

            <div className={classes.root}>
                <div>
                    <div className={classes.contactUs}>CONTACT US</div>
                    <div className={classes.howCan}>How can we help you?</div>
                    <div className={classes.fill}>Fill in the form or drop an email for us</div>
                    <div className={classes.box1}>
                        <div className={classes.sec1}>
                            <div className={classes.email}>Email</div>
                            <div className={classes.emailC}>contact@atoshin.com</div>
                        </div>
                        <div className={classes.sec2}><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.963855C0 0.431533 0.431131 0 0.962959 0H25.0369C25.5688 0 25.9999 0.431533 25.9999 0.963855V10C25.9999 10.5323 25.5688 10.9639 25.0369 10.9639C24.5051 10.9639 24.074 10.5323 24.074 10V1.92771H1.92592V18.0723H12.9999C13.5318 18.0723 13.9629 18.5038 13.9629 19.0361C13.9629 19.5685 13.5318 20 12.9999 20H0.962959C0.431131 20 0 19.5685 0 19.0361V0.963855ZM21.3468 12.3305C21.7228 11.9541 22.3325 11.9541 22.7086 12.3305L25.7178 15.3425C26.0939 15.719 26.0939 16.3292 25.7178 16.7056L22.7086 19.7177C22.3325 20.0941 21.7228 20.0941 21.3468 19.7177C20.9707 19.3413 20.9707 18.731 21.3468 18.3546L22.7121 16.988H16.611C16.0792 16.988 15.6481 16.5564 15.6481 16.0241C15.6481 15.4918 16.0792 15.0602 16.611 15.0602H22.7121L21.3468 13.6936C20.9707 13.3172 20.9707 12.7069 21.3468 12.3305Z" fill="#808080"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.tableBox}>
                        <div className={classes.name1}>
                            <div className={classes.innerBox}>Name</div>
                        </div>
                        <div className={classes.name}>
                            <div className={classes.innerBox}>Email</div>
                        </div>
                        <div className={classes.name}>
                            <div className={classes.innerBox}>Subject</div>
                        </div>
                        <div className={classes.name}>
                            <div className={classes.innerBox}>Message</div>
                        </div>
                        <div className={classes.submit}>
                            Submit
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps(ctx) {
//
//     const {data: {galleries}} = await axios.get(`${process.env.BASE_URL}/api/art-center/list`)
//
//
//     return {
//         props: {
//             galleries
//         }
//     }
// }