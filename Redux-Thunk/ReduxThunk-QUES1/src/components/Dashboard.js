import React  from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useEffect, useState } from 'react'

export default function Dashboard() {
    const [info, setInfo] = useState({})
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
    <div style={{textAlign:"center"}}>
      <h2>User Name :- {info.name}</h2>
      <h2>User Email :- {info.email}</h2>
      {/* <h2>User password :- {data.password}</h2> */}
      <h2>User username :- {info.username}</h2>
      <h2>User Mobile No. :- {info.mobile}</h2>
      <h2>User Description :- {info.description}</h2>
    </div>
  )
}
