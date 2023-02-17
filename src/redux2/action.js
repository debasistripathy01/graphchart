import * as types from "./actionTypes";

import axios from "axios";


export const getData = (payload)=>(dispatch)=>{
    // Before success comes Request 
    dispatch({type: types.GET_REAL_DATA_REQUEST});
    return axios.get("http://localhost:8081/temp/", payload).then((r)=>{
        // console.log("Response actionJS:",r.data);
        //Success then dispatch the payload
        dispatch({type : types.GET_REAL_DATA_SUCCESS,payload : r.data})
    }).catch((e)=>{
        // / Error then dispatch error
        dispatch({type : types.GET_REAL_DATA_FAILUER})
    })
}

export const getRealData = (payload)=>(dispatch)=>{
    // Before success comes Request 
    dispatch({type: types.GET_REAL_DATA_REQUEST});
    return axios.get("http://localhost:8081/data/", payload).then((r)=>{
        // console.log("Response actionJS:",r.data);
        //Success then dispatch the payload
        dispatch({type : types.GET_REAL_DATA_SUCCESS,payload : r.data})
    }).catch((e)=>{
        // / Error then dispatch error
        dispatch({type : types.GET_REAL_DATA_FAILUER})
    })
}


