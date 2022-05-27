import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DressnumberContext } from "../../Context/DressnumberContext";

export const PrivateRoutes = ({children}) => {
    const {isAuth} = useContext(DressnumberContext);
    console.log("isAuth of private Route", isAuth)
    if(!isAuth){
        return <Navigate to="/login" return = {true} />
    }
    else {
        return children;
    }
}