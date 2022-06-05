import axios from "axios";

//action type

export const registerActions = {
     REGISTER_REQUEST : "REGISTER_REQUEST",
     REGISTER_SUCCESS : "REGISTER_SUCCESS",
    REGISTER_FAILURE : "REGISTER_FAILURE",
}





//action creator

export const registerSuccess = (data) => (
    {
        type : registerActions.REGISTER_SUCCESS,
        payload : data,
    }
)
export const registerRequest = () => (
    {
        type : registerActions.REGISTER_REQUEST,

    }
)
export const registerFailure = () => (
    {
        type : registerActions.REGISTER_FAILURE,
      
    }
)

export const register = () => (dispatch) => {
    fetch("https://masai-api-mocker.herokuapp.com/auth/register").then((d) => d.json()).then(data => {
        dispatch(registerSuccess(data))
    })
    
 
}