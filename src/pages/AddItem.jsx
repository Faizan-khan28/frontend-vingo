import axios from "axios";
import { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import { setMyShopData } from "../store/ownerSlice";
import { ClipLoader } from "react-spinners";

export const AddItem = () => {

  const navigate = useNavigate();
  const { myShopData } = useSelector((state) => state.owner);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [foodType, setFoodType] = useState("veg");
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [loading,setLoding] = useState(false)

  const Category = [
    "Snacks",
    "Main Course",
    "Desserts",
    "Pizza",
    "Burgers",
    "Sandwiches",
    "North Indian",
    "South Indian",
    "Chinese",
    "Fast Food",
    "Others",
  ];

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackendImage(file);
      setFrontendImage(URL.createObjectURL(file));
    }
  };

  const handleFormData = async (e) => {
    e.preventDefault();
    setLoding(true)
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("foodType", foodType);

      if (backendImage) {
        formData.append("image", backendImage);
      }

      const result = await axios.post(
        `${serverUrl}/api/item/add-item`,
        formData,
        { withCredentials: true }
      );

      dispatch(setMyShopData(result.data));
      setLoding(false)
      navigate("/")
    } catch (error) {
      console.log(error);
      setLoding(false)
    }
  };

  return (
    <div className="w-screen min-h-screen bg-[#fff8f1] flex justify-center items-center py-5 px-3">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 text-[24px] cursor-pointer text-orange-500 hover:text-orange-600"
      >
        <FaArrowLeftLong />
      </button>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5">

        {/* Icon */}
        <div className="flex justify-center mb-3">
          <div className="bg-orange-100 p-4 rounded-full">
            <FaUtensils className="text-[#ff4d2d] w-7 h-7" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Add Food
        </h2>

        {/* Form */}
        <form onSubmit={handleFormData} className="space-y-3">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Add Item Name"
              className="w-full mt-1 px-3 py-2 border  border-gray-300 rounded-lg outline-none focus:border-orange-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* Image */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Food Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />

            {/* Preview Image */}
            {frontendImage && (
              <div className="w-full h-40 mt-3 border border-gray-300 rounded-xl overflow-hidden bg-gray-100 flex justify-center items-center">
                <img
                  src={frontendImage}
                  alt="Food Preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Price
            </label>

            <input
              type="number"
              placeholder="Enter Price"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
            >
              <option value="">Select Category</option>

              {Category.map((cato, index) => (
                <option key={index}>{cato}</option>
              ))}
            </select>
          </div>

          {/* Food Type */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Food Type
            </label>

            <select
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-400"
              onChange={(e) => setFoodType(e.target.value)}
              value={foodType}
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>
          </div>

          {/* Button */}
          <button disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg cursor-pointer transition-all">
           {loading ? <ClipLoader size={20} color="white"/> : "Add Food"}
          </button>

        </form>
      </div>
    </div>
  );
};