import { ADD_TODOS } from "./action";

//Store: {counter : 0}
const init = {todos : []}
export const todoReducer = (store = init, {type, payload}) =>{
    switch(type){
        case ADD_TODOS : return {...store,todos: payload}
        default : return store;
}
}