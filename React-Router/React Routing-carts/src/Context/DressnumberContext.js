import { Navigate, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { createContext, useState } from "react";
export const DressnumberContext = createContext();

export const DressnumberContextProvider = ({children})=>{
const [num, setNum] = useState(0);
const [cart, setCart] = useState(0)
const [isAuth, setIsAuth] = useState(false);
const navigate = useNavigate();
const [userdata, setUserData] = useState({
    email : null,
    password : null,
});

const handleAuth = (state) => {
    setIsAuth(state);
}

useEffect(() =>{
    fetch("https://reqres.in/api/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(userdata)
    })
        .then((res) => res.json())
        .then(data =>{
            if(data.token){
                setIsAuth(true);
                console.log(userdata, isAuth) 
                console.log("isAuth", isAuth)
         return navigate("/")
               
            }
            else {
                alert("Enter valid email and password")
            }
        })
},[userdata])






const handleChange=(state) =>{
    setNum(state);

}
const carthandle=(inc)=>{
    setCart(cart+inc)
}

return(
    <DressnumberContext.Provider value={{num, handleChange,cart,carthandle, userdata, setUserData,isAuth, setIsAuth}}>{children}</DressnumberContext.Provider>
)
}

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }