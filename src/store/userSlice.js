import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        userData : null,
        city: null,
        currentState: null,
        address: null,
        shopsInMyCity:null,
    },
    reducers: {
        setuserData: (state,action) => {
            state.userData=action.payload
        },
        setcity: (state,action) => {
            state.city=action.payload
        },
        setState: (state,action) => {
            state.currentState=action.payload
        },
        setAddress: (state,action) => {
            state.address=action.payload
        },
        setShopsInMyCity: (state,action) => {
            state.shopsInMyCity=action.payload
        }
    }
})

export const {setuserData,setcity,setState,setAddress,setShopsInMyCity}=userSlice.actions
export default userSlice.reducer