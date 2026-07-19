import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setItemsInMyCity,setuserData } from "../store/userSlice";

function useGetItemsByCity() {
  const dispatch = useDispatch()
  const {city} = useSelector(state=>state.user)

  useEffect(() => {
    const fetchitems = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/item/get-itembycity/${city}`, {
          withCredentials: true,
        });
        dispatch(setItemsInMyCity(result.data))
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchitems();
  }, [city]);
}

export default useGetItemsByCity;
