import {HistoryModel} from "../models/HistoryModel";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IHistorySlice {
    value: HistoryModel[] | null
}

const initialState: IHistorySlice = {
    value: null
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setHistory(state, action: PayloadAction<HistoryModel[]>) {
            console.log(action.payload)
            state.value = action.payload
        }
    }
})

export const {setHistory} = historySlice.actions;
export default historySlice.reducer;