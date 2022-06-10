import { FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST, 
    FETCH_DATA_SUCCESS,
     GET_SINGLE_PRODUCT_REQUEST,
     GET_SINGLE_PRODUCT_SUCCESS,
     GET_SINGLE_PRODUCT_FAILURE,
     ADD_PRODUCT_CART_REQUEST,
     ADD_PRODUCT_CART_SUCCESS,
     ADD_PRODUCT_CART_FAILURE,
     FETCH_CART_FAILURE,
    FETCH_CART_REQUEST, 
    FETCH_CART_SUCCESS,
    } from "./action"

const initialState = {
    products : [],
    error : "",
    loading : false,
    currentProduct : {},
    cart : []
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
        case GET_SINGLE_PRODUCT_REQUEST : {
            return {
                ...state, 
                error : "",
                loading : true
            }
        }
        case GET_SINGLE_PRODUCT_SUCCESS : {
            
            return {
                ...state,
                currentProduct : payload,
                error : "",
                loading : false
            }
        }
        case GET_SINGLE_PRODUCT_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
        // for add to  cart functiuonality

        case ADD_PRODUCT_CART_REQUEST : {
            return {
                ...state, 
                error : "",
                loading : true
            }
        }
        case ADD_PRODUCT_CART_SUCCESS : {
            
            return {
                ...state,
              cart : [...state.cart, payload],
                error : "",
                loading : false
            }
        }
        case ADD_PRODUCT_CART_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
        //for fetching up the cart
        case FETCH_CART_REQUEST : {
            return {
                ...state, 
                error : "",
                loading : true
            }
        }
        case FETCH_CART_SUCCESS : {
            console.log("cart reducer", payload)
            return {
                ...state,
                cart : [...payload],
           
                error : "",
                loading : false
            }
        }
        case FETCH_CART_FAILURE : {
            return {
                ...state,
                error : payload,
                loading : false
            }
        }
        default : return state; 
    }
}