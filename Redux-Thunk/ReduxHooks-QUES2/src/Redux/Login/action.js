import axios from "axios";

//action type

export const loginActions = {
     LOGIN_REQUEST : "LOGIN_REQUEST",
     LOGIN_SUCCESS : "LOGIN_SUCCESS",
    LOGIN_FAILURE : "LOGIN_FAILURE",
}





//action creator

export const loginSuccess = (data, token) => (
    {
        type : loginActions.LOGIN_SUCCESS,
        payload : [data,token]
    }
)
export const loginRequest = () => (
    {
        type : loginActions.LOGIN_REQUEST,

    }
)
export const loginFailure = () => (
    {
        type : loginActions.LOGIN_FAILURE,
      
    }
)

// export const LOGIN = () => (dispatch) => {
//     fetch("https://masai-api-mocker.herokuapp.com/auth/LOGIN").then((d) => d.json()).then(data => {
//         dispatch(LOGINSuccess(data))
//     })
    
 
// }