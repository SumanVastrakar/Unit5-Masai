import React from 'react'
import "../App.css"
import {Link} from "react-router-dom";

export default function Section() {
  return (
      <div>
 <section id="home">
    <h1 className="h-primary">Welcome To My OnlineDressDiv</h1>
   <p style={{fontWeight:"700"}}>"Fashion is not necessariliy about labels.It's not about brands.It's about something else that comes from within you."</p>
    <p style={{fontWeight:"700",marginTop:"-10px"}}>Clothes are like a good meal,a good movie,great pieces of music."</p>
     <p style={{fontWeight:"700", marginTop:"-10px"}}>"People will stare.Make it worth their while"</p>
     <Link to="/dressesCollection">
     <button className="btn FavouriteDresses">Order your Favourite Dresses Now</button>
     </Link>
   

</section>
      </div>
   
  )
}
