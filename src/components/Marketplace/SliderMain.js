import classes from "../../styles/Marketplace/Marketplace.module.scss";
import {Slide} from "react-slideshow-image";
import {useEffect, useRef, useState} from "react";
import Slider from "./Slider";
import {TimeDifference} from "./TimeDifference";
import Link from "next/link";

export default function SliderMain({asset, idx}) {

    const [hovered, setHovered] = useState(false)

    const mouseOver = () => {
        setHovered(true)
    }
    const mouseOut = () => {
        setHovered(false)
    }

    console.log(hovered + '-' + idx);


    return (
        <Link key={idx} href={`/show-asset/${asset.id}`}>
            <a>
                <div
                    onMouseEnter={() => mouseOver()}
                    onMouseLeave={() => mouseOut()}
                    className={classes.card}>

                    <Slider hovered={hovered} asset={asset}/>
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
    );
}