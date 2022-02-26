import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/HistoryDialog/HistoryDialog.module.scss";
import styles from "../../styles/ShowAsset/ShowAsset.module.scss";


export default function HistoryModal(props) {
    const {open, setOpen} = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog onClose={handleClose} open={open}>

            <div className={classes.dialogHeaderSticky}>
                <div className={classes.dialogHeader}>
                    <DialogTitle className={classes.modalTitle}>History</DialogTitle>
                    <div className={classes.vectorX} onClick={handleClose}>
                        <img src="/icons/vector-X.png" alt=""/>
                    </div>
                </div>
                <div className={classes.HistoryIndexTitlesSec}>
                    <div className={classes.buyerNameTitle}>
                        Buyers
                    </div>
                    <div className={classes.dateTitle}>
                        Date
                    </div>
                </div>
            </div>

            <div className={classes.HistoryDialogMain}>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>

                <div className={classes.historyIndexRow}>
                    <div className={classes.buyerNameSec}>
                        <div className={classes.boughtBy}>
                            Bought by
                        </div>
                        <div className={classes.buyerName}>
                            0we6...245rb
                        </div>
                    </div>
                    <div className={classes.dateBought}>
                        in December 23, 2021
                    </div>
                </div>


            </div>
        </Dialog>
    );
}
