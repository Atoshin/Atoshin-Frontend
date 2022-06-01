import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {RootState as AppState} from "../store";

export interface AccountState {
    address: string,
    balance: number,
    currency: string,
}

const initialState: AccountState = {
    address: '',
    balance: 0,
    currency: 'ETH'
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload
        },
        setBalance: (state, action: PayloadAction<number>) => {
            state.balance = action.payload;
        },
        setCurrency: (state, action: PayloadAction<string>) => {
            state.currency = action.payload
        }
    }
})

export const {setAddress, setBalance, setCurrency} = accountSlice.actions;


export const selectAddress = (state: AppState) => state.account.address
export const selectBalance = (state: AppState) => state.account.balance
export const selectCurrency = (state: AppState) => state.account.currency

export default accountSlice.reducer;