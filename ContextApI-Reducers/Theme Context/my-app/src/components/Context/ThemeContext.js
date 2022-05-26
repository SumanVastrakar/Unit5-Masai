import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    const [mystyle, setMystyle] = useState({
        color : "black",
        backgroundColor : "white"
    })

    const [btntext, setbtntext] = useState("Enable dark Mode")
    const toggleStyle=()=>{
              if(mystyle.color==="white"){
                  setMystyle({
                      color:"black",
          backgroundColor:"white",
  
                  })
                  setbtntext("Enable dark Mode")
              }
              else{
                  setMystyle({
                      color:"white",
          backgroundColor:"black"
                  })
                  setbtntext("Enable Light Mode")
              }
          }

    return(
        <ThemeContext.Provider value={{mystyle, btntext, toggleStyle }}>{children}</ThemeContext.Provider>
    )
}
