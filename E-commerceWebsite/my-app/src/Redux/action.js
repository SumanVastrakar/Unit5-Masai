import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";


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