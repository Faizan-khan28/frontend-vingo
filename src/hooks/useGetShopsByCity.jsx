import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setShopsInMyCity, setuserData } from "../store/userSlice";

function useGetShopsByCity() {
  const dispatch = useDispatch()
  const {city} = useSelector(state=>state.user)

  useEffect(() => {
    const fetchshops = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/shop/get-shopbycity/${city}`, {
          withCredentials: true,
        });
        dispatch(setShopsInMyCity(result.data))
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchshops();
  }, [city]);
}

export default useGetShopsByCity;
