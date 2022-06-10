import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const GET_SINGLE_PRODUCT_REQUEST = "GET_SINGLE_PRODUCT_REQUEST";
export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";
export const GET_SINGLE_PRODUCT_FAILURE = "GET_SINGLE_PRODUCT_FAILURE";

export const ADD_PRODUCT_CART_REQUEST = "ADD_PRODUCT_CART_REQUEST";
export const ADD_PRODUCT_CART_SUCCESS = "ADD_PRODUCT_CART_SUCCESS";
export const ADD_PRODUCT_CART_FAILURE = "ADD_PRODUCT_CART_FAILURE";

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";

export const REMOVE_PRODUCT_CART_REQUEST = "REMOVE_PRODUCT_CART_REQUEST";
export const REMOVE_PRODUCT_CART_SUCCESS = "REMOVE_PRODUCT_CART_SUCCESS";
export const REMOVE_PRODUCT_CART_FAILURE = "REMOVE_PRODUCT_CART_FAILURE";



export const fetchDataRequest = (data) => {
    return {
        type : FETCH_DATA_REQUEST,
        
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type : FETCH_DATA_SUCCESS,
        payload : data

    }
}

export const fetchDataFailure = (data) => {
    return {
        type : FETCH_DATA_FAILURE,
        payload : data,

    }
}

export const fetchData = (payload) => (dispatch) =>{
    dispatch(fetchDataRequest())
    axios.get("/products",{
        params : {
            ...payload,
        }
    })
    .then(d => (
        // console.log(d.data),
        dispatch(fetchDataSuccess(d.data))
      
    ))
    .catch(e => dispatch(fetchDataFailure(e.data)))
} 

///for the single product details

export const getSingleProductRequest = (payload) => {
    return {
        type : GET_SINGLE_PRODUCT_REQUEST,
        payload,
    }
}

export const getSingleProductSuccess = (payload) => {
    return {
        type : GET_SINGLE_PRODUCT_SUCCESS,
        payload 

    }
}

export const getSingleProductFailure = (payload) => {
    return {
        type : GET_SINGLE_PRODUCT_FAILURE,
        payload,

    }
}

export const getSingleProduct = (id) => (dispatch) => {
    axios.get(`products/${id}`).then(d => dispatch(getSingleProductSuccess(d.data)))
    .catch(error => dispatch(getSingleProductFailure(error.data)))
}

export const addProductCartRequest = (data) => {
    return {
        type : ADD_PRODUCT_CART_REQUEST,
        
    }
}

export const addProductCartSuccess = (payload) => {
    return {
        type : ADD_PRODUCT_CART_SUCCESS,
        payload

    }
}

export const addProductCartFailure = (data) => {
    return {
        type : ADD_PRODUCT_CART_FAILURE,
        payload : data,

    }
}

export const addProductCart = (product) => (dispatch) => {
    console.log("product", product)
axios.post("/cart", product)
.then(d => dispatch(addProductCartSuccess(d.data)))
.catch(error => addProductCartFailure(error.data))

}

//for fetching cart data

export const fetchCartRequest = (payload) => {
    return {
        type : FETCH_CART_REQUEST,
        payload
    }
}

export const fetchCartSuccess = (payload) => {
    console.log("action1", payload)
    return {
        type : FETCH_CART_SUCCESS,
        payload 

    }
}

export const fetchCartFailure = (payload) => {
    return {
        type : FETCH_CART_FAILURE,
        payload 

    }
}
export const fetchCart = (payload) => (dispatch) => {
dispatch(fetchCartRequest())
axios.get("/cart").then(d => dispatch(fetchCartSuccess(d.data)))
.then(err => dispatch(fetchCartFailure(err.data)))

}

//for deleting items from the cart

export const delteProductCartRequest = (payload) => {
    return {
        type : REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
}

export const delteProductCartSucess = (payload) => {
    return {
        type : REMOVE_PRODUCT_CART_SUCCESS,
        payload

    }
}

export const delteProductCartFailure = (payload) => {
    return {
        type : REMOVE_PRODUCT_CART_FAILURE,
        payload 

    }
}
export const delteProductCart = (id) => (dispatch) => {
    dispatch(delteProductCartRequest())
    axios.delete(`/cart/${id}`)
    .then(d => dispatch(delteProductCartSucess(d.data)))
    .then(() =>dispatch(fetchCart()))
    .catch(error =>dispatch(delteProductCartFailure(error.data)))
}
