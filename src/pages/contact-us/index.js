import classes from '../../styles/ContactUs/contactUs.module.scss'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useEffect} from "react";

export default function contactUs({galleries}) {

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
                    <div className={classes.fill}>Fill in the form or drop us an email </div>
                    <div className={classes.box1}>
                        <div className={classes.sec1}>
                            <div className={classes.email}>Email</div>
                            <div className={classes.emailC}>contact@atoshin.com</div>
                        </div>
                        <div className={classes.sec2}>
                            <img src="/icons/email-icon.svg" alt=""/>
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
                        <div className={classes.name} style={{height:124, display: 'block'}}>
                            <div className={classes.innerBox} >Message</div>
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