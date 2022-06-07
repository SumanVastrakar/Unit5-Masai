import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";
import { todosReducer } from "./TodoAdd/reducer";
import { userDetailsReducer } from "./userDetail.js/reducer";

const rootReducer = combineReducers({
    userRegister: registerReducer,
    userLogin: loginReducer,
      todos: todosReducer,
      userDetails : userDetailsReducer
});


export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)