import classes from "../../styles/Header/Header.module.scss";
import Menu from "@mui/material/Menu";
import {useSelector} from "react-redux";
import calculateDecimalPrecision from "../../functions/calculateDecimalPrecision";

export default function UserMenu({anchorEl, handleClose}) {
    const open = Boolean(anchorEl);
    const address = useSelector(state => state.account.address)
    const balance = useSelector(state => state.account.balance)


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
            <div className={classes.userName}>{address && address.slice(0, 4) + '...' + address.slice(address.length - 4)}</div>
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
                <div className={classes.myProfileText}>
                    My Profile
                </div>
            </div>
            <div className={classes.disconnectSec}>
                <img className={classes.disconnectIcon} src="/icons/disconnect-icon.svg" alt=""/>
                <div className={classes.disconnectText}>
                    Disconnect
                </div>
            </div>
        </div>
    </Menu>
}