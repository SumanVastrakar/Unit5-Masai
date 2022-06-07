import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';

export default function Summary() {
  const user = useSelector(store => store.userDetails.userDetails);
  let todo =[], progress =[], done =[];

  for( let i = 0; i < user.length;i++){
    if( user[i].status == "Done" ){
      done.push(user[i])
    }else if( user[i].status == "Todo" ){
      todo.push(user[i])
    }else {
      progress.push(user[i])
    }
  }

  return (
    <div style={{width:"1000px", minHeight:"60vh",margin:"8%", border:"10px solid black"}}>
    <h1 style={{textAlign: "center"}}>Summary</h1>
  <h1 style={{width :"400px", border : "2px solid black", height:"60px", textAlign:"center", margin:"10px"}}>Todo : {todo.length}</h1>
  <h1 style={{width :"400px", border : "2px solid black", height:"60px", textAlign:"center", margin:"10px"}}>Done : {done.length}</h1>
  <h1 style={{width :"400px", border : "2px solid black", height:"60px", textAlign:"center", margin:"10px"}}>progress : {progress.length}</h1>

  </div>
  )
}
