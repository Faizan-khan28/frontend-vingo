import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { FaDrumstickBite } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const FoodCard = ({data}) => {
  const [quantity,setQuantity] = useState(0)

  const starRating = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        (i<=rating)? (
          <FaStar  className="text-yellow-500 cursor-pointer" />
        ): (
          <FaRegStar className="text-yellow-500 cursor-pointer" />
        )
      )
      
    }
   return stars
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    if(quantity === 0) return
    setQuantity(quantity - 1)
  }
  
  return (
    <div className="w-62.5 rounded-2xl border-2 border-[#ff4d2d] bg-white
     shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col">
     <div className="relative cursor-pointer w-full h-42.5 flex justify-center items-center bg-white">
      <div className="absolute right-2 top-2 z-10 bg-white rounded-full p-1 shadow">{data.foodType === "veg" ? <FaLeaf className="text-green-500" /> : <FaDrumstickBite className="text-shadow-red-500" />}</div>
       <img src={data.image} alt="" className="h-full w-full transition-transform duration-300 hover:scale-105" />
     </div>
     <div className="flex flex-1 flex-col p-4">
       <h1 className="text-gray-900 font-semibold text-base truncate">{data.name}</h1>
       <div className="flex items-center gap-1 mt-1">
          {starRating(data.rating?.average || 0)}
          <span className="text-xs flex justify-center text-gray-500">
            {data.rating?.count || 0}
          </span>
       </div>
       <div className="flex justify-between items-center cursor-pointer mt-4">
         <span className="font-bold text-gray-900 text-lg">₹{data.price}</span>
         <div className="flex justify-center items-center gap-2 border-2 rounded-full overflow-hidden shadow-md">
          <button onClick={handleDecrease} className="px-2 py-1 hover:bg-gray-100 cursor-pointer transition"><FaMinus size={12} /></button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}  className="px-2 py-1 hover:bg-gray-100 cursor-pointer transition"><FaPlus size={12} /></button>
          <button className="bg-orange-400 hover:bg-orange-500 cursor-pointer px-3 py-2" ><FaCartShopping className="text-white"  /></button>
         </div>
       </div>
     </div>
    </div>
  )
}

export default FoodCard