import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanetStateType } from "../../../types";
import { PlanetType } from "../../../types";

const initialState:PlanetStateType = {
    showPlanetDetailsFlag: false,
    planetId: '',   
}


interface ChangePlanetDetailsFlagType{
    showPlanetDetailsFlag: boolean;   
}

interface ChangePlanetsDataType{
    planetsData: PlanetType[];
}


export const planetReducer = createSlice({
    name: 'Planet',
    initialState,
    reducers: {
        changePlanetDetailsFlag: (state, {payload}: PayloadAction<ChangePlanetDetailsFlagType> ) => {
            return {...state, ...payload};
        },
        changePlanetsData: (state, {payload}: PayloadAction<ChangePlanetsDataType> ) => {
            return {...state, ...payload};
        },
        changeCurrentPlanetData: (state, {payload}) => {
            state.currentPlanetData = payload;
        },
        changePlanetId: (state, {payload}) => {
            return {...state, ...payload};
        },
    }
})


export const { changePlanetsData, changePlanetDetailsFlag, changeCurrentPlanetData, changePlanetId } = planetReducer.actions;
export default planetReducer.reducer;