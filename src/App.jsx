import { Route, Routes } from "react-router-dom"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import { Home } from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"
import useGetCurrentUser from "./hooks/useGetCurrentUser"
export const serverUrl = "http://localhost:8000"

function App() {
  useGetCurrentUser()
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
     </Routes>
    </>
  )
}

export default App
