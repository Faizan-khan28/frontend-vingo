import { Navigate, Route, Routes } from "react-router-dom"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import { Home } from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"
import useGetCurrentUser from "./hooks/useGetCurrentUser"
import { useSelector } from "react-redux"
import { useGetCity } from "./hooks/useGetCity"
export const serverUrl = "http://localhost:8000"

function App() {
  useGetCurrentUser()
  useGetCity()
  const {userData} = useSelector(state=>state.user);
  return (
    <>
     <Routes>
      <Route path="/" element={userData?<Home/>:<Navigate to={"/login"}/>} />
      <Route path="/signup" element={!userData?<SignUp/>: <Navigate to={"/"}/>} />
      <Route path="/login" element={!userData?<LogIn/>: <Navigate to={"/"}/>} />
      <Route path="/forgot-password" element={!userData?<ForgotPassword/>: <Navigate to={'/'}/>} />
     </Routes>
    </>
  )
}

export default App
