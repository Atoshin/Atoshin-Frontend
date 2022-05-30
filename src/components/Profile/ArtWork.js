import * as React from 'react';
import classes from "../../styles/Profile/ProfileTabPanel/ProfileTabPanel.module.scss";
import {useState} from "react";
import {Button} from "@mui/material";
import SellModal from "./SellModal";
import DeleteSellModal from "./DeleteSellModal";
export default function ArtWork({artwork, key, isSale}) {
    const [artWorkHover, setArtWorkHover] = useState(false);
    const [openSellModal, setOpenSellModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const artWorkMouseOver = () => {
        setArtWorkHover(true)
    }
    const artWorkMouseLeave = () => {
        setArtWorkHover(false)
    }
    return (
        <>
            <SellModal open={openSellModal} setOpen={setOpenSellModal}/>
            <DeleteSellModal open={openDeleteModal} setOpen={setOpenDeleteModal}/>
            {
                <div className={classes.artworkCardParent}>
                    <div key={key} className={artWorkHover ? classes.hoveredArtworkCard : classes.artworkCard}
                         onMouseEnter={artWorkMouseOver}
                         onMouseLeave={artWorkMouseLeave}>
                        {
                            artWorkHover === true ?
                                <div className={classes.hoveredArtworkBackground}>
                                    {
                                        isSale ?
                                            <div className={classes.contractsBtn}>
                                                <div onClick={() => setOpenDeleteModal(true)}>pending</div>
                                            </div>
                                            :
                                            <a rel="noreferrer" target="_blank" href={artwork.image}
                                               className={classes.contractsBtn}>
                                                <div>Contract</div>
                                            </a>
                                    }
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
                            {
                                isSale &&
                                <div className={classes.artworkTokens}>
                                   <span>4 ETH</span> sale price
                                </div>
                            }
                        </div>
                    </div>
                    {
                        !isSale &&
                        <Button variant='contained' className={classes.sellBtn} onClick={() => setOpenSellModal(true)}>
                            <span>s</span>ell
                        </Button>
                    }
                </div>
            }
        </>
    )
}