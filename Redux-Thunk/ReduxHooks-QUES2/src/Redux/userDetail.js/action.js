// action types 

export const userActions = {
    USER_DETAILS_REQUEST : "USER_DETAILS_REQUEST",
    USER_DETAILS_SUCCESS : "USER_DETAILS_SUCCESS",
    USER_DETAILS_FAILURE : "USER_DETAILS_FAILURE",
}

//action creator
export const userRequest = () => ({
    type: userActions.USER_DETAILS_REQUEST,
  });
  
  export const userSuccess = (data) => ({
    type: userActions.USER_DETAILS_SUCCESS,
    payload: data,
  });
  
  export const userFailure = () => ({
    type: userActions.USER_DETAILS_FAILURE,
  });
  export const getUserData = () => async(dispatch) => {
   fetch("http://localhost:8080/users").then((d) => d.json()).then(data => {
    dispatch(userSuccess(data))
   })
  }

  
// export const getTodos = () => async (dispatch) =>{
//     fetch("http://localhost:8080/todo").then((d) =>d.json()).then(data =>{
//   dispatch(addTodo(data))
// })
// }