import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/OwnersDialog/OwnerDialog.module.scss";


export default function OwnersModal(props) {
    const {open, setOpen} = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className={classes.OwnersDialogMain}>
                <div className={classes.dialogHeader}>
                    <DialogTitle className={classes.modalTitle}>Other Owners</DialogTitle>
                    <div className={classes.vectorX} onClick={handleClose}>
                        <img src="/icons/vector-X.png" alt=""/>
                    </div>
                </div>
                <div className={classes.ownersIndexTitlesSec}>
                    <div className={classes.rankTitle}>
                        Rank
                    </div>
                    <div className={classes.ownersTitle}>
                        Owner Name
                    </div>
                    <div className={classes.quantityTitle}>
                        Quantity
                    </div>
                </div>
                <div className={classes.indexSec}>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>
                    <div className={classes.ownersIndexRow}>
                        <div className={classes.rankNum}>
                            1
                        </div>
                        <div className={classes.ownerName}>
                            0we6...245rb
                        </div>
                        <div className={classes.quantity}>
                            21 Token
                        </div>
                    </div>

                </div>
            </div>
            {/*<div className={classes.ownersModalIndexMain}>*/}
            {/*<div className={classes.indexSec}>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={classes.ownersIndexRow}>*/}
            {/*            <div className={classes.rankNum}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={classes.ownerName}>*/}
            {/*                0we6...245rb*/}
            {/*            </div>*/}
            {/*            <div className={classes.quantity}>*/}
            {/*                21 Token*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </Dialog>
    );
}
