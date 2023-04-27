import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ekycSlice from '@/slices/ekycSlice';

const combinedReducer = combineReducers({
    ekyc: ekycSlice,
});

export function makeStore() {
    return configureStore({
        reducer: combinedReducer,
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
