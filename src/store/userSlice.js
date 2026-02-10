import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        userData : null,
        city: null,
        state: null,
        address: null
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
        },
        setAddress: (state,action) => {
            state.address=action.payload
        }
    }
})

export const {setuserData,setcity,setState,setAddress}=userSlice.actions
export default userSlice.reducer