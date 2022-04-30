import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanetStateType } from "../../../types";
import { PlanetType } from "../../../types";

const initialState:PlanetStateType = {
    showPlanetDetailsFlag: false,
}


interface ChangePlanetRequestType{
    detailPlanetRequest: string;
}

interface ChangePlanetDetailsFlagType{
    showPlanetDetailsFlag: boolean;   
}

interface changePlanetsDataType{
    planetsData: PlanetType[];
}


export const planetReducer = createSlice({
    name: 'Planet',
    initialState,
    reducers: {
        changePlanetRequest: (state, {payload}: PayloadAction<ChangePlanetRequestType>) => {
            return {...state, ...payload};
        },
        changeShowPlanetDetailsFlag: (state, {payload}: PayloadAction<ChangePlanetDetailsFlagType> ) => {
            return {...state, ...payload};
        },
        changePlanetsData: (state, {payload}: PayloadAction<PlanetType> ) => {
            return {...state, ...payload};
        },
    }
})


export const { changePlanetRequest, changePlanetsData, changeShowPlanetDetailsFlag } = planetReducer.actions;
export default planetReducer.reducer;