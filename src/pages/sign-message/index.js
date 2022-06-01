import classes from '../../styles/SignMessage/SignMessage.module.scss';
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks";
import {setOpen} from "../../redux/slices/connectWalletModalSlice";


export default function SignMessage() {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(setOpen(true))
    }, [])


    return <div className={classes.root}>
    </div>
}