import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PeopleStateType, PeopleType, PeopleArrTypeData } from "../../../types";

const initialState:PeopleStateType = {
    womenDisplayFlag: true,
    menDisplayFlag: true,
    peopleDataArr: [],
}

interface ChangeDisplayFlagType{
    womenDisplayFlag?: boolean;
    menDisplayFlag?: boolean;
}

interface ChangePeopleDataType{
    peopleData: PeopleType;
    planetId: string;
}

export const peopleReducer = createSlice({
    name: 'People',
    initialState,
    reducers: {
        changeSexDisplayFlag: (state, {payload}: PayloadAction<ChangeDisplayFlagType>) => {
            return {...state, ...payload};
        },
        changePeopleData: (state, {payload}:PayloadAction<ChangePeopleDataType> ) => {
            
            let buffPeopleData:PeopleArrTypeData = {
                peopleData: payload.peopleData,
                planetId: payload.planetId,
            };
              
                state.peopleDataArr.push(buffPeopleData);
        },
        clearPeopleData: (state, {payload}: PayloadAction<string>) => { 
            state.peopleDataArr = state.peopleDataArr.filter((elem:PeopleArrTypeData)=> elem.planetId !== payload)
        }
    }
})


export const { changeSexDisplayFlag, changePeopleData, clearPeopleData } = peopleReducer.actions;
export default peopleReducer.reducer;