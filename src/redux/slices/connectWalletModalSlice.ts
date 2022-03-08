import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState as AppState} from "../store";

export interface ConnectWalletModalState {
    open: boolean
}

const initialState: ConnectWalletModalState = {
    open: false
}

export const connectWalletModalSlice = createSlice({
    name: 'connectWalletModal',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload
        },
    }
})

export const {setOpen} = connectWalletModalSlice.actions;


export const selectOpen = (state: AppState) => state.walletModal.open

export default connectWalletModalSlice.reducer;