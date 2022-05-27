import React from 'react'
import "../App.css";

export default function Contact() {
  return (
    <div>
       <section id="contact">
     <h1 className="h-primary center">Contact Us</h1>
     <div id="contact-box">
         <form action="">
           <div className="form-group">
               <label htmlFor="name">Name:</label>
               <input type="text" name="name" id="name" placeholder="Enter Your Name"/>
           </div>
           <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="name" id="email" placeholder="Enter Your Email"/>
        </div>
        <div className="form-group">
            <label htmlFor="mobile no">Mobile No:</label>
            <input type="number" name="name" id="mobile" placeholder="Enter Your Mobile.no"/>
        </div> 
        <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button className='submitButtonContactus' onClick={()=>{
        alert("Thanks For your Valuable Feedback!!")
        }}>Submit</button>
         </form>
     </div>
 </section>
    </div>
  )
}
