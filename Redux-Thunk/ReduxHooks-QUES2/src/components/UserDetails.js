import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getUserData } from '../Redux/userDetail.js/action';


export default function UserDetails() {

  let todo =[], progress =[], done =[];
  const allUser = useSelector(store => store.userDetails.userDetails);
  const userDetails = useSelector(store => store.userLogin.user)
  // console.log("hello user",user[0], "token", user[1]);

  console.log("user", allUser);

  let user = [];
  for( let i = 0; i < allUser.length; i++){
    if( userDetails[1] == allUser[i].token){
      user.push(allUser[i])
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData())
  }, [])


  for( let i = 0; i < user.length;i++){
    if( user[i].status == "Done" ){
      done.push(user[i])
    }else if( user[i].status == "Todo" ){
      todo.push(user[i])
    }else {
      progress.push(user[i])
    }
  }

console.log( "done", done)
console.log( "Todo", todo)
console.log( "progress", progress)
  return (
    <div style={{ width: "1000px", minHeight: "60vh", margin: "8%", border: "10px solid black" }}>
      <h1 style={{ textAlign: "center" }}>User Details</h1>
      <div className='UserDetailsFlexBox'>
        <div className='UserDetailsFlexBoxBox'>
          <h5 style={{ textAlign: "center" }} >Todo</h5>
{
  todo.map((e) => (
    <div>
  <p>Title - {e.title}</p>
    <p>Description - {e.description}</p>
    <p>Date - {e.date}</p>
    <p>Tags - {e.tags.map((elem) =>(
      <ul>
        <li>{elem}</li>
      </ul>
    ))}</p>
    <p>Status - {e.status}</p>
    <hr style={{fontWeight:"900", backgroundColor:"black",color:"black", height:"10px"}} />
      </div>
  
  ))
}
        </div>
        <div className='UserDetailsFlexBoxBox'>
          <h5 style={{ textAlign: "center" }} >In progress</h5>
          {
  progress.map((e) => (
    <div>
  <p>Title - {e.title}</p>
    <p>Description - {e.description}</p>
    <p>Date - {e.date}</p>
    <p>Tags - {e.tags.map((elem) =>(
      <ul>
        <li>{elem}</li>
      </ul>
    ))}</p>
    <p>Status - {e.status}</p>
    <hr style={{fontWeight:"900", backgroundColor:"black",color:"black", height:"10px"}} />
      </div>
  
  ))
}
        </div>
        <div className='UserDetailsFlexBoxBox'>
          <h5 style={{ textAlign: "center" }} >Done</h5>
          {
  done.map((e) => (
    <div>
  <p>Title - {e.title}</p>
    <p>Description - {e.description}</p>
    <p>Date - {e.date}</p>
    <p>Tags - {e.tags.map((elem) =>(
      <ul>
        <li>{elem}</li>
      </ul>
    ))}</p>
    <p>Status - {e.status}</p>
    <hr style={{fontWeight:"900", backgroundColor:"black",color:"black", height:"10px"}} />
      </div>
  
  ))
}
        </div>
      </div>

    </div>

  )
}
