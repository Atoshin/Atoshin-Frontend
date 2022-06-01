import classes from '../../styles/SignMessage/SignMessage.module.scss';
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks";
import {setOpen} from "../../redux/slices/connectWalletModalSlice";
import {parseCookies} from "../../functions/parseCookies";


export default function SignMessage({data}) {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(setOpen(true))
    }, [])


    return <div className={classes.root}>
    </div>
}


export async function getServerSideProps({req, res}) {
    const data = parseCookies(req)

    return {
        props: {
            data
        }
    }
}