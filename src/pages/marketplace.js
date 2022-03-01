import classes from '../styles/Marketplace/Marketplace.module.scss'
import 'react-slideshow-image/dist/styles.css'
import axios from "axios";
import {TimeDifference} from "../components/Marketplace/TimeDifference";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Slider from "../components/Marketplace/Slider";

export default function Marketplace({assets}) {
    const router = useRouter();
    const [hovered, setHovered] = useState({})

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
    }, [])

    const mouseOver = (a) => {
        setHovered({...hovered, [a]: true})
    }
    const mouseOut = (a) => {
        setHovered({...hovered, [a]: false})
    }

    return <div className={classes.main}>
        <h1 className={classes.mainTitle}>Marketplace</h1>
        <hr className={classes.hr}/>
        <div
            className={classes.items}>
            {assets.map((asset, idx) => {
                return <Link key={idx} href={`/show-asset/${asset.id}`}>
                    <a>
                        <div
                            onMouseEnter={() => mouseOver(asset.id)}
                            onMouseLeave={() => mouseOut(asset.id)}
                            className={classes.card}>

                            <Slider
                                hovered={hovered} assets={assets} asset={asset} setHovered={setHovered}
                            />
                            <div className={classes.cardDetails}>
                                <div>
                                    <h3 className={classes.artworkName}>{asset.title}</h3>
                                    <div className={classes.artistSec}>
                                        <p className={classes.artistLabel}>Artist:</p>
                                        <h2 className={classes.artistName}>{asset.artistName}</h2>
                                    </div>
                                </div>
                                <div className={classes.saleDetails}>
                                    <div className={classes.column}>
                                        <p className={classes.fractionsLeft}>Fractions left</p>
                                        <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>{asset.totalFractions - asset.soldFractions}</p>
                            <p className={classes.total}>/{asset.totalFractions}</p>
                            </span>
                                    </div>
                                    <div className={classes.column}>
                                        <p className={classes.fractionsLeft}>Price</p>
                                        <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>{asset.price}</p>
                            <p className={classes.total}>ETH</p>
                            </span>
                                    </div>
                                    <div className={classes.column} style={{paddingRight: 16}}>
                                        <p className={classes.fractionsLeft}>Ending in</p>
                                        <span className={classes.fractions}>
                                    <TimeDifference time={asset.endDate}/>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            })}
        </div>
    </div>
}


export async function getServerSideProps(ctx) {
    const {
        data: {
            assets
        }
    } = await axios.get(`${process.env.BASE_URL}/api/marketplace`)

    return {
        props: {
            assets
        }
    }
}