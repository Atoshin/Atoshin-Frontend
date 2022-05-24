import classes from '../../styles/HamijoLanding/HamijoLanding.module.scss'
import Link from "next/link";
import * as React from "react";
import {useState} from "react";


export default function Landing() {

    const [isNftHover, setIsNftHover] = useState(false);
    const [isCrowdfundingHover, setIsisCrowdfundingHover] = useState(false);
    return (
        <>
            <div className={classes.mainSec}>

                <div className={classes.header}>
                    <div className={classes.iconSec}>
                        <img src="/images/landing/hamijologo.png" alt="" className={classes.logo}/>
                    </div>
                </div>

                <div
                    className={isNftHover ? classes.nftSecHovered : isCrowdfundingHover ? classes.nftSecSmall : classes.nftSec}
                    onMouseEnter={() => setIsNftHover(true)}
                    onMouseLeave={() => setIsNftHover(false)}
                    style={{
                        backgroundImage: `url(/images/landing/nft.png)`
                    }}
                >
                    {/*{*/}
                    {/*    !isNftHover ?*/}
                    {/*        <div className={isCrowdfundingHover ? classes.nftBgSmall : classes.nftBg}*/}
                    {/*             style={{*/}
                    {/*                 backgroundImage: `url(/images/landing/nft.png)`*/}
                    {/*             }}>*/}
                    {/*        </div>*/}
                    {/*        : ''*/}
                    {/*}*/}
                    {/*<div className={classes.iconSec}>*/}
                    {/*    <img src="/images/landing/hamijologo.png" alt="" className={classes.logo}/>*/}
                    {/*</div>*/}
                    <div className={classes.nftText}>
                        <div className={classes.title}>
                            NFT
                        </div>
                        <div className={classes.des}>
                            The best place to invest
                        </div>
                    </div>

                    <div className={classes.vectorSec}>
                        <Link href="/">
                            <img className={classes.vector} src="/icons/vector-down.svg" alt=""/>
                        </Link>
                    </div>

                </div>

                <div className={classes.line}>

                </div>

                <div
                    onMouseEnter={() => setIsisCrowdfundingHover(true)}
                    onMouseLeave={() => setIsisCrowdfundingHover(false)}
                    style={{
                        backgroundImage: `url(/images/landing/crowdfunding.png)`
                    }}
                    className={isCrowdfundingHover ? classes.crowdfundingSecHovered : isNftHover ? classes.crowdfundingSecSmall : classes.crowdfundingSec}>
                    {
                        isCrowdfundingHover &&
                        <div className={classes.crowdHoverBg}
                             style={{
                                 backgroundImage: `url(/images/landing/crowdfunding.png)`
                             }}>
                        </div>
                    }
                    <div className={classes.crowdfundingText}>
                        <div className={classes.title}>
                            Crowdfunding
                        </div>
                        <div className={classes.des}>
                            Together all dreams come true
                        </div>
                    </div>

                    <div className={classes.vectorSec}>
                        <Link href="/">
                            <img className={classes.vector} src="/icons/vector-down.svg" alt=""/>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}