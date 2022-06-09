import { FETCH_DATA_FAILURE,FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./action"

const initialState = {
    products : [],
    error : "",
    loading : false
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_DATA_REQUEST : {
            return {
                ...state, 
                error : "",
                loading : true
            }
        }
        case FETCH_DATA_SUCCESS : {
            
            return {
                ...state,
                products : payload,
                error : "",
                loading : false
            }
        }
        case FETCH_DATA_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
        default : return state; 
    }
}