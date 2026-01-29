import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetCity = () => {
    const dispatch = useDispatch()
  return (
    useEffect(()=>{
        try {
            navigator.geolocation.getCurrentPosition(async (loction)=> {
                console.log(loction)
            })
        } catch (error) {
            console.log({message:`error in GetCity ${error}`})
        }
    },[])
  )
}
