import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {

  return (
    <div>
      <Link style={{margin:"20px"}} to="/register">
      Register
      </Link>
      <Link style={{margin:"20px"}} to="/login">
      Login
      </Link>
    </div>
  )
}
