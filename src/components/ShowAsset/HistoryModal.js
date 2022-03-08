import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import classes from "../../styles/ShowAsset/HistoryDialog/HistoryDialog.module.scss";
import styles from "../../styles/ShowAsset/ShowAsset.module.scss";


export default function HistoryModal(props) {
    const {open, setOpen, txns} = props;

    const handleClose = () => {
        setOpen(false)
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
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
                {txns.map((txn, idx) => {
                    return <div key={idx} className={classes.historyIndexRow}>
                       <div className={classes.buyerNameSec}>
                           <div className={classes.boughtBy}>
                               Bought by
                           </div>
                           <a rel="noreferrer" target="_blank" href={process.env.NEXT_PUBLIC_ETHERSCAN_DOMAIN + 'tx/' + txn.txnHash} className={classes.buyerName}>
                               {txn.transactable.wallet.walletAddress.slice(0, 4) + '...' + txn.transactable.wallet.walletAddress.slice(-4)}
                           </a>
                       </div>
                       <div className={classes.dateBought}>
                           in {new Date(txn.createdAt).getDate()} {monthNames[new Date(txn.createdAt).getMonth()]} {new Date(txn.createdAt).getFullYear()}
                       </div>
                   </div>
                })}
            </div>
        </Dialog>
    );
}
