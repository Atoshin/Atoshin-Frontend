import classes from '../styles/Header.module.scss'
import {Button} from "@mui/material";


export default function Header() {

    return <>
        <div className={classes.mainHeader}>
            <div className={classes.logoContainer}>LOGO</div>
            <ul className={classes.menuContainer}>
                <li className={classes.marketplaceItem}>Marketplace</li>
                <li>Art Centers</li>
                <li>Artists</li>
                <li>About NFT</li>
                <Button className={classes.registerBtn} disableElevation variant={"contained"}>
                    Register/Login
                </Button>
            </ul>
        </div>
    </>
}