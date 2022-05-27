import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { DressnumberContext } from '../Context/DressnumberContext'
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";


export default function Navbar() {
    const {cart, isAuth, setIsAuth} = useContext(DressnumberContext)
    return (
        <div>
            <nav id="navbar">
                <div id="logo">
                    <a href="https://www.linkedin.com/in/suman-vastrakar/">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGFLEeuN_2EAA/profile-displayphoto-shrink_100_100/0/1647781088738?e=1655337600&v=beta&t=E-RO1GdNMvws7--yWpDC4A_AkCKg---1eteeUbV8g0M"
                            style={{ width: "80px", borderRadius: "50%" }} alt="human" />
                    </a>

                </div>
                <ul>
                    <li className="item"><Link to="/">
                        <pre>Home</pre>
                    </Link></li>
                    <li className="item"><a href="/CategorySection">
                        <pre>Services</pre>
                    </a></li>
                    <li className="item"><a href="#">
                        <pre>About Us</pre>
                    </a></li>
                    <li className="item"><a href="#">
                        <pre>Contact Us</pre>
                    </a></li>
                   
                </ul>
                <div className="cartImag item">
                    <h3 style={{marginBottom:"0px", marginLeft:"30px"}}>{cart}</h3>
                      <BsFillCartFill style={{color:"white", fontSize:"40px", marginTop:"-10px", marginLeft:"17px"}}/>
                      {/* <FaUserAlt  style={{color:"white", fontSize:"35px", marginLeft:"50px", marginBottom:"10px"}}/> */}

                      {
                        isAuth ? (
                            <button onClick={() =>{ 
                                setIsAuth(false)
                            }} style={{ fontSize:"22px",width:"100px", marginLeft:"50px", marginBottom:"10px"}}>Logout</button>
                        ):(
                            <Link to="/login">
                            <button style={{ fontSize:"22px",width:"100px", marginLeft:"50px", marginBottom:"10px"}}>Login</button>
                            </Link>
                        )
                      }
                     
          
                  
         
        </div>

    
            </nav>

        </div>
    )
}
