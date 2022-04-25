import {FavoriteModel} from "../models/FavoriteModel";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IFavoriteSlice {
    value: FavoriteModel[] | null
}

const initialState: IFavoriteSlice = {
    value: null
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setFavorites(state, action: PayloadAction<FavoriteModel[]>) {
            state.value = action.payload
        }
    }
})

export const {setFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer