import React, {useEffect, useState} from 'react';
import classes from '../../styles/AboutUs/aboutUs.module.scss'
import Head from "next/head";

export default function aboutUs() {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <div className={classes.root}>
                <div className={classes.pageTitle}>About Atoshin</div>
                <div className={classes.paragraph}>
                    Welcome! We believe in the power of the arts to heal and repair the rifts that exist between us as
                    social beings! Yes, we are art lovers who hold artists in high regard, but more importantly, we
                    believe that the redeeming and investment value of arts will continue to converge in this new era
                    fueled by imagination, technology, and decentralized interaction.
                    We accept that most, if not all, people want to be rich. We don&apos;t have much to say about that
                    (as
                    far as we know!), but we do know that many of you want to be wealthy and want to personalize the
                    parameters of YOUR wealth. We are here to help you overcome the artificial boundaries erected by
                    those who consider themselves experts in investment and wealth creation.
                </div>
                <hr className={classes.line}/>
                <div className={classes.paragraph}>
                    We are a group of artists, art lovers, technologists, and geeks who believe in the liberating power
                    of Open Ledger Technologies, such as Blockchain and decentralized interactions.
                    We live and work all over the world, so you&apose;ll find artists, engineers, and businesspeople
                    from
                    Europe, Asia, North America, and Africa among us. You will find tastes as authentic and diverse as
                    you can imagine, but we hope you will notice our keen focus on quality, ease of interaction, and
                    integrity.
                </div>
                <hr className={classes.line}/>
                <div className={classes.paragraph}>
                    ATOSHIN is in a unique position to provide access to a once exclusive and mostly... art collector&apos;s
                    world. It is the first solution to provide fractional ownership of real art pieces housed in museums
                    and permanent collections. When you purchase an NFT for physical art on ATOSHIN, you will be among
                    the very first global art owners who transcend the physical geography of your location and the
                    location of the art piece.
                </div>
                <hr className={classes.line}/>
                <div className={classes.paragraph}>
                    Once you buy an NFT on ATOSHIN you will have accepted partnership with some of the most unique
                    museums and permanent collections around the world. Yes, a partnership because they will own NFTs of
                    the same art piece along with you! They will keep, maintain, and offer it for viewing to the whole
                    world as they have done for many years before but now as your partners!
                </div>
                <hr className={classes.line}/>
                <div className={classes.paragraph}>
                    We guarantee you will have a thrilling experience in the exclusive community you are about to join.
                    We guarantee you value that is consistent with what global markets believe, want, and accept. We
                    guarantee this unique membership and hope that you will continue to support the freedom and wealth
                    that ATOSHIN NFTs bring to people all over the world.
                    And yes, we are registered as a limited liability company in Delaware, USA (New Enterprise East
                    Innovations, LLC) with offices in UAE, Japan, and France.

                    <br/>For any other information please contact us at <a className={classes.link} href="mailto:info@atoshin.art">info@atoshin.art</a>
                </div>
            </div>
        </>
    )
}