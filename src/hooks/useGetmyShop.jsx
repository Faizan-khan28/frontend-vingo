import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setMyShopData } from "../store/ownerSlice";

function useGetMyShop () {
  const dispatch = useDispatch()
  const {userData} = useSelector(state=>state.user)

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/shop/get-myshop`, {
          withCredentials: true,
        });
        dispatch(setMyShopData(result.data))
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShop();
  }, [userData]);
}

export default useGetMyShop;
