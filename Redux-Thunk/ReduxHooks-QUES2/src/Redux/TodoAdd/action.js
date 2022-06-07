// action types 

export const todosActions = {
    ADD_TODO_REQUEST : "ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS : "ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE : "ADD_TODO_FAILURE",
}

//action creator
export const getTodoRequest = () => ({
    type: todosActions.ADD_TODO_REQUEST,
  });
  
  export const getTodoSuccess = (data) => ({
    type: todosActions.ADD_TODO_SUCCESS,
    payload: data,
  });
  
  export const getTodoFailure = () => ({
    type: todosActions.ADD_TODO_FAILURE,
  });
  export const postTodo = (data) => async(dispatch) => {
    fetch("http://localhost:8080/users",{
        method : "POST",
        headers : {
            "content-type" : "application/json",
        },
        body :JSON.stringify(data)
    })
    dispatch(getTodoSuccess(data))
  }

  
// export const getTodos = () => async (dispatch) =>{
//     fetch("http://localhost:8080/todo").then((d) =>d.json()).then(data =>{
//   dispatch(addTodo(data))
// })
// }