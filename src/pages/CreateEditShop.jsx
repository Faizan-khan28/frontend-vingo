import { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateEditShop = () => {

    const navigate = useNavigate()
    const {myShopData} = useSelector(state=> state.owner)    
    const {city,state,address} = useSelector(state=> state.user)   

    const [name,setName] = useState(myShopData?.name || "")
    const [City,setCity] = useState(myShopData?.city || city)
    const [State,setState] = useState(myShopData?.state || state)
    const [Address,setAddress] = useState(myShopData?.address || address)

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

        <form className="space-y-3">
          <div>
            <label className="text-sm">Name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md"
              placeholder="Enter Shop Name"
            />
          </div>

          <div>
            <label className="text-sm">Shop Image</label>
            <input type="file" accept="image/*" className="w-full border rounded-md px-3 py-2 text-sm" />
          </div>

          <img
            src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
            className="w-full h-40 object-cover rounded-md"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">City</label>
              <input
                placeholder="Enter city"
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-medium">State</label>
              <input
                placeholder="Enter state"
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter Address"
          />

          <button className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
