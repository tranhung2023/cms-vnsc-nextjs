import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ekycItem } from '@/models';

interface IEkyc {
    dataEkyc: ekycItem[];
    currentPage: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
}

const initialState: IEkyc = {
    dataEkyc: [],
    currentPage: 1,
    pageSize: 10,
    totalElements: 0,
    totalPages: 0,
};

const ekycSlice = createSlice({
    name: 'ekyc',
    initialState,
    reducers: {
        setDataEkyc: (
            state,
            action: PayloadAction<{
                dataEkyc: ekycItem[];
                totalElements: number;
                totalPages: number;
            }>,
        ) => {
            state.dataEkyc = action.payload.dataEkyc;
            state.totalElements = action.payload.totalElements;
            state.totalPages = action.payload.totalPages;
        },
        setPageEkyc: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setDataEkyc, setPageEkyc } = ekycSlice.actions;

export default ekycSlice.reducer;
