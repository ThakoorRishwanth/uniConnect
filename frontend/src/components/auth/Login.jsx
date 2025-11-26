import React, { useContext, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
import {toast} from 'react-toastify'
export const Login = () => {

  const {loginUser} = useContext(AuthContext)

  const [formData, setFormData] = useState(
    {email: "", 
    password: ""})

    const [error, setError] = useState("")

    const fetchData = async()=>{

      try{

        const res = await axios.post("http://localhost:8000/auth/login", formData);

        loginUser(res.data)

          toast.success("Login successful! 🎯");
      }
      catch(err){
        setError(err.response?.data?.message || "Registration failed");
        console.log(err)
        toast.error("Invalid credentials ❌");
      }
    }

    const handleChange = (e)=>{

      setFormData({...formData, [e.target.name]: e.target.value})
      
    }
    
    const handleLogin = (e)=>{
      
      e.preventDefault();
      fetchData(); 
      setError("")



    }


  return (
    <>
    <form onSubmit={handleLogin}>
      {error && <p className='auth-error'>{error}</p>}
      <div className='input-group'>
        <input type="text"
         name="email"
         placeholder='Enter your email'
         value = {formData.email}
         onChange={handleChange}
         required
          />
      </div>
      <div className='input-group'>
        <input type="password"
         name="password"
         placeholder='Enter your password'
         value = {formData.password}
         onChange={handleChange}
         required 
         />
      </div>
      <button className="auth-btn" type='submit'>Login</button>
    </form>
    </>
  )
}
