import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
interface AccountState {
    address: string,
    balance: number
}

// Define the initial state using that type
const initialState: AccountState = {
    address: '',
    balance: 0
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        setBalance: (state, action: PayloadAction<number>) => {
            state.balance = action.payload;
        },
    },
})

export const {setAddress, setBalance} = accountSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state

export default accountSlice.reducer