import {applyMiddleware,compose, combineReducers, legacy_createStore} from "redux";





import thunk from "redux-thunk";
import{ reducer as reducerdata} from "../redux2/reducer";
import {reducer} from "./reducer";


const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const rootReducer = combineReducers({reducer, reducerdata})
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


export {store};