import { createContext, useState } from "react";

 export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [data, setData] = useState(null);


    // const data = {
    //     "email": "eve.holt@reqres.in",
    //     "password": "cityslicka"
    // }

    //if user is logged in and i want to toggle the auth means logging out of the system
    const toggleAuth = () => {
        setIsAuth(false);
        setToken(null);
        // setData(null)
     
 
    }

      //if the user is not logged in i will send the post request for token in the reqres 
  
    if( data != null){
        fetch("https://reqres.in/api/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data),
        }).then((res) => res.json()).then(data => {
            setIsAuth(true)
            setToken(data.token)
           
        })
    }
    return(
        <AuthContext.Provider value={{isAuth,setIsAuth,setData,data, toggleAuth, token}}>{children}</AuthContext.Provider>
    )


}