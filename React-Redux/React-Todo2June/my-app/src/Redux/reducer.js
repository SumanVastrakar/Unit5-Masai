
import { ADD_TODO, DELETE_TODO, SORT_TODO, FILTER_TODO  } from "./action";

const initialState = {
    todos : [],
}

export const TodoReducers = (store = initialState, {type, payload}) => {
      switch(type){
        case ADD_TODO : return {
            ...store, todos : payload,
        };
        case DELETE_TODO : return {
            ...store, todos : store.todos.filter((e) => e.id !== payload)

        };
        case SORT_TODO : return {
            ...store, todos : [...store.todos].sort((a,b) => a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1  : 0)


        };
        case FILTER_TODO : return {

        };
        default : return store
      }
}