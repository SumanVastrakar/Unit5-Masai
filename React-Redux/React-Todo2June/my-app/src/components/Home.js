import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div>
      Welcome To Home Page
      <br />
      <Link to="/todo">
      <button>Want To Add Todo? Click Here</button>
      </Link>
    
    </div>
  )
}
