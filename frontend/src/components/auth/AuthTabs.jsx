import React, { useState } from 'react'
import { Register } from './Register'
import { Login } from './Login'

export const AuthTabs = () => {

  const [activeTab, setActiveTab] = useState('login')
  return (
    <>
    <div className="authTabContainer">
      <div className="authTabHeader">
        <button className={activeTab === 'login' ? 'active' : ''} onClick={()=> setActiveTab('login')}>Login</button>
        <button className={activeTab === 'register' ? 'active' : ''} onClick={()=> setActiveTab('register')}>Register</button>
      </div>
      <div className="tabs-content">
        {activeTab === 'login' ? <Login /> : <Register/>}
      </div>
    </div>
    </>
  )
}
