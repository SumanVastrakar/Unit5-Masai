import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Error() {
  return (
      <div>
      <Navbar/>
    <div className='dressDetailsDiv center'>
      <h1>404 Error</h1>
      <br />
      <h2>Sorry This Page Is Not Valid</h2>
<Link to="/">
<button className='btn addToCart'>Go Back</button>
</Link>
{/* <Navigate to = {"/"}>Go Back</Navigate> */}
    
    </div>
    </div>
  )
}
