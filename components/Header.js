import classes from '../styles/Header.module.scss'
import {Button, useMediaQuery} from "@mui/material";
import {ethers} from "ethers"
import { useTheme } from '@mui/material/styles';

export default function Header() {

    const connectWallet = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return <>
        <div className={classes.mainHeader}>
            {matches ?
                <>
                    <div className={classes.headerMainMob}>
                        <Button className={classes.registerBtnMob}>Connect Wallet</Button>
                        <div className={classes.hamburgerAndlogo}>
                            <div className={classes.logoMob}>

                            </div>
                            <img className={classes.hamburger} src="/icons/hamburger.png" alt=""/>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className={classes.logoContainer}>LOGO</div>
                    <ul className={classes.menuContainer}>
                        <li className={classes.marketplaceItem}>Marketplace</li>
                        <li>Art Centers</li>
                        <li>Artists</li>
                        <li>About NFT</li>
                        <Button onClick={connectWallet} className={classes.registerBtn} disableElevation
                                variant={"contained"}>
                            Connect Wallet
                        </Button>
                    </ul>
                </>
            }
        </div>
    </>
}