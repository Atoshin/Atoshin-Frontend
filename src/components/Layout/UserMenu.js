import classes from "../../styles/Header/Header.module.scss";
import Menu from "@mui/material/Menu";
import {useAppSelector} from "../../redux/hooks";
import calculateDecimalPrecision from "../../functions/calculateDecimalPrecision";
import {selectAddress, selectBalance} from "../../redux/slices/accountSlice";
import Link from 'next/link';
import Web3 from "web3";

export default function UserMenu({anchorEl, handleClose}) {
    const open = Boolean(anchorEl);
    const address = useAppSelector(selectAddress)
    const balance = useAppSelector(selectBalance)
    //
    // const disconnectWallet = async () => {
    //     let web3;
    //     if (window.ethereum) {
    //         web3 = await new Web3(window.ethereum);
    //     } else if (window.web3) {
    //         web3 = await new Web3(window.web3.currentProvider);
    //     }
    //     console.log(web3);
    // }

    return <Menu
        className={classes.menuMain}
        // classes={{paper: classes.menuMain}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
    >
        <div className={classes.menuMainSec}>
            <div
                className={classes.userName}>{address && address.slice(0, 4) + '...' + address.slice(address.length - 4)}</div>
            <div className={classes.balanceSec}>
                <div className={classes.ethLogoSec}>
                    <img className={classes.ethLogo} src="/icons/eth-logo.png" alt=""/>
                </div>
                <div className={classes.balanceAmount}>
                    {calculateDecimalPrecision(parseFloat(balance), 5)} ETH
                </div>
            </div>
            <div className={classes.myProfileSec}>
                <img className={classes.myProfile} src="/icons/avatar-icon-outlined.svg" alt=""/>
                <Link href="/profile">
                    <a>
                        <div className={classes.myProfileText}>
                            My Profile
                        </div>
                    </a>
                </Link>
            </div>
            {/*<div className={classes.disconnectSec}>*/}
            {/*    <img className={classes.disconnectIcon} src="/icons/disconnect-icon.svg" alt=""/>*/}
            {/*    <div onClick={disconnectWallet} className={classes.disconnectText}>*/}
            {/*        Disconnect*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </Menu>
}