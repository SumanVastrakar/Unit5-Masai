// action type 

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SORT_TODO = "SORT_TODO";
export const FILTER_TODO = "FILTER_TODO";

//action creator

export const addTodo = (data) => {
    return {
        type : ADD_TODO,
        payload : data
    }
}
export const deleteTodo = (data) => {
    return {
        type : ADD_TODO,
        payload : data
    }
}
export const sortTodo = (data) => {
    return {
        type : ADD_TODO,
        payload : data
    }
}
export const filterTodo = (data) => {
    return {
        type : ADD_TODO,
        payload : data
    }
}