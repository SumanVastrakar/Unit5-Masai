import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";

const rootReducer = combineReducers({
 userRegister : registerReducer,
 userLogin : loginReducer

});


export const store = createStore( 
rootReducer,
applyMiddleware(thunk)
)