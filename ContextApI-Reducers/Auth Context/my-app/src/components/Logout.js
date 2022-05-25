import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from './Context/AuthContext'


export default function Logout() {
    const {isAuth,setIsAuth, toggleAuth, data ,setData ,token} = useContext(AuthContext);
    console.log(data)
    console.log(isAuth)
  return (
    <div>
      <button onClick={()=>{
toggleAuth()
setData(null)

      }}>Logout</button>
      
        <h1>Email of user is : {data.email}</h1>
        <h1>token : {token}</h1>

    </div>
  )
}
