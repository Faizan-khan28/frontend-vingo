import { Route, Routes } from "react-router-dom"
import { LogIn } from "./pages/LogIn"
import SignUp from "./pages/SignUp"

function App() {
  
  return (
    <>
     <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
     </Routes>
    </>
  )
}

export default App
