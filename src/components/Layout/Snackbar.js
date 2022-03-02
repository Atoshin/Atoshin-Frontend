import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {selectAlert, setAlert} from "../../redux/slices/alertSlice";
import Slide from '@mui/material/Slide';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function AppSnackbar() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(selectAlert);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setAlert({
            open: false,
            message: '',
            severity: ''
        }));
    };

    return (
        <Snackbar TransitionComponent={SlideTransition} open={state.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={state.severity} sx={{width: '100%'}}>{state.message}</Alert>
        </Snackbar>
    );
}
