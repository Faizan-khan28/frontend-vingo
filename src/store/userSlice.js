import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        userData : null,
        city: null,
        state: null
    },
    reducers: {
        setuserData: (state,action) => {
            state.userData=action.payload
        },
        setcity: (state,action) => {
            state.city=action.payload
        },
         setState: (state,action) => {
            state.state=action.payload
        }
    }
})

export const {setuserData,setcity,setState}=userSlice.actions
export default userSlice.reducer