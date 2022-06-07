import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { register } from '../Redux/Register/action';
import { store } from '../Redux/store';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(store => store.userRegister.user)
  console.log(store.getState())
  console.log(users)
    const[form, setForm] = useState({
  name : "",
  email : "",
  password : "",
  username :"",
  mobile : "",
  description : "",
})
    const submitHandle = (e) => {
       e.preventDefault();
       const payload = {
        name : form.name,
        email : form.email,
        password : form.password,
        username :form.username,
        mobile : form.mobile,
        description : form.description,

       }
       fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(payload),
       }).then(res => res.json()).then(data => {
        console.log("response",data)
        if(data.error == false){
          navigate("/login", {replace:true})
        }else {
          alert("User Already Exist")
        }
       })

    }

    useEffect(() => {
      // dispatch(register());
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value,
        })
console.log(form)
    }
  return (
    <div>
  <h1>Register</h1>
  <form onSubmit={submitHandle}>
          <input style={{width:"300px", height:"40px", margin :"10px"}} value ={form.name} type="text" name="name" onChange={handleChange} placeholder="Name" />
          <br/>
          <input style={{width:"300px", height:"40px", margin :"10px"}} type="email" value ={form.email} name="email" onChange={handleChange} placeholder="Email" />
          <br/>
          <input style={{width:"300px", height:"40px", margin :"10px"}} type="password" value ={form.password} name="password" onChange={handleChange} placeholder="Password" />
          <br/>
          <input style={{width:"300px", height:"40px", margin :"10px"}} type="text" value ={form.username} name="username"  onChange={handleChange}placeholder="Username" />
          <br/>
          <input style={{width:"300px", height:"40px", margin :"10px"}} type="number" value ={form.mobile} name="mobile" onChange={handleChange} placeholder="Number" />
          <br/>
          <input style={{width:"300px", height:"40px", margin :"10px"}} type="text" value ={form.description} name="description" onChange={handleChange} placeholder="Description" />
          <br />
          <input type="submit" value="Submit" />
        </form>

    </div>
  )
}


//username -->User username :- Suman Vastrakar
//password --> 123456