import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
interface ArtCenterMapState {
    coordinates: {
        lat: number,
        long: number
    }
}

// Define the initial state using that type
const initialState: ArtCenterMapState = {
    coordinates: {
        lat: 0,
        long: 0
    }
}

export const artCenterMapSlice = createSlice({
    name: 'artCenterMap',
    initialState,
    reducers: {
        setCoordinates: (state, action: PayloadAction<any>) => {
            state.coordinates = action.payload;
        },
    },
})

export const {setCoordinates} = artCenterMapSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMap = (state: RootState) => state

export default artCenterMapSlice.reducer