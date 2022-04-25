import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice'
import historyReducer from './historySlice'
import favoriteSlice from "./favoriteSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        history: historyReducer,
        favorite: favoriteSlice
    }
})