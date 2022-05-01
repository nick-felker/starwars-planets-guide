import { combineReducers } from "@reduxjs/toolkit";
import  planetReducer  from "./planet";
import peopleReducer from "./people";

const rootReducer = combineReducers({
    planet: planetReducer,
    people: peopleReducer,
})

export default rootReducer;