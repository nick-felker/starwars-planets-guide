
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlanetRequestType{
    request: string;
}

const initialState:PlanetRequestType = {
    request: '',
}

interface ChangePlanetRequestType{
    request: string;
}


export const planetReducer = createSlice({
    name: 'Planet',
    initialState,
    reducers: {
        changeRequest: (state, {payload}: PayloadAction<ChangePlanetRequestType>) =>{
            return {...state, ...payload};
        },
    }
})

export const { changeRequest } = planetReducer.actions;
export default planetReducer.reducer;