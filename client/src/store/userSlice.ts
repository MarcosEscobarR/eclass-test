import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserModel} from "../models/userModel";

interface IUserState {
    value: UserModel | null
}
const initialState: IUserState = {
    value: null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserModel>) {
            state.value = action.payload!;
            console.log(state.value)
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer;