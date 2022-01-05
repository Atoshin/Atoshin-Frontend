import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
// interface AccountState {
//     address: string,
//     balance: number
// }

// Define the initial state using that type
const initialState = {
    scrolledHeader: false
}

export const functionalitySlice = createSlice({
    name: 'functionality',
    initialState,
    reducers: {
        setScroll: (state, action: PayloadAction<boolean>) => {
            state.scrolledHeader = action.payload;
        },
    },
})

export const {setScroll} = functionalitySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFunc = (state: RootState) => state

export default functionalitySlice.reducer