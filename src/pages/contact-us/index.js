import classes from '../../styles/ContactUs/contactUs.module.scss'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import Button from '@mui/material/Button';

import {useEffect} from "react";

export default function ContactUs({galleries}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
    }, [])

    return (
        <>

            <div className={classes.root}>
                <div
                    style={{paddingLeft:'24px',paddingRight: '24px'}}
                >
                    <div className={classes.contactUs}>CONTACT US</div>
                    <div className={classes.howCan}>How can we help you?</div>
                    <div className={classes.fill}>Fill in the form or drop an email for us </div>
                    <div className={classes.box1}>
                        <div className={classes.sec1}>
                            <div className={classes.email}>have you any question or problems?</div>
                            <a href = "mailto:contact@atoshin.com"><div className={classes.emailC}>contact@atoshin.com</div></a>
                        </div>
                        <div className={classes.sec2}>
                            <img className={classes.emailIcon} src="/icons/email.svg" alt=""/>
                        </div>
                    </div>

                    <div className={classes.box1}>
                        <div className={classes.sec1}>
                            <div className={classes.email}>want to show your museum or gallery in Atoshin?</div>
                            {/*<div className={classes.emailC}>joinus@atoshin.art</div>*/}
                            <a href = "mailto:joinus@atoshin.art"><div className={classes.emailC}>joinus@atoshin.art</div></a>
                        </div>
                        <div className={classes.sec2}>
                            <img className={classes.emailIcon} src="/icons/email.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.tableBox}>
                        {/*<div className={classes.name1}>*/}
                        {/*    <div className={classes.innerBox}>Name</div>*/}
                        {/*</div>*/}
                        <input type="text" className={classes.name1} placeholder='Name'/>
                        {/*<div className={classes.name}>*/}
                        {/*    <div className={classes.innerBox}>Email</div>*/}
                        {/*</div>*/}
                        <input type="text" className={classes.name} placeholder='Email'/>

                        <input type="text" className={classes.name} placeholder='Subject'/>

                        {/*<div className={classes.name} style={{height:124, display: 'block'}}>*/}
                        {/*    <div className={classes.innerBox} >Message</div>*/}
                        {/*</div>*/}
                        <input type="text"  className={classes.message} placeholder='Message'/>

                        <Button variant="contained" className={classes.submit}>
                            <span style={{textTransform: 'upperCase'}}>S</span>ubmit
                        </Button>
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