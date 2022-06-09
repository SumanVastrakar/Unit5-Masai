import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers";

const rootReducer = combineReducers({
    ecommerceData : productReducer
}
)

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
