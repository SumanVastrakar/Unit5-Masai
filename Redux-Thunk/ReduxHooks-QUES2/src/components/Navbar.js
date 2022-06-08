import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {

  return (
    <div style = {{textAlign:"center"}}>
      <Link style={{margin:"50px", fontSize:"50px", border:"3px solid black", marginTop :"130px"}} to="/register">
      Register
      </Link>
      <Link style={{margin:"20px", fontSize:"50px", border:"3px solid black", marginTop :"130px"}} to="/login">
      Login
      </Link>
    </div>
  )
}
