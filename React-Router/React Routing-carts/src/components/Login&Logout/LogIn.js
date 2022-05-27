import React from 'react'
import { useState } from 'react'
import Copywrite from '../CopyWrite'
import { DressnumberContext } from '../../Context/DressnumberContext';
import { useContext } from 'react';

import { Navigate } from "react-router-dom";


export default function LogIn() {
 
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {userdata, setUserData, isAuth} = useContext(DressnumberContext)
    console.log(userdata);
  return (
    <div>
      <div className='OuterBlackborder'>
        <div style={{marginTop:"130px"}}className='container restaurent_inputFields'>
          <h1>Dress Div</h1>
          <h3>Enter Your details</h3>

          <div className="input-group my-3">
            <span className="input-group-text">Enter Your Email</span>
            <input type="text" aria-label="First name" onChange={(e) => {
                setEmail(e.target.value)
            }}
            className="form-control" />


          </div>
          <div style={{marginTop:"200px"}} className="input-group my-3">
            <span className="input-group-text">Enter Your Password</span>
            <input type="text" aria-label="First name"  onChange={(e) => {
                setPassword(e.target.value)
            }}
            
              className="form-control" />

          </div>
        
          <button type="button" className="btn btn-light" onClick={()=>{
           setUserData({
            email : email,
            password : password,

           })
          }}style={{marginTop:"0px"}}>Submit</button>
          </div>
          </div>
          <Copywrite/>
    </div>
  )
}
