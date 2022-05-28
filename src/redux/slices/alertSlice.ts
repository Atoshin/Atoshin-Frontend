import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState as AppState} from "../store";

export interface AlertState {
    data: {
        open: boolean,
        message: string,
        severity: string
    }
}

const initialState: AlertState = {
    data: {
        open: false,
        message: '',
        severity: ''
    },
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action: PayloadAction<{ open: false, message: '', severity: '' }>) => {
            state.data = action.payload
        },
    }
})

export const {setAlert} = alertSlice.actions;


export const selectAlert = (state: AppState) => state.alert.data

export default alertSlice.reducer;