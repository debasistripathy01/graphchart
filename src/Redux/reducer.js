import * as types from "./actionTypes";


const initialState={
    data:[],
    realData: [],
    isLoading: false,
    isError: false,

}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.GET_DATA_REQUEST:
            return {...state, isLoading:true};
        
        case types.GET_DATA_SUCCESS:
            return {...state, isLoading:false, data:payload};

        case types.GET_DATA_FAILUER:
            return {...state, isLoading:false, isError:true};



        case types.GET_REAL_DATA_REQUEST:
            return {...state, isLoading: true};
        case types.GET_REAL_DATA_SUCCESS:
            return {...state, isLoading: false, realData: payload }
        case types.GET_REAL_DATA_FAILUER:
            return {...state, isLoading: false, isError: true}

        default:
            return state;
    }

}

export {reducer};