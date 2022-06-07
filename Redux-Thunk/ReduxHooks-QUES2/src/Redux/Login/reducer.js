import { loginActions } from "./action";

const init = {
    user : [],
    loading : false,
    error : false,
}
export const loginReducer = (store = init, action) => {
    switch(action.type){
        case loginActions.LOGIN_SUCCESS : { 
            return {
         ...store, user : action.payload, loading : false, 
        }}
        case loginActions.LOGIN_SUCCESS : { 
            return {
         ...store, loading : true, error : false,
        }}
        case loginActions.LOGIN_FAILURE : { 
            return {
         ...store, loading : false, error : false
        }}
       default : return store
    }
}