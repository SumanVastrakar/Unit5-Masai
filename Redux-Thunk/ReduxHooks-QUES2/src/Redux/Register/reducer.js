import { registerActions } from "./action";

const init = {
    user : [],
    loading : false,
    error : false,
}
export const registerReducer = (store = init, action) => {
    switch(action.type){
        case registerActions.REGISTER_SUCCESS : { 
            return {
         ...store, user : action.payload, loading : false, 
        }}
        case registerActions.REGISTER_SUCCESS : { 
            return {
         ...store, loading : true, error : false,
        }}
        case registerActions.REGISTER_FAILURE : { 
            return {
         ...store, loading : false, error : false
        }}
       default : return store
    }
}