import classes from '../styles/Header.module.scss'
import { Button } from "@mui/material";
import { ethers } from "ethers"


export default function Header() {

    const connectWallet = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
    }


    return <>
        <div className={classes.mainHeader}>
            <div className={classes.logoContainer}>LOGO</div>
            <ul className={classes.menuContainer}>
                <li className={classes.marketplaceItem}>Marketplace</li>
                <li>Art Centers</li>
                <li>Artists</li>
                <li>About NFT</li>
                <Button onClick={connectWallet} className={classes.registerBtn} disableElevation variant={"contained"}>
                    Connect Wallet
                </Button>
            </ul>
        </div>
    </>
}