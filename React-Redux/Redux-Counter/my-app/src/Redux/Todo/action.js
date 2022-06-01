//action types 

export const ADD_TODOS = "ADD_TODOS";


//action creator 

export const addTodos = (data) =>{
    return {
        type : ADD_TODOS,
        payload : data,
    }
}
