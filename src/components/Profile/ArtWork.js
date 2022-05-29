import * as React from 'react';
import classes from "../../styles/Profile/ProfileTabPanel/ProfileTabPanel.module.scss";
import {useState} from "react";
import {Button} from "@mui/material";
import SellModal from "./SellModal";

export default function ArtWork({artwork, key}) {
    const [artWorkHover, setArtWorkHover] = useState(false);
    const [openSellModal, setOpenSellModal] = useState(false);
    const artWorkMouseOver = () => {
        setArtWorkHover(true)
    }
    const artWorkMouseLeave = () => {
        setArtWorkHover(false)
    }
    return (
        <>
            <SellModal open={openSellModal} setOpen={setOpenSellModal}/>
            {
                <div className={classes.artworkCardParent}>
                    <div key={key} className={artWorkHover ? classes.hoveredArtworkCard : classes.artworkCard}
                         onMouseEnter={artWorkMouseOver}
                         onMouseLeave={artWorkMouseLeave}>
                        {
                            artWorkHover === true ?
                                <div className={classes.hoveredArtworkBackground}>
                                    <a rel="noreferrer" target="_blank" href={artwork.image}
                                       className={classes.contractsBtn}>
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
                    <Button variant='contained' className={classes.sellBtn} onClick={()=> setOpenSellModal(true)}>
                        <span>s</span>ell
                    </Button>
                </div>
            }
        </>
    )
}