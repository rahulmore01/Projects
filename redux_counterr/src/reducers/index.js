// indexe.js is to import all the reducers like "upDown" and we can then import the index.js to use all the reducers

import changeTheNumber from "./upDown"
// standerd syntax 
import {combineReducers} from "redux"
const rootReducer = combineReducers({
    changeTheNumber
    // ,
    // ucan add other reducers here

})
// root reducer means it has all the states of the application
export default rootReducer