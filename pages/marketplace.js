import classes from '../styles/Marketplace/Marketplace.module.scss'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import axios from "axios";
import {TimeDifference} from "../components/Marketplace/TimeDifference";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Marketplace({assets}) {
    const router = useRouter();
    const [hovered, setHovered] = useState({})

    return <div className={classes.main}>
        <h1 className={classes.mainTitle}>Marketplace</h1>
        <hr className={classes.hr}/>
        <div className={classes.items}>
            {assets.map(asset => {
                return <div onMouseOver={() => setHovered({...hovered, [asset.id]: true})} onMouseOut={() => setHovered({...hovered, [asset.id]: false})} onClick={() => router.push(`/show-asset/${asset.id}`)} className={classes.card}>
                    <Slide pauseOnHover={false} duration={3000} autoplay={hovered[asset.id]} arrows={false} slidesToShow={1} easing={"ease"} infinite={true}>
                        {asset.medias.map(media => {
                            return <div className={classes.cardImg} style={{
                                backgroundImage: `url("${media.url}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}/>
                        })}
                    </Slide>
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