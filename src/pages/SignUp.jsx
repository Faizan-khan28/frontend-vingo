import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import  { Toaster,toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners"

const roles = ["user", "owner", "deliveryBoy"];

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [loding, setLoding] = useState(false)
 

  const handleSignup = async () => {
    setLoding(true)
    try {
      const result = await axios.post(`${serverUrl}/api/auth/signup`,{
        fullName,email,mobile,password,role
      },{withCredentials:true})
      toast.success(result.data.message)
      console.log(result)
      setLoding(false)
    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message)
      }
      console.log(error)
      setLoding(false)
    }
  }

  const handlegogleAuth = async() => {
    if(!mobile) {
     return toast.error("Mobile no. Required")
    }
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth,provider)
    console.log(result)
    try {
      const {data} = await axios.post(`${serverUrl}/api/auth/google-auth`,{
        fullName: result.user.displayName,
        email: result.user.email,
        mobile,
        role,
      },{withCredentials:true})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6f1] px-3 sm:px-4">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* CARD */}
      <div className="w-full max-w-md sm:max-w-lg bg-white p-4 sm:p-6 rounded-xl shadow-md">
        
        {/* Title */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">
          Vingo
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5">
          Create your account to get started with delicious food deliveries
        </p>

        {/* Full Name */}
        <label className="text-xs text-gray-700 sm:text-sm font-medium">Full Name</label>
        <input
          type="text"
          value={fullName}
          placeholder="Enter your Full Name"
          className="w-full border border-gray-500 rounded-md px-3 py-2 mb-3 text-sm focus:outline-none  focus:border-orange-500"
          onChange={(e)=> setFullname(e.target.value)}
          required
        />

        {/* Email */}
        <label className="text-xs text-gray-700 sm:text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your Email"
          className="w-full border border-gray-500  rounded-md px-3 py-2 mb-3 text-sm focus:outline-none  focus:border-orange-500"
          onChange={(e)=> setEmail(e.target.value)}
          required
        />

        {/* Mobile */}
        <label className="text-xs text-gray-700 sm:text-sm font-medium">Mobile</label>
        <input
          type="text"
          value={mobile}
          placeholder="Enter your Mobile Number"
          className="w-full border border-gray-500 rounded-md px-3 py-2 mb-3 text-sm  focus:outline-none  focus:border-orange-500"
          onChange={(e)=> setMobile(e.target.value)}
          required
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
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 sm:top-3 cursor-pointer text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Role Buttons */}
        <label className="text-xs text-gray-700 sm:text-sm font-medium">Role</label>
        <div className="flex gap-2 mb-4 mt-1">
          {roles.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 border cursor-pointer rounded-md py-2 text-xs sm:text-sm font-medium capitalize transition
                ${
                  role === r
                    ? "bg-orange-500 text-white border-orange-500"
                    : "text-orange-500 border-orange-500"
                }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Sign Up */} 
        <button onClick={handleSignup} disabled={loding} className="w-full bg-orange-400 hover:bg-orange-500 cursor-pointer text-white py-2 rounded-md font-semibold text-sm sm:text-base mb-3">
          {loding ? <ClipLoader size={20} color="white"/>  : "Sign Up"}
        </button>

        {/* Google */}
        <button onClick={handlegogleAuth} className="w-full transition duration-200 border-gray-400 hover:bg-gray-100 cursor-pointer border py-2 rounded-md flex items-center justify-center gap-2 text-xs sm:text-sm">
          <FcGoogle />
          Sign up with Google
        </button>

        {/* Sign In */}
        <p className="text-center text-xs sm:text-sm mt-4">
          Already have an account ?
          <span
            onClick={() => navigate("/login")}
            className="text-orange-500 cursor-pointer ml-1 font-medium"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
