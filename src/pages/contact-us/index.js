import classes from '../../styles/ContactUs/contactUs.module.scss'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import Head from "next/head";
import * as React from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
// import API from '../api/contact-us/index'

export default function ContactUs({galleries}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
    }, [])

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            setName(e.target.value);
        }
        if (e.target.id === 'email') {
            setEmail(e.target.value);
        }
        if (e.target.id === 'subject') {
            setSubject(e.target.value);
        }
        if (e.target.id === 'message') {
            setMessage(e.target.value);
        }
    }

    const submit = () => {
        if (name && email && subject && message) {
            // next_public
            // Api.Contact_us

            // axios.post('/api/contact-us', {
            //     'data': {
            //         'name': name,
            //         'email': email,
            //         'subject': subject,
            //         'message': message
            //     }
            // }).then(({data}) => {
            //     console.log(data);
            // }).catch((error) => {
            //     console.log(error)
            // });

            axios.post('/api/contact-us', {
                data: {
                    'name': name,
                    'email': email,
                    'subject': subject,
                    'message': message
                }
            }).then(({data}) => {
                console.log(data);
            }).catch((error) => {
                console.log(error)
            });
        }
    }
    // href="/static/favicon.ico"
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <div className={classes.root}>
                <div
                    style={{paddingLeft: '24px', paddingRight: '24px'}}
                >
                    <div className={classes.contactUs}>CONTACT US</div>
                    <div className={classes.howCan}>How can we help you?</div>
                    <div className={classes.fill}>Fill in the form or drop an email for us</div>


                    <a href="mailto:support@atoshin.art">
                        <div className={classes.box1}>
                            <div className={classes.sec1}>
                                <div className={classes.email}>have you any question or problems?</div>
                                <div className={classes.emailC}>
                                    support@atoshin.art
                                </div>
                                {/*</a>*/}
                            </div>
                            <div className={classes.sec2}>
                                <img className={classes.emailIcon} src="/icons/email.svg" alt=""/>
                            </div>
                        </div>
                    </a>

                    <a href="mailto:joinus@atoshin.art">
                        <div className={classes.box1}>
                            <div className={classes.sec1}>
                                <div className={classes.email}>want to show your museum or gallery in Atoshin?</div>
                                {/*<div className={classes.emailC}>joinus@atoshin.art</div>*/}
                                {/*<a href="mailto:joinus@atoshin.art">*/}
                                <div className={classes.emailC}>joinus@atoshin.art</div>
                                {/*</a>*/}
                            </div>
                            <div className={classes.sec2}>
                                <img className={classes.emailIcon} src="/icons/email.svg" alt=""/>
                            </div>
                        </div>
                    </a>

                </div>
                <div>
                    <div className={classes.tableBox}>
                        {/*<input type="text" className={classes.name1} placeholder='Name'/>*/}
                        <TextField
                            onChange={handleChange}
                            // defaultValue="Message"
                            value={name}
                            id='name'
                            variant="standard"
                            fullWidth
                            placeholder='Name'
                            InputProps={{
                                disableUnderline: true, // <== added this
                            }}
                            className={classes.name1}/>

                        {/*<input type="text" className={classes.name} placeholder='Email'/>*/}


                        <TextField fullWidth
                                   value={email}
                                   onChange={handleChange}
                                   id='email'
                                   variant="standard"
                                   InputProps={{
                                       disableUnderline: true, // <== added this
                                   }}
                                   placeholder='Email'
                                   className={classes.name}/>


                        <TextField fullWidth
                                   value={subject}
                                   onChange={handleChange}
                                   id='subject'
                                   variant="standard"
                                   InputProps={{
                                       disableUnderline: true, // <== added this
                                   }}
                                   placeholder='Subject'
                                   className={classes.name}/>

                        {/*<input type="text" className={classes.message} placeholder='Message'/>*/}
                        <TextField
                            multiline
                            classes={{root: classes.message}}
                            rows={4}
                            onChange={handleChange}
                            id='message'
                            // defaultValue="Message"
                            value={message}
                            variant="standard"
                            fullWidth
                            placeholder={'Message'}
                            InputProps={{
                                disableUnderline: true, // <== added this
                            }}
                        />
                        <Button variant="contained" className={classes.submit} onClick={submit}>
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
//     const {data: {galleries}} = await axios.get(`${process.env.BASE_URL}/api/museums-and-galleries/list`)
//
//
//     return {
//         props: {
//             galleries
//         }
//     }
// }