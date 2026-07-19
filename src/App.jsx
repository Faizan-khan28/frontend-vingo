import { Navigate, Route, Routes } from "react-router-dom"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import { Home } from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"
import useGetCurrentUser from "./hooks/useGetCurrentUser"
import { useSelector } from "react-redux"
import { useGetCity } from "./hooks/useGetCity"
import useGetMyShop from "./hooks/useGetmyShop"
import { CreateEditShop } from "./pages/CreateEditShop"
import { AddItem } from "./pages/AddItem"
import { EditItem } from "./pages/EditItem"
import useGetShopsByCity from "./hooks/useGetShopsByCity"
export const serverUrl = "http://localhost:8000"

function App() {
  useGetCurrentUser()
  useGetCity()
  useGetMyShop()
  useGetShopsByCity()
  const {userData} = useSelector(state=>state.user);
  return (
    <div className="overflow-x-hidden">
     <Routes>
      <Route path="/" element={userData?<Home/>:<Navigate to={"/login"}/>} />
      <Route path="/signup" element={!userData?<SignUp/>: <Navigate to={"/"}/>} />
      <Route path="/login" element={!userData?<LogIn/>: <Navigate to={"/"}/>} />
      <Route path="/forgot-password" element={!userData?<ForgotPassword/>: <Navigate to={'/'}/>} />
      <Route path="/create-edit-shop" element={userData?<CreateEditShop/>: <Navigate to={"/login"}/>} />
      <Route path="/add-item" element={userData?<AddItem/>: <Navigate to={"/login"}/>} />
      <Route path="/edit-item/:itemId" element={userData?<EditItem/>: <Navigate to={"/login"}/>} />
     </Routes>
    </div>
  )
}

export default App
