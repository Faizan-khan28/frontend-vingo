import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { setAddress, setcity, setState } from '../store/userSlice'

export const useGetCity = () => {
    const dispatch = useDispatch()
    const apiKey = import.meta.env.VITE_GEO_APIKEY
    const {userData} = useSelector(state => state.user)
  return (
    useEffect(()=>{
        try {
            navigator.geolocation.getCurrentPosition(async (loction)=> {
                // console.log(loction)
                const latitude = loction.coords.latitude
                const longitude = loction.coords.longitude
                const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`)
                // console.log(result)
                dispatch(setcity(result?.data?.results[0].city))
                dispatch(setState(result?.data?.results[0].state))
                dispatch(setAddress(result?.data?.results[0].address_line2))
            })
        } catch (error) {
            console.log({message:`error in GetCity ${error}`})
        }
    },[userData])
  )
}