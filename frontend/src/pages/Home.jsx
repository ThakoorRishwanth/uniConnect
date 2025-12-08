import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navbar } from '../components/auth/Navbar';

export const Home = () => {
   const { user } = useContext(AuthContext);

  if (!user) {
    return <h2>Please login to continue...</h2>;
  }

return (
  <>
    <Navbar />
   <div style={{ padding: "24px", fontFamily: "Quicksand, sans-serif" }}>
        <h1>Welcome {user.name}</h1>
        <p>Your Email: {user.email}</p>

        {/* later we will replace this with full dashboard layout */}
      </div>
  </>
);
}
