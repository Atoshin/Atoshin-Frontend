import Head from 'next/head'
import styles from '../styles/Home/Home.module.scss'
import HomePage from "../components/HomePage";
import axios from "axios";
import {parseCookies} from "../functions/parseCookies";

export default function Home(props) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Head>
                    <title>Atoshin Marketplace</title>
                    <meta name="description" content="Atoshin Marketplace"/>
                    {/*<link rel="icon" href="/favicon.ico"/>*/}
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <HomePage {...props}/>
                </main>


                {/*<footer className={styles.footer}>*/}
                {/*  <a*/}
                {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*  >*/}
                {/*    Powered by{' '}*/}
                {/*    <span className={styles.logo}>*/}
                {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
                {/*    </span>*/}
                {/*  </a>*/}
                {/*</footer>*/}
            </div>
        </div>
    )
}


export async function getServerSideProps(ctx) {
    const visitedLanding = parseCookies(ctx.req).visitedLanding;
    const res = ctx.res;
    if (!visitedLanding) {
        res.setHeader("location", "/welcome")
        res.statusCode = 302
        res.end()
    }
    const {
        data: {
            assets,
            gallery,
            artists
        }
    } = await axios.get(`${process.env.BASE_URL}/api/home?assetsToShow=5&artistsToShow=5&gallery=1`)
    return {
        props: {
            assets,
            gallery,
            artists
        }
    }
}