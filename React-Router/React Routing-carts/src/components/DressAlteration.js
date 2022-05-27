import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import Copywrite from './CopyWrite'


export default function DressAlteration() {
  return (
    <div>
      <Navbar/>

      {/* //form for the dress designing */}
      <div className='OuterBlackborder'>
        <div className='container restaurent_inputFields'>
          <h1>Dress Div</h1>
          <h3>Enter Your Alteration Details</h3>

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
            <span className="input-group-text">Alteration Details</span>
            <input type="text" aria-label="First name"
             
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Any Specific Requirement</span>
            <input type="text" aria-label="First name"
             
              className="form-control" />

          </div>
          {/* <div className="input-group my-3">
            <span className="input-group-text">Referred Dress</span>
            <input type="file" style={{height:"38px"}} placeholder="Upload Reference Dress Design  " aria-label="First name"
            
              className="form-control" />

          </div> */}
          <button type="button" className="btn btn-light" onClick={()=>{
            alert("Thanks for Your Interest We will Get Back To You Soon Keep Shopping!!")
          }}style={{marginTop:"0px"}}>Submit</button>
          </div>
          </div>
          <Copywrite/>
    </div>
  )
}
