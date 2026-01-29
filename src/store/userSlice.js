import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        userData : null,
        city: null
    },
    reducers: {
        setuserData: (state,action) => {
            state.userData=action.payload
        },
        setcity: (state,action) => {
            state.city=action.payload
        }
    }
})

export const {setuserData,setcity}=userSlice.actions
export default userSlice.reducer