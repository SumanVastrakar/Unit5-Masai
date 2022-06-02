import {legacy_createStore as createStore, combineReducers} from "redux";
import { TodoReducers } from "./reducer";


 const rootReducer = combineReducers({
    todos : TodoReducers,
})

export const store = createStore(
rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)