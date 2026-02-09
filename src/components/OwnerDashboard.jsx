import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { FaUtensils } from "react-icons/fa";

export const OwnerDashboard = () => {
  const { myShopData } = useSelector(state => state.owner);
  return (
    <div>
      <Navbar />
      {!myShopData && 
      <div className="flex justify-center items-center p-4 sm:p6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p6 border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col items-center text-center">
            <FaUtensils className="text-[#ff4d2d] pt-2 w-16 h-16 sm:w-20 sm:h-20 mb-4"  />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Add Your Restaurant</h2>
            <p>Join Your Food Delivary Platform and Reach Thousands of Hungry Custumers Every Day.</p>
          </div>
        </div>
      </div>}
    </div>
  );
};
