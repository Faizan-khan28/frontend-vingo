import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast ,Toaster} from "react-hot-toast";
import {serverUrl} from "../App"
import axios from "axios";
const ForgotPassword = () => {
  // STEP CONTROL (1, 2, 3)
  const [step, setStep] = useState(1);

  // FORM DATA
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loding, setLoding] = useState(false)

  const navigate = useNavigate()


  // STEP 1 → SEND OTP
  const handleSendOtp = async () => {
    setLoding(true)
    try {
      if (!email) {
      toast.error("Please enter email");
      return;
    }
    const result = await axios.post(`${serverUrl}/api/auth/send-otp`,
      {email},{withCredentials:true}
    )
    console.log(result);
    setLoding(false)
    // yaha backend me OTP bhejne ka logic hota hai
    setStep(2);
    } catch (error) {
      console.log(error)
       setLoding(false)
    }
  };

  // STEP 2 → VERIFY OTP
  const handleVerifyOtp = async () => {
     setLoding(true)
    try {
      if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    const result = await axios.post(`${serverUrl}/api/auth/otp-verify`,
      {email,otp},{withCredentials: true}
    )
    console.log(result)
     setLoding(false)
    // yaha backend me OTP verify hota hai
    setStep(3);
    } catch (error) {
      console.log(error)
       setLoding(false)
    }
  };

  // STEP 3 → RESET PASSWORD
  const handleResetPassword = async () => {
    setLoding(true)
    try {
      if (!newPassword || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const result = await axios.post(`${serverUrl}/api/auth/reset-password`,{email,newPassword},
      {withCredentials: true}
    )
    console.log(result)
    setLoding(false)

    // yaha backend me password reset hota hai
    toast.success("Password reset successful");
    navigate("/login")
    } catch (error) {
      console.log(error)
       setLoding(false)
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6f1] px-3">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md bg-white p-4 sm:p-6 rounded-xl shadow-md">

        {/* HEADER */}
        <div className="flex items-center gap-2 mb-4">
          <FaArrowLeft onClick={()=> navigate("/login")} className="text-orange-500 cursor-pointer" />
          <h1 className="text-lg sm:text-xl font-semibold text-orange-500">
            Forgot Password
          </h1>
        </div>

        {/* STEP 1 : EMAIL */}
        {step === 1 && (
          <>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
              outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />

            <button
              onClick={handleSendOtp}
              disabled={loding}
              className="w-full cursor-pointer hover:bg-orange-500 bg-orange-400 text-white py-2 rounded-md font-medium"
            >
              {loding ? <ClipLoader size={20} color="white"/>  : "Send OTP"}
            </button>
          </>
        )}

        {/* STEP 2 : OTP */}
        {step === 2 && (
          <>
            <label className="text-sm font-medium">OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
              outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400 mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handleVerifyOtp}
              disabled={loding}
              className="w-full cursor-pointer hover:bg-orange-500 bg-orange-400 text-white py-2 rounded-md font-medium"
            >
              {loding ? <ClipLoader size={20} color="white"/>  : "Verify"}
            </button>
          </>
        )}

        {/* STEP 3 : NEW PASSWORD */}
        {step === 3 && (
          <>
            <label className="text-sm font-medium">New Password</label>
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter New Password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
              outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400 mb-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              onClick={handleResetPassword}
              disabled={loding}
              className="w-full cursor-pointer hover:bg-orange-500 bg-orange-400 text-white py-2 rounded-md font-medium"
            >
              {loding ? <ClipLoader size={20} color="white"/>  : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
