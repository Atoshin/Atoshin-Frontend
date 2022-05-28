import * as React from 'react';
import classes from "../../styles/Profile/ProfileTabPanel/ProfileTabPanel.module.scss";
import {useState} from "react";


export default function ArtWork ({artwork, key}) {
    const [artWorkHover, setArtWorkHover] = useState(false);

    const artWorkMouseOver = () => {
        setArtWorkHover(true)
    }
    const artWorkMouseLeave = () => {
        setArtWorkHover(false)
    }
        return (
        <>
            {
                <div key={key} className={artWorkHover ? classes.hoveredArtworkCard : classes.artworkCard}
                     onMouseEnter={artWorkMouseOver}
                     onMouseLeave={artWorkMouseLeave}>
                    {
                        artWorkHover === true ?
                            <div className={classes.hoveredArtworkBackground}>
                                <a rel="noreferrer" target="_blank" href={artwork.image} className={classes.contractsBtn}>
                                    <div>Contract</div>
                                </a>
                                {/*<div className={classes.assetBtn}>*/}
                                {/*    <div>Asset</div>*/}
                                {/*</div>*/}
                            </div> : ''
                    }
                    <div className={artWorkHover === true ? classes.hoveredArtworkImg : classes.artworkImg} style={{
                        backgroundImage: `url(${artwork.assetImage})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}/>
                    <div className={classes.cardBottomSec}>
                        <div className={classes.artworkName}>
                            {artwork.name}
                        </div>
                        {/*<div className={classes.artworkTokens}>*/}
                        {/*</div>*/}
                    </div>
                </div>
            }
        </>
    )
}