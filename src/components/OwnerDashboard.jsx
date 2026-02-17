import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const OwnerDashboard = () => {
  const { myShopData } = useSelector(state => state.owner);
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      {!myShopData && 
      <div className="flex justify-center items-center p-4 sm:p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-center text-center">
            <FaUtensils className="text-[#ff4d2d] w-16 h-16 sm:w-20 sm:h-20 mb-4"  />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Add Your Restaurant</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Join Your Food Delivary Platform and Reach Thousands of Hungry Custumers Every Day.</p>
            <button onClick={()=> navigate("/create-edit-shop")} className="bg-[#ff4d2d] text-white px-5 sm:px-6 py-2 rounded-full font-medium shadow-md hover:bg-orange-600 transition-colors duration-200 cursor-pointer">Get Started</button>
          </div>
        </div>
      </div>}

      {myShopData && 
       <div className="w-full flex flex-col items-center gap-6 px-4 sm:px-6">
         <h1 className="text-2xl sm:text-3xl text-gray-900 flex items-center gap-3 mt-8"> <FaUtensils className="text-[#ff4d2d] w-14 h-14"  />Welcome to {myShopData.name}</h1>
         <div>
          <img src={myShopData.image} alt={myShopData.name} />
         </div>
       </div>
      }
    </div>
  );
};
