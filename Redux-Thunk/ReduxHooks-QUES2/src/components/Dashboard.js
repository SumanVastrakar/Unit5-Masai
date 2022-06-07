import React  from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../App.css"
import TodoAdd from './TodoAdd'
import UserDetails from './UserDetails'
import Summary from './Summary'

export default function Dashboard() {
  const navigate = useNavigate();
    const [info, setInfo] = useState({})
    const [createElement, setCreateElement] = useState(true);
    const [summary, setSummary] = useState(false)
    const[userDetail, setuserDetails] = useState(false)
    const user = useSelector(store => store.userLogin.user)
    console.log("hello user",user[0], "token", user[1]);
    

let getUser = async(username, token) => {
    let data = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers : {
            'Content-Type' : "application/json",
            "Authorization" : `Bearer ${token}`,
        },
    });
    data = await data.json();
    console.log(data);
    setInfo(data)

}

useEffect(() =>{
    getUser(user[0],user[1]);
},[])


  return (
    <div className='routeAdjustment'>


    <div className='sidebarNav'>
 
      <h5>Welcome,<span style={{color:"green", fontSize:"30px"}}>{info.name}</span></h5>
      {/* <h5>User Email :- {info.email}</h5> */}
      {/* <h2>User password :- {data.password}</h2> */}
      {/* <h2>User username :- {info.username}</h2>
      <h2>User Mobile No. :- {info.mobile}</h2>
      <h2>User Description :- {info.description}</h2> */}
      <button style={{marginTop : "300px"}} onClick={() =>{
navigate("/", {relace:true})
      }}>Logout</button>
    <br />
      <button  style={{marginTop : "10px"}} onClick={() =>{
setCreateElement(true);
setSummary(false)
setuserDetails(false)
      }}>create New Task</button>
 
    <br />
      <button  style={{marginTop : "10px"}} onClick={() =>{
setCreateElement(false);
setSummary(false)
setuserDetails(true)
      }}>View Details</button>
 
    <br />
      <button  style={{marginTop : "10px"}} onClick={() =>{
setCreateElement(false);
setSummary(true)
setuserDetails(false)
      }}>Summary</button>
 
   
    </div>
    <div>
{
  createElement ? (<TodoAdd/>) : (
    userDetail ? (<UserDetails/>) : (
      summary ? (<Summary/>) : ('')
    )
  )
}
    </div>
    </div>
  )
}
