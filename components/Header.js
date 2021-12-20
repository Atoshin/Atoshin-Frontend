import {Button, useMediaQuery} from "@mui/material";
import Container from '@mui/material/Container';
import {useTheme} from '@mui/material/styles';
import classes from '../styles/Header.module.scss';
import ConnectWalletModal from '/components/ConnectWalletModal.js';
import {useState} from 'react';
import Menu from '@mui/material/Menu';

export default function Header({setDrawerMenu}) {


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    const [openModal, setOpenModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return <>
        <div className={classes.mainHeader}>
            {matches ?
                <>
                    <div className={classes.headerMainMob}>
                        <div className={classes.logoWithHam}>
                            <img className={classes.hamburger} src="/icons/hamburger.png" alt="" onClick={() => setDrawerMenu(true)}/>
                            <div className={classes.hamburgerAndlogo}>
                                <div className={classes.logoMob}>
                                    <img className={classes.AtoshinLogoMob} src="/images/atoshin-logo-typography.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        {isLoggedIn ?
                            <div className={classes.avatarIconSec} onClick={handleClick}>
                                <img className={classes.avatarIconMob} src="/icons/avatar-icon.png" alt=""/>
                            </div>
                            :
                            <Button className={classes.registerBtnMob} onClick={handleOpen}>Wallet</Button>
                        }
                    </div>
                </>
                :
                <>
                    <Container>
                        <div className={classes.mainHeaderDesktop}>
                            <div className={classes.logoContainer}>
                                <img className={classes.AtoshinLogo}  src="/images/Atoshin-logo.png" alt=""/>
                            </div>
                            <ul className={classes.menuContainer}>
                                <li className={classes.marketplaceItem}>Marketplace</li>
                                <li>Art Centers</li>
                                <li>Artists</li>
                                <li>About NFT</li>
                                {isLoggedIn ?
                                    <div className={classes.avatarIconSec} onClick={handleClick}>
                                        <img className={classes.avatarIcon} src="/icons/avatar-icon.png" alt=""/>
                                    </div>
                                    :
                                    <Button onClick={handleOpen} className={classes.registerBtn} disableElevation
                                            variant={"contained"}>
                                        Connect Wallet
                                    </Button>
                                }
                            </ul>
                        </div>
                    </Container>
                </>
            }
            <Menu
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
                    <div className={classes.userName}>Mahdi Kholdi</div>
                    <div className={classes.balanceSec}>
                        <div className={classes.ethLogoSec}>
                            <img className={classes.ethLogo} src="/icons/eth-logo.png" alt=""/>
                        </div>
                        <div className={classes.balanceAmount}>
                            300 ETH
                        </div>
                    </div>
                    <div className={classes.myProfileSec}>
                        <img className={classes.myProfile} src="/icons/avatar-icon-outlined.png" alt=""/>
                        <div className={classes.myProfileText}>
                            My Profile
                        </div>
                    </div>
                    <div className={classes.disconnectSec}>
                        <img className={classes.disconnectIcon} src="/icons/disconnect-icon.png" alt=""/>
                        <div className={classes.disconnectText}>
                            Disconnect
                        </div>
                    </div>
                </div>
            </Menu>
            <ConnectWalletModal setIsLoggedIn={setIsLoggedIn} open={openModal} setOpen={setOpenModal}
                                handleClose={handleCloseModal}/>
        </div>
    </>
}