import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState as AppState} from "../store";

export interface AlertState {
    open: boolean,
    message: string | undefined,
    severity: string | undefined,
    alwaysOn?: boolean
}

const initialState: AlertState = {
    open: false,
    message: '',
    severity: undefined,
    alwaysOn: false
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action: PayloadAction<{ open: boolean, message: string, severity: string, alwaysOn?: boolean }>) => {
            return action.payload
        },
    }
})

export const {setAlert} = alertSlice.actions;


export const selectAlert = (state: AppState) => state.alert

export default alertSlice.reducer;