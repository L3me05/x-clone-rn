import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage"
import SignupPage from "./pages/HomePage/auth/SignupPage"
import LoginPage from "./pages/HomePage/auth/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="" />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
