
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { Home } from './pages/Home'
import { AuthPage } from './pages/AuthPage'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      {/* <h1>uniConnect</h1> */}
      <ToastContainer position="top-center" autoClose={2500} theme="colored" />
      <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
