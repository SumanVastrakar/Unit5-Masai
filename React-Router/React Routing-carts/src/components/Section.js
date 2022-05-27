import React from 'react'
import "../App.css"
import {Link} from "react-router-dom";
import { useState } from "react"
import { useEffect } from 'react';

export default function Section() {

  const [  min, setMin] = useState(30);
  const [sec, setSec] = useState(50);
  const [hour, setHour] = useState(12)
  const [ stop, setStop] = useState(true);

  useEffect(() =>{
    let interval = null;
    if(stop){
    interval = setInterval(() =>{
      if( min == 59){
setHour(hour + 1);
setMin(0)
      }
      if( min == 0 && sec == 0){
        setMin(0);
        setSec(0);
        clearInterval(interval)
        return;
      }
      if( sec == 60){
        setMin(min - 1 )
        setSec(sec - 1);
        clearInterval(interval)

      }
      if(sec < 60){
        setSec(sec-1)
        if(sec == 0){
          setSec(60);
          // setMin(min - 1);
          clearInterval(interval)
          
        }
      }
    }, 500)
  }
  
  else{
      clearInterval(interval)
    }
    return () =>{
      clearInterval(interval)
    }
  })
  return (
      <div>
 <section id="home">
    <h1 className="h-primary">Welcome To My OnlineDressDiv</h1>
   <p style={{fontWeight:"700"}}>"Fashion is not necessariliy about labels.It's not about brands.It's about something else that comes from within you."</p>
    <p style={{fontWeight:"700",marginTop:"-10px"}}>Clothes are like a good meal,a good movie,great pieces of music."</p>
     <p style={{fontWeight:"700", marginTop:"-10px"}}>"People will stare.Make it worth their while"</p>
    <h1>Grab Upto 50% Off On Your Favourite Dresses</h1>
     <h1>Offer Ends In  <p style={{fontSize:"30px"}}><span style={{color:"rgb(216,71,87)", fontSize:"60px"}}>{hour}</span> hr : <span style={{color:"rgb(216,71,87)", fontSize:"60px"}}>{min}</span> m : <span style={{color:"rgb(216,71,87)", fontSize:"60px"}}>{sec}</span> s </p></h1>
     <h3> </h3>
     <Link to="/dressesCollection">
     <button className="btn FavouriteDresses">Order your Favourite Dresses Now</button>
     </Link>
   

</section>
      </div>
   
  )
}
