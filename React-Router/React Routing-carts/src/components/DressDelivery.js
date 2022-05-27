import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import Copywrite from './CopyWrite'


export default function DressDelivery() {
  return (
    <div>
      <Navbar/>

      {/* //form for the dress designing */}
      <div className='OuterBlackborder'>
        <div className='container restaurent_inputFields'>
          <h1>Dress Div</h1>
          <h3>Enter Your details</h3>

          <div className="input-group my-3">
            <span className="input-group-text">Enter Full Name</span>
            <input type="text" aria-label="First name"
            className="form-control" />


          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Contact No</span>
            <input type="Number" aria-label="First name"
            
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Email</span>
            <input type="text" aria-label="First name"
            
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Full Address</span>
            <input type="text" aria-label="First name"
             
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Pin Code</span>
            <input type="text" aria-label="First name"
             
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Near By Landmark</span>
            <input type="text" aria-label="First name"
             
              className="form-control" />

          </div>
          <button type="button" className="btn btn-light" onClick={()=>{
            alert("Your Item Will Be Dlivered Soon To Your Adress, Thanks For Shopping!!")
          }}style={{marginTop:"0px"}}>Submit</button>
          </div>
          </div>
          <Copywrite/>
    </div>
  )
}
