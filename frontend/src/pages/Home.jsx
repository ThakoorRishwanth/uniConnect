import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export const Home = () => {
   const { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <p>Email: {user?.email}</p>

      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
