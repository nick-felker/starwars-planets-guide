import { combineReducers } from "@reduxjs/toolkit";
import  planetReducer  from "./planet";

const rootReducer = combineReducers({
    planet: planetReducer,
})

export default rootReducer;