import axios from "axios";
import { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import { setMyShopData } from "../store/ownerSlice";

export const AddItem = () => {

    const navigate = useNavigate()
    const {myShopData} = useSelector(state=> state.owner)    
    const dispatch = useDispatch()   

    const [name,setName] = useState(null)
    const [price,setPrice] = useState(0)
    const [category,setCategory] = useState(null)
    const [foodType,setFoodType] = useState(null)
    const [frontendImage,setFrontendImage] = useState(null)
    const [backendImage,setBackendImage] = useState(null)

    const Category = [
         "Snacks",
         "Main Course",
         "Desserts","Pizza",
         "Burgers",
         "Sandwiches",
         "North Indian",
         "South Indian",
         "Chinese",
         "Fast Food",
         "Others"
    ]

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
        formData.append("category",category)
        formData.append("price",price)
        formData.append("foodType",foodType)
        if (backendImage) {
          formData.append("image",backendImage)
        }
        const result = await axios.post(`${serverUrl}/api/item/add-item`,formData,
          {withCredentials:true}
        )
        dispatch(setMyShopData(result.data))
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    }


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
          Add Food
        </h2>
         {/* form */}
        <form onSubmit={handleFormData} className="space-y-3">
          <div>
            <label className="text-sm">Name</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md"
              placeholder="Add Item Name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
          </div>
    
          <div>
            <label className="text-sm">Food Image</label>
            <input type="file" onChange={handleImage} accept="image/*" className="w-full border rounded-md px-3 py-2 text-sm" />
            {
              frontendImage && 
              <div>
                  <img
                   src={frontendImage}
                      alt="add Image"
                     className="w-full h-40 object-cover rounded-md"
                    />
              </div>
            }
          </div>


            <div>
            <label className="text-sm">Price</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded-md"
              placeholder="Enter Price"
              onChange={(e)=>setPrice(e.target.value)}
              value={price}
            />
          </div>

          <label className="text-sm">Category</label>
          <select 
              onChange={(e)=>setCategory(e.target.value)}
              value={category} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none" name="" id=""
            >
            <option value="">Select Category</option>
            {
              Category.map((cato,index)=> (
                <option key={index}>{cato}</option>
              ))
            }
          </select>

          <label className="text-sm">Food Type</label>
          <select 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none" name="" id=""
            onChange={(e)=>setFoodType(e.target.value)}
            value={foodType}
          >
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>

          <button className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};
