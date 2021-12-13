import { Button, useMediaQuery } from "@mui/material";
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import classes from '../styles/Header.module.scss';
import ConnectWalletModal from '/components/ConnectWalletModal.js';
import { useState } from 'react';

export default function Header() {


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));



    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <>
        <div className={classes.mainHeader}>
            {matches ?
                <>
                    <div className={classes.headerMainMob}>
                        <Button className={classes.registerBtnMob} onClick={handleOpen} >Connect Wallet</Button>
                        <div className={classes.hamburgerAndlogo}>
                            <div className={classes.logoMob}>

                            </div>
                            <img className={classes.hamburger} src="/icons/hamburger.png" alt="" />
                        </div>
                    </div>
                </>
                :
                <>
                    <Container>
                        <div className={classes.mainHeaderDesktop}>
                            <div className={classes.logoContainer}>
                                <img className={classes.AtoshinLogo} src="/images/Atoshin-logo.png" alt="" />
                            </div>
                            <ul className={classes.menuContainer}>
                                <li className={classes.marketplaceItem}>Marketplace</li>
                                <li>Art Centers</li>
                                <li>Artists</li>
                                <li>About NFT</li>
                                <Button onClick={handleOpen} className={classes.registerBtn} disableElevation
                                    variant={"contained"}>
                                    Connect Wallet
                                </Button>
                            </ul>
                        </div>
                    </Container>
                </>
            }
            <ConnectWalletModal open={open} setOpen={setOpen} handleClose={handleClose} />
        </div>
    </>
}