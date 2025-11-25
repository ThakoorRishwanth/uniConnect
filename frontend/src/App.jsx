
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { Home } from './pages/Home'

function App() {


  return (
    <>
      <h1>uniConnect</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
