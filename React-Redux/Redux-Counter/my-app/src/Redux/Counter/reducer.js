import { ADD_COUNT, SUB_COUNT } from "./action";

const initialstate = {
  counter : 0,
}

export const counterReducer = (store = initialstate, {type, payload}) => {
     switch(type){
        case ADD_COUNT : return {
            ...store, counter : store.counter + payload
        }
        case SUB_COUNT : 
     if(store.counter >= 1 ){
            return {
                ...store, counter : store.counter - payload
            }
        }
      
        default : return store
     }
}