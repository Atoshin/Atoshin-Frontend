import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'

import account from './slices/accountSlice';
import artCenterMap from './slices/artCenterMap';

export function makeStore() {
    return configureStore({
        reducer: {
            account,
            artCenterMap
        },
    })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppState,
    unknown,
    Action<string>>

export default store
