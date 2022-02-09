import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import account from './slices/accountSlice';
import artCenterMap from "./slices/artCenterMap";

const store = configureStore({
    reducer: {
        account,
        artCenterMap,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);