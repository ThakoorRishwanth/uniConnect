import { useState, useContext } from "react";
// import api from "../../api/axios";
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

export const Register = ()=>{
  const { loginUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/auth/register", formData);

       toast.success("Account created successfully 🎉 Please login!");

      // auto-login user after register
      // loginUser(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      {error && <p className="auth-error">{error}</p>}

      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button className="auth-btn" type="submit">
        Create Account
      </button>
    </form>
  );
}
