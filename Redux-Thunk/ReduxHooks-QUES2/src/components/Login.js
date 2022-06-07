import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginSuccess } from '../Redux/Login/action';

import { store } from '../Redux/store';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(store => store.userLogin.user)
    console.log(store.getState())
    console.log(users)
    const [form, setForm] = useState({

        password: "",
        username: "",

    })
    const submitHandle = (e) => {
        e.preventDefault();
        const payload = {

            password: form.password,
            username: form.username,


        }
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.token != null) {
                dispatch(loginSuccess(form.username, data.token))
                navigate("/dashboard", {replace:true})
            }
        })
    }

    useEffect(() => {
        // dispatch(register());
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
        console.log(form)
    }
    return (
        <div>
            <h1>login</h1>
            <form onSubmit={submitHandle}>


                <input style={{ width: "300px", height: "40px", margin: "10px" }} type="text" value={form.username} name="username" onChange={handleChange} placeholder="Username" />
                <br />
                <input style={{ width: "300px", height: "40px", margin: "10px" }} type="password" value={form.password} name="password" onChange={handleChange} placeholder="Password" />
                <br />

                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}
