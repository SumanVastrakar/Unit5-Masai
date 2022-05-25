import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import LoginStatus from './LoginStatus';
import Logout from './Logout';

export default function Navbar() {
    const {isAuth, toggleAuth, token} = useContext(AuthContext);
    

    

  return (
    <nav>
    <div onClick={toggleAuth}>
     {
    
      isAuth ? <Logout/> : <LoginStatus/>
  
    } 
    </div>
  
    </nav>
  )
}
