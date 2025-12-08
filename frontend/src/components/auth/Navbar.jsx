import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import '../../styles/navbar.css'
import { User } from 'lucide-react';

export const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext);


  return (
    <>
    <header className='navbar'>
        <div className='navbarLeft'>
            <span className='logo'>uniConnect</span>
        </div>

        <div className='navbarRight'>
            {user && <span className='navbar-user'><User style={{width: '14px', height: '14px'}} />Hi, {user.name}</span>}
            <button className='navbar-logout' onClick={logoutUser}>Logout</button>
        </div>

    </header>
    </>
  )
}
