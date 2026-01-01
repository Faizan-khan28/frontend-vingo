import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";


const LogIn = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 

  const handleLogin = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/auth/login`,{
        email,password,
      },{withCredentials:true})
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6f1] px-3 sm:px-4">
      
      {/* CARD */}
      <div className="w-full max-w-md sm:max-w-lg bg-white p-4 sm:p-6 rounded-xl shadow-md">
        
        {/* Title */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">
          Vingo
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5">
          Login your account to get started with delicious food deliveries
        </p>


        {/* Email */}
        <label className="text-xs text-gray-700 sm:text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your Email"
          className="w-full border border-gray-500  rounded-md px-3 py-2 mb-3 text-sm focus:outline-none  focus:border-orange-500"
          onChange={(e)=> setEmail(e.target.value)}
        />


        {/* Password */}
        <label className="text-xs text-gray-700 sm:text-sm font-medium">Password</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter your password"
            className="w-full border border-gray-500 rounded-md px-3 py-2 text-sm focus:outline-none  focus:border-orange-500"
            onChange={(e)=> setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 sm:top-3 cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div onClick={()=> navigate("forgot-password")} className="text-right mb-4 text-[#ff4d2d] font-medium cursor-pointer">
          Forgot Password
        </div>

        {/* Sign Up */} 
        <button onClick={handleLogin} className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white py-2 rounded-md font-semibold text-sm sm:text-base mb-3">
          Login
        </button>

        {/* Google */}
        <button className="w-full transition duration-200 border-gray-400 hover:bg-gray-100 cursor-pointer border py-2 rounded-md flex items-center justify-center gap-2 text-xs sm:text-sm">
          <FcGoogle />
          Sign up with Google
        </button>

        {/* Sign In */}
        <p className="text-center text-xs sm:text-sm mt-4">
          Want to Create a New Account ?
          <span
            onClick={() => navigate("/signup")}
            className="text-orange-500 cursor-pointer ml-1 font-medium"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
