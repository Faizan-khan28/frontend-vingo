import { Route, Routes } from "react-router-dom"
import { LogIn } from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import { Home } from "./pages/Home"

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
