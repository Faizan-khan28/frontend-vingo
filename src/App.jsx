import { Route, Routes } from "react-router-dom"
import { LogIn } from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import { Home } from "./pages/Home"
export const serverUrl = "http://localhost:8000"

function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
     </Routes>
    </>
  )
}

export default App
