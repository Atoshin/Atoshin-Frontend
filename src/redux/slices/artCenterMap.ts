import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import type {AppState} from "../store";

export interface MapState {
    coordinates: {
        lat: number,
        long: number
    }
}

const initialState: MapState = {
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
            state.coordinates = action.payload
        },
    }
})

export const {setCoordinates} = artCenterMapSlice.actions;


export const selectCoordinates = (state: AppState) => state.artCenterMap.coordinates

export default artCenterMapSlice.reducer;