import axios from "axios";
import { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import { setMyShopData } from "../store/ownerSlice";

export const CreateEditShop = () => {

    const navigate = useNavigate()
    const {myShopData} = useSelector(state=> state.owner)    
    const {city,currentState,address} = useSelector(state=> state.user)
    const dispatch = useDispatch()   

    const [name,setName] = useState(myShopData?.name || "")
    const [City,setCity] = useState(myShopData?.city || city)
    const [State,setState] = useState(myShopData?.state || currentState)
    const [Address,setAddress] = useState(myShopData?.address || address)
    const [frontendImage,setFrontendImage] = useState(myShopData?.image || null)
    const [backendImage,setBackendImage] = useState(null)

    const handleImage = (e)=> {
      const file = e.target.files[0]
      setBackendImage(file)
      setFrontendImage(URL.createObjectURL(file))
    }

    const handleFormData = async (e) => {
      e.preventDefault()
      try {
        const formData = new FormData()
        formData.append("name",name)
        formData.append("city",City)
        formData.append("state",State)
        formData.append("address",Address)
        if (backendImage) {
          formData.append("image",backendImage)
        }
        const result = await axios.post(`${serverUrl}/api/shop/create-edit`,formData,
          {withCredentials:true}
        )
        dispatch(setMyShopData(result.data))
      } catch (error) {
        console.log(error)
      }
    }

    // everything working properly

  return (
    <div className="w-screen h-screen bg-[#fff8f1] grid place-items-center">
      {/* Back Arrow */}
      <button onClick={()=> navigate("/")} className="absolute top-5 left-5 sm:top-7 sm:left-15  z-10 text-[24px] cursor-pointer text-orange-500 hover:text-orange-600">
        <FaArrowLeftLong />
      </button>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {/* Icon */}
        <div className="flex justify-center mb-3">
          <div className="bg-orange-100 p-4 rounded-full">
            <FaUtensils className="text-[#ff4d2d] w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl text-gray-900 font-extrabold">
          {myShopData ? "Edit Shop" : "Add Shop"}
        </h2>
         {/* form */}
        <form onSubmit={handleFormData} className="space-y-3">
          <div>
            <label className="text-sm">Name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md"
              placeholder="Enter Shop Name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label className="text-sm">Shop Image</label>
            <input type="file" onChange={handleImage} accept="image/*" className="w-full border rounded-md px-3 py-2 text-sm" />
          </div>

          <img
            src={frontendImage}
            alt="add Image"
            className="w-full h-40 object-cover rounded-md"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">City</label>
              <input
                placeholder="Enter city"
                className="w-full mt-1 px-3 py-2 border rounded-md"
                onChange={(e)=>setCity(e.target.value)}
                value={City}
              />
            </div>

            <div>
              <label className="text-sm font-medium">State</label>
              <input
                placeholder="Enter state"
                className="w-full mt-1 px-3 py-2 border rounded-md"
                onChange={(e)=>setState(e.target.value)}
                value={State}
              />
            </div>
          </div>

          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter Address"
            onChange={(e)=>setAddress(e.target.value)}
            value={Address}
          />

          <button className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
